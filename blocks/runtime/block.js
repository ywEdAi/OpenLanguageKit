/* Language building blocks — shared runtime. No dependencies; works from file:// and inside an iframe.
 *
 *   const B = KTBlock.init({ id: 'sound-grid', primitive: 'prim:sound-spelling-blend', title: '音节表' });
 *   B.params.get('set')                          // URL parameters: set, mode, variant, kc, focus
 *   B.emit('select', { item: 'ka' })             // evidence event (asset-library vocabulary)
 *   B.hint('ka'); B.reveal('ka')                 // marks the item as assisted
 *   B.attempt('ka', { correct: true, response }) // keeps the FIRST attempt; later ones are retries
 *   B.speak('か', 'ja-JP')                       // browser speech synthesis (playback only, never scoring)
 *   B.lang                                       // interface language: 'zh' | 'en'
 *   B.L('再听', 'Listen again')                  // pick an interface string
 *   B.t(cell, 'note')                            // pick a data-pack field: cell.noteEn in English if present, else cell.note
 *
 * Interface language (the language of instructions, not the language being taught):
 *   ?lang=en|zh in the block URL → localStorage 'atlas-lang' (set by the OpenLangKit site switch; read only, in
 *   try/catch) → navigator.language (zh* → zh, anything else → en). <html lang> is set to match.
 * Data packs carry English next to the Chinese as parallel fields: "<field>En" beside "<field>" (titleEn, noteEn,
 * reviewEn …; arrays and maps are parallel too), and "en" beside a gloss stored under "zh". Missing English falls
 * back to the Chinese. Text in the language being taught is never translated.
 *
 * Every event is also posted to the parent window as {source: 'kt-block', kind, ...} so a host page
 * (the workspace, or your own app) can show evidence live without reaching into the block.
 */
(function (global) {
  'use strict';
  var EVENTS = ['view', 'select', 'highlight', 'drag', 'drop', 'connect', 'disconnect', 'reorder', 'submit',
    'revise', 'request_hint', 'reveal', 'compare', 'explain', 'retry', 'complete'];
  var allowed = new Set(EVENTS);

  /* ---- interface language ---- */
  function detectLang() {
    var m = /[?&]lang=(en|zh)(?:&|#|$)/.exec((global.location && global.location.search) || '');
    if (m) return m[1];
    try { var s = global.localStorage.getItem('atlas-lang'); if (s === 'en' || s === 'zh') return s; } catch (e) { /* storage blocked */ }
    return /^zh/i.test((global.navigator && global.navigator.language) || '') ? 'zh' : 'en';
  }
  var LANG = detectLang(), EN = LANG === 'en';
  try { global.document.documentElement.lang = EN ? 'en' : 'zh-CN'; } catch (e) { /* no document */ }
  /** Interface string: L('中文', 'English'). A missing English text falls back to the Chinese. */
  function L(zh, en) { return EN && en != null ? en : zh; }
  /** Data-pack field in the interface language: obj[key + 'En'] (or obj.en when key is 'zh') in English mode,
   *  falling back to obj[key]. Parallel arrays and maps fall back item by item. */
  function t(obj, key) {
    if (!obj) return undefined;
    var zh = obj[key];
    if (!EN) return zh;
    var en = obj[key === 'zh' ? 'en' : key + 'En'];
    if (en === null || en === undefined) return zh;
    if (Array.isArray(zh) && Array.isArray(en)) return zh.map(function (v, i) { return en[i] === null || en[i] === undefined ? v : en[i]; });
    if (zh && typeof zh === 'object' && typeof en === 'object') {
      var out = {};
      Object.keys(zh).forEach(function (k) { out[k] = en[k] === null || en[k] === undefined ? zh[k] : en[k]; });
      return out;
    }
    return en;
  }

  function post(msg) {
    msg.source = 'kt-block';
    try { if (global.parent && global.parent !== global) global.parent.postMessage(msg, '*'); } catch (e) { /* cross-origin host */ }
  }

  function storage(key, value) {
    try {
      if (value === undefined) return JSON.parse(global.localStorage.getItem(key) || 'null');
      global.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { return null; }
  }

  function init(meta) {
    var params = new URLSearchParams(global.location.search);
    var variant = params.get('variant') || storage('kt-block-variant') || 'adult';
    document.documentElement.dataset.variant = variant;
    var events = [];
    var items = {};          // itemId -> {first, attempts, assisted, independentCorrect}
    var listeners = [];

    function item(id) {
      return items[id] || (items[id] = { id: id, first: null, attempts: 0, assisted: false, correct: false });
    }

    var api = {
      meta: meta,
      params: params,
      variant: variant,
      kc: params.get('kc'),
      lang: LANG,
      L: L,
      t: t,
      emit: function (type, payload) {
        if (!allowed.has(type)) throw new Error('Unsupported evidence event: ' + type);
        var ev = { block: meta.id, primitive: meta.primitive, kc: api.kc, event_type: type, t: Date.now(), payload: payload || {} };
        events.push(ev);
        listeners.forEach(function (fn) { fn(ev); });
        post({ kind: 'event', event: ev, summary: api.summary() });
        return ev;
      },
      on: function (fn) { listeners.push(fn); },
      hint: function (id, level) {
        item(id).assisted = true;
        return api.emit('request_hint', { item: id, level: level || 1 });
      },
      reveal: function (id) {
        item(id).assisted = true;
        return api.emit('reveal', { item: id });
      },
      /** Record an answer. Only the first attempt per item counts as the first attempt; it is never overwritten.
       *  result: {correct, response, selfReport?}. selfReport = the learner judged themselves (e.g. recall then flip);
       *  it is counted separately and never as independent correct. */
      attempt: function (id, result) {
        var it = item(id);
        it.attempts += 1;
        var first = it.first === null;
        if (first) it.first = { correct: !!result.correct, response: result.response, assisted: it.assisted, selfReport: !!result.selfReport, t: Date.now() };
        if (result.correct) it.correct = true;
        api.emit(first ? 'submit' : 'retry', { item: id, correct: !!result.correct, response: result.response, assisted: it.assisted, selfReport: !!result.selfReport, firstAttempt: first });
        return it;
      },
      /** One status per item, derived from the first attempt, so a block's colours and the evidence summary agree:
       *  null | 'revealed' (answer shown before any attempt) | 'self-yes' | 'self-no' | 'wrong' (first attempt wrong,
       *  whatever happened after) | 'assisted' (first attempt right after a hint/reveal) | 'independent'. */
      status: function (id) {
        var it = items[id];
        if (!it) return null;
        if (!it.first) return it.assisted ? 'revealed' : null;
        if (it.first.selfReport) return it.first.correct ? 'self-yes' : 'self-no';
        if (!it.first.correct) return 'wrong';
        return it.first.assisted ? 'assisted' : 'independent';
      },
      items: function () { return Object.keys(items).map(function (k) { return items[k]; }); },
      summary: function () {
        var st = api.items().map(function (i) { return api.status(i.id); });
        var n = function (k) { return st.filter(function (x) { return x === k; }).length; };
        return {
          attempted: n('independent') + n('assisted') + n('wrong'),
          independentCorrect: n('independent'),
          assistedCorrect: n('assisted'),
          firstWrong: n('wrong'),
          selfReported: n('self-yes') + n('self-no'),
          selfYes: n('self-yes'),
          revealedOnly: n('revealed'),
          eventCount: events.length
        };
      },
      events: function () { return events.slice(); },
      reset: function () { items = {}; post({ kind: 'reset' }); },
      setVariant: function (v) {
        api.variant = v;
        document.documentElement.dataset.variant = v;
        storage('kt-block-variant', v);
      },
      speak: speak,
      speakSequence: speakSequence,
      /** True only if a voice for this language is installed (voices load asynchronously; false before they arrive). */
      canSpeak: function (lang) { if (!('speechSynthesis' in global)) return false; loadVoices(); return !!pickVoice(lang); },
      store: storage
    };
    post({ kind: 'ready', meta: meta, params: Object.fromEntries(params), lang: LANG });
    return api;
  }

  /* ---- speech: playback only ---- */
  var voices = [];
  function loadVoices() { try { voices = global.speechSynthesis.getVoices(); } catch (e) { voices = []; } }
  if ('speechSynthesis' in global) {
    loadVoices();
    global.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice(lang) {
    if (!voices.length) return null;
    var exact = voices.filter(function (v) { return v.lang.replace('_', '-') === lang; });
    var near = voices.filter(function (v) { return v.lang.slice(0, 2) === lang.slice(0, 2); });
    var pool = exact.length ? exact : near;
    return pool.find(function (v) { return v.localService; }) || pool[0] || null;
  }
  /** Speak text. `opts.audio` (a URL to a recording) always wins over synthesis.
   *  Returns false if nothing can play, otherwise a Promise that resolves when playback ends
   *  (so blocks can chain "slow, then normal" without guessing timings). */
  function speak(text, lang, opts) {
    opts = opts || {};
    if (opts.audio) {
      var a = new Audio(opts.audio);
      if (opts.rate) a.playbackRate = opts.rate;
      return new Promise(function (resolve) { a.onended = a.onerror = function () { resolve(); }; a.play().catch(function () { resolve(); }); });
    }
    if (!('speechSynthesis' in global)) return false;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    var v = pickVoice(lang);
    if (v) u.voice = v;
    u.rate = opts.rate || (document.documentElement.dataset.variant === 'child' ? 0.75 : 0.9);
    if (!opts.queue) global.speechSynthesis.cancel();
    var done = new Promise(function (resolve) { u.onend = u.onerror = function () { resolve(); }; });
    global.speechSynthesis.speak(u);
    return done;
  }
  /** Speak several items one after another: [{text, rate, audio, pause}] → Promise. */
  function speakSequence(items, lang) {
    if (!('speechSynthesis' in global) && !items.some(function (i) { return i.audio; })) return false;
    if ('speechSynthesis' in global) global.speechSynthesis.cancel();
    return items.reduce(function (p, it) {
      return p.then(function () {
        var r = speak(it.text, lang, { rate: it.rate, audio: it.audio, queue: true });
        return Promise.resolve(r).then(function () { return new Promise(function (res) { setTimeout(res, it.pause || 0); }); });
      });
    }, Promise.resolve());
  }

  /* ---- small DOM helpers shared by blocks ---- */
  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
      else if (k === 'dataset') Object.assign(el.dataset, v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    [].concat(children || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    });
    return el;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /** Standard chrome: header with title, mode tabs, child/adult switch; evidence drawer at the bottom. */
  function chrome(B, opts) {
    var header = h('header', { class: 'kb-head' }, [
      h('div', { class: 'kb-title' }, [h('h1', { text: opts.title }), opts.subtitle ? h('p', { text: opts.subtitle }) : null]),
      h('div', { class: 'kb-tools' }, [
        opts.modes ? h('div', { class: 'kb-modes', role: 'tablist' }, opts.modes.map(function (m) {
          return h('button', { role: 'tab', 'aria-selected': m.id === opts.mode ? 'true' : 'false', dataset: { mode: m.id },
            onclick: function () { opts.onMode(m.id); } }, m.label);
        })) : null,
        h('label', { class: 'kb-variant' }, [
          h('input', { type: 'checkbox', checked: B.variant === 'child', onchange: function (e) { B.setVariant(e.target.checked ? 'child' : 'adult'); if (opts.onVariant) opts.onVariant(); } }),
          L(' 儿童版', ' Child version')
        ])
      ])
    ]);
    var log = h('ol', { class: 'kb-log' });
    var sum = h('p', { class: 'kb-sum' });
    var drawer = h('details', { class: 'kb-evidence' }, [h('summary', { text: L('学习证据', 'Learning evidence') }), sum, log]);
    function render() {
      var s = B.summary();
      sum.textContent = EN
        ? 'First attempts: ' + s.attempted + ' (independent correct ' + s.independentCorrect + ', assisted correct ' + s.assistedCorrect + ', wrong ' + s.firstWrong + '). ' +
          (s.selfReported ? 'Self-rated: ' + s.selfReported + ' (rated as right: ' + s.selfYes + '), not counted as attempts. ' : '') + (s.revealedOnly ? 'Answer shown without an attempt: ' + s.revealedOnly + '.' : '')
        : '第一次作答 ' + s.attempted + ' 题：独立答对 ' + s.independentCorrect + '，提示后答对 ' + s.assistedCorrect + '，第一次答错 ' + s.firstWrong + '。' +
          (s.selfReported ? '自评 ' + s.selfReported + ' 题（自认为想对 ' + s.selfYes + '），不算作答。' : '') + (s.revealedOnly ? '没作答直接看答案 ' + s.revealedOnly + ' 题。' : '');
    }
    B.on(function (ev) {
      log.insertBefore(h('li', {}, [h('code', { text: ev.event_type }), ' ', JSON.stringify(ev.payload)]), log.firstChild);
      if (log.children.length > 60) log.removeChild(log.lastChild);
      render();
    });
    render();
    return { header: header, drawer: drawer, setMode: function (id) {
      header.querySelectorAll('[data-mode]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.mode === id ? 'true' : 'false'); });
    } };
  }

  global.KTBlock = { init: init, events: EVENTS, lang: LANG, L: L, t: t, h: h, shuffle: shuffle, chrome: chrome, speak: speak, speakSequence: speakSequence };
  global.KT_DATA = global.KT_DATA || {};
})(typeof window !== 'undefined' ? window : globalThis);

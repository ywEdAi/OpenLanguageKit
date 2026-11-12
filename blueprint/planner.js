/* Blueprint planner: a learner profile -> a course plan an app can be built from.
 * Runs in the browser (index.html) and in Node (blueprint/plan.js); both produce the same blueprint.
 *
 *   const planner = KTPlanner({ curriculum, primitives, catalog, science, profiles });
 *   planner.rankTracks({ lang: 'ja', age: '8-12', start: 'zero' })
 *   planner.diagnosis('ja', 'ja-hobby')                 // can-do probes per stage (self-report, not a test)
 *   planner.plan({ lang, track, age, who, startStage, minutesPerDay, daysPerWeek, device, theme })
 *
 * The planner only selects and schedules what the curriculum already contains. It never invents
 * knowledge points, difficulty numbers or mastery estimates; every scheduling number is a stated assumption. */
(function (global) {
  'use strict';
  var SCHEMA = 'language-atlas-blueprint/1';
  var LANGS = { en: '英语', ja: '日语', zh: '中文' };
  var AGES = { '5-7': '5–7 岁', '8-12': '8–12 岁', '13-17': '13–17 岁', adult: '成人' };
  var WHO = { self: '我自己', child: '我的孩子', students: '我的学生' };
  var DEVICES = { phone: '手机', tablet: '平板', web: '网页', print: '打印和纸笔' };
  var COMPONENT_ZH = { grammatical: '语法', lexical: '词汇', topic: '话题', phonological: '语音', orthographic: '拼写与文字',
    functional: '功能', discourse: '语篇', sociolinguistic: '社会语言', strategic: '策略', activity: '听说读写活动' };

  function KTPlanner(o) {
    var C = o.curriculum || {};
    var P = o.primitives || { primitives: [], families: {} };
    var CAT = o.catalog;
    var SCI = o.science || { families: {}, planning: [], nodes: {} };
    var PROFILES = o.profiles || {};
    var PRIM = {}; P.primitives.forEach(function (p) { PRIM[p.id] = p; });
    var api = { SCHEMA: SCHEMA, LANGS: LANGS, AGES: AGES, WHO: WHO, DEVICES: DEVICES };

    function kcIndex(lang) { var m = {}; C[lang].kcs.forEach(function (k) { m[k.id] = k; }); return m; }
    function track(lang, id) { return (C[lang].tracks || []).find(function (t) { return t.id === id; }); }
    function primaryOf(k) { var u = (k.primitives || []).find(function (x) { return x.role === 'primary'; }); return u ? { use: u, prim: PRIM[u.primitive] } : null; }
    function coverageCount(kcs, lang) {
      var n = { block: 0, impl: 0, borrow: 0, spec: 0 };
      kcs.forEach(function (k) { n[CAT ? CAT.coverage(k, lang) : 'spec']++; });
      return n;
    }

    api.languages = function () { return Object.keys(C).filter(function (l) { return (C[l].tracks || []).length; }); };

    /** Tracks of one language, best fit first. Fit = age band match, then starting point match. */
    api.rankTracks = function (profile) {
      var lang = profile.lang;
      return (C[lang].tracks || []).map(function (t, order) {
        var p = PROFILES[t.id] || { ages: [], start: 'zero' };
        var ageFit = profile.age ? p.ages.indexOf(profile.age) >= 0 : false;
        var BANDS = ['5-7', '8-12', '13-17', 'adult'], at = BANDS.indexOf(profile.age);
        // how many age bands away the nearest intended audience is (0 = fits); used to order tracks that do not fit
        var ageGap = at < 0 || !p.ages.length ? 0 : Math.min.apply(null, p.ages.map(function (a) { return Math.abs(BANDS.indexOf(a) - at); }));
        var startFit = profile.start ? p.start === profile.start : false;
        var kc = kcIndex(lang), all = [];
        t.stages.forEach(function (s) { s.kcs.forEach(function (id) { if (kc[id]) all.push(kc[id]); }); });
        return { id: t.id, title: t.title, learner: t.learner, goal: t.goal, entry: t.entry, adapt: t.adapt, assumes: t.assumes,
          stages: t.stages.map(function (s) { return { title: s.title, band: s.band, kcs: s.kcs.length }; }),
          kcCount: all.length, coverage: coverageCount(all, lang), ages: p.ages, start: p.start,
          fit: (ageFit ? 2 : 0) + (startFit ? 1 : 0), ageFit: ageFit, ageGap: ageGap, startFit: startFit, order: order };
      }).sort(function (a, b) { return b.fit - a.fit || a.ageGap - b.ageGap || a.order - b.order; });
    };

    /** Can-do probes for finding a starting stage. Up to `per` knowledge points per stage, spread over components.
     *  This is a self-report (or a parent's / teacher's observation). It is not a calibrated placement test. */
    api.diagnosis = function (lang, trackId, per) {
      var t = track(lang, trackId), kc = kcIndex(lang); per = per || 4;
      if (!t) return [];
      return t.stages.map(function (s, i) {
        var list = s.kcs.map(function (id) { return kc[id]; }).filter(function (k) { return k && (k.mastery || []).length; });
        var seen = {}, picked = [];
        // one per component first, in path order; then fill by even spacing
        list.forEach(function (k) { if (picked.length < per && !seen[k.component]) { seen[k.component] = 1; picked.push(k); } });
        for (var j = 0; picked.length < Math.min(per, list.length) && j < list.length; j += Math.max(1, Math.floor(list.length / per))) {
          if (picked.indexOf(list[j]) < 0) picked.push(list[j]);
        }
        picked.sort(function (a, b) { return list.indexOf(a) - list.indexOf(b); });
        return { stage: i, title: s.title, band: s.band, probes: picked.map(function (k) {
          var e = (k.examples || [])[0];
          return { kc: k.id, label: k.label, canDo: k.mastery[0], example: e ? e[lang] : null, gloss: e ? (lang === 'zh' ? e.en : e.zh) : null, itemTypes: k.itemTypes || [] };
        }) };
      });
    };

    /** answers: { '<stage>:<kc>': 'yes' | 'unsure' | 'no' }. Start at the first stage where fewer than 3 in 4 probes are 'yes'. */
    api.placement = function (lang, trackId, answers) {
      var stages = api.diagnosis(lang, trackId), start = 0, detail = [];
      for (var i = 0; i < stages.length; i++) {
        var probes = stages[i].probes, answered = 0, yes = 0;
        probes.forEach(function (p) { var a = answers[i + ':' + p.kc]; if (a) answered++; if (a === 'yes') yes++; });
        detail.push({ stage: i, yes: yes, answered: answered, of: probes.length });
        if (!answered || yes / probes.length < 0.75) { start = i; break; }
        start = Math.min(i + 1, stages.length - 1);
      }
      return { startStage: start, basis: 'self-report', detail: detail };
    };

    function compactKC(k, lang) {
      return { id: k.id, label: k.label, component: k.component, unit: k.unit,
        mastery: k.mastery || [], examples: (k.examples || []).slice(0, 2), commonErrors: (k.commonErrors || []).slice(0, 2),
        itemTypes: k.itemTypes || [], prerequisites: (k.prerequisites || []).filter(function (p) { return p.strength === 'required'; }).map(function (p) { return p.id; }) };
    }

    api.plan = function (profile) {
      var lang = profile.lang, t = track(lang, profile.track);
      if (!C[lang] || !t) throw new Error('unknown language or track: ' + lang + ' / ' + profile.track);
      var kc = kcIndex(lang);
      var startStage = Math.max(0, Math.min(t.stages.length - 1, +profile.startStage || 0));
      var minutesPerDay = +profile.minutesPerDay || 15, daysPerWeek = +profile.daysPerWeek || 5;
      var child = profile.age === '5-7' || profile.age === '8-12';
      // Planning assumption, not a measurement: one knowledge point takes about two short encounters.
      var minutesPerKc = +profile.minutesPerKc || (child ? 20 : 30);
      var perWeek = Math.max(1, Math.floor(minutesPerDay * daysPerWeek * 0.8 / minutesPerKc)); // 20% of the week is kept for review

      var steps = [], primUse = {}, agenda = [], week = 1, prevWeek = [];
      t.stages.forEach(function (s, si) {
        if (si < startStage) return;
        var list = s.kcs.map(function (id) { return kc[id]; }).filter(Boolean);
        list.forEach(function (k) {
          var pr = primaryOf(k), cov = CAT ? CAT.coverage(k, lang) : 'spec';
          var arts = CAT ? CAT.artifactsForKC(k, lang) : [];
          var page = arts.find(function (a) { return a.kind === 'block' && !a.reference; }) ||
            (lang === 'en' && pr && pr.prim ? arts.find(function (a) { return a.kind === 'asset' && a.primitive === pr.prim.id; }) : null);
          steps.push({ stage: si, kc: compactKC(k, lang), coverage: cov,
            primitive: pr && pr.prim ? { id: pr.prim.id, name: pr.prim.name, family: pr.prim.family, binding: pr.use.binding } : null,
            support: (k.primitives || []).filter(function (u) { return u.role !== 'primary' && PRIM[u.primitive]; }).map(function (u) { return { id: u.primitive, name: PRIM[u.primitive].name, binding: u.binding }; }),
            page: page ? { title: page.title, kind: page.kind, src: page.src, id: page.id } : null });
          if (pr && pr.prim) {
            var e = primUse[pr.prim.id] || (primUse[pr.prim.id] = { n: 0, ready: 0, first: steps.length });
            e.n++; if (page) e.ready++;
          }
        });
        for (var i = 0; i < list.length; i += perWeek) {
          var focus = list.slice(i, i + perWeek);
          agenda.push({ week: week++, stage: si, stageTitle: s.title, band: s.band,
            focus: focus.map(function (k) { return k.id; }), labels: focus.map(function (k) { return k.label; }),
            review: prevWeek.map(function (k) { return k.id; }), coverage: coverageCount(focus, lang) });
          prevWeek = focus;
        }
      });

      var prims = Object.keys(primUse).map(function (id) {
        var p = PRIM[id], u = primUse[id];
        return { id: id, name: p.name, nameEn: p.nameEn, family: p.family, familyLabel: P.families[p.family], oneLine: p.oneLine, status: p.status,
          kcCount: u.n, kcsWithPage: u.ready, firstUsedAtStep: u.first,
          difficulty: p.difficulty, object: p.object, requires: p.requires, learnerAction: p.learnerAction, systemResponse: p.systemResponse,
          ui: p.ui, check: p.check, evidence: p.evidence, scaffold: p.scaffold, reverseHalf: p.reverseHalf,
          implementations: p.implementations || [] };
      }).sort(function (a, b) { return b.kcCount - a.kcCount; });

      var all = steps.map(function (s) { return kc[s.kc.id]; });
      var families = {}; prims.forEach(function (p) { families[p.family] = 1; });
      var science = Object.keys(families).map(function (f) {
        return { family: f, label: P.families[f], references: (SCI.families[f] || []).map(function (r) {
          var n = SCI.nodes[r.ped] || {}; return { id: r.ped, label: n.label, evidenceStatus: n.evidenceStatus, why: r.note, limitation: n.limitation };
        }) };
      });

      return {
        schema: SCHEMA,
        profile: { who: profile.who || 'self', age: profile.age || 'adult', lang: lang, start: profile.start || (startStage ? 'some' : 'zero'),
          minutesPerDay: minutesPerDay, daysPerWeek: daysPerWeek, device: profile.device || 'web', theme: profile.theme || '', need: profile.need || '', l1: profile.l1 || 'zh' },
        ageFit: !PROFILES[t.id] || PROFILES[t.id].ages.indexOf(profile.age || 'adult') >= 0,
        track: { id: t.id, title: t.title, learner: t.learner, goal: t.goal, entry: t.entry, adapt: t.adapt, assumes: t.assumes,
          stages: t.stages.map(function (s, i) { return { index: i, title: s.title, band: s.band, kcs: s.kcs.length, included: i >= startStage }; }) },
        start: { stage: startStage, basis: profile.startBasis || (startStage ? 'chosen' : 'default') },
        assumptions: { minutesPerKc: minutesPerKc, reviewShare: 0.2, kcsPerWeek: perWeek,
          note: '每个知识点约 ' + minutesPerKc + ' 分钟、每周留两成时间回访，都是规划用的假设，不是实测的学习时间。用起来以后按学习者的实际表现调整。' },
        summary: { kcs: steps.length, weeks: agenda.length, coverage: coverageCount(all, lang),
          primitives: prims.length, primitivesToBuild: prims.filter(function (p) { return p.kcsWithPage < p.kcCount; }).length },
        agenda: agenda,
        steps: steps,
        primitives: prims,
        diagnosis: { method: 'self-report', note: '找起点用的是"能不能做到"的自评或家长、老师的观察，不是标定过的分级测验。要做真正的诊断题，按每个知识点的 itemTypes 和主要原语的 check.rules 出题，并保留第一次作答。',
          stages: api.diagnosis(lang, t.id).filter(function (s) { return s.stage >= startStage; }) },
        science: { basis: SCI.basis || 'design_inference', note: '这些是设计所依据的研究想法，不表示这门课的效果已经验证。引用前先读 pedagogy/graph.json 里对应节点的 evidenceStatus 和 limitations。',
          families: science, planning: (SCI.planning || []).map(function (r) { var n = SCI.nodes[r.ped] || {}; return { rule: r.rule, id: r.ped, label: n.label, evidenceStatus: n.evidenceStatus, why: r.note }; }) },
        invariants: INVARIANTS,
        readNext: ['BLUEPRINT.md', 'curriculum/SCHEMA.md', 'curriculum/' + lang + '/graph.json', 'curriculum/primitives/README.md', 'curriculum/primitives/primitives.json', 'blocks/README.md', 'blocks/registry.js', 'pedagogy/graph.json']
      };
    };

    /** A short request a person can paste into a coding agent. */
    api.agentPrompt = function (bp, repo) {
      var p = bp.profile;
      return [
        '请帮我做一个语言学习应用。',
        '',
        p.need ? '我的原话：' + p.need + '\n' : '',
        '学习者：' + WHO[p.who] + '，' + AGES[p.age] + '。',
        '要学：' + LANGS[p.lang] + '，课程方案「' + bp.track.title + '」，从「' + bp.track.stages[bp.start.stage].title + '」开始。',
        (bp.ageFit === false ? '注意：这条路线不是为这个年龄排的。知识点和顺序可以沿用，例句、节奏和界面请按这个年龄重新安排，并告诉我你改了什么。' : ''),
        '时间：每天 ' + p.minutesPerDay + ' 分钟，每周 ' + p.daysPerWeek + ' 天。',
        '设备：' + DEVICES[p.device] + '。' + (p.theme ? '\n喜欢的主题和风格：' + p.theme + '。' : ''),
        '',
        '请使用 OpenLanguageKit 这个公开仓库（CC BY-NC 4.0，非商业用途免费，商用需另行授权）作为课程和教学设计的来源：' + (repo || 'https://github.com/ywEdAi/OpenLanguageKit'),
        '1. 先读仓库根目录的 BLUEPRINT.md，按里面的步骤做。',
        '2. 用下面的命令生成和我一样的蓝图（或直接使用我附上的 blueprint.json）：',
        '   node blueprint/plan.js --lang ' + p.lang + ' --track ' + bp.track.id + ' --age ' + p.age + ' --who ' + p.who + ' --start-stage ' + bp.start.stage +
          ' --minutes ' + p.minutesPerDay + ' --days ' + p.daysPerWeek + ' --device ' + p.device + ' --out my-plan',
        (p.need ? '   我的原话里有路线没覆盖的要求时，先告诉我差在哪里、你打算怎么补，不要悄悄忽略。\n' : '') +
        '3. 先给我一份计划：前两周学什么、每个知识点用哪个教学原语、哪些页面可以直接用、哪些需要新做。我确认之后再开始写代码。',
        '4. 界面、故事和玩法可以自由设计，但必须遵守蓝图里的 invariants（学习证据和检查规则不能改）。'
      ].filter(function (l) { return l !== ''; }).join('\n').replace(/。\n请使用/, '。\n\n请使用');
    };

    api.markdown = function (bp) {
      var p = bp.profile, L = [];
      L.push('# 学习蓝图：' + bp.track.title, '');
      L.push('- 学习者：' + WHO[p.who] + '，' + AGES[p.age], '- 语言：' + LANGS[p.lang], '- 目标：' + bp.track.goal,
        '- 起点：' + bp.track.stages[bp.start.stage].title + '（' + bp.start.basis + '）',
        '- 时间：每天 ' + p.minutesPerDay + ' 分钟 × 每周 ' + p.daysPerWeek + ' 天，约 ' + bp.summary.weeks + ' 周，共 ' + bp.summary.kcs + ' 个知识点',
        '- 设备：' + DEVICES[p.device] + (p.theme ? '；主题：' + p.theme : ''), '', '> ' + bp.assumptions.note, '');
      var c = bp.summary.coverage;
      L.push('## 现在有什么', '', '| 有现成页面 | 可直接用 | 可借用改写 | 只有设计契约 |', '| --- | --- | --- | --- |', '| ' + [c.block, c.impl, c.borrow, c.spec].join(' | ') + ' |', '');
      L.push('## 每周日程', '', '| 周 | 阶段 | 新学 | 回访 |', '| --- | --- | --- | --- |');
      bp.agenda.forEach(function (w) { L.push('| ' + w.week + ' | ' + w.band + ' ' + w.stageTitle + ' | ' + w.labels.join('；') + ' | ' + (w.review.length ? '上周的 ' + w.review.length + ' 个' : '—') + ' |'); });
      L.push('', '## 要用到的教学原语（按用到的知识点数排序）', '', '| 原语 | 做什么 | 知识点 | 已有页面 |', '| --- | --- | --- | --- |');
      bp.primitives.forEach(function (x) { L.push('| ' + x.name + ' `' + x.id + '` | ' + x.oneLine + ' | ' + x.kcCount + ' | ' + x.kcsWithPage + ' |'); });
      L.push('', '## 找起点', '', bp.diagnosis.note, '');
      bp.diagnosis.stages.forEach(function (s) { L.push('### ' + s.band + ' ' + s.title, ''); s.probes.forEach(function (q) { L.push('- [ ] ' + q.canDo + (q.example ? '（例：' + q.example + '）' : '')); }); L.push(''); });
      L.push('## 设计依据', '', bp.science.note, '');
      bp.science.families.forEach(function (f) { L.push('- **' + f.label + '**：' + f.references.map(function (r) { return r.label + '（' + r.why + '）'; }).join('；')); });
      L.push('', '## 不能改的规则', ''); bp.invariants.forEach(function (r) { L.push('- **' + r.title + '**：' + r.rule); });
      L.push('', '## 知识点清单', '');
      var stage = -1;
      bp.steps.forEach(function (s, i) {
        if (s.stage !== stage) { stage = s.stage; L.push('### ' + bp.track.stages[stage].band + ' ' + bp.track.stages[stage].title, ''); }
        L.push((i + 1) + '. **' + s.kc.label + '** `' + s.kc.id + '` — ' + (s.kc.mastery[0] || '') + (s.primitive ? '｜' + s.primitive.name + '：' + s.primitive.binding : '') + (s.page ? '｜页面：' + s.page.title : ''));
      });
      return L.join('\n') + '\n';
    };

    return api;
  }

  // Rules every app built from a blueprint keeps, whatever it looks like. They come from the primitive contracts.
  var INVARIANTS = [
    { id: 'first-attempt', title: '第一次作答不能被覆盖', rule: '每道题第一次作答要在任何提示、重放或答案之前保存；之后的作答记为重试。' },
    { id: 'assisted', title: '独立完成和提示后完成分开记', rule: '用过提示、看过答案或放慢重听之后答对，记为"提示后完成"，不算独立答对。自评单独计数，不算作答。' },
    { id: 'two-sided-check', title: '检查同时卡两头', rule: '每个原语的 check.rules 既要卡住答得太弱，也要卡住投机（全选一边、猜、照抄）。不能只保留容易实现的那一半。' },
    { id: 'reverse-half', title: '保留反向那一半', rule: '教一条规律，就要给出它在哪里不成立（reverseHalf）。不能为了界面简洁删掉。' },
    { id: 'licensed-claims', title: '只说证据支持的话', rule: '给学习者或家长的结论不能超过 evidence.licensed 的 maxStrength 和 minObservations；evidence.prohibited 里的推断不能出现，也不能显示掌握概率或等级分数。' },
    { id: 'no-fake-speech-scoring', title: '不给发音打分', rule: '没有经过验证的语音评测时，只放音、录音和并排对照；由真人听者或学习者自己判断。' },
    { id: 'scripted-interaction', title: '交际回合预先写好', rule: '互动类原语的对方回应来自预先写好并经人工检查的分支。如果接入生成式模型，要标明，并且不把它的回应当作判分依据。' },
    { id: 'child-variant', title: '儿童版不是缩小的成人版', rule: '按原语 ui.childVariant 做：选项更少、目标更大、用图和声音，不加积分和连胜压力。' },
    { id: 'review-lists', title: '待核对的内容不进练习', rule: '数据包 review 列表里的条目和 curriculum/REVIEW.md 里的条目，在母语者或教师核对之前不要出成题。' },
    { id: 'stable-ids', title: '用稳定的 id 记证据', rule: '每条学习证据带知识点 id（kt:…）和原语 id（prim:…），以后才能和课程对上。' }
  ];

  KTPlanner.INVARIANTS = INVARIANTS;
  KTPlanner.COMPONENT_ZH = COMPONENT_ZH;
  global.KTPlanner = KTPlanner;
})(typeof window !== 'undefined' ? window : globalThis);

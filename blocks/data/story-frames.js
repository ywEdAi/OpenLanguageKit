/* Story + language packs for blocks/story-frames.html (prim:sequence-retell, with prim:predict-next between frames).
 *
 * A STORY is language-neutral: 4–6 original inline SVG frames, the order they are TOLD in, the order they HAPPENED in
 * (one frame is a flashback, so the two differ — the reverse half of the primitive), where the learner bets on the
 * next frame, which relation holds between neighbouring frames, and one frame drawn as a three-step animation.
 *
 *   KT_SCENES[id] = { frames: { <frame>: { svg, alt } }, told[], happened[], flash, anim: { frame, steps },
 *                     junctions: [{ before, type: 'dir' | 'pick', actual, child }], slots: [{ ok: [category…] }], orderHints[] }
 *     - the animated frame holds three poses (<g class="sf-pose sf-p1|p2|p3">); the block shows one per step.
 *   KT_DATA[id] = { scene, lang, speech, frames: { <frame>: { t, b, cue, r?, g } }, directions{}, picks{}, connectives[],
 *                   process{}, checks{ devices[], back, traps[], monoRe, mono, list[] }, selfCheck[], review[] }
 *     - t = caption as told, b = the same event without sequence words (used on the cards to be sorted, so the
 *       connectives cannot give the order away), cue = the starter shown while support is still on.
 *     - checks are regular expressions over the pack's own connective list; nothing tries to understand free text.
 * The drawings are original (authored here as SVG, no external image data). */

(function (g) { g.KT_SCENES = g.KT_SCENES || {}; g.KT_DATA = g.KT_DATA || {}; })(typeof window !== 'undefined' ? window : globalThis);

KT_SCENES["rabbit-carrot"] = (function () {
  var INK = '#2b2d3a', FUR = '#fbf6ee', FURL = '#cdbfae', PINK = '#f3a9b6', MOLE = '#6f6259', LEAF = '#5fae6c', CAR = '#f2913d', SOIL = '#b98558', SOILD = '#8f5f3f';
  function n(x) { return Math.round(x * 10) / 10; }
  function rot(p, c, deg) { var a = deg * Math.PI / 180, dx = p[0] - c[0], dy = p[1] - c[1]; return [n(c[0] + dx * Math.cos(a) - dy * Math.sin(a)), n(c[1] + dx * Math.sin(a) + dy * Math.cos(a))]; }
  function wrap(bg, body) { return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" role="img"><rect width="320" height="240" fill="' + bg + '"/>' + body + '</svg>'; }
  /* rabbit facing right, feet centre at (x, y). o: lean (deg), hand [x, y] (before leaning), eye, mouth */
  function rabbit(x, y, o) {
    o = o || {};
    var hand = o.hand || [x + 16, y - 24], sh = [x + 6, y - 38];
    var arm = 'M' + sh[0] + ' ' + sh[1] + ' L' + hand[0] + ' ' + hand[1];
    var eye = o.eye === 'closed' ? '<path d="M' + (x + 8) + ' ' + (y - 60) + ' q3.5 3 7 0" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/>' :
      o.eye === 'tight' ? '<path d="M' + (x + 8) + ' ' + (y - 63) + ' l6 3 l-6 3" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' :
      '<circle cx="' + (x + 12) + '" cy="' + (y - 61) + '" r="' + (o.eye === 'wide' ? 3.6 : 2.5) + '" fill="' + INK + '"/><circle cx="' + (x + 13) + '" cy="' + (y - 62) + '" r="1" fill="#fff"/>';
    var mouth = o.mouth === 'open' ? '<ellipse cx="' + (x + 17) + '" cy="' + (y - 49) + '" rx="3" ry="4" fill="#b4413c"/>' :
      o.mouth === 'smile' ? '<path d="M' + (x + 11) + ' ' + (y - 50) + ' q5 5 9 0" fill="none" stroke="' + INK + '" stroke-width="1.6" stroke-linecap="round"/>' :
      '<path d="M' + (x + 14) + ' ' + (y - 49) + ' h6" stroke="' + INK + '" stroke-width="1.6" stroke-linecap="round"/>';
    return '<g' + (o.lean ? ' transform="rotate(' + o.lean + ' ' + x + ' ' + y + ')"' : '') + '>' +
      '<circle cx="' + (x - 19) + '" cy="' + (y - 16) + '" r="7" fill="#fff" stroke="' + FURL + '" stroke-width="1.5"/>' +
      '<ellipse cx="' + (x - 6) + '" cy="' + (y - 92) + '" rx="6.5" ry="19" fill="' + FUR + '" stroke="' + FURL + '" stroke-width="1.5" transform="rotate(-14 ' + (x - 6) + ' ' + (y - 74) + ')"/>' +
      '<ellipse cx="' + (x + 7) + '" cy="' + (y - 94) + '" rx="6.5" ry="19" fill="' + FUR + '" stroke="' + FURL + '" stroke-width="1.5" transform="rotate(6 ' + (x + 7) + ' ' + (y - 74) + ')"/>' +
      '<ellipse cx="' + (x + 7) + '" cy="' + (y - 93) + '" rx="3" ry="13" fill="' + PINK + '" transform="rotate(6 ' + (x + 7) + ' ' + (y - 74) + ')"/>' +
      '<ellipse cx="' + x + '" cy="' + (y - 27) + '" rx="19" ry="25" fill="' + FUR + '" stroke="' + FURL + '" stroke-width="1.5"/>' +
      '<ellipse cx="' + (x + 8) + '" cy="' + (y - 3) + '" rx="15" ry="6" fill="' + FUR + '" stroke="' + FURL + '" stroke-width="1.5"/>' +
      '<circle cx="' + (x + 4) + '" cy="' + (y - 58) + '" r="18" fill="' + FUR + '" stroke="' + FURL + '" stroke-width="1.5"/>' +
      '<circle cx="' + (x + 10) + '" cy="' + (y - 52) + '" r="4.5" fill="#fbd3d9"/>' + eye + mouth +
      '<circle cx="' + (x + 21) + '" cy="' + (y - 56) + '" r="2.4" fill="' + PINK + '"/>' +
      '<path d="' + arm + '" stroke="' + FURL + '" stroke-width="10" stroke-linecap="round"/><path d="' + arm + '" stroke="' + FUR + '" stroke-width="7" stroke-linecap="round"/>' +
      '</g>';
  }
  /* mole facing left, bottom centre at (x, y) */
  function mole(x, y, o) {
    o = o || {};
    return '<g>' +
      '<ellipse cx="' + x + '" cy="' + (y - 24) + '" rx="21" ry="25" fill="' + MOLE + '"/>' +
      '<ellipse cx="' + (x - 3) + '" cy="' + (y - 16) + '" rx="12" ry="14" fill="#8a7c72"/>' +
      '<ellipse cx="' + (x - 17) + '" cy="' + (y - 36) + '" rx="10" ry="7" fill="#f3c4b8"/><circle cx="' + (x - 26) + '" cy="' + (y - 37) + '" r="3" fill="#e58fa5"/>' +
      (o.eye === 'happy' ? '<path d="M' + (x - 10) + ' ' + (y - 44) + ' q3 -3.5 6 0" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>' : '<circle cx="' + (x - 7) + '" cy="' + (y - 45) + '" r="2.2" fill="#fff"/><circle cx="' + (x - 7.5) + '" cy="' + (y - 45) + '" r="1" fill="' + INK + '"/>') +
      (o.paws === false ? '' : '<ellipse cx="' + (x - 16) + '" cy="' + (y - 22) + '" rx="7" ry="4.5" fill="#f3c4b8" transform="rotate(-20 ' + (x - 16) + ' ' + (y - 22) + ')"/><ellipse cx="' + (x - 14) + '" cy="' + (y - 11) + '" rx="7" ry="4.5" fill="#f3c4b8" transform="rotate(15 ' + (x - 14) + ' ' + (y - 11) + ')"/>') +
      '</g>';
  }
  /* carrot: shoulder centre at (x, y), pointing down, length len; leaves grow up (or towards `to`) */
  function carrot(x, y, len, o) {
    o = o || {};
    var to = o.to, w = o.w || 15;
    var leaves = to ? '<path d="M' + x + ' ' + y + ' Q' + n((x + to[0]) / 2 + 6) + ' ' + n((y + to[1]) / 2 - 10) + ' ' + to[0] + ' ' + to[1] + '" fill="none" stroke="' + LEAF + '" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M' + x + ' ' + y + ' Q' + n((x + to[0]) / 2 + 12) + ' ' + n((y + to[1]) / 2 - 2) + ' ' + n(to[0] + 3) + ' ' + n(to[1] + 5) + '" fill="none" stroke="#7cc08a" stroke-width="5" stroke-linecap="round"/>' :
      '<path d="M' + x + ' ' + y + ' q-16 -18 -12 -38 M' + x + ' ' + y + ' q0 -22 2 -44 M' + x + ' ' + y + ' q14 -16 14 -36" fill="none" stroke="' + LEAF + '" stroke-width="7" stroke-linecap="round"/><path d="M' + x + ' ' + y + ' q-6 -18 -4 -30 M' + x + ' ' + y + ' q8 -16 8 -28" fill="none" stroke="#7cc08a" stroke-width="4" stroke-linecap="round"/>';
    var body = len ? '<path d="M' + (x - w) + ' ' + y + ' Q' + x + ' ' + (y - 8) + ' ' + (x + w) + ' ' + y + ' L' + (x + 3) + ' ' + (y + len) + ' Q' + x + ' ' + (y + len + 5) + ' ' + (x - 3) + ' ' + (y + len) + 'Z" fill="' + CAR + '"/>' +
      '<path d="M' + (x - w + 6) + ' ' + (y + len * 0.22) + ' h9 M' + (x + 1) + ' ' + (y + len * 0.42) + ' h8 M' + (x - 6) + ' ' + (y + len * 0.62) + ' h6" stroke="#d9722a" stroke-width="2" stroke-linecap="round"/>' :
      '<path d="M' + (x - w) + ' ' + (y + 5) + ' Q' + x + ' ' + (y - 9) + ' ' + (x + w) + ' ' + (y + 5) + 'Z" fill="' + CAR + '"/>';
    return '<g>' + leaves + body + '</g>';
  }
  function ground(y, col) { return '<path d="M0 ' + y + ' q80 -8 160 0 t160 0 V240 H0Z" fill="' + (col || '#dcefd0') + '"/>'; }
  function soil(y) { return '<path d="M0 ' + y + ' q80 -6 160 0 t160 0 V240 H0Z" fill="' + SOIL + '"/><g fill="' + SOILD + '" opacity=".55"><ellipse cx="40" cy="' + (y + 30) + '" rx="9" ry="3"/><ellipse cx="120" cy="' + (y + 44) + '" rx="7" ry="2.500"/><ellipse cx="282" cy="' + (y + 28) + '" rx="9" ry="3"/><ellipse cx="250" cy="' + (y + 50) + '" rx="6" ry="2"/></g>'; }
  function sprout(x, y) { return '<path d="M' + x + ' ' + y + ' q-7 -8 -5 -15 M' + x + ' ' + y + ' q6 -8 5 -14" fill="none" stroke="' + LEAF + '" stroke-width="4" stroke-linecap="round"/>'; }

  // 1. morning: hungry rabbit outside his burrow
  var wake = wrap('#fdf1d8',
    '<circle cx="58" cy="150" r="34" fill="#ffd772"/><circle cx="58" cy="150" r="46" fill="#ffd772" opacity=".25"/>' +
    '<path d="M0 168 Q90 120 200 160 T320 150 V240 H0Z" fill="#cfe7c6"/>' + ground(196) +
    '<path d="M196 200 q4 -78 62 -78 q58 0 62 78z" fill="#b9dba9"/><path d="M236 200 q0 -42 26 -42 q26 0 26 42z" fill="#8f5f3f"/><circle cx="279" cy="184" r="2.500" fill="#f2b134"/>' +
    '<g fill="#fff" stroke="' + FURL + '" stroke-width="1.5"><ellipse cx="208" cy="62" rx="44" ry="30"/><circle cx="172" cy="104" r="7"/><circle cx="160" cy="120" r="4"/></g>' +
    '<g transform="translate(204 46) rotate(32)"><path d="M0 0 q-7 -8 -5 -15 M0 0 q1 -9 3 -16 M0 0 q8 -6 10 -13" fill="none" stroke="' + LEAF + '" stroke-width="3.500" stroke-linecap="round"/><path d="M-8 0 Q0 -5 8 0 L2 32 Q0 35 -2 32Z" fill="' + CAR + '"/></g>' +
    rabbit(118, 212, { eye: 'closed', hand: [128, 186], mouth: 'flat' }) +
    '<path d="M140 180 q5 -4 0 -8 M147 184 q6 -5 0 -11" fill="none" stroke="#a2a5ba" stroke-width="2" stroke-linecap="round"/>');

  // 2. the garden and the big carrot
  var garden = wrap('#e6effc',
    '<g fill="#fff"><ellipse cx="70" cy="40" rx="30" ry="11"/><ellipse cx="88" cy="32" rx="18" ry="11"/></g>' +
    '<path d="M0 130 Q100 108 200 126 T320 120 V240 H0Z" fill="#cfe7c6"/>' +
    '<g stroke="#c79a6b" stroke-width="6" stroke-linecap="round"><path d="M20 108 v44 M70 104 v46 M120 104 v46 M170 106 v46 M220 106 v46 M270 104 v46 M310 106 v44"/><path d="M0 120 h320 M0 138 h320" stroke-width="5"/></g>' +
    ground(158) + '<path d="M130 176 q95 -10 190 0 V240 H130Z" fill="' + SOIL + '"/><path d="M150 200 h170 M140 222 h180" stroke="' + SOILD + '" stroke-width="2" opacity=".5"/>' +
    sprout(160, 192) + sprout(190, 214) + sprout(292, 196) + sprout(270, 220) +
    carrot(236, 184, 0, { w: 17 }) +
    '<path d="M262 150 l8 -8 M268 166 l11 -3 M208 152 l-7 -9" stroke="#f2b134" stroke-width="3" stroke-linecap="round"/>' +
    rabbit(74, 214, { eye: 'wide', mouth: 'open', hand: [98, 176] }) +
    '<text x="108" y="118" font-size="30" font-weight="800" fill="#e2674e" font-family="system-ui,sans-serif">!</text>');

  // 3. pulling: three poses, shown one per step
  function pose(k) {
    var lean = [0, -15, -27][k], rise = [0, 3, 5][k], feet = [128, 186];
    var localHand = [feet[0] + 40, feet[1] - 40], hand = rot(localHand, feet, lean);
    var top = [222, 186 - rise];
    var extra = k === 0 ? '' :
      k === 1 ? '<path d="M246 172 l9 -6 M250 184 l11 -1" stroke="#a2a5ba" stroke-width="2.500" stroke-linecap="round"/>' :
        '<g class="sf-wig"><path d="M246 168 l10 -8 M251 182 l12 -2 M200 172 l-8 -8" stroke="#e2674e" stroke-width="2.500" stroke-linecap="round"/></g>' +
        '<path d="M204 190 l-10 6 l6 6 M240 190 l10 5 l-5 7" fill="none" stroke="' + SOILD + '" stroke-width="2.500" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<g fill="#8fc7ee"><path d="M92 86 q-5 8 0 11 q5 -3 0 -11z"/><path d="M76 104 q-5 8 0 11 q5 -3 0 -11z"/></g>';
    return '<g class="sf-pose sf-p' + (k + 1) + '">' + carrot(top[0], top[1], 0, { to: hand, w: 17 }) + extra +
      rabbit(feet[0], feet[1], { lean: lean, hand: localHand, eye: k === 2 ? 'tight' : 'open', mouth: k === 0 ? 'flat' : 'open' }) + '</g>';
  }
  var pull = wrap('#e6effc',
    '<path d="M0 120 Q100 100 200 116 T320 110 V240 H0Z" fill="#cfe7c6"/>' + soil(184) + sprout(40, 186) + sprout(292, 186) +
    pose(0) + pose(1) + pose(2));

  // 4. out comes the carrot — and a mole
  var pop = wrap('#e6effc',
    '<path d="M0 120 Q100 100 200 116 T320 110 V240 H0Z" fill="#cfe7c6"/>' + soil(184) + sprout(292, 186) +
    '<ellipse cx="226" cy="190" rx="34" ry="9" fill="#5b3a29"/>' +
    '<g transform="rotate(-14 226 120)">' + carrot(226, 62, 74, { w: 17 }) + '</g>' +
    '<g transform="translate(6 -20)">' + mole(236, 190, {}) + '</g>' +
    '<path d="M192 190 q-4 -8 -14 -8 M262 190 q6 -10 16 -8" fill="none" stroke="' + SOILD + '" stroke-width="3" stroke-linecap="round"/>' +
    '<g fill="' + SOILD + '"><circle cx="178" cy="160" r="4"/><circle cx="286" cy="150" r="3.500"/><circle cx="196" cy="140" r="3"/><circle cx="272" cy="170" r="3"/></g>' +
    '<path d="M250 40 l10 -12 M266 62 l15 -5 M186 44 l-10 -10" stroke="#f2b134" stroke-width="3.500" stroke-linecap="round"/>' +
    rabbit(104, 196, { lean: -78, eye: 'wide', mouth: 'open', hand: [128, 150] }) +
    '<text x="60" y="96" font-size="28" font-weight="800" fill="#e2674e" font-family="system-ui,sans-serif">?!</text>');

  // 5. the night before: the mole finds the carrot underground
  var night = wrap('#2e3560',
    '<circle cx="262" cy="42" r="20" fill="#fbeeb8"/><circle cx="254" cy="36" r="18" fill="#2e3560"/>' +
    '<g fill="#fbeeb8"><circle cx="40" cy="30" r="2"/><circle cx="96" cy="54" r="1.600"/><circle cx="150" cy="24" r="2"/><circle cx="204" cy="60" r="1.600"/><circle cx="300" cy="78" r="1.600"/><circle cx="66" cy="78" r="1.400"/></g>' +
    '<path d="M0 100 q80 -8 160 0 t160 0 V240 H0Z" fill="#4c7a5c"/><path d="M0 112 q80 -6 160 0 t160 0 V240 H0Z" fill="#7a5238"/>' +
    '<path d="M-10 200 q70 -40 150 -18 q40 8 60 0 q20 -8 30 10 q8 22 -20 34 q-40 12 -90 6 q-60 -6 -130 10z" fill="#a9744f"/>' +
    '<g fill="#5b3a29" opacity=".6"><ellipse cx="280" cy="150" rx="8" ry="3"/><ellipse cx="36" cy="142" rx="8" ry="3"/><ellipse cx="290" cy="214" rx="7" ry="2.500"/></g>' +
    '<g opacity=".92">' + carrot(214, 108, 78, { w: 17 }).replace(new RegExp(LEAF, 'g'), '#4f9a66').replace(/#7cc08a/g, '#62ad79') + '</g>' +
    '<g transform="translate(200 0) scale(-1 1) translate(-200 0)">' + mole(216, 224, { eye: 'happy' }) + '</g>' +
    '<path d="M236 168 l-4 -9 l8 3z" fill="#fbeeb8"/><path d="M178 150 l3 -8 l5 7z" fill="#fbeeb8"/>');

  // 6. sharing
  var share = wrap('#fdf1d8',
    '<circle cx="262" cy="52" r="26" fill="#ffd772"/><path d="M0 150 Q100 124 200 144 T320 136 V240 H0Z" fill="#cfe7c6"/>' + ground(200) +
    rabbit(100, 214, { eye: 'closed', mouth: 'smile', hand: [130, 176] }) +
    '<g transform="translate(134 172) rotate(38)"><path d="M0 0 q-7 -8 -5 -15 M0 0 q1 -9 3 -16 M0 0 q8 -6 10 -13" fill="none" stroke="' + LEAF + '" stroke-width="3.500" stroke-linecap="round"/><path d="M-9 0 Q0 -5 9 0 L6 24 h-12Z" fill="' + CAR + '"/></g>' +
    '<g transform="translate(18 0)">' + mole(216, 214, { eye: 'happy' }) + '</g>' +
    '<g transform="translate(212 203) rotate(-74)"><path d="M-7 0 h14 L2 26 Q0 29 -2 26Z" fill="' + CAR + '"/></g>' +
    '<g fill="#e2674e"><path d="M160 96 q-7 -9 -13 -2 q-5 8 13 18 q18 -10 13 -18 q-6 -7 -13 2z"/><path d="M186 74 q-4 -5 -7 -1 q-3 4 7 10 q10 -6 7 -10 q-3 -4 -7 1z" opacity=".7"/></g>');

  function clean(s) { return s.replace(/\.(\d)00\b/g, '.$1'); }
  return {
    id: 'rabbit-carrot',
    frames: {
      wake: { svg: clean(wake), alt: '早晨，小兔子站在洞口，摸着肚子，想着胡萝卜。' },
      garden: { svg: clean(garden), alt: '菜园里，小兔子看见一根很大的胡萝卜，露出地面一截。' },
      pull: { svg: clean(pull), alt: '小兔子抓着胡萝卜叶子往后拔，胡萝卜没动。' },
      pop: { svg: clean(pop), alt: '胡萝卜出来了，一只鼹鼠抱着胡萝卜尖一起出来，小兔子仰面摔倒。' },
      night: { svg: clean(night), alt: '夜里，月亮下，地底下的鼹鼠抱住了胡萝卜的尖。' },
      share: { svg: clean(share), alt: '小兔子和鼹鼠坐在一起，一人一半吃胡萝卜。' }
    },
    told: ['wake', 'garden', 'pull', 'pop', 'night', 'share'],
    happened: ['night', 'wake', 'garden', 'pull', 'pop', 'share'],
    flash: 'night',
    anim: { frame: 'pull', steps: 3 },
    /* where the learner bets before the next frame is shown. child = the two-card version (on / turn), null = no bet */
    junctions: [
      { before: 'pull', type: 'dir', actual: 'turn', child: 'turn', why: '它动手拔了，可是没有顺利拔出来：故事在这里拐了个弯。' },
      { before: 'pop', type: 'pick', why: '胡萝卜终于出来了——还带出来一只鼹鼠。' },
      { before: 'night', type: 'dir', actual: 'back', child: null, why: '故事没有接着往下讲，而是回头交代：鼹鼠为什么会挂在胡萝卜上？这是更早发生的事。' },
      { before: 'share', type: 'dir', actual: 'close', child: 'on', why: '补完以前的事，故事回到现在，给出结果。' }
    ],
    /* relation between neighbouring frames in the order told */
    slots: [
      { ok: ['cause', 'seq'], why: '饿了，所以去菜园：说成因果或先后都讲得通。' },
      { ok: ['seq'], why: '看见了，接着动手拔：一先一后。' },
      { ok: ['seq', 'contrast'], why: '拔不动之后，胡萝卜突然出来了：是后来的事，也是个转折。' },
      { ok: ['back'], why: '这一幅讲在后面，却发生在最前面。用表示先后的词，听的人会以为是后来的事；要用补叙的说法标出“更早”。' },
      { ok: ['end', 'cause', 'seq'], why: '补叙讲完，回到主线收尾。' }
    ],
    orderHints: ['想一想：小兔子来菜园的时候，鼹鼠已经在地底下了吗？', '有一幅讲在后面，其实发生得最早。看看哪一幅是夜里。']
  };
})();

KT_DATA["story-en"] = {
  "review": [
    "故事由编写者自拟，待英语母语者核对；标 ★ 的两句取自或改自知识点 kt:en-skill-listen-stories 的例句（One day, a little rabbit was very hungry. He went to the garden and saw a big carrot.）",
    "过程三句（held the leaves / leaned back and pulled / pulled harder）与范例为自拟",
    "鼹鼠用 he 指代；The mole had found the carrot the night before 的过去完成用法待核对",
    "机器语音读故事的语气不自然；任何一句都可以加 audio 换成真人录音"
  ],
  id: 'story-en', lang: 'en', speech: 'en-US', scene: 'rabbit-carrot',
  title: '连环画：小兔子拔萝卜',
  subtitle: '六幅画讲一个小故事。先猜下一幅再揭晓，把打乱的画按“发生”的先后排好，放上连接词，看动画说过程，最后撤掉文字复述。页面听不到你的声音，口头复述由你自己或搭档判断。',
  kcs: ['kt:en-past-sequencing', 'kt:en-fn-past-experience', 'kt:en-skill-listen-stories'],
  readingLabel: null,
  frames: {
    wake: { t: 'One morning, a little rabbit woke up. He was very hungry.', b: 'A little rabbit woke up. He was very hungry.', cue: 'One morning, …', g: '一天早上，小兔子醒了。他很饿。', src: 'kc' },
    garden: { t: 'He went to the garden and saw a big carrot.', b: 'He went to the garden and saw a big carrot.', cue: 'So … / Then …', g: '他去了菜园，看见一根大胡萝卜。', src: 'kc' },
    pull: { t: "He pulled and pulled, but the carrot didn't move.", b: "He pulled and pulled. The carrot didn't move.", cue: '… but …', g: '他拔呀拔，可是胡萝卜一动不动。' },
    pop: { t: 'Suddenly, the carrot came out — and a mole came out with it!', b: 'The carrot came out. A mole came out with it!', cue: 'Suddenly, …', g: '突然，胡萝卜出来了——一只鼹鼠也跟着出来了！' },
    night: { t: 'The mole had found the carrot the night before. He was still holding it.', b: 'A mole found the carrot at night and held on to it.', cue: '… had found … the night before', g: '原来鼹鼠前一天晚上就发现了这根胡萝卜，一直抱着它。' },
    share: { t: 'In the end, they shared the carrot.', b: 'They shared the carrot.', cue: 'In the end, …', g: '最后，他们把胡萝卜分着吃了。' }
  },
  directions: {
    on: { w: 'and then …', zh: '接着往下说' },
    turn: { w: 'but …', zh: '可是，出了意外' },
    close: { w: 'so … / in the end …', zh: '于是有了结果' },
    back: { w: 'before that …', zh: '不接这一句：回头说以前的事' }
  },
  picks: { pop: [{ t: 'The carrot came out.', right: true }, { t: 'The rabbit went home.' }, { t: 'The carrot got bigger.' }] },
  cats: { seq: '先后', same: '同时', cause: '因果', contrast: '转折', back: '补叙', end: '收尾' },
  connectives: [
    { id: 'then', w: 'Then', cat: 'seq' }, { id: 'after', w: 'After that,', cat: 'seq' }, { id: 'so', w: 'So', cat: 'cause' }, { id: 'but', w: 'But then', cat: 'contrast' },
    { id: 'while', w: 'While', cat: 'same', no: 'While 表示两件事同时发生；这两幅是一先一后。' },
    { id: 'had', w: 'had + done (the night before)', cat: 'back', no: '这里没有回头说更早的事，用不上过去完成。' },
    { id: 'end', w: 'In the end,', cat: 'end', no: 'In the end 用在故事的结尾，这里故事还没完。' }
  ],
  backNote: '英语用过去完成标出“更早”：The mole had found the carrot the night before.',
  process: {
    steps: [
      { t: 'He held the leaves with both hands.', g: '他用两只手抓住叶子。' },
      { t: 'He leaned back and pulled.', g: '他身体往后仰，用力拔。' },
      { t: "He pulled harder, but the carrot didn't move.", g: '他更用力地拔，可是胡萝卜没动。' }
    ],
    words: 'First … Then … After that …',
    model: "First, he held the leaves with both hands. Then he leaned back and pulled. After that, he pulled even harder, but the carrot still didn't move.",
    modelG: '他先用两只手抓住叶子，然后身体往后仰用力拔，接着拔得更用力，可是胡萝卜还是不动。'
  },
  checks: {
    devices: [
      { id: 'One morning / First', re: '\\b(first|one (morning|day))\\b' }, { id: 'Then', re: '\\bthen\\b' }, { id: 'After that', re: '\\bafter that\\b' }, { id: 'Next', re: '\\bnext,?\\s+(he|she|they|it|the|a)\\b' },
      { id: 'Suddenly', re: '\\bsuddenly\\b' }, { id: 'but', re: '\\bbut\\b' }, { id: 'so', re: '\\bso\\b' }, { id: 'Later', re: '\\blater\\b' }, { id: 'In the end / Finally', re: '\\b(in the end|finally)\\b' },
      { id: 'had + done', re: '\\bhad\\s+(already\\s+)?\\w+' }, { id: 'when / while / before', re: '\\b(when|while)\\b|\\bbefore\\s+(he|she|they|it|the|a)\\b' }
    ],
    back: '\\bhad\\b|\\bthe night before\\b|\\bearlier\\b',
    traps: [
      { re: '\\b(rabbit|he|mole|they|carrot|it)\\s+(see|sees|go|goes|pull|pulls|come|comes|find|finds|share|shares|eat|eats|wake|wakes|is|are|hold|holds|fall|falls|want|wants)\\b', msg: '讲过去的事，动词要变过去式：saw、went、pulled、came、found（*Then the rabbit see a carrot）。只靠 one morning 这样的时间词不够。' },
      { re: '^\\s*after\\s*,', msg: 'after 不能单独当副词用：说 After that, …' },
      { re: '\\bat last,?\\s+they\\b', msg: 'at last 是“终于”；故事的结局用 In the end。' }
    ],
    monoRe: '\\bthen\\b',
    mono: '全是 then：换几种说法（After that, / Suddenly, / but / In the end,）。',
    list: ['One morning, …', 'Then …', 'After that, …', '… but …', 'Suddenly, …', '… had (found) … the night before', 'In the end, …']
  },
  selfCheck: ['每一幅图我都说到了', '我用了至少三种不同的连接词，不是一路 then', '讲过去的事，动词变了过去式（went、saw、pulled）', '鼹鼠那一段，我用 had … 说明那是更早的事'],
  partner: '有搭档更好：一个人只看图复述，另一个人看着原文，在每幅图上打勾。'
};

KT_DATA["story-zh"] = {
  "review": [
    "中文故事、拼音和过程三句由编写者自拟，待对外汉语教师核对（课程里没有现成的同题例句）",
    "“它拔了又拔”“一动也不动”对三级学习者可能偏难；“鼹鼠”是超纲词，靠图理解",
    "补叙句“原来，前一天晚上鼹鼠就已经发现了这根胡萝卜”的语序和“原来”的用法待核对",
    "拼音里“一”“不”标的是变调后的实际读音；机器语音可能读错轻声"
  ],
  id: 'story-zh', lang: 'zh', speech: 'zh-CN', scene: 'rabbit-carrot',
  title: '连环画：小兔子拔萝卜（中文）',
  subtitle: '六幅画讲一个小故事。先猜下一幅再揭晓，把打乱的画按“发生”的先后排好，放上连接词，看动画说过程，最后撤掉文字复述。页面听不到你的声音，口头复述由你自己或搭档判断。',
  kcs: ['kt:zh-xian-zai', 'kt:zh-skill-speak-l3'],
  readingLabel: '拼音',
  frames: {
    wake: { t: '一天早上，小兔子醒了，它觉得很饿。', r: 'Yì tiān zǎoshang, xiǎo tùzi xǐng le, tā juéde hěn è.', b: '小兔子醒了，它觉得很饿。', cue: '一天早上，……', g: 'One morning, a little rabbit woke up. He felt very hungry.' },
    garden: { t: '它去了菜园，看见一根很大的胡萝卜。', r: 'Tā qùle càiyuán, kànjiàn yì gēn hěn dà de húluóbo.', b: '它去了菜园，看见一根很大的胡萝卜。', cue: '于是…… ／ 然后……', g: 'He went to the garden and saw a very big carrot.' },
    pull: { t: '它拔了又拔，可是胡萝卜一动也不动。', r: 'Tā bále yòu bá, kěshì húluóbo yí dòng yě bú dòng.', b: '它拔了又拔。胡萝卜一动也不动。', cue: '……可是……', g: "He pulled and pulled, but the carrot didn't move at all." },
    pop: { t: '突然，胡萝卜出来了，一只鼹鼠也跟着出来了！', r: 'Tūrán, húluóbo chūlai le, yì zhī yǎnshǔ yě gēnzhe chūlai le!', b: '胡萝卜出来了，一只鼹鼠也跟着出来了！', cue: '突然，……', g: 'Suddenly the carrot came out, and a mole came out with it!' },
    night: { t: '原来，前一天晚上鼹鼠就已经发现了这根胡萝卜，一直抱着它。', r: 'Yuánlái, qián yì tiān wǎnshang yǎnshǔ jiù yǐjīng fāxiànle zhè gēn húluóbo, yìzhí bàozhe tā.', b: '晚上，鼹鼠发现了这根胡萝卜，抱着它。', cue: '原来，前一天晚上……就已经……了', g: 'It turned out the mole had already found the carrot the night before and had been holding on to it.' },
    share: { t: '最后，它们一起吃了这根胡萝卜。', r: 'Zuìhòu, tāmen yìqǐ chīle zhè gēn húluóbo.', b: '它们一起吃了这根胡萝卜。', cue: '最后，……', g: 'In the end, they ate the carrot together.' }
  },
  directions: {
    on: { w: '然后……', zh: '接着往下说' },
    turn: { w: '可是……', zh: '可是，出了意外' },
    close: { w: '所以…… ／ 最后……', zh: '于是有了结果' },
    back: { w: '原来，以前……', zh: '不接这一句：回头说以前的事' }
  },
  picks: { pop: [{ t: '胡萝卜出来了。', r: 'Húluóbo chūlai le.', right: true }, { t: '小兔子回家了。', r: 'Xiǎo tùzi huí jiā le.' }, { t: '胡萝卜变大了。', r: 'Húluóbo biàn dà le.' }] },
  cats: { seq: '先后', same: '同时', cause: '因果', contrast: '转折', back: '补叙', end: '收尾', trap: '用错' },
  connectives: [
    { id: 'ranhou', w: '然后', cat: 'seq' }, { id: 'jiezhe', w: '接着', cat: 'seq' }, { id: 'yushi', w: '于是', cat: 'cause' }, { id: 'keshi', w: '可是后来', cat: 'contrast' },
    { id: 'zai', w: '再', cat: 'trap', no: '已经发生的事不用“再”（*昨天我先吃饭，再看电影）。讲过去的事用“然后”。' },
    { id: 'yibian', w: '一边……一边……', cat: 'same', no: '“一边……一边”表示两件事同时进行；这两幅是一先一后。' },
    { id: 'yuanlai', w: '原来……早就／已经……了', cat: 'back', no: '这里没有回头说更早的事。' },
    { id: 'zuihou', w: '最后', cat: 'end', no: '“最后”用在结尾，这里故事还没完。' }
  ],
  backNote: '中文用“原来”“前一天”“早就／已经……了”标出“更早”：原来，前一天晚上鼹鼠就已经发现了这根胡萝卜。',
  process: {
    steps: [
      { t: '它用两只手抓住叶子。', r: 'Tā yòng liǎng zhī shǒu zhuāzhù yèzi.', g: 'He held the leaves with both hands.' },
      { t: '它身体往后，用力拔。', r: 'Tā shēntǐ wǎng hòu, yònglì bá.', g: 'He leaned back and pulled hard.' },
      { t: '它更用力地拔，可是胡萝卜还是不动。', r: 'Tā gèng yònglì de bá, kěshì húluóbo háishi bú dòng.', g: "He pulled even harder, but the carrot still didn't move." }
    ],
    words: '先…… 然后…… 最后……',
    model: '它先用两只手抓住叶子，然后身体往后，用力拔。最后它更用力地拔，可是胡萝卜还是不动。',
    modelR: 'Tā xiān yòng liǎng zhī shǒu zhuāzhù yèzi, ránhòu shēntǐ wǎng hòu, yònglì bá. Zuìhòu tā gèng yònglì de bá, kěshì húluóbo háishi bú dòng.',
    modelG: "First he held the leaves with both hands, then he leaned back and pulled hard. Finally he pulled even harder, but the carrot still didn't move."
  },
  checks: {
    devices: [
      { id: '一天早上／先', re: '(一天|有一天|先)' }, { id: '然后', re: '然后' }, { id: '接着', re: '接着' }, { id: '后来', re: '后来' }, { id: '突然', re: '(突然|忽然)' },
      { id: '可是／但是', re: '(可是|但是|不过)' }, { id: '所以／于是', re: '(所以|于是)' }, { id: '最后', re: '最后' }, { id: '原来／早就／已经', re: '(原来|早就|已经|之前)' }, { id: '……以后／的时候', re: '(以后|以前|的时候)' }
    ],
    back: '(原来|早就|已经|之前|前一天|昨天晚上)',
    traps: [
      { re: '先.{1,14}再', msg: '已经发生的事不用“再”：*昨天我先吃饭，再看电影。讲过去的事用“然后”。' },
      { re: '^\\s*以后', msg: '“以后”放在小句的后面：下课以后……，不说 *以后下课。' },
      { re: '在.{1,6}(以后|以前)', msg: '时间小句前面不加“在”：吃饭以后……，不说 *在吃饭以后。' }
    ],
    monoRe: '然后',
    mono: '全是“然后”：换几种说法（接着、突然、可是、最后）。',
    list: ['一天早上，……', '然后……', '接着……', '……可是……', '突然，……', '原来，前一天晚上……就已经……了', '最后，……']
  },
  selfCheck: ['每一幅图我都说到了', '我用了至少三种不同的连接词，不是一路“然后”', '已经发生的事，我没有用“再”', '鼹鼠那一段，我用“原来／早就／已经”说明那是更早的事'],
  partner: '有搭档更好：一个人只看图复述，另一个人看着原文，在每幅图上打勾。'
};

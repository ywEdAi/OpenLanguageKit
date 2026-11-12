/* Scene + language packs for blocks/picture-talk.html (prim:picture-describe).
 *
 * A SCENE is language-neutral: one original inline SVG plus the checkable element list the learner never sees
 * (what is there, how many, where relative to what, action or state). A PACK is one language laid over a scene.
 *
 *   KT_SCENES[id] = { viewBox, svg, alt, childEls, els: { <el>: { kind, count, hit: [x, y, w, h], anchor: { <prep>: [x, y] } (where a thing would stand if it were on/under/… this one),
 *                     rel: [{ ref, ok: [prep…] }], act, state } } }
 *     - every element is drawn as <g id="el-<el>"> so the block can light it up, grey it out or ghost it.
 *     - prep keys are spatial, not words: on | under | in | next_to. A pack maps its own words onto them.
 *   KT_DATA[id] = { scene, lang, speech, els: { <el>: { name, names[], models: [{ t, s, r?, g, k?, x? }], inferNo? } },
 *                   absent[], judge[], questions[], parse{}, structures[], traps[], frames[], review[] }
 *     - models[].t = model sentence, s = structure id, r = reading (pinyin), g = gloss, k = tiles (default: split on
 *       spaces), x = extra distractor tiles.
 *     - parse / structures / traps are regular expressions over a CONTROLLED vocabulary. The block never tries to
 *       understand free text; what it cannot parse it says it cannot judge.
 *     - questions[].fact is checked against the scene before the question is offered, so answers come from the scene.
 * The drawing is original (authored here as SVG, no external image or stroke data). */

(function (g) { g.KT_SCENES = g.KT_SCENES || {}; g.KT_DATA = g.KT_DATA || {}; })(typeof window !== 'undefined' ? window : globalThis);

KT_SCENES["park"] = (function () {
  var INK = '#2b2d3a';
  function kid(x, y, shirt, hair, skin, pose) {
    // small running child, feet at y
    var l = pose === 'kick' ? [[-4, -16, -12, 0], [4, -16, 16, -8]] : pose === 'run' ? [[-4, -16, -11, -2], [4, -16, 10, 0]] : [[-4, -16, -7, 0], [4, -16, 9, -1]];
    var a = pose === 'cheer' ? [[-8, -34, -17, -46], [8, -34, 17, -46]] : [[-8, -34, -17, -26], [8, -34, 17, -40]];
    function ln(p, c, w) { return '<line x1="' + (x + p[0]) + '" y1="' + (y + p[1]) + '" x2="' + (x + p[2]) + '" y2="' + (y + p[3]) + '" stroke="' + c + '" stroke-width="' + w + '" stroke-linecap="round"/>'; }
    return ln(l[0], '#44506b', 6) + ln(l[1], '#44506b', 6) + ln(a[0], skin, 5) + ln(a[1], skin, 5) +
      '<rect x="' + (x - 9) + '" y="' + (y - 40) + '" width="18" height="26" rx="6" fill="' + shirt + '"/>' +
      '<circle cx="' + x + '" cy="' + (y - 49) + '" r="9.5" fill="' + skin + '"/>' +
      '<path d="M' + (x - 9.5) + ' ' + (y - 50) + ' a9.5 9.5 0 0 1 19 0 q-9 -5 -19 0z" fill="' + hair + '"/>';
  }
  function duck(x, y) {
    return '<ellipse cx="' + x + '" cy="' + (y + 13) + '" rx="22" ry="3.5" fill="#9ccbea"/>' +
      '<path d="M' + (x - 19) + ' ' + y + ' q2 13 19 13 q15 0 17 -11 q-9 4 -17 -1 q-8 -5 -19 -1z" fill="#fff" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="' + (x + 15) + '" cy="' + (y - 7) + '" r="8" fill="#fff" stroke="' + INK + '" stroke-width="1.6"/>' +
      '<path d="M' + (x + 22) + ' ' + (y - 8) + ' l9 2 l-9 3z" fill="#f2a53a"/>' +
      '<circle cx="' + (x + 17) + '" cy="' + (y - 9) + '" r="1.5" fill="' + INK + '"/>';
  }
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" role="img" aria-labelledby="pt-alt">' +
    '<title id="pt-alt">公园场景图</title>' +
    // sky, sun, clouds, hills, grass, path
    '<rect width="800" height="520" fill="#e6effc"/>' +
    '<circle cx="724" cy="62" r="30" fill="#ffd772"/><circle cx="724" cy="62" r="40" fill="#ffd772" opacity=".28"/>' +
    '<g fill="#fff"><ellipse cx="330" cy="58" rx="44" ry="15"/><ellipse cx="352" cy="46" rx="26" ry="15"/><ellipse cx="566" cy="96" rx="36" ry="12"/><ellipse cx="548" cy="87" rx="20" ry="12"/></g>' +
    '<path d="M0 222 Q130 160 280 210 T540 198 T800 212 V270 H0Z" fill="#cfe7c6"/>' +
    '<rect y="238" width="800" height="282" fill="#dcefd0"/>' +
    '<path d="M-10 512 C120 478 210 520 300 512 S520 525 810 500 V530 H-10Z" fill="#f3e8d0"/>' +
    '<g fill="#b9dba9"><ellipse cx="60" cy="300" rx="16" ry="5"/><ellipse cx="420" cy="262" rx="18" ry="5"/><ellipse cx="745" cy="300" rx="16" ry="5"/><ellipse cx="240" cy="410" rx="14" ry="4"/><ellipse cx="560" cy="478" rx="18" ry="5"/></g>' +
    // lake + ducks
    '<g id="el-lake"><ellipse cx="640" cy="388" rx="142" ry="58" fill="#bfdcf5" stroke="#9fc9ea" stroke-width="3"/>' +
    '<path d="M560 372 q10 -5 20 0 M700 418 q10 -5 20 0 M612 426 q10 -5 20 0 M716 366 q8 -4 16 0" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>' +
    '<g fill="#f08aa0"><circle cx="528" cy="436" r="4"/><circle cx="540" cy="444" r="4"/><circle cx="762" cy="430" r="4"/></g><g fill="#7cc08a"><rect x="527" y="440" width="2" height="9"/><rect x="539" y="448" width="2" height="8"/><rect x="761" y="434" width="2" height="9"/></g></g>' +
    '<g id="el-ducks">' + duck(606, 374) + duck(676, 400) + '</g>' +
    // children playing football
    '<g id="el-kids">' + kid(512, 312, '#e2674e', '#3b2a22', '#f1c9a5', 'kick') + kid(604, 296, '#3d4fe0', '#6b4a2e', '#d9a47c', 'run') + kid(690, 316, '#f2b134', '#2b2d3a', '#f1c9a5', 'cheer') +
    '<circle cx="552" cy="306" r="8" fill="#fff" stroke="' + INK + '" stroke-width="1.6"/><path d="M548 303 l4 -2 l4 3 l-2 5 l-5 0z" fill="' + INK + '"/></g>' +
    // tree, bird, bike, dog
    '<g id="el-tree"><path d="M160 352 L168 238 h28 l8 114z" fill="#a9744f"/><path d="M176 352 l4 -70 M190 352 l-2 -50" stroke="#8f5f3f" stroke-width="2" fill="none"/>' +
    '<circle cx="122" cy="204" r="54" fill="#6fb47e"/><circle cx="244" cy="204" r="56" fill="#6fb47e"/><circle cx="182" cy="168" r="80" fill="#7cc08a"/><circle cx="170" cy="118" r="52" fill="#8fcd98"/>' +
    '<g fill="#a7dbae"><circle cx="140" cy="150" r="9"/><circle cx="212" cy="112" r="7"/><circle cx="120" cy="214" r="7"/><circle cx="262" cy="206" r="8"/></g></g>' +
    '<g id="el-bird"><path d="M214 160 h44" stroke="#8f5f3f" stroke-width="4" stroke-linecap="round"/><path d="M216 150 l-12 -6 l4 12z" fill="#d9603f"/>' +
    '<ellipse cx="230" cy="148" rx="15" ry="11" fill="#f28b6b"/><circle cx="243" cy="140" r="8" fill="#f28b6b"/><path d="M250 138 l9 3 l-9 3z" fill="#f2b134"/><circle cx="245" cy="138" r="1.6" fill="' + INK + '"/><path d="M222 148 q8 6 16 0" fill="none" stroke="#d9603f" stroke-width="2.5" stroke-linecap="round"/></g>' +
    '<g id="el-bike" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="270" cy="356" r="22" stroke="' + INK + '" stroke-width="4"/><circle cx="336" cy="356" r="22" stroke="' + INK + '" stroke-width="4"/>' +
    '<path d="M270 356 L290 322 L324 322 L336 356 M290 322 L304 356 L270 356 M304 356 L324 322" stroke="#e2674e" stroke-width="4.5"/><path d="M324 322 l-5 -15 h12 M284 316 h14" stroke="' + INK + '" stroke-width="4.5"/><circle cx="304" cy="356" r="4" fill="' + INK + '" stroke="none"/></g>' +
    '<g id="el-dog"><path d="M112 372 q-16 -4 -12 -18" fill="none" stroke="#b97f4b" stroke-width="7" stroke-linecap="round"/><ellipse cx="148" cy="374" rx="40" ry="17" fill="#c98f5a"/>' +
    '<ellipse cx="170" cy="388" rx="14" ry="5" fill="#b97f4b"/><circle cx="190" cy="370" r="16" fill="#c98f5a"/><ellipse cx="180" cy="362" rx="8" ry="13" fill="#8f5f3f" transform="rotate(-24 180 362)"/>' +
    '<path d="M189 370 q4 4 8 0" fill="none" stroke="' + INK + '" stroke-width="2" stroke-linecap="round"/><ellipse cx="205" cy="374" rx="3.5" ry="2.8" fill="' + INK + '"/>' +
    '<text x="212" y="352" font-size="15" font-weight="700" fill="#62657a" font-family="system-ui,sans-serif">z</text><text x="224" y="340" font-size="11" font-weight="700" fill="#62657a" font-family="system-ui,sans-serif">z</text></g>' +
    // bench + woman
    '<g id="el-bench"><rect x="376" y="336" width="112" height="9" rx="3" fill="#c79a6b"/><rect x="376" y="349" width="112" height="9" rx="3" fill="#c79a6b"/><rect x="372" y="364" width="120" height="11" rx="4" fill="#b9835a"/>' +
    '<path d="M384 375 v22 M480 375 v22 M384 336 v28 M480 336 v28" stroke="#8f5f3f" stroke-width="6" stroke-linecap="round"/></g>' +
    '<g id="el-woman"><path d="M424 366 h30 v32" fill="none" stroke="#44506b" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="458" cy="401" rx="9" ry="4.5" fill="' + INK + '"/>' +
    '<rect x="414" y="318" width="27" height="50" rx="10" fill="#e58fa5"/><path d="M436 330 q14 12 18 30" fill="none" stroke="#f1c9a5" stroke-width="6" stroke-linecap="round"/>' +
    '<circle cx="428" cy="302" r="13.5" fill="#f1c9a5"/><path d="M414.5 302 a13.5 13.5 0 0 1 27 -2 q-10 -9 -20 -4 q-4 3 -7 6z" fill="#5b3a29"/><circle cx="414" cy="293" r="7" fill="#5b3a29"/>' +
    '<circle cx="433" cy="303" r="1.4" fill="' + INK + '"/><path d="M430 308 q4 3 7 0" fill="none" stroke="' + INK + '" stroke-width="1.4" stroke-linecap="round"/></g>' +
    // table, cup, cat
    '<g id="el-table"><path d="M64 444 L54 502 M166 444 L176 502 M84 444 L80 492 M146 444 L150 492" stroke="#8f5f3f" stroke-width="6" stroke-linecap="round"/><rect x="44" y="432" width="142" height="13" rx="4" fill="#c79a6b"/><rect x="44" y="432" width="142" height="4" rx="2" fill="#d6ae82"/></g>' +
    '<g id="el-cup"><path d="M112 398 q-5 -6 0 -11 M124 398 q-5 -6 0 -11" fill="none" stroke="#a2a5ba" stroke-width="2" stroke-linecap="round"/><path d="M103 406 h28 l-3 24 q-11 5 -22 0z" fill="#fff" stroke="' + INK + '" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M131 411 q11 1 9 9 q-2 6 -11 5" fill="none" stroke="' + INK + '" stroke-width="2"/><ellipse cx="117" cy="407" rx="12" ry="2.6" fill="#8f5f3f"/></g>' +
    '<g id="el-cat"><path d="M131 494 q20 2 17 -18" fill="none" stroke="#7d8298" stroke-width="6" stroke-linecap="round"/><ellipse cx="116" cy="486" rx="17" ry="16" fill="#8a8fa3"/><circle cx="116" cy="463" r="12.5" fill="#8a8fa3"/>' +
    '<path d="M105 458 l-1 -13 l10 7z M127 458 l1 -13 l-10 7z" fill="#8a8fa3"/><circle cx="111.5" cy="462" r="1.8" fill="' + INK + '"/><circle cx="120.5" cy="462" r="1.8" fill="' + INK + '"/><path d="M114 467 l2 2 l2 -2" fill="none" stroke="' + INK + '" stroke-width="1.3" stroke-linecap="round"/><ellipse cx="116" cy="492" rx="8" ry="7" fill="#c9ccd9"/></g>' +
    // boy reading on a blanket
    '<g id="el-boy"><path d="M268 478 h124 l16 30 h-156z" fill="#f7c9a8"/><path d="M290 478 l-10 30 M330 478 l0 30 M370 478 l10 30" stroke="#ef9f7a" stroke-width="4"/>' +
    '<path d="M306 488 q24 -16 48 0" fill="none" stroke="#44506b" stroke-width="12" stroke-linecap="round"/><rect x="316" y="440" width="28" height="42" rx="11" fill="#4aa3a2"/>' +
    '<path d="M318 452 q-8 12 4 20 M342 452 q8 12 -4 20" fill="none" stroke="#d9a47c" stroke-width="6" stroke-linecap="round"/>' +
    '<path d="M330 466 l-17 -5 v15 l17 5 l17 -5 v-15z" fill="#fff" stroke="' + INK + '" stroke-width="1.8" stroke-linejoin="round"/><path d="M330 466 v15" stroke="' + INK + '" stroke-width="1.8"/>' +
    '<circle cx="330" cy="425" r="14" fill="#d9a47c"/><path d="M316 424 a14 14 0 0 1 28 0 q-6 -7 -14 -6 q-8 -1 -14 6z" fill="#2b2d3a"/><path d="M324 429 q2 2 4 0 M333 429 q2 2 4 0" fill="none" stroke="' + INK + '" stroke-width="1.4" stroke-linecap="round"/></g>' +
    // girl with a hat, on the phone
    '<g id="el-girl" transform="translate(16 4)"><path d="M462 486 v22 M476 486 v22" stroke="#f1c9a5" stroke-width="6" stroke-linecap="round"/><path d="M455 442 h28 l10 48 h-48z" fill="#b693e0" stroke-linejoin="round"/>' +
    '<path d="M457 448 q-9 14 -5 26" fill="none" stroke="#f1c9a5" stroke-width="6" stroke-linecap="round"/><path d="M481 448 q12 -2 8 -18" fill="none" stroke="#f1c9a5" stroke-width="6" stroke-linecap="round"/>' +
    '<circle cx="469" cy="427" r="13.5" fill="#f1c9a5"/><path d="M456 428 q-2 16 2 22 M482 428 q2 12 0 16" stroke="#6b4a2e" stroke-width="5" fill="none" stroke-linecap="round"/>' +
    '<rect x="483" y="419" width="7" height="15" rx="2" fill="' + INK + '"/><path d="M455 417 a14 12 0 0 1 28 0z" fill="#f2b134"/><ellipse cx="469" cy="417" rx="25" ry="5.5" fill="#f2b134"/><path d="M455 414 h28" stroke="#e2674e" stroke-width="3"/>' +
    '<circle cx="465" cy="428" r="1.4" fill="' + INK + '"/><path d="M464 434 q4 3 7 0" fill="none" stroke="' + INK + '" stroke-width="1.4" stroke-linecap="round"/></g>' +
    '</svg>';
  return {
    id: 'park', viewBox: [800, 520], svg: svg,
    alt: '公园：左边一棵大树，树上有鸟，树下睡着一只狗，树旁边停着自行车；左下角的桌子上有一杯咖啡，桌子下面有一只猫；中间长椅上坐着一位女士；右边是湖，湖上两只鸭子；远处三个孩子踢足球；前面一个男孩坐着看书，一个戴帽子的女孩在打电话。',
    childEls: ['dog', 'cat', 'ducks', 'kids', 'boy', 'tree'],
    els: {
      tree: { kind: 'thing', count: 1, hit: [68, 66, 234, 290], anchor: { on: [182, 96], 'in': [140, 236], under: [140, 398], next_to: [300, 384] } },
      bird: { kind: 'animal', count: 1, hit: [200, 124, 64, 44], rel: [{ ref: 'tree', ok: ['in', 'on'] }], state: 'sit' },
      dog: { kind: 'animal', count: 1, hit: [96, 334, 136, 62], rel: [{ ref: 'tree', ok: ['under'] }], act: 'sleep' },
      bike: { kind: 'thing', count: 1, hit: [244, 302, 118, 80], rel: [{ ref: 'tree', ok: ['next_to'] }] },
      kids: { kind: 'person', count: 3, hit: [486, 236, 228, 86], act: 'play-football' },
      bench: { kind: 'thing', count: 1, hit: [368, 330, 128, 72], anchor: { on: [462, 366], under: [432, 404], 'in': [432, 380], next_to: [338, 400] }, rel: [{ ref: 'lake', ok: ['next_to'] }] },
      woman: { kind: 'person', count: 1, hit: [402, 284, 68, 124], rel: [{ ref: 'bench', ok: ['on'] }], state: 'sit' },
      lake: { kind: 'thing', count: 1, hit: [500, 330, 284, 118], anchor: { on: [640, 420], 'in': [640, 420], under: [640, 470], next_to: [470, 470] } },
      ducks: { kind: 'animal', count: 2, hit: [582, 352, 132, 68], rel: [{ ref: 'lake', ok: ['on', 'in'] }] },
      table: { kind: 'thing', count: 1, hit: [40, 384, 150, 122], anchor: { on: [158, 436], 'in': [150, 480], under: [150, 506], next_to: [228, 506] } },
      cup: { kind: 'thing', count: 1, hit: [94, 384, 54, 50], rel: [{ ref: 'table', ok: ['on'] }] },
      cat: { kind: 'animal', count: 1, hit: [92, 444, 62, 62], rel: [{ ref: 'table', ok: ['under'] }], state: 'sit' },
      boy: { kind: 'person', count: 1, hit: [282, 406, 98, 102], act: 'read' },
      girl: { kind: 'person', count: 1, hit: [456, 406, 62, 110], act: 'phone', state: 'wear-hat' }
    }
  };
})();

KT_DATA["picture-en"] = {
  "review": [
    "除下面注明出自知识点例句的句子外，其余英语句子、问句和判断题由编写者自拟，待英语母语者核对（尤其 on the lake / in the tree 的介词选择）",
    "机器语音读整句的停顿和连读不一定自然；任何一句都可以加 audio 换成真人录音"
  ],
  id: 'picture-en', lang: 'en', speech: 'en-US', scene: 'park',
  title: '看图说话：公园',
  subtitle: '一幅图，四件事：听句子指图、先自己说或写再对图核对、判断别人说得对不对、对着图提问。页面听不到你的声音，口头说的部分由你自己或搭档判断。',
  kcs: ['kt:en-skill-describe-picture', 'kt:en-there-is-are'],
  sourceNote: '标 ★ 的句子取自课程知识点 kt:en-skill-describe-picture 的例句或形式。',
  readingLabel: null, glossLabel: '中文',
  els: {
    tree: { name: 'tree', names: ['tree'], say: 'the tree', models: [{ t: "There's a big tree in the park.", s: 'there', g: '公园里有一棵大树。', src: 'kc', x: ['has'] }] },
    bird: { name: 'bird', names: ['bird'], say: 'the bird', models: [{ t: 'There is a bird in the tree.', s: 'there', g: '树上有一只鸟。', x: ['are', 'under'] }, { t: 'A bird is sitting in the tree.', s: 'prog', g: '一只鸟停在树上。', x: ['sit'] }] },
    dog: { name: 'dog', names: ['dog'], say: 'the dog', models: [{ t: 'A dog is sleeping under the tree.', s: 'prog', g: '一只狗正在树下睡觉。', src: 'kc', x: ['sleep', 'on'] }, { t: 'There is a dog under the tree.', s: 'there', g: '树下有一只狗。', x: ['has'] }] },
    bike: { name: 'bike', names: ['bike', 'bicycle'], say: 'the bike', models: [{ t: 'There is a bike next to the tree.', s: 'there', g: '树旁边有一辆自行车。', x: ['under', 'are'] }] },
    kids: { name: 'children', names: ['children', 'kids', 'boys', 'girls'], say: 'the children', models: [{ t: 'There are three children.', s: 'there', g: '有三个孩子。', src: 'kc', x: ['is', 'child'] }, { t: 'Three children are playing football.', s: 'prog', g: '三个孩子在踢足球。', x: ['is', 'play'] }] },
    bench: { name: 'bench', names: ['bench'], say: 'the bench', models: [{ t: 'There is a bench next to the lake.', s: 'there', g: '湖边有一张长椅。', x: ['in', 'has'] }] },
    woman: { name: 'woman', names: ['woman', 'lady'], say: 'the woman', models: [{ t: 'A woman is sitting on a bench next to the lake.', s: 'prog', g: '一位女士正坐在湖边的长椅上。', src: 'kc', x: ['sit'] }] },
    lake: { name: 'lake', names: ['lake'], say: 'the lake', models: [{ t: 'There is a lake in the park.', s: 'there', g: '公园里有一个湖。', x: ['has', 'are'] }] },
    ducks: { name: 'ducks', names: ['ducks', 'duck'], say: 'the ducks', models: [{ t: 'There are two ducks on the lake.', s: 'there', g: '湖上有两只鸭子。', x: ['is', 'duck'] }] },
    table: { name: 'table', names: ['table'], say: 'the table', models: [{ t: 'There is a table near the tree.', s: 'there', g: '树附近有一张桌子。', x: ['are', 'has'] }] },
    cup: { name: 'cup', names: ['cup', 'coffee'], say: 'the cup', models: [{ t: 'There is a cup on the table.', s: 'there', g: '桌子上有一个杯子。', x: ['in', 'has'] }] },
    cat: { name: 'cat', names: ['cat'], say: 'the cat', models: [{ t: 'The cat is under the table.', s: 'place', g: '猫在桌子下面。', src: 'kc', x: ['on', 'are'] }] },
    boy: { name: 'boy', names: ['boy'], say: 'the boy', models: [{ t: 'A boy is reading a book.', s: 'prog', g: '一个男孩正在看书。', x: ['read', 'are'] }] },
    girl: { name: 'girl', names: ['girl'], say: 'the girl', models: [{ t: 'A girl is talking on the phone.', s: 'prog', g: '一个女孩在打电话。', x: ['talk', 'in'] }, { t: 'She is wearing a hat.', s: 'state', g: '她戴着帽子。', x: ['wear'] }] }
  },
  modelOrder: ['tree', 'dog', 'bird', 'bike', 'table', 'cup', 'cat', 'bench', 'woman', 'lake', 'ducks', 'kids', 'boy', 'girl'],
  /* 指认：图上没有的东西（反向那一半：听到的不一定都在图上） */
  absent: [
    { id: 'horse', t: 'There is a horse next to the lake.', g: '湖边有一匹马。', why: '图上没有马。' },
    { id: 'man', t: 'A man is riding a bike.', g: '一个男人在骑自行车。', why: '图上有自行车，但没有人在骑，它停在树旁边。' }
  ],
  judgeCats: [
    { id: 'ok', label: '说得对' }, { id: 'place', label: '位置不对' }, { id: 'count', label: '数量不对' },
    { id: 'state', label: '动作和状态弄混了' }, { id: 'infer', label: '图上看不出来（没有，或只是推断）' }
  ],
  judge: [
    { id: 'j1', t: 'There are two ducks on the lake.', el: 'ducks', v: 'ok', why: '两只鸭子，在湖上，都对得上。', child: true },
    { id: 'j2', t: 'The cat is on the table.', el: 'cat', v: 'place', claim: { prep: 'on', ref: 'table' }, why: '猫在桌子下面。半透明的那只是“按这句话它应该在的地方”。', fix: 'The cat is under the table.', child: true },
    { id: 'j3', t: 'There are four children.', el: 'kids', v: 'count', why: '数一数：三个，不是四个。', fix: 'There are three children.', child: true },
    { id: 'j4', t: 'The girl is putting on a hat.', el: 'girl', v: 'state', why: 'putting on 是“正在把帽子戴上”这个动作；图上帽子已经在头上了，是状态，用 wearing。', fix: 'The girl is wearing a hat.' },
    { id: 'j5', t: 'The woman is tired.', el: 'woman', v: 'infer', why: '累不累从图上看不出来，这是推断。要说就用 maybe 标出来，不能当事实说。', fix: 'Maybe the woman is tired.' },
    { id: 'j6', t: 'A dog is sleeping under the tree.', el: 'dog', v: 'ok', why: '狗、在睡觉、在树下，都对得上。', child: true },
    { id: 'j7', t: 'A man is riding the bike.', el: 'bike', v: 'infer', why: '图上没有男人，也没有人在骑车。图上没有的不能当事实说。', fix: 'There is a bike next to the tree.' }
  ],
  /* 提问：每个问题带一条场景事实；页面先拿它和图的元素清单核对，对不上的问题不会出现 */
  questions: [
    { id: 'q1', el: 'dog', intent: '问狗在哪儿', k: ['Where', 'is', 'the dog', '?'], a: "It's under the tree.", ag: '在树下。', fact: { type: 'where', el: 'dog', prep: 'under', ref: 'tree' }, child: true },
    { id: 'q2', el: 'cat', intent: '问猫在哪儿', k: ['Where', 'is', 'the cat', '?'], a: "It's under the table.", ag: '在桌子下面。', fact: { type: 'where', el: 'cat', prep: 'under', ref: 'table' }, child: true },
    { id: 'q3', el: 'ducks', intent: '问有几只鸭子', k: ['How many', 'ducks', 'are', 'there', '?'], a: 'There are two.', ag: '有两只。', fact: { type: 'count', el: 'ducks', n: 2 }, child: true },
    { id: 'q4', el: 'kids', intent: '问有几个孩子', k: ['How many', 'children', 'are', 'there', '?'], a: 'There are three.', ag: '有三个。', fact: { type: 'count', el: 'kids', n: 3 } },
    { id: 'q5', el: 'boy', intent: '问男孩在做什么', k: ['What', 'is', 'the boy', 'doing', '?'], a: "He's reading a book.", ag: '他在看书。', fact: { type: 'doing', el: 'boy', act: 'read' }, child: true },
    { id: 'q6', el: 'kids', intent: '问孩子们在做什么', k: ['What', 'are', 'the children', 'doing', '?'], a: "They're playing football.", ag: '他们在踢足球。', fact: { type: 'doing', el: 'kids', act: 'play-football' } },
    { id: 'q7', el: 'bird', intent: '问树上有没有鸟', k: ['Is', 'there', 'a bird', 'in the tree', '?'], a: 'Yes, there is.', ag: '有。', fact: { type: 'exists', el: 'bird', prep: 'in', ref: 'tree', value: true } },
    { id: 'q8', el: 'dog', intent: '问长椅上有没有狗', k: ['Is', 'there', 'a dog', 'on the bench', '?'], a: "No, there isn't. The dog is under the tree.", ag: '没有。狗在树下。', fact: { type: 'exists', el: 'dog', prep: 'on', ref: 'bench', value: false } },
    { id: 'q9', el: 'cup', intent: '问杯子在哪儿', k: ['Where', 'is', 'the cup', '?'], a: "It's on the table.", ag: '在桌子上。', fact: { type: 'where', el: 'cup', prep: 'on', ref: 'table' } }
  ],
  askTip: '英语问句里 is / are 要放到主语前面：Where is the dog?，不是 Where the dog is?',
  /* 受控词表：只用这些词做确定性核对 */
  parse: {
    order: 'prep-ref', det: '(?:the|a|an)\\s+',
    preps: { on: ['on top of', 'on'], under: ['under', 'below', 'beneath'], 'in': ['inside', 'in'], next_to: ['next to', 'beside', 'by'] },
    numbers: { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, '2': 2, '3': 3, '4': 4, '5': 5 },
    inferMark: '\\b(maybe|perhaps|probably|i think|looks?|seems?|might|may)\\b'
  },
  structures: [
    { id: 'there', label: 'There is / are …', re: '\\bthere\\s*(is|are|\'s|’s)\\b' },
    { id: 'prog', label: '… is / are doing', re: '\\b(is|are|\'s|’s|\'re|’re)\\s+\\w+ing\\b' },
    { id: 'place', label: '… is under / on / next to …', re: '\\b(is|are|\'s|’s)\\s+(on|under|in|next to|beside|behind|near|in front of|between)\\b' }
  ],
  isPosition: '\\b(on|under|below|in|inside|next to|beside|by|near|behind|in front of|between|left|right)\\b',
  isAction: '\\b\\w+ing\\b',
  traps: [
    { re: '\\b(park|picture|lake|tree|table|bench)\\s+(has|have)\\b', msg: '说“某处有某物”用 There is / are …，不用 has（*The park has a dog）。have 只表示“谁拥有”。' },
    { re: '\\bthere\\s+(is|\'s|’s)\\s+(two|three|four|five|some|many)\\b', msg: 'there is 后面是复数：两个以上用 There are …（*There is two cats）。' },
    { re: '^(?!.*\\b(is|are|am|was|were|\'s|’s|\'re|’re)\\b).*\\b(?!morning|evening|something|nothing|anything|building)\\w{3,}ing\\b', msg: '进行时漏了 be：A boy is running，不是 *A boy running。' },
    { re: '\\bin\\s+the\\s+(table|bench)\\b', msg: '在表面上用 on：on the table / on the bench。' }
  ],
  frames: ['There is a … on / under / next to the …', 'There are two / three …', 'A … is …ing …'],
  areaHint: ['左边还有什么？', '上面还有什么？', '右边的水上呢？', '最前面的人在做什么？'],
  partner: '和搭档玩：一个人看着图问，另一个人回答；或者一个人描述，另一个人不看图，照着画或摆。口头说的页面听不到，不记分。'
};

KT_DATA["picture-zh"] = {
  "review": [
    "除注明出自知识点例句或形式的句子外，其余中文句子、拼音和问句由编写者自拟，待对外汉语教师核对",
    "量词：一张长椅（也说一条、一把）、一位女士；“湖里有两只鸭子”与“湖上有两只鸭子”都收为可接受",
    "拼音按词分写，“一”“不”标的是变调后的实际读音",
    "机器语音可能读错轻声和儿化；任何一句都可以加 audio 换成真人录音"
  ],
  id: 'picture-zh', lang: 'zh', speech: 'zh-CN', scene: 'park',
  title: '看图说话：公园（中文）',
  subtitle: '一幅图，四件事：听句子指图、先自己说或写再对图核对、判断别人说得对不对、对着图提问。页面听不到你的声音，口头说的部分由你自己或搭档判断。',
  kcs: ['kt:zh-skill-describe-picture', 'kt:zh-existential-sentences'],
  sourceNote: '标 ★ 的句子取自课程知识点 kt:zh-skill-describe-picture、kt:zh-existential-sentences 的例句或形式。',
  readingLabel: '拼音', glossLabel: 'English',
  els: {
    tree: { name: '树', names: ['大树', '树'], say: '树', r: 'shù', models: [{ t: '公园里有一棵大树。', r: 'Gōngyuán li yǒu yì kē dà shù.', s: 'you', g: 'There is a big tree in the park.', k: ['公园里', '有', '一棵', '大树'], x: ['在'], alt: ['大树在公园里'] }] },
    bird: { name: '鸟', names: ['小鸟', '鸟'], say: '鸟', r: 'niǎo', models: [{ t: '树上有一只鸟。', r: 'Shù shang yǒu yì zhī niǎo.', s: 'you', g: 'There is a bird in the tree.', k: ['树上', '有', '一只', '鸟'], x: ['在', '树'], alt: ['鸟在树上', '一只鸟在树上'] }] },
    dog: { name: '狗', names: ['小狗', '狗'], say: '狗', r: 'gǒu', models: [{ t: '狗在树下睡觉。', r: 'Gǒu zài shù xià shuìjiào.', s: 'zai', g: 'The dog is sleeping under the tree.', k: ['狗', '在', '树下', '睡觉'], x: ['有'] }, { t: '树下有一只狗。', r: 'Shù xià yǒu yì zhī gǒu.', s: 'you', g: 'There is a dog under the tree.', k: ['树下', '有', '一只', '狗'], x: ['在'], alt: ['狗在树下', '一只狗在树下'] }] },
    bike: { name: '自行车', names: ['自行车', '单车'], say: '自行车', r: 'zìxíngchē', models: [{ t: '树旁边停着一辆自行车。', r: 'Shù pángbiān tíngzhe yí liàng zìxíngchē.', s: 'zhe', g: 'A bike is parked next to the tree.', k: ['树旁边', '停着', '一辆', '自行车'], x: ['在', '正在停'] }] },
    kids: { name: '孩子', names: ['孩子', '小孩', '小朋友'], say: '孩子们', r: 'háizimen', models: [{ t: '三个孩子在踢足球。', r: 'Sān ge háizi zài tī zúqiú.', s: 'prog', g: 'Three children are playing football.', k: ['三个', '孩子', '在', '踢', '足球'], x: ['着'] }] },
    bench: { name: '长椅', names: ['长椅', '椅子'], say: '长椅', r: 'chángyǐ', models: [{ t: '湖边有一张长椅。', r: 'Hú biān yǒu yì zhāng chángyǐ.', s: 'you', g: 'There is a bench by the lake.', k: ['湖边', '有', '一张', '长椅'], x: ['在', '湖'] }] },
    woman: { name: '女士', names: ['女士', '女人', '阿姨', '妇女'], say: '女士', r: 'nǚshì', models: [{ t: '长椅上坐着一位女士。', r: 'Chángyǐ shang zuòzhe yí wèi nǚshì.', s: 'zhe', g: 'A woman is sitting on the bench.', k: ['长椅上', '坐着', '一位', '女士'], x: ['在', '长椅'] }] },
    lake: { name: '湖', names: ['湖'], say: '湖', r: 'hú', models: [{ t: '公园里有一个湖。', r: 'Gōngyuán li yǒu yí ge hú.', s: 'you', g: 'There is a lake in the park.', k: ['公园里', '有', '一个', '湖'], x: ['在'], alt: ['湖在公园里'] }] },
    ducks: { name: '鸭子', names: ['鸭子', '鸭'], say: '鸭子', r: 'yāzi', models: [{ t: '湖里有两只鸭子。', r: 'Hú li yǒu liǎng zhī yāzi.', s: 'you', g: 'There are two ducks on the lake.', k: ['湖里', '有', '两只', '鸭子'], x: ['二只', '在'], alt: ['两只鸭子在湖里'] }] },
    table: { name: '桌子', names: ['桌子'], say: '桌子', r: 'zhuōzi', models: [{ t: '草地上有一张桌子。', r: 'Cǎodì shang yǒu yì zhāng zhuōzi.', s: 'you', g: 'There is a table on the grass.', k: ['草地上', '有', '一张', '桌子'], x: ['在', '草地'] }] },
    cup: { name: '咖啡', names: ['咖啡', '杯子'], say: '咖啡', r: 'kāfēi', models: [{ t: '桌子上有一杯咖啡。', r: 'Zhuōzi shang yǒu yì bēi kāfēi.', s: 'you', g: 'There is a cup of coffee on the table.', src: 'kc', k: ['桌子上', '有', '一杯', '咖啡'], x: ['桌子', '在'] }, { t: '桌子上放着一杯咖啡。', r: 'Zhuōzi shang fàngzhe yì bēi kāfēi.', s: 'zhe', g: 'A cup of coffee sits on the table.', k: ['桌子上', '放着', '一杯', '咖啡'], x: ['在'] }] },
    cat: { name: '猫', names: ['小猫', '猫'], say: '猫', r: 'māo', models: [{ t: '猫在桌子下边。', r: 'Māo zài zhuōzi xiàbian.', s: 'zai', g: 'The cat is under the table.', src: 'kc', k: ['猫', '在', '桌子', '下边'], x: ['有'], alt: ['桌子下边有猫'] }] },
    boy: { name: '男孩', names: ['男孩', '男孩子'], say: '男孩', r: 'nánhái', models: [{ t: '男孩正在看书。', r: 'Nánhái zhèngzài kàn shū.', s: 'prog', g: 'The boy is reading.', src: 'kc', k: ['男孩', '正在', '看', '书'], x: ['着'] }] },
    girl: { name: '女孩', names: ['女孩', '女孩子'], say: '女孩', r: 'nǚhái', models: [{ t: '女孩戴着帽子。', r: 'Nǚhái dàizhe màozi.', s: 'zhe', g: 'The girl is wearing a hat.', src: 'kc', k: ['女孩', '戴着', '帽子'], x: ['正在戴'] }, { t: '女孩在打电话。', r: 'Nǚhái zài dǎ diànhuà.', s: 'prog', g: 'The girl is on the phone.', k: ['女孩', '在', '打', '电话'], x: ['着'] }] }
  },
  modelOrder: ['tree', 'bird', 'dog', 'bike', 'table', 'cup', 'cat', 'bench', 'woman', 'lake', 'ducks', 'kids', 'boy', 'girl'],
  absent: [
    { id: 'horse', t: '湖边有一匹马。', r: 'Hú biān yǒu yì pǐ mǎ.', g: 'There is a horse by the lake.', why: '图上没有马。' },
    { id: 'man', t: '一个男人在骑自行车。', r: 'Yí ge nánrén zài qí zìxíngchē.', g: 'A man is riding a bike.', why: '图上有自行车，但没有人在骑，它停在树旁边。' }
  ],
  judgeCats: [
    { id: 'ok', label: '说得对' }, { id: 'place', label: '位置不对' }, { id: 'count', label: '数量不对' },
    { id: 'state', label: '动作和状态弄混了' }, { id: 'infer', label: '图上看不出来（没有，或只是推断）' }
  ],
  judge: [
    { id: 'j1', t: '湖里有两只鸭子。', r: 'Hú li yǒu liǎng zhī yāzi.', el: 'ducks', v: 'ok', why: '两只鸭子，在湖里，都对得上。', child: true },
    { id: 'j2', t: '猫在桌子上边。', r: 'Māo zài zhuōzi shàngbian.', el: 'cat', v: 'place', claim: { prep: 'on', ref: 'table' }, why: '猫在桌子下边。半透明的那只是“按这句话它应该在的地方”。', fix: '猫在桌子下边。', child: true },
    { id: 'j3', t: '图上有四个孩子。', r: 'Tú shang yǒu sì ge háizi.', el: 'kids', v: 'count', why: '数一数：三个，不是四个。', fix: '图上有三个孩子。', child: true },
    { id: 'j4', t: '女孩正在戴帽子。', r: 'Nǚhái zhèngzài dài màozi.', el: 'girl', v: 'state', why: '“正在戴”是把帽子往头上戴的动作；图上帽子已经在头上了，是状态，用“戴着”。', fix: '女孩戴着帽子。' },
    { id: 'j5', t: '那位女士很累。', r: 'Nà wèi nǚshì hěn lèi.', el: 'woman', v: 'infer', why: '累不累从图上看不出来，这是推断。要说就用“好像”标出来，不能当事实说。', fix: '那位女士好像很累。' },
    { id: 'j6', t: '狗在树下睡觉。', r: 'Gǒu zài shù xià shuìjiào.', el: 'dog', v: 'ok', why: '狗、在睡觉、在树下，都对得上。', child: true },
    { id: 'j7', t: '一个男人在骑自行车。', r: 'Yí ge nánrén zài qí zìxíngchē.', el: 'bike', v: 'infer', why: '图上没有男人，也没有人在骑车。图上没有的不能当事实说。', fix: '树旁边停着一辆自行车。' }
  ],
  questions: [
    { id: 'q1', el: 'dog', intent: 'Ask where the dog is', k: ['狗', '在', '哪儿', '？'], r: 'Gǒu zài nǎr?', a: '在树下。', ar: 'Zài shù xià.', ag: 'Under the tree.', fact: { type: 'where', el: 'dog', prep: 'under', ref: 'tree' }, child: true },
    { id: 'q2', el: 'cat', intent: 'Ask where the cat is', k: ['猫', '在', '哪儿', '？'], r: 'Māo zài nǎr?', a: '在桌子下边。', ar: 'Zài zhuōzi xiàbian.', ag: 'Under the table.', fact: { type: 'where', el: 'cat', prep: 'under', ref: 'table' }, child: true },
    { id: 'q3', el: 'ducks', intent: 'Ask how many ducks there are', k: ['湖里', '有', '几只', '鸭子', '？'], r: 'Hú li yǒu jǐ zhī yāzi?', a: '有两只。', ar: 'Yǒu liǎng zhī.', ag: 'There are two.', fact: { type: 'count', el: 'ducks', n: 2 }, child: true },
    { id: 'q4', el: 'kids', intent: 'Ask how many children there are', k: ['图上', '有', '几个', '孩子', '？'], r: 'Tú shang yǒu jǐ ge háizi?', a: '有三个。', ar: 'Yǒu sān ge.', ag: 'There are three.', fact: { type: 'count', el: 'kids', n: 3 } },
    { id: 'q5', el: 'boy', intent: 'Ask what the boy is doing', k: ['男孩', '在', '做', '什么', '？'], r: 'Nánhái zài zuò shénme?', a: '他在看书。', ar: 'Tā zài kàn shū.', ag: 'He is reading.', fact: { type: 'doing', el: 'boy', act: 'read' }, child: true },
    { id: 'q6', el: 'kids', intent: 'Ask what the children are doing', k: ['孩子们', '在', '做', '什么', '？'], r: 'Háizimen zài zuò shénme?', a: '他们在踢足球。', ar: 'Tāmen zài tī zúqiú.', ag: 'They are playing football.', fact: { type: 'doing', el: 'kids', act: 'play-football' } },
    { id: 'q7', el: 'bird', intent: 'Ask whether there is a bird in the tree', k: ['树上', '有', '鸟', '吗', '？'], r: 'Shù shang yǒu niǎo ma?', a: '有，树上有一只鸟。', ar: 'Yǒu, shù shang yǒu yì zhī niǎo.', ag: 'Yes, there is one.', fact: { type: 'exists', el: 'bird', prep: 'on', ref: 'tree', value: true } },
    { id: 'q8', el: 'dog', intent: 'Ask whether there is a dog on the bench', k: ['长椅上', '有', '狗', '吗', '？'], r: 'Chángyǐ shang yǒu gǒu ma?', a: '没有。狗在树下。', ar: 'Méiyǒu. Gǒu zài shù xià.', ag: 'No. The dog is under the tree.', fact: { type: 'exists', el: 'dog', prep: 'on', ref: 'bench', value: false } },
    { id: 'q9', el: 'cup', intent: 'Ask what is on the table', k: ['桌子上', '有', '什么', '？'], r: 'Zhuōzi shang yǒu shénme?', a: '桌子上有一杯咖啡。', ar: 'Zhuōzi shang yǒu yì bēi kāfēi.', ag: 'There is a cup of coffee on the table.', fact: { type: 'where', el: 'cup', prep: 'on', ref: 'table' } }
  ],
  askTip: '中文问句不用换语序：把要问的那一部分换成“哪儿／几／什么”，或者句末加“吗”。',
  parse: {
    order: 'ref-prep', det: '',
    preps: { on: ['上边', '上面', '上'], under: ['下边', '下面', '底下', '下'], 'in': ['里边', '里面', '里'], next_to: ['旁边', '边上', '边'] },
    numbers: { '一': 1, '两': 2, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '2': 2, '3': 3, '4': 4, '5': 5 },
    numberUnit: '[个只张位辆棵杯条把]',
    inferMark: '(好像|可能|也许|看起来|大概|我觉得|应该)'
  },
  structures: [
    { id: 'zhe', label: '处所＋V着＋数量＋名词', re: '[放坐停挂戴站躺拿穿]着' },
    { id: 'you', label: '处所＋有＋数量＋名词', re: '(上|下|里|边|旁边|上边|下边|里边|上面|下面|里面)有' },
    { id: 'prog', label: '（正）在＋动词', re: '(正在|在)(看|打|踢|睡|玩|做|跑|吃|喝|读|说|走|游)' },
    { id: 'zai', label: '名词＋在＋处所', re: '在.{1,5}(上|下|里|旁边|边)' }
  ],
  isPosition: '(上|下|里|旁边|左边|右边|中间|前边|后边|前面|后面|边)',
  isAction: '(正在|在(看|打|踢|睡|玩|做|跑|吃|喝|读)|着)',
  traps: [
    { re: '(桌子|长椅|树|椅子)有', msg: '处所后面要加方位词：桌子上有……，不说 *桌子有一本书。' },
    { re: '^有.+在.+(上|下|里|旁边|边)', msg: '这是英语 There is … on … 的语序。中文把处所放前面：桌子上有一杯咖啡，不说 *有一杯咖啡在桌子上。' },
    { re: '正在(戴|穿)', msg: '“正在戴”是把它戴上去的动作。已经戴在头上是状态，用“戴着”。' },
    { re: '^在.+[放挂坐停]着', msg: '存现句句首的处所不加“在”：桌子上放着一本书，不说 *在桌子上放着一本书。' },
    { re: '在(桌子|长椅|树|湖|草地)[，。！]?$', msg: '“在”后面的处所要带方位词：书在桌子上，不说 *书在桌子。' }
  ],
  frames: ['（处所）上／下／里／旁边 有 一＋量词＋……', '（处所）上 放着／坐着／停着 一＋量词＋……', '…… 在 （处所）上／下／里', '…… 正在／在 ……'],
  areaHint: ['左边还有什么？', '上面还有什么？', '右边的水里呢？', '最前面的人在做什么？'],
  partner: '和搭档玩：一个人看着图问，另一个人回答；或者一个人描述，另一个人不看图，照着画或摆。口头说的页面听不到，不记分。'
};

#!/usr/bin/env node
/* Generate a blueprint from the command line. No dependencies.
 *
 *   node blueprint/plan.js --list                         # languages and tracks
 *   node blueprint/plan.js --lang ja --age 8-12           # rank tracks for a learner
 *   node blueprint/plan.js --lang ja --track ja-hobby --age 8-12 --who child \
 *        --minutes 15 --days 5 --device tablet --theme "恐龙" --out my-plan
 *
 * Writes <out>/blueprint.json and <out>/PLAN.md. Without --out, prints the JSON.
 * Run `python3 curriculum/build.py` and `python3 blueprint/build.py` first if the data changed. */
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');

global.window = global;
for (const f of ['dist/data.js', 'blocks/registry.js', 'blocks/catalog.js', 'blueprint/science.js', 'blueprint/planner.js']) {
  const file = path.join(root, f);
  if (!fs.existsSync(file)) { console.error(`missing ${f} — run python3 curriculum/build.py && python3 blueprint/build.py`); process.exit(1); }
  require(file);
}

const args = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  if (!argv[i].startsWith('--')) continue;
  const key = argv[i].slice(2);
  args[key] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
}

const catalog = KTCatalog({ primitives: window.PRIMITIVES, assets: window.ASSET_LIBRARY, registry: window.KT_REGISTRY, root: '' });
const planner = KTPlanner({ curriculum: window.CURRICULUM, primitives: window.PRIMITIVES, catalog, science: window.KT_SCIENCE, profiles: window.KT_TRACK_PROFILES });

function listTracks(lang, profile) {
  planner.rankTracks(Object.assign({ lang }, profile)).forEach(t => {
    const c = t.coverage;
    console.log(`  ${t.id.padEnd(20)} ${t.title}\n${' '.repeat(23)}${t.kcCount} 个知识点 · 现成页面 ${c.block} · 可直接用 ${c.impl} · 可借用 ${c.borrow} · 只有契约 ${c.spec}${t.fit ? ' · 适合这位学习者' : ''}`);
  });
}

if (args.list || !args.lang) {
  planner.languages().forEach(l => { console.log(`${l}  ${planner.LANGS[l]}`); listTracks(l, {}); });
  if (!args.list) console.log('\n用法：node blueprint/plan.js --lang <en|ja|zh> --track <id> [--age 5-7|8-12|13-17|adult] [--who self|child|students] [--start-stage 0] [--minutes 15] [--days 5] [--device phone|tablet|web|print] [--theme "…"] [--out dir]');
  process.exit(0);
}
if (!window.CURRICULUM[args.lang]) { console.error(`unknown language ${args.lang}; have ${planner.languages().join(', ')}`); process.exit(1); }
if (!args.track) {
  console.log(`${planner.LANGS[args.lang]} 的课程方案（最合适的排在前面）：`);
  listTracks(args.lang, { age: args.age, start: args.start });
  process.exit(0);
}

(function main() {
let bp;
try {
  bp = planner.plan({ lang: args.lang, track: args.track, age: args.age || 'adult', who: args.who || 'self', startStage: args['start-stage'] || 0,
    minutesPerDay: args.minutes, daysPerWeek: args.days, minutesPerKc: args['minutes-per-kc'], device: args.device || 'web', theme: args.theme === true ? '' : args.theme, need: args.need === true ? '' : args.need });
} catch (e) { console.error(e.message); process.exit(1); }

if (!args.out) {
  // no process.exit here: it can cut off a large write to a pipe
  process.stdout.write(JSON.stringify(bp, null, 1) + '\n');
  return;
}
const out = path.resolve(process.cwd(), args.out);
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'blueprint.json'), JSON.stringify(bp, null, 1) + '\n');
fs.writeFileSync(path.join(out, 'PLAN.md'), planner.markdown(bp));
const c = bp.summary.coverage;
console.log(`${bp.track.title}\n${bp.summary.kcs} 个知识点 · 约 ${bp.summary.weeks} 周 · ${bp.summary.primitives} 个教学原语（${bp.summary.primitivesToBuild} 个还要补页面）`);
console.log(`现成页面 ${c.block} · 可直接用 ${c.impl} · 可借用 ${c.borrow} · 只有契约 ${c.spec}`);
console.log(`已写入 ${path.join(args.out, 'blueprint.json')} 和 ${path.join(args.out, 'PLAN.md')}`);
})();

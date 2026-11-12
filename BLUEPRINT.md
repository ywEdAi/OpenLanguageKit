# BLUEPRINT.md — how a coding agent builds a language-learning app from this repository

You are a coding agent. A person (a parent, a teacher, a self-learner — often not technical) has asked you for a language-learning app, in one or two sentences. This repository gives you the course content, the teaching design and working reference pages. Your job is to turn their request into a plan they can approve, then into an app.

The look, the story, the device and the game mechanics are yours to design. The learning rules in section 5 are not.

## 1. What is in the repository

| Layer | Question it answers | Where | Entry point |
| --- | --- | --- | --- |
| Knowledge points (KCs) | What must be learned, in what order | `curriculum/<en\|ja\|zh>/graph.json` | `curriculum/SCHEMA.md` |
| Tracks | Which KCs, in which stages, for which learner | `tracks` inside the same `graph.json` | `blueprint/profiles.json` for age / starting point |
| Pedagogical primitives | How one kind of thing is taught: object, learner action, system response, check, evidence, limits | `curriculum/primitives/primitives.json` | `curriculum/primitives/README.md` |
| Bindings | Which primitive each KC uses, and what exactly is compared or checked this time | `primitives[]` on every KC in `graph.json` | — |
| Blocks | Finished, embeddable pages for script and sound systems; one engine, one data pack per language | `blocks/` | `blocks/README.md`, `blocks/registry.js` |
| Learning sciences | Which research idea a design choice leans on, with evidence status and limits | `pedagogy/graph.json`, `blueprint/science-links.json` | `pedagogy/README.md` |
| Blueprint | All of the above selected and scheduled for one learner | `node blueprint/plan.js` | this file |

Everything is plain JSON, Python 3 standard library and dependency-free JavaScript. User-facing text is Chinese; examples are in the target language with a Chinese gloss (`{zh, reading, en}` for Chinese as a second language).

Numbers at the time of writing: 950 KCs (en 353, ja 386, zh 211), 14 tracks, 56 primitives, 6 block engines with 18 data packs. Run the commands; do not quote these numbers from memory.

## 2. From a one-line request to a blueprint

1. **Extract the profile.** You need: who is learning (`self | child | students`), age band (`5-7 | 8-12 | 13-17 | adult`), language (`en | ja | zh`), whether they start from zero, minutes per day and days per week, device (`phone | tablet | web | print`), and anything the learner likes (theme). Ask only for what is missing, in one message, in plain words. Never ask a parent about CEFR levels or pedagogy. Keep the person's own sentence as `profile.need` (`--need "…"`): it is carried into the blueprint and the prompt, and anything in it that the chosen track does not cover must be named back to them (what is missing, what you propose to add, what needs a native speaker or teacher to check) before you build. If no track is meant for the learner's age, the blueprint has `ageFit: false`: keep the KCs and order, redo examples, pacing and UI for that age, and say what you changed. `docs/agent-custom-flow.md` (Chinese) walks one out-of-track request end to end and separates what the user decides from what you may suggest.
2. **Pick a track.**
   ```sh
   node blueprint/plan.js --list
   node blueprint/plan.js --lang ja --age 8-12        # ranked for this learner
   ```
3. **Find the starting stage.** From zero: stage 0. Otherwise use the can-do probes in the blueprint (`diagnosis.stages[].probes`): ask them one stage at a time and start at the first stage where fewer than three in four are a clear yes. This is a self-report or an adult's observation of a child. Say so; do not call it a test result.
4. **Generate the blueprint.**
   ```sh
   node blueprint/plan.js --lang ja --track ja-hobby --age 8-12 --who child \
     --start-stage 0 --minutes 15 --days 5 --device tablet --theme "恐龙" --out my-plan
   ```
   This writes `my-plan/blueprint.json` (machine-readable) and `my-plan/PLAN.md` (for the person). The same blueprint can be made in the browser at `index.html` and downloaded; if the person attached one, use it.
5. **Show the person a plan before writing code.** One screen, their language, no jargon: what the first two weeks contain, what a session looks like, what already works today, what you will build first, and what you will not claim (section 5). Wait for a yes.

## 3. Reading `blueprint.json`

| Field | Use it for |
| --- | --- |
| `profile`, `track`, `start` | The header of the plan |
| `assumptions` | Scheduling assumptions (minutes per KC, review share). They are assumptions, not measurements; surface them and let the person change them |
| `agenda[]` | Week-by-week: `focus` (new KC ids), `review` (last week's ids), `coverage` |
| `steps[]` | Every KC in order with `kc` (mastery statements, examples, common errors, item types, required prerequisites), its `primitive` + `binding`, `support` primitives, an existing `page` if one is bound, and `coverage` |
| `primitives[]` | Each teaching action the plan needs, most-used first, with the full contract and `kcsWithPage` |
| `diagnosis` | Can-do probes per stage |
| `science` | Research references per primitive family, each with `evidenceStatus` and a limitation |
| `invariants[]` | The rules in section 5 |
| `readNext[]` | Files to open for full detail |

`coverage` values: `block` — a finished page in `blocks/` is bound to this KC; `impl` — the KC's primary primitive has a working English page in the asset library; `borrow` — an implementation exists for another language or other KCs, usable as a starting point; `spec` — contract only, you build it.

For the full KC (description, forms, boundaries, citations) read `curriculum/<lang>/graph.json` by `id`. For the full primitive read `curriculum/primitives/primitives.json`.

## 4. Building

**Order of work.** Build what the first two weeks of `agenda` need. Within that, take `primitives[]` in order: the first few cover most KCs. A primitive is a reusable engine; a KC is data for it (`binding` tells you what data).

**Reuse before you build.**
- `page` present on a step: embed it (`<iframe src="blocks/…&kc=<kc id>">`) or port it. Blocks post evidence events to the host with `postMessage`; the contract is in `blocks/README.md`.
- A new language or script for an existing engine is usually one data file. See "加一种语言" in `blocks/README.md`.
- English `impl` pages live in `edu-ai-builders/language-learning-asset-library` (MIT). They are referenced by asset id, not copied here.

**Building a primitive that has no page.** Implement the contract, field by field:
- `object` — the one thing the learner works on from start to finish. Keep it on screen.
- `learnerAction` — usually three steps: change a visible structure; judge items into locked categories (the last category is the reverse half); produce something that an executable check can hold.
- `systemResponse` — what changes on the object after each action. "Correct / wrong" alone is not a response.
- `ui.screen`, `ui.interactions`, `ui.childVariant`, `ui.adultVariant`, `ui.accessibility` — a starting layout per audience. Adapt to the device; keep keyboard and touch both working.
- `check.rules`, `check.independence` — implement all of them.
- `evidence.events`, `evidence.licensed`, `evidence.prohibited` — what to log and what you may say from it.
- `scaffold.hints`, `scaffold.fade` — the hint ladder and when support is withdrawn.
- `requires` — if it needs a microphone, recordings or a partner and the app has none, use `fallback` or do only the steps that still hold. Do not fake the missing part.
- `failureModes` — each has a `test`; use them as your test cases.

**Variation is unlimited.** Change the world (dinosaurs, a train line, a kitchen), the form (story, map, card table, daily ritual, printed sheets with a phone as the audio player), the device, the session length, the reward of finishing. Combine primitives on one object (`stacksWith`) so a session is one activity rather than a row of drills. A lesson has one anchor object from start to finish.

**Diagnosis and progress.** Build items from each KC's `itemTypes` and its primary primitive's `check.rules`. Keep the first attempt. Report progress as what was observed ("read 9 of 12 new words unaided, twice, a week apart"), never as a percentage of "mastery".

**Scheduling.** New KCs follow `agenda`; never present a KC before its `prerequisites`. Bring last week's KCs back (`review`). Adjust pace from observed first-attempt results, and tell the person when you do.

## 5. Rules that do not change with the design

These are `invariants` in every blueprint. They are what makes evidence from the app worth believing.

1. **First attempt is kept.** Save it before any hint, replay or answer. Later tries are retries.
2. **Independent and assisted are counted apart.** Correct after a hint, a reveal or a slowed replay is "assisted". Self-ratings are counted separately and are not attempts.
3. **Checks hold both ends.** Too weak fails; gaming (always one side, guessing, copying) also fails.
4. **Keep the reverse half.** Teach a pattern together with where it stops working.
5. **Say only what the evidence licenses.** Stay within `evidence.licensed` (`maxStrength`, `minObservations`); nothing from `evidence.prohibited`; no mastery probabilities, no level scores.
6. **No pronunciation scoring** without a validated assessor. Play, record, compare side by side; a human listener or the learner decides.
7. **Scripted interaction.** Dialogue turns come from written, human-checked branches. If you add a generative model, label it and never use its reply as a judgement.
8. **A child version is not a small adult version.** Follow `ui.childVariant`: fewer choices, bigger targets, pictures and sound, no points or streak pressure.
9. **Unreviewed content stays out of drills.** Items in a data pack's `review` list and in `curriculum/REVIEW.md` wait for a native speaker or teacher.
10. **Stable ids on every evidence record:** the KC id (`kt:…`) and the primitive id (`prim:…`).

Also: do not invent KCs, levels, citations, difficulty numbers or research claims. If the curriculum lacks something the person needs, say so and propose it as an addition rather than slipping it in. `pedagogy/` entries are design references (`basis: design_inference`); read `evidenceStatus` and `limitations` before repeating a claim to a user.

## 6. What "done" looks like

- The person approved a plain-language plan before you built.
- The first two weeks of the agenda run end to end on the chosen device.
- Every screen maps to a KC id and a primitive id; every primitive's `check.rules` are implemented; its `failureModes[].test` cases pass.
- Evidence is stored with first attempts intact and can be exported.
- An adult can open one view that shows what the learner did and what it does and does not show.
- Anything still missing (recordings, native-speaker review, primitives not yet built) is listed, not hidden.

## 7. Working on this repository itself

Maintainer rules, validators and data-model contracts are in `CLAUDE.md`. After changing data: `python3 curriculum/build.py`, `python3 curriculum/check.py <lang>`, `python3 curriculum/primitives/check.py`, `python3 blueprint/build.py`.

## customize（可选）

「开始创建」第 3 步里用户做过调整时，下载的 blueprint.json 会多一个 `customize` 字段，提示词末尾也会带同样的内容：

- `note`：用户的补充说明。
- `skipPrimitives: [{id, name, kcCount}]`：用户不想用的练法。**知识点不能因此被删掉**：改用同一知识点绑定的其他原语；没有可换的，就告诉用户。
- `extraBlocks: [{id, title, href}]`：用户想额外加入的现成积木。

`node blueprint/plan.js` 不会生成这个字段；规划器和 invariants 没有变化。

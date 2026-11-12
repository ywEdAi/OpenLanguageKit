# OpenLanguageKit

English · [中文](README.zh-CN.md)

The knowledge layer for building language-learning apps and lessons: knowledge points and their prerequisites for English, Japanese and Chinese, design contracts for 56 kinds of practice activity, a set of zero-dependency building blocks, and a planner that turns a learner profile into a course blueprint. No dependencies: Python 3 standard library and plain JavaScript.

The website (landing page, app builder, Teacher Space, cases, course browser, workspace) lives in a separate repository and is only one way of presenting this material. It keeps no copy of these files; every deployment pulls them from here, so this repository is the single source.

## What is inside

| Directory | Contents | Start with |
| --- | --- | --- |
| `curriculum/<en\|ja\|zh>/` | Knowledge points (`kcs.json`), learning path (`path.json`), tracks for different learners (`tracks.json`), source units, and the binding from each knowledge point to primitives | `curriculum/SCHEMA.en.md` |
| `curriculum/primitives/` | Pedagogical primitives: what the learner does, how the system responds, how it is checked, and what the evidence does and does not show | `curriculum/primitives/README.en.md` |
| `blocks/` | Data-driven building blocks (HTML pages + data packs + a small runtime); `registry.js` records which knowledge points each page practises | `blocks/README.en.md` |
| `blueprint/` | The planner (runs in the browser and in Node) and its command line, `plan.js` | `BLUEPRINT.en.md` |
| `pedagogy/` | A learning-sciences graph (`ped:` namespace) that the planner cites as design rationale | `pedagogy/README.en.md` |
| `dist/data.js` | Generated bundle: `window.CURRICULUM`, `window.PRIMITIVES`, `window.ASSET_LIBRARY` | built by `curriculum/build.py` |

## Using it

```sh
sh check.sh                                   # regenerate and run every check
node blueprint/plan.js --list                 # languages and tracks
node blueprint/plan.js --lang ja --track ja-hobby --age 8-12 --who child --minutes 15 --days 5 --device tablet --out my-plan
```

- With a coding AI: have it read `AGENTS.md` and `BLUEPRINT.en.md` first.
- In your own page: load `dist/data.js`, `blocks/registry.js`, `blocks/catalog.js`, `blueprint/science.js` and `blueprint/planner.js`; block pages can be embedded in an iframe.
- Blocks open directly in a browser, for example `blocks/sound-grid.html?set=hiragana`.

## Things to know

- **The course content is written in Chinese.** Knowledge-point explanations, example glosses and primitive contracts are in Chinese (the target-language examples are in English, Japanese or Chinese as appropriate). An English edition of the content is in progress. The docs have English versions (`*.en.md`); the validators read the Chinese files, so where the two differ the Chinese file wins.
- Japanese and Chinese content is still waiting for teacher review; the list is in `curriculum/REVIEW.md`. Each data pack's `review` list holds items waiting for a native speaker.
- A primitive with `status: spec` has a design contract but no page yet.
- The ready-made English pages come from another repository, edu-ai-builders/language-learning-asset-library; they are referenced by id here, not copied.
- `curriculum/legacy-citations.json` is a snapshot of citations inherited from the first-generation graph, which stays in the old repository.
- The planner only selects and schedules. Its scheduling numbers are stated assumptions and its diagnosis is self-report.

## Licence

[Creative Commons Attribution-NonCommercial 4.0 International](LICENSE) (CC BY-NC 4.0), for everything in this repository: data, docs and code.

- **Free** for personal, educational, research and other non-commercial use. Give credit: name OpenLanguageKit, link to this repository and to the licence, and say if you changed anything.
- **Commercial use needs a separate paid licence from the author.** That includes selling an app, course or service built on this material, or using it inside a for-profit product. Ask before you build: see [COMMERCIAL.md](COMMERCIAL.md).
- Third-party frameworks cited as sources (for example the British Council / EAQUALS Core Inventory and GF 0025-2021) belong to their owners; this licence covers only the original material written here.

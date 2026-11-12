# CLAUDE.md

OpenLanguageKit, the knowledge layer behind the OpenLangKit site (openlangkit.space): curriculum (schema v2, en/ja/zh), pedagogical primitives, building blocks, blueprint planner, pedagogy graph. No dependencies. Course content and canonical docs are in Chinese; each public doc has an English version (`*.en.md`, `README.md` is English and `README.zh-CN.md` Chinese) that must be updated in the same change. The website lives in a separate site repo that keeps no copy of these files: its Vercel build clones this repo and runs `scripts/sync-knowledge.py`, and `.github/workflows/check-and-publish.yml` here triggers that build after the checks pass (secret `SITE_DEPLOY_HOOK`). This repo is the single source of truth.

- After any change run `sh check.sh` (rebuilds generated files, runs every validator; all must report 0 errors).
- Generated, never hand-edit: `curriculum/<lang>/graph.json`, `coverage.md`, `dist/data.js`, `blueprint/science.js`, `curriculum/primitives/coverage.md`.
- Read first: `curriculum/SCHEMA.md` (data model), `curriculum/primitives/README.md`, `blocks/README.md`, `BLUEPRINT.md` (keep it in sync when blueprint fields or invariants change).
- `source-units.json` is the denominator: never drop or invent rows. `verification` must reflect what was actually read. JLPT grammar levels are editorial estimates. Don't fabricate URLs or page numbers.
- Primitive `implementations[]` are `{asset}` (asset-library id) or `{artifact}` (id in `blocks/registry.js`). A block covers a KC only if its registry artifact lists that KC.
- Blocks stay self-contained (`blocks/runtime/block.css` mirrors the site palette). No KanjiVG / Make Me a Hanzi data. Uncertain items go in a pack's `review` list.
- `pedagogy/` uses the `ped:` namespace and is maintained independently; don't merge it into curriculum data.
- Paths that the site depends on (changing them breaks its sync): `dist/data.js`, `blocks/**`, `blueprint/planner.js`, `blueprint/science.js`, `curriculum/<lang>/graph.json`, `curriculum/primitives/primitives.json`.

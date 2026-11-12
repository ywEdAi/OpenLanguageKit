# AGENTS.md

Two kinds of work happen with this repository. Pick the one that matches the request.

- **Someone wants a language-learning app, lesson or tool built from this material** (for themselves, a child, or students): read `BLUEPRINT.en.md` (Chinese original: `BLUEPRINT.md`) and follow it. Start with `node blueprint/plan.js --list`.
- **Someone wants to change this repository** (curriculum data, primitives, blocks, planner): read `CLAUDE.md` for the data model, validators and ownership boundaries, then run `sh check.sh` before and after.

The course content and the canonical docs are in Chinese; English versions of the docs are the `*.en.md` files. When editing a doc, edit the Chinese file and update its English version in the same change. No dependencies: Python 3 standard library and plain JavaScript.

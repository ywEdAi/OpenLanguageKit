#!/bin/sh
# Rebuild everything generated and run every validator. Exits non-zero on the first failure.
set -e
cd "$(dirname "$0")"
python3 curriculum/build.py > /dev/null
for l in en ja zh; do python3 curriculum/check.py $l; done
python3 curriculum/primitives/check.py
python3 blueprint/build.py
python3 pedagogy/validate.py
node --check blueprint/planner.js && node --check blueprint/plan.js && node --check blocks/catalog.js && node --check blocks/runtime/block.js
echo "all checks passed"

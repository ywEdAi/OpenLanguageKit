#!/bin/sh
# Regenerates the gallery thumbnails: one real screenshot per artifact in blocks/registry.js.
#   sh blocks/thumbs/make.sh              # all artifacts
#   sh blocks/thumbs/make.sh ja-pitch     # only the named ones
# Writes blocks/thumbs/<artifact-id>.png (about 600 px wide). Needs Google Chrome and macOS `sips`.
# Pages are opened from disk (file://), so no server is needed. Set BASE to screenshot a served copy instead,
# e.g. BASE=http://127.0.0.1:4180/blocks/ sh blocks/thumbs/make.sh
set -eu
HERE=$(cd "$(dirname "$0")" && pwd)
BLOCKS=$(dirname "$HERE")
CHROME=${CHROME:-"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"}
BASE=${BASE:-"file://$BLOCKS/"}
[ -x "$CHROME" ] || { echo "找不到 Chrome：$CHROME（可用 CHROME=... 指定）" >&2; exit 1; }
TMP=$(mktemp -d "${TMPDIR:-/tmp}/kt-thumbs.XXXXXX")
trap 'rm -rf "$TMP"' EXIT

# registry.js is `window.KT_REGISTRY = <json>;` — parsed the same way as curriculum/primitives/check.py
python3 - "$BLOCKS/registry.js" "$@" > "$TMP/list.tsv" <<'PY'
import json, sys
text = open(sys.argv[1], encoding='utf-8').read()
body = text[text.index('window.KT_REGISTRY =') + len('window.KT_REGISTRY ='):].strip().rstrip(';')
only = set(sys.argv[2:])
for a in json.loads(body)['artifacts']:
    if not only or a['id'] in only:
        print(a['id'] + '\t' + a['href'])
PY

n=0
while IFS="$(printf '\t')" read -r id href; do
  out="$HERE/$id.png"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=900,640 --virtual-time-budget=4000 \
    --user-data-dir="$TMP/profile-$id" --screenshot="$TMP/$id.png" "$BASE$href" >/dev/null 2>&1 </dev/null || true
  if [ -s "$TMP/$id.png" ]; then
    sips --resampleWidth 600 "$TMP/$id.png" --out "$out" >/dev/null
    echo "ok   $id"
    n=$((n + 1))
  else
    echo "失败 $id（$BASE$href）" >&2
  fi
done < "$TMP/list.tsv"
echo "生成 $n 张缩略图：$HERE"

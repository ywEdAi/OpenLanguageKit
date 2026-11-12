# Entry-level language building blocks (blocks)

> English translation of [README.md](README.md). The Chinese file is the source; if the two differ, it wins.

Ready-made building blocks for people who want to build language learning: you can use them yourself, give them to a child, or embed them in your own application. The blocks cover the entry layer of script and sound, including the Japanese kana table (五十音), pinyin and tones, the English alphabet and phonics, French letter combinations, and Chinese character components.

- No dependencies, no network access. Double-click the HTML to open it; it can also go inside an iframe.
- One block corresponds to one teaching action; swap the data pack and you swap the language. Adding a language usually only takes writing one data file.
- Every block records learning evidence: the first attempt is kept separately, and correct answers given independently are counted apart from correct answers given after a hint.
- Playback only: no recording, no pronunciation scoring. The sound comes from the browser's speech synthesis, and any item can be replaced with a human recording.

## Existing blocks

| Block | Pedagogical primitive | What it does | Data packs |
| --- | --- | --- | --- |
| `sound-grid.html` syllable table / alphabet table (音节表 / 字母表) | Sound–spelling blending (音形对应拼读) | Lays out a writing system as a table ordered by sound. Four modes: browse (tap a cell to hear it; the same row and column light up together), hear the sound and find the character, tell look-alikes apart, cover and recall | `kana-hiragana` `kana-katakana` `pinyin` `alphabet-en` `phonics-en` `alphabet-fr` |
| `blend.html` blending (拼读) | Sound–spelling blending (音形对应拼读) | One sound per cell: read cell by cell first, then run them together; change one sound to make a new word; hear the sound and arrange the letters; "outside the rules" separately practises words that are not read by the rules | `blend-en` `blend-fr` `blend-ja` `blend-zh` |
| `tone-contour.html` tone and pitch (声调与音高) | Pitch-contour matching (声调与音高轮廓) | Draws pitch as a line: see the line and hear the sound, hear the sound and choose the line, predict tone sandhi first and then listen (the written tone and the spoken tone differ) | `tones-zh` `pitch-ja` |
| `hanzi-parts.html` Chinese character components (汉字部件) | Character anatomy (字形构件与书写) | Take a character apart (structure diagram, meaning and sound components), assemble a character, character families (when the phonetic component stops working), guess a character you have never seen | `hanzi-zh` `kanji-ja` |
| `picture-talk.html` picture talk (看图说话) | Picture description (看图描述与核对) | Four things done on one scene picture: point (hear a sentence and tap the picture; if it is not in the picture you must say so), describe (the first draft is locked and then linked to the picture, checking names, positions and quantities, then word cards are used to add what was left unsaid), judge (wrong position, wrong quantity, action and state confused, only an inference), ask (arrange a question; the page answers from the picture's element list) | `picture-en` `picture-zh` |
| `story-frames.html` picture story (连环画) | Sequence & retell (排序与复述), with "Predict the next move" (预测下一步) between frames | Six frames, one story: bet on the next frame before it is revealed, put the frames in the order things happened (one frame is a flashback), place connectives, watch a three-step animation and say the process, retell with the text removed | `story-en` `story-zh` |

`registry.js` lists all blocks, data packs, and the ready-made pages (artifacts) bound to course knowledge points.

## Opening

```
blocks/sound-grid.html?set=kana-hiragana
blocks/blend.html?set=blend-ja&mode=read
blocks/tone-contour.html?set=tones-zh&mode=sandhi
blocks/hanzi-parts.html?set=hanzi-zh&char=清
blocks/picture-talk.html?set=picture-en&mode=describe
blocks/story-frames.html?set=story-zh&mode=order
```

Common parameters:

| Parameter | Meaning |
| --- | --- |
| `set` | Data pack id (required) |
| `mode` | The mode to open in; for the values, see each block's mode buttons |
| `variant=child` | Child version: larger tap targets, fewer options, slower speech |
| `kc` | Course knowledge point id; it is written into every piece of learning evidence |
| `focus` | Practise only a part. For sound-grid it is comma-separated row ids, e.g. `focus=a,k,s`; for blend it is one key in `tags` |

The page follows the system's light or dark setting.

## Embedding in your own page

```html
<iframe id="block" src="blocks/sound-grid.html?set=pinyin&variant=child" width="100%" height="680"></iframe>
<script>
  const frame = document.getElementById('block');
  window.addEventListener('message', e => {
    // only trust the iframe you embedded, from the origin you serve it from; `source: 'kt-block'` alone proves nothing
    if (e.source !== frame.contentWindow || e.origin !== location.origin) return;
    if (e.data && e.data.source === 'kt-block' && e.data.kind === 'event') {
      console.log(e.data.event, e.data.summary);   // render with textContent, never innerHTML
    }
  });
</script>
```

Every action sends one message: `{source: 'kt-block', kind: 'event', event, summary}`.

- `event.event_type` comes from the asset library's evidence-event vocabulary: view select highlight drag drop connect disconnect reorder submit revise request_hint reveal compare explain retry complete.
- The first attempt at an item sends `submit`; later ones send `retry`. `payload.assisted` says whether a hint was used or the answer was seen before the attempt.
- `summary` aggregates the number of first attempts, the number correct independently, the number correct after a hint, the number wrong on the first attempt, and the separately counted self-rated items (in cover-and-recall the learner judges for themselves; this does not count as an attempt). The colours of cells and word cards inside a block and this summary come from the same record of first attempts (`B.status(id)`).

When the page has finished loading it sends one `{kind: 'ready', meta, params}`.

## Adding a language

Take Korean Hangul as an example: its consonants and vowels combine into square blocks, which suits the syllable table exactly:

1. Create `data/hangul.js` and write `KT_DATA["hangul"] = {...}`. Follow the format of `data/kana.js`:
   - `tables`: each table has `rows` (consonants), optional `cols` (vowels), and `cells`.
   - Each cell has `id`, `glyph`, `roman`, `row`, `col`, and optionally `say`, `note`, `example`, `audio`.
   - Then write `confusables` (groups that are easily confused) and `reverse` (cases outside the table).
2. Add a line to `packs` in `registry.js`: `"hangul": {"file": "data/hangul.js", "block": "sound-grid", "lang": "ko"}`.
3. Open `sound-grid.html?set=hangul`.

The data formats of the other blocks are written at the top of their own data files: `data/blend.js`, `data/tones.js`, `data/hanzi.js`, `data/picture-talk.js`, `data/story-frames.js`.

The data for picture talk and the picture story has two layers: the scene (`KT_SCENES`, language-independent: original inline SVG, plus a list the learner cannot see — what is there, how many, where, doing what, or the order in which the frames are told and the order in which things happened) and the language pack (`KT_DATA`, one per language). Changing the language does not require redrawing. For sentences the learner writes themselves, the page only does a deterministic check against the controlled vocabulary in the language pack, and says so directly when it cannot judge. The pinyin table is the example of cells with several tones; see the `tones` field in `data/pinyin.js`.

When writing data, note:

- Characters that are read exactly the same, so that the spelling cannot be told from the sound alone (such as じ／ぢ, お／を), go into `homophones`: in hear-the-sound items all of them count as correct, and they are not used for listening-discrimination items.
- `say` is the text the speech synthesiser will read; make sure it really is read as the sound you want. For example, a single English phoneme cannot be synthesised, so use an example word; for pinyin, do not choose a character with more than one reading.
- Put uncertain content into the data pack's `review` list, not into the practice items.
- Every data pack must write "the reverse half", that is, where the rule stops working: common words not read by the blending rules, characters whose phonetic component no longer indicates the sound, words whose written tone and spoken tone differ.

## Design conventions

These conventions come from the primitive contracts in `curriculum/primitives/`:

- **The first attempt is never overwritten.** Later attempts count as retries; using a hint or seeing the answer is recorded separately as "completed after a hint".
- **Checks hold both ends at once**: an answer that is too weak does not pass, and gaming does not pass either. For example, in hear-the-sound-and-choose-the-line, listening to the whole word first also counts as a hint; a tone sandhi item must be predicted first, and only then is the sound played.
- **No AI chat, no speech scoring.** Where a human needs to listen, it is left to a human listener or to the learner's own comparison.
- **The child version is not a simplified adult version.** Fewer options, bigger targets, pictures, no points.
- **The page cannot hear the learner speak.** The spoken parts of picture talk and the picture story are compared by the learner or a partner and then recorded as a self-rating, counted apart from correct answers.

## Sources and licences

- The data was written by the authors themselves from general knowledge of the languages. The pictures for picture talk and the picture story are original SVG written by hand in the data files; no external images are used. The Chinese character components do not use KanjiVG, Make Me a Hanzi, CHISE or Unihan IDS, because the licences of these datasets have not yet been checked. That is why there are no stroke-order animations here.
- Each data pack's `review` list holds the items awaiting checking by a native speaker: tones, pitch, stroke counts, French pronunciation, and so on.
- Machine-synthesised sound may be read wrongly, especially Japanese pitch and isolated phonemes.
- Licence: CC BY-NC 4.0 — free for non-commercial use; commercial use needs a separate licence (see `LICENSE` and `COMMERCIAL.md` in the repository root). The asset library referenced by `curriculum/primitives/` is MIT-licensed.

## Checks

```sh
python3 curriculum/primitives/check.py   # 也会检查 registry.js：积木文件、数据包、绑定的知识点是否存在
```

(The comment says: it also checks `registry.js` — whether the block files, data packs and bound knowledge points exist.)

To browse all blocks and the knowledge points they are bound to, use the workspace: `python3 workspace/serve.py`, then open `http://127.0.0.1:4180/workspace/`.

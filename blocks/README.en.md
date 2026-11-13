# Entry-level language building blocks (blocks)

> English translation of [README.md](README.md). The Chinese file is the source; if the two differ, it wins.

Ready-made building blocks for people who want to build language learning: you can use them yourself, give them to a child, or embed them in your own application. The first blocks cover the entry layer of script and sound (the Japanese kana table, pinyin and tones, the English alphabet and phonics, French letter combinations, Chinese character components). Since 2026-11-12 each of the 24 teaching primitives that had only a written contract also has a block, covering grammar forms, listening, interaction, real documents and forms, translation and more. Each of those 24 implements only part of its contract; what is missing and what still needs checking by a native-speaker teacher is listed in `GAPS.md` (in Chinese).

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
| `classifier-match.html` Classifier matching | Classifier matching | Put things into classifier, counter or countable/uncountable boxes, then choose what each box has in common; using the general box (个 / つ) is not wrong, only yellow with the more usual classifier shown. Step two places new things and asks whether each follows the rule, is outside it, allows both or needs no classifier, plus the reading (Japanese) or many / much etc. (English); step three builds a shopping or order list for a real task, and using the general classifier for over 60% counts as avoiding. | `classifier-match-en` `classifier-match-ja` `classifier-match-zh` |
| `clause-constraint.html` Connectives and what may follow | Clause-constraint check | With the connective fixed, try clause cards one by one and judge whether each works; a failing card names the constraint it breaks and lights a cell in the learner's own constraint table. Then only the connective is swapped and the learner picks the reason from locked options (clause type, tense / time, subject, or both work with different meanings). Finally the learner writes a whole sentence for a request or advice situation, checked deterministically by connective and type of ending. | `clause-constraint-en` `clause-constraint-ja` `clause-constraint-zh` |
| `ime-convert.html` Input-method conversion: picking the right homophone | Input-method conversion | A simulated input method (candidates come from the data pack; it is not a real IME): type a sentence in romaji or pinyin, press Space to convert and number keys to choose, with a keys → candidates → choice trace under the bar. The final text must match the target exactly; a wrong homophone is linked to the word that decides it, and a mistyped reading (nn, wo, ü as v) shows the right keys. Step 2 classifies marked spots (right / wrong homophone / mistyped reading / character from another writing system / both are fine) and asks for the deciding word when it is a homophone; some sentences are the learner's own from step 1. Step 3 shuffles the candidates, hides the trace until submission and compares the choice with step 1 for the same group. | `ime-convert-ja` `ime-convert-zh` |
| `listen-and-do.html` Listen and do | Listen and do | Hear an instruction and move or colour things in a hand-drawn room, or click the building you are going to on a street map. Step 1 gives no marks; step 2 replays the instruction phrase by phrase, blinking what each phrase names, and you decide what kind of difference there was (wrong thing, size or colour, place, order, too much or too little; wrong corner, wrong turn, left and right swapped); step 3 reverses it: build an instruction from word cards and the page carries it out literally, so an ambiguous one goes wrong. | `listen-and-do-en` `listen-and-do-ja` `listen-and-do-zh` |
| `oral-sound-play.html` Phonological awareness play | Phonological awareness play | No writing at all, only pictures and sound: clap how many syllables, beats or sounds a word has; swap or drop one box and see which picture it becomes (or whether it is a word at all); compare what two words share (rhyme, first sound, number of beats); then say a word of your own for a listener to judge. | `oral-sound-play-en` `oral-sound-play-ja` `oral-sound-play-zh` |
| `paradigm-apply.html` Apply the rule to new words | Paradigm application | Sort known words by how they change to find the rule, then classify new words and type their forms; a wrong form is traced back to the step where it forked. One pack holds several rule sets (masu form, te-form, plurals, past tense, reduplication …), and each word's forms grow into one row; there are also modes for using the form in a sentence and for where the rule stops. | `paradigm-apply-en` `paradigm-apply-ja` `paradigm-apply-zh` |
| `reading-aid-fade.html` Reading-aid fading | Reading-aid fading | Reading aids (furigana, pinyin, IPA, sound dots) start hidden and can be clicked when stuck; spot checks are answered before the aid appears, and a word loses its aid only after right readings without peeking in two different passages, getting it back after a mistake. Two more modes sort misreadings and ask which aids should not fade. | `reading-aid-fade-ja` `reading-aid-fade-zh` `reading-aid-fade-en` `reading-aid-fade-en-ipa` |
| `reading-select.html` Choosing the reading in context | Reading selection | A short text marks several places where one written form has more than one reading; for each, choose the reading and one reason (part of speech, the word it is in, a number or counter, the surrounding sounds, the meaning, or no rule). A place passes only if both are right. Then the same form appears in new sentences (does the reading change?), and finally the learner writes a sentence that uses it twice with two readings. | `reading-select-ja` `reading-select-zh` |
| `role-marking.html` Role marking | Role marking | On a scene diagram, link each noun to its role (doer, object, place, arrival point, tool, companion …), then choose the particle or preposition; a wrong choice redraws the picture to show what that marker means, a final question asks whether the role, the verb or a split in your first language decides it, and a new picture asks for your own sentence with at least three roles. | `role-marking-en` `role-marking-ja` `role-marking-zh` |
| `slot-order.html` Word-order slots | Word-order slots | Build the sentence from chunks on a track with the slot names hidden (click, drag or arrow keys); the first order is saved on its own. Then label each chunk with its slot; the page names the position rule that was broken and can show the order of the learner's other language beside it. Also: judge sentences (including “also right, emphasis changes”) and label your own sentence for a spot check. | `slot-order-en` `slot-order-ja` `slot-order-zh` |
| `sound-contrast.html` Minimal-contrast discrimination | Minimal-contrast discrimination | Two words that differ in one sound: hear which one it is (with same/different checks mixed in), tell a different word from the same word said differently or a third word, then say it to a partner and see whether they can tell; a side matrix counts each side separately. | `sound-contrast-en` `sound-contrast-ja` `sound-contrast-zh` |
| `viewpoint-direction.html` Viewpoint and direction | Viewpoint & direction | In a scene, first put “me” (👁) in place and draw the arrow (who gives to whom, which way someone moves, who is affected), then choose the giving/receiving, coming/going or passive form; a wrong choice draws a red dashed eye where the listener would think you stand. Step two keeps the event and moves “me”: does the form change, stay, or are both fine? Step three asks for two things from your own life, one toward you and one away. | `viewpoint-direction-en` `viewpoint-direction-ja` `viewpoint-direction-zh` |
| `cross-language-align.html` Cross-language alignment | Cross-language alignment | Three steps: the source is cut into meaning chunks with a word-for-word draft beside each, and the learner keeps or replaces each draft (for names and numbers the draft is right); someone's relay is labelled row by row (rephrased, added, dropped redundancy, dropped something that must stay, added opinion); finally the learner writes a relay for a named listener, checked by keyword lists for key chunks, opinion phrases and word-for-word copying. | `cross-language-align-en` `cross-language-align-ja` `cross-language-align-zh` |
| `culture-incident.html` Critical incident | Critical incident | Read a four-to-six-line misunderstanding with a relationship card, click the line where it starts to go wrong and write one sentence of explanation (locked); then decide what kind of problem it is (the words / politeness or address / topic or timing / a ritual phrase or unspoken meaning / no cultural misunderstanding at all), reveal what both people were thinking and compare it with your first explanation; finally rewrite the line: choose from pre-written rewrites, which replay to the other person's new reply, and check your own sentence against what an acceptable rewrite has. | `culture-incident-en` `culture-incident-ja` `culture-incident-zh` |
| `entry-sense-pick.html` Dictionary sense picking | Dictionary sense picking | From the form in the sentence, type the dictionary form to look up (for Chinese, the reading in this sentence; a word with two readings has two entries). In the entry, pick one sense, give each other sense a locked reason for ruling it out, and click the clue word in the sentence; every set has a sentence where two senses fit and one where you must turn to a phrase entry. Then paraphrase the sense and put it back, pick a new sentence with the same sense, write your own, and save it to a notebook with the sentence and sense number. | `entry-sense-pick-en` `entry-sense-pick-zh` |
| `exchange-script.html` Functional exchange | Functional exchange | A conversation with a purpose (a phone call, borrowing something, ordering, complaining, turning down an invitation). In each turn you choose a line and the other person answers along a branch written in advance; the ending shows whether the task got done and how the relationship stands. Then you sort each of your lines and open the other branches, and finally say the key turns yourself with no options, pick which move you made and compare it with examples. | `exchange-script-en` `exchange-script-ja` `exchange-script-zh` |
| `false-friend-check.html` False-friend check | False-friend check | Write a guess from the form alone (locked, never scored), then open real examples and mark the word same, shifted (and say how) or completely different; at least a third of every set really are the same, and marking those “completely different” is flagged as over-caution. Then pick the one sentence only the real meaning makes sense of, write your own, and keep the words in your own false-friend table. | `false-friend-check-ja` `false-friend-check-en` |
| `figurative-decode.html` Literal and implied meaning | Figurative & implied meaning | Three steps on one short context: lock the literal layer, choose the gap type (metaphor, exaggeration, irony, hint, fixed idiom or just literal) and the real meaning, then click the clues in the context. Two more modes give the same words in two contexts and ask whether an expression is used right; the child version picks the meant picture. | `figurative-decode-en` `figurative-decode-ja` `figurative-decode-zh` |
| `number-system-map.html` Number-system mapping | Number-system mapping | Estimate, convert and say on one number card: from the source-language sentence alone (no digits) pick the order of magnitude on a number line, which locks; then click where the target language's separators go (three-digit commas for English, four-digit 万 lines for Chinese) and choose the highest level; then write the whole quantity in the target language, which the page parses back into a number (“you wrote X, the number is Y”). Two further modes: where the rule stops (years, phone numbers, 成, fractions, plural -s, 零, under 10,000) and your own number. | `number-system-map-en` `number-system-map-zh` |
| `oral-to-print.html` Oral-to-print linking | Oral-to-print linking | Starts from what the child can already say: pick a picture, see "my words" written under it, tap to hear and point-read, put it on the word wall; then hear a cue and find the word among three cards with no picture or pinyin (sometimes none has it), and judge whether its meaning changed or it only looks alike; then read to someone at home, who records whether they understood. A fourth mode covers spoken vs written forms: homophones, irregular spellings, spoken contractions. | `oral-to-print-en` `oral-to-print-zh` |
| `real-document-scan.html` Real-document scanning | Real-document scanning | On invented documents laid out like real menus, timetables, notices and forms, carry out a paraphrased task: first click the area where the answer should be (the first choice is kept), then click the entry and judge each condition (fits / does not fit / exception); when the document does not say, choose that and the next step; finally put the found detail into a message. | `real-document-scan-en` `real-document-scan-ja` `real-document-scan-zh` |
| `repair-and-backchannel.html` Repair and backchannel | Repair & backchannel | A scripted conversation with planned trouble (too fast, an unknown word, a number, a pause for you, drifting talk, a need to break in) and moments that look like trouble but need no repair. The repair buttons are always there: pick a move, then the wording, and the other person answers that move; unrepaired trouble goes wrong at the end. Then sort your own moves, say repairs yourself with no buttons, and judge whether their uh-huh was a yes. | `repair-and-backchannel-en` `repair-and-backchannel-ja` `repair-and-backchannel-zh` |
| `template-write.html` Writing on real templates | Writing on a real template | From a situation card with a made-up identity, write straight onto a realistic form, note, chat screen or e-mail; the first draft is locked. Then judge each part yourself (fine / format wrong / content wrong / wrong box / missing / should be blank), see the page's deterministic checks, what the reader sees (for example a phone notification that shows only the start) and a model text; finally rewrite the same matter for another reader; two identical versions do not pass. Tone and grammar are not judged by the page and are recorded as self-checks. | `template-write-en` `template-write-ja` `template-write-zh` |
| `variety-map.html` Variety mapping | Variety mapping | Unlabelled cards with the same meaning in different varieties (British / American, standard / Kansai Japanese, Japanese / simplified / traditional forms, simplified / traditional Chinese, mainland / Taiwan / Hong Kong words) are sorted into columns, plus “used in all of them” and “not a variety: a mistake”; once placed, the part that decides the variety is marked. Then each line is judged for a concrete setting (best, also fine, out of place, or a mistake) and the listener's reaction is shown. Finally a whole text is rewritten or each gap is chosen; the page colours the forms from a controlled list, any mixing fails, and one-to-many simplified / traditional characters always come in pairs. | `variety-map-en` `variety-map-ja` `variety-map-zh` |

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
| `lang` | Interface language (the language of instructions, buttons and feedback, not the language being learned): `lang=zh` or `lang=en`. See "Interface language" below |

The page follows the system's light or dark setting.

## Interface language

Every block has a Chinese and an English interface. The language being learned is set by the data pack; the interface language is decided by the block itself, in this order:

1. `?lang=en` or `?lang=zh` in the address;
2. `localStorage['atlas-lang']` (the OpenLangKit site's language switch writes it; a block only reads it, so a block served from the same origin follows the switch);
3. the browser language: Chinese if it starts with `zh`, English otherwise.

When you embed a block in your own page, put `lang` in the address to fix the language. The runtime exposes the result as `KTBlock.lang` (`'zh'` or `'en'`) and sets `<html lang>`.

- Interface text is written in each block page as `KTBlock.L('中文', 'English')`.
- Text in a data pack that is written in the interface language (glosses, hints, explanations, titles) gets a parallel English field next to the Chinese, and the page reads it with `KTBlock.t(obj, 'note')`:
  - a string field `x` gets a sibling `xEn`, e.g. `"note": "…", "noteEn": "…"`, `title` / `titleEn`;
  - an array or map of strings `x` gets a parallel `xEn` (same length or keys; a missing item falls back to the Chinese);
  - a gloss stored under the language key `zh` gets a sibling `en`.
- Where there is no English, the Chinese is shown. The language being learned (kana, characters, pinyin, example words and sentences) is never translated.
- In data packs that teach English, the Chinese glosses of example words are not shown in the English interface.
- `registry.js` has the same parallel fields: `titleEn` and `doesEn` on blocks, `titleEn` and `noteEn` on ready-made pages (artifacts). `KTCatalog({..., lang})` in `catalog.js` gives the coverage labels, language names and page titles in the interface language (without `lang` it uses `window.ATLAS_LANG`, and otherwise Chinese).

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

When the page has finished loading it sends one `{kind: 'ready', meta, params, lang}` (`lang` is the interface language).

## Adding a language

Take Korean Hangul as an example: its consonants and vowels combine into square blocks, which suits the syllable table exactly:

1. Create `data/hangul.js` and write `KT_DATA["hangul"] = {...}`. Follow the format of `data/kana.js`:
   - `tables`: each table has `rows` (consonants), optional `cols` (vowels), and `cells`.
   - Each cell has `id`, `glyph`, `roman`, `row`, `col`, and optionally `say`, `note`, `example`, `audio`.
   - Then write `confusables` (groups that are easily confused) and `reverse` (cases outside the table).
   - Text in the interface language (`title`, `subtitle`, `note`, row and column `label`s, glosses and so on) can carry an English `…En` field next to it, see "Interface language" above; without one the Chinese is shown.
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

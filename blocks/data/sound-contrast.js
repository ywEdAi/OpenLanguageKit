/* Data packs for blocks/sound-contrast.html (prim:sound-contrast): sound-contrast-en, sound-contrast-ja, sound-contrast-zh.
 *
 * Pack format
 *   speech     BCP-47 locale for speech synthesis (the only sound source; no recordings are bundled).
 *   axes       [{id, label, labelEn, a, aEn, b, bEn, kcs[], where, whereEn, note, noteEn, pairs[], variants[]}]
 *              one contrast axis (e.g. /θ/–/s/). `a` / `b` name the two sides (shown in the matrix).
 *              `where` is hint 1 ("listen to the start of the word"). `note` is the adult layer (what differs).
 *   pairs      [{id, kc, child?, a: WORD, b: WORD, third?: WORD}]  a minimal pair: side a and side b differ in one
 *              sound on this axis. `third` differs in the same slot but belongs to neither side (step 2 "neither").
 *              `child: true` = both words have a picture, used in the child version (no text shown).
 *   WORD       {text, hl, say?, py?, gloss?, glossEn?, pic?, nonword?}
 *              text = what is written (kana for ja, characters for zh); py = pinyin (zh);
 *              hl = the spelling (or pinyin) with the differing part in [brackets]; "き[]て" marks a missing part.
 *              say = what speech synthesis reads if it differs from text. gloss = Chinese gloss (not shown when
 *              the interface language is the language being taught), glossEn = English gloss.
 *   variants   [{pair, side, how: 'rate' | 'locale', locale?, note, noteEn}]  reverse half: the same word said in an
 *              audibly different way that does not change which word it is. 'locale' plays it with another
 *              voice locale (e.g. en-GB); if the device has no exact voice for it the page falls back to 'rate'
 *              (slow) and says so.
 *   reverse    [{text, note, noteEn}]  reverse-half examples speech synthesis cannot render reliably (flap t,
 *              [ɾ]/[l], half third tone): shown as text only, never as drill items.
 *   review     items a native teacher should check (with reviewEn parallel).
 * Content is original; words were chosen so both members of a pair are ordinary words where possible.
 */
KT_DATA["sound-contrast-en"] = {
  "id": "sound-contrast-en", "lang": "en", "speech": "en-US",
  "title": "英语最小对立辨音", "titleEn": "English minimal pairs",
  "subtitle": "两个词只差一个音。先听出是哪一个，再分清“换了一个词”和“同一个词换了个读法”，最后说给别人听，看对方能不能分辨。", "subtitleEn": "Two words that differ in one sound. First hear which one it is, then tell a different word from the same word said differently, and finally say it to someone and see whether they can tell.",
  "voiceNote": "声音来自浏览器的语音合成，只有一个说话人。合成语音的对立有时比真人更夸张或更模糊，结果只能当作参考。", "voiceNoteEn": "The sound comes from the browser's speech synthesis, with a single speaker. Synthetic speech can make a contrast clearer or blurrier than a real person would, so treat the results as a guide only.",
  "kcs": ["kt:en-phon-sound-inventory", "kt:en-orth-alphabet", "kt:en-phon-number-discrimination", "kt:en-orth-long-vowels"],
  "axes": [
    {"id": "th-s", "label": "/θ/ 和 /s/", "labelEn": "/θ/ vs /s/", "a": "th /θ/", "aEn": "th /θ/", "b": "s /s/", "bEn": "s /s/",
     "kcs": ["kt:en-phon-sound-inventory"],
     "where": "注意 th 和 s 出现的位置：有的在词首，有的在词尾。", "whereEn": "Listen where th or s comes: some are at the start of the word, some at the end.",
     "note": "/θ/ 是舌尖放在上下齿之间吹气；/s/ 舌尖在齿后。中文里没有 /θ/，常被听成 s 或 f。", "noteEn": "/θ/ is made with the tongue tip between the teeth; for /s/ the tongue stays behind the teeth. Chinese has no /θ/, so it is often heard as s or f.",
     "pairs": [
       {"id": "think", "kc": "kt:en-phon-sound-inventory", "a": {"text": "think", "hl": "[th]ink", "gloss": "想", "pic": "🤔"}, "b": {"text": "sink", "hl": "[s]ink", "gloss": "水槽", "pic": "🚰"}, "third": {"text": "pink", "hl": "[p]ink", "gloss": "粉色"}},
       {"id": "thick", "kc": "kt:en-phon-sound-inventory", "a": {"text": "thick", "hl": "[th]ick", "gloss": "厚的"}, "b": {"text": "sick", "hl": "[s]ick", "gloss": "生病的", "pic": "🤒"}, "third": {"text": "kick", "hl": "[k]ick", "gloss": "踢"}},
       {"id": "thing", "kc": "kt:en-phon-sound-inventory", "a": {"text": "thing", "hl": "[th]ing", "gloss": "东西"}, "b": {"text": "sing", "hl": "[s]ing", "gloss": "唱歌", "pic": "🎤"}, "third": {"text": "ring", "hl": "[r]ing", "gloss": "戒指"}},
       {"id": "thin", "kc": "kt:en-phon-sound-inventory", "a": {"text": "thin", "hl": "[th]in", "gloss": "瘦的"}, "b": {"text": "sin", "hl": "[s]in", "gloss": "罪过"}, "third": {"text": "fin", "hl": "[f]in", "gloss": "鱼鳍"}},
       {"id": "mouth", "kc": "kt:en-phon-sound-inventory", "child": true, "a": {"text": "mouth", "hl": "mou[th]", "gloss": "嘴", "pic": "👄"}, "b": {"text": "mouse", "hl": "mou[se]", "gloss": "老鼠", "pic": "🐭"}},
       {"id": "path", "kc": "kt:en-phon-sound-inventory", "a": {"text": "path", "hl": "pa[th]", "gloss": "小路"}, "b": {"text": "pass", "hl": "pa[ss]", "gloss": "通过"}, "third": {"text": "pack", "hl": "pa[ck]", "gloss": "打包"}},
       {"id": "thumb", "kc": "kt:en-phon-sound-inventory", "a": {"text": "thumb", "hl": "[th]umb", "gloss": "大拇指", "pic": "👍"}, "b": {"text": "sum", "hl": "[s]um", "gloss": "总和"}, "third": {"text": "gum", "hl": "[g]um", "gloss": "口香糖"}}
     ],
     "variants": [
       {"pair": "path", "side": "a", "how": "locale", "locale": "en-GB", "note": "英式读 path 的 a 是长音 /ɑː/，美式是 /æ/：元音听得出不同，但还是同一个词。", "noteEn": "British English says the a in path as a long /ɑː/, American English as /æ/: you can hear the vowel change, but it is still the same word."},
       {"pair": "think", "side": "b", "how": "rate", "note": "慢速读 sink：每个音都拉长了，但还是 sink。", "noteEn": "sink said slowly: every sound is longer, but it is still sink."}
     ]},
    {"id": "ee-i", "label": "长 /iː/ 和短 /ɪ/", "labelEn": "long /iː/ vs short /ɪ/", "a": "长 ee /iː/", "aEn": "long ee /iː/", "b": "短 i /ɪ/", "bEn": "short i /ɪ/",
     "kcs": ["kt:en-phon-sound-inventory"],
     "where": "注意词中间的元音。", "whereEn": "Listen to the vowel in the middle of the word.",
     "note": "/iː/ 更长、嘴角更往两边拉；/ɪ/ 短而松。不只是长短不同，音色也不同。", "noteEn": "/iː/ is longer, with the lips spread; /ɪ/ is short and relaxed. The quality differs as well as the length.",
     "pairs": [
       {"id": "sheep", "kc": "kt:en-phon-sound-inventory", "child": true, "a": {"text": "sheep", "hl": "sh[ee]p", "gloss": "羊", "pic": "🐑"}, "b": {"text": "ship", "hl": "sh[i]p", "gloss": "船", "pic": "🚢"}, "third": {"text": "shop", "hl": "sh[o]p", "gloss": "商店"}},
       {"id": "seat", "kc": "kt:en-phon-sound-inventory", "a": {"text": "seat", "hl": "s[ea]t", "gloss": "座位"}, "b": {"text": "sit", "hl": "s[i]t", "gloss": "坐"}, "third": {"text": "set", "hl": "s[e]t", "gloss": "一套"}},
       {"id": "leave", "kc": "kt:en-phon-sound-inventory", "a": {"text": "leave", "hl": "l[ea]ve", "gloss": "离开"}, "b": {"text": "live", "hl": "l[i]ve", "gloss": "居住"}, "third": {"text": "love", "hl": "l[o]ve", "gloss": "爱"}},
       {"id": "feel", "kc": "kt:en-phon-sound-inventory", "a": {"text": "feel", "hl": "f[ee]l", "gloss": "感觉"}, "b": {"text": "fill", "hl": "f[i]ll", "gloss": "装满"}, "third": {"text": "fall", "hl": "f[a]ll", "gloss": "落下"}},
       {"id": "heel", "kc": "kt:en-phon-sound-inventory", "a": {"text": "heel", "hl": "h[ee]l", "gloss": "脚后跟"}, "b": {"text": "hill", "hl": "h[i]ll", "gloss": "小山", "pic": "⛰️"}, "third": {"text": "hall", "hl": "h[a]ll", "gloss": "大厅"}},
       {"id": "beat", "kc": "kt:en-phon-sound-inventory", "a": {"text": "beat", "hl": "b[ea]t", "gloss": "打败"}, "b": {"text": "bit", "hl": "b[i]t", "gloss": "一点儿"}, "third": {"text": "bat", "hl": "b[a]t", "gloss": "蝙蝠"}},
       {"id": "eat", "kc": "kt:en-phon-sound-inventory", "a": {"text": "eat", "hl": "[ea]t", "gloss": "吃", "pic": "🍽️"}, "b": {"text": "it", "hl": "[i]t", "gloss": "它"}}
     ],
     "variants": [
       {"pair": "sheep", "side": "a", "how": "rate", "note": "慢速读 sheep：元音更长了，但还是 sheep，不会变成另一个词。", "noteEn": "sheep said slowly: the vowel is longer, but it is still sheep, not a different word."},
       {"pair": "seat", "side": "b", "how": "locale", "locale": "en-GB", "note": "英式和美式的 sit 听起来略有不同，还是同一个词。", "noteEn": "sit in British and American voices sounds slightly different, but it is the same word."}
     ]},
    {"id": "v-w", "label": "/v/ 和 /w/", "labelEn": "/v/ vs /w/", "a": "v /v/", "aEn": "v /v/", "b": "w /w/", "bEn": "w /w/",
     "kcs": ["kt:en-phon-sound-inventory"],
     "where": "注意词的开头。", "whereEn": "Listen to the start of the word.",
     "note": "/v/ 是上齿轻碰下唇、声带振动；/w/ 是双唇收圆，不碰牙齿。", "noteEn": "For /v/ the top teeth touch the lower lip and the voice buzzes; for /w/ the lips round and the teeth stay off the lip.",
     "pairs": [
       {"id": "vest", "kc": "kt:en-phon-sound-inventory", "a": {"text": "vest", "hl": "[v]est", "gloss": "背心", "pic": "🦺"}, "b": {"text": "west", "hl": "[w]est", "gloss": "西边"}, "third": {"text": "best", "hl": "[b]est", "gloss": "最好的"}},
       {"id": "vet", "kc": "kt:en-phon-sound-inventory", "a": {"text": "vet", "hl": "[v]et", "gloss": "兽医"}, "b": {"text": "wet", "hl": "[w]et", "gloss": "湿的"}, "third": {"text": "net", "hl": "[n]et", "gloss": "网"}},
       {"id": "vine", "kc": "kt:en-phon-sound-inventory", "a": {"text": "vine", "hl": "[v]ine", "gloss": "藤"}, "b": {"text": "wine", "hl": "[w]ine", "gloss": "葡萄酒", "pic": "🍷"}, "third": {"text": "line", "hl": "[l]ine", "gloss": "线"}},
       {"id": "veil", "kc": "kt:en-phon-sound-inventory", "a": {"text": "veil", "hl": "[v]eil", "gloss": "面纱"}, "b": {"text": "whale", "hl": "[wh]ale", "gloss": "鲸", "pic": "🐳"}, "third": {"text": "sail", "hl": "[s]ail", "gloss": "帆"}},
       {"id": "verse", "kc": "kt:en-phon-sound-inventory", "a": {"text": "verse", "hl": "[v]erse", "gloss": "诗节"}, "b": {"text": "worse", "hl": "[w]orse", "gloss": "更糟"}, "third": {"text": "nurse", "hl": "[n]urse", "gloss": "护士"}}
     ],
     "variants": [
       {"pair": "vet", "side": "b", "how": "rate", "note": "慢速读 wet：还是 wet。", "noteEn": "wet said slowly: still wet."}
     ]},
    {"id": "ae-e", "label": "/æ/ 和 /e/", "labelEn": "/æ/ vs /e/", "a": "a /æ/", "aEn": "a /æ/", "b": "e /e/", "bEn": "e /e/",
     "kcs": ["kt:en-phon-sound-inventory"],
     "where": "注意词中间的元音。", "whereEn": "Listen to the vowel in the middle of the word.",
     "note": "/æ/ 嘴张得更大、舌头更低；/e/ 嘴张得小一些。中文里没有 /æ/，常和 /e/ 合成一个音。", "noteEn": "For /æ/ the mouth opens wider and the tongue is lower; /e/ is more closed. Chinese has no /æ/, so it is often merged with /e/.",
     "pairs": [
       {"id": "bad", "kc": "kt:en-phon-sound-inventory", "a": {"text": "bad", "hl": "b[a]d", "gloss": "坏的"}, "b": {"text": "bed", "hl": "b[e]d", "gloss": "床", "pic": "🛏️"}, "third": {"text": "bud", "hl": "b[u]d", "gloss": "花蕾"}},
       {"id": "man", "kc": "kt:en-phon-sound-inventory", "a": {"text": "man", "hl": "m[a]n", "gloss": "男人（一个）", "pic": "👨"}, "b": {"text": "men", "hl": "m[e]n", "gloss": "男人们"}, "third": {"text": "moon", "hl": "m[oo]n", "gloss": "月亮"}},
       {"id": "pan", "kc": "kt:en-phon-sound-inventory", "a": {"text": "pan", "hl": "p[a]n", "gloss": "平底锅", "pic": "🍳"}, "b": {"text": "pen", "hl": "p[e]n", "gloss": "钢笔", "pic": "🖊️"}, "third": {"text": "pin", "hl": "p[i]n", "gloss": "图钉"}},
       {"id": "sat", "kc": "kt:en-phon-sound-inventory", "a": {"text": "sat", "hl": "s[a]t", "gloss": "坐（过去式）"}, "b": {"text": "set", "hl": "s[e]t", "gloss": "一套"}, "third": {"text": "sit", "hl": "s[i]t", "gloss": "坐"}},
       {"id": "had", "kc": "kt:en-phon-sound-inventory", "a": {"text": "had", "hl": "h[a]d", "gloss": "有（过去式）"}, "b": {"text": "head", "hl": "h[ea]d", "gloss": "头"}, "third": {"text": "hid", "hl": "h[i]d", "gloss": "藏（过去式）"}},
       {"id": "tan", "kc": "kt:en-phon-sound-inventory", "a": {"text": "tan", "hl": "t[a]n", "gloss": "晒黑"}, "b": {"text": "ten", "hl": "t[e]n", "gloss": "十", "pic": "🔟"}, "third": {"text": "tin", "hl": "t[i]n", "gloss": "锡罐"}}
     ],
     "variants": [
       {"pair": "pan", "side": "b", "how": "rate", "note": "慢速读 pen：还是 pen。", "noteEn": "pen said slowly: still pen."}
     ]},
    {"id": "e-i", "label": "/e/ 和 /ɪ/（儿童图卡）", "labelEn": "/e/ vs /ɪ/ (picture cards)", "a": "e /e/", "aEn": "e /e/", "b": "i /ɪ/", "bEn": "i /ɪ/",
     "kcs": ["kt:en-phon-sound-inventory"],
     "where": "注意词中间的元音。", "whereEn": "Listen to the vowel in the middle of the word.",
     "note": "pen 和 pin 只差中间的元音：/e/ 嘴张得比 /ɪ/ 大一点。", "noteEn": "pen and pin differ only in the middle vowel: the mouth is a little more open for /e/ than for /ɪ/.",
     "pairs": [
       {"id": "pen-pin", "kc": "kt:en-phon-sound-inventory", "child": true, "a": {"text": "pen", "hl": "p[e]n", "gloss": "钢笔", "pic": "🖊️"}, "b": {"text": "pin", "hl": "p[i]n", "gloss": "图钉", "pic": "📌"}, "third": {"text": "pan", "hl": "p[a]n", "gloss": "平底锅"}},
       {"id": "bell-bill", "kc": "kt:en-phon-sound-inventory", "a": {"text": "bell", "hl": "b[e]ll", "gloss": "铃", "pic": "🔔"}, "b": {"text": "bill", "hl": "b[i]ll", "gloss": "账单", "pic": "🧾"}},
       {"id": "ten-tin", "kc": "kt:en-phon-sound-inventory", "child": true, "a": {"text": "ten", "hl": "t[e]n", "gloss": "十", "pic": "🔟"}, "b": {"text": "tin", "hl": "t[i]n", "gloss": "锡罐", "pic": "🥫"}},
       {"id": "set-sit", "kc": "kt:en-phon-sound-inventory", "a": {"text": "set", "hl": "s[e]t", "gloss": "一套"}, "b": {"text": "sit", "hl": "s[i]t", "gloss": "坐"}}
     ],
     "variants": []},
    {"id": "letters", "label": "易混的字母名", "labelEn": "Letter names that sound alike", "a": "前一个字母", "aEn": "first letter", "b": "后一个字母", "bEn": "second letter",
     "kcs": ["kt:en-orth-alphabet"],
     "where": "整个字母名只有一个音节，注意它的元音或开头。", "whereEn": "Each letter name is one syllable: listen to its vowel or its first sound.",
     "note": "E 读 /iː/，I 读 /aɪ/（受拼音 e、i 影响容易读反）；G 读 /dʒiː/，J 读 /dʒeɪ/。", "noteEn": "E is /iː/ and I is /aɪ/ (pinyin e and i make them easy to swap); G is /dʒiː/ and J is /dʒeɪ/.",
     "pairs": [
       {"id": "e-i", "kc": "kt:en-orth-alphabet", "a": {"text": "E e", "hl": "[E] e", "say": "E", "gloss": "字母 E"}, "b": {"text": "I i", "hl": "[I] i", "say": "I", "gloss": "字母 I"}, "third": {"text": "Y y", "hl": "[Y] y", "say": "Y", "gloss": "字母 Y"}},
       {"id": "g-j", "kc": "kt:en-orth-alphabet", "a": {"text": "G g", "hl": "[G] g", "say": "G", "gloss": "字母 G"}, "b": {"text": "J j", "hl": "[J] j", "say": "J", "gloss": "字母 J"}, "third": {"text": "Z z", "hl": "[Z] z", "say": "Z", "gloss": "字母 Z（美式读 zee）"}},
       {"id": "b-v", "kc": "kt:en-orth-alphabet", "a": {"text": "B b", "hl": "[B] b", "say": "B", "gloss": "字母 B"}, "b": {"text": "V v", "hl": "[V] v", "say": "V", "gloss": "字母 V"}, "third": {"text": "D d", "hl": "[D] d", "say": "D", "gloss": "字母 D"}},
       {"id": "m-n", "kc": "kt:en-orth-alphabet", "a": {"text": "M m", "hl": "[M] m", "say": "M", "gloss": "字母 M"}, "b": {"text": "N n", "hl": "[N] n", "say": "N", "gloss": "字母 N"}, "third": {"text": "L l", "hl": "[L] l", "say": "L", "gloss": "字母 L"}}
     ],
     "variants": [
       {"pair": "g-j", "side": "b", "how": "rate", "note": "慢速读 J：还是 J。", "noteEn": "J said slowly: still J."}
     ]},
    {"id": "teen-ty", "label": "13 和 30 这类数字", "labelEn": "13 vs 30 and similar numbers", "a": "-teen（13–19）", "aEn": "-teen (13–19)", "b": "-ty（30–90）", "bEn": "-ty (30–90)",
     "kcs": ["kt:en-phon-number-discrimination"],
     "where": "注意重音在前面还是后面，词尾有没有 -n。", "whereEn": "Listen to whether the stress is at the start or the end, and whether the word ends in -n.",
     "note": "thirTEEN 重音在后、结尾有 /n/；THIRty 重音在前、结尾是 /ti/。", "noteEn": "thirTEEN is stressed at the end and finishes with /n/; THIRty is stressed at the start and finishes with /ti/.",
     "pairs": [
       {"id": "13", "kc": "kt:en-phon-number-discrimination", "child": true, "a": {"text": "13 thirteen", "hl": "thir[teen]", "say": "thirteen", "gloss": "十三", "pic": "13"}, "b": {"text": "30 thirty", "hl": "thir[ty]", "say": "thirty", "gloss": "三十", "pic": "30"}, "third": {"text": "3 three", "hl": "[three]", "say": "three", "gloss": "三"}},
       {"id": "14", "kc": "kt:en-phon-number-discrimination", "a": {"text": "14 fourteen", "hl": "four[teen]", "say": "fourteen", "gloss": "十四", "pic": "14"}, "b": {"text": "40 forty", "hl": "for[ty]", "say": "forty", "gloss": "四十", "pic": "40"}, "third": {"text": "4 four", "hl": "[four]", "say": "four", "gloss": "四"}},
       {"id": "15", "kc": "kt:en-phon-number-discrimination", "a": {"text": "15 fifteen", "hl": "fif[teen]", "say": "fifteen", "gloss": "十五", "pic": "15"}, "b": {"text": "50 fifty", "hl": "fif[ty]", "say": "fifty", "gloss": "五十", "pic": "50"}, "third": {"text": "5 five", "hl": "[five]", "say": "five", "gloss": "五"}},
       {"id": "16", "kc": "kt:en-phon-number-discrimination", "a": {"text": "16 sixteen", "hl": "six[teen]", "say": "sixteen", "gloss": "十六", "pic": "16"}, "b": {"text": "60 sixty", "hl": "six[ty]", "say": "sixty", "gloss": "六十", "pic": "60"}, "third": {"text": "6 six", "hl": "[six]", "say": "six", "gloss": "六"}},
       {"id": "17", "kc": "kt:en-phon-number-discrimination", "a": {"text": "17 seventeen", "hl": "seven[teen]", "say": "seventeen", "gloss": "十七", "pic": "17"}, "b": {"text": "70 seventy", "hl": "seven[ty]", "say": "seventy", "gloss": "七十", "pic": "70"}},
       {"id": "18", "kc": "kt:en-phon-number-discrimination", "a": {"text": "18 eighteen", "hl": "eigh[teen]", "say": "eighteen", "gloss": "十八", "pic": "18"}, "b": {"text": "80 eighty", "hl": "eigh[ty]", "say": "eighty", "gloss": "八十", "pic": "80"}},
       {"id": "19", "kc": "kt:en-phon-number-discrimination", "a": {"text": "19 nineteen", "hl": "nine[teen]", "say": "nineteen", "gloss": "十九", "pic": "19"}, "b": {"text": "90 ninety", "hl": "nine[ty]", "say": "ninety", "gloss": "九十", "pic": "90"}}
     ],
     "variants": [
       {"pair": "13", "side": "b", "how": "locale", "locale": "en-GB", "note": "美式 thirty 中间的 t 常读成很轻的闪音，英式读清楚的 t：听得出不同，还是 30。", "noteEn": "In American English the t in thirty is often a light flap; British English says a clear t. You can hear the difference, but it is still 30."},
       {"pair": "14", "side": "b", "how": "locale", "locale": "en-GB", "note": "forty 的 t 和 r 在英式、美式里读法不同，还是 40。", "noteEn": "The t and r of forty differ between British and American English; it is still 40."},
       {"pair": "15", "side": "a", "how": "rate", "note": "慢速读 fifteen：还是 15。", "noteEn": "fifteen said slowly: still 15."}
     ]},
    {"id": "long-short", "label": "短元音和“不发音的 e”", "labelEn": "Short vowel vs silent-e long vowel", "a": "短元音", "aEn": "short vowel", "b": "长元音（词尾 e 不发音）", "bEn": "long vowel (silent final e)",
     "kcs": ["kt:en-orth-long-vowels"],
     "where": "注意中间的元音：是短音，还是读字母本身的名字。", "whereEn": "Listen to the vowel in the middle: is it short, or does it say its own letter name?",
     "note": "词尾的 e 不发音，但让前面的元音读字母名：cap → cape，hop → hope。", "noteEn": "The final e is silent but makes the vowel before it say its letter name: cap → cape, hop → hope.",
     "pairs": [
       {"id": "cap", "kc": "kt:en-orth-long-vowels", "a": {"text": "cap", "hl": "c[a]p", "gloss": "鸭舌帽", "pic": "🧢"}, "b": {"text": "cape", "hl": "c[a]p[e]", "gloss": "披风"}},
       {"id": "hop", "kc": "kt:en-orth-long-vowels", "a": {"text": "hop", "hl": "h[o]p", "gloss": "单脚跳"}, "b": {"text": "hope", "hl": "h[o]p[e]", "gloss": "希望"}},
       {"id": "kit", "kc": "kt:en-orth-long-vowels", "a": {"text": "kit", "hl": "k[i]t", "gloss": "成套工具"}, "b": {"text": "kite", "hl": "k[i]t[e]", "gloss": "风筝", "pic": "🪁"}},
       {"id": "tub", "kc": "kt:en-orth-long-vowels", "a": {"text": "tub", "hl": "t[u]b", "gloss": "浴缸"}, "b": {"text": "tube", "hl": "t[u]b[e]", "gloss": "管子"}},
       {"id": "not", "kc": "kt:en-orth-long-vowels", "a": {"text": "not", "hl": "n[o]t", "gloss": "不"}, "b": {"text": "note", "hl": "n[o]t[e]", "gloss": "便条", "pic": "📝"}},
       {"id": "pin-pine", "kc": "kt:en-orth-long-vowels", "a": {"text": "pin", "hl": "p[i]n", "gloss": "图钉", "pic": "📌"}, "b": {"text": "pine", "hl": "p[i]n[e]", "gloss": "松树", "pic": "🌲"}}
     ],
     "variants": [
       {"pair": "kit", "side": "b", "how": "rate", "note": "慢速读 kite：还是 kite。", "noteEn": "kite said slowly: still kite."}
     ]}
  ],
  "reverse": [
    {"text": "water", "note": "美式 water 的 t 常读成闪音（像很快的 d），英式读清楚的 t：同一个词。", "noteEn": "American water often has a flap (like a quick d) for the t; British has a clear t. Same word."},
    {"text": "tomato", "note": "美式中间读 /eɪ/，英式读 /ɑː/：同一个词。", "noteEn": "American has /eɪ/ in the middle, British /ɑː/. Same word."},
    {"text": "the letter Z", "note": "美式读 zee，英式读 zed：同一个字母。", "noteEn": "American English says zee, British English says zed: the same letter."}
  ],
  "review": ["合成语音读单独的字母 E、I、Y、Z 是否清楚（Z 在 en-US 读 zee，与 G 的 gee 只差开头）", "en-GB 语音读 path、thirty、forty、sit 是否真的和 en-US 有可听的差别（设备没有 en-GB 语音时会改成慢速）", "A / R 这对字母名没有放进练习：单独的 A 可能被读成 /ə/", "verse / worse 的元音在英式里是否完全一样（应只差开头）", "sin、veil、verse 对低龄学习者偏难，儿童版不会用到它们", "bill（账单）配图 🧾 是否合适"],
  "reviewEn": ["Whether synthetic speech says the single letters E, I, Y and Z clearly (en-US Z is zee, which differs from G gee only at the start)", "Whether the en-GB voice really sounds different from en-US for path, thirty, forty and sit (without an en-GB voice the page falls back to slow speech)", "The letter pair A / R is not drilled: a single A may be read as /ə/", "Whether the vowels of verse and worse are fully identical in British English (they should differ only at the start)", "sin, veil and verse are hard for young learners; the child version never uses them", "Whether the 🧾 picture works for bill"]
};

KT_DATA["sound-contrast-ja"] = {
  "id": "sound-contrast-ja", "lang": "ja", "speech": "ja-JP",
  "title": "日语最小对立辨音", "titleEn": "Japanese minimal pairs",
  "subtitle": "清浊、促音、长音、拗音、ん：两个词只差一个音或一拍。中文母语者的难点在声带振动和拍的长短，不在送气。", "subtitleEn": "Voicing, small tsu, long vowels, contracted sounds and ん: two words that differ in one sound or one beat. For Chinese speakers the difficulty is voicing and beat length, not aspiration.",
  "voiceNote": "声音来自浏览器的日语语音合成，只有一个说话人，也不能保证高低音调正确，所以只靠高低区分的词对（箸／橋、雨／飴）没有放进练习。拍长对立都用同一语速播放。", "voiceNoteEn": "The sound comes from the browser's Japanese speech synthesis, with one speaker and no guarantee of correct pitch accent, so pairs that differ only in pitch (箸／橋, 雨／飴) are not drilled. Beat-length pairs are always played at the same speed.",
  "kcs": ["kt:ja-sound-kg", "kt:ja-sound-td", "kt:ja-sound-pb", "kt:ja-sound-sokuon", "kt:ja-sound-long", "kt:ja-sound-yoon", "kt:ja-sound-nasal-other", "kt:ja-sound-z", "kt:ja-sound-tsu"],
  "axes": [
    {"id": "voicing", "label": "清音和浊音（か/が・た/だ・ぱ/ば）", "labelEn": "Voiceless vs voiced (か/が, た/だ, ぱ/ば)", "a": "清音", "aEn": "voiceless", "b": "浊音", "bEn": "voiced",
     "kcs": ["kt:ja-sound-kg", "kt:ja-sound-td", "kt:ja-sound-pb"],
     "where": "注意加了点的那一拍：听声带有没有振动，而不是有没有送气。", "whereEn": "Listen to the beat that may carry the voicing marks: is the voice buzzing? Ignore aspiration.",
     "note": "日语的清浊靠声带振动区分；普通话的 b/p、d/t、g/k 靠送气，两边都不振动。所以词中不送气的か容易被听成が。", "noteEn": "Japanese voicing is about vocal-fold vibration; Mandarin b/p, d/t, g/k differ in aspiration and neither side vibrates. So an unaspirated か in mid-word is easily heard as が.",
     "pairs": [
       {"id": "kaki", "kc": "kt:ja-sound-kg", "a": {"text": "かき", "hl": "か[き]", "gloss": "柿子（柿）", "glossEn": "persimmon (柿)"}, "b": {"text": "かぎ", "hl": "か[ぎ]", "gloss": "钥匙（鍵）", "glossEn": "key (鍵)", "pic": "🔑"}, "third": {"text": "かち", "hl": "か[ち]", "gloss": "胜利（勝ち）", "glossEn": "a win (勝ち)"}},
       {"id": "takai", "kc": "kt:ja-sound-kg", "a": {"text": "たかい", "hl": "た[か]い", "gloss": "高的（高い）", "glossEn": "high (高い)"}, "b": {"text": "たがい", "hl": "た[が]い", "gloss": "互相（互い）", "glossEn": "each other (互い)"}},
       {"id": "kin", "kc": "kt:ja-sound-kg", "a": {"text": "きん", "hl": "[き]ん", "gloss": "金", "glossEn": "gold (金)", "pic": "🥇"}, "b": {"text": "ぎん", "hl": "[ぎ]ん", "gloss": "银", "glossEn": "silver (銀)", "pic": "🥈"}},
       {"id": "kakkou", "kc": "kt:ja-sound-kg", "a": {"text": "かっこう", "hl": "[か]っこう", "gloss": "样子（格好）", "glossEn": "appearance (格好)"}, "b": {"text": "がっこう", "hl": "[が]っこう", "gloss": "学校", "glossEn": "school (学校)", "pic": "🏫"}},
       {"id": "tenki", "kc": "kt:ja-sound-td", "a": {"text": "てんき", "hl": "[て]んき", "gloss": "天气（天気）", "glossEn": "weather (天気)"}, "b": {"text": "でんき", "hl": "[で]んき", "gloss": "电、电灯（電気）", "glossEn": "electricity, light (電気)", "pic": "💡"}, "third": {"text": "げんき", "hl": "[げ]んき", "gloss": "精神（元気）", "glossEn": "well, lively (元気)"}},
       {"id": "taigaku", "kc": "kt:ja-sound-td", "a": {"text": "たいがく", "hl": "[た]いがく", "gloss": "退学", "glossEn": "leaving school (退学)"}, "b": {"text": "だいがく", "hl": "[だ]いがく", "gloss": "大学", "glossEn": "university (大学)"}},
       {"id": "tango", "kc": "kt:ja-sound-td", "a": {"text": "たんご", "hl": "[た]んご", "gloss": "单词（単語）", "glossEn": "word (単語)"}, "b": {"text": "だんご", "hl": "[だ]んご", "gloss": "团子（団子）", "glossEn": "rice dumpling (団子)", "pic": "🍡"}, "third": {"text": "さんご", "hl": "[さ]んご", "gloss": "珊瑚", "glossEn": "coral (珊瑚)"}},
       {"id": "pasu", "kc": "kt:ja-sound-pb", "a": {"text": "パス", "hl": "[パ]ス", "gloss": "通行证；传球", "glossEn": "pass"}, "b": {"text": "バス", "hl": "[バ]ス", "gloss": "公交车", "glossEn": "bus", "pic": "🚌"}, "third": {"text": "ガス", "hl": "[ガ]ス", "gloss": "煤气", "glossEn": "gas"}},
       {"id": "pin", "kc": "kt:ja-sound-pb", "a": {"text": "ピン", "hl": "[ピ]ン", "gloss": "别针", "glossEn": "pin", "pic": "📌"}, "b": {"text": "びん", "hl": "[び]ん", "gloss": "瓶子（瓶）", "glossEn": "bottle (瓶)", "pic": "🍾"}},
       {"id": "pan", "kc": "kt:ja-sound-pb", "a": {"text": "パン", "hl": "[パ]ン", "gloss": "面包", "glossEn": "bread", "pic": "🍞"}, "b": {"text": "バン", "hl": "[バ]ン", "gloss": "面包车", "glossEn": "van", "pic": "🚐"}, "third": {"text": "カン", "hl": "[カ]ン", "gloss": "罐子（缶）", "glossEn": "can (缶)"}}
     ],
     "variants": [
       {"pair": "tenki", "side": "b", "how": "rate", "note": "慢速读 でんき：还是 でんき。", "noteEn": "でんき said slowly: still でんき."},
       {"pair": "pasu", "side": "b", "how": "rate", "note": "慢速读 バス：还是 バス。", "noteEn": "バス said slowly: still バス."}
     ]},
    {"id": "sokuon", "label": "促音っ的一拍", "labelEn": "Small っ: one silent beat", "a": "有っ", "aEn": "with っ", "b": "没有っ", "bEn": "without っ",
     "kcs": ["kt:ja-sound-sokuon"],
     "where": "注意词中间：有没有一拍“憋住”的停顿。", "whereEn": "Listen to the middle of the word: is there a held, silent beat?",
     "note": "っ 是一整拍的停顿：口型先摆好下一个辅音，停一拍再发出。漏掉它，きって（邮票）就成了きて（来）。", "noteEn": "っ is a full beat of hold: the mouth gets ready for the next consonant, waits one beat, then releases. Drop it and きって (stamp) becomes きて (come).",
     "pairs": [
       {"id": "kitte", "kc": "kt:ja-sound-sokuon", "a": {"text": "きって", "hl": "き[っ]て", "gloss": "邮票（切手）", "glossEn": "stamp (切手)"}, "b": {"text": "きて", "hl": "き[]て", "gloss": "来（来て）", "glossEn": "come (来て)"}, "third": {"text": "きった", "hl": "きっ[た]", "gloss": "切了（切った）", "glossEn": "cut (切った)"}},
       {"id": "otto", "kc": "kt:ja-sound-sokuon", "a": {"text": "おっと", "hl": "お[っ]と", "gloss": "丈夫（夫）", "glossEn": "husband (夫)"}, "b": {"text": "おと", "hl": "お[]と", "gloss": "声音（音）", "glossEn": "sound (音)"}},
       {"id": "sakka", "kc": "kt:ja-sound-sokuon", "a": {"text": "さっか", "hl": "さ[っ]か", "gloss": "作家", "glossEn": "writer (作家)"}, "b": {"text": "さか", "hl": "さ[]か", "gloss": "坡（坂）", "glossEn": "slope (坂)"}},
       {"id": "kakko", "kc": "kt:ja-sound-sokuon", "a": {"text": "かっこ", "hl": "か[っ]こ", "gloss": "括号（括弧）", "glossEn": "brackets (括弧)"}, "b": {"text": "かこ", "hl": "か[]こ", "gloss": "过去（過去）", "glossEn": "the past (過去)"}},
       {"id": "itta", "kc": "kt:ja-sound-sokuon", "a": {"text": "いった", "hl": "い[っ]た", "gloss": "去了（行った）", "glossEn": "went (行った)"}, "b": {"text": "いた", "hl": "い[]た", "gloss": "在（いた）", "glossEn": "was there (いた)"}},
       {"id": "zasshi", "kc": "kt:ja-sound-sokuon", "a": {"text": "ざっし", "hl": "ざ[っ]し", "gloss": "杂志（雑誌）", "glossEn": "magazine (雑誌)", "pic": "📰"}, "b": {"text": "ざし", "hl": "ざ[]し", "nonword": true, "gloss": "（不是常用词）", "glossEn": "(not an everyday word)"}}
     ],
     "variants": [
       {"pair": "kitte", "side": "a", "how": "rate", "note": "慢速读 きって：每一拍都变长了，っ 仍然占一拍，还是 きって。拍的长短要和同一句里别的拍比。", "noteEn": "きって said slowly: every beat is longer, and っ still takes one beat, so it is still きって. Judge beat length against the other beats at the same speed."}
     ]},
    {"id": "long", "label": "长音和短音", "labelEn": "Long vs short vowels", "a": "长音", "aEn": "long vowel", "b": "短音", "bEn": "short vowel",
     "kcs": ["kt:ja-sound-long"],
     "where": "数一数拍：长音多出来的那一拍在哪里？", "whereEn": "Count the beats: where is the extra beat of the long vowel?",
     "note": "长音是把元音再延长一拍。おばあさん（奶奶）五拍，おばさん（阿姨）四拍。", "noteEn": "A long vowel holds the vowel for one more beat. おばあさん (grandmother) has five beats, おばさん (aunt) four.",
     "pairs": [
       {"id": "obaasan", "kc": "kt:ja-sound-long", "a": {"text": "おばあさん", "hl": "おば[あ]さん", "gloss": "奶奶", "glossEn": "grandmother", "pic": "👵"}, "b": {"text": "おばさん", "hl": "おば[]さん", "gloss": "阿姨", "glossEn": "aunt"}},
       {"id": "ojiisan", "kc": "kt:ja-sound-long", "a": {"text": "おじいさん", "hl": "おじ[い]さん", "gloss": "爷爷", "glossEn": "grandfather", "pic": "👴"}, "b": {"text": "おじさん", "hl": "おじ[]さん", "gloss": "叔叔", "glossEn": "uncle"}},
       {"id": "biiru", "kc": "kt:ja-sound-long", "a": {"text": "ビール", "hl": "ビ[ー]ル", "gloss": "啤酒", "glossEn": "beer", "pic": "🍺"}, "b": {"text": "ビル", "hl": "ビ[]ル", "gloss": "大楼", "glossEn": "building", "pic": "🏢"}},
       {"id": "toori", "kc": "kt:ja-sound-long", "a": {"text": "とおり", "hl": "と[お]り", "gloss": "大街（通り）", "glossEn": "street (通り)"}, "b": {"text": "とり", "hl": "と[]り", "gloss": "鸟（鳥）", "glossEn": "bird (鳥)", "pic": "🐦"}},
       {"id": "yuuki", "kc": "kt:ja-sound-long", "a": {"text": "ゆうき", "hl": "ゆ[う]き", "gloss": "勇气（勇気）", "glossEn": "courage (勇気)"}, "b": {"text": "ゆき", "hl": "ゆ[]き", "gloss": "雪", "glossEn": "snow (雪)", "pic": "❄️"}, "third": {"text": "ゆか", "hl": "ゆ[か]", "gloss": "地板（床）", "glossEn": "floor (床)"}},
       {"id": "koukou", "kc": "kt:ja-sound-long", "a": {"text": "こうこう", "hl": "こ[う]こ[う]", "gloss": "高中（高校）", "glossEn": "high school (高校)"}, "b": {"text": "ここ", "hl": "こ[]こ[]", "gloss": "这里", "glossEn": "here"}}
     ],
     "variants": []},
    {"id": "yoon", "label": "拗音：一拍还是两拍", "labelEn": "Contracted sounds: one beat or two", "a": "拗音（一拍）", "aEn": "contracted (one beat)", "b": "分开读（两拍）", "bEn": "separate (two beats)",
     "kcs": ["kt:ja-sound-yoon"],
     "where": "注意词的开头：きょ 是一拍，きよ 是两拍。", "whereEn": "Listen to the start of the word: きょ is one beat, きよ is two.",
     "note": "小写的ゃゅょ和前面的假名合成一拍。びょういん（医院）四拍，びよういん（美容院）五拍。", "noteEn": "A small ゃ, ゅ or ょ joins the kana before it into one beat. びょういん (hospital) has four beats, びよういん (beauty salon) five.",
     "pairs": [
       {"id": "byouin", "kc": "kt:ja-sound-yoon", "a": {"text": "びょういん", "hl": "び[ょ]ういん", "gloss": "医院（病院）", "glossEn": "hospital (病院)", "pic": "🏥"}, "b": {"text": "びよういん", "hl": "び[よ]ういん", "gloss": "美容院", "glossEn": "beauty salon (美容院)", "pic": "💇"}},
       {"id": "kyou", "kc": "kt:ja-sound-yoon", "a": {"text": "きょう", "hl": "き[ょ]う", "gloss": "今天（今日）", "glossEn": "today (今日)"}, "b": {"text": "きよう", "hl": "き[よ]う", "gloss": "手巧（器用）", "glossEn": "skilful (器用)"}},
       {"id": "juu", "kc": "kt:ja-sound-yoon", "a": {"text": "じゅう", "hl": "じ[ゅ]う", "gloss": "十", "glossEn": "ten (十)", "pic": "🔟"}, "b": {"text": "じゆう", "hl": "じ[ゆ]う", "gloss": "自由", "glossEn": "freedom (自由)"}},
       {"id": "ryou", "kc": "kt:ja-sound-yoon", "a": {"text": "りょう", "hl": "り[ょ]う", "gloss": "宿舍（寮）", "glossEn": "dormitory (寮)"}, "b": {"text": "りよう", "hl": "り[よ]う", "gloss": "利用", "glossEn": "use (利用)"}}
     ],
     "variants": []},
    {"id": "n-vowel", "label": "元音前的ん", "labelEn": "ん before a vowel", "a": "有ん（多一拍）", "aEn": "with ん (one more beat)", "b": "没有ん", "bEn": "without ん",
     "kcs": ["kt:ja-sound-nasal-other"],
     "where": "注意词中间：ん 自己占一拍，不和后面的元音连成 な行。", "whereEn": "Listen to the middle: ん takes its own beat and does not merge with the next vowel into the な row.",
     "note": "元音前的ん是鼻化的一拍，舌尖不贴住。读成 n 并连读，きんえん（禁烟）就成了きねん（纪念）。", "noteEn": "Before a vowel ん is a nasal beat with the tongue tip free. Read it as n and join it to the vowel, and きんえん (no smoking) becomes きねん (memorial).",
     "pairs": [
       {"id": "kinen", "kc": "kt:ja-sound-nasal-other", "a": {"text": "きんえん", "hl": "き[ん]えん", "gloss": "禁烟（禁煙）", "glossEn": "no smoking (禁煙)", "pic": "🚭"}, "b": {"text": "きねん", "hl": "き[]ねん", "gloss": "纪念（記念）", "glossEn": "commemoration (記念)"}},
       {"id": "kani", "kc": "kt:ja-sound-nasal-other", "a": {"text": "かんい", "hl": "か[ん]い", "gloss": "简易（簡易）", "glossEn": "simple (簡易)"}, "b": {"text": "かに", "hl": "か[]に", "gloss": "螃蟹（蟹）", "glossEn": "crab (蟹)", "pic": "🦀"}}
     ],
     "variants": []},
    {"id": "z-s", "label": "ザ行和サ行", "labelEn": "ざ row vs さ row", "a": "浊 ざ行", "aEn": "voiced ざ row", "b": "清 さ行", "bEn": "voiceless さ row",
     "kcs": ["kt:ja-sound-z"],
     "where": "注意词的开头：声带振不振动。", "whereEn": "Listen to the start of the word: is the voice buzzing?",
     "note": "普通话没有浊擦音，ざ行常被读成清音：ぞう（象）就成了そう。", "noteEn": "Mandarin has no voiced fricatives, so the ざ row is often said voiceless: ぞう (elephant) becomes そう.",
     "pairs": [
       {"id": "zou", "kc": "kt:ja-sound-z", "a": {"text": "ぞう", "hl": "[ぞ]う", "gloss": "大象（象）", "glossEn": "elephant (象)", "pic": "🐘"}, "b": {"text": "そう", "hl": "[そ]う", "gloss": "是那样", "glossEn": "so, like that"}},
       {"id": "zaru", "kc": "kt:ja-sound-z", "a": {"text": "ざる", "hl": "[ざ]る", "gloss": "竹篓（笊）", "glossEn": "colander (笊)"}, "b": {"text": "さる", "hl": "[さ]る", "gloss": "猴子（猿）", "glossEn": "monkey (猿)", "pic": "🐒"}},
       {"id": "kaze", "kc": "kt:ja-sound-z", "a": {"text": "かぜ", "hl": "か[ぜ]", "gloss": "风；感冒（風・風邪）", "glossEn": "wind; a cold (風・風邪)", "pic": "🌬️"}, "b": {"text": "かせ", "hl": "か[せ]", "nonword": true, "gloss": "（不是常用词）", "glossEn": "(not an everyday word)"}}
     ],
     "variants": []},
    {"id": "tsu", "label": "つ 和 す・ちゅ", "labelEn": "つ vs す / ちゅ", "a": "つ", "aEn": "つ", "b": "す 或 ちゅ", "bEn": "す or ちゅ",
     "kcs": ["kt:ja-sound-tsu"],
     "where": "注意词的开头：舌尖先堵住再放开（つ），还是一直摩擦（す）。", "whereEn": "Listen to the start: does the tongue tip stop the air and then release (つ), or hiss all the way (す)?",
     "note": "つ 的辅音是 [ts]，接近拼音 c 但送气弱；读成す，つき（月）就成了すき（喜欢）。", "noteEn": "The consonant of つ is [ts], close to pinyin c but with less aspiration; say す instead and つき (moon) becomes すき (like).",
     "pairs": [
       {"id": "tsuki", "kc": "kt:ja-sound-tsu", "a": {"text": "つき", "hl": "[つ]き", "gloss": "月亮（月）", "glossEn": "moon (月)", "pic": "🌙"}, "b": {"text": "すき", "hl": "[す]き", "gloss": "喜欢（好き）", "glossEn": "like (好き)"}},
       {"id": "tsuuka", "kc": "kt:ja-sound-tsu", "a": {"text": "つうか", "hl": "[つ]うか", "gloss": "通过（通過）", "glossEn": "passing through (通過)"}, "b": {"text": "ちゅうか", "hl": "[ちゅ]うか", "gloss": "中餐（中華）", "glossEn": "Chinese food (中華)", "pic": "🥟"}},
       {"id": "tsumi", "kc": "kt:ja-sound-tsu", "a": {"text": "つみ", "hl": "[つ]み", "gloss": "罪", "glossEn": "crime (罪)"}, "b": {"text": "すみ", "hl": "[す]み", "gloss": "角落（隅）", "glossEn": "corner (隅)"}}
     ],
     "variants": []}
  ],
  "reverse": [
    {"text": "らいしゅう", "note": "ら行的辅音有人读成轻弹的 [ɾ]，有人接近 [l] 或 [d]：说话人不同，还是同一个词。合成语音做不出这种差别，这里只说明。", "noteEn": "The consonant of the ら row is a light tap [ɾ] for some speakers and closer to [l] or [d] for others: different speakers, same word. Speech synthesis cannot make this difference, so it is only described here."},
    {"text": "がっこう", "note": "词中的が有人读成鼻音 [ŋ]（鼻浊音）：说话人差异，不改变词。", "noteEn": "Some speakers say the が in mid-word as a nasal [ŋ]: a speaker difference that does not change the word."},
    {"text": "です", "note": "です 的 す 常常清化，几乎听不到元音：同一个词。", "noteEn": "The す of です is usually devoiced, with almost no vowel: the same word."}
  ],
  "review": ["只靠高低区分的词对（箸／橋、雨／飴、花が／鼻が）：合成语音的音调不可靠，没有放进练习", "え／えい、お／おう 的单元音和双元音对立：合成语音会把 えい 读成长音 ええ，没有放进练习", "ら／だ 对立（ろうか／どうか 等）：合成语音的 ら 行是否清楚，待核对后再加", "げんいん／げにん：げにん 不是常用词，没有放进练习", "ざし、かせ 标为“不是常用词”，用作对比是否合适", "合成语音读 いた、かこ、きて 这类孤立的短词时，音调可能和常见读法不同（不影响清浊和拍数）", "ぎん（银）配图 🥈、びん 配图 🍾 是否合适"],
  "reviewEn": ["Pairs that differ only in pitch (箸／橋, 雨／飴, 花が／鼻が): synthetic pitch is unreliable, so they are not drilled", "え／えい and お／おう (pure vowel vs diphthong): synthesis reads えい as a long ええ, so they are not drilled", "ら／だ (ろうか／どうか etc.): to be added after checking that the synthetic ら row is clear", "げんいん／げにん: げにん is not an everyday word, so it is not drilled", "Whether ざし and かせ, marked as not everyday words, are acceptable as contrasts", "Synthesis may give isolated short words such as いた, かこ, きて an unusual pitch (voicing and beat count are unaffected)", "Whether the pictures 🥈 for ぎん and 🍾 for びん work"]
};

KT_DATA["sound-contrast-zh"] = {
  "id": "sound-contrast-zh", "lang": "zh", "speech": "zh-CN",
  "title": "汉语声母韵母辨音", "titleEn": "Mandarin initials and finals: minimal pairs",
  "subtitle": "送气不送气、j q x 和 zh ch sh、ü 和 u、前后鼻音、n 和 l：两个字只差一个音，声调相同。", "subtitleEn": "Aspirated vs unaspirated, j q x vs zh ch sh, ü vs u, -n vs -ng, n vs l: two syllables that differ in one sound and share the same tone.",
  "voiceNote": "声音来自浏览器的普通话语音合成，只有一个说话人。每对字声调相同，只差声母或韵母；声调对立交给“声调与音高轮廓”积木。", "voiceNoteEn": "The sound comes from the browser's Mandarin speech synthesis, with one speaker. Each pair has the same tone and differs only in the initial or the final; tone contrasts are left to the Tone and pitch contours block.",
  "kcs": ["kt:zh-pinyin-initials-finals"],
  "axes": [
    {"id": "aspiration", "label": "送气和不送气（b/p・d/t・g/k）", "labelEn": "Unaspirated vs aspirated (b/p, d/t, g/k)", "a": "不送气 b d g", "aEn": "unaspirated b d g", "b": "送气 p t k", "bEn": "aspirated p t k",
     "kcs": ["kt:zh-pinyin-initials-finals"],
     "where": "注意开头：有没有一股气冲出来。", "whereEn": "Listen to the start: is there a puff of air?",
     "note": "普通话的 b 和 p 都不振动声带，区别只在送气：p 有一股强气流。英语母语者常把 b 读成带声的浊音，把 p 的送气读得太弱。", "noteEn": "Mandarin b and p are both voiceless; the only difference is aspiration: p has a strong puff of air. English speakers often voice b and under-aspirate p.",
     "pairs": [
       {"id": "ba", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "爸", "py": "bà", "hl": "[b]à", "glossEn": "dad"}, "b": {"text": "怕", "py": "pà", "hl": "[p]à", "glossEn": "to fear"}, "third": {"text": "骂", "py": "mà", "hl": "[m]à", "glossEn": "to scold"}},
       {"id": "bao", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "饱", "py": "bǎo", "hl": "[b]ǎo", "glossEn": "full (after eating)"}, "b": {"text": "跑", "py": "pǎo", "hl": "[p]ǎo", "glossEn": "to run", "pic": "🏃"}, "third": {"text": "好", "py": "hǎo", "hl": "[h]ǎo", "glossEn": "good"}},
       {"id": "di", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "弟", "py": "dì", "hl": "[d]ì", "glossEn": "younger brother"}, "b": {"text": "替", "py": "tì", "hl": "[t]ì", "glossEn": "to replace"}, "third": {"text": "立", "py": "lì", "hl": "[l]ì", "glossEn": "to stand"}},
       {"id": "duzi", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "肚子", "py": "dùzi", "hl": "[d]ùzi", "glossEn": "belly"}, "b": {"text": "兔子", "py": "tùzi", "hl": "[t]ùzi", "glossEn": "rabbit", "pic": "🐇"}, "third": {"text": "裤子", "py": "kùzi", "hl": "[k]ùzi", "glossEn": "trousers"}},
       {"id": "ge", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "哥", "py": "gē", "hl": "[g]ē", "glossEn": "elder brother"}, "b": {"text": "科", "py": "kē", "hl": "[k]ē", "glossEn": "subject, department"}, "third": {"text": "喝", "py": "hē", "hl": "[h]ē", "glossEn": "to drink"}},
       {"id": "gu", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "古", "py": "gǔ", "hl": "[g]ǔ", "glossEn": "ancient"}, "b": {"text": "苦", "py": "kǔ", "hl": "[k]ǔ", "glossEn": "bitter"}, "third": {"text": "虎", "py": "hǔ", "hl": "[h]ǔ", "glossEn": "tiger"}}
     ],
     "variants": [
       {"pair": "ba", "side": "a", "how": "rate", "note": "慢速读 爸：还是 bà。", "noteEn": "爸 said slowly: still bà."}
     ]},
    {"id": "jqx-zhchsh", "label": "j q x 和 zh ch sh", "labelEn": "j q x vs zh ch sh", "a": "舌面 j q x", "aEn": "tongue-blade j q x", "b": "卷舌 zh ch sh", "bEn": "retroflex zh ch sh",
     "kcs": ["kt:zh-pinyin-initials-finals"],
     "where": "注意开头：舌面贴硬腭、嘴角往两边（x），还是舌尖翘起（sh）。", "whereEn": "Listen to the start: tongue blade against the hard palate with spread lips (x), or tongue tip curled up (sh)?",
     "note": "j q x 后面只跟 i 和 ü，舌面发音；zh ch sh 舌尖翘起。英语母语者常把 x 读成英语的 sh，两组混成一组。", "noteEn": "j q x are only followed by i or ü and use the tongue blade; zh ch sh curl the tongue tip up. English speakers often say x as English sh and merge the two sets.",
     "pairs": [
       {"id": "xi", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "西", "py": "xī", "hl": "[x]ī", "glossEn": "west"}, "b": {"text": "诗", "py": "shī", "hl": "[sh]ī", "glossEn": "poem"}, "third": {"text": "丝", "py": "sī", "hl": "[s]ī", "glossEn": "silk"}},
       {"id": "ji", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "鸡", "py": "jī", "hl": "[j]ī", "glossEn": "chicken", "pic": "🐔"}, "b": {"text": "知", "py": "zhī", "hl": "[zh]ī", "glossEn": "to know"}, "third": {"text": "资", "py": "zī", "hl": "[z]ī", "glossEn": "funds"}},
       {"id": "qi", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "七", "py": "qī", "hl": "[q]ī", "glossEn": "seven", "pic": "7️⃣"}, "b": {"text": "吃", "py": "chī", "hl": "[ch]ī", "glossEn": "to eat"}, "third": {"text": "吸", "py": "xī", "hl": "[x]ī", "glossEn": "to breathe in"}},
       {"id": "xishi", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "洗", "py": "xǐ", "hl": "[x]ǐ", "glossEn": "to wash"}, "b": {"text": "史", "py": "shǐ", "hl": "[sh]ǐ", "glossEn": "history"}, "third": {"text": "死", "py": "sǐ", "hl": "[s]ǐ", "glossEn": "to die"}},
       {"id": "qichi", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "气", "py": "qì", "hl": "[q]ì", "glossEn": "air, gas"}, "b": {"text": "翅", "py": "chì", "hl": "[ch]ì", "glossEn": "wing"}}
     ],
     "variants": [
       {"pair": "xi", "side": "b", "how": "rate", "note": "慢速读 诗：还是 shī。", "noteEn": "诗 said slowly: still shī."}
     ]},
    {"id": "u-v", "label": "ü 和 u", "labelEn": "ü vs u", "a": "ü", "aEn": "ü", "b": "u", "bEn": "u",
     "kcs": ["kt:zh-pinyin-initials-finals"],
     "where": "注意韵母：嘴唇圆、舌头靠前（ü），还是舌头靠后（u）。", "whereEn": "Listen to the final: rounded lips with the tongue forward (ü), or the tongue back (u)?",
     "note": "ü 是舌位像 i、嘴唇像 u 的圆唇前元音。在 l、n 后面 ü 和 u 都能出现，写法上保留两点。", "noteEn": "ü has the tongue of i and the lips of u. After l and n both ü and u occur, and the two dots stay in the spelling.",
     "pairs": [
       {"id": "lv", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "绿", "py": "lǜ", "hl": "l[ǜ]", "glossEn": "green", "pic": "🟩"}, "b": {"text": "路", "py": "lù", "hl": "l[ù]", "glossEn": "road", "pic": "🛣️"}, "third": {"text": "利", "py": "lì", "hl": "l[ì]", "glossEn": "benefit"}},
       {"id": "nv", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "女", "py": "nǚ", "hl": "n[ǚ]", "glossEn": "female"}, "b": {"text": "努", "py": "nǔ", "hl": "n[ǔ]", "glossEn": "to strive"}, "third": {"text": "你", "py": "nǐ", "hl": "n[ǐ]", "glossEn": "you"}},
       {"id": "lv2", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "驴", "py": "lǘ", "hl": "l[ǘ]", "glossEn": "donkey", "pic": "🫏"}, "b": {"text": "炉", "py": "lú", "hl": "l[ú]", "glossEn": "stove"}},
       {"id": "lv3", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "旅", "py": "lǚ", "hl": "l[ǚ]", "glossEn": "to travel"}, "b": {"text": "鲁", "py": "lǔ", "hl": "l[ǔ]", "glossEn": "Lu (a surname)"}}
     ],
     "variants": []},
    {"id": "n-ng", "label": "前鼻音 -n 和后鼻音 -ng", "labelEn": "Front nasal -n vs back nasal -ng", "a": "前鼻音 -n", "aEn": "front nasal -n", "b": "后鼻音 -ng", "bEn": "back nasal -ng",
     "kcs": ["kt:zh-pinyin-initials-finals"],
     "where": "注意结尾：舌尖抵上齿龈（-n），还是舌根抬起（-ng）。", "whereEn": "Listen to the end: tongue tip on the gum ridge (-n), or the back of the tongue raised (-ng)?",
     "note": "-n 收在舌尖，-ng 收在舌根；-ng 前面的元音也更靠后。日语母语者特别容易混。", "noteEn": "-n ends at the tongue tip, -ng at the back of the tongue, and the vowel before -ng is further back. Japanese speakers mix them up especially often.",
     "pairs": [
       {"id": "shan", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "山", "py": "shān", "hl": "sh[an]", "glossEn": "mountain", "pic": "⛰️"}, "b": {"text": "伤", "py": "shāng", "hl": "sh[ang]", "glossEn": "wound"}, "third": {"text": "沙", "py": "shā", "hl": "sh[a]", "glossEn": "sand"}},
       {"id": "ban", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "班", "py": "bān", "hl": "b[an]", "glossEn": "class (of students)"}, "b": {"text": "帮", "py": "bāng", "hl": "b[ang]", "glossEn": "to help"}, "third": {"text": "八", "py": "bā", "hl": "b[a]", "glossEn": "eight"}},
       {"id": "xin", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "新", "py": "xīn", "hl": "x[in]", "glossEn": "new"}, "b": {"text": "星", "py": "xīng", "hl": "x[ing]", "glossEn": "star", "pic": "⭐"}, "third": {"text": "西", "py": "xī", "hl": "x[i]", "glossEn": "west"}},
       {"id": "jin", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "金", "py": "jīn", "hl": "j[in]", "glossEn": "gold"}, "b": {"text": "京", "py": "jīng", "hl": "j[ing]", "glossEn": "capital (as in 北京)"}},
       {"id": "min", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "民", "py": "mín", "hl": "m[in]", "glossEn": "people"}, "b": {"text": "明", "py": "míng", "hl": "m[ing]", "glossEn": "bright"}}
     ],
     "variants": [
       {"pair": "shan", "side": "a", "how": "rate", "note": "慢速读 山：还是 shān。", "noteEn": "山 said slowly: still shān."}
     ]},
    {"id": "n-l", "label": "n 和 l", "labelEn": "n vs l", "a": "n", "aEn": "n", "b": "l", "bEn": "l",
     "kcs": ["kt:zh-pinyin-initials-finals"],
     "where": "注意开头：气从鼻子出（n），还是从舌头两边出（l）。", "whereEn": "Listen to the start: air through the nose (n), or around the sides of the tongue (l)?",
     "note": "部分方言 n 和 l 不分；普通话里它们区别意义：你 nǐ／李 lǐ。", "noteEn": "Some dialects do not separate n and l, but in Mandarin they change the meaning: 你 nǐ / 李 lǐ.",
     "pairs": [
       {"id": "ni", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "你", "py": "nǐ", "hl": "[n]ǐ", "glossEn": "you"}, "b": {"text": "李", "py": "lǐ", "hl": "[l]ǐ", "glossEn": "Li (a surname); plum"}, "third": {"text": "米", "py": "mǐ", "hl": "[m]ǐ", "glossEn": "rice"}},
       {"id": "nan", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "南", "py": "nán", "hl": "[n]án", "glossEn": "south"}, "b": {"text": "蓝", "py": "lán", "hl": "[l]án", "glossEn": "blue", "pic": "🟦"}, "third": {"text": "谈", "py": "tán", "hl": "[t]án", "glossEn": "to talk"}},
       {"id": "niu", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "牛", "py": "niú", "hl": "[n]iú", "glossEn": "cow", "pic": "🐄"}, "b": {"text": "流", "py": "liú", "hl": "[l]iú", "glossEn": "to flow"}},
       {"id": "nv-lv", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "女", "py": "nǚ", "hl": "[n]ǚ", "glossEn": "female"}, "b": {"text": "旅", "py": "lǚ", "hl": "[l]ǚ", "glossEn": "to travel"}},
       {"id": "nong", "kc": "kt:zh-pinyin-initials-finals", "a": {"text": "农", "py": "nóng", "hl": "[n]óng", "glossEn": "farming"}, "b": {"text": "龙", "py": "lóng", "hl": "[l]óng", "glossEn": "dragon", "pic": "🐉"}}
     ],
     "variants": [
       {"pair": "ni", "side": "a", "how": "rate", "note": "慢速读 你：还是 nǐ。", "noteEn": "你 said slowly: still nǐ."}
     ]}
  ],
  "reverse": [
    {"text": "你好 nǐ hǎo", "note": "两个三声相连，前一个读成二声；单念的 好 是完整的降升调，句中常读成只降不升的“半上”：调形听得出不同，还是同一个字。", "noteEn": "When two third tones meet, the first is said as a second tone; 好 on its own has the full dip and rise, but inside a sentence it is often a low falling “half third”. The contour sounds different, but it is the same syllable."},
    {"text": "一 yī / yí / yì", "note": "一 在不同位置读不同的调（一天 yì tiān、一个 yí ge）：同一个字。", "noteEn": "一 takes different tones in different positions (一天 yì tiān, 一个 yí ge): the same character."},
    {"text": "这儿 zhèr / 这里 zhèlǐ", "note": "北方口语多用儿化，南方多说“这里”：用词不同，意思一样。", "noteEn": "Northern speech uses the -r form, southern speech tends to say 这里: different words, same meaning."}
  ],
  "review": ["单字的合成读音是否都是这里写的调（饱 bǎo、替 tì、科 kē、翅 chì、炉 lú、鲁 lǔ、农 nóng）", "气 qì／翅 chì 是否适合初学者（翅 常用在 翅膀 里）", "儿化和轻声的对立（东西 dōngxī／dōngxi、画／画儿）：合成语音不能指定读哪一个，没有放进练习", "声调对立（买 mǎi／卖 mài）留给声调积木，本积木只练声母和韵母", "鲁 作为姓氏、京 只用在 北京 等词里：释义是否合适"],
  "reviewEn": ["Whether synthesis reads each single character with the tone given here (饱 bǎo, 替 tì, 科 kē, 翅 chì, 炉 lú, 鲁 lǔ, 农 nóng)", "Whether 气 qì / 翅 chì suits beginners (翅 mostly appears in 翅膀)", "-r and neutral-tone contrasts (东西 dōngxī / dōngxi, 画 / 画儿): synthesis cannot be told which reading to use, so they are not drilled", "Tone contrasts (买 mǎi / 卖 mài) are left to the tone block; this block only drills initials and finals", "Whether the glosses for 鲁 (a surname) and 京 (only in words like 北京) work"]
};

/* Data packs for blocks/oral-sound-play.html (prim:oral-sound-play): oral-sound-play-en, oral-sound-play-ja, oral-sound-play-zh.
 * Nothing written in the language being taught is ever shown on the page: words are pictures + sound only.
 *
 * Pack format
 *   speech     BCP-47 locale for speech synthesis.
 *   scopes     [{id, label, labelEn, unit, unitEn, kc, ask, askEn}]  what one clap counts: syllable | phoneme (en),
 *              mora (ja), syllable (zh). `ask` is the clap question.
 *   words      {id: {say, pic, gloss, glossEn, n: {<scope>: count}, written?, tone?}}
 *              n = the number of claps for that scope (a scope with no count skips the word).
 *              written = how many letters / kana it has in writing: used only to make sure that at least half of
 *              every round has a count that differs from the written length (the page never shows it).
 *              big = true for a big thing with a short word, small = true for a small thing with a long word
 *              (the meaning-size trap from the contract).
 *   swaps      [{id, from, scope, boxes, pos, op: 'replace' | 'remove' | 'tone', token?, result, options[], note?, noteEn?}]
 *              take `from`, change box `pos` (0-based; 'tone' = the tone), and say what word comes out.
 *              replace: the new sound is the FIRST sound (or first beat) of `token`; tone: the tone of `token`
 *              (its first syllable). result = word id, or null = "not a word" (shown as an empty frame).
 *              options = word ids offered as pictures (the "not a word" frame is always added).
 *              resultSay = what speech synthesis reads for a non-word result (optional; zh non-syllables have none).
 *   sortCats   [{id, label, labelEn}]  what two words can share. 'none' (no category) is always added by the page.
 *   sorts      [{id, a, b, truth[], note?, noteEn?, reverse?}]  truth = the exact set of shared categories.
 *              reverse = the item shows where the rule stops working (rhyme without matching spelling, a beat that
 *              is not a syllable, rhyme that is not the same word).
 *   childSort  the one category the child version asks about (yes / no).
 *   produce    [{word, task, n?}]  task = a sortCats id or 'beats'; the learner says a word, a listener judges.
 *   review     items a native teacher should check (reviewEn parallel).
 * All words and pairings are original. Emoji are the system's own pictures; no image files are bundled.
 */
KT_DATA["oral-sound-play-en"] = {
  "id": "oral-sound-play-en", "lang": "en", "speech": "en-US",
  "title": "英语音素意识游戏", "titleEn": "English sound play",
  "subtitle": "不看字母，只听声音：拍出音节或音素，把一个音换掉看变成什么，找押韵的词。", "subtitleEn": "No letters, only sounds: clap the syllables or the sounds, swap one sound and see what you get, find words that rhyme.",
  "voiceNote": "浏览器读不出单个音素，所以题目只播放整词；“换一格”用一张图告诉你新的音是哪个词开头的那个音。", "voiceNoteEn": "The browser cannot say a single sound, so only whole words are played; in “Swap a sound”, a picture tells you the new sound: the first sound of that word.",
  "kcs": ["kt:en-phon-awareness"],
  "scopes": [
    {"id": "syllable", "label": "音节", "labelEn": "Syllables", "unit": "个音节", "unitEn": "syllables", "kc": "kt:en-phon-awareness",
     "ask": "听这个词，每听到一个音节就拍一下。", "askEn": "Listen to the word and clap once for each syllable."},
    {"id": "phoneme", "label": "音素", "labelEn": "Sounds (phonemes)", "unit": "个音", "unitEn": "sounds", "kc": "kt:en-phon-awareness",
     "ask": "听这个词，每听到一个音就点一格。辅音后面不要加元音。", "askEn": "Listen to the word and tap one box for each sound. Do not add a vowel after a consonant."}
  ],
  "words": {
    "elephant": {"say": "elephant", "pic": "🐘", "gloss": "大象", "n": {"syllable": 3}, "written": 8, "big": true},
    "car": {"say": "car", "pic": "🚗", "gloss": "汽车", "n": {"syllable": 1}, "written": 3},
    "banana": {"say": "banana", "pic": "🍌", "gloss": "香蕉", "n": {"syllable": 3}, "written": 6},
    "butterfly": {"say": "butterfly", "pic": "🦋", "gloss": "蝴蝶", "n": {"syllable": 3}, "written": 9},
    "caterpillar": {"say": "caterpillar", "pic": "🐛", "gloss": "毛毛虫", "n": {"syllable": 4}, "written": 11, "small": true},
    "whale": {"say": "whale", "pic": "🐳", "gloss": "鲸", "n": {"syllable": 1, "phoneme": 3}, "written": 5, "big": true},
    "dinosaur": {"say": "dinosaur", "pic": "🦕", "gloss": "恐龙", "n": {"syllable": 3}, "written": 8},
    "tiger": {"say": "tiger", "pic": "🐯", "gloss": "老虎", "n": {"syllable": 2}, "written": 5},
    "crocodile": {"say": "crocodile", "pic": "🐊", "gloss": "鳄鱼", "n": {"syllable": 3}, "written": 9},
    "rabbit": {"say": "rabbit", "pic": "🐰", "gloss": "兔子", "n": {"syllable": 2}, "written": 6},
    "umbrella": {"say": "umbrella", "pic": "☂️", "gloss": "雨伞", "n": {"syllable": 3}, "written": 8},
    "penguin": {"say": "penguin", "pic": "🐧", "gloss": "企鹅", "n": {"syllable": 2}, "written": 7},
    "ant": {"say": "ant", "pic": "🐜", "gloss": "蚂蚁", "n": {"syllable": 1, "phoneme": 3}, "written": 3, "small": false},
    "pencil": {"say": "pencil", "pic": "✏️", "gloss": "铅笔", "n": {"syllable": 2}, "written": 6},
    "cat": {"say": "cat", "pic": "🐱", "gloss": "猫", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "hat": {"say": "hat", "pic": "🎩", "gloss": "帽子", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "hot": {"say": "hot", "pic": "🔥", "gloss": "热", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "cap": {"say": "cap", "pic": "🧢", "gloss": "鸭舌帽", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "ship": {"say": "ship", "pic": "🚢", "gloss": "船", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "shop": {"say": "shop", "pic": "🏪", "gloss": "商店", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "sheep": {"say": "sheep", "pic": "🐑", "gloss": "羊", "n": {"syllable": 1, "phoneme": 3}, "written": 5},
    "fish": {"say": "fish", "pic": "🐟", "gloss": "鱼", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "cake": {"say": "cake", "pic": "🍰", "gloss": "蛋糕", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "snake": {"say": "snake", "pic": "🐍", "gloss": "蛇", "n": {"syllable": 1, "phoneme": 4}, "written": 5},
    "duck": {"say": "duck", "pic": "🦆", "gloss": "鸭子", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "dog": {"say": "dog", "pic": "🐶", "gloss": "狗", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "frog": {"say": "frog", "pic": "🐸", "gloss": "青蛙", "n": {"syllable": 1, "phoneme": 4}, "written": 4},
    "moon": {"say": "moon", "pic": "🌙", "gloss": "月亮", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "spoon": {"say": "spoon", "pic": "🥄", "gloss": "勺子", "n": {"syllable": 1, "phoneme": 4}, "written": 5},
    "bee": {"say": "bee", "pic": "🐝", "gloss": "蜜蜂", "n": {"syllable": 1, "phoneme": 2}, "written": 3},
    "tree": {"say": "tree", "pic": "🌳", "gloss": "树", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "fox": {"say": "fox", "pic": "🦊", "gloss": "狐狸", "n": {"syllable": 1, "phoneme": 4}, "written": 3},
    "ox": {"say": "ox", "pic": "🐂", "gloss": "公牛", "n": {"syllable": 1, "phoneme": 3}, "written": 2},
    "box": {"say": "box", "pic": "📦", "gloss": "盒子", "n": {"syllable": 1, "phoneme": 4}, "written": 3},
    "mouse": {"say": "mouse", "pic": "🐭", "gloss": "老鼠", "n": {"syllable": 1, "phoneme": 3}, "written": 5},
    "house": {"say": "house", "pic": "🏠", "gloss": "房子", "n": {"syllable": 1, "phoneme": 3}, "written": 5},
    "sun": {"say": "sun", "pic": "☀️", "gloss": "太阳", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "sock": {"say": "sock", "pic": "🧦", "gloss": "袜子", "n": {"syllable": 1, "phoneme": 3}, "written": 4},
    "run": {"say": "run", "pic": "🏃", "gloss": "跑", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "pig": {"say": "pig", "pic": "🐷", "gloss": "猪", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "pin": {"say": "pin", "pic": "📌", "gloss": "图钉", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "pen": {"say": "pen", "pic": "🖊️", "gloss": "钢笔", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "bed": {"say": "bed", "pic": "🛏️", "gloss": "床", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "red": {"say": "red", "pic": "🔴", "gloss": "红色", "n": {"syllable": 1, "phoneme": 3}, "written": 3},
    "hen": {"say": "hen", "pic": "🐔", "gloss": "母鸡"},
    "octopus": {"say": "octopus", "pic": "🐙", "gloss": "章鱼"},
    "nose": {"say": "nose", "pic": "👃", "gloss": "鼻子"},
    "van": {"say": "van", "pic": "🚐", "gloss": "面包车"},
    "bus": {"say": "bus", "pic": "🚌", "gloss": "公共汽车"},
    "blue": {"say": "blue", "pic": "🟦", "gloss": "蓝色"},
    "shoe": {"say": "shoe", "pic": "👟", "gloss": "鞋"},
    "bear": {"say": "bear", "pic": "🐻", "gloss": "熊"},
    "chair": {"say": "chair", "pic": "🪑", "gloss": "椅子"},
    "snail": {"say": "snail", "pic": "🐌", "gloss": "蜗牛"}
  },
  "swaps": [
    {"id": "cat-hat", "from": "cat", "scope": "phoneme", "boxes": 3, "pos": 0, "op": "replace", "token": "hen", "result": "hat", "options": ["hat", "cat", "hen"]},
    {"id": "hat-hot", "from": "hat", "scope": "phoneme", "boxes": 3, "pos": 1, "op": "replace", "token": "octopus", "result": "hot", "options": ["hot", "hat", "octopus"]},
    {"id": "pig-pin", "from": "pig", "scope": "phoneme", "boxes": 3, "pos": 2, "op": "replace", "token": "nose", "result": "pin", "options": ["pin", "pig", "nose"]},
    {"id": "bed-red", "from": "bed", "scope": "phoneme", "boxes": 3, "pos": 0, "op": "replace", "token": "rabbit", "result": "red", "options": ["red", "bed", "rabbit"]},
    {"id": "sun-run", "from": "sun", "scope": "phoneme", "boxes": 3, "pos": 0, "op": "replace", "token": "rabbit", "result": "run", "options": ["run", "sun", "rabbit"]},
    {"id": "fox-ox", "from": "fox", "scope": "phoneme", "boxes": 4, "pos": 0, "op": "remove", "result": "ox", "options": ["ox", "fox", "box"]},
    {"id": "cat-cap", "from": "cat", "scope": "phoneme", "boxes": 3, "pos": 2, "op": "replace", "token": "pig", "result": "cap", "options": ["cap", "cat", "pig"]},
    {"id": "ship-shop", "from": "ship", "scope": "phoneme", "boxes": 3, "pos": 1, "op": "replace", "token": "octopus", "result": "shop", "options": ["shop", "ship", "sheep"]},
    {"id": "dog-vog", "from": "dog", "scope": "phoneme", "boxes": 3, "pos": 0, "op": "replace", "token": "van", "result": null, "resultSay": "vog", "options": ["dog", "van", "frog"],
     "note": "换出来的 vog 能读，但不是一个词。", "noteEn": "vog can be said, but it is not a word."},
    {"id": "pen-peb", "from": "pen", "scope": "phoneme", "boxes": 3, "pos": 2, "op": "replace", "token": "bus", "result": null, "resultSay": "peb", "options": ["pen", "bus", "bed"],
     "note": "换出来的 peb 能读，但不是一个词。", "noteEn": "peb can be said, but it is not a word."}
  ],
  "sortCats": [
    {"id": "rhyme", "label": "押韵（结尾一样）", "labelEn": "They rhyme (same ending)"},
    {"id": "onset", "label": "开头的音一样", "labelEn": "Same first sound"},
    {"id": "beats", "label": "音节数一样", "labelEn": "Same number of syllables"}
  ],
  "childSort": "rhyme",
  "sorts": [
    {"id": "cat-hat", "a": "cat", "b": "hat", "truth": ["rhyme", "beats"]},
    {"id": "bee-tree", "a": "bee", "b": "tree", "truth": ["rhyme", "beats"]},
    {"id": "moon-spoon", "a": "moon", "b": "spoon", "truth": ["rhyme", "beats"]},
    {"id": "sun-sock", "a": "sun", "b": "sock", "truth": ["onset", "beats"]},
    {"id": "fish-fox", "a": "fish", "b": "fox", "truth": ["onset", "beats"]},
    {"id": "tiger-rabbit", "a": "tiger", "b": "rabbit", "truth": ["beats"]},
    {"id": "elephant-butterfly", "a": "elephant", "b": "butterfly", "truth": ["beats"]},
    {"id": "dog-duck", "a": "dog", "b": "duck", "truth": ["onset", "beats"]},
    {"id": "cake-snake", "a": "cake", "b": "snake", "truth": ["rhyme", "beats"]},
    {"id": "car-banana", "a": "car", "b": "banana", "truth": []},
    {"id": "blue-shoe", "a": "blue", "b": "shoe", "truth": ["rhyme", "beats"], "reverse": true,
     "note": "这两个词写出来完全不一样，但押韵：押韵只看声音。", "noteEn": "These two words are spelled completely differently, yet they rhyme: rhyme is about sound only."},
    {"id": "bear-chair", "a": "bear", "b": "chair", "truth": ["rhyme", "beats"], "reverse": true,
     "note": "写法不同（-ear 和 -air），声音押韵。", "noteEn": "Different spellings (-ear and -air), but they rhyme."},
    {"id": "cat-cap", "a": "cat", "b": "cap", "truth": ["onset", "beats"], "reverse": true,
     "note": "只差一个音，但差在结尾，所以不押韵。", "noteEn": "Only one sound differs, but it is the last one, so they do not rhyme."},
    {"id": "whale-snail", "a": "whale", "b": "snail", "truth": ["rhyme", "beats"]},
    {"id": "penguin-pencil", "a": "penguin", "b": "pencil", "truth": ["onset", "beats"]},
    {"id": "mouse-house", "a": "mouse", "b": "house", "truth": ["rhyme", "beats"]}
  ],
  "produce": [
    {"word": "cat", "task": "rhyme"}, {"word": "bee", "task": "rhyme"}, {"word": "cake", "task": "rhyme"},
    {"word": "sun", "task": "onset"}, {"word": "tiger", "task": "beats"}, {"word": "banana", "task": "beats"}
  ],
  "review": ["pencil 和 penguin 的开头都是 /p/，但 pen- 后面的音在快读时不同：作为“开头的音一样”是否没有争议", "car / banana：英式 banana 结尾 /ə/，美式也是 /ə/，与 car 不押韵", "hat → hot 用 octopus 的第一个音 /ɒ/（美式 /ɑ/）：两种口音下 hot 与 octopus 开头的元音是否一致", "ant 的音素数按 /æ/-/n/-/t/ 计 3", "合成语音读 vog、peb 这类假词是否清楚", "🟦 表示 blue 对低龄儿童是否够直观"],
  "reviewEn": ["pencil and penguin both start with /p/: is “same first sound” uncontroversial?", "car / banana: banana ends in /ə/ in both British and American English and does not rhyme with car", "hat → hot uses the first sound of octopus /ɒ/ (American /ɑ/): do hot and octopus share the vowel in both accents?", "ant is counted as 3 sounds /æ/-/n/-/t/", "Whether synthetic speech says made-up words such as vog and peb clearly", "Whether 🟦 is clear enough as blue for young children"]
};

KT_DATA["oral-sound-play-ja"] = {
  "id": "oral-sound-play-ja", "lang": "ja", "speech": "ja-JP",
  "title": "日语拍感游戏", "titleEn": "Japanese beat play",
  "subtitle": "不看假名，只听声音：拍出一个词有几拍（っ、ー、ん 各占一拍，きょ 这样的拗音只占一拍），换掉或去掉一拍，比一比两个词。", "subtitleEn": "No kana, only sounds: clap how many beats a word has (っ, ー and ん each take a beat; a contracted sound like きょ takes just one), swap or drop a beat, and compare two words.",
  "voiceNote": "声音来自浏览器的日语语音合成。拍数按东京标准语的读法计。", "voiceNoteEn": "The sound comes from the browser's Japanese speech synthesis. Beats are counted for standard Tokyo pronunciation.",
  "kcs": ["kt:ja-sound-mora"],
  "scopes": [
    {"id": "mora", "label": "拍", "labelEn": "Beats (mora)", "unit": "拍", "unitEn": "beats", "kc": "kt:ja-sound-mora",
     "ask": "听这个词，每一拍拍一下。っ、长音和 ん 也各算一拍。", "askEn": "Listen to the word and clap once per beat. っ, a long vowel and ん each count as a beat."}
  ],
  "words": {
    "neko": {"say": "ねこ", "pic": "🐱", "gloss": "猫", "glossEn": "cat", "n": {"mora": 2}, "written": 2},
    "inu": {"say": "いぬ", "pic": "🐶", "gloss": "狗", "glossEn": "dog", "n": {"mora": 2}, "written": 2},
    "sakura": {"say": "さくら", "pic": "🌸", "gloss": "樱花", "glossEn": "cherry blossom", "n": {"mora": 3}, "written": 3},
    "ringo": {"say": "りんご", "pic": "🍎", "gloss": "苹果", "glossEn": "apple", "n": {"mora": 3}, "written": 3},
    "pan": {"say": "パン", "pic": "🍞", "gloss": "面包", "glossEn": "bread", "n": {"mora": 2}, "written": 2},
    "densha": {"say": "でんしゃ", "pic": "🚃", "gloss": "电车", "glossEn": "train", "n": {"mora": 3}, "written": 4},
    "jitensha": {"say": "じてんしゃ", "pic": "🚲", "gloss": "自行车", "glossEn": "bicycle", "n": {"mora": 4}, "written": 5},
    "kippu": {"say": "きっぷ", "pic": "🎫", "gloss": "车票", "glossEn": "ticket", "n": {"mora": 3}, "written": 3},
    "koohii": {"say": "コーヒー", "pic": "☕", "gloss": "咖啡", "glossEn": "coffee", "n": {"mora": 4}, "written": 4},
    "keeki": {"say": "ケーキ", "pic": "🍰", "gloss": "蛋糕", "glossEn": "cake", "n": {"mora": 3}, "written": 3},
    "gyuunyuu": {"say": "ぎゅうにゅう", "pic": "🥛", "gloss": "牛奶", "glossEn": "milk", "n": {"mora": 4}, "written": 6},
    "toukyou": {"say": "とうきょう", "pic": "🗼", "gloss": "东京", "glossEn": "Tokyo", "n": {"mora": 4}, "written": 5},
    "choucho": {"say": "ちょうちょ", "pic": "🦋", "gloss": "蝴蝶", "glossEn": "butterfly", "n": {"mora": 3}, "written": 5, "small": true},
    "kyuukyuusha": {"say": "きゅうきゅうしゃ", "pic": "🚑", "gloss": "救护车", "glossEn": "ambulance", "n": {"mora": 5}, "written": 8},
    "zou": {"say": "ぞう", "pic": "🐘", "gloss": "大象", "glossEn": "elephant", "n": {"mora": 2}, "written": 2, "big": true},
    "obaasan": {"say": "おばあさん", "pic": "👵", "gloss": "奶奶", "glossEn": "grandmother", "n": {"mora": 5}, "written": 5},
    "kirin": {"say": "きりん", "pic": "🦒", "gloss": "长颈鹿", "glossEn": "giraffe", "n": {"mora": 3}, "written": 3},
    "rakko": {"say": "らっこ", "pic": "🦦", "gloss": "海獭", "glossEn": "sea otter", "n": {"mora": 3}, "written": 3},
    "kuma": {"say": "くま", "pic": "🐻", "gloss": "熊", "glossEn": "bear", "n": {"mora": 2}, "written": 2},
    "kyouryuu": {"say": "きょうりゅう", "pic": "🦖", "gloss": "恐龙", "glossEn": "dinosaur", "n": {"mora": 4}, "written": 6},
    "shashin": {"say": "しゃしん", "pic": "📷", "gloss": "照片", "glossEn": "photo", "n": {"mora": 3}, "written": 4},
    "shinkansen": {"say": "しんかんせん", "pic": "🚄", "gloss": "新干线", "glossEn": "bullet train", "n": {"mora": 6}, "written": 6},
    "kame": {"say": "かめ", "pic": "🐢", "gloss": "乌龟", "glossEn": "turtle", "n": {"mora": 2}},
    "ame": {"say": "あめ", "pic": "☔", "gloss": "雨", "glossEn": "rain", "n": {"mora": 2}},
    "ari": {"say": "あり", "pic": "🐜", "gloss": "蚂蚁", "glossEn": "ant"},
    "shima": {"say": "しま", "pic": "🏝️", "gloss": "岛", "glossEn": "island"},
    "shika": {"say": "しか", "pic": "🦌", "gloss": "鹿", "glossEn": "deer"},
    "tako": {"say": "たこ", "pic": "🐙", "gloss": "章鱼", "glossEn": "octopus", "n": {"mora": 2}},
    "nezumi": {"say": "ねずみ", "pic": "🐭", "gloss": "老鼠", "glossEn": "mouse"},
    "kumo": {"say": "くも", "pic": "☁️", "gloss": "云", "glossEn": "cloud", "n": {"mora": 2}},
    "momo": {"say": "もも", "pic": "🍑", "gloss": "桃子", "glossEn": "peach"},
    "obasan": {"say": "おばさん", "pic": "👩", "gloss": "阿姨", "glossEn": "aunt", "n": {"mora": 4}},
    "ojiisan": {"say": "おじいさん", "pic": "👴", "gloss": "爷爷", "glossEn": "grandfather", "n": {"mora": 5}},
    "kitsune": {"say": "きつね", "pic": "🦊", "gloss": "狐狸", "glossEn": "fox"},
    "isu": {"say": "いす", "pic": "🪑", "gloss": "椅子", "glossEn": "chair", "n": {"mora": 2}},
    "ika": {"say": "いか", "pic": "🦑", "gloss": "乌贼", "glossEn": "squid"},
    "kasa": {"say": "かさ", "pic": "☂️", "gloss": "伞", "glossEn": "umbrella"}
  },
  "swaps": [
    {"id": "kame-ame", "from": "kame", "scope": "mora", "boxes": 2, "pos": 0, "op": "replace", "token": "ari", "result": "ame", "options": ["ame", "kame", "ari"]},
    {"id": "kuma-shima", "from": "kuma", "scope": "mora", "boxes": 2, "pos": 0, "op": "replace", "token": "shika", "result": "shima", "options": ["shima", "kuma", "shika"]},
    {"id": "tako-neko", "from": "tako", "scope": "mora", "boxes": 2, "pos": 0, "op": "replace", "token": "nezumi", "result": "neko", "options": ["neko", "tako", "nezumi"]},
    {"id": "kuma-kumo", "from": "kuma", "scope": "mora", "boxes": 2, "pos": 1, "op": "replace", "token": "momo", "result": "kumo", "options": ["kumo", "kuma", "momo"]},
    {"id": "isu-ika", "from": "isu", "scope": "mora", "boxes": 2, "pos": 1, "op": "replace", "token": "kasa", "result": "ika", "options": ["ika", "isu", "kasa"]},
    {"id": "obaasan-obasan", "from": "obaasan", "scope": "mora", "boxes": 5, "pos": 2, "op": "remove", "result": "obasan", "options": ["obasan", "obaasan", "ojiisan"],
     "note": "去掉长音的那一拍，おばあさん（奶奶）就变成了おばさん（阿姨）：少一拍，意思就变了。", "noteEn": "Drop the long-vowel beat and おばあさん (grandmother) becomes おばさん (aunt): one beat less, a different meaning."},
    {"id": "kippu-kipu", "from": "kippu", "scope": "mora", "boxes": 3, "pos": 1, "op": "remove", "result": null, "resultSay": "きぷ", "options": ["kippu", "kitsune"],
     "note": "去掉 っ 的那一拍，就不是一个词了。", "noteEn": "Drop the っ beat and it is no longer a word."},
    {"id": "koohii-kohii", "from": "koohii", "scope": "mora", "boxes": 4, "pos": 1, "op": "remove", "result": null, "resultSay": "コヒー", "options": ["koohii", "keeki"],
     "note": "去掉长音的那一拍，就不是一个词了。", "noteEn": "Drop the long-vowel beat and it is no longer a word."}
  ],
  "sortCats": [
    {"id": "end", "label": "结尾的拍一样", "labelEn": "Same last beat"},
    {"id": "start", "label": "开头的拍一样", "labelEn": "Same first beat"},
    {"id": "beats", "label": "拍数一样", "labelEn": "Same number of beats"}
  ],
  "childSort": "beats",
  "sorts": [
    {"id": "neko-tako", "a": "neko", "b": "tako", "truth": ["end", "beats"]},
    {"id": "inu-isu", "a": "inu", "b": "isu", "truth": ["start", "beats"]},
    {"id": "sakura-kirin", "a": "sakura", "b": "kirin", "truth": ["beats"]},
    {"id": "toukyou-gyuunyuu", "a": "toukyou", "b": "gyuunyuu", "truth": ["end", "beats"], "reverse": true,
     "note": "とうきょう 和 ぎゅうにゅう 都是四拍，但只有两个音节：拍不等于音节。", "noteEn": "とうきょう and ぎゅうにゅう both have four beats but only two syllables: a beat is not a syllable."},
    {"id": "choucho-zou", "a": "choucho", "b": "zou", "truth": [],
     "note": "大的东西不一定拍多：ぞう 只有两拍。", "noteEn": "A big thing does not have more beats: ぞう has only two."},
    {"id": "densha-jitensha", "a": "densha", "b": "jitensha", "truth": ["end"]},
    {"id": "kuma-kumo", "a": "kuma", "b": "kumo", "truth": ["start", "beats"]},
    {"id": "kippu-kirin", "a": "kippu", "b": "kirin", "truth": ["start", "beats"], "reverse": true,
     "note": "っ 自己就是一拍：きっぷ 和 きりん 一样是三拍。", "noteEn": "っ is a beat of its own: きっぷ has three beats, just like きりん."},
    {"id": "shinkansen-ringo", "a": "shinkansen", "b": "ringo", "truth": []},
    {"id": "keeki-koohii", "a": "keeki", "b": "koohii", "truth": []},
    {"id": "rakko-neko", "a": "rakko", "b": "neko", "truth": ["end"]},
    {"id": "obaasan-ojiisan", "a": "obaasan", "b": "ojiisan", "truth": ["start", "end", "beats"]}
  ],
  "produce": [
    {"word": "neko", "task": "beats"}, {"word": "sakura", "task": "start"}, {"word": "tako", "task": "end"},
    {"word": "toukyou", "task": "beats"}, {"word": "kippu", "task": "beats"}
  ],
  "review": ["拍数按东京标准语：ちょうちょ 三拍（ちょ・う・ちょ）是否没有争议（也有人说 ちょうちょう）", "合成语音读 きぷ、コヒー 这类非词是否读得出来", "おばさん 用 👩 表示是否会和 おばあさん 👵 以外的图混淆", "らっこ 用 🦦（水獭）是否可以", "kippu / kirin、keeki / koohii 的“开头的拍一样”判断：き／き 相同，ケ／コ 不同"],
  "reviewEn": ["Beats follow standard Tokyo Japanese: is ちょうちょ = three beats (ちょ・う・ちょ) uncontroversial (some say ちょうちょう)?", "Whether synthesis can say non-words such as きぷ and コヒー", "Whether 👩 for おばさん could be confused with pictures other than おばあさん 👵", "Whether 🦦 (otter) works for らっこ", "“Same first beat” for kippu / kirin (き / き, same) and keeki / koohii (ケ / コ, different)"]
};

KT_DATA["oral-sound-play-zh"] = {
  "id": "oral-sound-play-zh", "lang": "zh", "speech": "zh-CN",
  "title": "汉语音节游戏", "titleEn": "Mandarin syllable play",
  "subtitle": "不看拼音和汉字，只听声音：拍出几个音节，换掉开头的音或声调，听两个词押不押韵——押韵不等于同音。", "subtitleEn": "No pinyin or characters, only sounds: clap the syllables, swap the first sound or the tone, and hear whether two words rhyme. Rhyming is not the same as sounding the same.",
  "voiceNote": "声音来自浏览器的普通话语音合成。适合会说不会读的孩子：先做声音，再学拼音。", "voiceNoteEn": "The sound comes from the browser's Mandarin speech synthesis. Suited to children who speak but cannot read yet: sound work first, pinyin later.",
  "kcs": ["kt:zh-pinyin-initials-finals"],
  "scopes": [
    {"id": "syllable", "label": "音节", "labelEn": "Syllables", "unit": "个音节", "unitEn": "syllables", "kc": "kt:zh-pinyin-initials-finals",
     "ask": "听这个词，每一个音节拍一下。", "askEn": "Listen to the word and clap once for each syllable."}
  ],
  "words": {
    "mao": {"say": "猫", "pic": "🐱", "glossEn": "cat", "n": {"syllable": 1}},
    "xiongmao": {"say": "熊猫", "pic": "🐼", "glossEn": "panda", "n": {"syllable": 2}},
    "daxiang": {"say": "大象", "pic": "🐘", "glossEn": "elephant", "n": {"syllable": 2}, "big": true},
    "yu": {"say": "鱼", "pic": "🐟", "glossEn": "fish", "n": {"syllable": 1}},
    "hudie": {"say": "蝴蝶", "pic": "🦋", "glossEn": "butterfly", "n": {"syllable": 2}},
    "changjinglu": {"say": "长颈鹿", "pic": "🦒", "glossEn": "giraffe", "n": {"syllable": 3}},
    "xigua": {"say": "西瓜", "pic": "🍉", "glossEn": "watermelon", "n": {"syllable": 2}},
    "pingguo": {"say": "苹果", "pic": "🍎", "glossEn": "apple", "n": {"syllable": 2}},
    "bingqilin": {"say": "冰淇淋", "pic": "🍦", "glossEn": "ice cream", "n": {"syllable": 3}},
    "maomaochong": {"say": "毛毛虫", "pic": "🐛", "glossEn": "caterpillar", "n": {"syllable": 3}, "small": true},
    "niu": {"say": "牛", "pic": "🐮", "glossEn": "cow", "n": {"syllable": 1}, "big": true},
    "feiji": {"say": "飞机", "pic": "✈️", "glossEn": "plane", "n": {"syllable": 2}},
    "huoche": {"say": "火车", "pic": "🚆", "glossEn": "train", "n": {"syllable": 2}},
    "qiche": {"say": "汽车", "pic": "🚗", "glossEn": "car", "n": {"syllable": 2}},
    "xiangrikui": {"say": "向日葵", "pic": "🌻", "glossEn": "sunflower", "n": {"syllable": 3}},
    "konglong": {"say": "恐龙", "pic": "🦖", "glossEn": "dinosaur", "n": {"syllable": 2}},
    "gonggongqiche": {"say": "公共汽车", "pic": "🚌", "glossEn": "bus", "n": {"syllable": 4}},
    "jiuhuche": {"say": "救护车", "pic": "🚑", "glossEn": "ambulance", "n": {"syllable": 3}},
    "ma3": {"say": "马", "pic": "🐴", "glossEn": "horse", "n": {"syllable": 1}},
    "ma1": {"say": "妈", "pic": "👩", "glossEn": "mum", "n": {"syllable": 1}},
    "hua": {"say": "花", "pic": "🌸", "glossEn": "flower", "n": {"syllable": 1}},
    "gua": {"say": "瓜", "pic": "🍈", "glossEn": "melon", "n": {"syllable": 1}},
    "shu1": {"say": "书", "pic": "📖", "glossEn": "book", "n": {"syllable": 1}},
    "shu4": {"say": "树", "pic": "🌳", "glossEn": "tree", "n": {"syllable": 1}},
    "zhu": {"say": "猪", "pic": "🐷", "glossEn": "pig", "n": {"syllable": 1}},
    "zhi": {"say": "纸", "pic": "📄", "glossEn": "paper"},
    "bao": {"say": "包", "pic": "👜", "glossEn": "bag", "n": {"syllable": 1}},
    "baozi": {"say": "包子", "pic": "🥟", "glossEn": "steamed bun"},
    "dao": {"say": "刀", "pic": "🔪", "glossEn": "knife", "n": {"syllable": 1}},
    "gou": {"say": "狗", "pic": "🐶", "glossEn": "dog", "n": {"syllable": 1}},
    "gu": {"say": "鼓", "pic": "🥁", "glossEn": "drum"},
    "tu": {"say": "兔", "pic": "🐇", "glossEn": "rabbit", "n": {"syllable": 1}},
    "lu": {"say": "鹿", "pic": "🦌", "glossEn": "deer", "n": {"syllable": 1}},
    "long": {"say": "龙", "pic": "🐉", "glossEn": "dragon"},
    "niao": {"say": "鸟", "pic": "🐦", "glossEn": "bird", "n": {"syllable": 1}},
    "putao": {"say": "葡萄", "pic": "🍇", "glossEn": "grapes", "n": {"syllable": 2}},
    "laohu": {"say": "老虎", "pic": "🐯", "glossEn": "tiger", "n": {"syllable": 2}},
    "xiong": {"say": "熊", "pic": "🐻", "glossEn": "bear", "n": {"syllable": 1}},
    "xingxing1": {"say": "星星", "pic": "⭐", "glossEn": "star", "n": {"syllable": 2}},
    "xingxing2": {"say": "猩猩", "pic": "🦍", "glossEn": "gorilla, ape", "n": {"syllable": 2}}
  },
  "swaps": [
    {"id": "mao-bao", "from": "mao", "scope": "syllable", "boxes": 2, "pos": 0, "op": "replace", "token": "baozi", "result": "bao", "options": ["bao", "mao", "baozi"]},
    {"id": "mao-dao", "from": "mao", "scope": "syllable", "boxes": 2, "pos": 0, "op": "replace", "token": "daxiang", "result": "dao", "options": ["dao", "mao", "daxiang"]},
    {"id": "hua-gua", "from": "hua", "scope": "syllable", "boxes": 2, "pos": 0, "op": "replace", "token": "gou", "result": "gua", "options": ["gua", "hua", "gou"]},
    {"id": "shu-zhu", "from": "shu1", "scope": "syllable", "boxes": 2, "pos": 0, "op": "replace", "token": "zhi", "result": "zhu", "options": ["zhu", "shu1", "zhi"]},
    {"id": "tu-lu", "from": "tu", "scope": "syllable", "boxes": 2, "pos": 0, "op": "replace", "token": "long", "result": "lu", "options": ["lu", "tu", "long"]},
    {"id": "mao-fao", "from": "mao", "scope": "syllable", "boxes": 2, "pos": 0, "op": "replace", "token": "feiji", "result": null, "options": ["mao", "feiji", "bao"],
     "note": "普通话里没有 fao 这个音节，换出来不是一个词。", "noteEn": "Mandarin has no syllable fao, so the result is not a word."},
    {"id": "gou-bou", "from": "gou", "scope": "syllable", "boxes": 2, "pos": 0, "op": "replace", "token": "baozi", "result": null, "options": ["gou", "baozi", "gu"],
     "note": "普通话里没有 bou 这个音节，换出来不是一个词。", "noteEn": "Mandarin has no syllable bou, so the result is not a word."},
    {"id": "ma-ma", "from": "ma3", "scope": "syllable", "boxes": 2, "pos": "tone", "op": "tone", "token": "ma1", "result": "ma1", "options": ["ma1", "ma3", "mao"],
     "note": "只换声调，马 就变成了 妈：声母、韵母都没变，意思完全不同。", "noteEn": "Only the tone changes, and 马 (horse) becomes 妈 (mum): same initial and final, a completely different meaning."},
    {"id": "shu-shu", "from": "shu1", "scope": "syllable", "boxes": 2, "pos": "tone", "op": "tone", "token": "daxiang", "result": "shu4", "options": ["shu4", "shu1", "daxiang"],
     "note": "用 大 的声调（第四声）：书 变成 树。", "noteEn": "With the tone of 大 (fourth tone), 书 (book) becomes 树 (tree)."}
  ],
  "sortCats": [
    {"id": "rhyme", "label": "押韵（结尾的韵母一样）", "labelEn": "They rhyme (same final at the end)"},
    {"id": "onset", "label": "开头的音一样", "labelEn": "Same first sound"},
    {"id": "beats", "label": "音节数一样", "labelEn": "Same number of syllables"},
    {"id": "same", "label": "完全同音（连声调也一样）", "labelEn": "Exactly the same sound (tones too)"}
  ],
  "childSort": "rhyme",
  "sorts": [
    {"id": "ma-ma", "a": "ma1", "b": "ma3", "truth": ["rhyme", "onset", "beats"], "reverse": true,
     "note": "妈 和 马 押韵、开头也一样，但声调不同，是两个字：押韵不等于同音。", "noteEn": "妈 and 马 rhyme and start the same, but the tones differ, so they are two different words: rhyming is not the same as sounding the same."},
    {"id": "hua-gua", "a": "hua", "b": "gua", "truth": ["rhyme", "beats"]},
    {"id": "mao-bao", "a": "mao", "b": "bao", "truth": ["rhyme", "beats"]},
    {"id": "niu-niao", "a": "niu", "b": "niao", "truth": ["onset", "beats"]},
    {"id": "xiongmao-konglong", "a": "xiongmao", "b": "konglong", "truth": ["beats"]},
    {"id": "xigua-bingqilin", "a": "xigua", "b": "bingqilin", "truth": []},
    {"id": "shu-shu", "a": "shu1", "b": "shu4", "truth": ["rhyme", "onset", "beats"], "reverse": true,
     "note": "书 和 树 只差声调：押韵，但不是同一个字。", "noteEn": "书 and 树 differ only in tone: they rhyme, but they are not the same word."},
    {"id": "huoche-qiche", "a": "huoche", "b": "qiche", "truth": ["rhyme", "beats"]},
    {"id": "pingguo-putao", "a": "pingguo", "b": "putao", "truth": ["onset", "beats"]},
    {"id": "laohu-xiong", "a": "laohu", "b": "xiong", "truth": []},
    {"id": "xingxing", "a": "xingxing1", "b": "xingxing2", "truth": ["rhyme", "onset", "beats", "same"], "reverse": true,
     "note": "星星 和 猩猩 完全同音，却是两样东西：同音也不等于同一个词。", "noteEn": "星星 (stars) and 猩猩 (ape) sound exactly the same but are two different things: the same sound is still not the same word."},
    {"id": "niu-maomaochong", "a": "niu", "b": "maomaochong", "truth": [],
     "note": "牛 很大，只有一个音节；毛毛虫 很小，有三个音节。", "noteEn": "A cow is big but has one syllable; a caterpillar is small but has three."}
  ],
  "produce": [
    {"word": "mao", "task": "rhyme"}, {"word": "hua", "task": "rhyme"}, {"word": "bao", "task": "onset"},
    {"word": "changjinglu", "task": "beats"}, {"word": "xiongmao", "task": "beats"}
  ],
  "review": ["押韵的标准：这里按“最后一个音节的韵母相同、不看声调”判断（花 huā／瓜 guā 的韵母都按 ua 算）", "牛 niú／鸟 niǎo 作为“开头的音一样”：两者声母都是 n", "苹果 píngguǒ／葡萄 pútao 作为“开头的音一样”：声母都是 p", "火车 huǒchē／汽车 qìchē：最后一个音节完全相同（chē），算押韵是否合适", "星星 xīngxing／猩猩 xīngxing 是否在所有口音里都完全同音", "妈 用 👩、包 用 👜、瓜 用 🍈 是否直观"],
  "reviewEn": ["Rhyme criterion: same final in the last syllable, tones ignored (花 huā / 瓜 guā both count as -ua)", "牛 niú / 鸟 niǎo as “same first sound”: both start with n", "苹果 píngguǒ / 葡萄 pútao as “same first sound”: both start with p", "火车 huǒchē / 汽车 qìchē share the whole last syllable (chē): is counting this as a rhyme acceptable?", "Whether 星星 xīngxing and 猩猩 xīngxing sound identical in every accent", "Whether 👩 for 妈, 👜 for 包 and 🍈 for 瓜 are clear"]
};

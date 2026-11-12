/* English alphabet and phonics packs for blocks/sound-grid.html.
 *
 * Speech: browser speech synthesis cannot say an isolated English phoneme ("c" comes out as "see"),
 * so a sound cell never asks TTS for the bare sound. `say` is the letter name (alphabet table) or a
 * keyword whose first (or marked) sound is the target ("cat 的第一个音"). Put a real recording of the
 * bare sound in `audio` (URL) when you have one — sound-grid plays `audio` before falling back to `say`.
 * Recordings of single consonants must not carry an added vowel (/b/, not "buh").
 * Cells are explicit object literals, one per line, so the data can be lifted out as plain JSON. */
KT_DATA["alphabet-en"] = {
 "review": ["美式发音为准：bath 读 /bæθ/，与英式不同", "字母名读音（如 Z 读 /ziː/）是美式；英式读 /zed/"],
  "id": "alphabet-en", "lang": "en", "speech": "en-US",
  "title": "英语字母",
  "subtitle": "每个字母有两样东西：名字（A 读 /eɪ/）和它在单词里常发的音（apple 里的 a 读 /æ/）。拼名字用名字，拼读单词用读音。",
  "romanLabel": "名字 / 音标",
  "kcs": ["kt:en-orth-alphabet", "kt:en-orth-letter-sounds", "kt:en-orth-spelling-aloud"],
  "tables": [
    {
      "id": "names", "label": "字母名（大小写）",
      "rows": [
        {"id": "s1", "label": "A–G"}, {"id": "s2", "label": "H–P"}, {"id": "s3", "label": "Q–V"}, {"id": "s4", "label": "W–Z"}
      ],
      "cells": [
        {"id": "n-a", "glyph": "Aa", "roman": "/eɪ/", "row": "s1", "say": "A", "example": {"text": "apple", "gloss": "苹果"}, "note": "名字是 /eɪ/，但在 apple 里读 /æ/。不要读成拼音的 a。"},
        {"id": "n-b", "glyph": "Bb", "roman": "/biː/", "row": "s1", "say": "B", "example": {"text": "bus", "gloss": "公共汽车"}, "note": "小写 b 和 d 左右镜像：b 是先竖后圈（肚子朝右）。"},
        {"id": "n-c", "glyph": "Cc", "roman": "/siː/", "row": "s1", "say": "C", "example": {"text": "cat", "gloss": "猫"}, "note": "名字像 see，但在 cat 里读 /k/，在 city 里才读 /s/。不要读成拼音 ci。"},
        {"id": "n-d", "glyph": "Dd", "roman": "/diː/", "row": "s1", "say": "D", "example": {"text": "dog", "gloss": "狗"}, "note": "小写 d 先圈后竖（肚子朝左），和 b 相反。"},
        {"id": "n-e", "glyph": "Ee", "roman": "/iː/", "row": "s1", "say": "E", "example": {"text": "egg", "gloss": "鸡蛋"}, "note": "名字 /iː/ 像拼音 yi。中国学生常把 E 和 I 的名字说反（受拼音 e、i 影响）。"},
        {"id": "n-f", "glyph": "Ff", "roman": "/ef/", "row": "s1", "say": "F", "example": {"text": "fish", "gloss": "鱼"}, "note": "名字结尾是 /f/，上齿轻咬下唇，不要加成 'ef-u'。"},
        {"id": "n-g", "glyph": "Gg", "roman": "/dʒiː/", "row": "s1", "say": "G", "example": {"text": "goat", "gloss": "山羊"}, "note": "名字 /dʒiː/，和 J /dʒeɪ/ 容易混。在 goat 里读 /g/。"},
        {"id": "n-h", "glyph": "Hh", "roman": "/eɪtʃ/", "row": "s2", "say": "H", "example": {"text": "hat", "gloss": "帽子"}, "note": "名字里没有 /h/ 这个音；在 hat 里才读 /h/。"},
        {"id": "n-i", "glyph": "Ii", "roman": "/aɪ/", "row": "s2", "say": "I", "example": {"text": "insect", "gloss": "虫子"}, "note": "名字 /aɪ/ 像“爱”。在 insect、pig 里读短 /ɪ/。"},
        {"id": "n-j", "glyph": "Jj", "roman": "/dʒeɪ/", "row": "s2", "say": "J", "example": {"text": "jam", "gloss": "果酱"}, "note": "不是拼音 j（基）。名字 /dʒeɪ/，和 G 对比着记。"},
        {"id": "n-k", "glyph": "Kk", "roman": "/keɪ/", "row": "s2", "say": "K", "example": {"text": "kite", "gloss": "风筝"}, "note": "在单词里和 c 常常发同一个音 /k/。"},
        {"id": "n-l", "glyph": "Ll", "roman": "/el/", "row": "s2", "say": "L", "example": {"text": "lion", "gloss": "狮子"}, "note": "名字 /el/，结尾舌尖顶住上牙床，不是“爱欧”。"},
        {"id": "n-m", "glyph": "Mm", "roman": "/em/", "row": "s2", "say": "M", "example": {"text": "moon", "gloss": "月亮"}, "note": "名字 /em/，闭上嘴结束。"},
        {"id": "n-n", "glyph": "Nn", "roman": "/en/", "row": "s2", "say": "N", "example": {"text": "nest", "gloss": "鸟窝"}, "note": "名字 /en/，舌尖抵上牙床结束；和 M 不同，嘴是张开的。"},
        {"id": "n-o", "glyph": "Oo", "roman": "/oʊ/", "row": "s2", "say": "O", "example": {"text": "octopus", "gloss": "章鱼"}, "note": "名字 /oʊ/；在 octopus、dog 里读短音。"},
        {"id": "n-p", "glyph": "Pp", "roman": "/piː/", "row": "s2", "say": "P", "example": {"text": "pig", "gloss": "猪"}, "note": "小写 p 和 q 左右镜像。"},
        {"id": "n-q", "glyph": "Qq", "roman": "/kjuː/", "row": "s3", "say": "Q", "example": {"text": "queen", "gloss": "女王"}, "note": "q 后面几乎总跟 u，qu 读 /kw/。"},
        {"id": "n-r", "glyph": "Rr", "roman": "/ɑːr/", "row": "s3", "say": "R", "example": {"text": "red", "gloss": "红色"}, "note": "名字 /ɑːr/，不是拼音 r（日）。"},
        {"id": "n-s", "glyph": "Ss", "roman": "/es/", "row": "s3", "say": "S", "example": {"text": "sun", "gloss": "太阳"}, "note": "名字 /es/，不是拼音 s（思）。"},
        {"id": "n-t", "glyph": "Tt", "roman": "/tiː/", "row": "s3", "say": "T", "example": {"text": "ten", "gloss": "十"}, "note": "在单词结尾（cat）也要发出来，别吞掉，也别加成 'te'。"},
        {"id": "n-u", "glyph": "Uu", "roman": "/juː/", "row": "s3", "say": "U", "example": {"text": "umbrella", "gloss": "雨伞"}, "note": "名字 /juː/ 像 you；在 up、sun 里读 /ʌ/。"},
        {"id": "n-v", "glyph": "Vv", "roman": "/viː/", "row": "s3", "say": "V", "example": {"text": "van", "gloss": "面包车"}, "note": "上齿碰下唇、声带振动。中文没有这个音，常被读成 w。"},
        {"id": "n-w", "glyph": "Ww", "roman": "/ˈdʌbəl.juː/", "row": "s4", "say": "W", "example": {"text": "web", "gloss": "蜘蛛网"}, "note": "名字是 double-u，三个音节。在 web 里嘴唇先圆起来，牙齿不碰嘴唇（和 v 不同）。"},
        {"id": "n-x", "glyph": "Xx", "roman": "/eks/", "row": "s4", "say": "X", "example": {"text": "box", "gloss": "盒子"}, "note": "不是拼音 x（希）。在 box 的结尾读 /ks/，很少出现在词首。"},
        {"id": "n-y", "glyph": "Yy", "roman": "/waɪ/", "row": "s4", "say": "Y", "example": {"text": "yellow", "gloss": "黄色"}, "note": "名字 /waɪ/；在 yellow 里读 /j/，在 fly 里读 /aɪ/。"},
        {"id": "n-z", "glyph": "Zz", "roman": "/ziː/ 美 · /zed/ 英", "row": "s4", "say": "Z", "example": {"text": "zebra", "gloss": "斑马"}, "note": "美式叫 zee，英式叫 zed，两种都对。在 zebra 里读 /z/，声带要振动。"}
      ]
    },
    {
      "id": "sounds", "label": "字母的常见读音",
      "rows": [
        {"id": "vow", "label": "元音字母（短音）"}, {"id": "c1", "label": "辅音 b–k"}, {"id": "c2", "label": "辅音 l–t"}, {"id": "c3", "label": "辅音 v–z"}
      ],
      "cells": [
        {"id": "s-a", "glyph": "a", "roman": "/æ/", "row": "vow", "say": "apple", "example": {"text": "apple", "gloss": "苹果"}, "note": "apple 的第一个音。嘴张大、嘴角往两边拉，比拼音 a 扁；和 /e/（egg）分清，bad ≠ bed。"},
        {"id": "s-e", "glyph": "e", "roman": "/e/", "row": "vow", "say": "egg", "example": {"text": "egg", "gloss": "鸡蛋"}, "note": "egg 的第一个音。不是拼音 e（鹅）。"},
        {"id": "s-i", "glyph": "i", "roman": "/ɪ/", "row": "vow", "say": "insect", "example": {"text": "insect", "gloss": "虫子"}, "note": "insect 的第一个音，短而放松，不是拼音 i（衣）那样拉长；pin ≠ pen。"},
        {"id": "s-o", "glyph": "o", "roman": "/ɑ/ 美 · /ɒ/ 英", "row": "vow", "say": "octopus", "example": {"text": "octopus", "gloss": "章鱼"}, "note": "octopus 的第一个音。hot、dog 里都是它。"},
        {"id": "s-u", "glyph": "u", "roman": "/ʌ/", "row": "vow", "say": "up", "example": {"text": "up", "gloss": "向上"}, "note": "up 的第一个音，短促；不是拼音 u（乌）。"},
        {"id": "s-b", "glyph": "b", "roman": "/b/", "row": "c1", "say": "bus", "example": {"text": "bus", "gloss": "公共汽车"}, "note": "bus 的第一个音。只发 /b/，不要带出“bu”或“bo”。"},
        {"id": "s-c", "glyph": "c", "roman": "/k/", "row": "c1", "say": "cat", "example": {"text": "cat", "gloss": "猫"}, "note": "cat 的第一个音 /k/。不是拼音 c（雌）。在 e、i 前常读 /s/（city）。"},
        {"id": "s-d", "glyph": "d", "roman": "/d/", "row": "c1", "say": "dog", "example": {"text": "dog", "gloss": "狗"}, "note": "dog 的第一个音。词尾（bed）也要发出来，不要读成 'bede'。"},
        {"id": "s-f", "glyph": "f", "roman": "/f/", "row": "c1", "say": "fish", "example": {"text": "fish", "gloss": "鱼"}, "note": "fish 的第一个音，可以拉长：ffff。"},
        {"id": "s-g", "glyph": "g", "roman": "/g/", "row": "c1", "say": "goat", "example": {"text": "goat", "gloss": "山羊"}, "note": "goat 的第一个音。不要读字母名 /dʒiː/。"},
        {"id": "s-h", "glyph": "h", "roman": "/h/", "row": "c1", "say": "hat", "example": {"text": "hat", "gloss": "帽子"}, "note": "hat 的第一个音，只是一口气，比拼音 h（喝）轻得多。"},
        {"id": "s-j", "glyph": "j", "roman": "/dʒ/", "row": "c1", "say": "jam", "example": {"text": "jam", "gloss": "果酱"}, "note": "jam 的第一个音。不是拼音 j（基），嘴唇要往前突。"},
        {"id": "s-k", "glyph": "k", "roman": "/k/", "row": "c1", "say": "kite", "example": {"text": "kite", "gloss": "风筝"}, "note": "kite 的第一个音，和 cat 的 c 同音。"},
        {"id": "s-l", "glyph": "l", "roman": "/l/", "row": "c2", "say": "lion", "example": {"text": "lion", "gloss": "狮子"}, "note": "lion 的第一个音，可以拉长：llll。"},
        {"id": "s-m", "glyph": "m", "roman": "/m/", "row": "c2", "say": "moon", "example": {"text": "moon", "gloss": "月亮"}, "note": "moon 的第一个音，闭嘴哼：mmmm。"},
        {"id": "s-n", "glyph": "n", "roman": "/n/", "row": "c2", "say": "nest", "example": {"text": "nest", "gloss": "鸟窝"}, "note": "nest 的第一个音：nnnn。"},
        {"id": "s-p", "glyph": "p", "roman": "/p/", "row": "c2", "say": "pig", "example": {"text": "pig", "gloss": "猪"}, "note": "pig 的第一个音，带一小口气；不要带出“po”。"},
        {"id": "s-q", "glyph": "qu", "roman": "/kw/", "row": "c2", "say": "queen", "example": {"text": "queen", "gloss": "女王"}, "note": "q 几乎总和 u 一起出现，qu 读 /kw/，是 queen 的开头。"},
        {"id": "s-r", "glyph": "r", "roman": "/r/", "row": "c2", "say": "red", "example": {"text": "red", "gloss": "红色"}, "note": "red 的第一个音，嘴唇微圆、舌尖不碰上颚；不是拼音 r（日）。"},
        {"id": "s-s", "glyph": "s", "roman": "/s/", "row": "c2", "say": "sun", "example": {"text": "sun", "gloss": "太阳"}, "note": "sun 的第一个音，像蛇的嘶嘶声：ssss。"},
        {"id": "s-t", "glyph": "t", "roman": "/t/", "row": "c2", "say": "ten", "example": {"text": "ten", "gloss": "十"}, "note": "ten 的第一个音。不要带出“te”。"},
        {"id": "s-v", "glyph": "v", "roman": "/v/", "row": "c3", "say": "van", "example": {"text": "van", "gloss": "面包车"}, "note": "van 的第一个音：上齿碰下唇、声带振动。不要发成 w。"},
        {"id": "s-w", "glyph": "w", "roman": "/w/", "row": "c3", "say": "web", "example": {"text": "web", "gloss": "蜘蛛网"}, "note": "web 的第一个音：嘴唇先圆、再张开，牙齿不碰嘴唇。"},
        {"id": "s-x", "glyph": "x", "roman": "/ks/", "row": "c3", "say": "box", "example": {"text": "box", "gloss": "盒子"}, "note": "box 的最后一个音（/k/+/s/）。不是拼音 x（希）。"},
        {"id": "s-y", "glyph": "y", "roman": "/j/", "row": "c3", "say": "yellow", "example": {"text": "yellow", "gloss": "黄色"}, "note": "yellow 的第一个音，像拼音 y。"},
        {"id": "s-z", "glyph": "z", "roman": "/z/", "row": "c3", "say": "zebra", "example": {"text": "zebra", "gloss": "斑马"}, "note": "zebra 的第一个音，声带振动的 ssss：zzzz。不是拼音 z（资）。"}
      ]
    }
  ],
  "confusables": [
    {"glyphs": ["b", "d"], "note": "b 先竖后圈，d 先圈后竖。记法：bed 这个词像一张床，两头是 b 和 d。"},
    {"glyphs": ["p", "qu"], "note": "p 和 q 是镜像；q 后面总跟 u，读 /kw/。"},
    {"glyphs": ["Ee", "Ii"], "note": "E 的名字 /iː/ 像拼音 yi，I 的名字 /aɪ/ 像“爱”。受拼音影响最容易说反。"},
    {"glyphs": ["Gg", "Jj"], "note": "G 是 /dʒiː/（结尾像 E），J 是 /dʒeɪ/（结尾像 A）。"},
    {"glyphs": ["v", "w"], "note": "v 上齿碰下唇；w 嘴唇圆起来，牙齿不碰嘴唇。van ≠ wan。"},
    {"glyphs": ["a", "e"], "note": "a /æ/ 嘴张得更大；e /e/ 嘴半开。bad ≠ bed，pan ≠ pen。"}
  ],
  "reverse": "字母名不等于字母在词里的读音：c 在 cat 里读 /k/，在 city 里读 /s/；g 在 goat 和 giraffe 里不一样。元音字母要到 cake、kite 这种词里才读自己的名字（见“英语自然拼读表”的长元音）。拼读单词用读音；口头拼写名字（L-I-N、double N）才用字母名。"
};

KT_DATA["phonics-en"] = {
 "review": ["ea、ow、oo 各有两种读音，表里只给最常见的一种例词", "例词由浏览器英语语音读出，需试听是否清楚"],
  "id": "phonics-en", "lang": "en", "speech": "en-US",
  "title": "英语自然拼读表",
  "subtitle": "两三个字母合起来表示一个音（sh、ai），或几个辅音挨着各读各的（st、bl）。点格子听的是例词，注意例词里对应的那个音。",
  "romanLabel": "音标",
  "kcs": ["kt:en-orth-digraphs-blends", "kt:en-orth-long-vowels", "kt:en-orth-vowel-patterns"],
  "tables": [
    {
      "id": "digraphs", "label": "辅音字母组合",
      "rows": [{"id": "dg", "label": "两个字母一个音"}],
      "cells": [
        {"id": "d-sh", "glyph": "sh", "roman": "/ʃ/", "row": "dg", "say": "ship", "example": {"text": "ship", "gloss": "船"}, "note": "ship 开头。嘴唇往前突，比拼音 sh 圆；是一个音，拼读时占一个格。"},
        {"id": "d-ch", "glyph": "ch", "roman": "/tʃ/", "row": "dg", "say": "chick", "example": {"text": "chick", "gloss": "小鸡"}, "note": "chick 开头。和 sh 对比：ch 先堵住再放开，sh 一直是气流。"},
        {"id": "d-th", "glyph": "th", "roman": "/θ/ · /ð/", "row": "dg", "say": "thumb", "example": {"text": "thumb", "gloss": "大拇指"}, "note": "舌尖轻放在上下齿之间。thumb、thin 里不振动 /θ/，this、the 里振动 /ð/。不要读成 s 或 z。"},
        {"id": "d-wh", "glyph": "wh", "roman": "/w/", "row": "dg", "say": "whale", "example": {"text": "whale", "gloss": "鲸鱼"}, "note": "whale 开头，现在大多读成 /w/。who、whole 例外，读 /h/。"},
        {"id": "d-ph", "glyph": "ph", "roman": "/f/", "row": "dg", "say": "phone", "example": {"text": "phone", "gloss": "电话"}, "note": "phone 开头，和 f 同音。"},
        {"id": "d-ck", "glyph": "ck", "roman": "/k/", "row": "dg", "say": "duck", "example": {"text": "duck", "gloss": "鸭子"}, "note": "duck 结尾。只出现在短元音后面，读一个 /k/，不要写成 kk。"},
        {"id": "d-ng", "glyph": "ng", "roman": "/ŋ/", "row": "dg", "say": "ring", "example": {"text": "ring", "gloss": "戒指"}, "note": "ring 结尾，像拼音的后鼻音 -ng，后面不要加 g 的爆破。"}
      ]
    },
    {
      "id": "blends", "label": "辅音连缀",
      "rows": [{"id": "l", "label": "l 连缀"}, {"id": "r", "label": "r 连缀"}, {"id": "s", "label": "s 连缀"}, {"id": "end", "label": "词尾连缀"}],
      "cells": [
        {"id": "b-bl", "glyph": "bl", "roman": "/bl/", "row": "l", "say": "black", "example": {"text": "black", "gloss": "黑色"}, "note": "black 开头。b 和 l 中间不能加元音：不是 'bu-lack'。"},
        {"id": "b-cl", "glyph": "cl", "roman": "/kl/", "row": "l", "say": "clock", "example": {"text": "clock", "gloss": "钟"}, "note": "clock 开头。"},
        {"id": "b-fl", "glyph": "fl", "roman": "/fl/", "row": "l", "say": "flag", "example": {"text": "flag", "gloss": "旗子"}, "note": "flag 开头。"},
        {"id": "b-gl", "glyph": "gl", "roman": "/gl/", "row": "l", "say": "glass", "example": {"text": "glass", "gloss": "玻璃杯"}, "note": "glass 开头。"},
        {"id": "b-pl", "glyph": "pl", "roman": "/pl/", "row": "l", "say": "plum", "example": {"text": "plum", "gloss": "李子"}, "note": "plum 开头。"},
        {"id": "b-sl", "glyph": "sl", "roman": "/sl/", "row": "l", "say": "sleep", "example": {"text": "sleep", "gloss": "睡觉"}, "note": "sleep 开头。"},
        {"id": "b-br", "glyph": "br", "roman": "/br/", "row": "r", "say": "brush", "example": {"text": "brush", "gloss": "刷子"}, "note": "brush 开头。"},
        {"id": "b-cr", "glyph": "cr", "roman": "/kr/", "row": "r", "say": "crab", "example": {"text": "crab", "gloss": "螃蟹"}, "note": "crab 开头。"},
        {"id": "b-dr", "glyph": "dr", "roman": "/dr/", "row": "r", "say": "drum", "example": {"text": "drum", "gloss": "鼓"}, "note": "drum 开头，听起来有点像“戳”，但 d 要轻。"},
        {"id": "b-fr", "glyph": "fr", "roman": "/fr/", "row": "r", "say": "frog", "example": {"text": "frog", "gloss": "青蛙"}, "note": "frog 开头。不是 'fu-rog'。"},
        {"id": "b-gr", "glyph": "gr", "roman": "/gr/", "row": "r", "say": "green", "example": {"text": "green", "gloss": "绿色"}, "note": "green 开头。"},
        {"id": "b-pr", "glyph": "pr", "roman": "/pr/", "row": "r", "say": "pram", "example": {"text": "pram", "gloss": "婴儿车"}, "note": "pram 开头。"},
        {"id": "b-tr", "glyph": "tr", "roman": "/tr/", "row": "r", "say": "tree", "example": {"text": "tree", "gloss": "树"}, "note": "tree 开头，听起来有点像“戳”。"},
        {"id": "b-sk", "glyph": "sk", "roman": "/sk/", "row": "s", "say": "skip", "example": {"text": "skip", "gloss": "跳绳 / 蹦跳"}, "note": "skip 开头。s 后面的 k 不送气，听起来像 g。"},
        {"id": "b-sm", "glyph": "sm", "roman": "/sm/", "row": "s", "say": "smile", "example": {"text": "smile", "gloss": "微笑"}, "note": "smile 开头。"},
        {"id": "b-sn", "glyph": "sn", "roman": "/sn/", "row": "s", "say": "snake", "example": {"text": "snake", "gloss": "蛇"}, "note": "snake 开头。"},
        {"id": "b-sp", "glyph": "sp", "roman": "/sp/", "row": "s", "say": "spoon", "example": {"text": "spoon", "gloss": "勺子"}, "note": "spoon 开头。s 后面的 p 不送气。"},
        {"id": "b-st", "glyph": "st", "roman": "/st/", "row": "s", "say": "stop", "example": {"text": "stop", "gloss": "停"}, "note": "stop 开头。不是 'si-top'：两个辅音中间没有元音。"},
        {"id": "b-sw", "glyph": "sw", "roman": "/sw/", "row": "s", "say": "swim", "example": {"text": "swim", "gloss": "游泳"}, "note": "swim 开头。"},
        {"id": "b-nd", "glyph": "nd", "roman": "/nd/", "row": "end", "say": "hand", "example": {"text": "hand", "gloss": "手"}, "note": "hand 结尾，两个音都要有，d 不要丢。"},
        {"id": "b-nt", "glyph": "nt", "roman": "/nt/", "row": "end", "say": "tent", "example": {"text": "tent", "gloss": "帐篷"}, "note": "tent 结尾。"},
        {"id": "b-mp", "glyph": "mp", "roman": "/mp/", "row": "end", "say": "jump", "example": {"text": "jump", "gloss": "跳"}, "note": "jump 结尾。"},
        {"id": "b-lk", "glyph": "lk", "roman": "/lk/", "row": "end", "say": "milk", "example": {"text": "milk", "gloss": "牛奶"}, "note": "milk 结尾。l 在词尾是“暗 l”，舌头后缩。"},
        {"id": "b-ft", "glyph": "ft", "roman": "/ft/", "row": "end", "say": "gift", "example": {"text": "gift", "gloss": "礼物"}, "note": "gift 结尾。"}
      ]
    },
    {
      "id": "long", "label": "长元音",
      "rows": [{"id": "e", "label": "不发音的 e"}, {"id": "a", "label": "长 a"}, {"id": "ee", "label": "长 e"}, {"id": "i", "label": "长 i"}, {"id": "o", "label": "长 o"}, {"id": "u", "label": "长 u / oo"}],
      "cells": [
        {"id": "l-a_e", "glyph": "a_e", "roman": "/eɪ/", "row": "e", "say": "cake", "example": {"text": "cake", "gloss": "蛋糕"}, "note": "cake：词尾的 e 不发音，让前面的 a 读自己的名字。cap → cape。"},
        {"id": "l-i_e", "glyph": "i_e", "roman": "/aɪ/", "row": "e", "say": "kite", "example": {"text": "kite", "gloss": "风筝"}, "note": "kite：e 不读，i 读名字 /aɪ/。pin → pine。"},
        {"id": "l-o_e", "glyph": "o_e", "roman": "/oʊ/", "row": "e", "say": "rope", "example": {"text": "rope", "gloss": "绳子"}, "note": "rope：e 不读，o 读名字。hop → hope。"},
        {"id": "l-u_e", "glyph": "u_e", "roman": "/juː/ · /uː/", "row": "e", "say": "cube", "example": {"text": "cube", "gloss": "方块"}, "note": "cube 读 /juː/，June 读 /uː/。"},
        {"id": "l-ai", "glyph": "ai", "roman": "/eɪ/", "row": "a", "say": "rain", "example": {"text": "rain", "gloss": "雨"}, "note": "rain：ai 读 /eɪ/，不是汉语的“爱”。多在词中间。"},
        {"id": "l-ay", "glyph": "ay", "roman": "/eɪ/", "row": "a", "say": "day", "example": {"text": "day", "gloss": "白天"}, "note": "day：和 ai 同音，多在词尾。"},
        {"id": "l-ee", "glyph": "ee", "roman": "/iː/", "row": "ee", "say": "tree", "example": {"text": "tree", "gloss": "树"}, "note": "tree：ee 几乎总读 /iː/。"},
        {"id": "l-ea", "glyph": "ea", "roman": "/iː/", "row": "ee", "say": "sea", "example": {"text": "sea", "gloss": "大海"}, "note": "sea：常读 /iː/，但 bread、head 里读短 /e/。"},
        {"id": "l-igh", "glyph": "igh", "roman": "/aɪ/", "row": "i", "say": "night", "example": {"text": "night", "gloss": "夜晚"}, "note": "night：三个字母一个音，gh 不发音。"},
        {"id": "l-ie", "glyph": "ie", "roman": "/aɪ/", "row": "i", "say": "pie", "example": {"text": "pie", "gloss": "馅饼"}, "note": "pie：词尾的 ie 读 /aɪ/。"},
        {"id": "l-y", "glyph": "y", "roman": "/aɪ/", "row": "i", "say": "fly", "example": {"text": "fly", "gloss": "飞"}, "note": "fly：短词结尾的 y 读 /aɪ/；happy 这种两音节词结尾读 /i/。"},
        {"id": "l-oa", "glyph": "oa", "roman": "/oʊ/", "row": "o", "say": "boat", "example": {"text": "boat", "gloss": "小船"}, "note": "boat：oa 读 o 的名字。"},
        {"id": "l-ow", "glyph": "ow", "roman": "/oʊ/", "row": "o", "say": "snow", "example": {"text": "snow", "gloss": "雪"}, "note": "snow：这里 ow 读 /oʊ/；cow 里读 /aʊ/（见“r 控制与双元音”表）。只能靠记。"},
        {"id": "l-oo", "glyph": "oo", "roman": "/uː/", "row": "u", "say": "moon", "example": {"text": "moon", "gloss": "月亮"}, "note": "moon：长 oo。book 里是短 oo（见“r 控制与双元音”表）。"},
        {"id": "l-ue", "glyph": "ue", "roman": "/uː/", "row": "u", "say": "blue", "example": {"text": "blue", "gloss": "蓝色"}, "note": "blue：词尾 ue 读 /uː/。"},
        {"id": "l-ew", "glyph": "ew", "roman": "/uː/ · /juː/", "row": "u", "say": "new", "example": {"text": "new", "gloss": "新的"}, "note": "new：ew 读 /uː/ 或 /juː/。"}
      ]
    },
    {
      "id": "patterns", "label": "r 控制与双元音",
      "rows": [{"id": "r", "label": "元音 + r"}, {"id": "dip", "label": "双元音"}, {"id": "oo", "label": "短 oo"}],
      "cells": [
        {"id": "p-ar", "glyph": "ar", "roman": "/ɑːr/", "row": "r", "say": "car", "example": {"text": "car", "gloss": "汽车"}, "note": "car：美式卷舌，英式不卷舌，选一种保持一致。"},
        {"id": "p-or", "glyph": "or", "roman": "/ɔːr/", "row": "r", "say": "fork", "example": {"text": "fork", "gloss": "叉子"}, "note": "fork。"},
        {"id": "p-er", "glyph": "er", "roman": "/ɜːr/", "row": "r", "say": "her", "example": {"text": "her", "gloss": "她的"}, "note": "her：er、ir、ur 三种写法同一个音。不是汉语的“饿”，也不是拼音 er。"},
        {"id": "p-ir", "glyph": "ir", "roman": "/ɜːr/", "row": "r", "say": "bird", "example": {"text": "bird", "gloss": "鸟"}, "note": "bird：和 er、ur 同音，用哪个写法要记词。"},
        {"id": "p-ur", "glyph": "ur", "roman": "/ɜːr/", "row": "r", "say": "turtle", "example": {"text": "turtle", "gloss": "乌龟"}, "note": "turtle：和 er、ir 同音。"},
        {"id": "p-air", "glyph": "air", "roman": "/er/", "row": "r", "say": "chair", "example": {"text": "chair", "gloss": "椅子"}, "note": "chair：air 和 are（care）同音。"},
        {"id": "p-ear", "glyph": "ear", "roman": "/ɪr/", "row": "r", "say": "ear", "example": {"text": "ear", "gloss": "耳朵"}, "note": "ear：常读 /ɪr/；bear 里读 /er/。"},
        {"id": "p-oi", "glyph": "oi", "roman": "/ɔɪ/", "row": "dip", "say": "coin", "example": {"text": "coin", "gloss": "硬币"}, "note": "coin：oi 多在词中间。"},
        {"id": "p-oy", "glyph": "oy", "roman": "/ɔɪ/", "row": "dip", "say": "boy", "example": {"text": "boy", "gloss": "男孩"}, "note": "boy：和 oi 同音，多在词尾。"},
        {"id": "p-ou", "glyph": "ou", "roman": "/aʊ/", "row": "dip", "say": "house", "example": {"text": "house", "gloss": "房子"}, "note": "house：ou 读 /aʊ/，像“凹”。"},
        {"id": "p-ow", "glyph": "ow", "roman": "/aʊ/", "row": "dip", "say": "cow", "example": {"text": "cow", "gloss": "奶牛"}, "note": "cow：这里 ow 读 /aʊ/，和 ou 同音；snow 里读 /oʊ/。"},
        {"id": "p-aw", "glyph": "aw", "roman": "/ɔː/", "row": "dip", "say": "saw", "example": {"text": "saw", "gloss": "锯子"}, "note": "saw：aw 和 au（sauce）同音。"},
        {"id": "p-oo", "glyph": "oo", "roman": "/ʊ/", "row": "oo", "say": "book", "example": {"text": "book", "gloss": "书"}, "note": "book：短 oo。moon 里是长 oo，两种都很常见。"}
      ]
    }
  ],
  "confusables": [
    {"glyphs": ["sh", "ch"], "note": "ship / chip：ch 先堵住再放开，sh 一直是气流。"},
    {"glyphs": ["ai", "ay"], "note": "同一个音 /eɪ/：ai 在词中间（rain），ay 在词尾（day）。听到的是例词，按例词的写法选。"},
    {"glyphs": ["ee", "ea"], "note": "同一个音 /iː/：tree 用 ee，sea 用 ea，只能记词。ea 还有短音 bread。"},
    {"glyphs": ["oi", "oy"], "note": "同一个音 /ɔɪ/：oi 在词中间（coin），oy 在词尾（boy）。"},
    {"glyphs": ["er", "ir", "ur"], "note": "her / bird / turtle 是同一个音，三种写法只能记词。"},
    {"glyphs": ["igh", "ie"], "note": "都是 /aɪ/：night 用 igh，pie 用 ie。"}
  ],
  "reverse": "这些规律有不按规律读的常用词，要整体记：said（ai 读 /e/）、have（e 不让 a 变长）、was、one、two、come、do；ea 在 bread、head 里读短 /e/；ow 有 snow / cow 两种读法，oo 有 moon / book 两种读法。见 kt:en-orth-sight-words。"
};

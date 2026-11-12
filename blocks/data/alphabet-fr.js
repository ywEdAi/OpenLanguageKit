/* French alphabet, accents and key letter groups for blocks/sound-grid.html.
 * A demo of "adding a language is one data file": there is no French curriculum in curriculum/.
 * Speech: letter cells say the letter (French voice reads its French name); sound cells say a keyword
 * containing the sound, never the bare sound. Put real recordings in `audio` (URL) when available.
 * Content not yet checked by a native speaker — see the lead's review list. */
KT_DATA["alphabet-fr"] = {
 "review": ["整个法语数据包都还没有母语者核对", "字母名 W [dubləve]、Y [igʁɛk] 与 un [œ̃] 的说明", "例外词 oignon、monsieur、fils、sept、femme", "s 在两个元音之间读 [z]（maison）、i 后的 en 读 [ɛ̃]（chien）", "法语语音合成读单独的 a、é、ou、eau、on 时，读的是音还是字母名"],
  "id": "alphabet-fr", "lang": "fr", "speech": "fr-FR",
  "title": "法语字母与读音组合",
  "subtitle": "法语字母和英语一样是 26 个，但名字不同；再加上重音符号和一批固定的字母组合（ou、oi、an、eau……）。认识这些组合，大部分法语词就能按字读出来。",
  "romanLabel": "名字 / 音标",
  "kcs": [],
  "tables": [
    {
      "id": "letters", "label": "字母名",
      "rows": [{"id": "s1", "label": "A–G"}, {"id": "s2", "label": "H–P"}, {"id": "s3", "label": "Q–V"}, {"id": "s4", "label": "W–Z"}],
      "cells": [
        {"id": "f-a", "glyph": "Aa", "roman": "[a]", "row": "s1", "say": "A", "example": {"text": "ami", "gloss": "朋友"}, "note": "像拼音 a。"},
        {"id": "f-b", "glyph": "Bb", "roman": "[be]", "row": "s1", "say": "B", "example": {"text": "bébé", "gloss": "宝宝"}, "note": "名字 [be]，不是英语的 /biː/。b 是浊音，声带振动。"},
        {"id": "f-c", "glyph": "Cc", "roman": "[se]", "row": "s1", "say": "C", "example": {"text": "café", "gloss": "咖啡"}, "note": "在 a、o、u 前读 [k]（café），在 e、i 前读 [s]（cinéma）。"},
        {"id": "f-d", "glyph": "Dd", "roman": "[de]", "row": "s1", "say": "D", "example": {"text": "dame", "gloss": "女士"}, "note": "名字 [de]。"},
        {"id": "f-e", "glyph": "Ee", "roman": "[ə]", "row": "s1", "say": "E", "example": {"text": "le", "gloss": "（冠词）"}, "note": "名字 [ə]，有点像拼音 e 但嘴唇更圆。词尾不带符号的 e 一般不发音。"},
        {"id": "f-f", "glyph": "Ff", "roman": "[ɛf]", "row": "s1", "say": "F", "example": {"text": "fête", "gloss": "节日"}, "note": "名字 [ɛf]。"},
        {"id": "f-g", "glyph": "Gg", "roman": "[ʒe]", "row": "s1", "say": "G", "example": {"text": "gare", "gloss": "火车站"}, "note": "名字 [ʒe]——和英语 J 的名字容易混。在 a、o、u 前读 [g]，在 e、i 前读 [ʒ]。"},
        {"id": "f-h", "glyph": "Hh", "roman": "[aʃ]", "row": "s2", "say": "H", "example": {"text": "homme", "gloss": "男人"}, "note": "h 本身从不发音：homme 读 [ɔm]。"},
        {"id": "f-i", "glyph": "Ii", "roman": "[i]", "row": "s2", "say": "I", "example": {"text": "lit", "gloss": "床"}, "note": "像拼音 i（衣）。"},
        {"id": "f-j", "glyph": "Jj", "roman": "[ʒi]", "row": "s2", "say": "J", "example": {"text": "jeu", "gloss": "游戏"}, "note": "名字 [ʒi]。读 [ʒ]，接近拼音 r 但嘴唇突出，不是英语的 /dʒ/。"},
        {"id": "f-k", "glyph": "Kk", "roman": "[ka]", "row": "s2", "say": "K", "example": {"text": "kiwi", "gloss": "猕猴桃"}, "note": "多见于外来词。"},
        {"id": "f-l", "glyph": "Ll", "roman": "[ɛl]", "row": "s2", "say": "L", "example": {"text": "lune", "gloss": "月亮"}, "note": "名字 [ɛl]。"},
        {"id": "f-m", "glyph": "Mm", "roman": "[ɛm]", "row": "s2", "say": "M", "example": {"text": "mer", "gloss": "大海"}, "note": "名字 [ɛm]。"},
        {"id": "f-n", "glyph": "Nn", "roman": "[ɛn]", "row": "s2", "say": "N", "example": {"text": "nez", "gloss": "鼻子"}, "note": "名字 [ɛn]。"},
        {"id": "f-o", "glyph": "Oo", "roman": "[o]", "row": "s2", "say": "O", "example": {"text": "moto", "gloss": "摩托车"}, "note": "比拼音 o 更圆更紧，不滑成 ou。"},
        {"id": "f-p", "glyph": "Pp", "roman": "[pe]", "row": "s2", "say": "P", "example": {"text": "papa", "gloss": "爸爸"}, "note": "p 送气很弱，听起来介于拼音 b 和 p 之间。"},
        {"id": "f-q", "glyph": "Qq", "roman": "[ky]", "row": "s3", "say": "Q", "example": {"text": "quatre", "gloss": "四"}, "note": "名字 [ky]。qu 读 [k]，u 不发音。"},
        {"id": "f-r", "glyph": "Rr", "roman": "[ɛʁ]", "row": "s3", "say": "R", "example": {"text": "rat", "gloss": "老鼠"}, "note": "小舌音，从喉咙后部发出，像轻轻的漱口声；不是英语或拼音的 r。"},
        {"id": "f-s", "glyph": "Ss", "roman": "[ɛs]", "row": "s3", "say": "S", "example": {"text": "sac", "gloss": "包"}, "note": "两个元音之间读 [z]（maison）。"},
        {"id": "f-t", "glyph": "Tt", "roman": "[te]", "row": "s3", "say": "T", "example": {"text": "tomate", "gloss": "番茄"}, "note": "送气很弱。"},
        {"id": "f-u", "glyph": "Uu", "roman": "[y]", "row": "s3", "say": "U", "example": {"text": "lune", "gloss": "月亮"}, "note": "就是拼音的 ü（迂）。不是英语 /juː/，也不是拼音 u。"},
        {"id": "f-v", "glyph": "Vv", "roman": "[ve]", "row": "s3", "say": "V", "example": {"text": "vélo", "gloss": "自行车"}, "note": "上齿碰下唇，和 w 不同。"},
        {"id": "f-w", "glyph": "Ww", "roman": "[dubləve]", "row": "s4", "say": "W", "example": {"text": "wagon", "gloss": "车厢"}, "note": "名字是“两个 v”。只出现在外来词里。"},
        {"id": "f-x", "glyph": "Xx", "roman": "[iks]", "row": "s4", "say": "X", "example": {"text": "taxi", "gloss": "出租车"}, "note": "词尾的 x 一般不发音（prix）。"},
        {"id": "f-y", "glyph": "Yy", "roman": "[igʁɛk]", "row": "s4", "say": "Y", "example": {"text": "stylo", "gloss": "钢笔"}, "note": "名字叫“希腊 i”，读 [i]。"},
        {"id": "f-z", "glyph": "Zz", "roman": "[zɛd]", "row": "s4", "say": "Z", "example": {"text": "zoo", "gloss": "动物园"}, "note": "名字 [zɛd]。"}
      ]
    },
    {
      "id": "accents", "label": "重音符号",
      "rows": [{"id": "e", "label": "e 上的符号"}, {"id": "other", "label": "其他字母"}],
      "cells": [
        {"id": "a-e1", "glyph": "é", "roman": "[e]", "row": "e", "say": "bébé", "example": {"text": "bébé", "gloss": "宝宝"}, "note": "闭口 e，嘴角向两边拉，像“诶”但不滑。"},
        {"id": "a-e2", "glyph": "è", "roman": "[ɛ]", "row": "e", "say": "mère", "example": {"text": "mère", "gloss": "妈妈"}, "note": "开口 e，嘴比 é 张得大。"},
        {"id": "a-e3", "glyph": "ê", "roman": "[ɛ]", "row": "e", "say": "fête", "example": {"text": "fête", "gloss": "节日"}, "note": "和 è 同音。帽子符号常表示古法语这里曾有个 s（fête ← feste）。"},
        {"id": "a-e4", "glyph": "ë", "roman": "[ɛ]", "row": "e", "say": "Noël", "example": {"text": "Noël", "gloss": "圣诞节"}, "note": "两点表示这个字母和前面的元音分开读：Noël 是 No-ël，不是 oe 组合。"},
        {"id": "a-a", "glyph": "à", "roman": "[a]", "row": "other", "say": "voilà", "example": {"text": "voilà", "gloss": "瞧，这就是"}, "note": "读音和 a 一样，符号只区分词义（a 有 / à 在）。"},
        {"id": "a-a2", "glyph": "â", "roman": "[a]", "row": "other", "say": "gâteau", "example": {"text": "gâteau", "gloss": "蛋糕"}, "note": "今天大多数人读得和 a 一样。"},
        {"id": "a-c", "glyph": "ç", "roman": "[s]", "row": "other", "say": "garçon", "example": {"text": "garçon", "gloss": "男孩"}, "note": "c 下面加小尾巴，在 a、o、u 前也读 [s]。"},
        {"id": "a-o", "glyph": "ô", "roman": "[o]", "row": "other", "say": "hôpital", "example": {"text": "hôpital", "gloss": "医院"}, "note": "闭口 o。"},
        {"id": "a-i", "glyph": "î", "roman": "[i]", "row": "other", "say": "île", "example": {"text": "île", "gloss": "岛"}, "note": "读音和 i 一样。"},
        {"id": "a-u", "glyph": "û", "roman": "[y]", "row": "other", "say": "flûte", "example": {"text": "flûte", "gloss": "长笛"}, "note": "读音和 u（ü）一样。"},
        {"id": "a-u2", "glyph": "ù", "roman": "[u]", "row": "other", "say": "où", "example": {"text": "où", "gloss": "哪里"}, "note": "只出现在 où 一个词里，用来和 ou（或者）区分。"}
      ]
    },
    {
      "id": "groups", "label": "字母组合",
      "rows": [{"id": "v", "label": "元音组合"}, {"id": "nas", "label": "鼻化元音"}, {"id": "c", "label": "辅音组合"}],
      "cells": [
        {"id": "g-ou", "glyph": "ou", "roman": "[u]", "row": "v", "say": "loup", "example": {"text": "loup", "gloss": "狼"}, "note": "就是拼音 u（乌）。单个 u 才是 ü。"},
        {"id": "g-oi", "glyph": "oi", "roman": "[wa]", "row": "v", "say": "roi", "example": {"text": "roi", "gloss": "国王"}, "note": "读 [wa]，像“哇”。"},
        {"id": "g-au", "glyph": "au", "roman": "[o]", "row": "v", "say": "auto", "example": {"text": "auto", "gloss": "汽车（口语）"}, "note": "两个字母一个音 [o]。"},
        {"id": "g-eau", "glyph": "eau", "roman": "[o]", "row": "v", "say": "bateau", "example": {"text": "bateau", "gloss": "船"}, "note": "三个字母一个音 [o]，和 au、o 同音。"},
        {"id": "g-ai", "glyph": "ai", "roman": "[ɛ]", "row": "v", "say": "lait", "example": {"text": "lait", "gloss": "牛奶"}, "note": "读 [ɛ]，和 è 同音；不是英语的 /eɪ/，也不是“爱”。"},
        {"id": "g-ei", "glyph": "ei", "roman": "[ɛ]", "row": "v", "say": "neige", "example": {"text": "neige", "gloss": "雪"}, "note": "和 ai、è 同音。"},
        {"id": "g-eu", "glyph": "eu", "roman": "[ø] · [œ]", "row": "v", "say": "feu", "example": {"text": "feu", "gloss": "火"}, "note": "嘴唇圆起来发“诶”。词尾多是闭口 [ø]（feu），后面有辅音时多是开口 [œ]（fleur）。"},
        {"id": "g-oeu", "glyph": "œu", "roman": "[œ] · [ø]", "row": "v", "say": "cœur", "example": {"text": "cœur", "gloss": "心"}, "note": "o 和 e 连写，读音和 eu 一样。"},
        {"id": "g-an", "glyph": "an", "roman": "[ɑ̃]", "row": "nas", "say": "maman", "example": {"text": "maman", "gloss": "妈妈"}, "note": "鼻化元音：气流同时从嘴和鼻子出，舌头不碰上颚，最后不发 n。"},
        {"id": "g-en", "glyph": "en", "roman": "[ɑ̃]", "row": "nas", "say": "enfant", "example": {"text": "enfant", "gloss": "孩子"}, "note": "和 an 同音。在 i 后面（chien）读 [ɛ̃]。"},
        {"id": "g-am", "glyph": "am", "roman": "[ɑ̃]", "row": "nas", "say": "chambre", "example": {"text": "chambre", "gloss": "卧室"}, "note": "在 b、p 前写 m 不写 n，读音和 an 一样。"},
        {"id": "g-em", "glyph": "em", "roman": "[ɑ̃]", "row": "nas", "say": "temps", "example": {"text": "temps", "gloss": "时间；天气"}, "note": "和 an、en 同音。"},
        {"id": "g-in", "glyph": "in", "roman": "[ɛ̃]", "row": "nas", "say": "lapin", "example": {"text": "lapin", "gloss": "兔子"}, "note": "鼻化的 [ɛ]，不是拼音 in（因）。"},
        {"id": "g-ain", "glyph": "ain", "roman": "[ɛ̃]", "row": "nas", "say": "pain", "example": {"text": "pain", "gloss": "面包"}, "note": "和 in 同音。"},
        {"id": "g-ein", "glyph": "ein", "roman": "[ɛ̃]", "row": "nas", "say": "plein", "example": {"text": "plein", "gloss": "满的"}, "note": "和 in 同音。"},
        {"id": "g-un", "glyph": "un", "roman": "[œ̃]", "row": "nas", "say": "brun", "example": {"text": "brun", "gloss": "棕色"}, "note": "传统读圆唇的 [œ̃]，今天很多人读得和 in 一样。"},
        {"id": "g-on", "glyph": "on", "roman": "[ɔ̃]", "row": "nas", "say": "bonbon", "example": {"text": "bonbon", "gloss": "糖果"}, "note": "圆唇鼻化，不是拼音 ong 那样带后鼻音。"},
        {"id": "g-ch", "glyph": "ch", "roman": "[ʃ]", "row": "c", "say": "chat", "example": {"text": "chat", "gloss": "猫"}, "note": "读 [ʃ]，像拼音 sh 但嘴唇突出；不是英语的 ch。"},
        {"id": "g-gn", "glyph": "gn", "roman": "[ɲ]", "row": "c", "say": "montagne", "example": {"text": "montagne", "gloss": "山"}, "note": "像拼音 ni 连读，一个音。"},
        {"id": "g-qu", "glyph": "qu", "roman": "[k]", "row": "c", "say": "quatre", "example": {"text": "quatre", "gloss": "四"}, "note": "读 [k]，u 不发音（和英语 /kw/ 不同）。"},
        {"id": "g-ph", "glyph": "ph", "roman": "[f]", "row": "c", "say": "photo", "example": {"text": "photo", "gloss": "照片"}, "note": "和 f 同音。"},
        {"id": "g-ill", "glyph": "ill", "roman": "[ij]", "row": "c", "say": "fille", "example": {"text": "fille", "gloss": "女孩"}, "note": "常读 [ij]，像“衣耶”快读；ville、mille 例外读 [il]。"}
      ]
    },
    {
      "id": "silent", "label": "不发音的字母",
      "rows": [{"id": "end", "label": "词尾辅音"}, {"id": "other", "label": "e 和 h"}],
      "cells": [
        {"id": "x-t", "glyph": "-t", "roman": "不发音", "row": "end", "say": "chat", "example": {"text": "chat", "gloss": "猫"}, "note": "chat 读 [ʃa]，t 不读。"},
        {"id": "x-s", "glyph": "-s", "roman": "不发音", "row": "end", "say": "gris", "example": {"text": "gris", "gloss": "灰色"}, "note": "gris 读 [gʁi]。复数的 -s 也不读。"},
        {"id": "x-d", "glyph": "-d", "roman": "不发音", "row": "end", "say": "pied", "example": {"text": "pied", "gloss": "脚"}, "note": "pied 读 [pje]。"},
        {"id": "x-x", "glyph": "-x", "roman": "不发音", "row": "end", "say": "prix", "example": {"text": "prix", "gloss": "价格；奖"}, "note": "prix 读 [pʁi]。"},
        {"id": "x-p", "glyph": "-p", "roman": "不发音", "row": "end", "say": "loup", "example": {"text": "loup", "gloss": "狼"}, "note": "loup 读 [lu]。"},
        {"id": "x-z", "glyph": "-z", "roman": "不发音", "row": "end", "say": "riz", "example": {"text": "riz", "gloss": "米饭"}, "note": "riz 读 [ʁi]。nez 的 ez 读 [e]。"},
        {"id": "x-crfl", "glyph": "-c -r -f -l", "roman": "常要读", "row": "end", "say": "parc", "example": {"text": "parc", "gloss": "公园"}, "note": "词尾 c、r、f、l 常常要读（parc、mer、neuf、sel），记口诀 CaReFuL。但 -er 结尾的动词（parler）r 不读。"},
        {"id": "x-e", "glyph": "-e", "roman": "不发音", "row": "other", "say": "lune", "example": {"text": "lune", "gloss": "月亮"}, "note": "词尾不带符号的 e 不读，但让前面的辅音读出来：lune 读 [lyn]。"},
        {"id": "x-h", "glyph": "h", "roman": "不发音", "row": "other", "say": "homme", "example": {"text": "homme", "gloss": "男人"}, "note": "h 在任何位置都不读。"}
      ]
    }
  ],
  "confusables": [
    {"glyphs": ["é", "è"], "note": "é 闭口（bébé），è 开口（mère）。符号的方向就是区别。"},
    {"glyphs": ["ou", "Uu"], "note": "ou 读 [u]（拼音 u），单个 u 读 [y]（拼音 ü）。loup ≠ lu。"},
    {"glyphs": ["an", "on"], "note": "an 嘴张大，on 嘴唇圆起来。maman ≠ mon。"},
    {"glyphs": ["an", "in"], "note": "an [ɑ̃] 嘴张大偏后，in [ɛ̃] 嘴角拉开偏前。"},
    {"glyphs": ["au", "eau"], "note": "同一个音 [o]：auto 用 au，bateau 用 eau，只能记词。"},
    {"glyphs": ["ai", "ei"], "note": "同一个音 [ɛ]：lait 用 ai，neige 用 ei。"}
  ],
  "reverse": "有些常用词不按组合规则读，要整体记：femme（e 读 [a]）、monsieur（mon 读 [mə]）、oignon（oi 读 [ɔ]）、fils（l 不读、s 要读）、sept（p 不读、t 要读）。词尾 c、r、f、l 常常要读。词和词之间还有联诵（les amis 的 s 读 [z]），单看一个词看不出来。"
};

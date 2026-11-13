/* Data packs for blocks/oral-to-print.html (prim:oral-to-print): oral-to-print-en, oral-to-print-zh.
 * For children (and heritage speakers) who can already SAY these words. Pictures are emoji; sound is browser speech.
 * No pinyin or phonetic spelling is shown anywhere.
 *
 * Pack format
 *   id, lang, speech, title/titleEn, subtitle/subtitleEn, kcs[]
 *   unitName {zh, en}        what one unit is called ("字" / "word")
 *   cards  [{id, pic, words ["word", ...], learn ["unit", ...] (at most 3), kc?}]  我的话: a sentence the child says.
 *          words are the tap targets (a tap speaks the word); joined they give the sentence.
 *   units  {unit: {say, card}}  every unit that can be learned: `say` is what speech reads, `card` the card it comes from
 *   find   [{id, u (unit), cue (spoken prompt, e.g. "下雨的下"), cards [{t, has?}], about (text of the card asked about
 *          next), ans same | shift | look, why{zh,en}, kc?}]   认出来:
 *          three cards without pictures; tap the one that has the unit you said, or "none of these" when no card has
 *          it (has missing on every card = the answer is none; the reverse half). Then: in `about`, is it the same unit
 *          with the same meaning (same), the same unit with a changed meaning (shift), or only a look-alike (look)?
 *   read   [{id, s, kc?}]   读给人听: sentences built from learned units, no picture
 *   trap   [{id, s (with ＿ for the gap), say, opts [..], ok, why{zh,en}, kc?}]  口语≠书面: hear it, pick how it is written
 *          (homophones, irregular spellings, spoken forms, dialect words)
 *   review / reviewEn
 */
KT_DATA["oral-to-print-zh"] = {
  "id": "oral-to-print-zh", "lang": "zh", "speech": "zh-CN",
  "title": "会说的话，认出字来", "titleEn": "From words you can say to characters you can read",
  "subtitle": "先说一句自己会说的话，看它变成字；再在新的词里把这些字认出来；最后读给家人听。不用拼音。", "subtitleEn": "Say something you can already say and watch it become characters; then find those characters in new words; then read to someone at home. No pinyin.",
  "kcs": ["kt:zh-hanzi-l1"],
  "unitName": {"zh": "字", "en": "character"},
  "cards": [
    {"id": "rain", "pic": "🌧️", "words": ["下雨", "了", "！"], "learn": ["下", "雨"], "kc": "kt:zh-hanzi-l1"},
    {"id": "eat", "pic": "🍚", "words": ["妈妈", "，", "我", "要", "吃饭", "。"], "learn": ["妈", "吃", "饭"], "kc": "kt:zh-hanzi-l1"},
    {"id": "big", "pic": "🐘", "words": ["大象", "很", "大", "，", "小狗", "很", "小", "。"], "learn": ["大", "小"], "kc": "kt:zh-hanzi-l1"},
    {"id": "door", "pic": "🚪", "words": ["爸爸", "开门", "了", "。"], "learn": ["爸", "开", "门"], "kc": "kt:zh-hanzi-l1"},
    {"id": "water", "pic": "💧", "words": ["我", "想", "喝水", "。"], "learn": ["我", "水"], "kc": "kt:zh-hanzi-l1"},
    {"id": "family", "pic": "🏠", "words": ["我家", "有", "三个", "人", "。"], "learn": ["家", "人"], "kc": "kt:zh-hanzi-l1"},
    {"id": "hand", "pic": "🧼", "words": ["我", "洗手", "了", "。"], "learn": ["手"], "kc": "kt:zh-hanzi-l1"}
  ],
  "units": {
    "下": {"say": "下", "card": "rain"}, "雨": {"say": "雨", "card": "rain"},
    "妈": {"say": "妈", "card": "eat"}, "吃": {"say": "吃", "card": "eat"}, "饭": {"say": "饭", "card": "eat"},
    "大": {"say": "大", "card": "big"}, "小": {"say": "小", "card": "big"},
    "爸": {"say": "爸", "card": "door"}, "开": {"say": "开", "card": "door"}, "门": {"say": "门", "card": "door"},
    "我": {"say": "我", "card": "water"}, "水": {"say": "水", "card": "water"},
    "家": {"say": "家", "card": "family"}, "人": {"say": "人", "card": "family"},
    "手": {"say": "手", "card": "hand"}
  },
  "find": [
    {"id": "xia1", "u": "下", "cue": "下雨的下", "cards": [{"t": "下午", "has": true}, {"t": "上午"}, {"t": "不要"}], "about": "下午", "ans": "shift",
     "why": {"zh": "是同一个“下”，可意思变了：下雨的“下”是从上面落下来，下午的“下”是“后面那一半”。", "en": "The same 下, but the meaning changed: in 下雨 it means falling down; in 下午 it means the later half."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "xia2", "u": "下", "cue": "下雨的下", "cards": [{"t": "下车", "has": true}, {"t": "上车"}, {"t": "卡车"}], "about": "下车", "ans": "same",
     "why": {"zh": "下车的“下”也是“往下”，和下雨的“下”意思一样。卡车的“卡”只是长得有点像。", "en": "下 in 下车 also means going down, the same as in 下雨. 卡 in 卡车 only looks a bit like it."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "yu", "u": "雨", "cue": "下雨的雨", "cards": [{"t": "雨衣", "has": true}, {"t": "两个"}, {"t": "西瓜"}], "about": "雨衣", "ans": "same",
     "why": {"zh": "雨衣就是下雨穿的衣服，“雨”的意思没变。“两”“西”长得像，但不是“雨”。", "en": "雨衣 is a raincoat; 雨 still means rain. 两 and 西 look similar but are not 雨."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "chi", "u": "吃", "cue": "吃饭的吃", "cards": [{"t": "好吃", "has": true}, {"t": "叫我"}, {"t": "口水"}], "about": "好吃", "ans": "same",
     "why": {"zh": "好吃的“吃”还是吃东西的“吃”。“叫”也有一个“口”，但不是同一个字。", "en": "吃 in 好吃 still means eat. 叫 also has a 口 but is a different character."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "fan", "u": "饭", "cue": "吃饭的饭", "cards": [{"t": "饭店", "has": true}, {"t": "饮料"}, {"t": "反正"}], "about": "饭店", "ans": "same",
     "why": {"zh": "饭店是吃饭的地方，“饭”的意思没变。“饮”和“反”都只像一半。", "en": "饭店 is a place to eat; 饭 keeps its meaning. 饮 and 反 only share half of it."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "da0", "u": "大", "cue": "大象的大", "cards": [{"t": "太阳"}, {"t": "天上"}, {"t": "人口"}], "about": "太阳", "ans": "look",
     "why": {"zh": "这三张里都没有“大”。“太”比“大”多一个点，是另一个字；“天”上面多一横。", "en": "None of these has 大. 太 has an extra dot and is a different character; 天 has an extra stroke on top."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "da1", "u": "大", "cue": "大象的大", "cards": [{"t": "大门", "has": true}, {"t": "太好了"}, {"t": "天气"}], "about": "大门", "ans": "same",
     "why": {"zh": "大门的“大”就是大象的“大”：很大的门。", "en": "大 in 大门 is the same 大 as in 大象: a big door."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "xiao", "u": "小", "cue": "小狗的小", "cards": [{"t": "小鸟", "has": true}, {"t": "少了"}, {"t": "水果"}], "about": "小鸟", "ans": "same",
     "why": {"zh": "小鸟的“小”还是“不大”。“少”下面多一撇，意思是“不多”。", "en": "小 in 小鸟 still means small. 少 has an extra stroke below and means few."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "kai", "u": "开", "cue": "开门的开", "cards": [{"t": "开心", "has": true}, {"t": "井水"}, {"t": "关门"}], "about": "开心", "ans": "shift",
     "why": {"zh": "同一个“开”，意思变了：开门是把门打开，开心是高兴。", "en": "The same 开 with a new meaning: 开门 is opening a door, 开心 means happy."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "men1", "u": "门", "cue": "开门的门", "cards": [{"t": "门口", "has": true}, {"t": "问好"}, {"t": "他们"}], "about": "门口", "ans": "same",
     "why": {"zh": "门口就是门的旁边。“问”“们”里面有“门”，但它们是别的字。", "en": "门口 is by the door. 问 and 们 contain 门 but are other characters."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "men0", "u": "门", "cue": "开门的门", "cards": [{"t": "问题"}, {"t": "我们"}, {"t": "闪电"}], "about": "我们", "ans": "look",
     "why": {"zh": "这三张里都没有“门”这个字。“们”“问”“闪”里有门的样子，可都是别的字。", "en": "None of these has the character 门. 们, 问 and 闪 contain its shape but are other characters."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "shui", "u": "水", "cue": "喝水的水", "cards": [{"t": "口水", "has": true}, {"t": "永远"}, {"t": "小鸟"}], "about": "口水", "ans": "same",
     "why": {"zh": "口水是嘴里的水，“水”的意思没变。“永”上面多一点，是另一个字。", "en": "口水 is water in your mouth; 水 keeps its meaning. 永 has an extra dot on top and is another character."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "wo", "u": "我", "cue": "我想喝水的我", "cards": [{"t": "我们", "has": true}, {"t": "找到"}, {"t": "你好"}], "about": "我们", "ans": "same",
     "why": {"zh": "我们的“我”就是我自己，再加上别人。“找”和“我”很像，但是另一个字。", "en": "我 in 我们 is still me (plus others). 找 looks very like 我 but is another character."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "ren1", "u": "人", "cue": "三个人的人", "cards": [{"t": "大人", "has": true}, {"t": "入口"}, {"t": "八个"}], "about": "大人", "ans": "same",
     "why": {"zh": "大人的“人”还是人。“入”和“八”长得像，但不是“人”。", "en": "人 in 大人 is still a person. 入 and 八 look alike but are not 人."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "ren0", "u": "人", "cue": "三个人的人", "cards": [{"t": "入口"}, {"t": "八月"}, {"t": "个子"}], "about": "入口", "ans": "look",
     "why": {"zh": "这三张里都没有“人”。“入”的撇和捺是反过来的，意思是“进去”。", "en": "None of these has 人. In 入 the two strokes are the other way round; it means to enter."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "jia", "u": "家", "cue": "我家的家", "cards": [{"t": "回家", "has": true}, {"t": "写字"}, {"t": "大衣"}], "about": "回家", "ans": "same",
     "why": {"zh": "回家的“家”就是我家的“家”。“字”上面的宝盖和“家”一样，可下面不同。", "en": "家 in 回家 is the same home. 字 shares the roof on top, but the bottom is different."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "shou", "u": "手", "cue": "洗手的手", "cards": [{"t": "手机", "has": true}, {"t": "毛衣"}, {"t": "我们"}], "about": "手机", "ans": "same",
     "why": {"zh": "手机是拿在手里的电话，“手”还是手。“毛”和“手”很像，最后一笔不一样。", "en": "手机 is a phone you hold in your hand; 手 still means hand. 毛 looks very like 手; the last stroke differs."}, "kc": "kt:zh-hanzi-l1"}
  ],
  "read": [
    {"id": "r1", "s": "下午下雨了。", "kc": "kt:zh-hanzi-l1"},
    {"id": "r2", "s": "爸爸开门，妈妈吃饭。", "kc": "kt:zh-hanzi-l1"},
    {"id": "r3", "s": "我家有三个大人。", "kc": "kt:zh-hanzi-l1"},
    {"id": "r4", "s": "小鸟在门口。", "kc": "kt:zh-hanzi-l1"},
    {"id": "r5", "s": "我要洗手吃饭。", "kc": "kt:zh-hanzi-l1"},
    {"id": "r6", "s": "大门开了，小狗回家了。", "kc": "kt:zh-hanzi-l1"}
  ],
  "trap": [
    {"id": "zai1", "s": "我明天＿来。", "say": "我明天再来。", "opts": ["再", "在"], "ok": "再", "why": {"zh": "说起来一样，写出来要分：“再”是又一次，“在”是在哪里。", "en": "They sound the same but are written differently: 再 means again, 在 means at / in."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "zai2", "s": "妈妈＿家里做饭。", "say": "妈妈在家里做饭。", "opts": ["再", "在"], "ok": "在", "why": {"zh": "说的是在哪里，写“在”。", "en": "It's about where she is, so 在."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "ta1", "s": "这是我的小猫，＿很可爱。", "say": "这是我的小猫，它很可爱。", "opts": ["他", "她", "它"], "ok": "它", "why": {"zh": "三个字读音一样。说动物写“它”。", "en": "All three sound the same. For an animal, write 它."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "ta2", "s": "我姐姐会弹琴，＿弹得很好。", "say": "我姐姐会弹琴，她弹得很好。", "opts": ["他", "她", "它"], "ok": "她", "why": {"zh": "姐姐是女的，写“她”。", "en": "A sister is female, so 她."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "de1", "s": "他跑＿很快。", "say": "他跑得很快。", "opts": ["的", "得"], "ok": "得", "why": {"zh": "说起来一样。动作后面说“怎么样”，写“得”。", "en": "They sound the same. After an action, describing how it was done, write 得."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "de2", "s": "这是我＿书。", "say": "这是我的书。", "opts": ["的", "得"], "ok": "的", "why": {"zh": "“谁的东西”写“的”。", "en": "Whose thing: write 的."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "sha", "s": "（写给老师的便条）老师，这个字是＿意思？", "say": "老师，这个字是什么意思？", "opts": ["啥", "什么"], "ok": "什么", "why": {"zh": "“啥”是口语，写给老师的便条用“什么”。", "en": "啥 is spoken; a note to a teacher uses 什么."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "mou", "s": "（写给老师）今天我＿带伞。", "say": "今天我没有带伞。", "opts": ["冇", "没有"], "ok": "没有", "why": {"zh": "家里说粤语的“冇”，普通话书面写“没有”。", "en": "Cantonese 冇, spoken at some homes, is written 没有 in standard Chinese."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "tai", "s": "＿阳出来了。", "say": "太阳出来了。", "opts": ["大", "太"], "ok": "太", "why": {"zh": "太阳的“太”比“大”多一个点。", "en": "太 in 太阳 has one more dot than 大."}, "kc": "kt:zh-hanzi-l1"},
    {"id": "ru", "s": "商店的＿口在那边。", "say": "商店的入口在那边。", "opts": ["人", "入"], "ok": "入", "why": {"zh": "入口是“进去的地方”，写“入”；“人”的撇和捺方向不一样。", "en": "入口 is the way in, written 入; 人 has its two strokes the other way."}, "kc": "kt:zh-hanzi-l1"}
  ],
  "review": [
    "下午 的“下”判为“意思变了”、下车 判为“意思一样”，请确认这样分对孩子合适",
    "饭店 判为“饭”的意思没变",
    "手机 判为“手”的意思没变",
    "卡车 的“卡”作为“下”的形近干扰",
    "单个汉字的浏览器读音（点字时读整个词，自己写的句子按字读）可能读错，例如“了”",
    "雨、饭、吃 等是否都在《等级标准》一级字表里没有逐字核对",
    "繁体字家庭需要先确定目标字形；本包只有简体"
  ],
  "reviewEn": [
    "下 in 下午 is judged \"meaning changed\" and in 下车 \"same meaning\"; please confirm this split suits children",
    "饭 in 饭店 is judged to keep its meaning",
    "手 in 手机 is judged to keep its meaning",
    "卡 in 卡车 is used as a look-alike for 下",
    "Browser speech of single characters may be wrong (cards speak whole words; typed sentences are spoken character by character), e.g. 了",
    "Whether 雨, 饭, 吃 etc. are all on the level-1 list of the standard was not checked character by character",
    "Families using traditional characters need to choose the target script first; this pack is simplified only"
  ]
};

KT_DATA["oral-to-print-en"] = {
  "id": "oral-to-print-en", "lang": "en", "speech": "en-US",
  "title": "会说的词，认出来（英语）", "titleEn": "From words you can say to words you can read",
  "subtitle": "先说一句自己会说的话，看它变成字母拼的词；再在新的短语里把这些词认出来；最后读给家人听。有些常用词不能按字母猜读音。", "subtitleEn": "Say something you can already say and watch it become written words; then find those words in new phrases; then read to someone at home. Some common words can't be sounded out letter by letter.",
  "kcs": ["kt:en-orth-cvc-decoding", "kt:en-orth-sight-words"],
  "unitName": {"zh": "词", "en": "word"},
  "cards": [
    {"id": "cat", "pic": "🐱", "words": ["I", "have", "a", "cat."], "learn": ["cat"], "kc": "kt:en-orth-cvc-decoding"},
    {"id": "dog", "pic": "🐶", "words": ["The", "dog", "is", "big."], "learn": ["the", "dog", "big"], "kc": "kt:en-orth-cvc-decoding"},
    {"id": "apple", "pic": "🍎", "words": ["I", "want", "an", "apple."], "learn": ["want", "apple"]},
    {"id": "sun", "pic": "☀️", "words": ["Look", "at", "the", "sun!"], "learn": ["look", "sun"], "kc": "kt:en-orth-cvc-decoding"},
    {"id": "play", "pic": "⚽", "words": ["Come", "and", "play!"], "learn": ["come", "play"], "kc": "kt:en-orth-sight-words"},
    {"id": "said", "pic": "🙋", "words": ["Mum", "said", "yes."], "learn": ["said", "yes"], "kc": "kt:en-orth-sight-words"},
    {"id": "ball", "pic": "🔴", "words": ["I", "have", "one", "red", "ball."], "learn": ["one", "red"], "kc": "kt:en-orth-sight-words"},
    {"id": "fun", "pic": "🎉", "words": ["It", "was", "fun!"], "learn": ["was"], "kc": "kt:en-orth-sight-words"},
    {"id": "like", "pic": "🍦", "words": ["I", "like", "ice", "cream."], "learn": ["like"]}
  ],
  "units": {
    "cat": {"say": "cat", "card": "cat"}, "the": {"say": "the", "card": "dog"}, "dog": {"say": "dog", "card": "dog"}, "big": {"say": "big", "card": "dog"},
    "want": {"say": "want", "card": "apple"}, "apple": {"say": "apple", "card": "apple"}, "look": {"say": "look", "card": "sun"}, "sun": {"say": "sun", "card": "sun"},
    "come": {"say": "come", "card": "play"}, "play": {"say": "play", "card": "play"}, "said": {"say": "said", "card": "said"}, "yes": {"say": "yes", "card": "said"},
    "one": {"say": "one", "card": "ball"}, "red": {"say": "red", "card": "ball"}, "was": {"say": "was", "card": "fun"}, "like": {"say": "like", "card": "like"}
  },
  "find": [
    {"id": "cat", "u": "cat", "cue": "cat", "cards": [{"t": "my cat sat", "has": true}, {"t": "a cap"}, {"t": "act"}], "about": "my cat sat", "ans": "same",
     "why": {"zh": "my cat sat 里的 cat 就是你的猫。act 用的是同样的字母，顺序不一样。", "en": "cat in my cat sat is your cat. act has the same letters in a different order."}, "kc": "kt:en-orth-cvc-decoding"},
    {"id": "dog", "u": "dog", "cue": "dog", "cards": [{"t": "the dog ran", "has": true}, {"t": "dig a hole"}, {"t": "go on"}], "about": "the dog ran", "ans": "same",
     "why": {"zh": "还是那只狗。dig 的第一个字母是 d，中间是 i。", "en": "Still a dog. dig starts with d too but has i in the middle."}, "kc": "kt:en-orth-cvc-decoding"},
    {"id": "big0", "u": "big", "cue": "big", "cards": [{"t": "dig in"}, {"t": "a bag"}, {"t": "a pig"}], "about": "dig in", "ans": "look",
     "why": {"zh": "这三张里都没有 big。dig 的 d 是反过来的 b，是另一个词。", "en": "None of these has big. The d in dig is b turned round; it is another word."}, "kc": "kt:en-orth-cvc-decoding"},
    {"id": "big1", "u": "big", "cue": "big", "cards": [{"t": "a big hat", "has": true}, {"t": "a bag"}, {"t": "dig"}], "about": "a big hat", "ans": "same",
     "why": {"zh": "a big hat 就是一顶大帽子，big 的意思没变。", "en": "a big hat is a large hat; big means the same."}, "kc": "kt:en-orth-cvc-decoding"},
    {"id": "was0", "u": "was", "cue": "was", "cards": [{"t": "I saw it"}, {"t": "a wasp"}, {"t": "we sat"}], "about": "I saw it", "ans": "look",
     "why": {"zh": "这三张里都没有 was 这个词。saw 是 was 倒过来写；wasp 里有 w-a-s 三个字母，可它是“黄蜂”。", "en": "None of these has the word was. saw is was backwards; wasp has the letters w-a-s, but it is a wasp."}, "kc": "kt:en-orth-sight-words"},
    {"id": "was1", "u": "was", "cue": "was", "cards": [{"t": "it was hot", "has": true}, {"t": "I saw it"}, {"t": "wash"}], "about": "it was hot", "ans": "same",
     "why": {"zh": "it was hot 里的 was 和 it was fun 里的一样。wash 只是开头的字母一样。", "en": "was in it was hot is the same as in it was fun. wash only starts with the same letters."}, "kc": "kt:en-orth-sight-words"},
    {"id": "the", "u": "the", "cue": "the", "cards": [{"t": "the sun", "has": true}, {"t": "they ran"}, {"t": "then"}], "about": "the sun", "ans": "same",
     "why": {"zh": "the sun 里是 the。they 和 then 开头一样，后面多了字母，是别的词。", "en": "the sun has the. they and then start the same but have more letters; they are other words."}, "kc": "kt:en-orth-sight-words"},
    {"id": "look", "u": "look", "cue": "look", "cards": [{"t": "look at me", "has": true}, {"t": "a book"}, {"t": "took"}], "about": "look at me", "ans": "same",
     "why": {"zh": "look at me 的 look 还是“看”。book 和 took 只是后面一样。", "en": "look in look at me still means look. book and took only share the ending."}},
    {"id": "play1", "u": "play", "cue": "play", "cards": [{"t": "a play at school", "has": true}, {"t": "a plate"}, {"t": "pay"}], "about": "a play at school", "ans": "shift",
     "why": {"zh": "同一个词 play，意思变了：在这里是学校里演的一出戏，不是“玩”。", "en": "The same word play with a new meaning: here it is a show at school, not having fun."}},
    {"id": "play2", "u": "play", "cue": "play", "cards": [{"t": "play with me", "has": true}, {"t": "plan"}, {"t": "clay"}], "about": "play with me", "ans": "same",
     "why": {"zh": "play with me 的 play 还是“玩”。", "en": "play in play with me still means have fun."}},
    {"id": "come", "u": "come", "cue": "come", "cards": [{"t": "come here", "has": true}, {"t": "a comb"}, {"t": "some"}], "about": "come here", "ans": "same",
     "why": {"zh": "come here 的 come 还是“过来”。some 和 come 后面一样，读音也押韵，但是另一个词。", "en": "come in come here still means come. some ends the same and rhymes, but it is another word."}, "kc": "kt:en-orth-sight-words"},
    {"id": "one", "u": "one", "cue": "one", "cards": [{"t": "one more", "has": true}, {"t": "on"}, {"t": "done"}], "about": "one more", "ans": "same",
     "why": {"zh": "one more 里是 one（一个）。done 里也有 o-n-e，可它是另一个词。", "en": "one more has one. done also contains o-n-e, but it is another word."}, "kc": "kt:en-orth-sight-words"},
    {"id": "said", "u": "said", "cue": "said", "cards": [{"t": "she said no", "has": true}, {"t": "a sail"}, {"t": "sad"}], "about": "she said no", "ans": "same",
     "why": {"zh": "she said no 的 said 还是“说了”。", "en": "said in she said no still means said."}, "kc": "kt:en-orth-sight-words"},
    {"id": "like1", "u": "like", "cue": "like", "cards": [{"t": "a hat like mine", "has": true}, {"t": "a lake"}, {"t": "a bike"}], "about": "a hat like mine", "ans": "shift",
     "why": {"zh": "同一个词 like，意思变了：在这里是“像”，不是“喜欢”。", "en": "The same word like with a new meaning: here it means similar to, not enjoy."}},
    {"id": "like2", "u": "like", "cue": "like", "cards": [{"t": "I like it", "has": true}, {"t": "lick"}, {"t": "a kite"}], "about": "I like it", "ans": "same",
     "why": {"zh": "I like it 的 like 还是“喜欢”。", "en": "like in I like it still means enjoy."}},
    {"id": "apple", "u": "apple", "cue": "apple", "cards": [{"t": "apple pie", "has": true}, {"t": "a pale"}, {"t": "apply"}], "about": "apple pie", "ans": "same",
     "why": {"zh": "苹果派里还是苹果。apply 开头一样，是另一个词。", "en": "apple pie still has apples in it. apply starts the same but is another word."}},
    {"id": "sun0", "u": "sun", "cue": "sun", "cards": [{"t": "my son"}, {"t": "a bun"}, {"t": "us"}], "about": "my son", "ans": "look",
     "why": {"zh": "这三张里都没有 sun。son（儿子）读起来和 sun 一样，写法不一样，是另一个词。", "en": "None of these has sun. son sounds the same as sun but is spelled differently: another word."}, "kc": "kt:en-orth-cvc-decoding"},
    {"id": "want", "u": "want", "cue": "want", "cards": [{"t": "I want two", "has": true}, {"t": "went"}, {"t": "ant"}], "about": "I want two", "ans": "same",
     "why": {"zh": "I want two 的 want 还是“想要”。went 只差一个字母。", "en": "want in I want two still means want. went differs by one letter."}},
    {"id": "red", "u": "red", "cue": "red", "cards": [{"t": "a red bus", "has": true}, {"t": "bed"}, {"t": "rod"}], "about": "a red bus", "ans": "same",
     "why": {"zh": "a red bus 的 red 还是红色。", "en": "red in a red bus is still the colour."}, "kc": "kt:en-orth-cvc-decoding"},
    {"id": "yes", "u": "yes", "cue": "yes", "cards": [{"t": "yes please", "has": true}, {"t": "eyes"}, {"t": "yet"}], "about": "yes please", "ans": "same",
     "why": {"zh": "yes please 里是 yes。eyes（眼睛）里也有 y-e-s，可它是另一个词。", "en": "yes please has yes. eyes also contains y-e-s, but it is another word."}, "kc": "kt:en-orth-cvc-decoding"}
  ],
  "read": [
    {"id": "r1", "s": "The dog was big.", "kc": "kt:en-orth-sight-words"},
    {"id": "r2", "s": "Look at the red sun!", "kc": "kt:en-orth-cvc-decoding"},
    {"id": "r3", "s": "Come and look!", "kc": "kt:en-orth-sight-words"},
    {"id": "r4", "s": "Mum said one apple.", "kc": "kt:en-orth-sight-words"},
    {"id": "r5", "s": "I want to play.", "kc": "kt:en-orth-sight-words"},
    {"id": "r6", "s": "My cat was fun.", "kc": "kt:en-orth-cvc-decoding"}
  ],
  "trap": [
    {"id": "said", "s": "Mum ＿ yes.", "say": "Mum said yes.", "opts": ["said", "sed", "sayd"], "ok": "said", "why": {"zh": "said 读起来像 sed，可写作 said：不能按字母猜。", "en": "said sounds like sed but is spelled said: you can't sound it out."}, "kc": "kt:en-orth-sight-words"},
    {"id": "one", "s": "I have ＿ dog.", "say": "I have one dog.", "opts": ["one", "won"], "ok": "one", "why": {"zh": "one 和 won 读音一样。“一个”写 one。", "en": "one and won sound the same. The number is one."}, "kc": "kt:en-orth-sight-words"},
    {"id": "come", "s": "＿ here!", "say": "Come here!", "opts": ["Come", "Kom", "Kum"], "ok": "Come", "why": {"zh": "come 的 o 读得像 u，结尾还有一个不发音的 e。", "en": "The o in come sounds like u, and there is a silent e at the end."}, "kc": "kt:en-orth-sight-words"},
    {"id": "there", "s": "Put it over ＿.", "say": "Put it over there.", "opts": ["there", "their"], "ok": "there", "why": {"zh": "there 和 their 读音一样。说地方写 there。", "en": "there and their sound the same. For a place, write there."}, "kc": "kt:en-orth-sight-words"},
    {"id": "they", "s": "＿ are my friends.", "say": "They are my friends.", "opts": ["They", "The"], "ok": "They", "why": {"zh": "they 比 the 多一个 y，是“他们”。", "en": "they has one more letter than the and means those people."}, "kc": "kt:en-orth-sight-words"},
    {"id": "saw", "s": "I ＿ a bird.", "say": "I saw a bird.", "opts": ["saw", "was"], "ok": "saw", "why": {"zh": "saw 和 was 字母一样、顺序相反。“看见了”是 saw。", "en": "saw and was have the same letters in reverse order. Saw a bird is saw."}, "kc": "kt:en-orth-sight-words"},
    {"id": "on", "s": "Is the light ＿?", "say": "Is the light on?", "opts": ["on", "no"], "ok": "on", "why": {"zh": "on 和 no 是同样的两个字母，顺序相反。", "en": "on and no are the same two letters in reverse order."}, "kc": "kt:en-orth-sight-words"},
    {"id": "too", "s": "Can I come ＿?", "say": "Can I come too?", "opts": ["too", "two"], "ok": "too", "why": {"zh": "too 和 two 读音一样。“也”写 too，“二”写 two。", "en": "too and two sound the same. Also is too; the number is two."}, "kc": "kt:en-orth-sight-words"},
    {"id": "gonna", "s": "(a note to the teacher) I am ＿ be late.", "say": "I'm gonna be late.", "opts": ["going to", "gonna"], "ok": "going to", "why": {"zh": "说话时常说 gonna，写给老师的便条里写 going to。", "en": "People often say gonna, but a note to a teacher says going to."}, "kc": "kt:en-orth-sight-words"},
    {"id": "wanna", "s": "(a card to Grandma) I ＿ see you soon.", "say": "I wanna see you soon.", "opts": ["want to", "wanna"], "ok": "want to", "why": {"zh": "说话时常说 wanna，写下来写 want to。", "en": "People often say wanna; written down it is want to."}, "kc": "kt:en-orth-sight-words"}
  ],
  "review": [
    "play（一出戏）和 like（像）判为“同一个词，意思变了”，请确认对低龄儿童合适",
    "want、apple、look、play、like 不是 CVC 也不是不规则认读词，这些题没有绑到知识点",
    "gonna、wanna 的语音合成可能读成别的样子，请试听",
    "emoji 🙋（Mum said yes）和 🔴（球）只是近似"
  ],
  "reviewEn": [
    "play (a show) and like (similar to) are judged \"same word, new meaning\"; please confirm this suits young children",
    "want, apple, look, play and like are neither CVC nor irregular sight words, so these items are not bound to a KC",
    "Browser speech may say gonna and wanna oddly; please listen",
    "The emoji 🙋 (Mum said yes) and 🔴 (ball) are rough pictures"
  ]
};

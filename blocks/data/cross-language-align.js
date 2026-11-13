/* Data packs for blocks/cross-language-align.html (prim:cross-language-align): cross-language-align-en, -ja, -zh.
 * All source texts are original and fictional (no real organisations, people, addresses or numbers).
 *
 * Pack format
 *   id, lang, title/titleEn, subtitle/subtitleEn, kcs[]
 *   opinion  { "<target lang>": ["marker", ...] }  phrases that add the relayer's own view (我觉得, I think …);
 *            a relay containing one fails as "added an opinion". Matching is lower-case substring only.
 *   texts [{
 *     id, kc, title{zh,en}, genre{zh,en}, src "en|ja|zh", tgt "zh|en" (language of the translation / relay)
 *     chunks [{id, s (source chunk), role? time|num|neg|cond|name|req|polite, key? (true = must survive any relay),
 *              opts [{t, draft? (the word-for-word draft placed first), ok? (exactly one per chunk), err{zh,en}? (why it is wrong)}]}]
 *            For names, numbers and quoted words the word-for-word draft IS the right answer (reverse half).
 *     order  [chunk ids in the order they come in natural target-language text]
 *     label  {by{zh,en} (whose version, for which listener), rows [{c (chunk id or null for an addition), t (their text,
 *             "" when dropped), ans [accepted: same | rephrase | add | drop | dropbad | extra], why{zh,en}}]}
 *            add = made implicit information explicit (must be grounded in the source); extra = content or opinion not in the source.
 *     match  {chunkId: [[alt, alt], [alt]]}  deterministic check that a relay keeps the chunk: every inner list must
 *            have one alternative present (lower-case substring, spaces and full-width digits normalised)
 *     listeners [{id, name{zh,en}, need{zh,en}, keys [chunk ids that must be covered for this listener], ref (a sample relay)}]
 *   }]
 *   review / reviewEn
 */
KT_DATA["cross-language-align-en"] = {
  "id": "cross-language-align-en", "lang": "en",
  "title": "按意义块对齐与转述（英语）", "titleEn": "Align by meaning and relay (English)",
  "subtitle": "把英文通知或口信按意义块对齐成自然的中文，标出哪里换了说法、补了、删了，再讲给一位具体的听者。数字、期限、否定和条件一个都不能丢。", "subtitleEn": "Align an English notice or message chunk by chunk with natural Chinese, mark what was rephrased, added or dropped, then pass it on to a named listener. No number, deadline, negative or condition may go missing.",
  "kcs": ["kt:en-skill-relay-information"],
  "opinion": {
    "zh": ["我觉得", "我认为", "我猜", "估计", "看来", "依我看", "我看他", "说实话", "应该会", "肯定会", "可以晚点"],
    "en": ["i think", "i guess", "i believe", "probably", "in my opinion", "i reckon", "i feel", "maybe", "it seems"]
  },
  "texts": [
    {"id": "photo", "kc": "kt:en-skill-relay-information",
     "title": {"zh": "摄影课改时间", "en": "The photography class moves"}, "genre": {"zh": "课程邮件（虚构）", "en": "A course email (fictional)"},
     "src": "en", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "Hi all,", "role": "polite",
        "opts": [{"t": "嗨所有人，", "draft": true, "err": {"zh": "逐词照搬，中文不这么打招呼。", "en": "Word for word; Chinese doesn't greet like this."}}, {"t": "大家好，", "ok": true}, {"t": "嗨，凯特，", "err": {"zh": "打招呼的对象弄错了：是写给大家的。", "en": "Wrong person: the email is to everyone."}}]},
       {"id": "c2", "s": "Please note that",
        "opts": [{"t": "请注意那个", "draft": true, "err": {"zh": "that 在这里只是引出后面的内容，不是“那个”。", "en": "that only introduces what follows; it is not 那个 (that one)."}}, {"t": "请注意：", "ok": true}, {"t": "请记笔记：", "err": {"zh": "note 在这里是“留意”，不是记笔记。", "en": "note here means pay attention, not take notes."}}]},
       {"id": "c3", "s": "tomorrow's photography class",
        "opts": [{"t": "明天的摄影课", "draft": true, "ok": true}, {"t": "今天的摄影课", "err": {"zh": "日期变了。", "en": "The day changed."}}, {"t": "明天的美术课", "err": {"zh": "课程变了。", "en": "The class changed."}}]},
       {"id": "c4", "s": "has moved to Room 12", "role": "num", "key": true,
        "opts": [{"t": "已经移动到了房间12", "draft": true, "err": {"zh": "逐词直译：课不会“移动”，教室也不说“房间12”。", "en": "Word for word: a class doesn't 移动 (physically move), and a classroom isn't 房间12."}}, {"t": "改到 12 号教室", "ok": true}, {"t": "改到 2 号教室", "err": {"zh": "数字变了。", "en": "The number changed."}}]},
       {"id": "c5", "s": "and will start at 10 a.m. instead of 9.", "role": "time", "key": true,
        "opts": [{"t": "并且将在上午10点开始而不是9点。", "draft": true, "err": {"zh": "意思没错，但“将在……而不是……”是英语句式，中文先说变化更自然。", "en": "The meaning is right, but 将在……而不是…… copies the English pattern; Chinese says the change directly."}}, {"t": "上课时间从上午九点改成十点。", "ok": true}, {"t": "上午九点开始，不是十点。", "err": {"zh": "新旧时间说反了。", "en": "The old and new times are swapped."}}]},
       {"id": "c6", "s": "Don't forget to bring your camera,", "role": "req", "key": true,
        "opts": [{"t": "别忘了带相机，", "draft": true, "ok": true}, {"t": "可以带相机，", "err": {"zh": "“别忘了”是一定要带，不是“可以带”。", "en": "Don't forget means you must bring it, not that you may."}}, {"t": "别忘了带手机，", "err": {"zh": "东西换了。", "en": "The item changed."}}]},
       {"id": "c7", "s": "but you don't need to bring the tripod.", "role": "neg", "key": true,
        "opts": [{"t": "但是你不需要带三脚架。", "draft": true, "ok": true}, {"t": "还要带上三脚架。", "err": {"zh": "否定丢了：三脚架是不用带。", "en": "The negative is lost: the tripod is not needed."}}, {"t": "三脚架会借给你。", "err": {"zh": "加了原文没有的信息。", "en": "Adds something the email doesn't say."}}]},
       {"id": "c8", "s": "Thanks, Kate", "role": "name",
        "opts": [{"t": "谢谢，凯特", "draft": true, "ok": true}, {"t": "谢谢，凯蒂老师", "err": {"zh": "名字和身份都改了。", "en": "The name and title were changed."}}, {"t": "谢谢大家的配合", "err": {"zh": "署名丢了。", "en": "The signature is lost."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"],
     "label": {"by": {"zh": "小明把邮件讲给不懂英语的妈妈听", "en": "Xiaoming tells his mum, who reads no English, what the email says"},
       "rows": [
         {"c": null, "t": "这是摄影课老师凯特发的邮件：", "ans": ["add"], "why": {"zh": "邮件结尾署名 Kate：说明是谁发的，是把原文里有的信息说明白。", "en": "The email is signed Kate: saying who sent it makes existing information explicit."}},
         {"c": "c1", "t": "", "ans": ["drop"], "why": {"zh": "群发邮件的招呼，对妈妈没有用，可以删。", "en": "The group greeting is no use to Mum; fine to drop."}},
         {"c": "c3", "t": "明天的摄影课", "ans": ["same"], "why": {"zh": "一一对应，而且自然。", "en": "One to one, and natural."}},
         {"c": "c4", "t": "换到了 12 号教室，", "ans": ["rephrase", "same"], "why": {"zh": "“has moved to” 换成了中文习惯的说法，数字保住了。", "en": "has moved to becomes a natural Chinese phrase; the number is kept."}},
         {"c": "c5", "t": "上课时间从九点推迟到十点。", "ans": ["rephrase"], "why": {"zh": "“instead of” 的句式换成了“从……推迟到……”。", "en": "The instead of pattern became 从……推迟到…… (put back from … to …)."}},
         {"c": "c6", "t": "", "ans": ["dropbad"], "why": {"zh": "带相机是一个要求，删了妈妈就不知道要提醒他。", "en": "Bringing the camera is a request; without it Mum won't know to remind him."}},
         {"c": "c7", "t": "三脚架不用带。", "ans": ["rephrase"], "why": {"zh": "语序换了（宾语提前），否定保住了。", "en": "Word order changed (object first); the negative is kept."}},
         {"c": null, "t": "所以我明天可以晚点起床。", "ans": ["extra"], "why": {"zh": "这是小明自己的打算，邮件里没有。", "en": "This is Xiaoming's own plan; the email doesn't say it."}},
         {"c": "c8", "t": "", "ans": ["drop"], "why": {"zh": "署名已经在开头说明了，这里删去是去掉重复。", "en": "The sender was already named at the start, so dropping it here removes repetition."}}
       ]},
     "match": {
       "c4": [["12"]],
       "c5": [["10", "十点", "十时"]],
       "c6": [["相机", "照相机"]],
       "c7": [["三脚架", "脚架"], ["不用", "不需要", "不必", "别带", "用不着", "不要带"]]
     },
     "listeners": [
       {"id": "mum", "name": {"zh": "不懂英语的妈妈", "en": "Mum, who reads no English"}, "need": {"zh": "说简单的中文口语，先说变了什么。", "en": "Plain spoken Chinese; say what changed first."}, "keys": ["c4", "c5", "c6", "c7"],
        "ref": "妈，明天的摄影课换到 12 号教室了，从九点改成十点上课。要带相机，三脚架不用带。"},
       {"id": "friend", "name": {"zh": "赶时间的同学", "en": "A classmate in a hurry"}, "need": {"zh": "一两句话说完。", "en": "One or two sentences."}, "keys": ["c4", "c5", "c6", "c7"],
        "ref": "明天摄影课改 12 号教室，十点开始；带相机，不用带三脚架。"}
     ]},
    {"id": "meeting", "kc": "kt:en-skill-relay-information",
     "title": {"zh": "经理的口信", "en": "A message from the manager"}, "genre": {"zh": "中文口信转给英语同事（虚构）", "en": "A Chinese message passed on to an English-speaking colleague (fictional)"},
     "src": "zh", "tgt": "en",
     "chunks": [
       {"id": "c1", "s": "王经理说：", "role": "name",
        "opts": [{"t": "Wang manager said:", "draft": true, "err": {"zh": "语序照搬中文，英语说 Mr Wang, the manager。", "en": "Chinese word order; English says Mr Wang, the manager."}}, {"t": "Mr Wang, the manager, says", "ok": true}, {"t": "Manager Li says", "err": {"zh": "人名变了。", "en": "The name changed."}}]},
       {"id": "c2", "s": "明天的会议取消了，", "role": "neg", "key": true,
        "opts": [{"t": "tomorrow's meeting cancelled,", "draft": true, "err": {"zh": "少了动词：英语要说 has been cancelled。", "en": "No verb: English needs has been cancelled."}}, {"t": "tomorrow's meeting has been cancelled", "ok": true}, {"t": "today's meeting has been cancelled", "err": {"zh": "日期变了。", "en": "The day changed."}}]},
       {"id": "c3", "s": "改到下周一下午三点。", "role": "time", "key": true,
        "opts": [{"t": "change to next week one afternoon three o'clock.", "draft": true, "err": {"zh": "逐字照搬：下周一不是 next week one。", "en": "Character by character: 下周一 is not next week one."}}, {"t": "and moved to 3 p.m. next Monday.", "ok": true}, {"t": "and moved to 3 p.m. this Monday.", "err": {"zh": "“下周一”变成了“这周一”。", "en": "Next Monday became this Monday."}}]},
       {"id": "c4", "s": "地点不变，还是二楼会议室。",
        "opts": [{"t": "Place not change, still second floor meeting room.", "draft": true, "err": {"zh": "缺主语和动词，是中文句式。", "en": "No subject or verb: a Chinese sentence pattern."}}, {"t": "It's still in the second-floor meeting room.", "ok": true}, {"t": "It will be in a different room on the second floor.", "err": {"zh": "原文说地点不变。", "en": "The original says the room doesn't change."}}]},
       {"id": "c5", "s": "如果你不能参加，", "role": "cond", "key": true,
        "opts": [{"t": "If you can't attend,", "draft": true, "ok": true}, {"t": "If you can attend,", "err": {"zh": "否定丢了，条件反了。", "en": "The negative is lost; the condition is reversed."}}, {"t": "If you want to attend,", "err": {"zh": "条件变了。", "en": "The condition changed."}}]},
       {"id": "c6", "s": "请在今天下班前告诉他。", "role": "time", "key": true,
        "opts": [{"t": "please in today off work before tell him.", "draft": true, "err": {"zh": "照搬中文语序，英语读不通。", "en": "Chinese word order; it isn't English."}}, {"t": "please let him know before you leave work today.", "ok": true}, {"t": "please let him know by tomorrow.", "err": {"zh": "期限变了。", "en": "The deadline changed."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5", "c6"],
     "label": {"by": {"zh": "同事 Lin 把口信写给英语母语的同事", "en": "Lin passes the message on to an English-speaking colleague"},
       "rows": [
         {"c": "c1", "t": "Mr Wang, the manager, says", "ans": ["rephrase"], "why": {"zh": "人名和职务按英语顺序重排。", "en": "Name and job title reordered for English."}},
         {"c": "c2", "t": "tomorrow's meeting is off", "ans": ["rephrase"], "why": {"zh": "“取消了”换成口语 is off，意思不变。", "en": "取消了 became the informal is off; same meaning."}},
         {"c": "c3", "t": "and has been moved to 3 p.m. next Monday.", "ans": ["same", "rephrase"], "why": {"zh": "时间和日期都在，基本一一对应。", "en": "Day and time both kept; close to one to one."}},
         {"c": "c4", "t": "Same room as before.", "ans": ["rephrase"], "why": {"zh": "“地点不变”换成了更短的说法。", "en": "地点不变 became a shorter phrase."}},
         {"c": "c5", "t": "", "ans": ["dropbad"], "why": {"zh": "条件删了，变成每个人都要去告诉他。", "en": "Without the condition, it sounds as if everyone must tell him."}},
         {"c": "c6", "t": "Please let him know before you leave today.", "ans": ["rephrase", "same"], "why": {"zh": "“下班前”换成了 before you leave，期限保住了。", "en": "下班前 became before you leave; the deadline is kept."}},
         {"c": null, "t": "I think it's because he's travelling.", "ans": ["extra"], "why": {"zh": "原因是 Lin 自己猜的，口信里没有。", "en": "Lin is guessing the reason; the message doesn't give one."}}
       ]},
     "match": {
       "c2": [["cancel", "is off", "moved", "postpone", "put back", "reschedul"]],
       "c3": [["3", "three"], ["monday"]],
       "c5": [["can't", "cannot", "can not", "not able", "unable", "unless"]],
       "c6": [["today", "tonight", "this evening", "before you leave", "end of the day"]]
     },
     "listeners": [
       {"id": "colleague", "name": {"zh": "赶时间的英语同事", "en": "A busy English-speaking colleague"}, "need": {"zh": "一两句话；用 he says / he said 转述，人称要改。", "en": "One or two sentences; report it (he says / he said) and change the pronouns."}, "keys": ["c2", "c3", "c5", "c6"],
        "ref": "Mr Wang says tomorrow's meeting is cancelled and moved to 3 p.m. next Monday, same room. If you can't make it, let him know before you leave today."},
       {"id": "intern", "name": {"zh": "刚来的英语实习生（要正式一点）", "en": "A new English-speaking intern (more formal)"}, "need": {"zh": "完整、礼貌的句子。", "en": "Complete, polite sentences."}, "keys": ["c2", "c3", "c5", "c6"],
        "ref": "Mr Wang, the manager, has asked me to let you know that tomorrow's meeting has been cancelled. It will now take place at 3 p.m. next Monday in the second-floor meeting room. If you are unable to attend, please tell him before you leave work today."}
     ]},
    {"id": "doctor", "kc": "kt:en-skill-relay-information",
     "title": {"zh": "医生的嘱咐", "en": "What the doctor said"}, "genre": {"zh": "医生的口头嘱咐（虚构）", "en": "A doctor's spoken advice (fictional)"},
     "src": "en", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "The doctor said",
        "opts": [{"t": "那个医生说了", "draft": true, "err": {"zh": "the 不用译成“那个”。", "en": "the doesn't need to become 那个 (that)."}}, {"t": "医生说", "ok": true}, {"t": "护士说", "err": {"zh": "说话的人变了。", "en": "The speaker changed."}}]},
       {"id": "c2", "s": "you have a bad cold, nothing serious.",
        "opts": [{"t": "你有一个坏的感冒，没有什么严重的。", "draft": true, "err": {"zh": "bad cold 不是“坏的感冒”，“有一个”也是逐词。", "en": "bad cold is not 坏的感冒, and 有一个 is word for word."}}, {"t": "你得了重感冒，不过不严重。", "ok": true}, {"t": "你得了重感冒，情况很严重。", "err": {"zh": "原文说不严重。", "en": "The doctor said nothing serious."}}]},
       {"id": "c3", "s": "Take one tablet twice a day,", "role": "num", "key": true,
        "opts": [{"t": "拿一片药两次一天，", "draft": true, "err": {"zh": "take 不是“拿”；“两次一天”是英语语序。", "en": "take is not 拿 here, and 两次一天 is English word order."}}, {"t": "每天吃两次，每次一片，", "ok": true}, {"t": "每天吃一次，每次两片，", "err": {"zh": "次数和片数对调了。", "en": "Times and tablets are swapped."}}]},
       {"id": "c4", "s": "after meals,", "role": "time", "key": true,
        "opts": [{"t": "在饭之后，", "draft": true, "err": {"zh": "能懂，但中文说“饭后”。", "en": "Understandable, but Chinese says 饭后."}}, {"t": "饭后吃，", "ok": true}, {"t": "饭前吃，", "err": {"zh": "饭后变成了饭前。", "en": "After became before."}}]},
       {"id": "c5", "s": "for five days.", "role": "num", "key": true,
        "opts": [{"t": "为五天。", "draft": true, "err": {"zh": "for 不是“为”。", "en": "for here is not 为."}}, {"t": "连吃五天。", "ok": true}, {"t": "吃十五天。", "err": {"zh": "天数变了。", "en": "The number of days changed."}}]},
       {"id": "c6", "s": "Stop taking them only if you get a rash,", "role": "cond", "key": true,
        "opts": [{"t": "停止吃它们只如果你得到皮疹，", "draft": true, "err": {"zh": "逐词照搬，“它们”“得到皮疹”都不是中文的说法。", "en": "Word for word: 它们 and 得到皮疹 aren't how Chinese says it."}}, {"t": "只有起了皮疹才停药，", "ok": true}, {"t": "觉得好了就停药，", "err": {"zh": "停药的条件变了。", "en": "The condition for stopping changed."}}]},
       {"id": "c7", "s": "and call the clinic straight away.", "role": "req", "key": true,
        "opts": [{"t": "并且打电话诊所直接离开。", "draft": true, "err": {"zh": "straight away 是“马上”，不是“直接离开”。", "en": "straight away means at once, not 直接离开 (leave directly)."}}, {"t": "并马上给诊所打电话。", "ok": true}, {"t": "并在下周给诊所打电话。", "err": {"zh": "“马上”变成了“下周”。", "en": "At once became next week."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5", "c6", "c7"],
     "label": {"by": {"zh": "孙子把医生的话讲给奶奶听", "en": "A grandson tells his grandma what the doctor said"},
       "rows": [
         {"c": "c1", "t": "医生说", "ans": ["same"], "why": {"zh": "一一对应。", "en": "One to one."}},
         {"c": "c2", "t": "就是重感冒，不要紧。", "ans": ["rephrase"], "why": {"zh": "换成了奶奶听得惯的口语。", "en": "Rephrased in the everyday words Grandma uses."}},
         {"c": null, "t": "奶奶您别担心。", "ans": ["add"], "why": {"zh": "原文说 nothing serious，“别担心”是把这层意思对奶奶说明白。", "en": "The doctor said nothing serious; 别担心 (don't worry) spells that out for Grandma."}},
         {"c": "c3", "t": "药一天吃两回，一回一片，", "ans": ["rephrase", "same"], "why": {"zh": "数字都在，说法更口语。", "en": "Numbers kept, more colloquial."}},
         {"c": "c4", "t": "", "ans": ["dropbad"], "why": {"zh": "“饭后”是服药条件，不能删。", "en": "After meals is how to take it; it can't go."}},
         {"c": "c5", "t": "吃五天。", "ans": ["same", "rephrase"], "why": {"zh": "天数保住了。", "en": "The number of days is kept."}},
         {"c": "c6", "t": "要是身上起红疹子，就别吃了，", "ans": ["rephrase"], "why": {"zh": "“只有……才”换成了“要是……就”，条件保住了。", "en": "只有……才 became 要是……就; the condition is kept."}},
         {"c": "c7", "t": "", "ans": ["dropbad"], "why": {"zh": "起疹子要马上打电话，这是最关键的一步，不能删。", "en": "Calling at once after a rash is the most important step; it can't go."}}
       ]},
     "match": {
       "c3": [["两次", "2次", "两回", "2回", "二次"], ["一片", "1片"]],
       "c4": [["饭后", "吃完饭", "吃饭后", "饭以后", "吃过饭"]],
       "c5": [["五天", "5天"]],
       "c6": [["疹"]],
       "c7": [["电话"], ["马上", "立刻", "立即", "赶紧", "赶快"]]
     },
     "listeners": [
       {"id": "grandma", "name": {"zh": "担心的奶奶", "en": "A worried grandma"}, "need": {"zh": "简单的口语，先让她放心，再说怎么吃药。", "en": "Simple speech; reassure her first, then explain the medicine."}, "keys": ["c3", "c4", "c5", "c6", "c7"],
        "ref": "奶奶，医生说就是重感冒，不要紧。药一天吃两回，一回一片，饭后吃，吃五天。要是起了疹子就别吃了，马上给诊所打电话。"},
       {"id": "dad", "name": {"zh": "要了解细节的爸爸", "en": "Dad, who wants the details"}, "need": {"zh": "完整、准确，一条一条说清楚。", "en": "Complete and exact, point by point."}, "keys": ["c3", "c4", "c5", "c6", "c7"],
        "ref": "医生说是重感冒，不严重。药每天吃两次，每次一片，饭后吃，连吃五天。只有起了皮疹才停药，并且要马上给诊所打电话。"}
     ]}
  ],
  "review": [
    "c5 “并且将在上午10点开始而不是9点”算作逐词稿、不自然；有的老师可能接受",
    "relay 的关键词表（match）只认列出的说法，例如“10 点”“十点”；其他合理说法会被判漏掉，请补充",
    "医生一题故意写成 bad cold 而不是具体病名，避免医学用词争议"
  ],
  "reviewEn": [
    "c5 并且将在上午10点开始而不是9点 is treated as an unnatural word-for-word draft; some teachers may accept it",
    "The relay keyword lists (match) only accept the listed forms (e.g. 10 点, 十点); other reasonable wordings will count as missing, please add them",
    "The doctor text says bad cold rather than a medical term on purpose, to avoid disputes over medical wording"
  ]
};

KT_DATA["cross-language-align-zh"] = {
  "id": "cross-language-align-zh", "lang": "zh",
  "title": "按意群翻译成中文", "titleEn": "Translating into Chinese by meaning chunks",
  "subtitle": "把英文、日文的短文按意群对齐成自然的中文：被动句、代词、“当……的时候”、日语汉字词都别照搬；人名、数字、条件一个都不能改。再为指定读者转述。", "subtitleEn": "Align short English and Japanese texts with natural Chinese chunk by chunk: don't copy passives, pronouns, 当……的时候 or Japanese kanji words; don't change any name, number or condition. Then relay it for a named reader.",
  "kcs": ["kt:zh-skill-translate-mid", "kt:zh-skill-translate-advanced"],
  "opinion": {"zh": ["我觉得", "我认为", "我猜", "估计", "看来", "依我看", "说实话", "应该会", "肯定会", "很划算", "真是一位", "很勤奋"]},
  "texts": [
    {"id": "book", "kc": "kt:zh-skill-translate-mid",
     "title": {"zh": "一本书的介绍", "en": "About a book"}, "genre": {"zh": "英文书讯（虚构）", "en": "An English book note (fictional)"},
     "src": "en", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "This book was written by a young writer from Yunnan.", "role": "name", "key": true,
        "opts": [{"t": "这本书被一位来自云南的年轻作家写了。", "draft": true, "err": {"zh": "英语被动句不能都换成“被”：说“是……写的”。", "en": "Not every English passive becomes 被: say 是……写的."}}, {"t": "这本书是一位云南的年轻作家写的。", "ok": true}, {"t": "这本书是一位年轻作家写的。", "err": {"zh": "“云南”丢了。地名要保留。", "en": "Yunnan is lost. Place names must stay."}}]},
       {"id": "c2", "s": "When she got home from work,",
        "opts": [{"t": "当她下班回到她的家的时候，", "draft": true, "err": {"zh": "“当……的时候”和两个“她”都是照搬英语。", "en": "当……的时候 and the two 她 copy the English."}}, {"t": "每天晚上下班回家后，", "ok": true}, {"t": "每天早上上班以前，", "err": {"zh": "时间变了。", "en": "The time changed."}}]},
       {"id": "c3", "s": "she wrote for two hours every night.", "role": "num", "key": true,
        "opts": [{"t": "她写了两个小时每天晚上。", "draft": true, "err": {"zh": "时间词放在句尾是英语语序；“每天晚上”在中文里要放前面。", "en": "A time phrase at the end is English order; in Chinese 每天晚上 goes first."}}, {"t": "她都要写两个小时。", "ok": true}, {"t": "她都要写两本书。", "err": {"zh": "内容变了。", "en": "The content changed."}}]},
       {"id": "c4", "s": "It took her three years to finish it.", "role": "num", "key": true,
        "opts": [{"t": "它花了她三年去完成它。", "draft": true, "err": {"zh": "两个“它”和“去完成”都是照搬。", "en": "The two 它 and 去完成 copy the English."}}, {"t": "这本书她写了三年才写完。", "ok": true}, {"t": "这本书她三天就写完了。", "err": {"zh": "三年变成了三天。", "en": "Three years became three days."}}]},
       {"id": "c5", "s": "It has now been translated into 12 languages.", "role": "num", "key": true,
        "opts": [{"t": "它现在已经被翻译成12种语言了。", "draft": true, "ok": true}, {"t": "现在已经被翻译成 2 种语言。", "err": {"zh": "数字变了。", "en": "The number changed."}}, {"t": "现在已经有 12 个国家的人读过。", "err": {"zh": "说的不是一件事。", "en": "That's a different fact."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5"],
     "label": {"by": {"zh": "同学的译文（给中文书评栏目）", "en": "A classmate's translation (for a Chinese book column)"},
       "rows": [
         {"c": "c1", "t": "这本书是一位云南的年轻作家写的。", "ans": ["rephrase"], "why": {"zh": "被动句换成了“是……的”。", "en": "The passive became 是……的."}},
         {"c": "c2", "t": "每天晚上下班回家后，", "ans": ["rephrase"], "why": {"zh": "去掉“当……的时候”，“每天晚上”提前了。", "en": "当……的时候 removed; 每天晚上 moved forward."}},
         {"c": "c3", "t": "都要写两个小时。", "ans": ["drop", "rephrase"], "why": {"zh": "主语“她”前面已经有了，删去是去掉多余的代词。", "en": "She is already clear, so dropping 她 removes an unneeded pronoun."}},
         {"c": "c4", "t": "", "ans": ["dropbad"], "why": {"zh": "“写了三年”是数字信息，不能删。", "en": "Three years is a number; it can't go."}},
         {"c": "c5", "t": "现在这本书已经有 12 种语言的译本。", "ans": ["rephrase"], "why": {"zh": "被动换成了“有……译本”，数字保住了。", "en": "The passive became 有……译本 (has translations in); the number is kept."}},
         {"c": null, "t": "她真是一位勤奋的作家。", "ans": ["extra"], "why": {"zh": "这是译者的评价，原文没有。", "en": "This is the translator's comment; the original doesn't say it."}}
       ]},
     "match": {
       "c1": [["云南"]],
       "c3": [["两个小时", "两小时", "2小时", "2个小时", "两个钟头"]],
       "c4": [["三年", "3年"]],
       "c5": [["12", "十二"]]
     },
     "listeners": [
       {"id": "column", "name": {"zh": "书评栏目的读者（书面）", "en": "Readers of a book column (written)"}, "need": {"zh": "通顺的书面语。", "en": "Smooth written Chinese."}, "keys": ["c1", "c3", "c4", "c5"],
        "ref": "这本书是一位云南的年轻作家写的。她每天晚上下班回家后都要写两个小时，花了三年才写完。现在这本书已经被翻译成 12 种语言。"},
       {"id": "kid", "name": {"zh": "读小学的表妹（口语）", "en": "A young cousin in primary school (spoken)"}, "need": {"zh": "短句，口语。", "en": "Short spoken sentences."}, "keys": ["c1", "c3", "c4", "c5"],
        "ref": "这本书是云南的一个年轻阿姨写的。她每天下班回家，晚上写两个小时，写了三年才写完。现在有 12 种语言的版本了！"}
     ]},
    {"id": "letter", "kc": "kt:zh-skill-translate-mid",
     "title": {"zh": "山田老师的来信", "en": "A letter from Mr Yamada"}, "genre": {"zh": "日文信（虚构）", "en": "A Japanese letter (fictional)"},
     "src": "ja", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "先週、山田先生から手紙をもらいました。", "role": "name", "key": true,
        "opts": [{"t": "上周，从山田老师收到了手纸。", "draft": true, "err": {"zh": "手紙 是“信”，不是“手纸”（手纸是卫生纸）。", "en": "手紙 is a letter, not 手纸 (toilet paper)."}}, {"t": "上周我收到了山田老师的一封信。", "ok": true}, {"t": "上周我给山田老师写了一封信。", "err": {"zh": "方向反了：是收到，不是写给。", "en": "Direction reversed: received, not sent."}}]},
       {"id": "c2", "s": "先生のお話はいつも勉強になります。",
        "opts": [{"t": "老师的话总是成为勉强。", "draft": true, "err": {"zh": "勉強 不是“勉强”；勉強になる 是“学到东西”。", "en": "勉強 is not 勉强 (reluctant); 勉強になる means you learn something."}}, {"t": "听老师说话，总能学到很多东西。", "ok": true}, {"t": "老师总是让我好好学习。", "err": {"zh": "意思变了。", "en": "The meaning changed."}}]},
       {"id": "c3", "s": "来月、先生が北京に来られるので、", "role": "time", "key": true,
        "opts": [{"t": "下个月，因为老师被来北京，", "draft": true, "err": {"zh": "来られる 在这里是敬语，不是被动。", "en": "来られる here is honorific, not passive."}}, {"t": "下个月老师要来北京，", "ok": true}, {"t": "下个月老师要去上海，", "err": {"zh": "地点变了。", "en": "The place changed."}}]},
       {"id": "c4", "s": "一緒に食事をする予定です。",
        "opts": [{"t": "一起做吃饭的预定。", "draft": true, "err": {"zh": "予定 是“打算”，不是“预定”。", "en": "予定 means plan, not 预定 (book)."}}, {"t": "我们打算一起吃个饭。", "ok": true}, {"t": "我们打算一起去买东西。", "err": {"zh": "活动变了。", "en": "The activity changed."}}]},
       {"id": "c5", "s": "もしご都合がよければ、", "role": "polite", "key": true,
        "opts": [{"t": "如果您的都合好的话，", "draft": true, "err": {"zh": "都合 中文不用；说“方便”。", "en": "都合 isn't Chinese; say 方便."}}, {"t": "如果您方便的话，", "ok": true}, {"t": "不管您方不方便，", "err": {"zh": "礼貌的条件变成了强求。", "en": "A polite condition became a demand."}}]},
       {"id": "c6", "s": "李さんもぜひいらしてください。", "role": "req", "key": true,
        "opts": [{"t": "李先生也务必请来。", "draft": true, "err": {"zh": "语序照搬日语，中文说“也请您一定来”。", "en": "Japanese word order; Chinese says 也请您一定来."}}, {"t": "也请您一定来。", "ok": true}, {"t": "李先生不用来。", "err": {"zh": "邀请变成了不用来。", "en": "The invitation became \"no need to come\"."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5", "c6"],
     "label": {"by": {"zh": "同学把信讲给被邀请的李先生", "en": "A classmate tells Mr Li, who is invited, what the letter says"},
       "rows": [
         {"c": "c1", "t": "上周山田老师给我寄了一封信。", "ans": ["rephrase"], "why": {"zh": "“收到……的信”换成“给我寄了信”，方向没变。", "en": "收到……的信 became 给我寄了信; the direction is the same."}},
         {"c": "c2", "t": "", "ans": ["drop"], "why": {"zh": "这句是对老师的客气话，对李先生不是必要信息。", "en": "A courtesy about the teacher; not needed by Mr Li."}},
         {"c": "c3", "t": "下个月老师要来北京，", "ans": ["same"], "why": {"zh": "一一对应。", "en": "One to one."}},
         {"c": "c4", "t": "我们打算一起吃饭。", "ans": ["same", "rephrase"], "why": {"zh": "意思不变。", "en": "Same meaning."}},
         {"c": "c5", "t": "", "ans": ["dropbad"], "why": {"zh": "“如果您方便”是礼貌缓冲；对被邀请的人删掉，邀请就变成了命令。", "en": "如果您方便 softens the request; dropping it for the guest turns the invitation into an order."}},
         {"c": "c6", "t": "请您一定要来。", "ans": ["rephrase", "same"], "why": {"zh": "意思不变。", "en": "Same meaning."}},
         {"c": null, "t": "山田老师是我大学时的老师。", "ans": ["extra"], "why": {"zh": "信里没有这件事。", "en": "The letter doesn't say this."}}
       ]},
     "match": {
       "c1": [["山田"], ["信"]],
       "c3": [["下个月", "下月"], ["北京"]],
       "c5": [["方便", "有空", "有时间"]],
       "c6": [["来"]]
     },
     "listeners": [
       {"id": "li", "name": {"zh": "被邀请的李先生（要礼貌）", "en": "Mr Li, who is invited (be polite)"}, "need": {"zh": "用“您”，保留客气的说法。", "en": "Use 您 and keep the polite wording."}, "keys": ["c1", "c3", "c5", "c6"],
        "ref": "李先生，上周我收到了山田老师的一封信。老师下个月要来北京，我们打算一起吃个饭。老师说，如果您方便的话，也请您一定来。"},
       {"id": "roommate", "name": {"zh": "同屋（随便聊）", "en": "A roommate (casual)"}, "need": {"zh": "口语，说清楚谁来、什么时候、做什么。", "en": "Casual; say who is coming, when, and what for."}, "keys": ["c1", "c3"],
        "ref": "山田老师上周给我来了封信，说下个月来北京，我们打算一起吃顿饭。"}
     ]},
    {"id": "product", "kc": "kt:zh-skill-translate-advanced",
     "title": {"zh": "设备报价与合同条款", "en": "An equipment quote and a contract clause"}, "genre": {"zh": "英文商务文本（虚构公司）", "en": "An English business text (fictional company)"},
     "src": "en", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "The new model uses 30% less power than the old one.", "role": "num", "key": true,
        "opts": [{"t": "新型号使用30%更少的电比旧的一个。", "draft": true, "err": {"zh": "比较句照搬英语语序。", "en": "The comparison copies English word order."}}, {"t": "新机型比旧机型耗电少三成。", "ok": true}, {"t": "新机型比旧机型耗电少百分之三。", "err": {"zh": "三成是 30%，不是 3%。", "en": "三成 is 30%, not 3%."}}]},
       {"id": "c2", "s": "Each production line costs 2.4 million yuan.", "role": "num", "key": true,
        "opts": [{"t": "每条生产线花费2.4百万元。", "draft": true, "err": {"zh": "中文用“万”计数：2.4 million = 240 万。", "en": "Chinese counts in 万: 2.4 million = 240 万."}}, {"t": "每条生产线售价 240 万元。", "ok": true}, {"t": "每条生产线售价 24 万元。", "err": {"zh": "“万”换算错了。", "en": "The 万 conversion is wrong."}}]},
       {"id": "c3", "s": "Orders placed before 1 March", "role": "time", "key": true,
        "opts": [{"t": "在3月1日之前被下的订单", "draft": true, "err": {"zh": "“被下”是照搬被动。", "en": "被下 copies the passive."}}, {"t": "3 月 1 日前下的订单", "ok": true}, {"t": "3 月 1 日后下的订单", "err": {"zh": "之前变成了之后。", "en": "Before became after."}}]},
       {"id": "c4", "s": "will be delivered within 60 days,", "role": "num", "key": true,
        "opts": [{"t": "将会被交付在60天之内，", "draft": true, "err": {"zh": "被动和语序都照搬英语。", "en": "Passive and word order copy the English."}}, {"t": "将在 60 天内交货，", "ok": true}, {"t": "将在 16 天内交货，", "err": {"zh": "数字变了。", "en": "The number changed."}}]},
       {"id": "c5", "s": "except for orders from overseas.", "role": "cond", "key": true,
        "opts": [{"t": "除了订单从海外。", "draft": true, "err": {"zh": "语序照搬英语。", "en": "English word order."}}, {"t": "海外订单除外。", "ok": true}, {"t": "包括海外订单。", "err": {"zh": "例外变成了包括。", "en": "The exception became an inclusion."}}]},
       {"id": "c6", "s": "This contract is made in duplicate.",
        "opts": [{"t": "这个合同被做成两份。", "draft": true, "err": {"zh": "合同语体要正式，也不用“被”。", "en": "Contracts need formal wording, and no 被."}}, {"t": "本合同一式两份。", "ok": true}, {"t": "本合同一式三份。", "err": {"zh": "份数变了。", "en": "The number of copies changed."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5", "c6"],
     "label": {"by": {"zh": "实习生给客户的译文", "en": "An intern's translation for a client"},
       "rows": [
         {"c": "c1", "t": "新机型比旧机型省电 30%。", "ans": ["rephrase", "same"], "why": {"zh": "“耗电少”换成“省电”，数字保住了。", "en": "耗电少 became 省电; the number is kept."}},
         {"c": "c2", "t": "每条生产线 240 万元。", "ans": ["same", "rephrase"], "why": {"zh": "换算正确。", "en": "Correct conversion."}},
         {"c": null, "t": "这个价格非常划算。", "ans": ["extra"], "why": {"zh": "原文没有评价价格。", "en": "The original doesn't comment on the price."}},
         {"c": "c3", "t": "3 月 1 日前下的订单", "ans": ["same"], "why": {"zh": "一一对应。", "en": "One to one."}},
         {"c": "c4", "t": "60 天内交货。", "ans": ["same", "rephrase"], "why": {"zh": "数字保住了。", "en": "The number is kept."}},
         {"c": "c5", "t": "", "ans": ["dropbad"], "why": {"zh": "“海外订单除外”是例外条件，删了客户会以为海外也 60 天内交货。", "en": "The overseas exception is a condition; without it the client will expect 60 days for overseas orders too."}},
         {"c": "c6", "t": "本合同一式两份。", "ans": ["rephrase"], "why": {"zh": "换成了合同的固定说法。", "en": "The fixed contract phrase."}}
       ]},
     "match": {
       "c1": [["三成", "30%", "百分之三十", "30％"]],
       "c2": [["240万", "二百四十万", "两百四十万"]],
       "c3": [["3月1", "三月一"]],
       "c4": [["60天", "六十天"]],
       "c5": [["海外", "国外", "境外"], ["除外", "不包括", "不在此", "以外", "除了", "不算", "不含"]]
     },
     "listeners": [
       {"id": "client", "name": {"zh": "客户（正式书面）", "en": "A client (formal, written)"}, "need": {"zh": "正式书面语，数字准确。", "en": "Formal written Chinese, exact numbers."}, "keys": ["c1", "c2", "c3", "c4", "c5"],
        "ref": "新机型比旧机型耗电少三成，每条生产线售价 240 万元。3 月 1 日前下的订单将在 60 天内交货，海外订单除外。"},
       {"id": "boss", "name": {"zh": "要快速了解的上司（口头）", "en": "A boss who wants it quickly (spoken)"}, "need": {"zh": "先说数字，越短越好。", "en": "Numbers first, as short as possible."}, "keys": ["c1", "c2", "c3", "c4", "c5"],
        "ref": "新机器省电 30%，一条线 240 万。3 月 1 号前下单，60 天内交货，海外的不算。"}
     ]}
  ],
  "review": [
    "c3（书）“她都要写两个小时”的标注接受“删去冗余”和“换了说法”两种",
    "来られる 的干扰项“被来北京”是故意造的错句",
    "relay 的关键词表只认列出的说法，例如“240万”；“二百四十万元”以外的写法请补充",
    "“我们打算一起吃个饭”在李先生的转述里应由谁来邀请（老师还是写信人），原信未说明，参考转述写成“老师说”"
  ],
  "reviewEn": [
    "c3 (book) 她都要写两个小时 accepts both \"dropped redundancy\" and \"rephrased\"",
    "The 来られる distractor 被来北京 is a deliberately broken sentence",
    "The relay keyword lists only accept listed forms such as 240万; please add other ways of writing it",
    "Who is inviting Mr Li (the teacher or the letter writer) is not stated in the letter; the sample relay says 老师说"
  ]
};

KT_DATA["cross-language-align-ja"] = {
  "id": "cross-language-align-ja", "lang": "ja",
  "title": "日语资料的对齐与转达", "titleEn": "Aligning and passing on Japanese texts",
  "subtitle": "把日语通知和邮件按意义块对齐成自然的中文：同形词（勉強、手紙、検討）别照搬，期限和例外条件别漏，礼貌缓冲看听的人决定删不删。再讲给一位具体的听者。", "subtitleEn": "Align Japanese notices and emails with natural Chinese chunk by chunk: don't copy look-alike words (勉強, 手紙, 検討), don't drop deadlines or exceptions, and keep or drop polite softeners depending on the listener. Then pass it on to a named listener.",
  "kcs": ["kt:ja-skill-mediate-ja"],
  "opinion": {"zh": ["我觉得", "我认为", "我猜", "估计", "看来", "依我看", "说实话", "应该会", "肯定会", "很满意", "会被乌鸦", "很期待"]},
  "texts": [
    {"id": "gomi", "kc": "kt:ja-skill-mediate-ja",
     "title": {"zh": "倒垃圾的通知", "en": "A rubbish collection notice"}, "genre": {"zh": "社区通知（虚构）", "en": "A neighbourhood notice (fictional)"},
     "src": "ja", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "燃えるごみは月曜日と木曜日に出してください。", "role": "time", "key": true,
        "opts": [{"t": "燃烧的垃圾请在星期一和星期四拿出来。", "draft": true, "err": {"zh": "燃えるごみ 是“可燃垃圾”，不是正在燃烧的垃圾。", "en": "燃えるごみ is burnable rubbish, not rubbish that is burning."}}, {"t": "可燃垃圾请在周一和周四扔。", "ok": true}, {"t": "可燃垃圾请在周一和周三扔。", "err": {"zh": "日子变了。", "en": "A day changed."}}]},
       {"id": "c2", "s": "収集日の朝8時までに出すこと。", "role": "time", "key": true,
        "opts": [{"t": "收集日的早上到8点为止拿出去的事。", "draft": true, "err": {"zh": "～こと 是规定，不是“……的事”；までに 是“以前”。", "en": "～こと states a rule, not 的事; までに means by / before."}}, {"t": "收垃圾那天早上 8 点以前拿出去。", "ok": true}, {"t": "收垃圾那天早上 8 点以后拿出去。", "err": {"zh": "以前变成了以后。", "en": "Before became after."}}]},
       {"id": "c3", "s": "ただし、祝日は収集しません。", "role": "cond", "key": true,
        "opts": [{"t": "但是，祝日不收集。", "draft": true, "err": {"zh": "祝日 中文说“节假日”。", "en": "祝日 is 节假日 in Chinese."}}, {"t": "不过节假日不收。", "ok": true}, {"t": "节假日也照常收。", "err": {"zh": "例外条件反了。", "en": "The exception is reversed."}}]},
       {"id": "c4", "s": "前の晩には出さないでください。", "role": "neg", "key": true,
        "opts": [{"t": "前面的晚上请不要拿出来。", "draft": true, "err": {"zh": "前の晩 是“前一天晚上”。", "en": "前の晩 means the night before."}}, {"t": "不要前一天晚上就拿出去。", "ok": true}, {"t": "请前一天晚上拿出去。", "err": {"zh": "否定丢了。", "en": "The negative is lost."}}]},
       {"id": "c5", "s": "ご協力をお願いします。", "role": "polite",
        "opts": [{"t": "请您的协力。", "draft": true, "err": {"zh": "逐词照搬，中文说“谢谢大家配合”。", "en": "Word for word; Chinese says 谢谢大家配合."}}, {"t": "谢谢大家配合。", "ok": true}, {"t": "不配合要罚款。", "err": {"zh": "加了原文没有的内容。", "en": "Adds something the notice doesn't say."}}]},
       {"id": "c6", "s": "みどり町内会", "role": "name",
        "opts": [{"t": "みどり町内会", "draft": true, "ok": true}, {"t": "绿色环保协会", "err": {"zh": "组织名称不能换成别的名字；可以保留原名，后面加说明。", "en": "An organisation's name can't be swapped; keep it and explain if needed."}}, {"t": "市政府", "err": {"zh": "发通知的单位变了。", "en": "The sender changed."}}]}
     ],
     "order": ["c6", "c1", "c2", "c3", "c4", "c5"],
     "label": {"by": {"zh": "留学生把通知讲给刚来日本的妈妈", "en": "A student explains the notice to her mum, who has just arrived in Japan"},
       "rows": [
         {"c": "c6", "t": "这是みどり町内会（社区居民组织）发的通知：", "ans": ["add"], "why": {"zh": "保留了名称，又把“町内会”是什么说明白了。", "en": "The name is kept and what a 町内会 is gets explained."}},
         {"c": "c1", "t": "可燃垃圾周一、周四扔，", "ans": ["same", "rephrase"], "why": {"zh": "日子都在。", "en": "Both days kept."}},
         {"c": "c2", "t": "早上八点以前。", "ans": ["rephrase"], "why": {"zh": "“收集日”省掉了，前面已说明哪两天。", "en": "收集日 left out because the days were just given."}},
         {"c": "c3", "t": "", "ans": ["dropbad"], "why": {"zh": "节假日不收是例外条件，删了妈妈会在节日把垃圾拿出去。", "en": "No collection on holidays is an exception; without it Mum will put rubbish out on a holiday."}},
         {"c": "c4", "t": "别头天晚上就放出去，", "ans": ["rephrase"], "why": {"zh": "口语说法，否定保住了。", "en": "Spoken wording; the negative is kept."}},
         {"c": null, "t": "不然会被乌鸦翻得到处都是。", "ans": ["extra"], "why": {"zh": "原因是自己加的，通知里没有。", "en": "The reason is her own addition; the notice doesn't give it."}},
         {"c": "c5", "t": "", "ans": ["drop"], "why": {"zh": "客套话，对妈妈可以省掉。", "en": "A courtesy line; fine to leave out for Mum."}}
       ]},
     "match": {
       "c1": [["周一", "星期一", "礼拜一"], ["周四", "星期四", "礼拜四"]],
       "c2": [["8点", "八点", "8:00"]],
       "c3": [["节假日", "假日", "节日", "法定假"], ["不收", "不来收", "停收", "没人收", "不收集"]],
       "c4": [["前一天晚上", "前一晚", "头天晚上", "前天晚上", "前一天夜里", "前晚"], ["不要", "别", "不能", "不可以"]]
     },
     "listeners": [
       {"id": "mum", "name": {"zh": "刚来日本的妈妈", "en": "Mum, just arrived in Japan"}, "need": {"zh": "简单口语，按“哪天、几点、什么不行”说。", "en": "Simple speech: which days, what time, what not to do."}, "keys": ["c1", "c2", "c3", "c4"],
        "ref": "妈，可燃垃圾周一和周四扔，早上八点以前拿出去。节假日不收。别头天晚上就放出去。"},
       {"id": "roommate", "name": {"zh": "同住的中国室友（发微信）", "en": "A Chinese flatmate (a text message)"}, "need": {"zh": "一条消息说完。", "en": "One message."}, "keys": ["c1", "c2", "c3", "c4"],
        "ref": "可燃垃圾周一、周四早上 8 点前扔，节假日不收，不能前一天晚上扔。"}
     ]},
    {"id": "mail", "kc": "kt:ja-skill-mediate-ja",
     "title": {"zh": "客户的回信", "en": "A reply from a client"}, "genre": {"zh": "商务邮件（虚构公司）", "en": "A business email (fictional company)"},
     "src": "ja", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "本日はお忙しいところ、ありがとうございました。", "role": "polite",
        "opts": [{"t": "今天在忙碌的地方，谢谢了。", "draft": true, "err": {"zh": "ところ 在这里不是“地方”。", "en": "ところ here is not a place."}}, {"t": "今天百忙之中抽出时间，非常感谢。", "ok": true}, {"t": "今天打扰您了，很抱歉。", "err": {"zh": "感谢变成了道歉。", "en": "Thanks became an apology."}}]},
       {"id": "c2", "s": "大変勉強になりました。",
        "opts": [{"t": "非常勉强了。", "draft": true, "err": {"zh": "勉強になる 是“学到很多”，不是“勉强”。", "en": "勉強になる means learned a lot, not 勉强 (reluctant)."}}, {"t": "让我们学到了很多。", "ok": true}, {"t": "让您很为难了。", "err": {"zh": "意思变了。", "en": "The meaning changed."}}]},
       {"id": "c3", "s": "ご提案いただいた件は、",
        "opts": [{"t": "被提案了的件，", "draft": true, "err": {"zh": "いただく 不是被动；件 是“事情”。", "en": "いただく is not a passive; 件 means matter."}}, {"t": "您提出的方案，", "ok": true}, {"t": "我们提出的方案，", "err": {"zh": "提方案的人弄反了。", "en": "Who made the proposal is reversed."}}]},
       {"id": "c4", "s": "社内で検討いたします。", "key": true,
        "opts": [{"t": "在社内检讨。", "draft": true, "err": {"zh": "検討 是“研究、考虑”，中文“检讨”是认错。", "en": "検討 means consider; Chinese 检讨 means self-criticism."}}, {"t": "我们会在公司内部研究一下。", "ok": true}, {"t": "我们已经决定采用。", "err": {"zh": "研究一下不等于同意。", "en": "Looking into it is not agreeing."}}]},
       {"id": "c5", "s": "恐れ入りますが、", "role": "polite",
        "opts": [{"t": "害怕进来了，", "draft": true, "err": {"zh": "恐れ入ります 是客气的“不好意思、麻烦您”。", "en": "恐れ入ります is a polite \"sorry to trouble you\"."}}, {"t": "麻烦您", "ok": true}, {"t": "（不译）", "err": {"zh": "这是写给客户的请求前的礼貌缓冲，翻译时不能删。", "en": "It softens a request to a client; a translation can't drop it."}}]},
       {"id": "c6", "s": "見積書を金曜日までにお送りいただけますでしょうか。", "role": "time", "key": true,
        "opts": [{"t": "见积书到星期五为止能够送给我们吗。", "draft": true, "err": {"zh": "見積書 是“报价单”；までに 是“之前”。", "en": "見積書 is a quotation; までに means by."}}, {"t": "能否请您在周五前把报价单发给我们？", "ok": true}, {"t": "能否请您在周五后把报价单发给我们？", "err": {"zh": "之前变成了之后。", "en": "Before became after."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5", "c6"],
     "label": {"by": {"zh": "同事把邮件简要转告中国上司", "en": "A colleague briefs a Chinese boss on the email"},
       "rows": [
         {"c": "c1", "t": "", "ans": ["drop"], "why": {"zh": "客套话，对上司的简要转告可以省。", "en": "A courtesy; fine to leave out of a brief for the boss."}},
         {"c": "c2", "t": "", "ans": ["drop"], "why": {"zh": "客气话，不影响要做的事。", "en": "Politeness; doesn't change what needs doing."}},
         {"c": "c3", "t": "我们提的方案，", "ans": ["rephrase"], "why": {"zh": "从客户的“您提出的”换成我们这边的“我们提的”。", "en": "Changed from the client's \"your proposal\" to our side's \"our proposal\"."}},
         {"c": "c4", "t": "对方说会内部研究一下。", "ans": ["rephrase", "same"], "why": {"zh": "意思不变，没有说成同意。", "en": "Same meaning, not turned into a yes."}},
         {"c": null, "t": "看来他们很满意，应该会签。", "ans": ["extra"], "why": {"zh": "这是同事的推测，邮件没说。“研究一下”也不等于同意。", "en": "The colleague's guess; the email doesn't say so, and looking into it isn't agreeing."}},
         {"c": "c5", "t": "", "ans": ["drop"], "why": {"zh": "对自己的上司转告时，礼貌缓冲可以省；写给客户时不能删。", "en": "Briefing your own boss, the softener can go; writing to the client, it can't."}},
         {"c": "c6", "t": "他们请我们周五前把报价单发过去。", "ans": ["rephrase"], "why": {"zh": "换成第三人称转述，期限保住了。", "en": "Reported in the third person; the deadline is kept."}}
       ]},
     "match": {
       "c4": [["研究", "考虑", "讨论", "商量"]],
       "c6": [["周五", "星期五", "礼拜五"], ["报价"]]
     },
     "listeners": [
       {"id": "boss", "name": {"zh": "中国上司（简要、正式）", "en": "A Chinese boss (brief, formal)"}, "need": {"zh": "先说要我们做什么、什么时候。", "en": "Say first what we must do and by when."}, "keys": ["c4", "c6"],
        "ref": "对方请我们周五前把报价单发过去。我们提的方案，他们说会在公司内部研究一下，还没有答复。"},
       {"id": "colleague", "name": {"zh": "一起负责的同事（随便）", "en": "A colleague on the same project (casual)"}, "need": {"zh": "口语，一两句。", "en": "Casual, one or two sentences."}, "keys": ["c4", "c6"],
        "ref": "他们说方案要内部研究，还没定。报价单得周五前发过去。"}
     ]},
    {"id": "ensoku", "kc": "kt:ja-skill-mediate-ja",
     "title": {"zh": "郊游通知", "en": "A school trip notice"}, "genre": {"zh": "学校给家长的通知（虚构）", "en": "A school notice to parents (fictional)"},
     "src": "ja", "tgt": "zh",
     "chunks": [
       {"id": "c1", "s": "保護者の皆様へ", "role": "polite",
        "opts": [{"t": "保护者的各位", "draft": true, "err": {"zh": "保護者 中文说“家长”。", "en": "保護者 is 家长 in Chinese."}}, {"t": "各位家长：", "ok": true}, {"t": "各位老师：", "err": {"zh": "对象变了。", "en": "The audience changed."}}]},
       {"id": "c2", "s": "来週の遠足は、雨の場合は中止します。", "role": "cond", "key": true,
        "opts": [{"t": "下周的远足，雨的场合中止。", "draft": true, "err": {"zh": "～の場合 中文说“如果……”；中止 说“取消”。", "en": "～の場合 is 如果……; 中止 is 取消."}}, {"t": "下周的郊游如果下雨就取消。", "ok": true}, {"t": "下周的郊游下雨也照常进行。", "err": {"zh": "条件反了。", "en": "The condition is reversed."}}]},
       {"id": "c3", "s": "中止の場合は、当日の朝6時半までにメールでお知らせします。", "role": "time", "key": true,
        "opts": [{"t": "中止的场合，当日的早上6点半为止用邮件通知。", "draft": true, "err": {"zh": "までに 是“以前”，“为止”意思不对。", "en": "までに means by; 为止 (until) is wrong."}}, {"t": "要是取消，当天早上 6 点半以前会发邮件通知。", "ok": true}, {"t": "要是取消，前一天晚上 6 点半会打电话通知。", "err": {"zh": "时间和方式都变了。", "en": "Both the time and the method changed."}}]},
       {"id": "c4", "s": "お弁当と水筒を持たせてください。", "role": "req", "key": true,
        "opts": [{"t": "请让带便当和水筒。", "draft": true, "err": {"zh": "水筒 是“水壶”；持たせる 是“让孩子带上”。", "en": "水筒 is a water bottle; 持たせる means have the child take."}}, {"t": "请给孩子带上饭盒和水壶。", "ok": true}, {"t": "学校会准备午饭和水。", "err": {"zh": "要求变成了学校提供。", "en": "A request became \"the school provides\"."}}]},
       {"id": "c5", "s": "おやつは300円までです。", "role": "num", "key": true,
        "opts": [{"t": "点心是到300日元为止。", "draft": true, "err": {"zh": "意思是“不超过 300 日元”。", "en": "It means no more than 300 yen."}}, {"t": "零食不能超过 300 日元。", "ok": true}, {"t": "零食要买 300 日元的。", "err": {"zh": "上限变成了规定金额。", "en": "A limit became a fixed amount."}}]}
     ],
     "order": ["c1", "c2", "c3", "c4", "c5"],
     "label": {"by": {"zh": "妈妈把通知转给在中国的爷爷", "en": "Mum passes the notice on to Grandpa in China"},
       "rows": [
         {"c": "c1", "t": "", "ans": ["drop"], "why": {"zh": "称呼对爷爷没用。", "en": "The salutation is no use to Grandpa."}},
         {"c": "c2", "t": "下周郊游，下雨就不去了。", "ans": ["rephrase"], "why": {"zh": "条件保住了，说法更口语。", "en": "Condition kept, more colloquial."}},
         {"c": "c3", "t": "要是不去，早上六点半前学校会发邮件，", "ans": ["rephrase"], "why": {"zh": "时间保住了。", "en": "The time is kept."}},
         {"c": null, "t": "（六点半是日本时间）", "ans": ["add"], "why": {"zh": "爷爷在中国，说明时区是把隐含的信息说清楚。", "en": "Grandpa is in China, so naming the time zone makes implicit information clear."}},
         {"c": "c4", "t": "得带饭盒和水壶。", "ans": ["rephrase"], "why": {"zh": "意思不变。", "en": "Same meaning."}},
         {"c": "c5", "t": "", "ans": ["dropbad"], "why": {"zh": "零食上限是一个数字规定，不能删。", "en": "The snack limit is a number rule; it can't go."}},
         {"c": null, "t": "孩子很期待这次郊游。", "ans": ["extra"], "why": {"zh": "通知里没有这句。", "en": "The notice doesn't say this."}}
       ]},
     "match": {
       "c2": [["下雨", "雨天", "有雨"], ["取消", "不去", "中止", "停"]],
       "c3": [["6点半", "六点半", "6:30", "6点30"]],
       "c4": [["饭盒", "便当", "午饭"], ["水壶", "水杯", "水瓶", "水"]],
       "c5": [["300", "三百"]]
     },
     "listeners": [
       {"id": "grandpa", "name": {"zh": "在中国的爷爷", "en": "Grandpa in China"}, "need": {"zh": "口语，说清楚要准备什么。", "en": "Spoken; say clearly what to prepare."}, "keys": ["c2", "c3", "c4", "c5"],
        "ref": "爸，下周孩子学校郊游，下雨就取消，取消的话当天早上六点半（日本时间）前学校发邮件。要带饭盒和水壶，零食不能超过 300 日元。"},
       {"id": "dad", "name": {"zh": "孩子爸爸（发消息）", "en": "The child's dad (a text message)"}, "need": {"zh": "一条消息，按要做的事排。", "en": "One message, ordered by what to do."}, "keys": ["c2", "c3", "c4", "c5"],
        "ref": "下周郊游：带饭盒、水壶，零食 300 日元以内。下雨取消，当天早上 6 点半前会发邮件。"}
     ]}
  ],
  "review": [
    "みどり町内会 是虚构名称；“保留原名”被设为正确答案",
    "c5（客户邮件）恐れ入りますが 在翻译给客户时设为不能删；在给上司的简要转告里设为可以删",
    "“得带饭盒和水壶”中 水 一词也被 match 接受，可能过宽",
    "郊游一题“（六点半是日本时间）”被判为“增补隐含信息”"
  ],
  "reviewEn": [
    "みどり町内会 is a fictional name; keeping the original name is set as the right answer",
    "c5 (client email) 恐れ入りますが must stay in a translation for the client but may go in a brief for one's own boss",
    "The match list for c4 (school trip) also accepts plain 水, which may be too loose",
    "In the school trip text, \"(6:30 is Japan time)\" is labelled \"added implicit information\""
  ]
};

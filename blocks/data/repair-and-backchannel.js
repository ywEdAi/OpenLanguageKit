/* Data packs for blocks/repair-and-backchannel.html (prim:repair-and-backchannel):
 *   repair-and-backchannel-en, repair-and-backchannel-ja, repair-and-backchannel-zh.
 *
 * A pack holds short scripted conversations with planned "trouble moments", a bank of repair phrasings, and a set
 * of "their uh-huh" items (the listening half). Nothing is generated; the page never listens to or scores speech.
 *
 * Pack format
 *   id, lang, speech, title(En), subtitle(En), voiceNote(En), ackNote(En)
 *   ordinaryReply   what the other person says if you "repair" a line that had no trouble (not scored)
 *   types {<type>: {name, nameEn}}   names of the kinds of trouble:
 *     fast (too fast), word (an unknown word), number (a number or key detail to check back), think (they wait for
 *     your answer and you need a moment), offtopic (the talk drifts), urgent (you must break in), pause (they pause
 *     for you to show you are listening), noise (you did not hear), none (looks like trouble but needs no repair)
 *   phrases {<move>: [{text, ok, why?, whyEn?}]}   phrasings offered after the learner picks a move.
 *     Moves (fixed order on the page): repeat, slow, word, confirm, backchannel, time, interrupt, back.
 *     {w} is replaced by the moment's word, {x} by the moment's x. ok:false = right kind of move, blunt wording.
 *     In the child version the first ok phrasing is used and there is no choice.
 *   dialogues [{id, title(En), kcs[], child?, step3? (used in step 3: a new conversation with no move buttons),
 *               role {me, other, otherShort, goal (+En)}, lines[]}]
 *     line: {o: what the other person says} | {m: my scripted line} | {n, nEn: a stage direction}
 *           an o line may carry mo (a trouble moment):
 *     mo:   {id, type, rate? (speech rate for this line), ok[] (moves that resolve it; for type none the page
 *            accepts going on or a backchannel), word?, x?, confirm? [{text, ok, reply?, why?}] (phrasings for a
 *            check-back, including one with the wrong detail that the other person corrects),
 *            reply {<move>: what they say after a resolving move}, stay {<move>: reply to a move that does not
 *            resolve it}, over (reply when you interrupt a "none" moment), miss(En) (what goes wrong later if the
 *            trouble is never repaired), why(En), partner(En) (what a live partner does at this point, step 3)}
 *   ack [{id, ctx(En), who(En), lines [{m}|{o}], answer: agree | listen | refuse, why(En), child?}]
 *   review / reviewEn   items a native teacher should check.
 * Every conversation has at least one "none" moment (the reverse half: not every gap needs a repair) and at least one
 * moment that only one kind of repair resolves (asking about a word; checking a number back).
 * All lines are original; places and businesses are fictional.
 */
KT_DATA["repair-and-backchannel-en"] = {
  "id": "repair-and-backchannel-en", "lang": "en", "speech": "en-GB",
  "title": "会话修复与接应（英语）", "titleEn": "Repair and backchannel (English)",
  "subtitle": "对话里没听懂、要想一想、要插话的时候，当场用一句得体的话处理；也练反过来听：对方的 uh-huh 不等于答应。", "subtitleEn": "When you lose track, need a moment or have to break in, deal with it on the spot with a polite line; and listen the other way round: their uh-huh is not a yes.",
  "voiceNote": "对方的话由浏览器合成语音读出，一个人、安静的环境；“说得太快”是把语速调快。这里听得懂，不等于在真实的嘈杂环境里也听得懂。", "voiceNoteEn": "The other person's lines are read by browser speech synthesis: one voice, no noise; “too fast” means a faster speech rate. Following it here does not mean you will in a noisy real place.",
  "ackNote": "Uh-huh、Mm、Right 常常只表示“我在听”。把它们当成答应，就会以为别人同意了其实没同意的事。", "ackNoteEn": "Uh-huh, Mm and Right often only mean “I'm listening”. Taking them as a yes leads you to think people agreed to things they did not.",
  "ordinaryReply": "Oh — sure. As I said…",
  "types": {
    "fast": {"name": "说得太快", "nameEn": "Too fast"},
    "word": {"name": "不认识的词", "nameEn": "An unknown word"},
    "number": {"name": "数字或关键信息，要复述确认", "nameEn": "A number or key detail to check back"},
    "think": {"name": "对方等你回答，你需要想一想", "nameEn": "They wait for your answer and you need a moment"},
    "offtopic": {"name": "话题跑偏了", "nameEn": "The talk has drifted"},
    "urgent": {"name": "你有急事，要插话", "nameEn": "You have something urgent and must break in"},
    "none": {"name": "看起来有麻烦，其实不用打断", "nameEn": "Looks like trouble, but needs no repair"}
  },
  "phrases": {
    "repeat": [
      {"text": "Sorry? Could you say that again, please?", "ok": true},
      {"text": "Sorry, could you repeat that, please?", "ok": true},
      {"text": "What?", "ok": false, "why": "What? 听起来很冲，像在不耐烦。", "whyEn": "What? sounds sharp, almost impatient."},
      {"text": "Please repeat.", "ok": false, "why": "Please repeat 像命令，很生硬。", "whyEn": "Please repeat sounds like an order."}
    ],
    "slow": [
      {"text": "Could you speak a bit more slowly, please?", "ok": true},
      {"text": "Sorry, a bit more slowly, please?", "ok": true},
      {"text": "You speak too fast.", "ok": false, "why": "听起来像在批评对方。", "whyEn": "It sounds like criticism."}
    ],
    "word": [
      {"text": "Sorry, what does “{w}” mean?", "ok": true},
      {"text": "Sorry, what do you mean by “{w}”?", "ok": true},
      {"text": "What is mean “{w}”?", "ok": false, "why": "语序不对，应该说 What does … mean?", "whyEn": "Wrong word order: it should be What does … mean?"}
    ],
    "confirm": [
      {"text": "Sorry, so you mean…?", "ok": true}
    ],
    "backchannel": [
      {"text": "Uh-huh.", "ok": true}, {"text": "I see.", "ok": true}, {"text": "Right.", "ok": true}
    ],
    "time": [
      {"text": "Well, let me think…", "ok": true},
      {"text": "Hmm, let me see…", "ok": true},
      {"text": "That… that… that…", "ok": false, "why": "把中文的“那个”搬进英语，对方听不懂你在干什么。", "whyEn": "This carries Chinese 那个 into English; the listener cannot tell what you are doing."}
    ],
    "interrupt": [
      {"text": "Sorry to interrupt, but {x}", "ok": true},
      {"text": "Can I just say something? {x}", "ok": true},
      {"text": "Wait, I want to say {x}", "ok": false, "why": "没有缓冲直接打断，听起来不礼貌。", "whyEn": "Breaking in with no softener sounds rude."}
    ],
    "back": [
      {"text": "Anyway, going back to {x}…", "ok": true},
      {"text": "Sorry — just going back to {x} for a second…", "ok": true},
      {"text": "Stop talking about that.", "ok": false, "why": "太直接，对方会觉得被呛了一下。", "whyEn": "Too blunt; it feels like a put-down."}
    ]
  },
  "dialogues": [
    {
      "id": "station-desk", "title": "车站问询处买票", "titleEn": "At the station enquiry desk",
      "kcs": ["kt:en-str-repair-basic", "kt:en-str-ask-clarification", "kt:en-informal-spoken-markers"],
      "role": {"me": "旅客，今天下午要去 Oakbridge（虚构）", "meEn": "A traveller going to Oakbridge (fictional) this afternoon",
               "other": "车站问询处的工作人员", "otherEn": "The person at the station enquiry desk", "otherShort": "工作人员", "otherShortEn": "Staff",
               "goal": "弄清几点的车、什么票、在哪个站台", "goalEn": "Find out the train time, the ticket and the platform"},
      "lines": [
        {"o": "Hi there, what can I do for you?"},
        {"m": "Hi. I need to get to Oakbridge this afternoon."},
        {"o": "Right, the next direct one's at four-fifty, and it gets in about half six.",
         "mo": {"id": "m1", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没听清几点的车，只好在车站里等着再问。", "missEn": "You did not catch the time and had to wait around and ask again.",
                "why": "说得太快、没听清时间：请对方再说一遍或者说慢一点。", "whyEn": "Too fast to catch the time: ask them to repeat or to slow down.",
                "partner": "这一句说得很快", "partnerEn": "Say this line fast"}},
        {"m": "Great. How much is a ticket?"},
        {"o": "An off-peak return's thirty-two pounds.",
         "mo": {"id": "m2", "type": "word", "word": "off-peak", "ok": ["word"],
                "reply": {"word": "Off-peak just means outside the busy times, so after half past nine in the morning. It's cheaper."},
                "miss": "你不知道 off-peak 是什么，以为早高峰也能用这张票，第二天早上被要求补票。", "missEn": "You did not know what off-peak meant, used the ticket at rush hour the next morning and had to pay extra.",
                "why": "不认识的词，请对方再说一遍没用，要问这个词。", "whyEn": "With an unknown word, hearing it again does not help: ask about the word.",
                "partner": "说到 off-peak 时不解释，等对方问", "partnerEn": "Do not explain off-peak; wait to be asked"}},
        {"o": "There's a quiet coach on that train. That's the carriage where you're not supposed to make phone calls.",
         "mo": {"id": "m3", "type": "none", "word": "quiet coach", "over": "Oh, as I said, it's just the carriage where you can't make calls.",
                "why": "quiet coach 对方马上就解释了，而且跟买票关系不大，不用打断。", "whyEn": "They explain “quiet coach” straight away, and it hardly matters for the ticket; no need to interrupt.",
                "partner": "说完生词马上自己解释", "partnerEn": "Explain the new word yourself straight away"}},
        {"o": "It goes from platform fifteen.",
         "mo": {"id": "m4", "type": "number", "ok": ["confirm"],
                "confirm": [
                  {"text": "Sorry, did you say fifteen or fifty?", "ok": true, "reply": "Fifteen. One-five."},
                  {"text": "So that's platform fifteen?", "ok": true, "reply": "That's right, fifteen."},
                  {"text": "So that's platform fifty?", "ok": false, "reply": "No, fifteen. One-five.", "why": "复述里的数字错了，对方马上纠正：这正是复述确认的用处。", "whyEn": "Your check-back had the wrong number and they corrected it at once: that is exactly what checking back is for."}
                ],
                "miss": "你去找五十号站台，这个车站根本没有，差点误车。", "missEn": "You looked for platform fifty, which does not exist, and nearly missed the train.",
                "why": "fifteen 和 fifty 很容易听混：报数字时复述一遍确认。", "whyEn": "Fifteen and fifty are easy to mix up: check numbers by saying them back.",
                "partner": "fifteen 说得含糊一点", "partnerEn": "Say fifteen a little unclearly"}},
        {"m": "Thanks. Can I pay by card?"},
        {"n": "你还没想好要不要买往返票。", "nEn": "You have not decided whether you need a return ticket."},
        {"o": "Yes, of course. So, would you like a single or a return?",
         "mo": {"id": "m5", "type": "think", "ok": ["time"], "reply": {"time": "Sure, take your time."},
                "miss": "你半天没出声，对方以为你没听见，又问了一遍，后面排队的人开始着急。", "missEn": "You said nothing for a long time; they thought you had not heard and asked again, and the queue got restless.",
                "why": "需要想一想时，说一句 Well, let me think… 占住话轮，不要沉默。", "whyEn": "When you need a moment, hold the turn with Well, let me think… rather than going silent.",
                "partner": "问完以后安静地等", "partnerEn": "Ask, then wait quietly"}},
        {"m": "A return, please."},
        {"o": "Lovely. That's thirty-two pounds, then."}
      ]
    },
    {
      "id": "project-meeting", "title": "小组讨论海报", "titleEn": "A group meeting about a poster",
      "kcs": ["kt:en-fn-manage-turns", "kt:en-informal-spoken-markers", "kt:en-str-ask-clarification"],
      "role": {"me": "小组成员", "meEn": "A member of the group",
               "other": "组长 Alex", "otherEn": "Alex, who leads the group", "otherShort": "Alex", "otherShortEn": "Alex",
               "goal": "把海报的事定下来，记住下次开会的时间", "goalEn": "Settle the poster and note the next meeting"},
      "lines": [
        {"n": "小组开会，讨论学校开放日的海报。", "nEn": "The group is meeting to plan a poster for the school open day."},
        {"o": "OK, so for the poster, I think we should use the photo from last year."},
        {"o": "Oh, and talking of last year, did I tell you about my holiday in Spain? The hotel was amazing, the pool was huge…",
         "mo": {"id": "m1", "type": "offtopic", "ok": ["back"], "x": "the poster", "reply": {"back": "Ha, sorry. Yes, the poster."},
                "miss": "会开了一大半，海报的事还没定下来。", "missEn": "Half the meeting went by and the poster was still not settled.",
                "why": "话题跑偏了：用 Anyway, going back to… 把话拉回来。", "whyEn": "The talk drifted: bring it back with Anyway, going back to…",
                "partner": "开始讲自己的假期，一直讲下去", "partnerEn": "Start talking about your holiday and keep going"}},
        {"o": "So we'll need the KPI figures before Friday.",
         "mo": {"id": "m2", "type": "word", "word": "KPI", "ok": ["word"],
                "reply": {"word": "Oh, sorry. KPI means key performance indicators. Here it just means how many visitors came last year."},
                "miss": "你没弄清 KPI 是什么，星期五交上去的数字不对。", "missEn": "You never found out what KPI meant, and the figures you handed in on Friday were the wrong ones.",
                "why": "不认识的缩写要问：Sorry, what do you mean by…?", "whyEn": "Ask about an unknown abbreviation: Sorry, what do you mean by…?",
                "partner": "用 KPI，不解释", "partnerEn": "Use KPI without explaining"}},
        {"n": "你想起来：会议室三点要给别的班用，现在已经两点五十了。", "nEn": "You remember the room is booked by another class at three, and it is already ten to three."},
        {"o": "And then for the colours, I was thinking maybe blue and green, or possibly orange, because orange really stands out, and also…",
         "mo": {"id": "m3", "type": "urgent", "ok": ["interrupt"], "x": "we need to leave the room at three.", "reply": {"interrupt": "Oh! Thanks. Let's be quick, then."},
                "miss": "三点到了，别的班进来，你们的会被打断，颜色还没定。", "missEn": "At three the other class came in, your meeting broke up, and the colours were not decided.",
                "why": "有急事要插话：先用 Sorry to interrupt, but… 缓冲一下。", "whyEn": "When something is urgent, break in with a softener: Sorry to interrupt, but…",
                "partner": "一直说，不停顿", "partnerEn": "Keep talking without a pause"}},
        {"o": "Jo can do the drawings. Jo's the new student in our class, by the way.",
         "mo": {"id": "m4", "type": "none", "word": "Jo", "over": "Yes, as I said, Jo's the new student.",
                "why": "对方自己说了 Jo 是谁，不用问。", "whyEn": "They said who Jo is themselves; no need to ask.",
                "partner": "提到一个新名字，马上解释", "partnerEn": "Mention a new name and explain it at once"}},
        {"o": "So, what do you think? Blue or orange?",
         "mo": {"id": "m5", "type": "think", "ok": ["time"], "reply": {"time": "No rush."},
                "miss": "你一直没说话，Alex 就自己定了橙色，可你其实不喜欢。", "missEn": "You stayed silent, so Alex chose orange on his own, though you did not like it.",
                "why": "被问到又一下子答不上来时，用 Well… 争取一点时间。", "whyEn": "When you are asked and cannot answer at once, use Well… to gain a moment.",
                "partner": "问完以后安静地等", "partnerEn": "Ask, then wait quietly"}},
        {"m": "Well, blue, I think. It looks calmer."},
        {"o": "Great. Let's meet again on Thursday the thirteenth at two.",
         "mo": {"id": "m6", "type": "number", "ok": ["confirm"],
                "confirm": [
                  {"text": "So that's Thursday the thirteenth at two?", "ok": true, "reply": "Yes, exactly."},
                  {"text": "Sorry, the thirteenth or the thirtieth?", "ok": true, "reply": "The thirteenth. One-three."},
                  {"text": "So, Thursday the thirtieth at two?", "ok": false, "reply": "No, the thirteenth. One-three.", "why": "thirteen 和 thirty 容易听混；你复述错了，对方马上纠正。", "whyEn": "Thirteen and thirty are easy to mix up; your check-back was wrong and they corrected it."}
                ],
                "miss": "你记成了三十号，下次会议没来。", "missEn": "You wrote down the thirtieth and missed the next meeting.",
                "why": "日期和时间要复述确认。", "whyEn": "Check dates and times by saying them back.",
                "partner": "thirteenth 说得快一点", "partnerEn": "Say thirteenth quickly"}},
        {"m": "Sounds good. See you then."}
      ]
    },
    {
      "id": "hostel-call", "title": "打电话订青旅（第 3 步用）", "titleEn": "Phoning a hostel (for step 3)", "step3": true,
      "kcs": ["kt:en-str-repair-basic", "kt:en-str-ask-clarification"],
      "role": {"me": "想订星期五一晚床位的旅客", "meEn": "A traveller booking a bed for Friday night",
               "other": "Riverside Hostel（虚构）的前台", "otherEn": "The receptionist at Riverside Hostel (fictional)", "otherShort": "前台", "otherShortEn": "Receptionist",
               "goal": "订好床位，弄清价钱、地址和要付什么", "goalEn": "Book the bed and get the price, the address and what to pay"},
      "lines": [
        {"o": "Good evening, Riverside Hostel."},
        {"m": "Hi, I'd like to book a bed for Friday night, please."},
        {"o": "No problem. We'll just need a deposit to hold the bed.",
         "mo": {"id": "m1", "type": "word", "word": "deposit", "ok": ["word"], "reply": {"word": "A deposit is money you pay now, and you get it back when you leave."},
                "miss": "你不知道 deposit 是什么，到了以后才发现还要先交一笔钱。", "missEn": "You did not know what a deposit was and found out on arrival that you had to pay money up front.",
                "why": "不认识的词要问。", "whyEn": "Ask about an unknown word.",
                "partner": "说 deposit，不解释", "partnerEn": "Say deposit without explaining"}},
        {"o": "Check-in's from three, and we're at forty-two Mill Lane, just by the bridge.",
         "mo": {"id": "m2", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"], "reply": {},
                "miss": "你没记下地址，到了城里找了半天。", "missEn": "You did not get the address and spent ages looking for it.",
                "why": "太快了，请对方再说一遍或说慢一点。", "whyEn": "Too fast: ask them to repeat or slow down.",
                "partner": "很快地说这一句", "partnerEn": "Say this line fast"}},
        {"o": "Breakfast is included. That's toast and cereal in the kitchen.",
         "mo": {"id": "m3", "type": "none", "word": "included", "why": "对方自己解释了早餐是什么，不用打断。", "whyEn": "They explain what breakfast is themselves; no need to interrupt.",
                "partner": "说完马上解释", "partnerEn": "Explain at once"}},
        {"o": "So that's nineteen pounds for the night.",
         "mo": {"id": "m4", "type": "number", "ok": ["confirm"],
                "confirm": [{"text": "Sorry, nineteen or ninety?", "ok": true, "reply": "Nineteen. One-nine."}],
                "reply": {"confirm": "Nineteen. One-nine."},
                "miss": "你以为是九十镑，差点不订了。", "missEn": "You thought it was ninety pounds and nearly cancelled.",
                "why": "价钱要复述确认：nineteen 和 ninety 很像。", "whyEn": "Check prices back: nineteen and ninety sound alike.",
                "partner": "nineteen 说得含糊一点", "partnerEn": "Say nineteen a little unclearly"}},
        {"m": "Great, thank you."}
      ]
    },
    {
      "id": "paper-boats", "title": "上课折纸船", "titleEn": "Making paper boats in class", "child": true,
      "kcs": ["kt:en-str-repair-basic"],
      "role": {"me": "班上的学生", "meEn": "A pupil in the class",
               "other": "老师", "otherEn": "The teacher", "otherShort": "老师", "otherShortEn": "Teacher",
               "goal": "跟着老师折一只纸船", "goalEn": "Make a paper boat with the teacher"},
      "lines": [
        {"o": "Good morning, everyone! Today we're making paper boats."},
        {"o": "First, fold the paper in half, then fold the corners down.",
         "mo": {"id": "m1", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没跟上，纸船折歪了。", "missEn": "You did not keep up and your boat came out crooked.",
                "why": "太快了：请老师再说一遍或者说慢一点。", "whyEn": "Too fast: ask the teacher to say it again or more slowly."}},
        {"o": "Now take out your crayons.",
         "mo": {"id": "m2", "type": "word", "word": "crayons", "ok": ["word"], "reply": {"word": "Crayons are these: the colouring sticks."},
                "miss": "你不知道 crayons 是什么，拿出了剪刀。", "missEn": "You did not know what crayons were and took out your scissors.",
                "why": "不认识的词，要问这个词。", "whyEn": "An unknown word: ask about the word."}},
        {"o": "Draw a fish on your boat. Any fish you like!",
         "mo": {"id": "m3", "type": "none", "word": "fish", "why": "这句你听懂了，不用问，开始画吧。", "whyEn": "You understood this one; no need to ask, just draw."}}
      ]
    }
  ],
  "ack": [
    {"id": "en-a1", "ctx": "请同事帮忙", "ctxEn": "Asking a colleague for help", "who": "同事", "whoEn": "Colleague",
     "lines": [{"m": "Could you send me the report by tomorrow?"}, {"o": "Uh-huh… mm… tomorrow… well, I've got a lot on at the moment."}],
     "answer": "refuse", "why": "Uh-huh 只是在听；后面的 well, I've got a lot on 是委婉地说做不到。", "whyEn": "Uh-huh only shows they are listening; “well, I've got a lot on” is a gentle no."},
    {"id": "en-a2", "ctx": "约朋友见面", "ctxEn": "Arranging to meet a friend", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "So we'll meet at the café at ten."}, {"o": "Mm-hm. Ten. Yep, see you there."}],
     "answer": "agree", "why": "Mm-hm 之后有 Yep, see you there，这是真的答应了。", "whyEn": "After Mm-hm comes “Yep, see you there”: a real yes."},
    {"id": "en-a3", "ctx": "你在讲周末的计划", "ctxEn": "You are explaining a weekend plan", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "So first we take the bus to the station…"}, {"o": "Uh-huh."}, {"m": "…then we walk to the museum…"}, {"o": "Right."}],
     "answer": "listen", "why": "Uh-huh 和 Right 是“我在听，你继续”，对方还没说去不去。", "whyEn": "Uh-huh and Right mean “I'm listening, go on”; they have not said whether they will come."},
    {"id": "en-a4", "ctx": "借自行车", "ctxEn": "Borrowing a bike", "who": "邻居", "whoEn": "Neighbour",
     "lines": [{"m": "Could I borrow your bike this weekend?"}, {"o": "Oh, right… I see… hmm, the thing is, my brother might need it."}],
     "answer": "refuse", "why": "Right、I see 只是接话；the thing is… 引出的是不方便的理由。", "whyEn": "Right and I see only keep the talk going; “the thing is…” brings in a reason it is not convenient."},
    {"id": "en-a5", "ctx": "商量请谁来", "ctxEn": "Deciding who to invite", "who": "同学", "whoEn": "Classmate",
     "lines": [{"m": "Shall we invite Lee too?"}, {"o": "Yeah, sure, good idea."}],
     "answer": "agree", "why": "Yeah, sure, good idea 是明确的同意。", "whyEn": "“Yeah, sure, good idea” is a clear yes."},
    {"id": "en-a6", "ctx": "你提议改设计", "ctxEn": "You suggest changing the design", "who": "同事", "whoEn": "Colleague",
     "lines": [{"m": "I think we should change the whole design."}, {"o": "Mm. Right. I see what you mean."}],
     "answer": "listen", "why": "I see what you mean 表示听懂了你的意思，不等于同意改。", "whyEn": "“I see what you mean” says they understood you, not that they agree to change it."}
  ],
  "review": [
    "station-desk：off-peak 的解释（早上九点半以后）只是举例，各地规定不同",
    "project-meeting：Sorry — just going back to the poster for a second… 是否自然",
    "time：Hmm, let me see… 用来回答 single or return 是否自然",
    "en-a6：I see what you mean 在有的语境里接近同意，归为“只是在听”可能有争议"
  ],
  "reviewEn": [
    "station-desk: the explanation of off-peak (after half past nine) is only an example; rules differ",
    "project-meeting: whether “Sorry — just going back to the poster for a second…” sounds natural",
    "time: whether “Hmm, let me see…” is natural before answering “single or return?”",
    "en-a6: “I see what you mean” can come close to agreement in some contexts; classing it as “only listening” may be disputed"
  ]
};
KT_DATA["repair-and-backchannel-ja"] = {
  "id": "repair-and-backchannel-ja", "lang": "ja", "speech": "ja-JP",
  "title": "会话修复与接应（日语）", "titleEn": "Repair and backchannel (Japanese)",
  "subtitle": "没听懂时先说すみません再请对方重复或说慢；对方停顿时用はい・ええ附和；也练反过来听：对方的はい不一定是答应。", "subtitleEn": "When you lose track, start with すみません and ask them to repeat or slow down; when they pause, show you are listening with はい or ええ; and listen the other way round: their はい is not always a yes.",
  "voiceNote": "对方的话由浏览器合成语音读出，一个人、安静的环境；合成语音的语调可能不自然。这里听得懂，不等于在真实环境里也听得懂。", "voiceNoteEn": "The other person's lines are read by browser speech synthesis: one voice, no noise, and the intonation may be unnatural. Following it here does not mean you will in a real place.",
  "ackNote": "日语对话里的はい、ええ、そうですね很多时候只是“我在听”。把它们当成答应，就会以为对方同意了其实没同意的事。", "ackNoteEn": "In Japanese conversation, はい, ええ and そうですね often only mean “I'm listening”. Taking them as a yes leads you to think people agreed when they did not.",
  "ordinaryReply": "はい、ですから……",
  "types": {
    "fast": {"name": "说得太快", "nameEn": "Too fast"},
    "word": {"name": "不认识的词", "nameEn": "An unknown word"},
    "number": {"name": "数字或关键信息，要复述确认", "nameEn": "A number or key detail to check back"},
    "think": {"name": "对方等你回答，你需要想一想", "nameEn": "They wait for your answer and you need a moment"},
    "pause": {"name": "对方在句中停顿，等你附和", "nameEn": "They pause mid-sentence for you to show you are listening"},
    "none": {"name": "看起来有麻烦，其实不用打断", "nameEn": "Looks like trouble, but needs no repair"}
  },
  "phrases": {
    "repeat": [
      {"text": "すみません、もう一度お願いします。", "ok": true},
      {"text": "すみません、もう一度言っていただけますか。", "ok": true},
      {"text": "え？なに？", "ok": false, "why": "降调的“え？なに？”对长辈、对工作人员显得不礼貌。", "whyEn": "A falling え？なに？ sounds rude to an older person or to staff."},
      {"text": "もう一度。", "ok": false, "why": "不完整，像命令。", "whyEn": "Incomplete; it sounds like an order."}
    ],
    "slow": [
      {"text": "すみません、もう少しゆっくりお願いします。", "ok": true},
      {"text": "すみません、ゆっくり話していただけますか。", "ok": true},
      {"text": "ゆっくり！", "ok": false, "why": "没有すみません，听起来像命令。", "whyEn": "Without すみません it sounds like an order."}
    ],
    "word": [
      {"text": "すみません、「{w}」って何ですか。", "ok": true},
      {"text": "すみません、「{w}」はどういう意味ですか。", "ok": true},
      {"text": "「{w}」？わかりません。", "ok": false, "why": "不加すみません直接说わかりません，语气生硬。", "whyEn": "わかりません without すみません sounds curt."}
    ],
    "confirm": [
      {"text": "すみません、～ということですか。", "ok": true}
    ],
    "backchannel": [
      {"text": "はい。", "ok": true}, {"text": "ええ。", "ok": true}, {"text": "そうですか。", "ok": true},
      {"text": "うん、うん。", "ok": false, "why": "うん是对朋友、家人的附和，对工作人员、前辈太随便。", "whyEn": "うん is for friends and family; too casual with staff or a senior."}
    ],
    "time": [
      {"text": "えーと……", "ok": true},
      {"text": "そうですね……", "ok": true},
      {"text": "那个……", "ok": false, "why": "这是中文的“那个”，日语里想词时说えーと、あのう。", "whyEn": "That is Chinese 那个; in Japanese you say えーと or あのう while thinking."}
    ],
    "interrupt": [
      {"text": "すみません、ちょっとよろしいですか。", "ok": true},
      {"text": "ちょっと待って！", "ok": false, "why": "对工作人员、前辈太直接。", "whyEn": "Too abrupt for staff or a senior."}
    ],
    "back": [
      {"text": "あの、さっきのお話なんですが……", "ok": true}
    ]
  },
  "dialogues": [
    {
      "id": "city-office", "title": "市役所的窗口", "titleEn": "At the city office counter",
      "kcs": ["kt:ja-str-repair-basic", "kt:ja-str-aizuchi"],
      "role": {"me": "刚搬来的留学生", "meEn": "An international student who has just moved here",
               "other": "市役所窗口的工作人员", "otherEn": "A clerk at the city office counter", "otherShort": "工作人员", "otherShortEn": "Clerk",
               "goal": "办好转入手续，弄清要写什么、新保险证什么时候到", "goalEn": "Register your move, and find out what to fill in and when the new insurance card comes"},
      "lines": [
        {"o": "こんにちは。今日はどうされましたか。"},
        {"m": "すみません、引っ越しの手続きをしたいんですが。"},
        {"o": "はい、転入届ですね。まず、こちらの用紙に、お名前と新しいご住所を書いていただいて……",
         "mo": {"id": "m1", "type": "pause", "ok": ["backchannel"], "reply": {"backchannel": "それから、前のご住所も、こちらに書いてください。"},
                "miss": "你一直不出声，工作人员停下来问「大丈夫ですか」，又从头解释了一遍。", "missEn": "You stayed silent, so the clerk stopped, asked 大丈夫ですか and explained it all again.",
                "why": "对方在“～て”处停下来，是在等你附和：说はい或ええ表示“我在听”。", "whyEn": "They stopped after ～て to wait for you: はい or ええ shows you are listening.",
                "partner": "说到“书いていただいて”时停下来，等对方附和", "partnerEn": "Stop after 書いていただいて and wait for a response"}},
        {"o": "書き終わりましたら、あちらの番号札を取って、呼ばれるまでお待ちください。",
         "mo": {"id": "m2", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没听清要拿号，在窗口前等了半天也没人叫你。", "missEn": "You did not catch that you had to take a number, and waited at the counter with nobody calling you.",
                "why": "说得太快：先说すみません，再请对方重复或说慢一点。", "whyEn": "Too fast: start with すみません, then ask them to repeat or slow down.",
                "partner": "这一句说得很快", "partnerEn": "Say this line fast"}},
        {"o": "印鑑は、なくても大丈夫です。あ、印鑑というのは、はんこのことです。",
         "mo": {"id": "m3", "type": "none", "word": "印鑑", "over": "はい、ですから、はんこのことです。",
                "why": "“印鑑”对方马上就解释了，而且这次不需要，不用打断。", "whyEn": "They explain 印鑑 straight away, and it is not needed this time; no need to interrupt.",
                "partner": "说完生词马上自己解释", "partnerEn": "Explain the word yourself straight away"}},
        {"o": "それから、住民票の写しが必要でしたら、ここで一緒に申請できますよ。",
         "mo": {"id": "m4", "type": "word", "word": "住民票", "ok": ["word"], "reply": {"word": "住民票は、ここに住んでいることを証明する書類です。銀行の口座を作るときなどに使います。"},
                "miss": "你不知道住民票是什么，后来去银行开户时才发现需要它，又跑了一趟市役所。", "missEn": "You did not know what a 住民票 was, found out at the bank that you needed one, and had to go back to the city office.",
                "why": "不认识的词，请对方再说一遍没用，要问这个词。", "whyEn": "With an unknown word, hearing it again does not help: ask about the word.",
                "partner": "说“住民票”，不解释", "partnerEn": "Say 住民票 without explaining"}},
        {"o": "新しい保険証は、十四日ごろ、郵便で届きます。",
         "mo": {"id": "m5", "type": "number", "ok": ["confirm"],
                "confirm": [
                  {"text": "十四日ですね。", "ok": true, "reply": "はい、十四日ごろです。"},
                  {"text": "すみません、四日ですか、十四日ですか。", "ok": true, "reply": "十四日です。"},
                  {"text": "四日ですね。", "ok": false, "reply": "いえ、十四日です。じゅう、よっかです。", "why": "复述里的日期错了，对方马上纠正：这正是复述确认的用处。", "whyEn": "Your check-back had the wrong date and they corrected it: that is what checking back is for."}
                ],
                "miss": "你以为四号就到，一直等不到保险证，还以为寄丢了。", "missEn": "You thought it would come on the 4th, and when it did not you assumed it was lost.",
                "why": "日期要复述确认：“十四日”和“四日”只差一点。", "whyEn": "Check dates back: 十四日 and 四日 differ only slightly.",
                "partner": "“十四日”说得快一点", "partnerEn": "Say 十四日 quickly"}},
        {"m": "わかりました。ありがとうございます。"}
      ]
    },
    {
      "id": "senior-story", "title": "听前辈讲周末的事", "titleEn": "A senior colleague's weekend story",
      "kcs": ["kt:ja-str-aizuchi", "kt:ja-str-repair-basic"],
      "role": {"me": "公司里的新人林", "meEn": "Lin, a new employee",
               "other": "前辈田村", "otherEn": "Tamura, a senior colleague", "otherShort": "田村", "otherShortEn": "Tamura",
               "goal": "听前辈讲完，让前辈知道你在认真听", "goalEn": "Hear the story out and let Tamura know you are listening"},
      "lines": [
        {"n": "午休时，前辈田村在讲上个周末的事。", "nEn": "At lunch, Tamura is telling you about last weekend."},
        {"o": "先週の日曜日、友達と近くの山に登ったんですけど……",
         "mo": {"id": "m1", "type": "pause", "ok": ["backchannel"], "reply": {"backchannel": "途中で、道を間違えちゃって。"},
                "miss": "你一直不出声，前辈停下来问「……聞いてる？」，聊天有点冷场。", "missEn": "You stayed silent, Tamura stopped to ask 聞いてる？, and the chat went a bit flat.",
                "why": "“～けど”后面停下来，是在等你附和。", "whyEn": "A pause after ～けど is a cue for you to respond.",
                "partner": "说到“けど”停下来，等对方附和", "partnerEn": "Stop after けど and wait"}},
        {"o": "二時間ぐらい、ずっと同じところを歩いていたんですよ。",
         "mo": {"id": "m2", "type": "pause", "ok": ["backchannel"],
                "extraPhrases": {"backchannel": [{"text": "えっ、本当ですか。", "ok": true}, {"text": "それは大変でしたね。", "ok": true}]},
                "reply": {"backchannel": "そうなんですよ。"},
                "miss": "前辈讲到最惊险的地方，你没有反应，前辈觉得你不感兴趣。", "missEn": "At the most exciting part you showed no reaction, and Tamura felt you were not interested.",
                "why": "听到意外的事，用えっ、本当ですか或それは大変でしたね回应。", "whyEn": "For surprising news, respond with えっ、本当ですか or それは大変でしたね.",
                "partner": "说完等一下", "partnerEn": "Pause after saying it"}},
        {"o": "そしたら、地元のおじいさんが「こっちだよ」って教えてくれて、やっと下りられました。",
         "mo": {"id": "m3", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没听清后来怎么下的山，前辈问你感想时你答不上来。", "missEn": "You missed how they got down, and could not answer when Tamura asked what you thought.",
                "why": "太快没听清：すみません＋もう一度お願いします。", "whyEn": "Too fast: すみません + もう一度お願いします.",
                "partner": "这一句说得很快", "partnerEn": "Say this line fast"}},
        {"o": "あ、地元っていうのは、その山の近くに住んでいる人のことね。",
         "mo": {"id": "m4", "type": "none", "word": "地元", "over": "うん、だから、近くに住んでいる人のこと。",
                "why": "前辈自己解释了“地元”，不用打断。", "whyEn": "Tamura explains 地元 himself; no need to interrupt.",
                "partner": "主动解释一个词", "partnerEn": "Explain a word without being asked"}},
        {"o": "リンさんは、山登りとか、好きですか。",
         "mo": {"id": "m5", "type": "think", "ok": ["time"], "reply": {"time": "はい。"},
                "miss": "你沉默了很久，前辈以为问错了话，换了话题。", "missEn": "You were silent so long that Tamura thought he had asked the wrong thing and changed the subject.",
                "why": "要想一想时说えーと或そうですね，不要沉默。", "whyEn": "When you need a moment, say えーと or そうですね rather than going silent.",
                "partner": "问完以后安静地等", "partnerEn": "Ask, then wait quietly"}},
        {"m": "はい、ときどき行きます。"},
        {"o": "じゃあ、今度一緒に行きましょう。"}
      ]
    },
    {
      "id": "dentist-call", "title": "打电话改牙医预约（第 3 步用）", "titleEn": "Phoning the dentist (for step 3)", "step3": true,
      "kcs": ["kt:ja-str-repair-basic", "kt:ja-str-aizuchi"],
      "role": {"me": "想改预约的病人", "meEn": "A patient who wants to change an appointment",
               "other": "さくら歯科（虚构）的前台", "otherEn": "The receptionist at Sakura Dental (fictional)", "otherShort": "前台", "otherShortEn": "Receptionist",
               "goal": "改好预约，弄清日期时间和要带什么", "goalEn": "Change the appointment and get the date, time and what to bring"},
      "lines": [
        {"o": "はい、さくら歯科です。"},
        {"m": "すみません、予約を変えたいんですが。"},
        {"o": "では、来週の水曜日の午後三時か、木曜日の午前十時はいかがでしょうか。",
         "mo": {"id": "m1", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没听清有哪几个时间，随便答了一个。", "missEn": "You did not catch the times and picked one at random.",
                "why": "太快了，请对方重复或说慢一点。", "whyEn": "Too fast: ask them to repeat or slow down.",
                "partner": "这一句说得很快", "partnerEn": "Say this line fast"}},
        {"m": "水曜日でお願いします。"},
        {"o": "当日は、診察券をお持ちください。",
         "mo": {"id": "m2", "type": "word", "word": "診察券", "ok": ["word"], "reply": {"word": "診察券は、この病院のカードです。最初に来たときにお渡ししたカードです。"},
                "miss": "你不知道診察券是什么，当天没带。", "missEn": "You did not know what a 診察券 was and did not bring it.",
                "why": "不认识的词要问。", "whyEn": "Ask about an unknown word.",
                "partner": "说“診察券”，不解释", "partnerEn": "Say 診察券 without explaining"}},
        {"o": "それから、駐車場はありませんので、電車かバスでお越しください。",
         "mo": {"id": "m5", "type": "none", "word": "駐車場", "why": "车不车跟你关系不大，不用打断。", "whyEn": "Parking hardly matters for you here; no need to interrupt.",
                "partner": "顺口说一个跟任务无关的信息", "partnerEn": "Mention something that does not matter for the task"}},
        {"o": "受付で診察券を出していただいて……",
         "mo": {"id": "m3", "type": "pause", "ok": ["backchannel"], "reply": {"backchannel": "お名前が呼ばれるまで、お待ちください。"},
                "miss": "你一直不出声，前台问「もしもし？」。", "missEn": "You stayed silent and the receptionist said もしもし？",
                "why": "电话里看不见点头，更要出声附和。", "whyEn": "On the phone nobody can see you nod, so respond out loud.",
                "partner": "说到“出していただいて”停下来", "partnerEn": "Stop after 出していただいて"}},
        {"o": "では、水曜日の三時でお取りしますね。",
         "mo": {"id": "m4", "type": "number", "ok": ["confirm"],
                "confirm": [{"text": "水曜日の三時ですね。", "ok": true, "reply": "はい、水曜日の午後三時です。"}],
                "miss": "你记错了时间。", "missEn": "You noted the wrong time.",
                "why": "日期时间要复述确认。", "whyEn": "Check the date and time back.",
                "partner": "说完等对方确认", "partnerEn": "Wait for a check-back"}},
        {"m": "はい、よろしくお願いします。"}
      ]
    },
    {
      "id": "class-scissors", "title": "上手工课", "titleEn": "A craft lesson", "child": true,
      "kcs": ["kt:ja-str-repair-basic"],
      "role": {"me": "小学生", "meEn": "A primary-school pupil",
               "other": "老师", "otherEn": "The teacher", "otherShort": "先生", "otherShortEn": "Teacher",
               "goal": "跟着老师做手工", "goalEn": "Follow the teacher in a craft lesson"},
      "lines": [
        {"o": "みなさん、今日は紙で動物を作りましょう。"},
        {"o": "まず、紙を半分に折って、それから角を三角に折ってください。",
         "mo": {"id": "m1", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没跟上，纸折错了。", "missEn": "You did not keep up and folded the paper wrong.",
                "why": "太快了：请老师再说一遍或者说慢一点。", "whyEn": "Too fast: ask the teacher to say it again or more slowly."}},
        {"o": "次に、のりを出してください。",
         "mo": {"id": "m2", "type": "word", "word": "のり", "ok": ["word"], "reply": {"word": "のりは、紙と紙をくっつけるものですよ。"},
                "miss": "你不知道のり是什么，拿出了剪刀。", "missEn": "You did not know what のり was and took out your scissors.",
                "why": "不认识的词，要问这个词。", "whyEn": "An unknown word: ask about the word."}},
        {"o": "好きな動物の顔をかいてね。",
         "mo": {"id": "m3", "type": "none", "word": "動物", "why": "这句你听懂了，不用问，开始画吧。", "whyEn": "You understood this one; no need to ask, just draw."}}
      ]
    }
  ],
  "ack": [
    {"id": "ja-a1", "ctx": "请同事帮忙", "ctxEn": "Asking a colleague for help", "who": "同事", "whoEn": "Colleague",
     "lines": [{"m": "この書類、明日までにお願いできますか。"}, {"o": "はい……はい……明日ですか……ちょっと明日は……"}],
     "answer": "refuse", "why": "开头的はい只是在听；“ちょっと明日は……”把“不行”省掉了，是委婉的拒绝。", "whyEn": "The はい at the start only shows listening; ちょっと明日は…… leaves out the “no”: a gentle refusal."},
    {"id": "ja-a2", "ctx": "定会议时间", "ctxEn": "Setting a meeting time", "who": "同事", "whoEn": "Colleague",
     "lines": [{"m": "来週の会議、三時からでいいですか。"}, {"o": "はい、三時で大丈夫です。"}],
     "answer": "agree", "why": "はい后面有“三時で大丈夫です”，是真的答应。", "whyEn": "After はい comes 三時で大丈夫です: a real yes."},
    {"id": "ja-a3", "ctx": "你在讲路线", "ctxEn": "You are explaining a route", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "まず駅でバスに乗って……"}, {"o": "ええ。"}, {"m": "それから、美術館まで歩いて……"}, {"o": "はい、はい。"}],
     "answer": "listen", "why": "ええ、はい是附和，表示在听，还没有说去不去。", "whyEn": "ええ and はい are listening signals; they have not said whether they will go."},
    {"id": "ja-a4", "ctx": "请朋友帮忙搬家", "ctxEn": "Asking a friend to help you move", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "週末、引っ越しを手伝ってもらえませんか。"}, {"o": "ああ、週末ですか。うーん、そうですね……"}],
     "answer": "refuse", "why": "“うーん、そうですね……”拖长又没说“いいですよ”，多半是不方便、不好直说。", "whyEn": "A drawn-out うーん、そうですね…… with no いいですよ usually means it is inconvenient but hard to say."},
    {"id": "ja-a5", "ctx": "你提出一个方案", "ctxEn": "You propose a plan", "who": "上司", "whoEn": "Manager",
     "lines": [{"m": "この案で進めてもいいですか。"}, {"o": "ええ、ええ。……ただ、予算のところがちょっと気になりますね。"}],
     "answer": "listen", "why": "ええ只是在听；后面提出了顾虑，还没同意。", "whyEn": "ええ is listening; then comes a concern, so it is not a yes yet."},
    {"id": "ja-a6", "ctx": "和朋友约时间", "ctxEn": "Arranging a time with a friend", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "じゃあ、土曜日の十時に駅で。"}, {"o": "うん、わかった。じゃあね。"}],
     "answer": "agree", "why": "“わかった”是明确的答应。", "whyEn": "わかった is a clear yes."}
  ],
  "review": [
    "city-office：市役所窗口实际是否这样说；“十四日ごろ郵便で届きます”只是虚构的流程",
    "senior-story：对前辈用“えっ、本当ですか”“それは大変でしたね”是否自然；“なるほど”对前辈是否该避免（这里没有放进选项）",
    "ja-a4：“うーん、そうですね……”归为委婉拒绝可能有争议，也可能只是在考虑",
    "ja-a5：上司说“ええ、ええ……ただ……”归为“还没表态”是否合适",
    "合成语音读“十四日”“住民票”“診察券”“地元”的读音和降调“え？なに？”是否正确"
  ],
  "reviewEn": [
    "city-office: whether a city-office clerk would really talk like this; the 14th-by-post detail is invented",
    "senior-story: whether えっ、本当ですか and それは大変でしたね are natural to a senior; whether なるほど should be avoided with a senior (not offered here)",
    "ja-a4: classing うーん、そうですね…… as a gentle no may be disputed; it may just be thinking",
    "ja-a5: whether a manager's ええ、ええ……ただ…… should count as “no answer yet”",
    "Whether speech synthesis reads 十四日, 住民票, 診察券 and 地元 correctly, and the falling え？なに？"
  ]
};
KT_DATA["repair-and-backchannel-zh"] = {
  "id": "repair-and-backchannel-zh", "lang": "zh", "speech": "zh-CN",
  "title": "会话修复与接应（汉语）", "titleEn": "Repair and backchannel (Mandarin)",
  "subtitle": "没听懂时请对方再说一遍、说慢一点、解释一个词；讨论时礼貌地插话、追问、拉回话题；也练反过来听：对方的“嗯”不一定是同意。", "subtitleEn": "When you lose track, ask them to repeat, slow down or explain a word; in a discussion, break in politely, ask what they mean and bring the talk back; and listen the other way round: their 嗯 is not always a yes.",
  "voiceNote": "对方的话由浏览器合成语音读出，一个人、安静的环境；声调可能不准。这里听得懂，不等于在真实环境里也听得懂。", "voiceNoteEn": "The other person's lines are read by browser speech synthesis: one voice, no noise, and tones may be off. Following it here does not mean you will in a real place.",
  "ackNote": "“嗯”“对”“是吗”常常只是“我在听”。把它们当成同意，就会以为别人答应了其实没答应的事。", "ackNoteEn": "嗯, 对 and 是吗 often only mean “I'm listening”. Taking them as a yes leads you to think people agreed when they did not.",
  "ordinaryReply": "哦，我刚才说……",
  "types": {
    "fast": {"name": "说得太快", "nameEn": "Too fast"},
    "word": {"name": "不认识的词", "nameEn": "An unknown word"},
    "number": {"name": "数字或关键信息，要复述确认", "nameEn": "A number or key detail to check back"},
    "think": {"name": "对方等你回答，你需要想一想", "nameEn": "They wait for your answer and you need a moment"},
    "vague": {"name": "对方的意思不清楚，要追问确认", "nameEn": "Their meaning is unclear; check what they mean"},
    "offtopic": {"name": "话题跑偏了", "nameEn": "The talk has drifted"},
    "urgent": {"name": "你有问题要插话", "nameEn": "You need to break in with a question"},
    "none": {"name": "看起来有麻烦，其实不用打断", "nameEn": "Looks like trouble, but needs no repair"}
  },
  "phrases": {
    "repeat": [
      {"text": "对不起，我没听清，请再说一遍。", "ok": true},
      {"text": "您能再说一遍吗？", "ok": true},
      {"text": "请说再一遍。", "ok": false, "why": "语序错了，应该是“请再说一遍”。", "whyEn": "Wrong word order: it should be 请再说一遍."},
      {"text": "请又说一遍。", "ok": false, "why": "“又”用于已经发生的重复，请求时用“再”。", "whyEn": "又 is for repetition that has already happened; a request uses 再."},
      {"text": "什么？", "ok": false, "why": "只说“什么？”比较生硬。", "whyEn": "A bare 什么？ is rather blunt."}
    ],
    "slow": [
      {"text": "请说慢一点儿。", "ok": true},
      {"text": "不好意思，请慢一点儿说。", "ok": true},
      {"text": "请一点儿慢说。", "ok": false, "why": "“一点儿”要放在形容词后面：慢一点儿。", "whyEn": "一点儿 goes after the adjective: 慢一点儿."}
    ],
    "word": [
      {"text": "“{w}”是什么意思？", "ok": true},
      {"text": "不好意思，“{w}”是什么意思？", "ok": true},
      {"text": "你是什么意思？", "ok": false, "why": "“你是什么意思？”听起来像质问、不满，问一个词的意思要说出这个词。", "whyEn": "你是什么意思？ sounds like a challenge; to ask about a word, name the word."}
    ],
    "confirm": [
      {"text": "你的意思是……，对吗？", "ok": true}
    ],
    "backchannel": [
      {"text": "嗯。", "ok": true}, {"text": "对。", "ok": true}, {"text": "是吗？", "ok": true}, {"text": "然后呢？", "ok": true}
    ],
    "time": [
      {"text": "嗯……让我想想。", "ok": true},
      {"text": "这个嘛……", "ok": true},
      {"text": "Um… um…", "ok": false, "why": "这是英语的填充词；中文里想词时说“嗯……”“这个……”。", "whyEn": "That is an English filler; in Chinese say 嗯…… or 这个…… while you think."}
    ],
    "interrupt": [
      {"text": "不好意思，我插一句：{x}", "ok": true},
      {"text": "打断一下，{x}", "ok": true},
      {"text": "等等！{x}", "ok": false, "why": "讨论里直接喊“等等！”显得生硬。", "whyEn": "Shouting 等等！ in a discussion sounds abrupt."}
    ],
    "back": [
      {"text": "我们回到刚才的问题吧：{x}", "ok": true},
      {"text": "说回{x}……", "ok": true},
      {"text": "别说了，这个没用。", "ok": false, "why": "太冲，会让对方没面子。", "whyEn": "Too sharp; it makes the speaker lose face."}
    ]
  },
  "dialogues": [
    {
      "id": "ticket-window", "title": "火车站买票", "titleEn": "Buying a train ticket",
      "kcs": ["kt:zh-str-repair-basic"],
      "role": {"me": "要去青山镇（虚构）的留学生", "meEn": "An international student going to Qingshan (fictional)",
               "other": "售票员", "otherEn": "The ticket seller", "otherShort": "售票员", "otherShortEn": "Seller",
               "goal": "买到票，弄清几点、座位和检票口", "goalEn": "Buy a ticket and find out the time, the seat and the gate"},
      "lines": [
        {"o": "您好，去哪儿？"},
        {"m": "我想买一张去青山镇的票。"},
        {"o": "下一班是十点二十的，二等座一百三十五。",
         "mo": {"id": "m1", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没听清几点的车，到了站台才发现车已经开了。", "missEn": "You missed the departure time and reached the platform after the train had left.",
                "why": "说得太快：请对方再说一遍或说慢一点儿。", "whyEn": "Too fast: ask them to repeat or slow down.",
                "partner": "这一句说得很快", "partnerEn": "Say this line fast"}},
        {"m": "好，我要一张。"},
        {"o": "要不要靠窗的？",
         "mo": {"id": "m2", "type": "word", "word": "靠窗", "ok": ["word"], "reply": {"word": "靠窗就是窗户旁边的座位。"},
                "miss": "你没弄清“靠窗”是什么，随口说了“不要”，结果一路看不到风景。", "missEn": "You did not know what 靠窗 meant, said no, and saw nothing of the view all the way.",
                "why": "不认识的词，请对方再说一遍没用，要问这个词。", "whyEn": "With an unknown word, hearing it again does not help: ask about the word.",
                "partner": "说“靠窗”，不解释", "partnerEn": "Say 靠窗 without explaining"}},
        {"m": "要靠窗的，谢谢。"},
        {"o": "车上有餐车，就是可以吃饭的那节车厢。",
         "mo": {"id": "m3", "type": "none", "word": "餐车", "over": "就是吃饭的车厢。",
                "why": "“餐车”对方马上就解释了，不用打断。", "whyEn": "They explain 餐车 straight away; no need to interrupt.",
                "partner": "说完生词马上自己解释", "partnerEn": "Explain the word yourself straight away"}},
        {"o": "在十四号检票口检票。",
         "mo": {"id": "m4", "type": "number", "ok": ["confirm"],
                "confirm": [
                  {"text": "十四号，是吗？", "ok": true, "reply": "对，十四号。"},
                  {"text": "是十四还是四十？", "ok": true, "reply": "十四，一四。"},
                  {"text": "四十号，是吗？", "ok": false, "reply": "不是，是十四号，一四。", "why": "复述里的数字错了，对方马上纠正：这正是复述确认的用处。", "whyEn": "Your check-back had the wrong number and they corrected it: that is what checking back is for."}
                ],
                "miss": "你去找四十号检票口，差点没赶上车。", "missEn": "You looked for gate 40 and nearly missed the train.",
                "why": "“十四”和“四十”很容易听混：数字要复述确认。", "whyEn": "十四 and 四十 are easy to mix up: check numbers back.",
                "partner": "“十四”说得快一点", "partnerEn": "Say 十四 quickly"}},
        {"m": "好的，谢谢！"}
      ]
    },
    {
      "id": "club-discussion", "title": "社团讨论迎新活动", "titleEn": "A club discussion about a welcome event",
      "kcs": ["kt:zh-fn-discussion"],
      "role": {"me": "社团成员", "meEn": "A club member",
               "other": "社长小李", "otherEn": "Xiao Li, who runs the club", "otherShort": "小李", "otherShortEn": "Xiao Li",
               "goal": "把迎新活动的安排弄清楚，问清楚费用", "goalEn": "Get the welcome event clear and find out about the cost"},
      "lines": [
        {"n": "社团在开会，讨论下个月的迎新活动。你想知道一百块的活动费包不包括交通费。", "nEn": "The club is meeting about next month's welcome event. You want to know whether the 100-yuan fee covers transport."},
        {"o": "活动费每人一百块，我们去郊区的农家乐，可以摘草莓、做饭、晚上还有篝火，大家玩一整天，回来以后……",
         "mo": {"id": "m1", "type": "urgent", "ok": ["interrupt"], "x": "这个费用包括交通费吗？", "reply": {"interrupt": "好问题，包括的，我们一起坐大巴去。"},
                "miss": "你一直没问，以为还要自己买车票，结果多花了钱。", "missEn": "You never asked, thought you had to buy your own ticket, and paid twice.",
                "why": "有问题要插话：先说“不好意思，我插一句”。", "whyEn": "To break in with a question, start with 不好意思，我插一句.",
                "partner": "一直说，不停顿", "partnerEn": "Keep talking without a pause"}},
        {"o": "说到农家乐，去年那家的红烧肉真好吃，我吃了三碗饭，还有那个鱼……",
         "mo": {"id": "m2", "type": "offtopic", "ok": ["back"], "x": "这次的时间", "reply": {"back": "哈哈，对，说正事。"},
                "miss": "会开完了，时间还没定。", "missEn": "The meeting ended with no date set.",
                "why": "话题跑偏了：用“我们回到刚才的问题吧”把话拉回来。", "whyEn": "The talk drifted: bring it back with 我们回到刚才的问题吧.",
                "partner": "开始讲去年吃的东西，一直讲", "partnerEn": "Start talking about last year's food and keep going"}},
        {"o": "地点我觉得先不定，看报名情况再说。",
         "mo": {"id": "m3", "type": "vague", "ok": ["confirm"],
                "confirm": [
                  {"text": "你的意思是先报名，再定地点，对吗？", "ok": true, "reply": "对，就是这个意思。"},
                  {"text": "你是说，人多的话就换个大一点的地方？", "ok": true, "reply": "对，人多就换个大的。"},
                  {"text": "你是什么意思？", "ok": false, "reply": "……我是说，先看看多少人报名。", "why": "“你是什么意思？”听起来像不满、质问；用“你的意思是……吗？”确认更礼貌。", "whyEn": "你是什么意思？ sounds like a challenge; checking with 你的意思是……吗？ is more polite."}
                ],
                "miss": "你以为地点已经定了，跟新同学说错了地方。", "missEn": "You thought the place was fixed and told new members the wrong one.",
                "why": "意思不清楚时，用“你的意思是……吗？”追问确认。", "whyEn": "When the meaning is unclear, check with 你的意思是……吗？",
                "partner": "说得含糊一点", "partnerEn": "Say it vaguely"}},
        {"o": "还有个破冰游戏，就是让大家互相认识的小游戏。",
         "mo": {"id": "m4", "type": "none", "word": "破冰游戏", "over": "就是互相认识的小游戏。",
                "why": "“破冰游戏”对方马上就解释了，不用打断。", "whyEn": "They explain 破冰游戏 straight away; no need to interrupt.",
                "partner": "说完马上解释", "partnerEn": "Explain at once"}},
        {"o": "报名截止到下周三，二十五号。",
         "mo": {"id": "m5", "type": "number", "ok": ["confirm"],
                "confirm": [
                  {"text": "下周三，二十五号，对吧？", "ok": true, "reply": "对。"},
                  {"text": "下周三，十五号，对吧？", "ok": false, "reply": "不对，是二十五号。", "why": "复述里的日期错了，对方马上纠正。", "whyEn": "Your check-back had the wrong date and they corrected it."}
                ],
                "miss": "你记成了十五号，提前截止，有人没报上名。", "missEn": "You noted the 15th, closed sign-ups early, and some people missed out.",
                "why": "日期要复述确认。", "whyEn": "Check dates back.",
                "partner": "日期说得快一点", "partnerEn": "Say the date quickly"}},
        {"o": "你怎么看？我们要不要再加一个才艺表演？",
         "mo": {"id": "m6", "type": "think", "ok": ["time"], "reply": {"time": "不着急，你想想。"},
                "miss": "你半天没说话，大家以为你不同意，就没加。", "missEn": "You said nothing for a long time; everyone assumed you were against it, so it was dropped.",
                "why": "要想一想时，说“嗯……让我想想”，不要沉默。", "whyEn": "When you need a moment, say 嗯……让我想想 rather than going silent.",
                "partner": "问完以后安静地等", "partnerEn": "Ask, then wait quietly"}},
        {"m": "我觉得可以加，时间不要太长就行。"},
        {"o": "好，那总的来说：一百块包交通，先报名再定地点，二十五号截止，加一个短的才艺表演。"}
      ]
    },
    {
      "id": "repair-call", "title": "打电话报修空调（第 3 步用）", "titleEn": "Phoning about a broken air conditioner (for step 3)", "step3": true,
      "kcs": ["kt:zh-str-repair-basic"],
      "role": {"me": "住在小区里的留学生", "meEn": "An international student living in a housing estate",
               "other": "物业的工作人员", "otherEn": "The property-management office", "otherShort": "物业", "otherShortEn": "Office",
               "goal": "约好师傅上门修空调", "goalEn": "Arrange for someone to come and fix the air conditioner"},
      "lines": [
        {"o": "喂，您好，物业。"},
        {"m": "您好，我家的空调坏了。"},
        {"o": "好的，请问您住几号楼几单元几零几？",
         "mo": {"id": "m1", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没听清对方问什么，答非所问。", "missEn": "You did not catch the question and answered something else.",
                "why": "太快了，请对方再说一遍或说慢一点儿。", "whyEn": "Too fast: ask them to repeat or slow down.",
                "partner": "这一句说得很快", "partnerEn": "Say this line fast"}},
        {"m": "三号楼二单元五零一。"},
        {"o": "我们安排师傅明天上门，可以吗？",
         "mo": {"id": "m2", "type": "word", "word": "上门", "ok": ["word"], "reply": {"word": "上门就是到您家里来。"},
                "miss": "你不知道“上门”是什么意思，第二天出门了，师傅白跑一趟。", "missEn": "You did not know 上门 meant coming to your home, went out the next day, and the repairer came for nothing.",
                "why": "不认识的词要问。", "whyEn": "Ask about an unknown word.",
                "partner": "说“上门”，不解释", "partnerEn": "Say 上门 without explaining"}},
        {"o": "要是还在保修期，就是买了还不到一年，就不收钱。",
         "mo": {"id": "m3", "type": "none", "word": "保修期", "why": "对方自己解释了“保修期”，不用打断。", "whyEn": "They explain 保修期 themselves; no need to interrupt.",
                "partner": "说完马上解释", "partnerEn": "Explain at once"}},
        {"o": "师傅明天下午三点到。",
         "mo": {"id": "m4", "type": "number", "ok": ["confirm"],
                "confirm": [{"text": "明天下午三点，对吗？", "ok": true, "reply": "对，下午三点。"}],
                "miss": "你记错了时间，师傅来的时候你不在家。", "missEn": "You noted the wrong time and were out when the repairer came.",
                "why": "时间要复述确认。", "whyEn": "Check the time back.",
                "partner": "说完等对方确认", "partnerEn": "Wait for a check-back"}},
        {"m": "好的，谢谢您！"}
      ]
    },
    {
      "id": "class-crayons", "title": "上美术课", "titleEn": "An art lesson", "child": true,
      "kcs": ["kt:zh-str-repair-basic"],
      "role": {"me": "学中文的小学生", "meEn": "A primary-school pupil learning Chinese",
               "other": "老师", "otherEn": "The teacher", "otherShort": "老师", "otherShortEn": "Teacher",
               "goal": "跟着老师画画", "goalEn": "Follow the teacher in an art lesson"},
      "lines": [
        {"o": "同学们好！今天我们画小鱼。"},
        {"o": "请大家把书翻到第十二页，看左边的那条鱼。",
         "mo": {"id": "m1", "type": "fast", "rate": 1.5, "ok": ["repeat", "slow"],
                "miss": "你没跟上，翻错了页。", "missEn": "You did not keep up and turned to the wrong page.",
                "why": "太快了：请老师再说一遍或者说慢一点儿。", "whyEn": "Too fast: ask the teacher to say it again or more slowly."}},
        {"o": "现在拿出你们的彩笔。",
         "mo": {"id": "m2", "type": "word", "word": "彩笔", "ok": ["word"], "reply": {"word": "彩笔就是画画用的、有颜色的笔。"},
                "miss": "你不知道“彩笔”是什么，拿出了铅笔。", "missEn": "You did not know what 彩笔 were and took out a pencil.",
                "why": "不认识的词，要问这个词。", "whyEn": "An unknown word: ask about the word."}},
        {"o": "画一条你喜欢的鱼吧！",
         "mo": {"id": "m3", "type": "none", "word": "鱼", "why": "这句你听懂了，不用问，开始画吧。", "whyEn": "You understood this one; no need to ask, just draw."}}
      ]
    }
  ],
  "ack": [
    {"id": "zh-a1", "ctx": "请朋友帮忙搬家", "ctxEn": "Asking a friend to help you move", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "这个周末你能帮我搬家吗？"}, {"o": "嗯……这个周末啊……我再看看吧。"}],
     "answer": "refuse", "why": "“嗯”只是在听；“我再看看吧”常常是不方便又不好直说。", "whyEn": "嗯 only shows listening; 我再看看吧 often means it is inconvenient but hard to say."},
    {"id": "zh-a2", "ctx": "约见面", "ctxEn": "Arranging to meet", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "我们明天八点在门口见。"}, {"o": "好，八点，不见不散。"}],
     "answer": "agree", "why": "“好，八点，不见不散”是明确的答应。", "whyEn": "好，八点，不见不散 is a clear yes."},
    {"id": "zh-a3", "ctx": "你在讲路线", "ctxEn": "You are explaining a route", "who": "朋友", "whoEn": "Friend",
     "lines": [{"m": "我们先坐地铁到人民广场……"}, {"o": "嗯。"}, {"m": "然后换公交……"}, {"o": "嗯，嗯。"}],
     "answer": "listen", "why": "“嗯”是附和，表示在听，还没说去不去。", "whyEn": "嗯 is a listening signal; they have not said whether they will go."},
    {"id": "zh-a4", "ctx": "你提出一个方案", "ctxEn": "You propose a plan", "who": "同事", "whoEn": "Colleague",
     "lines": [{"m": "这个方案你觉得可以吗？"}, {"o": "嗯，想法挺好的……就是预算可能有点儿紧。"}],
     "answer": "listen", "why": "先肯定，再说“就是……”提出顾虑，还没同意。", "whyEn": "Praise first, then a concern with 就是……: not a yes yet."},
    {"id": "zh-a5", "ctx": "商量叫谁一起去", "ctxEn": "Deciding who to bring", "who": "同学", "whoEn": "Classmate",
     "lines": [{"m": "要不要叫小王一起去？"}, {"o": "行啊，叫上他吧。"}],
     "answer": "agree", "why": "“行啊”是同意。", "whyEn": "行啊 is a yes."},
    {"id": "zh-a6", "ctx": "安排工作", "ctxEn": "Assigning work", "who": "同事", "whoEn": "Colleague",
     "lines": [{"m": "下周的报告你能做吗？"}, {"o": "嗯……下周我手上的事情比较多……"}],
     "answer": "refuse", "why": "没有说“行”，只说事情多，是委婉地说做不了。", "whyEn": "No 行, only that they are busy: a gentle no."}
  ],
  "review": [
    "ticket-window：“二等座一百三十五”只是虚构的价钱；“要不要靠窗的”售票员是否这样问",
    "club-discussion：“说回这次的时间……”是否自然",
    "time：英语母语者是否真的会在中文里用 um 填空（这里作为迁移错误）",
    "zh-a1、zh-a6：“我再看看吧”“事情比较多”归为委婉拒绝可能有地区和个人差异",
    "合成语音读“十四”“四十”“靠窗”的声调是否正确"
  ],
  "reviewEn": [
    "ticket-window: the fare is invented; whether a ticket seller would ask 要不要靠窗的",
    "club-discussion: whether 说回这次的时间…… is natural",
    "time: whether English speakers really fill pauses with um in Chinese (used here as a transfer error)",
    "zh-a1, zh-a6: classing 我再看看吧 and 事情比较多 as gentle refusals may vary by region and person",
    "Whether speech synthesis gets the tones of 十四, 四十 and 靠窗 right"
  ]
};

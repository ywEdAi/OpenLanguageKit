/* Data packs for blocks/exchange-script.html (prim:exchange-script): exchange-script-en, exchange-script-ja, exchange-script-zh.
 *
 * A pack holds several scenarios. Each scenario is a scripted graph of turns, written by hand: nothing is generated,
 * and the page never listens to or judges what the learner says. Open one scenario with ?focus=<scenario id>;
 * ?kc=<kc id> narrows the scenario list to the scenarios that list that KC.
 *
 * Pack format
 *   id, lang, speech (BCP-47 voice for the other person's lines), title(En), subtitle(En)
 *   scenarios  [{
 *     id, title(En), kcs[]            the KCs this scenario serves
 *     child?                          true = shown in the child version (short, concrete, faces instead of scales)
 *     role {me, other, otherShort, goal, rel}   role card; each with a parallel …En field
 *     start                           id of the first node
 *     nodes {<id>: node}
 *   }]
 *   node (a turn)
 *     say       what the other person says, in the target language (may be absent)
 *     narr(En)  a short stage direction in the interface language (what is happening; may be absent)
 *     steps(En) hint 2: names of the usual steps for this turn
 *     model     hint 3 / step 3: one example line for this turn (defaults to the first option with cat "both")
 *     key       true = a key turn: in step 3 the options are hidden and the learner says the line
 *     parts     key turns: [{t, tEn, markers[]}] the components the line needs. markers are reference words; the page
 *               only reports whether typed text contains them and never scores the line.
 *     direct    true = the reverse half: a short, plain line fits best here; longer, more polite lines do worse
 *     opts      [{text (target language) | act + actEn (a non-verbal action, interface language),
 *                 fn, fnEn   what the move is (used in the step-3 "what did I just do" picker and in step 2),
 *                 cat        both | goal | rel | neither | any   (see below),
 *                 r          relationship change on this turn (-1 hurt, +1 repaired; default 0),
 *                 g          goal change (-1 = this choice means the task will only be partly done),
 *                 next       next node id,
 *                 why, whyEn one-sentence reason, shown after step 2 and on the ending card,
 *                 pic        optional emoji for the child version}]
 *     end       {goal: 0 | 1 | 2, note, noteEn}  marks an ending. Task score = end.goal + sum of g on the path;
 *               relationship score = 2 + sum of r on the path (both clamped to 0..2). Passing needs 2 and 2.
 *   cat (one per option, checked in step 2):
 *     both     the task moves forward and the line fits the person and the situation
 *     goal     the task moves forward but the other person is put off (r is usually -1)
 *     rel      nobody is upset, but the task stalls: the other person does not understand, or you never ask
 *              (over-polite and over-long lines, literal translations, saying nothing)
 *     neither  both go wrong
 *     any      several options are equally fine in this turn (not every turn is a trap)
 *   review / reviewEn   items a native teacher should check.
 * Every scenario has at least one turn marked direct (a plain line is best) and at least one dead end the learner
 * must repair. Outcomes describe this situation and this relationship only, never "people who speak X".
 * All lines are original; places, shops and phone numbers are fictional (UK numbers use the 07700 900xxx range set
 * aside for fiction).
 */
KT_DATA["exchange-script-en"] = {
  "id": "exchange-script-en", "lang": "en", "speech": "en-GB",
  "title": "交际回合（英语）", "titleEn": "Exchanges (English)",
  "subtitle": "一段有目的的对话，每一回合选一句，对方按你的选择接话。通关要事情办成、关系也没受损。", "subtitleEn": "A conversation with a purpose. In each turn you choose a line and the other person answers that choice. To pass, the task must get done and the relationship must stay fine.",
  "scenarios": [
    {
      "id": "phone-reschedule", "title": "打电话改预约", "titleEn": "Phoning to move an appointment",
      "kcs": ["kt:en-fn-telephone", "kt:en-fn-appointments", "kt:en-fn-arrangements"],
      "role": {"me": "李娜，诊所的病人", "meEn": "Li Na, a patient at the clinic",
               "other": "牙科诊所前台（Hillview Dental Clinic，虚构）", "otherEn": "The receptionist at a dental clinic (Hillview Dental Clinic, fictional)", "otherShort": "前台", "otherShortEn": "Receptionist",
               "goal": "把星期四上午十点的预约改到这个星期的另一天", "goalEn": "Move your Thursday 10 a.m. appointment to another day this week",
               "rel": "第一次通话，对方不认识你；电话里看不到表情", "relEn": "First call; they do not know you, and on the phone they cannot see your face"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "Good morning, Hillview Dental Clinic. How can I help you?", "key": true,
               "steps": "自报身份 → 说来意", "stepsEn": "Say who you are → say why you are calling",
               "parts": [{"t": "自报身份（This is… / It's…）", "tEn": "Say who you are (This is… / It's…)", "markers": ["this is", "it's", "my name is"]},
                         {"t": "说来意：改哪一个预约", "tEn": "Say why: which appointment to change", "markers": ["appointment", "change", "move", "thursday"]}],
               "opts": [
                 {"text": "Hello, this is Li Na. I have an appointment on Thursday at ten, and I'd like to change it, please.", "fn": "先报名字，再说要改哪个预约", "fnEn": "Give your name, then say which appointment to change", "cat": "both", "next": "n2",
                  "why": "电话里先用 This is… 报身份，再一句话说清来意，对方马上能查到。", "whyEn": "On the phone, This is… says who you are, and one sentence of purpose lets them find you at once."},
                 {"text": "Hello, I am Li Na. I want to change.", "fn": "报名字，但没说改什么", "fnEn": "Give your name but not what to change", "cat": "rel", "next": "n1r",
                  "why": "对方不知道你要改什么；电话里自报身份更常说 This is…。", "whyEn": "They cannot tell what you want to change; on the phone people usually say This is… for their name."},
                 {"text": "Who are you?", "fn": "先问对方是谁", "fnEn": "Ask who they are first", "cat": "neither", "r": -1, "next": "n1w",
                  "why": "对方已经报了诊所名；Who are you? 在电话里听起来很冲。", "whyEn": "They already gave the clinic's name, and Who are you? sounds blunt on the phone."},
                 {"text": "Good morning. I'm so sorry to bother you at such a busy time. I was just wondering if it might perhaps be possible, if it's not too much trouble, to ask about something.", "fn": "层层客气，先不说事", "fnEn": "Layer on politeness before saying what you need", "cat": "rel", "next": "n1r",
                  "why": "客气话很多，可对方还是不知道你要什么，只好再问。", "whyEn": "Lots of politeness, but they still do not know what you want, so they have to ask again."}
               ]},
        "n1w": {"say": "This is Hillview Dental Clinic. Who's calling, please?",
                "opts": [
                  {"text": "Sorry. This is Li Na. I'd like to change my appointment on Thursday, please.", "fn": "道歉，报名字，说来意", "fnEn": "Apologise, give your name, say why", "cat": "both", "r": 1, "next": "n2",
                   "why": "一句 Sorry 把刚才的生硬补回来，再按顺序说清楚。", "whyEn": "A quick Sorry repairs the blunt start, then the call goes in the usual order."},
                  {"text": "Li Na. Thursday. Change.", "fn": "只说几个关键词", "fnEn": "Say only key words", "cat": "goal", "r": -1, "next": "n2",
                   "why": "对方大概能猜到，但听起来像在下命令。", "whyEn": "They can probably guess, but it sounds like an order."}
                ]},
        "n1r": {"say": "Sorry, could you tell me your name and what you need?",
                "opts": [
                  {"text": "Sorry. This is Li Na. I'd like to move my Thursday appointment, please.", "fn": "补上名字和来意", "fnEn": "Add your name and what you need", "cat": "both", "next": "n2",
                   "why": "对方问什么就补什么，对话回到正轨。", "whyEn": "You give exactly what they asked for and the call is back on track."},
                  {"text": "I already said.", "fn": "不补充", "fnEn": "Do not add anything", "cat": "neither", "r": -1, "next": "e-none",
                   "why": "对方没有信息，帮不了你。", "whyEn": "Without the information they cannot help you."}
                ]},
        "n2": {"say": "Of course. What day would suit you instead?",
               "opts": [
                 {"text": "Could I come on Friday morning?", "fn": "问能不能改到星期五上午", "fnEn": "Ask for Friday morning", "cat": "any", "next": "n3", "why": "三种问法都清楚、得体。", "whyEn": "All three are clear and polite."},
                 {"text": "Is Friday morning possible?", "fn": "问能不能改到星期五上午", "fnEn": "Ask for Friday morning", "cat": "any", "next": "n3", "why": "三种问法都清楚、得体。", "whyEn": "All three are clear and polite."},
                 {"text": "Friday morning, if possible.", "fn": "直接说星期五上午", "fnEn": "Just say Friday morning", "cat": "any", "next": "n3", "why": "三种问法都清楚、得体：回答对方的问题时，短句完全可以。", "whyEn": "All three are clear and polite: a short answer to their question is fine."}
               ]},
        "n3": {"say": "I'm sorry, Friday is fully booked. We have Wednesday at four in the afternoon, or next Monday at nine.", "key": true,
               "steps": "接受一个时间 → 道谢", "stepsEn": "Accept a time → thank them",
               "parts": [{"t": "选定一个这个星期的时间", "tEn": "Accept a time this week", "markers": ["wednesday", "four", "4"]},
                         {"t": "道谢或确认", "tEn": "Thank them or confirm", "markers": ["thank", "great", "fine", "perfect"]}],
               "opts": [
                 {"text": "Wednesday at four is fine. Thank you.", "fn": "接受星期三并道谢", "fnEn": "Accept Wednesday and thank them", "cat": "both", "next": "n4",
                  "why": "目标是这个星期，星期三正好。", "whyEn": "You wanted this week, and Wednesday is this week."},
                 {"text": "Monday at nine, please.", "fn": "接受下星期一", "fnEn": "Accept next Monday", "cat": "rel", "g": -1, "next": "n4",
                  "why": "礼貌没问题，但下星期一不在这个星期，目标只完成了一部分。", "whyEn": "Polite enough, but next Monday is not this week, so the task is only partly done."},
                 {"text": "No. I need Friday.", "fn": "坚持要星期五", "fnEn": "Insist on Friday", "cat": "neither", "r": -1, "next": "n3r",
                  "why": "星期五已经满了，坚持没有用，还显得不讲理。", "whyEn": "Friday is full, so insisting does not help and sounds unreasonable."}
               ]},
        "n3r": {"say": "I'm afraid there's nothing on Friday. Would you like to keep Thursday, then?",
                "opts": [
                  {"text": "Sorry, I see. Wednesday at four would be fine, then.", "fn": "改口接受星期三", "fnEn": "Change your mind and take Wednesday", "cat": "both", "r": 1, "next": "n4",
                   "why": "承认对方说得对，接受可行的时间，关系补回来了。", "whyEn": "You accept what is possible and the tone is repaired."},
                  {"text": "OK. Thursday, then.", "fn": "放弃改约", "fnEn": "Give up and keep Thursday", "cat": "rel", "next": "e-none",
                   "why": "没吵架，但预约没改成。", "whyEn": "No argument, but the appointment was not moved."}
                ]},
        "n4": {"say": "Lovely. Can I take a phone number, just in case?",
               "opts": [
                 {"text": "Sure. It's oh seven seven oh oh, nine oh oh, four one two.", "fn": "分组报号码", "fnEn": "Give the number in groups", "cat": "both", "next": "n5",
                  "why": "电话号码分组、用 oh 读 0，对方好记。", "whyEn": "Giving the number in groups, with oh for 0, makes it easy to write down."},
                 {"text": "Zero seven seven zero zero nine zero zero four one two.", "fn": "一口气报完", "fnEn": "Say it all in one go", "cat": "rel", "next": "n4r",
                  "why": "不分组一口气说完，对方记不下来，只好请你再说一遍。", "whyEn": "Without groups it is hard to write down, so they ask you to say it again."}
               ]},
        "n4r": {"say": "Sorry, could you say that again a bit more slowly?",
                "opts": [
                  {"text": "Of course. Oh seven seven oh oh … nine oh oh … four one two.", "fn": "放慢、分组再说", "fnEn": "Say it again slowly, in groups", "cat": "both", "next": "n5",
                   "why": "对方请你重复时，放慢并分组就好。", "whyEn": "When they ask you to repeat, slow down and group the digits."}
                ]},
        "n5": {"say": "Thank you. So that's Wednesday at four. See you then!", "direct": true,
               "opts": [
                 {"text": "Great, thank you. Bye!", "fn": "简短道谢告别", "fnEn": "Thank them briefly and say goodbye", "cat": "both", "next": "e-full",
                  "why": "事情已经说定，简短收尾最合适。", "whyEn": "Everything is settled, so a short close is best."},
                 {"text": "Thank you so much, I really appreciate your help, I'm terribly sorry for all the trouble, thank you again, have a wonderful day.", "fn": "反复道谢道歉", "fnEn": "Thank and apologise again and again", "cat": "rel", "next": "e-full",
                  "why": "不算失礼，但前台很忙，这里不需要这么长。", "whyEn": "Not rude, but the receptionist is busy and none of this is needed here."},
                 {"text": "OK.", "act": "说完 OK 就挂断", "actEn": "Say OK and hang up at once", "fn": "直接挂电话", "fnEn": "Hang up straight away", "cat": "goal", "r": -1, "next": "e-full",
                  "why": "预约改好了，可对方会觉得你有点没礼貌。", "whyEn": "The appointment is moved, but they may think you were a little rude."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "预约改到了星期三下午四点。", "noteEn": "The appointment is now on Wednesday at four."}},
        "e-none": {"end": {"goal": 0, "note": "预约没有改成，还是星期四上午十点。", "noteEn": "The appointment was not moved; it is still Thursday at ten."}}
      }
    },
    {
      "id": "borrow-pen", "title": "向陌生同学借笔", "titleEn": "Borrowing a pen from a stranger",
      "kcs": ["kt:en-fn-requests", "kt:en-can-could-requests", "kt:en-fn-thanks-apologies"],
      "role": {"me": "在图书馆自习的学生，笔没水了", "meEn": "A student studying in the library whose pen has run out",
               "other": "邻桌一个不认识的学生", "otherEn": "A student you do not know at the next table", "otherShort": "邻桌", "otherShortEn": "Student",
               "goal": "借一支笔，用完还回去", "goalEn": "Borrow a pen and give it back afterwards",
               "rel": "陌生人，同龄，图书馆里要小声", "relEn": "A stranger your age; you are in a quiet library"},
      "start": "n1",
      "nodes": {
        "n1": {"narr": "邻桌的学生在看书。你要先开口。", "narrEn": "The student at the next table is reading. You have to speak first.", "key": true,
               "steps": "引起注意 → 请求", "stepsEn": "Get their attention → ask",
               "parts": [{"t": "引起注意（Excuse me / Sorry）", "tEn": "Get attention (Excuse me / Sorry)", "markers": ["excuse me", "sorry"]},
                         {"t": "请求借东西（Could I / Can I borrow…?）", "tEn": "Ask to borrow (Could I / Can I borrow…?)", "markers": ["could i borrow", "can i borrow", "may i borrow"]}],
               "opts": [
                 {"text": "Excuse me, could I borrow a pen for a minute?", "fn": "Excuse me ＋ Could I borrow…?", "fnEn": "Excuse me + Could I borrow…?", "cat": "both", "next": "n2",
                  "why": "先引起注意，再用 Could I borrow…? 请求，对陌生人刚好。", "whyEn": "Get their attention, then ask with Could I borrow…?: just right for a stranger."},
                 {"text": "Please give me your pen.", "fn": "用 Please 加命令句", "fnEn": "Please + an order", "cat": "goal", "r": -1, "next": "n2g",
                  "why": "加了 please 还是命令句，对陌生人显得生硬。", "whyEn": "Even with please it is an order, which sounds rude to a stranger."},
                 {"text": "Could you borrow me your pen?", "fn": "借入借出说反", "fnEn": "Mix up borrow and lend", "cat": "rel", "next": "n1r",
                  "why": "borrow 是借入，lend 是借出；对方一时听不懂你要什么。", "whyEn": "Borrow means take, lend means give; they cannot tell what you want."},
                 {"text": "Sorry, sorry, I'm really sorry to disturb you, I'm so sorry…", "fn": "一直道歉，不说要什么", "fnEn": "Keep apologising without asking", "cat": "rel", "next": "n1r",
                  "why": "道歉很多，可对方不知道你要什么，还以为出了什么事。", "whyEn": "Plenty of apology, but they do not know what you want and wonder what is wrong."}
               ]},
        "n1r": {"say": "Sorry? What do you need?",
                "opts": [
                  {"text": "Sorry — could I borrow your pen, please?", "fn": "说清楚要借笔", "fnEn": "Say clearly that you want to borrow a pen", "cat": "both", "next": "n2",
                   "why": "一句话说清，对方马上明白。", "whyEn": "One clear sentence and they understand at once."},
                  {"text": "Pen.", "fn": "只说一个名词", "fnEn": "Say only the noun", "cat": "goal", "r": -1, "next": "n2g",
                   "why": "对方能懂，但只说名词显得生硬。", "whyEn": "They understand, but a bare noun sounds curt."}
                ]},
        "n2": {"say": "Sure, here you are.",
               "opts": [
                 {"text": "Thanks!", "fn": "道谢", "fnEn": "Say thanks", "cat": "both", "next": "n3", "why": "小事也要说 thanks。", "whyEn": "Even for small things, say thanks."},
                 {"text": "Thank you very much.", "fn": "道谢", "fnEn": "Say thanks", "cat": "both", "next": "n3", "why": "小事也要说 thank you。", "whyEn": "Even for small things, say thank you."},
                 {"act": "接过笔，什么都不说", "actEn": "Take the pen and say nothing", "fn": "不道谢", "fnEn": "Say nothing", "cat": "goal", "r": -1, "next": "n3",
                  "why": "笔借到了，但英语里这种小事不说 thank you 会显得没礼貌。", "whyEn": "You have the pen, but saying nothing for a small favour comes across as rude in English."}
               ]},
        "n2g": {"say": "Um… OK. Here.",
                "opts": [
                  {"text": "Thanks — sorry, that came out wrong.", "fn": "道谢，并为刚才的语气道歉", "fnEn": "Thank them and apologise for your tone", "cat": "both", "r": 1, "next": "n3",
                   "why": "注意到对方有点不舒服，马上补一句，关系就回来了。", "whyEn": "You noticed they were put off and repaired it straight away."},
                  {"act": "接过笔，什么都不说", "actEn": "Take the pen and say nothing", "fn": "不道谢", "fnEn": "Say nothing", "cat": "goal", "r": -1, "next": "n3",
                   "why": "又少了一句谢谢，对方更不舒服了。", "whyEn": "No thanks again; they are even less happy."}
                ]},
        "n3": {"narr": "十分钟后你写完了，要把笔还回去。", "narrEn": "Ten minutes later you have finished and want to give the pen back.", "key": true,
               "steps": "还东西 → 道谢", "stepsEn": "Give it back → thank them",
               "parts": [{"t": "还回去（Here's… / Here you are）", "tEn": "Give it back (Here's… / Here you are)", "markers": ["here's", "here is", "here you are"]},
                         {"t": "道谢", "tEn": "Thank them", "markers": ["thank"]}],
               "opts": [
                 {"text": "Here's your pen. Thanks a lot.", "fn": "还笔并道谢", "fnEn": "Give the pen back and thank them", "cat": "both", "next": "n4", "why": "还东西时再道谢一次。", "whyEn": "Thank them again when you give it back."},
                 {"act": "把笔放在对方桌上就走", "actEn": "Put the pen on their desk and leave", "fn": "放下就走", "fnEn": "Leave it and go", "cat": "goal", "r": -1, "next": "e-full",
                  "why": "笔还了，但一声不响就走，对方会觉得你不太礼貌。", "whyEn": "The pen is back, but leaving without a word seems impolite."}
               ]},
        "n4": {"say": "Oh, thanks for remembering!", "direct": true,
               "opts": [
                 {"text": "No problem.", "fn": "回应对方的感谢", "fnEn": "Reply to their thanks", "cat": "any", "next": "e-full", "why": "回应感谢，简短就好。", "whyEn": "A short reply to thanks is all you need."},
                 {"text": "You're welcome.", "fn": "回应对方的感谢", "fnEn": "Reply to their thanks", "cat": "any", "next": "e-full", "why": "回应感谢，简短就好。", "whyEn": "A short reply to thanks is all you need."},
                 {"text": "Never mind.", "fn": "用 Never mind 回应感谢", "fnEn": "Reply to thanks with Never mind", "cat": "goal", "r": -1, "next": "e-full",
                  "why": "Never mind 意思是“算了、别管了”，不用来回应感谢；对方会有点摸不着头脑。", "whyEn": "Never mind means “forget it”, not a reply to thanks; it sounds odd."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "笔借到了，也还了。", "noteEn": "You borrowed the pen and gave it back."}}
      }
    },
    {
      "id": "invite-decline", "title": "婉拒同学的生日邀请", "titleEn": "Turning down a birthday invitation",
      "kcs": ["kt:en-fn-invitations", "kt:en-fn-suggestions"],
      "role": {"me": "Sam 的同学，星期六要去看姑姑", "meEn": "Sam's classmate; on Saturday you are visiting your aunt",
               "other": "同学 Sam，关系不错", "otherEn": "Your classmate Sam; you get on well", "otherShort": "Sam", "otherShortEn": "Sam",
               "goal": "说清楚星期六去不了，不让 Sam 难过，最好另约时间", "goalEn": "Make it clear you cannot come on Saturday without upsetting Sam, and ideally arrange another time",
               "rel": "朋友之间，课间聊天", "relEn": "Friends, chatting between classes"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "Hey! It's my birthday on Saturday. Would you like to come to dinner with us?", "key": true,
               "steps": "感谢或表示想去 → 说不能去和理由", "stepsEn": "Thank them or say you would like to → say you can't and why",
               "parts": [{"t": "感谢邀请或说想去", "tEn": "Thank them or say you would like to", "markers": ["thank", "love to", "sounds"]},
                         {"t": "说清楚不能去，给理由", "tEn": "Say clearly you can't, with a reason", "markers": ["can't", "cannot", "busy", "visiting", "but"]}],
               "opts": [
                 {"text": "Oh, thanks for asking! I'd love to, but I'm visiting my aunt on Saturday.", "fn": "感谢＋想去＋不能去的理由", "fnEn": "Thanks + would love to + reason you can't", "cat": "both", "next": "n2",
                  "why": "先谢、再说想去、最后给理由，拒绝了也不伤人。", "whyEn": "Thanks, then that you would like to, then the reason: a refusal that does not hurt."},
                 {"text": "No, I don't want.", "fn": "直接说不", "fnEn": "Just say no", "cat": "goal", "r": -1, "next": "n2h",
                  "why": "Sam 知道你不来了，但听起来像不想和他一起。", "whyEn": "Sam knows you are not coming, but it sounds as if you do not want to be with him."},
                 {"text": "Maybe. I'll see.", "fn": "含糊其辞", "fnEn": "Give a vague answer", "cat": "rel", "next": "n1m",
                  "why": "你心里是拒绝，但 Sam 听成了“可能会来”。", "whyEn": "You mean no, but Sam hears “maybe yes”."},
                 {"text": "Yes, of course!", "fn": "先答应下来", "fnEn": "Say yes anyway", "cat": "neither", "next": "n1m",
                  "why": "你去不了却答应了，后面只会更麻烦。", "whyEn": "You cannot go but said yes; it will only get harder later."}
               ]},
        "n1m": {"say": "Great! I'll book a table for you, then. See you at seven!",
                "steps": "说清楚：其实来不了", "stepsEn": "Make it clear: you can't actually come",
                "opts": [
                  {"text": "Wait, sorry — I should have said. I can't come on Saturday. I'm visiting my aunt.", "fn": "马上纠正，说清楚来不了", "fnEn": "Correct it at once: you can't come", "cat": "both", "next": "n2",
                   "why": "在 Sam 订位之前说清楚，还来得及。", "whyEn": "Saying it before Sam books the table still works."},
                  {"text": "OK, see you.", "fn": "不纠正", "fnEn": "Leave it", "cat": "neither", "r": -1, "next": "e-bad",
                   "why": "Sam 会给你留座位，等不到你。", "whyEn": "Sam will keep a seat for you and you will not turn up."}
                ]},
        "n2h": {"say": "Oh… OK. No problem.",
                "opts": [
                  {"text": "Sorry, that sounded rude. I'd love to come, but I'm visiting my aunt. How about lunch next week instead?", "fn": "道歉＋理由＋另约", "fnEn": "Apologise + reason + another time", "cat": "both", "r": 1, "next": "n3",
                   "why": "听出 Sam 有点失望，马上补上理由和替代方案。", "whyEn": "You heard Sam was let down and added the reason and another plan."},
                  {"text": "Bye.", "fn": "就此结束", "fnEn": "End it there", "cat": "goal", "r": -1, "next": "e-cool",
                   "why": "拒绝了，但 Sam 会觉得你不在乎他。", "whyEn": "You refused, but Sam may feel you do not care."}
                ]},
        "n2": {"say": "Oh, that's a shame. Never mind!", "key": true,
               "steps": "提出替代时间", "stepsEn": "Suggest another time",
               "parts": [{"t": "提出另一个时间或活动", "tEn": "Suggest another time or plan", "markers": ["how about", "what about", "another time", "next week", "instead", "why don't we"]}],
               "opts": [
                 {"text": "How about lunch next week instead? My treat!", "fn": "提出另约", "fnEn": "Suggest another time", "cat": "both", "next": "n3",
                  "why": "给一个具体的替代，Sam 知道你是真想见他。", "whyEn": "A concrete alternative shows Sam you really want to meet."},
                 {"text": "Have a great birthday!", "fn": "只祝福，不另约", "fnEn": "Wish them well, no new plan", "cat": "rel", "g": -1, "next": "e-part",
                  "why": "很友好，但没有另约时间，目标只完成一部分。", "whyEn": "Friendly, but no new plan, so the task is only partly done."}
               ]},
        "n3": {"say": "That sounds great! How about Tuesday?", "direct": true,
               "opts": [
                 {"text": "Tuesday's perfect.", "fn": "接受", "fnEn": "Accept", "cat": "any", "next": "e-full", "why": "朋友之间，简短接受就好。", "whyEn": "Between friends, a short yes is all it takes."},
                 {"text": "Sure, see you on Tuesday!", "fn": "接受", "fnEn": "Accept", "cat": "any", "next": "e-full", "why": "朋友之间，简短接受就好。", "whyEn": "Between friends, a short yes is all it takes."},
                 {"text": "I would be most delighted to accept your kind invitation for Tuesday.", "fn": "用很正式的话接受", "fnEn": "Accept very formally", "cat": "rel", "r": -1, "next": "e-full",
                  "why": "对朋友这么正式，听起来像开玩笑或者在拉开距离。", "whyEn": "So formal with a friend that it sounds like a joke or like keeping your distance."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "星期六没去，下星期二和 Sam 一起吃午饭。", "noteEn": "You missed Saturday and are having lunch with Sam on Tuesday."}},
        "e-part": {"end": {"goal": 2, "note": "Sam 知道你星期六不来，但没有另约时间。", "noteEn": "Sam knows you are not coming, but there is no new plan."}},
        "e-cool": {"end": {"goal": 1, "note": "Sam 知道你不来了，可是有点难过。", "noteEn": "Sam knows you are not coming, but feels a bit hurt."}},
        "e-bad": {"end": {"goal": 0, "note": "星期六 Sam 等了你一晚上。", "noteEn": "On Saturday Sam waited for you all evening."}}
      }
    },
    {
      "id": "complaint-order", "title": "餐厅上错了菜", "titleEn": "The wrong dish in a restaurant",
      "kcs": ["kt:en-fn-complaints", "kt:en-fn-thanks-apologies"],
      "role": {"me": "吃素的顾客，点了蔬菜咖喱", "meEn": "A vegetarian customer who ordered the vegetable curry",
               "other": "服务员", "otherEn": "The waiter", "otherShort": "服务员", "otherShortEn": "Waiter",
               "goal": "换成你点的蔬菜咖喱，不吵架", "goalEn": "Get the vegetable curry you ordered, without a row",
               "rel": "普通餐厅，顾客和服务员", "relEn": "An ordinary restaurant; customer and waiter"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "Here you are — the chicken curry.", "key": true,
               "steps": "缓冲 → 说明问题 → 提出要求", "stepsEn": "Softener → the problem → what you want",
               "parts": [{"t": "缓冲（Excuse me / I'm afraid）", "tEn": "Softener (Excuse me / I'm afraid)", "markers": ["excuse me", "i'm afraid", "sorry"]},
                         {"t": "说明问题", "tEn": "Say what is wrong", "markers": ["not what i ordered", "isn't what i ordered", "ordered", "wrong"]},
                         {"t": "提出要求", "tEn": "Say what you want", "markers": ["could i have", "could you", "can i have", "vegetable"]}],
               "opts": [
                 {"text": "Excuse me, I'm afraid this isn't what I ordered. I asked for the vegetable curry.", "fn": "缓冲＋说明问题＋说要什么", "fnEn": "Softener + problem + what you want", "cat": "both", "next": "n2",
                  "why": "I'm afraid 让话不冲，问题和要求一次说清。", "whyEn": "I'm afraid softens it, and the problem and request are both clear."},
                 {"text": "This is wrong! Take it away!", "fn": "发火，命令", "fnEn": "Get angry and give orders", "cat": "goal", "r": -1, "next": "n2a",
                  "why": "服务员会去换，但被吼了会不舒服。", "whyEn": "The waiter will change it, but nobody likes being shouted at."},
                 {"text": "I'm so sorry, I'm really sorry to say this, it's probably my fault, I'm terribly sorry…", "fn": "一直道歉", "fnEn": "Keep apologising", "cat": "rel", "next": "n1c",
                  "why": "道歉太多，服务员听不出你要投诉什么。", "whyEn": "So much apology that the waiter cannot tell what the problem is."},
                 {"text": "Oh, thank you.", "fn": "什么都不说", "fnEn": "Say nothing about it", "cat": "rel", "next": "n1s",
                  "why": "没人不高兴，可你吃不了这道菜。", "whyEn": "Nobody is upset, but you cannot eat this dish."}
               ]},
        "n1c": {"say": "Sorry — is something wrong with the curry?",
                "opts": [
                  {"text": "Yes — I ordered the vegetable curry, not the chicken.", "fn": "直接说清问题", "fnEn": "Say plainly what is wrong", "cat": "both", "next": "n2",
                   "why": "对方问了，就直接回答，不用再道歉。", "whyEn": "They asked, so answer plainly; no more apology needed."}
                ]},
        "n1s": {"narr": "服务员走了。你吃素，这盘吃不了。", "narrEn": "The waiter has gone. You are vegetarian and cannot eat this.",
                "opts": [
                  {"text": "Excuse me! Sorry, I think there's a mistake. I ordered the vegetable curry.", "fn": "叫住服务员，说明问题", "fnEn": "Call the waiter back and explain", "cat": "both", "next": "n2",
                   "why": "晚了一点，但还来得及。", "whyEn": "A little late, but still in time."},
                  {"act": "不吃，一直等着", "actEn": "Do not eat; just wait", "fn": "继续不说", "fnEn": "Keep quiet", "cat": "neither", "next": "e-none",
                   "why": "没人知道出了问题，你饿着肚子走了。", "whyEn": "Nobody knows there is a problem, and you leave hungry."}
                ]},
        "n2a": {"say": "Oh — sorry. I'll check your order.",
                "opts": [
                  {"text": "Sorry, I didn't mean to shout. I ordered the vegetable curry.", "fn": "为语气道歉，再说清", "fnEn": "Apologise for your tone, then explain", "cat": "both", "r": 1, "next": "n2",
                   "why": "补一句道歉，后面就好说了。", "whyEn": "One apology makes the rest easier."},
                  {"text": "Hurry up.", "fn": "催促", "fnEn": "Tell them to hurry", "cat": "goal", "r": -1, "next": "n2",
                   "why": "菜会换，但气氛更差了。", "whyEn": "The dish will be changed, but the mood gets worse."}
                ]},
        "n2": {"say": "Oh, I'm so sorry about that. I'll get you the vegetable curry right away.", "direct": true,
               "opts": [
                 {"text": "That's OK, thank you.", "fn": "接受道歉，道谢", "fnEn": "Accept the apology and thank them", "cat": "any", "next": "e-full", "why": "对方道歉了，简短接受就好。", "whyEn": "They apologised; a short acceptance is enough."},
                 {"text": "No problem, thanks.", "fn": "接受道歉，道谢", "fnEn": "Accept the apology and thank them", "cat": "any", "next": "e-full", "why": "对方道歉了，简短接受就好。", "whyEn": "They apologised; a short acceptance is enough."},
                 {"text": "You should be more careful.", "fn": "批评对方", "fnEn": "Criticise them", "cat": "goal", "r": -1, "next": "e-full", "why": "菜会换，但这句话没有必要。", "whyEn": "The dish will be changed, but this line is unnecessary."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "几分钟后，蔬菜咖喱上来了。", "noteEn": "A few minutes later, the vegetable curry arrives."}},
        "e-none": {"end": {"goal": 0, "note": "你没吃上饭，餐厅也不知道上错了菜。", "noteEn": "You did not eat, and the restaurant never knew about the mistake."}}
      }
    },
    {
      "id": "cafe-counter", "title": "排队买午饭", "titleEn": "Ordering at a busy café counter",
      "kcs": ["kt:en-skill-transactions", "kt:en-would-like"],
      "role": {"me": "赶火车的顾客，后面排着长队", "meEn": "A customer catching a train, with a long queue behind you",
               "other": "咖啡馆柜台的店员", "otherEn": "The person at the café counter", "otherShort": "店员", "otherShortEn": "Staff",
               "goal": "买一个鸡肉三明治和一小杯橙汁，带走", "goalEn": "Buy a chicken sandwich and a small orange juice to take away",
               "rel": "店员和顾客，午饭高峰", "relEn": "Staff and customer at the lunchtime rush"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "Hi, what can I get you?", "direct": true, "key": true,
               "steps": "要什么 → please", "stepsEn": "What you want → please",
               "parts": [{"t": "说出要的东西", "tEn": "Say what you want", "markers": ["sandwich", "juice"]},
                         {"t": "加 please 或用 Can I have / I'd like", "tEn": "Add please, or use Can I have / I'd like", "markers": ["please", "can i have", "i'd like"]}],
               "opts": [
                 {"text": "Can I have a chicken sandwich and a small orange juice, please?", "fn": "Can I have…, please?", "fnEn": "Can I have…, please?", "cat": "both", "next": "n2", "why": "清楚、有礼貌，一句说完。", "whyEn": "Clear and polite, all in one sentence."},
                 {"text": "A chicken sandwich and a small orange juice, please.", "fn": "名词＋please", "fnEn": "The items + please", "cat": "both", "next": "n2", "why": "在柜台前，东西加 please 就够了。", "whyEn": "At a counter, the items plus please is enough."},
                 {"text": "Good afternoon. I hope you're having a nice day. I was wondering whether I might possibly be able to order something, if that's all right with you.", "fn": "很长的客气开场", "fnEn": "A long, polite opening", "cat": "rel", "next": "n1r",
                  "why": "很客气，但到最后也没说要什么，后面的人还在等。", "whyEn": "Very polite, but you still have not said what you want, and people are waiting."},
                 {"text": "Chicken sandwich. Orange juice.", "fn": "只说名词，不加 please", "fnEn": "Bare nouns, no please", "cat": "goal", "r": -1, "next": "n2", "why": "能买到，但没有 please，听起来生硬。", "whyEn": "You will get it, but without please it sounds curt."}
               ]},
        "n1r": {"say": "Sorry — there's a queue. What would you like?",
                "opts": [
                  {"text": "Sorry! A chicken sandwich and a small orange juice, please.", "fn": "直接说要什么", "fnEn": "Say what you want", "cat": "both", "next": "n2", "why": "直接说，店员马上就能做。", "whyEn": "Say it straight and they can get on with it."}
                ]},
        "n2": {"say": "Eat in or take away?",
               "opts": [
                 {"text": "Take away, please.", "fn": "回答：带走", "fnEn": "Answer: take away", "cat": "any", "next": "n3", "why": "回答选择问题，短答就好。", "whyEn": "A short answer to an either-or question is fine."},
                 {"text": "To take away, please.", "fn": "回答：带走", "fnEn": "Answer: take away", "cat": "any", "next": "n3", "why": "回答选择问题，短答就好。", "whyEn": "A short answer to an either-or question is fine."}
               ]},
        "n3": {"say": "That's six pounds forty.",
               "opts": [
                 {"text": "Can I pay by card?", "fn": "问能不能刷卡", "fnEn": "Ask to pay by card", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."},
                 {"act": "把卡贴在读卡器上，说 Thanks", "actEn": "Tap your card on the reader and say Thanks", "fn": "直接刷卡并道谢", "fnEn": "Tap your card and say thanks", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "你拿着三明治和橙汁赶上了火车。", "noteEn": "You catch your train with your sandwich and juice."}}
      }
    },
    {
      "id": "classroom-ruler", "title": "上课没听懂一个词", "titleEn": "A word you don't know in class", "child": true,
      "kcs": ["kt:en-fn-classroom-language", "kt:en-fn-thanks-apologies"],
      "role": {"me": "班上的学生", "meEn": "A pupil in the class",
               "other": "英语老师", "otherEn": "Your English teacher", "otherShort": "老师", "otherShortEn": "Teacher",
               "goal": "弄明白老师要你拿什么", "goalEn": "Find out what the teacher wants you to take out",
               "rel": "上课的时候", "relEn": "During a lesson"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "OK, everyone. Take out your ruler, please.", "narr": "你不知道 ruler 是什么。", "narrEn": "You do not know what a ruler is.", "key": true,
               "steps": "Sorry → 问这个词", "stepsEn": "Sorry → ask about the word",
               "parts": [{"t": "Sorry 或 Excuse me", "tEn": "Sorry or Excuse me", "markers": ["sorry", "excuse me"]},
                         {"t": "问词的意思（What does … mean?）", "tEn": "Ask what it means (What does … mean?)", "markers": ["what does", "mean"]}],
               "opts": [
                 {"text": "Sorry, what does “ruler” mean?", "pic": "🙋", "fn": "问词的意思", "fnEn": "Ask what the word means", "cat": "both", "next": "n2", "why": "先说 Sorry，再问这个词。", "whyEn": "Say Sorry, then ask about the word."},
                 {"text": "What?", "pic": "😠", "fn": "只说 What?", "fnEn": "Just say What?", "cat": "goal", "r": -1, "next": "n1w", "why": "What? 听起来不太礼貌，老师也不知道你哪里不懂。", "whyEn": "What? sounds rude, and the teacher cannot tell what you did not get."},
                 {"act": "不说话，拿出一支铅笔", "actEn": "Say nothing and take out a pencil", "pic": "✏️", "fn": "不问，猜一个", "fnEn": "Guess instead of asking", "cat": "rel", "next": "n1x", "why": "猜错了，还是不知道 ruler 是什么。", "whyEn": "A wrong guess, and you still do not know what a ruler is."}
               ]},
        "n1w": {"say": "Say “Sorry?”, not “What?”. Which word didn't you understand?",
                "opts": [
                  {"text": "Sorry. What does “ruler” mean?", "pic": "🙋", "fn": "问词的意思", "fnEn": "Ask what the word means", "cat": "both", "next": "n2", "why": "说清楚是哪个词。", "whyEn": "Say which word."}
                ]},
        "n1x": {"say": "That's a pencil. Do you know the word “ruler”?",
                "opts": [
                  {"text": "No. Sorry, I don't understand.", "pic": "🙋", "fn": "说没听懂", "fnEn": "Say you do not understand", "cat": "both", "next": "n2", "why": "说没听懂，老师就会解释。", "whyEn": "Say you do not understand, and the teacher will explain."},
                  {"text": "Yes.", "pic": "🙂", "fn": "假装懂了", "fnEn": "Pretend you know", "cat": "rel", "next": "e-none", "why": "老师以为你懂了，就往下讲了。", "whyEn": "The teacher thinks you know and moves on."}
                ]},
        "n2": {"say": "A ruler is this — a long, flat stick for drawing straight lines.", "direct": true,
               "opts": [
                 {"text": "Oh! Thank you.", "pic": "😊", "fn": "道谢", "fnEn": "Say thank you", "cat": "any", "next": "e-full", "why": "说哪句都行。", "whyEn": "Either is fine."},
                 {"text": "OK, thanks!", "pic": "👍", "fn": "道谢", "fnEn": "Say thank you", "cat": "any", "next": "e-full", "why": "说哪句都行。", "whyEn": "Either is fine."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "你拿出了尺子，跟着画了一条直线。", "noteEn": "You take out your ruler and draw a straight line."}},
        "e-none": {"end": {"goal": 0, "note": "大家都在用尺子画线，你还不知道该拿什么。", "noteEn": "Everyone is drawing lines with a ruler, and you still do not know what to take out."}}
      }
    }
  ],
  "review": [
    "phone-reschedule：英式电话号码读法 oh seven seven oh oh, nine oh oh, four one two 是否自然；号码取自英国为影视作品保留的 07700 900xxx 段",
    "borrow-pen：Never mind 回应 thanks for remembering 是否一定显得奇怪（KC 写作典型错误）",
    "invite-decline：I would be most delighted to accept… 对朋友是否会被理解为开玩笑而不是疏远",
    "cafe-counter：Chicken sandwich. Orange juice. 不加 please 在英国柜台的生硬程度；美式柜台可能更常说 for here or to go",
    "所有场景：结局刻度是编写者的判断，请母语教师检查每个 cat 是否合理"
  ],
  "reviewEn": [
    "phone-reschedule: whether the British reading oh seven seven oh oh, nine oh oh, four one two sounds natural; the number is from the UK 07700 900xxx range set aside for drama",
    "borrow-pen: whether Never mind in reply to “thanks for remembering” always sounds odd (the KC lists it as a typical error)",
    "invite-decline: whether “I would be most delighted to accept…” to a friend reads as a joke rather than distance",
    "cafe-counter: how curt “Chicken sandwich. Orange juice.” without please sounds at a British counter; American counters may say “for here or to go”",
    "All scenarios: the outcome scales are the writer's judgement; a native teacher should check each cat"
  ]
};
KT_DATA["exchange-script-ja"] = {
  "id": "exchange-script-ja", "lang": "ja", "speech": "ja-JP",
  "title": "交际回合（日语）", "titleEn": "Exchanges (Japanese)",
  "subtitle": "一段有目的的对话，每一回合选一句，对方按你的选择接话。通关要事情办成、关系也没受损，而且一路没有绕。", "subtitleEn": "A conversation with a purpose. In each turn you choose a line and the other person answers that choice. To pass, the task must get done, the relationship must stay fine, and no turn may stall.",
  "scenarios": [
    {
      "id": "ramen-order", "title": "拉面店点餐", "titleEn": "Ordering at a ramen shop",
      "kcs": ["kt:ja-fn-ordering", "kt:ja-noun-request"],
      "role": {"me": "和两个朋友一起来吃饭的留学生", "meEn": "An international student eating out with two friends",
               "other": "拉面店的店员", "otherEn": "A member of staff at a ramen shop", "otherShort": "店员", "otherShortEn": "Staff",
               "goal": "三个人入座，点一碗拉面和一份饺子，不要饮料", "goalEn": "Get a table for three, order one ramen and one plate of gyoza, no drinks",
               "rel": "店员和客人，店里很忙", "relEn": "Staff and customers; the shop is busy"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "いらっしゃいませ。何名様ですか。",
               "opts": [
                 {"text": "三人です。", "fn": "用“人”回答人数", "fnEn": "Give the number with 人", "cat": "both", "next": "n2", "why": "回答人数用“三人です”就好。", "whyEn": "三人です is all you need to give the number."},
                 {"text": "三名様です。", "fn": "照店员的说法回答", "fnEn": "Answer with the staff's own phrase", "cat": "goal", "r": -1, "next": "n2",
                  "why": "店员能懂，但“様”是对客人的尊称，用在自己身上听起来别扭。", "whyEn": "The staff understand, but 様 honours the customer; using it about yourself sounds odd."},
                 {"text": "三つです。", "fn": "用“つ”数人", "fnEn": "Count people with つ", "cat": "rel", "next": "n1r", "why": "“つ”用来数东西，店员要再确认一次。", "whyEn": "つ counts things, so the staff have to check again."}
               ]},
        "n1r": {"say": "……三名様ですね？",
                "opts": [
                  {"text": "はい、三人です。", "fn": "确认人数", "fnEn": "Confirm the number", "cat": "both", "next": "n2", "why": "用“人”再说一遍，对上了。", "whyEn": "Saying it again with 人 settles it."}
                ]},
        "n2": {"say": "ご注文は？", "direct": true, "key": true,
               "steps": "要的东西＋数量＋お願いします", "stepsEn": "Item + number + お願いします",
               "parts": [{"t": "说出拉面和饺子", "tEn": "Name the ramen and the gyoza", "markers": ["ラーメン", "ぎょうざ", "餃子"]},
                         {"t": "数量（一つ）", "tEn": "The number (一つ)", "markers": ["一つ", "ひとつ"]},
                         {"t": "お願いします 或 ください", "tEn": "お願いします or ください", "markers": ["お願いします", "おねがいします", "ください"]}],
               "opts": [
                 {"text": "ラーメンを一つと、ぎょうざを一つお願いします。", "fn": "东西＋数量＋お願いします", "fnEn": "Item + number + お願いします", "cat": "both", "next": "n3", "why": "点什么、几个，一句说清。", "whyEn": "What and how many, in one sentence."},
                 {"text": "すみません、実はラーメンが食べたいんですが、それから、ぎょうざもいいでしょうか……。", "fn": "铺垫很长再慢慢说", "fnEn": "A long lead-in before ordering", "cat": "rel", "next": "n2r",
                  "why": "在拉面店点单不需要这么多铺垫，店员反而要再确认你点了什么。", "whyEn": "Ordering at a ramen shop needs no lead-in; the staff end up having to check your order."},
                 {"text": "ラーメンがほしいです。ぎょうざもほしいです。", "fn": "用“ほしいです”说想要", "fnEn": "Say what you want with ほしいです", "cat": "rel", "next": "n2r",
                  "why": "听起来像在说自己的愿望，不像点单，店员要确认一次。", "whyEn": "It sounds like a wish rather than an order, so the staff check."}
               ]},
        "n2r": {"say": "ラーメンとぎょうざ、お一つずつでよろしいですか。",
                "opts": [
                  {"text": "はい、お願いします。", "fn": "确认", "fnEn": "Confirm", "cat": "both", "next": "n3", "why": "对上了。", "whyEn": "That settles it."}
                ]},
        "n3": {"say": "お飲み物は？", "key": true,
               "steps": "委婉地说不要", "stepsEn": "Say no, softly",
               "parts": [{"t": "说不要（けっこうです／大丈夫です）", "tEn": "Say no thanks (けっこうです / 大丈夫です)", "markers": ["けっこう", "結構", "大丈夫", "いいです"]}],
               "opts": [
                 {"text": "けっこうです。", "fn": "用けっこうです说不要", "fnEn": "Decline with けっこうです", "cat": "both", "next": "n4", "why": "不要的时候，用这样的说法比只说いいえ柔和。", "whyEn": "A phrase like this is softer than a bare いいえ."},
                 {"text": "大丈夫です。", "fn": "用大丈夫です说不要", "fnEn": "Decline with 大丈夫です", "cat": "both", "next": "n4", "why": "日常对话里常这样说不要。", "whyEn": "A common everyday way to say no thanks."},
                 {"text": "いいえ。", "fn": "只说いいえ", "fnEn": "Just say いいえ", "cat": "goal", "r": -1, "next": "n4", "why": "店员明白了，但只说いいえ有点生硬。", "whyEn": "The staff understand, but a bare いいえ is a little curt."}
               ]},
        "n4": {"say": "以上でよろしいですか。",
               "opts": [
                 {"text": "はい。", "fn": "确认", "fnEn": "Confirm", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "はい、お願いします。", "fn": "确认", "fnEn": "Confirm", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "三个人入座，拉面和饺子都点好了。", "noteEn": "You are seated and the ramen and gyoza are ordered."}}
      }
    },
    {
      "id": "borrow-pen-ja", "title": "向不认识的同学借笔", "titleEn": "Borrowing a pen from a student you don't know",
      "kcs": ["kt:ja-fn-borrow-request"],
      "role": {"me": "在大学教室里，笔没水了", "meEn": "In a university classroom; your pen has run out",
               "other": "旁边座位上不认识的学生", "otherEn": "A student you do not know in the next seat", "otherShort": "同学", "otherShortEn": "Student",
               "goal": "借一支笔，用完还回去", "goalEn": "Borrow a pen and give it back afterwards",
               "rel": "陌生人，同龄，下课前", "relEn": "A stranger your age, just before class ends"},
      "start": "n1",
      "nodes": {
        "n1": {"narr": "旁边的学生在看笔记。你要先开口。", "narrEn": "The student next to you is reading their notes. You have to speak first.", "key": true,
               "steps": "すみません → 请求（貸してください）", "stepsEn": "すみません → ask (貸してください)",
               "parts": [{"t": "すみません 引起注意", "tEn": "すみません to get attention", "markers": ["すみません"]},
                         {"t": "用 貸す 请求（貸してください／貸してもらえませんか）", "tEn": "Ask with 貸す (貸してください / 貸してもらえませんか)", "markers": ["貸して", "かして"]}],
               "opts": [
                 {"text": "すみません、ペンを貸してください。", "fn": "すみません＋貸してください", "fnEn": "すみません + 貸してください", "cat": "both", "next": "n2", "why": "先引起注意，再用“貸す”请求。", "whyEn": "Get their attention, then ask with 貸す (lend)."},
                 {"text": "すみません、ペンを借りてください。", "fn": "用“借りる”请求", "fnEn": "Ask with 借りる", "cat": "rel", "next": "n1r",
                  "why": "“借りる”是借入，这句话的意思变成“请你去借一支笔”，对方听糊涂了。", "whyEn": "借りる means borrow, so this says “please go and borrow a pen”, which confuses them."},
                 {"text": "お忙しいところ大変申し訳ございませんが、もしよろしければ、ペンを一本お貸しいただけないでしょうか。", "fn": "用很郑重的敬语请求", "fnEn": "Ask in very formal keigo", "cat": "goal", "r": -1, "next": "n2",
                  "why": "笔能借到，但对同龄的同学这么郑重，对方会觉得有距离、有点不知所措。", "whyEn": "You will get the pen, but such formality with a student your age feels distant and leaves them unsure how to react."},
                 {"text": "ペン、貸して。", "fn": "不说すみません，用朋友间的说法", "fnEn": "No すみません, friend-style wording", "cat": "goal", "r": -1, "next": "n2",
                  "why": "对不认识的人这样说太随便了。", "whyEn": "Too casual for someone you do not know."}
               ]},
        "n1r": {"say": "え？……私が、借りるんですか？",
                "opts": [
                  {"text": "あ、すみません。ペンを貸してください。", "fn": "改成“貸してください”", "fnEn": "Change to 貸してください", "cat": "both", "next": "n2", "why": "换成“貸す”，对方马上明白了。", "whyEn": "With 貸す they understand at once."}
                ]},
        "n2": {"say": "はい、どうぞ。", "direct": true,
               "opts": [
                 {"text": "ありがとうございます。", "fn": "道谢", "fnEn": "Say thank you", "cat": "any", "next": "n3", "why": "两种都可以：すみません 在这里也表示谢意。", "whyEn": "Both work: すみません here also expresses thanks."},
                 {"text": "あ、すみません。", "fn": "用すみません表示谢意", "fnEn": "Thank them with すみません", "cat": "any", "next": "n3", "why": "两种都可以：すみません 在这里也表示谢意。", "whyEn": "Both work: すみません here also expresses thanks."},
                 {"act": "接过笔，什么都不说", "actEn": "Take the pen and say nothing", "fn": "不道谢", "fnEn": "Say nothing", "cat": "goal", "r": -1, "next": "n3", "why": "借到了，但一句话都不说，对方会觉得不舒服。", "whyEn": "You have the pen, but saying nothing will put them off."}
               ]},
        "n3": {"narr": "下课了，你要把笔还回去。", "narrEn": "Class is over and you want to give the pen back.", "key": true,
               "steps": "还东西 → 道谢（ありがとうございました）", "stepsEn": "Give it back → thanks (ありがとうございました)",
               "parts": [{"t": "还回去（これ）", "tEn": "Give it back (これ)", "markers": ["これ"]},
                         {"t": "道谢（ありがとうございました）", "tEn": "Thank them (ありがとうございました)", "markers": ["ありがとう"]}],
               "opts": [
                 {"text": "これ、ありがとうございました。", "fn": "还笔，用过去形道谢", "fnEn": "Give it back; thank them in the past form", "cat": "both", "next": "e-full", "why": "帮助已经结束，用“ありがとうございました”最自然。", "whyEn": "The favour is over, so ありがとうございました fits best."},
                 {"act": "把笔放在对方桌上就走", "actEn": "Put the pen on their desk and leave", "fn": "放下就走", "fnEn": "Leave it and go", "cat": "goal", "r": -1, "next": "e-full", "why": "笔还了，但一声不响就走，对方会觉得不太礼貌。", "whyEn": "The pen is back, but leaving without a word seems impolite."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "笔借到了，也还了。", "noteEn": "You borrowed the pen and gave it back."}}
      }
    },
    {
      "id": "late-call", "title": "打电话说要迟到", "titleEn": "Phoning to say you will be late",
      "kcs": ["kt:ja-fn-lateness-contact"],
      "role": {"me": "林，学习小组的成员，电车停了", "meEn": "Lin, a member of a study group; your train has stopped",
               "other": "学习小组的负责人田中（比你大几岁）", "otherEn": "Tanaka, who runs the study group (a few years older than you)", "otherShort": "田中", "otherShortEn": "Tanaka",
               "goal": "让田中知道你会晚到大约十五分钟，请大家先开始", "goalEn": "Let Tanaka know you will be about fifteen minutes late and that they should start without you",
               "rel": "不算很熟的前辈；大家已经在等", "relEn": "A senior you do not know very well; everyone is already waiting"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "はい、田中です。", "direct": true, "key": true,
               "steps": "报名字 → 道歉 → 原因 → 大概晚多久", "stepsEn": "Your name → apologise → reason → how late",
               "parts": [{"t": "报名字", "tEn": "Say your name", "markers": ["リン", "林"]},
                         {"t": "道歉（すみません）", "tEn": "Apologise (すみません)", "markers": ["すみません", "申し訳"]},
                         {"t": "原因（～て／～んです）", "tEn": "The reason (～て / ～んです)", "markers": ["電車", "止まって", "んです"]},
                         {"t": "预计时间（～分ぐらい遅れます）", "tEn": "How late (～分ぐらい遅れます)", "markers": ["遅れます", "分"]}],
               "opts": [
                 {"text": "もしもし、リンです。すみません、電車が止まって、十五分ぐらい遅れます。", "fn": "名字＋道歉＋原因＋预计时间", "fnEn": "Name + apology + reason + how late", "cat": "both", "next": "n2",
                  "why": "先道歉，再简单说原因，最后给时间，对方马上知道该怎么办。", "whyEn": "Apology first, a short reason, then the time: they know at once what to do."},
                 {"text": "もしもし、リンです。今日は朝から電車が……駅でずっと待っていて、アナウンスがあって、それで……。", "fn": "先长篇解释原因", "fnEn": "Explain the reason at length first", "cat": "rel", "next": "n1r",
                  "why": "解释了很多，可田中最想知道的是你几点到。", "whyEn": "Lots of explanation, but what Tanaka needs is when you will arrive."},
                 {"text": "もしもし、リンです。すみません、遅いです。", "fn": "用“遅いです”说迟到", "fnEn": "Say you will be late with 遅いです", "cat": "rel", "next": "n1r",
                  "why": "“遅いです”是“慢”，不是“会迟到”；田中听不明白。", "whyEn": "遅いです means “slow”, not “I will be late”; Tanaka does not follow."},
                 {"text": "お忙しいところ大変申し訳ございません。少々お時間よろしいでしょうか……。", "fn": "很郑重的铺垫", "fnEn": "A very formal lead-in", "cat": "rel", "next": "n1r",
                  "why": "大家在等你，这里该直接说迟到的事；郑重的铺垫只会耽误时间。", "whyEn": "Everyone is waiting; this is the moment to say you are late, and a formal lead-in only wastes time."},
                 {"text": "ごめんなさい！遅れる！", "fn": "用对朋友的说法道歉", "fnEn": "Apologise as you would to a friend", "cat": "goal", "r": -1, "next": "n2",
                  "why": "意思传到了，但对不太熟的前辈，“ごめんなさい”和普通体太随便。", "whyEn": "The message gets through, but ごめんなさい and plain form are too casual for a senior you do not know well."}
               ]},
        "n1r": {"say": "えっと……リンさん、今どこですか。何時ごろ着きますか。",
                "opts": [
                  {"text": "すみません、電車が止まっているんです。十五分ぐらい遅れます。", "fn": "说清原因和时间", "fnEn": "Give the reason and the time", "cat": "both", "next": "n2", "why": "对方问什么就答什么，事情说清了。", "whyEn": "You answer what they asked and it is clear."}
                ]},
        "n2": {"say": "わかりました。どうしましょうか。", "key": true,
               "steps": "请对方先开始", "stepsEn": "Ask them to start without you",
               "parts": [{"t": "请对方先开始（先に始めてください）", "tEn": "Ask them to start (先に始めてください)", "markers": ["先に", "始めて"]}],
               "opts": [
                 {"text": "先に始めてください。本当にすみません。", "fn": "请对方先开始，再道歉", "fnEn": "Ask them to start, apologise again", "cat": "both", "next": "e-full", "why": "替大家省时间，再道歉一次。", "whyEn": "It saves everyone time, with one more apology."},
                 {"text": "待ってください。", "fn": "请大家等你", "fnEn": "Ask them to wait for you", "cat": "goal", "r": -1, "g": -1, "next": "e-full", "why": "大家都要多等十五分钟，目标里是请大家先开始。", "whyEn": "Everyone has to wait fifteen more minutes; the goal was to let them start."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "大家先开始了，你到的时候刚好跟上。", "noteEn": "They started without you, and you catch up when you arrive."}}
      }
    },
    {
      "id": "office-phone", "title": "替同事接客户的电话", "titleEn": "Taking a client's call for a colleague",
      "kcs": ["kt:ja-fn-telephone-ja", "kt:ja-soc-business-keigo"],
      "role": {"me": "みどり物産（虚构）营业部的员工", "meEn": "An employee in the sales section of Midori Trading (fictional)",
               "other": "客户公司あおば電機（虚构）的木村", "otherEn": "Kimura from a client company, Aoba Electric (fictional)", "otherShort": "木村", "otherShortEn": "Kimura",
               "goal": "告诉对方同事佐藤不在、三点左右回来，答应让佐藤回电", "goalEn": "Tell the caller your colleague Sato is out until about three and promise a call back",
               "rel": "公司对外的电话；佐藤是你们公司的人，木村是客户", "relEn": "An outside business call; Sato is from your company, Kimura is a client"},
      "start": "n1",
      "nodes": {
        "n1": {"narr": "办公室的电话响了。", "narrEn": "The office phone rings.",
               "opts": [
                 {"text": "はい、みどり物産でございます。", "fn": "报公司名接电话", "fnEn": "Answer with the company name", "cat": "both", "next": "n2", "why": "接公司的电话，直接报公司名。", "whyEn": "On a company line, answer with the company name."},
                 {"text": "もしもし。", "fn": "用もしもし接电话", "fnEn": "Answer with もしもし", "cat": "goal", "r": -1, "next": "n2", "why": "对方还是会说下去，但公司电话用もしもし显得不专业。", "whyEn": "The caller goes on, but もしもし on a business line sounds unprofessional."},
                 {"text": "もしもし、どなたですか。", "fn": "先问对方是谁", "fnEn": "Ask who is calling first", "cat": "goal", "r": -1, "next": "n2", "why": "对客户这样问很生硬。", "whyEn": "Very blunt for a client."}
               ]},
        "n2": {"say": "あおば電機の木村と申します。いつもお世話になっております。営業部の佐藤様はいらっしゃいますか。", "key": true,
               "steps": "回应寒暄 → 说本公司的人不在（不加さん、用谦让语）", "stepsEn": "Return the greeting → say your colleague is out (no さん, humble form)",
               "parts": [{"t": "回应寒暄（お世話になっております）", "tEn": "Return the greeting (お世話になっております)", "markers": ["お世話になっております", "お世話になっています"]},
                         {"t": "称本公司同事只用姓（佐藤）", "tEn": "Your colleague's surname alone (佐藤)", "markers": ["佐藤は"]},
                         {"t": "说不在（席を外しております）", "tEn": "Say he is out (席を外しております)", "markers": ["席を外して", "外出して", "おりません"]}],
               "opts": [
                 {"text": "こちらこそお世話になっております。あいにく佐藤は席を外しております。", "fn": "回应寒暄＋本公司的人不加敬称", "fnEn": "Return the greeting + no honorific for your colleague", "cat": "both", "next": "n3",
                  "why": "对外提本公司的人只说“佐藤”，用谦让的“おります”。", "whyEn": "To an outsider you call your colleague just 佐藤 and use the humble おります."},
                 {"text": "佐藤さんは、今いらっしゃいません。", "fn": "给本公司同事加さん和尊敬语", "fnEn": "Give your colleague さん and an honorific verb", "cat": "goal", "r": -1, "next": "n3",
                  "why": "看起来很礼貌，可是在客户面前抬高了自己公司的人，是商务电话里的失误。", "whyEn": "It looks polite, but it raises your own colleague above the client, which is a mistake on a business call."},
                 {"text": "あ、佐藤さんは今いないです。", "fn": "用日常说法", "fnEn": "Use everyday wording", "cat": "goal", "r": -1, "next": "n3",
                  "why": "意思对，但对客户太随便。", "whyEn": "The meaning is right, but too casual for a client."}
               ]},
        "n3": {"say": "そうですか。何時ごろお戻りになりますか。",
               "opts": [
                 {"text": "三時ごろ戻る予定です。戻りましたら、折り返しお電話いたしましょうか。", "fn": "说回来的时间＋提出回电", "fnEn": "Give the time + offer a call back", "cat": "both", "next": "n4", "why": "给出时间，再主动提出回电。", "whyEn": "Give the time and offer a call back yourself."},
                 {"text": "わかりません。", "fn": "只说不知道", "fnEn": "Just say you do not know", "cat": "neither", "r": -1, "next": "n3r", "why": "对方得不到信息，也觉得被怠慢。", "whyEn": "The caller gets no information and feels brushed off."}
               ]},
        "n3r": {"say": "……そうですか。では、お戻りになったら、お電話をいただけますか。",
                "opts": [
                  {"text": "申し訳ございません。かしこまりました。戻りましたら、すぐにお電話いたします。", "fn": "道歉并答应回电", "fnEn": "Apologise and promise a call back", "cat": "both", "r": 1, "next": "n4", "why": "道歉补回来，答应回电。", "whyEn": "An apology repairs it, and you promise a call back."}
                ]},
        "n4": {"say": "はい、お願いいたします。",
               "opts": [
                 {"text": "かしこまりました。木村様からお電話があったと、佐藤に申し伝えます。", "fn": "确认对方名字，答应转告", "fnEn": "Confirm the name, promise to pass it on", "cat": "both", "next": "n5", "why": "确认名字，用“申し伝えます”答应转告。", "whyEn": "Confirm the name and promise with 申し伝えます to pass it on."},
                 {"text": "わかりました。佐藤さんに言っておきます。", "fn": "用日常说法答应", "fnEn": "Agree in everyday wording", "cat": "goal", "r": -1, "next": "n5", "why": "事情办了，但对客户的说法不合适，也给同事加了さん。", "whyEn": "It gets done, but the wording is wrong for a client and gives your colleague さん."}
               ]},
        "n5": {"say": "よろしくお願いいたします。失礼いたします。", "direct": true,
               "opts": [
                 {"text": "失礼いたします。", "fn": "用失礼いたします结束", "fnEn": "Close with 失礼いたします", "cat": "both", "next": "e-full", "why": "商务电话照这样简短结束。", "whyEn": "A business call ends briefly like this."},
                 {"text": "さようなら。", "fn": "用さようなら结束", "fnEn": "Close with さようなら", "cat": "goal", "r": -1, "next": "e-full", "why": "商务电话不用“さようなら”结束。", "whyEn": "さようなら is not used to close a business call."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "佐藤回来后给木村回了电话。", "noteEn": "Sato called Kimura back when he returned."}}
      }
    },
    {
      "id": "karaoke-decline", "title": "婉拒同学的邀约", "titleEn": "Turning down a classmate's invitation",
      "kcs": ["kt:ja-accept-refuse-invitation", "kt:ja-invitation-masenka", "kt:ja-ndesu"],
      "role": {"me": "留学生，星期六要打工", "meEn": "An international student with a part-time job on Saturday",
               "other": "日本学校的同学山田", "otherEn": "Yamada, a classmate at your Japanese school", "otherShort": "山田", "otherShortEn": "Yamada",
               "goal": "说清楚星期六去不了，不让对方难过", "goalEn": "Make it clear you cannot go on Saturday without hurting Yamada's feelings",
               "rel": "同学，关系还不错，用です・ます体说话", "relEn": "Classmates on good terms who speak in です/ます form"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "土曜日にカラオケに行きませんか。", "key": true,
               "steps": "道歉或道谢 → ちょっと…或简短理由", "stepsEn": "Apologise or thank → ちょっと… or a short reason",
               "parts": [{"t": "道歉或道谢", "tEn": "Apologise or thank", "markers": ["すみません", "ありがとう", "残念"]},
                         {"t": "委婉地说不行（ちょっと…／简短理由）", "tEn": "Say no softly (ちょっと… / a short reason)", "markers": ["ちょっと", "アルバイト", "バイト", "んです"]}],
               "opts": [
                 {"text": "すみません、土曜日はちょっと……。アルバイトなんです。", "fn": "道歉＋ちょっと…＋简短理由", "fnEn": "Apology + ちょっと… + a short reason", "cat": "both", "next": "n2", "why": "道歉、把“不行”说一半，再给一个短理由。", "whyEn": "Apologise, leave the “no” half-said and give a short reason."},
                 {"text": "いいえ、行きません。", "fn": "直接说不去", "fnEn": "Say you are not going", "cat": "goal", "r": -1, "next": "n2h", "why": "意思清楚，但听起来像不想和对方一起。", "whyEn": "Clear, but it sounds as if you do not want to go with them."},
                 {"text": "土曜日はアルバイトが朝九時から夕方六時まであって、そのあと宿題もあって、それに日曜日は……。", "fn": "理由说得很长很细", "fnEn": "Give a long, detailed reason", "cat": "rel", "next": "n1r", "why": "理由太长像在辩解，对方也没听出你到底去不去。", "whyEn": "So long it sounds like an excuse, and they still cannot tell if you are coming."},
                 {"text": "いいですね！", "fn": "先答应", "fnEn": "Say yes anyway", "cat": "neither", "next": "n1y", "why": "去不了却答应了，后面更麻烦。", "whyEn": "You cannot go but said yes; it will only get harder."}
               ]},
        "n1r": {"say": "えっと……じゃあ、土曜日は無理ですか。",
                "opts": [
                  {"text": "はい、すみません。また誘ってください。", "fn": "确认去不了＋留余地", "fnEn": "Confirm you can't + leave the door open", "cat": "both", "next": "e-full", "why": "简短确认，再留个余地。", "whyEn": "A short confirmation and an open door."}
                ]},
        "n1y": {"say": "よかった！じゃ、土曜日の六時に駅で。",
                "opts": [
                  {"text": "あ、すみません、実は土曜日はアルバイトがあるんです……。", "fn": "马上说明其实去不了", "fnEn": "Explain at once you can't really go", "cat": "both", "next": "n2", "why": "趁早说清，还来得及。", "whyEn": "Saying it now is still in time."},
                  {"text": "はい……。", "fn": "不纠正", "fnEn": "Leave it", "cat": "neither", "r": -1, "next": "e-bad", "why": "山田会在车站等你。", "whyEn": "Yamada will wait for you at the station."}
                ]},
        "n2h": {"say": "あ……そうですか。",
                "opts": [
                  {"text": "すみません、土曜日はアルバイトなんです。また誘ってください。", "fn": "补上理由和余地", "fnEn": "Add a reason and an open door", "cat": "both", "r": 1, "next": "e-full", "why": "补上理由，关系就回来了。", "whyEn": "Adding the reason repairs things."},
                  {"act": "不再说什么", "actEn": "Say nothing more", "fn": "不补充", "fnEn": "Add nothing", "cat": "goal", "r": -1, "next": "e-cool", "why": "对方会以为你不想和他玩。", "whyEn": "Yamada may think you do not want to spend time with him."}
                ]},
        "n2": {"say": "そうですか。残念。", "direct": true,
               "opts": [
                 {"text": "また今度お願いします。", "fn": "留余地", "fnEn": "Leave the door open", "cat": "any", "next": "e-full", "why": "两句都可以。", "whyEn": "Either works."},
                 {"text": "また誘ってください。", "fn": "留余地", "fnEn": "Leave the door open", "cat": "any", "next": "e-full", "why": "两句都可以。", "whyEn": "Either works."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "山田知道你星期六不去，下次还会约你。", "noteEn": "Yamada knows you are not coming on Saturday and will ask you again."}},
        "e-cool": {"end": {"goal": 2, "note": "山田知道你不去，但有点失落。", "noteEn": "Yamada knows you are not coming, but feels a little let down."}},
        "e-bad": {"end": {"goal": 0, "note": "星期六山田在车站等了你很久。", "noteEn": "On Saturday Yamada waited a long time for you at the station."}}
      }
    },
    {
      "id": "eraser-friend", "title": "向好朋友借橡皮", "titleEn": "Borrowing an eraser from a friend", "child": true,
      "kcs": ["kt:ja-fn-borrow-request", "kt:ja-fn-classroom-language"],
      "role": {"me": "小学生", "meEn": "A primary-school pupil",
               "other": "同桌的好朋友ゆい，后来是老师", "otherEn": "Yui, your good friend at the same desk, and then the teacher", "otherShort": "ゆい／先生", "otherShortEn": "Yui / Teacher",
               "goal": "借到橡皮；老师说的话没听清，要弄清楚", "goalEn": "Borrow an eraser; then find out what the teacher said",
               "rel": "好朋友之间；上课的时候", "relEn": "Good friends; during a lesson"},
      "start": "n1",
      "nodes": {
        "n1": {"narr": "你忘带橡皮了。", "narrEn": "You forgot your eraser.", "direct": true, "key": true,
               "steps": "叫名字 → 消しゴム、貸して", "stepsEn": "Her name → 消しゴム、貸して",
               "parts": [{"t": "说“貸して”", "tEn": "Say 貸して", "markers": ["貸して", "かして"]}],
               "opts": [
                 {"text": "ゆいちゃん、消しゴム貸して。", "pic": "🙂", "fn": "对朋友直接说", "fnEn": "Ask a friend directly", "cat": "both", "next": "n2", "why": "好朋友之间，这样说最自然。", "whyEn": "Between good friends, this is the most natural."},
                 {"text": "消しゴムを貸していただけないでしょうか。", "pic": "🎩", "fn": "用很客气的说法", "fnEn": "Ask very politely", "cat": "rel", "next": "n1r", "why": "对好朋友这么客气，她以为你在开玩笑或者生气了。", "whyEn": "So polite with a good friend that she thinks you are joking or upset."},
                 {"text": "消しゴム、借りて。", "pic": "❓", "fn": "用“借りて”", "fnEn": "Use 借りて", "cat": "rel", "next": "n1r", "why": "“借りて”是叫她去借，她听糊涂了。", "whyEn": "借りて tells her to borrow one, so she is confused."}
               ]},
        "n1r": {"say": "え？なに？",
                "opts": [
                  {"text": "消しゴム、貸して。", "pic": "🙂", "fn": "对朋友直接说", "fnEn": "Ask a friend directly", "cat": "both", "next": "n2", "why": "说清楚了。", "whyEn": "Now it is clear."}
                ]},
        "n2": {"say": "いいよ。はい。",
               "opts": [
                 {"text": "ありがとう！", "pic": "😊", "fn": "道谢", "fnEn": "Say thank you", "cat": "both", "next": "n3", "why": "朋友之间也要说谢谢。", "whyEn": "Say thank you to friends too."},
                 {"act": "拿过来，什么都不说", "actEn": "Take it and say nothing", "pic": "😶", "fn": "不道谢", "fnEn": "Say nothing", "cat": "goal", "r": -1, "next": "n3", "why": "借到了，可是ゆい有点不高兴。", "whyEn": "You got it, but Yui is a bit unhappy."}
               ]},
        "n3": {"say": "では、三ページを見てください。", "narr": "老师说得很快，你没听清是第几页。", "narrEn": "The teacher spoke fast and you did not catch which page.",
               "opts": [
                 {"text": "先生、もう一度お願いします。", "pic": "🙋", "fn": "请老师再说一遍", "fnEn": "Ask the teacher to say it again", "cat": "both", "next": "n4", "why": "对老师用“お願いします”。", "whyEn": "Use お願いします with the teacher."},
                 {"text": "え？なに？", "pic": "😮", "fn": "用对朋友的说法问", "fnEn": "Ask as you would a friend", "cat": "goal", "r": -1, "next": "n4", "why": "老师会再说，但对老师这样问不太礼貌。", "whyEn": "The teacher will repeat, but this is not polite to a teacher."},
                 {"act": "装作听懂了，不说话", "actEn": "Pretend you understood and say nothing", "pic": "🤐", "fn": "不问", "fnEn": "Do not ask", "cat": "rel", "next": "e-none", "why": "你不知道该翻到哪一页。", "whyEn": "You do not know which page to turn to."}
               ]},
        "n4": {"say": "三ページですよ。",
               "opts": [
                 {"text": "はい！", "pic": "😊", "fn": "回答", "fnEn": "Reply", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "わかりました。", "pic": "👍", "fn": "回答", "fnEn": "Reply", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "你借到了橡皮，也翻到了第三页。", "noteEn": "You have an eraser and you are on page three."}},
        "e-none": {"end": {"goal": 1, "note": "借到了橡皮，但不知道翻到哪一页。", "noteEn": "You have an eraser, but you do not know which page to open."}}
      }
    }
  ],
  "review": [
    "ramen-order：“三名様です”是否应归为“对方不舒服”还是只是“别扭”；拉面店员是否说“何名様ですか”“お一つずつでよろしいですか”",
    "borrow-pen-ja：对不认识的同学，“ペンを貸してください”和“貸してもらえませんか”哪个更自然；“ペン、貸して”对同龄陌生大学生是否一定太随便",
    "late-call：对学习小组负责人用“ごめんなさい！遅れる！”的随便程度；“待ってください”是否会被理解为失礼",
    "office-phone：“いつもお世話になっております”的回应用“こちらこそお世話になっております”是否自然；“申し伝えます”对初次接电话的员工是否合适",
    "karaoke-decline：“すみません、土曜日はちょっと……。アルバイトなんです。”把ちょっと和理由放在一起是否自然",
    "eraser-friend：小学生对同桌是否叫“ゆいちゃん”；“三ページですよ”作为老师的回答是否自然",
    "合成语音读“何名様”“お一つずつ”“申し伝えます”的读音是否正确"
  ],
  "reviewEn": [
    "ramen-order: whether 三名様です belongs under “put off” or is merely odd; whether ramen-shop staff say 何名様ですか and お一つずつでよろしいですか",
    "borrow-pen-ja: to an unknown student, which is more natural, ペンを貸してください or 貸してもらえませんか; whether ペン、貸して is always too casual between university students of the same age",
    "late-call: how casual ごめんなさい！遅れる！ is to the study-group leader; whether 待ってください would be taken as rude",
    "office-phone: whether こちらこそお世話になっております is a natural reply; whether 申し伝えます suits a junior employee",
    "karaoke-decline: whether putting ちょっと…… and a reason together is natural",
    "eraser-friend: whether pupils call a deskmate ゆいちゃん; whether 三ページですよ is natural for the teacher",
    "Whether speech synthesis reads 何名様, お一つずつ and 申し伝えます correctly"
  ]
};
KT_DATA["exchange-script-zh"] = {
  "id": "exchange-script-zh", "lang": "zh", "speech": "zh-CN",
  "title": "交际回合（汉语）", "titleEn": "Exchanges (Mandarin)",
  "subtitle": "一段有目的的对话，每一回合选一句，对方按你的选择接话。通关要事情办成、关系也没受损，而且一路没有绕。", "subtitleEn": "A conversation with a purpose. In each turn you choose a line and the other person answers that choice. To pass, the task must get done, the relationship must stay fine, and no turn may stall.",
  "scenarios": [
    {
      "id": "noodle-shop", "title": "面馆点餐", "titleEn": "Ordering at a noodle shop",
      "kcs": ["kt:zh-fn-ordering", "kt:zh-xiang-yao"],
      "role": {"me": "和朋友来吃午饭的留学生", "meEn": "An international student having lunch with a friend",
               "other": "面馆的服务员", "otherEn": "A server at a noodle shop", "otherShort": "服务员", "otherShortEn": "Server",
               "goal": "两个人，点两碗牛肉面，一碗不要辣，吃完结账", "goalEn": "Two people: order two bowls of beef noodles, one not spicy, then pay",
               "rel": "服务员和客人，中午人很多", "relEn": "Server and customers at a busy lunchtime"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "您好，几位？",
               "opts": [
                 {"text": "两位。", "fn": "说人数", "fnEn": "Say how many", "cat": "any", "next": "n2", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "两个人。", "fn": "说人数", "fnEn": "Say how many", "cat": "any", "next": "n2", "why": "都可以。", "whyEn": "Either is fine."}
               ]},
        "n2": {"say": "吃点儿什么？", "direct": true, "key": true,
               "steps": "来／我要 ＋ 数量 ＋ 量词 ＋ 菜 ＋ 要求", "stepsEn": "来 / 我要 + number + measure word + dish + request",
               "parts": [{"t": "数量和量词在名词前（两碗）", "tEn": "Number and measure word before the noun (两碗)", "markers": ["两碗"]},
                         {"t": "说出要求（不要辣）", "tEn": "Say the request (不要辣)", "markers": ["不要辣", "不辣"]}],
               "opts": [
                 {"text": "来两碗牛肉面，一碗不要辣。", "fn": "来＋数量＋菜＋要求", "fnEn": "来 + number + dish + request", "cat": "both", "next": "n3", "why": "地道的口语点单，一句说清。", "whyEn": "Natural spoken ordering, all in one sentence."},
                 {"text": "我要牛肉面两碗。", "fn": "数量放在名词后面", "fnEn": "Put the number after the noun", "cat": "rel", "next": "n2r", "why": "数量放在后面，服务员要确认一下，也漏了不要辣。", "whyEn": "With the number after the noun the server has to check, and 不要辣 is missing."},
                 {"text": "我可以有两碗牛肉面吗？", "fn": "照英语 Can I have 直译", "fnEn": "A word-for-word Can I have", "cat": "rel", "next": "n2r", "why": "服务员听得懂，但这不是中文点单的说法，还要再确认。", "whyEn": "Understandable, but not how people order in Chinese, so the server checks."},
                 {"text": "请问，如果方便的话，我们可不可以麻烦您，给我们做两碗牛肉面呢？", "fn": "层层客气", "fnEn": "Layer on politeness", "cat": "rel", "next": "n2r", "why": "在面馆点单不用这么客气，太长了反而耽误时间。", "whyEn": "No need for so much politeness when ordering noodles; it just takes longer."}
               ]},
        "n2r": {"say": "两碗牛肉面，是吧？",
                "opts": [
                  {"text": "对，一碗不要辣。", "fn": "确认并补上要求", "fnEn": "Confirm and add the request", "cat": "both", "next": "n3", "why": "对上了。", "whyEn": "That settles it."}
                ]},
        "n3": {"say": "好的。还要别的吗？",
               "opts": [
                 {"text": "不要了，谢谢。", "fn": "说不要了", "fnEn": "Say no more", "cat": "any", "next": "n4", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "就这些。", "fn": "说就这些", "fnEn": "Say that's all", "cat": "any", "next": "n4", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "不想。", "fn": "用“不想”回答", "fnEn": "Answer with 不想", "cat": "rel", "next": "n3r", "why": "“还要别的吗”问的是要不要，不是想不想；回答“不想”很奇怪。", "whyEn": "The question is whether you need anything else, not whether you feel like it; 不想 sounds odd."}
               ]},
        "n3r": {"say": "……那就这些？",
                "opts": [
                  {"text": "对，就这些。", "fn": "说就这些", "fnEn": "Say that's all", "cat": "both", "next": "n4", "why": "对上了。", "whyEn": "That settles it."}
                ]},
        "n4": {"narr": "吃完了，你要结账。", "narrEn": "You have finished and want to pay.", "direct": true,
               "opts": [
                 {"text": "服务员，买单。", "fn": "叫服务员结账", "fnEn": "Call the server to pay", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "服务员，结账。", "fn": "叫服务员结账", "fnEn": "Call the server to pay", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "请给我账单。", "fn": "照英语直译要账单", "fnEn": "A word-for-word request for the bill", "cat": "rel", "next": "n4r", "why": "服务员听得懂，但通常说“买单”或“结账”。", "whyEn": "Understandable, but people usually say 买单 or 结账."}
               ]},
        "n4r": {"say": "您是要结账吗？",
                "opts": [
                  {"text": "对，结账。", "fn": "确认", "fnEn": "Confirm", "cat": "both", "next": "e-full", "why": "对上了。", "whyEn": "That settles it."}
                ]},
        "e-full": {"end": {"goal": 2, "note": "吃上了牛肉面，也结了账。", "noteEn": "You had your beef noodles and paid."}}
      }
    },
    {
      "id": "clinic-call", "title": "打电话改预约", "titleEn": "Phoning to change an appointment",
      "kcs": ["kt:zh-fn-phone-appointments"],
      "role": {"me": "马克，诊所的病人", "meEn": "Mark, a patient at the clinic",
               "other": "阳光口腔诊所（虚构）的前台", "otherEn": "The receptionist at Sunshine Dental Clinic (fictional)", "otherShort": "前台", "otherShortEn": "Receptionist",
               "goal": "把明天上午十点的预约改到星期五", "goalEn": "Move tomorrow's 10 a.m. appointment to Friday",
               "rel": "第一次通话，对方不认识你", "relEn": "First call; they do not know you"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "喂，您好，阳光口腔诊所。", "key": true,
               "steps": "我是…… → 说来意", "stepsEn": "我是… → say why you are calling",
               "parts": [{"t": "用“我是……”介绍自己", "tEn": "Introduce yourself with 我是…", "markers": ["我是"]},
                         {"t": "说来意：改哪个预约", "tEn": "Say why: which appointment to change", "markers": ["预约", "改"]}],
               "opts": [
                 {"text": "您好，我是马克。我预约了明天上午十点，想改一下时间。", "fn": "我是……＋说要改哪个预约", "fnEn": "我是… + which appointment to change", "cat": "both", "next": "n2", "why": "电话里用“我是……”，再一句话说清来意。", "whyEn": "On the phone say 我是…, then the purpose in one sentence."},
                 {"text": "这是马克。我要改约会。", "fn": "照英语 This is… 直译", "fnEn": "A word-for-word This is…", "cat": "rel", "next": "n1r", "why": "“这是马克”在电话里不对；“约会”也容易听成和人约会。", "whyEn": "这是马克 is wrong on the phone, and 约会 sounds like a date."},
                 {"text": "您好，不好意思打扰您了，请问您现在方便说话吗？我想麻烦您一件事情，不知道可不可以……", "fn": "层层客气，先不说事", "fnEn": "Layer on politeness before saying what you need", "cat": "rel", "next": "n1r", "why": "前台就是接电话的，不用这样铺垫；说了半天对方还不知道你是谁、要做什么。", "whyEn": "Answering calls is the receptionist's job, so no lead-in is needed; after all that they still do not know who you are or what you want."},
                 {"text": "你是谁？", "fn": "先问对方是谁", "fnEn": "Ask who they are first", "cat": "neither", "r": -1, "next": "n1r", "why": "对方已经报了诊所名；“你是谁”听起来很不客气。", "whyEn": "They already gave the clinic's name, and 你是谁 sounds rude."}
               ]},
        "n1r": {"say": "请问您是哪位？有什么事吗？",
                "opts": [
                  {"text": "不好意思，我是马克。我想把明天上午十点的预约改一下。", "fn": "道歉，报名字，说来意", "fnEn": "Apologise, give your name, say why", "cat": "both", "r": 1, "next": "n2", "why": "补上名字和来意，回到正轨。", "whyEn": "Name and purpose added; back on track."}
                ]},
        "n2": {"say": "好的，您想改到什么时候？",
               "opts": [
                 {"text": "能不能改到星期五上午？", "fn": "问能不能改到星期五上午", "fnEn": "Ask for Friday morning", "cat": "any", "next": "n3", "why": "都清楚、得体。", "whyEn": "Both are clear and polite."},
                 {"text": "星期五上午可以吗？", "fn": "问能不能改到星期五上午", "fnEn": "Ask for Friday morning", "cat": "any", "next": "n3", "why": "都清楚、得体。", "whyEn": "Both are clear and polite."}
               ]},
        "n3": {"say": "星期五上午已经约满了。下午三点或者四点，您看可以吗？", "key": true,
               "steps": "选一个时间 → 道谢", "stepsEn": "Choose a time → thank them",
               "parts": [{"t": "选定一个时间", "tEn": "Choose a time", "markers": ["三点", "四点"]},
                         {"t": "道谢或确认", "tEn": "Thank them or confirm", "markers": ["谢谢", "好", "可以"]}],
               "opts": [
                 {"text": "那就三点吧，谢谢。", "fn": "选一个时间并道谢", "fnEn": "Choose a time and thank them", "cat": "both", "next": "n4", "why": "接受可行的时间，用“吧”显得随和。", "whyEn": "You take an available time; 吧 keeps it easy-going."},
                 {"text": "不行。", "fn": "直接说不行", "fnEn": "Just say no", "cat": "neither", "r": -1, "next": "n3r", "why": "上午已经满了，只说“不行”对方没法帮你。", "whyEn": "The morning is full; a bare 不行 gives them nothing to work with."}
               ]},
        "n3r": {"say": "那……您看哪天方便？",
                "opts": [
                  {"text": "不好意思。那就星期五下午三点吧。", "fn": "道歉并接受下午", "fnEn": "Apologise and take the afternoon", "cat": "both", "r": 1, "next": "n4", "why": "改口接受，关系补回来了。", "whyEn": "You accept and the tone is repaired."},
                  {"text": "算了，不改了。", "fn": "放弃改约", "fnEn": "Give up", "cat": "rel", "next": "e-none", "why": "没吵架，但预约没改成。", "whyEn": "No argument, but the appointment was not moved."}
                ]},
        "n4": {"say": "好的，星期五下午三点。到时候见。", "direct": true,
               "opts": [
                 {"text": "好的，谢谢，再见！", "fn": "道谢告别", "fnEn": "Thank them and say goodbye", "cat": "both", "next": "e-full", "why": "事情定了，简短结束。", "whyEn": "It is settled; end briefly."},
                 {"act": "直接挂电话", "actEn": "Hang up without a word", "fn": "直接挂电话", "fnEn": "Hang up straight away", "cat": "goal", "r": -1, "next": "e-full", "why": "改成了，但不说再见就挂，对方会觉得没礼貌。", "whyEn": "It is changed, but hanging up without goodbye seems rude."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "预约改到了星期五下午三点。", "noteEn": "The appointment is now Friday at three."}},
        "e-none": {"end": {"goal": 0, "note": "预约没改，还是明天上午十点。", "noteEn": "The appointment was not changed; it is still tomorrow at ten."}}
      }
    },
    {
      "id": "headphones-return", "title": "耳机坏了去换", "titleEn": "Exchanging broken headphones",
      "kcs": ["kt:zh-fn-complaints", "kt:zh-fn-thanks-apologies"],
      "role": {"me": "昨天在这家店买了耳机的顾客", "meEn": "A customer who bought headphones here yesterday",
               "other": "店员", "otherEn": "A shop assistant", "otherShort": "店员", "otherShortEn": "Assistant",
               "goal": "换一副新耳机，不吵架", "goalEn": "Get a new pair, without a row",
               "rel": "顾客和店员", "relEn": "Customer and shop assistant"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "您好，有什么可以帮您？", "key": true,
               "steps": "说明经过和问题 → 提出要求（能……吗？）", "stepsEn": "What happened and the problem → the request (能…吗？)",
               "parts": [{"t": "说明问题（坏了／没声音了）", "tEn": "Say what is wrong (坏了 / 没声音了)", "markers": ["坏了", "没声音", "不能用", "有问题"]},
                         {"t": "提出要求（能换一个吗？）", "tEn": "The request (能换一个吗？)", "markers": ["换一个", "能换", "换"]}],
               "opts": [
                 {"text": "我昨天在这儿买的耳机，左边没声音了，能换一个吗？", "fn": "经过＋问题＋能……吗", "fnEn": "What happened + problem + 能…吗", "cat": "both", "next": "n2", "why": "先说情况，再用“能……吗”提要求。", "whyEn": "Say what happened, then ask with 能…吗."},
                 {"text": "这个耳机不工作。", "fn": "照英语 doesn't work 直译", "fnEn": "A word-for-word doesn't work", "cat": "rel", "next": "n1r", "why": "“不工作”说的是人，店员要想一下你的意思。", "whyEn": "不工作 is said of people; the assistant has to work out what you mean."},
                 {"text": "你们的东西不好，给我钱！", "fn": "发火要退钱", "fnEn": "Get angry and demand money", "cat": "goal", "r": -1, "next": "n1h", "why": "店员会处理，但被这样说会不舒服。", "whyEn": "The assistant will deal with it, but nobody likes being spoken to like that."},
                 {"text": "不好意思，打扰您了，真的很抱歉，可能是我自己用得不对，也可能是我的问题，真不好意思……", "fn": "一直道歉", "fnEn": "Keep apologising", "cat": "rel", "next": "n1r", "why": "道歉太多，店员听不出你要做什么。", "whyEn": "So much apology that the assistant cannot tell what you want."}
               ]},
        "n1r": {"say": "您是说……这个耳机有什么问题吗？",
                "opts": [
                  {"text": "对，左边没声音了，能换一个吗？", "fn": "说清问题和要求", "fnEn": "State the problem and the request", "cat": "both", "next": "n2", "why": "一句说清。", "whyEn": "Clear in one sentence."}
                ]},
        "n1h": {"say": "您先别着急。是什么问题？",
                "opts": [
                  {"text": "不好意思，我有点儿急。左边没声音了，能换一个吗？", "fn": "为语气道歉，再说清", "fnEn": "Apologise for the tone, then explain", "cat": "both", "r": 1, "next": "n2", "why": "补一句道歉，后面就好说了。", "whyEn": "One apology makes the rest easier."}
                ]},
        "n2": {"say": "不好意思。小票带了吗？", "direct": true,
               "opts": [
                 {"text": "带了，给您。", "fn": "拿出小票", "fnEn": "Hand over the receipt", "cat": "any", "next": "n3", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "带了。", "fn": "拿出小票", "fnEn": "Hand over the receipt", "cat": "any", "next": "n3", "why": "都可以。", "whyEn": "Either is fine."}
               ]},
        "n3": {"say": "好的，给您换一副新的。实在不好意思。",
               "opts": [
                 {"text": "没关系，谢谢。", "fn": "接受道歉并道谢", "fnEn": "Accept the apology and thank them", "cat": "both", "next": "e-full", "why": "对方道歉，用“没关系”回应。", "whyEn": "They apologised, so reply with 没关系."},
                 {"text": "不客气。", "fn": "用“不客气”回应道歉", "fnEn": "Reply to the apology with 不客气", "cat": "rel", "next": "e-full", "why": "“不客气”是回应感谢的；回应道歉要说“没关系”。店员会愣一下。", "whyEn": "不客气 answers thanks; an apology takes 没关系. The assistant is a little puzzled."},
                 {"text": "下次注意点儿。", "fn": "批评对方", "fnEn": "Criticise them", "cat": "goal", "r": -1, "next": "e-full", "why": "换到了，但这句话没有必要。", "whyEn": "You get the exchange, but the remark is unnecessary."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "你拿到了一副新耳机。", "noteEn": "You have a new pair of headphones."}}
      }
    },
    {
      "id": "hike-invite", "title": "婉拒爬山的邀请", "titleEn": "Turning down a hiking invitation",
      "kcs": ["kt:zh-fn-invite-suggest"],
      "role": {"me": "留学生，这个周末要去朋友家", "meEn": "An international student visiting a friend this weekend",
               "other": "同学小王", "otherEn": "Your classmate Xiao Wang", "otherShort": "小王", "otherShortEn": "Xiao Wang",
               "goal": "说清楚这个周末去不了，不让小王难过，另约时间", "goalEn": "Make it clear you cannot go this weekend without upsetting Xiao Wang, and arrange another time",
               "rel": "关系不错的同学", "relEn": "Classmates who get on well"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "周末我们一起去爬山吧！", "key": true,
               "steps": "道歉 → 理由 → 下次吧", "stepsEn": "Apologise → reason → next time",
               "parts": [{"t": "道歉（不好意思／对不起）", "tEn": "Apologise (不好意思 / 对不起)", "markers": ["不好意思", "对不起"]},
                         {"t": "理由（我有事……）", "tEn": "A reason (我有事…)", "markers": ["有事", "要去"]},
                         {"t": "替代（下次吧）", "tEn": "An alternative (下次吧)", "markers": ["下次"]}],
               "opts": [
                 {"text": "不好意思，周末我有事，下次吧！", "fn": "道歉＋理由＋下次", "fnEn": "Apology + reason + next time", "cat": "both", "next": "n2", "why": "先道歉，再说理由，最后给个替代。", "whyEn": "Apologise, give a reason, offer an alternative."},
                 {"text": "不，我不去。", "fn": "直接说不", "fnEn": "Just say no", "cat": "goal", "r": -1, "next": "n1h", "why": "语法没错，但听起来像不想和小王一起。", "whyEn": "Grammatical, but it sounds as if you do not want to go with him."},
                 {"text": "非常感谢您的盛情邀请。很遗憾，本周末我已另有安排，恐怕无法参加，敬请谅解。", "fn": "用很正式的书面语婉拒", "fnEn": "Decline in very formal written style", "cat": "goal", "r": -1, "next": "n2", "why": "意思清楚，但对同学说话像写公函，小王会觉得你在拉开距离。", "whyEn": "Clear, but it sounds like an official letter; Xiao Wang may feel you are keeping your distance."},
                 {"text": "让我们下次去吧。", "fn": "照 Let's 直译", "fnEn": "A word-for-word Let's", "cat": "rel", "next": "n1r", "why": "“让我们”口语里很生硬，而且没说这个周末去不去。", "whyEn": "让我们 is stiff in speech, and you have not said whether you can go this weekend."}
               ]},
        "n1r": {"say": "下次？那这个周末你去不去？",
                "opts": [
                  {"text": "不好意思，这个周末我要去朋友家，去不了。下次一起去吧！", "fn": "说清楚去不了＋下次", "fnEn": "Say you can't + next time", "cat": "both", "next": "n2", "why": "说清楚了。", "whyEn": "Now it is clear."}
                ]},
        "n1h": {"say": "……哦，好吧。",
                "opts": [
                  {"text": "不好意思，我周末要去朋友家。下次一起去吧！", "fn": "补上理由和下次", "fnEn": "Add the reason and next time", "cat": "both", "r": 1, "next": "n2", "why": "补上理由，关系就回来了。", "whyEn": "Adding the reason repairs things."},
                  {"act": "不再说什么", "actEn": "Say nothing more", "fn": "不补充", "fnEn": "Add nothing", "cat": "goal", "r": -1, "next": "e-cool", "why": "小王会以为你不想和他玩。", "whyEn": "Xiao Wang may think you do not want to spend time with him."}
                ]},
        "n2": {"say": "好吧，那下个周末怎么样？", "direct": true,
               "opts": [
                 {"text": "好啊！", "fn": "接受", "fnEn": "Accept", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Any of them is fine."},
                 {"text": "没问题！", "fn": "接受", "fnEn": "Accept", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Any of them is fine."},
                 {"text": "下个周末可以。", "fn": "接受", "fnEn": "Accept", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Any of them is fine."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "这个周末没去，下个周末一起去爬山。", "noteEn": "Not this weekend, but you are hiking together next weekend."}},
        "e-cool": {"end": {"goal": 1, "note": "小王知道你不去，可是没有另约，他也有点失落。", "noteEn": "Xiao Wang knows you are not going, but there is no new plan and he feels let down."}}
      }
    },
    {
      "id": "market-hat", "title": "夜市买帽子，商场买鞋", "titleEn": "A hat at a night market, shoes at a mall",
      "kcs": ["kt:zh-fn-shopping", "kt:zh-money-prices"],
      "role": {"me": "逛夜市的留学生", "meEn": "An international student at a night market",
               "other": "夜市小摊的摊主；第二天是商场的店员", "otherEn": "A stall-holder at a night market; the next day, a shop assistant at a mall", "otherShort": "摊主／店员", "otherShortEn": "Seller",
               "goal": "在夜市讲讲价买一顶帽子；第二天在商场买一双标了价的鞋", "goalEn": "Haggle a little for a hat at the night market; the next day buy a pair of price-tagged shoes at a mall",
               "rel": "买卖双方，第一次见", "relEn": "Buyer and seller meeting for the first time"},
      "start": "n1",
      "nodes": {
        "n1": {"say": "看看吧，这个帽子很好看。",
               "opts": [
                 {"text": "这个多少钱？", "fn": "问价", "fnEn": "Ask the price", "cat": "any", "next": "n2", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "这个怎么卖？", "fn": "问价", "fnEn": "Ask the price", "cat": "any", "next": "n2", "why": "都可以。", "whyEn": "Either is fine."}
               ]},
        "n2": {"say": "八十。", "key": true,
               "steps": "嫌贵 → 能便宜一点儿吗？", "stepsEn": "Too expensive → 能便宜一点儿吗？",
               "parts": [{"t": "能便宜一点儿吗（“一点儿”在形容词后）", "tEn": "能便宜一点儿吗 (一点儿 after the adjective)", "markers": ["便宜一点", "便宜点"]}],
               "opts": [
                 {"text": "太贵了，能便宜一点儿吗？", "fn": "嫌贵＋请对方便宜一点儿", "fnEn": "Too dear + ask for a bit less", "cat": "both", "next": "n3", "why": "在小摊上讲价很常见，这样说正合适。", "whyEn": "Haggling is common at stalls, and this is just the way to do it."},
                 {"text": "请给我更便宜。", "fn": "照英语 cheaper 直译", "fnEn": "A word-for-word cheaper", "cat": "rel", "next": "n2r", "why": "摊主得想一想你要什么。", "whyEn": "The seller has to work out what you mean."},
                 {"text": "能一点儿便宜吗？", "fn": "“一点儿”放在形容词前", "fnEn": "一点儿 before the adjective", "cat": "rel", "next": "n2r", "why": "语序错了，摊主要确认一下。", "whyEn": "The word order is off, so the seller checks."}
               ]},
        "n2r": {"say": "你是想便宜一点儿？",
                "opts": [
                  {"text": "对，能便宜一点儿吗？", "fn": "请对方便宜一点儿", "fnEn": "Ask for a bit less", "cat": "both", "next": "n3", "why": "对上了。", "whyEn": "That settles it."}
                ]},
        "n3": {"say": "六十，不能再少了。",
               "opts": [
                 {"text": "好，我要了。可以用手机付吗？", "fn": "接受并问付款方式", "fnEn": "Accept and ask how to pay", "cat": "both", "next": "n4", "why": "价钱合适就买。", "whyEn": "A fair price; buy it."},
                 {"text": "五十五吧？", "fn": "再还一次价", "fnEn": "Make one more offer", "cat": "both", "next": "n3b", "why": "小摊上再还一次价也正常。", "whyEn": "One more offer is normal at a stall."}
               ]},
        "n3b": {"say": "好吧好吧，五十五，给你。",
                "opts": [
                  {"text": "谢谢！可以用手机付吗？", "fn": "道谢并问付款方式", "fnEn": "Thank and ask how to pay", "cat": "both", "next": "n4", "why": "成交了。", "whyEn": "Deal done."}
                ]},
        "n4": {"say": "可以，扫这儿。", "narr": "第二天，你在商场的鞋店。鞋上的标签写着 ¥399。", "narrEn": "The next day you are in a shoe shop at a mall. The price tag says ¥399.",
               "opts": [
                 {"text": "好的，谢谢。", "fn": "付款道谢", "fnEn": "Pay and thank them", "cat": "both", "next": "n5", "why": "付款，道谢。", "whyEn": "Pay and say thanks."}
               ]},
        "n5": {"say": "这双鞋三百九十九，您要试试吗？", "direct": true,
               "opts": [
                 {"text": "好，我试试。……就要这双。", "fn": "试鞋，然后买", "fnEn": "Try them on, then buy", "cat": "both", "next": "e-full", "why": "商场明码标价，直接买就好。", "whyEn": "Prices at a mall are fixed; just buy them."},
                 {"text": "太贵了，便宜一点儿吧，我是学生，三百卖不卖？", "fn": "在商场讲价", "fnEn": "Haggle at the mall", "cat": "rel", "next": "n5r", "why": "在明码标价的商场里一般不讲价，店员只能拒绝。", "whyEn": "People usually do not haggle where prices are marked; the assistant can only say no."}
               ]},
        "n5r": {"say": "不好意思，我们这儿是明码标价，不讲价的。",
                "opts": [
                  {"text": "好的，那我就要这双。", "fn": "接受标价，买下", "fnEn": "Accept the price and buy", "cat": "both", "next": "e-full", "why": "接受标价，事情就办成了。", "whyEn": "Accept the marked price and it is done."}
                ]},
        "e-full": {"end": {"goal": 2, "note": "帽子讲到了好价钱，鞋也买到了。", "noteEn": "You got the hat for a good price and bought the shoes."}}
      }
    },
    {
      "id": "school-morning", "title": "早上见到老师", "titleEn": "Meeting your teacher in the morning", "child": true,
      "kcs": ["kt:zh-fn-greetings", "kt:zh-fn-thanks-apologies", "kt:zh-fn-classroom-language"],
      "role": {"me": "学中文的小学生", "meEn": "A primary-school pupil learning Chinese",
               "other": "王老师", "otherEn": "Your teacher, Ms Wang", "otherShort": "王老师", "otherShortEn": "Ms Wang",
               "goal": "跟老师打招呼，帮老师捡笔，问一个词用中文怎么说", "goalEn": "Greet your teacher, pick up her pen, and ask how to say a word in Chinese",
               "rel": "学生和老师", "relEn": "Pupil and teacher"},
      "start": "n1",
      "nodes": {
        "n1": {"narr": "早上在学校门口，你看见王老师。", "narrEn": "In the morning at the school gate you see Ms Wang.", "direct": true,
               "opts": [
                 {"text": "王老师好！", "pic": "👋", "fn": "称呼＋好", "fnEn": "Title + 好", "cat": "both", "next": "n2", "why": "对老师说“老师好”。", "whyEn": "Say 老师好 to a teacher."},
                 {"text": "老师早上好！", "pic": "🌅", "fn": "老师＋早上好", "fnEn": "老师 + 早上好", "cat": "both", "next": "n2", "why": "对老师说“老师早上好”也很好。", "whyEn": "老师早上好 is good too."},
                 {"text": "好老师！", "pic": "❓", "fn": "照英语语序说", "fnEn": "Use English word order", "cat": "rel", "next": "n1r", "why": "“好老师”的意思是 good teacher，老师笑了。", "whyEn": "好老师 means “a good teacher”, and the teacher laughs."}
               ]},
        "n1r": {"say": "哈哈，是“老师好”吧？",
                "opts": [
                  {"text": "老师好！", "pic": "👋", "fn": "称呼＋好", "fnEn": "Title + 好", "cat": "both", "next": "n2", "why": "对了。", "whyEn": "That's it."}
                ]},
        "n2": {"say": "谢谢你！", "narr": "王老师的笔掉了，你帮她捡起来。", "narrEn": "Ms Wang dropped her pen and you picked it up for her.",
               "opts": [
                 {"text": "不客气！", "pic": "😊", "fn": "回应感谢", "fnEn": "Reply to thanks", "cat": "any", "next": "n3", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "不用谢！", "pic": "🙂", "fn": "回应感谢", "fnEn": "Reply to thanks", "cat": "any", "next": "n3", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "没关系！", "pic": "❓", "fn": "用“没关系”回应感谢", "fnEn": "Reply to thanks with 没关系", "cat": "rel", "next": "n2r", "why": "“没关系”是回答“对不起”的。", "whyEn": "没关系 answers 对不起, not thanks."}
               ]},
        "n2r": {"say": "“没关系”是回答“对不起”的。别人说“谢谢”，你可以说……",
                "opts": [
                  {"text": "不客气！", "pic": "😊", "fn": "回应感谢", "fnEn": "Reply to thanks", "cat": "both", "next": "n3", "why": "对了。", "whyEn": "That's it."}
                ]},
        "n3": {"narr": "上课了。你想知道 eraser 用中文怎么说。", "narrEn": "Class starts. You want to know how to say “eraser” in Chinese.", "key": true,
               "steps": "老师 → X 用中文怎么说？", "stepsEn": "老师 → X 用中文怎么说？",
               "parts": [{"t": "用“……用中文怎么说？”", "tEn": "Use “…用中文怎么说？”", "markers": ["用中文怎么说"]}],
               "opts": [
                 {"text": "老师，eraser 用中文怎么说？", "pic": "🙋", "fn": "X 用中文怎么说？", "fnEn": "X 用中文怎么说？", "cat": "both", "next": "n4", "why": "问说法就这样问。", "whyEn": "That is how to ask."},
                 {"text": "怎么说 eraser 用中文？", "pic": "❓", "fn": "照英语语序问", "fnEn": "Ask in English word order", "cat": "rel", "next": "n3r", "why": "语序不对，老师要猜一下。", "whyEn": "The word order is off, so the teacher has to guess."},
                 {"act": "不问，看着同学", "actEn": "Do not ask; look at your classmates", "pic": "🤐", "fn": "不问", "fnEn": "Do not ask", "cat": "rel", "next": "e-none", "why": "你还是不知道怎么说。", "whyEn": "You still do not know how to say it."}
               ]},
        "n3r": {"say": "你是想问 eraser 用中文怎么说吗？",
                "opts": [
                  {"text": "对！", "pic": "👍", "fn": "确认", "fnEn": "Confirm", "cat": "both", "next": "n4", "why": "对上了。", "whyEn": "That settles it."}
                ]},
        "n4": {"say": "叫“橡皮”。",
               "opts": [
                 {"text": "谢谢老师！", "pic": "😊", "fn": "谢谢＋称呼", "fnEn": "Thanks + title", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."},
                 {"text": "橡皮。谢谢！", "pic": "🙂", "fn": "跟着说一遍并道谢", "fnEn": "Repeat it and thank her", "cat": "any", "next": "e-full", "why": "都可以。", "whyEn": "Either is fine."}
               ]},
        "e-full": {"end": {"goal": 2, "note": "你学会了“橡皮”，老师也很高兴。", "noteEn": "You learned 橡皮, and your teacher is pleased."}},
        "e-none": {"end": {"goal": 1, "note": "打了招呼，也帮了老师，可是还不知道 eraser 怎么说。", "noteEn": "You greeted and helped your teacher, but still do not know how to say “eraser”."}}
      }
    }
  ],
  "review": [
    "noodle-shop：“我可以有两碗牛肉面吗？”服务员是否通常能听懂；“请给我账单”的接受度",
    "clinic-call：“约会”是否一定会被听成和人约会（KC 写作“改约会”）",
    "headphones-return：用“不客气”回应道歉，母语者是否会愣住，还是会被当作外国人的小错放过",
    "hike-invite：“让我们下次去吧”在口语中的生硬程度",
    "market-hat：在商场讲价是否一定被拒绝（有些商场有会员折扣或可以商量）；夜市讲价的幅度因地区而异",
    "school-morning：“好老师”被老师笑着纠正是否合适作为儿童场景",
    "所有场景没有拼音；初级学习者可能需要拼音"
  ],
  "reviewEn": [
    "noodle-shop: whether servers usually understand 我可以有两碗牛肉面吗; how acceptable 请给我账单 is",
    "clinic-call: whether 约会 is always heard as a date (the KC gives 改约会 as an error)",
    "headphones-return: whether 不客气 in reply to an apology makes a native speaker pause, or is let pass as a learner's slip",
    "hike-invite: how stiff 让我们下次去吧 sounds in speech",
    "market-hat: whether haggling at a mall is always refused (some malls give member discounts or negotiate); how much people haggle at night markets varies by region",
    "school-morning: whether a teacher laughing at 好老师 suits a children's scenario",
    "No scenario has pinyin; beginners may need it"
  ]
};

/* ============================================================================
   KHALID · ENGLISH (Grade 6 · Term 2) — QUESTION BANK
   خالد · إنجليزي — بنك الأسئلة
   ----------------------------------------------------------------------------
   Book: Top Goal — Student Book 2 (McGraw-Hill ©2025). Term 2 = Units 5–8.
   Vocabulary & grammar taken from the book's Scope & Sequence:
     U5 Storylines (Past Progressive; suggestions Why don't/How about/What about)
     U6 Outdoor Activities (Simple Past vs Past Progressive; when/while)
     U7 Trips (Present Perfect; already/just/yet)
     U8 Outfits (Present Perfect questions & short answers; made of)

   This is the ONLY file you edit to add/change questions.
   Types: mcq · tf · fill · reorder · match · spell   — keep the final ];
   ============================================================================ */

var QUESTIONS = [
 /* ---- UNIT 5 · Storylines ---- */
 {u:"Unit 5 · Storylines 🎬",type:"mcq",q:"A film that makes you laugh is a ____.",hint:"فيلم مُضحِك",
  opts:["comedy","horror","documentary","mystery"],a:0,
  right:"Yes! A <b>comedy</b> is a funny film. 😄",
  wrong:"comedy = funny; horror = scary; documentary = real facts; mystery = a puzzle to solve."},
 {u:"Unit 5 · Storylines 🎬",type:"mcq",q:"Past Progressive: \"____ you studying last night?\"",hint:"سؤال بالماضي المستمر",
  opts:["Were","Was","Did","Are"],a:0,
  right:"Correct! With <b>you</b> we use <b>were</b>: \"Were you studying?\" ✅",
  wrong:"Use <b>were</b> with you/we/they: \"<b>Were</b> you studying last night?\""},
 {u:"Unit 5 · Storylines 🎬",type:"fill",q:"Complete (negative): \"He ____ watching the movie; we were studying!\"",hint:"was + not",
  accept:["wasn't","was not","wasnt"],
  right:"Great! <b>wasn't</b> = was not. ✅",
  wrong:"Use <b>wasn't</b> (was not) with he/she/it in the Past Progressive."},
 {u:"Unit 5 · Storylines 🎬",type:"reorder",q:"Put the words in order to make a suggestion:",
  tokens:["Why","don't","we","draw","a storyboard"],answer:"Why don't we draw a storyboard",hint:"اقتراح يبدأ بـ Why",
  right:"Perfect! \"<b>Why don't we draw a storyboard?</b>\" ✅",
  wrong:"Suggestion form: \"<b>Why don't we draw a storyboard?</b>\""},
 {u:"Unit 5 · Storylines 🎬",type:"tf",q:"\"How about making a comedy?\" is a way to make a suggestion.",a:true,hint:"How about + V-ing",
  right:"Right — <b>True</b>. \"How about\" makes a suggestion. 💡",
  wrong:"It's <b>True</b>: How about / What about / Why don't are all suggestions."},
 {u:"Unit 5 · Storylines 🎬",type:"match",q:"Match each film type with its meaning:",
  pairs:[["comedy","a funny film"],["horror","a scary film"],["documentary","a film about real facts"]],
  right:"Excellent! 🎬",
  wrong:"comedy = funny; horror = scary; documentary = real facts."},

 /* ---- UNIT 6 · Outdoor Activities ---- */
 {u:"Unit 6 · Outdoor Activities 🏕️",type:"mcq",q:"You sleep inside this when you go camping:",hint:"خيمة",
  opts:["tent","helmet","canoe","surfboard"],a:0,
  right:"Yes! A <b>tent</b> is your shelter when camping. ⛺",
  wrong:"tent = shelter to sleep in; helmet = head protection; canoe = small boat; surfboard = for surfing."},
 {u:"Unit 6 · Outdoor Activities 🏕️",type:"mcq",q:"\"I ____ lying in my tent, and I heard a bear!\"",hint:"ماضٍ مستمر مع I",
  opts:["was","were","am","did"],a:0,
  right:"Correct! With <b>I</b> we use <b>was</b> (Past Progressive). ✅",
  wrong:"Use <b>was</b> with I/he/she/it: \"I <b>was</b> lying in my tent…\""},
 {u:"Unit 6 · Outdoor Activities 🏕️",type:"fill",q:"\"We were eating hot dogs ____ we were rafting.\" (two actions at the same time)",hint:"بمعنى: في أثناء",
  accept:["while"],
  right:"Great! <b>while</b> joins two ongoing past actions. ✅",
  wrong:"Use <b>while</b> for two actions happening together: \"…<b>while</b> we were rafting.\""},
 {u:"Unit 6 · Outdoor Activities 🏕️",type:"mcq",q:"You wear this on your head to stay safe when biking or climbing:",hint:"خوذة",
  opts:["helmet","life jacket","backpack","sleeping bag"],a:0,
  right:"Yes! A <b>helmet</b> protects your head. 🪖",
  wrong:"helmet = head; life jacket = floating; backpack = carrying; sleeping bag = sleeping."},
 {u:"Unit 6 · Outdoor Activities 🏕️",type:"reorder",q:"Put the words in order (Simple Past + Past Progressive):",
  tokens:["I","was looking","at the water","when","my sandwich","fell in"],answer:"I was looking at the water when my sandwich fell in",hint:"كنت أفعل... عندما حدث شيء",
  right:"Perfect! \"<b>I was looking at the water when my sandwich fell in.</b>\" ✅",
  wrong:"Order: \"<b>I was looking at the water when my sandwich fell in.</b>\""},
 {u:"Unit 6 · Outdoor Activities 🏕️",type:"spell",q:"A shelter you sleep in when camping:",word:"t e _ _",accept:["nt","tent"],hint:"خيمة (te__)",
  right:"Correct — <b>tent</b>! ⛺ The missing letters are <b>nt</b>.",
  wrong:"The word is <b>tent</b> (t-e-n-t). The missing letters are <b>nt</b>."},

 /* ---- UNIT 7 · Trips ---- */
 {u:"Unit 7 · Trips ✈️",type:"mcq",q:"The document you must have to travel to another country:",hint:"جواز السفر",
  opts:["passport","ticket","suitcase","platform"],a:0,
  right:"Yes! A <b>passport</b> lets you travel between countries. 🛂",
  wrong:"passport = travel ID; ticket = for entry; suitcase = for clothes; platform = where you board a train."},
 {u:"Unit 7 · Trips ✈️",type:"mcq",q:"Present Perfect: \"Evelyn ____ traveled on the subway before.\"",hint:"مع she نستخدم …",
  opts:["has","have","is","was"],a:0,
  right:"Correct! With he/she/it use <b>has</b> + past participle. ✅",
  wrong:"Use <b>has</b> with she: \"Evelyn <b>has</b> traveled…\""},
 {u:"Unit 7 · Trips ✈️",type:"fill",q:"Present Perfect with 'just': \"The taxi has ____ arrived.\" (a moment ago)",hint:"للتوّ / قبل قليل",
  accept:["just"],
  right:"Great! <b>just</b> = a very short time ago. ✅",
  wrong:"Use <b>just</b> for something that happened a moment ago: \"has <b>just</b> arrived.\""},
 {u:"Unit 7 · Trips ✈️",type:"mcq",q:"\"We haven't checked the weather ____.\" (not until now)",hint:"حتى الآن (في النفي)",
  opts:["yet","already","just","ago"],a:0,
  right:"Yes! In negatives we use <b>yet</b> at the end. ✅",
  wrong:"Use <b>yet</b> in negative sentences: \"…haven't checked the weather <b>yet</b>.\""},
 {u:"Unit 7 · Trips ✈️",type:"fill",q:"Positive, before now: \"Mom has ____ printed the tickets.\"",hint:"سبق وأن (في الإثبات)",
  accept:["already"],
  right:"Great! <b>already</b> = before now / sooner than expected. ✅",
  wrong:"Use <b>already</b> in positive sentences: \"has <b>already</b> printed.\""},
 {u:"Unit 7 · Trips ✈️",type:"match",q:"Match the travel word with its meaning:",
  pairs:[["arrive","reach a place"],["depart","leave"],["check in","register at the airport/hotel"]],
  right:"Well done! ✈️",
  wrong:"arrive = reach; depart = leave; check in = register before a trip/stay."},

 /* ---- UNIT 8 · Outfits ---- */
 {u:"Unit 8 · Outfits 👕",type:"mcq",q:"A piece of jewelry you wear around your neck:",hint:"عقد للرقبة",
  opts:["necklace","belt","crown","umbrella"],a:0,
  right:"Yes! A <b>necklace</b> goes around the neck. 📿",
  wrong:"necklace = neck; belt = waist; crown = head; umbrella = for rain."},
 {u:"Unit 8 · Outfits 👕",type:"mcq",q:"Present Perfect question: \"____ you tried the new uniform?\"",hint:"سؤال مع you",
  opts:["Have","Has","Did","Are"],a:0,
  right:"Correct! Use <b>Have</b> with you: \"Have you tried…?\" ✅",
  wrong:"Use <b>Have</b> with I/you/we/they: \"<b>Have</b> you tried the new uniform?\""},
 {u:"Unit 8 · Outfits 👕",type:"fill",q:"Short answer: \"Have you tried it? — Yes, I ____.\"",hint:"إجابة قصيرة بالمضارع التام",
  accept:["have"],
  right:"Great! Short answer: \"Yes, I <b>have</b>.\" ✅",
  wrong:"The short answer uses <b>have</b>: \"Yes, I <b>have</b>. / No, I haven't.\""},
 {u:"Unit 8 · Outfits 👕",type:"mcq",q:"\"The necklace is made ____ silver.\"",hint:"مصنوع من",
  opts:["of","in","by","at"],a:0,
  right:"Yes! We say <b>made of</b> a material. ✅",
  wrong:"Use <b>made of</b> + material: \"made <b>of</b> silver.\""},
 {u:"Unit 8 · Outfits 👕",type:"reorder",q:"Put the words in order (Present Perfect question):",
  tokens:["Have","you","tried","the new uniform"],answer:"Have you tried the new uniform",hint:"سؤال يبدأ بـ Have",
  right:"Perfect! \"<b>Have you tried the new uniform?</b>\" ✅",
  wrong:"Question order: \"<b>Have you tried the new uniform?</b>\""},
 {u:"Unit 8 · Outfits 👕",type:"match",q:"Match the material with what it is:",
  pairs:[["gold","a precious metal"],["cotton","a soft cloth"],["leather","made from animal skin"]],
  right:"Excellent! 👕",
  wrong:"gold = precious metal; cotton = soft cloth; leather = from animal skin."}
];

window.GRADES = window.GRADES || {};
window.GRADES[9] = {
  grade: 9,
  book: "Russian Language, Grade 9",
  bookRu: "Русский язык. 9 класс",
  authors: "L. A. Murina, F. M. Litvinko, N. M. Pipchenko et al.",
  year: 2019,
  pdf: "https://mgouor.by/wp-content/uploads/2023/10/rus_yaz_Murina_9kl_rus_bel_2019.pdf",
  level: "Advanced",
  intro: "Grade 9 is about sentences with more than one clause: how Russian joins clauses with and, but, because, which, or with no linking word at all. The second big topic is reported speech: quoting people directly, retelling their words, writing dialogues and quotations. Russian punctuation here is stricter than English, so this year helps you both read long sentences and write them correctly.",
  glossary: [
    { ru: "грамматическая основа", en: "sentence core", hint: "the subject and the predicate together: мы вернулись (we returned). Count the cores to count the clauses." },
    { ru: "сложное предложение", en: "multi-clause sentence", hint: "a sentence with two or more cores (clauses)" },
    { ru: "сложносочинённое предложение (ССП)", en: "compound sentence", hint: "two equal clauses joined by и (and), а / но (but), или (or)" },
    { ru: "сложноподчинённое предложение (СПП)", en: "complex sentence", hint: "a main clause plus a dependent clause: ..., потому что... (..., because...)" },
    { ru: "бессоюзное сложное предложение (БСП)", en: "sentence without conjunctions", hint: "clauses joined only by meaning and intonation; in writing by a comma, colon or dash" },
    { ru: "главная часть", en: "main clause", hint: "the clause the other clause depends on" },
    { ru: "придаточная часть", en: "subordinate (dependent) clause", hint: "the clause that answers a question asked from the main clause" },
    { ru: "союз", en: "conjunction", hint: "a linking word that is not part of either clause: и, но, что, если, потому что" },
    { ru: "союзное слово", en: "relative word", hint: "a linking word that is also a part of the clause: который (which), где (where), кто (who)" },
    { ru: "указательное слово", en: "pointer word", hint: "a word in the main clause that points to the dependent clause: то, там, так, тогда" },
    { ru: "однородные члены", en: "parallel (homogeneous) parts", hint: "two or more words in the same role: читал и писал (read and wrote)" },
    { ru: "обособление", en: "set-off phrase", hint: "a phrase separated by commas, such as a participle phrase" },
    { ru: "прямая речь", en: "direct speech", hint: "someone's exact words, in «» quotation marks" },
    { ru: "косвенная речь", en: "reported (indirect) speech", hint: "someone's words retold in a что / ли / чтобы clause, without quotation marks" },
    { ru: "реплика", en: "line (in a dialogue)", hint: "one turn of speech in a dialogue; starts on a new line with a dash" }
  ],
  sections: [
    {
      title: "Review of grade 8",
      titleRu: "Повторение изученного в 8-м классе",
      topics: [
        {
          id: "g9-prostoe-predlozhenie",
          title: "Simple sentences, plain and extended",
          ru: "Простое и простое осложнённое предложение",
          paras: "§ 1–2",
          summary: "A simple sentence has one core: one subject with its predicate. Lists, set-off phrases, names of the person addressed and comment words make it longer, but it is still a simple sentence.",
          diagram: {
            type: "tree",
            root: {
              label: "What can extend a simple sentence",
              children: [
                { label: "Parallel parts (однородные члены)", note: "О, О и О: several words in the same role" },
                { label: "Set-off phrases (обособленные члены)", note: "participle phrases, appositions, adverbial phrases, clarifications" },
                { label: "Address (обращение)", note: "names the person you are talking to" },
                { label: "Comment words (вводные слова)", note: "show the speaker's attitude: к счастью (luckily), наверное (probably)" },
                { label: "Comparison phrase (сравнительный оборот)", note: "как ветер (like the wind), словно в сказке (as if in a fairy tale)" }
              ]
            }
          },
          explain: [
            "A <b>phrase</b> (словосочетание) has a main word and a dependent word. Russian links them in three ways: <b>agreement</b> (согласование), where the endings match: тёплый день (a warm day); <b>government</b> (управление), where the main word demands a case: читать книгу (to read a book); and <b>adjoining</b> (примыкание), where the dependent word never changes: читать вслух (to read aloud).",
            "A <b>simple sentence</b> has one <b>core</b> (грамматическая основа). In a <b>two-part</b> sentence the core is a subject plus a predicate. In a <b>one-part</b> sentence there is only one main member: Светает (It is getting light). Люблю грозу в начале мая (I love a thunderstorm in early May). English almost always needs a subject, even a dummy one like 'it'. Russian does not.",
            "A simple sentence can be <b>extended</b> (осложнённое). Parallel parts, set-off phrases, addresses, comment words and comparison phrases have no core of their own. So the sentence stays simple, however long it gets.",
            "To tell a simple sentence from a multi-clause one, find every core. One core: simple. Two or more: multi-clause."
          ],
          rule: "Count the cores. One core means a simple sentence, even if it is long.",
          examples: [
            { text: "<mark>Ветер гнал</mark> по небу тучи и <mark>трепал</mark> верхушки берёз.", tr: "The wind drove clouds across the sky and shook the tops of the birches.", note: "one subject with two predicates: still a simple sentence" },
            { text: "Согретые солнцем, проснулись в лагунах медлительные черепахи.", tr: "Warmed by the sun, the slow turtles woke up in the lagoons.", note: "set-off participle phrase (I. Sokolov-Mikitov)" },
            { text: "Вернувшись в каюту, он долго не мог заснуть.", tr: "Having returned to his cabin, he could not fall asleep for a long time.", note: "set-off adverbial participle phrase, like English 'having returned' (L. Sobolev)" },
            { text: "Ребята, к сожалению, автобус сегодня опоздает.", tr: "Guys, unfortunately, the bus will be late today.", note: "the address ребята and the comment word к сожалению take commas" }
          ],
          mistakes: [
            { wrong: "Вернувшись в каюту он долго не мог заснуть.", right: "Вернувшись в каюту, он долго не мог заснуть.", why: "An adverbial participle phrase (деепричастный оборот) is always set off by commas in Russian. In English the comma is often optional; in Russian it is required." }
          ],
          quiz: [
            { q: "How many cores (subject + predicate) does an extended simple sentence have?", options: ["One", "Two", "At least two"], answer: 0, why: "The extra parts have no core of their own, so there is only one core." },
            { q: "Which of these does NOT extend a simple sentence, but makes it multi-clause?", options: ["An address (обращение)", "A comment word (вводное слово)", "A dependent clause (придаточная часть)", "Two predicates for one subject"], answer: 2, why: "A dependent clause has its own core, so the sentence becomes multi-clause." },
            { q: "«Согретые солнцем, проснулись в лагунах медлительные черепахи» (Warmed by the sun, the slow turtles woke up in the lagoons). What kind of sentence is it?", options: ["Simple, extended by a set-off participle phrase", "Complex (main + dependent clause)", "Multi-clause without conjunctions"], answer: 0, why: "There is one core: черепахи проснулись (the turtles woke up). «Согретые солнцем» is a participle phrase." }
          ]
        }
      ]
    },
    {
      title: "Text and styles of speech",
      titleRu: "Текст. Стили речи",
      topics: [
        {
          id: "g9-sintaksicheskaya-sinonimiya",
          title: "Text and saying the same thing in different ways",
          ru: "Текст и синтаксическая синонимия",
          paras: "§ 3–5",
          summary: "The same idea can be built into different sentence patterns. Which one you choose depends on the style and purpose of the text.",
          diagram: {
            type: "compare",
            rows: [
              ["Pattern", "Example", "Where it fits"],
              ["Simple sentence with an adverbial participle phrase", "Кончив дело, гуляй смело. (Having finished the job, go and have fun.)", "written, bookish style; short"],
              ["Complex sentence (main + dependent clause)", "Когда кончишь дело, гуляй смело. (When you finish the job, go and have fun.)", "any style; the link is named by a conjunction"],
              ["Sentence without conjunctions", "Кончил дело — гуляй смело. (Job done, go and have fun.)", "everyday speech, proverbs"]
            ]
          },
          explain: [
            "A <b>text</b> has a topic and a main idea. Its sentences are linked by meaning and by grammar: repeated words, pronouns, synonyms, conjunctions.",
            "<b>Syntactic synonyms</b> (синтаксические синонимы) are different sentence patterns that say the same thing. English has them too: 'Mum asked her son to buy bread' and 'Mum asked her son if he could buy bread'. In Russian: Мать попросила сына купить хлеба. Мать попросила сына, чтобы он купил хлеба.",
            "Such synonyms differ in shades of meaning and in style. Scientific and official texts like participle phrases and complex sentences. Everyday speech uses more short, incomplete sentences and sentences without conjunctions.",
            "The main styles of speech are <b>scientific</b> (научный), <b>official</b> (официально-деловой), <b>journalistic</b> (публицистический), <b>literary</b> (художественный) and <b>conversational</b> (разговорный)."
          ],
          examples: [
            { text: "Если любишь брать, то люби и отдавать. / Любишь брать — люби и отдавать.", tr: "If you like to take, then like to give too. / You like to take, like to give too.", note: "complex sentence with если (if) and the same idea without a conjunction" },
            { text: "Мать попросила сына <mark>купить</mark> хлеба. / Мать попросила сына, <mark>чтобы он купил</mark> хлеба.", tr: "Mum asked her son to buy some bread. (both)", note: "infinitive vs. a чтобы (so that) clause" },
            { text: "Благодаря мужеству команды судно спасли. / Судно спасли, потому что команда проявила мужество.", tr: "Thanks to the crew's courage, the ship was saved. / The ship was saved because the crew showed courage.", note: "a phrase of cause vs. a clause of cause" }
          ],
          quiz: [
            { q: "Which pair of sentences are syntactic synonyms (same idea, different pattern)?", options: ["Когда стемнело, мы вернулись. / Стемнело, и мы вернулись.", "Мы вернулись домой. / Мы ушли из дома.", "Стемнело. / Светает."], answer: 0, why: "Both mean 'When it got dark, we came back', built in two different ways. The other pairs mean different things." },
            { q: "In which style are short incomplete sentences and sentences without conjunctions most common?", options: ["Official", "Conversational", "Scientific"], answer: 1, why: "Everyday speech likes to be brief; much is clear from the situation." }
          ]
        }
      ]
    },
    {
      title: "Multi-clause sentences",
      titleRu: "Сложное предложение",
      topics: [
        {
          id: "g9-slozhnoe-predlozhenie",
          title: "How a multi-clause sentence is built",
          ru: "Строение сложного предложения",
          paras: "§ 6",
          summary: "A multi-clause sentence has two or more clauses. They are joined by conjunctions, relative words, or by intonation alone.",
          diagram: {
            type: "tree",
            root: {
              label: "Multi-clause sentence (сложное предложение)",
              children: [
                {
                  label: "With linking words (союзные)",
                  note: "there is a conjunction or relative word",
                  children: [
                    { label: "Compound (ССП)", note: "equal clauses: и (and), а, но (but), или (or)" },
                    { label: "Complex (СПП)", note: "one clause depends on the other: что (that), когда (when), который (which)" }
                  ]
                },
                { label: "Without conjunctions (БСП)", note: "linked only by intonation and meaning" },
                { label: "Mixed types of link", note: "compound, complex and no-conjunction links together" }
              ]
            }
          },
          explain: [
            "A <b>multi-clause sentence</b> (сложное предложение) has two or more parts, each like a simple sentence, joined by meaning and intonation. It tells about several situations and how they relate.",
            "Some clauses are joined by <b>conjunctions</b> or <b>relative words</b> (союзные предложения). Others are joined by intonation only, with no linking word (бессоюзные). English does this too ('The days grow shorter, the sun sinks lower'), but Russian does it much more often.",
            "Sentences with linking words split into two kinds. In a <b>compound sentence</b> (сложносочинённое, ССП) the clauses are equal. In a <b>complex sentence</b> (сложноподчинённое, СПП) one clause is the main one and the other depends on it.",
            "Russian textbooks draw <b>sentence schemes</b>. Find every core and mark each clause with brackets: [ ] for a main or equal clause, ( ) for a dependent clause."
          ],
          examples: [
            { text: "Подул ветер, <mark>однако</mark> тумана он разогнать не смог.", tr: "A wind rose, but it could not drive the fog away.", note: "compound: [ ], однако [ ]. (A. Novikov-Priboy)" },
            { text: "<mark>Пока</mark> мы ехали на электричке, погода испортилась.", tr: "While we were on the suburban train, the weather turned bad.", note: "complex: (Пока...), [ ]. (A. Aleksin)" },
            { text: "Дни становятся короче, солнце устало склоняется к югу.", tr: "The days are getting shorter, the sun wearily sinks to the south.", note: "no conjunction: [ ], [ ]. (K. Paustovsky)" }
          ],
          mistakes: [
            { wrong: "Прошла машина, и полила мостовую.", right: "Прошла машина и полила мостовую.", why: "There is one subject (машина, the car) with two predicates (прошла и полила, passed and watered). That is a simple sentence, so there is no comma before a single и. English works the same way: 'The truck passed and watered the road.'" }
          ],
          quiz: [
            { q: "«Пока мы ехали на электричке, погода испортилась» (While we were on the train, the weather turned bad). What type is it?", options: ["Compound (ССП)", "Complex (СПП)", "Without conjunctions (БСП)"], answer: 1, why: "The conjunction пока (while) attaches a dependent clause." },
            { q: "What joins the clauses of a sentence without conjunctions (БСП)?", options: ["Coordinating conjunctions like и, но", "Relative words like который", "Intonation and meaning only"], answer: 2, why: "A БСП has neither conjunctions nor relative words." }
          ]
        }
      ]
    },
    {
      title: "Compound sentences",
      titleRu: "Сложносочинённое предложение",
      topics: [
        {
          id: "g9-ssp-gruppy",
          title: "Types of compound sentences",
          ru: "Группы сложносочинённых предложений",
          paras: "§ 7, 9–11",
          summary: "In a compound sentence the clauses are equal and are joined by coordinating conjunctions, like English and, or, but. There are three groups: 'and' conjunctions, 'or' conjunctions and 'but' conjunctions.",
          diagram: {
            type: "cards",
            items: [
              { title: "Joining ('and')", text: "и (and), да (= и, and), ни ... ни (neither ... nor), тоже, также (also), да и (and also). Meaning: listing, things happening at the same time or one after another.", example: "Горели над головой звёзды, и на воде светились огоньки. (Stars burned overhead, and lights glowed on the water.)" },
              { title: "Choice ('or')", text: "или, либо (or), то ... то (now ... now), не то ... не то, то ли ... то ли (either ... or, maybe ... maybe). Meaning: alternation, one excludes the other.", example: "То ли женщина подпевала гармони, то ли гармонь подыгрывала её пению. (Either the woman sang along with the accordion, or the accordion played along with her singing.)" },
              { title: "Contrast ('but')", text: "а (and/but, while), но (but), да (= но, but), однако (however), зато (but on the other hand), же (while, however). Meaning: contrast, comparison.", example: "С потолка спускались сталактиты, а с земли тянулись вверх сталагмиты. (Stalactites hung from the ceiling, while stalagmites rose from the ground.)" }
            ]
          },
          explain: [
            "In a <b>compound sentence</b> (сложносочинённое предложение) the clauses are equal: you cannot ask a question from one clause to the other. They are joined by <b>coordinating conjunctions</b> (сочинительные союзы).",
            "Some conjunctions are <b>single</b>: а, но, однако, зато, тоже, также. Others come in <b>pairs</b>: ни ... ни (neither ... nor), то ... то (now ... now), не то ... не то, то ли ... то ли (whether ... or). The conjunctions и (and), да (and), или, либо (or) can be single or paired, like English 'either ... or'.",
            "The conjunctions <b>тоже, также</b> (also) and <b>же</b> (but, while) do not stand between the clauses. They go <b>inside the second clause</b>, much like English 'also' or 'however' can.",
            "<b>Да</b> can mean 'and' (Жили-были дед да баба, Once there lived an old man and an old woman) or 'but' (Мал золотник, да дорог, A gold coin is small but precious). <b>Зато</b> means the second part makes up for the first: Дорога длинная, зато красивая (The road is long, but on the other hand it is beautiful). Russian <b>а</b> has no single English equivalent: it marks a contrast or comparison, softer than но (but)."
          ],
          examples: [
            { text: "<mark>Или</mark> Люк не хотел мне сказать всего, <mark>или</mark> же он многого сам не знал.", tr: "Either Luke did not want to tell me everything, or he did not know much himself.", note: "Или [ ], или [ ]. one excludes the other (A. Belyaev)" },
            { text: "А грива у него розовая, копыта <mark>тоже</mark> розовые.", tr: "And his mane is pink, his hooves are pink too.", note: "[ ], [тоже]. the conjunction is inside the second clause (V. Astafyev)" },
            { text: "Всё это было ещё в январе, теперь <mark>же</mark> наступила весна.", tr: "All this was back in January, but now spring has come.", note: "contrast conjunction же inside the second clause" },
            { text: "Крылова знали все, <mark>но</mark> почти ни с кем он не общался.", tr: "Everyone knew Krylov, but he talked to almost no one.", note: "contrast (V. Shklovsky)" }
          ],
          quiz: [
            { q: "Which conjunction expresses contrast ('but')?", options: ["либо (or)", "зато (but on the other hand)", "тоже (also)"], answer: 1, why: "Зато contrasts and shows that the second part makes up for the first. Либо is a choice conjunction, тоже is a joining one." },
            { q: "In which sentence does да mean 'but'?", options: ["Мал золотник, да дорог.", "Жили-были дед да баба.", "Шёл дождь, да и ветер усилился."], answer: 0, why: "Here you can replace да with но: мал, но дорог (small but precious)." },
            { q: "Where does тоже (also) stand in a compound sentence?", options: ["Between the clauses", "Inside the second clause", "At the start of the first clause"], answer: 1, why: "Тоже, также and же go inside the second clause." }
          ]
        },
        {
          id: "g9-ssp-znaki",
          title: "Punctuation in compound sentences",
          ru: "Знаки препинания в сложносочинённом предложении",
          paras: "§ 8",
          summary: "Russian normally puts a comma between the clauses of a compound sentence. Sometimes no comma is needed, and sometimes you use a dash or a semicolon.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[ ], и [ ].", example: "Дверь была закрыта, и в классе шумели.", caption: "the usual case: a comma (The door was closed, and the class was noisy.)" },
              { scheme: "Обст. [ ] и [ ].", example: "Здесь вершины покрыты снегом и дуют леденящие ветры.", caption: "a shared word at the start belongs to both clauses: no comma (Here the peaks are covered with snow and icy winds blow.)" },
              { scheme: "[ ] — и [ ].", example: "Заметёт зимою — и высунуться некуда.", caption: "a result or a sudden change: a dash (When winter snows you in, there is nowhere to go.)" },
              { scheme: "[ , ]; а [ ].", example: "Местами ручей был застлан снеговым одеялом, местами закован в ледяной панцирь; а порой среди льда проглядывала живая вода.", caption: "long clauses that already contain commas: a semicolon" }
            ]
          },
          explain: [
            "The clauses of a compound sentence are usually separated by a <b>comma</b>. In English the comma before 'and' is often optional; in Russian it is a rule: two cores joined by и still need a comma.",
            "There is <b>no comma</b> before a single и, да (and), или, либо (or) if both clauses share a <b>common word</b>, usually at the start, such as a time or place word: У меня кривились губы и голос начинал дрожать (My lips twisted and my voice began to shake). Here у меня (with me) belongs to both clauses.",
            "A <b>dash</b> goes before и if the second clause gives a result, a quick change of events, or something unexpected.",
            "A <b>semicolon</b> is used if the clauses are only loosely connected in meaning, or are long and already contain commas."
          ],
          rule: "First check for a word that belongs to both clauses. If there is one, no comma before a single и.",
          examples: [
            { text: "Облачко проплывёт, или солнце заиграет лучами.", tr: "A small cloud will float by, or the sun will start to shine.", note: "[ ], или [ ]. (G. Markov)" },
            { text: "<mark>Из окна</mark> дует холодом и сыплет снег.", tr: "Cold air blows and snow falls in from the window.", note: "из окна (from the window) belongs to both clauses: no comma (V. Gilyarovsky)" },
            { text: "Просто повернул за угол — и вдруг выбежала навстречу семья высоких деревьев.", tr: "I just turned the corner, and suddenly a family of tall trees ran out to meet me.", note: "a sudden change: a dash (Yu. Dombrovsky)" }
          ],
          mistakes: [
            { wrong: "Спать не хотелось и я прочёл несколько страниц.", right: "Спать не хотелось, и я прочёл несколько страниц.", why: "Two cores and no shared word: a comma is required before и. (I didn't feel sleepy, and I read a few pages.)" },
            { wrong: "Под горой вьётся река, и ивы склоняются к воде.", right: "Под горой вьётся река и ивы склоняются к воде.", why: "Под горой (below the hill) belongs to both clauses, so there is no comma before и. (Below the hill a river winds and willows bend to the water.)" }
          ],
          quiz: [
            { q: "Comma or not? «Из окна дует холодом _ и сыплет снег» (Cold air blows and snow falls in from the window).", options: ["A comma is needed", "No comma", "A dash is needed"], answer: 1, why: "Из окна (from the window) belongs to both clauses." },
            { q: "Which mark goes in the gap? «Сделайте вместо леса сплошное небо _ и вся картина потеряет свой характер» (Replace the forest with plain sky, and the whole picture will lose its character).", options: ["A comma", "A dash", "A semicolon"], answer: 1, why: "The second clause states a result, so a dash goes before и." },
            { q: "When do you put a semicolon between the clauses of a compound sentence?", options: ["Always before а", "When the clauses are long and already contain commas", "When the clauses are very short"], answer: 1, why: "A semicolon separates long or loosely connected clauses." }
          ]
        }
      ]
    },
    {
      title: "Complex sentences",
      titleRu: "Сложноподчинённое предложение",
      topics: [
        {
          id: "g9-spp-stroenie",
          title: "How a complex sentence is built, and its commas",
          ru: "Строение СПП и знаки препинания",
          paras: "§ 12",
          summary: "A complex sentence has a main clause and a dependent clause. In Russian the dependent clause is always separated by commas, wherever it stands.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[ ], (когда...).", example: "Мы вернулись домой, когда совсем стемнело.", caption: "dependent clause after the main one (We came home when it was completely dark.)" },
              { scheme: "(Как только...), [ ].", example: "Как только мы остановились, туча комаров облепила нас.", caption: "dependent clause before the main one (As soon as we stopped, a cloud of mosquitoes covered us.)" },
              { scheme: "[Сущ., (который...), ...].", example: "Прохожий, о котором шла речь, преспокойно шёл по тротуару.", caption: "dependent clause inside the main one: commas on both sides (The passer-by we were talking about was calmly walking along the pavement.)" },
              { scheme: "(Если...), то [ ].", example: "Если исчезнет воображение, то человек перестанет быть человеком.", caption: "double conjunction если ... то (if ... then): its second part is in the main clause" }
            ]
          },
          explain: [
            "A <b>complex sentence</b> (сложноподчинённое предложение, СПП) has a <b>main clause</b> (главная часть) and a <b>dependent clause</b> (придаточная часть). You can ask a question from the main clause to the dependent one.",
            "The dependent clause is attached by a <b>subordinating conjunction</b> (подчинительный союз) or a <b>relative word</b> (союзное слово). These belong to the dependent clause. The main clause may have a <b>pointer word</b> (указательное слово): то (that), тот (that one), там (there), так (so), такой (such), тогда (then).",
            "The dependent clause can come after the main clause, before it, or inside it. Inside, it gets commas on both sides. Big difference from English: Russian puts a comma before <b>every</b> dependent clause, even where English uses none, as in 'I know that...' or 'the man who...'.",
            "In schemes, the main clause goes in square brackets [ ] and the dependent clause in round brackets ( )."
          ],
          examples: [
            { text: "Я много знаю слов, <mark>потому что</mark> я много читаю.", tr: "I know a lot of words because I read a lot.", note: "[ ], (потому что...). no comma before 'because' in English, but a comma in Russian (V. Tokareva)" },
            { text: "Скучной была бы наука, <mark>если бы</mark> на её карте не было белых пятен.", tr: "Science would be boring if there were no blank spots on its map.", note: "[ ], (если бы...)." },
            { text: "<mark>Хотя</mark> и весна, <mark>но</mark> дом настыл.", tr: "Although it is spring, the house has grown cold.", note: "(Хотя...), но [ ]. double conjunction хотя ... но (although ... but); English drops the 'but' (V. Shklovsky)" }
          ],
          mistakes: [
            { wrong: "Перед дверью квартиры, где жил Лев Семёнович решимость покинула меня.", right: "Перед дверью квартиры, где жил Лев Семёнович, решимость покинула меня.", why: "The dependent clause sits inside the main clause, so it needs a comma on both sides. (At the door of the flat where Lev Semyonovich lived, my courage left me.)" }
          ],
          quiz: [
            { q: "In a complex sentence, where does the subordinating conjunction stand?", options: ["In the main clause", "In the dependent clause", "Between the clauses, belonging to neither"], answer: 1, why: "The conjunction is part of the dependent clause; a pointer word belongs to the main clause." },
            { q: "Where is the second comma needed? «Перед дверью квартиры, где жил Лев Семёнович_ решимость покинула меня».", options: ["After «Семёнович»", "Nowhere", "After «решимость»"], answer: 0, why: "A clause inside the main clause is closed off on both sides." }
          ]
        },
        {
          id: "g9-soyuz-soyuznoe-slovo",
          title: "Conjunctions and relative words",
          ru: "Союзы и союзные слова",
          paras: "§ 13",
          summary: "A conjunction only links the clauses. A relative word links them and is also a part (subject, object, place...) of the dependent clause.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Subordinating conjunction (союз)", "Relative word (союзное слово)"],
              ["What it is", "a linking word only", "a relative pronoun or adverb"],
              ["Part of the clause?", "no", "yes: subject, object, adverb of place or time, etc."],
              ["Can you drop it?", "что (that) often can be dropped: Решили, что утро вечера мудренее. → Решили: утро вечера мудренее.", "no, the sentence falls apart"],
              ["Stress in speech", "not stressed", "often stressed"],
              ["Test", "cannot be replaced by который (which)", "что can be replaced by который; the clause can be turned into a question"],
              ["Examples", "что (that), чтобы (so that), если (if), потому что (because), хотя (although), будто (as if)", "кто (who), что (what), какой (what kind), который (which), чей (whose), где (where), куда (where to), когда (when), почему (why)"]
            ]
          },
          explain: [
            "A complex sentence is held together by <b>subordinating conjunctions</b> (подчинительные союзы) and <b>relative words</b> (союзные слова). In the main clause they may be helped by <b>pointer words</b> (указательные слова).",
            "A <b>relative word</b>, unlike a conjunction, also plays a role inside the dependent clause. These are relative pronouns (кто who, что what, какой what kind, который which, чей whose) and adverbs (где where, куда where to, откуда where from, когда when, почему why). English works the same way: in 'the house where I grew up', 'where' is a place word in the clause.",
            "The hardest word is <b>что</b>, because it can be either. English helps here: if что = 'that' and can be dropped, it is a conjunction. If что = 'what' or 'which', is stressed, or the clause can be turned into a question, it is a relative word.",
            "Conjunctions can be <b>simple</b> (что that, если if, хотя although), <b>compound</b> (потому что because, так как since, несмотря на то что despite the fact that) and <b>double</b> (если ... то if ... then, хотя ... но although ... but)."
          ],
          examples: [
            { text: "Потом решили, <mark>что</mark> утро вечера мудренее.", tr: "Then they decided that the morning is wiser than the evening.", note: "что = 'that', a conjunction: it can be dropped (L. Lagin)" },
            { text: "Мне не терпится узнать, <mark>что</mark> будет дальше.", tr: "I can't wait to find out what will happen next.", note: "что = 'what', a relative word, the subject: Что будет дальше? (What will happen next?) (A. Aleksin)" },
            { text: "Солдат согревали шинели, <mark>что</mark> шила заботливо ты.", tr: "The soldiers were warmed by the greatcoats that you sewed with such care.", note: "что = которые (which), a relative word (M. Isakovsky)" },
            { text: "Она спросила у ребят, <mark>где</mark> они живут.", tr: "She asked the children where they lived.", note: "где (where): relative word, place in the clause (A. Likhanov)" }
          ],
          quiz: [
            { q: "In which sentence is что a conjunction ('that')?", options: ["Я знаю, что он придёт.", "Я знаю, что он принёс.", "Вот дом, что построил Джек."], answer: 0, why: "1: I know that he will come (что only links). 2: I know what he brought (что is the object). 3: This is the house that Jack built (что = который)." },
            { q: "«Я помню дом, где я вырос» (I remember the house where I grew up). What role does где play in its clause?", options: ["Subject", "Adverb of place", "None: it is not a part of the clause"], answer: 1, why: "I grew up where? In the house. A relative word is always a part of the clause." },
            { q: "Which word is a pointer word?", options: ["тогда (then)", "когда (when)", "потому что (because)"], answer: 0, why: "Pointer words (тогда, там, то, так) stand in the main clause." }
          ]
        },
        {
          id: "g9-vidy-pridatochnyh",
          title: "Types of dependent clauses",
          ru: "Виды придаточных частей",
          paras: "§ 14",
          summary: "Dependent clauses can describe a noun, complete a verb of speaking or thinking, or work like an adverb (time, place, cause...). You find the type by the question, by the word the clause depends on, and by the linking word.",
          diagram: {
            type: "tree",
            root: {
              label: "Types of dependent clauses",
              children: [
                { label: "Describing (определительные)", note: "какой? (which? what kind?) depend on a noun, like English relative clauses" },
                { label: "Content (изъяснительные)", note: "case questions (what? about what?); depend on words of speech, thought, feeling" },
                {
                  label: "Adverbial (обстоятельственные)",
                  children: [
                    { label: "Place, time", note: "где? куда? откуда? когда? как долго? (where? where to? where from? when? how long?)" },
                    { label: "Cause, result, purpose", note: "почему? what followed? зачем? (why? what for?)" },
                    { label: "Condition, concession", note: "on what condition? in spite of what?" },
                    { label: "Manner, degree", note: "как? в какой степени? (how? to what degree?)" },
                    { label: "Comparison", note: "like what?" }
                  ]
                }
              ]
            }
          },
          explain: [
            "You decide the type of a dependent clause by three things: <b>1)</b> what it depends on: one word in the main clause, or the whole main clause; <b>2)</b> how it is attached: by a conjunction or a relative word, and whether there is a pointer word; <b>3)</b> what the meaning link between the clauses is.",
            "It is handy to start by asking a question from the main clause to the dependent one. But the question is not always enough: also check which word the clause depends on.",
            "For example, a place clause answers где? (where?). But if the clause depends on a noun and also answers какой? (which?), it is a describing clause: город (какой?), где он родился (the town where he was born). English grammar treats this the same way: 'where he was born' here is a relative clause about 'the town'."
          ],
          examples: [
            { text: "Глеб принёс фотографию, <mark>где</mark> он сидел в гамаке.", tr: "Gleb brought a photo where he was sitting in a hammock.", note: "фотографию (какую?, which photo?): describing. [...сущ.], (где...)." },
            { text: "Он писал <mark>так</mark>, что люди запоминали его стихи с детства.", tr: "He wrote in such a way that people remembered his poems from childhood.", note: "писал (как?, how?): manner. [...глаг. + так], (что...)." },
            { text: "Два часа спустя <mark>там</mark>, где вода сливается с небом, показался дымок.", tr: "Two hours later, a wisp of smoke appeared where the water meets the sky.", note: "там (где?, where?): place. [...там, (где...), ...]." },
            { text: "Серёжа уважает дядю Толю, <mark>потому что</mark> тот умеет сочинять стихи.", tr: "Seryozha respects Uncle Tolya because he can write poems.", note: "почему? (why?): cause. [ ], (потому что...)." }
          ],
          quiz: [
            { q: "What type is the clause? «Павел увидел свой рисунок так ясно, словно он был уже готов» (Pavel saw his drawing as clearly as if it were already finished).", options: ["Comparison", "Describing", "Condition"], answer: 0, why: "The conjunction словно (as if) compares: like what?" },
            { q: "«Я оказался на острове в дни, когда гуси готовились улетать» (I came to the island in the days when the geese were getting ready to fly away). What type is the clause?", options: ["Time", "Describing", "Content"], answer: 1, why: "The clause depends on the noun дни (days) and answers какие? (which days?)." }
          ]
        },
        {
          id: "g9-opredelitelnye-izyasnitelnye",
          title: "Describing clauses and content clauses",
          ru: "Придаточные определительные и изъяснительные",
          paras: "§ 15–16",
          summary: "A describing clause depends on a noun and answers 'which?', like English relative clauses. A content clause completes a verb of speaking, thinking or feeling, like English 'I know that...'. Both always take a comma in Russian.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[...сущ.], (который...).", example: "Мне приснился сон, которого никогда не мог я позабыть.", caption: "describing: сон (какой?), a dream (which one?). (I had a dream that I could never forget.)" },
              { scheme: "[Сущ., (куда...), ...].", example: "В гостинице, куда они подъехали, был приготовлен ужин.", caption: "describing clause inside the main clause (At the hotel they drove up to, dinner had been prepared.)" },
              { scheme: "[...глаг.], (насколько...).", example: "Под утро я вышел на палубу и удивился, насколько изменилась погода.", caption: "content: удивился (чему?), was surprised (at what?). (Towards morning I went on deck and was surprised how much the weather had changed.)" },
              { scheme: "[...глаг. + то], (что...).", example: "Началось с того, что наш директор повёл речь об устарелых словах.", caption: "content clause with the pointer word то (It started with our head teacher talking about old-fashioned words.)" }
            ]
          },
          explain: [
            "A <b>describing clause</b> (определительная придаточная) depends on a noun in the main clause, answers <b>какой?</b> (which? what kind?) and describes that noun. Linking words: <b>который</b> (which, who), <b>какой</b> (such as), <b>чей</b> (whose), <b>что</b> (that), <b>когда</b> (when), <b>где</b> (where), <b>куда</b> (where to), <b>откуда</b> (where from).",
            "A describing clause usually comes right after its noun and never before the main clause. Two big differences from English. First, Russian has no 'defining vs. non-defining' rule: there is <b>always a comma</b> before который. Second, you cannot drop который the way English drops 'that' ('the book I read'). A preposition goes in front of который, and the comma goes before the preposition: забор, за которым (the fence behind which).",
            "A <b>content clause</b> (изъяснительная придаточная) depends on a word of speaking, thinking or feeling: сказать (to say), думать (to think), знать (to know), радоваться (to be glad), известно (it is known). It answers <b>case questions</b> (what? about what? at what?). Linking words: conjunctions <b>что</b> (that), <b>чтобы</b> (so that, to), <b>будто</b> (as if, that supposedly), <b>ли</b> (whether) and relative words <b>что</b> (what), <b>кто</b> (who), <b>где</b> (where), <b>когда</b> (when), <b>сколько</b> (how many) and others. English often has no comma here ('I know that...'); Russian always does.",
            "The same word где (where) can start different clauses. Я знаю место (какое?), где растут грибы (I know a place where mushrooms grow): describing. Я знаю (что?), где растут грибы (I know where mushrooms grow): content."
          ],
          examples: [
            { text: "Кто мог помешать ему вернуться в город, <mark>где</mark> он родился?", tr: "Who could stop him from returning to the town where he was born?", note: "город (какой?, which town?): describing (V. Panova)" },
            { text: "Никто не знал, <mark>отчего</mark> она плачет.", tr: "Nobody knew why she was crying.", note: "не знал (чего?, didn't know what?): content clause (R. Fraerman)" },
            { text: "Я не знаю, придёт <mark>ли</mark> он сегодня.", tr: "I don't know whether he will come today.", note: "content clause with ли (whether); the verb comes first, then ли" }
          ],
          mistakes: [
            { wrong: "Я не знаю придёт ли он.", right: "Я не знаю, придёт ли он.", why: "This is a complex sentence with a content clause. It must be separated by a comma." },
            { wrong: "Мы оказались возле забора за которым торчала труба.", right: "Мы оказались возле забора, за которым торчала труба.", why: "The comma goes before the preposition that comes in front of the relative word. (We found ourselves by a fence behind which a pipe stuck out.)" },
            { wrong: "Я не знаю, если он придёт.", right: "Я не знаю, придёт ли он.", why: "English 'I don't know if he'll come' uses 'if', but Russian если means only 'if' as a condition. For 'whether' use ли after the verb." }
          ],
          quiz: [
            { q: "«Я знаю, где растут грибы» (I know where mushrooms grow). What type is the clause?", options: ["Describing", "Content", "Place"], answer: 1, why: "The clause depends on the verb знаю (I know) and answers что? (what?)." },
            { q: "«Я знаю место, где растут грибы» (I know a place where mushrooms grow). What type is the clause?", options: ["Describing", "Content", "Place"], answer: 0, why: "The clause depends on the noun место (place): which place?" }
          ]
        },
        {
          id: "g9-mesta-vremeni-obraza",
          title: "Clauses of place, time, manner, degree and comparison",
          ru: "Придаточные места, времени, образа действия, степени, сравнительные",
          paras: "§ 17–18, 22–23",
          summary: "These clauses answer where? when? how? to what degree? like what? Many of them go with the pointer words там (there), тогда (then), так (so).",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[...туда], (где...).", example: "Он снова упорно шёл туда, где пылало и шумело море.", caption: "place: where to? (Again he walked stubbornly to where the sea blazed and roared.)" },
              { scheme: "(Когда...), [ ].", example: "Когда море бывало спокойно, оно нежным голосом что-то рассказывало.", caption: "time: when? (When the sea was calm, it told something in a gentle voice.)" },
              { scheme: "[...глаг. + так], (что...).", example: "Я прожил жизнь так, что мне не за что краснеть.", caption: "manner: how? (I have lived my life so that I have nothing to be ashamed of.)" },
              { scheme: "[...так + нареч.], (что...).", example: "Паровоз чернеет так далеко впереди, что едва виден.", caption: "degree: to what degree? (The engine is so far ahead that it is barely visible.)" },
              { scheme: "[ ], (словно...).", example: "Рассвет наступал быстро, словно поднимался занавес.", caption: "comparison: like what? (Dawn came quickly, as if a curtain were rising.)" }
            ]
          },
          explain: [
            "<b>Place</b>: где? куда? откуда? (where? where to? where from?). The clause depends on a pointer word там (there), туда (to there), оттуда (from there), везде, всюду (everywhere), or on a place word. Linking words: <b>где, куда, откуда</b>. Russian often says туда, где (to there, where) where English just says 'to where'.",
            "<b>Time</b>: когда? как долго? с каких пор? до каких пор? (when? how long? since when? until when?). It depends on the whole main clause. Conjunctions: <b>когда</b> (when), <b>пока</b> (while), <b>как только</b> (as soon as), <b>едва</b> (barely, as soon as), <b>после того как</b> (after), <b>с тех пор как</b> (since). With the pointer word тогда (then), когда is a relative word, not a conjunction.",
            "<b>Manner</b>: как? (how?). It depends on так (so, in such a way) next to a verb. <b>Degree</b>: в какой степени? насколько? (to what degree? how much?). It depends on так, такой, столько, настолько, до того (so, such, so much, to such an extent) next to an adjective, adverb or verb, much like English 'so ... that'. Conjunctions <b>что</b> (that), <b>чтобы</b> (so that), <b>будто</b> (as if); relative words <b>как, сколько, насколько</b> (how, how much).",
            "<b>Comparison</b> clauses depend on the whole main clause. Conjunctions: <b>как</b> (as, like), <b>как будто, будто, словно, точно</b> (as if), <b>подобно тому как</b> (just as), <b>как если бы</b> (as if). Don't confuse a comparison clause with a comparison phrase: the clause has its own core (subject and predicate)."
          ],
          examples: [
            { text: "Динка очнулась только <mark>тогда</mark>, когда перед глазами поплыли знакомые картины.", tr: "Dinka came to her senses only when familiar scenes floated before her eyes.", note: "[...тогда], (когда...). Here когда is a relative word (V. Oseeva)" },
            { text: "Летом, когда птицы линяют, они удаляются в чащи камыша.", tr: "In summer, when the birds moult, they go deep into the reeds.", note: "the clause makes the time word летом (in summer) more exact (S. Lyalitskaya)" },
            { text: "Послышался треск, шипенье, <mark>как будто</mark> в комнату внесли раскалённую сковородку.", tr: "There was crackling and hissing, as if someone had carried a red-hot frying pan into the room.", note: "comparison clause (Yu. Dombrovsky)" }
          ],
          mistakes: [
            { wrong: "Тучи плыли низко словно хотели коснуться земли.", right: "Тучи плыли низко, словно хотели коснуться земли.", why: "A comparison clause is separated by a comma. (The clouds floated low, as if they wanted to touch the ground.)" }
          ],
          quiz: [
            { q: "«Было так тихо, что слышался шорох листьев» (It was so quiet that you could hear the leaves rustle). What type is the clause?", options: ["Manner", "Degree", "Result"], answer: 1, why: "Так stands next to the adverb тихо (quiet) and shows how quiet: degree." },
            { q: "«Он ответил так, что все засмеялись» (He answered in such a way that everyone laughed). What type is the clause?", options: ["Manner", "Comparison", "Time"], answer: 0, why: "Так stands next to a verb: answered how?" },
            { q: "Which one has a comparison clause, not just a comparison phrase?", options: ["Глаза блестели, как звёзды.", "Глаза блестели, как блестят звёзды.", "Он бежал как ветер."], answer: 1, why: "Only the second has its own core: блестят звёзды (the stars shine)." }
          ]
        },
        {
          id: "g9-prichiny-usloviya",
          title: "Clauses of cause, result, purpose, condition and concession",
          ru: "Придаточные причины, следствия, цели, условия, уступки",
          paras: "§ 19–21",
          summary: "These clauses depend on the whole main clause and are attached only by conjunctions. You find the type by the meaning of the conjunction and by the question.",
          diagram: {
            type: "compare",
            rows: [
              ["Type", "Question", "Conjunctions", "Example"],
              ["Cause", "почему? отчего? (why?)", "потому что, так как, оттого что, ибо, поскольку (because, since, as)", "Я вижу радугу, потому что на ресницах у меня слёзы. (I see a rainbow because there are tears on my eyelashes.)"],
              ["Result", "what followed?", "так что (so, so that)", "Я эту неделю во второй смене, так что днём меня застанешь. (This week I'm on the late shift, so you'll find me in during the day.)"],
              ["Purpose", "зачем? (what for?)", "чтобы, для того чтобы, с тем чтобы (in order to, so that)", "В роще разожгли костёр, чтобы испечь картошку. (They lit a fire in the grove to bake potatoes.)"],
              ["Condition", "on what condition?", "если, когда, раз, если ... то (if, when, since, if ... then)", "Если завтра пойдёт дождь, поход отменят. (If it rains tomorrow, the hike will be cancelled.)"],
              ["Concession", "in spite of what?", "хотя (хоть), пусть, пускай, несмотря на то что, как ни, сколько ни (although, even if, despite, however much)", "Вся степь зазеленела, хоть в оврагах ещё лежал снег. (The whole steppe turned green, although snow still lay in the gullies.)"]
            ]
          },
          explain: [
            "Clauses of <b>cause, result, purpose, condition and concession</b> depend on the whole main clause and are attached only by <b>conjunctions</b>.",
            "<b>Cause</b> gives the reason for what the main clause says. <b>Result</b> gives the outcome; a result clause always comes after the main clause. <b>Purpose</b> says what the action is for. Note: after чтобы (in order to, so that) Russian uses the infinitive if the subject is the same, and the past tense form if the subject is different: Я пришёл, чтобы помочь (I came to help). Я пришёл, чтобы ты не скучал (I came so that you wouldn't be bored).",
            "<b>Condition</b> names what the main event depends on. <b>Concession</b> names a fact that the action happens in spite of, like English 'although' or 'however hard...'. Как ни and сколько ни mean 'however (much)': as in Как ни трудно было (However hard it was).",
            "Compound conjunctions (потому что because, для того чтобы in order to, оттого что because) can be <b>split</b>: the comma then goes before что. This happens when the first part is stressed, after the particles только, лишь (only), after a comment word, or after не (not) in front of the conjunction. The conjunctions <b>так как</b> (since) and <b>так что</b> (so) are never split."
          ],
          rule: "Так что (one unit, after the main clause) means 'so, as a result'. Так ..., что (так is in the main clause) means 'so ... that': manner or degree.",
          examples: [
            { text: "Он плакал <mark>потому, что</mark> ему было обидно.", tr: "He was crying because he felt hurt.", note: "the conjunction is split: the stress is on the reason (V. Panova)" },
            { text: "<mark>Для того чтобы</mark> башмаки не спадали, он тянул ногами по тротуару.", tr: "So that his shoes would not fall off, he shuffled his feet along the pavement.", note: "purpose clause before the main clause: the conjunction is not split (Yu. Olesha)" },
            { text: "<mark>Сколько ни</mark> гляди на дерево, не угадаешь, какому листику лететь.", tr: "However long you look at a tree, you won't guess which leaf is going to fall.", note: "concession (M. Prishvin)" }
          ],
          mistakes: [
            { wrong: "Начался дождь, так, что мы вернулись домой.", right: "Начался дождь, так что мы вернулись домой.", why: "Так что (so) is never split. (It started to rain, so we went back home.)" },
            { wrong: "Костя старается не потому что мать велит, а из самолюбия.", right: "Костя старается не потому, что мать велит, а из самолюбия.", why: "There is не (not) in front of the conjunction, so it is split. (Kostya tries hard not because his mother tells him to, but out of pride.)" }
          ],
          quiz: [
            { q: "«Как ни трудно было, мы дошли до вершины» (However hard it was, we reached the top). What type is the clause?", options: ["Condition", "Concession", "Manner"], answer: 1, why: "Как ни means 'in spite of the fact that'." },
            { q: "«Мы торопились, так что успели на поезд» (We hurried, so we caught the train). What type is the clause?", options: ["Result", "Purpose", "Degree"], answer: 0, why: "Так что is one unit, and the clause gives the outcome." },
            { q: "Which conjunction is never split by a comma?", options: ["потому что (because)", "для того чтобы (in order to)", "так как (since)"], answer: 2, why: "Так как and так что are never split." }
          ]
        }
      ]
    },
    {
      title: "Genres: reviews and research summaries",
      titleRu: "Жанры речи: отзыв, реферат",
      topics: [
        {
          id: "g9-otzyv-referat",
          title: "Review and research summary",
          ru: "Отзыв и реферат",
          paras: "§ 24–25, 39",
          summary: "In a review (отзыв) you judge a work and explain why. In a research summary (реферат) you collect and organise information from several sources.",
          diagram: {
            type: "steps",
            title: "Plan of a review",
            items: [
              "Name the work and the author; say what drew you to it",
              "Say briefly what it is about (no detailed retelling)",
              "Talk about the characters and what they do",
              "Give your opinion: what you liked or didn't, and why; back it up with quotations",
              "Conclude: who should read it and why"
            ]
          },
          explain: [
            "A <b>review</b> (отзыв) is written to judge a work (a book, a film, a play) and explain your opinion. A review is not just a retelling.",
            "In a review you share <b>your own attitude</b>, but you must give reasons. Express your opinion politely and don't present it as the only right one.",
            "A <b>research summary</b> (реферат) is a written paper on a set topic. It collects and organises information from books, articles and other sources. It has an introduction, a main part and a conclusion, plus a title page, an outline and a list of sources. It is a common school and university assignment in Russian-speaking countries.",
            "A research summary does not copy sources word for word and is not just notes. Keep your own views separate from other people's and give references."
          ],
          examples: [
            { text: "Повесть меня <mark>захватила</mark> с первых страниц, потому что автор показывает героя в трудном выборе.", tr: "The story gripped me from the first pages because the author shows the hero facing a hard choice.", note: "an opinion with a reason" },
            { text: "<mark>По мнению</mark> автора статьи, береста долго не гниёт.", tr: "According to the author of the article, birch bark takes a long time to rot.", note: "по мнению (according to): referring to a source" }
          ],
          quiz: [
            { q: "How is a review different from a retelling?", options: ["A review gives an opinion and the reasons for it", "A review is always longer", "A review may not contain quotations"], answer: 0, why: "The heart of a review is your judgement of the work and the proof for it." },
            { q: "What must a research summary (реферат) include?", options: ["A list of sources used", "Pictures", "An epigraph"], answer: 0, why: "A research summary is based on sources, so they must be listed." }
          ]
        }
      ]
    },
    {
      title: "Complex sentences with several dependent clauses",
      titleRu: "СПП с несколькими придаточными",
      topics: [
        {
          id: "g9-neskolko-pridatochnyh",
          title: "Ways of linking several dependent clauses, and their commas",
          ru: "Виды подчинения и знаки препинания",
          paras: "§ 26–27",
          summary: "When there are several dependent clauses, they can form a chain, a list, or each depend on the main clause in a different way. This decides the commas.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[...глаг.], (что... тогда), (когда...).", example: "Чехов никогда не забывал, что любовь к человечеству лишь тогда плодотворна, когда она сочетается с участием к отдельным людям.", caption: "chain: the second clause depends on the first (Chekhov never forgot that love for humanity is fruitful only when it goes together with care for individual people.)" },
              { scheme: "[ ], (что...) и (что...).", example: "Я знал, что ты придёшь и что мы обо всём поговорим.", caption: "list: two clauses of the same type depend on one word; no comma before и (I knew that you would come and that we would talk about everything.)" },
              { scheme: "(Сколько ни...), [глаг.], (какой...).", example: "Сколько ни гляди на дерево, не угадаешь, какому листику лететь вслед за упавшими.", caption: "parallel: clauses of different types (However long you look at a tree, you won't guess which leaf will follow the fallen ones.)" },
              { scheme: "[ ], (что (если...), так...).", example: "Учительница говорила, что если много читать, так обязательно будешь грамотным.", caption: "two conjunctions side by side, and так comes later: no comma between them (The teacher said that if you read a lot, then you will surely write correctly.)" },
              { scheme: "[ ], (что, (если...), ...).", example: "Учительница говорила, что, если много читать, обязательно будешь грамотным.", caption: "no second part of the conjunction: a comma between them (The teacher said that, if you read a lot, you will surely write correctly.)" }
            ]
          },
          explain: [
            "<b>Chain</b> (последовательное подчинение): the first dependent clause depends on the main clause, the second depends on the first, and so on.",
            "<b>List</b> (однородное подчинение): clauses of the same type depend on the same main clause or the same word in it. Two such clauses joined by a single и (and) have no comma between them, just like parallel words. The repeated conjunction can be left out, as in English 'I knew (that) you would come and (that) we would talk'.",
            "<b>Parallel</b> (параллельное, неоднородное подчинение): clauses of different types depend on the main clause, or the clauses depend on different words in the main clause.",
            "If two conjunctions meet (что если that if, что когда that when, что хотя that although), look further along. If the second part of a double conjunction follows (то, так then; но but), there is <b>no comma</b> between the two conjunctions. If it doesn't, there <b>is a comma</b>, and you could remove the second clause without breaking the sentence."
          ],
          rule: "Test where two conjunctions meet: try removing the second clause. If the rest still works because there is no то, так or но, the comma is needed.",
          examples: [
            { text: "Нехлюдов был так занят, <mark>что хотя</mark> несколько раз на день заезжал к нам, <mark>но</mark> ни разу не поговорил со мной.", tr: "Nekhlyudov was so busy that, although he called on us several times a day, he never once talked to me.", note: "но follows: no comma between что and хотя (L. Tolstoy)" },
            { text: "Она ощутила, <mark>что, хотя</mark> с ней не заговаривают, в доме растревожены её появлением.", tr: "She sensed that, although nobody spoke to her, her arrival had stirred up the house.", note: "no second part of the conjunction: a comma (V. Grossman)" },
            { text: "Как рыба создана жить в воде, а птица создана летать, так человек создан жить среди природы.", tr: "Just as a fish is made to live in water and a bird is made to fly, so man is made to live in nature.", note: "list: (Как...), а ( ), [так...]. (V. Soloukhin)" }
          ],
          mistakes: [
            { wrong: "Он сказал, что, если будет время, то зайдёт.", right: "Он сказал, что если будет время, то зайдёт. / Он сказал, что, если будет время, зайдёт.", why: "When the second part то (then) is there, no comma goes between что and если. (He said that if he had time he would drop in.)" }
          ],
          quiz: [
            { q: "Is a comma needed after что? «Я думаю, что _ если человек каждый день видит деревья, он их не замечает» (I think that if a person sees trees every day, he doesn't notice them).", options: ["Yes", "No"], answer: 0, why: "There is no second part (то), so the если clause could be removed: a comma is needed." },
            { q: "What kind of linking? «Я знал, что ты придёшь и что мы поговорим» (I knew that you would come and that we would talk).", options: ["Chain", "List", "Parallel"], answer: 1, why: "Both are content clauses and both depend on the same word знал (knew)." }
          ]
        }
      ]
    },
    {
      title: "Sentences without conjunctions",
      titleRu: "Бессоюзное сложное предложение",
      topics: [
        {
          id: "g9-bsp-zapyataya",
          title: "Sentences without conjunctions: comma and semicolon",
          ru: "Строение БСП. Запятая и точка с запятой",
          paras: "§ 28–29",
          summary: "In a sentence without conjunctions, the clauses are joined only by intonation and meaning. The punctuation mark depends on how the clauses relate in meaning.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[ ], [ ], [ ].", example: "Светит солнце, поют птицы, шумит молодая листва.", caption: "a list: commas (The sun shines, birds sing, young leaves rustle.)" },
              { scheme: "[ , ]; [ , ].", example: "На пригретых солнцем крыльцах сидят галки, обычно болтливые, но теперь тихие; приветливо щурясь от весёлого света, глядят старинные окна.", caption: "long clauses: a semicolon (On the sun-warmed porches sit jackdaws, usually chatty but quiet now; old windows look out, squinting kindly in the cheerful light.)" },
              { scheme: "[ ]: [ ].", example: "Обратно лучше было идти: ветер дул в спину.", caption: "explanation, reason, content: a colon (Going back was easier: the wind was at our backs.)" },
              { scheme: "[ ] — [ ].", example: "Ярче солнце — виднее тень.", caption: "contrast, condition, time, result: a dash (The brighter the sun, the clearer the shadow.)" }
            ]
          },
          explain: [
            "A <b>sentence without conjunctions</b> (бессоюзное сложное предложение, БСП) has no conjunctions or relative words. The meaning link between the clauses is carried by intonation in speech and by the punctuation mark in writing.",
            "A <b>comma</b> is used for a <b>list</b>: events happen at the same time or one after another. You could put и (and) between the clauses. English often joins such clauses with 'and' or a full stop; Russian is happy with just commas.",
            "A <b>semicolon</b> is also used for a list, if the clauses are far apart in meaning or long and already contain commas.",
            "A colon and a dash show more complex links: explanation, reason, condition, contrast. They are the next topic."
          ],
          examples: [
            { text: "Дни становятся короче, солнце устало склоняется к югу, свет его сверкает только на поверхности вод.", tr: "The days are getting shorter, the sun wearily sinks to the south, its light sparkles only on the surface of the water.", note: "at the same time: commas (K. Paustovsky)" },
            { text: "Прозвенел звонок, ученики вошли в класс, урок начался.", tr: "The bell rang, the students came into the classroom, the lesson began.", note: "one after another: commas" }
          ],
          quiz: [
            { q: "Which mark? «Светит солнце _ поют птицы» (The sun shines, birds sing).", options: ["A comma", "A colon", "A dash"], answer: 0, why: "The clauses list events happening at the same time." },
            { q: "When does a sentence without conjunctions take a semicolon?", options: ["When the second clause explains the first", "When the clauses are long and contain commas", "When the first clause names a condition"], answer: 1, why: "A semicolon separates long clauses in a list." }
          ]
        },
        {
          id: "g9-bsp-dvoetochie-tire",
          title: "Colon and dash in sentences without conjunctions",
          ru: "Двоеточие и тире в БСП",
          paras: "§ 30–31",
          summary: "Use a colon if the second clause explains the first. Use a dash if the first clause gives a time or condition, if the clauses contrast, or if the second clause gives a result.",
          diagram: {
            type: "flow",
            title: "Which mark to use in a sentence without conjunctions",
            steps: [
              { q: "Do the clauses simply list events (you could add и, 'and')?", yes: "A comma, or a semicolon for long clauses: [ ], [ ].", no: null },
              { q: "Does the second clause explain the first, give the reason, spell out its content, or ask a direct question (you could add а именно 'namely', потому что 'because', что 'that')?", yes: "A colon: [ ]: [ ].", no: null },
              { q: "Does the first clause give a time or a condition (you could add когда 'when', если 'if')?", yes: "A dash: [time] — [ ], [condition] — [ ].", no: null },
              { q: "Do the clauses contrast or compare, or does the second give a result or something sudden (you could add но 'but', а 'while', словно 'as if', поэтому 'so', и вдруг 'and suddenly')?", yes: "A dash: [ ] — [ ].", no: "Reread the sentence: if и (and) fits, it is a list and needs a comma." }
            ]
          },
          explain: [
            "Use a <b>colon</b> if: <b>1)</b> the second clause explains the first (= а именно, namely); <b>2)</b> the second clause spells out a word of speaking, thinking or seeing in the first (= что, that; и увидел, что, and saw that); <b>3)</b> the second clause gives the reason (= потому что, because); <b>4)</b> the second clause is a direct question. English uses a colon in a similar way for explanations.",
            "Use a <b>dash</b> if: <b>1)</b> the second clause is a sudden action or quick change (= и вдруг, and suddenly); <b>2)</b> the clauses contrast or are compared (= а, но, but); <b>3)</b> one clause is likened to the other (= словно, as if); <b>4)</b> the first clause gives a condition (= если, if); <b>5)</b> the first clause gives a time (= когда, when); <b>6)</b> the second clause gives a result or conclusion (= поэтому, so). English rarely uses a dash this way, but in Russian it is very common.",
            "The main trick: silently add the conjunction that fits. It tells you both the meaning and the mark."
          ],
          rule: "Colon: the second clause answers a question about the first (what exactly? why? what?). Dash: the first clause sets up the second (when? if?), or the clauses sharply contrast.",
          examples: [
            { text: "Я сразу догадался: мы выиграли.", tr: "I guessed at once: we had won.", note: "content; you could add что, 'that' (V. Mashkov)" },
            { text: "Часто спорят: трусливы волки или отважны?", tr: "People often argue: are wolves cowardly or brave?", note: "a direct question (V. Peskov)" },
            { text: "Останусь жив — в Петербург поеду.", tr: "If I stay alive, I'll go to Petersburg.", note: "condition: = если, if (A. Novikov-Priboy)" },
            { text: "Я, входя, стукнул дверью — ты даже не обернулась.", tr: "I banged the door as I came in, but you didn't even turn round.", note: "mismatch: = но, but (I. Bunin)" },
            { text: "Земля кругла — на ней не скроешь тайны.", tr: "The earth is round, so you can't hide a secret on it.", note: "result (M. Dudin)" }
          ],
          mistakes: [
            { wrong: "Обратно лучше было идти — ветер дул в спину.", right: "Обратно лучше было идти: ветер дул в спину.", why: "The second clause gives the reason (= потому что, because), so a colon is used. (Going back was easier: the wind was at our backs.)" }
          ],
          quiz: [
            { q: "Which mark? «Обратно лучше было идти _ ветер дул в спину» (Going back was easier _ the wind was at our backs).", options: ["A colon", "A dash", "A comma"], answer: 0, why: "The second clause gives the reason: because the wind was at our backs." },
            { q: "Which mark? «Останусь жив _ в Петербург поеду» (I stay alive _ I'll go to Petersburg).", options: ["A colon", "A dash", "A semicolon"], answer: 1, why: "The first clause gives a condition: if I stay alive." },
            { q: "Which mark? «Я оглянулся _ вокруг никого не было» (I looked round _ there was nobody around).", options: ["A dash", "A colon", "A comma"], answer: 1, why: "You can add 'and saw that' (и увидел, что): the second clause gives the content of what was seen." }
          ]
        }
      ]
    },
    {
      title: "Sentences with mixed types of link",
      titleRu: "Сложное предложение с разными видами связи",
      topics: [
        {
          id: "g9-raznye-vidy-svyazi",
          title: "Multi-clause sentences with mixed links",
          ru: "Сложные предложения с разными видами связи",
          paras: "§ 32–33",
          summary: "One sentence can combine equal clauses, dependent clauses and clauses with no conjunction. The clauses group into blocks of meaning.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "[ ], и [ ], (хотя...).", example: "Наступил вечер, и в окнах зажглись огни, хотя на улице было ещё светло.", caption: "equal and dependent clauses (Evening came, and lights went on in the windows, although it was still light outside.)" },
              { scheme: "[ ]: [ ] — и [ ].", example: "Смех у неё был особенный: послушаешь — и самому смеяться захочется.", caption: "no-conjunction link and an equal link (Her laugh was special: you listen, and you want to laugh yourself.)" },
              { scheme: "[ ], но (когда...), то [ ].", example: "Он приезжает редко, но когда он приезжает, то всё в доме становится праздничным.", caption: "то follows: no comma between но and когда (He rarely comes, but when he does, then the whole house feels festive.)" },
              { scheme: "[ ], но, (когда...), [ ].", example: "Он приезжает редко, но, когда он приезжает, всё в доме становится праздничным.", caption: "no то: a comma where the two conjunctions meet" }
            ]
          },
          explain: [
            "A sentence with several clauses can mix different kinds of link: <b>equal and dependent</b>, <b>no-conjunction and dependent</b>, <b>equal and no-conjunction</b>, or all three at once.",
            "To make sense of it, find every core, work out how each pair of clauses is linked, and group closely linked clauses into <b>blocks</b>. The link between the blocks is called the leading link.",
            "The punctuation follows the rules you already know for compound, complex and no-conjunction sentences. Where a coordinating and a subordinating conjunction meet (и когда and when, но если but if), the same rule works as for two subordinating conjunctions: if the second part of a double conjunction follows (то, так then), no comma; if it doesn't, put a comma."
          ],
          examples: [
            { text: "Я был командирован дать отчёт о юбилее, <mark>и когда</mark> явился, <mark>то</mark> уже все сидели за столом.", tr: "I was sent to report on the anniversary, and when I arrived, everyone was already sitting at the table.", note: "то follows: no comma between и and когда (V. Gilyarovsky)" },
            { text: "Мы долго шли по лесу, и, когда показалась река, все обрадовались.", tr: "We walked through the forest for a long time, and when the river came into view, everyone was glad.", note: "no то: a comma after и" }
          ],
          quiz: [
            { q: "Is a comma needed after но? «Он приезжает редко, но _ когда он приезжает, то всё становится праздничным».", options: ["Yes", "No"], answer: 1, why: "The second part of the double conjunction (то) follows, so the когда clause cannot be removed: no comma." },
            { q: "What links are there in «Смех у неё был особенный: послушаешь — и самому смеяться захочется» (Her laugh was special: you listen, and you want to laugh yourself)?", options: ["No-conjunction and equal (coordinating)", "Dependent and equal", "Only no-conjunction"], answer: 0, why: "The colon with no conjunction is a no-conjunction link. The conjunction и (and) is an equal link." }
          ]
        }
      ]
    },
    {
      title: "Reported speech",
      titleRu: "Чужая речь",
      topics: [
        {
          id: "g9-pryamaya-rech-dialog",
          title: "Direct speech and dialogue",
          ru: "Прямая речь и диалог",
          paras: "§ 34–36",
          summary: "Direct speech gives someone's exact words. Russian puts it in «» quotation marks and uses dashes and commas differently from English, depending on where the author's words stand.",
          diagram: {
            type: "scheme",
            items: [
              { scheme: "А: «П».", example: "Мама сказала: «Возьми зонт».", caption: "author's words before the speech: a colon (Mum said, \"Take an umbrella.\")" },
              { scheme: "«П», — а.", example: "«Эта княжна Мери прехорошенькая», — сказал я ему.", caption: "author's words after the speech: comma outside the quotes, then a dash (\"This Princess Mary is very pretty,\" I said to him.)" },
              { scheme: "«П?» — а.", example: "«Ты куда?» — спросил брат.", caption: "after ?, ! or ... there is no comma (\"Where are you going?\" asked my brother.)" },
              { scheme: "«П, — а, — п».", example: "«Завтра, — сказал учитель, — будет контрольная».", caption: "author's words break one sentence (\"Tomorrow,\" said the teacher, \"there will be a test.\")" },
              { scheme: "«П, — а. — П».", example: "«Я опоздал, — сказал Петя. — Автобус долго не шёл».", caption: "the break falls between two sentences (\"I'm late,\" said Petya. \"The bus took ages.\")" },
              { scheme: "— П, — а.", example: "— Здравствуйте, — сказала девочка.", caption: "a line of dialogue on a new line (\"Hello,\" said the girl.)" }
            ]
          },
          explain: [
            "<b>Reported speech</b> (чужая речь) means someone else's words included in your own text. It can be given as <b>direct speech</b> (прямая речь), <b>indirect speech</b> (косвенная речь) or a <b>quotation</b> (цитата).",
            "<b>Direct speech</b> gives the words exactly, as they were said. In schemes: П or п is the direct speech (capital or small first letter), А or а is the author's words.",
            "If the author's words come <b>before</b> the speech, put a colon after them, and the speech starts with a capital letter. If they come <b>after</b>, put a comma after the closing quotes (or ?, !, ... inside the quotes), then a dash, and the author's words start with a small letter. Compare English: \"I'm tired,\" he said. Russian: «Я устал», — сказал он. The comma moves outside the quotes and a dash is added.",
            "A <b>dialogue</b> (диалог) is a conversation between two or more people. In Russian each line (реплика) starts on a new line with a dash, and no quotation marks are used. This is how dialogue looks in Russian novels."
          ],
          rule: "A full stop goes after the closing quotes. A question mark, exclamation mark or ellipsis goes inside them.",
          examples: [
            { text: "Максим Горький однажды сказал: «В карете прошлого никуда не уедешь».", tr: "Maxim Gorky once said, \"You won't get anywhere in the carriage of the past.\"", note: "А: «П». note the full stop after the closing quotes" },
            { text: "«Пожар! Пожар!» — раздался внизу отчаянный крик.", tr: "\"Fire! Fire!\" came a desperate cry from below.", note: "«П!» — а." },
            { text: "«Постой-ка, — Волк сказал, — сперва мне ведать надо...»", tr: "\"Wait a moment,\" said the Wolf, \"first I need to know...\"", note: "«П, — а, — п...» (I. Krylov)" }
          ],
          mistakes: [
            { wrong: "«Ты придёшь?», — спросил он.", right: "«Ты придёшь?» — спросил он.", why: "No comma after a question mark. (\"Will you come?\" he asked.)" },
            { wrong: "Он сказал: «я устал».", right: "Он сказал: «Я устал».", why: "Direct speech after the author's words starts with a capital letter. (He said, \"I'm tired.\")" },
            { wrong: "\"Я устал,\" сказал он.", right: "«Я устал», — сказал он.", why: "This is English punctuation. Russian uses «» quotes, puts the comma outside them and adds a dash." }
          ],
          quiz: [
            { q: "Which scheme fits «“Идём скорее”, — позвала сестра» (\"Let's go quickly,\" called my sister)?", options: ["А: «П».", "«П», — а.", "«П, — а, — п»."], answer: 1, why: "The author's words come after the direct speech." },
            { q: "How are the lines of a dialogue written in Russian?", options: ["Each in quotation marks, one after another", "Each on a new line, starting with a dash", "Separated by semicolons"], answer: 1, why: "In a dialogue each line starts on a new line with a dash; no quotation marks." },
            { q: "Which one has a mistake?", options: ["Мама сказала: «Возьми зонт».", "«Где ты был?» — спросил отец.", "«Я дома», — Сказала Оля."], answer: 2, why: "Author's words after direct speech start with a small letter: сказала." }
          ]
        },
        {
          id: "g9-kosvennaya-rech-citaty",
          title: "Indirect speech and quotations",
          ru: "Косвенная речь. Цитаты",
          paras: "§ 37–38",
          summary: "Indirect speech retells someone's words from the author's point of view, as a dependent clause. A quotation is an exact passage from a text, put in quotation marks.",
          diagram: {
            type: "compare",
            rows: [
              ["Direct speech", "Indirect speech", "How to change it"],
              ["Он сказал: «Я устал». (He said, \"I'm tired.\")", "Он сказал, что устал. (He said he was tired.)", "a statement: conjunction что (that)"],
              ["Она спросила: «Ты придёшь?» (She asked, \"Will you come?\")", "Она спросила, приду ли я. (She asked if I would come.)", "a yes/no question: particle ли (whether, if)"],
              ["Он спросил: «Где ты живёшь?» (He asked, \"Where do you live?\")", "Он спросил, где я живу. (He asked where I lived.)", "a question with a question word: the word becomes a relative word"],
              ["Мама сказала: «Убери комнату». (Mum said, \"Tidy your room.\")", "Мама сказала, чтобы я убрал комнату. (Mum told me to tidy my room.)", "a request or order: conjunction чтобы (so that)"]
            ]
          },
          explain: [
            "<b>Indirect speech</b> (косвенная речь) retells someone's words from the author's point of view. A sentence with indirect speech is a complex sentence: the main clause holds the author's words, and a content clause gives the speech.",
            "When you change direct speech into indirect, the personal pronouns and verb forms change to fit the new speaker (я → он, I → he; ты → я, you → I). Addresses, interjections and particles are dropped. There are no quotation marks. Unlike English, Russian does <b>not</b> shift the tense back: Он сказал: «Я живу в Минске» becomes Он сказал, что живёт в Минске (present tense kept), while English says 'He said he lived in Minsk'.",
            "A <b>quotation</b> (цитата) is an exact passage from a text, put in quotation marks. It can be introduced like direct speech, or become part of your sentence after a conjunction; then it starts with a small letter. A gap in a quotation is shown by an ellipsis (...).",
            "Poetry quoted with its line breaks kept is not put in quotation marks. An <b>epigraph</b> (эпиграф) is usually not in quotation marks either; the author's name goes below it on the right, without brackets."
          ],
          examples: [
            { text: "Он говорит, что спас мне жизнь.", tr: "He says that he saved my life.", note: "indirect speech (A. Pushkin)" },
            { text: "А. Чехов писал о пьесе «Чайка», что она «написана вопреки всем правилам драматического искусства».", tr: "A. Chekhov wrote about his play \"The Seagull\" that it was \"written against all the rules of dramatic art\".", note: "a quotation built into the sentence: small first letter" },
            { text: "«Биография героини... в одной из моих записных книжек», — отмечает А. Ахматова.", tr: "\"The heroine's biography... is in one of my notebooks,\" notes A. Akhmatova.", note: "a gap in the quotation: ellipsis" }
          ],
          mistakes: [
            { wrong: "Она спросила, придёшь ли ты?", right: "Она спросила, приду ли я.", why: "An indirect question needs no question mark, and the pronouns change. (She asked if I would come.)" },
            { wrong: "Он сказал, что «я устал».", right: "Он сказал, что устал.", why: "Indirect speech has no quotation marks; the words are retold from the author's side. (He said he was tired.)" }
          ],
          quiz: [
            { q: "How do you turn Мама сказала: «Убери комнату» (Mum said, \"Tidy your room\") into indirect speech?", options: ["Мама сказала, что убери комнату.", "Мама сказала, чтобы я убрал комнату.", "Мама сказала: убрать комнату."], answer: 1, why: "A request or order becomes a clause with чтобы, and the verb goes into the past tense form." },
            { q: "How does a quotation start when it comes after the conjunction что (that)?", options: ["With a capital letter", "With a small letter", "Either is fine"], answer: 1, why: "Such a quotation becomes part of the author's sentence." },
            { q: "What kind of sentence is a sentence with indirect speech?", options: ["A complex sentence with a content clause", "A sentence without conjunctions", "A simple sentence"], answer: 0, why: "The author's words are the main clause and the indirect speech is the dependent clause." }
          ]
        }
      ]
    }
  ]
};

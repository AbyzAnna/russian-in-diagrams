window.GRADES = window.GRADES || {};
window.GRADES[10] = {
  grade: 10,
  book: "Russian Language, Grade 10",
  bookRu: "Русский язык. 10 класс",
  authors: "V. L. Leonovich, V. A. Sanikovich, F. M. Litvinko et al.",
  year: 2020,
  pdf: "https://mgouor.by/wp-content/uploads/2023/10/rus_yaz_10kl_leonovich_rus_bel_2020.pdf",
  level: "Advanced",
  intro: "Grade 10 reviews and organizes what you already know about Russian words: their sounds and stress, their meaning, their parts and the parts of speech. The biggest part of the year is spelling, with the rules grouped so you can see what each spelling is based on. You also look at how a text is built, what good speech is, and the five functional styles of Russian.",
  glossary: [
    { ru: "ударение", en: "stress", hint: "saying one syllable louder and longer; in Russian it can change meaning: за́мок (castle), замо́к (lock)" },
    { ru: "орфоэпия", en: "orthoepy (correct pronunciation)", hint: "the rules of standard pronunciation: конечно is said with [шн]" },
    { ru: "орфография", en: "spelling", hint: "the rules for writing words correctly" },
    { ru: "морфема", en: "morpheme", hint: "the smallest part of a word that has meaning: root, prefix, suffix, ending" },
    { ru: "корень", en: "root", hint: "the core part of a word that carries its main meaning: чит in читать (to read)" },
    { ru: "приставка", en: "prefix", hint: "a part before the root: пере- in перечитать (to reread)" },
    { ru: "суффикс", en: "suffix", hint: "a part after the root: -ник in подснежник (snowdrop)" },
    { ru: "окончание", en: "ending", hint: "the changing last part of a word that shows case, number, person: книг-а, книг-и" },
    { ru: "спряжение", en: "conjugation", hint: "how a verb changes by person and number; Russian has two patterns, I and II" },
    { ru: "причастие", en: "participle", hint: "a verb form that describes a noun like an adjective: читающий (who is reading)" },
    { ru: "деепричастие", en: "adverbial participle", hint: "a verb form for a second action, like English '-ing' in 'Reading, he smiled': читая" },
    { ru: "многозначное слово", en: "word with several meanings", hint: "one word with related meanings: острый нож (sharp knife), острый ум (sharp mind)" },
    { ru: "синоним", en: "synonym", hint: "a word with a close meaning: смелый, храбрый (brave)" },
    { ru: "фразеологизм", en: "idiom, set phrase", hint: "a fixed phrase with one overall meaning: бить баклуши (to idle about)" },
    { ru: "функциональный стиль", en: "functional style", hint: "a type of language used for a certain purpose: scientific, official, conversational and others" }
  ],
  sections: [
    {
      title: "Text, good speech, styles",
      titleRu: "Текст, культура речи, стили",
      topics: [
        {
          id: "g10-tekst",
          title: "What makes a text",
          ru: "Признаки текста",
          paras: "§ 5",
          summary: "A text is not just a set of sentences. It is one connected whole, and it has four main features.",
          diagram: {
            type: "cards",
            items: [
              { title: "One topic (тематическое единство)", text: "All sentences develop one topic. The title often names it.", example: "Topic «Осенний лес» (The autumn forest): no paragraph about football." },
              { title: "Logical order (последовательность)", text: "Ideas come in a logical order: introduction, main part, conclusion.", example: "First a claim, then the evidence, then the conclusion." },
              { title: "One main idea (смысловая цельность)", text: "The text expresses the author's main idea, and every part serves it.", example: "All examples prove one idea: a true friend is known in hard times." },
              { title: "Linked sentences (структурная связность)", text: "Sentences are joined by language tools: pronouns, repeated words, synonyms, conjunctions.", example: "Вдали показался <mark>лес</mark>. <mark>Он</mark> темнел на горизонте. (A forest appeared in the distance. It looked dark on the horizon.)" }
            ]
          },
          explain: [
            "A <b>text</b> (текст) is a group of sentences joined by one topic and one main idea, and linked to each other in meaning and in grammar. It is the same idea as a well-built paragraph or essay in English.",
            "Russian textbooks name two ways to link sentences. In a <b>chain link</b> (цепная связь), each new sentence picks up something from the one before, through a pronoun, a repeated word or a synonym. In a <b>parallel link</b> (параллельная связь), the sentences are built the same way and stand side by side.",
            "A tip for learners: a Russian pronoun must match the gender of the noun it replaces. <i>Река</i> (river) is feminine, so the next sentence uses <i>она</i> (she). In English both would simply be 'it'.",
            "To check your own text, ask: what is it about (the topic)? What do I want to say (the main idea)? Is it clear how each sentence connects to the one before?"
          ],
          rule: "One topic, one main idea, a logical order, linked sentences.",
          examples: [
            { text: "Мы подошли к <mark>реке</mark>. <mark>Она</mark> была широкой и быстрой.", tr: "We came to the river. It was wide and fast.", note: "chain link: the pronoun она replaces реке" },
            { text: "Шумит лес. Журчит ручей. Поют птицы.", tr: "The forest rustles. The stream babbles. The birds sing.", note: "parallel link: all sentences are built the same way" },
            { text: "Петя любит <mark>книги</mark>. Эти <mark>издания</mark> он собирает с детства.", tr: "Petya loves books. He has been collecting these editions since childhood.", note: "link through a synonym" }
          ],
          quiz: [
            { q: "A story about a hiking trip suddenly has a paragraph about phone prices. Which feature of a text is broken?", options: ["one topic", "linked sentences", "logical order"], answer: 0, why: "The paragraph has nothing to do with the topic of the text." },
            { q: "How are these sentences linked: «Купили щенка. Его назвали Бимом» (We bought a puppy. We named him Bim)?", options: ["parallel link", "chain link", "they are not linked"], answer: 1, why: "The pronoun «его» (him) points back to «щенка» (puppy) in the first sentence." }
          ]
        },
        {
          id: "g10-kultura-rechi",
          title: "Good speech: norms and qualities",
          ru: "Культура речи: нормы и качества речи",
          paras: "§ 6",
          summary: "Good speech means following the rules of standard Russian and also speaking in a precise, clear way that fits the situation.",
          diagram: {
            type: "tree",
            root: {
              label: "Good speech (культура речи)",
              children: [
                {
                  label: "Language norms (нормы)",
                  note: "what is correct",
                  children: [
                    { label: "Pronunciation", note: "кафе (café) with a hard [фэ]" },
                    { label: "Stress", note: "звони́т (he calls)" },
                    { label: "Word choice", note: "which words go together: иметь значение (to matter)" },
                    { label: "Word forms", note: "нет мест (no seats), инженеры (engineers)" },
                    { label: "Sentence structure", note: "how sentences are built" }
                  ]
                },
                {
                  label: "Qualities of speech (качества)",
                  note: "what is good",
                  children: [
                    { label: "Correct and precise", note: "follows the norms, uses the right word" },
                    { label: "Logical", note: "ideas do not contradict each other" },
                    { label: "Clean", note: "no filler words or slang" },
                    { label: "Rich and expressive", note: "varied words, figures of speech" },
                    { label: "Appropriate", note: "fits the situation" }
                  ]
                }
              ]
            }
          },
          explain: [
            "A <b>language norm</b> (норма) is a rule that everyone who speaks or writes standard Russian is expected to follow. Norms cover pronunciation, stress, choice of words, word forms and sentence structure.",
            "Correct speech is not always good speech. Good speech is also precise, logical, clean, rich, expressive and right for the situation. 'Clean' means without filler words such as <i>типа</i> ('like') and <i>короче</i> ('anyway', literally 'shorter').",
            "Common mistakes: a wrong word form (<i>много делов</i> instead of <i>много дел</i>, 'lots to do'), mixing two fixed phrases (<i>играть значение</i> instead of <i>иметь значение</i>, 'to matter'), and a badly built participle phrase. <i>Подъезжая к станции, шляпа слетела</i> means 'Approaching the station, the hat flew off', as if the hat were travelling. English calls this a dangling modifier, and Russian treats it as an error too."
          ],
          rule: "First be correct (follow the norms), then be good (precise, clean, fitting).",
          examples: [
            { text: "<mark>класть</mark> книгу, а не «ложить»", tr: "to put a book down (класть), not «ложить»", note: "word-choice norm: «ложить» is non-standard" },
            { text: "нет <mark>мест</mark>, много <mark>дел</mark>", tr: "no seats, lots to do", note: "word-form norm: the correct genitive plural forms" },
            { text: "<mark>Когда я подъезжал</mark> к станции, у меня слетела шляпа.", tr: "As I was approaching the station, my hat flew off.", note: "sentence norm: it is clear who was approaching" },
            { text: "<mark>наблюдатель</mark>, а не «наблюдальщик»", tr: "observer (наблюдатель), not «наблюдальщик»", note: "word-building norm: use the accepted suffix" }
          ],
          mistakes: [
            { wrong: "одеть пальто", right: "надеть пальто, одеть ребёнка", why: "Надеть means 'to put on' (clothes, on yourself). Одеть means 'to dress' (someone else). English 'put on' and 'dress' split the same way." },
            { wrong: "играть значение", right: "иметь значение, играть роль", why: "Two fixed phrases got mixed: иметь значение (to matter) and играть роль (to play a role)." }
          ],
          quiz: [
            { q: "Which norm is broken in «Прочитав книгу, мне стало грустно» (Having read the book, to me it became sad)?", options: ["pronunciation", "stress", "sentence structure"], answer: 2, why: "The participle «прочитав» (having read) must refer to the subject of the sentence, but «мне» (to me) is not a subject. Correct: «Когда я прочитал книгу, мне стало грустно» (When I had read the book, I felt sad)." },
            { q: "A spoken answer is full of «типа» (like) and «короче» (anyway). Which quality of speech suffers?", options: ["cleanness", "logic", "richness"], answer: 0, why: "Filler words make speech 'unclean'." }
          ]
        },
        {
          id: "g10-stili",
          title: "Functional styles",
          ru: "Функциональные стили речи",
          paras: "§ 7",
          summary: "Standard Russian has five functional styles. Each one serves its own purpose and uses its own words and structures.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Conversational (разговорный)", "Scientific (научный)", "Official (официально-деловой)", "Journalistic (публицистический)", "Literary (художественный)"],
              ["Where", "everyday life, family and friends", "science, study", "laws, documents", "media, public life", "fiction and poetry"],
              ["Purpose", "to talk with people", "to give exact knowledge", "to inform and to instruct", "to inform and to persuade", "to create images and move the reader"],
              ["Genres", "chat, note, messages", "article, textbook, report", "law, application, certificate", "article, interview, report from the scene", "short story, novel, poem"],
              ["Language", "colloquial words, incomplete sentences", "terms, complex sentences", "set phrases, nouns made from verbs", "words that judge, rhetorical questions", "imagery, words from all styles"]
            ]
          },
          explain: [
            "A <b>functional style</b> (функциональный стиль) is a type of standard language used for a certain job. Each style has its own area of life, its own genres and its own set of language tools. English has the same thing: compare a text message, a lab report and a legal contract.",
            "The scientific, official, journalistic and literary styles are called <b>bookish</b> (книжные): they live mainly in writing. The conversational style is mostly spoken and unprepared.",
            "To find the style of a text, ask three questions: where is it used, why was it written, and what kind of words does it mostly use?"
          ],
          rule: "Style = area of life + purpose + genre + language features.",
          examples: [
            { text: "Ну ты чего, идёшь или нет?", tr: "So what's up, are you coming or not?", note: "conversational: particle ну, short and informal" },
            { text: "Фотосинтез — это процесс образования органических веществ на свету.", tr: "Photosynthesis is the process of forming organic substances in light.", note: "scientific: a term and its definition" },
            { text: "Прошу предоставить мне отпуск с 1 июля.", tr: "I request to be granted leave from 1 July.", note: "official: the fixed formula of an application" },
            { text: "Неужели мы так и будем молча смотреть, как мелеют наши реки?", tr: "Are we really going to watch in silence as our rivers grow shallow?", note: "journalistic: a rhetorical question and a call to act" }
          ],
          quiz: [
            { q: "Which style is «Гражданин обязан соблюдать Конституцию» (A citizen must obey the Constitution)?", options: ["scientific", "official", "journalistic"], answer: 1, why: "It is the language of law: an instruction, from the area of law." },
            { q: "Which style can use words from all the other styles?", options: ["literary", "scientific", "official"], answer: 0, why: "In fiction any word can help create an image, for example in a character's speech." },
            { q: "Which genre belongs to the scientific style?", options: ["report from the scene", "power of attorney", "academic report"], answer: 2, why: "A report from the scene is journalism, and a power of attorney is an official document." }
          ]
        }
      ]
    },
    {
      title: "Words: sounds and meaning",
      titleRu: "Слово: звуки и значение",
      topics: [
        {
          id: "g10-proiznoshenie",
          title: "Stress and pronunciation",
          ru: "Ударение и произносительные нормы",
          paras: "§ 9–11",
          summary: "Some Russian words are not pronounced the way they are spelled, and stress can fall on any syllable. These rules have to be learned and checked in a dictionary.",
          diagram: {
            type: "cards",
            items: [
              { title: "Unstressed о", text: "Without stress, о sounds like а. The spelling does not change.", example: "вода́ (water) [вада́], молоко́ (milk) [малако́]" },
              { title: "Е after a consonant in borrowed words", text: "In many borrowed words the consonant before е stays hard, as if it were э. In others it is soft. Check a dictionary.", example: "кафе (café) [фэ], индекс (index) [дэ]; but музей (museum) [з'], шинель (greatcoat) [н']" },
              { title: "The letters чн", text: "Usually [чн]. In some words [шн]. In a few words both are allowed.", example: "красочный (colourful) [чн]; конечно (of course), скучно (boring), яичница (fried eggs) [шн]; булочная (bakery) [чн] or [шн]" },
              { title: "-тся, -ться", text: "In verbs these endings sound like [ца].", example: "браться (to take up) [бра́ца], кусается (it bites) [куса́еца]" },
              { title: "тс, дс before к", text: "Where a root ending in т or д meets the suffix -ск-, you hear [ц].", example: "братский (brotherly) [бра́цкий], городской (city, adj.) [гарацко́й]" },
              { title: "The sound г", text: "Said as a hard [g], as in English 'go'. At the end of a word it becomes [k].", example: "нога́ (leg), but ног (of legs) [нок]" },
              { title: "Stress", text: "Russian stress can fall on any syllable and can move when the word changes. Check difficult words in a dictionary.", example: "звони́т (calls), включи́т (will switch on), краси́вее (more beautiful), свёкла (beetroot), катало́г (catalogue), то́рты (cakes)" }
            ]
          },
          explain: [
            "<b>Stress</b> (ударение) means saying one syllable of a word louder and longer. English has stress too (a REcord, to reCORD), but in Russian it matters even more, because it can change the meaning: <i>за́мок</i> means 'castle' and <i>замо́к</i> means 'lock'. Normal Russian texts do not mark stress, so learners check it in a dictionary. This site shows it with the mark ´.",
            "Russian stress is <b>free</b> (разноместное): it can fall on any syllable. It is also <b>mobile</b> (подвижное): it can move to another syllable when the word changes form: <i>рука́</i> (hand), <i>ру́ки</i> (hands).",
            "Stress also changes how vowels sound. Without stress, <i>о</i> sounds like <i>а</i>: <i>вода́</i> (water) is said [вада́]. So you cannot always spell a word just by hearing it.",
            "<b>Orthoepy</b> (орфоэпия) is the study of correct pronunciation. In many verbs ending in <i>-ить</i>, stress falls on the ending: <i>звони́шь, звони́т, звоня́т</i> (you call, he calls, they call); <i>включи́т</i> (he will switch on)."
          ],
          rule: "Stress can change the meaning (за́мок, замо́к). Unstressed о sounds like а. When in doubt, check the dictionary.",
          examples: [
            { text: "за́мок / замо́к", tr: "castle / lock", note: "same spelling, stress changes the meaning" },
            { text: "конечно [<mark>шн</mark>]", tr: "of course", note: "the standard is [шн], not [чн]" },
            { text: "звон<u>и́</u>т, звон<u>и́</u>м", tr: "he calls, we call", note: "stress on the ending" },
            { text: "кра<u>си́</u>вее", tr: "more beautiful", note: "comparative form: stress as in краси́вый (beautiful)" },
            { text: "тест [тэ], партер [тэ], но термин [т']", tr: "test, theatre stalls, but term", note: "е after a consonant in borrowed words" }
          ],
          mistakes: [
            { wrong: "зво́нит", right: "звони́т", why: "In the forms of звонить (to call), stress falls on the ending." },
            { wrong: "свекла́", right: "свёкла", why: "The letter ё is always stressed." }
          ],
          quiz: [
            { q: "Which stress is correct for 'he will switch on'?", options: ["вклю́чит", "включи́т", "both are correct"], answer: 1, why: "The standard is включи́т, включи́шь, like звони́т." },
            { q: "In which word is чн said as [шн]?", options: ["красочный (colourful)", "вечный (eternal)", "конечно (of course)"], answer: 2, why: "In конечно the standard pronunciation is [шн]." },
            { q: "How is «кусается» (it bites) pronounced?", options: ["[куса́еца]", "[куса́етса]", "[куса́еся]"], answer: 0, why: "In verbs, -тся sounds like [ца]." }
          ]
        },
        {
          id: "g10-znachenie-slova",
          title: "Word meaning. Words with several meanings",
          ru: "Значение слова. Многозначность",
          paras: "§ 12–13",
          summary: "A word has a lexical meaning (what it names) and a grammatical meaning (its form). A word can have one meaning or several.",
          diagram: {
            type: "tree",
            root: {
              label: "Word meaning (значение слова)",
              children: [
                {
                  label: "Lexical (лексическое)",
                  note: "what the word names",
                  children: [
                    { label: "Words with one meaning", note: "берёза (birch), тетрадь (notebook), термин (term)" },
                    {
                      label: "Words with several meanings",
                      note: "the meanings are related",
                      children: [
                        { label: "Literal (прямое)", note: "names the thing directly: золотое кольцо (gold ring)" },
                        { label: "Figurative (переносное)", note: "by likeness or connection: золотые руки (golden hands = skilled hands)" }
                      ]
                    }
                  ]
                },
                {
                  label: "Grammatical (грамматическое)",
                  note: "the form of the word",
                  children: [
                    { label: "Part of speech", note: "noun, verb..." },
                    { label: "Gender, number, case, tense", note: "shown by endings and suffixes" }
                  ]
                }
              ]
            }
          },
          explain: [
            "The <b>lexical meaning</b> (лексическое значение) tells you what a word names: a thing, a quality, an action. A dictionary explains it. The <b>grammatical meaning</b> (грамматическое значение) tells you the part of speech and the form of the word. In Russian this is mostly shown by the ending: <i>книга</i> (a book), <i>книги</i> (books).",
            "A <b>word with several meanings</b> (многозначное слово) has meanings that are related. One is <b>literal</b> (прямое), the others are <b>figurative</b> (переносные). A figurative meaning comes from likeness, called metaphor (<i>хвост поезда</i>, 'the tail of a train'), or from a connection between things, called metonymy (<i>весь класс смеялся</i>, 'the whole class laughed', where 'class' means the students). English works the same way.",
            "In a dictionary, the meanings of such a word are numbered in one entry. Figurative meanings are often marked <i>перен.</i> (figurative)."
          ],
          rule: "Related meanings in one word = polysemy. Literal meaning first, figurative ones grow from it.",
          examples: [
            { text: "<mark>острый</mark> нож / <mark>острый</mark> ум", tr: "a sharp knife / a sharp mind", note: "literal and figurative meaning, just like in English" },
            { text: "<mark>класс</mark> пошёл на экскурсию", tr: "the class went on a trip", note: "figurative: класс means the students of the class" },
            { text: "<mark>книги</mark>: сущ., ж. р., мн. ч., И. п.", tr: "books: noun, feminine, plural, nominative case", note: "grammatical meaning" }
          ],
          quiz: [
            { q: "In which phrase is the adjective used figuratively?", options: ["железный гвоздь (iron nail)", "железный характер (iron character)", "железная крыша (iron roof)"], answer: 1, why: "A character is not made of iron: the meaning 'hard, strong' is carried over by likeness." },
            { q: "What belongs to the grammatical meaning of «рекой» (by the river)?", options: ["instrumental case, singular", "a stream of water", "a figurative meaning"], answer: 0, why: "Case and number are grammar. 'A stream of water' is the lexical meaning." }
          ]
        },
        {
          id: "g10-omonimy-sinonimy-antonimy",
          title: "Homonyms, synonyms, antonyms",
          ru: "Омонимы, синонимы, антонимы",
          paras: "§ 14–16",
          summary: "Words can sound the same with different meanings, have close meanings, or have opposite meanings.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Homonyms (омонимы)", "Synonyms (синонимы)", "Antonyms (антонимы)"],
              ["Sound and spelling", "the same", "different", "different"],
              ["Meaning", "different, not related", "close or the same", "opposite"],
              ["Part of speech", "the same", "the same", "the same"],
              ["Example", "клуб дыма (a puff of smoke), заводской клуб (a factory club)", "смелый, храбрый, отважный (brave, courageous, bold)", "горячий, холодный (hot, cold)"],
              ["Use in speech", "puns, wordplay", "precision, avoiding repetition", "contrast"]
            ]
          },
          explain: [
            "<b>Homonyms</b> (омонимы) sound and are spelled the same, but their meanings are not related at all: <i>молоть</i> (to grind grain) and <i>молоть</i> (to talk nonsense). English has them too: 'bank' (of a river) and 'bank' (for money). In a dictionary they are separate entries. This is how they differ from a word with several related meanings.",
            "<b>Synonyms</b> (синонимы) have close meanings. A group of them forms a <b>synonym row</b> (синонимический ряд), and its main neutral word is called the <b>dominant</b> (доминанта). Some synonyms differ in shade of meaning: <i>привлекательный</i> (attractive), <i>заманчивый</i> (tempting). Others differ in style: <i>лицо</i> (face, neutral), <i>лик</i> (face, high bookish style), like English 'face' and 'countenance'.",
            "<b>Antonyms</b> (антонимы) have opposite meanings. Only words whose meanings can be opposed by quality, amount, time or direction have them: <i>день, ночь</i> (day, night); <i>входить, выходить</i> (to go in, to go out)."
          ],
          rule: "Homonyms: same form, unrelated meanings. Synonyms: close meanings. Antonyms: opposite meanings.",
          examples: [
            { text: "<mark>мина</mark> противотанковая / грустная <mark>мина</mark>", tr: "an anti-tank mine / a sad face (expression)", note: "homonyms" },
            { text: "осуществить, реализовать, выполнить, воплотить", tr: "to carry out, to implement, to fulfil, to bring to life", note: "a synonym row; the dominant is осуществить" },
            { text: "лицо (нейтр.), лик (книжн.), физиономия (разг.)", tr: "face (neutral), countenance (bookish), mug (colloquial)", note: "synonyms that differ in style" },
            { text: "Ученье — свет, а неученье — тьма.", tr: "Learning is light, and ignorance is darkness.", note: "antonyms in a proverb" }
          ],
          quiz: [
            { q: "Which pair shows homonyms, not two meanings of one word?", options: ["острый нож, острый ум (sharp knife, sharp mind)", "горн (bugle), горн (blacksmith's furnace)", "золотое кольцо, золотая осень (gold ring, golden autumn)"], answer: 1, why: "The two meanings of горн are not related. In the other pairs one meaning grew from the other by likeness." },
            { q: "Which word is the dominant of the row «глядеть, смотреть, взирать, пялиться» (all: to look)?", options: ["взирать", "смотреть", "пялиться"], answer: 1, why: "The dominant is neutral. Взирать is bookish, and пялиться (to stare, gawp) is very informal." },
            { q: "Which word has no antonym?", options: ["стол (table)", "высокий (tall)", "рано (early)"], answer: 0, why: "A table is an object, and there is nothing 'opposite' to it." }
          ]
        },
        {
          id: "g10-frazeologizmy",
          title: "Idioms",
          ru: "Фразеологические обороты",
          paras: "§ 17",
          summary: "An idiom is a fixed group of words with one overall meaning. You don't build it each time: you use it ready-made, like English 'kick the bucket'.",
          diagram: {
            type: "compare",
            rows: [
              ["", "Idiom (фразеологизм)", "Free phrase (свободное словосочетание)"],
              ["Meaning of the words", "figurative: the whole phrase has one meaning", "literal: each word means itself"],
              ["Make-up", "fixed: words cannot be replaced", "free: words can be changed"],
              ["Role in the sentence", "the whole phrase is one part of the sentence", "each word is a separate part of the sentence"],
              ["Example", "бить баклуши (to idle about)", "бить мяч ногой (to kick a ball)"]
            ]
          },
          explain: [
            "An <b>idiom</b> (фразеологический оборот, фразеологизм) has two or more words, a fixed make-up and one overall meaning. Its main feature is that it is <b>reproduced</b>: we don't invent an idiom, we remember it. Translating the words one by one usually gives nonsense.",
            "Most idioms have one meaning (<i>на край света</i>, literally 'to the edge of the world': very far away), but some have several (<i>свести с ума</i>: to drive someone mad; to make someone fall in love, to delight).",
            "Idioms can be synonyms (<i>в поте лица</i> 'by the sweat of one's brow' and <i>засучив рукава</i> 'with rolled-up sleeves', both meaning 'working hard') or antonyms (<i>в поте лица</i> and <i>спустя рукава</i>, 'carelessly'). Do not change the words of an idiom, and do not mix two idioms into one."
          ],
          rule: "An idiom is taken whole: same words, one meaning, one part of the sentence.",
          examples: [
            { text: "<mark>намотать на ус</mark>", tr: "to take note, remember well (literally 'to wind onto one's moustache')", note: "one overall meaning" },
            { text: "<mark>капля в море</mark> / <mark>хоть пруд пруди</mark>", tr: "a drop in the ocean / plenty of something, loads", note: "idioms with opposite meanings" },
            { text: "Он <mark>водит нас за нос</mark>.", tr: "He is fooling us (literally 'leading us by the nose').", note: "the whole idiom is the predicate; careful: English 'lead by the nose' means 'control', the Russian means 'deceive'" }
          ],
          mistakes: [
            { wrong: "играть значение", right: "иметь значение / играть роль", why: "Two idioms got mixed: иметь значение (to matter) and играть роль (to play a role)." },
            { wrong: "скрипя сердцем", right: "скрепя сердце", why: "The idiom means 'reluctantly' and comes from скрепить (to hold firm), not скрипеть (to creak). Its words cannot be changed." }
          ],
          quiz: [
            { q: "Which one is an idiom?", options: ["глядел в окно (looked out of the window)", "как в воду глядел (literally 'as if he looked into water')", "вода в стакане (water in a glass)"], answer: 1, why: "«Как в воду глядел» means 'he foresaw it': the meaning is whole and figurative." },
            { q: "Which idiom is opposite in meaning to «в поте лица» (working very hard)?", options: ["засучив рукава", "не покладая рук", "спустя рукава"], answer: 2, why: "«Спустя рукава» means 'carelessly'. The other two mean 'working hard'." }
          ]
        }
      ]
    },
    {
      title: "Word structure and word formation",
      titleRu: "Состав слова и словообразование",
      topics: [
        {
          id: "g10-sostav-slova",
          title: "Word structure: morphemes",
          ru: "Состав слова: морфемы",
          paras: "§ 18",
          summary: "A morpheme is the smallest part of a word that has meaning. Some morphemes make new words, others only make forms of the same word.",
          diagram: {
            type: "morph",
            words: [
              { parts: [ { t: "пере", k: "prefix" }, { t: "чит", k: "root" }, { t: "ыва", k: "suffix" }, { t: "ть", k: "suffix" } ], caption: "перечитывать (to reread): -ыва- makes a new verb, -ть only makes the infinitive form" },
              { parts: [ { t: "про", k: "prefix" }, { t: "чит", k: "root" }, { t: "а", k: "suffix" }, { t: "вш", k: "suffix" }, { t: "ий", k: "ending" } ], caption: "прочитавший (who has read): -вш- is a form-building suffix of the participle" },
              { parts: [ { t: "под", k: "prefix" }, { t: "снеж", k: "root" }, { t: "ник", k: "suffix" }, { t: "", k: "zero" } ], caption: "подснежник (snowdrop): zero ending; compare подснежника (of a snowdrop)" },
              { parts: [ { t: "у", k: "prefix" }, { t: "мы", k: "root" }, { t: "ва", k: "suffix" }, { t: "ть", k: "suffix" }, { t: "ся", k: "postfix" } ], caption: "умываться (to wash one's face): the postfix -ся comes after the infinitive suffix" },
              { parts: [ { t: "как", k: "root" }, { t: "ой", k: "ending" }, { t: "-нибудь", k: "postfix" } ], caption: "какой-нибудь (any, some): the postfix comes after the ending" }
            ]
          },
          explain: [
            "A <b>morpheme</b> (морфема) is the smallest meaningful part of a word. English has them too: un-break-able. Russian morphemes are: <b>root</b> (корень), <b>prefix</b> (приставка), <b>suffix</b> (суффикс), <b>postfix</b> (постфикс, a part that comes after the ending, like -ся), <b>linking vowel</b> (соединительная морфема) and <b>ending</b> (окончание). Every word has a root, and it carries the main meaning.",
            "<b>Form-building</b> morphemes make forms of the same word and are not part of the stem: endings, the infinitive suffixes <i>-ть, -чь, -ти</i>, the past tense suffix <i>-л-</i>, participle suffixes, comparison suffixes, and the postfix <i>-те</i> in commands.",
            "<b>Word-building</b> morphemes make new words and are part of the stem: prefixes, most suffixes, linking vowels, and the postfixes <i>-то, -либо, -нибудь, -ся</i>.",
            "To find the root, look at related words. Some roots are <b>bound</b> (связанные): they never appear without a prefix: <i>об-у-ть</i> (to put shoes on), <i>раз-у-ть</i> (to take shoes off); <i>при-й-ти</i> (to come), <i>у-й-ти</i> (to leave)."
          ],
          rule: "Stem = the word without its ending and without form-building suffixes.",
          examples: [
            { text: "чита<u>л</u>а", tr: "she read (was reading)", note: "-л- is the past tense suffix, -а is the ending (feminine)" },
            { text: "нов<u>ейш</u>ий", tr: "the newest", note: "-ейш- is the superlative suffix, like English -est" },
            { text: "пиши<u>те</u>", tr: "write! (to several people, or politely)", note: "-те is the postfix of the plural or polite command" }
          ],
          quiz: [
            { q: "In «читать» (to read), which morpheme is the infinitive suffix?", options: ["-а-", "чит-", "-ть"], answer: 2, why: "The textbook counts -ть as a form-building suffix. The -а- belongs to the stem." },
            { q: "Which morpheme is never part of the stem?", options: ["ending", "prefix", "postfix -ся"], answer: 0, why: "The ending only makes a form of the word. What remains without it is the stem." },
            { q: "Where is the postfix in «кто-нибудь» (somebody)?", options: ["кт-", "-нибудь", "-о"], answer: 1, why: "The postfix comes after the ending and is written with a hyphen." }
          ]
        },
        {
          id: "g10-sposoby-slovoobrazovaniya",
          title: "Ways of forming words",
          ru: "Способы словообразования",
          paras: "§ 19–20",
          summary: "A new word is made from another word. The way it is made depends on what was added to the original word.",
          diagram: {
            type: "cards",
            items: [
              { title: "Prefix (приставочный)", text: "A prefix is added. The part of speech stays the same.", example: "гулять (to walk) → погулять (to go for a walk)" },
              { title: "Suffix (суффиксальный)", text: "A suffix is added. Sounds may change or part of the stem may drop.", example: "лиса (fox) → лисий (fox's), читать (to read) → читка (a reading)" },
              { title: "Prefix + suffix (приставочно-суффиксальный)", text: "A prefix and a suffix are added at the same time.", example: "сложный (complex) → усложнить (to complicate), окно (window) → подоконник (windowsill)" },
              { title: "Postfix (постфиксальный)", text: "A postfix is added.", example: "какой (which) → какой-то (some), мыть (to wash) → мыться (to wash oneself)" },
              { title: "Prefix + postfix (приставочно-постфиксальный)", text: "A prefix and a postfix at once. Only verbs.", example: "читать (to read) → начитаться (to read a lot, to have read one's fill)" },
              { title: "Compounding (сложение)", text: "Two stems join, often with a linking vowel. A close method is merging two words.", example: "бело-розовый (white-pink), лесостепь (forest-steppe); малоизученный (little-studied, merged)" },
              { title: "Shortened stems (сложение сокращённых основ)", text: "Made from parts of words or first letters.", example: "заработная плата → зарплата (wages), лесное хозяйство → лесхоз (forestry)" },
              { title: "Change of part of speech (переход)", text: "The word becomes another part of speech with no new morphemes.", example: "дежурный (on duty, adj.) → дежурный (person on duty, noun), столовая (canteen)" }
            ]
          },
          explain: [
            "Words are either <b>non-derived</b> (непроизводные: not made from another word, like <i>слон</i>, 'elephant', <i>синий</i>, 'blue') or <b>derived</b> (производные: made from another word, like <i>слонёнок</i>, 'baby elephant', from <i>слон</i>). The word a new word comes from is its <b>source word</b> (производящее слово).",
            "To find the method, first find the <b>closest</b> source word: the one that differs from the new word as little as possible. <i>Перепроверить</i> (to double-check) comes from <i>проверить</i> (to check), not from <i>верить</i> (to believe). Then see which morphemes were added.",
            "Related words linked by formation make a <b>word-formation chain</b> (словообразовательная цепочка): <i>честь → честный → честность</i> (honour → honest → honesty), and together a <b>word family</b> (гнездо).",
            "The <b>word-formation norm</b> says to use the patterns the language accepts: <i>наблюдатель</i> (observer), <i>грузчик</i> (loader), not «наблюдальщик», «грузитель»."
          ],
          rule: "First find the closest source word, then see what was added.",
          examples: [
            { text: "<u>без</u>билет<u>н</u>ый ← билет", tr: "ticketless ← ticket", note: "prefix + suffix at the same time" },
            { text: "<u>пере</u>проверить ← проверить", tr: "to double-check ← to check", note: "prefix" },
            { text: "МГУ, вуз", tr: "Moscow State University, higher education institution", note: "shortened stems (first letters)" },
            { text: "<u>в</u>тро<u>ём</u> ← трое", tr: "the three of us (together) ← three (people)", note: "prefix + suffix" }
          ],
          mistakes: [
            { wrong: "перепроверить ← верить (prefix + suffix)", right: "перепроверить ← проверить (prefix)", why: "Take the closest source word, the one that differs by a single morpheme." }
          ],
          quiz: [
            { q: "How was «подоконник» (windowsill) formed?", options: ["suffix only", "prefix + suffix", "prefix only"], answer: 1, why: "There is no word «подокно», so the prefix под- and the suffix -ник were added to the stem окн- at the same time." },
            { q: "How was the noun «столовая» (canteen) formed?", options: ["by a change of part of speech (from an adjective)", "by a suffix", "by compounding"], answer: 0, why: "The adjective in «столовая комната» (dining room) became a noun with no new morphemes." },
            { q: "How was «разбежаться» (to run off in different directions) formed?", options: ["postfix only", "prefix only", "prefix + postfix"], answer: 2, why: "There are no words «разбежать» or «бежаться» with this meaning: the prefix and the postfix were added together." }
          ]
        }
      ]
    },
    {
      title: "Parts of speech",
      titleRu: "Части речи",
      topics: [
        {
          id: "g10-chasti-rechi",
          title: "The system of parts of speech",
          ru: "Система частей речи",
          paras: "§ 21–29",
          summary: "Parts of speech are divided into content words, function words and interjections. The textbook treats participles and adverbial participles as forms of the verb.",
          diagram: {
            type: "tree",
            root: {
              label: "Parts of speech (части речи)",
              children: [
                {
                  label: "Content words (самостоятельные)",
                  note: "name things, answer questions, act as parts of the sentence",
                  children: [
                    { label: "Nouns, adjectives, numerals", note: "имена" },
                    { label: "Pronoun (местоимение)", note: "points to something without naming it" },
                    { label: "Verb and its forms (глагол)", note: "participle, adverbial participle" },
                    { label: "Adverb (наречие)", note: "a feature of an action or a quality" }
                  ]
                },
                {
                  label: "Function words (служебные)",
                  note: "don't answer questions, are not parts of the sentence",
                  children: [
                    { label: "Preposition (предлог)", note: "links words: в доме (in the house)" },
                    { label: "Conjunction (союз)", note: "links parts of a sentence" },
                    { label: "Particle (частица)", note: "adds shades of meaning, builds forms: бы, ли, не" }
                  ]
                },
                { label: "Interjection (междометие)", note: "expresses feelings and urges: ах (ah), эй (hey)" }
              ]
            }
          },
          explain: [
            "A part of speech is defined by three things: its <b>general meaning</b> (a thing, a quality, an action), its <b>grammar features</b> (gender, number, case, aspect, tense) and its <b>role in the sentence</b>.",
            "Words can move from one part of speech to another: <i>учёный</i> (learned, adj.) → <i>учёный</i> (a scientist, noun); <i>благодаря</i> (thanking, adverbial participle) → <i>благодаря</i> (thanks to, preposition). English does this too: 'considering' and 'regarding' also work as prepositions. In such cases, look at the meaning and the role in the actual sentence.",
            "Word-form norms require correct forms: <i>пятьюстами</i> (with five hundred), <i>их</i> (their, not the non-standard «ихний»), <i>ляг</i> (lie down!, not «ляжь»), <i>более красивый</i> or <i>красивее</i> (more beautiful), but not «более красивее», just as English does not say 'more prettier'."
          ],
          rule: "Meaning + grammar features + role in the sentence = part of speech.",
          examples: [
            { text: "Он пришёл <mark>благодаря</mark> вашей помощи.", tr: "He came thanks to your help.", note: "a preposition made from a verb form" },
            { text: "Он ушёл, <mark>благодаря</mark> всех.", tr: "He left, thanking everyone.", note: "adverbial participle" },
            { text: "В зал вошёл <mark>дежурный</mark>.", tr: "The person on duty entered the hall.", note: "an adjective that became a noun" }
          ],
          mistakes: [
            { wrong: "более красивее", right: "более красивый / красивее", why: "Don't combine the two comparative forms, like English 'more prettier'." },
            { wrong: "ихний дом", right: "их дом", why: "«Ихний» is non-standard. The standard word for 'their' is их." }
          ],
          quiz: [
            { q: "Which group does a particle belong to?", options: ["content words", "function words", "verb forms"], answer: 1, why: "A particle is not a part of the sentence and doesn't answer a question." },
            { q: "What is «благодаря» in «Благодаря дождю урожай хороший» (Thanks to the rain, the harvest is good)?", options: ["adverbial participle", "adverb", "preposition"], answer: 2, why: "It doesn't name an action here. It links words: thanks to what? To the rain." }
          ]
        }
      ]
    },
    {
      title: "Spelling",
      titleRu: "Орфография",
      topics: [
        {
          id: "g10-korni-cheredovanie",
          title: "Roots with alternating vowels",
          ru: "Корни с чередованием",
          paras: "§ 33, 35",
          summary: "In some roots the unstressed vowel cannot be checked by stress. The spelling depends on the suffix, the letter after the vowel, stress, or meaning.",
          diagram: {
            type: "flow",
            title: "How to choose the vowel in a root with alternation",
            steps: [
              { q: "Is the root бер/бир, дер/дир, мер/мир, пер/пир, тер/тир, блест/блист, жег/жиг, стел/стил, чет/чит or кас/кос?", yes: "Look at the suffix after the root. If -а- follows, write и (in кас/кос: а). If not, write е (in кас/кос: о). собирать, соберу (to collect, I will collect); касаться, коснуться (to touch).", no: null },
              { q: "Is the root раст/ращ/рос, лаг/лож or скак/скоч?", yes: "Look at the letter after the vowel: а before ст, щ, г, к; о before anything else. растение (plant), выросли (grew up); излагать, изложение (to state, a summary); скакать (to gallop), вскочить (to jump up).", no: null },
              { q: "Is the root гар/гор, клан/клон, твар/твор, зар/зор or плав/плов?", yes: "Without stress write о in гор, клон, твор and а in зар, плав. загорать (to sunbathe), поклониться (to bow), творение (creation), заря (dawn), поплавок (fishing float).", no: null },
              { q: "Is the root мак/мок or равн/ровн?", yes: "The meaning decides: макать (to dip into liquid), промокнуть (to get wet); равный (equal), ровный (smooth, even).", no: "This root has no alternation: check it by stress or in a dictionary." }
            ]
          },
          explain: [
            "This is a spelling rule: in speech the unstressed vowel sounds the same either way, but in writing the letter matters. Usually you find an unstressed vowel by finding a related word where it is stressed. Roots with <b>alternation</b> (чередование) are different: you can't check them by stress. <i>Загорать</i> (to sunbathe) is not checked by <i>зага́р</i> (a suntan). First identify the root, then apply its rule.",
            "These rules have exceptions that must be learned: <i>росток</i> (sprout), <i>ростовщик</i> (moneylender), <i>подростковый</i> (teenage), <i>вырост</i> (outgrowth), <i>отрасль</i> (branch, industry); <i>скачок</i> (a jump), <i>скачу</i> (I gallop); <i>выгарки, изгарь, пригарь</i> (burnt residue); <i>утварь</i> (household utensils); <i>пловец, пловчиха</i> (swimmer), <i>плывун</i> (quicksand); <i>уровень</i> (level), <i>поровну</i> (equally), <i>равнина</i> (plain), <i>равняться</i> (to line up); <i>сочетать</i> (to combine)."
          ],
          rule: "First identify the root, then use its rule. Don't check these roots by stress.",
          examples: [
            { text: "зам<u>и</u>рать, зам<u>е</u>реть", tr: "to go still (imperfective), to go still (perfective)", note: "-а- after the root: и; no -а-: е" },
            { text: "р<u>а</u>стение, выр<u>о</u>сли", tr: "plant, (they) grew up", note: "а before ст, о before с" },
            { text: "заг<u>о</u>рать, но заг<u>а</u>р", tr: "to sunbathe, but a suntan", note: "гар/гор: without stress write о" },
            { text: "обм<u>а</u>кнуть кисть в краску, обувь пром<u>о</u>кает", tr: "to dip a brush in paint; the shoes let water in", note: "the meaning decides" },
            { text: "ур<u>а</u>вновешенный, подр<u>о</u>внять кусты", tr: "balanced, calm; to trim the bushes even", note: "равный (equal) / ровный (even)" }
          ],
          mistakes: [
            { wrong: "растовщик, отросль", right: "ростовщик, отрасль", why: "These are exceptions to the раст/рос rule." },
            { wrong: "плавец", right: "пловец", why: "An exception to the плав/плов rule." }
          ],
          quiz: [
            { q: "Which letter goes in «прик..снуться» (to touch lightly)?", options: ["а", "о", "е"], answer: 1, why: "There is no suffix -а- after the root, so we write кос: прикоснуться." },
            { q: "Which letter goes in «предл..гать» (to offer)?", options: ["а", "о", "е"], answer: 0, why: "Before г we write а: предлагать." },
            { q: "Which word is an exception?", options: ["растение (plant)", "выросли (grew up)", "отрасль (branch, industry)"], answer: 2, why: "By the rule, о is written before с without т, but отрасль has а." }
          ]
        },
        {
          id: "g10-pre-pri",
          title: "Prefixes пре- and при-; prefixes ending in з/с",
          ru: "Приставки пре- и при-, приставки на з/с",
          paras: "§ 34, 37",
          summary: "Prefixes ending in з/с are spelled as they sound. The choice between пре- and при- depends on the meaning of the prefix.",
          diagram: {
            type: "flow",
            title: "пре- or при-?",
            steps: [
              { q: "Can you replace it with «очень» (very)?", yes: "пре-: премилый (very sweet), прекрасный (beautiful), пресытиться (to have too much of something).", no: null },
              { q: "Is the meaning close to the prefix пере- (across, over, re-)?", yes: "пре-: преградить (to block), преломить (to refract), превратить (to turn into).", no: null },
              { q: "Does it mean coming closer, joining or adding?", yes: "при-: прилететь (to arrive by air), принести (to bring), прикрутить (to screw on).", no: null },
              { q: "Does it mean being near something?", yes: "при-: приморский (seaside), придорожный (roadside), пришкольный (next to a school).", no: null },
              { q: "Does it mean an incomplete action, finishing an action, or doing something for yourself?", yes: "при-: приоткрыть (to open slightly), прилечь (to lie down for a bit); придумать (to think up); припрятать (to hide away), присвоить (to take for yourself).", no: "The meaning is not clear: learn the word or check a dictionary (привередливый 'fussy', превратный 'distorted', пренебречь 'to neglect')." }
            ]
          },
          explain: [
            "The prefixes <b>без-, воз-, вз-, из-, низ-, раз-, роз-, через- (чрез-)</b> are spelled as they sound. Before a voiced consonant or a vowel write <i>з</i>; before a voiceless consonant (like к, п, т, с, ш) write <i>с</i>, because з really sounds like [с] there: <i>безвольный</i> (weak-willed), <i>бескрайний</i> (endless). In раз-/роз-, write <i>а</i> without stress and <i>о</i> under stress: <i>разыгра́ть</i> (to act out), <i>ро́зыгрыш</i> (a prank, a draw).",
            "Russian has no prefix <i>з-</i>: <i>сделать</i> (to do), <i>сгореть</i> (to burn down). In <i>здесь</i> (here), <i>здание</i> (building), <i>здоровье</i> (health) the letter з belongs to the root.",
            "Unstressed пре- and при- often sound almost the same, so you choose by meaning. This is very important in pairs that sound alike: <i>пребывать</i> (to stay, to be somewhere) and <i>прибывать</i> (to arrive); <i>предать</i> (to betray) and <i>придать</i> (to add, to give); <i>преемник</i> (successor) and <i>приёмник</i> (radio receiver)."
          ],
          rule: "пре- ≈ «очень» (very) or пере-. при- ≈ coming closer, being near, doing a little.",
          examples: [
            { text: "пр<u>е</u>бывать в Минске / пр<u>и</u>бывать на вокзал", tr: "to stay in Minsk / to arrive at the station", note: "to be somewhere / to arrive" },
            { text: "пр<u>е</u>дел / пр<u>и</u>дел", tr: "limit / side chapel (in a church)", note: "different meanings" },
            { text: "пр<u>е</u>клоняться перед талантом / пр<u>и</u>клониться к земле", tr: "to admire someone's talent deeply / to bend down to the ground", note: "to respect / to bend" },
            { text: "бе<u>с</u>шумный, бе<u>з</u>облачный", tr: "noiseless, cloudless", note: "з/с by sound: с before voiceless ш, з before a vowel" }
          ],
          mistakes: [
            { wrong: "приемник традиций", right: "преемник традиций", why: "Преемник means 'successor', приёмник means 'receiver' (a device)." },
            { wrong: "прибывать в хорошем настроении", right: "пребывать в хорошем настроении", why: "It means 'to be (in a good mood)', not 'to arrive'." }
          ],
          quiz: [
            { q: "Which letter goes in «пр..дорожный» (roadside)?", options: ["и", "е"], answer: 0, why: "The prefix means being near: by the road." },
            { q: "Which letter goes in «пр..одолеть препятствие» (to overcome an obstacle)?", options: ["и", "е"], answer: 1, why: "The meaning is close to пере-: to get over the obstacle." },
            { q: "How do you spell 'timetable'?", options: ["разписание", "расписание", "росписание"], answer: 1, why: "Before the voiceless п write с; without stress the prefix is рас-." }
          ]
        },
        {
          id: "g10-tverdyj-myagkij-znak",
          title: "Separating ъ and ь",
          ru: "Разделительные ъ и ь",
          paras: "§ 36",
          summary: "The hard sign ъ and the soft sign ь can separate a consonant from the vowel after it. Ъ is written after prefixes, ь inside the root.",
          diagram: {
            type: "flow",
            title: "ъ, ь or nothing?",
            steps: [
              { q: "Before е, ё, ю, я, is there a prefix ending in a consonant (or двух-, трёх-, четырёх-, or a foreign part like ад-, суб-, ин-, контр-, пан-)?", yes: "ъ: подъезд (entrance), сверхъестественный (supernatural), двухъярусный (two-tier), субъект (subject), адъютант (aide-de-camp), инъекция (injection).", no: null },
              { q: "Is it before е, ё, ю, я, и inside the root, not after a prefix?", yes: "ь: вьюга (snowstorm), платье (dress), серьёзный (serious), соловьиный (nightingale's).", no: null },
              { q: "Is it ьо after a consonant in a foreign word?", yes: "ь: почтальон (postman), медальон (locket), бульон (broth).", no: "No separating sign: безоблачный (cloudless), сагитировать (to persuade), трёхэтажный (three-storey). After a prefix, ъ is not written before а, о, у, э." }
            ]
          },
          explain: [
            "The <b>hard sign</b> (ъ, твёрдый знак) and the <b>soft sign</b> (ь, мягкий знак) have no sound of their own. As separating signs they show that the vowel after them starts with a [й] sound ('y' as in 'yes'): <i>съел</i> (ate) is said [сйэл], <i>семья</i> (family) is said [сим'йа́].",
            "The <b>separating ъ</b> is written only before <i>е, ё, ю, я</i>, after a prefix that ends in a consonant. Before <i>а, о, у, э</i> after a prefix, no ъ: <i>безоблачный</i> (cloudless), <i>предударный</i> (before the stress), <i>трёхэтажный</i> (three-storey). It is not written in shortened compound words (<i>детясли</i>, nursery school; <i>иняз</i>, foreign languages faculty) or in words with a hyphen (<i>пол-юрты</i>, half a yurt).",
            "The soft sign has other jobs too, and this part is purely a spelling rule. After the 'hushing' consonants ж, ш, ч, щ it is written in feminine nouns (<i>ночь</i>, night; <i>мышь</i>, mouse), in verbs (<i>пишешь</i>, you write; <i>беречь</i>, to protect) and in adverbs (<i>прочь</i>, away; <i>настежь</i>, wide open; but <i>уж</i>, <i>замуж</i>, <i>невтерпёж</i>). It is not written after these consonants in masculine nouns or in the genitive plural: <i>врач</i> (doctor), <i>туч</i> (of clouds)."
          ],
          rule: "ъ: after a prefix, before е, ё, ю, я. ь: inside the root.",
          examples: [
            { text: "с<u>ъ</u>ёмка, под<u>ъ</u>ём", tr: "filming, rise", note: "ъ after a prefix" },
            { text: "мурав<u>ь</u>и, руч<u>ь</u>и", tr: "ants, streams", note: "ь, not after a prefix" },
            { text: "компан<u>ь</u>он, шампин<u>ь</u>он", tr: "business partner, button mushroom", note: "ьо in borrowed words" },
            { text: "с<u>э</u>кономить, без<u>а</u>варийный", tr: "to save (money), accident-free", note: "no ъ before э or а" }
          ],
          quiz: [
            { q: "Where is ъ needed?", options: ["в..юга (snowstorm)", "из..ян (flaw)", "сер..ёзный (serious)"], answer: 1, why: "Из- is a prefix ending in a consonant, before я: изъян. In the other two words ь stands inside the root." },
            { q: "Where is neither ъ nor ь needed?", options: ["сверх..урочный (overtime)", "сверх..естественный (supernatural)", "пред..юбилейный (pre-anniversary)"], answer: 0, why: "After a prefix, ъ is not written before у: сверхурочный." }
          ]
        },
        {
          id: "g10-glagoly-prichastiya",
          title: "Verb endings and participle suffixes",
          ru: "Глаголы и причастия: личные окончания и суффиксы",
          paras: "§ 33, 40–41",
          summary: "Unstressed verb endings and the suffixes of present participles depend on the verb's conjugation. The vowel before -нн- depends on the infinitive.",
          diagram: {
            type: "flow",
            title: "How to find a verb's conjugation",
            steps: [
              { q: "Is the ending stressed?", yes: "Go by the ending: -ешь, -ет, -ут (-ют) mean conjugation I; -ишь, -ит, -ат (-ят) mean conjugation II.", no: null },
              { q: "Does the infinitive end in -ить (except брить 'to shave', стелить 'to spread')?", yes: "Conjugation II: строишь (you build), строят (they build), строящий (building).", no: null },
              { q: "Is it one of the exceptions: гнать, держать, дышать, слышать, смотреть, видеть, ненавидеть, обидеть, терпеть, вертеть, зависеть?", yes: "Conjugation II: дышит (breathes), видят (they see), зависящий (depending).", no: "Conjugation I: колешь (you chop), борются (they fight), тающий (melting), колеблемый (swayed)." }
            ]
          },
          explain: [
            "<b>Conjugation</b> (спряжение) is how a verb changes for person and number, like English 'I read, she reads', but Russian has six forms and two patterns. Conjugation I: <i>-ешь, -ет, -ем, -ете, -ут (-ют)</i>. Conjugation II: <i>-ишь, -ит, -им, -ите, -ат (-ят)</i>. When the ending is unstressed, the two patterns can sound almost the same, so use the infinitive: <i>(они) стро..т</i> → <i>строить</i> (to build) → II → <i>строят</i>.",
            "A <b>participle</b> (причастие) is a verb form that describes a noun, like English 'moving' in 'a moving car'. Present participle suffixes take their vowel from the conjugation. Active: <i>-ущ-, -ющ-</i> (I) and <i>-ащ-, -ящ-</i> (II). Passive: <i>-ем-</i> (I) and <i>-им-</i> (II): <i>колеблющийся</i> (swaying), <i>движимый</i> (driven).",
            "Before <i>-вш-</i> and <i>-нн-</i>, write the same vowel as before <i>-ть</i>: <i>посеять</i> (to sow) → <i>посеявший, посеянный</i>; <i>вспахать</i> (to plough) → <i>вспаханный</i>. If the verb ends in <i>-ить</i> or <i>-еть</i>, write <i>е</i> before <i>-нн-</i>: <i>заметить</i> (to notice) → <i>замеченный</i>, <i>обидеть</i> (to offend) → <i>обиженный</i>."
          ],
          rule: "Verb ending ↔ participle suffix: борются → борющийся, клеят → клеящий.",
          examples: [
            { text: "они кле<u>я</u>т → кле<u>я</u>щий", tr: "they glue → gluing", note: "клеить (to glue): conjugation II" },
            { text: "они бор<u>ю</u>тся → бор<u>ю</u>щийся", tr: "they fight → fighting", note: "бороться (to fight): conjugation I" },
            { text: "раскле<u>е</u>нные объявления", tr: "posted-up notices", note: "расклеить ends in -ить, so е before -нн-" },
            { text: "зате<u>я</u>нный спор", tr: "an argument that someone started", note: "затеять: я before -ть, so я before -нн-" }
          ],
          mistakes: [
            { wrong: "клеющий", right: "клеящий", why: "Клеить ends in -ить, so it is conjugation II and takes -ящ-." },
            { wrong: "посееный", right: "посеянный", why: "Посеять has я before -ть, and it stays before -нн-." }
          ],
          quiz: [
            { q: "How do you spell 'swaying, hesitating'?", options: ["колеблящийся", "колеблющийся"], answer: 1, why: "Колебаться doesn't end in -ить and is not an exception: conjugation I, so -ющ-." },
            { q: "How do you spell 'hung with pictures'?", options: ["увешанный картинами", "увешенный картинами"], answer: 0, why: "Увешать has а before -ть, so увешанный." },
            { q: "Which verb is conjugation II?", options: ["брить (to shave)", "бороться (to fight)", "ненавидеть (to hate)"], answer: 2, why: "Ненавидеть is on the list of exceptions. Брить is an exception that belongs to conjugation I." }
          ]
        },
        {
          id: "g10-n-nn",
          title: "Н and нн in different parts of speech",
          ru: "Н и нн в словах разных частей речи",
          paras: "§ 42",
          summary: "This is a spelling rule: н and нн sound almost the same, but the difference matters in writing. In adjectives and participles it depends on the word they come from.",
          diagram: {
            type: "flow",
            title: "н or нн in full adjectives and participles",
            steps: [
              { q: "Is it an exception: ветреный (windy), стеклянный (glass), оловянный (tin), деревянный (wooden), юный (young), зелёный (green), румяный (rosy), пряный (spicy), свиной (pork)?", yes: "Write it as the exception: ветреный день (a windy day), стеклянный, деревянный.", no: null },
              { q: "Is it made from a noun?", yes: "Suffixes -ан-, -ян-, -ин- → н: кожаный (leather), глиняный (clay), гусиный (goose). Suffixes -енн-, -онн-, or a stem ending in н plus the suffix -н- → нн: утренний (morning), станционный (station), стенной (wall).", no: null },
              { q: "Is it made from a verb and ends in -ованный, -ёванный?", yes: "нн: балованный (spoiled), маринованный (pickled). But кованый (forged), жёваный (chewed): here -ов-, -ёв- is part of the root.", no: null },
              { q: "Does it have a dependent word?", yes: "нн: варенный на костре картофель (potatoes boiled over a fire), крашенный краской пол (a floor painted with paint).", no: null },
              { q: "Is it from a perfective verb (often with a prefix other than не-)?", yes: "нн: сваренный картофель (cooked potatoes), нерешённая задача (an unsolved problem).", no: "н: варёный картофель (boiled potatoes), жареная рыба (fried fish), неварёный (unboiled). Exceptions with нн: нежданный (unexpected), невиданный (unseen before), неслыханный (unheard of), желанный (desired), медленный (slow), священный (sacred) and others." }
            ]
          },
          explain: [
            "Check the exceptions first, then ask what the word is made from. For adjectives from nouns: the suffix <i>-н-</i> added to a stem ending in <i>н</i> gives <i>нн</i> (<i>сон</i>, sleep → <i>сонный</i>, sleepy). The suffixes <i>-енн-, -онн-</i> have нн, and <i>-ан-, -ян-, -ин-</i> have one н.",
            "For words from verbs, нн appears with <i>-ованн-</i>, with a dependent word, or with a <b>perfective</b> verb (совершенный вид: a verb for a completed action, like <i>сварить</i>, 'to cook until done').",
            "<b>Short adjectives</b> keep as many н as the full form: <i>ученики рассеянны</i> (the pupils are absent-minded). <b>Short participles</b> always have one н: <i>семена рассеяны по полю</i> (the seeds are scattered over the field).",
            "<b>Nouns and adverbs</b> have the same number of н as the word they come from: <i>воспитанность</i> (good manners, from воспитанный), <i>варенье</i> (jam), <i>вареник</i> (dumpling, from варёный), <i>отвечать обдуманно</i> (to answer thoughtfully, from обдуманный). If the stem ends in н and the suffix starts with н, you get нн: <i>именинник</i> (birthday person, from именины)."
          ],
          rule: "From a noun: look at the suffix. From a verb: нн with -ованн-, a dependent word or a perfective verb.",
          examples: [
            { text: "ветр<u>е</u>ный день / ветр<u>я</u>ная мельница", tr: "a windy day / a windmill", note: "an exception and an adjective with -ян-" },
            { text: "ран<u>ен</u>ый боец / ран<u>енн</u>ый в руку боец", tr: "a wounded soldier / a soldier wounded in the arm", note: "no dependent word: н; with a dependent word: нн" },
            { text: "морож<u>ен</u>ые ягоды / заморож<u>енн</u>ые ягоды", tr: "frozen berries / berries that have been frozen", note: "imperfective and perfective verb" },
            { text: "девочка воспита<u>нн</u>а / девочка воспита<u>н</u>а бабушкой", tr: "the girl is well-mannered / the girl was brought up by her grandmother", note: "short adjective and short participle" },
            { text: "масл<u>е</u>ный блин / масл<u>я</u>ные краски", tr: "a buttery pancake / oil paints", note: "covered with butter / made with oil" }
          ],
          mistakes: [
            { wrong: "деревяный", right: "деревянный", why: "An exception: деревянный, стеклянный, оловянный." },
            { wrong: "кованный ковш", right: "кованый ковш", why: "In кованый (forged) -ов- is part of the root, not the suffix -ова-." },
            { wrong: "задача решенна", right: "задача решена", why: "A short participle has one н." }
          ],
          quiz: [
            { q: "How many н in «кож..ый» (leather)?", options: ["one", "two"], answer: 0, why: "It is made from the noun кожа (leather) with the suffix -ан-." },
            { q: "How do you spell 'fish fried in oil'?", options: ["жареная на масле рыба", "жаренная на масле рыба"], answer: 1, why: "There is a dependent word, «на масле» (in oil), so нн." },
            { q: "Where is one н written?", options: ["Ученики сосредоточе..ы и внимательны. (The pupils are focused and attentive.)", "Ткань окраше..а мастером. (The cloth was dyed by a craftsman.)", "Девушка образова..а и умна. (The girl is educated and smart.)"], answer: 1, why: "«Окрашена мастером» is a short participle: one н. The others are short adjectives with нн, like their full forms." }
          ]
        },
        {
          id: "g10-narechiya",
          title: "Adverb endings. Adverbs with a hyphen",
          ru: "Суффиксы наречий. Наречия через дефис",
          paras: "§ 43–44",
          summary: "The last vowel of an adverb made from an adjective depends on its prefix. Some adverbs are written with a hyphen.",
          diagram: {
            type: "flow",
            title: "How to write an adverb",
            steps: [
              { q: "Is it an adverb from an adjective with the prefix из-, до-, с-?", yes: "Ends in -а: издавна (for a long time), досуха (until dry), слева (on the left), сгоряча (in the heat of the moment).", no: null },
              { q: "Is it an adverb from an adjective with the prefix в-, на-, за-?", yes: "Ends in -о: влево (to the left), начисто (clean, completely), заново (anew), засветло (before dark).", no: null },
              { q: "Prefix по- and suffix -ому, -ему, -ски, -цки, -ьи?", yes: "Hyphen: по-новому (in a new way), по-русски (in Russian), по-лисьи (like a fox).", no: null },
              { q: "Prefix в-, во- with an ordinal number?", yes: "Hyphen: во-первых (firstly), в-третьих (thirdly).", no: null },
              { q: "Is there -то, -либо, -нибудь, кое-, or is the word repeated?", yes: "Hyphen: где-то (somewhere), кое-как (somehow, carelessly), едва-едва (just barely), крест-накрест (crosswise).", no: "Written as one word or as two: check a dictionary (вдалеке 'far away', наверху 'upstairs', без устали 'tirelessly', в обнимку 'arm in arm')." }
            ]
          },
          explain: [
            "For the endings <i>-а</i> and <i>-о</i> there is a handy 'window rule'. Put the prefix as a preposition before the word <i>окно</i> (window). <i>Из окна, до окна, с окна</i> (from / up to / off the window): the adverb ends in <i>-а</i>. <i>В окно, на окно, за окно</i> (into / onto / behind the window): the adverb ends in <i>-о</i>. The unstressed ending often sounds like [а] either way, so you need the rule.",
            "Hyphens are used in adverbs with <i>по-</i> plus <i>-ому, -ему, -ски, -цки, -ьи</i>; with <i>в-(во-)</i> plus an ordinal number; with <i>-то, -либо, -нибудь, кое-</i>; and in repeated words. A useful learner word: <i>по-русски</i> (in Russian), as in <i>Я говорю по-русски</i> (I speak Russian).",
            "If you can put another word between the prefix and the rest, it is a preposition plus a noun, and you write two words: <i>в даль</i> (into the distance: <i>в голубую даль</i>, into the blue distance), but <i>вдаль</i> (смотреть вдаль, to look into the distance)."
          ],
          rule: "из-, до-, с- → -а; в-, на-, за- → -о.",
          examples: [
            { text: "сызмал<u>а</u>", tr: "since early childhood", note: "prefix с-: -а" },
            { text: "запрост<u>о</u>", tr: "easily, without ceremony", note: "prefix за-: -о" },
            { text: "по-друж<u>ески</u>", tr: "in a friendly way", note: "по- + -ски: hyphen" },
            { text: "<u>в-</u>третьих", tr: "thirdly", note: "ordinal number: hyphen" }
          ],
          mistakes: [
            { wrong: "по новому", right: "по-новому", why: "Prefix по- and suffix -ому: write it with a hyphen." },
            { wrong: "изредко", right: "изредка", why: "The prefix из- needs -а: изредка (now and then)." }
          ],
          quiz: [
            { q: "Which letter goes in «докрасн..» (until red-hot)?", options: ["о", "а"], answer: 1, why: "Prefix до-: до окна, so -а." },
            { q: "Which letter goes in «налев..» (to the left)?", options: ["о", "а"], answer: 0, why: "Prefix на-: на окно, so -о." },
            { q: "Which one needs a hyphen?", options: ["по(немногу) (little by little)", "(в)даль (into the distance)", "по(медвежьи) (like a bear)"], answer: 2, why: "по- + suffix -ьи: по-медвежьи." }
          ]
        },
        {
          id: "g10-ne-slitno-razdelno",
          title: "Writing не together or apart",
          ru: "Не со словами разных частей речи",
          paras: "§ 45",
          summary: "With verbs, adverbial participles and numerals, не is written as a separate word. With nouns, adjectives and adverbs in -о, it depends on the meaning.",
          diagram: {
            type: "flow",
            title: "не with nouns, adjectives, adverbs in -о",
            steps: [
              { q: "Is the word never used without не?", yes: "One word: ненастье (bad weather), нелепый (absurd), нечаянно (by accident).", no: null },
              { q: "Is there a contrast with а (but), stated or implied?", yes: "Separate: не правда, а ложь (not truth but a lie); не глубокий, а мелкий (not deep but shallow); не громко, а тихо (not loudly but quietly).", no: null },
              { q: "Is there a dependent word with ни, or the words далеко не, вовсе не, отнюдь не (far from, not at all)?", yes: "Separate: далеко не красавица (far from a beauty), отнюдь не плохо (not bad at all), ни на что не похожий (like nothing else).", no: null },
              { q: "Can you replace it with a synonym without не?", yes: "One word: неприятель (enemy = враг), неинтересный (uninteresting = скучный), недалеко (not far = близко).", no: "Separate: не голубое платье (a dress that is not blue: you deny the feature)." }
            ]
          },
          explain: [
            "This is a spelling rule: you say it the same way, but write it differently. It is a bit like English 'uninteresting' (one word) versus 'not interesting, but boring' (a contrast). If a word is used without не, не is usually written <b>separately</b>: with verbs and adverbial participles (<i>не читал</i>, didn't read; <i>не читая</i>, without reading; but <i>негодовать</i>, to be indignant, and <i>ненавидеть</i>, to hate, which don't exist without не, and verbs with <i>недо-</i>: <i>недосмотреть</i>, to overlook), with numerals (<i>не пять</i>, not five), pronouns (<i>не я</i>, not me; <i>не такой</i>, not like that), adverbs not in -о (<i>не здесь</i>, not here), hyphenated words (<i>не по-летнему</i>, not summer-like), short adjectives with no full form (<i>не рад</i>, not glad; <i>не должен</i>, must not; <i>не готов</i>, not ready), and with <i>не надо, не пора, не жаль</i> (no need, not time yet, no pity).",
            "With adjectives that show material or ownership, не is written separately: <i>не деревянный стол</i> (a table not made of wood), <i>не лисья нора</i> (not a fox's den).",
            "After <i>очень, совершенно, абсолютно, весьма, крайне</i> (very, completely, absolutely, quite, extremely) write one word: <i>абсолютно неверное решение</i> (an absolutely wrong solution). With participles: one word without dependent words (<i>непрочитанная книга</i>, an unread book), separate with dependent words (<i>не прочитанная мной книга</i>, a book not read by me). Short participles are always separate (<i>книга не прочитана</i>, the book has not been read)."
          ],
          rule: "There is a synonym without не: one word. There is a contrast or «далеко не, вовсе не»: separate.",
          examples: [
            { text: "<u>не</u>вежа, <u>не</u>годовать", tr: "a boor, to be indignant", note: "not used without не" },
            { text: "<u>не</u> друг, а враг", tr: "not a friend but an enemy", note: "contrast" },
            { text: "<u>не</u>большой дом / дом <u>не</u> большой, а маленький", tr: "a small house / the house is not big but small", note: "synonym маленький (small) / contrast" },
            { text: "<u>не</u> прочитанная мной книга / <u>не</u>прочитанная книга", tr: "a book not read by me / an unread book", note: "participle with and without a dependent word" },
            { text: "<u>не</u> рад встрече", tr: "not glad about the meeting", note: "short adjective with no full form" }
          ],
          mistakes: [
            { wrong: "неделал", right: "не делал", why: "With verbs не is written separately (except words that don't exist without не)." },
            { wrong: "вовсе неинтересная книга", right: "вовсе не интересная книга", why: "«Вовсе не» (not at all) requires separate spelling." }
          ],
          quiz: [
            { q: "How do you write «(не)приятель стоял у ворот» when it means 'the enemy stood at the gate'?", options: ["as one word", "separately"], answer: 0, why: "You can replace it with a synonym without не: враг (enemy)." },
            { q: "How do you write «далеко (не)лёгкая задача» (a far from easy task)?", options: ["as one word", "separately"], answer: 1, why: "«Далеко не» (far from) requires separate spelling." },
            { q: "Where is не written as one word with the next word?", options: ["(не)зная правил (not knowing the rules)", "(не)гасимый свет (an unquenchable light)", "(не)серебряная ложка (a spoon not made of silver)"], answer: 1, why: "Негасимый is a participle with no dependent words. With an adverbial participle and a material adjective, не is separate." }
          ]
        },
        {
          id: "g10-ne-i-ni",
          title: "Не and ни",
          ru: "Не и ни",
          paras: "§ 46",
          summary: "In negative pronouns and adverbs, не is stressed and ни is unstressed. The particle ни makes a negation stronger.",
          diagram: {
            type: "flow",
            title: "не or ни in negative pronouns and adverbs",
            steps: [
              { q: "Is there a preposition between не/ни and the pronoun?", yes: "Write three words. Stressed: не; unstressed: ни. не́ с кем поговорить (there is nobody to talk to), ни с ке́м не говорил (talked to nobody).", no: null },
              { q: "Does the stress fall on не/ни?", yes: "One word with не: не́кого спросить (there is nobody to ask), не́где сесть (there is nowhere to sit), не́когда (there is no time).", no: "One word with ни: никого́ не спросил (asked nobody), нигде́ не сел (didn't sit anywhere), никогда́ (never)." }
            ]
          },
          explain: [
            "Russian uses a double negative where standard English does not: <i>Я никого́ не ви́дел</i> is literally 'I didn't see nobody', and it is correct Russian for 'I didn't see anybody'. Words like <i>никто́</i> (nobody), <i>ничего́</i> (nothing), <i>никогда́</i> (never) go together with <i>не</i> on the verb.",
            "In negative pronouns and adverbs, <i>не</i> is always stressed and <i>ни</i> is always unstressed: <i>не́кто, никто́; не́где, нигде́</i>. Words with stressed <i>не́</i> mean 'there is no one / nowhere / no time to do something': <i>Не́где сесть</i> (There is nowhere to sit). With a preposition, the word splits into three: <i>ни у кого́</i> (from nobody), <i>не́ у кого</i> (there is nobody to ask/get from).",
            "The particle <b>не</b> makes a negation: <i>Я не знаю</i> (I don't know). The particle <b>ни</b> makes a negation stronger when there already is one, stated or implied: <i>Ни облачка не видно</i> (Not a single cloud can be seen). <i>На небе ни облачка</i> (Not a cloud in the sky).",
            "In a clause with a positive meaning like English '-ever', write <b>ни</b>: <i>Куда ни посмотришь, везде вода</i> (Wherever you look, there is water everywhere). Repeated <i>ни... ни</i> works like 'neither... nor': <i>ни рыба ни мясо</i> (neither fish nor fowl, literally 'neither fish nor meat')."
          ],
          rule: "не is stressed, ни is unstressed. With a preposition: three words.",
          examples: [
            { text: "н<u>е́</u>кого спросить / н<u>и</u>кого́ не спросил", tr: "there is nobody to ask / (he) asked nobody", note: "stress decides" },
            { text: "н<u>е́</u> о ком говорить / н<u>и</u> о ко́м не говорил", tr: "there is nobody to talk about / (he) talked about nobody", note: "with a preposition: three words" },
            { text: "Сколько н<u>и</u> старался, ничего не вышло.", tr: "However hard he tried, nothing worked.", note: "ни in a '-ever' clause" },
            { text: "Не могу н<u>е</u> согласиться.", tr: "I can't help agreeing (literally 'I can't not agree').", note: "two не make a positive meaning" }
          ],
          mistakes: [
            { wrong: "ни с кем поговорить", right: "не́ с кем поговорить", why: "The stress falls on the particle, so it is не: 'there is nobody to talk to'." },
            { wrong: "Кто не придёт, всех встретим.", right: "Кто ни придёт, всех встретим.", why: "The clause means 'whoever comes', a positive meaning, so ни." }
          ],
          quiz: [
            { q: "How do you write «(н..)(у)кого спросить дорогу» (there is nobody to ask the way)?", options: ["ни у кого", "неукого", "не́ у кого"], answer: 2, why: "The stress is on the particle and there is a preposition: three words with не." },
            { q: "How do you write «Он (н..)когда не опаздывает» (He is never late)?", options: ["никогда", "некогда", "ни когда"], answer: 0, why: "No stress on the particle and no preposition: one word with ни." },
            { q: "Which particle goes in «Что бы он н.. говорил, ему верили» (Whatever he said, people believed him)?", options: ["не", "ни"], answer: 1, why: "It is a '-ever' clause with a positive meaning: «что бы он ни говорил»." }
          ]
        }
      ]
    }
  ]
};

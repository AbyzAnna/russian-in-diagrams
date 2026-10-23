(function () {
  "use strict";

  var EN = document.documentElement.lang === "en";
  var STORE_KEY = EN ? "russian-diagrams-done" : "rus-shemy-done";

  var L = EN ? {
    brand: "Russian in Diagrams",
    navTopics: "All topics", navStart: "Start here", navTerms: "Key terms",
    home: "Home", privacy: "Privacy", terms: "Terms",
    footer: 'Study notes for English speakers, based on the Russian textbooks for grades 7–11 used in Belarus. Not an official publication. <a href="https://abyzanna.github.io/russkiy-po-shemam/" lang="ru">Русская версия</a>',
    grade: function (n) { return "Grade " + n; },
    textbook: "Textbook",
    learned: "Learned",
    diagram: "Diagram", explanation: "Explanation", examples: "Examples", mistakes: "Common mistakes", quiz: "Check yourself",
    top: "Back to top", yes: "Yes", no: "No", next: "No &darr; next question",
    right: "Correct.", wrong: "Not quite.",
    score: function (ok, n) { return "Score: " + ok + " of " + n + (ok === n ? ". You can mark this topic as learned." : ". Look at the diagram again and try later."); },
    topics: function (n) { return n + (n === 1 ? " topic" : " topics"); },
    learnedOf: function (d, n) { return d + " of " + n + " learned"; },
    filter: "Find a topic (English or Russian)",
    sideTitle: "Topics",
    mapTitle: "Map of this section",
    notFound: "This section was not found.",
    sources: "Sources",
    pdf: "PDF, in Russian",
    m: { prefix: "prefix (приставка)", root: "root (корень)", suffix: "suffix (суффикс)", ending: "ending (окончание)", zero: "zero ending (no letters)", postfix: "postfix (постфикс)" },
    sq: "main or independent clause", rd: "subordinate clause", hm: "one of several parallel words (однородный член)",
    gen: "summary word (обобщающее слово)", adr: "form of address (обращение)",
    courseRoot: "Russian", branchWord: "The word", branchSentence: "The sentence", branchText: "The text"
  } : {
    brand: "Русский по схемам",
    navTopics: "Все темы", navStart: null, navTerms: null,
    home: "Главная", privacy: "Конфиденциальность", terms: "Условия использования",
    footer: "Учебный конспект по школьным учебникам русского языка для 7–11 классов (Беларусь). Не является официальным изданием.",
    grade: function (n) { return n + " класс"; },
    textbook: "Учебник",
    learned: "Изучено",
    diagram: "Схема", explanation: "Объяснение", examples: "Примеры", mistakes: "Частые ошибки", quiz: "Проверь себя",
    top: "Наверх", yes: "Да", no: "Нет", next: "Нет &darr; дальше",
    right: "Верно.", wrong: "Не совсем.",
    score: function (ok, n) { return "Результат: " + ok + " из " + n + (ok === n ? ". Тему можно отметить как изученную." : ". Перечитай схему и попробуй ещё раз позже."); },
    topics: function (n) {
      var m10 = n % 10, m100 = n % 100;
      var w = m10 === 1 && m100 !== 11 ? "тема" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? "темы" : "тем";
      return n + " " + w;
    },
    learnedOf: function (d, n) { return "Изучено " + d + " из " + n; },
    filter: "Найти тему",
    sideTitle: "Темы",
    mapTitle: "Карта раздела",
    notFound: "Раздел не найден.",
    sources: "Источники",
    pdf: "PDF",
    m: { prefix: "приставка", root: "корень", suffix: "суффикс", ending: "окончание", zero: "нулевое окончание", postfix: "постфикс" },
    sq: "главная или независимая часть", rd: "придаточная часть", hm: "однородный член",
    gen: "обобщающее слово", adr: "обращение",
    courseRoot: "Русский язык", branchWord: "Слово", branchSentence: "Предложение", branchText: "Текст"
  };

  // themes grouped into the three big branches of the course map
  var BRANCHES = [
    { label: L.branchWord, ids: ["parts-of-speech", "verbs", "words", "spelling"] },
    { label: L.branchSentence, ids: ["simple-sentence", "complicated-sentence", "complex-sentence", "reported-speech", "punctuation"] },
    { label: L.branchText, ids: ["text-and-style"] }
  ];

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function rich(s) {
    return esc(s).replace(/&lt;(\/?)(b|i|u|mark)&gt;/g, "<$1$2>");
  }
  function loadDone() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveDone(d) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(d)); } catch (e) { /* storage blocked: progress just isn't kept */ }
  }

  // index of every topic by id, with its grade
  function topicIndex() {
    var idx = {};
    var G = window.GRADES || {};
    Object.keys(G).forEach(function (n) {
      (G[n].sections || []).forEach(function (s) {
        (s.topics || []).forEach(function (t) { idx[t.id] = { t: t, grade: +n }; });
      });
    });
    return idx;
  }
  function themes() { return window.THEMES || []; }
  function themeById(id) { return themes().filter(function (t) { return t.id === id; })[0]; }
  function themeIds(th) {
    var out = [];
    th.groups.forEach(function (g) { out = out.concat(g.ids); });
    return out;
  }

  // ---------- shared chrome ----------
  function header(current) {
    var links = '<a href="index.html"' + (current === "home" ? ' aria-current="page"' : "") + ">" + L.navTopics + "</a>";
    if (L.navStart) links = '<a href="start.html"' + (current === "start" ? ' aria-current="page"' : "") + ">" + L.navStart + "</a>" + links;
    if (L.navTerms) links += '<a href="glossary.html"' + (current === "glossary" ? ' aria-current="page"' : "") + ">" + L.navTerms + "</a>";
    return '<header class="top"><div class="wrap">' +
      '<a class="brand" href="index.html"><img src="assets/favicon.svg" alt="" width="30" height="30">' + L.brand + "</a>" +
      '<nav class="grade-tabs" aria-label="Menu">' + links + "</nav>" +
      "</div></header>";
  }
  function footer() {
    var links = '<a href="index.html">' + L.home + "</a>" + (L.navStart ? '<a href="start.html">' + L.navStart + "</a>" : "") +
      '<a href="privacy.html">' + L.privacy + '</a><a href="terms.html">' + L.terms + "</a>";
    return '<footer class="foot"><div class="wrap"><span>' + L.footer + "</span><nav>" + links + "</nav></div></footer>";
  }
  function mountChrome(current) {
    var h = document.getElementById("header");
    var f = document.getElementById("footer");
    if (h) h.outerHTML = header(current);
    if (f) f.outerHTML = footer();
  }

  // ---------- org chart (boxes joined by lines, top to bottom) ----------
  // node: { label, note?, href?, cls?, children? }
  function orgNode(n, depth) {
    var inner = rich(n.label) + (n.note ? '<span class="note">' + rich(n.note) + "</span>" : "");
    var box = n.href
      ? '<a class="node d' + depth + (n.cls ? " " + n.cls : "") + '" href="' + esc(n.href) + '">' + inner + "</a>"
      : '<span class="node d' + depth + (n.cls ? " " + n.cls : "") + '">' + inner + "</span>";
    var ch = n.children || [];
    // leaf boxes under a group are stacked in a column to keep the chart narrow
    var allLeaves = ch.every(function (c) { return !(c.children || []).length; });
    var stack = allLeaves && depth > 0 && ch.length >= 2;
    var kids = ch.length
      ? "<ul" + (stack ? ' class="stack"' : "") + ">" + ch.map(function (c) { return "<li>" + orgNode(c, depth + 1) + "</li>"; }).join("") + "</ul>"
      : "";
    return box + kids;
  }
  function orgChart(root) {
    return '<div class="org"><ul><li>' + orgNode(root, 0) + "</li></ul></div>";
  }
  // shrink wide charts to fit their box (down to 70%); beyond that the box scrolls
  function fitOrgs() {
    var phone = window.matchMedia("(max-width: 620px)").matches;
    document.querySelectorAll(".org").forEach(function (o) {
      o.style.zoom = 1;
      if (phone) return; // phones get the vertical layout from CSS
      var box = o.parentElement;
      var avail = box.clientWidth - 4;
      var need = o.scrollWidth;
      if (need > avail) o.style.zoom = Math.max(0.7, avail / need);
    });
  }
  var fitTimer;
  window.addEventListener("resize", function () { clearTimeout(fitTimer); fitTimer = setTimeout(fitOrgs, 120); });

  // ---------- diagrams ----------
  var D = {};

  D.tree = function (d) { return orgChart(d.root || {}); };

  D.flow = function (d) {
    var steps = d.steps || [];
    return "<ol>" + steps.map(function (s, i) {
      var last = i === steps.length - 1;
      var html = '<li><div class="qbox">' + rich(s.q) + "</div>" +
        '<div class="yes"><span class="arrow">' + L.yes + ' &rarr;</span><div class="res">' + rich(s.yes) + "</div></div>";
      if (s.no != null || last) {
        html += '<div class="last-no"><span class="arrow">' + L.no + ' &rarr;</span><div class="res no">' + rich(s.no) + "</div></div>";
      } else {
        html += '<div class="down"><span class="arrow">' + L.next + "</span></div>";
      }
      return html + "</li>";
    }).join("") + "</ol>";
  };

  D.compare = function (d) {
    var rows = d.rows || [];
    var head = rows[0] || [];
    return "<table><thead><tr>" + head.map(function (c) { return "<th>" + rich(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      rows.slice(1).map(function (r) {
        return "<tr>" + r.map(function (c, i) { return i === 0 ? "<th>" + rich(c) + "</th>" : "<td>" + rich(c) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table>";
  };

  D.morph = function (d) {
    var used = {};
    var words = (d.words || []).map(function (w) {
      var parts = (w.parts || []).map(function (p) {
        used[p.k] = true;
        return '<span class="m ' + esc(p.k) + '" title="' + esc(L.m[p.k] || p.k) + '">' + esc(p.t) + "</span>";
      }).join("");
      return '<div class="word"><span class="parts" lang="ru">' + parts + "</span>" + (w.caption ? '<span class="caption">' + rich(w.caption) + "</span>" : "") + "</div>";
    }).join("");
    var legend = ["prefix", "root", "suffix", "ending", "zero", "postfix"].filter(function (k) { return used[k]; }).map(function (k) {
      var sample = { prefix: "при", root: "кор", suffix: "ик", ending: "а", zero: "", postfix: "ся" }[k];
      return '<span><span class="m ' + k + '">' + sample + "</span>" + L.m[k] + "</span>";
    }).join("");
    return '<div class="words">' + words + '</div><div class="mlegend">' + legend + "</div>";
  };

  function schemeHtml(s) {
    var out = esc(s);
    out = out.replace(/\[([^\]]*)\]/g, function (_, inner) { return '<span class="sq">' + (inner.trim() || "&nbsp;") + "</span>"; });
    out = out.replace(/\(([^)]*)\)/g, function (_, inner) { return '<span class="rd">' + (inner.trim() || "&nbsp;") + "</span>"; });
    out = out.replace(/(^|[\s,:;«"(>—–-])О(?=[\s,.:;!?»"<]|$)/g, '$1<span class="hm">О</span>');
    out = out.replace(/◯/g, '<span class="gen">обобщ.</span>');
    out = out.replace(/Обр\./g, '<span class="adr">Обр.</span>');
    return out;
  }
  D.scheme = function (d) {
    var f = { sq: false, rd: false, hm: false, gen: false, adr: false };
    var items = (d.items || []).map(function (it) {
      if (/\[/.test(it.scheme)) f.sq = true;
      if (/\(/.test(it.scheme)) f.rd = true;
      if (/(^|[\s,:;])О([\s,.:;]|$)/.test(it.scheme)) f.hm = true;
      if (/◯/.test(it.scheme)) f.gen = true;
      if (/Обр\./.test(it.scheme)) f.adr = true;
      return '<div class="item"><div class="formula" lang="ru">' + schemeHtml(it.scheme) + "</div>" +
        (it.example ? '<div class="example" lang="ru">' + rich(it.example) + "</div>" : "") +
        (it.caption ? '<div class="caption">' + rich(it.caption) + "</div>" : "") + "</div>";
    }).join("");
    var legend = [];
    if (f.sq) legend.push('<span><span class="sq">[ ]</span>' + L.sq + "</span>");
    if (f.rd) legend.push('<span><span class="rd">( )</span>' + L.rd + "</span>");
    if (f.hm) legend.push('<span><span class="hm">О</span>' + L.hm + "</span>");
    if (f.gen) legend.push('<span><span class="gen">обобщ.</span>' + L.gen + "</span>");
    if (f.adr) legend.push('<span><span class="adr">Обр.</span>' + L.adr + "</span>");
    return '<div class="items">' + items + "</div>" + (legend.length ? '<div class="scheme-legend">' + legend.join("") + "</div>" : "");
  };

  D.steps = function (d) {
    return "<ol>" + (d.items || []).map(function (s) { return "<li><span>" + rich(s) + "</span></li>"; }).join("") + "</ol>";
  };

  D.cards = function (d) {
    return '<div class="grid">' + (d.items || []).map(function (c) {
      return '<div class="card"><b>' + rich(c.title) + "</b>" +
        (c.text ? '<div class="t">' + rich(c.text) + "</div>" : "") +
        (c.example ? '<div class="e">' + rich(c.example) + "</div>" : "") + "</div>";
    }).join("") + "</div>";
  };

  function diagram(d) {
    if (!d || !D[d.type]) return "";
    return '<div class="diagram ' + esc(d.type) + '">' + (d.title ? '<div class="dtitle">' + rich(d.title) + "</div>" : "") + D[d.type](d) + "</div>";
  }

  // ---------- topic ----------
  function topicHtml(entry, done) {
    var t = entry.t;
    var isDone = !!done[t.id];
    var examples = (t.examples || []).map(function (e) {
      return '<li><span class="ex" lang="ru">' + rich(e.text) + "</span>" + (e.tr ? '<span class="tr">' + rich(e.tr) + "</span>" : "") +
        (e.note ? '<span class="note">' + rich(e.note) + "</span>" : "") + "</li>";
    }).join("");
    var mistakes = (t.mistakes || []).map(function (m) {
      return '<div class="mistake"><span class="w" lang="ru">' + rich(m.wrong) + '</span><span class="r" lang="ru">' + rich(m.right) + "</span>" +
        (m.why ? '<span class="why">' + rich(m.why) + "</span>" : "") + "</div>";
    }).join("");
    var quiz = (t.quiz || []).map(function (q, qi) {
      return '<div class="q" data-q="' + qi + '"><p>' + rich(q.q) + '</p><div class="opts">' +
        q.options.map(function (o, oi) { return '<button type="button" data-o="' + oi + '">' + rich(o) + "</button>"; }).join("") +
        '</div><p class="why" hidden></p></div>';
    }).join("");
    var badge = '<span class="gbadge">' + L.grade(entry.grade) + "</span>" + (t.paras ? '<span class="paras">' + L.textbook + ": " + rich(t.paras) + "</span>" : "");

    return '<article class="topic" id="' + esc(t.id) + '">' +
      '<div class="topic-head"><div><div class="badges">' + badge + "</div><h2>" + rich(t.title) + "</h2>" +
      (t.ru ? '<div class="ru-name" lang="ru">' + rich(t.ru) + "</div>" : "") + "</div>" +
      '<button type="button" class="done-toggle" aria-pressed="' + isDone + '" data-id="' + esc(t.id) + '"><span class="box">' + (isDone ? "&#10003;" : "") + "</span>" + L.learned + "</button></div>" +
      '<p class="summary">' + rich(t.summary) + "</p>" +
      "<h3>" + L.diagram + "</h3>" + diagram(t.diagram) +
      "<h3>" + L.explanation + "</h3>" + (t.explain || []).map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("") +
      (t.rule ? '<div class="rule">' + rich(t.rule) + "</div>" : "") +
      (examples ? "<h3>" + L.examples + '</h3><ul class="examples">' + examples + "</ul>" : "") +
      (mistakes ? "<h3>" + L.mistakes + '</h3><div class="mistakes">' + mistakes + "</div>" : "") +
      (quiz ? '<div class="quiz-block"><h3>' + L.quiz + '</h3><div class="quiz">' + quiz + '</div><p class="score" hidden></p></div>' : "") +
      '<a class="to-top" href="#top">' + L.top + "</a></article>";
  }

  function wireQuiz(root, idx) {
    root.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".q button");
      if (!btn) return;
      var qEl = btn.closest(".q");
      var art = btn.closest(".topic");
      var q = idx[art.id].t.quiz[+qEl.dataset.q];
      var chosen = +btn.dataset.o;
      qEl.querySelectorAll("button").forEach(function (b) {
        b.disabled = true;
        if (+b.dataset.o === q.answer) b.classList.add("right");
      });
      if (chosen !== q.answer) btn.classList.add("wrong");
      qEl.dataset.ok = chosen === q.answer ? "1" : "0";
      var why = qEl.querySelector(".why");
      why.innerHTML = "<b>" + (chosen === q.answer ? L.right : L.wrong) + "</b> " + rich(q.why || "");
      why.hidden = false;
      var all = art.querySelectorAll(".q");
      if (all.length === art.querySelectorAll(".q[data-ok]").length) {
        var sc = art.querySelector(".score");
        sc.textContent = L.score(art.querySelectorAll('.q[data-ok="1"]').length, all.length);
        sc.hidden = false;
      }
    });
  }

  // ---------- home: course map + section cards ----------
  function home() {
    mountChrome("home");
    var idx = topicIndex();
    var done = loadDone();
    var map = {
      label: L.courseRoot, cls: "root",
      children: BRANCHES.map(function (b) {
        return {
          label: b.label,
          children: b.ids.map(function (id) {
            var th = themeById(id);
            return th ? { label: th.title, href: "theme.html?t=" + id, cls: "link" } : null;
          }).filter(Boolean)
        };
      })
    };
    document.getElementById("map").innerHTML = '<div class="diagram tree">' + orgChart(map) + "</div>";
    fitOrgs();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitOrgs);

    var n = 0;
    document.getElementById("themes").innerHTML = themes().map(function (th) {
      n++;
      var ids = themeIds(th).filter(function (id) { return idx[id]; });
      var d = ids.filter(function (id) { return done[id]; }).length;
      var grades = {};
      ids.forEach(function (id) { grades[idx[id].grade] = 1; });
      var gl = Object.keys(grades).sort(function (a, b) { return a - b; }).map(function (g) { return L.grade(g); }).join(", ");
      return '<a class="gcard" href="theme.html?t=' + th.id + '"><div class="num">' + n + "</div>" +
        "<h3>" + esc(th.title) + "</h3>" + (EN ? '<div class="ru-name small" lang="ru">' + esc(th.ru) + "</div>" : "") +
        '<p class="meta">' + esc(th.desc) + "</p>" +
        "<ul>" + th.groups.map(function (g) { return "<li>" + esc(g.title) + "</li>"; }).join("") + "</ul>" +
        '<div class="bar"><i style="width:' + (ids.length ? Math.round((100 * d) / ids.length) : 0) + '%"></i></div>' +
        '<div class="progress-line">' + L.topics(ids.length) + " · " + gl + (d ? " · " + L.learnedOf(d, ids.length) : "") + "</div></a>";
    }).join("");
  }

  // ---------- theme page ----------
  function theme() {
    var params = new URLSearchParams(location.search);
    var th = themeById(params.get("t")) || themes()[0];
    mountChrome("theme");
    var main = document.getElementById("main");
    var side = document.getElementById("side");
    if (!th) { main.innerHTML = '<div class="empty">' + L.notFound + "</div>"; return; }
    document.title = th.title + " | " + L.brand;

    var idx = topicIndex();
    var done = loadDone();
    var ids = themeIds(th).filter(function (id) { return idx[id]; });

    // sidebar: every section; the current one lists its topics
    side.innerHTML = '<details open><summary>' + esc(th.title) + "</summary>" +
      '<input class="filter" type="search" placeholder="' + esc(L.filter) + '" aria-label="' + esc(L.filter) + '">' +
      '<div class="bar"><i></i></div><p class="progress-line"></p><nav aria-label="' + esc(L.sideTitle) + '">' +
      themes().map(function (x) {
        if (x.id !== th.id) return '<a class="theme-link" href="theme.html?t=' + x.id + '">' + esc(x.title) + "</a>";
        return '<a class="theme-link current" href="theme.html?t=' + x.id + '" aria-current="page">' + esc(x.title) + "</a>" +
          x.groups.map(function (g) {
            var items = g.ids.filter(function (id) { return idx[id]; }).map(function (id) {
              var t = idx[id].t;
              return '<li><a href="#' + esc(id) + '" data-id="' + esc(id) + '"><span class="tick">' + (done[id] ? "&#10003;" : "") + "</span><span>" + rich(t.title) +
                (t.ru && EN ? ' <i lang="ru">' + rich(t.ru) + "</i>" : "") + "</span></a></li>";
            }).join("");
            return "<h4>" + esc(g.title) + "</h4><ol>" + items + "</ol>";
          }).join("");
      }).join("") + "</nav></details>";
    if (window.matchMedia("(max-width: 900px)").matches) side.querySelector("details").open = false;

    // section map as an org chart: section -> groups -> topics
    var map = {
      label: th.title, cls: "root",
      children: th.groups.map(function (g) {
        return {
          label: g.title,
          children: g.ids.filter(function (id) { return idx[id]; }).map(function (id) {
            return { label: idx[id].t.title, href: "#" + id, cls: "link" };
          })
        };
      })
    };

    var sources = {};
    ids.forEach(function (id) { sources[idx[id].grade] = 1; });
    var srcHtml = Object.keys(sources).sort(function (a, b) { return a - b; }).map(function (g) {
      var G = window.GRADES[g];
      return '<a href="' + esc(G.pdf) + '" target="_blank" rel="noopener">' + esc(G.bookRu || G.book) + "</a>";
    }).join(", ");

    main.innerHTML = '<section class="intro" id="top">' +
      (EN ? '<div class="ru-name" lang="ru">' + esc(th.ru) + "</div>" : "") +
      "<h1>" + esc(th.title) + "</h1><p>" + esc(th.desc) + "</p>" +
      "<h3>" + L.mapTitle + '</h3><div class="diagram tree">' + orgChart(map) + "</div>" +
      '<p class="meta src">' + L.sources + " (" + L.pdf + "): " + srcHtml + "</p></section>" +
      th.groups.map(function (g) {
        var list = g.ids.filter(function (id) { return idx[id]; });
        if (!list.length) return "";
        return '<h2 class="sec-title">' + esc(g.title) + "</h2>" + list.map(function (id) { return topicHtml(idx[id], done); }).join("");
      }).join("");

    fitOrgs();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitOrgs);

    function refreshProgress() {
      var d = ids.filter(function (id) { return done[id]; }).length;
      side.querySelector(".bar i").style.width = (ids.length ? Math.round((100 * d) / ids.length) : 0) + "%";
      side.querySelector(".progress-line").textContent = L.learnedOf(d, ids.length);
    }
    refreshProgress();

    main.addEventListener("click", function (ev) {
      var b = ev.target.closest(".done-toggle");
      if (!b) return;
      var id = b.dataset.id;
      if (done[id]) delete done[id]; else done[id] = 1;
      saveDone(done);
      var on = !!done[id];
      b.setAttribute("aria-pressed", on);
      b.querySelector(".box").innerHTML = on ? "&#10003;" : "";
      var link = side.querySelector('a[data-id="' + id + '"] .tick');
      if (link) link.innerHTML = on ? "&#10003;" : "";
      refreshProgress();
    });
    wireQuiz(main, idx);

    side.querySelector(".filter").addEventListener("input", function (e) {
      var q = e.target.value.trim().toLowerCase();
      side.querySelectorAll("nav li").forEach(function (li) { li.hidden = q && li.textContent.toLowerCase().indexOf(q) < 0; });
      side.querySelectorAll("nav h4").forEach(function (h) { h.hidden = !h.nextElementSibling.querySelector("li:not([hidden])"); });
    });
    side.addEventListener("click", function (e) {
      if (e.target.closest("nav li a") && window.matchMedia("(max-width: 900px)").matches) side.querySelector("details").open = false;
    });

    if ("IntersectionObserver" in window) {
      var links = {};
      side.querySelectorAll("nav li a").forEach(function (a) { links[a.dataset.id] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
        });
      }, { rootMargin: "-20% 0px -70% 0px" });
      main.querySelectorAll(".topic").forEach(function (a) { io.observe(a); });
    }
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }

  // ---------- glossary page (English edition) ----------
  function glossary() {
    mountChrome("glossary");
    var seen = {};
    var rows = [];
    var G = window.GRADES || {};
    Object.keys(G).sort(function (a, b) { return a - b; }).forEach(function (n) {
      (G[n].glossary || []).forEach(function (x) {
        var k = x.ru.toLowerCase();
        if (seen[k]) return;
        seen[k] = 1;
        rows.push(x);
      });
    });
    rows.sort(function (a, b) { return a.en.localeCompare(b.en); });
    document.getElementById("gloss").innerHTML = '<div class="diagram compare"><table><thead><tr><th>English</th><th>Russian</th><th>What it means</th></tr></thead><tbody>' +
      rows.map(function (x) { return "<tr><th>" + esc(x.en) + '</th><td lang="ru"><b>' + esc(x.ru) + "</b></td><td>" + rich(x.hint || "") + "</td></tr>"; }).join("") +
      "</tbody></table></div>";
  }

  window.App = { home: home, theme: theme, glossary: glossary, chrome: mountChrome, orgChart: orgChart };
})();

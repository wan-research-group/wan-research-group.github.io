/* ============================================================
   EMBARC Lab shared rendering script.
   Reads data from data/*.js and renders nav, footer, and the
   page-specific sections. Pages opt in via <body data-page="...">.
   ============================================================ */

(function () {
  "use strict";

  const S = window.SITE;

  // ---------- helpers ----------

  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // [text](url) → <a>, **text** → <b>
  const mdLinks = (s) =>
    esc(s)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = (ym) => {
    const [y, m] = ym.split("-");
    return `${MONTHS[parseInt(m, 10) - 1]} ${y}`;
  };

  // Names to bold in author lists: PI, all current members, and past students.
  const labNames = (() => {
    const names = [];
    if (window.PEOPLE) {
      names.push(window.PEOPLE.pi.name);
      (window.PEOPLE.groups || []).forEach((g) => (g.members || []).forEach((m) => names.push(m.name)));
      (window.PEOPLE.pastMentees || []).forEach((m) => names.push(m.name));
    }
    return names;
  })();

  const boldAuthors = (authors) => {
    let html = esc(authors);
    labNames.forEach((n) => {
      html = html.split(esc(n)).join(`<b>${esc(n)}</b>`);
    });
    return html;
  };

  // ---------- nav + footer ----------

  function renderNav() {
    const page = document.body.dataset.page || "";
    const items = [
      ["index.html", "home", "Home"],
      ["research.html", "research", "Research"],
      ["publications.html", "publications", "Publications"],
      ["people.html", "people", "People"],
      ["news.html", "news", "News"],
      ["join.html", "join", "Join Us"],
    ];
    const nav = document.createElement("header");
    nav.className = "nav";
    nav.innerHTML = `
      <div class="nav-inner">
        <a class="brand" href="index.html">
          <span><span class="brand-mark">${esc(S.shortName)}</span> Lab</span>
          <span class="brand-sub">${esc(S.institution)}</span>
        </a>
        <button class="nav-toggle" aria-label="Menu" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <ul class="nav-links">
          ${items
            .map(
              ([href, key, label]) =>
                `<li><a href="${href}" class="${key === page ? "active" : ""}">${label}</a></li>`
            )
            .join("")}
        </ul>
      </div>`;
    document.body.prepend(nav);
    const toggle = nav.querySelector(".nav-toggle");
    const links = nav.querySelector(".nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  function renderFooter() {
    const f = document.createElement("footer");
    f.className = "footer";
    f.innerHTML = `
      <div class="footer-inner">
        <div>
          <h4>${esc(S.name)}</h4>
          <p>${esc(S.expansion)}<br>${esc(S.department)}<br>${esc(S.institution)}<br>${esc(S.address)}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>
          <div class="footer-links">
            <a href="${esc(S.links.scholar)}">Google Scholar</a>
            <a href="${esc(S.links.github)}">GitHub</a>
            <a href="${esc(S.links.linkedin)}">LinkedIn</a>
            <a href="join.html">Join Us</a>
          </div>
          <p class="footer-note">© ${new Date().getFullYear()} ${esc(S.name)}, ${esc(S.institution)}</p>
        </div>
      </div>`;
    document.body.appendChild(f);
  }

  // ---------- news ----------

  function newsItemHTML(n) {
    return `
      <div class="news-item">
        <span class="news-date">${fmtDate(n.date)}</span>
        <span class="news-tag" data-tag="${esc(n.tag)}">${esc(n.tag)}</span>
        <span class="news-text">${mdLinks(n.text)}</span>
      </div>`;
  }

  function renderNews(el, limit) {
    const items = limit ? window.NEWS.slice(0, limit) : window.NEWS;
    el.innerHTML = `<div class="news-list">${items.map(newsItemHTML).join("")}</div>`;
  }

  // Full news archive: tag filters + year grouping.
  function renderNewsPage(listEl, controlsEl) {
    const TAGS = ["All", "Lab", "Award", "Paper", "Talk", "Workshop", "Teaching", "Service", "Book"];
    let tag = "All";

    function draw() {
      const items = window.NEWS.filter((n) => tag === "All" || n.tag === tag);
      const byYear = {};
      items.forEach((n) => (byYear[n.date.slice(0, 4)] = byYear[n.date.slice(0, 4)] || []).push(n));
      const years = Object.keys(byYear).sort((a, b) => b - a);
      listEl.innerHTML = years
        .map(
          (y) =>
            `<div class="pub-year">${y}</div>` +
            `<div class="news-list">${byYear[y].map(newsItemHTML).join("")}</div>`
        )
        .join("");
      controlsEl.querySelector(".pub-count").textContent =
        `${items.length} item${items.length === 1 ? "" : "s"}`;
    }

    controlsEl.innerHTML =
      TAGS.map(
        (t) => `<button class="pub-filter ${t === "All" ? "active" : ""}" data-tag="${t}">${t}</button>`
      ).join("") + `<span class="pub-count"></span>`;

    controlsEl.querySelectorAll(".pub-filter").forEach((btn) =>
      btn.addEventListener("click", () => {
        tag = btn.dataset.tag;
        controlsEl.querySelectorAll(".pub-filter").forEach((b) => b.classList.toggle("active", b === btn));
        draw();
      })
    );
    draw();
  }

  // ---------- publications ----------

  function pubItemHTML(p) {
    const titleLink = p.links && (p.links.Paper || Object.values(p.links)[0]);
    const title = titleLink
      ? `<a href="${esc(titleLink)}">${esc(p.title)}</a>`
      : esc(p.title);
    const awards = (p.awards || [])
      .map((a) => `<span class="award-badge">${esc(a)}</span>`)
      .join("");
    const links = Object.entries(p.links || {})
      .map(([k, v]) => `<a href="${esc(v)}">${esc(k)}</a>`)
      .join("");
    return `
      <div class="pub-item">
        <div class="pub-title">${title}</div>
        <div class="pub-authors">${boldAuthors(p.authors)}</div>
        <div class="pub-meta">
          <span class="venue-badge" title="${esc(p.venueFull || "")}">${esc(p.venue)} ${p.year}</span>
          ${awards}
          ${p.note ? `<span class="pub-note">${esc(p.note)}</span>` : ""}
          ${links ? `<span class="pub-links">${links}</span>` : ""}
        </div>
      </div>`;
  }

  const AREA_LABELS = {
    all: "All",
    selected: "Selected",
    systems: "Systems",
    architecture: "Architecture",
    silicon: "Silicon & Circuits",
    arch2: "Agentic AI for Design",
  };

  function renderPublicationsPage(listEl, controlsEl) {
    let area = "all";
    let query = "";

    function matches(p) {
      if (area === "selected" && !p.selected) return false;
      if (area !== "all" && area !== "selected" && !(p.tags || []).includes(area)) return false;
      if (query) {
        const hay = `${p.title} ${p.authors} ${p.venue} ${p.venueFull || ""} ${p.year}`.toLowerCase();
        if (!query.toLowerCase().split(/\s+/).every((w) => hay.includes(w))) return false;
      }
      return true;
    }

    function draw() {
      const pubs = window.PUBLICATIONS.filter(matches);
      const byYear = {};
      pubs.forEach((p) => (byYear[p.year] = byYear[p.year] || []).push(p));
      const years = Object.keys(byYear).sort((a, b) => b - a);
      listEl.innerHTML = pubs.length
        ? years
            .map(
              (y) =>
                `<div class="pub-year">${y}</div>` + byYear[y].map(pubItemHTML).join("")
            )
            .join("")
        : `<p class="pub-empty">No publications match. Try a different search or filter.</p>`;
      controlsEl.querySelector(".pub-count").textContent =
        `${pubs.length} publication${pubs.length === 1 ? "" : "s"}`;
    }

    controlsEl.innerHTML =
      Object.entries(AREA_LABELS)
        .map(
          ([k, label]) =>
            `<button class="pub-filter ${k === "all" ? "active" : ""}" data-area="${k}">${label}</button>`
        )
        .join("") +
      `<input class="pub-search" type="search" placeholder="Search title, author, venue…" aria-label="Search publications">` +
      `<span class="pub-count"></span>`;

    controlsEl.querySelectorAll(".pub-filter").forEach((btn) =>
      btn.addEventListener("click", () => {
        area = btn.dataset.area;
        controlsEl.querySelectorAll(".pub-filter").forEach((b) => b.classList.toggle("active", b === btn));
        draw();
      })
    );
    controlsEl.querySelector(".pub-search").addEventListener("input", (e) => {
      query = e.target.value.trim();
      draw();
    });
    draw();
  }

  function renderBooks(el) {
    el.innerHTML = window.BOOKS.map(
      (b) => `
      <div class="book-card">
        <h3>${esc(b.title)}</h3>
        <div class="book-meta">${boldAuthors(b.authors)} · ${esc(b.venue)}, ${b.year}</div>
        <p>${esc(b.blurb)}</p>
        <div class="pub-links">${Object.entries(b.links)
          .map(([k, v]) => `<a href="${esc(v)}">${esc(k)}</a>`)
          .join("")}</div>
      </div>`
    ).join("");
  }

  function renderSelectedPubs(el) {
    const sel = window.PUBLICATIONS.filter((p) => p.selected);
    el.innerHTML = `<div class="sel-pubs">${sel.map(pubItemHTML).join("")}</div>`;
  }

  // ---------- research ----------

  function renderPillars(el) {
    el.innerHTML = window.RESEARCH.map(
      (r, i) => `
      <a class="pillar" href="research.html#${r.id}">
        <div class="pillar-num">0${i + 1}</div>
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.short)}</p>
      </a>`
    ).join("");
  }

  function renderResearchPage(el) {
    const pubById = {};
    window.PUBLICATIONS.forEach((p) => (pubById[p.id] = p));
    el.innerHTML = window.RESEARCH.map((r) => {
      const reps = (r.pubs || [])
        .map((id) => pubById[id])
        .filter(Boolean)
        .map((p) => {
          const link = p.links && (p.links.Paper || Object.values(p.links)[0]);
          const t = link ? `<a href="${esc(link)}">${esc(p.title)}</a>` : esc(p.title);
          return `<div class="rep-pub">${t}<span class="rep-venue">${esc(p.venue)} ${p.year}</span></div>`;
        })
        .join("");
      return `
      <div class="research-block" id="${r.id}">
        <h2>${esc(r.title)}</h2>
        <p class="research-long">${esc(r.long)}</p>
        <div class="keywords">${r.keywords.map((k) => `<span class="keyword">${esc(k)}</span>`).join("")}</div>
        <div class="rep-pubs">${reps}</div>
      </div>`;
    }).join("");
  }

  // ---------- people ----------

  function renderPeoplePage(piEl, groupsEl) {
    const pi = window.PEOPLE.pi;
    piEl.innerHTML = `
      <div class="pi-card">
        <div class="pi-photo"><img src="${esc(pi.photo)}" alt="${esc(pi.name)}"></div>
        <div>
          <div class="pi-name">${esc(pi.name)}</div>
          <div class="pi-role">${esc(pi.role)}, ${esc(S.department)}, ${esc(S.institution)}</div>
          <div class="pi-bio">${pi.bio.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
          <div class="pi-links">${Object.entries(pi.links)
            .map(([k, v]) => `<a href="${esc(v)}">${esc(k)}</a>`)
            .join("")}</div>
          <div class="pi-email"><a href="mailto:${esc(pi.email)}">${esc(pi.email)}</a></div>
          ${pi.office ? `<div class="pi-office">${esc(pi.office)}</div>` : ""}
        </div>
      </div>`;

    const menteesHTML = (() => {
      const rows = window.PEOPLE.pastMentees || [];
      if (!rows.length) return "";
      return `
        <div class="people-group">
          <h2>Past Students</h2>
          ${window.PEOPLE.pastMenteesNote ? `<p class="group-note">${esc(window.PEOPLE.pastMenteesNote)}</p>` : ""}
          <div class="table-scroll">
            <table class="mentee-table">
              <thead>
                <tr><th>Name</th><th>Years</th><th>Background</th><th>Selected work</th><th>Next</th></tr>
              </thead>
              <tbody>
                ${rows
                  .map((m) => {
                    const name = m.link ? `<a href="${esc(m.link)}">${esc(m.name)}</a>` : esc(m.name);
                    return `<tr>
                      <td class="mentee-name">${name}</td>
                      <td class="mentee-years">${esc(m.years || "")}</td>
                      <td>${esc(m.background || "")}</td>
                      <td class="mentee-highlight">${esc(m.highlight || "")}</td>
                      <td>${m.next ? "→ " + esc(m.next) : ""}</td>
                    </tr>`;
                  })
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>`;
    })();

    groupsEl.innerHTML = (window.PEOPLE.groups || [])
      .filter((g) => (g.members || []).length > 0)
      .map(
        (g) => `
        <div class="people-group">
          <h2>${esc(g.title)}</h2>
          <div class="people-grid">
            ${g.members
              .map((m) => {
                const avatar = m.photo
                  ? `<img class="avatar" src="${esc(m.photo)}" alt="${esc(m.name)}">`
                  : `<div class="monogram">${esc(m.name.trim()[0] || "?")}</div>`;
                const links = Object.entries(m.links || {})
                  .map(([k, v]) => `<a href="${esc(v)}">${esc(k)}</a>`)
                  .join("");
                return `
                <div class="person">
                  ${avatar}
                  <h3>${esc(m.name)}</h3>
                  <div class="person-role">${esc(m.role || "")}${m.destination ? " " + esc(m.destination) : ""}</div>
                  ${m.note ? `<div class="person-note">${esc(m.note)}</div>` : ""}
                  ${m.edu ? `<div class="person-edu">${esc(m.edu)}</div>` : ""}
                  ${m.interests ? `<div class="person-interests">${esc(m.interests)}</div>` : ""}
                  ${links ? `<div class="person-links">${links}</div>` : ""}
                </div>`;
              })
              .join("")}
          </div>
        </div>`
      )
      .join("") + menteesHTML;
  }

  // ---------- page dispatch ----------

  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderFooter();

    const page = document.body.dataset.page;

    if (page === "home") {
      renderPillars(document.getElementById("pillars"));
      renderNews(document.getElementById("home-news"), 6);
      renderSelectedPubs(document.getElementById("home-pubs"));
    }
    if (page === "news") {
      renderNewsPage(
        document.getElementById("all-news"),
        document.getElementById("news-controls")
      );
    }
    if (page === "publications") {
      renderPublicationsPage(
        document.getElementById("pub-list"),
        document.getElementById("pub-controls")
      );
      renderBooks(document.getElementById("books"));
    }
    if (page === "research") {
      renderResearchPage(document.getElementById("research-blocks"));
    }
    if (page === "people") {
      renderPeoplePage(
        document.getElementById("pi"),
        document.getElementById("people-groups")
      );
    }
  });
})();

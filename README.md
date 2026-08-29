# EMBARC Lab Website

The website of the EMBARC Lab (Embodied-AI Architecture & Co-design) at Columbia University.

**Zero build tools.** Pure HTML/CSS/JS: every page works by opening the `.html` file directly or serving the folder statically. All content lives in `data/*.js`; to update the site you almost never touch HTML.

## Everyday updates (for lab members)

| Task | File | What to do |
|---|---|---|
| Add a paper | `data/publications.js` | Copy an entry to the top of the array. Set `venue`, `year`, `tags` (research area), `links`. Add `selected: true` to feature it on the home page (keep ~6-8 selected). |
| Add news | `data/news.js` | Add an entry at the top. `[text](url)` inside `text` becomes a link. |
| Add a member | `data/people.js` | Add to the right group in `groups`. Put their photo in `assets/` (square crop looks best). Names listed here are auto-bolded in the publication list. Use `note` for co-advising or home institution. |
| Add a past mentee | `data/people.js` | Add a row to `pastMentees` (name, years, background, optional `highlight` publication, `next` destination). |
| Edit research areas | `data/research.js` | Each pillar has a short blurb (home page), long blurb (research page), keywords, and representative publication ids. |
| Rename the lab / change contact | `data/site.js` | One place; nav, footer, and banners update everywhere. Page `<title>` tags in each HTML file must be updated by hand. |
| Edit Join Us content | `join.html` | Plain HTML, edit directly. |

## Preview locally

```bash
python3 -m http.server 8930
```

Then open http://localhost:8930. (Opening `index.html` directly in a browser also works.)

## Publish on GitHub Pages

One-time setup:

1. Create a GitHub organization (e.g. `embarc-lab`), then a repository named `embarc-lab.github.io` inside it.
2. Push this folder to that repository (`main` branch).
3. In the repo: Settings → Pages → Source: “Deploy from a branch”, branch `main`, folder `/ (root)`.
4. The site appears at `https://embarc-lab.github.io/` within a minute or two.

After that, publishing an update is just: commit → push.

If you later buy a custom domain, add it in Settings → Pages and create a `CNAME` file; also update the URL in `sitemap.xml`.

## Structure

```
index.html …… home (hero, pillars, recent news, selected pubs)
research.html … four research thrusts + representative papers
publications.html … full list, filterable by area, grouped by year
people.html … PI + members (renders from data/people.js)
news.html …… full news archive
join.html …… openings, how to apply, FAQ
css/site.css …… the whole design system
js/render.js …… renders nav/footer + data-driven sections
data/*.js …… ALL content lives here
assets/ ……… photos, favicon, figures
```

## Content TODOs

- [ ] Add paper links for TECS'26, Hawkeye (DL4C'26), and the AICAS'21 quad-camera paper when available

- [ ] Confirm lab name (currently **EMBARC**; change in `data/site.js` + the `<title>`/meta tags of the six HTML pages, and `sitemap.xml`)
- [ ] `join.html`: verify the Columbia CS PhD application link/deadline wording before December

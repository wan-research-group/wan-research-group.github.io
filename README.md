# Wan Lab Website

The website of the Wan Lab at Columbia University.

**Zero build tools.** Pure HTML/CSS/JS: every page works by opening the `.html` file directly or serving the folder statically. All content lives in `data/*.js`; to update the site you almost never touch HTML.

## Everyday updates (for lab members)

| Task | File | What to do |
|---|---|---|
| Add a paper | `data/publications.js` | Copy an entry to the top of the array. Set `venue`, `year`, `tags` (research area), `links`. Add `selected: true` for the Selected filter (representative work). `type: "preprint"` renders with a neutral (instead of blue) spine and venue badge. |
| Edit collaborators band | `data/site.js` | Edit the `collaborators` array (home-page marquee). Each entry is `{ name, logo }` with the logo file in `assets/sponsors/` (current PNGs are Wikimedia Commons thumbnails, ~500px wide); a plain string entry renders as a text name instead. |
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

1. Create a GitHub organization named `wan-research-group`, then a repository named `wan-research-group.github.io` inside it.
2. Push this folder to that repository (`main` branch).
3. In the repo: Settings → Pages → Source: “Deploy from a branch”, branch `main`, folder `/ (root)`.
4. The site appears at `https://wan-research-group.github.io/` within a minute or two.

After that, publishing an update is just: commit → push.

**Cache busting:** every page loads `css/site.css`, `js/render.js`, and `data/*.js` with a `?v=YYYYMMDD` token. After changing any CSS/JS/data file, bump the token in all six HTML files so visitors do not get stale cached versions:

```bash
LANG=C sed -i '' 's/?v=[0-9]\{8\}/?v=NEW_DATE_HERE/g' *.html
```

If you later buy a custom domain, add it in Settings → Pages and create a `CNAME` file; also update the URL in `sitemap.xml`.

## Structure

```
index.html …… home (hero, pillars, recent news, collaborators band)
research.html … four research thrusts + representative papers
publications.html … full list, filterable by area, grouped by year
                    (filters sync to the URL: ?area=systems&q=serving is shareable)
people.html … PI + members (renders from data/people.js)
news.html …… full news archive
join.html …… openings, how to apply, FAQ
css/site.css …… the whole design system
js/render.js …… renders nav/footer + data-driven sections
data/*.js …… ALL content lives here
assets/ ……… photos, favicon, figures
```

## Content TODOs

- [ ] `join.html`: add Electrical Engineering as a second PhD application route once the EE affiliation is approved

- [ ] `join.html`: verify the Columbia CS PhD application link/deadline wording before December

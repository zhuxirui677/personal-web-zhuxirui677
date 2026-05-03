[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9Yu-ry0Z)

# Xirui Zhu — Personal Website

A single-page personal portfolio for job search, PhD applications, and professional networking.  
Live demo (GitHub Pages): `https://<your-github-username>.github.io/<repo-name>/`

---

## What's inside

```
.
├── index.html   # entire site — HTML, CSS, and JS in one file
└── README.md    # this file
```

The site is intentionally dependency-free: no npm, no build step, no frameworks.  
Everything runs from the single `index.html` file.

---

## How to run

### Option 1 — Open directly in a browser (fastest)

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Option 2 — Local dev server (avoids any browser file:// restrictions)

Using Python (comes pre-installed on macOS / Linux):

```bash
# Python 3
python3 -m http.server 8080

# then open http://localhost:8080 in your browser
```

Using Node.js:

```bash
npx serve .
# then open the URL printed in the terminal
```

### Option 3 — GitHub Pages (publish online, free)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under *Build and deployment*, set **Source** to `Deploy from a branch` and pick `main` / `(root)`.
4. Click **Save** — the site will be live at `https://<username>.github.io/<repo>/` within ~60 seconds.

---

## Sections

| Section | Content |
|---|---|
| **Hero** | Name, title, status badge, CTA buttons |
| **About** | Bio paragraph + key stats |
| **Education** | UW MS (ML) · Xiamen University BA |
| **Experience** | Xiaomi HyperTask · TikTok Ops · Qingye AI PM |
| **Projects** | LegalAgentBench-A2A · Med Gamma · Oops! · 叶限 |
| **Skills** | Product · Research · AIGC/AI · Design · Engineering |
| **Contact** | Email, phone, game link |

---

## Tech stack

| Concern | Approach |
|---|---|
| Markup | Semantic HTML5 |
| Styling | CSS custom properties, Grid, Flexbox, CSS animations |
| Interactivity | Vanilla JS — IntersectionObserver for scroll reveals, scroll-spy nav |
| Fonts | System font stack (no external requests) |
| Deployment | Any static host — GitHub Pages, Netlify, Vercel, etc. |

---

## Customization

All content lives in `index.html`.  
Colors are defined as CSS variables at the top of the `<style>` block — change `--accent` and `--accent2` to retheme the entire site in two lines.

```css
:root {
  --accent:  #818cf8;   /* primary highlight color */
  --accent2: #c084fc;   /* secondary / gradient end */
}
```

---

## Author

**Xirui Zhu (朱锡瑞)**  
MS Technology Innovation (ML) · University of Washington  
2916552948@qq.com · zhuxirui677@gmail.com

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9Yu-ry0Z)

# Xirui Zhu — Personal Portfolio Website

A bilingual (Chinese / English) single-page personal portfolio focused on **job searching** across the Chinese and US AI/product markets.

**Live demo (GitHub Pages):** enable in repo Settings → Pages → `main` branch → `/ (root)`

---

## Purpose

This site is built for:
- **China job search** — linking from Boss Zhipin, major company career pages, and Xiaohongshu profile bio
- **US job search** — sharing with recruiters at Google, Microsoft, Meta, OpenAI, and US AI startups
- **PhD applications** — showcasing research projects (LegalAgentBench, Med Gamma)

Key features:
- **Language toggle (CN / EN)** — one click switches the entire page between Chinese and English
- **Job Target section** — clear role intentions for both CN and US markets, including target companies and recruitment channels
- **Resume request CTA** — mailto links that open a pre-filled email to request CN/EN resume PDFs
- **Market-specific contact info** — phone/WeChat/QQ for China; Gmail for US
- **Mobile-first** — optimised for Boss Zhipin (mobile app) and Xiaohongshu browsing

---

## Project Structure

```
.
├── index.html   # bilingual site (Chinese default, EN toggle) — for CN job channels
├── en.html      # English-only version — for US recruiters / LinkedIn / PhD apps
└── README.md    # this file
```

No build tools, no npm, no dependencies. Each page is a single self-contained file.

| File | Use case |
|---|---|
| `index.html` | Boss Zhipin links, major company career pages, Xiaohongshu bio, CN/US dual-market |
| `en.html` | US recruiters, LinkedIn, GitHub Pages default for English-speaking audience |

---

## How to Run

### Option 1 — Open directly in a browser (zero setup)

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Option 2 — Local dev server (recommended to avoid browser `file://` quirks)

**Python** (pre-installed on macOS / Linux):

```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

**Node.js:**

```bash
npx serve .
# visit the URL shown in the terminal
```

### Option 3 — GitHub Pages (publish online, free)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set Source to **Deploy from a branch** → branch `main` → folder `/ (root)`.
4. Click **Save**. The site goes live at `https://<username>.github.io/<repo>/` in ~60 s.

---

## Page Sections

| Section | Content |
|---|---|
| **Hero** | Name, open-to-work badge, target role chips, CTA buttons |
| **Job Target** | CN / US market cards, target companies, recruitment channels, resume request |
| **Education** | University of Washington (MS ML) · Xiamen University (BA) |
| **Experience** | Xiaomi HyperTask · TikTok Operations · Qingye AI PM |
| **Projects** | LegalAgentBench-A2A · Med Gamma · Oops! Rhythm Game · Yexian Visual Novel |
| **Skills** | Product Management / User Research / AIGC & AI / Design / Engineering / Languages |
| **Contact** | CN (WeChat / QQ / Boss Zhipin) + US (Gmail) |

---

## Customisation

All content lives in `index.html` (bilingual) and `en.html` (English-only).  
Colors are defined as CSS custom properties at the top of each file's `<style>` block:

```css
:root {
  --accent:  #6366f1;   /* primary color */
  --accent2: #a78bfa;   /* gradient end / highlights */
}
```

Change these two values to retheme the entire site instantly.

---

## Tech Stack

| Concern | Solution |
|---|---|
| Markup | Semantic HTML5 |
| Styling | CSS custom properties, Grid, Flexbox, CSS animations |
| Language toggle | Vanilla JS — `html[lang]` attribute + CSS selector switching |
| Scroll effects | IntersectionObserver API for staggered fade-in reveals |
| Fonts | System font stack (`PingFang SC` / `Inter`) — no external requests |
| Hosting | Any static host — GitHub Pages, Netlify, Vercel, Cloudflare Pages |

---

## Author

**Xirui Zhu (朱锡瑞)**  
M.S. Technology Innovation (ML) · University of Washington  
📱 +86 133-2878-5031 · ✉ 2916552948@qq.com · 📧 zhuxirui677@gmail.com

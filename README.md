[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9Yu-ry0Z)

# 朱锡瑞 · Personal Website / 个人求职主页

A bilingual (Chinese / English) single-page personal portfolio focused on **job searching** across the Chinese and US AI/product markets.

**Live demo (GitHub Pages):** enable in repo Settings → Pages → `main` branch → `/ (root)`

---

## Purpose / 定位

This site is built for:
- **国内求职** — Boss直聘、大厂校招官网、小红书 附在个人简介中的作品集链接
- **US job search** — sharing with recruiters at Google, Microsoft, Meta, OpenAI, etc.
- **PhD applications** — showcasing research projects (LegalAgentBench, Med Gamma)

Key features:
- **Language toggle (中文 / EN)** — one click switches the entire page between Chinese and English
- **Job Target section** — clear role intentions for both CN and US markets, including target companies and recruitment channels
- **Resume request CTA** — mail-to links that open a pre-filled email to request CN/EN resume PDFs
- **Market-specific contact info** — phone/WeChat/QQ for China; Gmail for US
- **Mobile-first** — optimised for Boss直聘 (mobile app) and Xiaohongshu browsing

---

## Project structure

```
.
├── index.html   # entire site — HTML, CSS, and JavaScript in one self-contained file
└── README.md    # this file
```

No build tools, no npm, no dependencies. The whole site is one file.

---

## How to run

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

## Page sections

| Section | 中文 | English |
|---|---|---|
| **Hero** | 姓名、求职状态、目标岗位 chips | Name, open-to-work badge, role chips |
| **Job Target** | 国内/美国市场分开展示、目标公司、招聘渠道、简历请求 | CN / US market cards, target companies, channels, resume CTA |
| **Education** | 华盛顿大学 · 厦门大学 | UW · Xiamen University |
| **Experience** | 小米汽车 HyperTask · TikTok运营 · 青叶AI | Xiaomi HyperTask · TikTok Ops · Qingye AI |
| **Projects** | LegalAgentBench · Med Gamma · 音游 · 叶限 | LegalAgentBench · Med Gamma · Rhythm Game · Yexian |
| **Skills** | 产品/用户研究/AIGC/设计/技术/语言 | PM / Research / AIGC / Design / Eng / Languages |
| **Contact** | 国内（手机/微信/QQ/Boss直聘）+ 美国（Gmail） | CN (WeChat/QQ/Boss) + US (Gmail) |

---

## Customisation

All content is inside `index.html`. Colors use CSS custom properties at the top of `<style>`:

```css
:root {
  --accent:  #6366f1;   /* primary color */
  --accent2: #a78bfa;   /* gradient end / highlights */
}
```

Change these two values to retheme the whole site instantly.

---

## Tech stack

| Concern | Solution |
|---|---|
| Markup | Semantic HTML5 |
| Styling | CSS custom properties, Grid, Flexbox, CSS animations |
| Language toggle | Vanilla JS — `html[lang]` attribute + CSS selector switching |
| Scroll effects | IntersectionObserver API for staggered fade-in reveals |
| Fonts | System font stack (`PingFang SC` / `Inter`) — no external requests |
| Hosting | Any static host — GitHub Pages, Netlify, Vercel, Cloudflare Pages |

---

## Author / 作者

**朱锡瑞 · Xirui Zhu**  
M.S. Technology Innovation (ML) · University of Washington  
📱 133-2878-5031 &nbsp;·&nbsp; ✉ 2916552948@qq.com &nbsp;·&nbsp; 📧 zhuxirui677@gmail.com

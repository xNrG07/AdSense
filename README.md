# Austrian Micro-Tools

Kostenlose Finanz-Tools für Österreich – Astro SSG Website.

## Tools
- 💰 Netto-Brutto-Schätzer
- 🚗 Pendelkosten-Rechner
- 📊 Zuverdienst-Tracker
- 🏠 Mietbudget-Rechner

## Run Locally

```bash
npm install
npm run dev
# Open http://localhost:4321
```

## Build & Deploy

```bash
npm run build
# Static output in dist/
# Deploy to Netlify, Vercel, Cloudflare Pages, or any static host

npm run preview   # preview the build locally
```

## Configuration

Tax rates and thresholds are in `src/data/config.ts`.
All values are **placeholders** – update from official sources (BMF, WKO, AK).

## Structure

```
src/
  data/         → config, tool definitions, blog post metadata
  layouts/      → BaseLayout (header, footer, consent, ads)
  pages/
    index.astro            → Homepage
    tools/index.astro      → Tools overview
    tools/*.astro          → 4 tool pages
    blog/index.astro       → Blog overview
    blog/*.astro           → 8 blog articles
    impressum.astro        → Legal placeholder
    datenschutz.astro      → Privacy policy placeholder
    kontakt.astro          → Contact form (mailto fallback)
  styles/global.css        → Design system
  lib/                     → tracker, ads, consent, tool utils
```

## AdSense

Ad slots are placeholders only (no real publisher ID).
Slots: `header_leaderboard`, `incontent_1`, `incontent_2`, `sticky_footer`.
Ads only initialize after user consent.

## Disclaimer

All calculations are estimates and do not constitute financial or legal advice.

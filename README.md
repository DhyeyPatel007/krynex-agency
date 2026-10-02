# krynex — Website Audit Agency

**Motto:** We find what your website is hiding.

Production website for krynex, a website-audit agency. Dark-premium design,
Space Grotesk + Inter typography, GSAP scroll animations, Lenis smooth scroll,
custom cursor, magnetic buttons, and an embedded 16:9 explainer video.

## Structure

- `site/` — Vite + React + TypeScript + Tailwind CSS v4 production site
- `copy.md` — full copy deck (brand voice: direct, confident, zero fluff)
- `assets/img/` — AI-generated brand imagery (dark indigo audit aesthetic)
- `assets/video/` — 16:9 explainer video (86s, kinetic typography + motion graphics)

## Develop

```bash
cd site
npm install
npm run dev
```

## Build

```bash
cd site
npm run build   # outputs to site/dist/
```

## Contact wiring

- WhatsApp CTA → `wa.me` deep link (number lives only in `site/src/config.ts`, never rendered as visible text)
- Email → hello@krynex.in

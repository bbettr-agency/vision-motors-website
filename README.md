# Vision Motors — Homepage

Independent vehicle workshop in Wonderboom South, Pretoria. Specialist diagnostics, engine
reconditioning, gearbox, DSG and mechatronic repairs.

**Built with BBETTR Website OS v2.0.0-phase1.**

**Repository:** https://github.com/bbettr-agency/vision-motors-website — **this repo is the
source of truth for all Vision Motors work.** Production branch: `main`.

---

## Status

Homepage demo — production-quality, verified against `PIPELINE/gates.md` Gate 3.
See `PROJECT_STATUS.md` for gate results, `SESSION-HANDOVER.md` before picking the project up,
and `docs/` for the strategy and client documentation:

| Document | What it covers |
|---|---|
| `docs/VISION-MOTORS-HOMEPAGE-PLAN.md` | The approved research-led plan the build follows |
| `docs/CLIENT-BRIEF.md` | Business, customer, competitor and search research (OS brief schema) |
| `docs/CLIENT-VERIFICATION-CHECKLIST.md` | Every outstanding client fact, and why it is withheld |
| `docs/IMAGE-REQUIREMENTS.md` | Photoshoot brief, ranked by conversion value |

⚠️ **Several client facts are deliberately unpublished** pending verification — founding year,
street number, opening hours, MIWA membership, warranty terms. They are held in `config/` with
`TODO(client)` markers and render as neutral copy or nothing at all. Do not publish them as fact
without client confirmation.

## Stack

Next.js 14 · React 18 · TypeScript (strict) · Tailwind CSS 3 · lucide-react.
Three runtime dependencies. No animation library — see `PROJECT_STATUS.md` §4.

## Commands

```bash
npm install
npm run dev          # http://localhost:3000 (3500 via .claude/launch.json)
npm run build
npm run start
npm run lint
npm run typecheck
```

All three of `npm run build`, `npx tsc --noEmit` and `npm run lint` must pass before any push.

**Never run `npm run build` while `npm run dev` is live** — they share `.next` and the dev
server breaks. If it happens: stop, `rm -rf .next`, restart.

## Environment

```bash
cp .env.example .env.local
```

`GHL_WEBHOOK_URL` — server-only GoHighLevel inbound webhook. While unset, the booking form runs
in **demo mode**: it validates and confirms, but forwards nothing and labels itself clearly.

## Structure

```
app/          routes, layout (fonts + JSON-LD), sitemap.ts, robots.ts, api/booking
views/        page composition — section order lives here
config/       ALL copy, contact details and client facts. Nothing hardcoded in components.
lib/          metadata factory, schema builders, lead validation, reveal manager
components/   ui/ primitives · layout/ chrome · sections/ page sections · funnel/ the form
public/images real photography + the OG image
```

**The config rule is absolute:** no copy, phone number, address, stat or URL in a component.

## Performance

First-load JS **120 kB** (budget < 150 kB). Hero image priority-loaded, everything else lazy.
Fonts self-hosted via `next/font`. No third-party scripts.

## Accessibility

WCAG 2.2 AA targeted. One H1, no skipped heading levels, labelled form fields with announced
errors, working skip link, 44px tap targets, visible focus rings, `prefers-reduced-motion`
respected. Scroll reveals are a progressive enhancement — with JavaScript disabled all content
renders normally.

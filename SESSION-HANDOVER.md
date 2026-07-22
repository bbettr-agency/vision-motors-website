# SESSION HANDOVER — Vision Motors

**Status:** PHASE 2 COMPLETE — global system + primary pages built and verified.
**Date:** 2026-07-20 · **Built with:** BBETTR Website OS v2.0.0-phase1

---

## ⚠️ THIS REPOSITORY IS THE SOURCE OF TRUTH

**Repository:** https://github.com/bbettr-agency/vision-motors-website
**Development branch:** `main` → preview deployments only
**Production branch:** `production` → `vision-motors-website.vercel.app`

> ⚠️ **Changed 2026-07-22.** `main` used to be the production branch, so ordinary pushes
> silently replaced the client's approved review deployment. Publishing is now a separate,
> deliberate act. See `docs/DEPLOYMENT-WORKFLOW.md`.

**All future Vision Motors work must happen here.** Do not continue this project inside the
Website OS repository.

The original build branch — `claude/vision-motors-homepage-c56dc5` on
`bbettr-agency/website-os` — is retained **temporarily as a recovery point only** and is now
frozen. Once this repository is confirmed working and deployed to Vercel, delete that branch and
remove the `vision-motors/` directory from the OS repo. Client code must never be merged into
the core OS.

---

## Current demo status

A single-page, config-driven Next.js 14 homepage. Production-quality code, not a mock-up:
strict TypeScript, zero hardcoded copy, accessible, and honest about what is not yet verified.

| | |
|---|---|
| Build / TypeScript / lint | Clean |
| First-load JS | **125 kB max** across all templates (budget < 150 kB) |
| Responsive | **49 route × width combinations** at 360/390/430/768/1024/1280/1440 — zero overflow, zero phone wraps |
| Contrast | **338 text/background pairs across 10 routes — zero failures**, lowest 4.70:1 |
| Visual system | v3 — **indigo primary + brass accent**. Alternating rhythm held at 53% light / 47% dark |
| Indexable routes | 9 + `/thank-you` (noindex) + 404 |
| Booking form | **Demo mode** — 11 fields, honeypot, rate limit, validates and confirms, forwards nothing |
| Schema | `AutoRepair` + `WebSite` global; `BreadcrumbList` per page; `FAQPage` only where visible; `Article` on warranty rights. **No duplicates. No rating schema.** |
| Photography | 1 real photo. Gallery held pending shoot. |

**Routes built:** `/` · `/services` · `/about-us` · `/contact-us` · `/book-a-vehicle-in` ·
`/our-work` · `/your-warranty-rights` · `/privacy-policy` · `/website-terms-of-use` ·
`/thank-you` · 404 · `/api/booking`

**Homepage section order** (`views/homepage.tsx`): Hero → Trust strip → **Symptom band** →
Services → Diagnostic capability → **Engine Shop** → Why us → **Customer rights** →
Testimonials → Process → FAQ → **Location & hours** → Final CTA + form.

Phase 2 changes: `WorkshopProof` **removed** from the homepage (four placeholder tiles carrying
no information — its job is now done by `EngineShop` and `/our-work`; component retained for
when photography lands). `EngineShop` and `LocationHours` **added**.

---

## The one thing to understand about this project

Vision Motors' current live site sells a **generic mechanic**. Their own `/services` page — which
almost nobody lands on — sells a **specialist driveline and engine-rebuild workshop**: engine
reconditioning, automatic and manual gearbox overhauls, transfer cases, differentials, DSG
dual-clutch units and mechatronic repair.

That second business is the valuable, defensible one. **This build is positioned around it.** If
a future session softens the positioning back toward "trusted local mechanic", the entire
strategic advantage is lost.

The supporting proof is a real published testimonial describing a fault the official Nissan
dealer could not resolve. It is quoted verbatim in the diagnostics section and is the single most
valuable sentence the business owns.

---

## Decisions already made — do not re-litigate

- **Primary CTA is "Book Your Car In"**, everywhere, one destination (`#book`). Not "Book an
  Inspection" — in SA usage that reads as a pre-purchase inspection or roadworthy test and would
  pull the wrong enquiries.
- **Symptom band comes before the services grid.** Visitors arrive thinking "it's making a
  noise", not "I need a gearbox overhaul".
- **The customer-rights section stays, with its caveat block intact.** Removing the caveat makes
  the section misleading. See `config/rights-config.ts` for sourcing and the two common errors it
  deliberately avoids (there is no "guideline R7"; CPA s56 is not a warranty-choice protection).
- **No rating displayed, no `aggregateRating` schema.** 4.2★ from 71 reviews with 8 one-star
  entries.
- **Indigo primary + brass accent (Direction C, approved 2026-07-22).** The official logo is
  indigo `#290F74`. `indigoDeep #1A0A4A` is now a third dark anchor surface alongside ink and
  charcoal, which gives the brand large-area presence **without** putting gold on large areas.
  Brass stays reserved for CTAs, small labels, key icons and active states.
- **CALLING is the primary CTA, booking is secondary** (client instruction). Inverted from the
  demo. `click_to_call` is the primary tracked conversion — an Ads setup optimising for form
  fills alone will misread this account.
- **The page alternates dark and warm-light sections (v2, 2026-07-20).** Section order is
  unchanged; only surfaces differ. Nine zones, measured 53% light / 47% dark. The first pass was
  all-dark and read as one continuous black slab. **Do not push it back toward all-dark, and do
  not swap the warm neutrals (`cream`/`sand`/`linen`) for a cool white** — warm sits beside
  brass, cool fights it and reads as a generic mechanic template.
- **Blue is retired.** The steel blue that carried icons in v1 is gone; brass (`accentInk
  #7E611B` on light, `accent #C9A24B` on dark) replaces it. Do not reintroduce a third hue.
- **framer-motion is not used.** See `PROJECT_STATUS.md` §4.
- **AdBlue/SCR removal is not on the site.** Emissions-defeat work; raised separately.

---

## Preserved systems — do not "simplify" these

**1. Progressive-enhancement reveal system**
`components/ui/reveal.tsx` + `lib/reveal-manager.ts`. Read the header comments before touching
either. Two failure modes were found and fixed in QA:
- Server-rendering `opacity-0` made the whole page below the hero invisible with JS disabled.
  The hidden state now lives in CSS behind a `.js-reveal` class added by an inline script before
  first paint.
- `IntersectionObserver` only fires on *change*, so a jump-scroll left **29 of 48** elements
  permanently hidden. Reveal is now driven by a position check on scroll via one shared listener.

**2. Performance work**
framer-motion was removed after `whileInView` proved non-functional under `LazyMotion`'s
`domAnimation` feature set, and the full bundle broke the 150 kB budget. Result:
**155 kB → 120 kB**. Reintroducing an animation library will blow the budget.

**3. The section rhythm and the contrast floor**
`config/theme-config.ts` documents the palette, the per-pair contrast maths and the `rhythm`
array recording which surface each section sits on. All 66 text/background combinations on the
page pass WCAG AA, with the lowest at 4.81:1 — there is very little headroom, so any new muted
grey or lowered opacity must be re-checked rather than eyeballed.

**4. Verification statuses**
Every unverified client fact is held in `config/` with a `TODO(client)` marker and a documented
reason. `lib/schema.ts` is gated on these statuses — it omits unverified fields rather than
guessing, because a wrong address in schema is worse than none. **Do not fill these in from
memory or from a web search.**

---

## Outstanding client information

Six blocking items. Full detail, wording and config locations in
**`docs/CLIENT-VERIFICATION-CHECKLIST.md`**.

| # | Item | Why blocked |
|---|---|---|
| 1 | ~~Canonical street address~~ | ✅ **RESOLVED** from own signage — 1059 Steve Biko Road. ⚠️ **Postcode still unresolved** (GBP 0031 vs onboarding 0084) and deliberately unpublished |
| 2 | ~~Opening hours~~ | ✅ **RESOLVED** — Mon–Fri 07:30–17:00, published + in schema. GBP says 07:15 and must be corrected before launch |
| 3 | Founding year | "since 1992" vs "almost 30 years" — if 1992, it is 34 years |
| 4 | MIWA membership + number | Claimed and corroborated, but unconfirmed |
| 5 | Warranty terms in writing | Appears only inside a testimonial; a refused-claim review exists |
| 6 | Testimonial consent | Client's own published content, but no per-person consent |

High priority beyond those: Google Business Profile website link (likely the single
highest-traffic fix available), whether the current live site's forms actually deliver leads,
WhatsApp number, photography, vector logo.

---

## Next recommended steps

1. **Send the client the verification checklist** (`docs/CLIENT-VERIFICATION-CHECKLIST.md`) —
   items 1–6 are blocking.
2. **Check the Google Business Profile** — is the website attached? 71 reviews are sitting there.
3. **Test the current live site's forms** — empty `action`/`method` attributes suggest they may
   have been dropping enquiries for years.
4. **Book the photoshoot** — `docs/IMAGE-REQUIREMENTS.md`; the top three shots matter most.
5. **Get the vector logo** → confirm brand tokens in `config/theme-config.ts`.
6. **Connect GHL** → set `GHL_WEBHOOK_URL`, flip `formConfig.redirectOnSuccess = true`.
7. **Commission real legal pages** (Privacy Policy, Terms) — the current site's are third-party
   generator links.
8. **Then expand to service pages** using `config/routes.ts` → `futureRoutes`.
9. **Local SEO:** fix NAP consistency across all directories once the canonical address is
   agreed; attach the website to the GBP.

---

## Vercel deployment status

**Phase 2 is live and client-approved at** `https://vision-motors-website.vercel.app`
(commit `8d8f5b7`).

### Workflow — read before pushing

| Branch | Deploys to |
|---|---|
| **`main`** | **Preview only.** Unique URL per push. Never touches the review URL. |
| **`production`** | **Production** → `vision-motors-website.vercel.app`. Approved releases only. |

```bash
git push origin main                                    # preview

# production — only after approval
git checkout production && git merge --ff-only main && git push origin production && git checkout main
```

⛔ **Never `npx vercel --prod`.** It bypasses the branch gate.

### Real-domain protection

🔴 **`visionmotors.co.za` is NOT connected and must not be** without written client approval.
Verified 2026-07-22: the project has exactly one domain (`vision-motors-website.vercel.app`),
`visionmotors.co.za` appears nowhere in the Vercel account, and no DNS has been touched. The
client's live site is still GroovePages and is unaffected.

⚠️ "Auto-assign Custom Production Domains" is enabled — harmless while no custom domain exists,
but it means the next production deploy claims the domain the moment one is added.

### Rollback

Fastest: Vercel dashboard → Deployments → **⋯ → Promote to Production** (instant, no rebuild).
Or `npx vercel promote <deployment-url>`. Known-good: `8d8f5b7` (Phase 2), `6ba5bc5` (Phase 1).

Full detail: **`docs/DEPLOYMENT-WORKFLOW.md`**.

**At launch (Gate 4):** DNS + SSL · 301 map for the old site (only 3 URLs: `/`, `/services`,
`/cookie`) · Search Console property + sitemap · GBP linked · analytics events verified firing in
production · launch report.

---

## Traps for the next session

**1. Never run `npm run build` while `next dev` is running.** They share `.next` and the dev
server's static chunks start 404-ing, which presents as a completely unstyled or blank page. If
it happens: stop the server, `rm -rf .next`, restart. This cost real time.

**2. The dev server's Tailwind CSS goes stale after heavy editing.** Focus utilities appeared
missing and the skip link looked broken — both were fine in a clean production build. **Verify
CSS-dependent behaviour against `npm run build` + `npm start`, not the dev server.**

**3. `:focus` only matches while the document has focus.** Calling `element.focus()` and reading
`matches(':focus')` in two separate browser-eval calls always reports false. Focus and assert in
the same tick.

**4. Do not reintroduce claims from web search without tracing them to source.** A search returns
*"5 STAR RMI approved… Land Rover & Jaguar Specialists… largest independent workshop in
Pretoria"* attached to Vision Motors. That is **LR Auto Workshop's** listing — a different
business. This is exactly the fabrication-by-conflation the OS no-fabrication rule exists to
prevent.

---

## Where things live

```
config/          ALL content and client facts. Every unverified item carries TODO(client).
                 site-config.ts is the single source of business truth.
lib/schema.ts    JSON-LD. Omits unverified fields rather than guessing.
lib/reveal-manager.ts + components/ui/reveal.tsx    Read the header comments first.
views/homepage.tsx    Section order lives here and nowhere else.
docs/            Plan, client brief, verification checklist, image requirements.
```

## Run it

```bash
npm install
npm run dev
npm run build && npx tsc --noEmit && npm run lint   # all three must pass before any push
```

# Vision Motors – Session Handover

_Last updated: 2026-08-04 (end of image-free hero session)._
**Tomorrow: read this file first, then start directly at "VERY NEXT TASK". Do not re-audit.**

---

## Current branch status

| Item | Value |
|---|---|
| Current branch | `main` |
| Current commit hash | `add66f8f0ff8841d6295d52679b110cbecc5dd80` (`add66f8`) |
| Production commit | `add66f8` (production branch tip — identical to main) |
| Preview deployment URL | https://vision-motors-website-9tzbbopfd-info-78148620s-projects.vercel.app _(login-walled; that's normal for previews)_ |
| Production deployment URL (public) | https://vision-motors-website.vercel.app _(immutable: `…-14nbk3x6w-…`)_ |
| Working tree status | **clean** (`git status --porcelain` empty) |

### Deploy workflow (as used this session — see also `docs/DEPLOYMENT-WORKFLOW.md`)
- **Production branch is `production`, NOT `main`.** Promote with a fast-forward:
  `git push origin <sha>:refs/heads/production` → Vercel auto-builds and re-aliases `vision-motors-website.vercel.app`.
- **Preview:** `vercel deploy --yes` (git auto-deploy on `main` pushes has been unreliable → deploy previews manually).
- Public production URL is open (HTTP 200); preview URLs sit behind a Vercel login wall (302) — that is expected, not a bug.
- Never `git push … refs/heads/production` without explicit approval.

---

## What is COMPLETE (built + verified + on production)

- **Premium navy visual system** — palette (`ink #0E2338`, `navy #12293F`, `steel`, `cream #F3EFE7`, `bluegrey #E4DFD5`, `cta #C58A32` amber), fonts (Barlow Semi Condensed display, IBM Plex Mono, Inter). Squared shape language. In `tailwind.config.ts` + `app/globals.css`.
- **Header / logo behaviour** — fixed header, transparent→navy on scroll, logo shrink-on-scroll (GPU transform, keeps 44px tap target). Official Vision Motors wordmark reversed to white for navy surfaces (`public/images/vision-motors-logo-white.png` + `-logo-indigo.png`, 503×193, generated from client PNG). Call CTA is the only brass element in the chrome.
- **Two workshop locations** — Wonderboom South (main) + engine shop, reflected in content/schema. (No Ranger-specialist claim — fact-gated.)
- **Diagnostic policy** — "we diagnose before we quote / nothing done without approval" strip-and-assess wording, applied in hero + sections.
- **Booking flow** — `/book-a-vehicle-in` + `app/api/booking` + `lib/lead.ts` → GHL webhook (server-only `GHL_WEBHOOK_URL`). Working, untouched this session.
- **Schema** — JSON-LD via `lib/schema.ts` (LocalBusiness/AutoRepair, FAQ, etc.). No `aggregateRating`/review schema (fact-gated). Untouched.
- **SEO / metadata** — `lib/metadata.ts`, per-page metadata, `app/sitemap.ts`, `app/robots.ts`. Descriptive alt text on all images. Untouched.
- **Hero redesign (image-free)** — `components/sections/hero.tsx` + `components/sections/hero-showcase.tsx` + terse copy in `config/hero-showcase-config.ts`. Typography-led "workshop-manual" opening: left sticky conversion column (single H1, concise copy, Call primary / Book secondary) + right animated capability index `01—08` with inline-SVG diagnostic trace, per-service nodes, playhead, ghost numeral. **Zero images / video / stock / AI / placeholder.** Atmosphere = CSS gradients + SVG + type only.
- **Hero engine** — discrete active row derived from the sticky section's **scroll PROGRESS** (0 at top → 1 at release) on a **hardened rAF**; published as CSS var `--hero-progress` that the SVG trace + playhead read frame-exactly. `active = round(progress × 7)` → 01 active at top, 08 as it releases, every capability activates. No `useScroll`, no `whileInView`, no IntersectionObserver, **no Motion library**.
- **Hero verification (all passed, on production)** — 0 `<img>/<picture>/<video>` in hero; 1 crawlable H1; all 8 services + blurbs server-rendered (no-JS safe); 01 active at top; 08 before release (verified in preview on this exact commit; deterministic); sticky pins on desktop and **fits 1366×768 with CTAs above the fold** (column trimmed to ~657px); mobile is non-sticky, full-width rows, all blurbs visible, no scroll trap; phone never wraps; no horizontal overflow (375 / 1366 / 1440); Call+Book track (`data-cta="call"`, `tel:+27123350070`; Book → `/book-a-vehicle-in`); reduced-motion supported (trace+playhead `motion-reduce:hidden`, entrance `motion-safe` only, content visible at rest).
- **JS bundle size** — homepage first-load **~127 kB** (baseline 126 → 127, **+1 kB**). Zero animation-library bytes.
- **Motion MCP investigation** — confirmed `mcp.motion.so` is **video-generation + billing only** (no code/dev/perf help). **Not used**; no video generated; Motion for React **not installed**.
- **Real domain** — `visionmotors.co.za` remains **disconnected** (resolves to its Cloudflare host, not Vercel; not attached to the Vercel project). **DNS untouched.**

---

## What is NOT COMPLETE

- **Velmoré-style section transitions (rounded full-width bands)** — the ONLY outstanding front-end task. See below.
- (Backlog, not for tomorrow) client-dependent items already logged elsewhere: professional photoshoot (`docs/IMAGE-INVENTORY.md` — hero is now image-free so this is no longer blocking launch), RMI/MIWA accreditation verification (fact-gated), vector logo, Phase 3/4 service pages + gallery. **Do not start these tomorrow.**

---

## VERY NEXT TASK (tomorrow morning) — the only thing we begin with

**Implement the Velmoré-style section transitions.**

Soften transitions between full-width coloured bands using **large border radii on the coloured section itself** — nothing else.

**Hard constraints (do NOT violate):**
- Keep every section **exactly the current full width**.
- **No** floating cards. **No** side gutters. **No** reduced container width. **No** shadows. **No** panel effect. **No** redesign.
- Only soften the transitions using large border radii on the full-width coloured section.

**Pattern:**
- **Hero (navy/ink)** → rounded **bottom only**.
- **Light sections** → **square** (no radius).
- **Every dark/navy section** → rounded **top + bottom**.
- **Footer** → rounded **top only**.
- The rounded corners belong to the FULL-WIDTH coloured section itself — exactly like the Velmoré reference.

### Section map (verified this session — use it, don't re-derive)
Homepage order is composed in `views/homepage.tsx`. `<main>` currently has `bg-brand-ink`.

| # | Section | Component | Background | Dark/Light | Rounding per pattern |
|---|---|---|---|---|---|
| 1 | Hero | `hero.tsx` | `bg-brand-ink` | **DARK** | bottom only |
| 2 | TrustStrip | `trust-strip.tsx` | `bg-brand-ink` | **DARK** | top+bottom* |
| 3 | SymptomBand | `symptom-band.tsx` | `bg-brand-cream` | light | square |
| 4 | ServicesGrid | `services-grid.tsx` | `bg-brand-bluegrey` | light | square |
| 5 | DiagnosticCapability | `diagnostic-capability.tsx` | `bg-brand-navy` | **DARK** | top+bottom |
| 6 | EngineShop | `engine-shop.tsx` | `bg-brand-cream` | light | square |
| 7 | WhyUs | `why-us.tsx` | `bg-brand-ink` | **DARK** | top+bottom |
| 8 | RightsSection | `rights-section.tsx` | `bg-brand-bluegrey` | light | square |
| 9 | Testimonials | `testimonials.tsx` | `bg-brand-navy` | **DARK** | top+bottom |
| 10 | ProcessSteps | `process-steps.tsx` | `bg-brand-cream` | light | square |
| 11 | Faq | `faq.tsx` | `bg-brand-bluegrey` | light | square |
| 12 | LocationHours | `location-hours.tsx` | `bg-brand-cream` | light | square |
| 13 | FinalCta | `final-cta.tsx` | `bg-brand-ink` | **DARK** | top+bottom* |
| 14 | Footer | `footer.tsx` | `bg-brand-ink` | **DARK** | top only |

### ⚠️ Resolve these FIRST (before writing classes) — do not blindly apply `rounded-t/b` to all 14

1. **Two dark-on-dark adjacencies exist:** Hero→TrustStrip (both `ink`) and FinalCta→Footer (both `ink`). Applying "rounded bottom on Hero + rounded top on TrustStrip" literally would carve a light canvas sliver **inside** a region that reads as one dark block (same for FinalCta/Footer). **Recommendation:** treat each contiguous dark run as ONE block and round only its OUTER edges — i.e. Hero+TrustStrip = one dark block (rounded bottom where TrustStrip meets the light SymptomBand; the Hero↔TrustStrip seam stays square); FinalCta+Footer = one dark block (rounded top where FinalCta meets the light LocationHours; footer bottom is the page end). Confirm this interpretation with the client wording before coding. The isolated darks (DiagnosticCapability, WhyUs, Testimonials) round cleanly top+bottom against their light neighbours.

2. **Canvas contrast:** a rounded corner only READS if the area it reveals contrasts. `<main>` is currently `bg-brand-ink`, so a dark section's rounded corner over an ink canvas is invisible. Decide the mechanism up front:
   - **Option A (recommended, matches Velmoré):** the dark section's large radius reveals the **adjacent light section** (cream/bluegrey) — achieved by letting the coloured bg round with `rounded-[…]` while sections remain stacked full-width; the neighbour's light colour fills the corner. May need the page/`main` canvas set to a light token (e.g. `bg-brand-cream`) so corners at light↔dark seams read cleanly.
   - **Option B:** overlap adjacent sections by the radius with a negative margin so the dark rounded corner sits over the light neighbour.
   - **NOTE the prior attempt:** task history "Navy chapter rounding + cream canvas" (v5.2 floating panels) was **reverted** — commit `03a207b` "Restore approved pre-rounding design" is the pre-rounding baseline the current build descends from. This new task is the *narrower, no-cards* version. Don't reintroduce panels/gutters/shadows.

3. **🚨 HERO STICKY GOTCHA — do NOT add `overflow-hidden`/`overflow-clip` to the hero `<section>` when rounding it.** We *removed* `overflow-hidden` from the hero this session precisely because it clips `position: sticky` and broke the left column's pinning. `border-radius` alone rounds the section's background WITHOUT needing `overflow-hidden` (hero content stays within bounds). If a rounded corner ever needs clipping, do it on a decorative background layer, never on the sticky's ancestor chain. Re-verify sticky still pins (`stickyTop ≈ 112`) after touching the hero.

4. Rounding the hero is a **wrapper/className change only** (radius on the `<section>` bg). Do **not** touch hero internal logic (rAF, `--hero-progress`, showcase, CTAs, H1).

### Suggested implementation approach
- Consider a `radius` prop / variant on `components/layout/section-container.tsx` (e.g. `roundedTop`/`roundedBottom` booleans) so rounding is centralised and consistent, rather than sprinkling arbitrary classes. Add a large radius token in `tailwind.config.ts` (`borderRadius` block already exists ~line 81) e.g. `chapter: "2.5rem"` (pick a value that matches the Velmoré reference visually — judge on screen, not a fixed number).
- Some sections (hero, footer) don't use `SectionContainer` for their outer element — apply the radius on their own top-level `<section>`/`<footer>`.

---

## Files likely to change
- `components/layout/section-container.tsx` — add radius variant/prop (recommended central approach).
- `tailwind.config.ts` — add the large "chapter" radius token (and possibly set canvas bg).
- `components/sections/hero.tsx` — rounded **bottom** on the hero `<section>` bg **only** (className; NO overflow-hidden; NO logic change).
- `components/sections/trust-strip.tsx`, `diagnostic-capability.tsx`, `why-us.tsx`, `testimonials.tsx`, `final-cta.tsx` — dark-section rounding (subject to the dark-run decision above).
- `components/layout/footer.tsx` — rounded **top only**.
- `views/homepage.tsx` and/or `app/globals.css` — only if the page/`main` canvas colour needs to change for corner contrast (Option A).

## Files that MUST NOT change (locked)
- **Booking:** `app/api/booking/**`, `views/booking-page.tsx`, `lib/lead.ts`, `GHL_WEBHOOK_URL` handling.
- **Schema:** `lib/schema.ts` and any JSON-LD output (no rating/review schema).
- **Metadata / SEO:** `lib/metadata.ts`, all per-page `metadata`, `app/sitemap.ts`, `app/robots.ts`, alt text.
- **Routes / configs:** `config/routes.ts`, `config/site-config.ts`, `config/hero-showcase-config.ts`, `config/images-config.ts`, any other `config/*`.
- **Hero logic:** `components/sections/hero-showcase.tsx` (rAF / `--hero-progress` / active-index) — do not modify. In `hero.tsx`, only the outer section radius may change; not the H1, CTAs, copy, or showcase wiring.
- **Tracking:** `lib/tracking.ts`, `data-cta` attributes, `components/ui/call-button.tsx`, `components/layout/sticky-mobile-bar.tsx`.
- **Shared reveal system:** `lib/reveal-manager.ts`, `components/ui/reveal.tsx`.
- **Fact-gated content** (see `docs/FACT-VERIFICATION-REGISTER.md`): no Ranger-specialist wording, no founding year, no legal entity name, no RMI/MIWA/insurer/5-star claims, `warrantyInterimCopy` is the only warranty wording, `live:false` routes stay unlinked.
- **`production` branch** — do not push without explicit approval. **DNS / `visionmotors.co.za`** — never touch.

---

## Known design decisions (approved — do not re-debate)
- ✔ Premium navy visual system approved
- ✔ Industrial / editorial "workshop-manual" direction approved
- ✔ **Image-free hero approved** (no photo/stock/AI/video/placeholder in hero)
- ✔ Typography approved (Barlow Semi Condensed / IBM Plex Mono / Inter)
- ✔ Diagnostics-first wording approved ("we diagnose before we quote")
- ✔ Two workshop locations approved (no Ranger-specialist claim — fact-gated)
- ✔ Motion MCP NOT used; no video generated; Motion for React NOT installed
- ✔ Hardened rAF + `--hero-progress` hero engine retained (no `useScroll`/`whileInView`/IntersectionObserver)
- ✔ Hero active-index = section scroll PROGRESS (01 at top → 08 at release)
- ✔ Left hero column trimmed to fit viewport (sticky + CTAs above fold on 1366×768); "what we do" list lives only in the right index (not duplicated left)
- ✔ Left-column entrance = one-time `motion-safe` CSS keyframe (never scroll-reveal, so CTAs can't stick hidden)
- ✔ `overflow-hidden` removed from hero `<section>` so `position: sticky` isn't clipped
- ✔ Call remains primary CTA; Book secondary
- ✔ Squared shape language everywhere EXCEPT the upcoming large "chapter" radii on dark bands (this next task is the one intentional exception)
- ✔ Floating-panel / cards / gutters / shadows approach was tried and **rejected/reverted** — do not reintroduce

---

## Verification checklist for tomorrow (after the corner work)
- **Stop `next dev` / clear `.next`** before building (never build with dev running — stale `.next`).
- `npx tsc --noEmit` → clean.
- `npx next lint` → clean.
- `npm run build` → success; **record homepage first-load JS (expect ≈127 kB, no increase)**.
- `npm run start` and verify in the browser pane:
  - Responsive at 375 / 768 / 1024 / 1366 / 1440 — **no horizontal overflow**; sections stay full-width (radius must not introduce side gutters).
  - Rounded corners read correctly at every dark↔light seam; no ugly same-colour notch at the Hero↔TrustStrip and FinalCta↔Footer seams (see decision #1).
  - **Contrast** preserved — text on every band still meets contrast; corners don't expose a clashing colour.
  - **Hero sticky still pins** (`stickyTop ≈ 112`) and CTAs stay above the fold — confirm the radius change didn't reintroduce `overflow` clipping.
  - No shadows, no cards, no reduced width introduced.
- **Deploy PREVIEW only** (`vercel deploy --yes`). **Do NOT touch production** without explicit approval. Production must remain on `add66f8` until sign-off.

---

## IMPORTANT (read me first tomorrow)
- The FIRST thing to do tomorrow is **read this handover**.
- Do **NOT** re-audit the project. Do **NOT** revisit completed decisions. Do **NOT** re-explain previous work.
- Continue directly from **"VERY NEXT TASK"**.
- Browser-pane note from this session: the in-app preview pane intermittently reports "hidden" and **ignores programmatic/`computer` scroll** (mid-scroll screenshots also glitch). Verify scroll-dependent behaviour via **live DOM reads** (`getBoundingClientRect`, `--hero-progress`, `window.scrollY`) rather than screenshots when the pane won't scroll.

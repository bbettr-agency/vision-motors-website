# Vision Motors — Session Handover

_Last updated: 2026-08-10 (end of the visual / navigation / photography pass + hero fix).
Read this FIRST next session. The site is in an approved, happy state — do not re-audit._

---

## Current source-of-truth state (confirmed live from Git + Vercel)

| Item | Value |
|---|---|
| Repository | `bbettr-agency/vision-motors-website` |
| Current production commit | **`3e94349`** (`3e943498ae9633dd44f19f5600e6e7dc8890497f`) |
| Production review URL | https://vision-motors-website.vercel.app (HTTP 200, Ready) |
| `main` | `3e94349` (pushed) |
| `production` | `3e94349` (promoted — main and production are identical) |
| Local branch / HEAD | `main` (this handover is a docs-only commit on top of `3e94349`) |
| Working tree | **clean** after this handover is committed |

> Note: committing this handover advances `main` by one **docs-only** commit; the deployed **`production` app stays `3e94349`** (unchanged). No application code changed.
| Real client domain `visionmotors.co.za` | **NOT connected** — resolves to Cloudflare (104.21.40.39 / 172.67.175.46), **not** attached to the Vercel project |
| DNS | **untouched** |

### Deploy workflow (as used — see also `docs/DEPLOYMENT-WORKFLOW.md`)
- Production branch is **`production`** (NOT main). Promote with `git push origin HEAD:refs/heads/production` (fast-forward). Vercel auto-builds + re-aliases `vision-motors-website.vercel.app`.
- Preview: `vercel deploy --yes`. Public production URL is open (200); preview URLs sit behind a Vercel login wall (302).
- **`main` and `production` are currently in sync at `3e94349`** — a normal FF promotion works next time (no force needed).

---

## What was completed today

### Hero — image-led, centred
`components/sections/hero.tsx`. The hero is now:
- Centred, **image-led**, full-bleed **real Vision Motors workshop photograph**.
- Background image is `public/images/vision-motors-og-image.jpg` (client's requested file — a 1200×630 crop of the workshop-interior shot).
- Eyebrow `VEHICLE REPAIRS · DIAGNOSTICS · PRETORIA` → mixed-case H1 *"Specialist vehicle, engine & gearbox repairs in Pretoria"* → one supporting sentence → **Call (primary)** / **Book Your Car In (secondary)** → trust line.
- Premium navy overlay (readable text, workshop clearly visible, not crushed to black). Verified desktop + mobile crops.
- **No 01–08 capability list. No hero rAF service index** (both removed — the capability index + `hero-showcase.tsx` + `hero-showcase-config.ts` were deleted).

### 🚨 CRITICAL HERO FIX — must not regress
The production hero previously **loaded the image but rendered flat navy** because the image + overlay used **negative z-index layers (`-z-20`/`-z-10`) inside an `isolate` stacking context** — some browsers fail to composite that, leaving the hero flat navy.

**Final fix (committed + promoted in `3e94349`):**
- Background image + overlay live in a plain **`z-0`** layer (`<div className="absolute inset-0 z-0">`).
- Content sits at **`z-10`**.
- **No negative z-index. No `isolate`.**

➡️ **Do NOT reintroduce negative z-index / `isolate` hero layering.** If the hero ever looks flat navy again, check the DOM paint state (`img.complete`, `opacity`, z-indices) against a **production build** before assuming a code bug — the in-app browser pane pre-paints/repaint-glitches the async hero image on the first screenshot.

### Photography
- Authentic Vision Motors photography integrated site-wide. **No stock, no AI imagery.**
- Optimised production files committed under `public/images/` (SEO-named `vision-motors-*-pretoria.jpg`), EXIF-stripped, served via **`next/image`** (WebP/AVIF, responsive, lazy except the priority hero).
- **28 raw source originals are archived (non-public) in `assets/source-photography/vision-motors/`** — committed for future use, NOT served (return 404). Only `public/images/` ships.
- Hero photo's readable customer **plate was blurred**.
- **RMI/MIWA badge imagery excluded** from prominent use (the branded van + reception-desk logo shots) — accreditation is unverified (fact-gate C2).
- **No false gearbox/DSG image claims** — no true gearbox/DSG bench photo was supplied, so nothing is captioned as one (the engine short-block reads "engine").
- **Homepage, About, Our Work, Services, Contact** now use real photography. **Booking is intentionally cleaner** (no heavy imagery — conversion-focused).
- The old two-technicians-at-engine-bay photo (`vision-motors-technicians-engine-bay-pretoria.jpg`) was **removed site-wide** at client request; the OG image (a crop of it) was regenerated from the workshop-interior; About/Our-Work leads now use `technicians-diagnosis`.
- `public/images/` currently holds **13 optimised assets** the site actually serves (photos + 2 logos + OG image). The old stock `oil-service` image was removed — the site is now 100% authentic.

### Homepage flow (approved)
`views/homepage.tsx` — order lives here and nowhere else:
Hero → **TrustStrip** → **SymptomBand** → **ServicesGrid** → **DiagnosticCapability** → **EngineShop** → **WorkshopBand** (full-bleed photo proof) → **WhyUs** → **RightsSection** → **Testimonials** → **ProcessSteps** → **Faq** → **LocationHours** → **FinalCta**.
Service discovery lives in the **Services section**, not the hero.

### Homepage Services (approved 4 groups)
`components/sections/services-grid.tsx` + `config/services-config.ts` (`serviceGroups`). Four scannable groups, each with what it covers · **common reasons** (customer language) · the work · a link to `/services`:
1. **Diagnostics & Fault Finding**
2. **Engines**
3. **Gearboxes & Driveline**
4. **Servicing & Mechanical Repairs**
➡️ **Do NOT return the full service list to the hero.**

### Visual system (approved)
Premium automotive **navy** (`ink #0E2338`, `navy #12293F`) + warm **light** sections (`cream #F3EFE7`, `bluegrey #E4DFD5`) + amber CTA (`cta #C58A32`). Fonts: **Barlow Semi Condensed** (display), **IBM Plex Mono** (technical accent only), **Inter** (body). **Reduced uppercase** (12 display sub-headings de-uppercased today; mono eyebrow labels kept as the accent). Industrial/editorial workshop feel, real photography for warmth + proof. **Not a SaaS / card-heavy style.**

### Motion (approved)
- **Zero heavy animation library.** CSS + a hardened rAF only where required. Bbettr Website OS motion principles, **single easing `cubic-bezier(0.22,1,0.36,1)`**.
- Subtle scroll reveals (the no-JS-safe CSS `Reveal` + `reveal-manager`), subtle **image hover-zoom**, reduced-motion safe, no scroll hijacking, no gimmicky loops.
- The old **hero service-index rAF is removed.**

---

## Business facts (verified — safe to use)
- **Vision Motors**
- Phone: **012 335 0070** (must never wrap)
- Email: **vision@visionmotors.co.za**
- Hours: **Monday–Friday 07:30–17:00**; closed Saturdays, Sundays & public holidays
- **Two workshop locations, handled separately** (shared phone/email/hours — do NOT invent per-branch contact details):
  - **1059 Steve Biko Road**, Wonderboom South, Pretoria — Branch Manager **Christo Vorster** (title source: HTML, not hard-confirmed)
  - **1197 Steve Biko Road**, Wonderboom South, Pretoria, **0084** — Branch Manager **Jacques du Randt** (title **confirmed**)
- **Diagnostic / strip-and-assess policy** (kept prominent): initial diagnostics may not reveal internal damage; engines/gearboxes may need removal/opening, discussed first; strip-and-assess labour may apply; final repair needs customer approval; **declining the final repair does not erase already-authorised diagnostic/strip labour**.
- **Online booking is a request, NOT authorisation to dismantle** anything.

### Still awaiting client confirmation (do not publish until confirmed)
- RMI / MIWA / ARASA membership numbers/certificates (C2).
- Ford Ranger / Mazda BT-50 specialism scope — models, engines, in-house depth (C9/C21). No dedicated Ranger-specialist claim until confirmed.
- Towing: hours, radius, own-truck ownership (currently omitted).
- 1059 postcode (omitted, C20); 1059 manager title (HTML-sourced).
- Warranty: `warrantyInterimCopy` is the only warranty wording until written terms exist.
- Founding year, legal entity name — unconfirmed, not published.

---

## Fact-gates that MUST remain (never publish without proof)
- ⛔ "5-Star RMI" grading
- ⛔ RMI / MIWA / ARASA accreditation (no badges, no membership claim)
- ⛔ Fixed warranty duration without written terms
- ⛔ Insurer approvals / named insurers
- ⛔ Founding year / "X years established"
- ⛔ Legal entity name
- ⛔ Ford Ranger / BT-50 dedicated specialist claims
- ⛔ Bodywork / panel / insurance-repair claims
- ⛔ AdBlue / SCR / emissions-defeat work (deliberately excluded)
- ⛔ aggregateRating / review schema

---

## Current technical status (verified today)
- Production build **clean**; **TypeScript clean**; **lint clean**.
- Homepage first-load JS **~124 kB** (down from 127 — the rAF capability index was removed).
- **Schema intact** (2 JSON-LD blocks; two `AutoRepair` location nodes; FAQ; breadcrumbs). **No** rating/review schema.
- **Metadata intact** (title, description, OG image = regenerated workshop crop at `vision-motors-og-image.jpg`).
- **Booking flow intact** (`/book-a-vehicle-in` + `app/api/booking` + GHL webhook, server-only).
- **Conversion tracking intact** (`data-cta="call"` → `tel:+27123350070`; Book links; `lib/tracking.ts`).
- Responsive verified; **no horizontal overflow** at 375 / 1440; **phone never wraps**.
- Header nav: **Services · Our Work · About · Contact · Call · Book** (logo = Home).

---

## Important project lessons / traps (do not repeat)
1. **Never run `npm run build` while `next dev` is running** (stale `.next`). Stop dev / clear `.next` first.
2. **Verify CSS/stacking against a production build**, not just dev.
3. **The in-app browser pane shows stale / repaint-glitched frames** — the hero often screenshots as flat navy on the first capture. Verify suspicious visuals via **DOM state** (`getComputedStyle`, `img.complete`, z-indices) + a clean reload / production check before concluding it's a bug.
4. **Do not trust negative z-index hero stacking** — use the `z-0` background layer + `z-10` content pattern (see the hero fix above).
5. **Do not reintroduce the old image-free service-index hero** (the 01–08 rAF capability wall).
6. **Do not redesign approved sections** without a specific reason.
7. **Keep production protected** — no domain / DNS changes without explicit approval. `production` is a separate branch; promote by FF only.
8. The browser pane also **won't reliably scroll** to lower sections — verify below-the-fold content via DOM reads / curl rather than scroll-screenshots.

---

## Tomorrow
There is **NO urgent development task in flight.** The site is in a happy/approved, production-live state.

1. **Read this handover first.**
2. Inspect the live production URL: https://vision-motors-website.vercel.app
3. Continue only from the next instruction given.
4. **Do not re-audit the whole project.**
5. **Do not revisit already-approved decisions** unless explicitly asked.

---

## End-of-session confirmations
- ✅ `git status` clean.
- ✅ `main` = `production` = `3e94349`.
- ✅ Production serves `3e94349` (https://vision-motors-website.vercel.app, HTTP 200, Ready).
- ✅ `visionmotors.co.za` still not connected; DNS untouched.
- ✅ No further code changes made this session.

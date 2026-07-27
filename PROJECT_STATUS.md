# PROJECT STATUS — Vision Motors

**Client:** Vision Motors CC — independent vehicle workshop, Wonderboom South, Pretoria
**Scope delivered:** Homepage demo (production-quality build)
**Built with:** BBETTR Website OS v2.0.0-phase1
**Last updated:** 2026-07-27

---

## 0. Visual system v5 — "The Pretoria Workshop Manual" (2026-07-27)

The homepage was rescued from a generic corporate/SaaS look to an **industrial-editorial
"workshop manual"** system. Full brief + corrections: `~/.claude/plans/mellow-wishing-clarke.md`.

- **Tokens** (`tailwind.config.ts` / `config/theme-config.ts`): two darks — near-black
  charcoal `ink #15181C` (dominant) + deep `navy #0F2A44` (band) — with warm paper
  `cream #F3EFE7` / concrete `bluegrey #E4DFD5` neutrals. Baby-blue removed; blue demoted to a
  sparing steel accent; amber held for Call CTA + the active capability rule. Squared shape
  (radius 0.375/0.5rem, buttons `rounded-md`); hairlines + surface contrast instead of drop
  shadows.
- **Type**: Barlow Semi Condensed (display + numerals) · Inter (body) · IBM Plex Mono
  (technical labels). Self-hosted via `next/font`, limited weights, no external requests.
- **Composition**: cards replaced by ruled rows / numbered editorial blocks / image plates
  across hero, symptoms, services, why-us, process, testimonials, rights, location. Hero is
  photo-anchored (real technicians shot) + a capability index wall. Placeholders are now
  intentional **technical holding plates** (shot code, subject, crop, status) — never fake
  photos (Correction 5).
- **Fact correction**: hero item 8 softened to **"Ford Engine Work"**; engine-shop copy made
  model-agnostic. No Ranger/BT-50 specialist claim until C9/C21 confirmed (Correction 1).

### ⚠️ Follow-up: internal-page templates NOT yet redesigned
Scope was the **homepage** (Correction 6). Shared chrome (header, footer, page-hero, buttons,
image plates) is on the v5 system, and internal pages inherit the new palette/type, but their
BODIES still use the previous card compositions and have lost the old drop-shadows. A separate
visual-adaptation pass is needed for: `views/services-page.tsx`, `views/about-page.tsx`,
`views/booking-page.tsx`, `views/contact-page.tsx`, `views/our-work-page.tsx`,
`views/warranty-rights-page.tsx`, and `components/templates/service-page-template.tsx`.

---

## 1. What exists

A single-page, config-driven Next.js 14 homepage demo, built to production standards and
ready to expand into the full site. Route inventory: `/`, `/thank-you` (noindex),
`/api/booking`, `/sitemap.xml`, `/robots.txt`.

### Section order (views/homepage.tsx)

Header → Hero → Trust strip → **Symptom band** → Services (2 tiers) → Diagnostic capability →
Workshop proof → Why us → **Customer rights** → Testimonials → Process → FAQ → Final CTA +
booking form → Footer, plus a sticky mobile CTA bar.

The two bolded sections are the strategic differentiators from the approved plan: a symptom-led
entry point ahead of the service taxonomy, and a right-to-choose section that no competitor in
the Wonderboom / Pretoria North cluster occupies.

---

## 2. Gate 3 results (PIPELINE/gates.md)

### Build integrity — PASS
- `npm run build` — passes
- `npx tsc --noEmit` — clean
- `npm run lint` — clean (`next/core-web-vitals`)
- No broken internal links; every `#anchor` resolves (verified in-browser)
- No broken images; the single real photo loads, all other slots are deliberate placeholders

### Accessibility — PASS
- One `<h1>`; heading sequence H1→H2→H3 with no skipped levels (verified)
- All 7 form fields have associated `<label for>`; errors announced via `role="alert"` + `aria-live`
- Skip-to-content link present and functional (verified: slides into view on focus)
- FAQ accordion uses native buttons with `aria-expanded` / `aria-controls`
- Tap targets ≥ 44×44px everywhere **except** the inline "Bbettr Agency" credit link (15px),
  which falls under the WCAG 2.2 inline-text-link exception
- `prefers-reduced-motion` respected — reveals jump to end state, transitions disabled
- Focus-visible rings present on all interactive elements
- Contrast pairs verified at token time — see `config/theme-config.ts` (lowest ratio 5.6:1)

### Mobile — PASS
- QA at 360px, 390px, 768px — **zero horizontal overflow at all three**
- Phone number never wraps (`whitespace-nowrap` on every instance; verified at 360px)
- Sticky mobile CTA bar functional, 48px targets, `env(safe-area-inset-bottom)` honoured
- Footer has `pb-28` on mobile so the sticky bar never covers content
- `inputMode="tel"` / `"email"` set on the relevant fields

### SEO — PASS
- Title 57 chars, meta description 152 chars (both under gate limits)
- Canonical, OpenGraph (with a real 1200×630 image that matches its declared dimensions),
  Twitter card, `lang="en-ZA"`, `og:locale=en_ZA`
- `sitemap.ts` + `robots.ts` generated from `config/routes.ts`; `/thank-you` disallowed
- Descriptive, SEO-named image filename with full alt text
- 3 JSON-LD blocks: `AutoRepair`, `FAQPage` (8 questions), `WebSite`

### Performance — PASS
- First-load JS **120 kB** (budget < 150 kB). Framer Motion was removed — see §4.
- Hero image `priority`-loaded; every other image lazy
- Fonts self-hosted via `next/font`, `display: swap`, 2 families
- No third-party scripts

### Conversion paths — PASS (demo transport)
- Primary CTA above the fold; CTAs after trust, services, diagnostics, FAQ, and in the final section
- Every CTA routes to the same `#book` destination
- Symptom tiles pre-select the matching service and move focus to the form (verified)
- `tel:` links verified as `tel:+27123350070` throughout
- Booking form verified end-to-end: valid → 200, invalid → 422 with field-level errors
- **Demo mode active** — see §5

### Truth — PASS
Every claim on the page traces to the client's own published content or a verified primary
source. See §3 for the full list of what was deliberately withheld.

---

## 2a. Visual system (v2 revision — 2026-07-20)

**Feedback:** the first pass put every section on a near-black surface. Structurally sound, but
the page read as one continuous black slab — flat, dense, and slightly intimidating for an
ordinary vehicle owner with a broken car.

**Change:** the visual system only. **No layout, copy, section order or functionality changed.**

### What changed

1. **A warm light family was added** — `cream #F7F5F0`, `sand #F5F2EA`, `linen #EEEAE1`, with
   `stone #E3DFD5` for borders. Warm, never clinical white: warm neutrals sit naturally beside
   brass, whereas a cool white fights it and reads as a generic mechanic template.

2. **Blue was retired entirely.** The first pass carried a steel blue (`#4A7BA7`) as `primary`
   for icons and links. Against warm cream it read as a foreign colour. The palette is now
   black · warm neutral · brass — which is what "premium black and gold" actually means.
   Brass on light surfaces uses a darkened `accentInk #7E611B` so it passes contrast as text.

3. **Section rhythm** — nine alternating zones, section order untouched:

   | Zone | Sections | Surface |
   |---|---|---|
   | dark anchor | Hero · Trust strip | ink / charcoal |
   | light | Symptom band · Services | cream / linen |
   | dark anchor | Diagnostics | ink |
   | light | Workshop proof | cream |
   | dark | Why us | charcoal |
   | light | Your rights | sand |
   | dark anchor | Testimonials | ink |
   | light | Process · FAQ | cream / linen |
   | dark anchor | Final CTA · Footer | ink |

   Measured split: **53% light / 47% dark** by pixel height. Previously ~100% dark.

4. **Cards** — white with warm borders and a barely-there lift on light sections; `graphite
   #1E1E24` on dark sections, raised from `#16161A` so they actually separate from the ink
   behind them (previously cards and section were nearly the same value).

5. **Hero** — stays dark but opens up: a warm brass wash replaces the flat black field, the
   photograph sits on a lifted charcoal panel with a slight brightness lift rather than floating
   in black, and the section fades into charcoal so it eases into the trust strip.

6. **Final CTA form is now a white panel on the dark anchor** — the strongest focal point on the
   page, and form fields are simply easier to complete on light.

7. **Typography** — body line-height 1.6 → 1.7/1.75, section padding `py-20/28` → `py-24/32`,
   more space around headings and cards, and muted greys lifted so nothing sits near the
   contrast floor.

8. **Gold discipline held** — brass remains reserved for primary CTAs, small labels, key icons
   and active states. It is never used as a large background area.

### Verification

- **Contrast: 66 unique text/background combinations checked programmatically across every
  section. Zero failures. Lowest ratio 4.81:1** (WCAG AA needs 4.5:1 normal, 3:1 large).
  Six failures were found during the pass and fixed at source rather than waived:
  brass-on-linen eyebrows (4.20), hero reassurance line (4.47), dark image-slot brief (4.40),
  form consent microcopy (3.69), footer legal placeholders (2.61) and the footer copyright row
  (3.78).
- Zero horizontal overflow at 360 / 390 / 768px; phone number never wraps.
- One H1, no skipped heading levels, all images have alt text, no broken links or anchors.
- Schema unchanged: `AutoRepair` + `FAQPage` + `WebSite`, still no rating schema.
- Symptom → form prefill, form validation (200/422) and the demo success state all re-verified.
- First-load JS **121 kB** (was 120 kB; +1 kB of utility classes). Budget 150 kB.

---

## 3. CLIENT VERIFICATION QUEUE (blocking a truthful production launch)

Nothing below appears on the site. Each is held in config with a `TODO(client)` marker.

### 🔴 Blocking

| # | Item | Why it's blocked | Where it lives |
|---|---|---|---|
| 1 | **Canonical street address** | Four addresses in circulation: `1059 & 1197 Steve Biko Rd` (own site), `1059 … 0031` (Google), `1197 … Gezina` (MechanicBuddy), `867 Voortrekkers Rd … 0084` (3 directories). Street + suburb published; number omitted. | `site-config.ts` → `streetNumber`, `postalCode`, `geo` |
| 2 | **Opening hours** | Own homepage says "Open 5 Days a Week"; own `/services` page says "team works 24/7". Directories say 07:00–17:00 and 07:15–17:00. Saturday unknown. **No hours published anywhere on the site.** | `site-config.ts` → `hours` |
| 3 | **Founding year** | Site says "since 1992" in one place, "almost 30 years" in another (written ~2020). 1992 → 2026 is **34 years**. No third-party corroboration. | `site-config.ts` → `founded` |
| 4 | **MIWA / RMI membership + number** | Own `/services` page claims "RMI Approved Workshop"; sayellow.com independently lists MIWA membership. No number, no register check. **Badge hidden until confirmed.** | `site-config.ts` → `miwa` |
| 5 | **Warranty terms, in writing** | A "2 years unlimited km" figure appears *only inside a customer testimonial*. A separate 1-star Google review describes a warranty claim being refused. **Nothing published.** | `site-config.ts` → `warranty` |
| 6 | **Testimonial consent** | All four testimonials are the client's own currently-published content, quoted verbatim. That is a reasonable basis for a demo but is not documented per-person consent. | `reviews-config.ts` |

### 🟠 High priority

| # | Item | Note |
|---|---|---|
| 7 | **Google Business Profile website link** | The GBP carries **4.2★ from 71 reviews** but appears to have **no website link attached**. If true this is the single highest-traffic fix available — larger than every on-page change combined. |
| 8 | **Do the current forms work?** | All three forms on the live visionmotors.co.za have empty `action` and `method` attributes. They may have been silently dropping every enquiry for years. **Test urgently.** |
| 9 | **WhatsApp number** | `+27 61 642 5591` appears on MechanicBuddy but never on the client's own site. Component is built and wired, disabled behind `siteConfig.whatsapp.enabled`. |
| 10 | **Real photography** | Only ONE authentic photo exists. 6 documented slots await a shoot — see §6. |
| 11 | **Vector logo files** | Only a low-res white-on-dark PNG on a third-party CDN exists. Brand hex values are currently sampled from uniform embroidery, not a vector source. |
| 12 | **Towing details** | Hours, radius, own-truck-vs-partner all unknown. Omitted from the services list entirely. |
| 13 | **Defensible vehicle makes** | Ford specialism is claimed on the client's own site but unverified, so it is **not** on the page. DSG/mechatronic work is described by technology, not brand authorisation. |
| 14 | **Turnaround times** | Unverified, and a 1-star review cites a 6-week wait. The FAQ answers honestly without a number. |

### 🟡 Before launch
GHL webhook URL + lead-response owner · real Privacy Policy and Terms pages (the current site
links to third-party free-generator URLs, almost certainly not POPIA-compliant) · GA4/GTM IDs ·
decision on AdBlue/SCR removal (§7) · decision on Afrikaans content · domain, Search Console,
GBP and analytics access.

---

## 4. Deviations from the OS standard (each with a reason)

**1. `framer-motion` removed from the dependency list.**
`SYSTEM/02-TECH-STACK.md` pins it as standard. It was used and then removed for two reasons
found during QA:

- Under `<LazyMotion features={domAnimation}>` — needed to stay inside the 150 kB budget —
  `whileInView` never fires, so every reveal stayed stuck at its initial state and the page
  rendered blank below the hero.
- Shipping the full bundle instead fixed the reveals but pushed first-load JS to **155 kB**,
  over the hard budget.

Replaced by `components/ui/reveal.tsx` + `lib/reveal-manager.ts` (~120 lines of CSS transitions
and one shared scroll listener). Result: **155 kB → 120 kB**, reveals work, and less main-thread
work. Recommend the OS treat framer-motion as optional rather than pinned.

**2. Scroll reveal is a progressive enhancement, not JS-dependent.**
The conventional approach — server-render `opacity-0` and let JS reveal — fails two ways: with
JS disabled the whole page below the hero is permanently invisible, and a jump-scroll can skip
an element forever. Both were reproduced in QA (a jump to the page bottom left **29 of 48**
elements permanently hidden). The hidden state now lives in CSS behind a `.js-reveal` class
added by an inline script before first paint, and reveal is driven by a position check on
scroll rather than `IntersectionObserver` (which only fires on *change*, and so has a blind
spot for jump-scrolls). Worth promoting into the OS engine.

**3. No `aggregateRating` / `review` schema and no rating displayed.**
Deliberate, approved. 4.2★ from 71 reviews with 8 one-star entries — surfacing it in search
results would lead with the weakest asset.

---

## 5. Booking form — demo mode

`components/funnel/booking-form.tsx` → `POST /api/booking` → GHL inbound webhook.

`GHL_WEBHOOK_URL` is **server-only** (no `NEXT_PUBLIC_` prefix) so the endpoint never reaches
the browser bundle. While it is unset the route validates the submission, logs it server-side,
and returns `{ok: true, forwarded: false}`; the UI then shows a clearly labelled **DEMO MODE**
notice. No enquiry is silently lost.

**To go live:** set `GHL_WEBHOOK_URL` in Vercel, then set
`formConfig.redirectOnSuccess = true` so conversions land on `/thank-you`.

Payload keys are flat snake_case for easy GHL custom-field mapping.

---

## 6. Photoshoot brief (ranked by conversion value)

1. **Wide workshop interior** — bays occupied, real vehicles, good light (replaces the hero)
2. **Engine overhaul room** — a customer review already invites people to come and look at it,
   which makes this the strongest single proof asset available
3. **Technician on diagnostics** — screen visible
4. **Gearbox / DSG / mechatronic unit on the bench** — proves the specialist tier
5. **Team photo, named** — testimonials already name Jacques, Christo, Mitchell and Cyril, and
   no competitor puts real named faces on their site
6. **Exterior + signage** from Steve Biko Road
7. **Seat/carpet protection fitted** — makes the Carmen Keppler testimonial visible

Slots live in `config/images-config.ts`; each renders a labelled placeholder carrying its brief.
Swapping in a real photo is a one-line `src` change.

---

## 7. Judgement calls worth reviewing with the client

**AdBlue / SCR removal is omitted from the site.** The client's current `/services` page
advertises permanently disabling the emissions after-treatment system on Mercedes vehicles.
This is emissions-control defeat work: it affects the vehicle's compliance status and would sit
directly beneath a MIWA membership badge. Raised as a separate commercial conversation rather
than quietly published.

**Three claims currently attached to Vision Motors online are not theirs.** A web search returns
*"5 STAR RMI approved… Land Rover & Jaguar Specialists… one of the largest independent workshops
in Pretoria"* against Vision Motors. That text is **LR Auto Workshop's** directory listing — a
different Pretoria business. Vision Motors' own entry says only *"A Member of MIWA."* None of
the three appears on the site.

**Copy removed from the current site as unsupportable:** "We are the only car repair shop who
provide affordable prices for any car owner in Pretoria" (false on its face, CPA exposure) and
the unsourced "5 Star Reviews" graphic (ambiguous between MIWA grading and Google rating).

**The customer-rights section is carefully sourced.** All clause numbers come from the
Competition Commission's *Guidelines for Competition in the South African Automotive
Aftermarket* (effective 1 July 2021). Two errors common on competitor sites are deliberately
avoided: there is no "guideline R7" (the Guidelines run 1–17; the relevant provisions are in
Section 5), and CPA s56 is not a warranty-choice protection. The mandatory caveat — guidelines
are not binding, and ISP-caused damage can void specific provisions (5.4.8) — is rendered on the
page and must not be removed.

---

## 8. Next steps

1. Client verification pass on §3 items 1–6
2. Photoshoot (§6)
3. Vector logo → confirm brand tokens in `config/theme-config.ts`
4. GHL webhook → flip out of demo mode
5. Real legal pages
6. Then: expand to service pages using `config/routes.ts` → `futureRoutes`
   (`/engine-reconditioning`, `/gearbox-repairs`, `/dsg-mechatronic-repairs`, `/diagnostics`,
   `/your-warranty-rights`, `/about-us`, `/contact-us`)
7. Local SEO: fix NAP consistency across all directories once the canonical address is agreed;
   attach the website to the GBP

---

## 2b. Phase 2 — global system and primary pages (2026-07-22)

**Approved and delivered.** Global chrome, seven new pages, technical SEO systems, schema
generators, form architecture and conversion hooks.

### Brand: Direction C applied

The official logo is indigo `#290F74`. v2 ran brass-on-black, sampled from gold uniform
embroidery — real, but a uniform treatment rather than the primary mark.

v3 makes indigo primary and adds `indigoDeep #1A0A4A` as a **third dark anchor surface**
alongside ink and charcoal. That gives the brand large-area presence *without* putting gold on
large areas, which was the constraint. Brass remains reserved for CTAs, small labels, key icons
and active states.

Contrast verified at token time — white on indigoDeep 17.7:1, bone 14.1:1, brass 7.4:1,
indigo on cream 13.6:1. All recorded in `config/theme-config.ts`.

### CTA hierarchy inverted

Calling is now primary everywhere: header (the only brass element in the chrome), hero, sticky
mobile bar (brass fill, larger flex share), every page hero, every closing band. All call CTAs
route through one `CallButton` component so the number, aria-label, no-wrap rule and tracking
event cannot drift between placements.

### Routes

`/` · `/services` · `/about-us` · `/contact-us` · `/book-a-vehicle-in` · `/our-work` ·
`/your-warranty-rights` · `/privacy-policy` · `/website-terms-of-use` · `/thank-you` (noindex) ·
404 · `/api/booking`

Service pages are **not** built — Phase 3, each gated on its own brief plus a real photograph.
`config/routes.ts` carries them as `live: false`, so they render as described capabilities
rather than dead links and stay out of the sitemap until built.

### Homepage section review

Every section re-examined rather than inherited:

| Change | Reason |
|---|---|
| **`WorkshopProof` removed** | Four placeholder tiles carrying no information. Its job is now done by `EngineShop` (a real story) and `/our-work`. Component retained for when photography lands |
| **`EngineShop` added** | The strongest new proof available — a separate premises, carefully scoped to what is photographically evidenced |
| **`LocationHours` added** | Address and hours were confirmed in Phase 1 and were previously missing from the site entirely |

### Verification

| Check | Result |
|---|---|
| Build · TypeScript · lint | Clean |
| First-load JS | **125 kB max** across all templates (budget 150 kB) |
| Responsive | **49 route × width combinations** at 360/390/430/768/1024/1280/1440 — **zero overflow, zero phone wraps** |
| Contrast | **338 pairs across 10 routes — zero failures**, lowest 4.70:1 |
| Headings | One H1 per route, **zero skipped levels** across all routes |
| Alt text / labels | Zero images without alt; zero unlabelled form fields |
| Canonical | Present on every route |
| Metadata | All titles ≤60, all descriptions ≤155 |
| Schema | **No duplicates on any route.** No `aggregateRating` |
| Internal links | 13 unique — **zero broken** |
| Sitemap / robots | 9 indexable; `/thank-you` + `/api/` disallowed and noindexed |
| Booking API | 200 valid · 422 invalid · 200-silent honeypot · 400 malformed · 429 rate-limited |
| Forbidden claims | Automated scan across all routes — **zero hits** for accreditation, warranty figures, LR Auto contamination, or the excluded Ranger technical claims |

### Truth handling in Phase 2

- **Postcode reverted to unpublished.** I had set 0084 from onboarding in Phase 1; the GBP says
  0031. Two conflicting client-side sources is not confirmation, and a wrong postcode in schema
  hardens the wrong entity signal.
- **Accreditation slots built, nothing renders.** `siteConfig.accreditations` carries RMI, MIWA
  and ARASA. Setting `status: "verified"` renders the badge strip and starts emitting
  `hasCredential` automatically — no component changes.
- **Warranty:** one approved sentence sitewide, in `siteConfig.warrantyInterimCopy`. Never with
  a duration or mileage, never in schema.
- **Engine Shop:** described as a facility, never given an address, never presented as a second
  customer-facing branch.
- **867 Voortrekkersweg** appears only on Contact, labelled as a former address.

---

## 2c. Visual system v4 — blue-led palette (2026-07-22)

**Approved.** Site-wide colour re-skin from the v3 indigo + brass system to a blue-led one. No
content, sitemap or functionality changed — a token-level refactor.

### Palette

| Role | Token | Hex | Use |
|---|---|---|---|
| Primary dark | `navy` | `#0F2A44` | header, hero, footer, major dark surfaces |
| Card on dark | `navyCard` | `#1A3A5A` | cards on navy — visibly separated |
| Secondary | `blue` | `#1F4E79` | links, icons, labels, active states, secondary buttons |
| Accent | `blueMid` | `#3E7CB1` | hover, borders, focus rings, active highlight |
| Blue on dark | `blueSoft` | `#7FB0D9` | text/icons on navy |
| Light section | `bluegrey` | `#EAF1F7` | alternating light background |
| Warm light | `cream` | `#F7F5F0` | keeps the system approachable |
| Chip / border | `tint` / `line` | `#DCE8F3` / `#D3E0EC` | icon chips + borders on light |
| Text on light | `ink` / `inkSoft` / `inkMuted` | `#17212B` / `#33414E` / `#51616F` | |
| Text on dark | `mist` / `bone` | `#F4F7FA` / `#CBD8E4` | |
| **CTA** | `cta` / `ctaDark` | `#C58A32` / `#A97324` | **Call buttons + small priority ONLY** |

Measured balance: ~55% light neutral, ~30% navy/blue, deep-dark + amber the rest — on target.

### How it was done
Token values + names changed in `tailwind.config.ts`; a scripted, context-aware class migration
across 40 component/view files (compound tokens before base; `bg-brand-accent` solid → amber CTA
vs `/opacity` → blue chip). `globals.css`, `theme-config.ts`, `logo.tsx`, `layout.tsx`
theme-color, and the hero-showcase active state (amber → blue, since amber is CTA-only) updated
by hand. Zero old `brand-indigo*/accent*/graphite/charcoal/sand/linen/stone` tokens remain.

### Verification (clean production build)
- Build · TypeScript · lint clean. First-load JS **126 kB** (budget 150).
- **Contrast: 343 text/background pairs across 11 routes — zero failures**, lowest large-text
  3.89:1. Fixed en route: process-steps/404 numbers (blueSoft landed on light), several muted
  `bone`/`inkMuted` opacities that dipped below 4.5 on the lighter navy vs the old near-black.
- Amber CTA uses dark text (5.5:1); white-on-amber (2.98:1) deliberately never used.
- Responsive 360/390/430/768/1024/1280/1440 × 5 routes: zero overflow, phone never wraps.
- One H1 per route (all 10); navy `theme-color`; booking API 200/422 unchanged.
- Active service state signalled by blue rule + surface + number (not colour alone); focus rings
  blue (`blueMid`, ≥3:1 UI); reduced-motion gating intact.
- Logo not recoloured — placeholder lockup made navy-safe; RMI/MIWA/ARASA still gated off (C2).

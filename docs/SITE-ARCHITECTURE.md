# SITE ARCHITECTURE — Vision Motors production website

**Status:** PROPOSED — awaiting approval · **Updated:** 2026-07-22

---

## The positioning shift the new material forces

The approved demo positioned Vision Motors as a **specialist diagnostics / engine / gearbox
workshop**. That was right, and the company profile supports it. But the profile revealed
something the earlier research had no way of knowing:

> **There is a second, separate, purpose-built premises branded "ENGINE SHOP", carrying a wall
> sign that reads "RANGER & BT50".**

This changes the architecture, for three reasons.

**1. It is proof, not a claim.** Every competitor in the Wonderboom/Pretoria North cluster lists
"engine overhauls" as a bullet on a services page. Vision Motors has a *building* with
ENGINE SHOP painted on it. That is a categorically different kind of evidence, and it deserves
its own page rather than a line item.

**2. Ford Ranger + Mazda BT-50 is a genuinely narrow, genuinely valuable niche.** The two share
a platform and engine family, and the Ranger is one of South Africa's highest-volume vehicles.
A workshop advertising that specific pairing is claiming depth in one engine family — the kind
of narrow, provable expertise that both ranks and converts. An engine rebuild is also among the
highest-value jobs a workshop sells.

**3. It reframes the business as two complementary units**, which is a stronger and more honest
story than one generalist workshop:

| Unit | Premises | Sells |
|---|---|---|
| **Car Service & Repair Centre** | 1059 Steve Biko Road | Volume: servicing, brakes, clutches, diagnostics, general mechanical |
| **The Engine Shop** | Second premises *(number to confirm)* | Value: engine reconditioning, rebuilds, Ranger & BT-50 specialism |

**Recommended positioning line:**

> Vision Motors is a Pretoria workshop that services and repairs everyday vehicles — and runs
> its own engine shop for the work most workshops send away.

This keeps the approved specialist positioning, adds provable depth, and still welcomes the
customer who just needs a service. It resolves the brief's requirement to appeal to both
audiences without diluting either.

---

## Sitemap

```
/                                   Home — conversion hub
/about-us                           About: history, premises, team, approach
/services                           Services hub → all service pages
│
├── /vehicle-diagnostics-pretoria           Diagnostics & fault finding
├── /engine-reconditioning-pretoria         Engine rebuilds & reconditioning
│   └── /ford-ranger-mazda-bt50-engine-specialists   ★ flagship differentiator
├── /gearbox-repairs-pretoria               Automatic + manual gearbox
├── /dsg-mechatronic-repairs-pretoria       Dual-clutch & mechatronic units
├── /driveline-repairs-pretoria             Differentials, transfer cases, propshafts
├── /clutch-repairs-pretoria                Clutch replacement & repair
├── /brake-repairs-pretoria                 Brakes
└── /car-service-pretoria                   Servicing & maintenance
│
/our-work                           Gallery, categorised
/contact-us                         Contact, both premises, map, directions
/book-a-vehicle-in                  Booking (conversion page)
/thank-you                          Post-conversion (noindex)
/your-warranty-rights               Right-to-choose content (from the demo)
/privacy-policy                     Legal
/terms-of-service                   Legal
/404                                Not found
```

**14 indexable pages.** Deliberately fewer than the brief's candidate list — see below.

---

## Service-page decisions, with reasoning

The brief listed 13 candidate service URLs and asked me to challenge them rather than build
them all. **I recommend 8 service pages, not 13.** Four consolidations and one addition.

### ✅ Build these

| Page | Target intent | Why it earns a page | Proof required |
|---|---|---|---|
| `/vehicle-diagnostics-pretoria` | "why is my engine light on", "car diagnostics pretoria" | Highest-volume entry point; also the "another workshop couldn't find it" audience. Backed by the strongest testimonial the business owns (the Nissan-dealer quote). | Diagnostic bay photo, scanner in use |
| `/engine-reconditioning-pretoria` | "engine reconditioning / rebuild pretoria" | High-value job. Backed by a **separate physical premises**. | Engine Shop interior, stripped engine, machining |
| **`/ford-ranger-mazda-bt50-engine-specialists`** ★ | "ford ranger engine rebuild", "bt50 engine problems" | **The differentiator.** Narrow, high-value, low competition, and backed by literal signage. | Ranger/BT-50 engine on the bench |
| `/gearbox-repairs-pretoria` | "gearbox repairs pretoria", "automatic gearbox overhaul" | High-value, genuinely distinct from engine work. | Gearbox on bench |
| `/dsg-mechatronic-repairs-pretoria` | "dsg repair", "mechatronic unit repair" | Distinct technology, distinct search, very few local competitors. | Mechatronic unit photo |
| `/driveline-repairs-pretoria` | "diff repairs", "transfer case pretoria" | Bakkie/SUV/4x4 audience — commercially aligned with the Ranger niche. | Diff or transfer case on bench |
| `/clutch-repairs-pretoria` | "clutch replacement pretoria" | Common, well-defined, high intent. | Clutch assembly photo |
| `/brake-repairs-pretoria` | "brake repairs pretoria" | Volume + safety intent. | Brake detail photo |
| `/car-service-pretoria` | "car service pretoria", "service near me" | The volume entry point. Must exist or the site only speaks to specialists. | Vehicle on lift |

### ❌ Do NOT build these — consolidate instead

| Proposed | Decision | Reason |
|---|---|---|
| `/engine-repairs-pretoria` | **Merge** into `/engine-reconditioning-pretoria` | ~80% content overlap. Two pages competing for the same cluster means neither ranks. Reconditioning is the higher-value term; the page covers repairs as a section. |
| `/automatic-gearbox-repairs-pretoria` | **Merge** into `/gearbox-repairs-pretoria` | Same. Automatic vs manual differ in *detail*, not in customer question. Handle as two clearly-headed sections on one strong page. |
| `/manual-gearbox-repairs-pretoria` | **Merge** into `/gearbox-repairs-pretoria` | Same. |
| `/differential-repairs-pretoria` | **Merge** into `/driveline-repairs-pretoria` | Individually thin. Together they make one credible page for the bakkie/4x4 owner, who rarely knows whether the noise is the diff or the transfer case. |
| `/transfer-case-repairs-pretoria` | **Merge** into `/driveline-repairs-pretoria` | Same. |
| `/mechatronic-repairs-pretoria` | **Merge** into `/dsg-mechatronic-repairs-pretoria` | Mechatronic units are overwhelmingly searched alongside DSG. One page, both terms. |

**The consolidation principle:** a page earns indexing when it answers a question the others
cannot. Splitting one topic across three thin pages splits the ranking signal and gives Google
three weak candidates instead of one strong one. Every merge above is a case where the customer
question is identical and only the mechanical detail differs.

### 🚫 Location / suburb pages — NOT in this phase

The brief lists nine suburbs. **I recommend building none of them yet.**

Reasoning: suburb pages for a single-location workshop are the textbook doorway-page pattern.
Nine near-identical pages differing only in a place name is exactly what Google's guidelines
target, and the downside risk (a site-wide quality signal) outweighs the upside.

**Better sequence:** build the nine service pages first. Handle local relevance through
`AutoRepair` schema, `areaServed`, genuine location references in body copy, the Contact page,
and Google Business Profile alignment. Revisit location pages only if (a) service pages rank,
and (b) we can write something genuinely different per suburb — e.g. real directions, real
landmarks, real customers from that area.

⚠️ Service areas must be confirmed with the client before any `areaServed` data is published
(`FACT-VERIFICATION-REGISTER.md` C16).

---

## URL convention

**Flat, keyword-and-location URLs for service pages**
(`/engine-reconditioning-pretoria`), not nested (`/services/engine-reconditioning`).

Rationale: for a local service business the location modifier is genuinely part of the query,
and a flat structure keeps the click depth at 1 from the homepage. The trade-off is slightly
less tidy IA — accepted, because `/services` still acts as the hub and every service page links
back to it, so nothing is orphaned.

The `-pretoria` suffix applies **only** to service pages. Never on `/about-us`, `/contact-us`,
`/our-work` — those are brand/utility pages and the suffix would look manipulative.

Other conventions: lowercase, hyphenated, **no trailing slash**, no dates, no stop-words.
Consistency is enforced by `config/routes.ts`, which also generates the sitemap so navigation
and `sitemap.xml` can never drift.

---

## Page-by-page purpose

Every page states who it is for, the question it answers, the objection it removes, the proof
it needs, and the action that follows. Any section that cannot fill all five rows is cut.

### `/` — Home
**For:** all arrivals · **Answers:** "do these people fix my problem, and can I trust them?"
**Action:** call, or book.
The demo's structure is sound and stays. Changes required by the new material:
- **Primary CTA becomes "Call Us"** (client instruction) with "Book Your Car In" secondary
- Add the **two-premises story** — the Engine Shop is the strongest new proof available
- Add a **Ranger & BT-50 capability** block linking to the flagship page
- Publish **hours and full address** (now confirmed)
- Accreditation strip **only if** C2 clears

### `/about-us`
**For:** the researcher comparing three workshops · **Answers:** "who am I trusting with a
R60,000 repair?" · **Removes:** "this could be a fly-by-night operation"
**Needs:** history (C4), both premises, real team photos + roles (C7), accreditation (C2)
**Action:** call, or read a service page.
⚠️ **Currently the weakest page** — almost every input is outstanding. Cannot be written well
until C4/C7 clear. No "our mission and vision" filler will be used to cover the gap.

### `/services`
**For:** someone who doesn't know what they need · **Answers:** "what do you actually do?"
**Action:** into the right service page.
Grouped into the brief's customer-facing categories, not an alphabetical list.

### Service pages (×9)
**For:** high-intent search · **Answers:** "can you fix *this*, what does it involve, what will
it cost me in time and money?" · **Removes:** "they'll do work I didn't approve"
**Needs:** at least one real photograph of that work — **this is the binding constraint**
**Action:** call (primary), book (secondary).
Common template: symptom-led opening → what's actually involved → why us for this specific job →
proof → FAQ (page-specific) → CTA. Each page must carry ≥1 unique element (a real photo, a real
testimonial, a specific technical explanation) or it does not ship.

### `/our-work`
**For:** the sceptic · **Answers:** "is this a real workshop doing real work?"
**Action:** call.
Categorised per the brief. ⚠️ **Blocked on photography** — zero of the seven categories has a
single image.

### `/contact-us`
**For:** someone actively trying to phone or visit · **Answers:** "where are you, when are you
open, how do I get there?" · **Removes:** "I'll waste a trip"
**Needs:** both premises handled distinctly, map links, hours, parking/access
**Action:** call, or directions.
The **867 Voortrekkersweg** alias is worth a line here — long-standing customers still know it
by that name, and it prevents "is this the same place?" confusion.

### `/book-a-vehicle-in`
**For:** the visitor who won't phone · **Answers:** "what happens if I submit this?"
**Removes:** "am I committing to something?"
**Action:** submit.
Must state plainly that a submitted date is a **request**, confirmed by the workshop.

### `/your-warranty-rights`
Carried over from the demo. Uncontested ground — no competitor covers it. Sourced from the
Competition Commission guidelines, caveat intact.

---

## Conversion architecture

**Client instruction: the primary CTA is "Call Us".** This inverts the demo, which led with
booking. The change is correct for this business — most of these visitors have a broken car and
want a person, not a form.

| Tier | Action | Placement |
|---|---|---|
| **Primary** | **Call 012 335 0070** | Header (always visible) · hero · after every service block · sticky mobile bar · near hours/location · final CTA on every page |
| **Secondary** | Book Your Car In | Hero secondary · service pages · dedicated booking page |
| Tertiary | Directions / map | Contact, footer |
| Disabled | WhatsApp | Built, awaiting a confirmed number (C13) |

No other CTAs. The demo's single-destination discipline is retained.

**Tracked events:** `tel:` clicks · form starts · form submissions · booking-page views ·
map/directions clicks · `mailto:` clicks. Detail in `ANALYTICS-AND-CONVERSIONS.md` (Phase 5).

---

## Brand direction — a decision is needed

**The official logo is indigo `#290F74`, not gold.** The approved demo uses brass `#C9A24B` on
black, sampled from the gold embroidery on the team's black polo shirts — which is real, but is
a uniform treatment rather than the primary mark.

| Option | What it means | Trade-off |
|---|---|---|
| **A. Keep brass-led** | Ship as approved; treat indigo as a logo-only colour | Already approved and looks premium — but the site and the logo don't match |
| **B. Indigo-led** | Rebuild the palette around `#290F74` | Truest to the brand; indigo is distinctive in automotive — but discards approved work |
| **C. Indigo primary + brass accent** ⭐ | Indigo for brand surfaces and headers; brass stays the CTA/accent; warm neutrals unchanged | Keeps the approved rhythm and CTA discipline, reconciles the logo, adds a second brand colour with real provenance |

**Recommendation: C.** It costs the least approved work, makes the logo sit naturally in the
header instead of clashing, and both colours are genuinely the client's. Brass remains reserved
for CTAs so the conversion hierarchy is untouched.

**Your call — I have not changed the palette.** Whichever option you pick, **vector logo files
are still required** (C5): the supplied logo is a 606×251 raster with JPEG artefacts and cannot
render cleanly in a header at 2×.

---

## Build sequence and dependencies

| Phase | Scope | Blocked by |
|---|---|---|
| **2** | Global system, Home, About, Services hub, Contact, Booking, Thank-you, legal, schema | About needs C4/C7. Everything benefits from the photoshoot. |
| **3** | 9 service pages | **Each needs ≥1 real photograph.** Ranger/BT-50 page also needs C9. |
| **4** | Gallery, team, accreditation, FAQs | **Hard-blocked on the photoshoot.** Accreditation blocked on C2. |
| **5** | GHL webhook, analytics, Ads conversions, Search Console, redirects, domain migration | Needs IDs + webhook URL (C17) |

**The photoshoot is the critical path.** It gates Phase 3 and hard-blocks Phase 4. I recommend
booking it now, in parallel with Phase 2, rather than treating it as a Phase 4 task.

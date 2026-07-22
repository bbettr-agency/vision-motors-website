# SEO STRATEGY — Vision Motors

**Updated:** 2026-07-22 · **Status:** proposed, awaiting approval

---

## The structural problem in one sentence

> Vision Motors runs **one `/services` page carrying every service intent at once** — engine
> reconditioning, gearboxes, DSG, mechatronic, Ford, AdBlue — while the SERPs it wants are
> dominated by competitors with **dedicated pages per service**.

Observed across gearbox, differential, clutch, mechatronic and diagnostics searches: dedicated
service pages beat homepages. Homepages only win when the domain itself is the keyword.

That single finding justifies the entire service-page architecture.

**Second structural problem:** the current site has **three pages total** (`/`, `/services`,
`/cookie`), **no canonical tags**, **no structured data of any kind**, an H1 of "Your Questions
Answered", and `/index` serving a byte-identical duplicate of `/`.

---

## Three uncontested openings

### 1. DSG and mechatronic — 8 of 8 competitors do not offer it

Of the eight Pretoria workshops audited, **none** offer DSG or mechatronic repair. Vision Motors
already claims both on its own site. The only real contender is VagBox, a pure-play specialist
with no general servicing, no accreditation and no stated warranty.

Mechatronic was also the **weakest specialist SERP observed** — one competitor ranks with a page
targeting a specific part number (`/dq200/`), which shows how shallow the field is.

### 2. Ford Ranger — a large, local, out-of-warranty parc and no workshop competing

The evidence stacks up unusually well:

- The Ranger was the **top-selling used car in Gauteng in 2025** — 12,034 units, ~6% of all
  provincial used-car sales
- It is **built at Silverton, Pretoria** — the parc is concentrated on Vision Motors' doorstep
- Ford SA's warranty is 4yr/120,000 km, so the **entire 2011–2022 T6 parc is now out of
  warranty** — exactly the cars that need an independent
- Vision Motors' own site already says **"Ford Specialists on Duty"**, and the Engine Shop wall
  says **"RANGER & BT50"**
- **No Pretoria workshop ranks for Ranger engine work.** The incumbents are parts marketplaces
- The best-ranking incumbent page **contains a factual error** — it states the 3.2 P5AT has a wet
  timing belt. It is chain-driven. This SERP is winnable on accuracy alone

### 3. The informational layer is owned by parts sellers, not workshops

Engine Finder ranks for "Ranger engine problems", "overhaul cost", "DSG cost", "gearbox cost".
**No Pretoria workshop contests any of it.** This is the largest observable content gap, and it
feeds directly into high-value transactional pages.

---

## ⚠️ Corrections applied to the earlier plan

Research overturned three assumptions. These are recorded because publishing them would have
been wrong:

| Assumption | Reality | Consequence |
|---|---|---|
| Build a combined "Ranger & BT-50" page | The **BT-50 post-2020 is an Isuzu D-Max twin with zero Ford content**, and Mazda SA discontinued it in March 2024 after 69 units in 2023 | **Do not silo BT-50.** Fold 2011–2020 BT-50 into the Ranger pages — those years genuinely share the P4AT/P5AT engines. Any "BT-50 specialist" claim must be scoped to 2011–2020 or it is false for the current car |
| The 3.2 has a wet timing belt | **Chain-driven.** Ford sells a timing chain guide for it | Never publish. It is the error the incumbent makes — our advantage |
| The 3.2 has a balance-shaft problem | No credible source. An inline-five is inherently balanced | Never publish. Likely a misremembering of the oil pump drive chain issue |

Also excluded: a claimed "11,000-unit 2014 turbo recall" (uncorroborated); any Ranger
overheating/fire recall (**that is the Kuga story** — conflating them would be factually wrong
and legally risky); Ranger DPF/AdBlue prevalence in SA (genuinely unresolved, and the available
data comes from delete vendors with an incentive to overstate it).

---

## Keyword architecture

Ranked by **observed SERP competitiveness × commercial intent**.
⚠️ **No search-volume figures are used anywhere.** None were available, and none were invented.

### Tier 1 — build first

| Page | Primary target | SERP | Why first |
|---|---|---|---|
| `/driveline-repairs-pretoria` | differential repairs pretoria, transfer case | **LOW-MED — least defended SERP found.** One real dedicated page; a rival ranks with `/about` | Cheapest win available |
| `/engine-reconditioning-pretoria` | engine reconditioning / recon / overhaul pretoria | **LOW-MED** — a Wikipedia page and a Facebook Marketplace listing rank | Vision Motors' `/services` **already ranks here**. Backed by a separate building + ARASA |
| `/dsg-mechatronic-repairs-pretoria` | dsg repair, mechatronic unit repair | **LOW-MED** — weakest specialist SERP | 8 of 8 competitors absent |
| `/vehicle-diagnostics-pretoria` | vehicle diagnostics pretoria | **LOW-MED** — a directory holds 5 slots, Gumtree ranks | Funnel entry; backed by the Nissan-dealer testimonial |

### Tier 2

| Page | Primary target | SERP |
|---|---|---|
| `/ford-ranger-engine-specialists-pretoria` ★ | ford ranger engine recon, P5AT, oil pump | **MED** informational, near-empty transactional |
| `/gearbox-repairs-pretoria` | gearbox repairs pretoria (auto + manual) | **HIGH** — dedicated pages dominate |
| `/clutch-repairs-pretoria` | clutch repairs pretoria | **MED-HIGH** |
| `/car-service-pretoria` | car service pretoria | **HIGH** — the one homepage-led SERP |
| `/brake-repairs-pretoria` | brake repairs pretoria | **MED-HIGH** |

### Tier 3 — content, not service pages

Ranger engine problem guides. These target the informational layer the parts sellers own, and
link into Tier 1/2. Build **after** the service pages, not instead of them.

### 🚫 Explicitly not built

**"mechanic near me pretoria"** — ~80% of that SERP is directories (Kandua, MechanicBuddy,
Fixxr, Uptasker, Michanic ×4); only mobile mechanics rank as businesses. **A page cannot win
this.** It is a Google Business Profile and citation battle — which ties directly to the empty
website field in `GOOGLE-BUSINESS-PROFILE-AUDIT.md`.

**Suburb/location pages** — nine near-identical pages differing only in a place name is the
textbook doorway pattern. Revisit only once service pages rank and we can write something
genuinely different per suburb.

---

## How SA owners actually phrase it

Verified via Google autocomplete with `gl=za`. **This is ordering, not volume.** It matters
because copy written in British/US English will miss the query entirely:

- **"packed up" beats "blew"** — *"the oil pump packed up"* is the dominant SA idiom
- **"recon" is the transactional word**, not "rebuild" — *"engine overhaul price in south africa"*
- **"P5AT" and "HBS" are insider codes** SA sellers index on — almost certainly under-served
- **Symptom-first dominates** — *limp mode no codes*, *limp mode when towing*, *engine knock
  under load*, *ticking when idling*

This validates the demo's symptom-led band, and it should extend into service-page headings.

**Afrikaans:** Wonderboom South is 75.5% Afrikaans first-language (2011 census) and **no
competitor analysed serves Afrikaans content**. Genuine Phase 2+ opportunity — not in scope now.

---

## Technical SEO baseline

Every indexable page ships with:

- Unique `<title>` (≤60 chars) and meta description (≤155)
- **One H1**, logical H2/H3, no skipped levels
- **Canonical URL** — the current site has none anywhere
- OpenGraph + Twitter metadata
- Breadcrumbs + `BreadcrumbList` schema
- Descriptive alt text on every image — the current homepage has `alt=""` on all 17
- Semantic landmarks, crawlable navigation, no orphaned pages
- `sitemap.xml` and `robots.txt` generated from `config/routes.ts`
- **No trailing slash**, lowercase, hyphenated
- `/thank-you` noindex + disallowed

Schema detail in `SCHEMA-MAP.md`. Redirects in `REDIRECT-MAP.md`.

**Performance:** first-load JS budget 150 kB (currently 121 kB). All primary templates measured,
not just the homepage. For context, the current site ships a **401 kB uncompressed CSS file** on
`/services`.

---

## Trust and accreditation

**RMI / MIWA / ARASA.** The client's own `/services` page claims *"Our RMI Approved Workshop"*
verbatim and displays all three logos under "Clients and Industry Leaders Trust Us".

**ARASA is the find.** The Automotive Remanufacturers' Association is the reconditioning-specific
body, and **no competitor in the analysed set claims it.** For an engine-reconditioning
positioning it is more relevant than RMI or MIWA — and it is currently invisible.

⚠️ Still blocked: logos and a self-claim are not membership evidence. **No membership numbers, no
grading, no certificates.** Badges stay off the site until `FACT-VERIFICATION-REGISTER.md` C2
clears. Note that "5-star" is a **grading** claim — three competitors make it. Vision Motors
does **not**, and must not until a grading document exists.

**The warranty is potentially category-defining.** The Pretoria market standard is
**6 months / 10,000 km** — stated identically by three competitors. A Vision Motors testimonial
says *"they even gave me a two years unlimited kilometers warranty after they rebuilt the
motor."* If that is real policy rather than one customer's recollection, it beats the market by
a wide margin and belongs at the centre of the engine pages.

**It cannot be published until confirmed in writing** (C1). It currently appears nowhere as a
company offer, and a 1-star review describes a refused warranty claim.

**No `aggregateRating` schema, no star rating on site.** 4.2★ with 8 one-star reviews behind it.

---

## Measurement

Ranking, traffic and conversion tracking are Phase 5. Detail in
`ANALYTICS-AND-CONVERSIONS.md`. No tracking IDs are installed until real IDs are supplied.

Note: the current site runs **Facebook Pixel `353548153124201`** and a GTM reference, with no GA4
measurement ID found. Confirm what carries over.

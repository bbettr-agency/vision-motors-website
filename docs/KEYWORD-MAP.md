# KEYWORD MAP — Vision Motors

**Updated:** 2026-07-22

## ⚠️ Method — read before using this document

**There are no search-volume, keyword-difficulty or CPC figures in this document, because none
were available and none have been invented.**

Ranking is by **observed SERP competitiveness × commercial intent** — what actually appears in
Google results, what page types rank, and how contested the field is.

Two further honesty caveats on the underlying research:

- The search tooling is **US-geolocated**. City-modified queries ("…pretoria") returned coherent
  `.co.za` result sets and are reliable for *page type and competitor identity*. Un-modified
  queries broke — `mazda bt50 engine` returned zero SA results. **Exact rank positions are not
  reliable.**
- **No local pack or People-Also-Ask box was visible to the tool.** Any local-pack statement is
  inference, and the "question topics" below are ranking question-shaped pages found by explicit
  search, not scraped PAA.

---

## Page → keyword assignments

One page owns one cluster. No two pages target the same primary term — that is the
cannibalisation rule that drove the four consolidations in `SITE-ARCHITECTURE.md`.

### Tier 1 — build first

| Page | Primary | Secondary | SERP | Intent |
|---|---|---|---|---|
| `/driveline-repairs-pretoria` | differential repairs pretoria | transfer case repairs, propshaft repairs, diff overhaul, 4x4 driveline | **LOW-MED — least defended found.** One real dedicated page; a rival ranks with `/about` | Transactional, specialist |
| `/engine-reconditioning-pretoria` | engine reconditioning pretoria | engine recon, engine overhaul price south africa, engine rebuild, reconditioned engines for sale | **LOW-MED** — a Wikipedia page and a Facebook Marketplace listing rank | Transactional + heavy cost-research layer |
| `/dsg-mechatronic-repairs-pretoria` | dsg gearbox repair pretoria | mechatronic unit repair, dq200, dq250, dual clutch repair, limp mode | **LOW-MED — weakest specialist SERP.** A competitor ranks a page targeting one part number | Transactional, highly qualified |
| `/vehicle-diagnostics-pretoria` | vehicle diagnostics pretoria | car diagnostics, engine light on, fault finding, second opinion diagnosis | **LOW-MED** — a directory holds 5 slots; Gumtree ranks | Transactional, low ticket, funnel entry |

### Tier 2

| Page | Primary | Secondary | SERP | Intent |
|---|---|---|---|---|
| `/ford-ranger-engine-specialists-pretoria` ★ | ford ranger engine reconditioning | P5AT, 3.2 TDCi, 2.2 TDCi, oil pump failure, wet belt, EGR cooler, BT-50 engine *(2011–2020)* | **MED** informational / near-empty transactional | Informational → transactional |
| `/gearbox-repairs-pretoria` | gearbox repairs pretoria | automatic gearbox overhaul, manual gearbox repair, slipping gearbox, gearbox jerking | **HIGH** — dedicated pages dominate | Strongly transactional |
| `/clutch-repairs-pretoria` | clutch repairs pretoria | clutch replacement, clutch slipping, brake and clutch | **MED-HIGH** | Transactional |
| `/car-service-pretoria` | car service pretoria | car service near me, vehicle servicing, minor/major service | **HIGH** — the one homepage-led SERP | Transactional, broad |
| `/brake-repairs-pretoria` | brake repairs pretoria | brake pads, brake discs, brakes squealing | **MED-HIGH** | Transactional, safety |

### Tier 3 — content, not service pages

Targets the informational layer currently owned by **parts sellers, not workshops**. No Pretoria
workshop contests any of it. Build after the service pages; each links into Tier 1/2.

| Topic | Why | Links to |
|---|---|---|
| Ranger oil pump failure + the 10-minute drain rule | **Strongest single angle.** The vane pump does not self-prime; exceeding a ~10-minute oil drain window causes cavitation and catastrophic failure. Specific, citable, and almost nobody explains it | Ranger page |
| Ranger 2.0 EcoBlue wet belt | **Time-sensitive.** From H1 2026 Ford SA replaces the wet belt with a chain and drops the Bi-Turbo, citing durability. Reported SA dealer jobs R10,000–R17,987; resulting engine failure R100,000+ | Ranger page |
| EGR cooler → coolant loss → head gasket | Coolant loss with **no external leak**. Correct diagnosis needs pressure-testing cold **and** at 90 °C for 15 min — a cold-only test misses it | Ranger + diagnostics |
| "What does an engine overhaul cost in South Africa?" | Confirmed autocomplete; currently answered by parts marketplaces | Engine reconditioning |
| Limp mode — what it means, what causes it | Symptom-first, matches observed SA phrasing | Diagnostics + DSG |

### 🚫 Not targeted

| Term | Why |
|---|---|
| **mechanic near me pretoria** | ~80% directories (Kandua, MechanicBuddy, Fixxr, Uptasker, Michanic ×4). Only mobile mechanics rank as businesses. **A page cannot win this** — it is a GBP and citation battle |
| **mazda bt50 engine** (head term) | Unwinnable and commercially worthless. Wikipedia, Mazda AU, autoevolution, eBay. Modified tail is near-empty |
| Standalone BT-50 terms | Post-2020 BT-50 is an Isuzu twin; discontinued in SA March 2024 after 69 units in 2023. Fold 2011–2020 into Ranger |
| Suburb terms (Gezina, Rietfontein, Montana…) | Doorway-page risk. Revisit only after service pages rank |
| AdBlue / SCR / DPF removal | Excluded on ethical grounds (`FACT-VERIFICATION-REGISTER.md` E5). Note "dpf delete" outranks "dpf" — real demand, deliberately declined |

---

## South African phrasing — this changes the copy

Verified via Google autocomplete with `gl=za`. **Ordering, not volume.** Copy written in
British or US English misses these queries entirely.

| SA usage | Not | Where it matters |
|---|---|---|
| **"packed up"** — *"the oil pump packed up"* | "blew", "failed" | Ranger page, symptom sections |
| **"recon"** | "rebuild" | Engine page — recon is the transactional word |
| **"engine overhaul price"** | "engine rebuild cost" | Cost content |
| **"bakkie"** | "pickup", "ute" | Driveline, Ranger |
| **P5AT, P4AT, HBS** | — | Insider codes SA sellers index on. **Under-served** |
| Symptom-first: *limp mode no codes*, *limp mode when towing*, *engine knock under load*, *ticking when idling* | Service-name-first | Validates the demo's symptom band; extend into service-page headings |

**Afrikaans:** Wonderboom South is 75.5% Afrikaans first-language (2011 census), and **no
competitor analysed serves Afrikaans content.** Real Phase 2+ opportunity; not in scope now.

---

## Titles and descriptions

Rules: title ≤60 chars, description ≤155, one H1 per page, primary keyword early in both,
location in service-page titles, no keyword stuffing.

| Page | Draft `<title>` |
|---|---|
| `/` | Specialist Car & Gearbox Repairs Pretoria \| Vision Motors |
| `/about-us` | About Vision Motors \| Independent Workshop, Pretoria |
| `/services` | Car Repair & Servicing Pretoria \| Vision Motors |
| `/vehicle-diagnostics-pretoria` | Vehicle Diagnostics Pretoria \| Fault Finding \| Vision Motors |
| `/engine-reconditioning-pretoria` | Engine Reconditioning Pretoria \| Vision Motors Engine Shop |
| `/ford-ranger-engine-specialists-pretoria` | Ford Ranger Engine Specialists Pretoria \| Vision Motors |
| `/gearbox-repairs-pretoria` | Gearbox Repairs Pretoria \| Auto & Manual \| Vision Motors |
| `/dsg-mechatronic-repairs-pretoria` | DSG & Mechatronic Repairs Pretoria \| Vision Motors |
| `/driveline-repairs-pretoria` | Diff & Transfer Case Repairs Pretoria \| Vision Motors |
| `/clutch-repairs-pretoria` | Clutch Repairs Pretoria \| Vision Motors |
| `/brake-repairs-pretoria` | Brake Repairs Pretoria \| Vision Motors |
| `/car-service-pretoria` | Car Service Pretoria \| All Makes & Models \| Vision Motors |
| `/our-work` | Our Work \| Vision Motors Workshop, Pretoria |
| `/contact-us` | Contact Vision Motors \| Wonderboom South, Pretoria |
| `/book-a-vehicle-in` | Book Your Car In \| Vision Motors Pretoria |

---

## Internal linking

- **Hub-and-spoke:** `/services` links to all nine; each links back
- **Cluster:** `/engine-reconditioning-pretoria` ↔ `/ford-ranger-engine-specialists-pretoria`
- **Symptom cross-links:** diagnostics ↔ every service page — it is the funnel entry
- **Related-service block** at the foot of each service page (2–3 genuinely related, not all nine)
- **Tier 3 content** links up into its Tier 1/2 parent
- **No orphans.** `config/routes.ts` generates both nav and sitemap, so nothing can be unlinked

# FACT VERIFICATION REGISTER — Vision Motors

**Updated:** 2026-07-22 · **Governs:** every factual claim eligible to appear on the website

## Status definitions

| Status | Meaning | May appear on site? |
|---|---|---|
| **CONFIRMED** | Verified at a primary source I inspected directly | ✅ Yes |
| **CLIENT-PROVIDED** | Supplied by the client in onboarding; not independently checked | ✅ Yes, unless contradicted |
| **INDEPENDENTLY VERIFIED** | Corroborated by a source outside the client | ✅ Yes |
| **INFERRED** | My reasoning from evidence. Not fact. | ❌ No — confirm first |
| **AWAITING CONFIRMATION** | Requested, not yet supplied | ❌ No |
| **EXCLUDED** | Deliberately not published, with a reason | ❌ Never |

---

## A. CONFIRMED — safe to publish

| # | Fact | Value | Source |
|---|---|---|---|
| A1 | Phone | `012 335 0070` | Own signage (photographed, ×2 boards) + own website + every directory |
| A2 | Canonical address | **1059 Steve Biko Road, Wonderboom South, Pretoria** | Own signage, read at 12× magnification; kerb painted "1059" |
| A3 | Historical address alias | `867 Voortrekkersweg` = same premises | Printed on the same signboard as 1059 Steve Biko Rd |
| A4 | Business descriptor | "Car Service & Repair Centre" | Own signage, verbatim |
| A5 | Signage strapline | "Mechanical care for your car" | Own signage, verbatim |
| A6 | A second premises exists | Branded **"ENGINE SHOP"** | Photographed frontage, company profile |
| A7 | Engine Shop specialism | **"RANGER & BT50"** wall signage | Photographed frontage |
| A8 | Official logo colour | Indigo `#290F74` | Sampled from supplied logo file |
| A9 | Gold-on-black uniform | Real | Two team portraits + existing hero photo |
| A10 | Makes displayed on signage | Ford, Mazda, Toyota, Mercedes-Benz, BMW, Opel, Nissan, Isuzu, Fiat, Chevrolet | Own signage |
| A11 | Parts brands displayed | Payen, Bosch, KYB, Champion, LUK, Ferodo, AE | Own signage |
| A12 | Branded company bakkies | 2 × white Ford Ranger, liveried | Premises photo |
| A13 | Facebook page | facebook.com/carserviceinpretoria | Linked from own website |

---

## B. CLIENT-PROVIDED — publish, but flagged

| # | Fact | Value | Note |
|---|---|---|---|
| B1 | Opening hours | **Mon–Fri 07:30–17:00. Closed Sat, Sun, public holidays.** | ✅ Resolves the "5 days a week" vs "24/7" contradiction on the current live site. Publish + schema. |
| B2 | Email | **vision@visionmotors.co.za** | ⚠️ **CONFLICT** — the current live site and the demo config use `service@visionmotors.co.za`. Onboarding is newer, so it wins, but **confirm which is monitored**. Sending enquiries to a dead mailbox is a silent lead leak. |
| B3 | Team member | Christo Vorster | Corroborated by name in a published customer testimonial |
| B4 | Team member | Jacques du Randt | Corroborated as "Jacques" in a published customer testimonial |
| B5 | Second address | 1197 Steve Biko Road, Wonderboom South, 0084 | Listed in onboarding. See D2 — its *role* is inferred, not confirmed |
| B6 | Postal code | 0084 | Onboarding gives 0084 for both addresses; resolves the 0031/0084 directory conflict |
| B7 | Primary CTA | "Call Us" | Client instruction. Overrides the demo's booking-first hierarchy |
| B8 | Selling point | Quality workmanship | Theme, not copy — must be made specific |
| B9 | Selling point | Competitive pricing | ⚠️ Use with care. Never "cheapest". See E4 |
| B10 | Selling point | Warranty on work completed | ⚠️ Existence confirmed; **terms are not**. See C1 |
| B11 | Selling point | Friendly service / good customer service | Theme. Best expressed through real testimonials |
| B12 | "Our RMI Approved Workshop" | Client's own `/services` page, verbatim | ⚠️ A **self-claim**, not evidence. Still needs a membership number (C2) |
| B13 | "Ford Specialists on Duty" | Client's own `/services` page, verbatim | Client claims it themselves. Combined with the "RANGER & BT50" signage this is now well-supported — but scope it (C9) |
| B14 | **ARASA** logo displayed | Client's own `/services` page, alt text "Asara" (typo for ARASA) | **The Automotive Remanufacturers' Association — the reconditioning-specific body. No competitor in the audited set claims it.** Membership still unevidenced (C2) |
| B15 | "Family owned and operated" | Client's own `/services` page, verbatim | Human, credible, unclaimed by competitors |

---

## C. AWAITING CONFIRMATION — blocking

| # | Item | Why it matters | Blocking? |
|---|---|---|---|
| C1 | **Warranty terms in writing** — duration, mileage, coverage, exclusions, parts vs labour, whether it varies by repair type | 🔥 **Now the highest-value open item.** The Pretoria market standard is **6 months / 10,000 km**, stated identically by three competitors. A Vision Motors testimonial says *"they even gave me a two years unlimited kilometers warranty after they rebuilt the motor."* If that is real policy it beats the market by a wide margin and belongs at the centre of the engine pages. But it appears **nowhere as a company offer**, and a 1-star review describes a refused claim. Interim: *"Ask our team about the warranty applicable to your repair."* Never in schema or FAQ until confirmed. | 🔴 **YES** |
| C2 | **RMI / MIWA membership certificate + number** | Only logo *images* were supplied. A logo file is not evidence of membership. Needs certificate or number to check against the RMI register. | 🔴 **YES** |
| C3 | **Role of 1197 Steve Biko Road** | Two premises must be modelled correctly in schema, on Contact, and in the GBP. Getting this wrong sends customers to the wrong building. | 🔴 **YES** |
| C4 | **Founding year** | Own site says "since 1992" in one place and "almost 30 years" in another. If 1992 is right the business is 34 years old — unmatched locally and the strongest available trust signal. Currently unusable. | 🔴 **YES** |
| C5 | **Vector logo (SVG/AI/EPS)** | Supplied logo is a 606×251 raster with JPEG artefacts. Not usable in a header at 2×. | 🔴 **YES** |
| C6 | **Legal entity name** | Signage shows a line ending `(Pty) Ltd t/a` but it is illegible. The demo currently guesses "Vision Motors CC" in schema — **that guess must be removed.** | 🟠 High |
| C7 | **Higher-resolution team photos + roles** | Supplied portraits are ~180×275 — avatar-size only. Three portraits, two names. | 🟠 High |
| C8 | **Workshop / engine / gearbox / diagnostic photography** | Zero supplied. See `IMAGE-INVENTORY.md`. | 🟠 High |
| C9 | **Ford Ranger / Mazda BT-50 specialism — what exactly?** | The wall says "RANGER & BT50". Is it engine reconditioning only, or full mechanical? Any Ford training or parts accreditation? This is the strongest differentiator found; it needs precise scoping before a page is built on it. | 🟠 High |
| C10 | **Towing** | Own site claims it. Hours, radius, own truck vs partner all unknown. | 🟡 Medium |
| C11 | **Turnaround times per job type** | Unverified; a 1-star review cites a 6-week wait. | 🟡 Medium |
| C12 | **Testimonial consent** | Four testimonials are the client's own published content, but no per-person consent is documented. | 🟡 Medium |
| C13 | **WhatsApp number** | `+27 61 642 5591` appears on MechanicBuddy but never on the client's own site. Component built and wired, disabled. | 🟡 Medium |
| C14 | **GBP ownership + website link** | The profile carries ~71 reviews and appears to have no website link attached. Likely the highest-traffic single fix available. | 🟡 Medium |
| C15 | **Do the current live forms work?** | All three forms on visionmotors.co.za have empty `action`/`method`. They may have been dropping enquiries for years. | 🟡 Medium |
| C16 | **Realistic service areas** | Needed before any location content. Do not assume the suburb list in the brief. | 🟡 Medium |
| C17 | **GHL webhook URL, GA4/GTM/Ads IDs** | Needed for Phase 5 only. | 🟢 Later |
| C18 | **Legal pages** | Current site links to third-party generator URLs, almost certainly not POPIA-compliant. | 🟢 Later |
| C19 | **Opening hours — three-way conflict** | Client onboarding says **07:30**; the Google Business Profile says **07:15**; MechanicBuddy says **07:00**. The site now publishes 07:30 (most recent direct instruction) but the **GBP must be corrected to match**. | 🟠 High |
| C20 | **Postcode — 0031 vs 0084** | Onboarding says 0084 (now published). The GBP says **0031**. The client's own site publishes neither, which is the root cause of the NAP fragmentation. | 🟠 High |
| C21 | **Do they actually work on Ford Ranger / BT-50 engines, and to what depth?** | The entire strongest SEO opportunity rests on this. The Engine Shop wall says "RANGER & BT50" and the site says "Ford Specialists on Duty", but **the words Ranger, Mazda, BT-50 and "Engine Shop" appear nowhere on the current website.** Scope it precisely: engine only, or full mechanical? Which years? | 🔴 **YES** — gates the flagship page |
| C22 | **Ranger DPF / AdBlue work** | Genuinely unresolved whether SA-spec Rangers carry DPF/SCR. Available prevalence data comes almost entirely from delete vendors with a commercial incentive to overstate it. Verify from job cards. Separate from the E5 emissions-removal exclusion. | 🟡 Medium |
| C23 | **Read the 8 one-star Google reviews** | 8 of 71 (11%). The cheapest available source of truth about where this business disappoints customers. Warranty and turnaround copy must not contradict them. | 🟠 High |

---

## D. INFERRED — must not be published as fact

| # | Inference | Basis | Confidence |
|---|---|---|---|
| D1 | 867 Voortrekkersweg is the pre-2012 address of the same premises | Both printed on one signboard; Voortrekker Rd → Steve Biko Rd renaming is documented | High |
| D2 | The "Engine Shop" premises **is** 1197 Steve Biko Road | Two premises, two onboarding addresses. Photo shows no number. | Medium — **confirm (C3)** |
| D3 | Engine reconditioning happens at the Engine Shop, general service at 1059 | Building names and the "RANGER & BT50" sign | Medium |
| D4 | The three portraits include Christo Vorster and Jacques du Randt | Onboarding names two; three portraits supplied | Medium — cannot match faces |
| D5 | The circular badge on the signage is an RMI or MIWA emblem | Shape and placement | **Low — illegible. Do not use.** |
| D6 | The Ferrari shield on the signage is decorative | No independent's realistic Ferrari capability | High — **do not repeat the claim** |

---

## E. EXCLUDED — never publish, with reasons

| # | Item | Reason |
|---|---|---|
| E1 | "5 STAR RMI approved" · "Land Rover & Jaguar Specialists" · "largest independent workshop in Pretoria" | **This text belongs to LR Auto Workshop, a different Pretoria business.** It surfaces against Vision Motors in search results. Never use it. |
| E2 | Google star rating / review count / `aggregateRating` schema | 4.2★ from ~71 reviews with 8 one-star entries. Leading with the number surfaces the weakest asset. Revisit after a review-generation programme. |
| E3 | Any specific warranty term | See C1 |
| E4 | "Cheapest" / "most affordable" / "the only affordable workshop in Pretoria" | The last is verbatim from the current live site. False on its face and a CPA/ASA exposure. "Competitive pricing" may be expressed as fair, explained pricing — never as a superlative. |
| E5 | AdBlue / SCR / emissions-system removal | Advertised on the client's current `/services` page. Emissions-control defeat work: affects the vehicle's compliance status and would sit directly beneath a MIWA badge. Raised as a separate commercial conversation. |
| E6 | "Vision Motors CC" as legal entity | Unsupported guess in the current demo schema. Signage suggests `(Pty) Ltd`. **Remove until C6 resolves.** |
| E7 | Ferrari capability | See D6 |
| E8 | Manufacturer approval / authorised-dealer wording for any make | Displaying a brand logo on signage ≠ authorisation. Describe as "makes we work on" only. |
| E9 | Staff qualifications, MERSETA/trade-test claims, years of service | Nothing supplied. |
| E10 | Workshop capacity, bay count, vehicles-per-week figures | Nothing supplied. |
| E11 | "5-star" RMI/MIWA grading | A **grading** claim, distinct from membership. Three competitors make it; **Vision Motors does not and never has.** Not without a grading document. |
| E12 | "The 3.2 Ranger has a wet timing belt" | **False — the P5AT is chain-driven.** This is the error the top-ranking incumbent page makes. Never repeat it; correcting it is our advantage. |
| E13 | "The 3.2 has a balance-shaft problem" | No credible source. An inline-five is inherently balanced. Likely a misremembering of the oil pump drive chain issue. |
| E14 | Any Ranger overheating / fire recall | **That is the Ford Kuga story** (56 fires, R35m NCC fine, one death). Conflating them would be factually wrong and legally risky. |
| E15 | "11,000-unit 2014 Ranger turbo recall" | Uncorroborated at any primary source. |
| E16 | A standalone Mazda BT-50 specialist page or any current-model BT-50 claim | The **post-2020 BT-50 is an Isuzu D-Max twin with zero Ford content**, and Mazda SA discontinued it in March 2024 after 69 units in 2023. Any BT-50 claim must be scoped to **2011–2020**, which genuinely shares the Ranger P4AT/P5AT engines. |
| E17 | "Two years unlimited km warranty" | Currently **a customer's recollection inside a testimonial**, not a company offer. Removed from the published testimonial. Blocked pending C1. |

---

## Change log

| Date | Change |
|---|---|
| 2026-07-22 | Address conflict **resolved** (A2/A3) — own signage. Was blocking. |
| 2026-07-22 | Opening hours **resolved** (B1) — client onboarding. Was blocking. |
| 2026-07-22 | Postal code **resolved** (B6) — 0084. |
| 2026-07-22 | Second premises "Engine Shop" + Ranger/BT50 specialism **discovered** (A6/A7). |
| 2026-07-22 | Brand mark found to be indigo `#290F74`, not gold (A8). Escalated as a client decision. |
| 2026-07-22 | RMI/MIWA remain **unverified** — logo files only, no certificate (C2). |
| 2026-07-22 | New conflict logged: email `vision@` vs `service@` (B2). |
| 2026-07-22 | Research: **ARASA** membership logo found on client's own site (B14) — reconditioning-specific body, unclaimed by any competitor. |
| 2026-07-22 | Research: client self-claims **"Our RMI Approved Workshop"** and **"Ford Specialists on Duty"** verbatim (B12/B13). |
| 2026-07-22 | Research: Pretoria warranty market standard is **6mo/10,000km**; the testimonial's 2yr/unlimited would be category-defining. C1 escalated. |
| 2026-07-22 | Research: three-way hours conflict (C19) and postcode conflict (C20) logged against the GBP. |
| 2026-07-22 | Research: **contamination confirmed** — "5 STAR RMI"/"Land Rover & Jaguar"/"largest independent" verified as **LR Auto Workshop's**, absent from visionmotors.co.za. E1 upheld. |
| 2026-07-22 | Research: three factual errors about Ranger engines excluded before they could be published (E12–E16). |

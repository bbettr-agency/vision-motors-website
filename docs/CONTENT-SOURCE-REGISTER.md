# CONTENT SOURCE REGISTER — Vision Motors

**Purpose:** every factual statement on the website traces back to a row in this table.
If a sentence cannot be traced here, it does not ship.

**Updated:** 2026-07-22

---

## Source hierarchy

When sources conflict, the higher tier wins:

1. **Client onboarding (2026-07-22)** — most recent direct instruction
2. **Photographic evidence** from the company profile — the business's own signage
3. **Client's own live website** — published by them, but often stale or self-contradictory
4. **Independent corroboration** — directories, Competition Commission, census
5. **Inference** — never publishes

---

## Register

| ID | Content | Source | Tier | Status | Where used |
|---|---|---|---|---|---|
| S01 | Phone `012 335 0070` | Own signage (photo) + own site + all directories | 2 | CONFIRMED | Global |
| S02 | Address `1059 Steve Biko Road, Wonderboom South, Pretoria, 0084` | Own signage (photo, read at 12×) + onboarding postal code | 2 | CONFIRMED | Global, schema, Contact |
| S03 | Former address `867 Voortrekkersweg` | Same signboard | 2 | CONFIRMED | Contact only, as historical alias |
| S04 | Hours `Mon–Fri 07:30–17:00, closed Sat/Sun/public holidays` | Onboarding | 1 | CLIENT-PROVIDED | Footer, Contact, schema |
| S05 | Email `vision@visionmotors.co.za` | Onboarding | 1 | CLIENT-PROVIDED ⚠️ conflicts with `service@` on live site | Contact, footer, forms |
| S06 | "Car Service & Repair Centre" | Own signage | 2 | CONFIRMED | About, Home |
| S07 | "Mechanical care for your car" | Own signage | 2 | CONFIRMED | Optional strapline |
| S08 | Second premises branded "ENGINE SHOP" | Photo of frontage | 2 | CONFIRMED (existence) | Home, About, Engine pages |
| S09 | "RANGER & BT50" wall signage | Photo of frontage | 2 | CONFIRMED | Flagship service page |
| S10 | Engine Shop street number | — | 5 | ⛔ INFERRED — do not publish | — |
| S11 | Makes worked on (Ford, Mazda, Toyota, Mercedes-Benz, BMW, Opel, Nissan, Isuzu, Fiat, Chevrolet) | Own signage | 2 | CONFIRMED — as "makes we work on" only, never "approved" | Services, About |
| S12 | Parts brands (Payen, Bosch, KYB, Champion, LUK, Ferodo, AE) | Own signage | 2 | CONFIRMED | Optional parts-quality section |
| S13 | Team: Christo Vorster | Onboarding + named in a published testimonial | 1 | CLIENT-PROVIDED — **no title** | About |
| S14 | Team: Jacques du Randt | Onboarding + "Jacques" in a published testimonial | 1 | CLIENT-PROVIDED — **no title** | About |
| S15 | Services: diagnostics, engine recon, gearbox (auto+manual), DSG, mechatronic, diffs, transfer cases, propshafts, servicing, brakes, belts, oil, fuel-system | Client's own live site, verbatim | 3 | CONFIRMED as claimed | Service pages |
| S16 | Testimonial — Andries Groenewald (Afrikaans, Nissan dealer) | Client's live site, verbatim | 3 | PUBLISHED ⚠️ consent undocumented (C12) | Diagnostics page, Home |
| S17 | Testimonial — Hendrik Mostert (engine overhaul room) | Client's live site, verbatim | 3 | PUBLISHED ⚠️ warranty sentence **removed** | Engine pages, Home |
| S18 | Testimonial — Carmen Keppler (seat/carpet protection) | Client's live site, verbatim | 3 | PUBLISHED | Home, About |
| S19 | Testimonial — Willa Burger (Cyril, breakdown help) | Client's live site, verbatim | 3 | PUBLISHED | About |
| S20 | Right-to-choose content + clause numbers | Competition Commission, *Guidelines for Competition in the SA Automotive Aftermarket*, eff. 1 July 2021 | 4 | INDEPENDENTLY VERIFIED | `/your-warranty-rights` |
| S21 | Wonderboom South is 75.5% Afrikaans first-language | 2011 Census via Wikipedia | 4 | INDEPENDENTLY VERIFIED | Internal strategy only |
| S22 | Steve Biko Rd renamed from Voortrekker Rd (2012) | Public record | 4 | INDEPENDENTLY VERIFIED | Explains S03 |
| S23 | Selling points: quality workmanship, competitive pricing, warranty, friendly service | Onboarding | 1 | CLIENT-PROVIDED — **themes, not copy** | To be made specific |
| S24 | Logo colour `#290F74` | Supplied logo file | 1 | CONFIRMED | Brand tokens |
| S25 | RMI / MIWA logo image files | Supplied .docx | 1 | ⛔ **File only — membership NOT evidenced** (C2) | Blocked |
| S26 | Warranty terms | — | — | ⛔ **NONE EXIST.** Interim: *"Ask our team about the warranty applicable to your repair."* | Blocked |
| S27 | Founding year | — | — | ⛔ Site self-contradicts (1992 vs "almost 30 years") | Blocked |

---

## Copy rules

**Voice** — experienced, straightforward, knowledgeable, honest, practical, friendly, South
African. A customer should finish a page thinking *"these people know what they're doing, and
they'll explain it to me properly."*

**Do**
- Translate technical topics into plain language, then give the technical term
- Lead with the customer's symptom, not the workshop's service taxonomy
- Use real testimonials as proof for specific claims, not as decoration
- Say what a job actually involves — that is what builds confidence

**Never**
- Superlatives without evidence — "best", "cheapest", "leading", "number one"
- "Premium" as a self-description
- Corporate filler — "solutions", "cutting-edge", "passion for quality"
- Fear-based selling
- Talking down to the reader
- Any claim not traceable to a row above

**Handling the client's selling-point themes (S23)** — these arrive as generic phrases and must
be converted into specific, checkable statements:

| Theme | ❌ Not this | ✅ This |
|---|---|---|
| Quality workmanship | "We pride ourselves on quality workmanship" | "Engine and gearbox work is done in our own engine shop, not sent out." |
| Competitive pricing | "The most affordable in Pretoria" | "You get a quote before any work starts, and it's explained in plain language." |
| Warranty | "2-year warranty" *(unverified)* | "Ask our team about the warranty applicable to your repair." |
| Friendly / good service | "Friendly service guaranteed" | Carmen Keppler's testimonial about seat and carpet protection — shown, not claimed |

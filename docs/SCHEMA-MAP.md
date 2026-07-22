# SCHEMA MAP — Vision Motors

**Updated:** 2026-07-22

**Baseline:** the current live site emits **zero structured data** — `application/ld+json`
returns no hits on any page. For a local business with a physical premises, a phone number and
71 Google reviews, this is the largest untapped technical opportunity on the project.

---

## Governing rules

1. **Unverified fields are omitted, never guessed.** A wrong address in schema is worse than no
   address, because Google treats it as an authoritative entity signal.
   `lib/schema.ts` is gated on `FACT-VERIFICATION-REGISTER.md` statuses — confirming a fact in
   config automatically adds it to the structured data. Nothing else needs changing.
2. **No `aggregateRating`. No `Review` schema.** 4.2★ with 8 one-star reviews behind it.
3. **`FAQPage` only for FAQs visibly rendered on that page**, generated from the same config
   array so the two can never drift.
4. **One entity per page.** No duplicate `LocalBusiness` blocks across templates.
5. **No warranty in schema** until terms are confirmed in writing (C1).

---

## Global — every page

### `AutoRepair` (a `LocalBusiness` subtype — strictly better than the generic type)

| Property | Value | Status |
|---|---|---|
| `name` | Vision Motors | ✅ |
| `legalName` | — | ⛔ **Omitted.** "Vision Motors CC" was an unsupported guess and has been removed. Signage shows `(Pty) Ltd t/a` but is illegible (C6) |
| `telephone` | +27123350070 | ✅ |
| `email` | vision@visionmotors.co.za | ✅ client-provided |
| `address.streetAddress` | **1059 Steve Biko Road** | ✅ **Now emitted** — resolved from own signage |
| `address.postalCode` | **0084** | ✅ **Now emitted** ⚠️ GBP says 0031 — reconcile |
| `address.addressLocality` | Wonderboom South | ✅ |
| `openingHoursSpecification` | **Mon–Fri 07:30–17:00** | ✅ **Now emitted** as proper `opens`/`closes` |
| `geo` | — | ⛔ Pending. Use the GBP pin `-25.6970517, 28.1989165` so schema and GBP agree — do not geocode |
| `foundingDate` | — | ⛔ Blocked (C4) — site says 1992 *and* "almost 30 years" |
| `hasCredential` | — | ⛔ Blocked (C2) — RMI/MIWA/ARASA are logo files only |
| `areaServed` | Pretoria, Gauteng | ⚠️ Broad only until service areas confirmed (C16) |
| `knowsAbout` | Diagnostics, engine reconditioning, gearbox, DSG, mechatronic, driveline, servicing | ✅ |
| `hasOfferCatalog` | All services | ✅ |
| `sameAs` | Facebook | ✅. Add the GBP URL once confirmed |
| `aggregateRating` / `review` | — | ⛔ **Never** |

### `WebSite`
`name`, `url`. No `SearchAction` — there is no site search.

### `Organization`
⚠️ **Not emitted.** For a single-location local business `AutoRepair` already carries the entity.
Adding `Organization` alongside it risks a duplicate-entity signal. Revisit only if the Engine
Shop becomes a separately-listed premises.

---

## Per-template

| Template | Schema | Notes |
|---|---|---|
| `/` | `AutoRepair` + `WebSite` + `FAQPage` | FAQ from visible accordion only |
| `/about-us` | `BreadcrumbList` | `Person` for team **only once roles are confirmed** (C7) — a `Person` with no `jobTitle` adds nothing |
| `/services` | `BreadcrumbList` + `ItemList` of services | Each item links to its page |
| Service pages ×9 | `Service` + `BreadcrumbList` (+ `FAQPage` where an FAQ is visible) | See below |
| `/our-work` | `BreadcrumbList` + `ImageGallery` | ⛔ Blocked on photography |
| `/contact-us` | `BreadcrumbList` + `ContactPage` | ⚠️ Second premises — see below |
| `/book-a-vehicle-in` | `BreadcrumbList` | No `Reservation` — a booking is a *request*, not a confirmed reservation. Claiming otherwise would be false |
| `/thank-you` | none | noindex |
| `/your-warranty-rights` | `BreadcrumbList` + `Article` | ⚠️ **No `FAQPage`** — the content is regulatory guidance with a mandatory caveat; FAQ rich results would strip the caveat and change the meaning |
| `/404` | none | |

### `Service` shape

```
@type: Service
serviceType: "Engine reconditioning"
provider: { @id → the AutoRepair entity }   ← reference, never redeclare
areaServed: Pretoria, Gauteng
description: page-specific
```

**No `offers` / `priceRange`** — no pricing is published or confirmed.

---

## The two-premises question

There are two premises: `1059 Steve Biko Road` (Car Service & Repair Centre) and a second
building branded **"ENGINE SHOP"**.

**Current handling: one `AutoRepair` entity at 1059 only.** This is deliberate.

The Engine Shop's street number is **inferred, not confirmed** (C3). Publishing an inferred
address in structured data is exactly the failure mode rule 1 exists to prevent — Google would
treat it as authoritative and it could send customers to the wrong building.

**Once C3 resolves**, two options:

| If the Engine Shop is… | Schema |
|---|---|
| A customer-facing premises with its own address and staff | Second `AutoRepair` entity, own `@id`, categorised for engine rebuilding, linked via `department` or as a separate GBP-aligned entity |
| Back-of-house, not customer-facing | Keep one entity. Mention the facility in copy without giving it an address |

---

## Validation

Before every deploy:
1. Google Rich Results Test — every template
2. Schema.org validator — no errors, warnings triaged
3. Confirm no duplicate `@type` across a page
4. Confirm no `aggregateRating` anywhere
5. Confirm FAQ schema matches visible FAQs exactly
6. Confirm no field is emitted for anything still `unverified` in the fact register

---

## Change log

| Date | Change |
|---|---|
| 2026-07-22 | `streetAddress` + `postalCode` now emitted — address resolved from own signage |
| 2026-07-22 | `openingHoursSpecification` now emitted with proper `opens`/`closes` |
| 2026-07-22 | `legalName` **removed** — unsupported guess |

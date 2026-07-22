# GOOGLE BUSINESS PROFILE AUDIT — Vision Motors

**Updated:** 2026-07-22
**⚠️ No changes have been made to the GBP.** This is a recommendation document only.

---

## Evidence quality — read this before acting

The GBP could **not** be read directly. Google Search returns a redirect interstitial to
automated fetches, Maps returns an empty JS shell, and OpenStreetMap/Nominatim returned nothing.

What we have is a **structured Google-derived mirror**: the raw JSON payload behind
`pretoria.co.za`, a directory page labelled "Powered by Google". It carries a five-bucket star
histogram and Google-specific accessibility attributes, which indicates a Google Places API
pull.

**Confidence: medium-high on the values, but this is second-hand.** Every row below must be
confirmed in the GBP dashboard before anything is changed.

---

## Observed profile data (via Google-fed mirror)

| Field | Value | vs. confirmed truth |
|---|---|---|
| Name | `Vision Motors` | ✅ Matches |
| Address | `1059 Steve Biko Rd, Wonderboom South, Pretoria, **0031**` | ⚠️ **Postcode wrong** — should be 0084 |
| Coordinates | `-25.6970517, 28.1989165` | ✅ Use these for schema `geo` |
| Phone | `+27123350070` | ✅ Matches |
| **Website** | **`null` — "Website not available"** | 🔴 **EMPTY** |
| Hours | Mon–Fri **07:15**–17:00, Sat/Sun null | ⚠️ Client says **07:30**–17:00 |
| Rating | **4.20** | — |
| Reviews | **71** — 5★:46 · 4★:11 · 3★:3 · 2★:3 · **1★:8** | — |
| Attributes | Wheelchair accessible entrance + parking | ✅ Keep |
| Booking link | None | 🟠 Opportunity |

---

## 🔴 Finding 1 — The website field appears to be empty

**This is the single highest-value fix available to this business, and it is free.**

A Google-fed listing rendering "Website not available" is strong evidence the field is unset.
If confirmed, it means the **highest-authority citation Vision Motors owns — a profile with 71
reviews — is not linking to their website at all.**

Every other item in this document is worth less than this one.

**Action:** confirm profile ownership, then attach `https://visionmotors.co.za`.
**Do not do this until the new site is live**, so the link lands on the new build rather than
the GroovePages site.

---

## 🔴 Finding 2 — Postcode conflict: 0031 vs 0084

GBP says `0031`. Client onboarding says `0084`. The client's own website publishes **neither** —
which is the root cause of the whole NAP mess: nothing authoritative anchors the correct code.

**Action:** confirm with the client, then align GBP + site + every directory. The new site now
publishes `0084` in schema, so the GBP should follow.

---

## 🟠 Finding 3 — Hours conflict: three different answers

| Source | Hours |
|---|---|
| **Client onboarding (2026-07-22)** | **Mon–Fri 07:30–17:00**, closed Sat/Sun/public holidays |
| Google Business Profile | Mon–Fri 07:15–17:00 |
| MechanicBuddy | Mon–Fri 07:00–17:00 |
| Client's own site | "Open 5 Days a Week" **and** "Our team works 24/7" |

The onboarding value is the most recent direct instruction and is what the new site publishes.

**Action:** confirm 07:30 is correct, then update the GBP. Also add **public holiday hours** as
closed — Google surfaces these prominently and an unmarked public holiday costs wasted trips.

---

## 🟠 Finding 4 — The two-premises problem

There are two premises: `1059 Steve Biko Road` (Car Service & Repair Centre) and a second
building branded **"ENGINE SHOP"**. The GBP has one listing.

**Do not create a second listing yet.** Two listings for one business is a duplicate-listing
risk if handled badly, and a genuine opportunity if handled correctly. It hinges on facts we do
not have: is the Engine Shop separately staffed, separately signed, and does it serve walk-in
customers directly?

**Action:** resolve `FACT-VERIFICATION-REGISTER.md` C3 first. If the Engine Shop is a
customer-facing premises with its own address and staff, a second listing categorised as
`Engine rebuilding service` is legitimate and would open a second local-pack entry in an
uncontested category. If it is a back-of-house facility, keep one listing.

---

## 🟠 Finding 5 — Categories

The mirror shows only the directory's own taxonomy (`Auto Repair & Mechanics`), not Google's.
The actual primary/secondary split could not be read.

**Recommended, based on the competitor and SERP evidence:**

| Slot | Category | Why |
|---|---|---|
| **Primary** | `Auto repair shop` | Broadest local-pack coverage for service/repair intent |
| Secondary | `Engine rebuilding service` | **No competitor in the analysed set claims this.** Directly matches the Engine Shop |
| Secondary | `Transmission shop` | Backs the gearbox/DSG/mechatronic capability — 8 of 8 competitors do not offer DSG |
| Secondary | `Diesel engine repair service` | Matches the Ranger/BT-50 diesel focus |
| Secondary | `Car repair and maintenance service` | Volume servicing |

**Action:** audit the live categories against this list.

---

## 🟠 Finding 6 — The 1-star reviews are unread

**8 of 71 reviews are 1-star (11%).** One is already known to describe a refused warranty claim
after a R40k reconditioned engine, with a six-week wait.

**Read all eight before any positioning or warranty copy is finalised.** They are the cheapest
available source of truth about where this business actually disappoints customers, and the
warranty page in particular must not contradict them.

**Action:** owner to export and review. Respond professionally to all eight — unanswered
1-stars are visible to every prospect and are a bigger conversion drag than the average rating.

---

## 🟡 Finding 7 — No appointment link

**Action:** once the new site is live, add `https://visionmotors.co.za/book-a-vehicle-in` as the
appointment URL. This surfaces a "Book online" button directly in the profile.

---

## 🟡 Finding 8 — Photos

Photo count could not be read. Given that only **one publishable photograph exists** company-wide
(`IMAGE-INVENTORY.md`), the GBP gallery is almost certainly thin.

**Action:** after the photoshoot, upload the full set. GBP photos materially affect local-pack
engagement, and this costs nothing beyond the shoot already required for the website.

---

## Recommended action order

| # | Action | Owner | When |
|---|---|---|---|
| 1 | Confirm the profile is claimed and accessible | Client | **Now** |
| 2 | Read and respond to the 8 one-star reviews | Client | **Now** |
| 3 | Confirm postcode (0031 vs 0084) and hours (07:15 vs 07:30) | Client | **Now** |
| 4 | Resolve the Engine Shop address + role (C3) | Client | **Now** |
| 5 | **Attach the website URL** | Agency | **At launch** |
| 6 | Correct postcode + hours + public holidays | Agency | At launch |
| 7 | Set the category stack | Agency | At launch |
| 8 | Add the booking link | Agency | At launch |
| 9 | Upload photography | Agency | After shoot |
| 10 | Decide on a second listing for the Engine Shop | Both | After C3 |
| 11 | Start a review-generation programme | Both | Post-launch |

---

## Note on the aggregate rating

4.2★ from 71 reviews stays **off the website**, and `aggregateRating` schema is still not
emitted. Eight one-star reviews sit behind that average; leading with the number surfaces the
weakest asset. Revisit after the review-generation programme moves the average.

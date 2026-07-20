# CLIENT VERIFICATION CHECKLIST — Vision Motors

**Purpose:** the single list to work through with the client. Everything below is currently
**withheld from the live site** or rendered as neutral copy, because it could not be verified.

**Rule in force (Website OS):** claims marked unverified may not appear in site copy. Each item
maps to a `TODO(client)` marker in `config/`.

**Status key:** ☐ outstanding · ☑ confirmed · ⊘ decided not to publish

---

## 🔴 BLOCKING — the site cannot go to production truthfully without these

### ☐ 1. Canonical street address

**Four different addresses are in circulation:**

| Source | Address |
|---|---|
| Client's own website | `1059 **&** 1197 Steve Biko Road, Wonderboom South` (lists *both*) |
| Google Business Profile | `1059 Steve Biko Rd, Wonderboom South, **0031**` |
| MechanicBuddy | `1197 Steve Biko Road, **Gezina**` |
| yep.co.za / Hellopeter / africanadvice | `**867 Voortrekkers Rd**, Wonderboom South, **0084**` |

Steve Biko Road was renamed from Voortrekker Road in 2012, but 867 / 1059 / 1197 do not
reconcile as a renaming artefact.

**Ask the client:** Is it one premises or two? What is at 1059 vs 1197? Is 867 Voortrekkers a
former address whose citations need cleaning up? What is the correct postal code — 0031 or 0084?

**Currently on the site:** street and suburb only (`Steve Biko Road, Wonderboom South, Pretoria`).
No street number. No `streetAddress`, `postalCode` or `geo` in the JSON-LD.
**Config:** `config/site-config.ts` → `streetNumber`, `postalCode`, `geo`, `addressStatus`

> **Impact:** fragmented NAP citations actively suppress local-pack ranking. This is not
> cosmetic — it is probably costing real map-pack visibility today.

---

### ☐ 2. Opening hours (including Saturday)

The client's **own two pages contradict each other**: the homepage says "Open 5 Days a Week",
the `/services` page says "Our team works 24/7". Directories say 07:00–17:00 and 07:15–17:00
Mon–Fri. Saturday is unknown everywhere.

**Currently on the site:** no hours published anywhere — not in the footer, not in the final CTA,
not in schema. Publishing wrong hours costs a customer a wasted trip.
**Config:** `config/site-config.ts` → `hours`

---

### ☐ 3. Founding year

Site says "since 1992" in one place and "almost 30 years" in another (written ~2020, never
updated). **If 1992 is correct the business is 34 years old in 2026** — unmatched in the
competitive set, where the nearest claim is "10+ years".

**Currently on the site:** no year, no years-in-business number, no `foundingDate` in schema.
**Config:** `config/site-config.ts` → `founded`

> This is one of the strongest trust signals available and it is currently unusable.

---

### ☐ 4. MIWA / RMI membership status and number

The client's `/services` page claims "Our RMI Approved Workshop"; sayellow.com independently
lists Vision Motors as "A Member of the Motor Industry Workshop Association (MIWA)". That is
corroboration, not confirmation — no membership number, no check against the register.

**Ask the client:** Is membership current? What is the membership number? Is there a MIWA star
grading?

**Currently on the site:** no accreditation badge at all.
**Config:** `config/site-config.ts` → `miwa`

> ❌ **Never use:** "5 STAR RMI approved", "Land Rover & Jaguar Specialists", or "one of the
> largest independent workshops in Pretoria". A web search returns that text against Vision
> Motors, but it belongs to **LR Auto Workshop** — a different Pretoria business.

---

### ☐ 5. Warranty terms, in writing

A "two years unlimited kilometres" figure appears **only inside a customer testimonial**, never
as company policy. Separately, a 1-star Google review describes a warranty claim being refused
(R40k reconditioned engine, 6-week wait, charged R35k for what the customer understood to be a
warranty repair).

**Ask the client:** What is actually offered? On what work? For how long? With what exclusions?
Is it in writing anywhere the customer sees?

**Currently on the site:** nothing. The sentence about the warranty was also **removed from the
Hendrik Mostert testimonial** rather than republished.
**Config:** `config/site-config.ts` → `warranty` · `config/reviews-config.ts`

> This is objection #3 in the brief and it is currently unanswerable on the page. It is the
> single biggest content gap.

---

### ☐ 6. Testimonial publishing consent

All four testimonials are the client's own currently-published content, quoted verbatim and
attributed exactly as they publish them. That is a reasonable basis for a demo — but it is not
documented consent from each named individual.

**Ask the client:** Are all four genuine and accurately attributed? Is each person happy to
remain credited by name?
**Config:** `config/reviews-config.ts`

---

## 🟠 HIGH PRIORITY

### ☐ 7. Google Business Profile — is the website attached?

The GBP carries **4.2★ from 71 reviews** but appears to have **no website link**.

**If confirmed, this is the highest-traffic fix available to this business — larger than every
on-page change combined.** Also: who owns the listing, and does anyone respond to the 8 one-star
reviews?

### ☐ 8. Do the current live forms actually deliver leads?

All three forms on the existing visionmotors.co.za have **empty `action` and `method`
attributes**. They may have been silently dropping every enquiry for years. **Test today.**

### ☐ 9. WhatsApp number

`+27 61 642 5591` appears on MechanicBuddy but never on the client's own site. In the SA market
WhatsApp is a primary conversion channel.
**Currently:** component built and wired, disabled behind `siteConfig.whatsapp.enabled = false`.

### ☐ 10. Real photography

**Only ONE authentic Vision Motors photograph exists.** See `IMAGE-REQUIREMENTS.md` for the
ranked shot list.

### ☐ 11. Vector logo files (SVG / AI / EPS)

Only a low-resolution white-on-dark PNG on a third-party CDN exists. Brand hex values are
currently sampled from the uniform embroidery in the one real photo, not from a vector source.
**Config:** `config/theme-config.ts`

### ☐ 12. Towing — hours, radius, own truck or partner?

Client's homepage claims towing ("our team tow multiple cars a week"). Nothing else is known.
**Currently:** omitted from the services list entirely.

### ☐ 13. Which vehicle makes can they genuinely defend?

Ford specialism is claimed on their own site but unverified. DSG/mechatronic work is described
on the site **by technology, not brand authorisation** — which is factual and safe.
**Ask:** are there makes they would genuinely stand behind as a specialism?

### ☐ 14. Realistic turnaround ranges per job type

Unverified, and a 1-star review cites a 6-week wait. The FAQ currently answers honestly without
a number ("we'd rather give you a realistic timeframe once we've seen the vehicle").

### ☐ 15. Lead response process

Who responds to a booking enquiry, how fast, and via what channel? Not captured. Response speed
is the largest single determinant of local service-lead conversion.

---

## 🟡 BEFORE LAUNCH

- ☐ **GHL webhook URL** → set `GHL_WEBHOOK_URL` in Vercel, then flip
  `formConfig.redirectOnSuccess = true` so conversions land on `/thank-you`
- ☐ **Real Privacy Policy and Terms pages.** The current site links to third-party
  free-generator URLs (`termsofservicegenerator.net`, `privacypolicygenerator.info`) that are
  off-domain, may expire, and are almost certainly not POPIA-compliant for a business collecting
  names and phone numbers
- ☐ **GA4 / GTM IDs.** The current site runs GTM-5NWWB86, a Facebook Pixel and Matomo — confirm
  which to carry over
- ☐ **Decision: AdBlue / SCR removal** (see below)
- ☐ **Decision: Afrikaans content** — 75.5% of Wonderboom South is Afrikaans first-language and
  no competitor analysed serves it
- ☐ **Access:** domain/DNS · Search Console · Google Business Profile · analytics

---

## ⊘ DECIDED — not to be published (with reasons)

| Item | Decision | Reason |
|---|---|---|
| **AdBlue / SCR removal** | Omitted from the site | Emissions-control defeat work. Affects the vehicle's compliance status and would sit directly beneath a MIWA badge. Raised as a separate commercial conversation. |
| **Google rating (4.2★ / 71)** | Not displayed; no `aggregateRating` or `review` schema | 8 of 71 reviews are one-star. Surfacing the rating in search results leads with the weakest asset. Revisit after a review-generation programme. |
| **"5 Star Reviews" graphic** | Removed | Unsourced. Ambiguous between a MIWA star grading and a Google rating. |
| **"We are the only car repair shop who provide affordable prices… in Pretoria"** | Removed | False on its face; CPA/ASA advertising-claim exposure. |
| **"5 STAR RMI" / "Land Rover & Jaguar Specialists" / "largest independent workshop"** | Never used | Traced to source: this is **LR Auto Workshop's** listing copy, not Vision Motors'. |

---

## How to clear an item

1. Get the confirmation in writing from the client.
2. Update the corresponding field in `config/` and change its status from `unverified`.
3. Remove the `TODO(client)` comment.
4. Re-run `npm run build && npx tsc --noEmit && npm run lint`.
5. Tick it here and note the date and source.

The schema builders in `lib/schema.ts` are already gated on these statuses — confirming a fact
in config automatically adds it to the structured data. Nothing else needs changing.

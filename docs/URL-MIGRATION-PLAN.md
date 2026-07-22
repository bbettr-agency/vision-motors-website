# URL MIGRATION PLAN — Vision Motors

**Updated:** 2026-07-22 · Companion to `REDIRECT-MAP.md`

---

## Summary

Migrating a **3-page GrooveApps site** to a 14-page Next.js build on the same domain.
Low risk. The value is in what gets fixed on the way across.

| | Current | New |
|---|---|---|
| Indexable pages | 3 | 14 |
| Canonical tags | **none** | every page |
| Structured data | **none** | AutoRepair + Service + FAQ + Breadcrumb |
| Duplicate content | `/index` = `/` | resolved by 301 |
| Images with alt text | 0 of 17 on `/` | all |
| Uncompressed CSS | 273 KB `/`, **401 KB** `/services` | ~121 kB first-load JS total |
| Forms | 3, `action=""`, name+email only | server-validated, full vehicle capture |
| Legal pages | off-domain generator links | on-domain |

---

## Phasing

**The new site is already live at `vision-motors-website.vercel.app`.** Migration means pointing
`visionmotors.co.za` at it — not a rebuild.

| Step | Action | Gate |
|---|---|---|
| 1 | Export Search Console: top pages, queries, backlinks, index coverage | **Before** any DNS change |
| 2 | Fresh crawl of the live site to confirm the redirect list is still accurate | |
| 3 | Client sign-off on removing AdBlue/SCR content | 🔴 Only real content loss |
| 4 | Deploy final build to Vercel preview; full QA | |
| 5 | Configure 301s (see `REDIRECT-MAP.md`) | Single hop, no HTTP downgrade |
| 6 | DNS cutover; verify SSL and canonical host | Low-traffic window |
| 7 | Submit new sitemap; keep old live 48h | |
| 8 | **Attach the website URL to the Google Business Profile** | Highest-value single action |
| 9 | Correct GBP postcode, hours, categories; add booking link | |
| 10 | Update directory citations to the canonical NAP | See below |
| 11 | Monitor 404s, index coverage and rankings for 30 days | |

---

## NAP clean-up

One canonical string everywhere:

```
Vision Motors
1059 Steve Biko Road, Wonderboom South, Pretoria, 0084
012 335 0070
Mon–Fri 07:30–17:00
```

| Source | Problem | Action |
|---|---|---|
| Google Business Profile | Postcode 0031; hours 07:15; **no website** | Correct all three |
| MechanicBuddy | Name "Vision Motors CC"; **1197**; suburb **Gezina**; hours 07:00; extra mobile number | Claim and correct |
| africanadvice | **867 Voortrekkers Rd**, 0084 | Update to 1059 Steve Biko |
| Hellopeter | Old address in URL slug; unclaimed, TrustIndex 0 | Claim and correct |
| sayellow | HTTP 500, unreadable; title says "Pretoria North" | Retry, then correct |
| yep.co.za | Listing **dead** (301 → 404) | Re-list |
| autorepairdirectory | Paywalled | Assess whether worth it |

**Root cause:** the client's own site publishes **no postal code at all** and writes the address
as `"1059 & 1197 Steve Biko Road"` — not machine-parseable. Google picked 1059, MechanicBuddy
picked 1197. Publishing one canonical, structured address is the fix, and it is already live in
the new build's schema.

---

## Rollback

Vercel keeps immutable deployments; DNS can revert to the GroovePages site within TTL. Keep the
old site reachable for 30 days. Nothing is deleted during migration.

---

## Risks

| Risk | Likelihood | Handling |
|---|---|---|
| AdBlue traffic loss | Medium | Only genuine content removal. **Flag to client before launch** |
| `/services` ranking dip while content redistributes | Medium | URL retained as hub — not redirected away |
| Directory updates lag | High | Expected; NAP consistency compounds over months |
| GBP suspension on edit | Low | Change one field at a time, not in bulk |

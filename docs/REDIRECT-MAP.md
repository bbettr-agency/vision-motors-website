# REDIRECT MAP — Vision Motors

**Updated:** 2026-07-22 · **Status:** proposed

---

## Scope: the current site is three pages

A full crawl found **three unique pages plus one duplicate**. That makes this migration low-risk
— but there are four defects worth fixing on the way across.

**Platform:** GrooveApps / GroovePages, static HTML behind Cloudflare. Not WordPress.

---

## Existing URL inventory

| URL | Status | Title | H1 | Disposition |
|---|---|---|---|---|
| `/` | 200 | `Vision Motors` | `Your Questions Answered` ⚠️ | **Rewrite** → new `/` |
| `/index` | 200 | *identical to `/`* | *identical* | **301 → `/`** — byte-identical duplicate |
| `/services` | 200 | `Vision Motors Services` | `Engine Reconditioning` | **Split** → `/services` hub + service pages |
| `/cookie` | 200 | `Cookie Policy` | *(none)* | **Rewrite** → `/privacy-policy` |
| `/sitemap.xml` | 200 | 3 URLs, all `lastmod 2025-07-31` | — | Replaced by generated sitemap |
| `/robots.txt` | 200 | No `Disallow` at all | — | Replaced |

**404 (no action needed):** `/about`, `/contact`, `/contact-us`, `/gallery`, `/blog`, `/terms`,
`/privacy`, `/privacy-policy`, `/terms-of-service`, `/quote`, `/booking`, `/home`, `/service`,
`/engine-reconditioning`, `/gearbox`, `/ford`, `/dsg`, `/adblue`, `/mechatronic`, `/index.php`,
`/wp-sitemap.xml`, `/Services` *(capital S — the current site is case-sensitive)*

---

## Redirect table

| # | From | To | Code | Reason |
|---|---|---|---|---|
| 1 | `/index` | `/` | 301 | Byte-identical duplicate, not canonicalised, not in sitemap |
| 2 | `/index/` | `/` | 301 | Currently 301s to **plain HTTP** — fixes the downgrade hop |
| 3 | `/services/` | `/services` | 301 | Currently 301s to **plain HTTP** |
| 4 | `/cookie` | `/privacy-policy` | 301 | Closest equivalent; current page is a broken template |
| 5 | `/Services` | `/services` | 301 | Case-normalisation |
| 6 | `http://visionmotors.co.za/*` | `https://visionmotors.co.za/*` | 301 | Force HTTPS |
| 7 | `http://www.` / `https://www.` | `https://visionmotors.co.za/*` | 301 | Canonical host — currently resolves 200 via Cloudflare with **no explicit canonical redirect** |

### `/services` content split

The old `/services` is one page carrying every service intent. Its content maps out as:

| Old content | New home |
|---|---|
| Engine reconditioning (H1) — rod resizing, line boring, crack repairs, reconditioned engines supplied | `/engine-reconditioning-pretoria` |
| Gearboxes + transfer cases + propshafts + differentials | `/gearbox-repairs-pretoria` + `/driveline-repairs-pretoria` |
| DSG | `/dsg-mechatronic-repairs-pretoria` |
| Mechatronic | `/dsg-mechatronic-repairs-pretoria` |
| "Ford Specialists on Duty" | `/ford-ranger-engine-specialists-pretoria` |
| RMI / MIWA / ARASA logos | Global trust component — **⛔ blocked on C2** |
| Testimonials | Distributed by theme |
| **AdBlue / SCR removal** | ⛔ **NOT MIGRATED** — see below |

`/services` itself is **kept as the hub** and 301s are unnecessary — the URL survives, its
content is redistributed, and the hub links to every child. This preserves whatever authority
the URL holds.

---

## ⛔ Content deliberately not migrated

| Content | Reason |
|---|---|
| **AdBlue / SCR removal** — *"We can permanently disable the Adblue/BlueTec function on most Mercedes Benz Vehicles/Vans"* | Emissions-control defeat work. Affects the vehicle's compliance status and would sit directly beneath a MIWA badge. Raised as a separate commercial conversation. **This is the only page section with meaningful traffic risk attached to removal — flag to the client before launch.** |
| *"We are the only car repair shop who provide affordable prices for any car owner in Pretoria"* | Unprovable superlative; CPA/ASA exposure |
| *"Our team works 24/7"* | Contradicts the client's own confirmed hours |
| *"almost 30 years in the industry"* | Stale (written ~2021) and contradicts "since 1992" on the homepage |
| Decorative `<h6>5 Star Reviews</h6>` + star graphic | Unsourced; ambiguous between MIWA grading and Google rating |
| Off-domain legal links (`termsofservicegenerator.net`, `privacypolicygenerator.info`) | Off-domain, may expire, almost certainly not POPIA-compliant |
| Cookie policy with unfilled template placeholder `{List the social networks…:12}` | Broken; also describes e-commerce, orders and AdSense — none applicable |
| All stock imagery (blue-overall models, UK number plate) | Misleading; see `IMAGE-INVENTORY.md` |

---

## Content retained

| Content | Treatment |
|---|---|
| Six testimonials, verbatim + names | Retained, distributed by theme. ⚠️ The **warranty sentence in Hendrik Mostert's testimonial is removed** until C1 clears — publishing it reads as an offer |
| Service descriptions | Rewritten for clarity and search intent; substance preserved |
| "Family owned and operated" | Retained — good, human, and unclaimed by competitors |
| Anti-dealer positioning | Retained, reframed constructively |
| Phone, email | Retained; email updated to `vision@` per onboarding |

---

## Risk assessment

**Low.** Three pages, `lastmod 2025-07-31`, no evidence of significant organic traffic, and no
external backlink profile identified. The main asset at risk is the `/services` URL, which
**already ranks for "engine reconditioning pretoria"** — hence keeping it as the hub rather than
redirecting it away.

**Nothing redirects to the homepage** except the `/index` duplicate, which is correct because it
*is* the homepage.

---

## Pre-launch checklist

- [ ] Confirm the redirect list against a fresh crawl (site may change before launch)
- [ ] Export Search Console data — top pages, queries, backlinks — **before** DNS switch
- [ ] Confirm no backlinks point at `/cookie` or `/index`
- [ ] Verify each 301 returns a **single hop**, no chains, no HTTP downgrade
- [ ] Confirm canonical host redirect is explicit, not Cloudflare-implicit
- [ ] Submit the new sitemap; keep the old one live 48h
- [ ] **Discuss the AdBlue removal with the client before launch**
- [ ] Monitor 404s for 30 days post-launch

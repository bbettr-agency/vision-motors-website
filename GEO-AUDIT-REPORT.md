# GEO Audit Report: Vision Motors

**Audit Date:** 17 November 2026
**URL:** https://www.visionmotors.co.za/
**Business Type:** Local Business (independent auto repair workshop, two branches, Wonderboom South / Wonderboom, Pretoria)
**Pages Analyzed:** 9 (every URL in the sitemap)

---

## Executive Summary

**Overall GEO Score: 48/100 (Poor)**

The website is technically strong. It is server-rendered, fast (lab LCP about 1s on mobile) and fully open to AI crawlers. It carries detailed AutoRepair and FAQ schema, and the warranty-rights page is a genuinely citable asset. The score is held down by things AI systems use to decide *whether to trust and recommend* a local business:
- Almost no third-party footprint: no directory or review-site listings, and the GBP is not linked.
- The brand name is ambiguous, shared with UK and Fiji companies.
- No individual service pages for high-intent queries such as "DSG repair Pretoria".
- A sitewide canonical/redirect conflict between `visionmotors.co.za` and `www`.

> **Note on hosting:** `visionmotors.co.za` is already served by Vercel/Next.js from this repository's build, so this audit scores the new site as live. `README.md` and `docs/DEPLOYMENT-WORKFLOW.md` say the domain is not connected and still on GroovePages. Those documents are out of date and should be corrected.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 58/100 | 25% | 14.5 |
| Brand Authority | 12/100 | 20% | 2.4 |
| Content E-E-A-T | 52/100 | 20% | 10.4 |
| Technical GEO | 83/100 | 15% | 12.5 |
| Schema & Structured Data | 45/100 | 10% | 4.5 |
| Platform Optimization | 41/100 | 10% | 4.1 |
| **Overall GEO Score** | | | **48/100** |

---

## Critical Issues (Fix Immediately)

1. **No third-party entity footprint.**
   - Searches for the brand with Pretoria, Wonderboom, Steve Biko Rd, the domain and Hellopeter returned nothing about this business.
   - No listings on Hellopeter, Cylex, Yellow Pages SA, Snupit, Brabys, Kandua or thebusinessdirectory.co.za.
   - No LinkedIn, YouTube, Reddit or press mentions.
   - In 4 test queries ("DSG repair Pretoria", "gearbox repair Pretoria North Wonderboom", "mechanic Wonderboom South Pretoria", and a branded reviews query), Vision Motors appeared **zero** times. Directories, classifieds and forums won instead.
   - *Fix:* Claim or complete GBP, Bing Places and Apple Business Connect for **both** branches with identical NAP. Then list on 5–6 SA directories.

2. **Brand-name collision.** Vision Motors Direct (St Helens, UK) has about 677 Trustpilot reviews at a 3.0 TrustScore. There is also Vision Motors Leeds and a Vision Motors group in Fiji. Without location anchoring, AI answers can mix up the entities or carry over their reputation.
   - *Fix:* Use "Vision Motors Pretoria" consistently in schema `alternateName`, listings and profile names.

3. **No topical depth for money queries.**
   - Eight services, DSG/mechatronic included, share one 596-word `/services` page at about 25 words per service.
   - There is no blog, no guides and no case studies.
   - *Fix:* Dedicated 1,000–1,500-word pages for DSG/Mechatronic, Engine Reconditioning, Automatic & Manual Gearbox, and Diagnostics (outline in the Content deep dive).

## High Priority Issues

4. **Canonical URLs redirect.**
   - `https://visionmotors.co.za/*` 308-redirects to `https://www.visionmotors.co.za/*`.
   - Yet every canonical, `og:url`, `og:image`, all 9 sitemap `<loc>`s, the robots `Sitemap`/`Host` lines and every JSON-LD `@id`/`url` use the apex domain.
   - *Fix (one line):* `config/site-config.ts:43` → `website: "https://www.visionmotors.co.za"`. Alternatively, make the apex primary in Vercel → Domains, but do only one of the two. Then resubmit the sitemap.

5. **NAP conflict in schema.**
   - The main `#business` AutoRepair `telephone` is +27 82 823 5178, a branch cell number.
   - The site promotes **012 335 0070** as the main number on every page.
   - *Fix:* Add a `contactPoint` with +27123350070 (`lib/schema.ts:59-61`). Make GBP and directory listings match.

6. **No credentials, tenure or Person entities.**
   - Christo Vorster (Director · Auto Electrician) and Jacques Du Randt (Operational Manager · Motor Mechanic) are named, but with no years of experience, trade tests, RMI/MIWA membership or training.
   - No founding year anywhere.
   - No Person schema.

7. **Thin `sameAs`.** It lists Facebook only; `googleBusinessProfileUrl` is `null` in `config/site-config.ts:262`. The Facebook vanity URL (`carserviceinpretoria`) doesn't contain the brand name.

8. **No `/llms.txt`.** It returns 404. It matters less for local intent, but it is cheap to add.

9. **Reviews you can't check.**
   - "4.3 on Google" has no review count, no review dates and no link to the GBP.
   - The pull-quote says "engine **overall** room", but the review card says "overhaul room".

10. **Security headers missing.** Only HSTS is set: no CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy or Permissions-Policy. *Fix:* `async headers()` in `next.config.js`.

## Medium Priority Issues

11. **Vague workmanship warranty.** "Warranty terms depend on the repair completed" is repeated on 4 pages, with no figures and no price guidance. This is the least citable passage on the site.
12. **No `<lastmod>` in the sitemap and no visible or `dateModified` dates on service content.** Only the legal pages are dated (22 July 2026).
13. **Article schema is incomplete** on `/your-warranty-rights` (`views/warranty-rights-page.tsx:36-44`): no `datePublished`, `dateModified` or `image`, and the author is a bare Organization.
14. **No Service schema.** `serviceSchema()` (`lib/schema.ts:259`) exists but no route uses it.
15. **Large homepage HTML.** It is 522 KB uncompressed (about 33 KB with Brotli). About 253 KB is the inline RSC payload and about 128 KB is 224 inline SVG icons. Some AI crawlers truncate large documents.
16. **`/thank-you` is both disallowed in robots.txt and `noindex`.** Because crawlers can't fetch the page, they never see the noindex. Remove the disallow.
17. **`/our-work` is thin.** It has 19 photos but only 293 words and no captions or job descriptions.
18. **Duplicated paragraphs.** The same strip-and-assess paragraph and warranty line appear on 4 pages.
19. **No `geo` coordinates or `hasMap` on either branch.** They are held back on purpose until confirmed; take them from the GBP pin.

## Low Priority Issues

- Non-standard robots `Host:` line pointing at the redirecting host. Remove it from `app/robots.ts`.
- `<meta name="keywords">` is present. Search engines ignore it, and it shows competitors your keyword list.
- No `logo` in schema, although `public/images/vision-motors-logo-indigo.png` exists.
- Schema: `WebSite` has no `@id`, `publisher` or `inLanguage`. `#engine-shop` uses the superseded `branchOf` alongside `parentOrganization`. The five identical OpeningHoursSpecification objects could be merged into one.
- Six font files are preloaded; 1–2 would do.
- The 404 page emits two robots meta tags. This is harmless.
- Bing: no `msvalidate.01` tag and no IndexNow. It may be verified by DNS instead; I couldn't check that from outside.

---

## Category Deep Dives

### AI Citability (58/100)

| Page | Score | Note |
|---|---|---|
| /your-warranty-rights | 74 | Dated, sourced, clause-level citations (5.4.1, 10.8.1, 5.4.5…), honest caveat |
| / (FAQ block) | 66 | Self-contained Q&As with addresses, phones and hours; matches the FAQPage schema 9/9 |
| /about-us | 45 | Stats strip "2 / In-house / Family" gives no founding year, staff count or experience |
| /services | 40 | Clear short definitions; no prices, durations, warranty terms or vehicle-specific facts |

**Strongest passages**
- "Since 1 July 2021, the Competition Commission's guidelines … have set out your right to have your vehicle serviced where you choose…"
- "The honest caveat": the guidelines "are not binding law… the manufacturer may decline warranty cover for that specific failure — though the rest of your warranty remains enforceable."
- FAQ "Where are you…": both addresses, three numbers and the hours in one block.

**Weakest passages, with rewrites** (the bracketed values are placeholders and need real client facts)
- "Warranty terms depend on the repair completed." → "Vision Motors guarantees [service work for X months/km; engine rebuilds for X months/X km], parts and labour."
- "How long will my car be with you? It depends entirely on the job…" → "A standard service is usually same-day; diagnostics 1–2 days; a full engine rebuild typically X–Y weeks, depending on parts."
- "Independent, and family run… the same faces are still here year after year." → "Founded in [YEAR] by [NAME], Vision Motors is a family-run independent workshop in Wonderboom South, Pretoria, with [N] technicians across two branches."

### Brand Authority (12/100)

| Platform | Status |
|---|---|
| Google Business Profile | Probably exists (the site shows Google reviews and "4.3 on Google"); not linked or verifiable from outside |
| Facebook | Linked (facebook.com/carserviceinpretoria); activity not verified |
| Hellopeter / Yellow Pages SA / Cylex / Snupit / Brabys | Not found |
| LinkedIn / YouTube / Reddit | Not found |
| Wikipedia / Wikidata | None. A Wikidata item is achievable; a Wikipedia article is not realistic |
| Local press (Rekord etc.) | Not found |

The search tool covers SA sources poorly, so treat this as a lower bound. Listings may exist without being indexed.

### Content E-E-A-T (52/100)

Experience 14/25 · Expertise 8/25 · Authoritativeness 9/25 · Trustworthiness 19/25

- **Strengths:**
  - Unusually transparent terms: quote approval before work, strip-and-assess charges spelled out, old parts returned on request.
  - A POPIA privacy policy.
  - Real on-site photography and 15+ named reviews that mention staff.
  - The copy has a distinct voice with no AI boilerplate.
- **Gaps:** no topical depth, no credentials or tenure, reviews you can't check, a vague workmanship warranty, and no content dates.

**Example service-page outline: DSG / Mechatronic Repair Pretoria**
1. What DSG is (DQ200 / DQ250 / DQ381)
2. Symptoms: judder, flashing PRNDS, limp mode
3. Mechatronic vs clutch pack vs TCU
4. How we diagnose (tools, adaptations)
5. Repair vs recon vs replace, with turnaround and price bands
6. Warranty on the work
7. 2–3 local case examples
8. FAQ with FAQPage schema

**Other content additions:**
- Case studies of 400–700 words: symptom → what the dealer quoted → diagnosis → fix → cost saved.
- Credentialed team bios.
- A pricing and warranty explainer, including a recon vs new vs used engine table.
- 6–10 evergreen guides, each with a byline and a reviewed date.

### Technical GEO (83/100)

| Area | Score |
|---|---|
| Server-side rendering | 95 |
| Meta and indexability | 75 |
| Crawlability | 70 |
| Security headers | 72 |
| Core Web Vitals risk | 85 |
| Mobile | 95 |
| URL structure | 90 |
| Status codes | 85 |

- **Verified working:**
  - Full content and JSON-LD are in the raw HTML.
  - `lang="en-ZA"`.
  - A real 404 with noindex.
  - `/thank-you` is noindexed.
  - Brotli compression, `next/image` WebP, and a preloaded hero image.
  - Lab measurements: LCP 1.06 s mobile / 0.75 s desktop, CLS 0.
- **AI crawlers:** robots.txt allows all user agents. GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Bingbot, CCBot and Applebot-Extended all receive 200.
- **Issues:** see items 4, 8, 10, 15 and 16 above.

### Schema & Structured Data (45/100)

- **Present:**
  - On every page: 2× AutoRepair (`#business`, `#engine-shop` with hours, `knowsAbout` and `hasOfferCatalog`) and WebSite.
  - Homepage: FAQPage.
  - Inner pages: BreadcrumbList.
  - Warranty page: Article.
  - All blocks parse cleanly and are server-rendered.
  - No self-serving aggregateRating, which is correct.
- **Missing:**
  - www-consistent `@id`s
  - `contactPoint` with the main line
  - `logo`
  - `geo` / `hasMap`
  - `sameAs` beyond Facebook
  - Person (founder/employee)
  - Service nodes
  - Article dates and author `@id`
  - WebSite `@id`, `publisher` and `inLanguage`
  - `speakable`

Note that Google now limits FAQ rich results to government and health sites. Keep FAQPage for its value to AI systems, not for rich results.

**Corrected `#business` entity** (in `lib/schema.ts` `autoRepairSchema`; fill or remove every `[REPLACE]` value from verified sources only):

```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://www.visionmotors.co.za/#business",
  "name": "Vision Motors",
  "alternateName": "Vision Motors Pretoria",
  "url": "https://www.visionmotors.co.za/",
  "logo": {"@type": "ImageObject", "url": "https://www.visionmotors.co.za/images/vision-motors-logo-indigo.png"},
  "image": "https://www.visionmotors.co.za/images/vision-motors-og-image.jpg",
  "telephone": "+27828235178",
  "email": "vision@visionmotors.co.za",
  "contactPoint": {"@type": "ContactPoint", "telephone": "+27123350070", "contactType": "customer service", "areaServed": "ZA"},
  "address": {"@type": "PostalAddress", "streetAddress": "1059 Steve Biko Rd", "addressLocality": "Wonderboom South", "addressRegion": "Gauteng", "postalCode": "0031", "addressCountry": "ZA"},
  "geo": {"@type": "GeoCoordinates", "latitude": "[REPLACE: GBP pin]", "longitude": "[REPLACE: GBP pin]"},
  "hasMap": "[REPLACE: Google Maps place URL]",
  "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:30", "closes": "17:00"},
  "department": {"@id": "https://www.visionmotors.co.za/#engine-shop"},
  "sameAs": ["https://www.facebook.com/carserviceinpretoria/", "[REPLACE: GBP URL]", "[REPLACE: other verified profiles]"]
}
```

Keep the existing `knowsAbout`, `hasOfferCatalog` and `areaServed`. The opening hours above are the ones already on `#engine-shop`; confirm they apply to the main branch before adding them.

### Platform Optimization (41/100)

| Platform | Score | Key lever |
|---|---|---|
| Google AI Overviews | 50 | Service pages with question H2s and 40–60-word answers; GBP completeness |
| Gemini | 45 | GBP/Knowledge Graph NAP consistency, photos, posts |
| Bing Copilot | 40 | Bing Webmaster Tools + IndexNow, Bing Places, LinkedIn page |
| ChatGPT Search | 36 | Bing Places (ChatGPT search draws on Bing), sameAs, Wikidata |
| Perplexity | 33 | Directory listings, forum presence (4x4community, VW/Audi SA forums, r/Pretoria), `dateModified` |

---

## Quick Wins (Implement This Week)

1. **Switch the site origin to www.** Change `config/site-config.ts:43` to `https://www.visionmotors.co.za`. This fixes the canonicals, sitemap, robots and schema in one change. Then resubmit the sitemap in Google Search Console and Bing Webmaster Tools.
2. **Fix the NAP.** Add `contactPoint` +27123350070 to the `#business` schema, and make GBP for both branches show the same name, address and phone.
3. **Expand `sameAs`.** Add the GBP URL(s), set `alternateName: "Vision Motors Pretoria"`, and add `logo`.
4. **Add `public/llms.txt`.** Cover business summary, branches, services, the warranty-rights page and contact.
5. **Tidy robots and headers.** Add the security headers to `next.config.js`, drop the `/thank-you` disallow and the `Host:` line from `app/robots.ts`, and remove `meta keywords`.

## 30-Day Action Plan

### Week 1: Entity foundations
- [ ] Ship quick wins 1–5
- [ ] Claim/complete GBP, Bing Places and Apple Business Connect for both branches (same NAP, categories "Auto repair shop" and "Transmission shop")
- [ ] Get from the client: founding year, workmanship warranty terms, technician credentials, GBP coordinates and URL
- [ ] Correct README / DEPLOYMENT-WORKFLOW to reflect that the domain is live on Vercel

### Week 2: Directories and reviews
- [ ] List on Hellopeter, Cylex, Yellow Pages SA, Snupit, Brabys and thebusinessdirectory.co.za
- [ ] Create a LinkedIn company page and add every verified profile to `sameAs`
- [ ] Start a review drive (target 50+ Google reviews); show the review count and dates on the site and link to the GBP
- [ ] Fix the "overall/overhaul" quote mismatch

### Week 3: Money pages
- [ ] Publish DSG/Mechatronic Repair Pretoria and Gearbox Repair Pretoria pages (outline above), each with Service + FAQPage schema
- [ ] Add credentialed team bios with Person schema (`founder`/`employee`)
- [ ] Replace "warranty terms depend on the repair" with real terms on all 4 pages

### Week 4: Depth and freshness
- [ ] Publish an Engine Reconditioning page and 2 case studies (for example, the dealer-quote story, with the customer's consent)
- [ ] Complete the Article schema (dates, author `@id`) and add visible "Last reviewed" dates and real sitemap `lastmod`s
- [ ] Add captions and job descriptions to `/our-work`
- [ ] Reduce homepage HTML weight (server-only sections, an SVG sprite for the icons)
- [ ] Re-run this audit as the first monthly comparison

---

## Appendix: Pages Analyzed

| URL | Title | Words | Schema | GEO Issues |
|---|---|---|---|---|
| / | Specialist Car & Gearbox Repairs Pretoria \| Vision Motors | 3,130 | AutoRepair×2, WebSite, FAQPage | 6 |
| /services | Car Repair & Servicing Pretoria \| Vision Motors | 596 | AutoRepair×2, WebSite, BreadcrumbList | 5 |
| /about-us | About Vision Motors \| Independent Workshop, Pretoria | 644 | AutoRepair×2, WebSite, BreadcrumbList | 4 |
| /our-work | Vision Motors Workshop Gallery \| Pretoria | 293 | AutoRepair×2, WebSite, BreadcrumbList | 3 |
| /contact-us | Contact Vision Motors \| Wonderboom South, Pretoria | 510 | AutoRepair×2, WebSite, BreadcrumbList | 2 |
| /book-a-vehicle-in | Book Your Car In \| Vision Motors Pretoria | 627 | AutoRepair×2, WebSite, BreadcrumbList | 2 |
| /your-warranty-rights | Your Warranty Rights \| Service Where You Choose | 486 | AutoRepair×2, WebSite, BreadcrumbList, Article | 3 |
| /privacy-policy | Privacy Policy \| Vision Motors | 577 | AutoRepair×2, WebSite, BreadcrumbList | 1 |
| /website-terms-of-use | Website Terms of Use \| Vision Motors | 637 | AutoRepair×2, WebSite, BreadcrumbList | 1 |

**Method notes:**
- All 9 pages returned 200. There were no fetch failures; the apex domain was fetched by following its redirect to www.
- `/thank-you` and `/api/` were skipped because robots.txt disallows them.
- Plain-HTTP (port 80) redirects could not be tested from the audit environment.
- Core Web Vitals figures are lab measurements (Playwright), not field data.
- Brand and platform checks used a US-centric search index with weak South African coverage, so absence findings are a lower bound.

---

## Remediation Log: 17 November 2026

Fixes were shipped to `production`, which feeds www.visionmotors.co.za. The Phase 1/2 typography redesign on `main` was deliberately left out.

### Fixed in code

| # | Issue | Fix |
|---|---|---|
| 4 | Canonicals pointed at the redirecting apex | `config/site-config.ts` origin → `https://www.visionmotors.co.za`. This covers canonicals, OG, sitemap, robots and every schema `@id`/`url`. |
| 5 | NAP: switchboard missing from schema | `contactPoint` with +27 12 335 0070 added. Branch numbers stay on their branches. |
| 7 | Thin entity data | `alternateName: "Vision Motors Pretoria"`, `logo`, `hasMap` on both branches, `department` ↔ `parentOrganization` (the superseded `branchOf` was dropped). |
| 6 | No Person entities | `employee` Person nodes from the client-confirmed team (name, role, photo only; no credentials asserted). |
| 8 | No llms.txt | `/llms.txt`, generated from config (`app/llms.txt/route.ts`). |
| 9 | Quote mismatch | Engine-shop pull-quote now matches the source review word for word ("overhaul room and check the work…"). |
| 10 | Security headers | CSP (framing/base/object/form-action), X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy, all in `next.config.js`. |
| 12 | No lastmod / dates | Real per-route `lastModified` values taken from git history (`config/routes.ts`), plus a visible "Last updated" date on /your-warranty-rights. |
| 13 | Article schema incomplete | `datePublished`, `dateModified`, `image`, `inLanguage`, author → `#business`, and `speakable` (intro + mandatory caveat). |
| 14 | No Service schema | 10 Service nodes on /services, built from the same config that renders the page; provider → `#business`. |
| 16 | /thank-you disallowed + noindex | Disallow removed; the page relies on its `noindex, nofollow`. |
| Low | Robots `Host:`, meta keywords, font preloads, WebSite node, hours | Removed `Host:`; removed meta keywords; mono font no longer preloaded; WebSite gets `@id`/`publisher`/`inLanguage`; hours merged into one spec. |
| Docs | README / DEPLOYMENT-WORKFLOW claimed the domain wasn't connected | Corrected. |

Verified before deploy: `tsc` clean, lint clean, production build clean, and all 9 pages served locally with www canonicals. All JSON-LD parses, there are no console/CSP errors in Chromium, and the security headers are present.

### Not fixed: needs the client or agency (the site's truth rules forbid guessing)

- **GBP URL and coordinates** → `googleBusinessProfileUrl` and `geo` in `config/site-config.ts`. Once set, `sameAs` and `geo` emit automatically.
- **Founding year, workmanship warranty terms, accreditation evidence (RMI/MIWA/ARASA), registered legal name.** These are gated in `site-config.ts` and emit automatically once marked verified.
- **Service pages (DSG, gearbox, engine reconditioning…).** Blocked by `docs/SERVICE-PAGE-BRIEFS.md`: each needs a completed brief and a real photograph. Set `live: true` in `config/routes.ts` once built.
- **Team credentials/tenure, /our-work captions and case studies.** These need client input.
- **Off-site work:** GBP/Bing Places/Apple Business Connect, SA directory listings, a review drive, LinkedIn, Bing Webmaster Tools + IndexNow, and resubmitting the sitemap in Search Console with the www URLs.

### Deferred (engineering, low risk to leave)

- Homepage HTML weight (522 KB raw, about 33 KB with Brotli): an RSC payload and inline-SVG refactor. Better done on `main` alongside the redesign than as a production hotfix.
- Strict CSP `script-src` with nonces. It needs a dedicated test pass.

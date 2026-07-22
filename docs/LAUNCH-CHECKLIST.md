# LAUNCH CHECKLIST — Vision Motors

**Updated:** 2026-07-22 · Gate 4. Nothing launches with a 🔴 open.

---

## 🔴 Deployment gate — read first

| Branch | Deploys to |
|---|---|
| `main` | **Preview only** |
| `production` | **Production** → `vision-motors-website.vercel.app` |

```bash
git checkout production && git merge --ff-only main && git push origin production
```

⛔ Never `npx vercel --prod`. Full workflow + rollback: `docs/DEPLOYMENT-WORKFLOW.md`.

### Connecting the real domain — 🔴 all required

**`visionmotors.co.za` is not connected. Do not connect it until every box below is ticked.**

- [ ] **Written client approval to go live**
- [ ] Every 🔴 in this checklist closed
- [ ] Redirects configured and tested (`REDIRECT-MAP.md`)
- [ ] Search Console baseline exported **before** cutover
- [ ] GBP baseline captured before the website link is attached
- [ ] Client informed of the DNS change window
- [ ] Rollback path confirmed and someone available to execute it
- [ ] Old GroovePages site kept reachable for 30 days

⚠️ "Auto-assign Custom Production Domains" is **enabled** — the next production deployment will
claim the domain the moment it is added. Add it only when you intend to go live.

---

## 🔴 Blocking — content truth

- [ ] **Warranty terms in writing** (C1) — or interim wording confirmed
- [ ] **RMI / MIWA / ARASA membership numbers** (C2) — badges stay off until then
- [ ] **Engine Shop address + role** (C3)
- [ ] **Founding year** (C4)
- [ ] **Ranger/BT-50 scope confirmed** (C21) — gates the flagship page
- [ ] Every claim traces to a row in `CONTENT-SOURCE-REGISTER.md`
- [ ] Zero `unverified` facts rendered in UI or schema
- [ ] AdBlue/SCR removal decision signed off (`REDIRECT-MAP.md`)

## 🔴 Blocking — assets

- [ ] **Photoshoot complete** (`PHOTOSHOOT-REQUIREMENTS.md`) — every service page needs ≥1 real photo
- [ ] **Vector logo** (C5)
- [ ] No stock photography anywhere
- [ ] No legible customer number plates
- [ ] Written consent for identifiable people

## Technical

- [ ] `npm run build`, `tsc --noEmit`, `npm run lint` all clean
- [ ] First-load JS < 150 kB **on every template**, not just the homepage
- [ ] Unique title + meta description per page; one H1; no skipped levels
- [ ] Canonical on every page
- [ ] OG + Twitter metadata; OG image dimensions match the actual file
- [ ] `sitemap.xml` + `robots.txt`; `/thank-you` noindex + disallowed
- [ ] Schema validated per `SCHEMA-MAP.md`; **no `aggregateRating`**
- [ ] All 301s single-hop, no HTTP downgrade (`REDIRECT-MAP.md`)
- [ ] Custom 404
- [ ] No orphaned pages; no broken links or images

## Responsive — 360 / 390 / 430 / 768 / 1024 / 1280 / 1440

- [ ] Zero horizontal overflow at every width
- [ ] Phone number never wraps
- [ ] Sticky mobile bar does not overlap the footer or other floating elements
- [ ] Forms comfortable on mobile; correct `inputMode`
- [ ] Gallery, accordions, map usable at every width
- [ ] Long technical words (mechatronic, reconditioning) do not break layout

## Accessibility

- [ ] Keyboard-navigable throughout; visible focus states
- [ ] Skip link functional
- [ ] Semantic landmarks; all form fields labelled; errors announced
- [ ] **All text ≥ 4.5:1** (3:1 large) — re-verify, current floor is 4.81:1
- [ ] Tap targets ≥ 44×44px
- [ ] `prefers-reduced-motion` respected
- [ ] Descriptive alt text on every image
- [ ] Gallery lightbox keyboard-operable and escapable

## Forms

- [ ] Server-side validation; spam protection
- [ ] `GHL_WEBHOOK_URL` set server-side; **no secrets in the client bundle**
- [ ] `/thank-you` redirect enabled
- [ ] Source / UTM / GCLID / page-path capture
- [ ] Test submission reaches GHL and creates contact + opportunity
- [ ] "Preferred date is a request" stated clearly
- [ ] POPIA consent wording

## Analytics

- [ ] GA4 + GTM live; all events firing (`ANALYTICS-AND-CONVERSIONS.md`)
- [ ] Ads conversions configured — `click_to_call` **primary**
- [ ] Search Console verified; sitemap submitted
- [ ] **Baseline captured before cutover**

## Google Business Profile

- [ ] **Website URL attached** ← highest-value single action
- [ ] Postcode + hours corrected; public holidays marked closed
- [ ] Categories set; booking link added
- [ ] 8 one-star reviews read and responded to (C23)
- [ ] Photos uploaded post-shoot

## Post-launch — 30 days

- [ ] Monitor 404s, index coverage, Core Web Vitals field data
- [ ] Directory NAP updates worked through (`URL-MIGRATION-PLAN.md`)
- [ ] Confirm leads arriving and being responded to
- [ ] Old site reachable for 30 days

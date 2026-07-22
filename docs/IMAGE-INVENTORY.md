# IMAGE INVENTORY — Vision Motors

**Updated:** 2026-07-22

## Headline

**Nine authentic images exist in total.** Eight were recovered by extracting them from the
company-profile PDF; one was already in the build. That is not enough to carry a six-page
production website, and **most of the nine are too low-resolution to use at any size.**

The brief anticipated "available workshop, vehicle and repair photographs". **None were
supplied.** There is not a single photograph of the workshop interior, an engine, a gearbox, a
diagnostic session, or a completed repair.

---

## A. Authentic assets on hand

| # | File | Px | Category | Authenticity | Quality | Trust value | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | `public/images/vision-motors-technicians-engine-bay-pretoria.jpg` | 1024×682 | Team at work | ✅ Real | Good | **Very high** | **In use — hero.** Best asset by a wide margin. |
| 2 | `client-assets/premises/premises-1059-steve-biko-frontage-541x374.jpg` | 541×374 | Exterior | ✅ Real | ⚠️ Low | **Very high** | Too small to publish. **Reshoot — priority 1.** Evidentially crucial (it resolved the address). |
| 3 | `client-assets/premises/premises-engine-shop-frontage-560x156.jpg` | 560×156 | Exterior | ✅ Real | ⚠️ Very low | **Very high** | Too small + extreme letterbox crop. **Reshoot — priority 2.** |
| 4 | `client-assets/team/team-khaki-shirt-163x275.jpg` | 163×275 | Team portrait | ✅ Real | ⚠️ Very low | High | Avatar only (≤80px). Name illegible. |
| 5 | `client-assets/team/team-black-polo-a-184x276.jpg` | 184×276 | Team portrait | ✅ Real | ⚠️ Very low | High | Avatar only. |
| 6 | `client-assets/team/team-black-polo-b-181x271.jpg` | 181×271 | Team portrait | ✅ Real | ⚠️ Very low | High | Avatar only. |
| 7 | `client-assets/logos/vision-motors-logo-indigo-RASTER-606x251.jpg` | 606×251 | Branding | ✅ Real | ⚠️ Raster, JPEG artefacts | n/a | **Not usable in a header at 2×.** Vector needed. |
| 8 | `client-assets/logos/rmi-logo-270x148.png` | 270×148 | Accreditation | ✅ Real file | Low | — | ⛔ **Blocked** — membership unverified (`FACT-VERIFICATION-REGISTER.md` C2) |
| 9 | `client-assets/logos/miwa-logo-270x148.png` | 270×148 | Accreditation | ✅ Real file | Low | — | ⛔ **Blocked** — same |
| — | `public/images/vision-motors-og-image.jpg` | 1200×630 | Social | Derived from #1 | Good | — | In use. Replace when #1 is reshot. |

**Usable at full size today: exactly one image (#1).**

---

## B. Rejected — do not use

From the current live visionmotors.co.za:

| Asset | Why rejected |
|---|---|
| `about-us.jpg` | Stock. Cut-out models in blue overalls, **UK yellow number plate** |
| `pic11.jpg` | Stock. Blue-overall model with inspection lamp |
| Testimonial photos | Served at **4928×3264 and 4242×2828 raw JPEG** — catastrophic on mobile |
| "5 Star Reviews" graphic | Unsourced; ambiguous between MIWA grading and Google rating |
| Service icon set | Generic clip-art |

Note: **all 22 images on the current live site have empty `alt` attributes** — an SEO loss and
an accessibility failure. Every image in the new build carries descriptive alt text.

---

## C. Category coverage

| Category | Have | Need | Gap |
|---|---|---|---|
| Workshop exterior | 2 (both too small) | 4–6 | 🔴 Reshoot |
| Workshop interior | **0** | 6–8 | 🔴 **Total gap** |
| Engine Shop interior | **0** | 6–8 | 🔴 **Total gap — highest commercial value** |
| Mechanics / team at work | 1 good, 3 avatars | 8–10 | 🟠 Partial |
| Diagnostics | **0** | 3–4 | 🔴 **Total gap** |
| Engines | **0** | 6–8 | 🔴 **Total gap** |
| Gearboxes / DSG / mechatronic | **0** | 4–6 | 🔴 **Total gap** |
| Ranger / BT-50 work | **0** | 4–6 | 🔴 **Total gap — the differentiator** |
| Vehicles in for work | **0** | 4–5 | 🔴 Total gap |
| Tools / equipment | **0** | 3–4 | 🔴 Total gap |
| Completed work | **0** | 4–6 | 🔴 Total gap |
| Branding / accreditation | 3 (2 blocked) | — | 🟠 Vector needed |

**Roughly 55–70 photographs are required. Nine exist. One is publishable.**

---

## D. Implication for Phase 4 (Gallery)

The brief specifies a categorised gallery — Workshop, Engine Repairs, Gearboxes, Diagnostics,
Team at Work, Vehicles, Completed Repairs — explicitly *not* a photo dump.

**Seven categories × zero photographs. The gallery cannot be built from existing material.**

Options:
1. **Photoshoot first, then build.** Strongly recommended. ~3 hours on site produces everything.
2. Build the gallery system with documented placeholders and populate after the shoot.
3. Defer the gallery to a post-launch phase.

**Recommendation: option 1, and treat the shoot as a Phase 2 dependency rather than a Phase 4
one.** The Engine Shop and Ranger/BT-50 work is the strongest differentiator this business has,
and it currently has *no visual proof whatsoever*. Every day the site runs without it, the
strongest asset is invisible.

**Do not fill the gap with stock.** Per the brief and SYSTEM/08, a documented placeholder is
better than a misleading stock photo — and for a workshop selling authenticity, a stock mechanic
in blue overalls beside a UK number plate actively destroys the trust the page is trying to
build. That is precisely the mistake the current live site makes.

---

## E. Technical spec for all new photography

- **Format:** WebP/AVIF via `next/image`; source JPEG ≥ 2400px on the long edge
- **Weight:** hero < 200 KB · gallery < 120 KB · thumbnails < 40 KB
- **Filenames:** descriptive and SEO-named — `vision-motors-engine-shop-ranger-rebuild-pretoria.jpg`, never `IMG_4821.jpg`
- **Alt text:** written per slot in `config/images-config.ts`
- **EXIF:** stripped
- **Consent:** written consent for any identifiable person; **no customer number plates legible**
- **Orientation:** shoot each hero subject in both 16:9 and 4:5 so mobile crops are not an afterthought

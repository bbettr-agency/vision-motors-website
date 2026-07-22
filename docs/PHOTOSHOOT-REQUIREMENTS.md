# PHOTOSHOOT REQUIREMENTS — Vision Motors

**Updated:** 2026-07-22
**Status:** 🔴 **Blocking dependency for Phase 2 and Phase 4**

One publishable photograph exists. A production website for a workshop that sells authenticity
cannot be built on that. This is a single half-day shoot across two premises.

**Recommended:** one photographer, ~3–4 hours, both buildings, mid-morning for even light.

---

## Shot list — in priority order

Numbers 1–8 are essential. If time runs short, stop at 8.

### 🔴 Priority 1 — The Engine Shop (1197 Steve Biko Rd, to be confirmed)

**This is the highest-value block on the list. It is the single strongest differentiator the
business has, and there is currently no photographic evidence it exists.**

| # | Shot | Spec | Used on |
|---|---|---|---|
| 1 | Engine Shop **exterior**, signage readable including "ENGINE SHOP" and "RANGER & BT50" | 16:9, ≥2400px | Home, About, Engine pages, Contact |
| 2 | **Wide interior** of the engine room — benches, engines in progress, organised and lit | 16:9 + 4:5, ≥2400px | Engine reconditioning page hero |
| 3 | **Stripped engine on the bench**, close enough to read the machining | 4:3, ≥1600px | Engine page, Gallery |
| 4 | **Ranger / BT-50 engine specifically** — head off or on the stand. If a Ranger is in, shoot it. | 4:3 + detail, ≥1600px | **Ranger/BT-50 page — the differentiator** |
| 5 | Machining in progress — line boring, rod resizing, crack testing | 4:3, ≥1600px | Engine page proof |

> A published customer review already says *"take a walk through their engine overall room, go
> and check the work that they do."* Shots 2–3 make that sentence visible instead of merely
> quoted. That review is doing a lot of work with nothing to back it.

### 🔴 Priority 2 — Main workshop (1059 Steve Biko Rd)

| # | Shot | Spec | Used on |
|---|---|---|---|
| 6 | **Exterior with full signage legible**, street-on, showing the frontage | 16:9, ≥2400px | Home hero candidate, Contact, About |
| 7 | **Wide workshop interior**, bays occupied, real vehicles, good natural light | 16:9 + 4:5, ≥2400px | Home hero candidate |
| 8 | **Technician on diagnostics**, scanner screen visible, vehicle in shot | 4:3, ≥1600px | Diagnostics page hero |

### 🟠 Priority 3 — Capability proof

| # | Shot | Spec | Used on |
|---|---|---|---|
| 9 | Gearbox stripped on the bench | 4:3, ≥1600px | Gearbox page |
| 10 | DSG / mechatronic unit — the electronics visible | 4:3, ≥1600px | DSG/mechatronic page |
| 11 | Differential or transfer case on the bench | 4:3, ≥1600px | Driveline page |
| 12 | Clutch assembly, old vs new | 4:3, ≥1600px | Clutch page |
| 13 | Brake work — disc/pad detail | 4:3, ≥1600px | Brakes page |
| 14 | Vehicle on the lift, underside work | 4:3, ≥1600px | Servicing page |
| 15 | Tools / equipment / diagnostic gear | 4:3, ≥1600px | About, Gallery |

### 🟠 Priority 4 — People

| # | Shot | Spec | Notes |
|---|---|---|---|
| 16 | **Re-shoot the three team portraits at full resolution** | 4:5, ≥1600px | Existing are ~180×275 — avatar only |
| 17 | **Names and roles captioned** for each person | — | ⚠️ Get titles confirmed in writing at the same time |
| 18 | Team group shot outside the workshop, in uniform | 16:9, ≥2400px | About page |
| 19 | Christo Vorster and Jacques du Randt individually | 4:5, ≥1600px | Both are named in real customer testimonials — putting faces to those names is unusually strong proof |
| 20 | Candid: technician explaining something to a customer | 4:3, ≥1600px | Supports the "we explain it properly" promise |

> **No competitor in the Wonderboom / Pretoria North set puts real named faces on their site.**
> This is uncontested ground and cheap to take.

### 🟡 Priority 5 — Supporting

| # | Shot | Notes |
|---|---|---|
| 21 | Seat + carpet protection fitted in a customer car | Makes the Carmen Keppler testimonial visible rather than claimed |
| 22 | Branded Ford Ranger bakkies | Already visible in the profile photo; shoot properly |
| 23 | Reception / customer waiting area | Sets expectations for a first visit |
| 24 | Parking and access from Steve Biko Road | Genuinely useful on Contact |
| 25 | Completed vehicle being handed back, clean | Closes the process narrative |

---

## Rules for the shoot

**Do**
- Shoot each hero subject in **both 16:9 and 4:5** so mobile crops are deliberate
- Prefer natural light; open roller doors
- Tidy the immediate frame — clean, organised work areas read as competence
- Capture real work in progress rather than posed arrangements
- Shoot RAW where possible; deliver full-resolution JPEG

**Do not**
- Include **legible customer number plates**
- Photograph anyone without their consent
- Stage handshakes or arms-folded-by-the-toolbox clichés
- Shoot into a dark bay — the site is dark-anchored, so the photography must carry the light
- Include competitor branding or another workshop's premises

---

## Deliverable

Full-resolution originals, unedited, in one folder per category matching the gallery taxonomy:

```
workshop-exterior/  workshop-interior/  engine-shop/  engines/  gearboxes/
diagnostics/  ranger-bt50/  team/  vehicles/  equipment/  completed-work/
```

Optimisation, cropping, alt text and slot assignment happen in the build.

---

## Interim position

Until the shoot happens, every unfilled slot renders a **documented placeholder** carrying its
own shot brief (see `components/ui/image-slot.tsx`). Swapping in a real photograph is a
one-line change to `config/images-config.ts` — no component work.

**Stock photography will not be used.** The current live site's stock mechanics beside a UK
number plate are exactly the credibility failure this build exists to correct.

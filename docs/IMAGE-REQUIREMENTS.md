# IMAGE REQUIREMENTS — Vision Motors

**The situation:** exactly **one** authentic Vision Motors photograph exists. Every other image
on the client's current website is stock or decorative.

Per the Website OS Image Strategy Rule, a documented placeholder beats a misleading stock photo.
Every unfilled slot on the homepage renders a labelled placeholder carrying its own shot brief,
so the gap is visible and actionable rather than papered over.

---

## Audit of the client's existing images

| Image | Verdict |
|---|---|
| `mechanics in pretoria.jpg` | ✅ **REAL** — two Vision Motors technicians in branded gold-on-black polos working on a premium engine bay, job whiteboard behind them. Genuinely good. **In use as the hero.** |
| `about-us.jpg` | ❌ Stock — cut-out models in blue overalls, UK yellow number plate |
| `pic11.jpg` | ❌ Stock — blue-overall model with an inspection lamp |
| Service icons ×6 | ❌ Generic icon set |
| "5 Star Reviews" graphic | ❌ Decorative, unsourced |

Two testimonial images on the current site are served as **4928×3264 and 4242×2828 raw JPEGs** —
catastrophic for mobile load. None of them carried it over.

**Also note:** every image on the current site has **empty `alt` text** — all 22 of them. That is
both an SEO loss and an accessibility failure. Every image in this build has descriptive alt text.

---

## Currently in the repository

| File | Dimensions | Use |
|---|---|---|
| `public/images/vision-motors-technicians-engine-bay-pretoria.jpg` | 1024×682 | Hero, `priority`-loaded |
| `public/images/vision-motors-og-image.jpg` | 1200×630 | OpenGraph / social preview (cropped from the above so the declared dimensions match the actual file) |

---

## Photoshoot brief — ranked by conversion value

Shoot in this order. If budget or time runs short, the top three matter most.

### 1. Wide workshop interior — **replaces the hero**
Bays occupied, real customer vehicles, good natural light, the workshop looking busy and
organised. Landscape, room to breathe on the left for the headline overlay.
**Spec:** 16:9, ≥2400px wide · **Slot:** `hero`

### 2. The engine overhaul room
A stripped engine on the bench, clean and organised. **A customer review already invites people
to come and look at this room** — that makes it the single strongest proof asset available:
> "take a walk through their engine overall room, go and check the work that they do."

**Spec:** 4:3, ≥1600px · **Slot:** `engineRoom`

### 3. Technician on diagnostics
Technician at a diagnostic scanner, screen visible, vehicle in shot. Supports the entire
complex-fault-finding positioning.
**Spec:** 4:3, ≥1600px · **Slot:** `diagnostics`

### 4. Gearbox / DSG / mechatronic unit on the bench
A transmission or mechatronic unit stripped down. Proves the specialist tier — this is the
capability most competitors simply do not have.
**Spec:** 4:3, ≥1600px · **Slot:** `gearboxBench`

### 5. Team photograph, named
In branded gold-on-black uniform, outside the workshop. **Names needed for captions** —
testimonials already name Jacques, Christo Vorster, Mitchell and Cyril, and no competitor in the
set puts real named faces on their site. This is an easy, uncontested win.
**Spec:** 16:9, ≥2000px · **Slot:** `team`

### 6. Exterior and signage from Steve Biko Road
Street-facing, signage clearly readable. Helps customers physically find the workshop and
supports local SEO.
**Spec:** 16:9, ≥2000px · **Slot:** `exterior`

### 7. Seat and carpet protection fitted
Close-up of protection fitted in a customer's car. Makes the Carmen Keppler testimonial
*visible* rather than merely claimed:
> "you actually take care of client's cars by putting a plastic cover over the seat and a cover
> on the carpet… and you guys actually washed my cutie!"

**Spec:** 4:3, ≥1600px · **Slot:** `vehicleCare`

---

## What to avoid

- Generic stock mechanics (the current site's main failure)
- Staged handshake photographs
- Overly dark images that hide the facility — the site is dark, so the photography must carry light
- Cluttered or dirty work areas; visible customer number plates
- Anything that does not match the actual workshop

---

## Technical specification

- **Format:** WebP or AVIF, with JPEG fallback handled by `next/image`
- **Hero:** < 200 KB · **All other images:** < 120 KB
- **Filenames:** descriptive and SEO-named, e.g.
  `vision-motors-engine-overhaul-room-pretoria.jpg` — never `IMG_4821.jpg`
- **Alt text:** descriptive, written per slot in `config/images-config.ts`
- **EXIF:** stripped
- **Responsive:** `next/image` generates variants; `priority` on the hero only, lazy below the fold
- **OG image:** 1200×630 — replace the current crop with a purpose-shot version, ideally
  incorporating the logo lockup

---

## How to add a photo

One line. In `config/images-config.ts`, set the slot's `src`:

```ts
engineRoom: {
  id: "engineRoom",
  src: "/images/vision-motors-engine-overhaul-room-pretoria.jpg",  // was: null
  alt: "The engine overhaul room at Vision Motors, Pretoria",
  ...
}
```

The placeholder disappears and `next/image` takes over automatically. No component changes.

To hide the shot briefs for a client-facing presentation, pass `showBrief={false}` to
`ImageSlotView` (already done for the hero).

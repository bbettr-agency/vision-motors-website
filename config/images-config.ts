// ─────────────────────────────────────────────────────────────────────────────
//  IMAGE SLOTS — config-driven, per SYSTEM/08 Image Strategy Rule.
//
//  CURRENT STATE: exactly ONE authentic Vision Motors photograph exists. Every
//  other image on the client's current website is stock (blue-overall models,
//  cut-out white backgrounds, a UK yellow number plate) or a decorative graphic.
//
//  RULE APPLIED: a documented placeholder is always better than a misleading
//  stock photo. Slots with `src: null` render a labelled placeholder carrying
//  the shot brief — so the demo reads as complete and intentional, and swapping
//  in a real photo later is a one-line config change.
//
//  `priority` = the order to shoot in, ranked by conversion value.
// ─────────────────────────────────────────────────────────────────────────────

import type { ImageSlot } from "@/types/site";

export const imagesConfig: Record<string, ImageSlot> = {
  // ✅ REAL. Engine blocks stripped for reconditioning on the bench in the
  // engine shop — the flagship proof band. Landscape, sits in wide fill plates.
  engineRoom: {
    id: "engineRoom",
    src: "/images/vision-motors-engine-blocks-pretoria.jpg",
    alt: "Engine blocks stripped for reconditioning on the bench at the Vision Motors engine shop in Wonderboom South, Pretoria",
    aspect: "4/3",
    shotBrief:
      "The engine overhaul room — a stripped engine on the bench, clean and organised.",
    priority: 2,
  },

  // ✅ REAL. A diagnostic scanner + interface — literal fault-finding proof.
  diagnostics: {
    id: "diagnostics",
    src: "/images/vision-motors-diagnostic-scanner-pretoria.jpg",
    alt: "A diagnostic scanner and interface used for electronic fault finding at Vision Motors, Pretoria",
    aspect: "4/3",
    shotBrief:
      "Technician at a diagnostic scanner with the screen visible, vehicle in shot.",
    priority: 3,
  },

  // ✅ REAL. An engine stripped to the short block on the bench. NOTE: this is
  // engine-reconditioning proof — the alt says engine, NOT gearbox. No clean
  // gearbox/DSG/mechatronic photograph was supplied, so nothing is captioned as
  // one (the gearbox/driveline capability stays text-only until a real photo).
  gearboxBench: {
    id: "gearboxBench",
    src: "/images/vision-motors-engine-rebuild-bench-pretoria.jpg",
    alt: "An engine stripped to the short block for reconditioning on the bench at Vision Motors, Pretoria",
    aspect: "3/4",
    shotBrief:
      "A gearbox or DSG/mechatronic unit stripped on the bench — still wanted; no gearbox photo supplied yet.",
    priority: 4,
  },

  // ✅ REAL. A Vision Motors technician at work on an engine (branded uniform).
  team: {
    id: "team",
    src: "/images/vision-motors-technician-engine-repair-pretoria.jpg",
    alt: "A Vision Motors technician in branded uniform working on an engine in the workshop, Wonderboom South, Pretoria",
    aspect: "3/4",
    shotBrief:
      "Team photograph in branded gold-on-black uniform. Named roles still wanted for captions.",
    priority: 5,
  },

  // ✅ REAL. Inside the workshop — a busy bay of customer vehicles. Used where a
  // "the physical place" image is needed. A street-facing SIGNAGE/frontage shot
  // is still wanted (the only supplied frontage shows blocked RMI/MIWA livery).
  exterior: {
    id: "exterior",
    src: "/images/vision-motors-workshop-interior-pretoria.jpg",
    alt: "Inside the Vision Motors workshop in Wonderboom South, Pretoria, with customer vehicles up for repair",
    aspect: "4/3",
    shotBrief:
      "Street-facing exterior with signage clearly readable (no RMI/MIWA badge in frame — C2).",
    priority: 6,
  },

  // ✅ REAL. Customer vehicles in the workshop bays.
  vehicleCare: {
    id: "vehicleCare",
    src: "/images/vision-motors-workshop-bays-pretoria.jpg",
    alt: "Customer vehicles in the workshop bays at Vision Motors, Wonderboom South, Pretoria",
    aspect: "4/3",
    shotBrief:
      "Close-up of seat and carpet protection fitted in a customer car.",
    priority: 7,
  },

  // ✅ REAL. Reconditioned engines lined up in the engine shop — the richest
  // engine frame; used as an editorial crop.
  engineRecon: {
    id: "engineRecon",
    src: "/images/vision-motors-engine-reconditioning-pretoria.jpg",
    alt: "Reconditioned engines and cylinder heads on the bench at the Vision Motors engine shop, Wonderboom South, Pretoria",
    aspect: "3/4",
    shotBrief: "Reconditioned engines lined up, checked-and-calibrated labels visible.",
    priority: 2,
  },

  // ✅ REAL. The customer waiting area.
  waitingArea: {
    id: "waitingArea",
    src: "/images/vision-motors-waiting-area-pretoria.jpg",
    alt: "The customer waiting area at Vision Motors, Wonderboom South, Pretoria",
    aspect: "3/4",
    shotBrief: "The customer waiting lounge — clean, comfortable, real.",
    priority: 8,
  },

  // ✅ REAL. Two technicians diagnosing a vehicle together (branded uniform).
  techniciansDiagnosis: {
    id: "techniciansDiagnosis",
    src: "/images/vision-motors-technicians-diagnosis-pretoria.jpg",
    alt: "Two Vision Motors technicians diagnosing a vehicle together in the workshop, Wonderboom South, Pretoria",
    aspect: "3/4",
    shotBrief: "Two technicians working a fault together — teamwork and expertise.",
    priority: 5,
  },

  // ✅ REAL. Specialist tooling — the equipment behind the diagnostics work.
  tools: {
    id: "tools",
    src: "/images/vision-motors-workshop-tools-pretoria.jpg",
    alt: "Specialist workshop tools and equipment at Vision Motors, Pretoria",
    aspect: "3/4",
    shotBrief: "Specialist tooling laid out — the equipment behind the work.",
    priority: 9,
  },
};

/** Ordered shot list for the client brief. Rendered in PROJECT_STATUS.md. */
export const photoshootBrief = Object.values(imagesConfig)
  .filter((slot) => slot.src === null)
  .sort((a, b) => a.priority - b.priority);

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
  hero: {
    id: "hero",
    // ✅ THE ONE REAL PHOTOGRAPH. Two Vision Motors technicians in branded
    // gold-on-black uniform working on an engine bay, workshop job board behind.
    src: "/images/vision-motors-technicians-engine-bay-pretoria.jpg",
    alt: "Two Vision Motors technicians working on an engine bay in the workshop in Wonderboom South, Pretoria",
    aspect: "3/2",
    shotBrief:
      "REPLACE WITH: wide workshop interior, bays occupied, real customer vehicles, good natural light. 16:9 @ 2400px.",
    priority: 1,
  },

  engineRoom: {
    id: "engineRoom",
    src: null,
    alt: "The engine overhaul room at Vision Motors, Pretoria",
    aspect: "4/3",
    shotBrief:
      "The engine overhaul room — a stripped engine on the bench, clean and organised. A customer review already invites people to come and look at this room, which makes it the single strongest proof asset available.",
    priority: 2,
  },

  diagnostics: {
    id: "diagnostics",
    src: null,
    alt: "A Vision Motors technician running electronic diagnostics on a customer vehicle",
    aspect: "4/3",
    shotBrief:
      "Technician at a diagnostic scanner with the screen visible, vehicle in shot. Supports the complex-fault-finding positioning.",
    priority: 3,
  },

  gearboxBench: {
    id: "gearboxBench",
    src: null,
    alt: "Gearbox and mechatronic unit work on the bench at Vision Motors",
    aspect: "4/3",
    shotBrief:
      "A gearbox or DSG/mechatronic unit stripped on the bench. Proves the specialist tier — this is the capability most competitors do not have.",
    priority: 4,
  },

  team: {
    id: "team",
    src: null,
    alt: "The Vision Motors workshop team in Wonderboom South, Pretoria",
    aspect: "16/9",
    shotBrief:
      "Team photograph in branded gold-on-black uniform, outside the workshop. Names needed for captions — testimonials already name Jacques, Christo, Mitchell and Cyril, and no competitor puts real named faces on their site.",
    priority: 5,
  },

  exterior: {
    id: "exterior",
    src: null,
    alt: "The Vision Motors workshop exterior and signage on Steve Biko Road, Pretoria",
    aspect: "16/9",
    shotBrief:
      "Street-facing exterior with signage clearly readable. Helps customers physically find the workshop and supports local SEO.",
    priority: 6,
  },

  vehicleCare: {
    id: "vehicleCare",
    src: null,
    alt: "A customer vehicle with seat and carpet protection fitted at Vision Motors",
    aspect: "4/3",
    shotBrief:
      "Close-up of seat and carpet protection fitted in a customer car. Makes the Carmen Keppler testimonial visible rather than just claimed.",
    priority: 7,
  },
};

/** Ordered shot list for the client brief. Rendered in PROJECT_STATUS.md. */
export const photoshootBrief = Object.values(imagesConfig)
  .filter((slot) => slot.src === null)
  .sort((a, b) => a.priority - b.priority);

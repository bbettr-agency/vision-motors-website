// ─────────────────────────────────────────────────────────────────────────────
//  HERO SERVICE SHOWCASE
//
//  The scroll-driven capability list on the right of the hero. Its job is to
//  make a visitor understand, in the first few seconds, that Vision Motors
//  handles diagnostics, engines, gearboxes AND complex specialist repairs — not
//  just basic servicing.
//
//  Sequence and labels mirror the approved service architecture
//  (config/routes.ts serviceRoutes). Descriptions are short, customer-focused,
//  and verified-safe:
//    ❌ no model years, no engine codes, no fault-mode claims
//    ❌ no warranty, no accreditation, no pricing
//    ✅ Ford item is restrained to "Ford Engine Work" (Correction 1,
//       2026-07-27). No model/generation, no Ranger-specialist claim, no
//       BT-50 — those stay fact-gated (C9/C21) until the client confirms which
//       models/engines they work on and what is done in-house. "Engine work,
//       done in our own engine shop" is defensible from the engine-shop
//       capability alone; the RANGER & BT50 signage is NOT enough for a
//       dedicated specialist claim.
//
//  `slug` links to the future service page. While that page is `live: false`
//  (config/routes.ts) the item is NOT rendered as a link — nothing points at a
//  404. When Phase 3 ships the page, the item becomes a tracked link.
// ─────────────────────────────────────────────────────────────────────────────

export type HeroShowcaseItem = {
  /** Display name — kept short for the hero. */
  name: string;
  /** One customer-focused line. */
  blurb: string;
  /** Icon key resolved by components/ui/icon.tsx. */
  icon: string;
  /** Matching service route slug (for the eventual link + tracking). */
  slug: string;
};

export const heroShowcase: HeroShowcaseItem[] = [
  {
    name: "Vehicle Diagnostics & Fault Finding",
    blurb:
      "The warning lights and intermittent faults other workshops couldn't pin down. We find the cause before we quote.",
    icon: "Gauge",
    slug: "/vehicle-diagnostics-pretoria",
  },
  {
    name: "Engine Reconditioning & Repairs",
    blurb:
      "Full rebuilds and reconditioning in our own engine shop — not sent away and marked up.",
    icon: "Cog",
    slug: "/engine-reconditioning-pretoria",
  },
  {
    name: "Gearbox Repairs",
    blurb:
      "Automatic and manual gearboxes repaired and overhauled, including slipping and jerking faults.",
    icon: "Settings2",
    slug: "/gearbox-repairs-pretoria",
  },
  {
    name: "DSG & Mechatronic Repairs",
    blurb:
      "Dual-clutch gearboxes and mechatronic units — the electronic control work most workshops send away.",
    icon: "CircuitBoard",
    slug: "/dsg-mechatronic-repairs-pretoria",
  },
  {
    name: "Driveline Repairs",
    blurb:
      "Differentials, transfer cases and propshafts. The driveline work that keeps bakkies and 4x4s going.",
    icon: "Disc3",
    slug: "/driveline-repairs-pretoria",
  },
  {
    name: "Car Servicing & Maintenance",
    blurb:
      "Routine servicing for cars, bakkies and commercial vehicles, petrol and diesel.",
    icon: "Car",
    slug: "/car-service-pretoria",
  },
  {
    name: "Brakes, Clutches & Mechanical Repairs",
    blurb:
      "Brakes, clutches and general mechanical repairs — diagnosed properly before anything is replaced.",
    icon: "CircleGauge",
    slug: "/brake-clutch-repairs-pretoria",
  },
  {
    name: "Ford Engine Work",
    blurb: "Ford engine work, done in our own engine shop.",
    icon: "Wrench",
    slug: "/ford-ranger-engine-specialists-pretoria",
  },
];

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

// Names + blurbs are DISPLAY COPY for the hero index only (this config is
// imported nowhere else). Kept terse and customer-outcome for the image-free
// motion hero (2026-08-04) — no service FACT changed, no Ranger-specialist
// wording restored.
export const heroShowcase: HeroShowcaseItem[] = [
  {
    name: "Diagnostics & Fault Finding",
    blurb: "Find the cause before replacing parts.",
    icon: "Gauge",
    slug: "/vehicle-diagnostics-pretoria",
  },
  {
    name: "Engine Reconditioning",
    blurb: "Internal engine assessment, repair and rebuild.",
    icon: "Cog",
    slug: "/engine-reconditioning-pretoria",
  },
  {
    name: "Gearbox Repairs",
    blurb: "Automatic and manual gearbox diagnosis and repair.",
    icon: "Settings2",
    slug: "/gearbox-repairs-pretoria",
  },
  {
    name: "DSG & Mechatronic Repairs",
    blurb: "Dual-clutch and mechatronic unit repairs.",
    icon: "CircuitBoard",
    slug: "/dsg-mechatronic-repairs-pretoria",
  },
  {
    name: "Driveline Repairs",
    blurb: "Diffs, transfer cases and propshafts.",
    icon: "Disc3",
    slug: "/driveline-repairs-pretoria",
  },
  {
    name: "Car Servicing & Maintenance",
    blurb: "Servicing for cars, bakkies and commercial vehicles.",
    icon: "Car",
    slug: "/car-service-pretoria",
  },
  {
    name: "Brakes, Clutches & Mechanical Repairs",
    blurb: "Brakes, clutches and general mechanical repairs.",
    icon: "CircleGauge",
    slug: "/brake-clutch-repairs-pretoria",
  },
  {
    name: "Ford Engine Work",
    blurb: "Ford engine work in our own engine shop.",
    icon: "Wrench",
    slug: "/ford-ranger-engine-specialists-pretoria",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICES — two tiers.
//
//  Tier "specialist" is the differentiator and leads the page: work most
//  independents sub-contract and dealers charge heavily for.
//  Tier "everyday" is the volume entry point.
//
//  SOURCING: every service below is listed on the client's own current website
//  (homepage and/or /services page). Nothing here is invented.
//
//  ❌ DELIBERATELY EXCLUDED — AdBlue / SCR removal.
//     The client's current /services page advertises permanently disabling the
//     emissions after-treatment system on Mercedes vehicles. This is emissions-
//     control defeat work: it affects the vehicle's compliance status and would
//     sit directly beneath a MIWA membership badge. Omitted from the site and
//     raised with the client as a separate commercial conversation.
//     See PROJECT_STATUS.md § Decisions.
// ─────────────────────────────────────────────────────────────────────────────

import type { ServiceItem } from "@/types/site";

export const servicesConfig: ServiceItem[] = [
  // ── Specialist tier ────────────────────────────────────────────────────────
  {
    title: "Complex Fault Finding",
    slug: "diagnostics",
    tier: "specialist",
    icon: "Gauge",
    description:
      "The intermittent faults, warning lights and problems other workshops have already looked at. We diagnose before we quote.",
    bullets: [
      "Electronic diagnostics",
      "Drivability and running faults",
      "Second-opinion diagnosis",
    ],
  },
  {
    title: "Engine Reconditioning",
    slug: "engine-reconditioning",
    tier: "specialist",
    icon: "Cog",
    description:
      "Full engine rebuilds and reconditioning in our own overhaul room — rod resizing, line boring, crack repairs and component replacement.",
    bullets: [
      "Complete engine rebuilds",
      "Reconditioned engines supplied",
      "Rod resizing and line boring",
    ],
  },
  {
    title: "Automatic & Manual Gearboxes",
    slug: "gearbox-repairs",
    tier: "specialist",
    icon: "Settings2",
    description:
      "Gearbox repair and overhaul for automatic and manual transmissions, including the driveline components most workshops send away.",
    bullets: ["Automatic overhauls", "Manual overhauls", "Slipping and jerking faults"],
  },
  {
    title: "DSG & Mechatronic Repairs",
    slug: "dsg-mechatronic-repairs",
    tier: "specialist",
    icon: "CircuitBoard",
    // Describing the technology (dual-clutch units are predominantly VW/Audi) is
    // factual and is stated on the client's own /services page. This is NOT a
    // claim of brand authorisation or approved-dealer status.
    description:
      "Direct-shift gearbox and mechatronic unit work — the electronic control units in dual-clutch transmissions, commonly found in Volkswagen and Audi vehicles.",
    bullets: ["DSG gearbox repair", "Mechatronic unit repair", "Limp-mode faults"],
  },
  {
    title: "Differentials & Transfer Cases",
    slug: "driveline-repairs",
    tier: "specialist",
    icon: "Disc3",
    description:
      "Differential overhauls, transfer cases and propshafts — the driveline work that keeps bakkies, SUVs and 4x4s on the road.",
    bullets: ["Differential overhauls", "Transfer cases", "Propshafts"],
  },

  // ── Everyday tier ──────────────────────────────────────────────────────────
  {
    title: "Vehicle Servicing",
    slug: "vehicle-servicing",
    tier: "everyday",
    icon: "Wrench",
    description:
      "Routine servicing for cars, bakkies and commercial vehicles of all makes and models.",
  },
  {
    title: "Brake Repairs",
    slug: "brake-repairs",
    tier: "everyday",
    icon: "CircleGauge",
    description:
      "Brake inspection, repair and replacement — diagnosed properly before anything is replaced.",
  },
  {
    title: "Belt Replacement",
    slug: "belt-replacement",
    tier: "everyday",
    icon: "RefreshCw",
    description:
      "Cambelt and drive belt replacement, before a worn belt becomes an engine rebuild.",
  },
  {
    title: "Oil Changes",
    slug: "oil-changes",
    tier: "everyday",
    icon: "Droplet",
    description:
      "Full oil and filter changes for passenger vehicles and commercial vehicles.",
  },
  {
    title: "Fuel System Cleaning",
    slug: "fuel-system-cleaning",
    tier: "everyday",
    icon: "Fuel",
    description:
      "Fuel system cleaning to restore running quality and engine performance.",
  },
];

export const specialistServices = servicesConfig.filter((s) => s.tier === "specialist");
export const everydayServices = servicesConfig.filter((s) => s.tier === "everyday");

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICE GROUPS — the homepage "what can they repair?" answer.
//
//  The eight verified capabilities above, grouped into four plain-language
//  buckets a normal car owner can scan. Each group states what it covers, the
//  everyday reasons someone needs it, and the specific work we do. Nothing new
//  or unsupported is introduced — every item traces back to servicesConfig and
//  the verified service architecture (config/routes.ts serviceRoutes).
// ─────────────────────────────────────────────────────────────────────────────
export type ServiceGroup = {
  key: string;
  title: string;
  icon: string;
  /** One line — what this group covers. */
  covers: string;
  /** Everyday, customer-language reasons someone books this. */
  reasons: string[];
  /** The specific work we do (capabilities). */
  work: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    key: "diagnostics",
    title: "Diagnostics & Fault Finding",
    icon: "Gauge",
    covers:
      "Warning lights, intermittent faults and problems another workshop has already looked at.",
    reasons: [
      "Check-engine or warning light on",
      "A fault that comes and goes",
      "A second opinion after another quote",
    ],
    work: [
      "Electronic diagnostics",
      "Drivability & running faults",
      "Second-opinion diagnosis",
    ],
  },
  {
    key: "engines",
    title: "Engines",
    icon: "Cog",
    covers:
      "Engine repairs and full reconditioning, done in our own engine shop rather than sent away.",
    reasons: [
      "Knocking, smoking or overheating",
      "High oil use or low power",
      "A quoted engine replacement",
    ],
    work: [
      "Complete engine rebuilds",
      "Reconditioned engines supplied",
      "Rod resizing & line boring",
    ],
  },
  {
    key: "gearboxes",
    title: "Gearboxes & Driveline",
    icon: "Settings2",
    covers:
      "Automatic, manual, DSG / mechatronic and driveline work most workshops send away.",
    reasons: [
      "Slipping, jerking or harsh shifts",
      "Gearbox stuck in limp mode",
      "Noise from the diff or transfer case",
    ],
    work: [
      "Automatic & manual overhauls",
      "DSG & mechatronic repair",
      "Diffs, transfer cases & propshafts",
    ],
  },
  {
    key: "servicing",
    title: "Servicing & Mechanical Repairs",
    icon: "Wrench",
    covers:
      "Routine servicing and everyday mechanical repairs for all makes and models.",
    reasons: [
      "A service is due",
      "Brakes feeling soft or noisy",
      "A cambelt or clutch at end of life",
    ],
    work: [
      "Vehicle servicing",
      "Brakes, clutches & belts",
      "Oil changes & fuel-system cleaning",
    ],
  },
];

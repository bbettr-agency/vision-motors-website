// ─────────────────────────────────────────────────────────────────────────────
//  TRUST STRIP + WHY-US
//
//  RULE: every entry here must be defensible from the client's own published
//  content or from a customer's own words. Nothing aspirational.
//
//  ❌ NOT INCLUDED (and why):
//     - "Since 1992" / "34 years"  → founding year unverified (site self-contradicts)
//     - MIWA badge                 → membership status unverified, no number
//     - Any warranty claim         → terms unverified, and a 1-star review
//                                    describes a refused warranty claim
//     - "5 star" anything          → ambiguous (MIWA grading vs Google rating),
//                                    and 8 one-star Google reviews sit behind 4.2★
//     - "Affordable / cheapest"    → the current site's "we are the only car repair
//                                    shop who provide affordable prices in Pretoria"
//                                    is false on its face and a CPA exposure
//     - Turnaround times           → unverified; a 1-star review cites a 6-week wait
//     - Staff qualifications       → unverified
//     - Workshop capacity          → unverified
// ─────────────────────────────────────────────────────────────────────────────

import type { TrustItem } from "@/types/site";

/**
 * Compact credibility strip directly beneath the hero.
 * All four items are supported by the client's own published content.
 */
export const trustConfig: TrustItem[] = [
  {
    title: "In-house engine & gearbox rebuilds",
    description:
      "Engine overhaul room and driveline work done on site, not sent away.",
    icon: "Cog",
  },
  {
    title: "All makes and models",
    description:
      "Cars, bakkies, SUVs and commercial vehicles — petrol and diesel.",
    icon: "Car",
  },
  {
    title: "Diagnosis before quote",
    description:
      "We find the actual fault first, then tell you what it costs to fix.",
    icon: "Search",
  },
  {
    title: "On Steve Biko Road, Pretoria",
    description:
      "Independent workshop in Wonderboom South, on the M5 through the Moot.",
    icon: "MapPin",
  },
];

/**
 * Why-choose-us. Three strong entries beat six generic ones (SYSTEM copy standard).
 * Each maps to a ranked objection from the approved plan §4.
 */
export const whyUsConfig: TrustItem[] = [
  {
    // Objection #1 — "they'll do work I never approved"
    title: "Nothing gets done without your say-so",
    description:
      "We diagnose the fault, explain it in plain language and quote you. Work starts when you approve it — not before.",
    icon: "ClipboardCheck",
  },
  {
    // Objection #7 — "I won't understand what they tell me"
    title: "You'll understand what's actually wrong",
    description:
      "No jargon and no hand-waving. We show you the fault and talk you through what it means for your car.",
    icon: "MessagesSquare",
  },
  {
    // Backed by a real published testimonial (Carmen Keppler) — see reviews-config.ts
    title: "Your car comes back the way it went in",
    description:
      "Seat and carpet protection while we work, and your vehicle returned clean.",
    icon: "ShieldCheck",
  },
];

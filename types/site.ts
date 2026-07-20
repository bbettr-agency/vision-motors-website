// ─────────────────────────────────────────────────────────────────────────────
//  SHARED CONFIG TYPES
//  Config is a pure data layer — no React, no components. Icons are string keys
//  resolved by components/ui/icon.tsx.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Verification status for any client-supplied fact.
 * Per SYSTEM/00-OPERATING-MODEL.md: claims marked `assumed` may NOT appear in site copy.
 *
 * - `verified`      — confirmed at a primary source we can cite
 * - `client-stated` — published by the client somewhere, but not independently confirmed
 * - `assumed`       — inferred. NEVER renders.
 * - `unverified`    — explicitly pending client confirmation. NEVER renders as fact.
 */
export type ClaimStatus = "verified" | "client-stated" | "assumed" | "unverified";

/** A fact that renders only when its status permits. See lib/claims.ts. */
export type Claim<T> = {
  value: T | null;
  status: ClaimStatus;
  /** Why this status — shown in PROJECT_STATUS.md, never in the UI. */
  note?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  slug: string;
  description: string;
  icon: string;
  bullets?: string[];
  /** "specialist" renders in the differentiator tier; "everyday" in the volume tier. */
  tier: "specialist" | "everyday";
  /** Future dedicated page. Not built yet — see config/routes.ts futureRoutes. */
  href?: string;
};

export type SymptomItem = {
  /** In the customer's words, not the workshop's. */
  label: string;
  icon: string;
  /** Pre-fills the booking form's "Service Required" field. */
  presetService: string;
};

export type TrustItem = {
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  /** Exactly as published on the client's current site. Do not embellish. */
  role: string;
  language?: "en" | "af";
  /** Where this testimonial is currently published. */
  source: string;
};

/**
 * An image slot. `src: null` renders a documented placeholder rather than
 * a misleading stock photo (SYSTEM/08 Image Strategy Rule).
 */
export type ImageSlot = {
  id: string;
  src: string | null;
  alt: string;
  /** Aspect ratio hint for the placeholder, e.g. "16/9". */
  aspect: string;
  /** Brief for the photographer. Renders in the placeholder during the demo. */
  shotBrief: string;
  /** Conversion priority — 1 is the most valuable shot to capture first. */
  priority: number;
};

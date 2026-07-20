// ─────────────────────────────────────────────────────────────────────────────
//  ROUTES — single source of truth for navigation AND sitemap.
//  Keeps app/sitemap.ts and the header/footer nav from ever drifting apart.
// ─────────────────────────────────────────────────────────────────────────────

import type { NavItem } from "@/types/site";

/**
 * Homepage-only build. Nav links are in-page anchors.
 * When service pages are built these become real routes without changing the
 * header, footer or sitemap components.
 */
export const navRoutes: NavItem[] = [
  { label: "Specialist Work", href: "#services" },
  { label: "Diagnostics", href: "#diagnostics" },
  { label: "Your Rights", href: "#your-rights" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

/** Live, indexable routes. */
export const sitemapRoutes: string[] = ["/"];

/**
 * Planned pages — architecture is prepared, pages intentionally NOT built
 * (homepage-only scope). Each maps to a keyword cluster from the SEO research.
 * Slugs match config/services-config.ts so links wire up mechanically later.
 */
export const futureRoutes = {
  services: "/services",
  diagnostics: "/diagnostics",
  engineReconditioning: "/engine-reconditioning",
  gearboxRepairs: "/gearbox-repairs",
  dsgMechatronic: "/dsg-mechatronic-repairs",
  drivelineRepairs: "/driveline-repairs",
  brakeRepairs: "/brake-repairs",
  vehicleServicing: "/vehicle-servicing",
  towing: "/towing",
  warrantyRights: "/your-warranty-rights",
  about: "/about-us",
  contact: "/contact-us",
  thankYou: "/thank-you",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
} as const;

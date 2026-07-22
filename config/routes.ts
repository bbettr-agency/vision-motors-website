// ─────────────────────────────────────────────────────────────────────────────
//  ROUTES — single source of truth for navigation, breadcrumbs AND the sitemap.
//  Keeps app/sitemap.ts and the header/footer nav from ever drifting apart, and
//  guarantees no page can be orphaned.
// ─────────────────────────────────────────────────────────────────────────────

import type { NavItem } from "@/types/site";

/** Primary navigation. */
export const navRoutes: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

/**
 * Service pages. `live: false` means the route is planned and briefed but not
 * yet built — it renders in the services hub as a described capability rather
 * than a dead link, and is excluded from the sitemap.
 *
 * Phase 3 builds these. Each needs its own page brief and ≥1 real photograph
 * before it ships (docs/SITE-ARCHITECTURE.md, docs/SERVICE-PAGE-BRIEFS.md).
 */
export type ServiceRoute = {
  slug: string;
  label: string;
  navLabel: string;
  live: boolean;
};

export const serviceRoutes: ServiceRoute[] = [
  {
    slug: "/vehicle-diagnostics-pretoria",
    label: "Vehicle Diagnostics & Fault Finding",
    navLabel: "Diagnostics",
    live: false,
  },
  {
    slug: "/engine-reconditioning-pretoria",
    label: "Engine Reconditioning & Repairs",
    navLabel: "Engine Reconditioning",
    live: false,
  },
  {
    slug: "/ford-ranger-engine-specialists-pretoria",
    label: "Ford Ranger Engine Specialists",
    navLabel: "Ford Ranger Engines",
    live: false,
  },
  {
    slug: "/gearbox-repairs-pretoria",
    label: "Gearbox Repairs",
    navLabel: "Gearbox Repairs",
    live: false,
  },
  {
    slug: "/dsg-mechatronic-repairs-pretoria",
    label: "DSG & Mechatronic Repairs",
    navLabel: "DSG & Mechatronic",
    live: false,
  },
  {
    slug: "/driveline-repairs-pretoria",
    label: "Driveline Repairs",
    navLabel: "Driveline",
    live: false,
  },
  {
    slug: "/brake-clutch-repairs-pretoria",
    label: "Brakes, Clutches & Mechanical Repairs",
    navLabel: "Brakes & Clutches",
    live: false,
  },
  {
    slug: "/car-service-pretoria",
    label: "Car Servicing & Maintenance",
    navLabel: "Car Servicing",
    live: false,
  },
];

/** Utility / legal routes. */
export const utilityRoutes = {
  home: "/",
  services: "/services",
  about: "/about-us",
  contact: "/contact-us",
  booking: "/book-a-vehicle-in",
  work: "/our-work",
  warrantyRights: "/your-warranty-rights",
  thankYou: "/thank-you",
  privacy: "/privacy-policy",
  terms: "/website-terms-of-use",
} as const;

type SitemapEntry = {
  path: string;
  priority: number;
  changeFreq: "weekly" | "monthly" | "yearly";
};

/**
 * Indexable routes → app/sitemap.ts.
 * `/thank-you` is deliberately excluded and disallowed in robots.
 * Service pages append themselves automatically once `live: true`.
 */
export const sitemapRoutes: SitemapEntry[] = [
  { path: "/", priority: 1.0, changeFreq: "weekly" },
  { path: "/services", priority: 0.9, changeFreq: "monthly" },
  { path: "/book-a-vehicle-in", priority: 0.9, changeFreq: "monthly" },
  { path: "/contact-us", priority: 0.8, changeFreq: "monthly" },
  { path: "/about-us", priority: 0.7, changeFreq: "monthly" },
  { path: "/our-work", priority: 0.6, changeFreq: "monthly" },
  { path: "/your-warranty-rights", priority: 0.6, changeFreq: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFreq: "yearly" },
  { path: "/website-terms-of-use", priority: 0.2, changeFreq: "yearly" },
  ...serviceRoutes
    .filter((s) => s.live)
    .map((s) => ({
      path: s.slug,
      priority: 0.8,
      changeFreq: "monthly" as const,
    })),
];

/** Human labels for breadcrumb trails, keyed by path. */
export const routeLabels: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/about-us": "About Us",
  "/contact-us": "Contact",
  "/book-a-vehicle-in": "Book Your Car In",
  "/our-work": "Our Work",
  "/your-warranty-rights": "Your Warranty Rights",
  "/thank-you": "Thank You",
  "/privacy-policy": "Privacy Policy",
  "/website-terms-of-use": "Website Terms of Use",
  ...Object.fromEntries(serviceRoutes.map((s) => [s.slug, s.label])),
};

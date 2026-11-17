import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";
import { sitemapRoutes } from "@/config/routes";

// Generated from config/routes.ts — the same source the navigation and
// breadcrumbs use, so the sitemap can never drift from what is linked.
// Service pages append themselves automatically once `live: true`.
// `/thank-you` is excluded here and carries noindex (see app/robots.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  // `lastModified` is a REAL per-route content date maintained in
  // config/routes.ts — never `new Date()`, which would stamp every URL with the
  // build time on each deploy (a false freshness signal).
  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.website}${route.path === "/" ? "" : route.path}`,
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}

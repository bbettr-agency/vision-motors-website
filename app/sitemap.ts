import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";
import { sitemapRoutes } from "@/config/routes";

// Generated from config/routes.ts — the same source the navigation and
// breadcrumbs use, so the sitemap can never drift from what is linked.
// Service pages append themselves automatically once `live: true`.
// `/thank-you` is excluded here and disallowed in app/robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.website}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}

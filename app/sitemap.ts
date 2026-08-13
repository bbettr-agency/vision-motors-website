import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";
import { sitemapRoutes } from "@/config/routes";

// Generated from config/routes.ts — the same source the navigation and
// breadcrumbs use, so the sitemap can never drift from what is linked.
// Service pages append themselves automatically once `live: true`.
// `/thank-you` is excluded here and disallowed in app/robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  // `lastModified` is intentionally OMITTED. It was `new Date()`, which stamped
  // every URL with the build time on every deploy — a false "everything changed"
  // freshness signal Google is right to distrust. With no per-route content-
  // change tracking available, no lastmod is more honest than a fake one.
  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.website}${route.path === "/" ? "" : route.path}`,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}

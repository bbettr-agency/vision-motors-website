import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";
import { sitemapRoutes } from "@/config/routes";

// Generated from config/routes.ts — the same source the navigation uses,
// so the sitemap and the nav can never drift apart.
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: `${siteConfig.website}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

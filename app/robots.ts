import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Conversion page — kept out of the index.
      disallow: ["/thank-you"],
    },
    sitemap: `${siteConfig.website}/sitemap.xml`,
  };
}

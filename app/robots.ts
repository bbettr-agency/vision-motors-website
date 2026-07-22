import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/thank-you", // conversion page — kept out of the index
        "/api/",
      ],
    },
    sitemap: `${siteConfig.website}/sitemap.xml`,
    host: siteConfig.website,
  };
}

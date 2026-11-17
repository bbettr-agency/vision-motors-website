import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";

// `/thank-you` is NOT disallowed: it carries `noindex, nofollow`, and a robots
// disallow would stop crawlers fetching it and ever seeing that noindex.
// No `host` line — non-standard (Yandex-only) and redundant with canonicals.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteConfig.website}/sitemap.xml`,
  };
}

import type { Metadata } from "next";

import { seoConfig } from "@/config/seo-config";
import { siteConfig } from "@/config/site-config";

type CreateMetadataOptions = {
  /** Page title WITHOUT the brand suffix — the suffix is appended here. */
  title?: string;
  /** Full title, used verbatim. Use when the brand suffix would push past 60 chars. */
  titleAbsolute?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  ogImage?: string;
};

/**
 * Single source of page metadata. Every route uses this, so canonical, OG,
 * Twitter and robots handling can never drift between pages.
 *
 * The current live site has NO canonical tag on any page — this is the fix.
 */
export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const title =
    options.titleAbsolute ??
    (options.title
      ? `${options.title} | ${siteConfig.businessName}`
      : seoConfig.title);

  const description = options.description ?? seoConfig.description;
  const path = options.path ?? "";
  const url = `${siteConfig.website}${path}`;
  const image = options.ogImage ?? seoConfig.ogImage;

  return {
    metadataBase: new URL(siteConfig.website),
    title,
    description,
    keywords: seoConfig.keywords,
    authors: [{ name: seoConfig.author }],
    robots: options.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.businessName,
      type: "website",
      locale: seoConfig.locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.businessName} — ${siteConfig.suburb}, ${siteConfig.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

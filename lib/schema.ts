// ─────────────────────────────────────────────────────────────────────────────
//  STRUCTURED DATA (JSON-LD)
//
//  The current live site emits ZERO structured data. This is the largest
//  technical opportunity available for a local business with a physical
//  premises, a phone number and 71 Google reviews.
//
//  TRUTH RULES ENFORCED HERE:
//   1. NO `aggregateRating` and NO `review` schema. The Google profile shows
//      4.2★ from 71 reviews with 8 one-star entries. Emitting rating schema
//      would surface the weakest asset in search results, and the OS forbids
//      review schema that isn't from genuine consented reviews.
//   2. Unverified fields are OMITTED, never guessed. `streetAddress`,
//      `postalCode`, `geo` and `openingHoursSpecification` only appear once the
//      client confirms them — a wrong address in schema is worse than none,
//      because Google treats it as an authoritative entity signal.
//   3. No accreditation claims until MIWA membership is confirmed.
//
//  Type is `AutoRepair` — a LocalBusiness subtype, strictly better than the
//  generic LocalBusiness for this business.
// ─────────────────────────────────────────────────────────────────────────────

import { faqConfig } from "@/config/faq-config";
import { seoConfig } from "@/config/seo-config";
import { servicesConfig } from "@/config/services-config";
import { siteConfig } from "@/config/site-config";

type JsonLd = Record<string, unknown>;

function buildAddress(): JsonLd {
  const address: JsonLd = {
    "@type": "PostalAddress",
    addressLocality: siteConfig.suburb,
    addressRegion: siteConfig.region,
    addressCountry: "ZA",
  };

  // Only publish a street address once ONE canonical address is confirmed.
  // Four conflicting addresses are currently in circulation across directories.
  if (siteConfig.addressStatus === "verified" && siteConfig.streetNumber) {
    address.streetAddress = `${siteConfig.streetNumber} ${siteConfig.street}`;
  }
  if (siteConfig.postalCode) {
    address.postalCode = siteConfig.postalCode;
  }

  return address;
}

export const autoRepairSchema: JsonLd = (() => {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.businessName,
    legalName: siteConfig.legalName,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.website}${seoConfig.ogImage}`,
    description: seoConfig.description,
    address: buildAddress(),
    areaServed: [
      { "@type": "City", name: "Pretoria" },
      { "@type": "AdministrativeArea", name: "Gauteng" },
    ],
    knowsAbout: [
      "Vehicle diagnostics and fault finding",
      "Engine reconditioning",
      "Automatic and manual gearbox repair",
      "DSG dual-clutch transmission repair",
      "Mechatronic unit repair",
      "Differential and transfer case overhaul",
      "Vehicle servicing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle repair and servicing",
      itemListElement: servicesConfig.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  // Omitted unless verified — see truth rule 2 above.
  if (siteConfig.geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    };
  }

  if (siteConfig.hours.status === "verified" && siteConfig.hours.value) {
    schema.openingHoursSpecification = siteConfig.hours.value.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      description: h.time,
    }));
  }

  if (siteConfig.founded.status === "verified" && siteConfig.founded.value) {
    schema.foundingDate = String(siteConfig.founded.value);
  }

  const sameAs = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.googleBusinessProfileUrl,
  ].filter((url): url is string => Boolean(url));

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return schema;
})();

export const faqSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  // Same array that renders the visible FAQ — the two can never drift.
  mainEntity: faqConfig.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const websiteSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.businessName,
  url: siteConfig.website,
};

/** Prepared for inner pages. Not used on the homepage. */
export const breadcrumbSchema = (label: string, path: string): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.website,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: label,
      item: `${siteConfig.website}${path}`,
    },
  ],
});

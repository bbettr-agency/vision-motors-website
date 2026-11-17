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
import { teamMembers } from "@/config/team-config";

type JsonLd = Record<string, unknown>;

const businessId = `${siteConfig.website}/#business`;
const engineShopId = `${siteConfig.website}/#engine-shop`;
const websiteId = `${siteConfig.website}/#website`;

/**
 * Shared hours as ONE OpeningHoursSpecification with a dayOfWeek array
 * (equivalent to five identical objects, but compact). Client-provided hours
 * only — returns undefined when they are not confirmed.
 */
function openingHours(): JsonLd | undefined {
  if (
    (siteConfig.hours.status === "verified" ||
      siteConfig.hours.status === "client-stated") &&
    siteConfig.hours.value
  ) {
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.hours.value.map((h) => `https://schema.org/${h.day}`),
      opens: "07:30",
      closes: "17:00",
    };
  }
  return undefined;
}

const logoObject: JsonLd = {
  "@type": "ImageObject",
  url: `${siteConfig.website}${siteConfig.logo}`,
};

/**
 * Confirmed team members (config/team-config.ts — name + role only, client-
 * confirmed 2026-08-12). Nothing else is asserted: no credentials, no tenure.
 */
function teamPeople(branchId: string): JsonLd[] {
  return teamMembers
    .filter((m) => m.branchId === branchId)
    .map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      image: `${siteConfig.website}${m.image}`,
    }));
}

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
    "@id": businessId,
    name: siteConfig.businessName,
    alternateName: siteConfig.alternateName,
    url: `${siteConfig.website}/`,
    logo: logoObject,
    // Primary LOCATION = the Vision Motors branch → its OWN number (082 823 5178),
    // not the company switchboard. Each location carries its correct phone.
    telephone:
      siteConfig.branches.find((b) => b.primary)?.phoneLink.replace("tel:", "") ??
      siteConfig.phone,
    // The company switchboard (012 335 0070) is the number promoted on every
    // page, so it is published as the customer-service contact point. The
    // branch's own number stays in `telephone` above — numbers never crossed.
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "ZA",
    },
    email: siteConfig.email,
    image: `${siteConfig.website}${seoConfig.ogImage}`,
    description: seoConfig.description,
    address: buildAddress(),
    hasMap: siteConfig.branches.find((b) => b.primary)?.mapsUrl,
    department: { "@id": engineShopId },
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

  // `legalName` is emitted only once the registered entity name is confirmed.
  if (siteConfig.legalName) {
    schema.legalName = siteConfig.legalName;
  }

  // Hours are client-provided (not merely assumed), so they are published.
  // Emitted as proper opens/closes times rather than a free-text description,
  // which is what Google actually parses.
  const hours = openingHours();
  if (hours) schema.openingHoursSpecification = hours;

  const people = teamPeople("vision-motors");
  if (people.length > 0) schema.employee = people;

  if (siteConfig.founded.status === "verified" && siteConfig.founded.value) {
    schema.foundingDate = String(siteConfig.founded.value);
  }

  // ⛔ Accreditation. Emits `hasCredential` ONLY once membership evidence is
  // supplied. Logo files and a self-claim are not evidence (C2).
  const credentials = Object.entries(siteConfig.accreditations)
    .filter(([, claim]) => claim.status === "verified" && claim.value)
    .map(([body]) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "membership",
      recognizedBy: { "@type": "Organization", name: body.toUpperCase() },
    }));
  if (credentials.length > 0) {
    schema.hasCredential = credentials;
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

/**
 * SECOND WORKSHOP — The Engine Shop/Vision Motors (1197 Steve Biko Rd).
 *
 * Modelled as ONE organisation, TWO locations: a distinct `AutoRepair` node
 * linked to the primary `#business` via `parentOrganization` (`branchOf` is
 * superseded in schema.org; the primary lists this node as a `department`)
 * — schema.org-correct multi-location. It does NOT merge the two addresses into one entity.
 *
 * Truth-gating preserved:
 *   • 1197 Steve Biko Rd + postcode 0084 + the branch's own number are confirmed
 *     (client instruction 2026-08-11), so they ARE emitted.
 *   • geo is omitted for both — a wrong coordinate is worse than none.
 *   • Each branch uses its OWN telephone; numbers are never crossed.
 */
export const engineShopBranchSchema: JsonLd = (() => {
  const branch = siteConfig.branches.find((b) => !b.primary);
  if (!branch) return {} as JsonLd;

  const address: JsonLd = {
    "@type": "PostalAddress",
    streetAddress: branch.streetLine,
    addressLocality: branch.suburb,
    addressRegion: branch.region,
    addressCountry: "ZA",
  };
  if (branch.postalCode) address.postalCode = branch.postalCode;

  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": engineShopId,
    name: branch.name,
    url: `${siteConfig.website}/`,
    logo: logoObject,
    // The Engine Shop's OWN number (069 007 2402) — never the other branch's.
    telephone: branch.phoneLink.replace("tel:", ""),
    email: siteConfig.email,
    image: `${siteConfig.website}${seoConfig.ogImage}`,
    address,
    hasMap: branch.mapsUrl,
    parentOrganization: { "@id": businessId },
    areaServed: [
      { "@type": "City", name: "Pretoria" },
      { "@type": "AdministrativeArea", name: "Gauteng" },
    ],
  };

  // Same shared hours as the main business (client-provided).
  const hours = openingHours();
  if (hours) schema.openingHoursSpecification = hours;

  const people = teamPeople("engine-shop-vision-motors");
  if (people.length > 0) schema.employee = people;

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
  "@id": websiteId,
  name: siteConfig.businessName,
  alternateName: siteConfig.alternateName,
  url: `${siteConfig.website}/`,
  inLanguage: "en-ZA",
  publisher: { "@id": businessId },
};

/**
 * BreadcrumbList built from the SAME trail array that renders the visible
 * breadcrumbs (components/ui/breadcrumbs.tsx), so the two cannot drift.
 */
export const breadcrumbSchema = (
  trail: { label: string; href: string }[]
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.label,
    item: `${siteConfig.website}${crumb.href === "/" ? "" : crumb.href}`,
  })),
});

/**
 * Service schema for a service page. References the AutoRepair entity by @id
 * rather than redeclaring it, so there is exactly one business entity sitewide.
 *
 * ⚠️ No `offers` / `priceRange` — no pricing is published or confirmed.
 */
export const serviceSchema = (input: {
  name: string;
  description: string;
  path: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: input.name,
  description: input.description,
  serviceType: input.name,
  url: `${siteConfig.website}${input.path}`,
  provider: { "@id": businessId },
  areaServed: [
    { "@type": "City", name: "Pretoria" },
    { "@type": "AdministrativeArea", name: "Gauteng" },
  ],
});

/** FAQPage from a visible FAQ array. Only ever called where an FAQ renders. */
export const faqPageSchema = (
  items: { question: string; answer: string }[]
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

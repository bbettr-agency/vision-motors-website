// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONFIG — the single source of business truth.
//  No copy, contact detail, stat or URL is hardcoded in any component.
//
//  ⚠️  VERIFICATION STATUS
//  Fields marked `unverified` render as neutral copy or are omitted entirely.
//  They must NOT be published as fact until the client confirms them.
//  Full list of outstanding items: see PROJECT_STATUS.md § Client Verification Queue.
// ─────────────────────────────────────────────────────────────────────────────

import type { Claim, ClaimStatus } from "@/types/site";

export const siteConfig = {
  businessName: "Vision Motors",
  /** Registered entity name, used in schema `legalName`. */
  legalName: "Vision Motors CC",
  shortName: "Vision Motors",

  // ── Contact ────────────────────────────────────────────────────────────────
  // VERIFIED: appears identically on the client's own site and every directory.
  phone: "+27123350070", // E.164, for schema
  phoneDisplay: "012 335 0070", // human-readable — never allowed to wrap
  phoneLink: "tel:+27123350070",

  email: "service@visionmotors.co.za", // VERIFIED — client's own site
  emailLink: "mailto:service@visionmotors.co.za",

  website: "https://visionmotors.co.za",

  // ── Location ───────────────────────────────────────────────────────────────
  // ⚠️ UNVERIFIED STREET NUMBER. Four addresses are in circulation:
  //      1059 & 1197 Steve Biko Road (client's own site — lists BOTH)
  //      1059 Steve Biko Rd, 0031    (Google Business Profile)
  //      1197 Steve Biko Road, Gezina (MechanicBuddy)
  //      867 Voortrekkers Rd, 0084   (yep.co.za, Hellopeter, africanadvice)
  // Steve Biko Road was renamed from Voortrekker Road in 2012, but 867/1059/1197
  // do not reconcile as a renaming artefact.
  // Until the client confirms ONE canonical address we publish the street and
  // suburb only — which is accurate — and omit the number.
  // TODO(client): confirm the single canonical street address, then set
  //               `streetNumber` and flip `addressStatus` to "verified".
  streetNumber: null as string | null,
  street: "Steve Biko Road",
  suburb: "Wonderboom South",
  city: "Pretoria",
  region: "Gauteng",
  country: "South Africa",
  postalCode: null as string | null, // ⚠️ 0031 vs 0084 conflict — unverified
  addressStatus: "unverified" as ClaimStatus,
  /** Safe display string while the number is unconfirmed. */
  addressDisplay: "Steve Biko Road, Wonderboom South, Pretoria",

  // ⚠️ Coordinates omitted — they depend on the unresolved street number.
  // TODO(client): add geo once the address is confirmed (needed for AutoRepair schema).
  geo: null as { latitude: number; longitude: number } | null,

  // ── Business hours ─────────────────────────────────────────────────────────
  // ⚠️ CONTRADICTORY SOURCES. The client's homepage says "Open 5 Days a Week";
  // the /services page says "Our team works 24/7". Directories say 07:00–17:00
  // and 07:15–17:00 Mon–Fri. None is confirmed, and Saturday is unknown.
  // We publish NO hours until confirmed — an incorrect hours claim costs real
  // customers a wasted trip.
  // TODO(client): confirm exact opening hours including Saturday.
  hours: {
    value: null,
    status: "unverified",
    note: "Homepage says '5 days a week'; /services says '24/7'. Directories say 07:00-17:00 / 07:15-17:00. Saturday unknown.",
  } as Claim<{ day: string; time: string }[]>,

  // ── Heritage ───────────────────────────────────────────────────────────────
  // ⚠️ The client's site says "since 1992" in one place and "almost 30 years" in
  // another (the latter written ~2020 and never updated). 1992 → 2026 is 34 years.
  // No third-party corroboration found. We publish NEITHER the year nor a
  // years-in-business number until confirmed.
  // TODO(client): confirm founding year. This is one of the strongest available
  //               trust signals and is currently unusable.
  founded: {
    value: null,
    status: "unverified",
    note: "Client site states 1992 in one place, 'almost 30 years' in another. No third-party source.",
  } as Claim<number>,

  // ── Accreditation ──────────────────────────────────────────────────────────
  // The client's /services page says "Our RMI Approved Workshop", and sayellow.com
  // independently lists Vision Motors as "A Member of the Motor Industry Workshop
  // Association (MIWA)". That is corroboration, not confirmation — no membership
  // number, no current-status check against the RMI/MIWA register.
  //
  // ❌ EXPLICITLY FORBIDDEN (per approved plan §1):
  //    - "5 STAR RMI approved"  → that wording belongs to LR Auto Workshop, a
  //                               different Pretoria business. Never use it.
  //    - "Land Rover & Jaguar Specialists" → also LR Auto's, not Vision Motors'.
  //    - "largest independent workshop in Pretoria" → also LR Auto's.
  //
  // TODO(client): confirm current MIWA membership + membership number, then set
  //               isMember true and flip status. Badge stays hidden until then.
  miwa: {
    value: null,
    status: "unverified",
    note: "Client's /services page claims RMI approval; sayellow.com lists MIWA membership. No number, no register check.",
  } as Claim<{ isMember: boolean; membershipNumber: string | null }>,

  // ── Warranty ───────────────────────────────────────────────────────────────
  // ⚠️ DO NOT PUBLISH. A "two years unlimited kilometres" figure appears ONLY
  // inside a customer testimonial on the client's site — never as company policy.
  // A separate 1-star Google review describes a warranty claim being refused.
  // Publishing an unconfirmed warranty is both a truth risk and a dispute risk.
  // TODO(client): obtain current warranty terms IN WRITING — what work is covered,
  //               for how long, with what exclusions.
  warranty: {
    value: null,
    status: "unverified",
    note: "'2yr/unlimited km' appears only inside a testimonial. A 1-star review describes a refused warranty claim. Requires written terms.",
  } as Claim<{ months: number; kilometres: number | null; scope: string }>,

  // ── Towing ─────────────────────────────────────────────────────────────────
  // Client's homepage states "Our team tow multiple cars a week". Hours, radius
  // and whether it is their own truck or a partner are all unknown.
  // TODO(client): confirm towing hours, radius and ownership before promoting it.
  towing: {
    value: null,
    status: "unverified",
    note: "Client site claims towing. Hours, radius and own-truck-vs-partner unconfirmed.",
  } as Claim<{ hours: string; radiusKm: number }>,

  // ── Channels ───────────────────────────────────────────────────────────────
  // ⚠️ WhatsApp is NOT published. A mobile number (+27 61 642 5591) appears on
  // MechanicBuddy but never on the client's own site. In the SA market WhatsApp
  // is a primary conversion channel, so this is a real missed opportunity —
  // the component is built and wired, just disabled behind this flag.
  // TODO(client): confirm the WhatsApp number, then set enabled: true.
  whatsapp: {
    enabled: false,
    number: null as string | null,
    link: null as string | null,
    prefillMessage:
      "Hi Vision Motors, I'd like to book my car in. Vehicle: ",
  },

  social: {
    // VERIFIED — linked from the client's own site footer.
    facebook: "https://www.facebook.com/carserviceinpretoria/",
    instagram: null as string | null,
  },

  // ⚠️ The Google Business Profile carries 71 reviews (4.2★) but appears to have
  // NO website link attached. Attaching it is likely the single highest-traffic
  // fix available to this business — higher than any on-page change.
  // TODO(client): verify GBP ownership and attach the website URL.
  googleBusinessProfileUrl: null as string | null,

  // ── Conversion ─────────────────────────────────────────────────────────────
  cta: "Book Your Car In",
  ctaShort: "Book In",
  ctaCall: "Call the workshop",

  /** Where every primary CTA lands. Single destination, per the CTA strategy. */
  bookingAnchor: "#book",
} as const;

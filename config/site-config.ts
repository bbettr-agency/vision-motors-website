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
  /**
   * ⚠️ REMOVED — "Vision Motors CC" was an unsupported guess and is no longer
   * emitted in schema. The premises signage carries a legal-entity line ending
   * `(Pty) Ltd t/a`, but it is illegible at the available photo resolution.
   * TODO(client): confirm the registered entity name, then restore `legalName`.
   * See FACT-VERIFICATION-REGISTER.md C6 / E6.
   */
  legalName: null as string | null,
  shortName: "Vision Motors",

  // ── Contact ────────────────────────────────────────────────────────────────
  // VERIFIED: appears identically on the client's own signage (photographed on
  // both boards), their website, and every directory listing.
  phone: "+27123350070", // E.164, for schema
  phoneDisplay: "012 335 0070", // human-readable — never allowed to wrap
  phoneLink: "tel:+27123350070",

  // CLIENT-PROVIDED (onboarding, 2026-07-22). Supersedes the `service@` address
  // used on the current live site.
  // ⚠️ TODO(client): confirm WHICH mailbox is actually monitored. If enquiries
  // go to an unwatched address that is a silent lead leak.
  email: "vision@visionmotors.co.za",
  emailLink: "mailto:vision@visionmotors.co.za",

  website: "https://visionmotors.co.za",

  // ── Location ───────────────────────────────────────────────────────────────
  // ✅ RESOLVED 2026-07-22. The company profile contains a photograph of the
  // premises signage. Both boards print the SAME address block:
  //      012 335 0070
  //      867 Voortrekkersweg
  //      1059 Steve Biko Road
  //      Wonderboom South
  // i.e. Vision Motors' own signage treats 867 Voortrekkersweg and 1059 Steve
  // Biko Road as ONE address — Voortrekker Rd was renamed Steve Biko Rd in 2012
  // and the premises renumbered. The kerb outside is painted "1059".
  // The directory listings showing "867 Voortrekkers Rd" are therefore the same
  // premises under its pre-2012 address, not a separate site.
  streetNumber: "1059",
  street: "Steve Biko Road",
  suburb: "Wonderboom South",
  city: "Pretoria",
  region: "Gauteng",
  country: "South Africa",
  postalCode: "0084", // CLIENT-PROVIDED (onboarding). Resolves the 0031/0084 conflict.
  addressStatus: "verified" as ClaimStatus,
  addressDisplay: "1059 Steve Biko Road, Wonderboom South, Pretoria",

  /** Historical alias — for directory NAP clean-up only. NEVER published. */
  formerAddress: "867 Voortrekkersweg, Wonderboom South, Pretoria",

  // ⚠️ Coordinates still pending — must be taken from the confirmed pin on the
  // Google Business Profile rather than geocoded, so schema and GBP agree.
  // TODO(client/agency): capture lat/long from the GBP listing.
  geo: null as { latitude: number; longitude: number } | null,

  // ── Second premises ────────────────────────────────────────────────────────
  // ✅ DISCOVERED 2026-07-22 in the company profile: a visually distinct second
  // building branded "ENGINE SHOP" with a "RANGER & BT50" wall sign.
  // ⚠️ The street number is INFERRED. The photo shows no number; onboarding
  // lists 1197 Steve Biko Road as a second address, and there are two premises.
  // Do NOT publish this address until confirmed.
  // TODO(client): confirm the Engine Shop address and what work happens there
  //               vs at 1059. See FACT-VERIFICATION-REGISTER.md C3.
  engineShop: {
    value: null,
    status: "unverified",
    note: "Second premises confirmed by photograph (branded ENGINE SHOP + RANGER & BT50). Street number inferred as 1197 Steve Biko Road from onboarding — NOT confirmed.",
  } as Claim<{ streetNumber: string; street: string; role: string }>,

  // ── Business hours ─────────────────────────────────────────────────────────
  // ✅ RESOLVED 2026-07-22 — client onboarding. Supersedes the contradiction on
  // the current live site ("Open 5 Days a Week" vs "Our team works 24/7") and
  // the varying directory hours (07:00-17:00 / 07:15-17:00).
  hours: {
    value: [
      { day: "Monday", time: "07:30 – 17:00" },
      { day: "Tuesday", time: "07:30 – 17:00" },
      { day: "Wednesday", time: "07:30 – 17:00" },
      { day: "Thursday", time: "07:30 – 17:00" },
      { day: "Friday", time: "07:30 – 17:00" },
    ],
    status: "client-stated",
    note: "Client onboarding 2026-07-22. Closed Saturdays, Sundays and public holidays.",
  } as Claim<{ day: string; time: string }[]>,

  /** Rendered beneath the hours block. */
  hoursClosedNote: "Closed Saturdays, Sundays and public holidays",

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

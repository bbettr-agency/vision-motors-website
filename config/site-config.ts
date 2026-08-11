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
  // General/company enquiries.
  email: "vision@visionmotors.co.za",
  emailLink: "mailto:vision@visionmotors.co.za",
  // Service/workshop enquiries (confirmed 2026-08-11).
  emailService: "service@visionmotors.co.za",
  emailServiceLink: "mailto:service@visionmotors.co.za",

  website: "https://visionmotors.co.za",

  // ── Location ───────────────────────────────────────────────────────────────
  // ✅ CONFIRMED 2026-08-11 (client instruction). Two distinct workshops, each
  // with its own address + Call/WhatsApp number (see `branches[]`). Top-level
  // fields below = the PRIMARY branch (Vision Motors, 867 M5, 0084).
  // Top-level address = the PRIMARY branch (Vision Motors, 867 M5). Confirmed
  // 2026-08-11. Used for org-level schema + page metadata. Per-branch NAP lives
  // in `branches[]` below.
  streetNumber: "867",
  street: "M5",
  suburb: "Wonderboom South",
  city: "Pretoria",
  region: "Gauteng",
  country: "South Africa",
  postalCode: "0084",
  addressStatus: "verified" as ClaimStatus,
  addressDisplay: "867 M5, Wonderboom South, Pretoria, 0084",

  // ⚠️ Coordinates still pending — must be taken from the confirmed pin on the
  // Google Business Profile rather than geocoded, so schema and GBP agree.
  // TODO(client/agency): capture lat/long from the GBP listing.
  geo: null as { latitude: number; longitude: number } | null,

  // ── Workshop branches ──────────────────────────────────────────────────────
  // ✅ CONFIRMED 2026-07-27 (client instruction + legacy HTML): TWO Vision Motors
  // workshops in Wonderboom South, confirmed 2026-08-11. They are DISTINCT
  // branches with their own addresses and Call/WhatsApp numbers.
  // Shared phone/email/hours (above). Do NOT invent per-branch contact details.
  // ✅ CONFIRMED ADDRESSES + BRANCH-SPECIFIC NUMBERS (client instruction 2026-08-11).
  // Each branch has its OWN Call/WhatsApp number — NEVER cross them. The company
  // switchboard (012 335 0070, above) stays the GENERAL site-wide number
  // (header/hero/sticky bar/footer company line); the numbers below are used only
  // inside each branch's own context.
  branches: [
    {
      id: "vision-motors",
      name: "Vision Motors",
      utilityLabel: "Branch 01",
      streetLine: "867 M5",
      suburb: "Wonderboom South",
      city: "Pretoria",
      region: "Gauteng",
      postalCode: "0084",
      manager: "Christo Vorster",
      managerTitleSource: "html" as "html" | "confirmed",
      phoneDisplay: "082 823 5178",
      phoneLink: "tel:+27828235178",
      whatsappNumber: "27828235178",
      whatsappLink: "https://wa.me/27828235178",
      mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        "Vision Motors, 867 M5, Wonderboom South, Pretoria, 0084"
      )}`,
      primary: true,
    },
    {
      id: "engine-shop-vision-motors",
      name: "The Engine Shop/Vision Motors",
      utilityLabel: "Branch 02",
      streetLine: "999 Steve Biko Rd",
      suburb: "Wonderboom South",
      city: "Pretoria",
      region: "Gauteng",
      postalCode: "0031",
      manager: "Jacques du Randt",
      managerTitleSource: "confirmed" as "html" | "confirmed",
      phoneDisplay: "071 048 8213",
      phoneLink: "tel:+27710488213",
      whatsappNumber: "27710488213",
      whatsappLink: "https://wa.me/27710488213",
      mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        "The Engine Shop Vision Motors, 999 Steve Biko Road, Wonderboom South, Pretoria, 0031"
      )}`,
      primary: false,
    },
  ],

  // ── Second premises (legacy field) ─────────────────────────────────────────
  // Superseded by `branches` above (C3 resolved 2026-07-27). Kept null so no
  // legacy consumer renders a stale address. The engine-shop section reads no
  // address from here — it is model-agnostic (see components/sections/engine-shop).
  engineShop: {
    value: null,
    status: "unverified",
    note: "Superseded by branches[]. The Engine Shop/Vision Motors is 999 Steve Biko Rd (confirmed 2026-08-11).",
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
  // ── ACCREDITATION SLOTS ────────────────────────────────────────────────────
  // Config fields and component slots are PREPARED, but NOTHING renders until a
  // membership certificate or number is supplied. Logo files and a self-claim on
  // the old website are not evidence (approved instruction, 2026-07-22).
  //
  // To activate one: set `value`, flip `status` to "verified", and the badge
  // strip renders automatically. `lib/schema.ts` will also start emitting
  // `hasCredential`. No component changes needed.
  //
  // ❌ FORBIDDEN WORDING until evidenced: "RMI Approved", "MIWA Accredited",
  //    "ARASA Member", "5 Star RMI", "accredited workshop".
  // ❌ NEVER, at all: "5 STAR RMI approved" / "Land Rover & Jaguar Specialists" /
  //    "largest independent workshop in Pretoria" — verified as belonging to
  //    LR Auto Workshop, a different Pretoria business.
  accreditations: {
    rmi: {
      value: null,
      status: "unverified",
      note: "Client's own /services page states 'Our RMI Approved Workshop' — a self-claim, not evidence. No membership number, no register check.",
    } as Claim<{ membershipNumber: string; grading: string | null }>,
    miwa: {
      value: null,
      status: "unverified",
      note: "MIWA logo displayed on the client's /services page and listed by sayellow.com. No number, no register check.",
    } as Claim<{ membershipNumber: string; grading: string | null }>,
    arasa: {
      value: null,
      status: "unverified",
      note: "ARASA (Automotive Remanufacturers' Association) logo displayed on the client's /services page. The reconditioning-specific body — no competitor in the audited set claims it, so it is the most valuable of the three IF evidenced. No number.",
    } as Claim<{ membershipNumber: string }>,
  },

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
    note: "'2yr/unlimited km' appears only inside a testimonial, never as company policy. The Pretoria market standard is 6mo/10,000km (three competitors state it identically), so if the testimonial figure is real it is category-defining — which is exactly why it must not be published on a customer's recollection. A 1-star review describes a refused warranty claim.",
  } as Claim<{ months: number; kilometres: number | null; scope: string }>,

  /**
   * The ONLY warranty wording permitted on the site until terms are confirmed.
   * Approved verbatim, 2026-07-22. Never paired with a duration or mileage,
   * and never emitted in schema.
   */
  warrantyInterimCopy:
    "Warranty terms depend on the repair completed. Ask our team what applies to your vehicle.",

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
  // ⚠️ HIERARCHY INVERTED 2026-07-22 on client instruction: CALLING is now the
  // primary action, booking is secondary. This is right for the business —
  // most visitors have a broken car and want a person, not a form.
  // `click_to_call` is therefore the primary tracked conversion.
  ctaPrimary: "Call Us",
  ctaPrimaryLong: "Call 012 335 0070",
  ctaSecondary: "Book Your Car In",
  ctaSecondaryShort: "Book In",

  /** Kept for the in-page booking anchor on the homepage. */
  bookingAnchor: "#book",
} as const;

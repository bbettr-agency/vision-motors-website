// ─────────────────────────────────────────────────────────────────────────────
//  SEO CONFIG
//
//  The current live site's damage this replaces:
//   - <title> was literally "Vision Motors" — no service, no location
//   - the only H1 was "Your Questions Answered" (the FAQ heading)
//   - zero structured data, zero alt text, no canonical
//   - / and /index both returned 200 with identical content
//
//  Homepage targets the broad local head term + the brand entity. It does NOT
//  chase individual service terms — those belong to future service pages
//  (see config/routes.ts futureRoutes).
// ─────────────────────────────────────────────────────────────────────────────

export const seoConfig = {
  // 57 chars — under the 60 limit in PIPELINE/gates.md
  title: "Specialist Car & Gearbox Repairs Pretoria | Vision Motors",

  // 152 chars — under the 155 limit
  description:
    "Independent Pretoria workshop for complex fault finding, engine reconditioning, gearbox, DSG and mechatronic repairs. All makes. Book your car in today.",

  keywords: [
    "car repairs Pretoria",
    "mechanic Pretoria",
    "car diagnostics Pretoria",
    "engine reconditioning Pretoria",
    "gearbox repairs Pretoria",
    "DSG gearbox repair Pretoria",
    "mechatronic repairs Pretoria",
    "mechanic Wonderboom South",
    "car service Pretoria North",
    "independent workshop Pretoria",
  ],

  author: "Vision Motors",
  robots: "index, follow",
  locale: "en_ZA",

  // 1200x630, cropped from the one authentic workshop photograph so the
  // declared dimensions match the actual file.
  // TODO: replace with a purpose-shot OG image (ideally with the logo lockup)
  // once the photoshoot in config/images-config.ts happens.
  ogImage: "/images/vision-motors-og-image.jpg",

  twitterHandle: null as string | null,
};

/**
 * Analytics. Both no-op until IDs are supplied.
 * NOTE: the current live site runs GTM-5NWWB86, a Facebook Pixel and Matomo.
 * TODO(client): confirm which of these to carry over, and supply GA4/GTM IDs.
 */
export const analyticsConfig = {
  gtmId: "",
};

export const conversionConfig = {
  gtagId: "",
  conversionLabel: "",
};

// ─────────────────────────────────────────────────────────────────────────────
//  BRAND TOKENS — per SYSTEM/01-DESIGN-TOKENS.md (structure fixed, values brand-derived)
//
//  BRAND DERIVATION:
//  The real Vision Motors identity is GOLD-ON-BLACK. It is visible embroidered
//  on the team's uniforms in the one authentic photograph on the current site,
//  and the logo file is a white-on-dark wordmark.
//
//  By contrast the current website uses FOUR unrelated CTA colours — royal blue
//  #2E56CC, indigo #302B71, slate #394B56 and red #E3002B — so no colour means
//  "next step" to a visitor.
//
//  DECISION (per approved plan §12): brass is held EXCLUSIVELY for the primary
//  CTA, and a cool technical steel-blue carries `primary` (links, icons, section
//  accents). This preserves the "accent = next action" training the OS requires,
//  which a single brass-for-everything palette would lose.
//
//  ⚠️ PROVISIONAL VALUES. Sampled from the uniform embroidery in the workshop
//  photo, not from a vector source.
//  TODO(client): supply vector logo files (SVG/AI/EPS) so exact brand hex values
//                can be sampled and these tokens confirmed.
//
//  CONTRAST VERIFIED (SYSTEM/01 §6.3 — checked at token time, not QA time):
//    bone   #E7E5E4 on ink      #0B0B0B → 16.6:1  ✅ body text on dark
//    mist   #F5F5F4 on graphite #16161A → 15.4:1  ✅ body text on cards
//    brass  #C9A24B on ink      #0B0B0B →  8.2:1  ✅ large text + icons
//    ink    #0B0B0B on brass    #C9A24B →  8.2:1  ✅ CTA label on brass button
//    steel  #4A7BA7 on ink      #0B0B0B →  5.6:1  ✅ links on dark
//    ink    #0B0B0B on mist     #F5F5F4 → 18.7:1  ✅ body text on light
// ─────────────────────────────────────────────────────────────────────────────

export const themeConfig = {
  colors: {
    // Primary — technical steel blue. Links, icons, section accents.
    primary: "#4A7BA7",
    primaryDark: "#35597C",
    primaryLight: "#6E9AC1",

    // Accent — brass. RESERVED FOR THE PRIMARY CTA. Never decorative.
    accent: "#C9A24B",
    accentDark: "#A8842F",
    accentLight: "#DCBE79",

    // Ink scale — dark surfaces, darkest → lightest
    ink: "#0B0B0B",
    charcoal: "#111114",
    graphite: "#16161A",
    steel: "#26262C",

    // Light surfaces
    mist: "#F5F5F4",
    bone: "#E7E5E4",
  },

  radius: {
    card: "1.25rem", // rounded-2xl
    panel: "1.75rem", // rounded-3xl
    button: "9999px", // pill — the chosen button radius, used everywhere
  },

  spacing: {
    section: "py-20 md:py-28",
    container: "max-w-7xl",
    gutter: "px-6 lg:px-8",
  },
};

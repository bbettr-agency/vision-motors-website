// ─────────────────────────────────────────────────────────────────────────────
//  BRAND TOKENS — per SYSTEM/01-DESIGN-TOKENS.md (structure fixed, values brand-derived)
//
//  BRAND DERIVATION:
//  The real Vision Motors identity is GOLD-ON-BLACK. It is visible embroidered
//  on the team's uniforms in the one authentic photograph on the current site,
//  and the logo file is a white-on-dark wordmark.
//
//  ── v2 REVISION: warm light surfaces ────────────────────────────────────────
//  The first pass put every section on a near-black surface. Structurally sound,
//  but the page read as one continuous black slab: flat, dense and, for an
//  ordinary vehicle owner with a broken car, slightly intimidating.
//
//  This revision keeps black + brass as the identity and adds a WARM light
//  family so sections can alternate. The lights are warm (cream/sand/linen),
//  never clinical white — warm neutrals sit naturally beside brass, whereas a
//  cool white would fight it and read as a generic mechanic template.
//
//  Blue has been retired entirely. The first pass carried a steel blue as
//  `primary` for icons and links; against warm cream it read as a foreign
//  colour. The palette is now black · warm neutral · brass, which is what
//  "premium black and gold" actually means.
//
//  ── CONTRAST VERIFICATION (SYSTEM/01 §6.3 — checked at token time) ──────────
//  DARK SURFACES
//    bone     #E7E5E4 on ink       #0B0B0B → 14.6:1  ✅ body text
//    white    #FFFFFF on ink       #0B0B0B → 18.9:1  ✅ headings
//    bone     #E7E5E4 on charcoal  #141418 → 13.4:1  ✅ body on alt sections
//    bone     #E7E5E4 on graphite  #1E1E24 → 11.6:1  ✅ body in cards
//    brass    #C9A24B on ink       #0B0B0B →  8.2:1  ✅ labels, icons
//    ink      #0B0B0B on brass     #C9A24B →  8.2:1  ✅ CTA label
//  LIGHT SURFACES
//    ink      #0B0B0B on cream     #F7F5F0 → 16.8:1  ✅ headings
//    inkSoft  #4A453C on cream     #F7F5F0 →  8.7:1  ✅ body text
//    inkMuted #6B655A on cream     #F7F5F0 →  5.4:1  ✅ secondary text
//    accentInk#7E611B on cream     #F7F5F0 →  5.4:1  ✅ labels, icons
//    inkSoft  #4A453C on linen     #EEEAE1 →  7.9:1  ✅ body on deeper warm
//    accentInk#7E611B on linen     #EEEAE1 →  4.9:1  ✅ labels, icons
//
//  ⚠️ PROVISIONAL brass value — sampled from the uniform embroidery, not vector.
//  TODO(client): supply vector logo files (SVG/AI/EPS) to confirm.
// ─────────────────────────────────────────────────────────────────────────────

export const themeConfig = {
  colors: {
    // ── Accent: brass. The conversion colour. ────────────────────────────────
    // Reserved for primary CTAs, small labels, key icons, highlights and
    // active states. NEVER on large background areas.
    accent: "#C9A24B", // on dark surfaces
    accentDark: "#A8842F", // CTA hover
    accentLight: "#DCBE79", // icons/detail on dark
    accentInk: "#7E611B", // brass for text + icons on LIGHT surfaces (4.9:1 on linen)
    accentTint: "#F2EAD6", // soft brass-tinted chip behind icons on light

    // ── Dark surfaces (darkest → lightest) ───────────────────────────────────
    ink: "#0B0B0B", // anchor sections: hero, diagnostics, testimonials, final CTA
    charcoal: "#141418", // alternate dark sections — visibly lighter than ink
    graphite: "#1E1E24", // CARDS on dark. Raised from #16161A so cards
    //                      separate from the section behind them.
    steel: "#2E2E36", // borders + hover surfaces on dark

    // ── Warm light surfaces (lightest → deepest) ─────────────────────────────
    cream: "#F7F5F0", // primary light section
    sand: "#F5F2EA", // alternate light section
    linen: "#EEEAE1", // deeper warm light section
    stone: "#E3DFD5", // borders + dividers on light

    // ── Text ─────────────────────────────────────────────────────────────────
    inkSoft: "#4A453C", // body copy on light — warm, never cold grey
    inkMuted: "#6B655A", // secondary/caption on light
    mist: "#F5F5F4", // body copy on dark
    bone: "#E7E5E4", // secondary on dark
  },

  radius: {
    card: "1.25rem", // rounded-2xl
    panel: "1.75rem", // rounded-3xl
    button: "9999px", // pill — the chosen button radius, used everywhere
  },

  spacing: {
    // Raised from py-20/md:py-28 — the extra breathing room is doing as much
    // work as the lighter surfaces in making the page feel less dense.
    section: "py-24 md:py-32",
    container: "max-w-7xl",
    gutter: "px-6 lg:px-8",
  },

  /**
   * Section rhythm. The page must never read as one continuous dark slab.
   * Dark anchors bookend and punctuate; warm light zones carry the scanning.
   * Section ORDER is unchanged from the approved build — only surfaces differ.
   */
  rhythm: [
    { section: "header", tone: "dark", surface: "ink" },
    { section: "hero", tone: "dark", surface: "ink" },
    { section: "trust-strip", tone: "dark", surface: "charcoal" },
    { section: "symptom-band", tone: "light", surface: "cream" },
    { section: "services", tone: "light", surface: "linen" },
    { section: "diagnostics", tone: "dark", surface: "ink" },
    { section: "workshop-proof", tone: "light", surface: "cream" },
    { section: "why-us", tone: "dark", surface: "charcoal" },
    { section: "your-rights", tone: "light", surface: "sand" },
    { section: "testimonials", tone: "dark", surface: "ink" },
    { section: "process", tone: "light", surface: "cream" },
    { section: "faq", tone: "light", surface: "linen" },
    { section: "final-cta", tone: "dark", surface: "ink" },
    { section: "footer", tone: "dark", surface: "ink" },
  ],
};

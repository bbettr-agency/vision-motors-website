// ─────────────────────────────────────────────────────────────────────────────
//  BRAND TOKENS — documentation mirror of tailwind.config.ts.
//  Not imported at runtime; Tailwind is the render path. Keep the two in sync.
//
//  ── v5.1: "WORKSHOP MANUAL" + PREMIUM NAVY (approved 2026-07-27) ─────────────
//  The industrial-editorial system, dark family shifted to one coherent PREMIUM
//  AUTOMOTIVE NAVY: `ink` #0E2338 primary deep navy (hero/header/footer/major
//  bands + darkest text on light), `navy` #12293F band navy (diagnostics/
//  testimonials), `steel` a restrained steel-blue for rules/labels. Warm paper/
//  concrete lights unchanged; amber held for the Call CTA + active highlights.
//  Balance ≈ 35% navy · 40% paper/concrete · 20% photography · 5% amber.
//
//  Type: Barlow Semi Condensed (display + numerals) · Inter (body) ·
//        IBM Plex Mono (technical labels). Shape: squared (radius 0.375/0.5rem),
//        hairline borders + surface contrast instead of drop shadows.
//
//  The official logo is indigo (#290F74) — NOT recoloured. It is a placeholder
//  type lockup until a usable vector arrives (C5), sized to sit on navy.
//
//  ── CONTRAST VERIFICATION (checked at token time; live-audited after build) ──
//  DARK (on primary navy ink #0E2338)
//    white  #FFFFFF → 15.4:1   mist #F4F1EA → 14.9:1   bone #C6C2B8 → 9.6:1
//    blueSoft #8FA6B8 → 6.0:1  (micro accents)   steel #7891B0 → 5.1:1 (labels/rules)
//    cta #C58A32 text → 5.3:1  (active-rule label)
//  DARK (on band navy #12293F): white 14.0:1 · bone 8.7:1 · blueSoft 5.5:1
//  CTA BUTTON (ink label on amber #C58A32): 6.0:1 ✅ · white on amber 2.98:1 ❌
//  LIGHT (on paper cream #F3EFE7)
//    ink #0E2338 → 13.7:1 · inkSoft #3A3F45 → 9.7:1 · inkMuted #5E6368 → 5.3:1
//    blue #1F4E79 → 8.4:1 (links/labels)
//  LIGHT (on concrete bluegrey #E4DFD5)
//    ink → 12.0:1 · inkSoft → 8.3:1 · inkMuted #5E6368 → 4.6:1 · steel → 3.4:1 (UI)
// ─────────────────────────────────────────────────────────────────────────────

export const themeConfig = {
  colors: {
    // ── PRIMARY DARK: premium automotive navy ────────────────────────────────
    ink: "#0E2338", // dominant dark surface + darkest text on light
    charcoalLight: "#17314E", // raised deep navy (rare)

    // ── SECONDARY DARK: band navy, slightly lifted ───────────────────────────
    navy: "#12293F", // punctuating band navy (same family)
    navyCard: "#1A3452", // raised navy surface (dark cards, bars)

    // ── STEEL-BLUE ACCENT ────────────────────────────────────────────────────
    blue: "#1F4E79", // links + focus on light
    blueMid: "#3E7CB1", // focus rings / UI borders
    blueSoft: "#8FA6B8", // muted steel-blue micro accents ON dark

    // ── LIGHT surfaces — warm paper + concrete (unchanged) ───────────────────
    cream: "#F3EFE7", // warm paper — primary light surface
    bluegrey: "#E4DFD5", // concrete grey — deeper light surface
    tint: "#E9E3D7", // warm inset/chip on light
    line: "#CFC9BC", // warm hairline border / divider on light

    // ── STEEL — restrained steel-blue rules, dividers, technical labels ──────
    steel: "#7891B0",

    // ── Text ─────────────────────────────────────────────────────────────────
    inkSoft: "#3A3F45", // body on light
    inkMuted: "#5E6368", // muted-steel caption/label on light
    mist: "#F4F1EA", // warm off-white body on dark
    bone: "#C6C2B8", // warm grey secondary on dark

    // ── Warm CTA accent — Call buttons + active capability rule ONLY ─────────
    // Never a large background. Always paired with dark (ink) text.
    cta: "#C58A32",
    ctaDark: "#A97324",
    ctaTint: "#F3E7D2",
  },

  radius: {
    card: "0.375rem", // rounded-2xl — squared
    panel: "0.5rem", // rounded-3xl — squared
    button: "0.375rem", // rounded-md — comfortable but not a pill
  },

  spacing: {
    section: "py-24 md:py-32",
    container: "max-w-7xl",
    gutter: "px-6 lg:px-8",
  },

  /**
   * Section rhythm. Charcoal/navy workshop bands punctuate; warm paper/concrete
   * documentation zones carry the scanning. Section ORDER is unchanged from v4 —
   * only surfaces and composition differ (cards → rows / ruled splits / plates).
   */
  rhythm: [
    { section: "header", tone: "dark", surface: "ink" },
    { section: "hero", tone: "dark", surface: "ink" },
    { section: "trust-strip", tone: "dark", surface: "ink" },
    { section: "symptom-band", tone: "light", surface: "cream" },
    { section: "services", tone: "light", surface: "bluegrey" },
    { section: "diagnostics", tone: "dark", surface: "navy" },
    { section: "engine-shop", tone: "light", surface: "cream" },
    { section: "why-us", tone: "dark", surface: "ink" },
    { section: "your-rights", tone: "light", surface: "bluegrey" },
    { section: "testimonials", tone: "dark", surface: "navy" },
    { section: "process", tone: "light", surface: "cream" },
    { section: "faq", tone: "light", surface: "bluegrey" },
    { section: "location-hours", tone: "light", surface: "cream" },
    { section: "final-cta", tone: "dark", surface: "ink" },
    { section: "footer", tone: "dark", surface: "ink" },
  ],
};

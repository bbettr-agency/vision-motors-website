// ─────────────────────────────────────────────────────────────────────────────
//  BRAND TOKENS — documentation mirror of tailwind.config.ts.
//  Not imported at runtime; Tailwind is the render path. Keep the two in sync.
//
//  ── v4: BLUE-LED SYSTEM (approved 2026-07-22) ───────────────────────────────
//  Replaces the v3 indigo + brass system. The palette is now:
//    navy (primary dark) · blue (secondary/accents/links) · warm neutral lights
//    · amber (Call CTA only).
//  Target balance ≈ 55% light neutral / 30% navy+blue / 10% deep dark / 5% warm.
//
//  The official logo is indigo (#290F74) — NOT recoloured. It is a placeholder
//  type lockup until a usable vector arrives (C5), sized to sit on navy.
//
//  ── CONTRAST VERIFICATION (checked at token time; live-audited after build) ──
//  DARK (on navy #0F2A44)
//    white    #FFFFFF → 14.6:1   mist #F4F7FA → 13.6:1   bone #CBD8E4 → 10.1:1
//    blueSoft #7FB0D9 →  6.4:1   (labels/icons on navy)
//    blueMid  #3E7CB1 →  3.3:1   (borders/focus/UI only — 3:1 bar)
//  CARDS on navy (#1A3A5A): white 11.7:1 · bone 8.1:1 · blueSoft 5.1:1
//  SECONDARY BUTTON (white on blue #1F4E79): 8.7:1
//  LIGHT (on bluegrey #EAF1F7)
//    ink #17212B → 14.3:1 · inkSoft #33414E → 9.2:1 · inkMuted #51616F → 5.6:1
//    blue #1F4E79 → 7.6:1 (links/labels) · navy 12.8:1
//  LIGHT (on cream #F7F5F0): inkMuted 5.9:1 · blue 8.0:1
//  CTA amber #C58A32: ink label 5.5:1 ✅ · white label 3.0:1 ❌ (never used)
// ─────────────────────────────────────────────────────────────────────────────

export const themeConfig = {
  colors: {
    // ── PRIMARY: navy ────────────────────────────────────────────────────────
    navy: "#0F2A44", // header, hero anchor, footer, major dark surfaces
    navyCard: "#1A3A5A", // cards on navy — visibly separated

    // ── SECONDARY: blue ──────────────────────────────────────────────────────
    blue: "#1F4E79", // links, icons, labels, secondary buttons, selected/active
    blueMid: "#3E7CB1", // accent: hover, borders, focus rings, active highlight
    blueSoft: "#7FB0D9", // blue for text + icons ON navy

    // ── Light surfaces ───────────────────────────────────────────────────────
    bluegrey: "#EAF1F7", // light section background
    cream: "#F7F5F0", // warm off-white — keeps the system approachable
    tint: "#DCE8F3", // soft blue chip behind icons on light
    line: "#D3E0EC", // blue-grey border / divider on light

    // ── Text ─────────────────────────────────────────────────────────────────
    ink: "#17212B", // headings + body on light; also the deepest dark surface
    inkSoft: "#33414E", // body on light
    inkMuted: "#51616F", // secondary/caption on light
    mist: "#F4F7FA", // body on navy
    bone: "#CBD8E4", // secondary on navy

    // ── Warm CTA accent — Call buttons + small priority ONLY ─────────────────
    // Never a large background. Always paired with dark (ink) text.
    cta: "#C58A32",
    ctaDark: "#A97324",
    ctaTint: "#F3E7D2",
  },

  radius: {
    card: "1.25rem", // rounded-2xl
    panel: "1.75rem", // rounded-3xl
    button: "9999px", // pill
  },

  spacing: {
    section: "py-24 md:py-32",
    container: "max-w-7xl",
    gutter: "px-6 lg:px-8",
  },

  /**
   * Section rhythm. Dark navy anchors bookend and punctuate; warm-neutral light
   * zones (cream / bluegrey) carry the scanning. Section ORDER is unchanged —
   * only surfaces differ.
   */
  rhythm: [
    { section: "header", tone: "dark", surface: "navy" },
    { section: "hero", tone: "dark", surface: "navy" },
    { section: "trust-strip", tone: "dark", surface: "navy" },
    { section: "symptom-band", tone: "light", surface: "cream" },
    { section: "services", tone: "light", surface: "bluegrey" },
    { section: "diagnostics", tone: "dark", surface: "navy" },
    { section: "engine-shop", tone: "light", surface: "bluegrey" },
    { section: "why-us", tone: "dark", surface: "navy" },
    { section: "your-rights", tone: "light", surface: "bluegrey" },
    { section: "testimonials", tone: "dark", surface: "navy" },
    { section: "process", tone: "light", surface: "cream" },
    { section: "faq", tone: "light", surface: "bluegrey" },
    { section: "location-hours", tone: "light", surface: "bluegrey" },
    { section: "final-cta", tone: "dark", surface: "navy" },
    { section: "footer", tone: "dark", surface: "navy" },
  ],
};

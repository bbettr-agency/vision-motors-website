import type { Config } from "tailwindcss";

// Brand hex values mirror config/theme-config.ts, which documents the palette
// rationale and the full contrast-pair verification. Tailwind is the render
// path; theme-config is the runtime/documentation reference. Keep them in sync.
//
// ── v5.1: "WORKSHOP MANUAL" + PREMIUM NAVY (approved 2026-07-27) ──────────────
// The industrial-editorial system, with the dark family shifted from near-black
// charcoal to one coherent PREMIUM AUTOMOTIVE NAVY (deep, refined — not black,
// not muddy grey, not corporate blue). `ink` is the primary deep navy (hero,
// header, footer, major dark bands); `navy` a slightly lifted band navy;
// `steel` a restrained steel-BLUE for rules/labels. Warm paper/concrete lights
// are unchanged; amber stays for the Call CTA + active highlights.
//
// Because every dark section references bg-brand-ink / bg-brand-navy, moving the
// token VALUES re-skins all dark surfaces centrally — no section edits. Token
// NAMES are unchanged so nothing needs renaming.

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // ── PRIMARY DARK: premium automotive navy. Dominant dark surface
          //    (hero, header, footer, major bands) + darkest text on light.
          //    Deep and refined — not black, not grey. (white 15.4:1)
          ink: "#0E2338",
          charcoalLight: "#17314E", // raised deep navy (rare)

          // ── SECONDARY DARK: band navy, slightly lifted — same family, used to
          //    punctuate (diagnostics / testimonials). (white 14.0:1)
          navy: "#12293F",
          navyCard: "#1A3452", // raised navy surface (dark cards, bars)

          // ── STEEL-BLUE ACCENT: links + focus, micro accents on dark.
          blue: "#1F4E79", // links + focus on light
          blueMid: "#3E7CB1", // focus rings / UI borders (3:1)
          blueSoft: "#8FA6B8", // muted steel-blue for tiny accents ON dark (6.0:1)

          // ── LIGHT surfaces — warm workshop paper + concrete. Unchanged.
          cream: "#F3EFE7", // warm paper — primary light surface
          bluegrey: "#E4DFD5", // concrete grey — deeper light surface
          tint: "#E9E3D7", // warm inset/chip on light
          line: "#CFC9BC", // warm hairline border / divider on light

          // ── STEEL — restrained steel-BLUE for rules, dividers, technical
          //    labels (5.1:1 on ink for small text; UI/rules on light).
          steel: "#7891B0",

          // ── TEXT.
          inkSoft: "#3A3F45", // body on light (9.7:1 on paper)
          inkMuted: "#5E6368", // muted-steel caption/label on light (5.3:1 paper)
          mist: "#F4F1EA", // warm off-white body on dark (14.9:1 on ink)
          bone: "#C6C2B8", // warm grey secondary on dark (9.6:1 on ink)

          // ── WARM CTA ACCENT — Call buttons + the active capability rule ONLY.
          //    NEVER a large background. Always paired with dark (ink) text —
          //    white-on-amber fails contrast (2.98:1); ink-on-amber is 6.3:1.
          cta: "#C58A32",
          ctaDark: "#A97324", // hover
          ctaTint: "#F3E7D2", // rare amber chip on light
        },
      },
      fontFamily: {
        // Barlow Semi Condensed — compact industrial display + big numerals.
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Inter — body copy. Never mono for long paragraphs.
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        // IBM Plex Mono — technical labels, index numerals, spec captions.
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      // Shape language: sharp for controls/insets, but MAJOR SECTIONS sit in
      // large rounded PANELS floating on a warm page (v5.2, approved 2026-07-29).
      borderRadius: {
        "2xl": "0.375rem",
        "3xl": "0.5rem",
        panel: "1.75rem", // 28px — section panels on small screens
        "panel-lg": "2.5rem", // 40px — section panels on large screens
      },
      backgroundImage: {
        // Restrained warm vignette for the charcoal hero — a faint amber edge,
        // nothing more. No blue wash.
        "hero-glow":
          "radial-gradient(ellipse 70% 55% at 12% -5%, rgba(197,138,50,0.07), transparent 60%)",
        // Technical grid textures — pair with bg-[length:36px_36px] for a faint
        // blueprint / service-manual grid on dark or light surfaces.
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(21,24,28,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(21,24,28,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        accent: "0 14px 34px -18px rgba(197,138,50,0.45)", // amber lift — CTA only
        form: "0 24px 60px -30px rgba(6,10,14,0.7)",
        ink: "0 30px 80px -30px rgba(6,10,14,0.85)",
        // Soft lift for the floating section panels on the warm page — the
        // "beautifully crafted panel" depth. Cool navy-tinted, never heavy.
        panel:
          "0 30px 60px -34px rgba(8,20,34,0.42), 0 10px 24px -16px rgba(8,20,34,0.22)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

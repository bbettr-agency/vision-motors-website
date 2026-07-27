import type { Config } from "tailwindcss";

// Brand hex values mirror config/theme-config.ts, which documents the palette
// rationale and the full contrast-pair verification. Tailwind is the render
// path; theme-config is the runtime/documentation reference. Keep them in sync.
//
// ── v5: "WORKSHOP MANUAL" INDUSTRIAL-EDITORIAL SYSTEM (approved 2026-07-27) ───
// Replaces the v4 blue-led corporate system. Two darks — near-black charcoal
// (`ink`, dominant) + deep navy (secondary band) — alternate with warm paper /
// concrete neutrals. Blue is demoted to a muted steel accent used sparingly;
// large baby-blue is GONE. Amber is held strictly for the Call CTA + the active
// capability rule. Target balance ~35% charcoal/navy · 40% paper/concrete ·
// 20% photography · 5% amber. See config/theme-config.ts for the contrast table.
//
// Token NAMES are unchanged from v4 so components need no mass rename; only the
// VALUES moved. A few tokens were added (steel, charcoalLight).

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
          // ── PRIMARY DARK: near-black warm charcoal. Dominant workshop surface,
          //    and the deepest text colour on light. (white 15.9:1)
          ink: "#15181C",
          charcoalLight: "#1E2226", // subtle raised charcoal (rare)

          // ── SECONDARY DARK: deep navy band. Used to punctuate, not dominate.
          navy: "#0F2A44", // deep-navy band (white 14.6:1)
          navyCard: "#1C2A36", // rare raised dark surface (booking form, bars)

          // ── STEEL-BLUE ACCENT: demoted. Micro technical accents on dark only,
          //    links + focus. NOT large fills, NOT big baby-blue backgrounds.
          blue: "#1F4E79", // links + focus on light
          blueMid: "#3E7CB1", // focus rings / UI borders (3:1)
          blueSoft: "#8FA6B8", // muted steel-blue for tiny accents ON dark (7.4:1)

          // ── LIGHT surfaces — warm workshop paper + concrete. No baby blue.
          cream: "#F3EFE7", // warm paper — primary light surface
          bluegrey: "#E4DFD5", // concrete grey — deeper light surface
          tint: "#E9E3D7", // warm inset/chip on light
          line: "#CFC9BC", // warm hairline border / divider on light

          // ── STEEL — muted-steel rules, dividers, vertical labels (UI 3:1).
          steel: "#7C838B",

          // ── TEXT.
          inkSoft: "#3A3F45", // body on light (9.7:1 on paper)
          inkMuted: "#5E6368", // muted-steel caption/label on light (5.3:1 paper)
          mist: "#F4F1EA", // warm off-white body on dark (15.9:1)
          bone: "#C6C2B8", // warm grey secondary on dark (10.6:1)

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
      // Sharper shape language — squared, not soft. (Tailwind `rounded-md`
      // default 0.375rem is the button radius; buttons drop the pill.)
      borderRadius: {
        "2xl": "0.375rem",
        "3xl": "0.5rem",
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
        // Restrained — the new system separates with hairlines + surface
        // contrast, not drop shadows. `form` is the one real lift, reserved for
        // the booking panel + sticky bars.
        accent: "0 14px 34px -18px rgba(197,138,50,0.45)", // amber lift — CTA only
        form: "0 24px 60px -30px rgba(6,10,14,0.7)",
        ink: "0 30px 80px -30px rgba(6,10,14,0.85)",
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

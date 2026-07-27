import type { Config } from "tailwindcss";

// Brand hex values mirror config/theme-config.ts, which documents the palette
// rationale and the full contrast-pair verification. Tailwind is the render
// path; theme-config is the runtime/documentation reference. Keep them in sync.
//
// ── v4: BLUE-LED SYSTEM (approved 2026-07-22) ────────────────────────────────
// Replaces the indigo + brass system. Navy is the primary dark, blue carries
// accents / links / active states, warm amber is held strictly for the primary
// Call CTA. Target balance ~55% light neutral / 30% navy+blue / 10% deep dark /
// 5% warm accent. See config/theme-config.ts for the full contrast table.

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
          // ── PRIMARY: navy. Header, hero anchor, footer, major dark surfaces.
          navy: "#0F2A44", // primary dark surface (white 14.6:1)
          navyCard: "#1A3A5A", // cards on navy — visibly separated (white 11.7:1)

          // ── SECONDARY: blue. Accents, links, icons, labels, secondary buttons,
          //    selected/active states.
          blue: "#1F4E79", // links + icons + labels on light (7.6:1 on bluegrey)
          blueMid: "#3E7CB1", // accent blue: hover, borders, focus, active highlight
          blueSoft: "#7FB0D9", // blue for text + icons ON navy (6.4:1)

          // ── LIGHT surfaces.
          bluegrey: "#EAF1F7", // light section background
          cream: "#F7F5F0", // warm off-white — keeps the system approachable
          tint: "#DCE8F3", // soft blue chip behind icons on light
          line: "#D3E0EC", // blue-grey border / divider on light

          // ── TEXT.
          ink: "#17212B", // headings + body on light; also deepest dark surface
          inkSoft: "#33414E", // body text on light (9.2:1 on bluegrey)
          inkMuted: "#51616F", // secondary / caption on light (5.6:1 on bluegrey)
          mist: "#F4F7FA", // body on navy (13.6:1)
          bone: "#CBD8E4", // secondary on navy (10.1:1)

          // ── WARM CTA ACCENT — primary Call buttons + small priority only.
          //    NEVER on large background areas. Always paired with dark (ink)
          //    text — white-on-amber fails contrast (2.98:1).
          cta: "#C58A32",
          ctaDark: "#A97324", // hover
          ctaTint: "#F3E7D2", // rare amber chip on light
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        // Blue brand wash — makes navy/blue present above the fold without a flat
        // slab. A faint warm edge nods to the CTA colour; nothing more.
        "hero-glow":
          "radial-gradient(ellipse 90% 65% at 50% -10%, rgba(62,124,177,0.38), transparent 70%), radial-gradient(ellipse 55% 40% at 80% 6%, rgba(197,138,50,0.10), transparent 70%)",
        // Subtle blue glow behind conversion sections on navy.
        "blue-glow":
          "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(62,124,177,0.16), transparent 70%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(31,78,121,0.35)", // blue lift on dark
        accent: "0 18px 45px -18px rgba(197,138,50,0.45)", // amber lift — CTA only
        card: "0 20px 50px -25px rgba(6,18,32,0.55)", // cards on dark (navy shadow)
        // Cards on light: barely-there lift, cool-neutral so it never reads warm.
        soft: "0 1px 2px rgba(15,42,68,0.05), 0 10px 30px -14px rgba(15,42,68,0.12)",
        softLift:
          "0 2px 4px rgba(15,42,68,0.06), 0 18px 40px -18px rgba(15,42,68,0.18)",
        ink: "0 30px 80px -30px rgba(6,18,32,0.85)",
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

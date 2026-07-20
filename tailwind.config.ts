import type { Config } from "tailwindcss";

// Brand hex values mirror config/theme-config.ts, which documents the palette
// rationale and the full contrast-pair verification. Tailwind is the render
// path; theme-config is the runtime/documentation reference. Keep them in sync.

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
          // Accent — brass. Primary CTAs, small labels, key icons, active states.
          accent: "#C9A24B",
          accentDark: "#A8842F",
          accentLight: "#DCBE79",
          accentInk: "#7E611B", // brass on LIGHT surfaces (text + icons)
          accentTint: "#F2EAD6", // soft brass chip behind icons on light

          // Dark surfaces
          ink: "#0B0B0B",
          charcoal: "#141418",
          graphite: "#1E1E24", // cards on dark
          steel: "#2E2E36", // borders / hover on dark

          // Warm light surfaces
          cream: "#F7F5F0",
          sand: "#F5F2EA",
          linen: "#EEEAE1",
          stone: "#E3DFD5", // borders on light

          // Text
          inkSoft: "#4A453C", // body on light
          inkMuted: "#6B655A", // secondary on light
          mist: "#F5F5F4", // body on dark
          bone: "#E7E5E4", // secondary on dark
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
        // Warm brass wash. Replaces the previous blue-tinted glow so the hero
        // opens up without introducing a colour outside the palette.
        "hero-glow":
          "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(201,162,75,0.16), transparent 70%)",
        "brass-glow":
          "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,162,75,0.14), transparent 70%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(201,162,75,0.30)",
        accent: "0 18px 45px -18px rgba(201,162,75,0.45)",
        card: "0 20px 50px -25px rgba(11,11,11,0.55)", // cards on dark
        // Cards on light: barely-there lift. Warm-tinted so it never reads grey.
        soft: "0 1px 2px rgba(32,26,14,0.04), 0 10px 30px -14px rgba(32,26,14,0.12)",
        softLift:
          "0 2px 4px rgba(32,26,14,0.05), 0 18px 40px -18px rgba(32,26,14,0.18)",
        ink: "0 30px 80px -30px rgba(0,0,0,0.85)",
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

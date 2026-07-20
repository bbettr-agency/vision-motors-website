import type { Config } from "tailwindcss";

// Brand hex values mirror config/theme-config.ts (documented there, with the
// contrast-pair verification). Tailwind is the render path; theme-config is the
// runtime/documentation reference. Keep the two in sync.

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
          // Primary — technical steel blue: links, icons, section accents
          primary: "#4A7BA7",
          primaryDark: "#35597C",
          primaryLight: "#6E9AC1",
          // Accent — brass: RESERVED for the primary CTA
          accent: "#C9A24B",
          accentDark: "#A8842F",
          accentLight: "#DCBE79",
          // Ink scale
          ink: "#0B0B0B",
          charcoal: "#111114",
          graphite: "#16161A",
          steel: "#26262C",
          // Light surfaces
          mist: "#F5F5F4",
          bone: "#E7E5E4",
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
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(74,123,167,0.22), transparent 70%)",
        "brass-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,162,75,0.16), transparent 70%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(74,123,167,0.45)",
        accent: "0 20px 60px -20px rgba(201,162,75,0.40)",
        card: "0 20px 50px -25px rgba(11,11,11,0.55)",
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

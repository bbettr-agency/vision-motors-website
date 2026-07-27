import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "dark" | "light" | "glass";
};

// Surface rules (v4 blue-led):
// - on DARK sections cards use `navyCard` (#1A3A5A), a clear step up from the
//   navy behind them, with a visible border so they never read as one flat slab.
// - on LIGHT sections cards are white with a blue-grey border and the faintest
//   cool lift. They should feel like clean paper, not dark dashboard widgets.
const tones = {
  dark: "bg-brand-navyCard border border-white/10 text-white shadow-card",
  light: "bg-white border border-brand-line text-brand-ink shadow-soft",
  glass: "bg-white/[0.04] border border-white/12 backdrop-blur-xl text-white",
};

const interactiveTones = {
  dark: "hover:-translate-y-1 hover:border-brand-blueMid/40 hover:shadow-glow",
  light: "hover:-translate-y-1 hover:border-brand-blueMid/50 hover:shadow-softLift",
  glass: "hover:-translate-y-1 hover:border-brand-blueMid/40 hover:bg-white/[0.07]",
};

export default function Card({
  children,
  className,
  interactive = true,
  tone = "dark",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        tones[tone],
        interactive && interactiveTones[tone],
        className
      )}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "dark" | "light" | "glass";
};

// v2 surface rules:
// - on DARK sections cards use `graphite` (#1E1E24), a clear step up from the
//   ink/charcoal behind them, with a visible border. Previously cards were
//   #16161A on #0B0B0B, which barely separated and read as one flat slab.
// - on LIGHT sections cards are near-white with a warm border and the faintest
//   lift. They should feel like clean paper, not dark dashboard widgets.
const tones = {
  dark: "bg-brand-graphite border border-white/10 text-white shadow-card",
  light: "bg-white border border-brand-stone text-brand-ink shadow-soft",
  glass: "bg-white/[0.04] border border-white/12 backdrop-blur-xl text-white",
};

const interactiveTones = {
  dark: "hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-glow",
  light: "hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-softLift",
  glass: "hover:-translate-y-1 hover:border-brand-accent/40 hover:bg-white/[0.07]",
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

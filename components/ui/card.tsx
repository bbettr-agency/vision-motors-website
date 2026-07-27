import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "dark" | "light" | "glass";
};

// Surface rules (v5 workshop-manual): the redesign separates with hairlines and
// surface contrast, not floating drop-shadows. Squared corners, no glass.
// - DARK: a subtle raised charcoal with a hairline white border.
// - LIGHT: warm paper inset with a hairline warm border.
// Used sparingly — most sections are now rows / ruled splits, not cards.
const tones = {
  dark: "bg-brand-charcoalLight border border-white/12 text-white",
  light: "bg-brand-cream border border-brand-line text-brand-ink",
  glass: "bg-white/[0.04] border border-white/12 text-white",
};

const interactiveTones = {
  dark: "hover:-translate-y-0.5 hover:border-brand-cta/40",
  light: "hover:-translate-y-0.5 hover:border-brand-ink/40",
  glass: "hover:-translate-y-0.5 hover:border-brand-cta/40 hover:bg-white/[0.07]",
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

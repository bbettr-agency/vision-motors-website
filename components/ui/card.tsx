import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "dark" | "light" | "glass";
};

const tones = {
  dark: "bg-brand-graphite border border-white/[0.07] text-white",
  light: "bg-white border border-brand-ink/[0.07] text-brand-ink shadow-sm",
  glass:
    "bg-white/[0.03] border border-white/10 backdrop-blur-xl text-white",
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
        interactive &&
          "hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}

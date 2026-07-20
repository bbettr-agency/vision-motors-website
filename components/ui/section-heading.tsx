import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

// The 3-of-5-sites majority API from the SHOWCASE harvest, plus `as` so heading
// levels never skip (PIPELINE/gates.md SEO requirement).
type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em]",
            isDark ? "text-brand-accent" : "text-brand-primaryDark"
          )}
        >
          {eyebrow}
        </p>
      )}

      <Tag
        className={cn(
          "font-display font-bold tracking-tight",
          Tag === "h1"
            ? "text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            : "text-3xl leading-[1.08] md:text-4xl lg:text-5xl",
          eyebrow && "mt-3",
          isDark ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </Tag>

      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            align === "center" ? "mx-auto" : "",
            "max-w-[65ch]",
            isDark ? "text-white/65" : "text-brand-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

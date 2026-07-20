import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

// The 3-of-5-sites majority API from the SHOWCASE harvest, plus `as` so heading
// levels never skip (PIPELINE/gates.md SEO requirement).
//
// v2: tone="light" is now a first-class path, not an afterthought — roughly half
// the page sits on warm light surfaces. Body copy also carries more line-height
// (1.7) because the previous 1.6 read as dense once sections got taller.
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
            "text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm",
            isDark ? "text-brand-accent" : "text-brand-accentInk"
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
            : "text-3xl leading-[1.1] md:text-4xl lg:text-[2.75rem]",
          eyebrow && "mt-4",
          isDark ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </Tag>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-[62ch] text-base leading-[1.7] md:text-lg",
            align === "center" && "mx-auto",
            isDark ? "text-brand-bone/80" : "text-brand-inkSoft"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

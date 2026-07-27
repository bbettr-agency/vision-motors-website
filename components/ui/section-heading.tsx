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
            // Mono technical label — the "service manual" voice. A leading rule
            // gives it the look of a documentation tag without extra markup.
            "inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] sm:text-xs",
            isDark ? "text-brand-cta" : "text-brand-blue"
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-px w-8",
              isDark ? "bg-brand-cta/60" : "bg-brand-blue/50"
            )}
          />
          {eyebrow}
        </p>
      )}

      <Tag
        className={cn(
          "font-display font-bold tracking-tight",
          Tag === "h1"
            ? "text-[2.75rem] leading-[0.98] md:text-6xl lg:text-7xl"
            : "text-4xl leading-[0.98] md:text-5xl lg:text-[3.25rem]",
          eyebrow && "mt-5",
          isDark ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </Tag>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-[60ch] text-base leading-[1.7] md:text-lg",
            align === "center" && "mx-auto",
            isDark ? "text-brand-bone" : "text-brand-inkSoft"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

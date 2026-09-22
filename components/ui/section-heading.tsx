import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  SECTION HEADING — v6 (Phase 1 typography reset).
//
//  The old version hardcoded ONE treatment (rule → mono eyebrow → bold 52–72px
//  heading → paragraph) and was used ~32×, which is most of why the site read as
//  template-generated. This version:
//    • drops the default weight from bold (700) to semibold (600),
//    • loosens the very tight leading (0.98 → ~1.06),
//    • makes the mono eyebrow OPTIONAL and the leading rule OPT-IN (`rule`), so
//      the "workshop-manual" detail becomes seasoning used on a few signature
//      sections rather than a badge on every one,
//    • adds `size="sm"` for quiet sections that should not dominate.
//
//  Contrast now comes from scale + whitespace + the brass accent, not weight.
//  Heading LEVELS (`as`) stay independent of visual size so hierarchy/SEO hold.
// ─────────────────────────────────────────────────────────────────────────────

type SectionHeadingProps = {
  eyebrow?: string;
  /** Opt-in mono "leading rule" detail beside the eyebrow. Use sparingly. */
  rule?: boolean;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  /** Visual scale — `sm` is the quiet treatment; heading LEVEL is set by `as`. */
  size?: "default" | "sm";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  rule = false,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  size = "default",
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
            "inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] sm:text-xs",
            isDark ? "text-brand-cta" : "text-brand-blue"
          )}
        >
          {rule && (
            <span
              aria-hidden
              className={cn(
                "h-px w-8",
                isDark ? "bg-brand-cta/60" : "bg-brand-blue/50"
              )}
            />
          )}
          {eyebrow}
        </p>
      )}

      <Tag
        className={cn(
          "font-display font-semibold tracking-[-0.01em]",
          Tag === "h1"
            ? "text-[2.5rem] leading-[1.04] md:text-[3.25rem] lg:text-[3.75rem]"
            : size === "sm"
              ? "text-2xl leading-[1.12] md:text-3xl"
              : "text-[2rem] leading-[1.08] md:text-4xl lg:text-[2.75rem]",
          eyebrow && "mt-4",
          isDark ? "text-white" : "text-brand-ink"
        )}
      >
        {title}
      </Tag>

      {description && (
        <p
          className={cn(
            "mt-4 max-w-[62ch] text-base leading-[1.7] md:text-[1.0625rem]",
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

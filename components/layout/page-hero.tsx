import type { ReactNode } from "react";

import Breadcrumbs, { type Crumb } from "@/components/ui/breadcrumbs";
import { cn } from "@/utils/cn";

/**
 * Standard inner-page header: breadcrumbs, H1, intro.
 *
 * Sits on the charcoal brand anchor so every inner page opens with the workshop
 * dark, then alternates into warm paper below — the same rhythm as the homepage.
 *
 * NOTE: this is shared chrome, aligned to the v5 tokens. The internal PAGE
 * BODIES (views/*, service-page-template) are NOT yet redesigned to the
 * "workshop manual" system — that is a documented follow-up pass (see
 * PROJECT_STATUS.md). They inherit the new palette but still use the old card
 * compositions.
 */
export default function PageHero({
  trail,
  eyebrow,
  title,
  intro,
  children,
}: {
  trail: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-6 pb-16 pt-28 md:pb-20 md:pt-36 lg:px-8">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_30%_0%,black,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Breadcrumbs trail={trail} tone="dark" />

        {eyebrow && (
          <p className="mt-7 inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-cta sm:text-xs">
            <span aria-hidden className="h-px w-8 bg-brand-cta/60" />
            {eyebrow}
          </p>
        )}

        <h1
          className={cn(
            "font-display font-extrabold uppercase leading-[0.98] tracking-tight text-white text-[2.5rem] md:text-5xl lg:text-6xl",
            eyebrow ? "mt-5" : "mt-7"
          )}
        >
          {title}
        </h1>

        {intro && (
          <div className="mt-6 max-w-[62ch] text-base leading-[1.75] text-brand-bone md:text-lg">
            {intro}
          </div>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}

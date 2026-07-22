import type { ReactNode } from "react";

import Breadcrumbs, { type Crumb } from "@/components/ui/breadcrumbs";
import { cn } from "@/utils/cn";

/**
 * Standard inner-page header: breadcrumbs, H1, intro.
 *
 * Sits on the indigo brand anchor so every inner page opens with the brand
 * colour, then alternates into warm light below — the same rhythm discipline
 * as the homepage.
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
    <section className="relative overflow-hidden bg-brand-indigoDeep px-6 pb-16 pt-28 md:pb-20 md:pt-36 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-brass-glow opacity-70"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl">
        <Breadcrumbs trail={trail} tone="dark" />

        {eyebrow && (
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent sm:text-sm">
            {eyebrow}
          </p>
        )}

        <h1
          className={cn(
            "font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]",
            eyebrow ? "mt-4" : "mt-7"
          )}
        >
          {title}
        </h1>

        {intro && (
          <div className="mt-6 max-w-[62ch] text-base leading-[1.75] text-brand-bone/80 md:text-lg">
            {intro}
          </div>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}

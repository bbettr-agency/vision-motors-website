import Link from "next/link";

import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import CallButton from "@/components/ui/call-button";
import type { CallLocation } from "@/lib/tracking";

/**
 * Reusable closing CTA. Call primary, book secondary — the same hierarchy
 * everywhere, so no page invents its own conversion pattern.
 */
export default function CtaBand({
  location = "final_cta",
  heading = "Not sure what's wrong? Phone the workshop.",
  body = "Tell us what the car is doing and we'll tell you what happens next. If it's urgent, calling is quickest.",
}: {
  location?: CallLocation;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-t-[1.5rem] border-t border-white/10 bg-brand-ink px-6 py-20 md:rounded-t-[2.5rem] md:py-24 lg:px-8">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:44px_44px] opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[55ch] text-base leading-[1.75] text-brand-bone">
          {body}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton location={location} variant="brass" showNumber />
          <Link
            href={utilityRoutes.booking}
            className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cta/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink md:text-base"
          >
            {siteConfig.ctaSecondary}
          </Link>
        </div>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-brand-bone">
          Monday – Friday 07:30 – 17:00 · {siteConfig.addressDisplay}
        </p>
      </div>
    </section>
  );
}

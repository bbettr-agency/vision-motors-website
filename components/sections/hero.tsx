import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import CallButton from "@/components/ui/call-button";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO — image-led, centred (2026-08-10).
//
//  A full-bleed REAL Vision Motors photograph (the busy workshop interior) under
//  a premium navy overlay. Centred eyebrow → H1 → one supporting sentence → Call
//  (primary) / Book (secondary) → a small trust line. The job is to make a
//  visitor feel "this is a real, established workshop" in ~5 seconds.
//
//  ⚠️ The capability index (01–08) that used to live here has been removed — the
//  Services section now carries the service list. No stock, no AI, no video, no
//  collage: one authentic photograph.
//
//  PERFORMANCE / a11y:
//    • The hero image is the LCP element → `priority`, and it is NEVER
//      opacity-animated (that would defeat the preload). alt="" — it is a
//      backdrop; the workshop is named in copy and carries descriptive alt where
//      it appears as content (location-hours). The overlay keeps text readable
//      without crushing the photograph to black.
//    • The text has a light, one-time TRANSFORM+opacity entrance (motion-safe
//      only, never on the image), so reduced-motion / no-JS users get the final
//      state instantly. SERVER component; H1 + copy are in the SSR HTML.
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-brand-ink md:min-h-[92vh]"
    >
      {/* Background layer — the full-bleed real photograph + navy overlay. Kept in
          a plain z-0 stacking layer (NOT negative z-index / isolate, which some
          browsers fail to composite, leaving the hero flat navy). The image is the
          LCP: `priority`, never opacity-animated. Premium navy overlay: darker top
          (nav legibility) and bottom (behind the CTAs), lighter through the middle
          so the workshop stays clearly visible without being crushed to black. */}
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src="/images/vision-motors-og-image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <span className="absolute inset-0 bg-gradient-to-b from-brand-ink/80 via-brand-ink/40 to-brand-ink/90" />
        <span className="absolute inset-0 bg-brand-ink/10" />
      </div>

      {/* One-time, time-based entrance (never scroll-triggered → never stuck). */}
      <style>{`@keyframes vmHeroRise{from{opacity:0;transform:translateY(0.75rem)}to{opacity:1;transform:none}}`}</style>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 pt-32 text-center md:pb-24 md:pt-36 lg:px-8">
        <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.3em] text-brand-bone motion-safe:[animation:vmHeroRise_0.5s_cubic-bezier(0.22,1,0.36,1)_both]">
          Vehicle Repairs · Diagnostics · {siteConfig.city}
        </p>

        {/* The single H1 — mixed case, natural and readable, SEO-relevant. */}
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_0.08s_both] sm:text-5xl lg:text-[3.75rem]">
          Specialist vehicle, engine &amp; gearbox repairs
          <span className="text-brand-bone"> in Pretoria</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[54ch] text-base leading-[1.7] text-brand-mist md:text-lg motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_0.16s_both]">
          From everyday servicing to the difficult engine, gearbox and diagnostic
          faults other workshops send away — we find the fault first, then quote
          to fix it.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_0.24s_both]">
          <CallButton location="hero" variant="brass" size="lg" showNumber />
          <Link
            href={utilityRoutes.booking}
            className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cta/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink md:text-base"
          >
            {siteConfig.ctaSecondary}
          </Link>
        </div>

        <p className="mt-7 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-bone/80 motion-safe:[animation:vmHeroRise_0.55s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
          No obligation · We diagnose before we quote · All makes &amp; models
        </p>
      </div>
    </section>
  );
}

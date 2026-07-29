"use client";

import { reviewsConfig } from "@/config/reviews-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  TESTIMONIALS — real, named, verbatim, from the client's own published site.
//
//  ❌ NO aggregate rating and NO star graphics. The Google profile is 4.2★ from
//     71 reviews with 8 one-star entries; leading with the number would surface
//     the weakest asset. `aggregateRating` schema is also not emitted.
//
//  v6 ("workshop manual"): editorial treatment — one FEATURED quote carried
//  large, the rest as smaller supporting entries divided by hairlines. No
//  identical quote cards. Deep-navy band.
// ─────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [featured, ...supporting] = reviewsConfig;

  return (
    <SectionContainer
      id="reviews"
      className="rounded-[1.5rem] bg-brand-navy md:rounded-[2.5rem]"
    >
      <SectionHeading
        eyebrow="In their words"
        title="What customers actually said"
        description="Published exactly as written, including the one in Afrikaans."
        className="max-w-2xl"
      />

      {/* Featured quote. */}
      <Reveal as="figure" className="mt-14 max-w-4xl">
        <span
          aria-hidden
          className="font-display text-6xl font-bold leading-none text-brand-cta"
        >
          &ldquo;
        </span>
        <blockquote
          lang={featured.language}
          className="mt-2 font-display text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl"
        >
          {featured.quote}
        </blockquote>
        <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-brand-bone">
          <span className="text-white">{featured.author}</span>
          <span className="text-brand-bone"> / {featured.role}</span>
        </figcaption>
      </Reveal>

      {/* Supporting quotes — ruled columns, no boxes. */}
      <div className="mt-16 grid gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-3 sm:gap-x-0 sm:divide-x sm:divide-white/10">
        {supporting.map((review, index) => (
          <Reveal
            key={review.author}
            as="figure"
            delay={index * 0.08}
            className="sm:px-8 sm:first:pl-0 sm:last:pr-0"
          >
            <blockquote
              lang={review.language}
              className="text-sm leading-[1.8] text-brand-bone"
            >
              {review.quote}
            </blockquote>
            <figcaption className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-bone">
              <span className="text-white">{review.author}</span>
              <span className="block text-brand-bone">{review.role}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

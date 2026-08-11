import { ChevronDown, Star } from "lucide-react";

import { reviews, reviewsMeta } from "@/config/reviews-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  REVIEWS — a masonry grid of real, named, 5-star customer reviews on the deep
//  navy band. Only genuine five-star reviews are shown; the honest overall
//  Google rating (4.3) is displayed and linked so nothing is hidden. Real people
//  → initial avatars, never fabricated photos. No aggregateRating/Review schema.
// ─────────────────────────────────────────────────────────────────────────────

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const AVATAR_TONES = [
  "bg-brand-cta/15 text-brand-cta",
  "bg-brand-blueMid/25 text-brand-blueSoft",
  "bg-white/10 text-white",
  "bg-brand-steel/25 text-brand-bone",
];

// Reviews longer than this get a "Read more" toggle so they don't dominate the
// grid. The toggle is a native checkbox + CSS line-clamp (no JS): the full text
// is always in the DOM and expandable even with JavaScript disabled.
const READ_MORE_THRESHOLD = 180;

// Only the first N review cards show by default; the rest reveal via the
// "Read more reviews" button. Same no-JS approach — a native checkbox + CSS
// `:has()`, so every review stays in the DOM (crawlable) and works with JS off.
const VISIBLE_COUNT = 6;

const moreReviewsButton =
  "inline-flex cursor-pointer select-none items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-cta/40 hover:bg-white/[0.07] group-has-[#show-all-reviews:focus-visible]:ring-2 group-has-[#show-all-reviews:focus-visible]:ring-brand-cta";

/** Renders 5 stars with a fractional fill for `value` (e.g. 4.3). */
function Stars({ value = 5, className }: { value?: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <Star className="absolute inset-0 h-4 w-4 text-brand-cta/30" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-4 w-4 fill-brand-cta text-brand-cta" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionContainer id="reviews" className="bg-brand-navy">
      <SectionHeading
        eyebrow="Reviews"
        title="Read what people are saying"
        description="Real customers, in their own words — every review below is quoted exactly as it was left on Google, in English and Afrikaans, with nothing edited out."
        align="center"
        className="max-w-2xl"
      />

      {/* Honest overall rating — links to the live Google listing. */}
      {reviewsMeta.showAggregateRating && (
        <div className="mt-8 flex justify-center">
          <a
            href={reviewsMeta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 transition-colors hover:border-brand-cta/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
          >
            <span className="font-display text-2xl font-extrabold text-white">
              {reviewsMeta.rating}
            </span>
            <Stars value={Number(reviewsMeta.rating)} />
            <span className="text-sm font-medium text-brand-bone">
              on {reviewsMeta.platform}
            </span>
          </a>
        </div>
      )}

      {/* Masonry grid — first VISIBLE_COUNT shown; the rest reveal via the
          "Read more reviews" toggle (native checkbox + CSS :has(), no JS). */}
      <Reveal className="mt-12">
        <div className="group">
          <input
            type="checkbox"
            id="show-all-reviews"
            className="sr-only"
            aria-label="Show all customer reviews"
          />
          <div className="gap-5 sm:columns-2 lg:columns-3">
            {reviews.map((review, i) => {
              const isLong = review.text.length > READ_MORE_THRESHOLD;
              const toggleId = `review-${i}`;
              return (
                <figure
                  key={review.name}
                  className={cn(
                    "mb-5 break-inside-avoid rounded-2xl border border-white/10 bg-brand-navyCard/60 p-6 shadow-card",
                    i >= VISIBLE_COUNT &&
                      "hidden group-has-[#show-all-reviews:checked]:block"
                  )}
                >
                <div className="flex items-center gap-3.5">
                  <span
                    aria-hidden
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
                      AVATAR_TONES[i % AVATAR_TONES.length]
                    )}
                  >
                    {initials(review.name)}
                  </span>
                  <figcaption className="min-w-0">
                    <span className="block truncate font-display text-base font-bold text-white">
                      {review.name}
                    </span>
                    <span className="block truncate text-xs text-brand-bone/70">
                      {review.meta}
                    </span>
                  </figcaption>
                </div>

                <Stars className="mt-4" />

                {isLong ? (
                  // CSS-only expand/collapse: the checkbox toggles line-clamp on
                  // the blockquote and swaps the two labels. Works with no JS.
                  <div className="mt-3">
                    <input type="checkbox" id={toggleId} className="peer sr-only" />
                    <blockquote
                      lang={review.language}
                      className="line-clamp-4 text-sm leading-[1.75] text-brand-bone peer-checked:line-clamp-none"
                    >
                      {review.text}
                    </blockquote>
                    <label
                      htmlFor={toggleId}
                      className="mt-2 inline-block cursor-pointer text-xs font-semibold text-brand-blueSoft underline-offset-4 hover:underline peer-checked:hidden peer-focus-visible:underline"
                    >
                      Read more
                    </label>
                    <label
                      htmlFor={toggleId}
                      className="mt-2 hidden cursor-pointer text-xs font-semibold text-brand-blueSoft underline-offset-4 hover:underline peer-checked:inline-block peer-focus-visible:underline"
                    >
                      Read less
                    </label>
                  </div>
                ) : (
                  <blockquote
                    lang={review.language}
                    className="mt-3 text-sm leading-[1.75] text-brand-bone"
                  >
                    {review.text}
                  </blockquote>
                  )}
                </figure>
              );
            })}
          </div>

          {reviews.length > VISIBLE_COUNT && (
            <div className="mt-12 flex justify-center">
              <label
                htmlFor="show-all-reviews"
                className={cn(
                  moreReviewsButton,
                  "group-has-[#show-all-reviews:checked]:hidden"
                )}
              >
                Read more reviews
                <span className="font-normal text-brand-bone/70">
                  ({reviews.length - VISIBLE_COUNT} more)
                </span>
                <ChevronDown className="h-4 w-4" aria-hidden />
              </label>
              <label
                htmlFor="show-all-reviews"
                className={cn(
                  moreReviewsButton,
                  "hidden group-has-[#show-all-reviews:checked]:inline-flex"
                )}
              >
                Show fewer
                <ChevronDown className="h-4 w-4 rotate-180" aria-hidden />
              </label>
            </div>
          )}
        </div>
      </Reveal>

      <p className="mt-10 text-center text-sm text-brand-bone/70">
        <a
          href={reviewsMeta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-blueSoft underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
        >
          See all reviews on {reviewsMeta.platform}
        </a>
      </p>
    </SectionContainer>
  );
}

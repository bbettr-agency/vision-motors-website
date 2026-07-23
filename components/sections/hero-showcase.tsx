"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { heroShowcase } from "@/config/hero-showcase-config";
import { imagesConfig } from "@/config/images-config";
import Icon from "@/components/ui/icon";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO SERVICE SHOWCASE — the scroll-driven right column.
//
//  DESKTOP: a tall list of service cards. The card nearest the viewport centre
//  is "active" — it lifts, gains a brass rule + brighter number, and the others
//  sit subdued but fully readable. The single real workshop photo is a dimmed,
//  sticky backdrop behind the list (pinned, never stretched).
//
//  ── Robustness (the lessons from the reveal system) ────────────────────────
//  1. NO-JS SAFE. All content is server-rendered inside this client component,
//     so it is in the HTML and crawlable. The subdued/active styling is applied
//     only AFTER mount (`interactive` flag), so without JavaScript every card
//     renders at full prominence — nothing is hidden.
//  2. JUMP-SCROLL SAFE. Active state is computed from absolute element position
//     on every scroll (rAF-throttled), not from IntersectionObserver's
//     change-only callbacks — so an End-key jump or restored scroll lands on the
//     correct active card.
//  3. ONE shared listener, self-contained. No animation library.
//  4. reduced-motion: transitions are gated with `motion-safe:`. Active tracking
//     still runs (it is emphasis, not motion) so the section stays meaningful.
//
//  ── Accessibility ──────────────────────────────────────────────────────────
//  - Active is signalled by THREE cues, never colour alone: a brass left rule
//    (structural), a surface change, and a brighter/bolder number.
//  - `aria-current` marks the active item. No live region → no per-scroll
//    screen-reader chatter.
//  - The backdrop image is decorative here (the real informative copy is the
//    list), so its alt stays descriptive but it is not announced per step.
//
//  Service pages are Phase 3 (`live: false`), so items are NOT links yet —
//  nothing points at a 404.
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [interactive, setInteractive] = useState(false);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    setInteractive(true);

    let ticking = false;
    const compute = () => {
      ticking = false;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const centre = r.top + r.height / 2;
        const d = Math.abs(centre - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    compute();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="relative lg:col-span-6">
      {/* Persistent workshop backdrop — desktop only. Sticky so it stays behind
          the list rather than stretching down the whole tall column. Dimmed
          with an indigo wash so the cards stay readable over it. */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden
      >
        <div className="sticky top-28 h-[70vh] overflow-hidden rounded-[1.9rem] ring-1 ring-white/10">
          <Image
            src={imagesConfig.hero.src as string}
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-indigoDeep/85 via-brand-indigoDeep/70 to-brand-indigoDeep/55" />
        </div>
      </div>

      {/* Mobile: the real photo, shown once, before the stacked list. */}
      <div className="relative mb-8 overflow-hidden rounded-3xl ring-1 ring-white/10 lg:hidden">
        <Image
          src={imagesConfig.hero.src as string}
          alt={imagesConfig.hero.alt}
          width={1024}
          height={682}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
      </div>

      <p className="relative z-10 mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent lg:mb-8">
        Everything we take on
      </p>

      <ul className="relative z-10 space-y-3.5 lg:space-y-3">
        {heroShowcase.map((item, i) => {
          const isActive = interactive && i === active;
          return (
            <li
              key={item.slug}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "group relative flex items-start gap-4 rounded-2xl border p-5 sm:p-6",
                "motion-safe:transition-all motion-safe:duration-500",
                "lg:min-h-[14vh] lg:flex-col lg:justify-center lg:p-5",
                // Backdrop-blur keeps the cards legible over the workshop image.
                "border-white/10 bg-brand-indigoDeep/90 backdrop-blur-md lg:bg-brand-indigoDeep/85",
                // Subdued vs active — applied only once interactive, so no-JS
                // and first paint show every card at full prominence.
                interactive && !isActive && "lg:opacity-65",
                isActive &&
                  "border-brand-accent/50 bg-brand-indigoCard/95 lg:opacity-100 lg:shadow-glow",
              )}
            >
              {/* Brass rule — a structural active cue, not colour alone. */}
              <span
                className={cn(
                  "absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-brand-accent motion-safe:transition-opacity motion-safe:duration-500",
                  isActive ? "opacity-100" : "opacity-0",
                )}
                aria-hidden
              />

              <span className="flex items-center gap-4 lg:contents">
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl motion-safe:transition-colors motion-safe:duration-500",
                    isActive
                      ? "bg-brand-accent text-brand-ink"
                      : "bg-white/[0.07] text-brand-indigoLight",
                  )}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>

                <span
                  className={cn(
                    "font-mono text-xs motion-safe:transition-colors motion-safe:duration-500 lg:mt-4",
                    isActive
                      ? "font-semibold text-brand-accent"
                      : "text-brand-bone/70",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-display text-base font-semibold text-white sm:text-lg">
                  {item.name}
                </span>
                <span
                  className={cn(
                    "mt-1.5 block text-sm leading-[1.6] motion-safe:transition-colors motion-safe:duration-500",
                    isActive ? "text-brand-bone/85" : "text-brand-bone/70",
                  )}
                >
                  {item.blurb}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

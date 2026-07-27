"use client";

import { useEffect, useRef, useState } from "react";

import { heroShowcase } from "@/config/hero-showcase-config";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO SERVICE-TITLE SHOWCASE — the scroll-driven right column.
//
//  v5: TITLES ONLY. Just the service names scroll — no icons, no descriptions.
//  Each title becomes active in turn as the visitor scrolls, so the breadth of
//  the workshop lands at a glance: diagnostics, engines, gearboxes, DSG,
//  driveline, servicing, brakes, Ford Ranger.
//
//  The list floats on a frosted-navy panel over the hero's photographic
//  background, which keeps every title readable regardless of the image behind.
//
//  ── Robustness (the reveal-system lessons) ──────────────────────────────────
//  1. NO-JS SAFE. All titles are server-rendered here, so they are in the HTML,
//     crawlable, and visible without JavaScript. The active/subdued styling is
//     applied only AFTER mount (`interactive`), so no-JS shows every title at
//     full prominence — nothing hidden.
//  2. JUMP-SCROLL SAFE. Active is computed from absolute element position on
//     scroll (rAF-throttled), not from IntersectionObserver change callbacks.
//  3. One shared listener, self-contained. No animation library.
//  4. reduced-motion: transitions are motion-safe-gated; active tracking still
//     runs (it is emphasis, not motion).
//
//  ── Accessibility ──────────────────────────────────────────────────────────
//  - Active is signalled by THREE cues, never colour alone: a blue left rule
//    (structural), a size/weight shift, and a brighter number. `aria-current`
//    marks it. No live region → no per-scroll screen-reader chatter.
//
//  Service pages are Phase 3 (`live: false`), so titles are NOT links yet.
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
    <div className="lg:col-span-6">
      {/* Frosted-navy panel floating over the hero photograph — guarantees the
          titles stay readable whatever the image behind. */}
      <div className="rounded-3xl border border-white/10 bg-brand-navy/45 p-6 backdrop-blur-md sm:p-8 lg:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blueSoft">
          Everything we take on
        </p>

        <ul className="mt-6 lg:mt-4">
          {heroShowcase.map((item, i) => {
            const isActive = interactive && i === active;
            return (
              <li
                key={item.slug}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                aria-current={isActive ? "true" : undefined}
                className="relative flex items-baseline gap-4 border-t border-white/5 py-5 first:border-t-0 lg:min-h-[15vh] lg:flex-col lg:justify-center lg:gap-2"
              >
                {/* Blue active rule — a structural cue, not colour alone. */}
                <span
                  className={cn(
                    "absolute -left-6 top-4 bottom-4 w-[3px] rounded-full bg-brand-blueMid motion-safe:transition-opacity motion-safe:duration-500 lg:-left-9",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden
                />

                <span
                  className={cn(
                    "font-mono text-xs motion-safe:transition-colors motion-safe:duration-500",
                    isActive
                      ? "font-semibold text-brand-blueSoft"
                      : "text-brand-bone/70",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={cn(
                    "origin-left font-display text-lg font-semibold leading-tight motion-safe:transition-all motion-safe:duration-500 sm:text-xl",
                    isActive
                      ? "text-white lg:scale-[1.03]"
                      : "text-brand-bone/75",
                  )}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

import { heroShowcase } from "@/config/hero-showcase-config";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO CAPABILITY INDEX WALL — the scroll-driven right column of the hero.
//
//  v6 ("workshop manual"): a serious capability INDEX, not a dashboard list and
//  not a floating glass panel. Large mono numerals, uppercase service names,
//  heavy hairline rules. As the visitor scrolls, each capability becomes active
//  in turn — the workshop's breadth (diagnostics → engines → gearboxes → DSG →
//  driveline → servicing → brakes → Ford engine work) lands at a glance.
//
//  Active state is signalled by THREE cues, never colour alone (Correction 9):
//    1. a thick AMBER left rule (structural),
//    2. a type-size / weight shift (numeral + name grow, steel → white),
//    3. a revealed mono/technical sub-label (the "technical detail change").
//  `aria-current` marks it; no live region → no per-scroll SR chatter.
//
//  Robustness (reveal-system lessons):
//    • NO-JS SAFE — all names AND sub-lines are server-rendered (in the HTML,
//      crawlable). Before mount (`interactive` false) every row shows its
//      sub-line at full prominence; nothing is hidden without JS.
//    • JUMP-SCROLL SAFE — active is computed from absolute element position on
//      scroll (rAF-throttled), not IntersectionObserver callbacks.
//    • Restrained scroll (Correction 7) — slots are ~12vh, so all eight items
//      cycle within roughly one screen of scrolling. No hijack, no snap.
//    • reduced-motion — transitions are motion-safe-gated; tracking still runs
//      (it is emphasis, not motion).
//
//  Service pages are Phase 3 (`live:false`), so names are NOT links yet.
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
    <div className="mt-10 lg:mt-14">
      <p className="flex items-center gap-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-cta">
        <span aria-hidden className="h-px w-8 bg-brand-cta/60" />
        Everything we take on
        <span className="text-brand-steel" aria-hidden>
          / 01—08
        </span>
      </p>

      <ul className="mt-2 border-t border-white/10">
        {heroShowcase.map((item, i) => {
          const isActive = interactive && i === active;
          const showSub = !interactive || isActive;
          return (
            <li
              key={item.slug}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              aria-current={isActive ? "true" : undefined}
              className="relative border-b border-white/10 py-6 pl-6 lg:min-h-[12vh] lg:py-8"
            >
              {/* Amber active rule — structural cue, not colour alone. */}
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-[3px] bg-brand-cta motion-safe:transition-opacity motion-safe:duration-500",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />

              <div className="flex items-baseline gap-4 sm:gap-6">
                <span
                  className={cn(
                    "font-mono text-xl tabular-nums motion-safe:transition-colors motion-safe:duration-500 sm:text-2xl",
                    isActive
                      ? "font-semibold text-brand-cta"
                      : "text-brand-steel"
                  )}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={cn(
                    "font-display font-bold uppercase leading-[0.98] tracking-tight motion-safe:transition-colors motion-safe:duration-500",
                    isActive
                      ? "text-2xl text-white sm:text-3xl"
                      : "text-xl text-brand-bone sm:text-2xl"
                  )}
                >
                  {item.name}
                </span>
              </div>

              {/* Technical detail — revealed for the active item (or all, no-JS). */}
              <p
                className={cn(
                  "overflow-hidden pl-[calc(1.25rem+1.5rem)] text-sm leading-relaxed text-brand-bone/80 motion-safe:transition-all motion-safe:duration-500 sm:pl-[calc(1.5rem+2rem)]",
                  showSub ? "mt-3 max-h-24 opacity-100" : "mt-0 max-h-0 opacity-0"
                )}
              >
                {item.blurb}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

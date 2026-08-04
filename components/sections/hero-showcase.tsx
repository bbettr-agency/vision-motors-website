"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import { heroShowcase } from "@/config/hero-showcase-config";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  HERO CAPABILITY INDEX — image-free, motion-driven right column (2026-08-04).
//
//  A large typography index of what the workshop takes on, with an inline-SVG
//  "diagnostic trace" that DRAWS as the visitor scrolls, per-service nodes, a
//  playhead marker and a ghost numeral. NO images, NO video — atmosphere is SVG,
//  CSS and type only.
//
//  ── Why NOT Motion / whileInView (deliberate) ───────────────────────────────
//  This project already hit real failures with framer-motion `whileInView` under
//  LazyMotion (content stuck hidden; jump-scroll skips; tab-throttle) — see
//  components/ui/reveal.tsx. So the active state stays on a PROVEN, hardened rAF
//  engine, and the continuous scroll value is published as a CSS custom property
//  (`--hero-progress`, 0→1) that CSS/SVG read frame-exactly. Zero animation-library
//  bytes; mechanical, precise motion.
//
//  ── Active-index derivation: SECTION SCROLL PROGRESS (not viewport-centre) ────
//  Now that the hero is image-free, this index starts near the top of the page, so
//  a "row nearest the viewport centre" test would NEVER select rows 01–02 (they
//  begin above centre and only move further up). Instead ONE continuous progress
//  value — how far the sticky hero section has scrolled (0 at the top, 1 as it
//  releases) — drives BOTH the discrete active row (`round(p·(n−1))`) AND the SVG
//  trace/playhead. Result: 01 is active at the top, 08 as the section releases, and
//  every capability gets its active moment. Still pure rAF off scroll/resize — no
//  `useScroll`, no `whileInView`, no IntersectionObserver.
//
//  ── Robustness ───────────────────────────────────────────────────────────────
//    • NO-JS SAFE — every name AND blurb is server-rendered and visible; before
//      mount (`interactive` false) all blurbs are shown, nothing hidden. The SVG
//      trace/playhead are decorative (`aria-hidden`) and simply inert without JS.
//    • JUMP-SCROLL SAFE — progress is read from the section's live bounding rect on
//      a rAF-throttled scroll/resize listener (not IntersectionObserver), so a jump
//      to any scroll position resolves the correct active row on the next frame.
//    • REDUCED-MOTION — the drawing trace + playhead are `motion-reduce:hidden`;
//      the steel spine, nodes, active emphasis (rule + weight + label) remain, so
//      the index is fully legible with no autonomous motion.
//    • a11y — rows are NOT links, so NO `aria-current`; the active row carries a
//      `data-active` flag only. No live region → no per-scroll SR chatter. All
//      decorative SVG is `aria-hidden`.
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [interactive, setInteractive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInteractive(true);

    const count = heroShowcase.length;
    let ticking = false;
    const compute = () => {
      ticking = false;
      const container = containerRef.current;
      if (!container) return;

      // Progress = how far the sticky hero SECTION has scrolled through its own
      // pinned range: 0 while its top is at/below the viewport top, 1 once its
      // bottom reaches the viewport bottom. Read live from the rect every frame so
      // any jump-scroll resolves correctly on the next tick.
      const section = container.closest("section");
      const rect = (section ?? container).getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p =
        scrollable > 0
          ? Math.min(1, Math.max(0, -rect.top / scrollable))
          : 0;

      container.style.setProperty("--hero-progress", String(p));

      // One continuous value → the discrete active row. round() gives each row an
      // equal, centred slice of the scroll so 01 is active at the top and 08 at
      // release. Guarded to the valid index range.
      const idx = Math.min(count - 1, Math.max(0, Math.round(p * (count - 1))));
      setActive(idx);
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
    <div
      ref={containerRef}
      className="relative mt-10 lg:mt-0"
      style={{ "--hero-progress": 0 } as CSSProperties}
    >
      {/* Ghost numeral — big, faint, desktop-only atmosphere. Fades in on change
          (motion-safe); static under reduced-motion. Decorative. */}
      <style>{`@keyframes vmGhostIn{from{opacity:0}to{opacity:1}}`}</style>
      <span
        key={active}
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 hidden select-none font-display text-[10rem] font-black leading-none text-white/[0.05] motion-safe:[animation:vmGhostIn_0.45s_ease-out] lg:block"
      >
        {String(active + 1).padStart(2, "0")}
      </span>

      <p className="relative flex items-center gap-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-cta">
        <span aria-hidden className="h-px w-8 bg-brand-cta/60" />
        Everything we take on
        <span className="text-brand-steel" aria-hidden>
          / 01—08
        </span>
      </p>

      <ul className="relative mt-2 border-t border-white/10">
        {/* Left rail — the diagnostic trace (decorative). */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-11"
        >
          <svg
            className="absolute left-[19px] top-0 h-full w-[3px] -translate-x-1/2 overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 3 100"
          >
            {/* Faint steel spine — always visible. */}
            <line
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="100"
              className="stroke-white/15"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
            {/* Amber path that DRAWS with scroll — motion only. */}
            <line
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="100"
              pathLength={1}
              className="stroke-brand-cta motion-reduce:hidden"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: "calc(1 - var(--hero-progress, 0))",
              }}
            />
          </svg>

          {/* Playhead marker at the draw tip — motion only. */}
          <span
            className="absolute left-[19px] z-20 -translate-x-1/2 motion-reduce:hidden"
            style={{ top: "calc(var(--hero-progress, 0) * 100%)" }}
          >
            <span className="block h-3 w-3 -translate-y-1/2 rotate-45 border-2 border-brand-cta bg-brand-ink" />
          </span>
        </span>

        {heroShowcase.map((item, i) => {
          const isActive = interactive && i === active;
          // Blurbs are ALWAYS visible on mobile and with JS off. Only on desktop
          // (lg+), once interactive, do inactive rows collapse their blurb — so the
          // active-row reveal is a desktop-only progressive enhancement and every
          // mobile row stays fully readable by default.
          const collapse = interactive && !isActive;
          return (
            <li
              key={item.slug}
              data-active={isActive || undefined}
              className="relative border-b border-white/10 py-6 pl-11 sm:pl-14 lg:min-h-[21vh] lg:py-9"
            >
              {/* Strong amber rule for the active row — sits on the spine. */}
              <span
                aria-hidden
                className={cn(
                  "absolute left-[19px] top-0 bottom-0 z-10 w-[3px] -translate-x-1/2 bg-brand-cta motion-safe:transition-opacity motion-safe:duration-500",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />
              {/* Node on the spine — active fills amber (structural cue). */}
              <span
                aria-hidden
                className={cn(
                  "absolute left-[19px] top-[calc(1.5rem+0.55em)] z-20 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border motion-safe:transition-colors motion-safe:duration-500 lg:top-[calc(2rem+0.55em)]",
                  isActive
                    ? "border-brand-cta bg-brand-cta"
                    : "border-brand-steel bg-brand-ink"
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

              {/* Terse customer-outcome line. Visible by default (mobile + no-JS);
                  on desktop it collapses for inactive rows only. */}
              <p
                className={cn(
                  "mt-3 max-h-24 overflow-hidden text-sm leading-relaxed text-brand-bone/80 opacity-100 motion-safe:lg:transition-all motion-safe:lg:duration-500",
                  collapse && "lg:mt-0 lg:max-h-0 lg:opacity-0"
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

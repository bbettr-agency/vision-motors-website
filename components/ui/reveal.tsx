"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { registerReveal } from "@/lib/reveal-manager";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  REVEAL — scroll-triggered fade-up, built as PROGRESSIVE ENHANCEMENT.
//
//  WHY NOT FRAMER MOTION:
//  The build initially used framer-motion's `whileInView`. Under
//  <LazyMotion features={domAnimation}> the viewport feature is not included,
//  so every reveal stayed stuck at its initial state and the page rendered
//  blank below the hero. Loading the full bundle fixed it but pushed first-load
//  JS over the 150KB budget in SYSTEM/07. This primitive does the same job in
//  CSS, keeps the bundle at 120KB, and puts less work on the main thread.
//
//  WHY PROGRESSIVE ENHANCEMENT:
//  The obvious implementation — server-render the element with `opacity-0` and
//  let JS reveal it — has two real failure modes:
//    1. With JavaScript disabled the content is permanently invisible, even
//       though it is present in the HTML.
//    2. A fast jump-scroll (anchor link, restored scroll position, keyboard
//       End key) can carry an element past the viewport without the observer
//       ever seeing it intersect, leaving it invisible for the whole session.
//
//  So the hidden state lives in CSS behind `.js-reveal`, which is added to
//  <html> by an inline script in app/layout.tsx before first paint. No JS means
//  no class means content is simply visible. Failure mode 2 is handled by
//  lib/reveal-manager.ts, which checks element position on scroll rather than
//  relying on IntersectionObserver's change-only callbacks.
//
//  Motion values match SYSTEM/01-DESIGN-TOKENS.md §5: 700ms, y 24→0,
//  easing [0.22, 1, 0.36, 1], reveals once, never re-animates.
// ─────────────────────────────────────────────────────────────────────────────

type RevealTag = "div" | "article" | "figure" | "li" | "section" | "ul" | "ol";

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to div. */
  as?: RevealTag;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  id?: string;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reveals once and never re-animates — the manager drops it on reveal.
    return registerReveal(node, () => setRevealed(true));
  }, []);

  return (
    <Tag
      id={id}
      // Tag is a fixed union of intrinsic elements, so this ref type is safe.
      ref={ref as React.Ref<never>}
      // The hidden styling is applied by CSS via .js-reveal — see globals.css.
      data-reveal={revealed ? "shown" : "pending"}
      className={cn(className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}

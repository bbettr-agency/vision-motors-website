// ─────────────────────────────────────────────────────────────────────────────
//  REVEAL MANAGER
//
//  One scroll listener for the whole page, rAF-throttled, that removes itself
//  once every registered element has been revealed.
//
//  WHY NOT IntersectionObserver:
//  IO only fires when the intersection state *changes*. If a jump-scroll
//  (anchor link, End key, restored scroll position, or a browser "find on page"
//  jump) carries an element from below the viewport to above it in a single
//  frame, `isIntersecting` is false both before and after, so no callback ever
//  fires and the element stays hidden for the rest of the session. This was
//  reproduced during QA: jumping to the bottom of the page left 29 of 48
//  elements permanently invisible.
//
//  A position check on scroll has no such blind spot: anything whose top edge
//  is above the fold line is revealed, regardless of how it got there.
// ─────────────────────────────────────────────────────────────────────────────

type Registration = {
  node: Element;
  reveal: () => void;
};

const pending = new Set<Registration>();
let listening = false;
let ticking = false;

/** Distance above the viewport bottom at which an element counts as "in view". */
const REVEAL_OFFSET = 80;

function check() {
  ticking = false;

  const fold = window.innerHeight - REVEAL_OFFSET;

  pending.forEach((entry) => {
    if (entry.node.getBoundingClientRect().top < fold) {
      entry.reveal();
      pending.delete(entry);
    }
  });

  if (pending.size === 0) stopListening();
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(check);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  // Browser scroll restoration (reload part-way down the page) moves the
  // viewport WITHOUT firing a scroll event, which would otherwise leave
  // everything above the restored position hidden. Re-check on load and on
  // back/forward cache restore.
  window.addEventListener("load", onScroll);
  window.addEventListener("pageshow", onScroll);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  window.removeEventListener("load", onScroll);
  window.removeEventListener("pageshow", onScroll);
}

/**
 * Register an element to be revealed once it reaches the fold.
 * Returns an unregister function for React cleanup.
 */
export function registerReveal(node: Element, reveal: () => void): () => void {
  const entry: Registration = { node, reveal };

  // Already in view on mount (above the fold, or the page was restored
  // mid-scroll): reveal immediately, no listener needed.
  if (node.getBoundingClientRect().top < window.innerHeight - REVEAL_OFFSET) {
    reveal();
    return () => {};
  }

  pending.add(entry);
  startListening();

  // Scroll position can still change between mount and first paint (hydration,
  // font loading, restored scroll). Re-check on the next frame.
  onScroll();

  return () => {
    pending.delete(entry);
    if (pending.size === 0) stopListening();
  };
}

/**
 * Skip link.
 *
 * Deliberately NOT `sr-only` + `focus:not-sr-only` — that pairing depends on
 * utility ordering and left the link stuck at 1×1px even while focused during
 * QA. Always rendered, simply parked off-screen until focused.
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-brand-accent px-5 py-3 text-sm font-bold text-brand-ink transition-transform duration-200 focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      Skip to content
    </a>
  );
}

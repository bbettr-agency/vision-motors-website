import { SELECT_SERVICE_EVENT } from "@/config/form-config";

/**
 * Scroll to the booking form and move focus to its first control.
 * Respects prefers-reduced-motion. Every non-link CTA routes through this.
 *
 * @param presetService optional service to pre-select (used by the symptom band)
 */
export function scrollToBookingForm(presetService?: string) {
  if (typeof document === "undefined") return;

  const el = document.getElementById("book");
  if (!el) return;

  if (presetService) {
    window.dispatchEvent(
      new CustomEvent(SELECT_SERVICE_EVENT, { detail: presetService })
    );
  }

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  // Move focus after the smooth scroll starts; preventScroll avoids a second jump.
  const focusable = el.querySelector<HTMLElement>(
    "input, select, textarea, button"
  );
  if (focusable) {
    window.setTimeout(
      () => focusable.focus({ preventScroll: true }),
      reduce ? 0 : 400
    );
  }
}

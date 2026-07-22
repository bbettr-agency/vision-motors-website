// ─────────────────────────────────────────────────────────────────────────────
//  CONVERSION TRACKING HOOKS
//
//  Spec: docs/ANALYTICS-AND-CONVERSIONS.md
//
//  ⚠️ NO TRACKING IDs ARE INSTALLED. These helpers push to `window.dataLayer`
//  if a GTM container exists and are otherwise a silent no-op. Nothing breaks,
//  nothing is sent, and no third-party script is loaded until real IDs are
//  supplied (FACT-VERIFICATION-REGISTER.md C17).
//
//  `click_to_call` is the PRIMARY conversion — the client's primary CTA is
//  "Call Us". Any Ads setup optimising for form fills alone will misread this
//  account.
//
//  ⚠️ Known limit, documented for the client: a tel: click is a CLICK, not a
//  confirmed conversation. Reporting these as "calls" overstates performance.
//  Accurate call attribution needs a call-tracking number — a separate decision
//  with NAP-consistency implications.
// ─────────────────────────────────────────────────────────────────────────────

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

function push(event: DataLayerEvent) {
  if (typeof window === "undefined") return;
  // No-op until a GTM container is present.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

/** Where on the page a call CTA was clicked. Tells us which placement earns calls. */
export type CallLocation =
  | "header"
  | "hero"
  | "sticky"
  | "footer"
  | "service_page"
  | "final_cta"
  | "contact_page"
  | "booking_page";

export function trackCall(location: CallLocation) {
  push({
    event: "click_to_call",
    location,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackEmail() {
  push({
    event: "click_to_email",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackDirections(premises: "main" | "engine_shop" = "main") {
  push({ event: "get_directions", premises });
}

export function trackBookingStart(servicePreselected?: string) {
  push({
    event: "booking_start",
    service_preselected: servicePreselected ?? "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

export function trackBookingSubmit(data: {
  service: string;
  vehicleMake: string;
  source?: string;
}) {
  push({
    event: "booking_submit",
    service_required: data.service,
    vehicle_make: data.vehicleMake,
    source: data.source ?? "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

/**
 * Captures campaign attribution from the URL and referrer.
 * Read at submit time so a visitor who lands on an ad and converts three pages
 * later still carries the right source.
 */
export function captureAttribution() {
  if (typeof window === "undefined") {
    return { source: "", gclid: "", utm: {}, pageUrl: "" };
  }
  const p = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
    (k) => {
      const v = p.get(k);
      if (v) utm[k] = v;
    }
  );
  return {
    source:
      p.get("utm_source") ||
      (document.referrer && !document.referrer.includes(window.location.host)
        ? document.referrer
        : "") ||
      "direct",
    gclid: p.get("gclid") ?? "",
    utm,
    pageUrl: window.location.href,
  };
}

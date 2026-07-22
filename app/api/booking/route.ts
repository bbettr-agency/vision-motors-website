import { NextResponse } from "next/server";

import { validateLead, type LeadPayload } from "@/lib/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives a booking enquiry, validates it, and forwards it to the GoHighLevel
 * inbound webhook (which emails the workshop and creates the contact +
 * opportunity).
 *
 * SECURITY: `GHL_WEBHOOK_URL` is server-only — no NEXT_PUBLIC_ prefix — so the
 * endpoint never reaches the browser bundle.
 *
 * DEMO MODE: while the env var is unset the enquiry is validated and logged
 * server-side, and the response carries `forwarded: false` so the UI can label
 * itself clearly. Nothing is silently lost.
 *
 * SPAM: honeypot field + payload caps + a crude rate limit. Bots that trip the
 * honeypot get a normal-looking success response so they receive no signal.
 */

/** Best-effort in-memory rate limit. Resets on cold start; not a security boundary. */
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear(); // crude memory bound
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please phone the workshop." },
      { status: 429 }
    );
  }

  let body: Partial<LeadPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const { valid, errors, spam, clean } = validateLead(body);

  // Honeypot tripped — look successful, forward nothing.
  if (spam) {
    return NextResponse.json({ ok: true, forwarded: false });
  }

  if (!valid) {
    return NextResponse.json(
      { ok: false, error: errors.join(" ") },
      { status: 422 }
    );
  }

  // Flat snake_case keys — far easier to map onto GHL custom fields than
  // nested JSON. Schema documented in docs/ANALYTICS-AND-CONVERSIONS.md.
  const payload = {
    full_name: clean.name,
    phone: clean.phone,
    email: clean.email,
    vehicle_make: clean.vehicleMake,
    vehicle_model: clean.vehicleModel,
    vehicle_year: clean.vehicleYear,
    registration: clean.registration,
    service_required: clean.service,
    problem_description: clean.problem,
    // ⚠️ A REQUEST, not a confirmed booking. Any GHL automation built on this
    // must not send a confirmation implying the date is secured.
    preferred_date_requested: clean.preferredDate,
    preferred_contact_method: clean.contactMethod,
    source: clean.source ?? "Vision Motors website",
    gclid: clean.gclid ?? "",
    utm_source: clean.utm?.utm_source ?? "",
    utm_medium: clean.utm?.utm_medium ?? "",
    utm_campaign: clean.utm?.utm_campaign ?? "",
    utm_term: clean.utm?.utm_term ?? "",
    utm_content: clean.utm?.utm_content ?? "",
    page_url: clean.pageUrl ?? "",
    page_path: clean.pagePath ?? "",
    submitted_at: new Date().toISOString(),
  };

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn(
      "[booking] GHL_WEBHOOK_URL not set — enquiry validated but NOT forwarded:",
      payload
    );
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      console.error("[booking] Webhook responded", response.status, payload);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't send your enquiry. Please phone the workshop on 012 335 0070.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    // Log the full payload so a webhook outage never loses a lead outright.
    console.error("[booking] Webhook error", err, payload);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your enquiry. Please phone the workshop on 012 335 0070.",
      },
      { status: 502 }
    );
  }
}

import { NextResponse } from "next/server";

import { validateLead, type LeadPayload } from "@/lib/lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives a booking enquiry, validates it, and forwards it to the GoHighLevel
 * inbound webhook (which emails the workshop and creates the CRM contact).
 *
 * SECURITY: GHL_WEBHOOK_URL is server-only — no NEXT_PUBLIC_ prefix — so the
 * endpoint never reaches the browser bundle.
 *
 * DEMO MODE: while GHL_WEBHOOK_URL is unset the enquiry is validated and logged
 * server-side, and the response carries `forwarded: false` so the UI can label
 * itself clearly as a demo. Nothing is silently lost.
 */
export async function POST(request: Request) {
  let body: Partial<LeadPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const { valid, errors, clean } = validateLead(body);

  if (!valid) {
    return NextResponse.json(
      { ok: false, error: errors.join(" ") },
      { status: 422 }
    );
  }

  // Flat snake_case keys — far easier to map onto GHL custom fields than nested JSON.
  const payload = {
    full_name: clean.name,
    phone: clean.phone,
    email: clean.email,
    vehicle_make: clean.vehicleMake,
    vehicle_model: clean.vehicleModel,
    service_required: clean.service,
    problem_description: clean.problem,
    source: clean.source ?? "Vision Motors homepage",
    page_url: clean.pageUrl ?? "",
    submitted_at: new Date().toISOString(),
  };

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    // Demo / preview: complete the journey without losing the enquiry.
    console.warn(
      "[booking] GHL_WEBHOOK_URL not set — enquiry validated but NOT forwarded:",
      payload
    );
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("[booking] Webhook responded", response.status);
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
    console.error("[booking] Webhook error", err);
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

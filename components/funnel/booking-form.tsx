"use client";

import { CheckCircle2, Info, Loader2, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { formConfig, SELECT_SERVICE_EVENT } from "@/config/form-config";
import { diagnosticPolicy } from "@/config/diagnostic-policy-config";
import { siteConfig } from "@/config/site-config";
import { closedDayMessage, isClosedDay } from "@/lib/za-holidays";
import {
  captureAttribution,
  trackBookingStart,
  trackBookingSubmit,
  trackCall,
  trackWhatsApp,
} from "@/lib/tracking";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  BOOKING FORM
//
//  Single-step by design. Most of these visitors have a broken car and low
//  patience — a multi-step form would cost conversions here even though it
//  outperforms on considered-purchase funnels.
//
//  Transport: POST → /api/booking → GHL webhook. The webhook URL is server-only
//  and never reaches this bundle.
//
//  ⚠️ The preferred-date disclaimer is MANDATORY and renders above submit.
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-brand-line bg-brand-cream px-4 py-3.5 text-sm text-brand-ink outline-none transition placeholder:text-brand-inkMuted focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blueMid/25";
const labelClass = "mb-2 block text-sm font-semibold text-brand-ink";

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [registration, setRegistration] = useState("");
  const [service, setService] = useState(formConfig.serviceOptions[0]);
  const [problem, setProblem] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  /** Set when the chosen date is a weekend or public holiday (closed). */
  const [dateError, setDateError] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState(
    formConfig.contactMethods[0]
  );
  const [location, setLocation] = useState<string>(
    formConfig.locationOptions[0].value
  );
  /** Prefilled branch WhatsApp link, built on successful submit. */
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  /** Honeypot — hidden from real users, bots fill it. */
  const [company, setCompany] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [isDemo, setIsDemo] = useState(false);
  const startedRef = useRef(false);

  // Symptom band → pre-select the matching service.
  useEffect(() => {
    const handler = (event: Event) => {
      const preset = (event as CustomEvent).detail as string;
      if (formConfig.serviceOptions.includes(preset)) setService(preset);
    };
    window.addEventListener(SELECT_SERVICE_EVENT, handler);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, handler);
  }, []);

  /** Reject weekend / public-holiday dates the moment they're picked. */
  function handleDateChange(value: string) {
    setPreferredDate(value);
    const check = isClosedDay(value);
    setDateError(check.closed ? closedDayMessage(check.reason!) : null);
  }

  /** Fires once, on first interaction — a funnel diagnostic. */
  function markStarted() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackBookingStart(service);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    // Mirror of the server-side validation in lib/lead.ts.
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (phone.replace(/\D/g, "").length < 9)
      return setError("Please enter a valid phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError("Please enter a valid email address.");

    // The workshop is closed on weekends and public holidays — a requested
    // date on one of those can't be honoured, so block it here too.
    const dateCheck = isClosedDay(preferredDate);
    if (dateCheck.closed) {
      setDateError(closedDayMessage(dateCheck.reason!));
      return setError(
        "Please choose a weekday for your preferred date — we're closed on weekends and public holidays."
      );
    }

    setStatus("submitting");

    try {
      const attribution = captureAttribution();

      const response = await fetch(formConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          vehicleMake: vehicleMake.trim(),
          vehicleModel: vehicleModel.trim(),
          vehicleYear: vehicleYear.trim(),
          registration: registration.trim(),
          service,
          problem: problem.trim(),
          preferredDate,
          contactMethod,
          location,
          company, // honeypot
          source: attribution.source,
          gclid: attribution.gclid,
          utm: attribution.utm,
          pageUrl: attribution.pageUrl,
          pagePath:
            typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      const data = await response.json().catch(() => ({ ok: false }));

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please phone the workshop."
        );
      }

      trackBookingSubmit({ service, vehicleMake, source: attribution.source });
      setIsDemo(data.forwarded === false);

      // ── Branch-routed WhatsApp handoff ──────────────────────────────────────
      // The lead is already captured server-side above, so it is safe even if
      // the customer never presses Send. Now build a clean, URL-encoded message
      // and route it to the SELECTED branch's WhatsApp number (never crossed).
      // Campaign/UTM data is intentionally kept OUT of the customer-facing text.
      const branch =
        formConfig.locationOptions.find((o) => o.value === location) ??
        formConfig.locationOptions[0];
      const vehicle = [vehicleYear, vehicleMake, vehicleModel]
        .map((s) => s.trim())
        .filter(Boolean)
        .join(" ");
      const message = [
        "Hello Vision Motors,",
        "",
        "I would like to request a booking / enquiry.",
        "",
        `Workshop:\n${branch.label}`,
        "",
        `Name:\n${name.trim()}`,
        "",
        `Phone:\n${phone.trim()}`,
        "",
        `Email:\n${email.trim()}`,
        "",
        `Vehicle:\n${vehicle || "—"}`,
        "",
        `Service required:\n${service}`,
        "",
        `Problem / Notes:\n${problem.trim() || "—"}`,
        "",
        `Preferred booking date:\n${preferredDate || "—"}`,
        "",
        `Preferred contact method:\n${contactMethod}`,
        "",
        "Source:\nWebsite",
      ].join("\n");
      const waUrl = `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(
        message
      )}`;

      setWhatsappUrl(waUrl);
      setStatus("success");
      trackWhatsApp(branch.value, "booking_form");

      // Best-effort auto-open (mobile → app, desktop → WhatsApp Web). A popup
      // blocker may defer this to the button on the success screen.
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please phone the workshop."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-brand-blueMid/40 bg-brand-tint/50 p-9 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className="mx-auto h-10 w-10 text-brand-blue"
          aria-hidden
        />
        <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">
          {formConfig.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-[1.7] text-brand-inkSoft">
          We&apos;ve saved your details. Finish by sending them to the workshop
          on WhatsApp — just press Send. If it&apos;s urgent, phone us instead.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(location, "booking_form_success")}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Send on WhatsApp
            </a>
          )}
          <a
            href={siteConfig.phoneLink}
            onClick={() => trackCall("booking_page")}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-cta px-6 text-sm font-bold text-brand-ink shadow-accent"
            aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
            data-cta="call"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
          </a>
        </div>

        {isDemo && (
          <p className="mt-7 rounded-lg border border-brand-line bg-white px-4 py-3 text-xs text-brand-inkMuted">
            <strong className="font-semibold text-brand-ink">DEMO MODE</strong> —
            this enquiry was validated but not delivered anywhere. Connect{" "}
            <code className="font-mono">GHL_WEBHOOK_URL</code> to go live.
          </p>
        )}
      </div>
    );
  }

  const submitting = status === "submitting";
  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={markStarted}
      noValidate
      className="relative space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="vm-name" label={formConfig.fields.nameLabel} value={name} onChange={setName} placeholder={formConfig.fields.namePlaceholder} autoComplete="name" required />
        <Field id="vm-phone" label={formConfig.fields.phoneLabel} value={phone} onChange={setPhone} placeholder={formConfig.fields.phonePlaceholder} type="tel" inputMode="tel" autoComplete="tel" required />
      </div>

      <Field id="vm-email" label={formConfig.fields.emailLabel} value={email} onChange={setEmail} placeholder={formConfig.fields.emailPlaceholder} type="email" inputMode="email" autoComplete="email" required />

      <div className={cn("grid gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-3")}>
        <Field id="vm-make" label={formConfig.fields.makeLabel} value={vehicleMake} onChange={setVehicleMake} placeholder={formConfig.fields.makePlaceholder} />
        <Field id="vm-model" label={formConfig.fields.modelLabel} value={vehicleModel} onChange={setVehicleModel} placeholder={formConfig.fields.modelPlaceholder} />
        {!compact && (
          <Field id="vm-year" label={formConfig.fields.yearLabel} value={vehicleYear} onChange={setVehicleYear} placeholder={formConfig.fields.yearPlaceholder} inputMode="numeric" />
        )}
      </div>

      {!compact && (
        <Field id="vm-reg" label={formConfig.fields.regLabel} value={registration} onChange={setRegistration} placeholder={formConfig.fields.regPlaceholder} />
      )}

      <div>
        <label htmlFor="vm-service" className={labelClass}>
          {formConfig.fields.serviceLabel}
        </label>
        <select
          id="vm-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={inputClass}
        >
          {formConfig.serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="vm-problem" className={labelClass}>
          {formConfig.fields.problemLabel}
        </label>
        <textarea
          id="vm-problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder={formConfig.fields.problemPlaceholder}
          rows={3}
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vm-date" className={labelClass}>
            {formConfig.fields.preferredDateLabel}
          </label>
          <input
            id="vm-date"
            type="date"
            min={today}
            value={preferredDate}
            onChange={(e) => handleDateChange(e.target.value)}
            aria-invalid={dateError ? true : undefined}
            aria-describedby={dateError ? "vm-date-error" : "vm-date-hint"}
            className={cn(
              inputClass,
              dateError &&
                "border-red-400 focus:border-red-400 focus:ring-red-200/40"
            )}
          />
          {dateError ? (
            <p
              id="vm-date-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-600"
            >
              {dateError}
            </p>
          ) : (
            <p id="vm-date-hint" className="mt-1.5 text-xs text-brand-inkMuted">
              Weekdays only — we&apos;re closed weekends &amp; public holidays.
            </p>
          )}
        </div>
        <div>
          <label htmlFor="vm-contact" className={labelClass}>
            {formConfig.fields.contactMethodLabel}
          </label>
          <select
            id="vm-contact"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            className={inputClass}
          >
            {formConfig.contactMethods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="vm-location" className={labelClass}>
          {formConfig.fields.locationLabel}
        </label>
        <select
          id="vm-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={inputClass}
        >
          {formConfig.locationOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Honeypot. Off-screen, hidden from assistive tech; bots fill it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        style={{ left: "-9999px" }}
      >
        <label htmlFor="vm-company">Company (leave blank)</label>
        <input
          id="vm-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {/* ⚠️ MANDATORY — a requested date is not a confirmed booking. */}
      <p className="flex items-start gap-2.5 rounded-xl border border-brand-line bg-brand-tint/60 px-4 py-3 text-xs leading-[1.65] text-brand-blue">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        {formConfig.dateDisclaimer}
      </p>

      {/* Diagnostic strip-and-assess acknowledgement (informational — NOT a
          consent checkbox). Also clarifies this form does not authorise any
          dismantling. Client instruction 2026-07-27 §7. */}
      <p className="rounded-xl border border-brand-line bg-brand-cream px-4 py-3 text-xs leading-[1.65] text-brand-inkMuted">
        {diagnosticPolicy.bookingNote}{" "}
        <span className="text-brand-inkSoft">
          {diagnosticPolicy.bookingRequestClarifier}
        </span>
      </p>

      {error && (
        <p
          role="alert"
          aria-live="assertive"
          className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-brand-cta px-7 text-sm font-bold text-brand-ink shadow-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-ctaDark disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {formConfig.submittingLabel}
          </>
        ) : (
          formConfig.submitLabel
        )}
      </button>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-1">
        {formConfig.reassurance.map((item) => (
          <li key={item} className="text-xs text-brand-inkMuted">
            {item}
          </li>
        ))}
      </ul>

      <p className="text-center text-[0.7rem] leading-[1.6] text-brand-inkMuted">
        {formConfig.consentText}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  inputMode,
  autoComplete,
  required,
}: {
  id: string;
  label: ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && (
          <span className="ml-0.5 text-brand-blue" aria-hidden>
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

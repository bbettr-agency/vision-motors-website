"use client";

import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { formConfig, SELECT_SERVICE_EVENT } from "@/config/form-config";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  BOOKING FORM
//
//  Single-step by design. Most of these visitors have a broken car and low
//  patience — a multi-step form would cost conversions here even though it
//  outperforms on considered-purchase funnels.
//
//  Transport: POST → /api/booking (server route) → GHL webhook.
//  The webhook URL is server-only and never reaches this bundle.
//
//  Listens for SELECT_SERVICE_EVENT so the symptom band can pre-select a
//  service and scroll the visitor straight here.
// ─────────────────────────────────────────────────────────────────────────────

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [service, setService] = useState(formConfig.serviceOptions[0]);
  const [problem, setProblem] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [isDemo, setIsDemo] = useState(false);

  // Symptom band → pre-select the matching service.
  useEffect(() => {
    const handler = (event: Event) => {
      const preset = (event as CustomEvent).detail as string;
      if (formConfig.serviceOptions.includes(preset)) {
        setService(preset);
      }
    };
    window.addEventListener(SELECT_SERVICE_EVENT, handler);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, handler);
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    // Mirror of the server-side validation in lib/lead.ts.
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (phone.replace(/\D/g, "").length < 9)
      return setError("Please enter a valid phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return setError("Please enter a valid email address.");

    setStatus("submitting");

    try {
      const params =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search)
          : null;
      const source =
        params?.get("utm_source") ||
        params?.get("gclid") ||
        (typeof document !== "undefined" && document.referrer) ||
        "Vision Motors homepage";

      const response = await fetch(formConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          vehicleMake: vehicleMake.trim(),
          vehicleModel: vehicleModel.trim(),
          service,
          problem: problem.trim(),
          source,
          pageUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      const data = await response.json().catch(() => ({ ok: false }));

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please phone the workshop."
        );
      }

      // `forwarded: false` = demo mode (GHL_WEBHOOK_URL not configured).
      setIsDemo(data.forwarded === false);
      setStatus("success");

      if (formConfig.redirectOnSuccess) {
        window.location.assign(formConfig.successRedirect);
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
        className="rounded-2xl border border-brand-accent/25 bg-brand-accent/[0.07] p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className="mx-auto h-10 w-10 text-brand-accent"
          aria-hidden
        />
        <h3 className="mt-4 font-display text-xl font-bold text-white">
          {formConfig.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/65">
          {formConfig.successBody}
        </p>

        <a
          href={siteConfig.phoneLink}
          className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-brand-accent px-6 text-sm font-bold text-brand-ink"
          aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
        </a>

        {isDemo && (
          // Clearly labelled so no one mistakes the demo for a live funnel.
          <p className="mt-6 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs text-white/50">
            <strong className="font-semibold text-white/70">DEMO MODE</strong> —
            this enquiry was validated but not delivered anywhere. Connect{" "}
            <code className="font-mono">GHL_WEBHOOK_URL</code> to go live.
          </p>
        )}
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="vm-name"
          label={formConfig.fields.nameLabel}
          value={name}
          onChange={setName}
          placeholder={formConfig.fields.namePlaceholder}
          autoComplete="name"
          required
        />
        <Field
          id="vm-phone"
          label={formConfig.fields.phoneLabel}
          value={phone}
          onChange={setPhone}
          placeholder={formConfig.fields.phonePlaceholder}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
        />
      </div>

      <Field
        id="vm-email"
        label={formConfig.fields.emailLabel}
        value={email}
        onChange={setEmail}
        placeholder={formConfig.fields.emailPlaceholder}
        type="email"
        inputMode="email"
        autoComplete="email"
        required
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="vm-make"
          label={formConfig.fields.makeLabel}
          value={vehicleMake}
          onChange={setVehicleMake}
          placeholder={formConfig.fields.makePlaceholder}
        />
        <Field
          id="vm-model"
          label={formConfig.fields.modelLabel}
          value={vehicleModel}
          onChange={setVehicleModel}
          placeholder={formConfig.fields.modelPlaceholder}
        />
      </div>

      <div>
        <label
          htmlFor="vm-service"
          className="mb-1.5 block text-sm font-semibold text-white/80"
        >
          {formConfig.fields.serviceLabel}
        </label>
        <select
          id="vm-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-brand-ink px-4 py-3 text-sm text-white outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
        >
          {formConfig.serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="vm-problem"
          className="mb-1.5 block text-sm font-semibold text-white/80"
        >
          {formConfig.fields.problemLabel}
        </label>
        <textarea
          id="vm-problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder={formConfig.fields.problemPlaceholder}
          rows={3}
          className="w-full rounded-xl border border-white/15 bg-brand-ink px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
        />
      </div>

      {error && (
        <p
          role="alert"
          aria-live="assertive"
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-ink shadow-accent transition-all duration-300 hover:bg-brand-accentDark disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
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
          <li key={item} className="text-xs text-white/40">
            {item}
          </li>
        ))}
      </ul>

      <p className="text-center text-[0.7rem] leading-relaxed text-white/30">
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
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-white/80"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-brand-accent" aria-hidden>
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
        className={cn(
          "w-full rounded-xl border border-white/15 bg-brand-ink px-4 py-3 text-sm text-white outline-none transition",
          "placeholder:text-white/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
        )}
      />
    </div>
  );
}

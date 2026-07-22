"use client";

import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { trackCall, type CallLocation } from "@/lib/tracking";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  CALL BUTTON — the PRIMARY conversion action across the whole site.
//
//  Client instruction (2026-07-22): "Call Us" is the primary CTA, booking is
//  secondary. Every call CTA on the site routes through this component so the
//  number, the aria-label, the no-wrap rule and the tracking event can never
//  drift between placements.
//
//  `location` is passed into the tracking event — it tells us which placement
//  actually earns calls, which is the most useful optimisation signal we have.
// ─────────────────────────────────────────────────────────────────────────────

type Variant =
  | "brass" // solid brass — the strongest CTA on a page
  | "outlineDark" // on dark surfaces
  | "outlineLight" // on warm light surfaces
  | "bare"; // inline text link

type Props = {
  location: CallLocation;
  variant?: Variant;
  size?: "md" | "lg";
  /** Show the number itself rather than the "Call Us" label. */
  showNumber?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const sizes = {
  md: "min-h-[44px] px-5 text-sm",
  lg: "min-h-[52px] px-7 text-sm md:text-base",
};

const variants: Record<Variant, string> = {
  brass:
    "bg-brand-accent text-brand-ink shadow-accent hover:bg-brand-accentDark hover:-translate-y-0.5 focus-visible:ring-brand-accent focus-visible:ring-offset-brand-ink",
  outlineDark:
    "border border-white/20 text-white hover:-translate-y-0.5 hover:border-brand-accent/50 hover:bg-white/5 focus-visible:ring-brand-accent focus-visible:ring-offset-brand-ink",
  outlineLight:
    "border border-brand-indigoLine bg-white text-brand-indigo shadow-soft hover:-translate-y-0.5 hover:border-brand-indigo/50 hover:shadow-softLift focus-visible:ring-brand-indigo focus-visible:ring-offset-brand-cream",
  bare: "text-brand-indigo hover:text-brand-indigoMid focus-visible:ring-brand-indigo focus-visible:ring-offset-white",
};

export default function CallButton({
  location,
  variant = "brass",
  size = "lg",
  showNumber = false,
  className,
}: Props) {
  return (
    <a
      href={siteConfig.phoneLink}
      onClick={() => trackCall(location)}
      className={cn(
        base,
        variant !== "bare" && sizes[size],
        variants[variant],
        className
      )}
      aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
      data-cta="call"
    >
      <Phone
        className={cn(
          "h-4 w-4 shrink-0",
          variant === "brass" ? "text-brand-ink" : "text-brand-accent",
          variant === "outlineLight" && "text-brand-indigo",
          variant === "bare" && "text-brand-indigo"
        )}
        aria-hidden
      />
      {/* The phone number must never wrap. */}
      <span className="whitespace-nowrap">
        {showNumber ? siteConfig.phoneDisplay : siteConfig.ctaPrimary}
      </span>
    </a>
  );
}

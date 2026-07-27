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
    "bg-brand-cta text-brand-ink shadow-accent hover:bg-brand-ctaDark hover:-translate-y-0.5 focus-visible:ring-brand-blueMid focus-visible:ring-offset-brand-ink",
  outlineDark:
    "border border-white/20 text-white hover:-translate-y-0.5 hover:border-brand-blueMid/50 hover:bg-white/5 focus-visible:ring-brand-blueMid focus-visible:ring-offset-brand-ink",
  outlineLight:
    "border border-brand-line bg-white text-brand-blue shadow-soft hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-softLift focus-visible:ring-brand-blueMid focus-visible:ring-offset-brand-cream",
  bare: "text-brand-blue hover:text-brand-navy focus-visible:ring-brand-blueMid focus-visible:ring-offset-white",
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
          variant === "brass" ? "text-brand-ink" : "text-brand-blueSoft",
          variant === "outlineLight" && "text-brand-blue",
          variant === "bare" && "text-brand-blue"
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

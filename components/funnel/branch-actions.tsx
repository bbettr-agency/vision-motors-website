"use client";

import { MessageCircle, Navigation, Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { trackCall, trackDirections, trackWhatsApp } from "@/lib/tracking";
import { cn } from "@/utils/cn";

type Branch = (typeof siteConfig.branches)[number];

// ─────────────────────────────────────────────────────────────────────────────
//  BRANCH ACTIONS — Call · WhatsApp · Get Directions for ONE branch.
//
//  Each button routes to THIS branch's own number / map — the numbers are never
//  crossed. Call stays the primary (brass) action so WhatsApp does not dominate
//  the conversion architecture; WhatsApp is the confident secondary.
// ─────────────────────────────────────────────────────────────────────────────

export default function BranchActions({
  branch,
  className,
}: {
  branch: Branch;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {/* PRIMARY — call this branch. */}
      <a
        href={branch.phoneLink}
        data-cta="call"
        onClick={() => trackCall("branch")}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-cta px-5 text-sm font-bold text-brand-ink shadow-accent transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2"
        aria-label={`Call ${branch.name} on ${branch.phoneDisplay}`}
      >
        <Phone className="h-4 w-4" aria-hidden />
        <span className="whitespace-nowrap">{branch.phoneDisplay}</span>
      </a>

      {/* SECONDARY — WhatsApp this branch. */}
      <a
        href={branch.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp(branch.id)}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label={`WhatsApp ${branch.name}`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </a>

      {/* TERTIARY — directions to this branch. */}
      <a
        href={branch.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackDirections(branch.id)}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-brand-ink/25 px-5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-blue/50 hover:bg-brand-ink/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        aria-label={`Get directions to ${branch.name}`}
      >
        <Navigation className="h-4 w-4" aria-hidden />
        Get Directions
      </a>
    </div>
  );
}

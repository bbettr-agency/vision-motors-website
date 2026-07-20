"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";
import { scrollToBookingForm } from "@/lib/scroll-to-form";

/**
 * Sticky mobile CTA bar — [ Call ] [ Book Your Car In ].
 *
 * Conversion purpose: the highest-ROI mobile element in the OS. Most of these
 * visitors are standing next to a car that won't start, so the two lowest-
 * friction actions stay permanently in the thumb zone. Hidden on desktop, where
 * the sticky header CTA is always in view.
 *
 * z-index contract: sticky bar z-50, header z-50, floating FAB z-40.
 */
export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-ink/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <a
          href={siteConfig.phoneLink}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 text-sm font-bold text-white active:scale-[0.98]"
          aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
        >
          <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
          Call
        </a>

        <button
          type="button"
          onClick={() => scrollToBookingForm()}
          className="min-h-[48px] flex-[1.6] rounded-full bg-brand-accent text-sm font-bold text-brand-ink shadow-accent active:scale-[0.98]"
        >
          {siteConfig.cta}
        </button>
      </div>
    </div>
  );
}

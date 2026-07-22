"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import { trackCall } from "@/lib/tracking";

/**
 * Sticky mobile CTA bar — [ Call 012 335 0070 ] [ Book ].
 *
 * ⚠️ CTA WEIGHTING INVERTED (client instruction, 2026-07-22): calling is now
 * the primary action, so the CALL button takes the brass fill and the larger
 * flex share. In the demo this was the other way round.
 *
 * The highest-ROI mobile element on the site — most of these visitors are
 * standing next to a car that will not start, so the phone stays permanently
 * in the thumb zone.
 *
 * z-index contract: sticky bar 50, header 50, any future FAB 40.
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
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-indigoDeep/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        {/* PRIMARY — call. Brass fill, larger share. */}
        <a
          href={siteConfig.phoneLink}
          onClick={() => trackCall("sticky")}
          className="inline-flex min-h-[48px] flex-[1.7] items-center justify-center gap-2 rounded-full bg-brand-accent text-sm font-bold text-brand-ink shadow-accent active:scale-[0.98]"
          aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
          data-cta="call"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
        </a>

        {/* SECONDARY — book. */}
        <Link
          href={utilityRoutes.booking}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-bold text-white active:scale-[0.98]"
        >
          {siteConfig.ctaSecondaryShort}
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { navRoutes } from "@/config/routes";
import Logo from "@/components/ui/logo";
import CallButton from "@/components/ui/call-button";
import SkipLink from "@/components/layout/skip-link";

/**
 * Conversion page. Once GHL is connected, set
 * `formConfig.redirectOnSuccess = true` so the form lands here and analytics
 * conversions fire on a real page view.
 *
 * ⚠️ Deliberately restates that the date is unconfirmed — this is the moment
 * a customer forms an expectation, and getting it wrong here creates a no-show
 * or a complaint.
 *
 * TODO: add the GA4 / Google Ads conversion component once IDs are supplied
 * (config/seo-config.ts → conversionConfig).
 */
export default function ThankYouPage() {
  return (
    <>
      <SkipLink />
      <header className="border-b border-white/10 bg-brand-indigoDeep px-6 py-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" aria-label={`${siteConfig.businessName} home`}>
            <Logo />
          </Link>
        </div>
      </header>

      <main
        id="main"
        className="flex min-h-[80vh] items-center justify-center bg-brand-indigoDeep px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-lg text-center">
          <CheckCircle2
            className="mx-auto h-14 w-14 text-brand-accent"
            aria-hidden
          />

          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Thanks — we&apos;ve got your details
          </h1>

          <p className="mt-5 text-base leading-[1.75] text-brand-bone/80">
            Someone from the workshop will contact you to confirm a time. Your
            preferred date isn&apos;t booked until we&apos;ve spoken — we&apos;ll
            either confirm it or offer you the nearest slot we can commit to.
          </p>

          <p className="mt-4 text-sm leading-[1.7] text-brand-bone/65">
            If it&apos;s urgent, or your car isn&apos;t driveable, phone us and
            we&apos;ll help you straight away.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton location="footer" variant="brass" showNumber />
            <Link
              href="/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:border-brand-accent/50 hover:bg-white/5 md:text-base"
            >
              Back to the website
            </Link>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-brand-bone/55">
            Monday – Friday 07:30 – 17:00 · {siteConfig.addressDisplay}
          </p>

          <nav aria-label="Site links" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navRoutes.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-xs font-medium text-brand-bone/60 underline underline-offset-4 transition-colors hover:text-brand-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}

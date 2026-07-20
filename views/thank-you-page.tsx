import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import Logo from "@/components/ui/logo";

/**
 * Conversion page. Prepared for the production flow — once GHL is connected,
 * set formConfig.redirectOnSuccess = true and the form will land here so
 * analytics conversions fire on a real page view.
 *
 * TODO: add the GA4/Google Ads conversion event component once IDs are supplied
 * (config/seo-config.ts conversionConfig).
 */
export default function ThankYouPage() {
  return (
    <>
      <header className="border-b border-white/10 px-6 py-5 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" aria-label={`${siteConfig.businessName} home`}>
            <Logo />
          </Link>
        </div>
      </header>

      <main className="flex min-h-[80vh] items-center justify-center px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <CheckCircle2
            className="mx-auto h-14 w-14 text-brand-accent"
            aria-hidden
          />

          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Thanks — we&apos;ve got your details
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/65">
            The workshop will be in touch to arrange a time for your vehicle. If
            it&apos;s urgent, phone us directly and we&apos;ll help you straight
            away.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneLink}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-accent px-7 text-sm font-bold text-brand-ink shadow-accent transition-colors hover:bg-brand-accentDark md:text-base"
              aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span className="whitespace-nowrap">
                {siteConfig.phoneDisplay}
              </span>
            </a>

            <Link
              href="/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/5 md:text-base"
            >
              Back to the website
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

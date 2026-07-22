import Link from "next/link";
import type { Metadata } from "next";

import { navRoutes, utilityRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site-config";
import { createMetadata } from "@/lib/metadata";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CallButton from "@/components/ui/call-button";
import SkipLink from "@/components/layout/skip-link";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found",
  noindex: true,
});

/**
 * 404. Deliberately useful rather than decorative — someone who lands here is
 * still a prospect, so the page routes them onward and keeps the phone visible.
 */
export default function NotFound() {
  return (
    <>
      <SkipLink />
      <Header />

      <main
        id="main"
        className="flex min-h-[75vh] items-center justify-center bg-brand-indigoDeep px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-6xl font-extrabold text-brand-accent/40">
            404
          </p>
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            We can&apos;t find that page
          </h1>
          <p className="mx-auto mt-5 max-w-[50ch] text-base leading-[1.75] text-brand-bone/80">
            It may have moved, or the link may be out of date. If you were
            looking for something specific, phoning the workshop is the quickest
            way to get an answer.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton location="footer" variant="brass" showNumber />
            <Link
              href="/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:border-brand-accent/50 hover:bg-white/5 md:text-base"
            >
              Back to the homepage
            </Link>
          </div>

          <nav aria-label="Helpful links" className="mt-12">
            <p className="text-xs uppercase tracking-[0.14em] text-brand-bone/50">
              Or try one of these
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {[
                ...navRoutes,
                { label: siteConfig.ctaSecondary, href: utilityRoutes.booking },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-sm font-medium text-brand-bone/75 underline underline-offset-4 transition-colors hover:text-brand-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}

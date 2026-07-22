import type { ReactNode } from "react";

import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";

/**
 * Shared shell for legal pages. Prose styling lives here so the two pages
 * cannot drift apart.
 *
 * ⚠️ These replace the CURRENT live site's legal links, which point at
 * third-party generator URLs (termsofservicegenerator.net,
 * privacypolicygenerator.info) — off-domain, liable to expire, and almost
 * certainly not POPIA-compliant for a business collecting names and numbers.
 *
 * ⚠️ These are plain-language operational documents, NOT legal advice, and
 * they have not been reviewed by an attorney. Flagged in LAUNCH-CHECKLIST.md.
 */
export default function LegalShell({
  path,
  title,
  intro,
  updated,
  children,
}: {
  path: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  const trail = buildTrail(path);

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="overflow-hidden">
        <PageHero trail={trail} title={title} intro={intro} />

        <SectionContainer className="bg-brand-cream">
          <div
            className="mx-auto max-w-[68ch] space-y-6 text-sm leading-[1.8] text-brand-inkSoft
              [&_a]:font-medium [&_a]:text-brand-indigo [&_a]:underline [&_a]:underline-offset-4
              [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-ink
              [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-brand-ink
              [&_li]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-brand-inkMuted">
              Last updated: {updated}
            </p>
            {children}
          </div>
        </SectionContainer>
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

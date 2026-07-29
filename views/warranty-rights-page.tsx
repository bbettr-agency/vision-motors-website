import { ExternalLink, Info } from "lucide-react";

import { rightsConfig } from "@/config/rights-config";
import { siteConfig } from "@/config/site-config";
import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import Icon from "@/components/ui/icon";
import CtaBand from "@/components/sections/cta-band";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";

// ─────────────────────────────────────────────────────────────────────────────
//  YOUR WARRANTY RIGHTS
//
//  Uncontested ground: no competitor in the audited Pretoria set covers this,
//  and the Competition Commission itself documented that consumers don't know
//  their rights.
//
//  ⚠️ NO FAQPage schema on this page. The content is regulatory guidance with a
//  mandatory caveat — FAQ rich results would strip the caveat and change the
//  meaning. `Article` only. See docs/SCHEMA-MAP.md.
//
//  ⚠️ The caveat block is NOT optional. Guideline 5.4.8 is explicit that
//  ISP-caused damage can void specific warranty provisions. Removing it would
//  make the page misleading.
// ─────────────────────────────────────────────────────────────────────────────

export default function WarrantyRightsPage() {
  const trail = buildTrail("/your-warranty-rights");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: rightsConfig.title,
    description: rightsConfig.intro,
    author: { "@type": "Organization", name: siteConfig.businessName },
    publisher: { "@id": `${siteConfig.website}/#business` },
    mainEntityOfPage: `${siteConfig.website}/your-warranty-rights`,
  };

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <JsonLd data={articleSchema} />
      <Header />

      <main id="main" className="space-y-2.5 overflow-x-clip bg-brand-bluegrey pt-2.5 sm:space-y-4 sm:pt-4 lg:space-y-6 lg:pt-6">
        <PageHero
          trail={trail}
          eyebrow={rightsConfig.eyebrow}
          title={rightsConfig.title}
          intro={rightsConfig.intro}
        />

        <SectionContainer className="bg-brand-cream">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {rightsConfig.points.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-5 rounded-2xl border border-brand-line bg-white p-7 shadow-soft"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand-blue">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-brand-ink">
                      {point.title}
                    </h2>
                    <p className="mt-2 text-sm leading-[1.75] text-brand-inkSoft">
                      {point.body}
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-inkMuted">
                      {point.citation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MANDATORY caveat. */}
            <div className="mt-4 flex gap-5 rounded-2xl border border-brand-ink/15 bg-brand-bluegrey p-7">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-ink/10 text-brand-ink/70">
                <Info className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-base font-semibold text-brand-ink">
                  {rightsConfig.caveat.title}
                </h2>
                <p className="mt-2 text-sm leading-[1.75] text-brand-inkSoft">
                  {rightsConfig.caveat.body}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-inkMuted">
                  {rightsConfig.caveat.citation}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              <a
                href={rightsConfig.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-blue underline underline-offset-4 transition-colors hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blueMid"
              >
                {rightsConfig.sourceLabel}
                <ExternalLink className="h-3 w-3 shrink-0" aria-hidden />
              </a>
              <p className="text-xs leading-[1.7] text-brand-inkMuted">
                {rightsConfig.disclaimer}
              </p>
            </div>

            {/* Our own warranty — restrained wording only. */}
            <div className="mt-12 rounded-2xl border border-brand-line bg-brand-tint/50 p-7">
              <h2 className="font-display text-base font-semibold text-brand-ink">
                What about the work we do?
              </h2>
              <p className="mt-2 text-sm leading-[1.75] text-brand-inkSoft">
                {siteConfig.warrantyInterimCopy} We record the work we carry out
                so your service history stays complete.
              </p>
            </div>
          </div>
        </SectionContainer>

        <CtaBand
          heading="Still under warranty and not sure where you stand?"
          body="Phone the workshop and ask. We'll tell you straight, including where a repair carries risk."
        />
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

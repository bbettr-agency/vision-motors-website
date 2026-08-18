import { buildTrail } from "@/components/ui/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";
import PageHero from "@/components/layout/page-hero";
import SectionContainer from "@/components/layout/section-container";
import Gallery from "@/components/gallery/gallery";
import CtaBand from "@/components/sections/cta-band";
import JsonLd from "@/components/ui/json-ld";
import SkipLink from "@/components/layout/skip-link";

// ─────────────────────────────────────────────────────────────────────────────
//  OUR WORK — a premium, filterable gallery of real Vision Motors photography.
//
//  Every image is shot on site (config/gallery-config.ts). No stock, nothing
//  generated. Fact-gated signage / readable plates were excluded or redacted at
//  the asset stage — see the gallery config. Route stays /our-work so nav,
//  sitemap and canonical are unchanged.
// ─────────────────────────────────────────────────────────────────────────────

export default function OurWorkPage() {
  const trail = buildTrail("/our-work");

  return (
    <>
      <SkipLink />
      <JsonLd data={breadcrumbSchema(trail)} />
      <Header />

      <main id="main" className="overflow-hidden">
        <PageHero
          trail={trail}
          eyebrow="Gallery"
          title="Inside Vision Motors"
          intro="A real look inside Vision Motors and The Engine Shop / Vision Motors on Steve Biko Road, Pretoria — the workshop floor, the engine shop, diagnostics and the team at work. Every photograph was taken on site. No stock, nothing generated."
        />

        <SectionContainer className="bg-brand-cream">
          <Gallery />

          <p className="mt-14 max-w-[65ch] text-sm leading-[1.75] text-brand-inkSoft">
            Want to see the rest? You&apos;re welcome to come and look in
            person — phone ahead so someone is free to show you around.
          </p>
        </SectionContainer>

        <CtaBand
          heading="Would rather see it in person?"
          body="You're welcome to come and look at the workshop. Phone ahead so someone is free to show you around."
        />
      </main>

      <Footer />
      <StickyMobileBar />
    </>
  );
}

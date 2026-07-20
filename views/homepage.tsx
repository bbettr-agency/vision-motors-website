import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyMobileBar from "@/components/layout/sticky-mobile-bar";

import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import SymptomBand from "@/components/sections/symptom-band";
import ServicesGrid from "@/components/sections/services-grid";
import DiagnosticCapability from "@/components/sections/diagnostic-capability";
import WorkshopProof from "@/components/sections/workshop-proof";
import WhyUs from "@/components/sections/why-us";
import RightsSection from "@/components/sections/rights-section";
import Testimonials from "@/components/sections/testimonials";
import ProcessSteps from "@/components/sections/process-steps";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

/**
 * Homepage composition. Section ORDER lives here and nowhere else.
 * Every section answers a named visitor question — see the approved plan §6/§7.
 */
export default function Homepage() {
  return (
    <>
      {/*
        Skip link. Deliberately NOT `sr-only` + `focus:not-sr-only` — that
        pairing depends on utility ordering and left the link stuck at 1×1px
        even while focused. This version is always rendered and simply sits
        off-screen until focused, which is far harder to break.
      */}
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-brand-accent px-5 py-3 text-sm font-bold text-brand-ink transition-transform duration-200 focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="overflow-hidden bg-brand-ink">
        <Hero />
        <TrustStrip />
        <SymptomBand />
        <ServicesGrid />
        <DiagnosticCapability />
        <WorkshopProof />
        <WhyUs />
        <RightsSection />
        <Testimonials />
        <ProcessSteps />
        <Faq />
        <FinalCta />
      </main>

      <Footer />

      {/* Overlays live outside <main>, after the footer. */}
      <StickyMobileBar />
    </>
  );
}

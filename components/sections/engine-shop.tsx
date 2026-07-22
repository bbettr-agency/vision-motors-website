import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { imagesConfig } from "@/config/images-config";
import { utilityRoutes } from "@/config/routes";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  THE ENGINE SHOP — new in Phase 2.
//
//  Discovered in the client's company profile: a visually distinct SECOND
//  premises branded "ENGINE SHOP" with a "RANGER & BT50" wall sign. It appears
//  nowhere on the current website and in no directory listing.
//
//  This is the single strongest differentiator the business has. Every
//  competitor lists "engine overhauls" as a bullet; Vision Motors has a
//  building with it painted on the front.
//
//  ⚠️ CAREFULLY SCOPED — approved instruction. We state only what is
//  photographically evidenced:
//     ✅ a separate engine shop exists
//     ✅ its signage reads "RANGER & BT50"
//     ✅ the client's own site says "Ford Specialists on Duty"
//  ⛔ NO street address (C3 unconfirmed)
//  ⛔ NO technical fault claims — no wet-belt, balance-shaft, recall or
//     emissions claims. Those await C21.
//  ⛔ NO model-year or engine-code claims until the client confirms scope.
// ─────────────────────────────────────────────────────────────────────────────

export default function EngineShop() {
  return (
    <SectionContainer className="bg-brand-linen">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ImageSlotView
            slot={imagesConfig.engineRoom}
            tone="light"
            className="rounded-3xl"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>

        <div>
          <SectionHeading
            tone="light"
            eyebrow="Our engine shop"
            title={
              <>
                We don&apos;t send engine work
                <span className="text-brand-indigo"> anywhere else</span>
              </>
            }
            description="Most independent workshops sub-contract engine reconditioning out and mark it up. We run a separate engine shop of our own, which is where rebuilds and reconditioning are actually done."
          />

          <div className="mt-11 space-y-8">
            <div className="border-l-2 border-brand-indigo/35 pl-6">
              <h3 className="font-display text-base font-semibold text-brand-ink">
                A second premises, not a corner of the workshop
              </h3>
              <p className="mt-2.5 max-w-[55ch] text-sm leading-[1.75] text-brand-inkSoft">
                Engine work has its own building, its own benches and its own
                equipment. That is what lets us take on full rebuilds rather
                than just fitting parts somebody else machined.
              </p>
            </div>

            <div className="border-l-2 border-brand-accent/50 pl-6">
              <h3 className="font-display text-base font-semibold text-brand-ink">
                Ford Ranger and Mazda BT-50 engines
              </h3>
              <p className="mt-2.5 max-w-[55ch] text-sm leading-[1.75] text-brand-inkSoft">
                Our engine shop carries Ranger and BT-50 signage because that is
                a large part of what comes through it. If you have one, you are
                talking to people who see these engines regularly.
              </p>
            </div>
          </div>

          <Link
            href={utilityRoutes.services}
            className="mt-11 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-indigo underline underline-offset-4 transition-colors hover:text-brand-indigoMid focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
          >
            See what we take on
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>

      <figure className="mt-16 max-w-2xl border-l-2 border-brand-indigo/40 pl-6">
        <blockquote className="font-display text-lg leading-snug text-brand-ink">
          &ldquo;Do yourself a favor, take a walk through their engine overall
          room, go and check the work that they do. It&apos;s proper, it&apos;s
          sufficient.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-sm text-brand-inkMuted">
          <span className="font-semibold text-brand-ink">Hendrik Mostert</span>
          {" · "}Engine rebuild customer
        </figcaption>
      </figure>
    </SectionContainer>
  );
}

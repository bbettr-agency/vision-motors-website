import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { imagesConfig } from "@/config/images-config";
import { utilityRoutes } from "@/config/routes";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  THE ENGINE SHOP — the flagship differentiator.
//
//  The client's company profile shows a visually distinct SECOND premises
//  branded "ENGINE SHOP". Every competitor lists "engine overhauls" as a bullet;
//  Vision Motors has a building with it painted on the front. This is treated as
//  the page's flagship visual band.
//
//  ⚠️ CAREFULLY SCOPED (Correction 1, 2026-07-27). We state only what is
//  photographically evidenced and model-AGNOSTIC:
//     ✅ a separate engine shop exists (FACT-REGISTER A7)
//     ✅ full rebuilds / reconditioning done in-house
//  ⛔ NO dedicated Ford Ranger / BT-50 SPECIALIST claim from signage alone.
//  ⛔ NO street address (C3), NO model-year / engine-code / fault claims (C21),
//     NO volume claims ("a large part of what comes through it"). All gated
//     until the client confirms which models/engines and what is done in-house.
// ─────────────────────────────────────────────────────────────────────────────

export default function EngineShop() {
  return (
    <SectionContainer id="engine-shop" className="bg-brand-cream">
      {/* Flagship header. */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          tone="light"
          eyebrow="The Engine Shop / Vision Motors"
          title={
            <>
              We don&apos;t send engine work
              <span className="text-brand-inkMuted"> anywhere else</span>
            </>
          }
          description="Most independent workshops sub-contract engine reconditioning out and mark it up. We run a separate engine shop of our own — where rebuilds and reconditioning are actually done."
          className="lg:col-span-8"
        />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-inkMuted lg:col-span-4 lg:text-right">
          Second premises
          <span className="block text-brand-inkMuted">In-house rebuilds</span>
        </p>
      </div>

      {/* Flagship editorial pair — the engine shop in two real frames. */}
      <Reveal className="mt-12">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="relative h-[36vh] min-h-[240px] overflow-hidden rounded-2xl sm:col-span-2 sm:h-[54vh]">
            <ImageSlotView
              slot={imagesConfig.engineShopWork1}
              tone="light"
              fill
              sizes="(max-width: 640px) 100vw, 62vw"
            />
          </div>
          <div className="relative h-[36vh] min-h-[240px] overflow-hidden rounded-2xl sm:h-[54vh]">
            <ImageSlotView
              slot={imagesConfig.engineShopWork2}
              tone="light"
              fill
              sizes="(max-width: 640px) 100vw, 31vw"
            />
          </div>
        </div>
      </Reveal>

      {/* Feature blocks + proof quote. */}
      <div className="mt-14 grid gap-x-16 gap-y-10 lg:grid-cols-2">
        <div className="border-l-2 border-brand-ink/25 pl-6">
          <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-brand-ink">
            A second premises, not a corner of the workshop
          </h3>
          <p className="mt-3 max-w-[55ch] text-sm leading-[1.75] text-brand-inkSoft">
            Engine work has its own building, its own benches and its own
            equipment. That is what lets us take on full rebuilds rather than
            just fitting parts somebody else machined.
          </p>
        </div>

        <div className="border-l-2 border-brand-cta/60 pl-6">
          <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-brand-ink">
            Rebuilt and reconditioned in-house
          </h3>
          <p className="mt-3 max-w-[55ch] text-sm leading-[1.75] text-brand-inkSoft">
            Petrol and diesel engines for cars, bakkies and commercial vehicles —
            stripped, measured and rebuilt on our own benches, not sent away and
            marked up.
          </p>
        </div>
      </div>

      <figure className="mt-14 max-w-2xl border-t border-brand-ink/20 pt-8">
        <span
          aria-hidden
          className="font-display text-4xl font-bold leading-none text-brand-cta"
        >
          &ldquo;
        </span>
        <blockquote className="mt-1 font-display text-xl font-bold leading-tight tracking-tight text-brand-ink sm:text-2xl">
          Do yourself a favor, take a walk through their engine overall room, go
          and check the work that they do. It&apos;s proper, it&apos;s sufficient.
        </blockquote>
        <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-brand-inkMuted">
          <span className="text-brand-ink">Hendrik Mostert</span>
          <span className="text-brand-inkMuted"> / Engine rebuild customer</span>
        </figcaption>
      </figure>

      <Link
        href={utilityRoutes.services}
        className="mt-10 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand-blue underline underline-offset-4 transition-colors hover:text-brand-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
      >
        See what we take on
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </SectionContainer>
  );
}

import { imagesConfig } from "@/config/images-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import ImageSlotView from "@/components/ui/image-slot";
import BranchActions from "@/components/funnel/branch-actions";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  FIND THE WORKSHOP — two real branches, shown as two editorial blocks.
//
//  Each block pairs the branch's own shopfront photograph with its address,
//  shared hours and its OWN Call / WhatsApp / Directions actions (numbers never
//  crossed). The composition alternates image side for rhythm. Confirmed
//  addresses + branch numbers per client instruction 2026-08-11.
// ─────────────────────────────────────────────────────────────────────────────

const branchImage: Record<string, (typeof imagesConfig)[string]> = {
  "vision-motors": imagesConfig.branchVisionMotors,
  "engine-shop-vision-motors": imagesConfig.branchEngineShop,
};

export default function LocationHours() {
  return (
    <SectionContainer id="find-us" className="bg-brand-cream">
      <SectionHeading
        tone="light"
        eyebrow="Find the workshop"
        title="Two workshops, one team"
        description="Vision Motors runs two workshops in Wonderboom South, Pretoria. Choose the one that suits you — or call or WhatsApp ahead and we'll make sure the right branch is ready for your vehicle."
        className="max-w-3xl"
      />

      <div className="mt-14 space-y-12 lg:space-y-16">
        {siteConfig.branches.map((branch, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={branch.id}
              className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
            >
              <div
                className={cn(
                  "relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-soft",
                  reversed && "lg:order-2"
                )}
              >
                <ImageSlotView
                  slot={branchImage[branch.id]}
                  tone="light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className={cn(reversed && "lg:order-1")}>
                <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brand-inkMuted">
                  {branch.utilityLabel}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                  {branch.name}
                </h3>
                <address className="mt-4 not-italic text-base leading-[1.7] text-brand-inkSoft">
                  {branch.streetLine}
                  <br />
                  {branch.suburb}, {branch.city}
                  {branch.postalCode ? `, ${branch.postalCode}` : ""}
                </address>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-brand-inkMuted">
                  Mon–Fri · 07:30–17:00
                </p>

                <BranchActions branch={branch} className="mt-6" />
              </div>
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}

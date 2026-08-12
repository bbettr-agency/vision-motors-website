import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homepageTeam } from "@/config/team-config";
import { siteConfig } from "@/config/site-config";
import { utilityRoutes } from "@/config/routes";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

// ─────────────────────────────────────────────────────────────────────────────
//  THE PEOPLE BEHIND THE WORK — homepage leadership pair.
//
//  Answers "who is behind the business?" between the workshop/capability proof
//  and the location/booking close. TWO people only — one per workshop — so the
//  homepage stays a story, not a staff directory. The full four-person team
//  lives on /about-us (linked below).
// ─────────────────────────────────────────────────────────────────────────────

const branchName = (id: string) =>
  siteConfig.branches.find((b) => b.id === id)?.name ?? "";

export default function TeamLeaders() {
  return (
    <SectionContainer id="team" className="bg-brand-navy">
      <SectionHeading
        eyebrow="The people behind the work"
        title="Meet the people behind Vision Motors"
        description="You deal with the people actually responsible for the work — not a call centre. These two lead our two workshops."
        className="max-w-2xl"
      />

      <Reveal className="mt-14">
        <div className="mx-auto grid max-w-xl gap-8 sm:grid-cols-2 sm:gap-6">
          {homepageTeam.map((member) => (
            <figure key={member.name} className="flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-brand-navyCard">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5">
                <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-brand-cta">
                  {branchName(member.branchId)}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-brand-bone/75">{member.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 flex justify-center">
        <Link
          href={utilityRoutes.about}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-semibold text-white transition-colors hover:border-brand-cta/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
        >
          Meet the team
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </SectionContainer>
  );
}

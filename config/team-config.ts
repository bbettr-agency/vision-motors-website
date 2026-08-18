// ─────────────────────────────────────────────────────────────────────────────
//  TEAM — the real people behind Vision Motors.
//
//  SINGLE SOURCE OF TRUTH for both the condensed homepage leadership pair and
//  the full About-page team. Confirmed by the client (2026-08-12); the exact
//  names, branches and roles below are the only ones used site-wide.
//
//  ⛔ NOTHING is invented — no biographies, years of experience, qualifications,
//     ages, certifications or quotes. Only confirmed name / branch / role.
//  Portraits are the client's own studio photographs, optimised under
//  /public/images/team. Branch display names are resolved from siteConfig so the
//  two can never drift.
// ─────────────────────────────────────────────────────────────────────────────

export type BranchId = "vision-motors" | "engine-shop-vision-motors";

export type TeamMember = {
  name: string;
  branchId: BranchId;
  role: string;
  image: string;
  alt: string;
  /** True → shown in the condensed homepage leadership pair. */
  onHomepage: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Christo Vorster",
    branchId: "vision-motors",
    role: "Director · Auto Electrician",
    image: "/images/team/christo-vorster-vision-motors.jpg",
    alt: "Christo Vorster, Director and Auto Electrician at Vision Motors, Wonderboom South, Pretoria",
    onHomepage: true,
  },
  {
    name: "Jacques Du Randt",
    branchId: "engine-shop-vision-motors",
    role: "Operational Manager · Motor Mechanic",
    image: "/images/team/jacques-du-randt-engine-shop-vision-motors.jpg",
    alt: "Jacques Du Randt, Operational Manager and Motor Mechanic at The Engine Shop / Vision Motors, Wonderboom, Pretoria",
    onHomepage: true,
  },
  {
    name: "Minjoné Müller",
    branchId: "vision-motors",
    role: "Service Advisor",
    image: "/images/team/minjone-muller-vision-motors.jpg",
    alt: "Minjoné Müller, Service Advisor at Vision Motors, Wonderboom South, Pretoria",
    onHomepage: false,
  },
  {
    name: "Mariska Coetzee",
    branchId: "engine-shop-vision-motors",
    role: "Service Advisor",
    image: "/images/team/mariska-coetzee-engine-shop-vision-motors.jpg",
    alt: "Mariska Coetzee, Service Advisor at The Engine Shop / Vision Motors, Wonderboom, Pretoria",
    onHomepage: false,
  },
];

/** The two leaders shown on the homepage — one per workshop. */
export const homepageTeam = teamMembers.filter((m) => m.onHomepage);

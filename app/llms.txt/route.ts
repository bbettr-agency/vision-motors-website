// ─────────────────────────────────────────────────────────────────────────────
//  /llms.txt — a plain-Markdown map of the site for AI systems (llmstxt.org).
//
//  Generated from the SAME config the pages render from, so it can never state
//  a fact the site doesn't: names, addresses, numbers, hours and services all
//  come from config/. Truth-gated fields (founding year, warranty terms,
//  accreditation, pricing, turnaround) are omitted here exactly as they are on
//  the site.
// ─────────────────────────────────────────────────────────────────────────────

import { serviceRoutes, utilityRoutes } from "@/config/routes";
import { seoConfig } from "@/config/seo-config";
import { servicesConfig } from "@/config/services-config";
import { siteConfig } from "@/config/site-config";
import { teamMembers } from "@/config/team-config";

export const dynamic = "force-static";

function build(): string {
  const url = (path: string) =>
    `${siteConfig.website}${path === "/" ? "/" : path}`;

  const hours = siteConfig.hours.value
    ? `Monday to Friday, 07:30–17:00. ${siteConfig.hoursClosedNote}.`
    : "";

  const branches = siteConfig.branches
    .map(
      (b) =>
        `- **${b.name}**: ${b.streetLine}, ${b.suburb}, ${b.city}, ${b.postalCode}. ` +
        `Call/WhatsApp ${b.phoneDisplay}. Branch lead: ${b.manager} (${b.managerRole}).`
    )
    .join("\n");

  const services = servicesConfig
    .map((s) => `- **${s.title}**: ${s.description}`)
    .join("\n");

  const team = teamMembers.map((m) => `- ${m.name}, ${m.role}`).join("\n");

  const liveServicePages = serviceRoutes
    .filter((s) => s.live)
    .map((s) => `- [${s.label}](${url(s.slug)})`)
    .join("\n");

  return `# ${siteConfig.businessName} (${siteConfig.city})

> ${seoConfig.description}

${siteConfig.businessName} is an independent vehicle workshop on Steve Biko Road in ${siteConfig.suburb}, ${siteConfig.city}, ${siteConfig.region}, South Africa, with a second premises, The Engine Shop / Vision Motors, for engine reconditioning. It works on all makes and models, petrol and diesel.

## Contact

- Main number: ${siteConfig.phoneDisplay}
- Email: ${siteConfig.email}
- Hours: ${hours}
- Website: ${url("/")}

## Workshops

${branches}

## Services

${services}

## How the workshop works

- The fault is diagnosed and explained, and a quote is given before any work starts. Work only proceeds once the customer approves it.
- Some engine and gearbox faults can only be confirmed after the unit is removed and opened (strip-and-assess). The process and its charges are explained before proceeding; those charges remain payable if the repair quote is declined.
- ${siteConfig.warrantyInterimCopy}

## People

${team}

## Key pages

- [Services](${url(utilityRoutes.services)}): every repair and servicing capability
- [Your warranty rights](${url(utilityRoutes.warrantyRights)}): Competition Commission guidelines on servicing a vehicle at an independent workshop while it is under manufacturer warranty
- [About](${url(utilityRoutes.about)}): the two workshops and the team
- [Our work](${url(utilityRoutes.work)}): photographs taken on site
- [Contact](${url(utilityRoutes.contact)}): addresses, numbers, directions
- [Book your car in](${url(utilityRoutes.booking)})
${liveServicePages ? `\n## Service pages\n\n${liveServicePages}\n` : ""}
## Optional

- [Privacy policy](${url(utilityRoutes.privacy)})
- [Website terms of use](${url(utilityRoutes.terms)})
`;
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

import { Mail, MapPin, Phone } from "lucide-react";

import { navRoutes, futureRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site-config";
import { specialistServices } from "@/config/services-config";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink px-6 pb-28 pt-16 md:pb-16 lg:px-8">
      {/* pb-28 on mobile so the sticky CTA bar never covers footer content. */}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Independent vehicle workshop in {siteConfig.suburb},{" "}
              {siteConfig.city}. Diagnostics, engine and gearbox specialists.
            </p>

            <ul className="mt-4 text-sm">
              <li>
                <a
                  href={siteConfig.phoneLink}
                  className="inline-flex min-h-[44px] items-center gap-2.5 text-white/75 transition-colors hover:text-brand-accent"
                  aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                  <span className="whitespace-nowrap">
                    {siteConfig.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailLink}
                  className="inline-flex min-h-[44px] items-center gap-2.5 break-all text-white/75 transition-colors hover:text-brand-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/75">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                  aria-hidden
                />
                {/* Street number omitted — four conflicting addresses in circulation.
                    TODO(client): confirm canonical address. */}
                <span>{siteConfig.addressDisplay}</span>
              </li>
            </ul>

            {/* Hours confirmed by client onboarding 2026-07-22. */}
            {siteConfig.hours.value && (
              <div className="mt-6">
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
                  Opening hours
                </h2>
                <p className="mt-2.5 text-sm text-white/75">
                  Monday – Friday: 07:30 – 17:00
                </p>
                <p className="mt-1 text-xs text-white/55">
                  {siteConfig.hoursClosedNote}
                </p>
              </div>
            )}
          </div>

          {/* Specialist work */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Specialist Work
            </h2>
            <ul className="mt-3 text-sm">
              {specialistServices.map((service) => (
                <li key={service.slug}>
                  <a
                    href="#services"
                    className="inline-flex min-h-[44px] items-center text-white/60 transition-colors hover:text-brand-accent"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Explore
            </h2>
            <ul className="mt-3 text-sm">
              {navRoutes.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-white/60 transition-colors hover:text-brand-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#book"
                  className="inline-flex min-h-[44px] items-center text-white/60 transition-colors hover:text-brand-accent"
                >
                  Book Your Car In
                </a>
              </li>
            </ul>
          </div>

          {/* Legal + social */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h2>
            <ul className="mt-3 text-sm">
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-white/60 transition-colors hover:text-brand-accent"
                >
                  Facebook
                </a>
              </li>
              {/*
                Legal pages are NOT yet linked. The current live site points at
                third-party free-generator URLs (termsofservicegenerator.net /
                privacypolicygenerator.info) which are off-domain, may expire,
                and are almost certainly not POPIA-compliant for a business
                collecting names and phone numbers.
                TODO(client): commission real Privacy Policy + Terms pages, then
                link futureRoutes.privacy / futureRoutes.terms here.
              */}
              <li>
                <span className="inline-flex min-h-[44px] items-center text-white/55" title="Pending — see PROJECT_STATUS.md">
                  Privacy Policy (pending)
                </span>
              </li>
              <li>
                <span className="inline-flex min-h-[44px] items-center text-white/55" title="Pending — see PROJECT_STATUS.md">
                  Terms of Service (pending)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {/* Falls back to the trading name — the registered entity name is
                not yet confirmed. See FACT-VERIFICATION-REGISTER.md C6. */}
            © {new Date().getFullYear()}{" "}
            {siteConfig.legalName ?? siteConfig.businessName}. All rights
            reserved.
          </p>
          <p>
            Website Designed &amp; Developed by{" "}
            <a
              href="https://www.bbettragency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/60 transition-colors hover:text-brand-accent"
            >
              Bbettr Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Referenced so the future-routes map stays type-checked as pages are added.
export const plannedLegalRoutes = [futureRoutes.privacy, futureRoutes.terms];

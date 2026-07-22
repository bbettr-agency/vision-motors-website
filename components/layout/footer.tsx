import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navRoutes, serviceRoutes, utilityRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site-config";
import Logo from "@/components/ui/logo";

/**
 * Global footer.
 *
 * `pb-28` on mobile so the sticky CTA bar never covers footer content.
 *
 * Service links point at planned Phase 3 routes. Those that are not yet `live`
 * render as plain text rather than dead links — nothing links to a 404.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-indigoDeep px-6 pb-28 pt-16 md:pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Independent vehicle workshop in {siteConfig.suburb},{" "}
              {siteConfig.city}. Diagnostics, engine and gearbox specialists.
            </p>

            <ul className="mt-5 text-sm">
              <li>
                <a
                  href={siteConfig.phoneLink}
                  className="inline-flex min-h-[44px] items-center gap-2.5 text-white/80 transition-colors hover:text-brand-accent"
                  aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
                  data-cta="call"
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
                  className="inline-flex min-h-[44px] items-center gap-2.5 break-all text-white/80 transition-colors hover:text-brand-accent"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 py-2 text-white/80">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                  aria-hidden
                />
                {/* Street address verified from own signage. Postcode is
                    deliberately omitted — 0031 vs 0084 unresolved (C20). */}
                <span>{siteConfig.addressDisplay}</span>
              </li>
            </ul>

            {siteConfig.hours.value && (
              <div className="mt-6">
                <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
                  Opening hours
                </h2>
                <p className="mt-2.5 text-sm text-white/80">
                  Monday – Friday: 07:30 – 17:00
                </p>
                <p className="mt-1 text-xs text-white/60">
                  {siteConfig.hoursClosedNote}
                </p>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              What We Do
            </h2>
            <ul className="mt-3 text-sm">
              {serviceRoutes.map((service) =>
                service.live ? (
                  <li key={service.slug}>
                    <Link
                      href={service.slug}
                      className="inline-flex min-h-[44px] items-center text-white/65 transition-colors hover:text-brand-accent"
                    >
                      {service.navLabel}
                    </Link>
                  </li>
                ) : (
                  // Not yet built — plain text, never a dead link.
                  <li
                    key={service.slug}
                    className="flex min-h-[44px] items-center text-white/65"
                  >
                    {service.navLabel}
                  </li>
                )
              )}
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
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-white/65 transition-colors hover:text-brand-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={utilityRoutes.booking}
                  className="inline-flex min-h-[44px] items-center text-white/65 transition-colors hover:text-brand-accent"
                >
                  {siteConfig.ctaSecondary}
                </Link>
              </li>
              <li>
                <Link
                  href={utilityRoutes.warrantyRights}
                  className="inline-flex min-h-[44px] items-center text-white/65 transition-colors hover:text-brand-accent"
                >
                  Your Warranty Rights
                </Link>
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
                  className="inline-flex min-h-[44px] items-center text-white/65 transition-colors hover:text-brand-accent"
                >
                  Facebook
                </a>
              </li>
              <li>
                <Link
                  href={utilityRoutes.privacy}
                  className="inline-flex min-h-[44px] items-center text-white/65 transition-colors hover:text-brand-accent"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={utilityRoutes.terms}
                  className="inline-flex min-h-[44px] items-center text-white/65 transition-colors hover:text-brand-accent"
                >
                  Website Terms of Use
                </Link>
              </li>
            </ul>

            {/*
              ⛔ ACCREDITATION SLOT — RMI / MIWA / ARASA badges render here
              ONLY once membership evidence is supplied. Logo files and a
              self-claim on the old site are not evidence.
              See config/site-config.ts → accreditations, and
              FACT-VERIFICATION-REGISTER.md C2.
            */}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {/* Falls back to the trading name — registered entity unconfirmed (C6). */}
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
              className="font-semibold text-white/70 transition-colors hover:text-brand-accent"
            >
              Bbettr Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

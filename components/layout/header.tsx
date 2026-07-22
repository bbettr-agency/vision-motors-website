"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navRoutes, utilityRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site-config";
import Logo from "@/components/ui/logo";
import CallButton from "@/components/ui/call-button";
import { cn } from "@/utils/cn";

/**
 * Global header.
 *
 * CTA hierarchy (client instruction, 2026-07-22):
 *   PRIMARY   → Call Us (brass, visible from 400px up)
 *   SECONDARY → Book Your Car In
 *
 * The call CTA is deliberately the ONLY brass element in the header, so the
 * strongest visual weight in the chrome always points at the phone.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-brand-indigoDeep/95 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-[44px] shrink-0 items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          aria-label={`${siteConfig.businessName} — home`}
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navRoutes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded text-sm font-medium text-white/75 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* PRIMARY — call. */}
          <CallButton
            location="header"
            variant="brass"
            size="md"
            showNumber
            className="hidden min-[400px]:inline-flex"
          />

          {/* SECONDARY — book. */}
          <Link
            href={utilityRoutes.booking}
            className="hidden min-h-[44px] items-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:border-brand-accent/50 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent lg:inline-flex"
          >
            {siteConfig.ctaSecondary}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-brand-indigoDeep/98 backdrop-blur-xl lg:hidden"
      >
        <nav className="px-6 py-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navRoutes.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[48px] items-center rounded-xl px-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={utilityRoutes.booking}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[48px] items-center rounded-xl px-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {siteConfig.ctaSecondary}
              </Link>
            </li>
          </ul>

          <CallButton
            location="header"
            variant="brass"
            showNumber
            className="mt-5 w-full"
          />
        </nav>
      </div>
    </header>
  );
}

"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site-config";
import Logo from "@/components/ui/logo";
import Button from "@/components/ui/button";
import { scrollToBookingForm } from "@/lib/scroll-to-form";
import { cn } from "@/utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
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
          ? "border-b border-white/10 bg-brand-ink/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a
          href="#top"
          className="inline-flex min-h-[44px] shrink-0 items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          aria-label={`${siteConfig.businessName} — back to top`}
        >
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navRoutes.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded text-sm font-medium text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Click-to-call — the secondary conversion, always visible. */}
          <a
            href={siteConfig.phoneLink}
            className="hidden min-h-[44px] items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:border-brand-accent/50 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:inline-flex"
            aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
            {/* whitespace-nowrap: the phone number must never wrap. */}
            <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
          </a>

          <Button
            size="md"
            onClick={() => scrollToBookingForm()}
            className="hidden md:inline-flex"
          >
            {siteConfig.cta}
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent lg:hidden"
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
        className="border-t border-white/10 bg-brand-ink/98 backdrop-blur-xl lg:hidden"
      >
        <nav className="px-6 py-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navRoutes.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[48px] items-center rounded-xl px-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.phoneLink}
            className="mt-4 flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-white"
            aria-label={`Call ${siteConfig.businessName} on ${siteConfig.phoneDisplay}`}
          >
            <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
            <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

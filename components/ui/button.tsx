import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink disabled:cursor-not-allowed disabled:opacity-60";

// min-h ensures the 44x44px tap-target floor from PIPELINE/gates.md
const sizes: Record<ButtonSize, string> = {
  md: "min-h-[44px] px-5 py-3 text-sm",
  lg: "min-h-[52px] px-7 py-4 text-sm md:text-base",
};

const variants: Record<ButtonVariant, string> = {
  // `primary` IS the brass CTA — accent colour is reserved for this and nothing else.
  primary:
    "bg-brand-accent text-brand-ink hover:bg-brand-accentDark hover:shadow-accent hover:-translate-y-0.5",
  secondary:
    "bg-white/5 text-white border border-white/15 backdrop-blur-md hover:bg-white/10 hover:border-brand-accent/50 hover:-translate-y-0.5",
  ghost: "text-white/70 hover:text-white",
  outline:
    "border border-brand-ink/20 text-brand-ink hover:border-brand-ink/40 hover:bg-brand-ink/5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "lg",
  className,
  withArrow = false,
  external = false,
  onClick,
  type = "button",
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

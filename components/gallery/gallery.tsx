"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import {
  galleryCategoryLabels,
  galleryCategoryOrder,
  galleryImages,
  type GalleryCategory,
} from "@/config/gallery-config";
import { cn } from "@/utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
//  GALLERY — client component: category filters + a lightweight, dependency-free
//  lightbox. Keyboard accessible (Esc closes, ← → navigate, focus trapped and
//  returned to the trigger), body-scroll locked while open, reduced-motion safe.
//  Grid uses intrinsic width/height so there is no layout shift.
// ─────────────────────────────────────────────────────────────────────────────

type Filter = "all" | GalleryCategory;

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const visible =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.categories.includes(filter));

  const filters: Filter[] = ["all", ...galleryCategoryOrder];

  const open = openIndex !== null ? visible[openIndex] : null;

  const close = useCallback(() => {
    setOpenIndex(null);
    // Return focus to the thumbnail that opened the lightbox.
    triggerRef.current?.focus();
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length
      );
    },
    [visible.length]
  );

  // Keyboard + body-scroll lock while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        // Simple focus trap — keep focus on the close button.
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, go]);

  return (
    <div>
      {/* Filters */}
      <div
        className="flex flex-wrap gap-2.5"
        role="group"
        aria-label="Filter photographs by category"
      >
        {filters.map((f) => {
          const active = filter === f;
          const label = f === "all" ? "All" : galleryCategoryLabels[f];
          return (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setOpenIndex(null);
              }}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta",
                active
                  ? "border-brand-cta bg-brand-cta text-brand-ink"
                  : "border-brand-line bg-white text-brand-inkSoft hover:border-brand-blue/40 hover:text-brand-ink"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <div className="mt-10 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setOpenIndex(i);
            }}
            aria-label={`View larger: ${img.alt}`}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-brand-line bg-brand-bluegrey shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta focus-visible:ring-offset-2"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-safe:group-hover:scale-[1.04] motion-reduce:transition-none"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-ink/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          {visible.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous photograph"
                className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next photograph"
                className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
              >
                <ChevronRight className="h-6 w-6" aria-hidden />
              </button>
            </>
          )}

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={open.src}
              alt={open.alt}
              width={open.width}
              height={open.height}
              sizes="92vw"
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
              priority
            />
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-brand-bone/80">
              {open.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

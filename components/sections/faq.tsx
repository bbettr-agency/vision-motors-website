"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqConfig } from "@/config/faq-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/utils/cn";

/**
 * FAQ — the ranked objection table, in the customer's words.
 * The same faqConfig array generates the FAQPage JSON-LD (lib/schema.ts),
 * so the visible content and the structured data can never drift.
 *
 * Native <button> + aria-expanded/aria-controls for keyboard and screen-reader
 * support; no accordion library.
 *
 * v2 (visual only): light on `linen`, half a step deeper than the process
 * section above so the two light sections separate. Long-form reading is
 * easier on a light surface, and this is the densest text on the page.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer id="faq" className="bg-brand-linen">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            tone="light"
            eyebrow="Questions"
            title="The things people ask us"
          />
        </div>

        <div className="lg:col-span-8">
          <dl className="divide-y divide-brand-stone border-y border-brand-stone">
            {faqConfig.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div key={item.question}>
                  <dt>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-brand-accentInk focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accentInk"
                    >
                      <span className="font-display text-base font-semibold text-brand-ink md:text-lg">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-brand-accentInk transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </button>
                  </dt>

                  <dd
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                  >
                    <p className="max-w-[68ch] pb-7 text-sm leading-[1.8] text-brand-inkSoft">
                      {item.answer}
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </SectionContainer>
  );
}

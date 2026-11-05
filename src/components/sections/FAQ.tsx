"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad section-rule bg-paper">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-section text-ink">{faq.title}</h2>
        </div>

        <div className="mt-12 space-y-0 border-t-[3px] border-ink">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b-[3px] border-ink">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base text-ink sm:text-lg"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <span
                    className={`font-outlier text-2xl text-accent transition-transform duration-220 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-220 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-ink-2">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

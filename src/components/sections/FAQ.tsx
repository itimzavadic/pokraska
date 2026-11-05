"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {faq.title}
          </h2>
        </div>

        <div className="mt-14 space-y-0 border-t border-indigo/15">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-indigo/15">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold text-indigo sm:py-7"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="max-w-[40ch]">{item.q}</span>
                  <span
                    className={`shrink-0 text-2xl text-teal transition-transform duration-220 ${
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
                    <p className="max-w-2xl pb-7 text-indigo/75">{item.a}</p>
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

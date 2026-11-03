"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {faq.title}
          </h2>
        </div>

        <div className="mt-10 space-y-2">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className={`border border-indigo/10 ${isOpen ? "border-teal/40" : ""}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-indigo"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <span
                    className={`text-teal transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-indigo/5 px-5 py-4 text-indigo/75">
                      {item.a}
                    </p>
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

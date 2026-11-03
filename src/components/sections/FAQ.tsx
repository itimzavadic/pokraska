import { faq } from "@/lib/content";
import { backgrounds } from "@/lib/backgrounds";
import { SectionBackdrop } from "@/components/SectionBackdrop";

export function FAQ() {
  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      <SectionBackdrop src={backgrounds.hangar} tone="light" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-3 text-indigo/75 sm:text-lg">{faq.subtitle}</p>
        </div>

        <div className="mt-10 space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group border border-indigo/10 bg-white/80 open:border-teal/40 backdrop-blur-[2px]"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-indigo marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-teal transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-indigo/5 px-5 py-4 text-indigo/75">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

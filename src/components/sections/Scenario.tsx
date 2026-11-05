import Image from "next/image";
import { scenario } from "@/lib/content";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Scenario() {
  return (
    <section id="scenario" className="section-pad relative overflow-hidden">
      <Image
        src="/images/bg/scenario.jpg"
        alt=""
        fill
        sizes="100vw"
        className="scale-x-[-1] object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(243,247,246,0.9)_50%,rgba(255,255,255,0.94)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
              {scenario.title}
            </h2>
            <p className="mt-3 text-indigo/75 sm:text-lg">{scenario.subtitle}</p>
          </div>
        </RevealOnScroll>

        <ol className="relative mt-12 ml-1">
          <span
            className="absolute bottom-4 left-[13px] top-3 w-0.5 bg-teal/55"
            aria-hidden
          />
          {scenario.steps.map((step, index) => (
            <RevealOnScroll key={step.step} delayMs={index * 80}>
              <li className="relative pb-10 pl-12 last:pb-0 sm:pb-12 sm:pl-14">
                <span
                  className="absolute left-0 top-0.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs font-bold text-white ring-4 ring-white/90"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-sans text-sm font-extrabold tracking-wide text-teal">
                    {step.step}
                  </span>
                  <h3 className="font-sans text-lg font-bold tracking-tight text-indigo sm:text-xl">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-indigo/75 sm:text-base">
                  {step.text}
                </p>
                {index === scenario.steps.length - 1 && (
                  <div className="mt-5 flex flex-col items-start gap-3">
                    <p className="text-base font-bold tracking-tight text-indigo sm:text-lg">
                      {scenario.ctaHint}
                    </p>
                    <a href="#contacts" className="btn-primary inline-flex">
                      {scenario.ctaLabel}
                    </a>
                  </div>
                )}
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}

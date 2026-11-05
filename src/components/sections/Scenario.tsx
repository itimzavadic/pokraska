import Image from "next/image";
import { scenario } from "@/lib/content";

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
        className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,#ffffff_94%,transparent)_0%,color-mix(in_srgb,var(--color-paper-2)_92%,transparent)_50%,color-mix(in_srgb,#ffffff_95%,transparent)_100%)]"
        aria-hidden
      />

      <div className="container-site relative">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {scenario.title}
          </h2>
          <p className="lead mt-5 text-indigo/75">{scenario.subtitle}</p>
        </div>

        <ol className="relative mt-16 ml-1 max-w-3xl">
          <span
            className="absolute bottom-6 left-[13px] top-3 w-0.5 bg-teal/40"
            aria-hidden
          />
          {scenario.steps.map((step, index) => (
            <li
              key={step.step}
              className="relative pb-12 pl-12 last:pb-0 sm:pb-14 sm:pl-14"
            >
              <span
                className="absolute left-0 top-0.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-xs font-bold text-white ring-4 ring-white/90"
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-sm font-extrabold text-teal">{step.step}</span>
                <h3 className="font-sans text-lg font-bold tracking-tight text-indigo sm:text-xl">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-indigo/75">
                {step.text}
              </p>
              {index === scenario.steps.length - 1 && (
                <div className="mt-8 flex flex-col items-start gap-4">
                  <p className="text-base font-bold text-indigo sm:text-lg">
                    {scenario.ctaHint}
                  </p>
                  <a href="#contacts" className="btn-primary">
                    {scenario.ctaLabel}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Image from "next/image";
import { scenario } from "@/lib/content";

export function Scenario() {
  return (
    <section id="scenario" className="section-pad section-rule relative overflow-hidden bg-paper">
      <Image
        src="/images/bg/scenario.jpg"
        alt=""
        fill
        sizes="100vw"
        className="photo-bw scale-x-[-1] object-cover object-center opacity-25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-paper)_92%,transparent)_0%,color-mix(in_oklab,var(--color-paper)_88%,transparent)_100%)]"
        aria-hidden
      />

      <div className="container-site relative">
        <div className="max-w-2xl">
          <h2 className="font-display text-section text-ink">{scenario.title}</h2>
          <p className="lead mt-4 text-ink-2">{scenario.subtitle}</p>
        </div>

        <ol className="relative mt-12 ml-1">
          <span
            className="absolute bottom-4 left-[11px] top-3 w-[3px] bg-accent"
            aria-hidden
          />
          {scenario.steps.map((step, index) => (
            <li
              key={step.step}
              className="relative pb-10 pl-12 last:pb-0 sm:pb-12 sm:pl-14"
            >
              <span
                className="absolute left-0 top-0.5 z-10 flex h-6 w-6 items-center justify-center border-2 border-ink bg-accent font-outlier text-[0.65rem] text-accent-ink"
                aria-hidden
              >
                {index + 1}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-outlier text-sm text-accent">{step.step}</span>
                <h3 className="font-display text-title text-ink">{step.title}</h3>
              </div>
              <p className="mt-2 max-w-2xl text-ink-2">{step.text}</p>
              {index === scenario.steps.length - 1 && (
                <div className="mt-6 flex flex-col items-start gap-3">
                  <p className="font-display text-lg text-ink">{scenario.ctaHint}</p>
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

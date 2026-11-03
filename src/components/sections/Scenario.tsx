import { scenario } from "@/lib/content";
import { backgrounds } from "@/lib/backgrounds";
import { SectionBackdrop } from "@/components/SectionBackdrop";

export function Scenario() {
  return (
    <section id="scenario" className="section-pad relative overflow-hidden">
      <SectionBackdrop src={backgrounds.warehouseAlt} tone="light" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {scenario.title}
          </h2>
          <p className="mt-3 text-indigo/75 sm:text-lg">{scenario.subtitle}</p>
        </div>

        <ol className="mt-10 space-y-0">
          {scenario.steps.map((step, index) => (
            <li
              key={step.step}
              className="grid gap-3 border-t border-indigo/10 py-6 sm:grid-cols-[5rem_1fr] sm:gap-8"
            >
              <span className="font-display text-3xl font-semibold text-teal">
                {step.step}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-indigo">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-2xl text-indigo/75">{step.text}</p>
                {index === scenario.steps.length - 1 && (
                  <a href="#contacts" className="btn-primary mt-5 inline-flex">
                    Связаться
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

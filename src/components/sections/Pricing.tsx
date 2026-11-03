import { pricing, site } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-3 text-base text-indigo/80 sm:text-lg">
            {pricing.locationLine}{" "}
            <span className="font-semibold text-teal-hot">{site.city}</span> и{" "}
            {site.region}. Покраска складов, побелка и мойка помещений для
            юридических лиц.
          </p>
          <p className="mt-2 text-sm text-indigo/60">{pricing.note}</p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {pricing.items.map((row) => (
            <li
              key={row.id}
              id={row.id}
              className="flex scroll-mt-28 flex-col border border-indigo/10 bg-muted/40 p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-indigo sm:text-[1.65rem]">
                  {row.service}
                </h3>
                <p className="shrink-0 text-lg font-semibold text-teal-hot">
                  {row.price}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-indigo/75">
                {row.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-3xl">
          <h3 className="font-display text-2xl font-semibold text-indigo">
            {pricing.priceFactorsTitle}
          </h3>
          <p className="mt-3 text-indigo/75">{pricing.priceFactorsIntro}</p>
          <ol className="mt-6 space-y-4">
            {pricing.priceFactors.map((factor) => (
              <li key={factor.n} className="grid gap-1 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-lg font-semibold text-teal">
                  {factor.n}
                </span>
                <p className="text-indigo/80">
                  <span className="font-semibold text-indigo">{factor.title}.</span>{" "}
                  {factor.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

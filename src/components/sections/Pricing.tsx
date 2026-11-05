import Image from "next/image";
import { pricing, site } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad section-rule bg-paper">
      <div className="container-site">
        <div className="max-w-3xl">
          <h2 className="font-display text-section text-ink">{pricing.title}</h2>
          <p className="lead mt-4 text-ink-2">
            {pricing.locationLine}{" "}
            <span className="text-accent">{site.city}</span> и {site.region}.
            Покраска складов, побелка и мойка помещений для юридических лиц.
          </p>
          <p className="mt-3 text-sm text-muted">{pricing.note}</p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {pricing.items.map((row) => (
            <li
              key={row.id}
              id={row.id}
              className="plate flex scroll-mt-28 flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={row.image}
                  alt={row.service}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="photo-bw object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-ink sm:text-2xl">
                    {row.service}
                  </h3>
                  <p className="shrink-0 font-outlier text-lg text-accent">
                    {row.price}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  {row.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 max-w-3xl">
          <h3 className="font-display text-title text-ink">
            {pricing.priceFactorsTitle}
          </h3>
          <p className="mt-3 text-ink-2">{pricing.priceFactorsIntro}</p>
          <ol className="mt-6 space-y-4">
            {pricing.priceFactors.map((factor) => (
              <li key={factor.n} className="grid gap-1 sm:grid-cols-[3rem_1fr]">
                <span className="font-outlier text-lg text-accent">{factor.n}</span>
                <p className="text-ink-2">
                  <span className="font-medium text-ink">{factor.title}.</span>{" "}
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

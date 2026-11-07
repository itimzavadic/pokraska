import Image from "next/image";
import { pricing, site } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="lead mt-5 text-indigo/80">
            {pricing.locationLine}{" "}
            <span className="font-semibold text-teal-hot">{site.city}</span> и{" "}
            {site.region}. Покраска складов, побелка и мойка помещений.
          </p>
          <p className="mt-4 text-sm text-indigo/55">{pricing.note}</p>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12">
          {pricing.items.map((row) => (
            <li
              key={row.id}
              id={row.id}
              className="flex scroll-mt-36 flex-col overflow-hidden border border-indigo/10"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={row.image}
                  alt={row.service}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-indigo">
                    {row.service}
                  </h3>
                  <p className="shrink-0 text-lg font-semibold text-teal-hot">
                    {row.price}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-indigo/75">
                  {row.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 max-w-2xl">
          <h3 className="font-display text-2xl font-semibold text-indigo">
            {pricing.priceFactorsTitle}
          </h3>
          <p className="mt-4 text-indigo/75">{pricing.priceFactorsIntro}</p>
          <ol className="mt-10 space-y-6">
            {pricing.priceFactors.map((factor) => (
              <li key={factor.n} className="grid gap-2 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
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

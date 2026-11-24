import { pricing, site } from "@/lib/content";
import { SmartPicture } from "@/components/SmartPicture";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad scroll-mt-28 bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="lead mt-5 text-indigo/80">
            {pricing.locationLine}{" "}
            <span className="font-semibold text-teal-hot">{site.city}</span> и{" "}
            {site.region}. {pricing.intro}
          </p>
          <p className="mt-4 text-sm text-indigo/55">{pricing.note}</p>
          <a
            href="#objects"
            className="mt-5 inline-block text-sm font-semibold text-teal-hot hover:underline"
          >
            {pricing.objectsLinkLabel}
          </a>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-1 md:max-w-2xl">
          {pricing.items.map((row) => (
            <li
              key={row.id}
              id={row.id}
              className="flex scroll-mt-36 flex-col overflow-hidden border border-indigo/10"
            >
              <div className="relative aspect-[16/10]">
                <SmartPicture
                  src={row.image}
                  alt={row.service}
                  fill
                  sizes="(max-width: 768px) 100vw, 42rem"
                  className="absolute inset-0"
                  imgClassName="object-cover"
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
                <p className="mt-3 text-sm font-medium text-indigo/70">
                  {pricing.minOrder}
                </p>
                <a href="#lead" className="btn-primary mt-8 w-fit">
                  Получить расчёт
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

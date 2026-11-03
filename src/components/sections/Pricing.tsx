import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-3 text-indigo/70 sm:text-lg">{pricing.subtitle}</p>
          <p className="mt-2 text-sm text-teal-hot">{pricing.note}</p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {pricing.items.map((row) => (
            <li
              key={row.service}
              className="flex flex-col border border-indigo/10 bg-muted/60 p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-indigo">
                  {row.service}
                </h3>
                <p className="shrink-0 font-semibold text-teal-hot">{row.price}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-indigo/70">
                {row.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="border border-indigo/10 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-hot">
              Расписание
            </p>
            <p className="mt-2 text-indigo">{pricing.schedule}</p>
          </div>
          <div className="border border-indigo/10 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-hot">
              Локация
            </p>
            <p className="mt-2 text-indigo">{pricing.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

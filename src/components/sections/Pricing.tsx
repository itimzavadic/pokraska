import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-3 text-indigo/70 sm:text-lg">{pricing.subtitle}</p>
          <p className="mt-2 text-sm text-orange-hot">{pricing.note}</p>
        </div>

        <div className="mt-10 overflow-hidden border border-indigo/10">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-indigo text-orange">
              <tr>
                <th className="px-4 py-3 font-semibold sm:px-6">Услуга</th>
                <th className="px-4 py-3 font-semibold sm:px-6">Цена</th>
              </tr>
            </thead>
            <tbody>
              {pricing.items.map((row, i) => (
                <tr
                  key={row.service}
                  className={i % 2 === 0 ? "bg-white" : "bg-ivory-deep/60"}
                >
                  <td className="px-4 py-3.5 text-indigo sm:px-6">
                    {row.service}
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-orange-hot sm:px-6">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="border border-indigo/10 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-hot">
              Расписание
            </p>
            <p className="mt-2 text-indigo">{pricing.schedule}</p>
          </div>
          <div className="border border-indigo/10 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-hot">
              Локация
            </p>
            <p className="mt-2 text-indigo">{pricing.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

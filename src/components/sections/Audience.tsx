import { audience } from "@/lib/content";

export function Audience() {
  return (
    <section id="audience" className="section-pad bg-orange text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {audience.title}
          </h2>
          <p className="mt-3 text-white/85 sm:text-lg">{audience.subtitle}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audience.items.map((item) => (
            <li
              key={item.title}
              className="border border-white/25 bg-white/10 p-5 backdrop-blur-[2px] transition hover:bg-white/15"
            >
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

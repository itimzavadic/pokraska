import { advantages } from "@/lib/content";

export function Advantages() {
  return (
    <section id="advantages" className="section-pad bg-orange text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {advantages.title}
          </h2>
          <p className="mt-3 text-white/85 sm:text-lg">{advantages.subtitle}</p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {advantages.items.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 border-l-4 border-white/80 pl-5"
            >
              <div>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/85">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

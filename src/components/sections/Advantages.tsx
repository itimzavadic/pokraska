import { advantages } from "@/lib/content";

export function Advantages() {
  return (
    <section id="advantages" data-section className="section-pad bg-indigo text-teal-soft">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-teal-soft sm:text-4xl">
            {advantages.title}
          </h2>
        </div>

        <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-14">
          {advantages.items.map((item) => (
            <li key={item.title} className="border-l-4 border-teal pl-6">
              <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-white/85">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

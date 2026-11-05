import { advantages } from "@/lib/content";

export function Advantages() {
  return (
    <section id="advantages" className="section-pad bg-teal text-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {advantages.title}
          </h2>
          <p className="lead mt-5 text-white/90">{advantages.subtitle}</p>
        </div>

        <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-14">
          {advantages.items.map((item) => (
            <li key={item.title} className="border-l-4 border-white/70 pl-6">
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-white/90">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

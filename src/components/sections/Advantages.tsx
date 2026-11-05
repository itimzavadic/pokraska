import { advantages } from "@/lib/content";

export function Advantages() {
  return (
    <section id="advantages" className="section-pad band-ink">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-section text-plate-ink">
            {advantages.title}
          </h2>
          <p className="lead mt-4 text-plate-ink/85">{advantages.subtitle}</p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {advantages.items.map((item) => (
            <li
              key={item.title}
              className="border-l-[3px] border-accent pl-5"
            >
              <h3 className="font-display text-title text-plate-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-plate-ink/85">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

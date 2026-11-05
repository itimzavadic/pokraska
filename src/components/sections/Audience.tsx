import Image from "next/image";
import { audience, site } from "@/lib/content";

export function Audience() {
  return (
    <section id="audience" className="section-pad section-rule bg-paper">
      <div className="container-site flex min-w-0 flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="w-full min-w-0 flex-1">
          <p className="label mb-3">
            Для юридических лиц · {site.city}
          </p>
          <h2 className="font-display text-section text-ink">{audience.title}</h2>
          <p className="lead mt-5 text-ink-2">{audience.subtitle}</p>

          <p className="mt-10 font-display text-title text-ink">{audience.lead}</p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {audience.items.map((item) => (
              <li
                key={item.title}
                className="border-l-[3px] border-ink pl-4"
              >
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[16rem] shrink-0 lg:mx-0">
          <figure>
            <div className="photo-frame overflow-hidden">
              <Image
                src="/images/bg/audience.jpg"
                alt="Процесс покраски: валик на удлинителе"
                width={680}
                height={1020}
                sizes="256px"
                className="photo-bw h-auto w-full"
              />
            </div>
            <figcaption className="label mt-3 text-center">
              Процесс на объекте
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

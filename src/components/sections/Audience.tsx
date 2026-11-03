import Image from "next/image";
import { audience, site } from "@/lib/content";

export function Audience() {
  return (
    <section id="audience" className="section-pad bg-teal text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-12">
        <div className="min-w-0 flex-1">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            Для юридических лиц · <span className="text-white">{site.city}</span>
          </p>
          <h2 className="max-w-xl font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {audience.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {audience.subtitle}
          </p>

          <p className="mt-8 font-sans text-sm font-bold uppercase tracking-[0.14em] text-teal-soft">
            {audience.lead}
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {audience.items.map((item) => (
              <li key={item.title} className="border-l-2 border-white/50 pl-4">
                <h3 className="font-sans text-lg font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/85">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[15.5rem] shrink-0 sm:max-w-[17rem] lg:mx-0">
          <div className="relative aspect-[3/4] overflow-hidden border border-white/25 shadow-[0_16px_40px_rgba(18,22,63,0.25)]">
            <Image
              src="/images/bg/audience.jpg"
              alt="Процесс покраски: валик на удлинителе"
              fill
              sizes="272px"
              className="object-cover object-[center_75%]"
            />
          </div>
          <p className="mt-3 text-center text-xs font-medium uppercase tracking-wide text-white/75">
            Процесс на объекте
          </p>
        </div>
      </div>
    </section>
  );
}

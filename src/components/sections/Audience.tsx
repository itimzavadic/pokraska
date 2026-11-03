import Image from "next/image";
import { audience, site } from "@/lib/content";

export function Audience() {
  return (
    <section id="audience" className="section-pad bg-teal text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {audience.title}
            </h2>
            <p className="mt-3 text-lg text-white/90 sm:text-xl">
              Работаем с фирмами и юридическими лицами{" "}
              <span className="font-semibold text-white">{site.city}</span> и{" "}
              {site.region}
            </p>
          </div>

          <div className="mt-10 max-w-sm">
            <p className="font-display text-2xl font-semibold sm:text-3xl">
              {audience.lead}
            </p>
            <ul className="mt-5 space-y-2">
              {audience.items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 border-b border-white/20 pb-2 text-base text-white/95 sm:text-lg"
                >
                  <span className="text-teal-soft" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/images/bg/audience.jpg"
            alt="Покраска потолков и помещений"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

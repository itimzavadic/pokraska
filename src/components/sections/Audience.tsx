import Image from "next/image";
import { audience, site } from "@/lib/content";

export function Audience() {
  return (
    <section id="audience" className="section-pad bg-teal text-white">
      <div className="container-site flex min-w-0 flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">
        <div className="w-full min-w-0 flex-1">
          <p className="label mb-4 text-white/80">
            {site.city} и {site.region}
          </p>
          <h2 className="max-w-xl font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {audience.title}
          </h2>
          <p className="lead mt-6 max-w-xl text-white/90">{audience.subtitle}</p>

          <p className="mt-14 text-sm font-semibold text-white">{audience.lead}</p>
          <ul className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12">
            {audience.items.map((item) => (
              <li key={item.title} className="border-l-2 border-white/40 pl-5">
                <h3 className="font-sans text-lg font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[20rem] shrink-0 sm:max-w-[24rem] lg:mx-0 lg:max-w-[26rem] lg:pt-2">
          <div className="overflow-hidden border border-white/20">
            <Image
              src="/images/bg/audience.jpg"
              alt="Побелка и покраска промышленного объекта"
              width={973}
              height={1024}
              sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 26rem"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

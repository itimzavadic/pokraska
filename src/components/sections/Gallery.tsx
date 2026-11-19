import Image from "next/image";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-indigo-deep">
      <div className="container-site">
        <div className="flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl text-white">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {gallery.title}
            </h2>
            <p className="lead mt-5 text-white/85">{gallery.subtitle}</p>
          </div>
          <a href="#contacts" className="btn-primary shrink-0 self-start sm:self-auto">
            {gallery.ctaLabel}
          </a>
        </div>
      </div>

      {/* Mobile: horizontal snap gallery with all photos */}
      <div className="mt-10 sm:hidden">
        <div className="-mx-0 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max gap-3 px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] snap-x snap-mandatory">
            {gallery.items.map((item) => (
              <li key={item.src} className="w-[78vw] max-w-[20rem] shrink-0 snap-center">
                <figure className="min-w-0">
                  <div className="relative aspect-[3/4] overflow-hidden bg-indigo/20">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="78vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="label mt-3 text-white/75">
                    {item.label}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tablet/desktop grid */}
      <div className="container-site mt-16 hidden sm:block">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {gallery.items.map((item) => (
            <figure key={item.src} className="min-w-0">
              <div
                className={`relative overflow-hidden bg-indigo/20 ${
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="label mt-3 text-white/75">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

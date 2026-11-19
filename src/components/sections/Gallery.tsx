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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

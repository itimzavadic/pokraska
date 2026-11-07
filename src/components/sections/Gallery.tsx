import Image from "next/image";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-indigo-deep">
      <div className="container-site">
        <div className="max-w-2xl text-white">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {gallery.title}
          </h2>
          <p className="lead mt-5 text-white/85">{gallery.subtitle}</p>
        </div>

        <div className="mt-16 columns-2 gap-5 sm:columns-3 sm:gap-6">
          {gallery.items.map((item) => (
            <figure
              key={item.src}
              className="mb-5 break-inside-avoid sm:mb-6"
            >
              <div
                className={`relative overflow-hidden bg-indigo/20 ${
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
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

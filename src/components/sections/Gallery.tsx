import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-muted">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {gallery.title}
          </h2>
          <p className="lead mt-5 text-indigo/70">{gallery.subtitle}</p>
        </div>

        <div className="mt-16 columns-2 gap-5 sm:columns-3 sm:gap-6 lg:columns-3">
          {gallery.items.map((item) => (
            <div
              key={item.label}
              className={`mb-5 break-inside-avoid bg-indigo/10 sm:mb-6 ${
                item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <div className="flex h-full items-end bg-[linear-gradient(160deg,color-mix(in_srgb,var(--color-teal)_20%,transparent),color-mix(in_srgb,var(--color-indigo)_25%,transparent))] p-4">
                <span className="label text-indigo/70">[{item.label}]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

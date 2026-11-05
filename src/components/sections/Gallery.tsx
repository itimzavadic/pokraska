import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad section-rule bg-paper-2">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-section text-ink">{gallery.title}</h2>
          <p className="lead mt-4 text-ink-2">{gallery.subtitle}</p>
        </div>

        <div className="mt-12 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
          {gallery.items.map((item) => (
            <div
              key={item.label}
              className={`photo-frame mb-3 break-inside-avoid sm:mb-4 ${
                item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <div className="flex h-full items-end bg-[linear-gradient(160deg,var(--color-paper-3),var(--color-ink))] p-3">
                <span className="label text-plate-ink/80">[{item.label}]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

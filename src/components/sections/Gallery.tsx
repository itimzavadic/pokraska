import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {gallery.title}
          </h2>
          <p className="mt-3 text-indigo/70 sm:text-lg">{gallery.subtitle}</p>
        </div>

        <div className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
          {gallery.items.map((item) => (
            <div
              key={item.label}
              className={`mb-3 break-inside-avoid bg-indigo/15 sm:mb-4 ${
                item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <div className="flex h-full items-end bg-[linear-gradient(160deg,#0f9d8a33,#1a1f5c44)] p-3">
                <span className="text-sm font-semibold text-indigo/70">
                  [{item.label}]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

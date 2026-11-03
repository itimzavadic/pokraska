import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-pad relative overflow-hidden bg-ivory"
    >
      <div
        className="decorative-square -right-8 top-10 h-40 w-40 bg-orange/25"
        aria-hidden
      />
      <div
        className="decorative-square left-[8%] top-24 h-16 w-16 bg-indigo/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,138,26,0.18),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(42,47,122,0.08),_transparent_45%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-hot">
            Коммерческая покраска
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-indigo sm:text-5xl lg:text-[3.35rem]">
            {hero.h1}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-indigo/75 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacts" className="btn-orange">
              {hero.cta}
            </a>
            <a href="#lead" className="btn-ghost-indigo">
              {hero.secondary}
            </a>
          </div>
        </div>

        <div className="relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="aspect-[4/5] overflow-hidden bg-ivory-deep shadow-[0_24px_60px_rgba(42,47,122,0.12)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,_#ff8a1a_0%,_#ff8a1a_42%,_#2a2f7a_42%,_#2a2f7a_100%)] opacity-90" />
              <div className="relative">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Офисы · Склады · Ритейл
                </p>
                <p className="mt-2 max-w-xs text-sm text-white/85">
                  [Фото работ — плейсхолдер. Заменить на реальные объекты.]
                </p>
              </div>
              <div className="relative grid grid-cols-2 gap-3">
                <div className="bg-white/15 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wide text-orange-soft">
                    Срок
                  </p>
                  <p className="mt-1 font-display text-xl text-white">по договору</p>
                </div>
                <div className="bg-white/15 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wide text-orange-soft">
                    Гео
                  </p>
                  <p className="mt-1 font-display text-xl text-white">Минск</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-3 -left-3 h-16 w-16 bg-indigo"
            aria-hidden
          />
          <div
            className="absolute -right-3 -top-3 h-12 w-12 bg-orange"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

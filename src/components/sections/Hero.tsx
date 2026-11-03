import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-pad relative overflow-hidden bg-white"
    >
      <div
        className="decorative-square -right-8 top-10 h-40 w-40 bg-teal/20"
        aria-hidden
      />
      <div
        className="decorative-square left-[8%] top-24 h-16 w-16 bg-indigo/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(15,157,138,0.16),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(26,31,92,0.08),_transparent_45%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-hot">
            Для юридических лиц · {site.region}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-indigo sm:text-5xl lg:text-[3.2rem]">
            {hero.h1}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-indigo/75 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacts" className="btn-primary">
              {hero.cta}
            </a>
            <a href="#pricing" className="btn-ghost-indigo">
              {hero.secondary}
            </a>
          </div>
        </div>

        <div className="relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="aspect-[4/5] overflow-hidden bg-muted shadow-[0_24px_60px_rgba(26,31,92,0.12)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,_#0f9d8a_0%,_#0f9d8a_42%,_#1a1f5c_42%,_#1a1f5c_100%)] opacity-95" />
              <div className="relative">
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Птичники · Склады · Ангары
                </p>
                <p className="mt-2 max-w-xs text-sm text-white/85">
                  Побелка, покраска, мойка помещений и крыш — в короткие сроки.
                </p>
              </div>
              <div className="relative grid grid-cols-2 gap-3">
                <div className="bg-white/15 p-4">
                  <p className="text-xs uppercase tracking-wide text-teal-soft">
                    Плюс
                  </p>
                  <p className="mt-1 font-display text-xl text-white">
                    короткие сроки
                  </p>
                </div>
                <div className="bg-white/15 p-4">
                  <p className="text-xs uppercase tracking-wide text-teal-soft">
                    Гео
                  </p>
                  <p className="mt-1 font-display text-xl text-white">
                    Витебская обл.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-3 -left-3 h-16 w-16 bg-indigo"
            aria-hidden
          />
          <div
            className="absolute -right-3 -top-3 h-12 w-12 bg-teal"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

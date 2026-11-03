import Image from "next/image";
import { hero, site } from "@/lib/content";
import { backgrounds } from "@/lib/backgrounds";
import { SectionBackdrop } from "@/components/SectionBackdrop";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-pad relative overflow-hidden bg-white"
    >
      <SectionBackdrop src={backgrounds.warehouse} tone="light" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-hot">
            Для юридических лиц · {site.region}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-indigo sm:text-5xl lg:text-[3.2rem]">
            {hero.h1}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-indigo/80 sm:text-lg">
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
          <div className="relative aspect-[4/5] overflow-hidden shadow-[0_24px_60px_rgba(26,31,92,0.18)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={backgrounds.hangar}
              alt="Окрашенное промышленное помещение"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover brightness-[0.85] saturate-[0.7]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(15,157,138,0.55)_0%,rgba(18,22,63,0.7)_100%)]" />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Птичники · Склады · Ангары
                </p>
                <p className="mt-2 max-w-xs text-sm text-white/90">
                  Побелка, покраска, мойка помещений и крыш — в короткие сроки.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/15 p-4 backdrop-blur-[2px]">
                  <p className="text-xs uppercase tracking-wide text-teal-soft">
                    Плюс
                  </p>
                  <p className="mt-1 font-display text-xl text-white">
                    короткие сроки
                  </p>
                </div>
                <div className="bg-white/15 p-4 backdrop-blur-[2px]">
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
        </div>
      </div>
    </section>
  );
}

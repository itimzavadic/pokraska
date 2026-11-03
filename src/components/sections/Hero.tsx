import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-indigo-deep"
    >
      <div className="relative h-[clamp(26rem,62vw,40rem)] sm:h-[clamp(28rem,48vw,38rem)]">
        <Image
          src="/images/bg/hero-paint.jpg"
          alt="Промышленная покраска конструкций"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,22,63,0.86)_0%,rgba(18,22,63,0.7)_42%,rgba(15,157,138,0.32)_72%,rgba(18,22,63,0.22)_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 py-14 sm:px-6 sm:py-20">
          <div className="reveal max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-teal-soft">
              {hero.eyebrow}
            </p>
            <h1 className="font-sans text-4xl font-extrabold tracking-tight leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
              {hero.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacts" className="btn-primary">
                {hero.cta}
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {hero.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

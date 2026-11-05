import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink">
      <div className="relative min-h-[min(72vh,36rem)] sm:min-h-[min(70vh,38rem)]">
        <Image
          src="/images/bg/hero-paint.jpg"
          alt="Промышленная покраска конструкций"
          fill
          priority
          sizes="100vw"
          className="photo-bw object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,color-mix(in_oklab,var(--color-ink)_92%,transparent)_0%,color-mix(in_oklab,var(--color-ink)_78%,transparent)_46%,color-mix(in_oklab,var(--color-ink)_35%,transparent)_100%)]"
          aria-hidden
        />

        <div className="container-site relative flex h-full min-h-[min(72vh,36rem)] items-end py-12 sm:min-h-[min(70vh,38rem)] sm:items-center sm:py-16">
          <div className="max-w-2xl pb-2">
            <p className="label mb-4 text-plate-ink/80">{hero.eyebrow}</p>
            <h1 className="font-display text-display text-plate-ink">
              {hero.h1}
            </h1>
            <p className="lead mt-5 text-plate-ink/90">{hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contacts" className="btn-primary">
                {hero.cta}
              </a>
              <a href="#pricing" className="btn-secondary bg-paper">
                {hero.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

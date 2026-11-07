import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-indigo-deep">
      <div className="relative min-h-[min(68vh,34rem)] sm:min-h-[min(64vh,36rem)]">
        <Image
          src="/images/bg/hero-paint.jpg"
          alt="Промышленная покраска конструкций"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,color-mix(in_srgb,var(--color-indigo-deep)_88%,transparent)_0%,color-mix(in_srgb,var(--color-indigo-deep)_72%,transparent)_48%,color-mix(in_srgb,var(--color-teal)_28%,transparent)_100%)]"
          aria-hidden
        />

        <div className="container-site relative flex h-full min-h-[min(68vh,34rem)] items-end py-14 sm:min-h-[min(64vh,36rem)] sm:items-center sm:py-20">
          <div className="reveal w-full min-w-0 max-w-2xl pb-1">
            <p className="label mb-5" style={{ color: "#f5f7ff" }}>{hero.eyebrow}</p>
            <h1 className="max-w-full font-sans text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {hero.h1}
            </h1>
            <p className="lead mt-6 max-w-full text-white/90">{hero.subtitle}</p>
            <div className="mt-10 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contacts" className="btn-primary w-full sm:w-auto">
                {hero.cta}
              </a>
              <a href="#pricing" className="btn-ghost-light w-full sm:w-auto">
                {hero.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

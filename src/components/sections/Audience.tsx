import { audience, site } from "@/lib/content";
import { SmartPicture } from "@/components/SmartPicture";

export function Audience() {
  return (
    <section id="objects" data-section className="section-pad bg-teal text-white">
      <div className="container-site flex min-w-0 flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">
        <div className="w-full min-w-0 flex-1">
          <p className="label mb-4 text-white/80">
            {site.city} и {site.region}
          </p>
          <h2 className="max-w-xl font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {audience.title}
          </h2>
          <p className="lead mt-6 max-w-xl text-white/90">{audience.subtitle}</p>

          <p className="mt-10 max-w-xl text-sm leading-relaxed text-white/85">
            <span className="font-semibold text-white">{audience.typesLabel}</span>{" "}
            {audience.types.join(", ")}.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[20rem] shrink-0 sm:max-w-[24rem] lg:mx-0 lg:max-w-[26rem] lg:pt-2">
          <div className="overflow-hidden border border-white/20">
            <SmartPicture
              src="/images/bg/audience.jpg"
              alt="Побелка производственного помещения"
              width={973}
              height={1024}
              sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 26rem"
              imgClassName="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

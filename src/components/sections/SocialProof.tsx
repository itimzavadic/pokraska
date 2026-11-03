import { proof } from "@/lib/content";

export function SocialProof() {
  return (
    <section id="proof" className="section-pad bg-teal text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {proof.title}
          </h2>
          <p className="mt-3 text-white/85 sm:text-lg">{proof.subtitle}</p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-6 border-b border-white/25 pb-8">
          {proof.stats.map((stat) => (
            <li key={stat.label} className="min-w-[8rem]">
              <p className="font-display text-3xl font-semibold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/80">{stat.label}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {proof.reviews.map((review) => (
            <li
              key={review.name + review.role}
              className="border border-white/25 bg-white/10 p-5"
            >
              <p className="text-sm leading-relaxed text-white/90">{review.text}</p>
              <p className="mt-4 font-semibold">{review.name}</p>
              <p className="text-xs text-white/70">{review.role}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["[Фото объекта 1]", "[Фото объекта 2]", "[Фото объекта 3]"].map(
            (label) => (
              <div
                key={label}
                className="flex aspect-[4/3] items-center justify-center bg-indigo/30 text-sm text-white/80"
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

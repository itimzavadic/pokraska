import { result } from "@/lib/content";

export function Result() {
  return (
    <section id="result" className="section-pad bg-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {result.title}
          </h2>
          <p className="mt-3 text-indigo/70 sm:text-lg">
            {result.subtitle}{" "}
            <span className="accent-word">без хаоса на объекте</span>
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {result.items.map((item, i) => (
            <li key={item.title} className="relative flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-indigo font-display text-sm font-bold text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-indigo">
                  {item.title}
                </h3>
                <p className="mt-2 text-indigo/70">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

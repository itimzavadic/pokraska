import { result } from "@/lib/content";

export function Result() {
  return (
    <section id="result" className="section-pad bg-white">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
            {result.title}
          </h2>
          <p className="lead mt-5 text-indigo/75">
            {result.subtitle}{" "}
            <span className="accent-word">в короткие сроки</span>
          </p>
        </div>

        <ul className="mt-16 grid gap-12 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-14">
          {result.items.map((item, i) => (
            <li key={item.title} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-indigo font-display text-sm font-bold text-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 pt-0.5">
                <h3 className="font-display text-xl font-semibold text-indigo">
                  {item.title}
                </h3>
                <p className="mt-3 text-indigo/75">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

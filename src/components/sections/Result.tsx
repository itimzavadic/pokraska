import { result } from "@/lib/content";

export function Result() {
  return (
    <section id="result" className="section-pad section-rule bg-paper-2">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="font-display text-section text-ink">{result.title}</h2>
          <p className="lead mt-4 text-ink-2">
            {result.subtitle}{" "}
            <span className="text-accent">в короткие сроки</span>
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {result.items.map((item, i) => (
            <li key={item.title} className="flex gap-4">
              <span className="font-outlier text-2xl text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-title text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-2">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-indigo/10 bg-white">
      <div
        className="decorative-square -left-3 top-0 h-16 w-16 bg-indigo/90 sm:h-20 sm:w-20"
        aria-hidden
      />
      <div
        className="decorative-square -right-2 bottom-0 h-12 w-12 bg-orange sm:h-16 sm:w-16"
        aria-hidden
      />
      <div
        className="decorative-square right-10 top-0 h-6 w-10 bg-indigo/40 sm:right-24"
        aria-hidden
      />
      <div
        className="decorative-square left-20 bottom-0 h-8 w-8 bg-orange/70"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center bg-indigo font-display text-lg font-bold text-orange transition group-hover:bg-indigo-deep">
            П
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-indigo sm:text-xl">
              {site.companyName}
            </p>
            <p className="text-xs text-indigo/60 sm:text-sm">{site.tagline}</p>
          </div>
        </a>

        <a href="#contacts" className="btn-orange text-sm sm:text-base">
          Связаться
        </a>
      </div>
    </header>
  );
}

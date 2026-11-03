import { site } from "@/lib/content";

export function Header() {
  return (
    <header className="relative overflow-hidden border-b border-indigo/10 bg-white">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center bg-indigo font-display text-lg font-bold text-teal transition group-hover:bg-indigo-deep">
            П
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-indigo sm:text-xl">
              {site.companyName}
            </p>
            <p className="text-xs text-indigo/60 sm:text-sm">{site.tagline}</p>
          </div>
        </a>

        <a href="#contacts" className="btn-primary text-sm sm:text-base">
          Связаться
        </a>
      </div>
    </header>
  );
}

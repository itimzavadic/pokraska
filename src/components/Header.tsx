"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { SideNav } from "./SideNav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[300] max-w-full overflow-x-clip border-b border-indigo/10 bg-white/95">
        <div className="container-site flex max-w-full items-center justify-between gap-3 py-4 sm:py-5">
          <a href="#hero" className="group flex min-w-0 flex-1 items-center gap-3 overflow-hidden pr-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-indigo font-display text-lg font-bold text-teal sm:h-11 sm:w-11">
              П
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate font-display text-lg font-semibold text-indigo sm:text-xl">
                {site.companyName}
              </p>
              <p className="hidden truncate text-xs text-indigo/55 sm:block sm:text-sm">
                {site.tagline}
              </p>
            </div>
          </a>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden text-sm font-semibold text-indigo hover:text-teal-hot md:inline"
            >
              {site.phone}
            </a>
            <a href="#contacts" className="btn-primary hidden text-sm sm:inline-flex">
              Связаться
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-indigo/15 text-indigo transition hover:border-teal hover:text-teal-hot"
              aria-label="Открыть меню"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <SideNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

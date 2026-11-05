"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { SideNav } from "./SideNav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[300] border-b-[3px] border-ink bg-paper/95">
        <div className="container-site flex items-center justify-between gap-4 py-4 sm:py-5">
          <a href="#hero" className="group min-w-0">
            <p className="font-display truncate text-xl text-ink sm:text-2xl">
              {site.companyName}
            </p>
            <p className="label mt-0.5 truncate text-ink-2">{site.tagline}</p>
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden font-outlier text-sm text-ink underline decoration-1 underline-offset-4 hover:text-accent md:inline"
            >
              {site.phone}
            </a>
            <a href="#contacts" className="btn-primary hidden sm:inline-flex">
              Связаться
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-plate text-ink"
              aria-label="Открыть меню"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-full bg-ink" />
                <span className="h-0.5 w-full bg-ink" />
                <span className="h-0.5 w-full bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <SideNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { SmartPicture } from "./SmartPicture";
import { SideNav } from "./SideNav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[300] max-w-full overflow-x-clip border-b border-indigo/10 bg-white/95 backdrop-blur-sm">
        <div className="container-site flex max-w-full items-center justify-between gap-3 py-3 sm:py-3.5">
          <a
            href="#hero"
            className="group flex min-w-0 flex-1 items-center gap-0 overflow-hidden pr-2"
          >
            <span className="flex min-w-0 flex-col font-sans text-base font-extrabold italic leading-[1.05] tracking-tight text-indigo sm:text-xl">
              <span>Красим</span>
              <span>Белим</span>
              <span>Моем</span>
            </span>
            <SmartPicture
              src="/images/logo.png"
              alt={site.companyName}
              width={200}
              height={112}
              priority
              imgClassName="-ml-3 -translate-y-1 h-12 w-auto shrink-0 object-contain sm:-ml-4 sm:h-14"
            />
          </a>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex h-10 items-center justify-center bg-teal px-3.5 text-sm font-semibold text-white transition hover:bg-teal-hot sm:px-4"
            >
              Позвонить
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-indigo/15 text-indigo transition hover:border-teal hover:text-teal-hot sm:h-11 sm:w-11"
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

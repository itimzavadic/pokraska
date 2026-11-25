"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { SmartPicture } from "./SmartPicture";
import { SideNav } from "./SideNav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    if (!header) return;

    const syncOffset = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty(
        "--header-offset",
        `${height}px`,
      );
    };

    syncOffset();
    const observer = new ResizeObserver(syncOffset);
    observer.observe(header);
    window.addEventListener("resize", syncOffset);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncOffset);
    };
  }, []);

  return (
    <>
      <header
        data-site-header
        className="sticky top-0 z-[300] max-w-full overflow-x-clip border-b border-indigo/10 bg-white/95 backdrop-blur-sm"
      >
        <div className="container-site flex max-w-full items-center justify-between gap-3 py-4 sm:py-5">
          <a
            href="#hero"
            className="group flex min-w-0 flex-1 items-center gap-0 overflow-hidden pr-2"
          >
            <span className="flex min-w-0 flex-col font-sans text-lg font-extrabold italic leading-[1.05] tracking-tight text-indigo sm:text-2xl">
              <span>Красим</span>
              <span>Белим</span>
              <span>Моем</span>
            </span>
            <SmartPicture
              src="/images/logo.png"
              alt={site.companyName}
              width={340}
              height={190}
              priority
              imgClassName="-ml-5 -translate-y-2 h-[5.25rem] w-auto shrink-0 object-contain sm:-ml-6 sm:-translate-y-2.5 sm:h-32"
            />
          </a>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex h-10 items-center justify-center rounded-full bg-teal px-4 text-sm font-semibold text-white transition hover:bg-teal-hot sm:h-11 sm:px-5"
            >
              Позвонить
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo/15 text-indigo transition hover:border-teal hover:text-teal-hot sm:h-11 sm:w-11"
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

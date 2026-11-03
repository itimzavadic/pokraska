"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

type NavId = (typeof navItems)[number]["id"];

export function BottomNav() {
  const [active, setActive] = useState<NavId>(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const id = visible[0]?.target.id as NavId | undefined;
        if (id) setActive(id);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-3 sm:bottom-6"
      aria-label="Навигация по разделам"
    >
      <div className="glass pointer-events-auto max-w-[min(96vw,56rem)] overflow-x-auto rounded-full px-2 py-2 shadow-lg">
        <ul className="flex min-w-max items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative block whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition sm:px-3.5 sm:text-sm ${
                    isActive
                      ? "bg-orange text-white nav-active-dot"
                      : "text-indigo/75 hover:bg-white/50 hover:text-indigo"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

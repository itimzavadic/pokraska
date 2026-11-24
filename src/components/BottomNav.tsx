"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";

export function BottomNav() {
  const [active, setActive] = useState<string>(navItems[0].id);

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        // Account for sticky header + bottom nav
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.08, 0.2, 0.4, 0.6],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[280] border-t border-indigo/10 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm"
      aria-label="Навигация по разделам"
    >
      <ul className="container-site flex items-stretch justify-between gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="min-w-0 flex-1">
              <a
                href={`#${item.id}`}
                className={`flex h-11 items-center justify-center whitespace-nowrap px-1 text-center text-[0.7rem] font-semibold tracking-wide transition sm:text-sm ${
                  isActive
                    ? "text-teal-hot"
                    : "text-indigo/55 hover:text-indigo"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`border-b-2 pb-0.5 ${
                    isActive ? "border-teal-hot" : "border-transparent"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

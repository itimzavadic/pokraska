"use client";

import { useEffect } from "react";
import { navItems, servicesNav, site } from "@/lib/content";

type SideNavProps = {
  open: boolean;
  onClose: () => void;
};

export function SideNav({ open, onClose }: SideNavProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[400] overflow-hidden transition ${
        open ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-indigo-deep/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        aria-label="Закрыть меню"
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[22rem] flex-col bg-white shadow-2xl transition-transform duration-220 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Навигация"
      >
        <div className="flex items-center justify-between border-b border-indigo/10 px-5 py-4">
          <p className="font-display text-lg font-semibold text-indigo">
            {site.companyName}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-2xl text-indigo"
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-hot">
              Услуги
            </p>
            <ul className="mt-3 space-y-2 border-l-2 border-teal/40 pl-4">
              {servicesNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block py-1 text-base font-medium text-indigo hover:text-teal-hot"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="block py-2.5 text-base font-semibold text-indigo hover:text-teal-hot"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-indigo/10 p-5">
          <a
            href={`tel:${site.phoneTel}`}
            className="block text-center text-sm font-semibold text-teal-hot"
          >
            {site.phone}
          </a>
          <a href="#contacts" onClick={onClose} className="btn-primary mt-3 w-full">
            Связаться
          </a>
        </div>
      </aside>
    </div>
  );
}

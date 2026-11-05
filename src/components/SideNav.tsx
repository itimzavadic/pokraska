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
        className={`absolute inset-0 bg-ink/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        aria-label="Закрыть меню"
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[22rem] flex-col border-l-[3px] border-ink bg-paper shadow-card transition-transform duration-220 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Навигация"
      >
        <div className="flex items-center justify-between border-b-2 border-ink px-5 py-4">
          <p className="font-display text-lg text-ink">{site.companyName}</p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center border-2 border-ink text-2xl text-ink"
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <div className="mb-8">
            <p className="label mb-3">Услуги</p>
            <ul className="space-y-2 border-l-[3px] border-accent pl-4">
              {servicesNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block py-1.5 font-body text-base font-medium text-ink underline-offset-4 hover:underline"
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
                  className="block py-2.5 font-display text-base text-ink hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t-2 border-ink p-5">
          <a
            href={`tel:${site.phoneTel}`}
            className="block text-center font-outlier text-sm text-ink underline"
          >
            {site.phone}
          </a>
          <a href="#contacts" onClick={onClose} className="btn-primary mt-4 w-full">
            Связаться
          </a>
        </div>
      </aside>
    </div>
  );
}

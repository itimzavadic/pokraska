"use client";

import { useEffect } from "react";
import { handleSectionLinkClick, scrollToSection } from "@/lib/scroll";

/** Intercepts all in-page hash links and initial #hash so section tops align under the header. */
export function AnchorScroll() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href^='#']");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.hasAttribute("data-native-hash")) return;
      handleSectionLinkClick(event, anchor.getAttribute("href") || "");
    }

    function syncFromHash() {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      // Wait a frame so layout/header height is ready
      requestAnimationFrame(() => {
        scrollToSection(id, { behavior: "auto" });
      });
    }

    document.addEventListener("click", onClick);
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  return null;
}

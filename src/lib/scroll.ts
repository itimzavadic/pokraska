/** Sticky header height — scroll targets align to the top of the section below it. */
export function getHeaderOffset(): number {
  if (typeof document === "undefined") return 72;
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  return Math.ceil(header?.getBoundingClientRect().height ?? 72);
}

export function scrollToSection(
  id: string,
  options?: { behavior?: ScrollBehavior },
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const behavior =
    options?.behavior ??
    (window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth");

  const top =
    el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({ top: Math.max(0, top), behavior });
  history.pushState(null, "", `#${id}`);
  return true;
}

export function handleSectionLinkClick(
  event: Pick<MouseEvent, "preventDefault" | "metaKey" | "ctrlKey" | "shiftKey" | "altKey" | "button">,
  href: string,
): boolean {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }
  if (!href.startsWith("#") || href === "#") return false;
  const id = href.slice(1);
  if (!id || !document.getElementById(id)) return false;
  event.preventDefault();
  return scrollToSection(id);
}

import { site } from "@/lib/content";

export function CallFab() {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className="glass-strong fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full text-indigo transition hover:scale-105 hover:text-orange-hot sm:bottom-28 sm:right-6 sm:h-16 sm:w-16"
      aria-label="Позвонить"
      title="Звонок"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 sm:h-7 sm:w-7"
        aria-hidden
      >
        <path
          d="M6.6 3.8c.4-.4 1-.5 1.5-.3l2.3 1c.5.2.8.7.8 1.2v2.2c0 .4-.2.8-.6 1-.7.5-1 1.2-.9 2 .3 1.8 1.7 3.2 3.5 3.5.8.1 1.5-.2 2-.9.2-.3.6-.5 1-.5h2.2c.5 0 1 .3 1.2.8l1 2.3c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.6.5-3.3-.5-6.4-2.3-8.7-4.6S4.9 9.3 4.4 6c-.1-.6.1-1.2.5-1.6L6.6 3.8Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}

import { site } from "@/lib/content";

type SocialIconsProps = {
  tone?: "onDark" | "onLight";
  size?: "md" | "sm";
};

export function SocialIcons({ tone = "onDark", size = "md" }: SocialIconsProps) {
  const box =
    size === "sm"
      ? "flex h-9 w-9 items-center justify-center rounded-full border transition"
      : "flex h-11 w-11 items-center justify-center rounded-full border transition";
  const iconClass =
    tone === "onLight"
      ? `${box} border-indigo/20 text-indigo hover:border-teal hover:bg-teal hover:text-white`
      : `${box} border-white/25 text-white hover:border-teal hover:bg-teal hover:text-white`;
  const svgClass = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const listClass = size === "sm" ? "flex flex-nowrap gap-2" : "flex flex-wrap gap-3";

  return (
    <ul className={listClass}>
      <li>
        <a
          href={site.social.viber}
          className={iconClass}
          aria-label="Viber"
          title="Viber"
        >
            <svg viewBox="0 0 24 24" className={svgClass} fill="currentColor" aria-hidden>
            <path d="M12.5 3C7.8 3 4 6.5 4 11c0 2 .7 3.8 1.9 5.2L4.5 21l4.9-1.3C10.5 20.2 11.5 20.5 12.5 20.5 17.2 20.5 21 17 21 12.5S17.2 3 12.5 3Zm3.2 12.1c-.2.5-1 .9-1.6 1-.4.1-.9.1-1.4 0-1.4-.3-2.9-1.2-4-2.5-1-1.1-1.7-2.5-1.9-3.3-.1-.4 0-.8.2-1.1.2-.3.5-.5.8-.7.2-.1.4 0 .5.1l1.1 1.6c.1.2.1.4 0 .6l-.4.6c-.1.1-.1.3 0 .4.4.7 1.1 1.4 1.9 1.9.2.1.3.1.4 0l.6-.4c.2-.1.4-.1.6 0l1.6 1.1c.2.1.2.3.1.5-.1.2-.3.5-.5.7Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={site.social.telegram}
          className={iconClass}
          aria-label="Telegram"
          title="Telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
            <svg viewBox="0 0 24 24" className={svgClass} fill="currentColor" aria-hidden>
            <path d="M21.5 4.3 3.8 11.1c-1.2.5-1.2 1.1-.2 1.4l4.5 1.4 1.7 5.3c.2.6.4.8 1 .8.6 0 .8-.3 1.1-.6l2.6-2.5 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.5-1.7-1.4-1.3Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={`mailto:${site.email}`}
          className={iconClass}
          aria-label="Почта"
          title="Почта"
        >
            <svg viewBox="0 0 24 24" className={svgClass} fill="currentColor" aria-hidden>
            <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm8 6.5L4.8 7.6h14.4L12 12.5Zm0 1.6 7.5-5.2V17H4.5V8.9L12 14.1Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={`tel:${site.phoneTel}`}
          className={iconClass}
          aria-label="Позвонить"
          title="Позвонить"
        >
            <svg viewBox="0 0 24 24" className={svgClass} fill="currentColor" aria-hidden>
            <path d="M6.6 3.8c.4-.4 1-.5 1.5-.3l2.3 1c.5.2.8.7.8 1.2v2.2c0 .4-.2.8-.6 1-.7.5-1 1.2-.9 2 .3 1.8 1.7 3.2 3.5 3.5.8.1 1.5-.2 2-.9.2-.3.6-.5 1-.5h2.2c.5 0 1 .3 1.2.8l1 2.3c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.6.5-3.3-.5-6.4-2.3-8.7-4.6S4.9 9.3 4.4 6c-.1-.6.1-1.2.5-1.6L6.6 3.8Z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

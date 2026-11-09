import { site } from "@/lib/content";

const iconClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-teal hover:bg-teal hover:text-white";

export function SocialIcons() {
  return (
    <ul className="flex flex-wrap gap-3">
      <li>
        <a
          href={site.social.viber}
          className={iconClass}
          aria-label="Viber"
          title="Viber"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
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
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M21.5 4.3 3.8 11.1c-1.2.5-1.2 1.1-.2 1.4l4.5 1.4 1.7 5.3c.2.6.4.8 1 .8.6 0 .8-.3 1.1-.6l2.6-2.5 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.5-1.7-1.4-1.3Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={site.social.instagram}
          className={iconClass}
          aria-label="Instagram"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm5.3-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.5c-2.3 0-2.6 0-3.5.1-2.3.1-3.9 1.7-4 4-.1.9-.1 1.2-.1 3.5s0 2.6.1 3.5c.1 2.3 1.7 3.9 4 4 .9.1 1.2.1 3.5.1s2.6 0 3.5-.1c2.3-.1 3.9-1.7 4-4 .1-.9.1-1.2.1-3.5s0-2.6-.1-3.5c-.1-2.3-1.7-3.9-4-4-.9-.1-1.2-.1-3.5-.1Zm0 1.5c2.2 0 2.5 0 3.4.1 1.7.1 2.5.9 2.6 2.6.1.9.1 1.1.1 3.3s0 2.5-.1 3.4c-.1 1.6-.9 2.5-2.6 2.6-.9.1-1.1.1-3.4.1s-2.5 0-3.4-.1c-1.7-.1-2.5-.9-2.6-2.6-.1-.9-.1-1.1-.1-3.4s0-2.5.1-3.4c.1-1.6.9-2.5 2.6-2.6.9 0 1.2-.1 3.4-.1Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={site.social.vk}
          className={iconClass}
          aria-label="ВКонтакте"
          title="ВКонтакте"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.586-1.496c.596-.19 1.363.98 2.175 1.413.614.328 1.08.256 1.08.256l2.17-.03s1.134-.07.597-.962c-.044-.073-.312-.657-1.607-1.857-1.356-1.256-1.174-1.053.458-3.226.994-1.323 1.391-2.132 1.267-2.478-.118-.33-.847-.243-.847-.243l-2.442.015s-.181-.025-.315.055c-.131.079-.216.262-.216.262s-.386 1.028-.9 1.902c-1.084 1.842-1.518 1.939-1.696 1.825-.414-.267-.31-1.072-.31-1.643 0-1.786.27-2.53-.528-2.723-.265-.064-.46-.107-1.137-.114-.87-.01-1.605.003-2.021.208-.277.137-.49.441-.36.458.161.021.525.098.718.362.25.34.24 1.104.24 1.104s.143 2.085-.334 2.343c-.328.178-.778-.185-1.744-1.85-.494-.85-.867-1.79-.867-1.79s-.072-.176-.2-.271c-.156-.115-.374-.151-.374-.151l-2.32.015s-.348.01-.476.161c-.114.134-.009.411-.009.411s1.815 4.247 3.868 6.385c1.883 1.962 4.023 1.833 4.023 1.833h.97Z" />
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
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm8 6.5L4.8 7.6h14.4L12 12.5Zm0 1.6 7.5-5.2V17H4.5V8.9L12 14.1Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={`tel:${site.phoneTel}`}
          className={iconClass}
          aria-label="Звонок"
          title="Звонок"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M6.6 3.8c.4-.4 1-.5 1.5-.3l2.3 1c.5.2.8.7.8 1.2v2.2c0 .4-.2.8-.6 1-.7.5-1 1.2-.9 2 .3 1.8 1.7 3.2 3.5 3.5.8.1 1.5-.2 2-.9.2-.3.6-.5 1-.5h2.2c.5 0 1 .3 1.2.8l1 2.3c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.6.5-3.3-.5-6.4-2.3-8.7-4.6S4.9 9.3 4.4 6c-.1-.6.1-1.2.5-1.6L6.6 3.8Z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

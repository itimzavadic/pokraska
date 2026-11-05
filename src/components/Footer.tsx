import { site } from "@/lib/content";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-paper-2">
      <div className="container-site grid gap-12 py-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-display text-2xl text-ink sm:text-3xl">
            {site.companyName}
          </p>
          <p className="mt-3 max-w-md text-ink-2">
            {site.tagline} ·{" "}
            <span className="text-accent">{site.city}</span> и {site.region}.{" "}
            {site.responseTime}
          </p>

          <div className="mt-6 space-y-2 text-sm text-ink">
            <p>
              <a
                href={`tel:${site.phoneTel}`}
                className="underline decoration-1 underline-offset-4 hover:text-accent"
              >
                {site.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-1 underline-offset-4 hover:text-accent"
              >
                {site.email}
              </a>
            </p>
            <p>{site.address}</p>
          </div>

          <div className="mt-10">
            <p className="font-display text-lg text-ink">Каналы связи</p>
            <p className="mt-2 text-sm text-ink-2">
              Напишите или позвоните — ответим в рабочее время
            </p>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="plate p-6 sm:p-8">
          <h2 className="font-display text-title text-ink">Заказать звонок</h2>
          <p className="mt-2 mb-5 text-sm text-ink-2">
            Оставьте имя и телефон — перезвоним в рабочее время.
          </p>
          <LeadCaptureForm variant="plate" submitLabel="Жду звонка" compact />
        </div>
      </div>

      <div className="border-t-[3px] border-ink bg-ink">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-plate-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.companyName}. {site.city}, {site.region}.
          </p>
          <p>УНП / юр. данные — [уточнить у заказчика]</p>
        </div>
      </div>
    </footer>
  );
}

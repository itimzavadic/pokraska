import { site } from "@/lib/content";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-indigo text-teal-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-display text-2xl font-semibold text-teal-soft sm:text-3xl">
            {site.companyName}
          </p>
          <p className="mt-2 max-w-md text-white/85">
            {site.tagline} ·{" "}
            <span className="text-teal-soft">{site.city}</span> и {site.region}.{" "}
            {site.responseTime}
          </p>

          <div className="mt-6 space-y-2 text-sm text-white">
            <p>
              <a href={`tel:${site.phoneTel}`} className="hover:text-teal-soft">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-teal-soft">
                {site.email}
              </a>
            </p>
            <p>{site.address}</p>
          </div>

          <div className="mt-10 rounded-xl border border-teal/40 bg-indigo-deep/50 p-5">
            <p className="font-display text-xl font-semibold text-teal-soft sm:text-2xl">
              Каналы связи
            </p>
            <p className="mt-2 text-sm text-white/75">
              Напишите или позвоните — ответим в рабочее время
            </p>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-indigo-deep/40 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-teal-soft sm:text-2xl">
            Заказать звонок
          </h2>
          <p className="mt-2 mb-5 text-sm text-white/80">
            Оставьте имя и телефон — перезвоним в рабочее время.
          </p>
          <LeadCaptureForm
            variant="indigo"
            submitLabel="Жду звонка"
            compact
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © 2026 {site.companyName}. {site.city}, {site.region}.
          </p>
          <p>УНП / юр. данные — [уточнить у заказчика]</p>
        </div>
      </div>
    </footer>
  );
}

import { site } from "@/lib/content";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-indigo text-teal-soft">
      <div className="container-site grid gap-16 py-16 lg:grid-cols-2 lg:gap-20">
        <div className="min-w-0">
          <p className="font-display text-2xl font-semibold text-teal-soft sm:text-3xl">
            {site.companyName}
          </p>
          <p className="mt-4 max-w-md text-white/85">
            {site.tagline} ·{" "}
            <span className="text-teal-soft">{site.city}</span> и {site.region}.{" "}
            {site.responseTime}
          </p>

          <div className="mt-8 space-y-3 text-sm text-white">
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

          <div className="mt-12">
            <p className="font-display text-xl font-semibold text-teal-soft">
              Каналы связи
            </p>
            <p className="mt-3 text-sm text-white/70">
              Напишите или позвоните — ответим в рабочее время
            </p>
            <div className="mt-5">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="min-w-0 border border-white/15 p-7 sm:p-9">
          <h2 className="font-display text-xl font-semibold text-teal-soft sm:text-2xl">
            Заказать звонок
          </h2>
          <p className="mt-3 mb-7 text-sm text-white/80">
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
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.companyName}. {site.city}, {site.region}.
          </p>
          <p>УНП / юр. данные — [уточнить у заказчика]</p>
        </div>
      </div>
    </footer>
  );
}

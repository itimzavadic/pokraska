import { site } from "@/lib/content";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-indigo text-orange">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-display text-2xl font-semibold text-orange sm:text-3xl">
            {site.companyName}
          </p>
          <p className="mt-2 max-w-md text-white/85">
            {site.tagline} в {site.city}. {site.responseTime}
          </p>

          <div className="mt-6 space-y-2 text-sm text-white">
            <p>
              <a href={`tel:${site.phoneTel}`} className="hover:text-orange">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-orange">
                {site.email}
              </a>
            </p>
            <p>{site.address}</p>
            <p className="text-white/70">{site.workHours}</p>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange">
              Связь
            </p>
            <SocialIcons />
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-indigo-deep/40 p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-orange sm:text-2xl">
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
            © 2026 {site.companyName}. Прототип лендинга.
          </p>
          <p>УНП / юр. данные — [уточнить у заказчика]</p>
        </div>
      </div>
    </footer>
  );
}

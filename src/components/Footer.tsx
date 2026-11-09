import { site } from "@/lib/content";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-indigo text-teal-soft">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div className="min-w-0 max-w-xl">
          <p className="font-display text-2xl font-semibold text-teal-soft sm:text-3xl">
            {site.companyName}
          </p>
          <p className="mt-4 max-w-md text-white/85">
            {site.tagline} ·{" "}
            <span className="text-teal-soft">{site.city}</span> и {site.region}.{" "}
            {site.responseTime}
          </p>

          <div className="mt-8 space-y-3 text-sm text-white">
            <p>{site.ownerName}</p>
            <p className="text-white/70">{site.legalStatus}</p>
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
            <p>{site.addressFull}</p>
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-display text-xl font-semibold text-teal-soft">
            Каналы связи
          </p>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Напишите или позвоните — ответим в рабочее время
          </p>
          <div className="mt-5">
            <SocialIcons />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.ownerName}. {site.companyName}. {site.city},{" "}
            {site.region}.
          </p>
          <p>{site.legalStatus}</p>
        </div>
      </div>
    </footer>
  );
}

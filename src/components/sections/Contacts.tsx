import { contacts, site } from "@/lib/content";
import { backgrounds } from "@/lib/backgrounds";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SectionBackdrop } from "@/components/SectionBackdrop";

export function Contacts() {
  return (
    <section id="contacts" className="section-pad relative overflow-hidden">
      <SectionBackdrop src={backgrounds.wash} tone="light" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden border border-indigo/10 bg-white/85 backdrop-blur-[2px]">
          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
                {contacts.title}
              </h2>
              <p className="mt-3 text-indigo/75 sm:text-lg">{contacts.subtitle}</p>

              <dl className="mt-8 space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-semibold text-teal-hot">Телефон</dt>
                  <dd>
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="text-indigo hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-teal-hot">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-indigo hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-teal-hot">Адрес</dt>
                  <dd className="text-indigo">{site.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-teal-hot">Регион</dt>
                  <dd className="text-indigo">{site.region}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-teal-hot">Режим</dt>
                  <dd className="text-indigo">{site.workHours}</dd>
                </div>
              </dl>

              <a href={`tel:${site.phoneTel}`} className="btn-primary mt-8 inline-flex">
                {contacts.cta}
              </a>
            </div>

            <div className="bg-teal p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                Финальная заявка
              </h3>
              <p className="mt-2 mb-5 text-sm text-white/90">
                Напишите об объекте организации — вернёмся с расчётом сроков и
                стоимости.
              </p>
              <LeadCaptureForm variant="teal" submitLabel="Отправить" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

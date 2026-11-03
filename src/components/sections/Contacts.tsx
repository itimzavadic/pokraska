import { contacts, site } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function Contacts() {
  return (
    <section id="contacts" className="section-pad bg-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden border border-indigo/10 bg-white">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
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
                  <dd className="text-indigo">
                    <span className="font-semibold text-teal-hot">{site.city}</span>
                    {" и "}
                    {site.region}
                  </dd>
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

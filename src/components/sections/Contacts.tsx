import { contacts, site } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SmartPicture } from "@/components/SmartPicture";

export function Contacts() {
  return (
    <section id="contacts" className="relative scroll-mt-28 overflow-hidden bg-indigo-deep">
      <div className="relative">
        <SmartPicture
          src="/images/bg/hero-paint.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="object-cover object-center opacity-45"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,color-mix(in_srgb,var(--color-indigo-deep)_88%,transparent)_0%,color-mix(in_srgb,var(--color-indigo-deep)_70%,transparent)_55%,color-mix(in_srgb,var(--color-teal)_35%,transparent)_100%)]"
          aria-hidden
        />

        <div className="container-site relative py-16 sm:py-20">
          <div className="bg-white p-8 sm:p-12">
            <div className="min-w-0 max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
                {contacts.title}
              </h2>
              <p className="lead mt-5 text-indigo/80">{contacts.subtitle}</p>

              <dl className="mt-10 space-y-6 text-sm sm:text-base">
                <div>
                  <dt className="label text-teal-hot">Исполнитель</dt>
                  <dd className="mt-1.5 font-semibold text-indigo">
                    {site.ownerName}
                  </dd>
                </div>
                <div>
                  <dt className="label text-teal-hot">Телефон / Viber / Telegram</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="font-semibold text-indigo hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-teal-hot">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-indigo hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-teal-hot">Адрес</dt>
                  <dd className="mt-1.5 text-indigo">{site.addressFull}</dd>
                </div>
                <div>
                  <dt className="label text-teal-hot">Регион работ</dt>
                  <dd className="mt-1.5 text-indigo">
                    <span className="font-semibold text-teal-hot">{site.city}</span>
                    {" и "}
                    {site.region}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-12 min-w-0 max-w-2xl bg-teal p-7 text-white sm:mt-14 sm:p-9">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                Финальная заявка
              </h3>
              <p className="mt-3 mb-7 text-sm text-white/90">
                Напишите нам — вернёмся с расчётом сроков и стоимости.
              </p>
              <LeadCaptureForm variant="teal" submitLabel="Отправить" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

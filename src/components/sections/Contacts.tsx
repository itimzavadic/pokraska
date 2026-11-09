import Image from "next/image";
import { contacts, site } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function Contacts() {
  return (
    <section id="contacts" className="relative overflow-hidden bg-indigo-deep">
      <div className="relative">
        <Image
          src="/images/bg/hero-paint.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,color-mix(in_srgb,var(--color-indigo-deep)_88%,transparent)_0%,color-mix(in_srgb,var(--color-indigo-deep)_70%,transparent)_55%,color-mix(in_srgb,var(--color-teal)_35%,transparent)_100%)]"
          aria-hidden
        />

        <div className="container-site relative py-16 sm:py-20">
          <div className="grid gap-14 bg-white p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
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
                  <dd className="mt-1 text-sm text-indigo/70">
                    {site.legalStatus}
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

              <a
                href={`tel:${site.phoneTel}`}
                className="btn-primary mt-10 inline-flex"
              >
                {contacts.cta}
              </a>
            </div>

            <div className="min-w-0 bg-teal p-7 text-white sm:p-9">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                Финальная заявка
              </h3>
              <p className="mt-3 mb-7 text-sm text-white/90">
                Напишите об объекте — вернёмся с расчётом сроков и стоимости.
              </p>
              <LeadCaptureForm variant="teal" submitLabel="Отправить" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

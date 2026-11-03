import Image from "next/image";
import { contacts, site } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function Contacts() {
  return (
    <section id="contacts" className="relative overflow-hidden">
      <Image
        src="/images/bg/hero-paint.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_40%] scale-[0.92] origin-center"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(18,22,63,0.9)_0%,rgba(18,22,63,0.78)_48%,rgba(15,157,138,0.55)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-[var(--section-pad)] sm:px-6">
        <div className="overflow-hidden border border-white/20 bg-white/95 backdrop-blur-[2px]">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold text-indigo sm:text-4xl">
                {contacts.title}
              </h2>
              <p className="mt-3 text-indigo/75 sm:text-lg">{contacts.subtitle}</p>

              <dl className="mt-8 space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-semibold text-teal-hot">
                    Телефон (свяжитесь с нами)
                  </dt>
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

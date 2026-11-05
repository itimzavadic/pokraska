import Image from "next/image";
import { contacts, site } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function Contacts() {
  return (
    <section id="contacts" className="relative overflow-hidden bg-ink">
      <div className="relative">
        <Image
          src="/images/bg/hero-paint.jpg"
          alt=""
          fill
          sizes="100vw"
          className="photo-bw object-cover object-center opacity-40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(115deg,color-mix(in_oklab,var(--color-ink)_92%,transparent)_0%,color-mix(in_oklab,var(--color-ink)_75%,transparent)_55%,color-mix(in_oklab,var(--color-ink)_55%,transparent)_100%)]"
          aria-hidden
        />

        <div className="container-site relative py-14 sm:py-16">
          <div className="plate overflow-hidden">
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-section text-ink">
                  {contacts.title}
                </h2>
                <p className="lead mt-4 text-ink-2">{contacts.subtitle}</p>

                <dl className="mt-8 space-y-5 text-sm sm:text-base">
                  <div>
                    <dt className="label">Телефон</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${site.phoneTel}`}
                        className="font-outlier text-lg text-ink underline decoration-1 underline-offset-4 hover:text-accent"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${site.email}`}
                        className="text-ink underline decoration-1 underline-offset-4 hover:text-accent"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Адрес</dt>
                    <dd className="mt-1 text-ink">{site.address}</dd>
                  </div>
                  <div>
                    <dt className="label">Регион</dt>
                    <dd className="mt-1 text-ink">
                      <span className="text-accent">{site.city}</span>
                      {" и "}
                      {site.region}
                    </dd>
                  </div>
                </dl>

                <a
                  href={`tel:${site.phoneTel}`}
                  className="btn-primary mt-8 inline-flex"
                >
                  {contacts.cta}
                </a>
              </div>

              <div className="border-[3px] border-ink bg-paper p-6 sm:p-8">
                <h3 className="font-display text-title text-ink">
                  Финальная заявка
                </h3>
                <p className="mt-2 mb-5 text-sm text-ink-2">
                  Напишите об объекте организации — вернёмся с расчётом сроков и
                  стоимости.
                </p>
                <LeadCaptureForm variant="plate" submitLabel="Отправить" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { leadForm } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function Lead() {
  return (
    <section id="lead" className="section-pad band-ink">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <h2 className="font-display text-section text-plate-ink">
            {leadForm.title}
          </h2>
          <p className="lead mt-4 text-plate-ink/85">{leadForm.subtitle}</p>
          <ul className="mt-8 space-y-3 text-lg text-plate-ink/90">
            <li>— Для юридических лиц</li>
            <li>— Короткие сроки работ</li>
            <li>— Выезд по Витебской области</li>
          </ul>
        </div>
        <div className="plate p-6 sm:p-8">
          <LeadCaptureForm variant="plate" submitLabel={leadForm.button} />
        </div>
      </div>
    </section>
  );
}

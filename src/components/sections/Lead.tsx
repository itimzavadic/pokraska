import { leadForm } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function Lead() {
  return (
    <section id="lead" className="section-pad bg-teal text-white">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div className="min-w-0">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {leadForm.title}
          </h2>
          <p className="lead mt-5 text-white/90">{leadForm.subtitle}</p>
          <ul className="mt-10 space-y-4 text-lg text-white/95">
            <li>— Короткие сроки работ</li>
            <li>— Выезд по Витебской области</li>
            <li>— Договор и прозрачная смета</li>
          </ul>
        </div>
        <div className="border border-white/20 bg-white/10 p-7 sm:p-10">
          <LeadCaptureForm variant="teal" submitLabel={leadForm.button} />
        </div>
      </div>
    </section>
  );
}

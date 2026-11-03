import { leadForm } from "@/lib/content";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export function Lead() {
  return (
    <section id="lead" className="section-pad bg-orange text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {leadForm.title}
          </h2>
          <p className="mt-3 max-w-md text-white/85 sm:text-lg">
            {leadForm.subtitle}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/90">
            <li>— Бесплатная консультация по телефону</li>
            <li>— Ориентир по срокам в день обращения</li>
            <li>— Выезд на объект [уточнить условия]</li>
          </ul>
        </div>
        <div className="border border-white/25 bg-white/10 p-6 backdrop-blur-[2px] sm:p-8">
          <LeadCaptureForm variant="orange" submitLabel={leadForm.button} />
        </div>
      </div>
    </section>
  );
}

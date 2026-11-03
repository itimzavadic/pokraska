import { site } from "@/lib/content";

export function TopBar() {
  return (
    <div className="bg-orange text-white text-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 sm:px-6">
        <p className="font-medium tracking-wide">
          {site.companyName} · покраска коммерческих помещений · {site.city}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 opacity-95">
          <a href={`tel:${site.phoneTel}`} className="hover:underline">
            {site.phone}
          </a>
          <span className="hidden sm:inline">{site.workHours}</span>
        </div>
      </div>
    </div>
  );
}

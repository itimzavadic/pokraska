import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: new Date("2026-11-24"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.domain}/privacy`,
      lastModified: new Date("2026-11-24"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

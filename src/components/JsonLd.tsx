import { faq, site } from "@/lib/content";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: site.companyName,
    description: `${site.tagline} в ${site.city}`,
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressCountry: "BY",
    },
    areaServed: site.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    image: `${site.domain}/og-placeholder.png`,
  };

  const paintingService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: site.tagline,
    serviceType: "Покраска коммерческих помещений",
    provider: {
      "@type": "LocalBusiness",
      name: site.companyName,
    },
    areaServed: site.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paintingService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

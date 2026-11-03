import { faq, pricing, site } from "@/lib/content";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: site.companyName,
    description: `${site.tagline} в ${site.city} и ${site.region}`,
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "BY",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: site.region,
      },
      {
        "@type": "City",
        name: site.city,
      },
      ...site.areaServed
        .filter((name) => name !== site.region && name !== site.city)
        .map((city) => ({
          "@type": "City",
          name: city,
        })),
    ],
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    image: `${site.domain}/images/bg/hero-paint.jpg`,
  };

  const services = pricing.items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.service,
    description: item.description,
    provider: {
      "@type": "LocalBusiness",
      name: site.companyName,
    },
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "AdministrativeArea", name: site.region },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "BYN",
      description: item.price,
    },
  }));

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
      {services.map((service) => (
        <script
          key={service.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

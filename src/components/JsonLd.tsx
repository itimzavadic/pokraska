import { audience, faq, pricing, site } from "@/lib/content";

export function JsonLd() {
  const serviceName = "Побелка производственных помещений";
  const serviceDescription = `${serviceName} в ${site.city} и ${site.region}: птичники, коровники, свинарники, склады, ангары, цеха и хранилища. Подготовка и мойка поверхностей, побелка стен и потолков.`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.domain}/#business`,
    name: site.companyName,
    description: serviceDescription,
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Полоцк",
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: "BY",
    },
    founder: {
      "@type": "Person",
      name: site.ownerName,
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
    priceRange: "от 3 BYN/м²",
    image: `${site.domain}/images/bg/hero-paint.jpg`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Виды объектов для побелки",
      itemListElement: audience.items.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: `Побелка: ${item.title}`,
          description: item.text,
          url: `${site.domain}/#${item.id}`,
        },
      })),
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.domain}/#service-whitewash`,
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@id": `${site.domain}/#business`,
    },
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "AdministrativeArea", name: site.region },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "BYN",
      price: "3",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "BYN",
        price: "3",
        unitText: "м²",
        description: pricing.minOrder,
      },
      description: pricing.items[0]?.price,
      url: `${site.domain}/#pricing`,
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.domain}/#webpage`,
    url: site.domain,
    name: `${site.tagline} в ${site.city}`,
    description: serviceDescription,
    isPartOf: {
      "@type": "WebSite",
      name: site.companyName,
      url: site.domain,
    },
    about: { "@id": `${site.domain}/#service-whitewash` },
    mainEntity: { "@id": `${site.domain}/#service-whitewash` },
    inLanguage: "ru-BY",
  };

  const objectList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Виды объектов для побелки",
    itemListElement: audience.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${site.domain}/#${item.id}`,
      description: item.text,
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

  const payloads = [localBusiness, service, webPage, objectList, faqPage];

  return (
    <>
      {payloads.map((payload, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
        />
      ))}
    </>
  );
}

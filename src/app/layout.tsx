import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const GTM_ID = "GTM-MRZKL2GW";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const title = `Побелка производственных помещений в ${site.city} | ${site.companyName}`;
const description = `Побелка производственных помещений в ${site.city} и ${site.region}: побелка складов, цехов, ангаров, птичников, коровников и хранилищ. Подготовка поверхностей, побелка стен и потолков, короткие сроки. Звоните ${site.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: title,
    template: `%s | ${site.companyName}`,
  },
  description,
  keywords: [
    "побелка производственных помещений",
    `побелка производственных помещений ${site.city}`,
    `побелка производственных помещений ${site.region}`,
    `побелка складов ${site.city}`,
    `побелка цехов ${site.city}`,
    `побелка ангаров ${site.region}`,
    `побелка птичников ${site.city}`,
    `побелка коровников ${site.region}`,
    `побелка свинарников ${site.city}`,
    `побелка ферм ${site.region}`,
    `побелка стен и потолков ${site.city}`,
    "побелка промышленных помещений",
    site.city,
    site.region,
    site.companyName,
  ],
  authors: [{ name: site.companyName }],
  openGraph: {
    type: "website",
    locale: "ru_BY",
    url: site.domain,
    siteName: site.companyName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.domain,
  },
  other: {
    "geo.region": "BY-VI",
    "geo.placename": `${site.city}, ${site.region}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </head>
      <body className="min-h-full bg-white text-indigo">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

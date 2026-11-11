import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

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

const title = `${site.tagline} в ${site.city} | ${site.companyName}`;
const description = `${site.tagline} в ${site.city} и ${site.region}. Красим стены, потолки и конструкции складов, птичников и ангаров. Короткие сроки. Звоните ${site.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: title,
    template: `%s | ${site.companyName}`,
  },
  description,
  keywords: [
    `покраска складов ${site.city}`,
    `покраска производственных помещений ${site.region}`,
    `побелка помещений ${site.city}`,
    `мойка птичников ${site.region}`,
    `мойка крыш ${site.city}`,
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
      <body className="min-h-full bg-white text-indigo">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

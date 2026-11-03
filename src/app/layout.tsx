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
const description = `${site.tagline} в ${site.city}: офисы, склады, торговые площади. Аккуратная работа в срок, прозрачная смета. Звоните ${site.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: title,
    template: `%s | ${site.companyName}`,
  },
  description,
  keywords: [
    `покраска коммерческих помещений ${site.city}`,
    `покраска офисов ${site.city}`,
    "малярные работы для бизнеса",
    "покраска склада",
    "покраска торгового центра",
    site.city,
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
    "geo.region": "BY-MI",
    "geo.placename": site.city,
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
      <body className="min-h-full bg-ivory text-indigo">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

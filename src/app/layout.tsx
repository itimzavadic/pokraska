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

const title = `${site.tagline} в ${site.region} | ${site.companyName}`;
const description = `${site.tagline} в ${site.region}: птичники, склады, ангары, аграрные хранилища. Короткие сроки. Для юридических лиц. Звоните ${site.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: title,
    template: `%s | ${site.companyName}`,
  },
  description,
  keywords: [
    `побелка производственных помещений ${site.region}`,
    `покраска складов ${site.city}`,
    `мойка птичников ${site.region}`,
    `мойка крыш ${site.region}`,
    "побелка ангаров",
    "покраска производственных помещений",
    site.region,
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
    "geo.region": "BY-VI",
    "geo.placename": site.region,
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

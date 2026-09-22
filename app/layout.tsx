import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lvpvending.com"),
  title: "LVP Vending - Smart Vending Services",
  description: "Bring a modern cashless vending experience to your workplace as a free amenity. Zero hassle, locally serviced across the Lehigh Valley.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/lvp-favicon.svg",
    shortcut: "/lvp-favicon.svg",
    apple: "/lvp-favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "LVP Vending",
    url: "https://www.lvpvending.com",
    title: "LVP Vending - Smart Vending Services",
    description: "Bring a modern cashless vending experience to your workplace as a free amenity. Zero hassle, locally serviced across the Lehigh Valley.",
    images: [
      {
        url: "/LVPVendingSmartProDemo1.jpg",
        alt: "LVP Smart Pro cooler stocked with food and drinks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LVP Vending - Smart Vending Services",
    description: "Bring a modern cashless vending experience to your workplace as a free amenity. Zero hassle, locally serviced across the Lehigh Valley.",
    images: ["/LVPVendingSmartProDemo1.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LVP Vending",
  url: "https://www.lvpvending.com",
  logo: "https://www.lvpvending.com/lvp-favicon.svg",
  email: "info@lvpvending.com",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Lehigh County, Pennsylvania" },
    { "@type": "AdministrativeArea", name: "Northampton County, Pennsylvania" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-white text-lvp-navy font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}

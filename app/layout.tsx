import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LVP Vending - Smart Vending Services",
  description: "Bring a modern cashless vending experience to your workplace as a free amenity. Zero hassle, locally serviced across the Lehigh Valley.",
  icons: {
    icon: "/lvp-favicon.svg",
    shortcut: "/lvp-favicon.svg",
    apple: "/lvp-favicon.svg",
  },
  openGraph: {
    title: "LVP Vending - Smart Vending Services",
    description: "Bring a modern cashless vending experience to your workplace as a free amenity. Zero hassle, locally serviced across the Lehigh Valley.",
  },
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}

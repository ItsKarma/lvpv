import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LVP Vending - Pokémon Card & AI Smart Vending Machines",
  description: "Earn passive income with Pokémon booster pack vending and AI-powered cashless smart vending machines. Zero hassle, 10% of every sale.",
  icons: {
    icon: "/lvp-favicon.svg",
    shortcut: "/lvp-favicon.svg",
    apple: "/lvp-favicon.svg",
  },
  openGraph: {
    title: "LVP Vending - Pokémon Card & AI Smart Vending Machines",
    description: "Earn passive income with Pokémon booster pack vending and AI-powered cashless smart vending machines.",
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

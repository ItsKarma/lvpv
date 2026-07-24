import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LVP Vending - Premium Trading Card Vending",
  description: "Earn passive income with authentic Pokémon booster pack vending machines. Zero hassle, 10% of every sale.",
  icons: {
    icon: "/lvp-favicon.svg",
    shortcut: "/lvp-favicon.svg",
    apple: "/lvp-favicon.svg",
  },
  openGraph: {
    title: "LVP Vending - Premium Trading Card Vending",
    description: "Earn passive income with authentic Pokémon booster pack vending machines",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-white text-lvp-navy">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

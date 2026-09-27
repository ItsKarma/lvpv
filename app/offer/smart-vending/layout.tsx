import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Smart Vending for Your Break Room | LVP Vending',
  description:
    'Get a modern, refrigerated tap-and-go smart cooler installed at your Lehigh Valley business at no cost. We install, stock, and service it. Tell us about your location.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/offer/smart-vending',
  },
};

export default function SmartVendingOfferLayout({ children }: { children: React.ReactNode }) {
  return children;
}

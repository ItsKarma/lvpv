import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Vending | LVP Vending',
  description: 'Smart refrigerated vending with image recognition for food and drinks. Tap to unlock, grab what you want, and go.',
  alternates: {
    canonical: '/smart-vending',
  },
};

export default function SmartVendingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

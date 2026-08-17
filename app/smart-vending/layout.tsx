import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Vending | LVP Vending',
  description: 'Cashless, AI-powered refrigerated vending for food and drinks. Tap to unlock, grab what you want, and go.',
};

export default function SmartVendingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

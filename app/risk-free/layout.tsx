import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Risk-Free Trial | LVP Vending',
  description: 'Try an LVP Vending machine risk-free for 60 days. No binding contracts, and free removal within 48 hours if it is not a fit.',
};

export default function RiskFreeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

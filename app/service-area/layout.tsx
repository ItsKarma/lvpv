import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Area | LVP Vending',
  description: 'LVP Vending serves businesses across the Greater Lehigh Valley, including Allentown, Bethlehem, Easton, and surrounding areas.',
  alternates: {
    canonical: '/service-area',
  },
};

export default function ServiceAreaLayout({ children }: { children: React.ReactNode }) {
  return children;
}

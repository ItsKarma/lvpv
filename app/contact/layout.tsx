import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact LVP Vending',
  description:
    'Tell LVP Vending about your location and learn how to bring a free smart vending cooler to your business.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | LVP Vending',
  description: 'LVP Vending is a locally owned vending business serving the Lehigh Valley with smart food and drink coolers and Pokémon card vending machines.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

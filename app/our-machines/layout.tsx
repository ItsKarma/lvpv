import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Machines | LVP Vending',
  description: 'Explore LVP Vending machine sizes: Slim, Pro, and Double smart coolers for food and drink, plus Small and Standard Pokémon card vending machines.',
};

export default function OurMachinesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

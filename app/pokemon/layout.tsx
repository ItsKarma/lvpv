import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokémon Card Vending | LVP Vending',
  description: 'Earn passive income with authentic Pokémon booster pack vending machines. Zero hassle, 10% of every sale.',
};

export default function PokemonLayout({ children }: { children: React.ReactNode }) {
  return children;
}

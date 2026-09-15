import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokémon Pack Policy | LVP Vending',
  description: 'Learn how LVP Vending sources and handles Pokémon card packs for its vending machines.',
  alternates: {
    canonical: '/pokemon/authenticity',
  },
};

export default function PokemonAuthenticityLayout({ children }: { children: React.ReactNode }) {
  return children;
}

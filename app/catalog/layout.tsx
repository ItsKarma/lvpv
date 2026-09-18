import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Catalog | LVP Vending',
  description:
    'A printable catalog of the food and drink LVP Vending can stock in our smart coolers, including energy drinks, sodas, waters, protein drinks, snacks, candy, and more.',
  alternates: {
    canonical: '/catalog',
  },
};

export default function ProductCatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

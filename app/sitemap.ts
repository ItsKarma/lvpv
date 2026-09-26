import type { MetadataRoute } from 'next';
import { serviceCities } from '@/lib/serviceCities';

const baseUrl = 'https://www.lvpvending.com';

const staticRoutes = [
  '',
  '/about',
  '/brand-affiliation-disclaimer',
  '/contact',
  '/our-machines',
  '/catalog',
  '/pokemon',
  '/pokemon/authenticity',
  '/privacy-policy',
  '/risk-free',
  '/service-area',
  '/smart-vending',
  '/support',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
    })),
    ...serviceCities.map((city) => ({
      url: `${baseUrl}/service-area/${city.slug}`,
      lastModified: now,
    })),
  ];
}
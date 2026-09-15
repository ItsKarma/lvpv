import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/feedback/'],
    },
    sitemap: 'https://www.lvpvending.com/sitemap.xml',
    host: 'https://www.lvpvending.com',
  };
}
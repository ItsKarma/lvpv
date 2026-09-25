import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/feedback/', '/offer/'],
      },
      // Paid landing pages must stay crawlable for ad quality checks.
      {
        userAgent: ['AdsBot-Google', 'AdsBot-Google-Mobile'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.lvpvending.com/sitemap.xml',
    host: 'https://www.lvpvending.com',
  };
}
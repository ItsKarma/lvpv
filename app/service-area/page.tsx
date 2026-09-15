'use client';

import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/Section';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { serviceCities } from '@/lib/serviceCities';

export default function ServiceAreaPage() {
  return (
    <>
      <SiteHeader />

      <div className="bg-white pt-28 pb-4 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-black text-[#001F3F] md:text-6xl">
            Proudly Serving the Lehigh Valley
          </h1>
          <p className="text-lg leading-relaxed text-[#001F3F]">
            We install and service vending machines for businesses throughout the Greater Lehigh
            Valley, including:
          </p>
        </div>
      </div>

      <Section title="Where We Work" className="bg-[#f8fafc]">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {serviceCities.map((town) => (
            <Link
              key={town.slug}
              href={`/service-area/${town.slug}`}
              className="flex items-center gap-2 rounded-lg border border-[#001F3F]/15 bg-white px-4 py-3 text-[#001F3F] transition-colors hover:border-[#8F1024]/40 hover:text-[#8F1024]"
            >
              <MapPin size={18} className="flex-shrink-0 text-[#8F1024]" />
              <span className="font-medium">{town.name}, PA</span>
            </Link>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[#001F3F]">
          Not seeing your town? Reach out, we're happy to talk about locations across the Lehigh
          Valley.
        </p>
      </Section>

      <SiteFooter tagline="Automated Retail. Zero Hassle." />
    </>
  );
}

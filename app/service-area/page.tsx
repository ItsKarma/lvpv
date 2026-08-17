'use client';

import { MapPin } from 'lucide-react';
import Section from '@/components/Section';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const towns = [
  'Allentown, PA',
  'Bethlehem, PA',
  'Easton, PA',
  'Emmaus, PA',
  'Whitehall, PA',
  'Nazareth, PA',
  'Center Valley, PA',
  'Macungie, PA',
  'Trexlertown, PA',
];

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
          {towns.map((town) => (
            <div
              key={town}
              className="flex items-center gap-2 rounded-lg border border-[#001F3F]/15 bg-white px-4 py-3 text-[#001F3F]"
            >
              <MapPin size={18} className="flex-shrink-0 text-[#8F1024]" />
              <span className="font-medium">{town}</span>
            </div>
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

'use client';

import { MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import Section from '@/components/Section';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <div className="bg-white pt-28 pb-4 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-black text-[#001F3F] md:text-6xl">
            Local Vending, Done Right
          </h1>
          <p className="text-lg leading-relaxed text-[#001F3F]">
            LVP Vending is a locally owned vending business bringing modern, hassle-free machines to
            businesses across the Lehigh Valley.
          </p>
        </div>
      </div>

      <Section title="What We Do" className="bg-[#f8fafc]">
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#001F3F]">
          We install, stock, and maintain vending machines for local businesses at no cost to them.
          Whether it's a cashless smart cooler stocked with the food and drinks your team actually
          wants, or a Pokémon card machine for retail foot traffic, we handle every part of the
          experience so you don't have to.
        </p>
      </Section>

      <Section title="Why Businesses Choose Us" dark>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/20 bg-white p-6 text-center text-[#001F3F] shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <MapPin size={24} />
            </div>
            <h3 className="mb-3 text-xl font-black">Local & Responsive</h3>
            <p>Based in the Lehigh Valley, so support and service are never far away.</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white p-6 text-center text-[#001F3F] shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <ShieldCheck size={24} />
            </div>
            <h3 className="mb-3 text-xl font-black">Zero Hassle</h3>
            <p>We handle installation, restocking, repairs, and support, start to finish.</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white p-6 text-center text-[#001F3F] shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <Sparkles size={24} />
            </div>
            <h3 className="mb-3 text-xl font-black">Modern Experience</h3>
            <p>Cashless, well-stocked machines built for the way people shop today.</p>
          </div>
        </div>
      </Section>

      <SiteFooter tagline="Automated Retail. Zero Hassle." />
    </>
  );
}

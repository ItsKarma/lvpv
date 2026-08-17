'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function OurMachinesPage() {
  return (
    <>
      <SiteHeader />

      <div className="bg-white pt-28 pb-4 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#8F1024]">
            Two Product Lines. One Local Partner.
          </p>
          <h1 className="mb-4 text-4xl font-black text-[#001F3F] md:text-6xl">
            A Size For Every Location
          </h1>
          <p className="text-lg leading-relaxed text-[#001F3F]">
            Every machine is installed, stocked, and maintained by us, at no cost to you.
            <br />
            Choose the size that fits your space.
          </p>
        </div>
      </div>

      {/* Two Product Lines */}
      <Section className="bg-[#f8fafc]">
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="/smart-vending"
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#001F3F]/15 bg-white shadow-[0_10px_28px_rgba(0,31,63,0.06)] transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full bg-[#001F3F]">
              <Image
                src="/LVPVendingSmartSlimDemo1.jpg"
                alt="LVP Smart Slim AI vending machine"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8F1024]">
                Food &amp; Drink
              </p>
              <h3 className="mb-2 text-2xl font-black text-[#001F3F]">Smart Vending</h3>
              <p className="mb-4 text-[#001F3F]">
                A cashless, refrigerated grab-and-go cooler. Available in three sizes, Slim, Pro, and
                Double.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-[#8F1024]">
                Explore Smart Vending
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>

          <a
            href="/pokemon"
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#001F3F]/15 bg-white shadow-[0_10px_28px_rgba(0,31,63,0.06)] transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full bg-lvp-gray">
              <Image
                src="/LVPVendingPokemonMachine1.png"
                alt="LVP Vending Pokemon card machine"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>
            <div className="p-6 text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8F1024]">
                Trading Cards
              </p>
              <h3 className="mb-2 text-2xl font-black text-[#001F3F]">Pokémon Card Vending</h3>
              <p className="mb-4 text-[#001F3F]">
                Authentic booster pack vending, available in Small and Standard sizes for any location.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-[#8F1024]">
                Explore Pokémon Vending
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" title="Get Your Free Machine">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg text-[#001F3F] mb-8">
            Tell us about your space and we'll help you pick the right size and product line.
          </p>
          <ContactForm buttonLabel="Request a Free Machine" />
        </div>
      </Section>

      <SiteFooter tagline="Automated Retail. Zero Hassle." />
    </>
  );
}

'use client';

import { CreditCard, DollarSign, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <Hero
        title={
          <>
            Lehigh Valley's Premier
            <br />
            Vending Solution
          </>
        }
        titleClassName="text-4xl md:text-6xl font-black text-lvp-navy leading-tight tracking-tight"
        subtitle="Get A Free Machine For Your Business"
        features={['Zero Cost to You', 'We Handle Everything', 'Locally Owned & Operated']}
        ctaText="Request a Free Machine"
        ctaHref="#contact"
      />

      {/* Machine Showcase */}
      <section className="bg-white px-4 pb-12 pt-2 md:pb-16 md:pt-4">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(0,31,63,0.08)]">
            <Image
              src="/LVPVendingSmartProDemo1.jpg"
              alt="LVP Smart Pro vending machine"
              fill
              priority
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(0,31,63,0.08)]">
            <Image
              src="/LVPVendingPokemonMachine1.png"
              alt="LVP Pokemon card vending machine"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover object-[center_35%]"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(0,31,63,0.08)]">
            <Image
              src="/LVPVendingSmartDoubleDemo1.jpg"
              alt="LVP Smart Double vending machine"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(0,31,63,0.08)]">
            <Image
              src="/LVPVendingPokemonMachine2.png"
              alt="LVP Pokemon card vending machine display"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Risk-Free Trial */}
      <Section className="bg-[#f8fafc]" title="Try It Risk-Free">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-[#001F3F]">
            You can have a vending machine installed at your business risk-free with our 60-day,
            no-obligation trial. We bring vending to businesses and facilities across the Lehigh
            Valley, no binding contracts required.
          </p>
          <a
            href="/risk-free"
            className="mt-6 inline-flex items-center gap-2 font-bold text-[#8F1024] underline decoration-2 underline-offset-4"
          >
            Learn more about our risk-free trial
          </a>
        </div>
      </Section>

      {/* Why LVP */}
      <Section id="why-lvp" title="Why Partner With LVP" dark>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/20 bg-white p-6 text-center text-[#001F3F] shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <DollarSign size={24} />
            </div>
            <h3 className="mb-3 text-xl font-black">Zero Cost to You</h3>
            <p>No equipment costs, no upfront investment. We fund and install the machine.</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white p-6 text-center text-[#001F3F] shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <Sparkles size={24} />
            </div>
            <h3 className="mb-3 text-xl font-black">We Handle Everything</h3>
            <p>Installation, restocking, repairs, and support, end to end, at no cost to you.</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white p-6 text-center text-[#001F3F] shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <CreditCard size={24} />
            </div>
            <h3 className="mb-3 text-xl font-black">Fully Cashless</h3>
            <p>Every machine accepts cards and mobile wallets, no cash handling, ever.</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact" title="Get Your Free Machine">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg text-[#001F3F] mb-8">
            Not sure which machine fits your space? Let's chat about what's possible for your location.
          </p>

          <div className="text-center mb-8">
            <p className="text-[#001F3F] mb-2">Email</p>
            <a
              href="mailto:info@lvpvending.com"
              className="text-2xl font-bold text-[#001F3F] underline decoration-[#8F1024] decoration-2 underline-offset-4 hover:text-[#001F3F]"
            >
              info@lvpvending.com
            </a>
          </div>

          <ContactForm buttonLabel="Request a Free Machine" />
        </div>
      </Section>

      <SiteFooter tagline="Automated Retail. Zero Hassle." />
    </>
  );
}


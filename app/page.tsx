'use client';

import Image from 'next/image';
import { DollarSign, Star, Zap, Cog, MapPin, MessageSquare, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Logo from '@/components/Logo';

const faqItems = [
  {
    question: 'How does the revenue share work?',
    answer: 'You earn 10% of every sale made through the machine. We handle all the inventory, restocking, and maintenance—you just collect your earnings.',
  },
  {
    question: 'What if the machine breaks down?',
    answer: 'We handle all repairs and maintenance at no cost to you. Our team is available 24/7 for support and troubleshooting.',
  },
  {
    question: 'How much space does the machine take up?',
    answer: 'The LVP vending machine is compact at 23.6"W × 40.5"H × 10.2"D, fitting perfectly in retail spaces, grocery stores, and convenience stores.',
  },
  {
    question: 'Do I need to manage inventory?',
    answer: 'No, we handle everything. We monitor stock levels, restock the machine, and manage all logistics so you can focus on your business.',
  },
  {
    question: 'What about payment processing?',
    answer: 'The machine features a cashless payment system accepting all major credit/debit cards and mobile wallets. No handling of cash needed.',
  },
  {
    question: 'Can I have multiple machines?',
    answer: "Absolutely! Many of our partners have multiple machines across different locations. Let's talk about your expansion strategy.",
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-lvp-gray">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#earn" className="text-[#001F3F] hover:underline decoration-[#8F1024] decoration-2 underline-offset-4 transition-colors font-medium">
              How It Works
            </a>
            <a href="#why" className="text-[#001F3F] hover:underline decoration-[#8F1024] decoration-2 underline-offset-4 transition-colors font-medium">
              Why Pokémon
            </a>
            <a href="#faq" className="text-[#001F3F] hover:underline decoration-[#8F1024] decoration-2 underline-offset-4 transition-colors font-medium">
              FAQ
            </a>
            <a href="/support" className="text-[#001F3F] hover:underline decoration-[#8F1024] decoration-2 underline-offset-4 transition-colors font-medium">
              Support
            </a>
            <a
              href="#contact"
              className="bg-[#8F1024] text-white px-6 py-2 rounded-lg hover:bg-[#740d1d] transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <Hero
        title="LVP VENDING"
        subtitle="Passive Income For Your Business"
        ctaText="Get Started"
      />

      <section className="relative overflow-hidden border-y border-[#001F3F]/10 bg-white">
        <div className="h-3 bg-[#8F1024]" />
        <div className="relative aspect-[4/3] w-full md:aspect-[16/5]">
          <Image
            src="/LVPVendingPokemonWide1.png"
            alt="LVP Vending machine installed in a retail location"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/80 via-[#001F3F]/35 to-[#001F3F]/10" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="w-full px-4 py-6 md:px-8 md:py-10">
              <div className="mx-auto max-w-6xl">
                <div className="inline-flex rounded-sm bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#001F3F] md:text-xs">
                  Built For Retail Locations
                </div>
                <h2 className="mt-4 max-w-xl text-2xl font-black text-white md:text-4xl">
                  A clean, professional presence that fits right into your store.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earn 10% Section */}
      <Section id="earn" title="Earn 10% of Every Sale" className="pt-18 md:pt-20 bg-[#f8fafc]">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-lvp-gray p-6 rounded-2xl border border-lvp-navy/10 shadow-[0_10px_28px_rgba(0,31,63,0.08)]">
              <Image
                src="/LVPVendingPokemonMachine1.png"
                alt="LVP Vending Pokemon machine"
                width={420}
                height={420}
                className="h-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px]"
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            <FeatureCard
              icon={<DollarSign size={24} />}
              title="No Cost to You"
              description="Zero installation fees, zero equipment costs. We handle the entire investment."
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="No Inventory to Purchase"
              description="We stock, monitor, and restock all products. You simply earn from sales."
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="No Employees Required"
              description="The machine is fully automated. Your customers tap a card and complete the transaction."
            />
            <FeatureCard
              icon={<Cog size={24} />}
              title="No Upfront Investment"
              description="Let us handle the heavy lifting. You keep it simple and profitable."
            />
          </div>
        </div>
      </Section>

      {/* Why Pokémon Section */}
      <Section id="why" title="Why Pokémon Cards?" dark>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <Image
                src="/LVPVendingPokemonMachine2.png"
                alt="LVP Vending Pokemon machine display"
                width={380}
                height={380}
                className="h-auto w-full max-w-[260px] sm:max-w-[300px]"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Pokemon is one of the world's most popular collectibles. Families, collectors, and kids actively seek booster packs, making them an excellent impulse purchase at your location.
            </p>
            <FeatureCard
              icon={<Star size={24} />}
              title="High Demand"
              description="Pokemon cards are consistently popular with collectors, investors, and enthusiasts worldwide."
              dark
            />
            <FeatureCard
              icon={<MessageSquare size={24} />}
              title="Impulse Purchase"
              description="Customers tap a card or mobile wallet and complete the transaction in seconds. No friction."
              dark
            />
          </div>
        </div>
      </Section>

      {/* We Handle Everything Section */}
      <Section title="We Handle Everything">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <Zap size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Installation</h3>
            <p className="text-[#001F3F]">Professional setup at your location, integrated seamlessly.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Customer Support</h3>
            <p className="text-[#001F3F]">24/7 support for you and your customers. We're always here.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <Cog size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Repairs & Maintenance</h3>
            <p className="text-[#001F3F]">All repairs included. We keep it running perfectly.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <Users size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Inventory & Restocking</h3>
            <p className="text-[#001F3F]">We monitor and restock automatically. Never run empty.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <DollarSign size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Payment Processing</h3>
            <p className="text-[#001F3F]">Cashless, secure transactions processed instantly.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <MapPin size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Remote Monitoring</h3>
            <p className="text-[#001F3F]">Real-time visibility into machine status and sales.</p>
          </div>
        </div>
      </Section>

      {/* Compact Design Section */}
      <Section title="Compact Wall-Mounted Design" dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center md:justify-end">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <Image
                src="/LVPVendingPokemonMachine3.png"
                alt="LVP Vending machine dimensions view"
                width={360}
                height={360}
                className="h-auto w-full max-w-[240px] sm:max-w-[290px]"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 p-8 rounded-lg border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-lvp-red text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold">Dimensions</p>
                    <p className="text-white">23.6"W × 40.5"H × 10.2"D</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lvp-red text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold">Display</p>
                    <p className="text-white">32" touchscreen interface</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lvp-red text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold">Payments</p>
                    <p className="text-white">Cashless payment system</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lvp-red text-2xl font-bold">✓</span>
                  <div>
                    <p className="font-semibold">Installation</p>
                    <p className="text-white">Easy to install, standard 110V outlet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" title="Frequently Asked Questions">
        <FAQ items={faqItems} />
      </Section>

      {/* CTA Section */}
      <Section id="contact" title="Let's Partner">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg text-[#001F3F] mb-8">
            I'd love to discuss how we can add passive income to your business. Let's chat about what's possible for your location.
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

          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex">
              <Logo dark />
            </div>
          </div>
          <p className="text-white mb-4">
            Premium Trading Card Vending
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm mb-8">
            <a href="mailto:info@lvpvending.com" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
              info@lvpvending.com
            </a>
            <a href="/support" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
              Support
            </a>
            <a href="/brand-affiliation-disclaimer" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
              Brand Affiliation Disclaimer
            </a>
            <a href="https://www.lvpvending.com" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
              www.lvpvending.com
            </a>
          </div>
          <p className="text-white text-xs">
            © {new Date().getFullYear()} LVP Vending. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

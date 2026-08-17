'use client';

import Image from 'next/image';
import { CreditCard, DoorOpen, ShoppingBag, ScanEye, Snowflake, Wifi, ShieldCheck, Cog, MapPin, Zap, Sparkles } from 'lucide-react';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const steps = [
  {
    icon: <CreditCard size={24} />,
    title: 'Tap or Swipe',
    description: 'Customers tap a card, phone, or wallet at the reader. No app or account required.',
  },
  {
    icon: <DoorOpen size={24} />,
    title: 'Door Unlocks',
    description: 'The refrigerated door unlocks instantly, just like opening your own fridge.',
  },
  {
    icon: <ShoppingBag size={24} />,
    title: 'Grab & Go',
    description: 'Customers take whatever food or drinks they want and simply close the door.',
  },
  {
    icon: <ScanEye size={24} />,
    title: 'Checkout Happens Automatically',
    description: 'Onboard cameras detect exactly what was taken, and the card is charged automatically, no scanning required.',
  },
];

const machines = [
  {
    name: 'Slim',
    badge: 'Best for Small Spaces',
    image: '/LVPVendingSmartSlimFront.jpg',
    description: 'Our smallest footprint, built for tight break rooms and small offices without sacrificing selection. Big value in a compact frame.',
  },
  {
    name: 'Pro',
    badge: 'Our Standard Model',
    image: '/LVPVendingSmartProFront.jpg',
    description: 'The right balance of size and selection for most offices, gyms, and lounge areas. Our most popular configuration.',
  },
  {
    name: 'Double',
    badge: 'Most Variety',
    image: '/LVPVendingSmartDoubleFront.jpg',
    description: 'Our most premium option, with doubled capacity for maximum variety. Built for high-traffic, 24/7 locations like warehouses and hospitals.',
  },
];

const faqItems = [
  {
    question: 'Do customers need to scan anything?',
    answer: "No. Customers just tap their card to unlock the door, grab what they want, and walk away. Onboard cameras identify the items taken, and the card is charged automatically.",
  },
  {
    question: 'What if the machine misidentifies an item?',
    answer: 'The AI vision system recognizes items with 99% accuracy in about 60 seconds, and every transaction is logged with video for review. Any discrepancy can be corrected quickly through our support team.',
  },
  {
    question: 'What can the machine stock?',
    answer: 'The refrigerated cooler holds a wide mix of drinks and snacks, from sodas and water to energy drinks and fresh food, all kept cold and ready to grab. Since there are no coils or springs like a traditional vending machine, it isn\'t limited to just cans and bottles, we can stock virtually any packaged product that fits on a shelf, including fresh food, bagged snacks, and specialty items your team or customers actually want.',
  },
  {
    question: 'Is there a cost to add this to my location?',
    answer: 'No cost to you. We provide, install, stock, and maintain the machine at no charge, so it functions as a free amenity for your customers or employees.',
  },
  {
    question: 'What does installation require?',
    answer: 'Just floor space and a standard power outlet. We handle delivery, setup, and network connectivity so the machine is ready to use from day one.',
  },
  {
    question: 'Is my customers\' payment information secure?',
    answer: 'Yes. All payments are processed through secure, encrypted card and mobile wallet networks. No cash handling and no stored card data on the machine.',
  },
];

export default function SmartVendingPage() {
  return (
    <>
      <SiteHeader />

      <section className="relative overflow-hidden border-y border-[#001F3F]/10 bg-white pt-20">
        <div className="h-3 bg-[#8F1024]" />
        <div className="relative aspect-[4/3] w-full md:aspect-[16/6]">
          <Image
            src="/LVPVendingSmartSlimDemo1.jpg"
            alt="LVP Smart Slim AI vending machine"
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
                  AI Vision Powered Cooler
                </div>
                <h2 className="mt-4 max-w-xl text-2xl font-black text-white md:text-4xl">
                  A sleek refrigerated cooler that fits offices, gyms, dorms, and lounge areas.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Machines */}
      <Section id="machines" title="Our Machines" className="bg-[#f8fafc]">
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-[#001F3F]">
          Every location is different, so our smart vending line comes in three sizes to fit your space.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {machines.map((machine) => (
            <div
              key={machine.name}
              className="overflow-hidden rounded-2xl border border-[#001F3F]/15 bg-white shadow-[0_10px_28px_rgba(0,31,63,0.05)]"
            >
              <div className="relative aspect-[4/3] w-full bg-white p-4">
                <Image
                  src={machine.image}
                  alt={`LVP Smart ${machine.name} vending machine`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8F1024]">
                  {machine.badge}
                </p>
                <h3 className="font-black text-2xl mb-3 text-[#001F3F]">{machine.name}</h3>
                <p className="text-[#001F3F]">{machine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" title="How It Works" className="bg-[#f8fafc]">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
                {step.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8F1024] mb-2">
                Step {index + 1}
              </p>
              <h3 className="font-black text-xl mb-3 text-[#001F3F]">{step.title}</h3>
              <p className="text-[#001F3F]">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Smart Vending */}
      <Section id="why" title="Why Smart Vending?" dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <Image
                src="/LVPVendingSmartDoubleDemo1.jpg"
                alt="LVP Smart Double AI vending machine"
                width={420}
                height={420}
                className="h-auto w-full max-w-[260px] rounded-lg sm:max-w-[300px]"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              An upgrade from the old coin-operated machine down the hall: a refrigerated, cashless
              grab-and-go experience that's available around the clock. No cashier, no checkout line, and
              no touchscreen menu to navigate.
            </p>
            <FeatureCard
              icon={<Snowflake size={24} />}
              title="Always Fresh & Cold"
              description="A refrigerated cooler keeps drinks and food fresh, just like a store cooler."
              dark
            />
            <FeatureCard
              icon={<ScanEye size={24} />}
              title="Frictionless Checkout"
              description="No barcodes, no scanning. Image recognition identifies each item precisely, and your card is charged automatically."
              dark
            />
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="Beats the Old Machines"
            description="A sleek, modern cooler that replaces clunky, unreliable coin-operated vending machines."
            dark
          />
          <FeatureCard
            icon={<Wifi size={24} />}
            title="Available 24/7"
            description="No staff needed on-site. Customers can shop any time, day or night."
            dark
          />
          <FeatureCard
            icon={<ShieldCheck size={24} />}
            title="Secure & Cashless"
            description="Every transaction is card-based and encrypted. No cash to manage or secure."
            dark
          />
        </div>
      </Section>

      {/* We Handle Everything */}
      <Section title="We Handle Everything">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <Zap size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Installation</h3>
            <p className="text-[#001F3F]">Professional delivery and setup, connected and ready to sell.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <ShoppingBag size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Sourcing & Restocking</h3>
            <p className="text-[#001F3F]">We source and restock whatever products your customers or employees actually want.</p>
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
              <CreditCard size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Payment Processing</h3>
            <p className="text-[#001F3F]">Cashless, secure transactions processed instantly.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <MapPin size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Remote Monitoring</h3>
            <p className="text-[#001F3F]">Real-time visibility into inventory, temperature, and sales.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Customer Support</h3>
            <p className="text-[#001F3F]">24/7 support for you and your customers. We're always here.</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Frequently Asked Questions">
        <FAQ items={faqItems} />
      </Section>

      {/* CTA */}
      <Section id="contact" title="Let's Partner">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg text-[#001F3F] mb-8">
            I'd love to discuss how our smart vending machines can upgrade the experience for your
            customers or employees.
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

          <ContactForm
            subject="Inquiry About LVP Smart Vending"
            heading="Start a conversation about bringing smart vending to your location."
          />
        </div>
      </Section>

      <SiteFooter tagline="AI-Powered Food & Drink Vending" />
    </>
  );
}

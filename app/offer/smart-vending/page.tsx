import Image from 'next/image';
import {
  BadgeDollarSign,
  CreditCard,
  DoorOpen,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Snowflake,
  Wrench,
} from 'lucide-react';
import Logo from '@/components/Logo';
import SmartVendingLeadForm from '@/components/SmartVendingLeadForm';

const steps = [
  {
    icon: <CreditCard size={22} />,
    title: 'Tap card or phone',
    description: 'Tap any card or phone on the reader and the door unlocks instantly. No app, no PIN.',
    image: '/LVPVendingSmart1Tap.gif',
    alt: 'Customer tapping a phone to open an LVP smart vending cooler',
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'Grab your items',
    description: 'Take whatever you want. Image recognition tracks every item in real time.',
    image: '/LVPVendingSmart1Grab.gif',
    alt: 'Customer grabbing a drink from an LVP smart vending cooler',
  },
  {
    icon: <DoorOpen size={22} />,
    title: 'Close door & go',
    description: 'Close the door and walk away. The card is charged only for what was taken.',
    image: '/LVPVendingSmart1Go.gif',
    alt: 'Customer closing an LVP smart vending cooler after selecting items',
  },
];

const included = [
  {
    icon: <BadgeDollarSign size={22} />,
    title: 'No cost to you',
    description: 'No purchase, no lease, no monthly fee. The machine is a free amenity for your team.',
  },
  {
    icon: <Wrench size={22} />,
    title: 'We handle everything',
    description: 'Delivery, installation, restocking, repairs, and payment processing are all on us.',
  },
  {
    icon: <Snowflake size={22} />,
    title: 'Fresh and refrigerated',
    description: 'Cold drinks, fresh food, and real snacks, not just whatever fits on a spring coil.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Cashless and secure',
    description: 'Encrypted card and mobile wallet payments. No cash on site to manage or secure.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Locally serviced',
    description: 'We are based in the Lehigh Valley. Same-area service, not a national call center.',
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'Stocked to your requests',
    description: 'Your team tells us what they want and we source it. The lineup adapts over time.',
  },
];

const faqs = [
  {
    question: 'What does this cost my business?',
    answer:
      'Nothing. We provide, install, stock, and maintain the machine at no charge. Employees and guests pay only for what they take.',
  },
  {
    question: 'What do I need to provide?',
    answer: 'Floor space and a standard power outlet. We handle delivery, setup, and network connectivity.',
  },
  {
    question: 'How many employees do I need?',
    answer:
      'Most locations work well with 40 or more daily employees or visitors, but smaller sites often qualify with our Slim cooler. Tell us your headcount below and we will let you know.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Once we confirm a fit, installation is typically scheduled within a week and takes under an hour on site.',
  },
];

export default function SmartVendingOfferPage() {
  return (
    <main className="bg-white">
      <header className="border-b border-[#001F3F]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Logo />
          <a
            href="#get-started"
            className="hidden rounded-lg bg-[#8F1024] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#740d1d] sm:inline-flex"
          >
            Check My Location
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#001F3F] text-white">
        <Image
          src="/LVPVendingSmartProDemo1.jpg"
          alt="LVP Smart Pro cooler stocked with food and drinks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#ff5f70]">
            Serving the Lehigh Valley
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            A free smart cooler for your break room.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Tap, grab, and go. We install a modern refrigerated smart cooler at your business at no cost,
            then stock and service it for you. Your team gets cold drinks, fresh food, and real snacks
            around the clock.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#8F1024] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#740d1d] sm:w-auto"
            >
              See If My Location Qualifies
            </a>
            <span className="text-sm text-white/70">Takes about 30 seconds</span>
          </div>
        </div>
      </section>

      <section className="border-b border-[#001F3F]/10 bg-[#f8fafc] px-4 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-bold uppercase tracking-wide text-[#001F3F]">
          <span>$0 to install</span>
          <span>$0 monthly</span>
          <span>We restock &amp; repair</span>
          <span>Available 24/7</span>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8F1024]">How It Works</p>
            <h2 className="text-3xl font-black leading-tight text-[#001F3F] md:text-5xl">
              Simply Tap, Grab &amp; Go
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="overflow-hidden rounded-2xl border border-[#001F3F]/15 bg-white shadow-[0_16px_36px_rgba(0,31,63,0.08)]"
              >
                <div className="relative aspect-[16/9] w-full bg-[#f8fafc]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F6FFF]/10 text-[#0F6FFF]">
                      {step.icon}
                    </span>
                    <h3 className="text-xl font-black text-[#001F3F]">{step.title}</h3>
                  </div>
                  <p className="leading-relaxed text-[#001F3F]/75">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001F3F] px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-black md:text-5xl">What You Get</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#8F1024] text-white">
                  {item.icon}
                </span>
                <h3 className="mb-2 text-xl font-black">{item.title}</h3>
                <p className="leading-relaxed text-white/85">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-black text-[#001F3F] md:text-5xl">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,31,63,0.05)]"
              >
                <h3 className="mb-2 text-lg font-black text-[#001F3F]">{faq.question}</h3>
                <p className="leading-relaxed text-[#001F3F]/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-started" className="scroll-mt-16 bg-[#f8fafc] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-[#001F3F] md:text-5xl">
              See If Your Location Qualifies
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#001F3F]/80">
              Answer a few quick questions and we will confirm the right machine for your space. No cost,
              no obligation.
            </p>
          </div>

          <SmartVendingLeadForm />

        </div>
      </section>

      <footer className="bg-[#001F3F] px-4 py-10 text-center text-white">
        <div className="mx-auto inline-flex">
          <Logo dark />
        </div>
        <p className="mt-4 text-white/85">Automated Retail. Zero Hassle.</p>
        <p className="mt-6 text-xs text-white/70">
          © {new Date().getFullYear()} LVP Vending. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

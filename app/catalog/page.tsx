'use client';

import Image from 'next/image';
import { CreditCard, ShoppingBag, DoorOpen, Sparkles } from 'lucide-react';
import Logo from '@/components/Logo';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const howItWorks = [
  {
    icon: <CreditCard size={22} />,
    title: 'Tap card or phone',
    description: 'Tap any credit card, debit card, or phone on the reader and the door unlocks instantly.',
    image: '/LVPVendingSmart1Tap.gif',
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'Grab your items',
    description: 'Take whatever food or drinks you want. Image recognition tracks each item in real time.',
    image: '/LVPVendingSmart1Grab.gif',
  },
  {
    icon: <DoorOpen size={22} />,
    title: 'Close door & go',
    description: 'Close the door and walk away. The card is automatically charged only for what was taken.',
    image: '/LVPVendingSmart1Go.gif',
  },
];

const machines = [
  {
    name: 'Slim',
    image: '/LVPVendingSmartSlimFront.jpg',
    description: 'Our smallest footprint, built for tight break rooms and small offices.',
  },
  {
    name: 'Pro',
    image: '/LVPVendingSmartProFront.jpg',
    description: 'The right balance of size and selection for most offices, gyms, and lounges.',
  },
  {
    name: 'Double',
    image: '/LVPVendingSmartDoubleFront.jpg',
    description: 'Doubled capacity for maximum variety in high-traffic, 24/7 locations.',
  },
];

const stockCategories = [
  { name: 'Sodas', items: 'Coca-Cola, Pepsi, Sprite, Mountain Dew, Dr Pepper, and other classic favorites' },
  { name: 'Energy Drinks', items: 'Monster, Red Bull, Ghost, Celsius, C4, and more' },
  { name: 'Waters', items: 'Still, sparkling, flavored, and enhanced waters' },
  { name: 'Protein Drinks', items: 'Fairlife, Premier Protein, Muscle Milk, and more' },
  { name: 'Snacks', items: 'Chips, pretzels, crackers, and other grab-and-go bags' },
  { name: 'Candy', items: 'Snickers, chocolate bars, gummies, mints, and classic favorites' },
];

const alternatives =
  'String cheese, beef jerky, Uncrustables, salads, sandwiches, yogurt cups, fruit cups, hummus cups, overnight oats, trail mix, and more.';

export default function ProductCatalogPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .catalog-page {
            break-after: page;
            page-break-after: always;
            box-sizing: border-box !important;
            min-height: 0 !important;
            height: auto !important;
          }
          .catalog-page:last-child {
            break-after: auto;
            page-break-after: auto;
          }
        }
        @page {
          size: letter;
          margin: 0.6in;
        }
      `}</style>

      <div className="no-print">
        <SiteHeader />
      </div>

      <main className="bg-[#e5e9ef] pt-20 print:bg-white print:pt-0">
        <div className="mx-auto max-w-3xl px-4 py-8 print:max-w-none print:px-0 print:py-0">
          {/* Page 1: Cover */}
          <section className="catalog-page flex min-h-[10in] flex-col justify-between rounded-2xl border border-[#001F3F]/15 bg-white p-10 shadow-[0_10px_28px_rgba(0,31,63,0.06)] print:min-h-[9.8in] print:rounded-none print:border-0 print:p-0 print:shadow-none">
            <div className="print:hidden" />
            <div className="flex flex-col items-center text-center">
              <div className="scale-125">
                <Logo bordered={false} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-[#8F1024]">
                Food &amp; Drink
              </p>
              <h1 className="mt-4 text-5xl font-black leading-tight text-[#001F3F] md:text-6xl">
                Product Catalog
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg text-[#001F3F]/75">
                A guide to what LVP Vending can stock in our smart coolers, and how the whole thing
                works.
              </p>
              <div className="mt-6 grid w-full max-w-4xl grid-cols-3">
                {machines.map((machine) => (
                  <div key={machine.name}>
                    <div className="relative aspect-[3/4] w-full bg-white">
                      <Image
                        src={machine.image}
                        alt={`LVP Smart ${machine.name} vending machine`}
                        fill
                        sizes="(min-width: 640px) 33vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-bold text-[#001F3F]">{machine.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center text-sm text-[#001F3F]/60">
              <p>info@lvpvending.com &middot; www.lvpvending.com</p>
            </div>
          </section>

          {/* Page 2: How It Works + What Makes Us Different */}
          <section className="catalog-page mt-10 min-h-[10in] rounded-2xl border border-[#001F3F]/15 bg-white p-8 shadow-[0_10px_28px_rgba(0,31,63,0.06)] md:p-10 print:mt-0 print:min-h-[9.8in] print:rounded-none print:border-0 print:p-0 print:shadow-none">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8F1024]">
              How It Works
            </p>
            <h2 className="mb-8 text-3xl font-black text-[#001F3F] md:text-4xl">
              Tap, Grab &amp; Go
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {howItWorks.map((step) => (
                <div key={step.title} className="overflow-hidden rounded-xl border border-[#001F3F]/15">
                  <div className="relative aspect-[4/3] w-full bg-[#f8fafc]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      unoptimized
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0F6FFF]/10 text-[#0F6FFF]">
                      {step.icon}
                    </span>
                    <h3 className="mb-2 font-black text-[#001F3F]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#001F3F]/75">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border-2 border-[#8F1024]/25 bg-[#8F1024]/5 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={20} className="text-[#8F1024]" />
                <h3 className="font-black text-[#001F3F]">Not Your Typical Vending Machine</h3>
              </div>
              <p className="leading-relaxed text-[#001F3F]/80">
                Our smart coolers don&apos;t use the coils or springs found in traditional vending
                machines, so we aren&apos;t limited to cans, bottles, and bagged snacks. If it fits in
                a refrigerator, it&apos;ll fit in one of our smart coolers. That means fresh food,
                specialty drinks, and anything else your location wants to offer.
              </p>
            </div>
          </section>

          {/* Page 3: What We Stock */}
          <section className="catalog-page mt-10 min-h-[10in] rounded-2xl border border-[#001F3F]/15 bg-white p-8 shadow-[0_10px_28px_rgba(0,31,63,0.06)] md:p-10 print:mt-0 print:min-h-[9.8in] print:rounded-none print:border-0 print:p-0 print:shadow-none">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8F1024]">
              What We Stock
            </p>
            <h2 className="mb-8 text-3xl font-black text-[#001F3F] md:text-4xl">
              Products We Offer
            </h2>
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {stockCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="font-black text-[#001F3F]">{category.name}</h3>
                  <p className="text-sm leading-relaxed text-[#001F3F]/70">{category.items}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-black text-[#001F3F]">
                Alternatives You Won&apos;t Find in a Traditional Vending Machine
              </h3>
              <p className="text-sm leading-relaxed text-[#001F3F]/70">{alternatives}</p>
            </div>

            <div className="mt-8 rounded-xl border-2 border-[#8F1024]/25 bg-[#8F1024]/5 p-6">
              <div className="mb-2 flex items-center gap-2">
                <Sparkles size={20} className="text-[#8F1024]" />
                <h3 className="font-black text-[#001F3F]">Don&apos;t See What You Want?</h3>
              </div>
              <p className="leading-relaxed text-[#001F3F]/80">
                This is just a sample of what we can stock. Since our smart coolers aren&apos;t
                limited by traditional vending machine hardware, we can carry virtually any packaged
                food or drink that fits in a refrigerator. Have something specific in mind for your
                location? Just request it and we&apos;ll do our best to source it.
              </p>
            </div>
          </section>
        </div>
      </main>

      <div className="no-print">
        <SiteFooter tagline="A modern, cashless vending experience as a free amenity for your location." />
      </div>
    </>
  );
}

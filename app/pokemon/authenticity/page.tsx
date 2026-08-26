import Link from 'next/link';
import { BadgeCheck, PackageCheck, ShieldCheck, Store } from 'lucide-react';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export default function PokemonAuthenticityPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#f8fafc] px-4 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-black text-[#001F3F] md:text-6xl">
            Our Pokémon Pack Policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#001F3F]">
            We want customers to feel confident about the products in our machines. Here is how we
            source and handle Pokémon card packs.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <BadgeCheck size={22} />
            </div>
            <h2 className="mb-3 text-2xl font-black text-[#001F3F]">No Weighing or Pack Scanning</h2>
            <p className="leading-7 text-[#001F3F]">
              We do not weigh individual packs or use scans, technology, or other methods to try to
              identify a pack's contents before it is sold. Modern sets are designed in ways that make
              pack weight an unreliable signal, but regardless, we do not use pack weights to make
              inventory decisions.
            </p>
          </section>

          <section className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <PackageCheck size={22} />
            </div>
            <h2 className="mb-3 text-2xl font-black text-[#001F3F]">Packs From Sealed Product</h2>
            <p className="leading-7 text-[#001F3F]">
              Our packs come from sealed products, primarily booster boxes and booster bundles. This
              lets us buy efficiently and work toward better prices for customers while keeping a clear
              chain from sealed product to machine inventory.
            </p>
          </section>

          <section className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <Store size={22} />
            </div>
            <h2 className="mb-3 text-2xl font-black text-[#001F3F]">Reputable Sources Only</h2>
            <p className="leading-7 text-[#001F3F]">
              While we work toward direct distribution access, we buy sealed products from reputable
              card shops. We do not buy loose packs from marketplaces, private backdoor deals, or other
              sources where product history cannot be verified. We do not camp restocks, wait in line
              for drops, or build inventory by clearing newly stocked shelves.
            </p>
          </section>

          <section className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8F1024] text-white">
              <ShieldCheck size={22} />
            </div>
            <h2 className="mb-3 text-2xl font-black text-[#001F3F]">Unopened and Unaltered</h2>
            <p className="leading-7 text-[#001F3F]">
              We sell packs unopened and as originally packaged. We do not alter, repackage, or make
              guarantees about the cards inside. Pack contents remain randomized by the manufacturer.
            </p>
          </section>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)] md:p-8">
          <h2 className="mb-3 text-2xl font-black text-[#001F3F]">Why This Matters to Us</h2>
          <p className="leading-7 text-[#001F3F]">
            We want customers to have a real chance at the excitement of opening a great pack. The
            best long-term outcome for us is customers who trust the machines, enjoy what they pull,
            and want to come back.
          </p>
          <Link
            href="/pokemon"
            className="mt-6 inline-flex font-bold text-[#8F1024] underline decoration-2 underline-offset-4"
          >
            Explore Pokémon Vending
          </Link>
        </div>
      </main>

      <SiteFooter tagline="Premium Trading Card Vending" />
    </>
  );
}

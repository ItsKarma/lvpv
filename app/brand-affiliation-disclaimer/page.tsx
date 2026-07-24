import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Brand & Trademark Disclaimer | LVP Vending',
  description:
    'Brand and trademark disclaimer for LVP Vending regarding third-party trademarks, brand names, and product references.',
};

export default function BrandAffiliationDisclaimerPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 md:py-20">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-[#001F3F]/15 bg-white p-6 md:p-10 shadow-[0_10px_30px_rgba(0,31,63,0.06)]">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#8F1024]">
          Legal
        </p>
        <h1 className="mb-8 text-3xl font-black text-[#001F3F] md:text-5xl">
          Brand &amp; Trademark Disclaimer
        </h1>

        <div className="space-y-6 text-base leading-8 text-[#001F3F]">
          <p>
            LVP Vending ("the Company") is an independently owned and operated vending business.
            The Company is not affiliated with, sponsored by, endorsed by, or an authorized agent
            or distributor of Nintendo, Creatures Inc., GAME FREAK inc., The Pokemon Company, or
            any of their affiliates.
          </p>

          <p>
            Pokemon and all associated names, characters, logos, and trademarks are the property of
            Nintendo, Creatures Inc., and GAME FREAK inc. References to Pokemon on this website are
            used solely to describe the retail products sold through LVP Vending's machines and do
            not imply any endorsement, partnership, or other formal relationship with the brand
            owner.
          </p>

          <p>
            All products sold through LVP Vending are purchased through legitimate retail and
            wholesale channels and resold unopened, as originally packaged by the manufacturer. LVP
            Vending does not alter, repackage, or guarantee the contents of any individual pack.
            Booster pack contents are randomized by the manufacturer at the time of production; LVP
            Vending makes no representation or guarantee regarding the specific cards, rarities, or
            value contained within any pack.
          </p>

          <p>
            All trademarks, logos, and brand names referenced on this site remain the property of
            their respective owners. LVP Vending claims no ownership interest in any third-party
            intellectual property.
          </p>

          <p className="italic">
            Last updated: July 24, 2026
          </p>
        </div>

        <div className="mt-10 border-t border-[#001F3F]/15 pt-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-bold uppercase tracking-[0.12em] text-[#001F3F] underline decoration-[#8F1024] decoration-2 underline-offset-4"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

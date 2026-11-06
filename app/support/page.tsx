import type { Metadata } from 'next';
import Link from 'next/link';
import SupportForm from '@/components/SupportForm';

export const metadata: Metadata = {
  title: 'Support | LVP Vending',
  description: 'General support page for LVP Vending customers and location partners.',
  alternates: {
    canonical: '/support',
  },
};

const recipient = 'support@lvpvending.com';
const subject = 'LVP Vending Support Request';
const body = [
  'Hello LVP Vending Support,',
  '',
  'I need help with the following issue:',
  '',
  'Location:',
  'Date/Time:',
  'Issue details:',
  '',
  'Best contact:',
  '',
  'Thank you.',
].join('\n');

const mailtoHref = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const phoneDisplay = '(610) 835-5924';
const phoneHref = 'tel:+16108355924';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,31,63,0.06)] md:p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#8F1024]">Support</p>
        <h1 className="mb-4 text-3xl font-black text-[#001F3F] md:text-5xl">Need Help?</h1>
        <p className="mb-8 text-base leading-7 text-[#001F3F]">
          For customer or location support, fill out the form below and include as much detail as
          possible. We will get back to you as soon as we can.
        </p>

        <SupportForm />

        <div className="mt-8 border-t border-[#001F3F]/15 pt-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#8F1024]">
            Prefer to call?
          </p>
          <a
            href={phoneHref}
            className="text-2xl font-black text-[#001F3F] underline decoration-[#8F1024] decoration-2 underline-offset-4"
          >
            {phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-[#001F3F]/80">
            Leave the details of your issue and we will follow up.
          </p>
        </div>

        <div className="mt-6 text-sm text-[#001F3F]">
          <p>
            Or email us directly:{' '}
            <a href={mailtoHref} className="font-bold underline decoration-[#8F1024] underline-offset-4">
              {recipient}
            </a>
          </p>
        </div>

        <div className="mt-8 border-t border-[#001F3F]/15 pt-6">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.12em] text-[#001F3F] underline decoration-[#8F1024] decoration-2 underline-offset-4"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support | LVP Vending',
  description: 'General support page for LVP Vending customers and location partners.',
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

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,31,63,0.06)] md:p-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#8F1024]">Support</p>
        <h1 className="mb-4 text-3xl font-black text-[#001F3F] md:text-5xl">Need Help?</h1>
        <p className="mb-8 text-base leading-7 text-[#001F3F]">
          For customer or location support, send us an email and include as much detail as possible.
        </p>

        <a
          href={mailtoHref}
          className="inline-flex w-full items-center justify-center rounded-lg bg-[#8F1024] px-6 py-4 text-lg font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#740d1d]"
        >
          Email Support
        </a>

        <p className="mt-6 text-sm text-[#001F3F]">
          Direct email: <span className="font-bold">support@lvpvending.com</span>
        </p>

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
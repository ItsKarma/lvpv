import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | LVP Vending',
  description:
    'Privacy policy for LVP Vending covering data collection, analytics, and advertising practices.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 md:py-20">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-[#001F3F]/15 bg-white p-6 md:p-10 shadow-[0_10px_30px_rgba(0,31,63,0.06)]">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#8F1024]">
          Legal
        </p>
        <h1 className="mb-8 text-3xl font-black text-[#001F3F] md:text-5xl">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-base leading-8 text-[#001F3F]">
          <p>
            LVP Vending ("the Company", "we", "us") respects your privacy. This policy explains
            what information we collect through this website and how it is used.
          </p>

          <h2 className="text-xl font-bold text-[#001F3F]">Information We Collect</h2>
          <p>
            We use Google Analytics (GA4) to collect standard usage data such as pages visited,
            general location (city/region level), device type, and how you interact with this
            site, including when you click to start an email inquiry through our contact form. We
            do not collect payment information, and we do not knowingly collect information from
            children.
          </p>

          <h2 className="text-xl font-bold text-[#001F3F]">Advertising & Remarketing</h2>
          <p>
            We use Google Ads in connection with Google Analytics to measure the performance of
            our advertising campaigns and to show relevant ads to people who have previously
            visited our site (remarketing). This relies on cookies and similar identifiers managed
            by Google. You can learn more about how Google uses this data at{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#8F1024] decoration-2 underline-offset-4"
            >
              policies.google.com/technologies/partner-sites
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-[#001F3F]">Your Choices</h2>
          <p>
            You can opt out of Google Analytics and personalized advertising using{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#8F1024] decoration-2 underline-offset-4"
            >
              Google Ads Settings
            </a>{' '}
            or by adjusting your browser's cookie and tracking preferences. Most browsers also let
            you block or clear cookies at any time.
          </p>

          <h2 className="text-xl font-bold text-[#001F3F]">Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
            <a
              href="mailto:info@lvpvending.com"
              className="underline decoration-[#8F1024] decoration-2 underline-offset-4"
            >
              info@lvpvending.com
            </a>
            .
          </p>

          <p className="italic">
            Last updated: September 22, 2026.
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

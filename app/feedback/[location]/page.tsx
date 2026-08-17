import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import TallyForm from '@/components/TallyForm';

function formatLocation(location: string) {
  return location
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const locationName = formatLocation(location);

  return {
    title: `Vending Feedback | ${locationName} | LVP Vending`,
    description: `Tell LVP Vending what items you would like to see at ${locationName}.`,
  };
}

export default async function FeedbackPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const locationName = formatLocation(location);
  const formUrl = `https://tally.so/embed/QKN2BY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&location=${encodeURIComponent(location)}`;

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f8fafc] px-4 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-black text-[#001F3F] md:text-5xl">
            What Would You Like to See?
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-[#001F3F]">
            Tell us what snacks, drinks, meals, or other items you would like to find at {locationName}.
          </p>
        </div>

        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#001F3F]/15 bg-white p-2 shadow-[0_10px_30px_rgba(0,31,63,0.06)] md:p-4">
          <TallyForm
            src={formUrl}
            title={`LVP Vending feedback form for ${locationName}`}
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-6 text-[#001F3F]">
          No contact information is required. Your response helps us stock the machine with what you want.
        </p>
      </main>

      <SiteFooter tagline="Automated Retail. Zero Hassle." />
    </>
  );
}

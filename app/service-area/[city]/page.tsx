import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Building2, CreditCard, MapPin, RefreshCw, Snowflake } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { getServiceCity, serviceCities, type ServiceCity } from '@/lib/serviceCities';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return serviceCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getServiceCity(citySlug);

  if (!city) {
    return {};
  }

  const title = `Vending Machines in ${city.name}, PA | LVP Vending`;
  const description = `Free smart vending services for ${city.name}, PA workplaces. LVP Vending installs, stocks, and services cashless food and drink coolers across ${city.county}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/service-area/${city.slug}`,
    },
    openGraph: {
      title,
      description,
    },
  };
}

export default async function CityServiceAreaPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getServiceCity(citySlug);

  if (!city) {
    notFound();
  }

  const nearbyCities = city.nearby
    .map((nearbyName) => serviceCities.find((serviceCity) => serviceCity.name === nearbyName))
    .filter((nearbyCity): nearbyCity is ServiceCity => Boolean(nearbyCity));

  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-white px-4 pb-12 pt-28 md:pb-16 md:pt-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8F1024]">
              LVP Vending Service Area
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight text-[#001F3F] md:text-6xl">
              Smart Vending Services in {city.name}, PA
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#001F3F] md:text-xl">
              LVP Vending brings modern cashless food and drink vending to {city.name} workplaces,
              gyms, warehouses, offices, schools, and shared spaces as a free amenity.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#8F1024] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#740d1d] sm:w-auto"
              >
                Request a Free Machine
              </Link>
              <Link
                href="/smart-vending"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[#001F3F]/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#001F3F] transition-colors hover:bg-[#001F3F]/5 sm:w-auto"
              >
                View Smart Coolers
              </Link>
            </div>
          </div>
        </section>

        <Section title={`Vending for ${city.name} Workplaces`} className="bg-[#f8fafc]">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,31,63,0.05)] md:p-8">
              <h2 className="mb-4 text-2xl font-black text-[#001F3F]">A free amenity for your team</h2>
              <p className="leading-relaxed text-[#001F3F]">
                We provide the cooler, install it, stock it, service it, and handle payment processing.
                Your business gets a convenient food and drink option without equipment costs, revenue
                share requirements, or extra staffing.
              </p>
            </div>
            <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_28px_rgba(0,31,63,0.05)] md:p-8">
              <h2 className="mb-4 text-2xl font-black text-[#001F3F]">Locally serviced in {city.county}</h2>
              <p className="leading-relaxed text-[#001F3F]">
                Because we are local to the Lehigh Valley, we can keep products fresh, respond quickly,
                and tailor the selection to what people at your {city.name} location actually buy.
              </p>
            </div>
          </div>
        </Section>

        <Section title="What We Handle">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: <Building2 size={24} />, title: 'Install', description: 'Delivery, placement, setup, and launch.' },
              { icon: <RefreshCw size={24} />, title: 'Restock', description: 'Food and drinks stocked around local demand.' },
              { icon: <Snowflake size={24} />, title: 'Maintain', description: 'Cooler service, cleaning, support, and repairs.' },
              { icon: <CreditCard size={24} />, title: 'Payments', description: 'Secure cashless checkout with no cash handling.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8F1024] text-white">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-black text-[#001F3F]">{item.title}</h3>
                <p className="text-[#001F3F]">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={`Serving ${city.name} and Nearby Areas`} className="bg-[#f8fafc]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-lg leading-relaxed text-[#001F3F]">
              Looking for vending machines in {city.name}, PA or nearby communities? We regularly work
              with businesses across the Greater Lehigh Valley.
            </p>
            {nearbyCities.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-3">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/service-area/${nearbyCity.slug}`}
                    className="flex items-center justify-center gap-2 rounded-lg border border-[#001F3F]/15 bg-white px-4 py-3 font-medium text-[#001F3F] transition-colors hover:border-[#8F1024]/40 hover:text-[#8F1024]"
                  >
                    <MapPin size={18} className="shrink-0" />
                    {nearbyCity.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Section>

        <Section id="contact" title={`Bring Smart Vending to ${city.name}`}>
          <div className="mx-auto max-w-2xl">
            <p className="mb-8 text-center text-lg leading-relaxed text-[#001F3F]">
              Tell us about your {city.name} location and we can recommend a smart cooler setup for
              your team, customers, tenants, or visitors.
            </p>
            <ContactForm
              subject={`Smart vending inquiry in ${city.name}, PA`}
              heading={`Start a conversation about bringing LVP smart vending to your ${city.name} location.`}
              buttonLabel="Request a Free Machine"
            />
          </div>
        </Section>
      </main>

      <SiteFooter tagline="Smart Vending Services. Zero Hassle." />
    </>
  );
}
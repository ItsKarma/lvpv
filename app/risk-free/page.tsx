'use client';

import { Truck, CalendarClock, PhoneCall } from 'lucide-react';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function RiskFreePage() {
  return (
    <>
      <SiteHeader />

      <div className="bg-white pt-28 pb-4 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-black text-[#001F3F] md:text-6xl">
            Try It Risk-Free for 60 Days
          </h1>
          <p className="text-lg leading-relaxed text-[#001F3F]">
            No binding contracts. No long-term commitment. Just a free machine and 60 days to see
            if it's a fit for your location.
          </p>
        </div>
      </div>

      <Section title="How the Trial Works" className="bg-[#f8fafc]">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <PhoneCall size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Reach Out</h3>
            <p className="text-[#001F3F]">Tell us about your space, and we'll recommend the right machine and size.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <Truck size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">Quick Placement</h3>
            <p className="text-[#001F3F]">We deliver, install, and stock the machine at your location at no cost to you.</p>
          </div>
          <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-6 text-center shadow-[0_10px_28px_rgba(0,31,63,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8F1024] rounded-full text-white mb-4 mx-auto">
              <CalendarClock size={24} />
            </div>
            <h3 className="font-black text-xl mb-3 text-[#001F3F]">60 Days to Decide</h3>
            <p className="text-[#001F3F]">Try it out with no obligation. If it's not a fit, just let us know.</p>
          </div>
        </div>
      </Section>

      <Section title="No Contracts, No Hassle">
        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-[#001F3F]">
          <p>
            There's no binding contract required to try a machine at your location. If at any
            point during the trial, or afterward, you'd like the machine removed, just let us know
            and we'll pick it up within 48 hours.
          </p>
          <p>
            No fees, no penalties, no hard feelings. We'd rather earn your business with a great
            experience than lock you into a contract.
          </p>
        </div>
      </Section>

      <Section id="contact" title="Start Your Risk-Free Trial" className="bg-[#f8fafc]">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg text-[#001F3F] mb-8">
            Ready to try it out? Let's get a machine placed at your location.
          </p>
          <ContactForm buttonLabel="Request a Free Machine" />
        </div>
      </Section>

      <SiteFooter tagline="Automated Retail. Zero Hassle." />
    </>
  );
}

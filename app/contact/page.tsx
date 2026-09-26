import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import SmartVendingLeadForm from '@/components/SmartVendingLeadForm';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f8fafc] px-4 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8F1024]">
              Get In Touch
            </p>
            <h1 className="text-4xl font-black text-[#001F3F] md:text-5xl">
              Bring smart vending to your location.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#001F3F]/80">
              Tell us a little about your business and we will help you find the right smart cooler.
              There is no cost or obligation.
            </p>
          </div>

          <SmartVendingLeadForm source="contact-page" />

        </div>
      </main>

      <SiteFooter tagline="Automated Retail. Zero Hassle." />
    </>
  );
}

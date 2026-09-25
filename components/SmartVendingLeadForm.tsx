'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FormspreeProvider, ValidationError, useForm } from '@formspree/react';
import { sendGAEvent } from '@next/third-parties/google';
import { trackAdsLeadConversion } from '@/lib/googleAds';

const FORMSPREE_PROJECT = process.env.NEXT_PUBLIC_FORMSPREE_PROJECT;

// Matches the form key in formspree.json.
const FORM_KEY = 'smartVendingLead';

const ATTRIBUTION_PARAMS = [
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

const employeeRanges = ['1 - 25', '26 - 50', '51 - 100', '101 - 250', '250+'];

const fieldClass =
  'w-full rounded-lg border border-[#001F3F]/20 bg-white px-4 py-3 text-[#001F3F] outline-none transition-colors focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20';
const labelClass = 'mb-2 block text-sm font-bold text-[#001F3F]';

interface SmartVendingLeadFormProps {
  /** Identifies which ad/landing page produced the lead. */
  source?: string;
}

function LeadForm({ source }: Required<SmartVendingLeadFormProps>) {
  const searchParams = useSearchParams();

  const attribution: Record<string, string> = { source };
  for (const key of ATTRIBUTION_PARAMS) {
    const value = searchParams.get(key);
    if (value) attribution[key] = value;
  }

  const [state, handleSubmit] = useForm(FORM_KEY, { data: attribution });

  useEffect(() => {
    if (!state.succeeded) return;
    trackAdsLeadConversion({ value: 1.0, currency: 'USD' });
    sendGAEvent('event', 'generate_lead', { form_name: 'smart_vending_offer', source });
  }, [state.succeeded, source]);

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-[#001F3F]/15 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,31,63,0.06)]">
        <h3 className="text-2xl font-black text-[#001F3F]">Thanks, we got it.</h3>
        <p className="mt-3 leading-relaxed text-[#001F3F]/80">
          We will review your location and reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-[#001F3F]/15 bg-white p-6 shadow-[0_10px_30px_rgba(0,31,63,0.06)] md:p-8"
    >
      {/* Honeypot: real users never see or fill this. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className={labelClass} htmlFor="employees">
          How many employees are on site daily?
        </label>
        <select id="employees" name="daily_employees" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a range
          </option>
          {employeeRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="name">
          Your name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="business">
          Business name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          required
          autoComplete="organization"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
          <ValidationError
            field="email"
            errors={state.errors}
            className="mt-2 text-sm font-bold text-[#8F1024]"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="font-normal text-[#001F3F]/60">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
      </div>

      <ValidationError
        errors={state.errors}
        className="rounded-lg bg-[#8F1024]/10 px-4 py-3 text-sm font-bold text-[#8F1024]"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#8F1024] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#740d1d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'Sending...' : 'Check My Location'}
      </button>
    </form>
  );
}

export default function SmartVendingLeadForm({
  source = 'google-ads-smart-vending',
}: SmartVendingLeadFormProps) {
  if (!FORMSPREE_PROJECT) {
    return (
      <div className="rounded-2xl border border-dashed border-[#8F1024]/50 bg-white p-8 text-center text-[#001F3F]">
        <p className="font-bold">Form not configured.</p>
        <p className="mt-2 text-sm">
          Set <code className="font-mono">NEXT_PUBLIC_FORMSPREE_PROJECT</code> to your Formspree project ID.
        </p>
      </div>
    );
  }

  return (
    <FormspreeProvider project={FORMSPREE_PROJECT}>
      <Suspense fallback={<div className="min-h-[560px]" />}>
        <LeadForm source={source} />
      </Suspense>
    </FormspreeProvider>
  );
}

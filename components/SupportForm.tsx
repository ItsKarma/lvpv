'use client';

import { FormspreeProvider, ValidationError, useForm } from '@formspree/react';

const FORMSPREE_PROJECT = process.env.NEXT_PUBLIC_FORMSPREE_PROJECT;

// Matches the form key in formspree.json.
const FORM_KEY = 'supportRequest';

const fieldClass =
  'w-full rounded-lg border border-[#001F3F]/20 bg-white px-4 py-3 text-[#001F3F] outline-none transition-colors focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20';
const labelClass = 'mb-2 block text-sm font-bold text-[#001F3F]';

function SupportRequestForm() {
  const [state, handleSubmit] = useForm(FORM_KEY);

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-[#001F3F]/15 bg-[#f8fafc] p-6 text-center">
        <h2 className="text-2xl font-black text-[#001F3F]">Thanks, we got it.</h2>
        <p className="mt-3 leading-relaxed text-[#001F3F]/80">
          We will look into it and get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
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
        <label className={labelClass} htmlFor="support-name">
          Your name
        </label>
        <input id="support-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="support-email">
            Email
          </label>
          <input
            id="support-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="mt-2 text-sm font-bold text-[#8F1024]"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="support-phone">
            Phone <span className="font-normal text-[#001F3F]/60">(optional)</span>
          </label>
          <input id="support-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="support-location">
          Machine location <span className="font-normal text-[#001F3F]/60">(optional)</span>
        </label>
        <input
          id="support-location"
          name="location"
          type="text"
          placeholder="Business name or address"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="support-message">
          What happened?
        </label>
        <textarea
          id="support-message"
          name="message"
          required
          rows={5}
          placeholder="Include the date/time and any details that help, like the item, the amount charged, or what the machine showed."
          className={fieldClass}
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="mt-2 text-sm font-bold text-[#8F1024]"
        />
      </div>

      <ValidationError
        errors={state.errors}
        className="rounded-lg bg-[#8F1024]/10 px-4 py-3 text-sm font-bold text-[#8F1024]"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#8F1024] px-6 py-4 text-lg font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#740d1d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  );
}

export default function SupportForm() {
  if (!FORMSPREE_PROJECT) {
    return (
      <div className="rounded-xl border border-dashed border-[#8F1024]/50 p-6 text-center text-[#001F3F]">
        <p className="font-bold">Form not configured.</p>
        <p className="mt-2 text-sm">
          Set <code className="font-mono">NEXT_PUBLIC_FORMSPREE_PROJECT</code> to your Formspree project ID.
        </p>
      </div>
    );
  }

  return (
    <FormspreeProvider project={FORMSPREE_PROJECT}>
      <SupportRequestForm />
    </FormspreeProvider>
  );
}

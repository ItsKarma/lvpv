'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FormspreeProvider, ValidationError, useForm } from '@formspree/react';

const FORMSPREE_PROJECT = process.env.NEXT_PUBLIC_FORMSPREE_PROJECT;

// Matches the form key in formspree.json.
const FORM_KEY = 'supportRequest';

const baseFieldClass =
  'w-full rounded-lg border bg-white px-4 py-3 text-[#001F3F] outline-none transition-colors focus:ring-2';
const okFieldClass = `${baseFieldClass} border-[#001F3F]/20 focus:border-[#0F6FFF] focus:ring-[#0F6FFF]/20`;
const errorFieldClass = `${baseFieldClass} border-[#D0103A] bg-[#D0103A]/5 focus:border-[#D0103A] focus:ring-[#D0103A]/20`;
const labelClass = 'mb-2 block text-sm font-bold text-[#001F3F]';
const errorTextClass = 'mt-2 text-sm font-bold text-[#8F1024]';

// something@something.something
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Digits plus optional spaces, ( ) - . and a leading +
const PHONE_CHARS_PATTERN = /^\+?[\d\s().-]+$/;

type FieldName = 'name' | 'email' | 'phone' | 'message';
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = ['name', 'email', 'phone', 'message'];
const EMPTY_VALUES: Values = { name: '', email: '', phone: '', message: '' };

// Formats US numbers as you type: 610-835-5924 (or 1-610-835-5924).
// Numbers starting with + are left alone so international formats still work.
function formatPhone(raw: string): string {
  if (raw.trim().startsWith('+')) return raw;
  let digits = raw.replace(/\D/g, '');
  let prefix = '';
  if (digits.length > 10 && digits.startsWith('1')) {
    prefix = '1-';
    digits = digits.slice(1);
  }
  digits = digits.slice(0, 10);
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6)].filter(Boolean);
  return prefix + parts.join('-');
}

// Where the caret should land in `formatted` so it stays after the same number of digits.
function caretAfterDigits(formatted: string, digitCount: number): number {
  if (digitCount <= 0) return 0;
  let seen = 0;
  for (let i = 0; i < formatted.length; i += 1) {
    if (/\d/.test(formatted[i])) seen += 1;
    if (seen === digitCount) return i + 1;
  }
  return formatted.length;
}

function validate(values: Values): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  if (!name) errors.name = 'Please enter your name.';

  if (email && !EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email, like name@example.com.';
  }

  if (phone) {
    const digits = phone.replace(/\D/g, '');
    if (!PHONE_CHARS_PATTERN.test(phone)) {
      errors.phone = 'Use numbers only. ( ) - and . are OK.';
    } else if (digits.length < 10 || digits.length > 15) {
      errors.phone = 'Enter a full phone number, like 610-555-1234.';
    }
  }

  if (!email && !phone) {
    const msg = 'Enter an email or phone number so we can reach you.';
    errors.email = msg;
    errors.phone = msg;
  }

  if (!message) errors.message = 'Please tell us what happened.';

  return errors;
}

function SupportRequestForm() {
  const [state, handleSubmit] = useForm(FORM_KEY);
  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  const errors = validate(values);
  const showError = (field: FieldName) => (touched[field] ? errors[field] : undefined);

  const onChange =
    (field: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const input = event.target;
      if (field !== 'phone') {
        setValues((prev) => ({ ...prev, [field]: input.value }));
        return;
      }

      const caret = input.selectionStart ?? input.value.length;
      const digitsBeforeCaret = input.value.slice(0, caret).replace(/\D/g, '').length;
      const formatted = formatPhone(input.value);
      setValues((prev) => ({ ...prev, phone: formatted }));

      // Keep the caret in place when editing the middle of the number.
      if (formatted !== input.value && caret < input.value.length) {
        const nextCaret = caretAfterDigits(formatted, digitsBeforeCaret);
        requestAnimationFrame(() => input.setSelectionRange(nextCaret, nextCaret));
      }
    };

  const onBlur = (field: FieldName) => () => {
    // Don't nag about an empty field the user just tabbed through.
    if (!values[field].trim() && field !== 'name' && field !== 'message') return;
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const current = validate(values);
    const firstInvalid = FIELD_ORDER.find((field) => current[field]);
    if (firstInvalid) {
      event.preventDefault();
      setTouched({ name: true, email: true, phone: true, message: true });
      document.getElementById(`support-${firstInvalid}`)?.focus();
      return;
    }
    return handleSubmit(event);
  };

  const fieldProps = (field: FieldName) => {
    const error = showError(field);
    return {
      id: `support-${field}`,
      name: field,
      value: values[field],
      onChange: onChange(field),
      onBlur: onBlur(field),
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? `support-${field}-error` : undefined,
      className: error ? errorFieldClass : okFieldClass,
    };
  };

  const fieldError = (field: FieldName) => {
    const error = showError(field);
    if (!error) return null;
    return (
      <p id={`support-${field}-error`} className={errorTextClass}>
        {error}
      </p>
    );
  };

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
    <form onSubmit={onSubmit} noValidate className="space-y-5 text-left">
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
        <input type="text" autoComplete="name" {...fieldProps('name')} />
        {fieldError('name')}
      </div>

      <p className="-mb-2 text-sm text-[#001F3F]/80">
        Leave an email or phone number (or both) so we can follow up.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="support-email">
            Email
          </label>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@example.com"
            {...fieldProps('email')}
          />
          {fieldError('email')}
          <ValidationError field="email" errors={state.errors} className={errorTextClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="support-phone">
            Phone
          </label>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="610-555-1234"
            {...fieldProps('phone')}
          />
          {fieldError('phone')}
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
          className={okFieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="support-message">
          What happened?
        </label>
        <textarea
          rows={5}
          placeholder="Include the date/time and any details that help, like the item, the amount charged, or what the machine showed."
          {...fieldProps('message')}
        />
        {fieldError('message')}
        <ValidationError field="message" errors={state.errors} className={errorTextClass} />
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

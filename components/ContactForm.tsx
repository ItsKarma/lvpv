const recipient = 'info@lvpvending.com';
const subject = 'Inquiry About LVP Vending';
const body = [
  'I am interested in learning more about placing an LVP Vending machine at my business.',
  '',
  'Business name:',
  'Location:',
  'Best contact:',
  '',
  'Questions / notes:',
  '',
  'Thanks,',
].join('\n');

const mailtoHref = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function ContactForm() {
  return (
    <div className="max-w-xl mx-auto rounded-2xl border border-[#001F3F]/15 bg-white p-6 md:p-7 shadow-[0_10px_30px_rgba(0,31,63,0.06)] text-center">
      <p className="text-[#001F3F] text-base leading-7 mb-6">
        Start a conversation about bringing LVP Vending to your location.
      </p>

      <a
        href={mailtoHref}
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#8F1024] px-4 py-3 text-xs font-bold uppercase tracking-wide text-white whitespace-nowrap hover:bg-[#740d1d] transition-colors sm:px-6 sm:text-sm md:text-base"
      >
        Start the Conversation
      </a>
    </div>
  );
}

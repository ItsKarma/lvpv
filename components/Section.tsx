'use client';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function Section({ id, title, children, dark = false, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-14 md:py-16 px-4 ${dark ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'} scroll-mt-20 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-8 md:mb-10 text-center ${dark ? 'text-white' : 'text-[#001F3F]'}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

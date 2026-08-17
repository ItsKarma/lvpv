'use client';

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  titleClassName?: string;
  subtitle: string;
  features?: string[];
  ctaText: string;
  ctaHref?: string;
}

export default function Hero({
  eyebrow = '',
  title,
  titleClassName = 'text-5xl md:text-7xl font-black text-lvp-navy leading-tight tracking-tight',
  subtitle,
  features = ['Authentic Pokemon Booster Packs', 'Earn 10% of Every Sale'],
  ctaText,
  ctaHref = '#contact',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-20">
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#8F1024]" />

      <div className="relative z-10 mx-auto flex min-h-[54vh] max-w-5xl flex-col items-center justify-center px-4 pt-8 pb-8 text-center md:min-h-[60vh] md:pb-10">
        <div className="animate-fade-in-up space-y-5">
          {eyebrow && (
            <p className="text-[#001F3F] font-bold text-sm tracking-widest uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className={titleClassName}>
            {title}
          </h1>
          <p className="text-2xl md:text-4xl text-lvp-navy font-semibold">
            {subtitle}
          </p>

          {/* Feature highlights */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-base text-lvp-navy font-medium">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="text-[#8F1024] text-2xl font-bold">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={ctaHref}
              className="inline-block bg-[#8F1024] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#740d1d] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

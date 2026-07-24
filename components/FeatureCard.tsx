'use client';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  dark?: boolean;
}

export default function FeatureCard({ icon, title, description, dark = false }: FeatureProps) {
  return (
    <div
      className={`flex gap-4 rounded-xl p-5 shadow-[0_8px_24px_rgba(0,31,63,0.05)] ${
        dark ? 'border border-white/30 bg-white text-[#001F3F]' : 'border border-[#001F3F]/15 bg-white text-[#001F3F]'
      }`}
    >
      <div className="text-[#8F1024] flex-shrink-0 text-3xl mt-0.5">{icon}</div>
      <div>
        <h3 className="font-black text-xl mb-2 text-[#001F3F]">{title}</h3>
        <p className="text-[#001F3F] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

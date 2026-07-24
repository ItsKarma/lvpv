'use client';

interface LogoProps {
  dark?: boolean;
}

export default function Logo({ dark = false }: LogoProps) {
  const frameBorder = dark ? 'border-white/80' : 'border-[#001F3F]';
  const frameBg = dark ? 'bg-[#001F3F]' : 'bg-white';
  const lvColor = dark ? 'text-white' : 'text-[#001F3F]';
  const vendColor = dark ? 'text-white' : 'text-[#001F3F]';

  return (
    <div className="flex items-center gap-3">
      <div className={`border-2 rounded-md px-3 py-1.5 shadow-sm ${frameBorder} ${frameBg}`}>
        <span className={`text-lg font-black tracking-wider ${lvColor}`}>LV</span>
        <span className="text-lg font-black tracking-wider text-[#8F1024]">P</span>
      </div>
      <div className={`flex flex-col leading-tight ${vendColor}`}>
        <span className="text-[11px] font-black tracking-[0.25em]">VENDING</span>
      </div>
    </div>
  );
}

'use client';

interface LogoProps {
  dark?: boolean;
  bordered?: boolean;
}

export default function Logo({ dark = false, bordered = true }: LogoProps) {
  const frameBorder = dark ? 'border-white/80' : 'border-[#001F3F]';
  const frameBg = dark ? 'bg-[#001F3F]' : 'bg-white';
  const lvColor = dark ? 'text-white' : 'text-[#001F3F]';
  const vendColor = dark ? 'text-white' : 'text-[#001F3F]';
  const lvpSize = bordered ? 'text-lg' : 'text-2xl';
  const vendingSize = bordered ? 'text-[11px] tracking-[0.25em]' : 'text-base tracking-[0.2em]';

  return (
    <div className="flex items-center gap-3">
      <div className={bordered ? `border-2 rounded-md px-3 py-1.5 shadow-sm ${frameBorder} ${frameBg}` : ''}>
        <span className={`${lvpSize} font-black tracking-wider ${lvColor}`}>LV</span>
        <span className={`${lvpSize} font-black tracking-wider text-[#8F1024]`}>P</span>
      </div>
      <div className={`flex flex-col leading-tight ${vendColor}`}>
        <span className={`${vendingSize} font-black`}>VENDING</span>
      </div>
    </div>
  );
}

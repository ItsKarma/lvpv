'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

interface NavItem {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  navItems?: NavItem[];
  ctaHref?: string;
  ctaLabel?: string;
}

const defaultNavItems: NavItem[] = [
  { label: 'Our Machines', href: '/our-machines' },
  { label: 'About Us', href: '/about' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function SiteHeader({ navItems = defaultNavItems, ctaHref = '/#contact', ctaLabel = 'Get a Free Machine' }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-lvp-gray">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#001F3F] hover:underline decoration-[#8F1024] decoration-2 underline-offset-4 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="bg-[#8F1024] text-white px-6 py-2 rounded-lg hover:bg-[#740d1d] transition-colors font-medium"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}

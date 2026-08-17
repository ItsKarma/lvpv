'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-lvp-gray">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
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
        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#001F3F] transition-colors hover:bg-[#001F3F]/5 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav id="mobile-navigation" className="border-t border-[#001F3F]/10 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-[#001F3F] transition-colors hover:bg-[#001F3F]/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#8F1024] px-4 py-3 text-center font-bold text-white transition-colors hover:bg-[#740d1d]"
            >
              {ctaLabel}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

interface SiteFooterProps {
  tagline: string;
}

export default function SiteFooter({ tagline }: SiteFooterProps) {
  return (
    <footer className="bg-[#001F3F] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-flex">
            <Logo dark />
          </div>
        </div>
        <p className="text-white mb-4">{tagline}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm mb-8">
          <Link href="/our-machines" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
            Our Machines
          </Link>
          <Link href="/about" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
            About Us
          </Link>
          <Link href="/service-area" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
            Service Area
          </Link>
          <a href="mailto:info@lvpvending.com" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
            info@lvpvending.com
          </a>
          <Link href="/support" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
            Support
          </Link>
          <Link href="/brand-affiliation-disclaimer" className="text-white underline decoration-[#ff5f70] decoration-2 underline-offset-4 hover:text-white">
            Brand Affiliation Disclaimer
          </Link>
        </div>
        <p className="text-white text-xs">
          © {new Date().getFullYear()} LVP Vending. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

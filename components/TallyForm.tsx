'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

interface TallyFormProps {
  src: string;
  title: string;
}

export default function TallyForm({ src, title }: TallyFormProps) {
  return (
    <>
      <iframe
        data-tally-src={src}
        title={title}
        className="min-h-[440px] w-full border-0"
        loading="eager"
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
    </>
  );
}

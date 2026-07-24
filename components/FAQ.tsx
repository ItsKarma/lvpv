'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-[#001F3F]/20 rounded-xl overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,31,63,0.04)]">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#F2F5F8] transition-colors"
          >
            <span className="font-bold text-[#001F3F]">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-[#8F1024] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-[#F2F5F8] text-[#001F3F] border-t border-[#001F3F]/20">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

'use client';

import { useState } from 'react';

type FaqItem = { question: string; answer: string };

export default function TopicFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl overflow-hidden transition-colors"
            style={{
              background: isOpen ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
              border: `1px solid ${isOpen ? 'var(--accent)' : 'var(--border-color)'}`,
            }}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-white/5"
              aria-expanded={isOpen}
              aria-controls={`topic-faq-answer-${index}`}
            >
              <h3
                className="font-display text-lg sm:text-xl font-semibold pr-4 flex-1"
                style={{ color: 'var(--text-primary)' }}
              >
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full mr-3 text-sm font-bold flex-shrink-0"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  {index + 1}
                </span>
                {item.question}
              </h3>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={`topic-faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[800px]' : 'max-h-0'
              }`}
            >
              <div
                className="px-5 sm:px-6 pb-6 pt-0 ml-10 text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <div
                  className="pt-2 border-t border-dashed"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  {item.answer.split('\n\n').map((para, i) => (
                    <p key={i} className={i > 0 ? 'mt-3' : ''}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

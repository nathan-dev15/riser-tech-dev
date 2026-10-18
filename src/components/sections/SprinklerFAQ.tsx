'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { sprinklerFaqs } from '@/lib/sprinkler-faqs';

const INITIAL_VISIBLE = 5;

export function SprinklerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? sprinklerFaqs : sprinklerFaqs.slice(0, INITIAL_VISIBLE);

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Reliable Sprinkler — Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Technical questions about UL Listed &amp; FM Approved Reliable fire sprinklers — K-factor, bulb colours, QR vs SR, orientations, and more. Answered by Riser Technologies, authorised Reliable Sprinkler distributor in Chennai, Tamil Nadu &amp; India.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {visibleFaqs.map((faq, index) => (
            <Card key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-sm sm:text-base font-semibold pr-4 text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 shrink-0 text-amber-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 shrink-0 text-amber-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </Card>
          ))}
        </div>

        {!showAll && sprinklerFaqs.length > INITIAL_VISIBLE && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-semibold text-sm sm:text-base hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors duration-200"
            >
              See More
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => { setShowAll(false); setOpenIndex(0); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-semibold text-sm sm:text-base hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors duration-200"
            >
              Show Less
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

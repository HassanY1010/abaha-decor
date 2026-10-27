'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqData } from '@/data/faq';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createWhatsAppLink } from '@/lib/whatsapp';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E2DA]">
      <Container size="narrow">
        <SectionHeading
          badge="الأسئلة الشائعة"
          title="الأسئلة الشائعة حول خدمات الديكور والدهانات"
          subtitle="كل ما تود معرفته عن آليات التسعير، مواعيد التسليم، اختيار المواد، ومناطق الخدمة في الدمام والشرقية"
        />

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id);
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[#E5E2DA] overflow-hidden transition-all duration-200 hover:border-[#C59B27]/40"
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-start text-[#111827] hover:text-[#C59B27] font-bold text-base sm:text-lg focus-visible:outline-2 focus-visible:outline-[#C59B27] gap-4"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C59B27] shrink-0" aria-hidden="true" />
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5E6672] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#C59B27]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-[#5E6672] leading-relaxed border-t border-[#F0EEE8]"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More Questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#E5E2DA]">
          <p className="text-sm text-[#5E6672] mb-3">
            هل لديك استفسار آخر لم تجد إجابته هنا؟
          </p>
          <a
            href={createWhatsAppLink({ customMessage: 'لدي استفسار عن خدمات التشطيب لم يُذكر في الأسئلة الشائعة.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#111827] hover:text-[#C59B27] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
            <span>تحدث مباشرة مع مهندس التشطيبات عبر الواتساب</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

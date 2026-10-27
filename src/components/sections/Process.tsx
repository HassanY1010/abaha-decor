import React from 'react';
import {
  MessageSquare,
  ClipboardCheck,
  FileText,
  Hammer,
  CheckCircle2,
} from 'lucide-react';
import { processSteps } from '@/data/process';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
  FileText: <FileText className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
  Hammer: <Hammer className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white border-b border-[#E5E2DA]">
      <Container size="wide">
        <SectionHeading
          badge="منهجية العمل"
          title="خطوات واضحة تقود إلى تسليم متقن"
          subtitle="تسلسل تنفيذي منظم يضمن سلاسة الإنجاز وإبقاءك على اطلاع كامل بكل مرحلة دون مفاجآت"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step) => {
            const icon = iconMap[step.iconName] || (
              <CheckCircle2 className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />
            );

            return (
              <div
                key={step.stepNumber}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5E2DA] hover:border-[#C59B27]/40 transition-colors"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#111827] text-white text-xs font-bold flex items-center justify-center font-mono">
                      {step.stepNumber}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E2DA] flex items-center justify-center">
                      {icon}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#111827] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E6672] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {step.durationApprox && (
                  <div className="pt-3 border-t border-[#E5E2DA]/60">
                    <span className="text-[11px] text-[#A07810] font-semibold bg-[#C59B27]/10 px-2.5 py-1 rounded-md inline-block">
                      المدة: {step.durationApprox}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

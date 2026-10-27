import React from 'react';
import {
  BadgePercent,
  Clock,
  ShieldCheck,
  Sparkles,
  Users,
  HeartHandshake,
} from 'lucide-react';
import { whyUsPoints } from '@/data/why-us';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  BadgePercent: <BadgePercent className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  Clock: <Clock className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  Users: <Users className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-b border-[#E5E2DA]">
      <Container size="wide">
        <SectionHeading
          badge="معايير الثقة"
          title="لماذا يفضل عملاؤنا التعاقد معنا؟"
          subtitle="نبني علاقاتنا على الوضوح الكامل، الجودة الواقعية الملموسة، والالتزام الذي يحمي وقتك وميزانيتك"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsPoints.map((point) => {
            const icon = iconMap[point.iconName] || (
              <ShieldCheck className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />
            );

            return (
              <div
                key={point.id}
                className="flex flex-col p-8 rounded-2xl bg-[#FAF9F6] border border-[#E5E2DA] hover:border-[#C59B27]/40 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center mb-5 shadow-xs shrink-0">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[#5E6672] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

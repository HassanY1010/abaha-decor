import React from 'react';
import {
  Building2,
  PenTool,
  Layers,
  Palette,
  Grid,
  Lightbulb,
  Check,
  ArrowLeft,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createWhatsAppLink } from '@/lib/whatsapp';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  PenTool: <PenTool className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  Layers: <Layers className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  Palette: <Palette className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  Grid: <Grid className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E2DA]">
      <Container size="wide">
        <SectionHeading
          badge="خدماتنا المتخصصة"
          title="حلول هندسية متكاملة للتشطيبات والديكور في أبها"
          subtitle="باقة شاملة من خدمات التشطيب والتصميم الداخلي المنفذة بأعلى معايير الإتقان للفلل والمنازل والمشاريع التجارية"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const icon = iconMap[service.iconName] || (
              <Building2 className="w-6 h-6 text-[#C59B27]" aria-hidden="true" />
            );

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl bg-white p-5 sm:p-7 border border-[#E5E2DA] hover:border-[#C59B27]/50 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Service Icon & Deliverable badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-[#E5E2DA] flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-xs">
                      {icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#5E6672] bg-[#F3F1EC] px-2.5 py-1 rounded-md">
                      تنفيذ احترافي
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#C59B27] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#5E6672] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className="pt-4 border-t border-[#F0EEE8] mb-6">
                    <span className="text-xs font-bold text-[#181C20] mb-3 block">
                      أبرز ما تشمله الخدمة:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#5E6672]">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Direct Action CTA */}
                <div className="pt-4 border-t border-[#F0EEE8] flex items-center justify-between">
                  <a
                    href={createWhatsAppLink({ serviceTitle: service.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`طلب استشارة في خدمة ${service.title} عبر الواتساب`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] group-hover:text-[#C59B27] transition-colors"
                  >
                    <span>طلب استشارة في هذه الخدمة</span>
                    <span className="sr-only"> ({service.title})</span>
                    <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

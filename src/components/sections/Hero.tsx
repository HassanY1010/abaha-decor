import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { createWhatsAppLink } from '@/lib/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#F3F1EC] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E5E2DA]">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#E5E2DA_1px,transparent_1px),linear-gradient(to_bottom,#E5E2DA_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 flex flex-col text-start">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#C59B27]/10 text-[#A07810] border border-[#C59B27]/25 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" aria-hidden="true" />
              <span>{companyData.serviceArea} • تشطيبات معمارية متكاملة</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] leading-[1.2] mb-6">
              تشطيبات وديكورات داخلية{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#A07810]">
                بمعايير هندسية متقنة
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5E6672] leading-relaxed max-w-2xl mb-8">
              {companyData.tagline}. نرافقك من الفكرة والمخططات وحتى تسليم المفتاح بأعلى جودة للمواد، والتزام موثق بالجدول الزمني، وإشراف هندسي مستمر على كل مرحلة.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Button
                href={createWhatsAppLink()}
                variant="accent"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" aria-hidden="true" />}
              >
                {companyData.isContactConfigured ? 'طلب عرض سعر عبر الواتساب' : 'اطلب عرض سعر لمشروعك'}
              </Button>

              <Button
                href="#projects"
                variant="outline"
                size="lg"
                icon={<ArrowLeft className="w-4 h-4 rtl:rotate-0" aria-hidden="true" />}
                iconPosition="end"
              >
                استعراض نماذج الأعمال
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#E5E2DA] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-[#C59B27]/10 text-[#C59B27] shrink-0">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#181C20]">إشراف هندسي موقعي</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-[#C59B27]/10 text-[#C59B27] shrink-0">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#181C20]">التزام بالجدول الزمني</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-[#C59B27]/10 text-[#C59B27] shrink-0">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#181C20]">عقود وجداول كميات واضحة</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Panel */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-br from-[#111827] to-[#1F2937] p-5 sm:p-8 text-white shadow-xl border border-gray-800">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-gray-800 mb-5 sm:mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#C59B27] tracking-wider uppercase">
                    معايير التنفيذ
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">منظومة التشطيب الاحترافي</h3>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs text-gray-300 font-mono">
                  Turnkey
                </span>
              </div>

              {/* Architectural Highlights Checklist */}
              <div className="space-y-3.5 sm:space-y-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C59B27]/50 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-gray-100">أسقف وجبس بورد</span>
                    <span className="text-[11px] sm:text-xs text-[#C59B27] shrink-0">ليزر وميزان دقيق</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    هياكل حديدية معتمدة، بيوت ستائر مخفية، ومسارات إنارة مغناطيسية مدمجة.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C59B27]/50 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-gray-100">أرضيات وبورسلان</span>
                    <span className="text-[11px] sm:text-xs text-[#C59B27] shrink-0">قص ليزر ٤٥°</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    تسوية خرسانية ذاتية، غراء أوروبي عالي الالتصاق، وترويبات إيبوكسي.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C59B27]/50 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-gray-100">دهانات وتشطيبات جدارية</span>
                    <span className="text-[11px] sm:text-xs text-[#C59B27] shrink-0">معاجين ناعمة</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    صنفرة ميكانيكية، طبقات أساس متينة، وبدائل خشب ورخام فاخرة.
                  </p>
                </div>
              </div>

              {/* Quick direct inquiry note */}
              <div className="mt-6 pt-5 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span>معاينة موقعية مجانية للمشاريع</span>
                <a
                  href="#contact"
                  className="text-[#C59B27] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  احجز موعداً
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

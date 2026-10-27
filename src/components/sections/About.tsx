import React from 'react';
import { Target, Sparkles, Ruler, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Ruler className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
      title: 'دقة المقايسة والتنفيذ',
      description: 'نرفع المقاسات بأجهزة الليزر الحديثة ونعتمد جداول كميات تفصيلية تمنع الهدر وتحافظ على الميزانية.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
      title: 'رؤية ديكورية معاصرة',
      description: 'نواكب أحدث اتجاهات التصميم الداخلي مع الحفاظ على ملاءمتها للطابع المعماري واحتياجات الأسرة.',
    },
    {
      icon: <Target className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
      title: 'إدارة متكاملة للمشروع',
      description: 'من التكسير والتأسيس وحتى أعمال الدهان والتنظيف، يتولى فريقنا التنسيق الكامل لتوفير وقتك وجهدك.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />,
      title: 'عقود ومواصفات واضحة',
      description: 'نلتزم بعقود نظامية واضحة تضمن حقوق الطرفين وتحدد بدقة مواصفات المواد وجداول الدفعات ومراحل التسليم.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-[#E5E2DA]">
      <Container size="wide">
        <SectionHeading
          badge="عن الشركة"
          title="نحن نبني مساحات تعكس أسلوب حياتك وتلبي طموحك"
          subtitle="شريكك الموثوق في أعمال التشطيبات والديكور الداخلي بالمملكة العربية السعودية"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Description */}
          <div className="lg:col-span-6 space-y-5 text-[#5E6672] leading-relaxed text-base sm:text-lg">
            <p>
              في <strong className="text-[#111827] font-bold">{companyData.name}</strong>، نؤمن بأن التشطيب ليس مجرد دهان أو تركيب أرضيات، بل هو صناعة فراغ معماري يجمع بين الراحة، الوظيفة، والجمال الدائم.
            </p>
            <p>
              {companyData.fullDescription}
            </p>
            <p className="text-sm bg-[#FAF9F6] p-4 rounded-xl border border-[#E5E2DA] text-[#181C20]">
              <span className="font-bold text-[#C59B27]">نطاق أعمالنا: </span>
              نخدم عملاءنا في {companyData.serviceArea} للمشاريع السكنية (فلل، شقق، دوبلكس) والمشاريع التجارية (مكاتب، معارض، مقاهي).
            </p>
          </div>

          {/* Value Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#FAF9F6] border border-[#E5E2DA] hover:border-[#C59B27]/40 hover:bg-[#FAF9F6]/80 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E2DA] flex items-center justify-center mb-4 shadow-xs">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6672] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

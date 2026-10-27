import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Building2,
  PenTool,
  Layers,
  Palette,
  Grid,
  Lightbulb,
  Check,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  ChevronLeft,
  Clock,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { companyData } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  productionDomain,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from '@/lib/metadata';
import { createWhatsAppLink, getDirectCallLink } from '@/lib/whatsapp';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8 text-[#C59B27]" aria-hidden="true" />,
  PenTool: <PenTool className="w-8 h-8 text-[#C59B27]" aria-hidden="true" />,
  Layers: <Layers className="w-8 h-8 text-[#C59B27]" aria-hidden="true" />,
  Palette: <Palette className="w-8 h-8 text-[#C59B27]" aria-hidden="true" />,
  Grid: <Grid className="w-8 h-8 text-[#C59B27]" aria-hidden="true" />,
  Lightbulb: <Lightbulb className="w-8 h-8 text-[#C59B27]" aria-hidden="true" />,
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'الخدمة غير متوفرة',
    };
  }

  const pageTitle = service.seoTitle || `${service.title} بالدمام والخبر | ${companyData.name}`;
  const pageDescription =
    service.seoDescription ||
    `${service.title} في الدمام والخبر والمنطقة الشرقية. تنفيذ هندسي متقن ومواد أصلية معتمدة مع ${companyData.name}. اطلب معاينة موقعية الآن.`;
  const canonicalUrl = `${productionDomain}/services/${service.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: companyData.name,
      locale: 'ar_SA',
      type: 'article',
      images: [
        {
          url: '/images/og-share.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} - ${companyData.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/images/og-share.jpg'],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceIcon = iconMap[service.iconName] || (
    <Building2 className="w-8 h-8 text-[#C59B27]" aria-hidden="true" />
  );

  const breadcrumbs = [
    { name: 'الرئيسية', url: productionDomain },
    { name: 'خدماتنا', url: `${productionDomain}/#services` },
    { name: service.title, url: `${productionDomain}/services/${service.slug}` },
  ];

  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // خدمات أخرى ذات صلة لتعزيز الربط الداخلي
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-[#FAF9F6] pb-24">
        {/* Breadcrumb Navigation Bar */}
        <nav
          aria-label="مسار التصفح"
          className="bg-white border-b border-[#E5E2DA] py-3.5 text-xs text-[#5E6672]"
        >
          <Container size="wide">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C59B27] transition-colors font-medium flex items-center gap-1"
                >
                  الرئيسية
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                <ChevronLeft className="w-3.5 h-3.5 rtl:rotate-0" />
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#C59B27] transition-colors font-medium"
                >
                  خدماتنا
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">
                <ChevronLeft className="w-3.5 h-3.5 rtl:rotate-0" />
              </li>
              <li className="text-[#111827] font-bold" aria-current="page">
                {service.title}
              </li>
            </ol>
          </Container>
        </nav>

        {/* Hero Service Header */}
        <header className="relative bg-gradient-to-b from-white to-[#F3F1EC] pt-12 pb-16 border-b border-[#E5E2DA]">
          <Container size="wide">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C59B27]/10 text-[#785404] border border-[#C59B27]/25 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C59B27]" aria-hidden="true" />
                <span>خدمة معتمدة في {companyData.serviceArea}</span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E2DA] flex items-center justify-center shrink-0 shadow-xs mt-1">
                  {serviceIcon}
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight mb-3">
                    {service.title} في الدمام والخبر
                  </h1>
                  <p className="text-base sm:text-lg text-[#5E6672] leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  href={createWhatsAppLink({ serviceTitle: service.title })}
                  variant="accent"
                  size="lg"
                  icon={<MessageCircle className="w-5 h-5" aria-hidden="true" />}
                >
                  طلب مقايسة في {service.title}
                </Button>

                <Button
                  href={getDirectCallLink()}
                  variant="outline"
                  size="lg"
                  icon={<PhoneCall className="w-4 h-4" aria-hidden="true" />}
                >
                  اتصال هاتفي مباشر
                </Button>
              </div>
            </div>
          </Container>
        </header>

        {/* Main Content Layout */}
        <Container size="wide" className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Features Section */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E2DA] shadow-xs">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2.5 border-b border-[#F0EEE8] pb-4">
                  <Sparkles className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />
                  <span>مميزات وضوابط تنفيذ الخدمة</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E2DA] flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#181C20] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Materials & Technical Specifications */}
              {service.materialsInfo && service.materialsInfo.length > 0 && (
                <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E2DA] shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2.5 border-b border-[#F0EEE8] pb-4">
                    <ShieldCheck className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />
                    <span>المواصفات الفنية والمواد المعتمدة</span>
                  </h2>
                  <p className="text-sm text-[#5E6672] leading-relaxed mb-6">
                    نعتمد فقط المنتجات الأصلية والمواد المطابقة للمواصفات القياسية السعودية لمقاومة عوامل الرطوبة والحرارة بالمنطقة الشرقية:
                  </p>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-[#181C20]">
                    {service.materialsInfo.map((mat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E2DA]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#C59B27] shrink-0 mt-1.5" aria-hidden="true" />
                        <span className="font-medium leading-relaxed">{mat}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Engineering Execution Process */}
              {service.processSteps && service.processSteps.length > 0 && (
                <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E2DA] shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2.5 border-b border-[#F0EEE8] pb-4">
                    <Clock className="w-5 h-5 text-[#C59B27]" aria-hidden="true" />
                    <span>مراحل التنفيذ الهندسية خطوة بخطوة</span>
                  </h2>
                  <div className="space-y-6">
                    {service.processSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs border border-[#C59B27]/40">
                          {idx + 1}
                        </div>
                        <div className="flex-1 pb-6 border-b border-[#F0EEE8] last:border-b-0 last:pb-0">
                          <h3 className="text-base font-bold text-[#111827] mb-1.5">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#5E6672] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Deliverables */}
              {service.deliverables && service.deliverables.length > 0 && (
                <section className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-[#E5E2DA]">
                  <h2 className="text-lg sm:text-xl font-bold text-[#111827] mb-4">
                    ما يستلمه العميل بعد إنجاز العمل:
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {service.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E5E2DA] text-xs sm:text-sm font-semibold text-[#181C20] shadow-xs"
                      >
                        ✓ {deliv}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Specific FAQ */}
              {service.faq && service.faq.length > 0 && (
                <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E2DA] shadow-xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-6 border-b border-[#F0EEE8] pb-4">
                    الأسئلة الأكثر شيوعاً حول {service.title}
                  </h2>
                  <div className="space-y-5">
                    {service.faq.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5E2DA]">
                        <h3 className="text-sm sm:text-base font-bold text-[#111827] mb-2">
                          {item.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5E6672] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Request Quote Card */}
              <div className="bg-gradient-to-br from-[#111827] to-[#1F2937] text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-gray-800 sticky top-28">
                <span className="text-xs font-semibold text-[#C59B27] tracking-wider uppercase block mb-1">
                  معاينة موقعية مجانية
                </span>
                <h3 className="text-xl font-bold mb-3">
                  ترغب بمقايسة دقيقة لمشروعك؟
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  يسعدنا استقبال استفسارك عبر الواتساب أو الهاتف؛ نحدد معك موعداً لزيارة العقار في الدمام أو الخبر ورفع المقاسات وتقديم جدول كميات مفصل.
                </p>

                <div className="space-y-3">
                  <Button
                    href={createWhatsAppLink({ serviceTitle: service.title })}
                    variant="accent"
                    size="md"
                    className="w-full justify-center"
                    icon={<MessageCircle className="w-4 h-4" aria-hidden="true" />}
                  >
                    محادثة واتساب مباشرة
                  </Button>

                  <Button
                    href={getDirectCallLink()}
                    variant="outline"
                    size="md"
                    className="w-full justify-center border-gray-700 text-white hover:bg-white/10"
                    icon={<PhoneCall className="w-4 h-4" aria-hidden="true" />}
                  >
                    اتصال هاتفي
                  </Button>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-800 text-xs text-gray-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                    <span>تغطية كاملة: الدمام، الخبر، والظهران</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                    <span>عقود وجداول كميات هندسية معتمدة</span>
                  </div>
                </div>
              </div>

              {/* Related Services Internal Links */}
              <div className="bg-white rounded-2xl p-6 border border-[#E5E2DA] shadow-xs">
                <h3 className="text-base font-bold text-[#111827] mb-4 pb-3 border-b border-[#F0EEE8]">
                  خدمات هندسية أخرى ذات صلة
                </h3>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="group flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] border border-[#E5E2DA] hover:border-[#C59B27]/50 hover:bg-white transition-all text-xs sm:text-sm"
                    >
                      <span className="font-semibold text-[#181C20] group-hover:text-[#C59B27] transition-colors">
                        {rel.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#C59B27] rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EEE8]">
                  <Link
                    href="/#services"
                    className="text-xs font-bold text-[#C59B27] hover:underline inline-flex items-center gap-1"
                  >
                    <span>العودة لكافة الخدمات</span>
                    <span aria-hidden="true">←</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}

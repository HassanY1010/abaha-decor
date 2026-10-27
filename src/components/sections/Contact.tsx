'use client';

import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  Calculator,
  CheckCircle,
} from 'lucide-react';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  createWhatsAppLink,
  getDirectCallLink,
  getEmailLink,
} from '@/lib/whatsapp';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    projectType: 'فيلا سكنية',
    serviceTitle: servicesData[0]?.title || 'التشطيب المتكامل',
    approxArea: '350',
    city: companyData.city,
    customMessage: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const link = createWhatsAppLink({
      projectType: formData.projectType,
      serviceTitle: formData.serviceTitle,
      approxArea: formData.approxArea,
      city: formData.city,
      customMessage: formData.customMessage,
    });

    // Open WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <Container size="wide">
        <SectionHeading
          badge="تواصل معنا"
          title="ابدأ مشروعك اليوم مع فريق هندسي متخصص"
          subtitle="يسعدنا استقبال استفساراتكم وترتيب معاينة موقعية لتقديم دراسة ومقايسة فنية دقيقة"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-[#E5E2DA]">
              <h3 className="text-xl font-bold text-[#111827] mb-6">
                قنوات الاتصال المباشرة
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#C59B27] shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#5E6672] block">
                      الاتصال الهاتفي المباشر
                    </span>
                    <a
                      href={getDirectCallLink()}
                      dir="ltr"
                      className="text-base sm:text-lg font-bold text-[#111827] hover:text-[#C59B27] transition-colors"
                    >
                      {companyData.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#5E6672] block">
                      محادثة واتساب فورية
                    </span>
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#25D366] hover:underline"
                    >
                      بدء محادثة سريعة مع المهندس المسؤول
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E2DA] flex items-center justify-center text-[#C59B27] shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#5E6672] block">
                      البريد الإلكتروني
                    </span>
                    <a
                      href={getEmailLink()}
                      className="text-sm font-bold text-[#111827] hover:text-[#C59B27] transition-colors"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                {/* Working hours & location */}
                <div className="pt-6 border-t border-[#E5E2DA] space-y-3 text-xs sm:text-sm text-[#5E6672]">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" aria-hidden="true" />
                    <span>{companyData.addressSnippet || companyData.city}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" aria-hidden="true" />
                    <span>{companyData.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Guarantee note */}
            <div className="p-5 rounded-xl bg-white border border-[#E5E2DA] flex items-center gap-3 text-xs text-[#5E6672]">
              <CheckCircle className="w-5 h-5 text-[#C59B27] shrink-0" aria-hidden="true" />
              <span>
                بياناتك وتفاصيل مشروعك تُعامل بسرية تامة ولا تُشارك مع أي طرف خارجي.
              </span>
            </div>
          </div>

          {/* Interactive WhatsApp Quote Generator Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-[#E5E2DA] shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#A07810] bg-[#C59B27]/10 px-3 py-1.5 rounded-md self-start inline-flex mb-4">
                <Calculator className="w-4 h-4" aria-hidden="true" />
                <span>حاسبة الطلب المباشر عبر الواتساب</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                حدد مواصفات مشروعك للحصول على تسعير فوري
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6672] mb-8 leading-relaxed">
                املأ الحقول التالية لنقوم بتجهيز رسالة منظمة بتفاصيل مشروعك لفتحها في محادثة الواتساب مع مهندسنا مباشرة دون انتظار.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Property Type */}
                  <div>
                    <label
                      htmlFor="property-type"
                      className="block text-xs sm:text-sm font-semibold text-[#181C20] mb-2"
                    >
                      نوع العقار
                    </label>
                    <select
                      id="property-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E2DA] text-sm text-[#181C20] focus:border-[#C59B27] focus:outline-hidden"
                    >
                      <option value="فيلا سكنية">فيلا سكنية</option>
                      <option value="شقة أو دوبلكس">شقة أو دوبلكس</option>
                      <option value="مقر شركة أو مكتب">مقر شركة أو مكتب</option>
                      <option value="مقهى أو مطعم">مقهى أو مطعم</option>
                      <option value="معرض تجاري">معرض تجاري</option>
                      <option value="ترميم وتجديد عقار قائم">ترميم وتجديد عقار قائم</option>
                    </select>
                  </div>

                  {/* Required Service */}
                  <div>
                    <label
                      htmlFor="required-service"
                      className="block text-xs sm:text-sm font-semibold text-[#181C20] mb-2"
                    >
                      الخدمة الرئيسية المطلوبة
                    </label>
                    <select
                      id="required-service"
                      value={formData.serviceTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceTitle: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E2DA] text-sm text-[#181C20] focus:border-[#C59B27] focus:outline-hidden"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Approx Area */}
                  <div>
                    <label
                      htmlFor="approx-area"
                      className="block text-xs sm:text-sm font-semibold text-[#181C20] mb-2"
                    >
                      المساحة التقريبية (متر مربع)
                    </label>
                    <input
                      id="approx-area"
                      type="number"
                      min="10"
                      max="10000"
                      value={formData.approxArea}
                      onChange={(e) =>
                        setFormData({ ...formData, approxArea: e.target.value })
                      }
                      placeholder="مثال: 350"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E2DA] text-sm text-[#181C20] focus:border-[#C59B27] focus:outline-hidden"
                    />
                  </div>

                  {/* City or Neighborhood */}
                  <div>
                    <label
                      htmlFor="city-neighborhood"
                      className="block text-xs sm:text-sm font-semibold text-[#181C20] mb-2"
                    >
                      المدينة أو الحي
                    </label>
                    <input
                      id="city-neighborhood"
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="مثال: الرياض - حي الملقا"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E2DA] text-sm text-[#181C20] focus:border-[#C59B27] focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Additional notes */}
                <div>
                  <label
                    htmlFor="custom-notes"
                    className="block text-xs sm:text-sm font-semibold text-[#181C20] mb-2"
                  >
                    ملاحظات إضافية أو تفاصيل خاصة (اختياري)
                  </label>
                  <textarea
                    id="custom-notes"
                    rows={3}
                    value={formData.customMessage}
                    onChange={(e) =>
                      setFormData({ ...formData, customMessage: e.target.value })
                    }
                    placeholder="مثل: المخطط جاهز، العقار عظم، نرغب في أسقف حديثة ودهانات محايدة..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E2DA] text-sm text-[#181C20] focus:border-[#C59B27] focus:outline-hidden resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-md active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-[#25D366]"
                >
                  <Send className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
                  <span>تجهيز وإرسال الطلب عبر الواتساب</span>
                </button>

                {formSubmitted && (
                  <p className="text-center text-xs text-[#047857] font-semibold mt-2">
                    تم فتح تطبيق الواتساب مع رسالة المواصفات الجاهزة. يمكنك تعديلها أو إرسالها فوراً!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

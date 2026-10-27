import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { companyData, mainNavLinks } from '@/data/company';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { getDirectCallLink, getEmailLink, createWhatsAppLink, formatPhoneDisplay } from '@/lib/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = 2026; // or dynamic

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-[#1F2937]">
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Brand info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#1F2937] border border-[#C59B27]/40 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo-icon.jpg"
                  alt={companyData.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {companyData.name}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {companyData.shortDescription}
            </p>
            <div className="text-xs text-gray-400 pt-2">
              <span>نطاق الخدمة: </span>
              <span className="text-gray-200 font-medium">{companyData.serviceArea}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 border-s-2 border-[#C59B27] ps-2.5">
              روابط سريعة
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C59B27] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 border-s-2 border-[#C59B27] ps-2.5">
              خدماتنا الرئيسية
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-[#C59B27] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 border-s-2 border-[#C59B27] ps-2.5">
              معلومات الاتصال
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{companyData.addressSnippet || companyData.city}</span>
              </li>
              {companyData.isContactConfigured && companyData.phone ? (
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C59B27] shrink-0" aria-hidden="true" />
                  <a
                    href={getDirectCallLink()}
                    dir="ltr"
                    className="hover:text-white transition-colors"
                  >
                    <span dir="ltr">{formatPhoneDisplay(companyData.phone)}</span>
                  </a>
                </li>
              ) : null}
              {companyData.isContactConfigured && companyData.email ? (
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C59B27] shrink-0" aria-hidden="true" />
                  <a
                    href={getEmailLink()}
                    className="hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {companyData.email}
                  </a>
                </li>
              ) : null}
              {!companyData.isContactConfigured && (
                <li className="text-xs text-amber-300/90 bg-amber-900/20 px-3 py-2 rounded-lg border border-amber-600/30">
                  بيانات التواصل الرسمية قيد الاعتماد
                </li>
              )}
              {companyData.workingHours ? (
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{companyData.workingHours}</span>
                </li>
              ) : null}
            </ul>

            {companyData.isContactConfigured && companyData.whatsappNumber ? (
              <div className="mt-5">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C59B27] hover:underline font-semibold"
                >
                  <span>محادثة واتساب مباشرة</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center sm:text-start">
          <p>
            جميع الحقوق محفوظة © {currentYear} {companyData.name}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-300 font-medium">موقع تعريفي وتسويقي مهني</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

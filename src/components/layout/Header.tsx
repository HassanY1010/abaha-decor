import React from 'react';
import Link from 'next/link';
import { Compass, PhoneCall } from 'lucide-react';
import { companyData, mainNavLinks } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { getDirectCallLink, formatPhoneDisplay } from '@/lib/whatsapp';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E2DA] transition-shadow">
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#C59B27] rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-[#111827] flex items-center justify-center text-[#C59B27] group-hover:scale-105 transition-transform duration-200 shadow-xs">
              <Compass className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex flex-col text-start">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#111827] leading-none">
                {companyData.name}
              </span>
              <span className="text-xs text-[#5E6672] mt-1 font-medium hidden sm:inline-block">
                تشطيبات • ديكور • تصميم داخلي
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" aria-label="التنقل الرئيسي">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2.5 py-2 rounded-md text-xs xl:text-sm font-medium text-[#181C20] hover:text-[#C59B27] hover:bg-[#FAF9F6] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {companyData.isContactConfigured && companyData.phone ? (
              <a
                href={getDirectCallLink()}
                className="hidden xl:inline-flex items-center gap-2 text-xs xl:text-sm font-semibold text-[#181C20] hover:text-[#C59B27] transition-colors px-3 py-2"
                aria-label={`اتصل بنا هاتفياً على الرقم ${companyData.phone}`}
              >
                <PhoneCall className="w-4 h-4 text-[#C59B27]" aria-hidden="true" />
                <span dir="ltr">{formatPhoneDisplay(companyData.phone)}</span>
              </a>
            ) : null}
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              اطلب عرض سعر
            </Button>
            {/* Mobile Navigation Drawer Trigger */}
            <MobileNavigation links={mainNavLinks} />
          </div>
        </div>
      </Container>
    </header>
  );
};

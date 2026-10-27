import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '@/data/company';
import { createWhatsAppLink } from '@/lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  if (!companyData.features.showFloatingWhatsApp || !companyData.isContactConfigured || !companyData.whatsappNumber) {
    return null;
  }

  const link = createWhatsAppLink();

  return (
    <div className="fixed bottom-6 end-6 z-40 print:hidden pointer-events-auto">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا مباشرة عبر تطبيق الواتساب"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
        
        {/* Accessible visually hidden or hover tooltip */}
        <span className="absolute end-full me-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#111827] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:inline-block">
          تواصل عبر الواتساب
        </span>
      </a>
    </div>
  );
};

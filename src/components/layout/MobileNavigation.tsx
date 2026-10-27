'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall, MessageCircle } from 'lucide-react';
import { NavLink } from '@/types';
import { createWhatsAppLink, getDirectCallLink } from '@/lib/whatsapp';

interface MobileNavigationProps {
  links: NavLink[];
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        ref={toggleBtnRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'إغلاق القائمة الرئيسية' : 'فتح القائمة الرئيسية'}
        className="p-2.5 rounded-lg text-[#181C20] hover:bg-[#F3F1EC] transition-colors focus-visible:outline-2 focus-visible:outline-[#C59B27]"
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-xs transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 bottom-0 start-0 w-[85%] max-w-xs bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between p-6 ${
          isOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[#E5E2DA]">
            <span className="font-bold text-lg text-[#111827]">القائمة الرئيسية</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="إغلاق القائمة"
              className="p-2 rounded-md text-[#5E6672] hover:bg-[#F3F1EC] hover:text-[#181C20]"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1.5" aria-label="تنقل الجوال">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 rounded-lg text-base font-medium text-[#181C20] hover:bg-[#F3F1EC] hover:text-[#C59B27] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Action CTAs in drawer */}
        <div className="pt-6 border-t border-[#E5E2DA] flex flex-col gap-3">
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors text-sm shadow-sm"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>طلب عرض سعر عبر الواتساب</span>
          </a>
          <a
            href={getDirectCallLink()}
            onClick={handleLinkClick}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#F3F1EC] text-[#181C20] font-medium hover:bg-[#EAE6DF] transition-colors text-sm"
          >
            <PhoneCall className="w-4 h-4" aria-hidden="true" />
            <span>اتصال هاتفي مباشر</span>
          </a>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Compass, Home, PhoneCall } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getDirectCallLink } from '@/lib/whatsapp';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-[#FAF9F6] text-center">
      <Container size="narrow">
        <div className="w-16 h-16 rounded-2xl bg-[#111827] text-[#C59B27] flex items-center justify-center mx-auto mb-6 shadow-md">
          <Compass className="w-8 h-8" aria-hidden="true" />
        </div>

        <span className="text-sm font-bold text-[#C59B27] uppercase tracking-widest block mb-2 font-mono">
          خطأ 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">
          الصفحة المطلوبة غير موجودة
        </h1>

        <p className="text-base text-[#5E6672] max-w-md mx-auto mb-8 leading-relaxed">
          عذراً، قد يكون الرابط الذي اتبعته غير صحيح أو تم نقل الصفحة. يمكنك العودة إلى الصفحة الرئيسية أو التواصل معنا مباشرة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" aria-hidden="true" />}
          >
            العودة للرئيسية
          </Button>

          <Button
            href={getDirectCallLink()}
            variant="outline"
            size="md"
            icon={<PhoneCall className="w-4 h-4" aria-hidden="true" />}
          >
            اتصل بالشركة
          </Button>
        </div>
      </Container>
    </div>
  );
}

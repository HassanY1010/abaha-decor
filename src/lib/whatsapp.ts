import { companyData } from '@/data/company';

/**
 * دالة لتنظيف وتجهيز رقم الهاتف للاستخدام في روابط الاتصال
 */
export function formatPhoneForTel(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}

/**
 * دالة لتجهيز رقم الواتساب بالصيغة الدولية القياسية
 * تدعم تحويل الأرقام المحلية التي تبدأ بـ 05 تلقائياً إلى 9665
 */
export function formatWhatsAppNumber(phone: string): string {
  const digits = phone.replace(/[^\d]/g, '');
  if (digits.startsWith('05') && digits.length === 10) {
    return '966' + digits.slice(1);
  }
  return digits;
}

export interface QuoteParams {
  serviceTitle?: string;
  projectType?: string;
  approxArea?: string;
  city?: string;
  customMessage?: string;
}

/**
 * إنشاء رابط واتساب رسمي مع رسالة نموذجية مجهزة ومُشفرة بأمان
 */
export function createWhatsAppLink(params?: QuoteParams): string {
  const cleanNumber = formatWhatsAppNumber(companyData.whatsappNumber);
  
  if (!cleanNumber) {
    return '#contact';
  }

  let message = `السلام عليكم ورحمة الله، أود الاستفسار عن خدمات التشطيب والديكور لدى ${companyData.name}.`;

  if (params) {
    const details: string[] = [];
    if (params.serviceTitle) details.push(`- الخدمة المطلوبة: ${params.serviceTitle}`);
    if (params.projectType) details.push(`- نوع العقار: ${params.projectType}`);
    if (params.approxArea) details.push(`- المساحة التقديرية: ${params.approxArea} م²`);
    if (params.city) details.push(`- المدينة/الحي: ${params.city}`);
    if (params.customMessage) details.push(`- تفاصيل إضافية: ${params.customMessage}`);

    if (details.length > 0) {
      message += `\n\nتفاصيل المشروع:\n` + details.join('\n');
    }
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * رابط الاتصال الهاتفي المباشر
 */
export function getDirectCallLink(): string {
  const clean = formatPhoneForTel(companyData.phone);
  return clean ? `tel:${clean}` : '#contact';
}

/**
 * رابط البريد الإلكتروني
 */
export function getEmailLink(subject = 'طلب استفسار عن خدمات التشطيب'): string {
  if (!companyData.email) return '#contact';
  const encodedSubject = encodeURIComponent(subject);
  return `mailto:${companyData.email}?subject=${encodedSubject}`;
}

import { companyData } from '@/data/company';

/**
 * دالة لتنظيف وتجهيز رقم الهاتف للاستخدام في روابط الاتصال tel:
 * تضمن إرجاع الرقم بالصيغة الدولية مثل +966575083901 وتمنع تكرار رمز الدولة
 */
export function formatPhoneForTel(phone: string): string {
  if (!phone) return '';
  const digits = phone.replace(/[^\d]/g, '');
  if (!digits) return '';

  if (digits.startsWith('00966')) {
    return '+' + digits.slice(2);
  }
  if (digits.startsWith('05') && digits.length === 10) {
    return '+966' + digits.slice(1);
  }
  if (digits.startsWith('966')) {
    return '+' + digits;
  }
  if (digits.length === 9 && digits.startsWith('5')) {
    return '+966' + digits;
  }
  return '+' + digits;
}

/**
 * دالة لتجهيز رقم الواتساب بالصيغة الدولية القياسية للأرقام wa.me
 * تستخرج الأرقام فقط بدون + وبدون صفر محلي وبدون تكرار رمز الدولة 966
 */
export function formatWhatsAppNumber(phone: string): string {
  if (!phone) return '';
  const digits = phone.replace(/[^\d]/g, '');
  if (!digits) return '';

  if (digits.startsWith('00966')) {
    return digits.slice(2);
  }
  if (digits.startsWith('05') && digits.length === 10) {
    return '966' + digits.slice(1);
  }
  if (digits.startsWith('966')) {
    return digits;
  }
  if (digits.length === 9 && digits.startsWith('5')) {
    return '966' + digits;
  }
  return digits;
}

/**
 * دالة لتنسيق عرض رقم الهاتف بشكل بصري مقروء (مثال: +966 56 097 9886)
 */
export function formatPhoneDisplay(phone: string): string {
  if (!phone) return '';
  const digits = phone.replace(/[^\d]/g, '');
  let raw966 = digits;
  if (digits.startsWith('05') && digits.length === 10) {
    raw966 = '966' + digits.slice(1);
  } else if (digits.length === 9 && digits.startsWith('5')) {
    raw966 = '966' + digits;
  } else if (digits.startsWith('00966')) {
    raw966 = digits.slice(2);
  }
  if (raw966.startsWith('966') && raw966.length === 12) {
    return `+${raw966.slice(0, 3)} ${raw966.slice(3, 5)} ${raw966.slice(5, 8)} ${raw966.slice(8)}`;
  }
  return phone;
}

export interface QuoteParams {
  serviceTitle?: string;
  projectType?: string;
  approxArea?: string;
  city?: string;
  customMessage?: string;
}

/**
 * التحقق من اكتمال إعداد بيانات الاتصال الحقيقية لتفادي إطلاق الموقع ببيانات تجريبية
 */
export function isContactReady(): boolean {
  const cleanNumber = formatWhatsAppNumber(companyData.whatsappNumber);
  const cleanPhone = formatPhoneForTel(companyData.phone);
  return Boolean(
    companyData.isContactConfigured &&
    cleanNumber &&
    cleanNumber.length >= 9 &&
    !cleanNumber.includes('00000000') &&
    cleanPhone &&
    !cleanPhone.includes('00000000')
  );
}

/**
 * إنشاء رابط واتساب رسمي مع رسالة نموذجية مجهزة ومُشفرة بأمان
 */
export function createWhatsAppLink(params?: QuoteParams): string {
  if (!isContactReady()) {
    return '#contact';
  }

  const cleanNumber = formatWhatsAppNumber(companyData.whatsappNumber);
  if (!cleanNumber) {
    return '#contact';
  }

  let message = `السلام عليكم ورحمة الله، أود الاستفسار عن خدمات الديكورات والدهانات لدى ${companyData.name}.`;

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
  if (!isContactReady()) {
    return '#contact';
  }
  const clean = formatPhoneForTel(companyData.phone);
  return clean ? `tel:${clean}` : '#contact';
}

/**
 * رابط البريد الإلكتروني
 */
export function getEmailLink(subject = 'طلب استفسار عن خدمات الديكور والدهانات'): string {
  if (!companyData.email) return '#contact';
  const encodedSubject = encodeURIComponent(subject);
  return `mailto:${companyData.email}?subject=${encodedSubject}`;
}

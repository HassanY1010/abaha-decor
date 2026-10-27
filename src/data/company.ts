import { CompanyInfo } from '@/types';

/**
 * إعدادات وبيانات الشركة المركزية
 * يُمكن تعديل كافة القيم والبيانات بسهولة من هذا الملف لتخصيص الموقع للعميل.
 * ملاحظة: القيم الموضوعة هنا هي بيانات نموذجية مهنية وقابلة للتخصيص الكامل.
 */
export const companyData: CompanyInfo = {
  name: 'صرح التشطيبات والديكور',
  tagline: 'هندسة المساحات المعمارية برؤية عصرية وتنفيذ متقن',
  shortDescription:
    'مؤسسة متخصصة في أعمال التشطيبات الشاملة، التصميم الداخلي، والديكورات العصرية للمشاريع السكنية والتجارية.',
  fullDescription:
    'نقدم حلولاً متكاملة في التشطيبات المعمارية تشمل التخطيط والتصميم الداخلي، أعمال الجبس بورد والإنارة المخفية، التكسيات الجدارية والأرضيات، والدهانات الديكورية بأعلى معايير الدقة والالتزام بالجداول الزمنية.',
  city: 'الرياض',
  country: 'المملكة العربية السعودية',
  serviceArea: 'الرياض والمناطق المجاورة',
  phone: '+966500000000', // رقم تجريبي قابل للاستبدال
  whatsappNumber: '966500000000', // صيغة دولية بدون علامة + للواتساب
  email: 'info@example.com',
  workingHours: 'من السبت إلى الخميس: ٨:٠٠ ص - ٨:٠٠ م',
  workingDays: 'السبت - الخميس',
  addressSnippet: 'المملكة العربية السعودية - منطقة الرياض',
  commercialRegistration: 'سجل تجاري تحت التوثيق (بيانات نموذجية)',
  socialLinks: {
    instagram: 'https://instagram.com',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
  },
  features: {
    // يمكن تفعيل أو تعطيل الأقسام بحسب البيانات المتوفرة للعميل
    showTestimonials: false, // مغلق افتراضيًا لعدم وجود تقييمات موثقة من عميل حقيقي
    showProjects: true,
    showFAQ: true,
    showFloatingWhatsApp: true,
    showQuoteEstimator: true,
  },
};

export const mainNavLinks = [
  { href: '#about', label: 'عن الشركة' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#why-us', label: 'لماذا نحن' },
  { href: '#projects', label: 'معرض الأعمال' },
  { href: '#process', label: 'مراحل العمل' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
  { href: '#contact', label: 'تواصل معنا' },
];

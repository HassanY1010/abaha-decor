import { CompanyInfo } from '@/types';

/**
 * إعدادات وبيانات الشركة المركزية
 * يُمكن تعديل كافة القيم والبيانات بسهولة من هذا الملف لتخصيص الموقع للعميل.
 * ملاحظة: القيم الموضوعة هنا هي بيانات نموذجية مهنية وقابلة للتخصيص الكامل.
 */
export const companyData: CompanyInfo = {
  // الاسم التجاري المعتمد
  name: 'ديكورات ودهانات الدمام',
  isNameConfirmed: true,
  tagline: 'تنفيذ أعمال الديكورات والدهانات والتشطيبات العصرية برؤية هندسية في الدمام',
  shortDescription:
    'مؤسسة متخصصة في أعمال الديكورات العصرية، الدهانات الداخلية والخارجية، والتشطيبات المتكاملة للمشاريع السكنية والتجارية في الدمام والمنطقة الشرقية.',
  fullDescription:
    'نقدم حلولاً متكاملة تشمل الدهانات الديكورية الحديثة، تكسيات بديل الخشب وبديل الرخام، الفوم، الجبس بورد، والتشطيبات المعمارية المتقنة بأعلى معايير الجودة في الدمام والمنطقة الشرقية.',
  // المدينة ونطاق الخدمة المعتمد
  city: 'الدمام',
  country: 'المملكة العربية السعودية',
  serviceArea: 'الدمام والمنطقة الشرقية',
  isCityConfirmed: true,
  // بيانات الاتصال المعتمدة
  phone: '966575083901',
  whatsappNumber: '966575083901',
  email: '',
  isContactConfigured: true,
  workingHours: '',
  workingDays: '',
  addressSnippet: 'الدمام، المنطقة الشرقية، المملكة العربية السعودية',
  commercialRegistration: '', // يُملأ برقم السجل التجاري الرسمي عند توفره
  socialLinks: {
    instagram: '',
    twitter: '',
    linkedin: '',
  },
  features: {
    showTestimonials: false, // مغلق لعدم وجود تقييمات موثقة من عميل حقيقي
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

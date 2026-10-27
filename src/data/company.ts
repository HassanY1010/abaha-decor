import { CompanyInfo } from '@/types';

/**
 * إعدادات وبيانات الشركة المركزية
 * يُمكن تعديل كافة القيم والبيانات بسهولة من هذا الملف لتخصيص الموقع للعميل.
 * ملاحظة: القيم الموضوعة هنا هي بيانات نموذجية مهنية وقابلة للتخصيص الكامل.
 */
export const companyData: CompanyInfo = {
  // الاسم التجاري المعتمد
  name: 'رونق أبها للتشطيبات والديكورات',
  isNameConfirmed: true,
  tagline: 'هندسة المساحات المعمارية برؤية عصرية وتنفيذ متقن في أبها',
  shortDescription:
    'مؤسسة متخصصة في أعمال التشطيبات الشاملة، التصميم الداخلي، والديكورات العصرية للمشاريع السكنية والتجارية في أبها.',
  fullDescription:
    'نقدم حلولاً متكاملة في التشطيبات المعمارية تشمل التخطيط والتصميم الداخلي، أعمال الجبس بورد والإنارة المخفية، التكسيات الجدارية والأرضيات، والدهانات الديكورية بأعلى معايير الإتقان في أبها.',
  // المدينة ونطاق الخدمة المعتمد
  city: 'أبها',
  country: 'المملكة العربية السعودية',
  serviceArea: 'أبها',
  isCityConfirmed: true,
  // بيانات الاتصال المعتمدة
  phone: '966560979886',
  whatsappNumber: '966560979886',
  email: '', // القيمة Abahah@gmail.com تحتاج تأكيد صريح من صاحب الموقع قبل اعتمادها كبريد رسمي
  isContactConfigured: true,
  workingHours: '', // قيد التحديد من صاحب الموقع
  workingDays: '',
  addressSnippet: 'أبها، المملكة العربية السعودية',
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

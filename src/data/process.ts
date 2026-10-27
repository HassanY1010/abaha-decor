import { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'الاستشارة وتحديد الاحتياجات',
    description:
      'جلسة أولية للاستماع إلى رغبات العميل، معاينة الموقع أو دراسة المخططات المعمارية المتاحة، وتحديد الميزانية المتوقعة والنمط المفضل.',
    durationApprox: 'يوم إلى يومين',
    iconName: 'MessageSquare',
  },
  {
    stepNumber: 2,
    title: 'المقايسة وجدول الكميات (BOQ)',
    description:
      'رفع المقاسات الدقيقة هندسيًا، إعداد جدول كميات مفصل يوضح بنود الأعمال والمواد المقترحة والأسعار بشفافية تامة دون بنود مخفية.',
    durationApprox: '٣ - ٥ أيام عمل',
    iconName: 'ClipboardCheck',
  },
  {
    stepNumber: 3,
    title: 'التعاقد واعتماد العينات',
    description:
      'توقيع العقد الرسمي متضمنًا جدول الدفعات والجدول الزمني للإنجاز، ومطابقة عينات الدهان والبورسلان والجبس على أرض الواقع.',
    durationApprox: 'يومان',
    iconName: 'FileText',
  },
  {
    stepNumber: 4,
    title: 'التنفيذ والإشراف الهندسي',
    description:
      'بدء الأعمال وفق التسلسل الفني المعتمد مع إشراف هندسي مرحلي وتقارير مصورة دورية تُرسل للعميل لإطلاعه على سير العمل أولاً بأول.',
    durationApprox: 'حسب حجم المشروع',
    iconName: 'Hammer',
  },
  {
    stepNumber: 5,
    title: 'الفحص النهائي والتسليم',
    description:
      'مراجعة شاملة لجميع البنود والتأكد من مطابقتها للمواصفات، تنظيف الموقع، وتسليم مفاتيح المشروع مع كرت الضمان المعتمد.',
    durationApprox: 'يوم التسليم',
    iconName: 'CheckCircle2',
  },
];

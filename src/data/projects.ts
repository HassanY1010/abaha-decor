import { ProjectItem } from '@/types';

export const projectsData: ProjectItem[] = [
  {
    id: 'modern-villa-interior',
    title: 'تشطيب فيلا سكنية بتصميم عصري (Modern Warmth)',
    category: 'residential',
    categoryLabel: 'سكني',
    description:
      'تشطيب شامل لمنطقة الاستقبال والصالات المفتوحة بالاعتماد على درجات البيج الدافئ مع تكسيات خشب السنديان وبديل الرخام الرمادي.',
    scope: ['تصميم وتنفيذ متكامل', 'جبس بورد وأسقف معلقة', 'ماجنتيك تراك لايت', 'باركيه ألماني عالي المقاومة'],
    location: 'الرياض - حي النرجس',
    imageAlt: 'تصميم داخلي لصالة معيشة عصرية بألوان حيادية وأسقف جبسية مضاءة بنظام مخفي',
    accentColor: '#B45309',
    featured: true,
  },
  {
    id: 'executive-office-space',
    title: 'تصميم وتشطيب مقر إداري لشركة استشارية',
    category: 'commercial',
    categoryLabel: 'تجاري',
    description:
      'تجهيز مساحات العمل المفتوحة وقاعات الاجتماعات بنظام عزل صوتي متطور وأرضيات موكيت مكتبي مع قواطع زجاجية سوداء.',
    scope: ['قواطع زجاجية ذكية', 'أنظمة أسقف صوتية', 'إنارة خطية ذكية', 'دهانات مضادة للبكتيريا'],
    location: 'الرياض - طريق الملك فهد',
    imageAlt: 'مساحة مكتبية حديثة مجهزة بقواطع زجاجية وإضاءة خطية وأثاث عملي معاصر',
    accentColor: '#1E3A8A',
    featured: true,
  },
  {
    id: 'luxury-apartment-renovation',
    title: 'تجديد شقة دوبلكس بنمط نيوكلاسيك أنيق',
    category: 'renovation',
    categoryLabel: 'ترميم وتجديد',
    description:
      'إعادة توزيع الفراغات الداخلية واستبدال كامل للأرضيات والدهانات وإضافة إطارات الفوم الديكوري مع إنارة غير مباشرة.',
    scope: ['إزالة وترميم الأرضيات', 'إطارات فوم نيوكلاسيك', 'بورسلان قص ليزر', 'تأسيس تكييف مخفي'],
    location: 'الرياض - حي الياسمين',
    imageAlt: 'صالة نيوكلاسيك فاخرة تتميز بإطارات جدارية بيضاء وأرضيات بورسلان رخامية براقة',
    accentColor: '#047857',
    featured: true,
  },
  {
    id: 'specialty-coffee-bar',
    title: 'تنفيذ ديكورات مقهى تجاري بطابع صناعي دافئ (Warm Industrial)',
    category: 'hospitality',
    categoryLabel: 'ضيافة وتجاري',
    description:
      'تطبيق جدران الميكروسمنت الرمادي مع رفوف فولاذية مخصصة وتمديدات تكييف مكشوفة ومدهونة بعناية، وإضاءة دافئة 2700K.',
    scope: ['ميكروسمنت جداري وأرضي', 'تكسيات معدنية مخصصة', 'تأسيس سباكة متخصصة للبار', 'إنارة معلقة موجهة'],
    location: 'الرياض - حي الملقا',
    imageAlt: 'ديكور مقهى بتصميم عصري يمزج بين الخشب والميكروسمنت وتوزيع إضاءة دافئة',
    accentColor: '#78350F',
    featured: false,
  },
  {
    id: 'penthouse-master-suite',
    title: 'جناح نوم رئيسي بنمط الفنادق الفاخرة',
    category: 'residential',
    categoryLabel: 'سكني',
    description:
      'تضمين خزانة ملابس مدمجة (Walk-in Closet) مع إضاءة ليد تلقائية عند الفتح، وحمام ماستر بتكسيات بورسلان رخامي كبير الحجم (Slab).',
    scope: ['تكسيات بورسلان ألواح كبيرة', 'خزائن ملابس مدمجة', 'ستائر مخفية كهربائية', 'عزل صوتي للأبواب'],
    location: 'الرياض - حي حطين',
    imageAlt: 'جناح نوم رئيسي هادئ بتصميم فندقي فخم وإضاءات خافتة ومريحة',
    accentColor: '#4338CA',
    featured: false,
  },
  {
    id: 'showroom-interior-decor',
    title: 'معرض منتجات ومبيعات بنمط مينيماليست',
    category: 'commercial',
    categoryLabel: 'تجاري',
    description:
      'تصميم ممرات حركة مريحة مع منصات عرض مدمجة ومنطقة استقبال مميزة ببديل الرخام المضاء بتقنية Backlit.',
    scope: ['كونتر استقبال مضيء', 'توزيع إضاءة تركيزية للمنتجات', 'أرضيات إيبوكسي عالية التحمل', 'أسقف شبكية مفتوحة'],
    location: 'الرياض - حي العليا',
    imageAlt: 'معرض تجاري بتصميم بسيط وأنيق يبرز المعروضات بإضاءة موجهة مميزة',
    accentColor: '#374151',
    featured: false,
  },
];

export const projectCategories = [
  { key: 'all', label: 'جميع الأعمال' },
  { key: 'residential', label: 'المشاريع السكنية' },
  { key: 'commercial', label: 'المشاريع التجارية' },
  { key: 'renovation', label: 'الترميم والتجديد' },
  { key: 'hospitality', label: 'المقاهي والضيافة' },
] as const;

# موقع صرح التشطيبات والديكور — منصة ويب مهنية متكاملة
Professional Next.js Architectural Finishing & Interior Decor Business Website

🌐 **الموقع الحي المباشر:** [https://abaha-decor-evu8.vercel.app/](https://abaha-decor-evu8.vercel.app/)

مشروع موقع تعريفي وتسويقي متكامل لشركة متخصصة في أعمال التشطيبات والديكور والتصميم الداخلي بالمملكة العربية السعودية، مبني وفق أحدث المعايير الهندسية لـ Next.js (App Router)، مع دعم كامل للغة العربية واتجاه RTL، وأعلى معايير إمكانية الوصول (WCAG 2.2 AA) وتحسين محركات البحث التقني (Technical SEO)، وتجربة مستخدم تفاعلية ومستضاف بالكامل على منصة Vercel.

---

## 🛠 التقنيات المستخدمة (Tech Stack)

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components by default)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, no `any`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Cairo](https://fonts.google.com/specimen/Cairo) عبر `next/font/google`
- **Testing**: Built-in Node test runner (`node:test`, `node:assert`)
- **Linting**: ESLint 9 مع إعدادات Next.js Core Web Vitals
- **Deployment**: مجهز بالكامل لمنصة Vercel

---

## 📂 بنية المشروع (Project Structure)

```text
abaha/
├── src/
│   ├── app/
│   │   ├── globals.css         # متغيرات التصميم (Design Tokens) وتنسيقات RTL
│   │   ├── layout.tsx          # المخطط العام، خط Cairo، ووسوم Schema.org
│   │   ├── not-found.tsx       # صفحة خطأ 404 مخصصة ومتجاوبة
│   │   ├── page.tsx            # الصفحة الرئيسية بتجميع Server Components
│   │   ├── robots.ts           # إعدادات ملف robots.txt لمحركات البحث
│   │   └── sitemap.ts          # توليد خريطة الموقع sitemap.xml
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # الترويسة وشعار الشركة والتنقل السريع
│   │   │   ├── MobileNavigation.tsx  # درج تنقل الجوال (مع دعم مفتاح Escape وقفل التمرير)
│   │   │   ├── Footer.tsx            # التذييل ومعلومات التواصل والروابط
│   │   │   └── FloatingWhatsApp.tsx  # زر الواتساب العائم المدروس موضعياً
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # القسم الرئيسي مع محفزات التحويل ونداءات العمل
│   │   │   ├── About.tsx             # نبذة عن الشركة، نطاق العمل، وركائز الجودة
│   │   │   ├── Services.tsx          # بطاقات الخدمات وبنود التوصيف وقنوات الطلب
│   │   │   ├── WhyChooseUs.tsx       # ركائز الثقة الواقعية دون ادعاءات وهمية
│   │   │   ├── Projects.tsx          # معرض الأعمال التفاعلي مع تصفية التصنيفات
│   │   │   ├── Process.tsx           # مراحل العمل التنفيذية والمدد التقديرية
│   │   │   ├── FAQ.tsx               # الأسئلة الشائعة مع تحكم لوحة المفاتيح
│   │   │   └── Contact.tsx           # قنوات التواصل وحاسبة طلبات الواتساب المباشرة
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx            # زر مخصص متعدد الأنماط ويدعم الوصول
│   │       ├── Container.tsx         # حاوية التجاوب القياسية
│   │       └── SectionHeading.tsx    # ترويسة الأقسام الموحدة دلالياً
│   │
│   ├── data/
│   │   ├── company.ts          # البيانات المركزية القابلة للتخصيص للشركة
│   │   ├── services.ts         # قائمة الخدمات وتفاصيلها ومخرجاتها
│   │   ├── projects.ts         # قائمة المشاريع ونماذج الأعمال
│   │   ├── process.ts          # خطوات العمل
│   │   ├── why-us.ts           # نقاط التميز
│   │   └── faq.ts              # الأسئلة الشائعة وإجاباتها
│   │
│   ├── lib/
│   │   ├── metadata.ts         # إعدادات SEO وSchema.org LocalBusiness
│   │   ├── utils.ts            # دوال مساعدة للأصناف وتنسيق النصوص
│   │   └── whatsapp.ts         # توليد روابط الواتساب المشفرة والاتصال الهاتفي
│   │
│   └── types/
│       └── index.ts            # الواجهات البرمجية وأنواع البيانات الصارمة
│
├── tests/
│   └── whatsapp.test.mjs       # اختبارات الوحدة لمعالجة الأرقام والروابط
├── .env.example                # دليل المتغيرات البيئية
├── package.json
└── tsconfig.json
```

---

## ⚙️ تخصيص بيانات الشركة (Central Configuration)

يمكنك تخصيص كامل بيانات الشركة، أرقام التواصل، والخدمات من مكان مركزي واحد دون لمس المكونات:

- **بيانات الشركة والاتصال**: `src/data/company.ts`
  - الاسم التجاري، الوصف، المدينة، رقم الهاتف، رقم الواتساب، البريد الإلكتروني.
  - إمكانية تفعيل أو إخفاء أقسام الموقع من خلال مصفوفة `features`.
- **الخدمات**: `src/data/services.ts`
- **نماذج المشاريع**: `src/data/projects.ts`
- **الأسئلة الشائعة**: `src/data/faq.ts`

---

## 🚀 التشغيل المحلي (Local Development)

1. **تثبيت الحزم**:
   ```bash
   npm install
   ```

2. **التشغيل التجريبي**:
   ```bash
   npm run dev
   ```
   افتح المتصفح على [http://localhost:3000](http://localhost:3000).

3. **تشغيل الاختبارات**:
   ```bash
   npm test
   ```

4. **فحص الأنواع البرمجية (TypeScript)**:
   ```bash
   npm run typecheck
   ```

5. **فحص الجودة (ESLint)**:
   ```bash
   npm run lint
   ```

6. **بناء الإنتاج (Production Build)**:
   ```bash
   npm run build
   ```

---

## 🌐 النشر على Vercel (Deployment)

المشروع متوافق ١٠٠٪ مع بيئة Vercel:

1. ارفع المشروع إلى مستودع GitHub أو GitLab.
2. ادخل إلى لوحة تحكم [Vercel](https://vercel.com) واختر **Add New Project**.
3. استورد المستودع. سيتعرف Vercel تلقائياً على إعدادات Next.js App Router.
4. (اختياري) أضف المتغير البيئي في قسم **Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL`: الرابط النهائي لموقعك (مثل `https://your-domain.com`).
5. اضغط **Deploy**.

---

## 📋 قائمة ما قبل الإطلاق الرسمي (Pre-Launch Checklist)

- [ ] استبدال رقم الهاتف والواتساب في `src/data/company.ts` بالأرقام الحقيقية للشركة.
- [ ] تحديث اسم الشركة والمدينة والبريد الإلكتروني في `src/data/company.ts`.
- [ ] إضافة صور حقيقية للمشاريع المنفذة في مجلد `public/images/` وتحديثها في `src/data/projects.ts`.
- [ ] ضبط الرابط النهائي `NEXT_PUBLIC_SITE_URL` في إعدادات Vercel لتوليد روابط Canonical وSitemap بشكل سليم.

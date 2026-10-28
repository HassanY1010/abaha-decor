import { Metadata } from 'next';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { faqData } from '@/data/faq';
import { formatPhoneForTel } from '@/lib/whatsapp';
import { ServiceItem } from '@/types';

// النطاق الإنتاجي الفعلي للموقع (بدون شرطة مائلة في النهاية لضمان تطابق Canonical وSitemap)
export const productionDomain = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://abaha-decor-evu8.vercel.app'
).replace(/\/$/, '');

export const siteMetadata: Metadata = {
  metadataBase: new URL(productionDomain),
  title: {
    default: `${companyData.name} | تشطيبات وديكور داخلي بالمنطقة الشرقية`,
    template: `%s | ${companyData.name}`,
  },
  description:
    'ديكورات ودهانات الدمام: تنفيذ أعمال الديكورات العصرية، الدهانات الداخلية والخارجية، وتكسيات الخشب والرخام والفوم بالدمام والشرقية. اطلب مقايسة مجانية.',
  applicationName: companyData.name,
  keywords: [
    'ديكورات الدمام',
    'دهانات الدمام',
    'تشطيبات الدمام',
    'معلم دهانات بالدمام',
    'معلم ديكورات الدمام',
    'دهانات وديكورات الدمام',
    'بديل خشب الدمام',
    'بديل رخام الدمام',
    'فوم وجبس بورد الدمام',
    'مقاول تشطيب الدمام',
    'تشطيب فلل في الدمام',
    'ديكورات الخبر والدمام',
    'المنطقة الشرقية',
    companyData.name,
  ],
  authors: [{ name: companyData.name, url: productionDomain }],
  creator: companyData.name,
  publisher: companyData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: productionDomain,
  },
  openGraph: {
    title: `${companyData.name} | تشطيبات وديكور داخلي بالمنطقة الشرقية`,
    description:
      'خدمات ديكورات ودهانات عصرية وتصميم داخلي متكامل للفلل والمنازل والمشاريع السكنية والتجارية في الدمام والمنطقة الشرقية مع إشراف هندسي وضمان الجودة.',
    url: productionDomain,
    siteName: companyData.name,
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/og-share.jpg',
        width: 1200,
        height: 630,
        alt: `${companyData.name} - تشطيبات وديكورات ودهانات في الدمام`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyData.name} | تشطيبات وديكور داخلي بالمنطقة الشرقية`,
    description:
      'تنفيذ أعمال الديكورات العصرية والدهانات وتشطيب الفلل في الدمام والمنطقة الشرقية بإشراف هندسي وتنفيذ متقن.',
    images: ['/images/og-share.jpg'],
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      'z2TwJxw-bnx49c0CyQL_etac-41i42nPd1S8XSKgJ74',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * توليد Structured Data (Schema.org) مترابط عبر @graph
 * يشمل كيان المنشأة المحلية (LocalBusiness/GeneralContractor)، وموقع الويب (WebSite)،
 * وكتالوج الخدمات الفعلية (OfferCatalog)، والأسئلة الشائعة (FAQPage).
 * يتوافق بدقة مع البيانات الحقيقية فقط دون أي تقييمات أو إحداثيات مصطنعة.
 */
export function generateLocalBusinessSchema() {
  const businessId = `${productionDomain}/#business`;
  const websiteId = `${productionDomain}/#website`;
  const faqId = `${productionDomain}/#faq`;

  const businessEntity: Record<string, unknown> = {
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': businessId,
    name: companyData.name,
    alternateName: 'ديكورات ودهانات الدمام',
    url: productionDomain,
    logo: `${productionDomain}/images/logo-icon.jpg`,
    image: `${productionDomain}/images/og-share.jpg`,
    description: companyData.shortDescription,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: companyData.city,
      addressRegion: 'المنطقة الشرقية',
      addressCountry: 'SA',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'الدمام',
      },
      {
        '@type': 'City',
        name: 'الخبر',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'المنطقة الشرقية',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `خدمات الديكورات والدهانات في ${companyData.city}`,
      itemListElement: servicesData.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
          url: `${productionDomain}/services/${service.slug}`,
        },
        position: index + 1,
      })),
    },
  };

  if (companyData.isContactConfigured && companyData.phone) {
    businessEntity.telephone = formatPhoneForTel(companyData.phone);
  }

  const websiteEntity = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: productionDomain,
    name: companyData.name,
    description: companyData.shortDescription,
    inLanguage: 'ar-SA',
    publisher: {
      '@id': businessId,
    },
  };

  const faqEntity = {
    '@type': 'FAQPage',
    '@id': faqId,
    isPartOf: {
      '@id': websiteId,
    },
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [businessEntity, websiteEntity, faqEntity],
  };
}

/**
 * توليد Structured Data لصفحات الخدمات المستقلة (Schema.org Service)
 */
export function generateServiceSchema(service: ServiceItem) {
  const businessId = `${productionDomain}/#business`;
  const serviceUrl = `${productionDomain}/services/${service.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}/#service`,
    name: `${service.title} في الدمام والخبر`,
    description: service.fullDescription || service.shortDescription,
    url: serviceUrl,
    provider: {
      '@id': businessId,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'الدمام',
      },
      {
        '@type': 'City',
        name: 'الخبر',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'المنطقة الشرقية',
      },
    ],
    termsOfService: 'عقود نظامية وجداول كميات واضحة مع إشراف هندسي وضمان الجودة',
    serviceType: service.title,
  };
}

/**
 * توليد BreadcrumbList لنتائج بحث Google
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

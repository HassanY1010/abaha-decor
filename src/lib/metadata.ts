import { Metadata } from 'next';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { faqData } from '@/data/faq';
import { formatPhoneForTel } from '@/lib/whatsapp';

// النطاق الإنتاجي الفعلي للموقع (بدون شرطة مائلة في النهاية لضمان تطابق Canonical وSitemap)
const productionDomain = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://abaha-decor-evu8.vercel.app'
).replace(/\/$/, '');

export const siteMetadata: Metadata = {
  metadataBase: new URL(productionDomain),
  title: {
    default: `${companyData.name} | تشطيب فلل وتصميم داخلي في أبها`,
    template: `%s | ${companyData.name}`,
  },
  description:
    'مؤسسة رونق أبها متخصصة في أعمال تشطيب الفلل والمنازل، التصميم الداخلي، والجبس بورد والدهانات بأبها. إشراف هندسي وتنفيذ متقن. اطلب مقايسة مجانية.',
  applicationName: companyData.name,
  keywords: [
    'تشطيبات أبها',
    'ديكورات أبها',
    'تشطيبات وديكورات في أبها',
    'شركة تشطيبات في أبها',
    'مقاول تشطيب أبها',
    'تشطيب فلل في أبها',
    'تصميم داخلي أبها',
    'دهانات وديكورات أبها',
    'جبس بورد أبها',
    'تركيب أرضيات باركيه أبها',
    'ترميم منازل في أبها',
    'إشراف هندسي أبها',
    'رونق أبها',
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
      { url: '/images/logo-icon.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [{ url: '/images/logo-icon.jpg', sizes: '180x180', type: 'image/jpeg' }],
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: productionDomain,
  },
  openGraph: {
    title: `${companyData.name} | تشطيبات وديكورات وتصميم داخلي في أبها`,
    description:
      'خدمات تشطيب وتصميم داخلي متكاملة للفلل والمنازل والمشاريع السكنية والتجارية في أبها مع إشراف هندسي وضمان الجودة.',
    url: productionDomain,
    siteName: companyData.name,
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/og-share.jpg',
        width: 1200,
        height: 630,
        alt: `${companyData.name} - تشطيبات وديكورات وتصميم داخلي في أبها`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyData.name} | تشطيبات وديكورات وتصميم داخلي في أبها`,
    description:
      'تشطيبات معمارية وتصميم داخلي متكامل للفلل والمشاريع في أبها بإشراف هندسي وتنفيذ متقن.',
    images: ['/images/og-share.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
    alternateName: 'رونق أبها',
    url: productionDomain,
    logo: `${productionDomain}/images/logo-icon.jpg`,
    image: `${productionDomain}/images/og-share.jpg`,
    description: companyData.shortDescription,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: companyData.city,
      addressRegion: 'منطقة عسير',
      addressCountry: 'SA',
    },
    areaServed: [
      {
        '@type': 'City',
        name: companyData.city,
      },
      {
        '@type': 'AdministrativeArea',
        name: 'منطقة عسير',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `خدمات التشطيبات والديكور في ${companyData.city}`,
      itemListElement: servicesData.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
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

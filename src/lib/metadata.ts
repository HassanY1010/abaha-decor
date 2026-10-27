import { Metadata } from 'next';
import { companyData } from '@/data/company';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyData.name} | خدمات التشطيبات والديكور والتصميم الداخلي`,
    template: `%s | ${companyData.name}`,
  },
  description: `${companyData.name} - ${companyData.shortDescription} في ${companyData.city} والمناطق المجاورة. إشراف هندسي وتنفيذ متقن.`,
  applicationName: companyData.name,
  keywords: [
    'تشطيبات الرياض',
    'ديكورات داخلية',
    'تصميم داخلي',
    'تشطيب فيلا',
    'جبس بورد',
    'دهانات حديثة',
    'تركيب باركيه',
    'مقاول تشطيب',
    'إشراف هندسي',
    'تسليم مفتاح',
    companyData.name,
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  publisher: companyData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${companyData.name} | تشطيبات وديكورات معمارية عصرية`,
    description: companyData.shortDescription,
    url: siteUrl,
    siteName: companyData.name,
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyData.name} | تشطيبات وديكورات بالرياض`,
    description: companyData.shortDescription,
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
 * توليد Structured Data (Schema.org) بنوع LocalBusiness
 * يتوافق مع المحتوى المعروض دون اختلاق تقييمات أو بيانات غير موثقة
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: companyData.name,
    description: companyData.shortDescription,
    url: siteUrl,
    telephone: companyData.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: companyData.city,
      addressCountry: 'SA',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: companyData.serviceArea,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    priceRange: '$$',
  };
}

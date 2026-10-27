import { Metadata } from 'next';
import { companyData } from '@/data/company';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyData.name} | خدمات التشطيبات والديكور والتصميم الداخلي`,
    template: `%s | ${companyData.name}`,
  },
  description: `${companyData.name} - ${companyData.shortDescription} في ${companyData.serviceArea}. إشراف هندسي وتنفيذ متقن.`,
  applicationName: companyData.name,
  keywords: [
    'تشطيبات وديكورات',
    'تصميم داخلي',
    'تشطيب فيلا',
    'جبس بورد',
    'دهانات حديثة',
    'تركيب باركيه',
    'مقاول تشطيب',
    'إشراف هندسي',
    'تسليم مفتاح',
    companyData.name,
    ...(companyData.isCityConfirmed ? [`تشطيبات ${companyData.city}`] : []),
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
    title: `${companyData.name} | تشطيبات وديكورات معمارية متكاملة`,
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
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: companyData.name,
    description: companyData.shortDescription,
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      ...(companyData.isCityConfirmed ? { addressLocality: companyData.city } : {}),
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: companyData.serviceArea,
    },
    priceRange: '$$',
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
  };

  if (companyData.isContactConfigured && companyData.phone) {
    schema.telephone = companyData.phone;
  }

  return schema;
}

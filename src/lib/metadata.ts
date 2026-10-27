import { Metadata } from 'next';
import { companyData } from '@/data/company';
import { formatPhoneForTel } from '@/lib/whatsapp';

// النطاق الإنتاجي الفعلي للموقع
const productionDomain =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://abaha-decor-evu8.vercel.app';

export const siteMetadata: Metadata = {
  ...(productionDomain ? { metadataBase: new URL(productionDomain) } : {}),
  title: {
    default: `${companyData.name} | خدمات التشطيبات والديكور والتصميم الداخلي في ${companyData.city}`,
    template: `%s | ${companyData.name}`,
  },
  description: `${companyData.name} - ${companyData.shortDescription} إشراف هندسي وتنفيذ متقن للمشاريع السكنية والتجارية في ${companyData.city}.`,
  applicationName: companyData.name,
  keywords: [
    'تشطيبات أبها',
    'ديكورات أبها',
    'تشطيبات وديكورات',
    'تصميم داخلي أبها',
    'مقاول تشطيب في أبها',
    'دهانات أبها',
    'جبس بورد أبها',
    'تركيب أرضيات باركيه',
    'إشراف هندسي',
    'تشطيب منازل وفلل',
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
  icons: {
    icon: '/images/logo-icon.jpg',
    apple: '/images/logo-icon.jpg',
    shortcut: '/images/logo-icon.jpg',
  },
  ...(productionDomain ? { alternates: { canonical: '/' } } : {}),
  openGraph: {
    title: `${companyData.name} | تشطيبات وديكورات معمارية في ${companyData.city}`,
    description: companyData.shortDescription,
    ...(productionDomain ? { url: productionDomain } : {}),
    siteName: companyData.name,
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/og-share.jpg',
        width: 1200,
        height: 630,
        alt: `${companyData.name} | تشطيبات وديكورات معمارية في أبها`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyData.name} | تشطيبات وديكورات معمارية متكاملة`,
    description: companyData.shortDescription,
    images: ['/images/og-share.jpg'],
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
 * يتوافق بدقة مع البيانات المؤكدة فقط دون اختلاق ساعات عمل أو تقييمات غير موثقة
 */
export function generateLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: companyData.name,
    description: companyData.shortDescription,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressLocality: companyData.city,
    },
    areaServed: {
      '@type': 'City',
      name: companyData.serviceArea,
    },
    priceRange: '$$',
  };

  if (productionDomain) {
    schema.url = productionDomain;
  }

  if (companyData.isContactConfigured && companyData.phone) {
    schema.telephone = formatPhoneForTel(companyData.phone);
  }

  return schema;
}

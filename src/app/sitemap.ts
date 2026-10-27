import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://abaha-decor-evu8.vercel.app'
).replace(/\/$/, '');

// تاريخ إصدار المحتوى المستقر (ثابت ولا يتغير ديناميكياً في كل طلب لتفادي تضليل عناكب الفهرسة)
const RELEASE_DATE = new Date('2026-10-27T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: RELEASE_DATE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // إضافة صفحات الخدمات المستقلة لضمان فهرستها الكاملة
  servicesData.forEach((service) => {
    sitemapEntries.push({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: RELEASE_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return sitemapEntries;
}

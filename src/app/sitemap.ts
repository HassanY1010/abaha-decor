import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  // لا نصدر روابط خريطة موقع تشير لنطاقات وهمية في حال عدم توفر النطاق الرسمي
  if (!siteUrl) {
    return [];
  }

  const currentDate = new Date().toISOString();
  const cleanUrl = siteUrl.replace(/\/$/, '');

  return [
    {
      url: `${cleanUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}

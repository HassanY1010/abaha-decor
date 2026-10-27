async function auditLiveProduction() {
  const baseUrl = 'https://abaha-decor-evu8.vercel.app';
  const slugs = [
    'turnkey-finishing',
    'decorative-paints',
    'wood-marble-alternatives',
    'gypsum-ceilings',
    'renovation-restoration',
    'interior-design',
    'flooring-installation',
    'architectural-lighting'
  ];

  console.log('=== AUDITING LIVE PRODUCTION WEBSITE (https://abaha-decor-evu8.vercel.app) ===\n');

  // 1. Homepage
  const homeRes = await fetch(baseUrl, { cache: 'no-store' });
  const homeHtml = await homeRes.text();
  console.log('--- LIVE HOMEPAGE (/) ---');
  console.log('  Status:', homeRes.status);
  console.log('  Title:', homeHtml.split('<title>')[1]?.split('</title>')[0]);
  console.log('  Canonical:', homeHtml.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1]);
  console.log('  Offers Catalog links to services count:', (homeHtml.match(/\/services\//g) || []).length);
  console.log('  Schema has "الخبر":', homeHtml.includes('الخبر'));
  console.log('  WhatsApp Link:', homeHtml.includes('https://wa.me/966575083901'));
  console.log('  Tel Link:', homeHtml.includes('tel:+966575083901'));

  // 2. Robots.txt
  const robotsRes = await fetch(`${baseUrl}/robots.txt`, { cache: 'no-store' });
  const robotsText = await robotsRes.text();
  console.log('\n--- LIVE ROBOTS.TXT ---');
  console.log('  Status:', robotsRes.status);
  console.log('  Content:\n' + robotsText.trim());

  // 3. Sitemap.xml
  const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`, { cache: 'no-store' });
  const sitemapText = await sitemapRes.text();
  console.log('\n--- LIVE SITEMAP.XML ---');
  console.log('  Status:', sitemapRes.status);
  console.log('  Total URLs listed:', (sitemapText.match(/<loc>/g) || []).length);
  console.log('  Stable LastMod date:', sitemapText.includes('2026-10-27T00:00:00.000Z'));
  console.log('  URLs sample:\n' + sitemapText.match(/<loc>[^<]+<\/loc>/g)?.join('\n'));

  // 4. All 8 Service Pages
  console.log('\n--- LIVE SERVICE PAGES ---');
  for (const slug of slugs) {
    const url = `${baseUrl}/services/${slug}`;
    const res = await fetch(url, { cache: 'no-store' });
    const html = await res.text();
    const title = html.split('<title>')[1]?.split('</title>')[0];
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim().replace(/\s+/g, ' ');
    const hasService = html.includes('"@type":"Service"');
    const hasBreadcrumb = html.includes('"@type":"BreadcrumbList"');
    const wa = html.includes('https://wa.me/966575083901');

    console.log(`\n> [${res.status}] /services/${slug}`);
    console.log(`   Title: ${title}`);
    console.log(`   H1: ${h1}`);
    console.log(`   Canonical: ${canonical}`);
    console.log(`   Schemas: Service=${hasService}, Breadcrumbs=${hasBreadcrumb}, WA=${wa}`);
  }
}

auditLiveProduction();

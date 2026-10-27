import fs from 'node:fs';
import path from 'node:path';

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

console.log('=== AUDITING 8 DEDICATED SERVICE PAGES ===\n');

for (const slug of slugs) {
  const p = path.join('.next/server/app/services', slug + '.html');
  if (!fs.existsSync(p)) {
    console.error('MISSING:', p);
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  const title = html.split('<title>')[1]?.split('</title>')[0];
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  const desc = descMatch ? descMatch[1] : '';
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : '';
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1 = h1Match ? h1Match[1].trim().replace(/\s+/g, ' ') : '';
  const hasServiceSchema = html.includes('"@type":"Service"');
  const hasBreadcrumbs = html.includes('"@type":"BreadcrumbList"');
  const internalLinks = (html.match(/href="\/[^"]*"/g) || []).length;
  const whatsappLink = html.includes('https://wa.me/966575083901');
  const telLink = html.includes('tel:+966575083901');

  console.log(`--- /services/${slug} ---`);
  console.log(`  File Size: ${(html.length / 1024).toFixed(1)} KB`);
  console.log(`  Title: ${title}`);
  console.log(`  H1: ${h1}`);
  console.log(`  Canonical: ${canonical}`);
  console.log(`  Meta Desc (${desc.length} chars): ${desc.slice(0, 75)}...`);
  console.log(`  Schemas: Service=${hasServiceSchema}, Breadcrumb=${hasBreadcrumbs}`);
  console.log(`  Conversion: WhatsApp=${whatsappLink}, Tel=${telLink}`);
  console.log(`  Internal Links Count: ${internalLinks}\n`);
}

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const APP_DIR = path.resolve('.next/server/app');

test('Production Build Check: .next server outputs exist', () => {
  assert.ok(fs.existsSync(APP_DIR), 'Production build directory .next/server/app must exist. Run npm run build first.');
});

test('SEO Robots.txt: allows search engine indexing and includes valid sitemap URL', () => {
  const robotsPath = path.join(APP_DIR, 'robots.txt.body');
  assert.ok(fs.existsSync(robotsPath), 'robots.txt.body must exist');
  const content = fs.readFileSync(robotsPath, 'utf8');

  assert.ok(content.includes('User-Agent: *') || content.includes('user-agent: *'));
  assert.ok(content.includes('Allow: /') || content.includes('allow: /'));
  assert.ok(content.includes('Sitemap: https://') && content.includes('/sitemap.xml'));
  // Ensure no malformed double slashes in sitemap URL like https://domain.com//sitemap.xml
  assert.ok(!content.includes('://abaha-decor-evu8.vercel.app//sitemap.xml'));
});

test('SEO Sitemap.xml: valid XML, absolute URL, priority 1, and no trailing slash mismatch', () => {
  const sitemapPath = path.join(APP_DIR, 'sitemap.xml.body');
  assert.ok(fs.existsSync(sitemapPath), 'sitemap.xml.body must exist');
  const content = fs.readFileSync(sitemapPath, 'utf8');

  assert.ok(content.includes('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(content.includes('<urlset'));
  assert.ok(content.includes('<loc>https://abaha-decor-evu8.vercel.app</loc>'));
  // Must NOT have trailing slash mismatch with canonical
  assert.ok(!content.includes('<loc>https://abaha-decor-evu8.vercel.app/</loc>'));
  assert.ok(content.includes('<priority>1</priority>') || content.includes('<priority>1.0</priority>'));
});

test('SEO HTML Inspection: canonical, title, description, schema, OpenGraph, and lang/dir attributes', () => {
  const indexPath = path.join(APP_DIR, 'index.html');
  assert.ok(fs.existsSync(indexPath), 'index.html must exist');
  const html = fs.readFileSync(indexPath, 'utf8');

  // HTML attributes
  assert.ok(html.includes('lang="ar"'), 'Must specify lang="ar"');
  assert.ok(html.includes('dir="rtl"'), 'Must specify dir="rtl"');

  // Title & Description
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  assert.ok(titleMatch, 'HTML must contain <title>');
  const title = titleMatch[1];
  assert.ok(title.includes('رونق أبها'));
  assert.ok(title.includes('أبها'));
  assert.ok(title.length >= 30 && title.length <= 70, `Title length is ${title.length}, expected 30-70`);

  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  assert.ok(descMatch, 'HTML must contain meta description');
  const desc = descMatch[1];
  assert.ok(desc.includes('أبها'));
  assert.ok(desc.length >= 90 && desc.length <= 165, `Description length is ${desc.length}, expected 90-165`);

  // Canonical tag must match sitemap exactly
  assert.ok(html.includes('<link rel="canonical" href="https://abaha-decor-evu8.vercel.app"/>'));

  // Robots meta
  assert.ok(html.includes('name="robots" content="index, follow"'));
  assert.ok(html.includes('name="googlebot" content="index, follow'));

  // Open Graph and Twitter
  assert.ok(html.includes('property="og:type" content="website"'));
  assert.ok(html.includes('property="og:locale" content="ar_SA"'));
  assert.ok(html.includes('property="og:image"'));
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));

  // Headings hierarchy
  assert.ok(html.includes('<h1'), 'Page must contain an <h1> heading');
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  assert.ok(h1Match, 'Must find <h1> element content');
  assert.ok(h1Match[1].includes('أبها'), 'H1 must include city name (أبها) for local relevance');
  assert.ok(h1Match[1].includes('تشطيب'), 'H1 must include primary service keyword (تشطيب)');

  // Structured Data Schema.org
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(jsonLdMatch, 'HTML must include JSON-LD structured data');
  const schema = JSON.parse(jsonLdMatch[1]);

  assert.equal(schema['@context'], 'https://schema.org');
  assert.ok(Array.isArray(schema['@graph']), 'Schema should use @graph for multi-entity knowledge modeling');

  const business = schema['@graph'].find((e) =>
    Array.isArray(e['@type'])
      ? e['@type'].includes('HomeAndConstructionBusiness')
      : e['@type'] === 'HomeAndConstructionBusiness'
  );
  assert.ok(business, 'HomeAndConstructionBusiness must be in graph');
  assert.equal(business.address?.addressLocality, 'أبها');
  assert.equal(business.address?.addressRegion, 'منطقة عسير');
  assert.equal(business.telephone, '+966560979886');
  assert.ok(!business.aggregateRating, 'Must not include fake aggregate rating');

  // Verify FAQPage entity in graph
  const faq = schema['@graph'].find((e) => e['@type'] === 'FAQPage');
  assert.ok(faq, 'FAQPage must be present in structured data graph');
  assert.ok(faq.mainEntity?.length >= 6, 'FAQPage must contain question entities');

  // Verify WebSite entity in graph
  const website = schema['@graph'].find((e) => e['@type'] === 'WebSite');
  assert.ok(website, 'WebSite must be present in structured data graph');
  assert.equal(website.inLanguage, 'ar-SA');
});

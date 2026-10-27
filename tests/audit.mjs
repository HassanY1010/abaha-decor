async function testSite() {
  const routes = ['/', '/robots.txt', '/sitemap.xml', '/not-a-real-page-404-test'];
  
  for (const route of routes) {
    try {
      const res = await fetch(`http://localhost:3000${route}`);
      const text = await res.text();
      console.log(`\n=== ROUTE: ${route} ===`);
      console.log(`Status: ${res.status}`);
      console.log(`Content-Type: ${res.headers.get('content-type')}`);
      console.log(`Length: ${text.length}`);

      if (route === '/') {
        console.log('Includes lang="ar":', text.includes('lang="ar"'));
        console.log('Includes dir="rtl":', text.includes('dir="rtl"'));
        console.log('Includes H1:', text.includes('<h1'));
        console.log('Includes Confirmed Name (ديكورات ودهانات الدمام):', text.includes('ديكورات ودهانات الدمام'));
        console.log('Includes City (الدمام):', text.includes('الدمام'));
        console.log('Includes Canonical tag:', text.includes('rel="canonical"'));
        console.log('Includes WhatsApp link with wa.me/966575083901:', text.includes('https://wa.me/966575083901'));
        console.log('Includes tel:+966575083901 link:', text.includes('tel:+966575083901'));
        console.log('Does NOT duplicate country code (966966):', !text.includes('966966'));
        console.log('Does NOT contain unverified email Abahah@gmail.com:', !text.includes('Abahah@gmail.com'));
        console.log('Does NOT contain dummy 00000000:', !text.includes('00000000'));
        console.log('Includes JSON-LD schema:', text.includes('application/ld+json'));
        console.log('Includes skip link (#main-content):', text.includes('#main-content'));
      } else if (route === '/robots.txt') {
        console.log('Robots content:\n' + text.trim());
      } else if (route === '/sitemap.xml') {
        console.log('Sitemap sample:\n' + text.slice(0, 250).trim());
      }
    } catch (err) {
      console.error(`Error on ${route}:`, err.message);
    }
  }
}

testSite();

async function testSite() {
  const routes = ['/', '/robots.txt', '/sitemap.xml', '/not-a-real-page-404-test'];
  
  for (const route of routes) {
    try {
      const res = await fetch(`http://localhost:3000${route}`);
      const text = await res.text();
      console.log(`=== ROUTE: ${route} ===`);
      console.log(`Status: ${res.status}`);
      console.log(`Content-Type: ${res.headers.get('content-type')}`);
      console.log(`Length: ${text.length}`);

      if (route === '/') {
        console.log('Includes lang="ar":', text.includes('lang="ar"'));
        console.log('Includes dir="rtl":', text.includes('dir="rtl"'));
        console.log('Includes H1:', text.includes('<h1'));
        console.log('H1 count:', (text.match(/<h1/g) || []).length);
        console.log('Includes JSON-LD schema:', text.includes('application/ld+json'));
        console.log('Includes Canonical:', text.includes('rel="canonical"'));
        console.log('Includes Cairo font:', text.includes('Cairo') || text.includes('cairo'));
        console.log('Includes WhatsApp link:', text.includes('https://wa.me/'));
        console.log('Includes tel link:', text.includes('tel:'));
        console.log('Includes mailto link:', text.includes('mailto:'));
        console.log('Includes skip link:', text.includes('#main-content'));
      } else if (route === '/robots.txt') {
        console.log('Robots content:\n' + text);
      } else if (route === '/sitemap.xml') {
        console.log('Sitemap sample:\n' + text.slice(0, 300));
      }
    } catch (err) {
      console.error(`Error on ${route}:`, err.message);
    }
  }
}

testSite();

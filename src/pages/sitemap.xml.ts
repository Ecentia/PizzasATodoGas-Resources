import type { APIRoute } from 'astro';

const SITE_URL = 'https://pizzasatodogas.es'; 

export const GET: APIRoute = async () => {
  const pages = [
    { url: '', changefreq: 'daily', priority: 1.0 },
    { url: 'carta', changefreq: 'weekly', priority: 0.9 },
    { url: 'local', changefreq: 'monthly', priority: 0.8 },
    { url: 'contacto', changefreq: 'monthly', priority: 0.7 },
    { url: 'legal/aviso-legal', changefreq: 'yearly', priority: 0.3 },
    { url: 'legal/politica-privacidad', changefreq: 'yearly', priority: 0.3 },
    { url: 'legal/cookies', changefreq: 'yearly', priority: 0.3 },
    { url: 'legal/accesibilidad', changefreq: 'yearly', priority: 0.3 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages.map(page => `
  <url>
    <loc>${SITE_URL}/${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.url === '' ? `
    <image:image>
      <image:loc>${SITE_URL}/logo.webp</image:loc>
      <image:title>Pizzas A Todo Gas - Logo</image:title>
      <image:caption>Pizzería artesanal en El Saucejo, Sevilla</image:caption>
    </image:image>` : ''}
  </url>`).join('')}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
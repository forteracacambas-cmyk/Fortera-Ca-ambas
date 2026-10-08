import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import { SITE_CONFIG, getCanonicalUrl } from './src/config/siteConfig';
import { getRouteMeta, getAllRoutes } from './src/data/routesMetadata';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

async function createServer() {
  const app = express();
  let vite: any = null;

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === 'true' ? false : undefined,
      },
      appType: 'custom',
    });
    app.use(express.static(path.resolve(__dirname, 'public')));
    app.use(vite.middlewares);
  } else {
    // Em produção serve arquivos estáticos gerados em /dist e /public
    app.use(express.static(path.resolve(__dirname, 'public')));
    app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));
  }

  // Rota robots.txt
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    const siteUrl = SITE_CONFIG.siteUrl?.trim();
    if (siteUrl && !siteUrl.includes('localhost') && !siteUrl.includes('127.0.0.1')) {
      const cleanUrl = siteUrl.replace(/\/$/, '');
      res.send(`User-agent: *\nAllow: /\n\nSitemap: ${cleanUrl}/sitemap.xml\n`);
    } else {
      res.send(`User-agent: *\nAllow: /\n\n# Sitemap desativado até configuração de SITE_URL oficial em produção.\n`);
    }
  });

  // Rota sitemap.xml
  app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    const siteUrl = SITE_CONFIG.siteUrl?.trim();
    if (!siteUrl || siteUrl.includes('localhost') || siteUrl.includes('127.0.0.1')) {
      // Conforme requisitos: se sem domínio válido não emitir canonical ou URLs localhost no sitemap
      res.send(`<?xml version="1.0" encoding="UTF-8"?>
<!--
  Sitemap em modo de espera de produção.
  Para ativar a listagem completa das URLs indexáveis, configure a variável
  SITE_URL no arquivo .env com o domínio oficial (ex: https://seudominio.com.br).
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`);
      return;
    }

    const cleanBase = siteUrl.replace(/\/$/, '');
    const routes = getAllRoutes();
    const currentDate = new Date().toISOString().split('T')[0];

    const urlsXml = routes.map(r => `  <url>
    <loc>${cleanBase}${r.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`).join('\n');

    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`);
  });

  // Tratamento geral de páginas com SSR
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Normaliza caminho para conferir se a rota existe
      const [pathname] = url.split('?');
      const routeMeta = getRouteMeta(pathname);
      const is404 = !routeMeta;

      // Lê o template base do index.html
      let template: string;
      if (!isProduction && vite) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8');
      }

      // Renderiza o componente React em HTML string no servidor
      const appHtml = renderToString(React.createElement(App, { initialUrl: url }));

      // Determina título e descrição para SSR
      const pageTitle = routeMeta?.title || 'Página Não Encontrada (404) | Fortera Caçambas';
      const pageDesc = routeMeta?.description || 'A página solicitada não foi encontrada. Navegue pelo site da Fortera Caçambas ou solicite um orçamento.';
      const canonical = getCanonicalUrl(pathname);

      // Injeta os metadados específicos e o conteúdo HTML dentro do template
      let html = template
        .replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`)
        .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${pageDesc}" />`)
        .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${pageTitle}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${pageDesc}" />`)
        .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${pageTitle}" />`)
        .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${pageDesc}" />`)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      if (canonical) {
        html = html.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n  <meta property="og:url" content="${canonical}" />\n</head>`);
      }

      res.status(is404 ? 404 : 200).set({ 'Content-Type': 'text/html; charset=utf-8' }).send(html);
    } catch (e: any) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  return { app };
}

createServer().then(({ app }) => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Fortera Caçambas] Servidor SSR rodando em http://0.0.0.0:${PORT}`);
  });
}).catch((err) => {
  console.error('Falha ao iniciar servidor:', err);
  process.exit(1);
});

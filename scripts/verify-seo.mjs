import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const worker = (await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href + '?test=' + Date.now())).default;
const origin = 'https://forteracacambas.com';
const assets = { fetch: async request => {
  try { return new Response(await readFile('cloudflare-dist' + new URL(request.url).pathname)); }
  catch { return new Response('Not found', { status: 404 }); }
} };
const fetchPage = pathname => worker.fetch(new Request(origin + pathname), { ASSETS: assets });
const index = await (await fetchPage('/sitemap.xml')).text();
const children = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
assert.equal(children.length, 28, 'main sitemap + 27 UFs');
const urls = [];
for (const child of children) {
  const response = await fetchPage(child); assert.equal(response.status, 200);
  const xml = await response.text();
  assert.ok(!xml.includes('<lastmod>'), 'no fabricated lastmod dates');
  urls.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]));
}
assert.equal(new Set(urls).size, urls.length, 'sitemap URLs must be unique');
assert.ok(urls.length > 5500);
for (const pathname of ['/', '/orcamento/', '/tamanhos-de-cacamba/', '/preco-aluguel-cacamba/', '/regioes/campinas-e-regiao/', ...children.slice(1).map(file => '/aluguel-de-cacamba/' + file.split('/').pop().split('.')[0] + '/')]) {
  const response = await fetchPage(pathname); assert.equal(response.status, 200, pathname);
  const html = await response.text();
  assert.ok(html.includes('rel="canonical" href="' + origin + pathname + '"'), pathname + ': canonical');
  assert.equal([...html.matchAll(/<h1[ >]/g)].length, 1, pathname + ': one H1');
  assert.ok(!html.includes('95759-5840'), pathname + ': old phone');
  for (const script of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(script[1]);
}
assert.equal((await fetchPage('/aluguel-de-cacamba/sp')).status, 301);
assert.equal((await fetchPage('/pagina-inexistente/')).status, 404);
const missing = await (await fetchPage('/pagina-inexistente/')).text();
assert.ok(missing.includes('noindex'));
assert.ok(!missing.includes('rel="canonical"'));
assert.equal((await worker.fetch(new Request('https://www.forteracacambas.com/'), { ASSETS: assets })).status, 301);

// Exercise the real tracking function without submitting events to Google.
const temp = 'scripts/.analytics-test.mjs';
try {
  await build({ entryPoints: ['src/components/AnalyticsConsent.tsx'], outfile: temp, bundle: true, platform: 'node', format: 'esm', jsx: 'automatic' });
  const { trackContactIntent } = await import(pathToFileURL(path.resolve(temp)).href + '?test=' + Date.now());
  const calls = [];
  let consent = 'rejected';
  globalThis.localStorage = { getItem: () => consent };
  globalThis.window = { location: { pathname: '/orcamento/' }, gtag: (...args) => calls.push(args) };
  trackContactIntent('whatsapp_click', 'quote_form'); assert.equal(calls.length, 0);
  consent = 'accepted';
  trackContactIntent('whatsapp_click', 'quote_form', { dumpster_size: '4 m³', rental_period: '7-dias' });
  assert.equal(calls.length, 1); assert.equal(calls[0][1], 'whatsapp_click');
  assert.deepEqual(calls[0][2], { contact_method: 'whatsapp', contact_source: 'quote_form', page_path: '/orcamento/', dumpster_size: '4 m³', rental_period: '7-dias', transport_type: 'beacon' });
  trackContactIntent('whatsapp_click', 'quote_form', { dumpster_size: 'private address', rental_period: 'private CEP' });
  assert.ok(!JSON.stringify(calls).includes('private'));
} finally { await unlink(temp).catch(() => {}); }
console.log(JSON.stringify({ sitemapFiles: children.length, uniqueCanonicalUrls: urls.length, checks: 'SSR, all states, redirects, 404, structured data, consent and tracking payload: passed' }));
process.exit(0);

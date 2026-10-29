import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const worker = (await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href + '?test=' + Date.now())).default;
const origin = 'https://forteracacambas.com';
const municipalities = JSON.parse(await readFile('src/data/municipalities.json', 'utf8'));
const assets = { fetch: async request => {
  try { return new Response(await readFile('cloudflare-dist' + new URL(request.url).pathname)); }
  catch { return new Response('Not found', { status: 404 }); }
} };
const fetchPage = pathname => worker.fetch(new Request(origin + pathname), { ASSETS: assets });
const index = await (await fetchPage('/sitemap.xml')).text();
const children = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
assert.equal(children.length, 28, 'main sitemap + 27 UFs');
const urls = [];
const updatedSP = new Set('campinas americana artur-nogueira cosmopolis engenheiro-coelho holambra hortolandia indaiatuba itatiba jaguariuna monte-mor morungaba nova-odessa paulinia pedreira santa-barbara-d-oeste santo-antonio-de-posse sumare valinhos vinhedo mairipora'.split(' '));
const updatedPR = new Set(['matinhos','paranagua','apucarana','guaratuba']);
for (const child of children) {
  const response = await fetchPage(child); assert.equal(response.status, 200);
  const xml = await response.text();
  for (const block of xml.matchAll(/<url>(.*?)<\/url>/gs)) {
    const route = new URL(block[1].match(/<loc>(.*?)<\/loc>/)[1]).pathname;
    const city = route.match(/^\/aluguel-de-cacamba\/([a-z]{2})\/([^/]+)\/$/);
    const edited = route === '/aluguel-de-cacamba/sp/' || route.startsWith('/regioes/') || route === '/tamanhos-de-cacamba/' || city && ((city[1] === 'sp' && city[2] !== 'sao-paulo') || (city[1] === 'pr' && updatedPR.has(city[2])) || (city[1] === 'mg' && ['uberaba','curvelo'].includes(city[2])));
    const expected = route.startsWith('/aluguel-de-cacamba/sp/campinas/') || route === '/regioes/campinas-e-regiao/' || city && city[1] === 'sp' && updatedSP.has(city[2]) && city[2] !== 'mairipora' ? '2026-10-28' : edited || route.startsWith('/aluguel-de-cacamba/ba/') ? '2026-10-26' : route.startsWith('/aluguel-de-cacamba/mg/') ? '2026-10-25' : undefined;
    assert.equal(block[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1], expected, route + ': factual release dates only');
  }
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
  const stateMatch = pathname.match(/^\/aluguel-de-cacamba\/([a-z]{2})\/$/);
  if (stateMatch) {
    const uf = stateMatch[1].toUpperCase();
    assert.ok(uf === 'BA' ? html.includes('417 Municípios — Fortera') : uf === 'MG' ? html.includes('853 Municípios — Fortera') : html.includes(`(${uf}) | Fortera`), uf + ': state-specific title');
    assert.ok(html.includes('state-coverage-title'), uf + ': visible service information');
    assert.equal(html.includes('id="municipios-atendidos"'), ['SP', 'MG', 'BA'].includes(uf), uf + ': city directory in SP and MG');
    assert.ok(html.includes('id="orcamento-local"'), uf + ': accessible CEP consultation');
    assert.ok(html.includes('id="duvidas-locacao"'), uf + ': rental questions');
    assert.ok(html.includes('srcSet="/images/estados/') || html.includes('srcset="/images/estados/'), uf + ': responsive illustration');
    for (const city of municipalities.filter(item => item.uf === uf && ['SP', 'MG', 'BA'].includes(uf))) {
      assert.ok(html.includes(`href="/aluguel-de-cacamba/${uf.toLowerCase()}/${city.slug}/"`), uf + ': city preserved: ' + city.name);
    }
    for (const guide of ['/preco-aluguel-cacamba/', '/tamanhos-de-cacamba/', '/guias/o-que-pode-colocar-na-cacamba/']) {
      assert.ok(html.includes(`href="${guide}"`), uf + ': useful guide: ' + guide);
    }
  }
}
assert.equal(urls.length, 6049, '385 Campinas locality pages added; existing city, service and state URLs preserved');
const rentalPaths = ['/locacao-de-cacamba/', '/alugar-cacamba-de-entulho/', '/cacamba-de-entulho/'];
const landingBodies = [];
for (const pathname of rentalPaths) {
  assert.equal(urls.filter(url => url === origin + pathname).length, 1, 'landing in sitemap once');
  const response = await fetchPage(pathname); assert.equal(response.status, 200);
  const html = await response.text(); landingBodies.push(html);
  assert.ok(html.includes('rel="canonical" href="' + origin + pathname + '"'), 'self canonical');
  assert.equal([...html.matchAll(/<h1[ >]/g)].length, 1, 'one landing H1');
  assert.ok(!html.includes('ViaCEP') && !html.includes('<form'), 'no CEP or quote form');
  assert.ok(html.includes('https://wa.me/5511957596840'), 'WhatsApp destination');
  assert.ok(html.includes('srcSet="/images/contratacao/') || html.includes('srcset="/images/contratacao/'), 'responsive hero');
  assert.ok(html.includes('&quot;@type&quot;:&quot;Service&quot;') || html.includes('"@type":"Service"'), 'service structured data');
  assert.ok(!html.includes('noindex'));
  for (const script of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(script[1]);
  assert.equal((await fetchPage(pathname.slice(0, -1))).status, 301, 'canonical redirect');
}
assert.equal(new Set(landingBodies.map(html => html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1])).size, 3, 'distinct headings');
for (const source of ['/', '/servicos/']) {
  const html = await (await fetchPage(source)).text();
  for (const pathname of rentalPaths) assert.ok(html.includes(`href="${pathname}"`), 'landing must have crawlable incoming links');
}
for (const image of ['locacao-cacamba-obra', 'alugar-cacamba-reforma', 'cacamba-entulho-materiais']) {
  for (const suffix of ['', '-640']) {
    const asset = await fetchPage(`/images/contratacao/${image}${suffix}.webp`);
    assert.equal(asset.status, 200); const bytes = new Uint8Array(await asset.arrayBuffer());
    assert.ok(bytes.length < 250000); assert.equal(new TextDecoder().decode(bytes.slice(8, 12)), 'WEBP');
  }
}
for (const scene of ['sudeste', 'sul', 'nordeste', 'norte', 'centro-oeste']) {
  for (const suffix of ['', '-640']) {
    const asset = await fetchPage(`/images/estados/cacamba-${scene}${suffix}.webp`);
    assert.equal(asset.status, 200, 'state image must exist');
    const bytes = new Uint8Array(await asset.arrayBuffer());
    assert.ok(bytes.length < 250000, 'optimized image under 250 KB');
    assert.equal(new TextDecoder().decode(bytes.slice(8, 12)), 'WEBP');
  }
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


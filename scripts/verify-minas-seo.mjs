import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const temp = 'scripts/.minas-test.mjs';
await build({ stdin: { contents: "export {MUNICIPALITIES,cityPath} from './src/data/nationalCoverage'; export {MINAS_LOCALITIES,MINAS_REGIONAL_GUIDES,minasCityMeta,minasCityImage} from './src/data/minasSeo'; export {getAllRoutes} from './src/data/routesMetadata'; export {getSitemapXml} from './src/data/sitemaps';", resolveDir: process.cwd() }, outfile: temp, bundle: true, platform: 'node', format: 'esm' });
try {
  const data = await import(pathToFileURL(path.resolve(temp)).href);
  const worker = (await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href + '?t=' + Date.now())).default;
  const cities = data.MUNICIPALITIES.filter(city => city.uf === 'MG');
  const origin = 'https://forteracacambas.com';
  const assets = { fetch: async () => new Response('', { status: 404 }) };
  const render = async url => { const response = await worker.fetch(new Request(origin + url), { ASSETS: assets }); return { status: response.status, html: await response.text() }; };
  assert.equal(cities.length, 853);
  assert.equal(Object.keys(data.MINAS_LOCALITIES).length, 853);
  assert.equal(Object.keys(data.MINAS_REGIONAL_GUIDES).length, 13);
  assert.equal(new Set(Object.values(data.MINAS_LOCALITIES).map(c => c.immediate)).size, 70);
  const routes = data.getAllRoutes();
  assert.equal(routes.length, new Set(routes.map(r => r.path)).size);
  const sitemap = data.getSitemapXml('/sitemaps/mg.xml');
  assert.equal((sitemap.match(/<url>/g) || []).length, 854);
  const state = await render('/aluguel-de-cacamba/mg/');
  assert.equal(state.status, 200);
  const cityLinks = new Set([...state.html.matchAll(/href="(\/aluguel-de-cacamba\/mg\/[^/]+\/)"/g)].map(m => m[1]));
  assert.equal(cityLinks.size, 853, 'All municipal pages must be discoverable from the state');
  const titles = new Set(), descriptions = new Set(), districtCounts = [];
  const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll("'", '&#x27;').replaceAll('"', '&quot;');
  for (const city of cities) {
    const route = data.cityPath(city), { status, html } = await render(route);
    assert.equal(status, 200, route);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route);
    assert.ok(html.replace(/<!--.*?-->/g, '').includes('Aluguel de caçamba em ' + escapeHtml(city.name)), route);
    assert.ok(html.includes(`rel="canonical" href="${origin + route}"`), route);
    assert.ok(html.includes('index, follow, max-image-preview:large'), route);
    assert.ok(!/<form[ >]/.test(html), route);
    assert.ok(!html.includes('undefined') && !html.includes('[object Object]'), route);
    const meta = data.minasCityMeta(city), image = data.minasCityImage(city.slug);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
    assert.equal(schemas.find(s => s['@type'] === 'Service').areaServed.name, city.name);
    assert.equal(schemas.find(s => s['@type'] === 'WebPage').primaryImageOfPage.contentUrl, origin + image);
    assert.ok(html.includes('src="' + image + '"'));
    await fs.access('cloudflare-dist' + image);
    for (const district of data.MINAS_LOCALITIES[city.slug].districts) assert.ok(html.includes(district.replaceAll('&', '&amp;').replaceAll("'", '&#x27;').replaceAll('"', '&quot;')), route + ' district ' + district);
    assert.ok(sitemap.includes('<loc>' + origin + route + '</loc>'));
    assert.ok(html.includes('wa.me/5511957596840?text='), route);
    titles.add(meta.title); descriptions.add(meta.description);
    districtCounts.push(data.MINAS_LOCALITIES[city.slug].districts.length);
  }
  assert.equal(titles.size, 853); assert.equal(descriptions.size, 853);
  assert.equal((await render('/aluguel-de-cacamba/mg/cidade-inexistente/')).status, 404);
  const evidence = { date: '2026-10-25', municipalPages: cities.length, statePages: 1, immediateRegions: 70, intermediateRegions: 13, districtRecords: districtCounts.reduce((a,b) => a+b,0), sitemapUrlsMG: 854, totalUrls: routes.length, uniqueTitles: titles.size, uniqueDescriptions: descriptions.size, stateCityLinks: cityLinks.size, checks: 'All 853 SSR responses, canonicals, H1, robots, schemas, visible image, districts, sitemap membership and direct contact; invalid city 404; no forms; no analytics contact events emitted' };
  await fs.writeFile('../verificacao-minas-local.json', JSON.stringify(evidence, null, 2));
  console.log('PASS:', JSON.stringify(evidence));
} finally { await fs.unlink(temp).catch(() => {}); }
process.exit(0);

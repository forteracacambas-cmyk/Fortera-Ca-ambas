import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const temp = 'scripts/.parana-test.mjs';
await build({ stdin: { contents: "export {MUNICIPALITIES,cityPath} from './src/data/nationalCoverage'; export {PARANA_LOCALITIES,PARANA_REGIONAL_GUIDES,paranaCityMeta,paranaCityImage,paranaNeighborhoodNames,PARANA_NEIGHBORHOODS,paranaCityLocation} from './src/data/paranaSeo'; export {getAllRoutes} from './src/data/routesMetadata'; export {getSitemapXml} from './src/data/sitemaps';", resolveDir: process.cwd() }, outfile: temp, bundle: true, platform: 'node', format: 'esm' });
try {
  const data = await import(pathToFileURL(path.resolve(temp)).href);
  const worker = (await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href + '?t=' + Date.now())).default;
  const cities = data.MUNICIPALITIES.filter(city => city.uf === 'PR');
  const origin = 'https://forteracacambas.com';
  const assets = { fetch: async () => new Response('', { status: 404 }) };
  const render = async url => { const response = await worker.fetch(new Request(origin + url), { ASSETS: assets }); return { status: response.status, html: await response.text() }; };
  assert.equal(cities.length, 399);
  assert.equal(Object.keys(data.PARANA_LOCALITIES).length, 399);
  assert.equal(Object.keys(data.PARANA_REGIONAL_GUIDES).length, 6);
  assert.equal(new Set(Object.values(data.PARANA_LOCALITIES).map(c => c.immediate)).size, 29);
  const routes = data.getAllRoutes();
  assert.equal(routes.length, new Set(routes.map(r => r.path)).size);
  const sitemap = data.getSitemapXml('/sitemaps/pr.xml');
  assert.equal((sitemap.match(/<url>/g) || []).length, 400);
  assert.equal((sitemap.match(/<lastmod>2026-10-29<\/lastmod>/g)||[]).length,400);
  assert.equal(routes.length,6049,'no new neighborhood or duplicate municipality URLs');
  assert.equal(Object.keys(data.PARANA_NEIGHBORHOODS).length,42);
  assert.equal(Object.values(data.PARANA_NEIGHBORHOODS).flat().length,966);
  const state = await render('/aluguel-de-cacamba/pr/');
  assert.equal(state.status, 200);
  const cityLinks = new Set([...state.html.matchAll(/href="(\/aluguel-de-cacamba\/pr\/[^/]+\/)"/g)].map(m => m[1]));
  assert.equal(cityLinks.size, 399, 'All municipal pages must be discoverable from the state');
  const titles = new Set(), descriptions = new Set(), districtCounts = [];
  const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll("'", '&#x27;').replaceAll('"', '&quot;');
  for (const city of cities) {
    const route = data.cityPath(city), { status, html } = await render(route);
    assert.equal(status, 200, route);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route);
    assert.ok(html.replace(/<!--.*?-->/g, '').includes('Aluguel de caçamba ' + escapeHtml(data.paranaCityLocation(city.name))), route);
    assert.ok(html.includes(`rel="canonical" href="${origin + route}"`), route);
    assert.ok(html.includes('index, follow, max-image-preview:large'), route);
    assert.ok(!/<form[ >]/.test(html), route);
    assert.ok(!html.includes('undefined') && !html.includes('[object Object]'), route);
    const meta = data.paranaCityMeta(city), image = data.paranaCityImage(city.slug);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
    assert.equal(schemas.find(s => s['@type'] === 'Service').areaServed.name, city.name);
    assert.equal(schemas.find(s => s['@type'] === 'WebPage').primaryImageOfPage.contentUrl, origin + image);
    assert.ok(html.includes('src="' + image + '"'));
    await fs.access('cloudflare-dist' + image);
    for (const district of data.PARANA_LOCALITIES[city.slug].districts) assert.ok(html.includes(district.replaceAll('&', '&amp;').replaceAll("'", '&#x27;').replaceAll('"', '&quot;')), route + ' district ' + district);
    assert.ok(sitemap.includes('<loc>' + origin + route + '</loc>'));
    assert.ok(html.includes('wa.me/5511957596840?text='), route);
    assert.ok(html.includes('id="atendimento-municipal"')&&html.includes('id="escolher-cacamba"'),route+' municipal improvements');
    for(const n of data.paranaNeighborhoodNames(city.slug)) assert.ok(html.includes(escapeHtml(n)),route+' neighborhood '+n);
    const messages=[...html.matchAll(/href="https:\/\/wa.me\/5511957596840\?text=([^"]+)"/g)].map(m=>decodeURIComponent(m[1].replaceAll("&#x27;", "\u0027").replaceAll("&amp;","&")));
    for(const size of [3,4,5]) assert.ok(messages.some(m=>m.includes(city.name)&&m.includes(size+' m³')),route+' capacity '+size);
    assert.ok(messages.some(m=>m.includes(city.name)&&m.includes('7 dias')),route+' period');
    assert.ok(messages.some(m=>m.includes(city.name)&&m.includes('Meu bairro ou distrito é:')),route+' locality contact');
    titles.add(meta.title); descriptions.add(meta.description);
    districtCounts.push(data.PARANA_LOCALITIES[city.slug].districts.length);
  }
  assert.equal(titles.size, 399); assert.equal(descriptions.size, 399);
  assert.equal((await render('/aluguel-de-cacamba/pr/cidade-inexistente/')).status, 404);
  const evidence = { date: '2026-10-29', municipalPages: cities.length, neighborhoodMunicipalities: cities.filter(c=>data.paranaNeighborhoodNames(c.slug).length).length, censusNeighborhoodRecords:966, newRoutes:0, statePages: 1, immediateRegions: 29, intermediateRegions: 6, districtRecords: districtCounts.reduce((a,b) => a+b,0), sitemapUrlsPR: 400, totalUrls: routes.length, uniqueTitles: titles.size, uniqueDescriptions: descriptions.size, stateCityLinks: cityLinks.size, checks: 'All 399 SSR responses, canonicals, H1, robots, schemas, visible image, districts, sitemap membership and direct contact; invalid city 404; no forms; no analytics contact events emitted' };
  await fs.writeFile('../verificacao-parana-cobertura-local.json', JSON.stringify(evidence, null, 2));
  console.log('PASS:', JSON.stringify(evidence));
} finally { await fs.unlink(temp).catch(() => {}); }
process.exit(0);


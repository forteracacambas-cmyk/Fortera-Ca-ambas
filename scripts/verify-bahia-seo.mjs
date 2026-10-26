import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const temp='scripts/.bahia-test.mjs';
await build({stdin:{contents:"export {MUNICIPALITIES,cityPath} from './src/data/nationalCoverage'; export {BAHIA_LOCALITIES,BAHIA_REGIONAL_GUIDES,bahiaCityMeta,bahiaCityImage} from './src/data/bahiaSeo'; export {BAHIA_NEIGHBORHOOD_PAGES,bahiaNeighborhoodPath,bahiaNeighborhoodMeta,bahiaNeighborhoodImage} from './src/data/bahiaNeighborhoods'; export {getAllRoutes} from './src/data/routesMetadata'; export {getSitemapXml} from './src/data/sitemaps';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try {
 const data=await import(pathToFileURL(path.resolve(temp)).href);
 const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?t='+Date.now())).default;
 const origin='https://forteracacambas.com',assets={fetch:async()=>new Response('',{status:404})};
 const render=async route=>{const r=await worker.fetch(new Request(origin+route),{ASSETS:assets});return {status:r.status,html:await r.text()};};
 const towns=data.MUNICIPALITIES.filter(city=>city.uf==='BA'),areas=data.BAHIA_NEIGHBORHOOD_PAGES;
 assert.equal(towns.length,417);assert.equal(Object.keys(data.BAHIA_LOCALITIES).length,417);assert.equal(Object.keys(data.BAHIA_REGIONAL_GUIDES).length,10);
 assert.equal(new Set(Object.values(data.BAHIA_LOCALITIES).map(c=>c.immediate)).size,34);
 assert.equal(areas.length,24);assert.equal(new Set(areas.map(a=>a.context)).size,24);assert.equal(new Set(areas.map(a=>a.preparation)).size,24);assert.equal(new Set(areas.map(a=>a.answer)).size,24);
 const xml=data.getSitemapXml('/sitemaps/ba.xml');assert.equal((xml.match(/<url>/g)||[]).length,442);assert.equal((xml.match(/<lastmod>2026-10-26<\/lastmod>/g)||[]).length,442);
 const state=await render('/aluguel-de-cacamba/ba/');assert.equal(state.status,200);assert.ok(state.html.includes('ba-city-search'));
 const cityLinks=new Set([...state.html.matchAll(/href="(\/aluguel-de-cacamba\/ba\/[^/]+\/)"/g)].map(m=>m[1]));assert.equal(cityLinks.size,417);
 const titles=new Set(),descs=new Set();const escape=value=>value.replaceAll('&','&amp;').replaceAll("'",'&#x27;').replaceAll('"','&quot;');
 async function check(route,meta,image,areaName){
  const {status,html}=await render(route);assert.equal(status,200,route);assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route);
  assert.ok(html.includes('rel="canonical" href="'+origin+route+'"'),route);assert.ok(html.includes('index, follow, max-image-preview:large'),route);
  assert.ok(!html.includes('<form')&&!html.includes('undefined')&&!html.includes('[object Object]'),route);
  assert.ok(html.includes('wa.me/5511957596840?text='),route);assert.ok(xml.includes('<loc>'+origin+route+'</loc>'),route);
  const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
  assert.equal(schemas.find(s=>s['@type']==='Service').areaServed.name,areaName);
  assert.equal(schemas.find(s=>s['@type']==='WebPage').primaryImageOfPage.contentUrl,origin+image);assert.ok(html.includes('src="'+image+'"'));await fs.access('cloudflare-dist'+image);
  titles.add(meta.title);descs.add(meta.description);return html;
 }
 for(const city of towns){const html=await check(data.cityPath(city),data.bahiaCityMeta(city),data.bahiaCityImage(city.slug),city.name);
  assert.ok(html.includes('Distritos cadastrados no município'));for(const district of data.BAHIA_LOCALITIES[city.slug].districts)assert.ok(html.includes(escape(district)),city.slug+' '+district);
  for(const area of areas.filter(a=>a.city===city.slug))assert.ok(html.includes('href="'+data.bahiaNeighborhoodPath(area)+'"'),city.slug+' neighborhood link');
 }
 for(const area of areas){const route=data.bahiaNeighborhoodPath(area);const html=await check(route,data.bahiaNeighborhoodMeta(area),data.bahiaNeighborhoodImage(area),area.name);
  assert.ok(html.includes(escape(area.context)));assert.ok(html.includes(escape(area.preparation)));assert.ok(html.includes(escape(area.answer)));assert.ok(state.html.includes('href="'+route+'"'));
 }
 assert.equal(titles.size,441);assert.equal(descs.size,441);
 assert.equal((await render('/aluguel-de-cacamba/ba/nao-existe/')).status,404);assert.equal((await render('/aluguel-de-cacamba/ba/salvador/bairro-inexistente/')).status,404);
 const routes=data.getAllRoutes();assert.equal(routes.length,5664);assert.equal(new Set(routes.map(r=>r.path)).size,routes.length);
 const result={date:'2026-10-26',municipalPages:417,neighborhoodPages:24,statePages:1,intermediateRegions:10,immediateRegions:34,districts:Object.values(data.BAHIA_LOCALITIES).reduce((sum,c)=>sum+c.districts.length,0),uniqueTitles:titles.size,uniqueDescriptions:descs.size,stateMunicipalLinks:cityLinks.size,sitemapBA:442,totalCanonicalUrls:routes.length,checks:'All BA city and neighborhood SSR responses, H1, canonical, robots, Service, images, sitemaps, unique editorial neighborhood fields, district records, direct WhatsApp and invalid routes 404. No contact test events sent.'};
 await fs.writeFile('../verificacao-bahia-local.json',JSON.stringify(result,null,2));console.log('PASS: '+JSON.stringify(result));
}finally{await fs.unlink(temp).catch(()=>{});}
process.exit(0);

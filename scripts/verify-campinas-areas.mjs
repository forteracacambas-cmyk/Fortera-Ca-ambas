import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const temp='scripts/.campinas-areas-test.mjs';
await build({stdin:{contents:"export * from './src/data/campinasAreas'; export {getAllRoutes,getRouteMeta} from './src/data/routesMetadata'; export {getPageImages} from './src/data/pageImages'; export {CAPITAL_AREAS,capitalAreaPath} from './src/data/saoPauloAreas'; export {LOCAL_SEO_PAGES,localCityPath} from './src/data/campinasLocalPages';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try{
 const d=await import(pathToFileURL(path.resolve(temp)).href);
 const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?t='+Date.now())).default;
 const origin='https://forteracacambas.com',assets={fetch:async()=>new Response('',{status:404})};
 const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll("'",'&#x27;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 async function render(route){const r=await worker.fetch(new Request(origin+route),{ASSETS:assets});assert.equal(r.status,200,route);const h=(await r.text()).replaceAll('<!-- -->','');assert.equal((h.match(/<h1[ >]/g)||[]).length,1,route);assert.ok(h.includes('rel="canonical" href="'+origin+route+'"'));assert.ok(!h.includes('noindex')&&!h.includes('<form')&&!h.includes('undefined'));return h;}
 assert.equal(d.CAMPINAS_DISTRICTS.length,6);assert.equal(d.CAMPINAS_NEIGHBORHOODS.length,379);assert.equal(d.CAMPINAS_AREAS.length,385);
 assert.equal(new Set(d.CAMPINAS_AREAS.map(a=>a.slug)).size,385);
 const parent=await render(d.CAMPINAS_CITY_PATH),sitemap=await(await worker.fetch(new Request(origin+'/sitemaps/sp.xml'),{ASSETS:assets})).text();
 const titles=new Set(),descriptions=new Set(),checked=[];
 for(const area of d.CAMPINAS_AREAS){
  const route=d.campinasAreaPath(area),h=await render(route),meta=d.campinasAreaMeta(area),plan=d.campinasAreaPlanning(area),image=d.campinasAreaImage(area);
  assert.ok(parent.includes('href="'+route+'"'),'parent links '+route);
  assert.ok(h.includes('<title>'+esc(meta.title)+'</title>'));assert.ok(h.includes(esc(meta.description)));assert.ok(h.includes(esc(plan.context))&&h.includes(esc(plan.preparation))&&h.includes(esc(plan.answer)),route+' editorial content');
  assert.ok(h.includes(d.CAMPINAS_AREA_SOURCES[area.source].url.replaceAll('&','&amp;')),'source');
  assert.ok(h.includes('id="capacidades"')&&h.includes('id="localidade"'));
  assert.ok(h.includes('"@type":"Service"')&&h.includes('"areaServed"'));assert.ok(h.includes('Campinas'));
  assert.ok(h.includes('src="'+image+'"'));assert.equal(d.getPageImages(route)[0],image);await fs.access('public'+image);await fs.access('public'+image.replace('.webp','-640.webp'));
  const messages=[...h.matchAll(/href="https:\/\/wa.me\/5511957596840\?text=([^"]+)"/g)].map(m=>decodeURIComponent(m[1].replaceAll('&#x27;',"'").replaceAll('&amp;','&')));
  assert.ok(messages.some(m=>m.includes(area.name)&&m.includes('Campinas')&&m.includes('5 m³')),route+' contextual quote');
  assert.ok(sitemap.includes('<loc>'+origin+route+'</loc><lastmod>2026-10-28</lastmod>'),'sitemap');
  for(const other of d.campinasRelatedAreas(area).slice(0,16))assert.ok(h.includes('href="'+d.campinasAreaPath(other)+'"'));
  titles.add(meta.title);descriptions.add(meta.description);checked.push(route);
 }
 assert.equal(titles.size,385);assert.equal(descriptions.size,385);assert.equal(d.getAllRoutes().length,6049);
 for(const c of d.LOCAL_SEO_PAGES){const h=await render(d.localCityPath(c.slug));assert.ok(!h.includes('id="localidade"'),'preserved municipality');}
 for(const area of d.CAPITAL_AREAS)await render(d.capitalAreaPath(area.slug));
 assert.equal((await worker.fetch(new Request(origin+d.CAMPINAS_CITY_PATH+'bairro-inventado/'),{ASSETS:assets})).status,404);
 const r={date:'2026-10-28',districtPages:6,neighborhoodLocalityPages:379,newPages:385,updatedParent:1,totalRoutes:6049,spSitemapUrls:(sitemap.match(/<url>/g)||[]).length,uniqueTitles:titles.size,paths:checked,checks:'SSR, H1, canonical, distinct metadata, sourced local facts, planning, contextual size contact, visible images, parent links, related links, 21 existing municipal and 13 capital routes preserved. No GA test events.'};
 await fs.writeFile('../verificacao-campinas-bairros-local.json',JSON.stringify(r,null,2));console.log('PASS Campinas: '+JSON.stringify({...r,paths:undefined}));
}finally{await fs.unlink(temp).catch(()=>{});}
process.exit(0);

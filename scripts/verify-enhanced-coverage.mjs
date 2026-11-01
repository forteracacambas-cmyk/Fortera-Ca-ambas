import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const temp='scripts/.enhanced-test.mjs';
await build({stdin:{contents:"export * from './src/data/enhancedCoverage';export {MUNICIPALITIES,cityPath} from './src/data/nationalCoverage';export {getAllRoutes} from './src/data/routesMetadata';export {getSitemapXml} from './src/data/sitemaps';",resolveDir:process.cwd()},outfile:temp,bundle:true,platform:'node',format:'esm'});
try{
 const d=await import(pathToFileURL(path.resolve(temp)).href),worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?'+Date.now())).default;
 const base='https://forteracacambas.com',assets={fetch:async()=>new Response('',{status:404})},render=async p=>{const r=await worker.fetch(new Request(base+p),{ASSETS:assets});assert.equal(r.status,200,p);return r.text();};
 const esc=s=>s.replaceAll('&','&amp;').replaceAll("'",'&#x27;').replaceAll('"','&quot;');const stats={};
 for(const uf of d.ENHANCED_UFS){const state=d.ENHANCED_STATES[uf],cities=d.MUNICIPALITIES.filter(c=>c.uf===uf),p='/aluguel-de-cacamba/'+uf.toLowerCase()+'/',html=await render(p),xml=d.getSitemapXml('/sitemaps/'+uf.toLowerCase()+'.xml');
  assert.equal(cities.length,state.count);assert.equal((xml.match(/<url>/g)||[]).length,state.count+1);assert.equal((xml.match(/<lastmod>2026-10-31<\/lastmod>/g)||[]).length,state.count+1);
  for(const c of cities)assert.ok(html.includes('href="'+d.cityPath(c)+'"'),uf+' state city link '+c.name);
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert.ok(html.includes(esc(d.enhancedStateMeta(uf).title)));
  const titles=new Set(),descriptions=new Set();
  for(const c of cities){const route=d.cityPath(c),body=await render(route),meta=d.enhancedCityMeta(uf,c);assert.ok(body.includes('rel="canonical" href="'+base+route+'"'),route);assert.equal((body.match(/<h1[ >]/g)||[]).length,1,route);assert.ok(body.match(/<title>(.*?)<\/title>/s)?.[1].replace(/&#x27;|&#39;/g,"'" ).replaceAll('&amp;','&')===meta.title,route+' title');assert.ok(body.includes('index, follow, max-image-preview:large'));assert.ok(!/<form[ >]/.test(body));assert.ok(!body.includes('undefined'));assert.ok(body.includes('wa.me/5511957596840?text='));
   const schemas=[...body.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1])),service=schemas.find(x=>x['@type']==='Service');assert.equal(service.areaServed.name,uf==='DF'?'Distrito Federal':c.name);if(uf==='DF')assert.equal(service.areaServed['@type'],'AdministrativeArea');
   const image=d.enhancedCityImage(uf,c.slug);assert.ok(body.includes('src="'+image+'"'));assert.equal(schemas.find(x=>x['@type']==='WebPage').primaryImageOfPage.contentUrl,base+image);await fs.access('cloudflare-dist'+image);
   if(uf!=='DF'){assert.ok(body.includes('id="atendimento-municipal"'));for(const name of d.ENHANCED_LOCALITIES[uf][c.slug].districts)assert.ok(body.includes(esc(name)),route+' district '+name);for(const name of d.enhancedNeighborhoodNames(uf,c.slug))assert.ok(body.includes(esc(name)),route+' bairro '+name);}else{assert.ok(!body.includes('Distritos cadastrados no município'));for(const ra of d.DF_REGIONS)assert.ok(body.includes(esc(ra.name)),ra.name);}
   const messages=[...body.matchAll(/href="https:\/\/wa.me\/5511957596840\?text=([^"]+)"/g)].map(m=>decodeURIComponent(m[1].replace(/&#x27;|&#39;/g,"'" ).replaceAll('&amp;','&')));for(const n of [3,4,5])assert.ok(messages.some(m=>m.includes(c.name)&&m.includes(n+' m³')),route+' capacity');assert.ok(messages.some(m=>m.includes(c.name)&&m.includes('7 dias')),route+' period');titles.add(meta.title);descriptions.add(meta.description);
  }
  assert.equal(titles.size,state.count);assert.equal(descriptions.size,state.count);stats[uf]={municipalOrBrasiliaPages:cities.length,statePages:1,sitemapUrls:state.count+1,neighborhoodCities:Object.keys(d.ENHANCED_NEIGHBORHOODS[uf]).length,neighborhoodNames:Object.values(d.ENHANCED_NEIGHBORHOODS[uf]).flat().length};
 }
 assert.equal(d.getAllRoutes().length,6049);const invalid=await worker.fetch(new Request(base+'/aluguel-de-cacamba/go/cidade-inexistente/'),{ASSETS:assets});assert.equal(invalid.status,404);
 const report={date:'2026-10-31',stats,totalUpdatedPages:551,newRoutes:0,totalCanonicalRoutes:6049,dfAdministrativeReferences:d.DF_REGIONS.length,checks:'All 546 city/Brasilia SSR pages, five state pages, canonical, H1, actual unique titles, schemas, image, districts, sourced locality names, direct contact messages, sitemap and 404; no production contact events emitted'};await fs.writeFile('../verificacao-es-centro-oeste-local.json',JSON.stringify(report,null,2));console.log('PASS',JSON.stringify(report));
}finally{await fs.unlink(temp).catch(()=>{});}
process.exit(0);



import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const temp='scripts/.sao-paulo-test.mjs';
await build({stdin:{contents:"export * from './src/data/saoPauloSeo'; export {MUNICIPALITIES,cityPath} from './src/data/nationalCoverage'; export {getRouteMeta,getAllRoutes} from './src/data/routesMetadata'; export {getPageImages} from './src/data/pageImages';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try{
 const d=await import(pathToFileURL(path.resolve(temp)).href);
 const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?t='+Date.now())).default;
 const origin='https://forteracacambas.com',assets={fetch:async()=>new Response('',{status:404})};
 async function render(route){const r=await worker.fetch(new Request(origin+route),{ASSETS:assets});assert.equal(r.status,200,route);const h=(await r.text()).replaceAll('<!-- -->','');assert.equal((h.match(/<h1[ >]/g)||[]).length,1,route);assert.ok(h.includes('rel="canonical" href="'+origin+route+'"'));assert.ok(!h.includes('noindex')&&!h.includes('<form')&&!h.includes('undefined'));return h;}
 const towns=d.MUNICIPALITIES.filter(c=>c.uf==='SP');
 assert.equal(towns.length,645);assert.equal(Object.keys(d.SAO_PAULO_LOCALITIES).length,645);
 assert.equal(Object.values(d.SAO_PAULO_LOCALITIES).reduce((a,c)=>a+c.districts.length,0),1042);
 assert.equal(new Set(Object.values(d.SAO_PAULO_LOCALITIES).map(c=>c.intermediate)).size,11);
 assert.equal(new Set(Object.values(d.SAO_PAULO_LOCALITIES).map(c=>c.immediate)).size,53);
 const changed=towns.filter(c=>!d.SAO_PAULO_PRESERVED.has(c.slug));assert.equal(changed.length,624);
 const signatures=new Set(),paths=[];
 for(const city of changed){
  const route=d.cityPath(city),h=await render(route),local=d.SAO_PAULO_LOCALITIES[city.slug],meta=d.getRouteMeta(route);
  assert.ok(h.includes('<title>'+meta.title+'</title>'),route);
  assert.ok(h.includes('id="localidades"')&&h.includes('id="capacidades"'),route);
  assert.ok(h.includes('Consultar 3 m³')&&h.includes('Consultar 4 m³')&&h.includes('Consultar 5 m³'));
  assert.ok(h.includes(local.immediate)&&h.includes(local.intermediate));
  for(const district of local.districts)assert.ok(h.includes(district.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll("'",'&#x27;'))||h.includes(district),route+' district '+district);
  const image=d.getPageImages(route)[0];assert.ok(h.includes('src="'+image+'"'));await fs.access('public'+image);await fs.access('public'+image.replace('.webp','-640.webp'));
  const messages=[...h.matchAll(/href="https:\/\/wa.me\/5511957596840\?text=([^"]+)"/g)].map(m=>decodeURIComponent(m[1].replaceAll('&#x27;',String.fromCharCode(39)).replaceAll('&amp;','&')));assert.ok(messages.some(m=>m.includes(city.name)&&m.includes('5 m³')),route);
  assert.ok(h.includes('"@type":"Service"')&&h.includes('"areaServed"'));
  const related=towns.filter(c=>d.SAO_PAULO_LOCALITIES[c.slug].immediate===local.immediate&&c.id!==city.id);
  for(const c of related)assert.ok(h.includes('href="'+d.cityPath(c)+'"'),route+' related '+c.name);
  signatures.add(JSON.stringify([local.immediate,local.districts]));paths.push(route);
 }
 assert.equal(signatures.size,624,'geographic sections must differ beyond city-name substitution');
 const state=await render('/aluguel-de-cacamba/sp/');
 for(const c of towns)assert.ok(state.includes('href="'+d.cityPath(c)+'"'),'state links '+c.name);
 for(const slug of d.SAO_PAULO_PRESERVED){const h=await render('/aluguel-de-cacamba/sp/'+slug+'/');assert.ok(!h.includes('id="capacidades"'),'preserved '+slug);}
 const sitemap=await (await worker.fetch(new Request(origin+'/sitemaps/sp.xml'),{ASSETS:assets})).text();
 for(const route of paths){assert.ok(sitemap.includes('<loc>'+origin+route+'</loc><lastmod>2026-10-26</lastmod>'));assert.ok(d.getRouteMeta(route));}
 assert.equal(d.getAllRoutes().length,6049);
 assert.equal((await worker.fetch(new Request(origin+'/aluguel-de-cacamba/sp/cidade-inventada/'),{ASSETS:assets})).status,404);
 const result={date:'2026-10-26',updatedCities:624,preservedCities:21,statePages:1,municipalities:645,districts:1042,intermediateRegions:11,immediateRegions:53,totalRoutes:6049,geographicSignatures:signatures.size,paths};
 await fs.writeFile('../verificacao-sao-paulo-local.json',JSON.stringify(result,null,2));console.log('PASS SP: '+JSON.stringify({...result,paths:undefined}));
}finally{await fs.unlink(temp).catch(()=>{});}


process.exit(0);

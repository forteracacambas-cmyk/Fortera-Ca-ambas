import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const temp='scripts/.local-search-test.mjs';
await build({stdin:{contents:"export {LOCAL_SEARCH_PROFILES,localSearchPath,RMC_LOCAL_LINKS} from './src/data/localSearchImprovements'; export {SERVICE_AREAS} from './src/data/serviceAreas'; export {MUNICIPALITIES,cityPath} from './src/data/nationalCoverage'; export {getRouteMeta,getAllRoutes} from './src/data/routesMetadata';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try{
 const d=await import(pathToFileURL(path.resolve(temp)).href);
 const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?t='+Date.now())).default;
 const origin='https://forteracacambas.com',assets={fetch:async()=>new Response('',{status:404})};
 async function render(route){const response=await worker.fetch(new Request(origin+route),{ASSETS:assets});assert.equal(response.status,200,route);const html=await response.text();assert.equal((html.match(/<h1[ >]/g)||[]).length,1);assert.ok(html.includes('rel="canonical" href="'+origin+route+'"'));assert.ok(!html.includes('noindex')&&!html.includes('<form')&&!html.includes('undefined'));return html;}
 assert.equal(d.LOCAL_SEARCH_PROFILES.length,27);assert.equal(d.RMC_LOCAL_LINKS.length,20);
 const checked=[];
 for(const profile of d.LOCAL_SEARCH_PROFILES){const route=d.localSearchPath(profile),html=await render(route);
  assert.ok(html.includes('id="escolher-cacamba"'),route);assert.ok(html.includes('Consultar 3 m³')&&html.includes('Consultar 4 m³')&&html.includes('Consultar 5 m³'));
  assert.ok(html.includes('Consultar locação por 7 dias'));assert.ok(html.includes(profile.question));
  assert.ok(html.includes('<title>'+d.getRouteMeta(route).title+'</title>'));
  const messages=[...html.matchAll(/href="https:\/\/wa.me\/5511957596840\?text=([^"]+)"/g)].map(m=>decodeURIComponent(m[1]));
  assert.ok(messages.some(message=>message.includes(profile.name)&&message.includes('5 m³')),'city and capacity in contact');
  assert.ok(messages.some(message=>message.includes(profile.name)&&message.includes('7 dias')),'city and period in contact');checked.push(route);
 }
 const campinas=await render('/aluguel-de-cacamba/sp/campinas/');
 for(const name of ['Swift','Jardim Santa Lúcia','Jardim Esmeraldina','Barão Geraldo','Joaquim Egídio','Souzas','Ouro Verde','Campo Grande'])assert.ok(campinas.includes(name),name);
 assert.ok(campinas.includes('https://setec.sp.gov.br/cacambasEntulho.html'));
 let regionalCityLinks=0;
 for(const area of d.SERVICE_AREAS){const route='/regioes/'+area.slug+'/',html=await render(route);
  const towns=area.slug==='campinas-e-regiao'?d.RMC_LOCAL_LINKS:area.cities.map(name=>{const city=d.MUNICIPALITIES.find(c=>c.uf===area.uf&&c.name===name);assert.ok(city,name);return {name,path:d.cityPath(city)};});
  for(const city of towns){assert.ok(html.includes('href="'+city.path+'"'),route+' → '+city.name);assert.ok(d.getRouteMeta(city.path),'valid target');regionalCityLinks++;}
  checked.push(route);
 }
 const sizes=await render('/tamanhos-de-cacamba/');assert.ok(sizes.includes('Quero ajuda para escolher o tamanho'));assert.ok(sizes.includes('href="/aluguel-de-cacamba/sp/campinas/"'));checked.push('/tamanhos-de-cacamba/');
 assert.equal(d.getAllRoutes().length,5664,'no duplicate keyword routes introduced');
 const result={date:'2026-10-26',localPages:27,regionPages:d.SERVICE_AREAS.length,guidePages:1,totalUpdatedPages:checked.length,regionalCityLinks,sitemapTotal:5664,paths:checked,checks:'SSR, canonical, H1, revised metadata, locality-specific questions, capacity/period contact messages, all regional city destinations, Campinas locality coverage and 404 regression handled by general verifier. No production GA contact tests.'};
 await fs.writeFile('../verificacao-campinas-melhorias-local.json',JSON.stringify(result,null,2));console.log('PASS: '+JSON.stringify({...result,paths:undefined}));
}finally{await fs.unlink(temp).catch(()=>{});}
process.exit(0);

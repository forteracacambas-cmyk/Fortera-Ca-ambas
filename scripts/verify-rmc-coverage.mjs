import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const temp='scripts/.rmc-coverage-test.mjs';
await build({stdin:{contents:"export {RMC_COVERAGE,RMC_COVERAGE_PATHS} from './src/data/rmcCoverage';export {LOCAL_SEO_PAGES,localCityPath} from './src/data/campinasLocalPages';export {getAllRoutes} from './src/data/routesMetadata';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try {
  const d=await import(pathToFileURL(path.resolve(temp)).href);
  const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href)).default;
  const origin='https://forteracacambas.com';
  const render=async p=>{const r=await worker.fetch(new Request(origin+p),{ASSETS:{fetch:async()=>new Response('',{status:404})}});assert.equal(r.status,200,p);return r.text();};
  assert.equal(Object.keys(d.RMC_COVERAGE).length,20);
  assert.equal(d.getAllRoutes().length,6049,'no new neighborhood or duplicate municipality routes');
  const paths=[];
  for(const city of d.LOCAL_SEO_PAGES.filter(c=>c.slug in d.RMC_COVERAGE)){
    const p=d.localCityPath(city.slug),html=await render(p),coverage=d.RMC_COVERAGE[city.slug];
    assert.ok(html.includes('id="atendimento-municipal"'),p);
    for(const place of coverage.places)assert.ok(html.includes(place),p+' '+place);
    assert.ok(html.includes('href="/regioes/campinas-e-regiao/"'));
    assert.ok(html.includes('rel="canonical" href="'+origin+p+'"'));
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
    assert.ok(!html.includes('<form')&&!html.includes('noindex'));
    const messages=[...html.matchAll(/href="https:\/\/wa.me\/5511957596840\?text=([^"]+)"/g)].map(m=>decodeURIComponent(m[1]));
    assert.ok(messages.some(m=>m.includes(city.name)&&m.includes('Meu bairro é:')));
    const meta=html.match(/<meta name="description" content="([^"]+)"/)[1];
    assert.ok(meta.includes(city.name)&&meta.includes(coverage.places[0]));
    paths.push(p);
  }
  const hub=await render('/regioes/campinas-e-regiao/');
  for(const p of paths)assert.ok(hub.includes('href="'+p+'"'));
  assert.ok(hub.includes('Bairros e localidades para consultar:'));
  assert.ok(!(await render('/aluguel-de-cacamba/sp/sao-paulo/')).includes('id="atendimento-municipal"'),'capital preserved');
  assert.ok(!(await render('/aluguel-de-cacamba/sp/campinas/cambui/')).includes('id="atendimento-municipal"'),'neighborhood page preserved');
  const sp=await render('/sitemaps/sp.xml');
  for(const p of paths)assert.ok(sp.includes('<loc>'+origin+p+'</loc><lastmod>2026-10-28</lastmod>'));
  const result={date:'2026-10-28',municipalPages:20,regionPages:1,newRoutes:0,sitemapTotal:6049,paths:[...paths,'/regioes/campinas-e-regiao/'],checks:'SSR, canonical, neighborhood mentions, direct contact message, regional links, metadata, factual lastmod and unchanged route count'};
  await fs.writeFile('../verificacao-rmc-cobertura-local.json',JSON.stringify(result,null,2));
  console.log('PASS '+JSON.stringify({...result,paths:undefined}));
} finally {await fs.unlink(temp).catch(()=>{});}
process.exit(0);

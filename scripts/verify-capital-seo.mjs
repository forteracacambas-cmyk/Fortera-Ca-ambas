import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const temp = 'scripts/.capital-test.mjs';
await build({stdin:{contents:"export * from './src/data/saoPauloAreas'; export {getAllRoutes} from './src/data/routesMetadata'; export {getSitemapXml} from './src/data/sitemaps';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try {
  const {CAPITAL_AREAS,CAPITAL_PATH,capitalAreaPath,capitalAreaTitle,getAllRoutes,getSitemapXml} = await import(pathToFileURL(path.resolve(temp)).href);
  const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?test='+Date.now())).default;
  const origin='https://forteracacambas.com';
  const routes=getAllRoutes();
  const assets={fetch:async()=>new Response('',{status:404})};
  const render=async p=>{const r=await worker.fetch(new Request(origin+p),{ASSETS:assets});assert.equal(r.status,200,p);return r.text();};
  assert.equal(CAPITAL_AREAS.length,13);
  assert.equal(CAPITAL_AREAS.filter(a=>a.kind==='zone').length,4);
  assert.equal(new Set(CAPITAL_AREAS.map(a=>a.planning)).size,13);
  const capital=await render(CAPITAL_PATH);
  const children=[...getSitemapXml('/sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
  const sitemap=children.map(p=>getSitemapXml(p)).join('');
  for(const area of CAPITAL_AREAS){
    const p=capitalAreaPath(area.slug),html=await render(p);
    assert.equal(routes.filter(r=>r.path===p).length,1,'unique canonical route');
    assert.ok(html.includes('<title>'+capitalAreaTitle(area)+'</title>'));
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,p);
    assert.ok(html.includes('rel="canonical" href="'+origin+p+'"'));
    assert.ok(!html.includes('name="robots" content="noindex"'));
    assert.ok(html.includes(area.planning)&&html.includes(area.access)&&html.includes(area.answer));
    assert.ok(!html.includes('<form')&&!html.includes('href="/orcamento/'));
    assert.ok(html.includes('https://wa.me/5511957596840'));
    assert.ok(capital.includes('href="'+p+'"'),'capital discovers child');
    assert.ok(sitemap.includes('<loc>'+origin+p+'</loc>'),'listed in sitemap');
    const image='/images/locais/ilustracao-'+String(area.image).padStart(2,'0')+'.webp';
    assert.ok(html.includes(image)); await fs.access('cloudflare-dist'+image);
    const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
    assert.ok(schemas.some(s=>s['@type']==='Service'&&s.areaServed['@type']==='Place'));
    if(area.kind==='district'){
      const parent=await render(capitalAreaPath(area.zone));
      assert.ok(parent.includes('href="'+p+'"'),'zone discovers district');
      assert.ok(html.includes('href="'+capitalAreaPath(area.zone)+'"'),'district links back to zone');
    }
    const without=await worker.fetch(new Request(origin+p.slice(0,-1)),{ASSETS:assets});
    assert.equal(without.status,301);assert.equal(without.headers.get('location'),origin+p);
  }
  console.log('PASS: 13 capital pages; 4 zones and 9 districts. SSR, canonical, hierarchy, sitemap, local content, images, contact and redirects.');
} finally {await fs.unlink(temp).catch(()=>{});}
// Browser-targeted React can retain a scheduler channel in this Node test process.
process.exit(0);

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const temp='scripts/.image-seo-test.mjs';
await build({stdin:{contents:"export {getPageImages} from './src/data/pageImages'; export {getAllRoutes} from './src/data/routesMetadata'; export {getSitemapXml} from './src/data/sitemaps';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try {
 const {getPageImages,getAllRoutes,getSitemapXml}=await import(pathToFileURL(path.resolve(temp)).href);
 const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?test='+Date.now())).default;
 const origin='https://forteracacambas.com';
 const assets={fetch:async()=>new Response('',{status:404})};
 const routes=getAllRoutes();
 const paths=['/','/contatopc/','/tamanhos-de-cacamba/','/como-funciona/','/servicos/','/guias/',...routes.filter(r=>r.path.startsWith('/servicos/')||r.path.startsWith('/guias/')||r.path.match(/^\/aluguel-de-cacamba\/[a-z]{2}\/$/)||r.path.startsWith('/aluguel-de-cacamba/sp/sao-paulo/')).map(r=>r.path),'/aluguel-de-cacamba/sp/campinas/','/locacao-de-cacamba/','/alugar-cacamba-de-entulho/','/cacamba-de-entulho/'];
 const allImages=new Set(routes.flatMap(r=>getPageImages(r.path)));
 for(const image of allImages)await fs.access('cloudflare-dist'+image);
 for(const route of new Set(paths)){
  const response=await worker.fetch(new Request(origin+route),{ASSETS:assets}); assert.equal(response.status,200,route);
  const html=await response.text(), images=getPageImages(route);
  assert.equal((html.match(/<meta name="robots"/g)||[]).length,1);
  assert.ok(html.includes('index, follow, max-image-preview:large'));
  const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
  const webpage=schemas.find(s=>s['@type']==='WebPage');assert.ok(webpage);
  if(images.length){
   assert.ok(html.includes('<meta property="og:image" content="'+origin+images[0]+'"/>'),route);
   assert.equal(webpage.primaryImageOfPage.contentUrl,origin+images[0]);
   for(const image of images)assert.ok(html.includes('src="'+image+'"'),'metadata image must be visible: '+route+' '+image);
   const uf=route.match(/^\/aluguel-de-cacamba\/([a-z]{2})\//)?.[1];
   assert.ok(getSitemapXml('/sitemaps/'+(uf||'principal')+'.xml').includes('<image:loc>'+origin+images[0]+'</image:loc>'));
  } else assert.ok(!html.includes('property="og:image"')&&!webpage.primaryImageOfPage);
 }
 const missing=await(await worker.fetch(new Request(origin+'/nao-existe/'),{ASSETS:assets})).text();
 assert.ok(missing.includes('noindex, follow')&&!missing.includes('primaryImageOfPage'));
 assert.notDeepEqual(getPageImages('/aluguel-de-cacamba/sp/sao-paulo/penha/'),getPageImages('/aluguel-de-cacamba/sp/sao-paulo/tatuape/'));
 console.log('PASS: image metadata, WebPage/ImageObject, large previews, image sitemaps, visible content and 404 across '+new Set(paths).size+' representative pages. '+allImages.size+' image files verified.');
} finally {await fs.unlink(temp).catch(()=>{});}
process.exit(0);

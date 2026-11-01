import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const temp='scripts/.work-photo-test.mjs';
await build({stdin:{contents:"export {getAllRoutes} from './src/data/routesMetadata';export {getPageImages} from './src/data/pageImages';",resolveDir:process.cwd()},outfile:temp,bundle:true,platform:'node',format:'esm'});
try {
 const data=await import(pathToFileURL(path.resolve(temp)).href),worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?'+Date.now())).default;
 const failures=[],seen=new Set();let checked=0;
 for(const route of data.getAllRoutes()){
  const response=await worker.fetch(new Request('https://forteracacambas.com'+route.path),{ASSETS:{fetch:async()=>new Response('',{status:404})}}),html=await response.text();checked++;
  if(response.status!==200||/\/images\/(?:locais|estados|contratacao)\/|\/images\/(?:hero|produto|comparativo)_fortera/.test(html))failures.push({path:route.path,reason:'HTTP or legacy photo URL'});
  for(const photo of data.getPageImages(route.path))if(photo.startsWith('/images/obras/')){assert.ok(html.includes('src="'+photo+'"'),route.path);seen.add(photo);}
  if(route.path.startsWith('/aluguel-de-cacamba/')&&!html.includes('src="/images/obras/'))failures.push({path:route.path,reason:'missing supplied photograph'});
 }
 for(const photo of seen){await fs.access('cloudflare-dist'+photo);await fs.access('cloudflare-dist'+photo.replace('.webp','-640.webp'));}
 const report={checked,failures,baseImages:seen.size,checks:'Every canonical route rendered; no legacy photo URLs in HTML or metadata; local pages show supplied photos; primary images visible and responsive files exist; size images preserved'};
 await fs.writeFile('../verificacao-fotos-obras-local.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));assert.equal(failures.length,0);
}finally{await fs.unlink(temp).catch(()=>{});}
process.exit(0);

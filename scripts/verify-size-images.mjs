import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const temp='scripts/.size-image-test.mjs';
await build({stdin:{contents:"export {getAllRoutes} from './src/data/routesMetadata';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node'});
try {
 const {getAllRoutes}=await import(pathToFileURL(path.resolve(temp)).href);
 const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?'+Date.now())).default;
 const selected=getAllRoutes().filter(r=>r.path.startsWith('/aluguel-de-cacamba/')||['/','/tamanhos-de-cacamba/','/locacao-de-cacamba/','/alugar-cacamba-de-entulho/','/cacamba-de-entulho/'].includes(r.path));
 const failures=[];
 for(const route of selected){const response=await worker.fetch(new Request('https://forteracacambas.com'+route.path),{ASSETS:{fetch:async()=>new Response('',{status:404})}}); const html=await response.text();const missing=[3,4,5,7,10].filter(size=>!html.includes(`src="/images/tamanhos/cacamba-${size}m3.webp"`));if(response.status!==200||missing.length)failures.push({path:route.path,status:response.status,missing});}
 for(const size of [3,4,5,7,10])for(const suffix of ['','-480'])await fs.access(`cloudflare-dist/images/tamanhos/cacamba-${size}m3${suffix}.webp`);
 const result={checked:selected.length,failures,capacities:[3,4,5,7,10],checks:'SSR rendered size images across every state, municipality, local route and main size/service landing; ten responsive image files exist'};
 await fs.writeFile('../verificacao-imagens-tamanhos.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));assert.equal(failures.length,0);
} finally {await fs.unlink(temp).catch(()=>{});}
process.exit(0);

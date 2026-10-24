import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const temp = 'scripts/.contact-test.mjs';
await build({stdin:{contents:"export { LOCAL_SEO_PAGES } from './src/data/campinasLocalPages'; export { LOCAL_IMAGES } from './src/data/localImages'; export { ContactRouting, isMobileContact, contactDestination } from './src/components/ContactRouting';",resolveDir:process.cwd()},outfile:temp,bundle:true,format:'esm',platform:'node',jsx:'automatic',plugins:[{name:'effect-test',setup(b){b.onResolve({filter:/^react$/},()=>({path:'react',namespace:'effect-test'}));b.onLoad({filter:/.*/,namespace:'effect-test'},()=>({contents:'export const useEffect = fn => fn(); export const useState = value => [value,()=>{}]; export default {};'}));}}]});
try {
  const {LOCAL_SEO_PAGES,LOCAL_IMAGES,ContactRouting,isMobileContact,contactDestination}=await import(pathToFileURL(path.resolve(temp)).href);
  assert.equal(LOCAL_SEO_PAGES.length,21);
  assert.ok(isMobileContact('Mozilla Android Mobile')); assert.ok(isMobileContact('Mozilla iPhone'));
  assert.ok(isMobileContact('Mozilla Macintosh',5)); assert.equal(isMobileContact('Windows NT 10.0'),false);
  assert.equal(contactDestination(false,'https://wa.me/5511957596840'),'/contatopc/');
  assert.ok(contactDestination(true,'/orcamento/').startsWith('https://wa.me/5511957596840'));
  const calls=[];const handlers={};
  globalThis.localStorage={getItem:()=> 'accepted'};
  globalThis.window={location:{hostname:'forteracacambas.com',pathname:'/aluguel-de-cacamba/sp/campinas/'},gtag:(...args)=>calls.push(args)};
  class Anchor { constructor(href){this.attrs={href,target:'_blank'};this.dataset={};} getAttribute(key){return this.attrs[key];}set href(value){this.attrs.href=value;}get href(){return this.attrs.href;}removeAttribute(key){delete this.attrs[key];}closest(selector){return selector==='a'?this:null;} }
  globalThis.Element=Anchor;
  for(const mobile of [true,false]){
    const links=[new Anchor('https://wa.me/5511957596840?text=pedido'),new Anchor('/orcamento/?tamanho=4'),new Anchor('/tamanhos-de-cacamba/')];
    Object.defineProperty(globalThis,'navigator',{value:{userAgent:mobile?'Android Mobile':'Windows NT 10.0',maxTouchPoints:0},configurable:true});
    globalThis.document={querySelectorAll:()=>links,addEventListener:(name,fn)=>handlers[name]=fn,removeEventListener:()=>{}};
    ContactRouting({currentUrl:'/aluguel-de-cacamba/sp/campinas/'});
    assert.equal(links[2].href,'/tamanhos-de-cacamba/','information links preserved');
    for(const link of links.slice(0,2)){
      const count=calls.length;handlers.click({button:0,target:link});assert.equal(calls.length,count+1,'one event per click');
      assert.equal(calls.at(-1)[1],mobile?'whatsapp_click':'contactpc_click');
      assert.equal(calls.at(-1)[2].contact_method,mobile?'whatsapp':'desktop_contact');
      assert.equal(link.href.startsWith('https://wa.me/'),mobile);
      if(!mobile)assert.equal(link.getAttribute('target'),undefined,'desktop stays in same tab');
    }
  }
  const worker=(await import(pathToFileURL(path.resolve('cloudflare-dist/_worker.js')).href+'?test='+Date.now())).default;
  const origin='https://forteracacambas.com';
  const assets={fetch:async req=>{try{return new Response(await fs.readFile('cloudflare-dist'+new URL(req.url).pathname));}catch{return new Response('',{status:404});}}};
  for(const city of LOCAL_SEO_PAGES){
    const route='/aluguel-de-cacamba/sp/'+city.slug+'/';const r=await worker.fetch(new Request(origin+route),{ASSETS:assets});const h=await r.text();
    assert.equal(r.status,200); assert.ok(h.includes('rel="canonical" href="'+origin+route+'"'));
    assert.equal((h.match(/<h1[ >]/g)||[]).length,1);assert.ok(h.includes(city.context));assert.ok(h.includes(city.tip));assert.ok(!h.includes('<form'));
    assert.ok(h.includes('https://wa.me/5511957596840'));assert.ok(h.includes(LOCAL_IMAGES[city.slug]));
    for(const suffix of ['', '-640']){const img=LOCAL_IMAGES[city.slug].replace('.webp',suffix+'.webp');assert.ok((await fs.stat('cloudflare-dist'+img)).size<250000);}
  }
  const pc=await(await worker.fetch(new Request(origin+'/contatopc/'),{ASSETS:assets})).text();
  assert.ok(pc.includes('tel:+5511957596840'));assert.ok(pc.includes('Copiar número'));
  assert.ok(!/<a[^>]+href="https:\/\/(wa\.me|api\.whatsapp\.com)/.test(pc),'no WhatsApp button on desktop page');
  console.log('PASS: 21 local pages, desktop contact, mobile/desktop routing, single event and all images. No test events sent to Google.');
} finally {await fs.unlink(temp).catch(()=>{});}

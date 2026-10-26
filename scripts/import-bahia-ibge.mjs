import fs from 'node:fs';
const input=process.argv[2]||'../bahia-dados';
const municipalities=JSON.parse(fs.readFileSync(input+'/municipios-ibge.json','utf8'));
const districts=JSON.parse(fs.readFileSync(input+'/distritos-ibge.json','utf8'));
const routes=JSON.parse(fs.readFileSync('src/data/municipalities.json','utf8')).filter(city=>city.uf==='BA');
if(municipalities.length!==417||routes.length!==417)throw new Error('Expected 417 BA municipalities');
const profiles={};
for(const city of municipalities){
 const route=routes.find(item=>item.id===city.id);if(!route)throw new Error('Missing existing route '+city.id);
 const region=city['regiao-imediata'];
 profiles[route.slug]={id:city.id,immediate:region.nome,intermediate:region['regiao-intermediaria'].nome.replace(' ¿ ',' — '),districts:districts.filter(d=>d.municipio.id===city.id).map(d=>d.nome).sort()};
 if(!profiles[route.slug].districts.length)throw new Error('Missing district for '+city.nome);
}
fs.writeFileSync('src/data/bahiaLocalities.json',JSON.stringify(profiles));
console.log('Imported '+municipalities.length+' BA municipalities and '+districts.length+' districts. Existing URLs preserved.');

import fs from 'node:fs';

// Reproducible import of public IBGE Localidades snapshots; never infer delivery coverage from geography.
const input = process.argv[2] || '../pr-dados';
const municipalities = JSON.parse(fs.readFileSync(`${input}/municipios-ibge.json`, 'utf8'));
const districts = JSON.parse(fs.readFileSync(`${input}/distritos-ibge.json`, 'utf8'));
const existing = JSON.parse(fs.readFileSync('src/data/municipalities.json', 'utf8')).filter(city => city.uf === 'PR');
if (municipalities.length !== 399 || existing.length !== 399) throw new Error('Expected all 399 PR municipalities');
const profiles = {};
for (const city of municipalities) {
  const route = existing.find(item => item.id === city.id);
  if (!route) throw new Error(`Missing existing route for ${city.id}`);
  const immediate = city['regiao-imediata'];
  profiles[route.slug] = {
    id: city.id,
    immediate: immediate.nome,
    intermediate: immediate['regiao-intermediaria'].nome.replace('Juíz de Fora', 'Juiz de Fora'),
    districts: districts.filter(d => d.municipio.id === city.id).map(d => d.nome).sort((a,b) => a.localeCompare(b,'pt-BR')),
  };
  if (!profiles[route.slug].districts.length) throw new Error(`Missing districts for ${city.nome}`);
}
fs.writeFileSync('src/data/paranaLocalities.json', JSON.stringify(profiles));
console.log(`IBGE: ${municipalities.length} municipalities; ${districts.length} districts. Existing slugs preserved.`);



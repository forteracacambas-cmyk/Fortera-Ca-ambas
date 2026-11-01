from pathlib import Path
import json,zipfile,struct,collections
r=Path(__file__).resolve().parents[2]; source=r/'nordeste-dados'; cities=json.loads((r/'site/src/data/municipalities.json').read_text(encoding='utf-8'))
profiles={}; neighborhoods={}; stats={}
for uf in ['AL','CE','MA','PB','PE','PI','RN','SE']:
 ms=json.loads((source/f'{uf}-municipios.json').read_text(encoding='utf-8'));ds=json.loads((source/f'{uf}-distritos.json').read_text(encoding='utf-8'));existing={c['id']:c for c in cities if c['uf']==uf}
 assert len(ms)==len(existing) and all(m['id'] in existing for m in ms)
 profiles[uf]={existing[m['id']]['slug']:{'id':m['id'],'immediate':m['regiao-imediata']['nome'],'intermediate':m['regiao-imediata']['regiao-intermediaria']['nome'],'districts':[d['nome'] for d in ds if d['municipio']['id']==m['id']]} for m in ms}
 names=collections.defaultdict(set)
 if uf!='DF':
  z=zipfile.ZipFile(source/f'{uf}_bairros_CD2022.zip');b=z.read(f'{uf}_bairros_CD2022.dbf');count,header,size=struct.unpack_from('<IHH',b,4);fields=[]
  for p in range(32,header-1,32):
   d=b[p:p+32]
   if d[0]==13:break
   fields.append((d[:11].split(b'\0')[0].decode(),d[16]))
  try:b[header:].decode('utf-8');encoding='utf-8'
  except UnicodeDecodeError:encoding='cp1252'
  for i in range(count):
   rec=b[header+i*size:header+(i+1)*size]
   if rec[0]==42:continue
   p=1;obj={}
   for name,l in fields:obj[name]=rec[p:p+l].decode(encoding).strip();p+=l
   if obj['NM_BAIRRO']:names[existing[int(obj['CD_MUN'])]['slug']].add(obj['NM_BAIRRO'])
 neighborhoods[uf]={k:sorted(v) for k,v in names.items()};stats[uf]={'pages':len(ms),'districts':len(ds),'neighborhoodCities':len(names),'neighborhoodNames':sum(map(len,names.values())),'intermediate':len(set(m['intermediate'] for m in profiles[uf].values())),'immediate':len(set(m['immediate'] for m in profiles[uf].values()))}

for file,data in [('enhancedLocalities.json',profiles),('enhancedNeighborhoods.json',neighborhoods)]:
 p=r/'site/src/data'/file;merged=json.loads(p.read_text(encoding='utf-8'));merged.update(data);p.write_text(json.dumps(merged,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
(source/'importacao-resumo.json').write_text(json.dumps(stats,ensure_ascii=False,indent=2),encoding='utf-8');print(json.dumps(stats,ensure_ascii=False))

import React, { useState } from 'react';
import type { StateInfo } from '../data/regionsAndStates';
import { MUNICIPALITIES, cityPath, normalizeSearch } from '../data/nationalCoverage';
import { STATE_CITY_MENTIONS, stateLocation } from '../data/stateSeo';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { QuoteForm } from './QuoteForm';
import { MinasStateIntro, MinasStateCoverage } from './MinasStateCoverage';
import { BahiaStateIntro, BahiaStateCoverage } from './BahiaStateCoverage';

export function StateCoverageContent({ state }: { state: StateInfo }) {
  const [search, setSearch] = useState('');
  const towns = MUNICIPALITIES.filter(city => city.uf === state.uf);
  const featured = (STATE_CITY_MENTIONS[state.uf] || [state.capital]).filter(name => towns.some(city => city.name === name));
  const groups = new Map<string, typeof towns>();
  for (const city of towns) {
    if (!normalizeSearch(`${city.name} ${city.region}`).includes(normalizeSearch(search.trim()))) continue;
    groups.set(city.region, [...(groups.get(city.region) || []), city]);
  }
  const regionId = (name: string) => 'regiao-' + normalizeSearch(name).replace(/[^a-z0-9]+/g, '-');
  const areas = SERVICE_AREAS.filter(area => area.uf === state.uf);
  const faq = [
    { q: `Quanto custa alugar uma caçamba ${stateLocation(state)}?`, a: 'O preço depende da cidade, do endereço, do tamanho, do material e do prazo de uso. Informe esses dados para confirmar o valor total, a entrega, a retirada e as condições de eventuais trocas. Não existe um único preço válido para todo o estado.' },
    { q: 'Qual tamanho de caçamba devo escolher?', a: 'A escolha depende da quantidade e do tipo de entulho. Consulte opções de 3, 4 e 5 m³; capacidades de 7 e 10 m³ dependem da operação disponível para o endereço. Se não souber o volume, descreva a reforma ou peça orientação à equipe.' },
    { q: 'Posso contratar por dias, semanas ou meses?', a: 'Sim. Informe o período necessário e a etapa da obra. Antes de reservar, confirme datas, período incluído, condições de prorrogação e como solicitar retirada ou troca durante a locação.' },
    { q: 'O que informar para receber o orçamento?', a: 'Informe cidade, bairro, ponto de entrega, tipo de resíduo, tamanho desejado e prazo. Avise sobre portões, ladeiras, ruas estreitas e horários de condomínio para avaliação do acesso do caminhão.' },
  ];
  return <>
    {state.uf === 'BA' && <BahiaStateIntro />}
    {state.uf === 'MG' && <MinasStateIntro />}
    <section className="max-w-7xl mx-auto px-6 py-12" aria-labelledby="state-coverage-title">
      <h2 id="state-coverage-title" className="text-3xl font-black">Locação de caçamba de entulho {stateLocation(state)}</h2>
      <p className="mt-4 text-slate-600 leading-relaxed">A Fortera recebe pedidos de aluguel e locação de caçamba de entulho {stateLocation(state)} para obras, reformas e pequenas demolições. Fale diretamente com a equipe para escolher capacidade e período e combinar entrega, retirada e condições para o endereço da obra.</p>
      <nav aria-label="Atalhos para contratar caçamba" className="flex flex-wrap gap-3 mt-6">
        <a href="https://wa.me/5511957596840?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20ca%C3%A7amba." className="rounded-lg bg-[#10263D] text-white px-4 py-3 font-bold">Solicitar orçamento agora</a>
        {state.uf === 'SP' && <a href="#municipios-atendidos" className="rounded-lg border px-4 py-3 font-bold">Ver municípios de São Paulo</a>}
        {state.uf === 'MG' && <a href="#municipios-atendidos" className="rounded-lg border px-4 py-3 font-bold">Ver os 853 municípios de Minas</a>}
        <a href="#duvidas-locacao" className="rounded-lg border px-4 py-3 font-bold">Preço e dúvidas</a>
      </nav>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        <article className="border rounded-xl p-6"><h3 className="font-black text-xl">Preço para o seu endereço</h3><p className="mt-3 text-slate-600">Compare propostas com o mesmo tamanho, período e tipo de resíduo. Verifique o que está incluído na entrega, retirada e nas trocas.</p><a className="inline-block mt-4 underline font-bold" href="/preco-aluguel-cacamba/">O que compõe o preço da caçamba</a></article>
        <article className="border rounded-xl p-6"><h3 className="font-black text-xl">Tamanho e quantidade de entulho</h3><p className="mt-3 text-slate-600">Descreva a etapa da reforma para escolher a capacidade. Volume em m³ não substitui a avaliação do peso e do material.</p><a className="inline-block mt-4 underline font-bold" href="/tamanhos-de-cacamba/">Comparar tamanhos de caçambas</a></article>
        <article className="border rounded-xl p-6"><h3 className="font-black text-xl">Material e preparação da entrega</h3><p className="mt-3 text-slate-600">Confirme os resíduos aceitos e o acesso para o caminhão. Informe limitações da vaga e horários de entrada antes de agendar.</p><a className="inline-block mt-4 underline font-bold" href="/guias/o-que-pode-colocar-na-cacamba/">Consultar materiais e descarte</a></article>
      </div>
    </section>
    <section id="orcamento-local" className="bg-slate-50 py-12 scroll-mt-24"><div className="max-w-4xl mx-auto px-6"><h2 className="text-3xl font-black">Peça seu orçamento {stateLocation(state)}</h2><p className="mt-4 mb-6 text-slate-600">Sem consulta de CEP e sem cadastro: clique e fale diretamente com a equipe sobre sua obra.</p><QuoteForm key={state.uf} initialUf={state.uf} compact /></div></section>
    <section id="duvidas-locacao" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24"><h2 className="text-3xl font-black">Dúvidas sobre aluguel de caçamba {stateLocation(state)}</h2><div className="grid md:grid-cols-2 gap-5 mt-8">{faq.map(item => <article key={item.q} className="rounded-xl border p-6"><h3 className="font-black text-lg">{item.q}</h3><p className="mt-3 text-slate-600 leading-relaxed">{item.a}</p></article>)}</div><p className="mt-6 text-slate-600">Planeje cada etapa: <a className="font-bold underline" href="/como-funciona/">como funciona a locação</a> e <a className="font-bold underline" href="/guias/como-preparar-a-entrega-da-cacamba/">como preparar o local da entrega</a>.</p></section>
    {areas.length > 0 && <section className="max-w-7xl mx-auto px-6 pb-12"><h2 className="text-2xl font-black">Orientações para regiões de {state.name}</h2><div className="flex flex-wrap gap-3 mt-5">{areas.map(area => <a href={`/regioes/${area.slug}/`} key={area.slug} className="rounded-lg border p-3 font-bold">{area.name} →</a>)}</div></section>}
    {state.uf === 'SP' && <section id="municipios-atendidos" className="bg-slate-50 py-12 scroll-mt-24"><div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl font-black">Municípios de {state.name}: encontre sua localidade</h2><p className="mt-4 text-slate-600">A lista reúne {towns.length} municípios/localidades da base do IBGE, agrupados por região imediata para facilitar a consulta. Consulte as orientações da cidade ou clique em solicitar orçamento para falar diretamente com a Fortera.</p>
      <label className="block mt-6 font-bold" htmlFor="state-city-search">Buscar cidade ou região em {state.name}</label><input id="state-city-search" type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Digite a cidade ou região" className="border rounded-lg p-3 mt-2 w-full max-w-xl bg-white" />
      {groups.size > 1 && <nav aria-label={`Regiões imediatas de ${state.name}`} className="flex flex-wrap gap-2 mt-6">{[...groups].sort(([a], [b]) => a.localeCompare(b, 'pt-BR')).map(([region, cities]) => <a href={`#${regionId(region)}`} key={region} className="border bg-white rounded-lg px-3 py-2 text-sm">{region} <span className="text-slate-500">({cities.length})</span></a>)}</nav>}
      <p className="mt-4 text-sm text-slate-600" role="status">{[...groups.values()].reduce((total, cities) => total + cities.length, 0)} localidades encontradas</p>
      {[...groups].sort(([a], [b]) => a.localeCompare(b, 'pt-BR')).map(([region, cities]) => <section id={regionId(region)} key={region} className="mt-8 scroll-mt-24"><h3 className="text-xl font-black">{groups.size === 1 && state.uf === 'DF' ? 'Distrito Federal' : `Região de ${region}`}</h3><ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">{[...cities].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')).map(city => <li key={city.id}><a className="block border rounded-lg p-3 bg-white hover:bg-yellow-50" href={cityPath(city)}>{city.name} →</a></li>)}</ul></section>)}
      {groups.size === 0 && <p className="mt-6 p-5 bg-white border rounded-lg">Nenhuma localidade encontrada. Confira a grafia ou fale diretamente com a equipe.</p>}
    </div></section>}
    {state.uf === 'MG' && <MinasStateCoverage />}
    {state.uf === 'BA' && <BahiaStateCoverage />}
  </>;
}

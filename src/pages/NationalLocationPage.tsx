import React from 'react';
import { NATIONAL_STATES, MUNICIPALITIES, findMunicipality, cityPath, statePath } from '../data/nationalCoverage';
import { stateSeo, stateLocation, STATE_SCENES } from '../data/stateSeo';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { LocalRentalDetails } from '../components/LocalRentalDetails';
import { StateCoverageContent } from '../components/StateCoverageContent';
import { SITE_IMAGES, getWhatsAppLink } from '../config/siteConfig';
import { NotFoundPage } from './NotFoundPage';

export function NationalLocationPage({ uf, slug }: { uf: string; slug?: string }) {
  const state = NATIONAL_STATES.find(item => item.uf === uf.toUpperCase());
  const city = slug ? findMunicipality(uf, slug) : undefined;
  if (!state || (slug && !city)) return <NotFoundPage />;
  const location = city ? `${city.name} — ${state.uf}` : state.name;
  const path = city ? cityPath(city) : statePath(state.uf);
  const nearby = city ? MUNICIPALITIES.filter(item => item.uf === state.uf && item.region === city.region && item.id !== city.id) : [];
  const meta = stateSeo(state);
  const scene = city ? SITE_IMAGES.hero : STATE_SCENES[state.region];
  const message = getWhatsAppLink(`Olá! Gostaria de alugar uma caçamba em ${location}. Quero consultar disponibilidade e orçamento para meu bairro.`);
  return <div>
    <SeoHead title={city ? `Aluguel de Caçamba em ${location} | Fortera` : meta.title} description={city ? `Consulte aluguel de caçamba em ${location}, tamanhos de 3 a 10 m³ e prazos de dias ou meses. Solicite orçamento pelo WhatsApp para seu bairro.` : meta.description} path={path} />
    <Breadcrumbs items={[{ name: 'Atendimento', href: '/atendimento/' }, { name: state.name, href: city ? statePath(state.uf) : undefined }, ...(city ? [{ name: city.name }] : [])]} />
    <section className="bg-[#10263D] text-white py-14"><div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
      <div><p className="text-yellow-400 font-bold">Brasil · {state.region} · {state.name}</p>
        <h1 className="text-4xl font-black mt-3">Aluguel de caçamba {city ? `em ${location}` : stateLocation(state)}</h1>
        <p className="mt-5 text-slate-200 leading-relaxed">{city ? 'Organize o descarte da sua reforma ou obra com uma caçamba no tamanho e prazo adequados. A Fortera consulta sua solicitação por meio da rede de parceiros e afiliados, conforme disponibilidade para o endereço.' : `Locação de caçambas de entulho para obras, reformas e pequenas demolições ${stateLocation(state)}. Informe sua cidade e escolha tamanho e período para receber uma proposta de entrega e retirada pelo WhatsApp.`}</p>
        <a href={message} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] p-4 rounded-xl font-bold mt-6">Pedir orçamento em {city?.name || state.name}</a>
        {!city && <a href="https://wa.me/5511957596840?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20ca%C3%A7amba." className="inline-block ml-0 sm:ml-4 mt-4 font-bold underline p-3">Solicitar orçamento agora</a>}
      </div>
      <figure><img src={scene.src} srcSet={!city ? `${scene.src.replace('.webp', '-640.webp')} 640w, ${scene.src} 1279w` : undefined} sizes={!city ? '(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw' : undefined} alt={scene.alt} width={1536} height={1024} fetchPriority="high" className="rounded-2xl w-full h-auto" />{!city && <figcaption className="mt-2 text-xs text-slate-300">Imagem ilustrativa de planejamento de obra e descarte de entulho.</figcaption>}</figure>
    </div></section>
    {!city && <StateCoverageContent state={state} />}
    {city && <section className="py-12 max-w-7xl mx-auto px-6"><h2 className="text-3xl font-black">Planeje a entrega em {city.name}</h2><p className="mt-4 text-slate-600">{city.name} pertence à região imediata de {city.region}, em {state.name}. Informe o bairro para consultar a operação disponível para sua obra. Informe também se a entrega será em imóvel, condomínio ou via pública.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <article className="p-6 bg-slate-50 rounded-xl"><h3 className="font-black text-xl">Reformas de casas e apartamentos</h3><p className="mt-3">Consulte o volume de pisos, revestimentos e alvenaria. Em condomínios, alinhe a entrada do caminhão e os horários permitidos com a portaria.</p></article>
        <article className="p-6 bg-slate-50 rounded-xl"><h3 className="font-black text-xl">Acesso e posicionamento</h3><p className="mt-3">O ponto de entrega precisa permitir acesso e manobra. Informe se a rua tem restrições, declive, fiação baixa ou pavimento que exige avaliação.</p></article>
        <article className="p-6 bg-slate-50 rounded-xl"><h3 className="font-black text-xl">Obras por dias ou meses</h3><p className="mt-3">Escolha o prazo conforme suas etapas. Se a caçamba encher e a obra continuar, você tem 1 troca por semana. Solicite pelo WhatsApp.</p></article>
      </div>
    </section>}
    {state.uf === 'SP' && !city && <section className="max-w-7xl mx-auto px-6 py-8"><div className="p-6 bg-yellow-50 rounded-xl"><h2 className="text-2xl font-black">Bairros e distritos da capital</h2><p className="mt-3">São Mateus pertence ao município de São Paulo. Consulte as orientações do distrito para planejar sua entrega.</p><a className="inline-block mt-3 font-bold underline" href="/aluguel-de-cacamba/sp/sao-paulo/sao-mateus/">Caçamba em São Mateus, São Paulo →</a></div></section>}
    <LocalRentalDetails location={location} />
    {city && <section className="max-w-5xl mx-auto px-6 py-12"><h2 className="text-3xl font-black mb-5">Seu orçamento em {location}</h2><QuoteForm key={path} initialUf={state.uf} initialCity={city.name} /></section>}
    {city && <section className="bg-slate-50 py-12"><div className="max-w-7xl mx-auto px-6"><h2 className="text-2xl font-black">Outros municípios da região de {city.region}</h2><p className="mt-3 text-slate-600">Selecione o município em que sua obra está localizada.</p><div className="grid sm:grid-cols-3 gap-3 mt-5">{nearby.map(item => <a href={cityPath(item)} key={item.id} className="p-3 border rounded-lg bg-white">{item.name} →</a>)}</div><a href={statePath(state.uf)} className="inline-block font-bold underline mt-6">Ver todos os municípios de {state.name}</a></div></section>}
    <section className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500">Dados de localização: <a href="https://servicodados.ibge.gov.br/api/docs/localidades" target="_blank" rel="noopener noreferrer" className="underline">IBGE — Localidades</a>. Consulte regras de colocação em via pública no município antes da entrega.</section>
  </div>;
}

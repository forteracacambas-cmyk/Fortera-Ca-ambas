import React from 'react';
import { ArrowDown, ArrowRight, Check, MessageCircle, MapPin, CalendarDays, Truck, Ruler } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { RentalLanding, RENTAL_LANDINGS } from '../data/rentalLandingPages';
import { NATIONAL_STATES, statePath } from '../data/nationalCoverage';
import { getCanonicalUrl, getWhatsAppLink } from '../config/siteConfig';

export function RentalLandingPage({ page }: { page: RentalLanding }) {
  const whatsapp = getWhatsAppLink(page.message);
  const picture = '/images/contratacao/' + page.image;
  const icons = [CalendarDays, Truck, Ruler];
  const cta = (label: string, dark = false) => <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-amber-400 ${dark ? 'bg-[#10263D] text-white hover:bg-[#24445f]' : 'bg-[#25D366] text-[#082c1b] hover:bg-[#53df88]'}`}><MessageCircle size={20} aria-hidden="true"/>{label}<ArrowRight size={18} aria-hidden="true"/></a>;
  return <div className="bg-[#F6F5F1] text-[#10263D]">
    <SeoHead title={page.title} description={page.description} path={page.path} jsonLd={{
      '@context': 'https://schema.org', '@type': 'Service', name: page.label,
      serviceType: 'Aluguel de caçamba estacionária de entulho', description: page.description,
      url: getCanonicalUrl(page.path), image: getCanonicalUrl(picture + '.webp'),
      provider: { '@id': getCanonicalUrl('/') + '#organization' },
      areaServed: { '@type': 'Country', name: 'Brasil' },
    }}/>
    <Breadcrumbs items={[{ name: 'Serviços', href: '/servicos/' }, { name: page.label }]}/>
    <section className="bg-[#10263D] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <p className="text-[#FFC52D] text-xs sm:text-sm font-bold uppercase tracking-widest mb-5">{page.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] max-w-xl">{page.heading}</h1>
          <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">{page.intro}</p>
          <div className="flex flex-wrap gap-4 items-center mt-8">{cta(page.cta)}<a href="https://wa.me/5511957596840?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20ca%C3%A7amba." className="inline-flex gap-2 items-center font-semibold py-3 underline underline-offset-4 text-white">Solicitar orçamento agora <ArrowDown size={16} aria-hidden="true"/></a></div>
          <p className="mt-5 text-sm text-slate-300 flex items-center gap-2"><MapPin size={16} aria-hidden="true"/>Atendimento nacional · Condições por endereço</p>
        </div>
        <figure className="relative">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#FFC52D] rounded-3xl" aria-hidden="true"/>
          <img src={picture + '.webp'} srcSet={`${picture}-640.webp 640w, ${picture}.webp 1280w`} sizes="(min-width: 1024px) 48vw, 100vw" alt={page.imageAlt} width={1536} height={1024} fetchPriority="high" className="relative rounded-3xl w-full aspect-[3/2] object-cover shadow-xl"/>
          <figcaption className="text-xs text-slate-300 mt-3">Imagem ilustrativa. Capacidade e atendimento confirmados na proposta.</figcaption>
          <div className="mt-5 rounded-2xl border border-slate-600 bg-[#1A3856] p-5 flex items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-wider text-slate-300">Do pedido ao agendamento</p><p className="font-bold mt-1">Sua obra. Seu endereço. Sua proposta.</p></div><MessageCircle size={28} className="text-[#FFC52D] shrink-0" aria-hidden="true"/></div>
        </figure>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="max-w-3xl"><p className="uppercase text-xs font-bold tracking-widest text-amber-700">Escolha com clareza</p><h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">{page.sectionTitle}</h2><p className="mt-4 text-slate-600 leading-relaxed">{page.sectionIntro}</p></div>
      <div className="grid md:grid-cols-3 gap-5 mt-9">{page.benefits.map((item, index) => { const Icon = icons[index]; return <article key={item.title} className="rounded-2xl bg-white border border-slate-200 p-7"><span className="inline-flex bg-amber-100 p-3 rounded-xl"><Icon size={24} aria-hidden="true"/></span><h3 className="text-xl font-bold mt-5">{item.title}</h3><p className="mt-3 text-slate-600 leading-relaxed text-sm">{item.text}</p></article>; })}</div>
    </section>

    <section id="contato-direto" className="scroll-mt-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid lg:grid-cols-2 gap-10 items-start">
        <div><span className="inline-block bg-[#FFC52D] rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider">Vamos organizar seu pedido</span><h2 className="text-3xl sm:text-4xl font-black mt-5">Seu orçamento começa no endereço da obra.</h2><p className="text-slate-600 leading-relaxed mt-5">Fale com a equipe, explique o tipo de entulho e o prazo. A conversa começa diretamente com a equipe, que confirma preço, disponibilidade e agendamento.</p><ul className="space-y-3 mt-6">{page.checklist.slice(0,3).map(text => <li className="flex gap-3 text-sm" key={text}><Check size={19} className="text-emerald-700 shrink-0" aria-hidden="true"/>{text}</li>)}</ul><p className="text-sm text-slate-600 mt-7 mb-4">Prefere explicar sua necessidade em uma conversa?</p>{cta('Falar direto com a Fortera', true)}</div>
        <div className="rounded-3xl bg-[#F6F5F1] p-4 sm:p-6 border border-slate-200"><QuoteForm compact/></div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
        <div><p className="uppercase text-xs font-bold tracking-widest text-amber-700">Antes de contratar</p><h2 className="text-3xl sm:text-4xl font-black mt-3">{page.detailTitle}</h2><div className="mt-6 space-y-5 text-slate-600 leading-relaxed">{page.paragraphs.map(text => <p key={text}>{text}</p>)}</div></div>
        <aside className="rounded-3xl bg-[#E9EDE8] p-7 sm:p-9 self-start"><h3 className="font-black text-2xl">Conversa pronta, decisão mais fácil.</h3><p className="text-slate-600 mt-3 leading-relaxed">Tenha estes pontos em mãos para alinhar a proposta com a equipe:</p><ul className="mt-6 space-y-4">{page.checklist.map((text,index) => <li className="flex gap-3" key={text}><span className="rounded-full w-7 h-7 flex items-center justify-center bg-white font-bold text-sm shrink-0">{index+1}</span><span className="text-sm leading-relaxed">{text}</span></li>)}</ul><div className="mt-8">{cta('Enviar minha necessidade')}</div></aside>
      </div>
      {page.path === '/cacamba-de-entulho/' && <div className="mt-12 rounded-3xl bg-white border border-slate-200 p-6 sm:p-9"><h3 className="text-2xl font-bold">Tamanho é volume. A carga também tem peso.</h3><div className="overflow-x-auto mt-5"><table className="w-full text-left text-sm min-w-[440px]"><caption className="sr-only">Referências para consultar capacidades de caçamba</caption><thead><tr className="border-b border-slate-200"><th className="py-4 pr-5">Capacidade nominal</th><th className="py-4">O que avaliar na consulta</th></tr></thead><tbody>{[['3 m³','Reformas pontuais; confirme quantidade, material e limite de peso.'],['4 e 5 m³','Etapas com maior geração de entulho; avalie carga e espaço de acesso.'],['7 e 10 m³','Disponibilidade e uso sujeitos à avaliação da operação para o endereço.']].map(([size,detail])=><tr key={size} className="border-b border-slate-100"><th className="py-4 pr-5 font-bold">{size}</th><td className="py-4 text-slate-600">{detail}</td></tr>)}</tbody></table></div><a href="/tamanhos-de-cacamba/" className="inline-flex items-center gap-2 mt-5 font-bold underline underline-offset-4">Comparar tamanhos e medidas <ArrowRight size={16} aria-hidden="true"/></a></div>}
    </section>

    <section className="bg-[#10263D] text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20"><p className="uppercase text-xs font-bold tracking-widest text-[#FFC52D]">Do primeiro contato à retirada</p><h2 className="text-3xl sm:text-4xl font-black mt-3">Três passos para colocar a obra em movimento.</h2><ol className="grid md:grid-cols-3 gap-8 mt-10">{page.steps.map((item,index)=><li key={item.title} className="border-t border-slate-600 pt-6"><span className="text-[#FFC52D] text-4xl font-black">0{index+1}</span><h3 className="font-bold text-xl mt-4">{item.title}</h3><p className="text-slate-300 text-sm leading-relaxed mt-3">{item.text}</p></li>)}</ol><div className="mt-10">{cta(page.cta)}</div></div></section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-16"><div><p className="uppercase text-xs font-bold tracking-widest text-amber-700">Respostas para sua contratação</p><h2 className="text-3xl sm:text-4xl font-black mt-3">Dúvidas sobre {page.label.toLowerCase()}.</h2><p className="text-slate-600 mt-5 leading-relaxed">Confira os pontos principais e fale com a equipe para avaliar a situação da sua obra.</p></div><div className="space-y-4">{page.faq.map(item=><article key={item.question} className="bg-white rounded-2xl border border-slate-200 p-6"><h3 className="font-bold text-lg">{item.question}</h3><p className="text-slate-600 mt-3 text-sm leading-relaxed">{item.answer}</p></article>)}</div></section>

    <section className="bg-white border-y border-slate-200"><div className="max-w-7xl mx-auto px-4 sm:px-6 py-14"><div className="flex flex-wrap justify-between gap-5 items-end"><div><p className="text-xs font-bold uppercase tracking-widest text-amber-700">Atendimento nacional</p><h2 className="text-3xl font-black mt-3">Encontre seu estado. Consulte sua obra.</h2></div><a href="/atendimento/" className="font-bold inline-flex items-center gap-2">Ver cobertura <ArrowRight size={18} aria-hidden="true"/></a></div><p className="text-slate-600 mt-4 max-w-3xl leading-relaxed">A Fortera organiza o atendimento por uma rede de parceiros e afiliados. Selecione seu estado ou fale com a equipe; as condições de entrega, preço e prazo são confirmadas para o endereço solicitado.</p><div className="flex flex-wrap gap-2 mt-7">{NATIONAL_STATES.map(state=><a key={state.uf} href={statePath(state.uf)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-amber-50 hover:border-amber-400">{state.name} <span className="text-slate-500">({state.uf})</span></a>)}</div></div></section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14"><h2 className="font-black text-2xl">Continue planejando sua contratação</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">{[...RENTAL_LANDINGS.filter(item=>item.path!==page.path).map(item=>({path:item.path,label:item.label})),{path:'/preco-aluguel-cacamba/',label:'Preço do aluguel'},{path:'/guias/o-que-pode-colocar-na-cacamba/',label:'Materiais aceitos e cuidados'}].map(item=><a key={item.path} href={item.path} className="bg-white border border-slate-200 p-5 rounded-xl font-bold flex justify-between items-center gap-3 hover:border-amber-400">{item.label}<ArrowRight size={18} className="shrink-0" aria-hidden="true"/></a>)}</div></section>
  </div>;
}

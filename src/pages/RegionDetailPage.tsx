import React from 'react';
import { getServiceArea, SERVICE_AREAS } from '../data/serviceAreas';
import { CITIES_DATA } from '../data/citiesData';
import { SITE_IMAGES, getWhatsAppLink } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LocalRentalDetails } from '../components/LocalRentalDetails';
import { QuoteForm } from '../components/QuoteForm';
import { NotFoundPage } from './NotFoundPage';

export const RegionDetailPage = ({ slug }: { slug: string }) => {
  const area = getServiceArea(slug);
  if (!area) return <NotFoundPage />;
  const contact = getWhatsAppLink(`Olá! Gostaria de orçamento de caçamba na região ${area.name}. Minha cidade e bairro: `);
  const description = `Aluguel de caçamba em ${area.name}: consulte cidades, tamanhos, locação por dias ou meses com troca semanal. Solicite orçamento para seu endereço no WhatsApp.`;
  const faqs = [
    { question: `Como consultar atendimento em ${area.name}?`, answer: `Envie seu município e bairro pelo WhatsApp. As cidades destacadas incluem ${area.cities.join(', ')}. A disponibilidade é confirmada para cada endereço com a rede de parceiros e afiliados.` },
    { question: 'Posso alugar por apenas 1, 2 ou 3 dias?', answer: 'Sim, você pode solicitar cotação para esses prazos, para semanas ou para meses, com 1 troca por semana quando a caçamba encher e a obra continuar. A data de entrega, retirada e as condições são confirmadas na proposta.' },
    { question: 'Quanto custa a locação na região?', answer: 'O valor depende do endereço, tamanho, prazo, resíduos e logística. Solicite orçamento com esses dados para confirmar o valor total e os serviços incluídos.' },
    { question: 'A caçamba pode ficar dentro do condomínio?', answer: 'A possibilidade depende da autorização do condomínio, das regras de acesso e do espaço para o caminhão. Envie fotos e informe os horários antes de reservar.' },
  ];
  return <div>
    <SeoHead title={`Aluguel de Caçamba em ${area.name} | Fortera`} description={description} path={`/regioes/${area.slug}/`} jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', name: `Aluguel de Caçamba em ${area.name}`, description, about: { '@type': 'Service', name: 'Locação de caçambas de entulho', areaServed: { '@type': 'Place', name: area.name }, provider: { '@type': 'Organization', name: 'Fortera Caçambas' } } }} />
    <Breadcrumbs items={[{ name: 'Atendimento Nacional', href: '/atendimento/' }, { name: area.name }]} />
    <section className="bg-[#10263D] text-white py-14 sm:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
      <div><p className="text-[#FFC52D] font-bold text-sm">{area.uf} • Obras, reformas e pequenas demolições</p><h1 className="text-4xl sm:text-5xl font-black mt-4">Aluguel de caçamba em {area.name}</h1><p className="text-slate-200 mt-6 leading-relaxed text-lg">{area.intro}</p><a href={contact} target="_blank" rel="noopener noreferrer" className="inline-block mt-7 bg-[#25D366] text-white font-black rounded-xl px-6 py-4">Consultar atendimento no meu endereço</a><p className="mt-4 text-sm text-slate-300">WhatsApp: (11) 95759-5840 • Brasil</p></div>
      <img src={SITE_IMAGES.hero.src} alt={`Caçamba Fortera para reforma: solicite orçamento em ${area.name}`} width={1536} height={1024} fetchPriority="high" className="w-full h-auto rounded-2xl" />
    </div></section>
    <section className="py-16 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6"><h2 className="text-3xl font-black">Cidades para consultar atendimento</h2><p className="text-slate-600 mt-4">Encontrou seu município? Envie o bairro para confirmar disponibilidade, prazo e valor. Para outras localidades próximas, consulte a central.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">{area.cities.map(city => { const page = CITIES_DATA.find(c => c.city === city && c.uf === area.uf); return <article key={city} className="bg-white p-5 rounded-xl border border-slate-200"><h3 className="font-black text-lg">{city} • {area.uf}</h3><a href={getWhatsAppLink(`Olá! Minha obra fica em ${city} - ${area.uf}. Gostaria de consultar aluguel de caçamba. Bairro: `)} target="_blank" rel="noopener noreferrer" className="block text-green-700 font-bold mt-3">Solicitar orçamento nesta cidade →</a>{page && <a className="block text-sm underline mt-3" href={`/aluguel-de-cacamba/${page.stateSlug}/${page.slug}/`}>Ver orientações para {city}</a>}</article>; })}</div></div></section>
    <section className="py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6"><h2 className="text-3xl font-black">Planeje a entrega e a retirada em {area.name}</h2><div className="grid md:grid-cols-3 gap-6 mt-8">{area.planning.map(item => <article key={item.title} className="p-7 rounded-2xl border border-slate-200"><h3 className="font-black text-xl">{item.title}</h3><p className="text-slate-600 mt-4 leading-relaxed">{item.text}</p></article>)}</div></div></section>
    <LocalRentalDetails location={area.name} />
    <section className="py-16 bg-slate-50"><div className="max-w-4xl mx-auto px-4 sm:px-6"><h2 className="text-3xl font-black mb-8">Dúvidas sobre caçambas em {area.name}</h2><div className="space-y-4">{faqs.map(faq => <article className="p-6 bg-white rounded-xl border border-slate-200" key={faq.question}><h3 className="font-bold text-lg">{faq.question}</h3><p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p></article>)}</div></div></section>
    <section className="py-16"><div className="max-w-4xl mx-auto px-4 sm:px-6"><h2 className="text-3xl font-black mb-4">Peça seu orçamento para {area.name}</h2><p className="mb-8 text-slate-600">Escolha sua cidade e informe o bairro. O estado já está selecionado. O pedido é preparado para envio ao WhatsApp da Fortera.</p><QuoteForm key={area.slug} initialUf={area.uf} /></div></section>
    <section className="py-10 bg-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6"><h2 className="text-xl font-black">Outras regiões</h2><div className="flex flex-wrap gap-3 mt-5">{SERVICE_AREAS.filter(a => a.slug !== slug).map(a => <a key={a.slug} href={`/regioes/${a.slug}/`} className="bg-white border border-slate-200 p-3 rounded-lg font-bold text-sm">{a.name} →</a>)}</div></div></section>
  </div>;
};

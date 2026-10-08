import React from 'react';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { SITE_IMAGES, getWhatsAppLink } from '../config/siteConfig';

export const RegionalCoverage = () => (
  <section className="py-16 sm:py-20 bg-[#10263D] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mb-10">
        <p className="text-xs font-black uppercase tracking-wider text-[#FFC52D]">Sua obra, sua região</p>
        <h2 className="text-3xl sm:text-4xl font-black mt-3">Encontre atendimento na sua região</h2>
        <p className="text-slate-200 mt-4 leading-relaxed">Litoral, capitais e cidades próximas: encontre sua região e solicite orçamento para seu município e bairro. A Fortera atende por uma rede de parceiros e afiliados, com disponibilidade e condições confirmadas para cada endereço.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_AREAS.map((area, index) => (
          <article key={area.slug} className="bg-[#1A3856] rounded-2xl overflow-hidden border border-slate-600 flex flex-col">
            <a href={`/regioes/${area.slug}/`} className="block">
              <img src={index % 2 ? SITE_IMAGES.dumpsterProduct.src : SITE_IMAGES.hero.src} alt={`Caçamba Fortera para obras e reformas: consulte atendimento em ${area.name}`} width={1536} height={1024} loading="lazy" className="w-full aspect-[16/9] object-cover" />
            </a>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs text-[#FFC52D] font-bold">{area.uf} • Consulta por município e bairro</p>
              <h3 className="text-xl font-black mt-2"><a href={`/regioes/${area.slug}/`}>{area.name}</a></h3>
              <p className="text-sm text-slate-200 mt-3 leading-relaxed">{area.cities.join(' • ')}</p>
              <p className="text-sm text-slate-300 mt-3">Caçambas para reformas, obras e pequenas demolições. Consulte tamanhos e locação por dias, semanas ou meses, com 1 troca por semana quando a caçamba encher e a obra continuar.</p>
              <div className="mt-auto pt-5 space-y-3">
                <a className="block bg-[#25D366] rounded-lg text-center py-3 font-bold" target="_blank" rel="noopener noreferrer" href={getWhatsAppLink(`Olá! Minha obra fica na região ${area.name}. Gostaria de consultar atendimento e orçamento para caçamba. Cidade e bairro: `)}>Consultar meu endereço no WhatsApp</a>
                <a href={`/regioes/${area.slug}/`} className="block text-center text-[#FFC52D] font-bold text-sm">Ver cidades e detalhes da região →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-[#0B1B2C] p-7 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div><h3 className="text-xl font-bold">Não encontrou sua cidade?</h3><p className="text-slate-200 mt-2">Consulte atendimento em todo o Brasil. Envie cidade, UF e bairro para verificar a disponibilidade na sua obra.</p></div>
        <a href="/atendimento/" className="bg-[#FFC52D] text-[#10263D] font-black rounded-xl px-6 py-3 shrink-0 text-center">Consultar outras regiões</a>
      </div>
    </div>
  </section>
);

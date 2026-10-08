import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { getCityBySlug, CITIES_DATA, CityLocalPage } from '../data/citiesData';
import { NotFoundPage } from './NotFoundPage';

interface CityDetailPageProps {
  uf: string;
  citySlug: string;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({ uf, citySlug }) => {
  const cityData: CityLocalPage | undefined = getCityBySlug(uf, citySlug);

  if (!cityData) {
    return <NotFoundPage />;
  }

  const otherCities = CITIES_DATA.filter(c => c.slug !== cityData.slug);

  return (
    <div className="bg-white">
      <SeoHead
        title={cityData.pageTitle}
        description={cityData.metaDescription}
        path={`/aluguel-de-cacamba/${cityData.stateSlug}/${cityData.slug}/`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: cityData.heroHeadline,
          description: cityData.metaDescription,
          about: {
            '@type': 'Service',
            name: `Aluguel de Caçamba de Entulho em ${cityData.city} - ${cityData.uf}`,
            provider: {
              '@type': 'Organization',
              name: 'Fortera Caçambas',
            },
          },
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Atendimento Nacional', href: '/atendimento/' },
          { name: `${cityData.city} (${cityData.uf})` },
        ]}
      />

      {/* Hero Local */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1A3856] text-[#FFC52D] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md mb-3 border border-[#FFC52D]/30">
              <span>{cityData.city} - {cityData.stateName} ({cityData.uf})</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {cityData.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              {cityData.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#formulario-orcamento"
                className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-base px-6 py-3 rounded-lg shadow transition-transform active:scale-95 focus-visible-ring"
              >
                Solicitar Cotação para {cityData.city}
              </a>
              <a
                href="#tamanhos-locais"
                className="bg-transparent text-white hover:bg-[#1A3856] font-bold text-base px-6 py-3 rounded-lg border border-slate-300 transition-colors"
              >
                Ver Tamanhos Recomendados
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto Logístico Local e Desafios de Acesso */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Planejamento e Geografia Urbana
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#10263D] tracking-tight mt-1">
                  Logística Operacional de Caçambas em {cityData.city}
                </h2>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                {cityData.localContext.overview}
              </p>

              {/* Desafios específicos */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#10263D]">
                  Particularidades logísticas observadas no município:
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  {cityData.localContext.logisticsChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-lg border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-[#FFC52D] mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dicas de Acesso */}
              <div className="bg-amber-50 p-5 rounded-xl border border-amber-300 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">
                  Recomendações para a Chegada do Poliguindaste em {cityData.city}:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950 list-disc pl-5">
                  {cityData.localContext.accessTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Destaque Resumo */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-black text-[#10263D] mb-2">
                  Diretrizes de Locação em {cityData.city}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cityData.localContext.bestDumpsterSizes}
                </p>
              </div>

              <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-600 space-y-2">
                <div><strong>Região:</strong> {cityData.stateName} ({cityData.uf})</div>
                <div><strong>Modelos:</strong> Caçambas estacionárias 3, 4 e 5 m³ nominais</div>
                <div><strong>Destinação:</strong> Áreas de triagem e aterros inertes homologados</div>
                <div><strong>Segurança:</strong> Carga strictly no nível da borda superior</div>
              </div>

              <a
                href="#formulario-orcamento"
                className="block text-center bg-[#10263D] hover:bg-[#1A3856] text-[#FFC52D] font-extrabold text-sm py-3 px-4 rounded-lg transition-colors"
              >
                Preencher Dados para {cityData.city} &darr;
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Tamanhos Recomendados na Cidade */}
      <section id="tamanhos-locais" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Dimensionamento Adequado
            </span>
            <h2 className="text-3xl font-black text-[#10263D] tracking-tight mt-1">
              Tamanhos de Caçamba para Obras em {cityData.city}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Escolha a capacidade cúbica ideal de acordo com a densidade do material e espaço disponível no imóvel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityData.recommendedSizes.map((rec, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="text-2xl font-black text-[#10263D] mb-2">
                    Caçamba {rec.size}
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-2">
                    {rec.scenario}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rec.notes}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={`#formulario-orcamento`}
                    className="text-xs font-bold text-[#10263D] hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>Cotar caçamba {rec.size} em {cityData.city}</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passo a Passo de Locação no Município */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D]">
              Do Pedido ao Descarte Legal
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight mt-1">
              Como Alugar sua Caçamba em {cityData.city}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityData.stepsToRent.map((step) => (
              <div 
                key={step.step}
                className="bg-[#10263D] p-6 rounded-xl border border-slate-700 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-black text-[#FFC52D]">
                    0{step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Local da Cidade */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Dúvidas da Região
            </span>
            <h2 className="text-3xl font-black text-[#10263D] mt-1">
              Perguntas Frequentes em {cityData.city} ({cityData.uf})
            </h2>
          </div>

          <div className="space-y-4">
            {cityData.localFaq.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-base font-bold text-[#10263D] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento para a Cidade */}
      <section id="formulario-orcamento" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#10263D]">
              Orçamento de Caçamba para {cityData.city} - {cityData.uf}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Os dados de {cityData.city} já estão pré-selecionados abaixo. Complete com o bairro e tipo de material da sua obra.
            </p>
          </div>

          <QuoteForm
            initialUf={cityData.uf}
            initialCity={cityData.city}
            defaultSize="4 m³"
          />
        </div>
      </section>

      {/* Outras Cidades */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#10263D]">
              Consulte outras cidades atendidas
            </h3>
            <a href="/atendimento/" className="text-xs font-bold text-[#10263D] hover:underline">
              Ver todas as 27 UFs &rarr;
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCities.map(c => (
              <a
                key={c.slug}
                href={`/aluguel-de-cacamba/${c.stateSlug}/${c.slug}/`}
                className="bg-white p-3 rounded-lg border border-slate-200 hover:border-[#FFC52D] text-xs font-semibold text-slate-800 hover:text-[#10263D] transition-colors"
              >
                {c.city} ({c.uf})
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

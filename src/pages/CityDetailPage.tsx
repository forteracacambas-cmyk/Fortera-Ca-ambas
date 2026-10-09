import { LocalRentalDetails } from '../components/LocalRentalDetails';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { SITE_IMAGES } from '../config/siteConfig';
import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { getCityBySlug, CITIES_DATA, CityLocalPage } from '../data/citiesData';
import { NotFoundPage } from './NotFoundPage';
import { getWhatsAppCityLink, getWhatsAppLink } from '../config/siteConfig';

interface CityDetailPageProps {
  uf: string;
  citySlug: string;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({ uf, citySlug }) => {
  const cityData: CityLocalPage | undefined = getCityBySlug(uf, citySlug);

  if (!cityData) {
    return <NotFoundPage />;
  }

  const relatedArea = SERVICE_AREAS.find(area => area.uf === cityData.uf && area.cities.includes(cityData.city));
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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A3856] text-[#FFC52D] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md mb-3 border border-[#FFC52D]/30">
              <span>{cityData.city} - {cityData.stateName} ({cityData.uf})</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {cityData.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              {cityData.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href={getWhatsAppCityLink(cityData.city, cityData.uf)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-base px-6 py-3.5 rounded-lg shadow-lg transition-transform active:scale-95 focus-visible-ring flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                </svg>
                <span>Pedir no WhatsApp em {cityData.city}</span>
              </a>
              <a
                href="#formulario-orcamento"
                className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-base px-6 py-3.5 rounded-lg shadow transition-transform active:scale-95 focus-visible-ring"
              >
                Preencher Formulário Local
              </a>
              <a
                href="#tamanhos-locais"
                className="bg-transparent text-white hover:bg-[#1A3856] font-bold text-base px-5 py-3.5 rounded-lg border border-slate-300 transition-colors"
              >
                Ver Tamanhos
              </a>
            </div>
          </div>
          <img src={SITE_IMAGES.hero.src} alt={`Caçamba Fortera para obras e reformas em ${cityData.city}`} width={1536} height={1024} fetchPriority="high" className="w-full h-auto rounded-2xl" />
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
                <div><strong>Destinação:</strong> Condições e destino confirmados no orçamento</div>
                <div><strong>Segurança:</strong> Carga no nível da borda superior</div>
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

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <a
                    href={getWhatsAppLink(`Olá! Gostaria de um orçamento para caçamba de ${rec.size} em ${cityData.city} - ${cityData.uf} com a Fortera.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 focus-visible-ring"
                  >
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                    </svg>
                    <span>Pedir {rec.size} no WhatsApp</span>
                  </a>
                  <a
                    href={`#formulario-orcamento`}
                    className="block text-center text-xs font-bold text-[#10263D] hover:text-amber-600 bg-white border border-slate-200 py-1.5 px-3 rounded-lg transition-colors"
                  >
                    Cotar no Formulário Abaixo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalRentalDetails location={`${cityData.city} (${cityData.uf})`} />

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

      {relatedArea && <section className="py-10 bg-[#10263D] text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6"><h2 className="text-2xl font-black">Atendimento em {relatedArea.name}</h2><p className="mt-3 text-slate-200">Consulte também {relatedArea.cities.filter(c => c !== cityData.city).join(', ')}. Informe município e bairro para confirmar disponibilidade.</p><a className="inline-block mt-5 text-[#FFC52D] font-bold" href={'/regioes/' + relatedArea.slug + '/'}>Conhecer cidades e orientações da região →</a></div></section>}

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

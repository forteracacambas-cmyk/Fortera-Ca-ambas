import { RegionalCoverage } from '../components/RegionalCoverage';
import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BRAZILIAN_STATES, REGIONS_ORDER, REGION_DETAILS } from '../data/regionsAndStates';
import { CITIES_DATA } from '../data/citiesData';
import { getWhatsAppGenericLink } from '../config/siteConfig';

export const AtendimentoPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Todas');

  const filteredRegions = selectedRegion === 'Todas'
    ? REGIONS_ORDER
    : REGIONS_ORDER.filter(r => r === selectedRegion);

  return (
    <div className="bg-white">
      <SeoHead
        title="Atendimento Nacional de Caçambas | Cobertura nas 27 UFs | Fortera"
        description="Aluguel de caçambas de entulho com atendimento nas 27 Unidades Federativas do Brasil. Encontre sua cidade ou solicite cotação para o seu estado."
        path="/atendimento/"
      />

      <Breadcrumbs items={[{ name: 'Atendimento Nacional' }]} />

      {/* Hero da Página */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Atendimento em Todo o Brasil
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Atendimento Nacional para Locação de Caçambas
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Atendemos obras residenciais, comerciais e industriais em todas as 27 Unidades Federativas. Acesse as páginas com orientações práticas de acesso ou inicie sua cotação diretamente com seu estado selecionado.
            </p>
          </div>
        </div>
      </section>

      <RegionalCoverage />

      {/* Cidades com Orientações */}
      <section className="py-12 bg-amber-50/50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-800">
                Orientações Locais
              </span>
              <h2 className="text-2xl font-black text-[#10263D] tracking-tight">
                Cidades com orientações práticas de acesso e modelos
              </h2>
            </div>
            <p className="text-xs text-slate-600 mt-2 md:mt-0">
              Orientações sobre estacionamento, vaga e particularidades de trânsito.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES_DATA.map((city) => (
              <a
                key={city.slug}
                href={`/aluguel-de-cacamba/${city.stateSlug}/${city.slug}/`}
                className="bg-white p-5 rounded-lg border border-slate-200 hover:border-[#FFC52D] shadow-sm hover:shadow transition-all group flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#FFC52D] bg-[#10263D] inline-block px-2 py-0.5 rounded mb-1">
                    {city.uf}
                  </div>
                  <h3 className="text-base font-black text-[#10263D] group-hover:text-amber-600 transition-colors">
                    {city.city} ({city.uf})
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ver orientações práticas de estacionamento e acesso
                  </p>
                </div>
                <div className="text-slate-400 group-hover:text-[#10263D] group-hover:translate-x-1 transition-all">
                  &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filtro por Região */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            <span className="text-xs font-bold uppercase text-slate-500 mr-2 flex-shrink-0">
              Filtrar Região:
            </span>
            {['Todas', ...REGIONS_ORDER].map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                className={`text-xs font-bold px-4 py-2 rounded-md transition-colors whitespace-nowrap focus-visible-ring cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-[#10263D] text-[#FFC52D]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Lista de Regiões e Estados */}
          <div className="space-y-12">
            {filteredRegions.map((regionName) => {
              const statesInRegion = BRAZILIAN_STATES.filter(s => s.region === regionName);
              const regionDesc = REGION_DETAILS[regionName] || '';

              return (
                <div key={regionName} className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
                  <div className="border-b border-slate-200 pb-4 mb-6">
                    <h3 className="text-2xl font-black text-[#10263D]">
                      Região {regionName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {regionDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {statesInRegion.map((st) => {
                      const citiesInState = CITIES_DATA.filter(c => c.uf === st.uf);

                      return (
                        <div 
                          key={st.uf}
                          className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between space-y-3"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-black bg-[#10263D] text-white px-2 py-0.5 rounded">
                                {st.uf}
                              </span>
                              <span className="text-xs text-slate-500">
                                {st.capital}
                              </span>
                            </div>
                            <h4 className="text-base font-bold text-[#10263D]">
                              {st.name}
                            </h4>

                            {citiesInState.length > 0 && (
                              <div className="mt-2 pt-2 border-t border-slate-100">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                  Cidades com orientações:
                                </span>
                                <div className="space-y-1">
                                  {citiesInState.map(city => (
                                    <a
                                      key={city.slug}
                                      href={`/aluguel-de-cacamba/${city.stateSlug}/${city.slug}/`}
                                      className="text-xs text-amber-700 hover:text-amber-900 hover:underline block font-medium"
                                    >
                                      &bull; {city.city}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="pt-2 border-t border-slate-100">
                            <a
                              href={`/orcamento/?uf=${st.uf}`}
                              className="text-xs font-bold text-[#10263D] hover:text-amber-600 inline-flex items-center gap-1"
                            >
                              <span>Cotar caçamba em {st.uf}</span>
                              <span>&rarr;</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-[#10263D]">
            Não encontrou sua cidade listada acima?
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Consulte disponibilidade e condições para seu endereço. Preencha seu estado e município no formulário de orçamento ou fale direto com a nossa equipe no WhatsApp.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href={getWhatsAppGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-base px-8 py-3.5 rounded-lg shadow-lg transition-transform active:scale-95 focus-visible-ring"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>Falar no WhatsApp Oficial</span>
            </a>
            <a
              href="/orcamento/"
              className="w-full sm:w-auto inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-extrabold text-base px-8 py-3.5 rounded-lg transition-transform active:scale-95 focus-visible-ring"
            >
              Iniciar Orçamento com Meu Município
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

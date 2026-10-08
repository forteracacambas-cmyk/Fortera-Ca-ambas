import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DUMPSTER_SIZES, SAFETY_RULES } from '../data/dumpsterSizes';
import { SITE_CONFIG } from '../config/siteConfig';

export const TamanhosPage: React.FC = () => {
  return (
    <div className="bg-white">
      <SeoHead
        title="Tamanhos de Caçamba de Entulho (3, 4 e 5 m³) | Fortera Caçambas"
        description="Conheça as capacidades nominais de 3m³, 4m³ e 5m³ para aluguel de caçamba. Exemplos de uso sob avaliação e limites sob consulta para seu endereço."
        path="/tamanhos-de-cacamba/"
      />

      <Breadcrumbs items={[{ name: 'Tamanhos de Caçamba' }]} />

      {/* Hero da Página */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Capacidades Nominais
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Tamanhos de Caçamba de Entulho
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Trabalhamos com as capacidades nominais de 3 m³, 4 m³ e 5 m³. O volume cúbico não determina o peso final: consulte dimensões, limites de carga e disponibilidade para seu endereço.
            </p>
          </div>
        </div>
      </section>

      {/* Introdução Técnica sobre Densidade */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-[#10263D]">
                Volume não determina peso: entenda a capacidade nominal
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As caçambas estacionárias metálicas têm sua capacidade informada em metros cúbicos (m³), que expressam o espaço interno do recipiente. No entanto, o fator crítico para a segurança do transporte e manobra é a <strong>densidade do material descartado</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Materiais como blocos de concreto, argamassa e terra de escavação são altamente densos e atingem os limites de peso e tração do caminhão poliguindaste muito antes de atingir a cubagem total. Já materiais leves, como caixarias secas e sobras de forros desmontados, demandam maior volume.
              </p>
              <div className="bg-amber-100/70 border-l-4 border-amber-500 p-4 rounded-r text-xs text-amber-900 font-medium">
                Consulte disponibilidade e condições para seu endereço: dimensões exatas, limites de carga do veículo e regras de recebimento de materiais como gesso e drywall são confirmados na proposta.
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md border-2 border-slate-300">
                <img
                  src={SITE_CONFIG.detailImage}
                  alt="Caçamba estacionária de entulho posicionada em reforma de imóvel"
                  className="w-full h-auto object-cover aspect-4/3"
                  width="600"
                  height="450"
                  loading="lazy"
                />
                <div className="p-3 bg-slate-900 text-white text-xs text-center">
                  Caçamba estacionária: carga sempre no nível da borda superior
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detalhamento dos 3 Modelos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {DUMPSTER_SIZES.map((size, index) => (
            <div 
              key={size.slug}
              id={size.slug}
              className="bg-slate-50 rounded-2xl border border-slate-300 overflow-hidden shadow-sm"
            >
              {/* Topo do Card */}
              <div className="bg-[#10263D] text-white p-6 sm:p-8 border-b-4 border-[#FFC52D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#FFC52D] uppercase tracking-wider block mb-1">
                    Capacidade #{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {size.name}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">{size.highlight}</p>
                </div>
                <div className="text-right sm:text-right flex-shrink-0">
                  <div className="text-4xl font-black text-[#FFC52D]">{size.volume}</div>
                  <div className="text-xs text-slate-300">Capacidade nominal</div>
                </div>
              </div>

              {/* Corpo com Grid de Informações */}
              <div className="p-6 sm:p-8 space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Capacidade e Cubagem */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                      Capacidade e Volume
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {size.capacityNotice}
                    </p>
                  </div>

                  {/* Peso e Dimensões sob Consulta */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                      Dimensões e Limites
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {size.weightNotice}
                    </p>
                  </div>

                  {/* Regras de Materiais */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                      Regras de Materiais
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {size.materialGuidelines}
                    </p>
                  </div>

                </div>

                {/* Exemplos de Uso sob Avaliação */}
                <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#10263D] mb-3">
                      Exemplos de uso sob avaliação:
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {size.recommendedFor.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#FFC52D] font-black text-base leading-none">&bull;</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={`/orcamento/?tamanho=${encodeURIComponent(size.volume)}`}
                      className="inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm px-6 py-3 rounded-lg shadow transition-colors focus-visible-ring"
                    >
                      Cotar Caçamba de {size.volume}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regras de Segurança */}
      <section className="py-14 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#10263D]">
              Segurança Operacional
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#10263D] mt-1">
              Diretrizes de Carregamento e Acesso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAFETY_RULES.map((rule, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="text-amber-600 font-black text-lg mb-2">
                  0{idx + 1}. {rule.title}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

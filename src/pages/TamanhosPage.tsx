import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DUMPSTER_SIZES, SAFETY_RULES, PRIMARY_DIMENSIONS_SOURCE } from '../data/dumpsterSizes';
import { SITE_CONFIG, getWhatsAppSizeLink } from '../config/siteConfig';

export const TamanhosPage: React.FC = () => {
  return (
    <div className="bg-white">
      <SeoHead
        title="Tamanhos de Caçamba de Entulho (3, 4, 5, 7 e 10 m³) | Fortera Caçambas"
        description="Conheça as capacidades nominais de 3m³, 4m³ e 5m³, além de 7m³ e 10m³ sob consulta. Dimensões C x L x A de referência e comparativo visual completo."
        path="/tamanhos-de-cacamba/"
      />

      <Breadcrumbs items={[{ name: 'Tamanhos de Caçamba' }]} />

      {/* Hero da Página */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Capacidades Nominais e Medidas
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Tamanhos de Caçamba de Entulho
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Trabalhamos com as capacidades nominais de 3 m³, 4 m³ e 5 m³, além de 7 m³ e 10 m³ sob consulta prévia. O volume cúbico não determina o peso final: consulte dimensões de referência, limites de carga e disponibilidade para seu endereço.
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
              <div className="rounded-xl overflow-hidden shadow-md border-2 border-slate-300 bg-white">
                <img
                  src={SITE_CONFIG.detailImage}
                  alt="Caçamba estacionária metálica Fortera para recolhimento de entulho em reforma"
                  className="w-full h-auto object-cover aspect-4/3"
                  width="1536"
                  height="1024"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: COMPARATIVO VISUAL E TABELA DE MEDIDAS (FONTE LAMACORS) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#10263D] px-3 py-1 rounded inline-block mb-3">
              Guia Comparativo de Medidas
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#10263D] tracking-tight">
              Comparativo de Capacidades e Dimensões
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Confira abaixo o comparativo visual e a tabela de medidas de referência (Comprimento × Largura × Altura em metros) para escolha do modelo adequado ao seu canteiro de obras.
            </p>
          </div>

          {/* Imagem do Comparativo Real Fortera */}
          <div className="rounded-2xl overflow-hidden border-2 border-slate-300 shadow-lg bg-slate-50">
            <img
              src={SITE_CONFIG.comparativeImage}
              alt="Comparativo de tamanhos de caçambas estacionárias Fortera: 3 m³, 4 m³, 5 m³, 7 m³ e 10 m³"
              width="1536"
              height="1024"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Tabela HTML Acessível de Medidas */}
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-sm text-slate-800">
                <caption className="p-4 text-left font-bold text-base text-[#10263D] bg-slate-100 border-b border-slate-300">
                  Tabela de Medidas de Referência (C × L × A em metros) — Caçambas Estacionárias
                </caption>
                <thead className="bg-[#10263D] text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="p-3.5 font-bold">Capacidade Nominal</th>
                    <th scope="col" className="p-3.5 font-bold">Comprimento (C)</th>
                    <th scope="col" className="p-3.5 font-bold">Largura (L)</th>
                    <th scope="col" className="p-3.5 font-bold">Altura (A)</th>
                    <th scope="col" className="p-3.5 font-bold">Medidas Totais (C × L × A)</th>
                    <th scope="col" className="p-3.5 font-bold">Status</th>
                    <th scope="col" className="p-3.5 font-bold">Indicação Típica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 font-extrabold text-[#10263D]">3 m³</th>
                    <td className="p-3.5">2,131 m</td>
                    <td className="p-3.5">1,790 m</td>
                    <td className="p-3.5">1,115 m</td>
                    <td className="p-3.5 font-mono text-xs font-semibold">2,131 × 1,790 × 1,115 m</td>
                    <td className="p-3.5">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Padrão
                      </span>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600">Alvenaria, azulejos e reformas pontuais compactas</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-amber-50/40">
                    <th scope="row" className="p-3.5 font-extrabold text-[#10263D]">4 m³ (Mais comum)</th>
                    <td className="p-3.5">2,568 m</td>
                    <td className="p-3.5">1,890 m</td>
                    <td className="p-3.5">1,208 m</td>
                    <td className="p-3.5 font-mono text-xs font-semibold">2,568 × 1,890 × 1,208 m</td>
                    <td className="p-3.5">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Padrão
                      </span>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600">Reformas residenciais e comerciais de médio porte</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 font-extrabold text-[#10263D]">5 m³</th>
                    <td className="p-3.5">2,714 m</td>
                    <td className="p-3.5">1,835 m</td>
                    <td className="p-3.5">1,407 m</td>
                    <td className="p-3.5 font-mono text-xs font-semibold">2,714 × 1,835 × 1,407 m</td>
                    <td className="p-3.5">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Padrão
                      </span>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600">Materiais volumosos, reformas amplas e descarte misto leve</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 font-extrabold text-[#10263D]">7 m³</th>
                    <td className="p-3.5">3,369 m</td>
                    <td className="p-3.5">1,853 m</td>
                    <td className="p-3.5">1,500 m</td>
                    <td className="p-3.5 font-mono text-xs font-semibold">3,369 × 1,853 × 1,500 m</td>
                    <td className="p-3.5">
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Sob Consulta
                      </span>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600">Grandes reformas e limpezas gerais; sem garantia prévia</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <th scope="row" className="p-3.5 font-extrabold text-[#10263D]">10 m³</th>
                    <td className="p-3.5">3,741 m</td>
                    <td className="p-3.5">1,933 m</td>
                    <td className="p-3.5">1,948 m</td>
                    <td className="p-3.5 font-mono text-xs font-semibold">3,741 × 1,933 × 1,948 m</td>
                    <td className="p-3.5">
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Sob Consulta
                      </span>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600">Grandes canteiros e entulho leve com plano de içamento</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-slate-50">
                    <th scope="row" className="p-3.5 font-extrabold text-slate-700">Mini / Sob Medida</th>
                    <td colSpan={3} className="p-3.5 text-center text-slate-500 italic">Sob avaliação técnica conforme projeto</td>
                    <td className="p-3.5 text-center text-slate-500 italic">Sob consulta</td>
                    <td className="p-3.5">
                      <span className="bg-slate-200 text-slate-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                        Sob Consulta
                      </span>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600">Necessidades específicas de acesso restrito</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Aviso Legal de Medidas e Link da Fonte Primária */}
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-300 text-xs text-slate-600 space-y-2">
              <p>
                <strong>Medidas de referência; modelo e disponibilidade confirmados no orçamento.</strong>{' '}
                Fonte primária dos dados dimensionais:{' '}
                <a
                  href={PRIMARY_DIMENSIONS_SOURCE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10263D] font-bold underline hover:text-amber-600"
                >
                  {PRIMARY_DIMENSIONS_SOURCE.name}
                </a>.
              </p>
              <p>
                As dimensões podem variar discretamente conforme o fabricante e as tolerâncias industriais de caldeiraria. Nunca afirmamos que medidas são universais nem que volume equivale diretamente ao peso final da carga transportada. Caçambas de 7 m³ e 10 m³ e modelos mini/personalizados são fornecidos exclusivamente sob consulta prévia sem garantia de disponibilidade.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Detalhamento dos Modelos */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-[#10263D]">
              Especificações Detalhadas por Capacidade
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Prazos flexíveis de locação: 1, 2, 3 e 7 dias (semanal). Consulte valores para seu bairro.
            </p>
          </div>

          {DUMPSTER_SIZES.map((size, index) => (
            <div 
              key={size.slug}
              id={size.slug}
              className="bg-white rounded-2xl border border-slate-300 overflow-hidden shadow-sm"
            >
              {/* Topo do Card */}
              <div className="bg-[#10263D] text-white p-6 sm:p-8 border-b-4 border-[#FFC52D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#FFC52D] uppercase tracking-wider block">
                      Capacidade #{index + 1}
                    </span>
                    {size.status === 'sob-consulta' && (
                      <span className="bg-amber-400 text-[#10263D] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                        Sob Consulta
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {size.name}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">{size.highlight}</p>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <div className="text-4xl font-black text-[#FFC52D]">{size.volume}</div>
                  <div className="text-xs text-slate-300">Capacidade nominal</div>
                </div>
              </div>

              {/* Corpo com Foto e Grid de Informações */}
              <div className="p-6 sm:p-8 space-y-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Foto Oficial da Caçamba Fortera */}
                  <div className="lg:col-span-4">
                    <div className="rounded-xl overflow-hidden shadow-md border-2 border-slate-300 bg-white group">
                      <img
                        src={size.image.src}
                        alt={size.image.alt}
                        width={size.image.width}
                        height={size.image.height}
                        loading="lazy"
                        className="w-full h-auto object-cover aspect-4/3"
                      />
                    </div>
                  </div>

                  {/* Informações Técnicas */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Dimensões de Referência */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                        Dimensões de Referência
                      </h4>
                      <p className="text-xs font-bold text-[#10263D] mb-1">
                        {size.dimensions.formatted}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {size.weightNotice}
                      </p>
                    </div>

                    {/* Capacidade e Volume */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                        Capacidade e Volume
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {size.capacityNotice}
                      </p>
                    </div>

                    {/* Regras de Materiais */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                        Regras de Materiais
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {size.materialGuidelines}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Exemplos de Uso sob Avaliação e Prazos */}
                <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h4 className="text-sm font-black uppercase tracking-wider text-[#10263D] mb-2">
                      Exemplos de uso sob avaliação:
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {size.recommendedFor.map((rec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#FFC52D] font-black leading-none">&bull;</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-xs text-slate-500">
                      Prazos disponíveis: <strong>7 dias (semanal destaque)</strong>, 3 dias, 2 dias e 1 dia (diária expressa).
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0 w-full sm:w-auto">
                    <a
                      href={getWhatsAppSizeLink(size.volume)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-sm px-5 py-3 rounded-xl shadow transition-transform active:scale-95 focus-visible-ring"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                      </svg>
                      <span>Pedir {size.volume} no WhatsApp</span>
                    </a>
                    <a
                      href={`/orcamento/?tamanho=${encodeURIComponent(size.volume)}`}
                      className="inline-block text-center bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm px-5 py-3 rounded-xl shadow transition-transform active:scale-95 focus-visible-ring"
                    >
                      Cotar no Formulário
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

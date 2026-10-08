import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { QuoteForm } from '../components/QuoteForm';
import { DUMPSTER_SIZES } from '../data/dumpsterSizes';
import { PRACTICAL_GUIDES } from '../data/guidesData';
import { CITIES_DATA } from '../data/citiesData';
import { SITE_CONFIG } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <SeoHead
        title="Fortera Caçambas | Aluguel de Caçambas de Entulho com Atendimento Nacional"
        description="Aluguel de caçambas estacionárias de entulho para obras, reformas e demolições em todo o Brasil. Sua obra avança. O entulho sai. Peça seu orçamento."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Fortera Caçambas',
          headline: 'Sua obra avança. O entulho sai.',
          description: 'Aluguel de caçambas estacionárias para obras e reformas com atendimento nacional.',
        }}
      />

      {/* HERO SECTION */}
      <section className="bg-[#10263D] text-white pt-10 pb-16 lg:py-20 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#1A3856] text-[#FFC52D] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md border border-[#FFC52D]/30">
                <span className="w-2 h-2 rounded-full bg-[#FFC52D]"></span>
                <span>Atendimento Nacional para Obras e Reformas</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Sua obra avança.<br />
                <span className="text-[#FFC52D]">O entulho sai.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
                Aluguel de caçambas estacionárias para obras, reformas e demolições. Logística ágil, pontualidade no atendimento e orientação para o descarte adequado do entulho da sua obra.
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/orcamento/"
                  className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-base sm:text-lg px-8 py-4 rounded-lg shadow-lg text-center transition-transform active:scale-95 focus-visible-ring"
                >
                  Solicitar Orçamento Agora
                </a>
                <a
                  href="/tamanhos-de-cacamba/"
                  className="bg-transparent hover:bg-[#1A3856] text-white font-bold text-base sm:text-lg px-6 py-4 rounded-lg border-2 border-slate-300 hover:border-white text-center transition-colors focus-visible-ring"
                >
                  Ver Tamanhos e Capacidades
                </a>
              </div>

              {/* Destaques Rápidos */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A3856] text-slate-300">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#FFC52D]">3, 4 e 5 m³</div>
                  <div className="text-xs sm:text-sm text-slate-300">Capacidades nominais</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">27 UFs</div>
                  <div className="text-xs sm:text-sm text-slate-300">Atendimento nacional</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">Orientação</div>
                  <div className="text-xs sm:text-sm text-slate-300">Para sua obra</div>
                </div>
              </div>

            </div>

            {/* Imagem Realista da Caçamba */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A3856] bg-[#0B1B2C]">
                <img
                  src={SITE_CONFIG.heroImage}
                  alt="Caçamba estacionária de entulho amarela posicionada na via pública durante reforma residencial"
                  className="w-full h-auto object-cover aspect-16/9 sm:aspect-4/3"
                  width="800"
                  height="600"
                  fetchPriority="high"
                />
                <div className="p-4 bg-[#0B1B2C] text-xs text-slate-300 border-t border-[#1A3856] flex items-center justify-between">
                  <span>Caçamba estacionária para reformas e obras</span>
                  <span className="text-[#FFC52D] font-semibold">Respeito ao nível da borda</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS OPERACIONAIS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#10263D] px-3 py-1 rounded">
              Compromisso Profissional
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#10263D] tracking-tight mt-3">
              Por que sua obra precisa da Fortera Caçambas
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              Organização e apoio prático para manter seu canteiro de obras limpo, seguro e com previsibilidade na retirada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 text-[#10263D] rounded-lg flex items-center justify-center font-black text-xl mb-6">
                <svg className="w-6 h-6 text-[#10263D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#10263D] mb-3">
                Pontualidade e Previsibilidade
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Alinhamos datas e horários de entrega e recolhimento de acordo com as particularidades de trânsito e acesso da sua via, mantendo o cronograma da sua reforma em dia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 text-[#10263D] rounded-lg flex items-center justify-center font-black text-xl mb-6">
                <svg className="w-6 h-6 text-[#10263D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#10263D] mb-3">
                Orientação para sua Obra
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Condições e destinação dos resíduos confirmadas no orçamento. Informamos os materiais aceitos e esclarecemos regras de separação para cada tipo de reforma.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 text-[#10263D] rounded-lg flex items-center justify-center font-black text-xl mb-6">
                <svg className="w-6 h-6 text-[#10263D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#10263D] mb-3">
                Atendimento Nacional
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consulte disponibilidade e condições para seu endereço. Atendemos desde reformas pontuais de banheiros até obras comerciais amplas nas 27 UFs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO DE TAMANHOS DE CAÇAMBA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Modelos Disponíveis
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#10263D] tracking-tight mt-1">
                Tamanhos de Caçamba Estacionária
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-xl">
                Capacidades nominais de 3, 4 e 5 m³. O volume cúbico não determina o peso final: consulte dimensões e limites de carga para seu endereço.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="/tamanhos-de-cacamba/" 
                className="text-[#10263D] font-bold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                <span>Ver especificações e orientações completas</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((size) => (
              <div 
                key={size.slug}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:border-[#FFC52D] transition-colors"
              >
                <div className="bg-[#10263D] text-white p-6 border-b-4 border-[#FFC52D]">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#FFC52D]">{size.volume}</span>
                    <span className="text-xs font-semibold bg-[#1A3856] text-slate-300 px-2.5 py-1 rounded">
                      Nominal
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 text-white">{size.name}</h3>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-3">
                      {size.highlight}
                    </p>

                    <div className="text-xs text-slate-600 space-y-1.5 mb-4 bg-white p-3 rounded border border-slate-200">
                      <div>{size.capacityNotice}</div>
                    </div>

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Exemplos de uso sob avaliação:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      {size.recommendedFor.slice(0, 3).map((rec, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#FFC52D] font-black">&bull;</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <a
                      href={`/orcamento/?tamanho=${encodeURIComponent(size.volume)}`}
                      className="block w-full text-center bg-[#10263D] hover:bg-[#1A3856] text-white font-bold text-sm py-2.5 px-4 rounded transition-colors focus-visible-ring"
                    >
                      Cotar Caçamba de {size.volume}
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border-l-4 border-[#FFC52D] p-4 rounded-r-lg text-xs text-slate-700">
            <strong>Aviso de segurança:</strong> Por segurança viária, a carga nunca deve ultrapassar a borda metálica superior. Dimensões e limites de peso variam sob consulta conforme a base de atendimento.
          </div>

        </div>
      </section>

      {/* ENCONTRE ATENDIMENTO NA SUA CIDADE */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded">
              Abrangência Nacional
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              Encontre atendimento na sua cidade
            </h2>
            <p className="text-slate-300 text-base mt-2">
              Consulte orientações práticas de acesso, estacionamento na via e modelos indicados para sua localidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES_DATA.map((city) => (
              <a
                key={city.slug}
                href={`/aluguel-de-cacamba/${city.stateSlug}/${city.slug}/`}
                className="bg-[#10263D] hover:bg-[#1A3856] p-6 rounded-xl border border-slate-700 hover:border-[#FFC52D] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black bg-[#FFC52D] text-[#10263D] px-2 py-0.5 rounded">
                      {city.uf}
                    </span>
                    <span className="text-xs text-slate-400 group-hover:text-[#FFC52D] transition-colors">
                      Ver Orientações &rarr;
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFC52D] transition-colors">
                    {city.city} ({city.uf})
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {city.localContext.overview}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Caçambas 3, 4 e 5 m³</span>
                  <span className="font-semibold text-white">Consulte Condições</span>
                </div>
              </a>
            ))}
          </div>

          {/* Chamada para o Atendimento nas 27 UFs */}
          <div className="mt-12 text-center bg-[#0B1B2C] p-8 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">
              Sua obra está em outro município ou estado?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
              A Fortera Caçambas atende todas as 27 Unidades Federativas do Brasil. Consulte atendimento no seu estado ou solicite uma cotação indicando sua cidade.
            </p>
            <a
              href="/atendimento/"
              className="inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-lg transition-transform active:scale-95"
            >
              Consultar Atendimento nas 27 UFs
            </a>
          </div>

        </div>
      </section>

      {/* GUIAS DE OBRA EM DESTAQUE */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Orientações Úteis
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#10263D] tracking-tight mt-1">
                Guias Práticos para sua Obra
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-xl">
                Conteúdo direto e orientativo para planejar a locação sem dores de cabeça no canteiro.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="/guias/" 
                className="text-[#10263D] font-bold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                <span>Ver todos os guias</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRACTICAL_GUIDES.map((guide) => (
              <article 
                key={guide.slug}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-bold text-[#10263D] bg-slate-100 px-2.5 py-1 rounded">
                      {guide.category}
                    </span>
                    <span>{guide.readTime}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#10263D] leading-snug mb-3">
                    <a href={`/guias/${guide.slug}/`} className="hover:text-amber-600 transition-colors">
                      {guide.title}
                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`/guias/${guide.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10263D] hover:text-amber-600 transition-colors"
                  >
                    <span>Ler guia completo</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FORMULÁRIO DE ORÇAMENTO DA HOME */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <QuoteForm />
        </div>
      </section>

    </div>
  );
};

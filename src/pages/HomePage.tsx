import { RegionalCoverage } from '../components/RegionalCoverage';
import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { QuoteForm } from '../components/QuoteForm';
import { DUMPSTER_SIZES } from '../data/dumpsterSizes';
import { PRACTICAL_GUIDES } from '../data/guidesData';
import { SERVICES_DATA } from '../data/servicesData';
import { CITIES_DATA } from '../data/citiesData';
import { 
  SITE_CONFIG, 
  SITE_IMAGES, 
  RENTAL_PERIODS, 
  getWhatsAppGenericLink, 
  getWhatsAppSizeLink, 
  getWhatsAppPeriodLink 
} from '../config/siteConfig';

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

      {/* HERO SECTION EDITORIAL COM FOTO REALISTA */}
      <section className="bg-[#10263D] text-white pt-10 pb-16 lg:py-20 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Hero */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#1A3856] text-[#FFC52D] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-md border border-[#FFC52D]/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFC52D]"></span>
                <span>Atendimento Nacional para Obras, Reformas e Demolições &bull; Brasil</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Sua obra avança.<br />
                <span className="text-[#FFC52D]">O entulho sai.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
                Aluguel de caçambas de entulho por dias, semanas ou meses. A Fortera conecta sua obra a empresas parceiras locais em todo o Brasil. Informe cidade e bairro para confirmar disponibilidade, entrega e orçamento.
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a
                  href={getWhatsAppGenericLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-base sm:text-lg px-7 py-4 rounded-xl shadow-xl text-center transition-transform active:scale-95 focus-visible-ring flex items-center justify-center gap-2.5"
                >
                  <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                  </svg>
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>
                <a
                  href="/orcamento/"
                  className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-base sm:text-lg px-6 py-4 rounded-xl shadow-lg text-center transition-transform active:scale-95 focus-visible-ring"
                >
                  Preencher Formulário
                </a>
                <a
                  href="/tamanhos-de-cacamba/"
                  className="bg-transparent hover:bg-[#1A3856] text-white font-bold text-base sm:text-lg px-5 py-4 rounded-xl border-2 border-slate-300 hover:border-white text-center transition-colors focus-visible-ring"
                >
                  Tamanhos e Prazos
                </a>
              </div>

              {/* Destaques Rápidos */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A3856] text-slate-300">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#FFC52D]">3, 4 e 5 m³</div>
                  <div className="text-xs sm:text-sm text-slate-300">Capacidades nominais</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">7 Dias</div>
                  <div className="text-xs sm:text-sm text-slate-300">Plano semanal destaque</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">27 UFs</div>
                  <div className="text-xs sm:text-sm text-slate-300">Atendimento nacional</div>
                </div>
              </div>

            </div>

            {/* Imagem Realista da Caçamba Hero */}
            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A3856] bg-[#0B1B2C]">
                <img
                  src={SITE_IMAGES.hero.src}
                  alt={SITE_IMAGES.hero.alt}
                  width={SITE_IMAGES.hero.width}
                  height={SITE_IMAGES.hero.height}
                  fetchPriority="high"
                  className="w-full h-auto object-cover aspect-16/9 sm:aspect-4/3"
                />
                <div className="p-3.5 bg-[#0B1B2C] text-xs text-slate-300 border-t border-[#1A3856]">
                  <span>Caçamba estacionária Fortera para obras e reformas</span>
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
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-[#10263D] rounded-xl flex items-center justify-center font-black text-xl mb-4">
                <svg className="w-6 h-6 text-[#10263D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#10263D]">
                Pontualidade e Previsibilidade
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Alinhamos datas e horários de entrega e recolhimento de acordo com as particularidades de trânsito e acesso da sua via, mantendo o cronograma da sua reforma em dia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-[#10263D] rounded-xl flex items-center justify-center font-black text-xl mb-4">
                <svg className="w-6 h-6 text-[#10263D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#10263D]">
                Orientação para sua Obra
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Condições e destinação dos resíduos confirmadas no orçamento. Informamos os materiais aceitos e esclarecemos regras de separação para cada tipo de reforma.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-[#10263D] rounded-xl flex items-center justify-center font-black text-xl mb-4">
                <svg className="w-6 h-6 text-[#10263D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#10263D]">
                Atendimento Nacional
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consulte disponibilidade e condições para seu endereço. Atendemos desde reformas pontuais de banheiros até obras comerciais amplas nas 27 UFs.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO DE TAMANHOS DE CAÇAMBA COM FOTOS */}
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
                Capacidades nominais de 3, 4 e 5 m³, além de 7 e 10 m³ sob consulta. O volume cúbico não determina o peso final: consulte dimensões e limites de carga para seu endereço.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="/tamanhos-de-cacamba/" 
                className="text-[#10263D] font-bold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                <span>Ver especificações e prazos completos</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DUMPSTER_SIZES.map((size) => (
              <div 
                key={size.slug}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-[#FFC52D] hover:shadow-xl transition-all group"
              >
                {/* Foto da Caçamba */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={size.image.src}
                    alt={size.image.alt}
                    width={size.image.width}
                    height={size.image.height}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#10263D]/90 text-[#FFC52D] text-xs font-black px-2.5 py-1 rounded backdrop-blur-sm">
                    {size.volume} Nominal
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#10263D] mb-2">{size.name}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-3">
                      {size.highlight}
                    </p>

                    <div className="text-xs text-slate-600 space-y-1.5 mb-4 bg-white p-3 rounded-lg border border-slate-200">
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

                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <a
                      href={getWhatsAppSizeLink(size.volume)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs py-2.5 px-3 rounded-lg transition-colors focus-visible-ring flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                      </svg>
                      <span>Pedir {size.volume} no WhatsApp</span>
                    </a>
                    <a
                      href={`/orcamento/?tamanho=${encodeURIComponent(size.volume)}`}
                      className="block w-full text-center bg-[#10263D] hover:bg-[#1A3856] text-[#FFC52D] font-bold text-xs py-2 px-3 rounded-lg transition-colors focus-visible-ring"
                    >
                      Cotar no Formulário
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border-l-4 border-[#FFC52D] p-4 rounded-r-xl text-xs text-slate-700">
            <strong>Aviso de segurança:</strong> Por segurança viária, a carga nunca deve ultrapassar a borda metálica superior. Dimensões e limites de peso variam sob consulta conforme a base de atendimento.
          </div>

        </div>
      </section>

      {/* SEÇÃO VISUAL DE ENTREGA E COLETA COM POLIGUINDASTE */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block">
                Logística de Entrega e Retirada
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Operação Segura com Caminhão Poliguindaste
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                As caçambas estacionárias da Fortera são posicionadas e recolhidas por veículos especializados dotados de braços hidráulicos articulados. O posicionamento é planejado conforme o acesso e as regras locais, com condições acordadas no orçamento.
              </p>

              <div className="space-y-4">
                <div className="bg-[#10263D] p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFC52D] text-[#10263D] font-black flex items-center justify-center flex-shrink-0 text-sm">
                    &check;
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Posicionamento Rente ao Meio-Fio</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Caçamba alinhada na guia ou dentro do lote da obra, desimpedindo a circulação de pedestres.</p>
                  </div>
                </div>

                <div className="bg-[#10263D] p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFC52D] text-[#10263D] font-black flex items-center justify-center flex-shrink-0 text-sm">
                    &check;
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Prazos de 1, 2, 3 ou 7 Dias (Semanal Destaque)</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Flexibilidade para o ritmo da sua equipe: o plano semanal oferece 7 dias de permanência, com valores e condições acordados no orçamento.</p>
                  </div>
                </div>

                <div className="bg-[#10263D] p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFC52D] text-[#10263D] font-black flex items-center justify-center flex-shrink-0 text-sm">
                    &check;
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Destinação Consciente de Resíduos</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Condições e destinação dos resíduos confirmadas no orçamento conforme a categoria dos materiais da sua obra.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppGenericLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow transition-transform active:scale-95"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                  </svg>
                  <span>Pedir Entrega no WhatsApp</span>
                </a>
                <a
                  href="/como-funciona/"
                  className="inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm sm:text-base px-6 py-3.5 rounded-xl shadow transition-transform active:scale-95"
                >
                  Conhecer o Passo a Passo Completo
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-950">
                <img
                  src={SITE_IMAGES.delivery.src}
                  alt={SITE_IMAGES.delivery.alt}
                  width={SITE_IMAGES.delivery.width}
                  height={SITE_IMAGES.delivery.height}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-16/9"
                />
                <div className="p-3 bg-slate-950 text-slate-400 text-xs">
                  <span>Caçamba Fortera para descarte organizado de entulho</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE PRAZOS DE LOCAÇÃO COM DESTAQUE PARA 7 DIAS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded">
              Prazos de Permanência
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#10263D] tracking-tight mt-2">
              Opções de Prazos de Locação
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Alugue por 1, 2, 3, 7 ou 15 dias, por 1, 2, 3 meses ou por um prazo maior. Se a caçamba encher e a obra continuar, você tem 1 troca por semana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RENTAL_PERIODS.map((period) => (
              <div
                key={period.id}
                className={`rounded-2xl p-6 flex flex-col justify-between border-2 transition-all ${
                  period.isPopular
                    ? 'bg-white border-[#10263D] shadow-xl relative'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  {period.isPopular && (
                    <span className="inline-block bg-[#FFC52D] text-[#10263D] text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3">
                      Plano Semanal
                    </span>
                  )}
                  <div className="text-2xl font-black text-[#10263D] mb-1">
                    {period.shortLabel}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {period.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-500 mb-1">
                    Valor: <span className="text-[#10263D] font-extrabold">Consultar valor</span>
                  </div>
                  <a
                    href={getWhatsAppPeriodLink(period.shortLabel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 focus-visible-ring"
                  >
                    <svg className="w-3.5 h-3.5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                    </svg>
                    <span>Pedir {period.shortLabel} no Whats</span>
                  </a>
                  <a
                    href={`/orcamento/?prazo=${period.id}`}
                    className={`block w-full text-center text-xs font-bold py-1.5 px-3 rounded-lg transition-colors ${
                      period.isPopular
                        ? 'bg-[#10263D] hover:bg-[#1A3856] text-[#FFC52D]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    Cotar no Formulário
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/guias/locacao-semanal-versus-diaria/"
              className="text-xs sm:text-sm font-bold text-[#10263D] hover:text-amber-600 underline"
            >
              Leia nosso guia: Aluguel semanal de 7 dias vs diárias de 1, 2 ou 3 dias &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS ESPECIALIZADOS COM FOTOS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Segmentos de Atendimento
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#10263D] tracking-tight mt-1">
                Serviços para Cada Tipo de Obra
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-xl">
                Soluções dimensionadas para o perfil de geração de resíduos:
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="/servicos/" 
                className="text-[#10263D] font-bold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                <span>Conhecer todos os serviços</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <article 
                key={srv.slug}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FFC52D] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                    <img
                      src={srv.image.src}
                      alt={srv.image.alt}
                      width={srv.image.width}
                      height={srv.image.height}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#10263D]/90 text-[#FFC52D] text-xs font-black px-2.5 py-1 rounded backdrop-blur-sm">
                      {srv.shortTitle}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#10263D] leading-snug mb-2 group-hover:text-amber-600 transition-colors">
                      <a href={`/servicos/${srv.slug}/`}>
                        {srv.title}
                      </a>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {srv.intro}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`/servicos/${srv.slug}/`}
                    className="inline-flex items-center justify-center w-full bg-[#10263D] hover:bg-[#1A3856] text-[#FFC52D] font-bold text-xs py-3 px-4 rounded-xl transition-colors focus-visible-ring"
                  >
                    <span>Ver detalhes do serviço</span>
                    <span className="ml-2">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <RegionalCoverage />

      {/* GUIAS DE OBRA EM DESTAQUE COM FOTOS */}
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
                Conteúdo direto e orientativo para planejar a locação sem dores de cabeça no canteiro:
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICAL_GUIDES.map((guide) => (
              <article 
                key={guide.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-[#FFC52D] transition-all group"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                    <img
                      src={guide.image.src}
                      alt={guide.image.alt}
                      width={guide.image.width}
                      height={guide.image.height}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#10263D]/90 text-[#FFC52D] text-[10px] font-bold px-2 py-0.5 rounded">
                      {guide.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] text-slate-400 block mb-1">{guide.readTime}</span>
                    <h3 className="text-base font-bold text-[#10263D] leading-snug mb-2 group-hover:text-amber-600 transition-colors">
                      <a href={`/guias/${guide.slug}/`}>
                        {guide.title}
                      </a>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
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

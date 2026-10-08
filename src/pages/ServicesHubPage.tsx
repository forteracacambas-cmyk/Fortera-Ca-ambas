import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES_DATA } from '../data/servicesData';
import { SITE_IMAGES, getWhatsAppGenericLink } from '../config/siteConfig';

export const ServicesHubPage: React.FC = () => {
  const whatsappHref = getWhatsAppGenericLink();
  return (
    <div className="bg-white">
      <SeoHead
        title="Serviços de Aluguel de Caçamba para Obras e Reformas | Fortera"
        description="Soluções de locação de caçambas estacionárias para reformas residenciais, canteiros de obras civis e pequenas demolições em todo o Brasil."
        path="/servicos/"
      />

      <Breadcrumbs items={[{ name: 'Serviços' }]} />

      {/* Hero */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Soluções Especializadas
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Serviços de Aluguel de Caçamba de Entulho
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Atendimento direcionado para as necessidades específicas da sua obra: desde reformas residenciais em apartamentos até canteiros de construções comerciais e pequenas demolições de alvenaria.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-sm sm:text-base px-6 py-3 rounded-lg shadow-lg transition-transform active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                </svg>
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <a
                href="/orcamento/"
                className="inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm sm:text-base px-6 py-3 rounded-lg shadow transition-transform active:scale-95"
              >
                Preencher Formulário
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Serviços com Imagens Reais de Caçambas */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-[#10263D] tracking-tight">
              Escolha a Solução Ideal para o seu Tipo de Obra
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Cada tipo de intervenção gera resíduos com pesos, volumes e prazos distintos. Veja como orientamos sua contratação:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <article 
                key={srv.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FFC52D] transition-all flex flex-col justify-between group"
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
                    <h3 className="text-xl font-black text-[#10263D] leading-snug mb-3 group-hover:text-amber-600 transition-colors">
                      <a href={`/servicos/${srv.slug}/`}>
                        {srv.title}
                      </a>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {srv.intro}
                    </p>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700 space-y-1">
                      <div><strong className="text-[#10263D]">Tamanhos indicados:</strong> {srv.recommendedSizes.join(', ')}</div>
                      <div><strong className="text-[#10263D]">Prazo sugerido:</strong> {srv.recommendedPeriod}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`/servicos/${srv.slug}/`}
                    className="inline-flex items-center justify-center w-full bg-[#10263D] hover:bg-[#1A3856] text-[#FFC52D] font-bold text-sm py-3 px-4 rounded-lg transition-colors focus-visible-ring"
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

      {/* Seção Visual de Entrega e Coleta */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded">
                Logística em Ação
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#10263D] tracking-tight leading-tight">
                Como Funciona a Entrega e Coleta por Poliguindaste
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                A colocação e retirada das caçambas estacionárias é realizada por caminhões poliguindaste equipados com braços hidráulicos articulados e correntes de aço reforçadas.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10263D] text-[#FFC52D] font-black flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10263D] text-sm sm:text-base">Aproximação e Alinhamento</h4>
                    <p className="text-xs sm:text-sm text-slate-600">O caminhão manobra de ré na vaga reservada junto à guia da calçada ou no acesso do canteiro.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10263D] text-[#FFC52D] font-black flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10263D] text-sm sm:text-base">Descida Firme no Solo</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Os braços hidráulicos descem a caçamba suavemente, apoiando as sapatas de aço no pavimento com estabilidade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10263D] text-[#FFC52D] font-black flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#10263D] text-sm sm:text-base">Içamento Seguro na Retirada</h4>
                    <p className="text-xs sm:text-sm text-slate-600">No término do prazo contratado, as correntes são travadas nos pinos laterais da caçamba e a carga nivelada é içada com segurança.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/orcamento/"
                  className="inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm sm:text-base px-6 py-3.5 rounded-lg shadow transition-transform active:scale-95"
                >
                  Solicitar Cotação para sua Obra
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200 bg-slate-900">
                <img
                  src={SITE_IMAGES.delivery.src}
                  alt={SITE_IMAGES.delivery.alt}
                  width={SITE_IMAGES.delivery.width}
                  height={SITE_IMAGES.delivery.height}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-16/9"
                />
                <div className="p-4 bg-slate-900 text-white text-xs">
                  <span>Caminhão poliguindaste operando em rua residencial para descarte de entulho</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

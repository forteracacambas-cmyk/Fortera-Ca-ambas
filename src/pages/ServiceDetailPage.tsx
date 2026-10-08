import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { getServiceBySlug, ServiceItem, SERVICES_DATA } from '../data/servicesData';
import { NotFoundPage } from './NotFoundPage';
import { getWhatsAppServiceLink } from '../config/siteConfig';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const service: ServiceItem | undefined = getServiceBySlug(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const otherServices = SERVICES_DATA.filter(s => s.slug !== slug);

  return (
    <div className="bg-white">
      <SeoHead
        title={`${service.title} | Fortera Caçambas`}
        description={service.metaDescription}
        path={`/servicos/${service.slug}/`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.metaDescription,
          provider: {
            '@type': 'Organization',
            name: 'Fortera Caçambas',
          },
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Serviços', href: '/servicos/' },
          { name: service.shortTitle },
        ]}
      />

      {/* Hero do Serviço com Imagem Editorial */}
      <section className="bg-[#10263D] text-white py-12 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block">
                Serviço Especializado
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {service.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {service.intro}
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <a
                  href={getWhatsAppServiceLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-lg transition-transform active:scale-95 focus-visible-ring flex items-center gap-2"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                  </svg>
                  <span>Pedir no WhatsApp para {service.shortTitle}</span>
                </a>
                <a
                  href="#formulario"
                  className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm sm:text-base px-6 py-3.5 rounded-lg shadow transition-transform active:scale-95 focus-visible-ring"
                >
                  Formulário de Cotação
                </a>
                <a
                  href="/tamanhos-de-cacamba/"
                  className="bg-transparent hover:bg-[#1A3856] text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-lg border border-slate-300 transition-colors"
                >
                  Ver Tamanhos
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A3856] bg-slate-900">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  loading="eager"
                  className="w-full h-auto object-cover aspect-4/3"
                />
                <div className="p-3 bg-slate-950 text-slate-300 text-xs text-center">
                  {service.image.alt}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pontos Críticos de Atenção */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Orientações Técnicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#10263D] tracking-tight mt-1">
              O que Observar na Contratação para este Tipo de Obra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.keyPoints.map((point, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-black flex items-center justify-center text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#10263D]">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Destaque de Prazos e Tamanhos */}
          <div className="mt-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Recomendações
              </span>
              <h3 className="text-xl font-black text-[#10263D] mt-2">
                Tamanhos e Prazos Mais Frequentes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Nossa equipe sugere as melhores opções de acordo com a cubagem e o fluxo da sua obra:
              </p>
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-5 rounded-xl border border-slate-100">
              <div><strong className="text-[#10263D]">Tamanhos:</strong> {service.recommendedSizes.join(' e ')}</div>
              <div><strong className="text-[#10263D]">Prazo sugerido:</strong> {service.recommendedPeriod}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Passo a Passo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#10263D] tracking-tight">
              Como Funciona o Pedido
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.steps.map((st) => (
              <div key={st.step} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
                <span className="text-3xl font-black text-[#FFC52D]">0{st.step}</span>
                <h3 className="text-base font-bold text-[#10263D]">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-[#10263D] mb-8 text-center">
            Dúvidas Frequentes sobre {service.shortTitle}
          </h2>
          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200">
                <h3 className="text-base font-bold text-[#10263D] mb-1.5">{item.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento Embutido */}
      <section id="formulario" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#10263D]">
              Solicitar Cotação para {service.shortTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Preencha sua localidade e dados da obra para receber a proposta comercial sem compromisso.
            </p>
          </div>
          <QuoteForm defaultPeriod="7-dias" />
        </div>
      </section>

      {/* Outros Serviços */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#10263D]">Conheça outros serviços especializados</h3>
            <a href="/servicos/" className="text-xs font-bold text-[#10263D] hover:underline">Ver todos &rarr;</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherServices.map(os => (
              <a
                key={os.slug}
                href={`/servicos/${os.slug}/`}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-[#FFC52D] flex items-center justify-between group transition-colors"
              >
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Serviço</span>
                  <h4 className="text-base font-bold text-[#10263D] group-hover:text-amber-600 transition-colors">
                    {os.title}
                  </h4>
                </div>
                <span className="text-[#10263D] font-bold text-lg">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

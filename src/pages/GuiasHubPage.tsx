import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PRACTICAL_GUIDES } from '../data/guidesData';

export const GuiasHubPage: React.FC = () => {
  return (
    <div className="bg-white">
      <SeoHead
        title="Guias Práticos sobre Aluguel de Caçamba de Entulho | Fortera"
        description="Aprenda a escolher o tamanho ideal de caçamba, saiba quais materiais são permitidos por lei e como preparar a vaga para a entrega do poliguindaste."
        path="/guias/"
      />

      <Breadcrumbs items={[{ name: 'Guias Práticos' }]} />

      {/* Hero */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Central de Conhecimento
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Guias Práticos para sua Obra
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Orientações técnicas e práticas sobre logística de descarte, cálculo de empolamento de entulho, materiais permitidos e preparação de acesso para caminhões poliguindaste.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Guias */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <div className="absolute top-3 left-3 bg-[#10263D]/90 text-[#FFC52D] text-xs font-black px-2.5 py-1 rounded backdrop-blur-sm">
                      {guide.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
                        {guide.lastUpdated}
                      </span>
                      <span>{guide.readTime}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-[#10263D] leading-snug mb-3 group-hover:text-amber-600 transition-colors">
                      <a href={`/guias/${guide.slug}/`}>
                        {guide.title}
                      </a>
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {guide.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={`/guias/${guide.slug}/`}
                    className="inline-flex items-center justify-center w-full bg-[#10263D] hover:bg-[#1A3856] text-[#FFC52D] font-bold text-sm py-3 px-4 rounded-xl transition-colors focus-visible-ring"
                  >
                    <span>Ler Guia Completo</span>
                    <span className="ml-2">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Banner de Ajuda */}
          <div className="mt-16 bg-white p-8 rounded-2xl border border-slate-200 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#10263D]">
              Ainda tem dúvidas sobre o dimensionamento do entulho?
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Nossa equipe orienta você na escolha do tamanho e verifica a viabilidade de estacionamento na sua via.
            </p>
            <div className="mt-6">
              <a
                href="/orcamento/"
                className="inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm px-6 py-3 rounded-lg shadow transition-colors"
              >
                Solicitar Orientação e Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

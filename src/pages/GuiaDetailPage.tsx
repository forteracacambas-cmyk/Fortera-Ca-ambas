import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PRACTICAL_GUIDES, GuideItem } from '../data/guidesData';
import { NotFoundPage } from './NotFoundPage';

interface GuiaDetailPageProps {
  slug: string;
}

export const GuiaDetailPage: React.FC<GuiaDetailPageProps> = ({ slug }) => {
  const guide: GuideItem | undefined = PRACTICAL_GUIDES.find(g => g.slug === slug);

  if (!guide) {
    return <NotFoundPage />;
  }

  const otherGuides = PRACTICAL_GUIDES.filter(g => g.slug !== slug);

  return (
    <div className="bg-white">
      <SeoHead
        title={`${guide.title} | Guia Fortera Caçambas`}
        description={guide.description}
        path={`/guias/${guide.slug}/`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.description,
          dateModified: '2026-10-01',
          author: {
            '@type': 'Organization',
            name: 'Fortera Caçambas',
          },
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Guias Práticos', href: '/guias/' },
          { name: guide.shortTitle },
        ]}
      />

      {/* Hero do Guia */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <header className="mb-10 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="font-bold text-[#10263D] bg-amber-100 px-2.5 py-1 rounded">
                {guide.category}
              </span>
              <span>&bull;</span>
              <span>{guide.readTime}</span>
              <span>&bull;</span>
              <span>{guide.lastUpdated}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10263D] tracking-tight leading-tight mb-6">
              {guide.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal bg-slate-50 p-6 rounded-xl border-l-4 border-[#FFC52D]">
              {guide.intro}
            </p>
          </header>

          {/* Seções de Conteúdo */}
          <div className="space-y-12 text-slate-800 leading-relaxed text-base sm:text-lg">
            {guide.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#10263D] tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.tips && section.tips.length > 0 && (
                  <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xl space-y-2 my-4">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-900 block">
                      Dica Técnica da Fortera:
                    </span>
                    <ul className="text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                      {section.tips.map((tip, tIdx) => (
                        <li key={tIdx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Checklist Prático */}
            {guide.checklist && guide.checklist.length > 0 && (
              <div className="bg-[#10263D] text-white p-6 sm:p-8 rounded-2xl border-4 border-[#FFC52D] my-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#FFC52D]"></span>
                  <h3 className="text-xl font-black text-white">
                    Checklist Prático para Executar na Obra
                  </h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-slate-200">
                  {guide.checklist.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3">
                      <span className="text-[#FFC52D] font-black text-lg leading-none">&check;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ do Guia */}
            {guide.faq && guide.faq.length > 0 && (
              <section className="pt-6 border-t border-slate-200 space-y-6">
                <h3 className="text-2xl font-black text-[#10263D]">
                  Perguntas Frequentes sobre este tema
                </h3>
                <div className="space-y-4">
                  {guide.faq.map((item, fIdx) => (
                    <div key={fIdx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="text-base font-bold text-[#10263D] mb-2">
                        {item.question}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* CTA de Orçamento no Fim do Artigo */}
          <div className="mt-14 p-8 bg-amber-50 rounded-2xl border border-amber-300 text-center">
            <h3 className="text-2xl font-black text-[#10263D]">
              Pronto para alugar a caçamba para sua obra?
            </h3>
            <p className="text-sm sm:text-base text-slate-700 mt-2 max-w-xl mx-auto">
              Garanta pontualidade e descarte legal em qualquer cidade do país com a Fortera Caçambas.
            </p>
            <div className="mt-6">
              <a
                href="/orcamento/"
                className="inline-block bg-[#10263D] hover:bg-[#1A3856] text-[#FFC52D] font-black text-base px-8 py-3.5 rounded-lg shadow-md transition-colors focus-visible-ring"
              >
                Solicitar Cotação Agora &rarr;
              </a>
            </div>
          </div>

          {/* Outros Guias Relacionados */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-black text-[#10263D] mb-6">
              Veja também outros guias práticos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherGuides.map(og => (
                <a
                  key={og.slug}
                  href={`/guias/${og.slug}/`}
                  className="p-5 rounded-xl border border-slate-200 hover:border-[#FFC52D] bg-slate-50 hover:bg-white transition-all group block"
                >
                  <span className="text-xs font-bold text-slate-500 uppercase">
                    {og.category}
                  </span>
                  <h4 className="text-base font-bold text-[#10263D] group-hover:text-amber-600 mt-1 transition-colors">
                    {og.title}
                  </h4>
                  <span className="text-xs text-slate-400 mt-2 block font-medium">
                    Ler artigo &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </article>

    </div>
  );
};

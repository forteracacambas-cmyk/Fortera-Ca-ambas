import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CITIES_DATA } from '../data/citiesData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-white min-h-[70vh] flex flex-col justify-between">
      <div>
        <SeoHead
          title="Página Não Encontrada (404) | Fortera Caçambas"
          description="A página que você tentou acessar não existe ou foi alterada. Acesse o site da Fortera Caçambas ou solicite um orçamento."
          path="/404"
        />

        <Breadcrumbs items={[{ name: '404 - Página Não Encontrada' }]} />

        <section className="py-16 sm:py-24 text-center px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded">
              Erro 404
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#10263D] tracking-tight">
              Página Não Encontrada
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              O link que você seguiu pode estar desatualizado ou o endereço foi digitado incorretamente. Utilize os atalhos abaixo para navegar:
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="/"
                className="bg-[#10263D] hover:bg-[#1A3856] text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition-colors"
              >
                Voltar à Página Inicial
              </a>
              <a
                href="/orcamento/"
                className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-sm px-6 py-3 rounded-lg shadow transition-colors"
              >
                Solicitar Orçamento
              </a>
              <a
                href="/atendimento/"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Atendimento nas 27 UFs
              </a>
            </div>

            {/* Cidades em Destaque */}
            <div className="pt-10 border-t border-slate-200 text-left">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
                Cidades com orientações:
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {CITIES_DATA.map(c => (
                  <a
                    key={c.slug}
                    href={`/aluguel-de-cacamba/${c.stateSlug}/${c.slug}/`}
                    className="text-xs bg-slate-50 border border-slate-200 hover:border-[#FFC52D] px-3 py-1.5 rounded text-slate-700 hover:text-[#10263D] font-medium"
                  >
                    {c.city} ({c.uf})
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

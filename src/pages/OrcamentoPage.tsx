import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';

interface OrcamentoPageProps {
  initialUf?: string;
  initialCity?: string;
  initialSize?: string;
}

export const OrcamentoPage: React.FC<OrcamentoPageProps> = ({
  initialUf,
  initialCity,
  initialSize,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoHead
        title="Solicitar Orçamento de Caçamba de Entulho | Fortera Caçambas"
        description="Solicite cotação ágil para aluguel de caçamba em qualquer cidade do Brasil. Escolha tamanho (3, 4 ou 5 m³), tipo de material e receba atendimento dedicado."
        path="/orcamento/"
      />

      <Breadcrumbs items={[{ name: 'Solicitar Orçamento' }]} />

      {/* Hero */}
      <section className="bg-[#10263D] text-white py-12 border-b border-[#1A3856]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
            Cotação Sem Compromisso
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Solicite o Orçamento para sua Obra
          </h1>
          <p className="text-base text-slate-200 mt-2 max-w-xl mx-auto">
            Atendimento para obras residenciais, comerciais e industriais em todas as 27 UFs. Preencha as informações para receber a cotação.
          </p>
        </div>
      </section>

      {/* Formulário Principal */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <QuoteForm 
            initialUf={initialUf || 'SP'} 
            initialCity={initialCity || ''} 
            defaultSize={initialSize || '4 m³'} 
          />

          {/* Dicas para agilizar o atendimento */}
          <div className="mt-12 bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-[#10263D] mb-3">
              Como agilizar a aprovação da sua cotação:
            </h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#FFC52D] font-black text-base leading-none">&bull;</span>
                <span><strong>Informe se há restrição de trânsito:</strong> Se a sua rua tiver feira livre em dias específicos, for rota de ônibus ou tiver fiação baixa, mencione nas observações.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFC52D] font-black text-base leading-none">&bull;</span>
                <span><strong>Indique o material predominante:</strong> Informar se é alvenaria pura pesada ou entulho misto com madeiras nos ajuda a direcionar a caçamba mais indicada.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFC52D] font-black text-base leading-none">&bull;</span>
                <span><strong>Horários de condomínio:</strong> Em edifícios ou residenciais fechados, confirme com a portaria os horários permitidos para entrada de caminhão pesado.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

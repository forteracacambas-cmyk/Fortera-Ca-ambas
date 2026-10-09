import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteForm } from '../components/QuoteForm';
import { SITE_CONFIG, getWhatsAppGenericLink } from '../config/siteConfig';

interface OrcamentoPageProps {
  initialUf?: string;
  initialCity?: string;
  initialSize?: string;
  initialPeriod?: string;
}

export const OrcamentoPage: React.FC<OrcamentoPageProps> = ({
  initialUf,
  initialCity,
  initialSize,
  initialPeriod,
}) => {
  const whatsappHref = getWhatsAppGenericLink();

  return (
    <div className="bg-slate-50 min-h-screen">
      <SeoHead
        title="Solicitar Orçamento de Caçamba de Entulho | Fortera Caçambas"
        description="Solicite cotação ágil para aluguel de caçamba em qualquer cidade do Brasil. Escolha tamanho (3, 4 ou 5 m³), prazo de dias ou meses e receba atendimento dedicado."
        path="/orcamento/"
      />

      <Breadcrumbs items={[{ name: 'Solicitar Orçamento' }]} />

      {/* Hero */}
      <section className="bg-[#10263D] text-white py-12 border-b border-[#1A3856]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#1A3856] text-[#FFC52D] text-xs font-black uppercase tracking-wider px-3 py-1 rounded">
            <span>Atendimento Nacional &bull; Brasil</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Solicite o Orçamento para sua Obra
          </h1>
          <p className="text-base text-slate-200 max-w-xl mx-auto">
            Atendimento para obras residenciais, comerciais e industriais em todas as 27 UFs. Preencha as informações abaixo ou chame direto no WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-sm px-5 py-2.5 rounded-lg shadow transition-transform active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>Chamar no WhatsApp: {SITE_CONFIG.whatsappFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Formulário Principal */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <QuoteForm 
            initialUf={initialUf || 'SP'} 
            initialCity={initialCity || ''} 
            defaultSize={initialSize || '4 m³'} 
            defaultPeriod={initialPeriod || '7-dias'}
          />

          {/* Dicas para agilizar o atendimento */}
          <div className="mt-12 bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-[#10263D] mb-3">
              Como agilizar a aprovação da sua cotação:
            </h3>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#FFC52D] font-black text-base leading-none">&bull;</span>
                <span><strong>Informe se há restrição de trânsito:</strong> Se a sua rua tiver feira livre em dias específicos, for rota de ônibus ou tiver fiação baixa, conte ao atendente pelo WhatsApp.</span>
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

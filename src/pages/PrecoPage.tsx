import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getWhatsAppGenericLink } from '../config/siteConfig';

export const PrecoPage: React.FC = () => {
  const priceFactors = [
    {
      title: '1. Capacidade Nominal da Caçamba (m³)',
      desc: 'O tamanho contratado (3, 4 ou 5 m³) influencia o espaço necessário para transporte e a capacidade de recolhimento da caçamba.'
    },
    {
      title: '2. Tipo de Resíduo da Obra',
      desc: 'Entulho de alvenaria possui custos de triagem diferentes de materiais mistos com madeiras, gesso, drywall ou embalagens. Informe a composição na solicitação.'
    },
    {
      title: '3. Localização do Imóvel e Rota Logística',
      desc: 'A distância entre o endereço da sua obra e os pontos operacionais impacta o percurso e o deslocamento do caminhão poliguindaste.'
    },
    {
      title: '4. Prazo de Locação: 7 Dias (Semanal) vs Diárias',
      desc: 'Disponibilizamos locação por dias, semanas ou meses. Se a caçamba encher e a obra continuar, você tem 1 troca por semana. O valor não é calculado por divisão aritmética do semanal, pois o transporte do poliguindaste compõe grande parte do custo.'
    },
    {
      title: '5. Acesso e Particularidades da Via',
      desc: 'Condições da rua, declives, restrições de horários de tráfego de caminhões e normas de condomínio influenciam o planejamento operacional.'
    },
    {
      title: '6. Condições de Destinação Local',
      desc: 'As condições de recebimento e as taxas das usinas de triagem e destinação variam entre municípios e compõem o valor da operação.'
    }
  ];

  return (
    <div className="bg-white">
      <SeoHead
        title="Preço de Aluguel de Caçamba: Fatores e Como Funciona | Fortera"
        description="Entenda os fatores que determinam o preço do aluguel de caçamba de entulho: volume, tipo de resíduo, logística e condições confirmadas no orçamento."
        path="/preco-aluguel-cacamba/"
      />

      <Breadcrumbs items={[{ name: 'Preço do Aluguel de Caçamba' }]} />

      {/* Hero */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Transparência Comercial
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Fatores que Determinam o Preço do Aluguel
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              O valor da locação é calculado de acordo com o tamanho da caçamba, o tipo de material a ser descartado e as condições de logística para o seu endereço.
            </p>
          </div>
        </div>
      </section>

      {/* Esclarecimento de Transparência */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-amber-300 shadow-sm">
            <h2 className="text-xl font-black text-[#10263D] mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FFC52D]"></span>
              <span>Valores personalizados e sem tabelas genéricas</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              O custo de destinação varia conforme a cidade, o tipo de material e a rota de entrega do caminhão poliguindaste. Tabelas fixas genéricas podem induzir a erro.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-3">
              Por isso, a <strong>Fortera Caçambas</strong> avalia os dados reais da sua obra para fornecer uma proposta clara e adaptada à sua localidade, sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* Fatores Determinantes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Composição da Cotação
            </span>
            <h2 className="text-3xl font-black text-[#10263D] tracking-tight mt-1">
              Os Fatores que Compõem o Valor da Locação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceFactors.map((factor, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-black text-[#10263D] mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dicas Práticas */}
          <div className="mt-16 bg-slate-900 text-white p-8 sm:p-10 rounded-2xl">
            <h3 className="text-2xl font-black text-[#FFC52D] mb-4">
              Orientações para o Planejamento da sua Obra
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
              <div>
                <strong className="text-white block mb-1">Avalie a Composição dos Resíduos:</strong>
                Informar se o entulho é alvenaria densa ou se contém gesso, madeira e embalagens permite dimensionar o modelo correto.
              </div>
              <div>
                <strong className="text-white block mb-1">Não Misture Materiais Proibidos:</strong>
                Lixo orgânico domiciliar e produtos químicos líquidos impedem a retirada até que sejam removidos da caçamba.
              </div>
              <div>
                <strong className="text-white block mb-1">Confirme as Condições de Acesso:</strong>
                Verificar espaço na via, fiação e autorização de condomínio evita reagendamentos na entrega.
              </div>
            </div>
          </div>

          {/* CTA e Link para o Guia */}
          <div className="mt-12 text-center space-y-4">
            <div>
              <a
                href="/guias/locacao-semanal-versus-diaria/"
                className="text-sm font-bold text-[#10263D] hover:text-amber-600 underline inline-flex items-center gap-1.5"
              >
                <span>Entenda como comparar aluguel semanal de 7 dias vs diárias de 1, 2 ou 3 dias</span>
                <span>&rarr;</span>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
              <a
                href={getWhatsAppGenericLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-base px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95 focus-visible-ring"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                </svg>
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <a
                href="/orcamento/"
                className="w-full sm:w-auto inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-base px-8 py-4 rounded-xl shadow-md transition-transform active:scale-95 focus-visible-ring"
              >
                Preencher Formulário
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

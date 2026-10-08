import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ComoFuncionaPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Solicitação do Orçamento e Orientação',
      description: 'Informe seu estado, cidade, bairro, tipo de material gerado na obra e o tamanho estimado (3, 4 ou 5 m³, ou solicite orientação técnica). Respondemos com a proposta e prazos para o seu endereço.',
      highlight: 'Proposta sem compromisso'
    },
    {
      num: '02',
      title: 'Preparação do Espaço e Reserva da Vaga',
      description: 'Antes da chegada do caminhão poliguindaste, reserve um espaço desimpedido para a parada e manobra do veículo (no alinhamento da guia ou dentro do lote). Verifique a ausência de fiações elétricas ou galhos baixos no local.',
      highlight: 'Acesso desimpedido'
    },
    {
      num: '03',
      title: 'Entrega e Posicionamento pelo Poliguindaste',
      description: 'O caminhão estaciona em frente à vaga e aciona os braços hidráulicos com as correntes de sustentação. A caçamba é posicionada com firmeza paralelamente à guia ou no ponto interno acordado.',
      highlight: 'Pontualidade operacional'
    },
    {
      num: '04',
      title: 'Carregamento do Entulho com Segurança',
      description: 'Sua equipe de obra realiza o descarte dos materiais combinados na cotação. O nível do entulho deve permanecer rigorosamente no alinhamento das bordas superiores da caçamba.',
      highlight: 'Limite na borda superior'
    },
    {
      num: '05',
      title: 'Içamento, Retirada e Destinação',
      description: 'No término do prazo ou após o enchimento, o veículo retorna ao local, fixa as correntes e recolhe a caçamba. Condições e destinação dos resíduos confirmadas no orçamento.',
      highlight: 'Destinação orientada'
    }
  ];

  return (
    <div className="bg-white">
      <SeoHead
        title="Como Funciona o Aluguel de Caçamba de Entulho | Passo a Passo Fortera"
        description="Entenda o passo a passo da locação de caçambas estacionárias: desde o pedido de orçamento e reserva da vaga até a entrega, enchimento e retirada."
        path="/como-funciona/"
      />

      <Breadcrumbs items={[{ name: 'Como Funciona' }]} />

      {/* Hero */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Processo Logístico
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Como Funciona o Aluguel de Caçamba
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Do pedido inicial à retirada do entulho: conheça cada etapa para garantir o andamento ordenado da sua obra.
            </p>
          </div>
        </div>
      </section>

      {/* Os 5 Passos */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {steps.map((st) => (
            <div 
              key={st.num}
              className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-xl bg-[#10263D] text-[#FFC52D] flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-inner">
                {st.num}
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl sm:text-2xl font-black text-[#10263D]">
                    {st.title}
                  </h2>
                  <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded">
                    {st.highlight}
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dúvidas Frequentes sobre a Operação */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
              Tira-Dúvidas
            </span>
            <h2 className="text-3xl font-black text-[#10263D] mt-1">
              Perguntas Frequentes sobre a Entrega e Retirada
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-base font-bold text-[#10263D] mb-2">
                O que acontece se houver veículo estacionado na vaga no momento da entrega?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O caminhão precisa de espaço para manobrar e descer os braços de içamento. É essencial reservar a vaga previamente no dia da entrega para viabilizar a colocação.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-base font-bold text-[#10263D] mb-2">
                Por que o entulho não pode ultrapassar o nível da borda metálica?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Por segurança viária, cargas acima da borda oferecem risco de queda durante o transporte. Cargas transbordantes impedem a realização da retirada até que o excesso seja reacomodado pelo responsável.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-base font-bold text-[#10263D] mb-2">
                Como são confirmadas as condições de destinação dos resíduos?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Condições e destinação dos resíduos confirmadas no orçamento. Informamos os materiais aceitos e esclarecemos regras de separação para cada município.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/orcamento/"
              className="inline-block bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-base px-8 py-4 rounded-lg shadow-md transition-transform active:scale-95 focus-visible-ring"
            >
              Iniciar Meu Pedido de Orçamento
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

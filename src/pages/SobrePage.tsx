import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config/siteConfig';

export const SobrePage: React.FC = () => {
  return (
    <div className="bg-white">
      <SeoHead
        title="Sobre a Fortera Caçambas | Aluguel de Caçambas com Atendimento Nacional"
        description="Conheça a Fortera Caçambas: compromisso com a pontualidade, organização de canteiros de obras e orientação para o descarte adequado de entulho em todo o Brasil."
        path="/sobre/"
      />

      <Breadcrumbs items={[{ name: 'Sobre Nós' }]} />

      {/* Hero */}
      <section className="bg-[#10263D] text-white py-14 sm:py-16 border-b border-[#1A3856]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
              Institucional
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Sobre a Fortera Caçambas
            </h1>
            <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
              Trabalhamos na organização da locação de caçambas estacionárias para que construtores, reformadores e proprietários mantenham suas obras limpas, com previsibilidade e descarte adequado.
            </p>
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#10263D]">
              Sua obra avança. O entulho sai.
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              O acúmulo desordenado de entulho no canteiro compromete a segurança da equipe, atrapalha a circulação de materiais e atrasa a produtividade das etapas de obra.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              A <strong>Fortera Caçambas</strong> atua para simplificar o aluguel de caçambas estacionárias em todo o país. Com atendimento dedicado e orientação clara sobre modelos e separação de materiais, conectamos sua obra à solução mais indicada para a retirada dos resíduos.
            </p>
          </div>

          {/* Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-[#10263D] text-[#FFC52D] rounded-lg flex items-center justify-center font-black mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-[#10263D] mb-2">
                Pontualidade e Previsibilidade
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Respeito ao cronograma da sua reforma. Alinhamos horários viáveis de entrega e retirada conforme as características da via e do imóvel.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-[#10263D] text-[#FFC52D] rounded-lg flex items-center justify-center font-black mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-[#10263D] mb-2">
                Orientação para sua Obra
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Condições e destinação dos resíduos confirmadas no orçamento. Orientamos sobre materiais aceitos e regras de separação da sua localidade.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 bg-[#10263D] text-[#FFC52D] rounded-lg flex items-center justify-center font-black mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-[#10263D] mb-2">
                Atendimento Nacional
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consulte disponibilidade e condições para seu endereço. Atendimento em todas as 27 Unidades Federativas para reformas de pequeno, médio e grande porte.
              </p>
            </div>

          </div>

          {/* Contato Oficial */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-black text-[#FFC52D] mb-2">
              Fale com a Fortera
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Para orçamentos, dúvidas sobre modelos de caçamba ou orientações de acesso, nosso canal de atendimento por e-mail é:
            </p>
            <div className="inline-block bg-[#10263D] px-4 py-2 rounded-lg border border-[#1A3856]">
              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="text-[#FFC52D] font-mono text-base font-bold hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Consulte disponibilidade e condições para seu endereço no momento da proposta.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

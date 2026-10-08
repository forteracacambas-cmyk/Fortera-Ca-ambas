import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG, getWhatsAppGenericLink } from '../config/siteConfig';

export const SobrePage: React.FC = () => {
  const whatsappHref = getWhatsAppGenericLink();
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

          {/* Informações Institucionais e Dados Oficiais */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-xl font-black text-[#10263D]">
              Dados Oficiais e Atendimento Corporativo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div>
                <strong className="text-slate-900 block mb-0.5">Marca:</strong>
                <span>FORTERA CAÇAMBAS</span>
              </div>
              <div>
                <strong className="text-slate-900 block mb-0.5">Razão Social:</strong>
                <span>{SITE_CONFIG.legalName}</span>
              </div>
              <div>
                <strong className="text-slate-900 block mb-0.5">CNPJ:</strong>
                <span className="font-mono">{SITE_CONFIG.cnpj}</span>
              </div>
              <div>
                <strong className="text-slate-900 block mb-0.5">Canal Oficial Telefônico / WhatsApp:</strong>
                <span className="font-bold text-[#10263D]">{SITE_CONFIG.whatsappFormatted}</span>
              </div>
              <div className="md:col-span-2">
                <strong className="text-slate-900 block mb-0.5">Endereço Administrativo para Correspondência:</strong>
                <span>{SITE_CONFIG.correspondenceAddress}</span>
                <p className="text-xs text-slate-500 mt-1">
                  <em>*Aviso: Endereço informado para correspondência. O atendimento é operacionalizado em todo o Brasil através de nossa rede de parceiros e afiliados, com disponibilidade e condições confirmadas no orçamento.</em>
                </p>
              </div>
            </div>
          </div>

          {/* Contato Oficial */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-black text-[#FFC52D] mb-2">
              Fale com a Fortera
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Para orçamentos, orientações técnicas ou dúvidas operacionais, nossos canais oficiais são:
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow transition-colors"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                </svg>
                <span>WhatsApp: {SITE_CONFIG.whatsappFormatted}</span>
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="inline-flex items-center gap-2 bg-[#10263D] px-4 py-2.5 rounded-lg border border-[#1A3856] text-[#FFC52D] font-mono text-sm font-bold hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Atendimento nacional por rede de parceiros e afiliados. Disponibilidade e condições confirmadas no orçamento.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SITE_CONFIG } from '../config/siteConfig';

export const PrivacidadePage: React.FC = () => {
  return (
    <div className="bg-white">
      <SeoHead
        title="Política de Privacidade e Proteção de Dados | Fortera Caçambas"
        description="Conheça a política de privacidade da Fortera Caçambas. Informações claras sobre como tratamos dados de pedidos enviados para atendimento."
        path="/privacidade/"
      />

      <Breadcrumbs items={[{ name: 'Política de Privacidade' }]} />

      <section className="bg-[#10263D] text-white py-12 border-b border-[#1A3856]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-black uppercase tracking-wider text-[#FFC52D] bg-[#1A3856] px-3 py-1 rounded inline-block mb-3">
            Transparência e LGPD
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Última atualização: Outubro de 2026. Diretrizes sobre o tratamento e respeito às suas informações.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl font-bold text-[#10263D] mb-3">
              1. Tratamento de Informações
            </h2>
            <p>
              A <strong>Fortera Caçambas</strong> respeita a privacidade de seus usuários e clientes. Esta política esclarece a forma como tratamos os dados informados durante a navegação neste site e na realização de solicitações de orçamento para aluguel de caçambas, em observância à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10263D] mb-3">
              2. Como Funciona o Formulário no Site
            </h2>
            <p className="mb-2">
              O formulário de cotação disponibilizado no site serve para estruturar os dados do seu pedido de forma prática:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Na navegação:</strong> O site não armazena formulários em banco de dados ou cadastros de pré-atendimento enquanto você preenche os campos.</li>
              <li><strong>No envio:</strong> Quando você clica para abrir o aplicativo de e-mail ou WhatsApp e envia sua mensagem para a nossa equipe, as informações contidas no pedido são recebidas e tratadas por nossa equipe comercial exclusivamente para prestar o atendimento solicitado, elaborar a proposta e coordenar a entrega da caçamba.</li>
            </ul>
            <p className="mt-3 font-semibold text-slate-900">
              Não solicitamos número de CPF, dados bancários, números de cartão de crédito ou quaisquer dados sensíveis neste ambiente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10263D] mb-3">
              3. Finalidade e Compartilhamento
            </h2>
            <p>
              Os dados recebidos via e-mail (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">{SITE_CONFIG.email}</code>) ou mensagem são utilizados exclusivamente para responder sua solicitação de orçamento e operacionalizar o serviço contratado. Não comercializamos, não alugamos e não vendemos dados para redes de publicidade de terceiros.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10263D] mb-3">
              4. Cookies e Navegação
            </h2>
            <p>
              O site prioriza desempenho, carregamento rápido e acessibilidade. Não utilizamos cookies invasivos de rastreamento comportamental de terceiros.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10263D] mb-3">
              5. Seus Direitos como Titular de Dados
            </h2>
            <p className="mb-2">
              Conforme a legislação brasileira de proteção de dados, você pode solicitar a qualquer momento:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Confirmação da existência de tratamento dos dados recebidos por e-mail;</li>
              <li>Atualização ou correção de informações enviadas;</li>
              <li>Exclusão dos dados das mensagens comerciais após a conclusão do atendimento.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#10263D] mb-3">
              6. Identificação do Controlador e Contato
            </h2>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1 mb-3">
              <div><strong>Marca:</strong> FORTERA CAÇAMBAS</div>
              <div><strong>Razão Social:</strong> {SITE_CONFIG.legalName}</div>
              <div><strong>CNPJ:</strong> {SITE_CONFIG.cnpj}</div>
              <div><strong>Correspondência Administrativa:</strong> {SITE_CONFIG.correspondenceAddress}</div>
              <div><strong>Telefone / WhatsApp Oficial:</strong> {SITE_CONFIG.whatsappFormatted}</div>
            </div>
            <p>
              Para esclarecer qualquer dúvida sobre o tratamento de seus dados ou exercer seus direitos de titular, entre em contato diretamente pelo nosso canal oficial de atendimento:
            </p>
            <p className="mt-2">
              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="text-[#10263D] font-mono font-bold hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

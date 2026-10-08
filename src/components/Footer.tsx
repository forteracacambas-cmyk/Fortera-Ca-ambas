import React from 'react';
import { SITE_CONFIG, getWhatsAppGenericLink } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappHref = getWhatsAppGenericLink();

  return (
    <footer className="bg-[#0B1B2C] text-slate-300 border-t-4 border-[#FFC52D] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Topo do Rodapé: Marca e Contato Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Coluna 1: Marca & Propósito */}
          <div className="space-y-4">
            <div className="inline-block">
              <a href="/" title="Fortera Caçambas - Início" className="inline-flex">
                <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center border border-slate-200">
                  <img
                    src={SITE_CONFIG.logo}
                    alt="Fortera Caçambas"
                    className="h-8 w-auto object-contain"
                    width="160"
                    height="39"
                  />
                </div>
              </a>
            </div>

            <p className="text-sm font-semibold text-[#FFC52D]">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Aluguel de caçambas estacionárias para obras, reformas e demolições com atendimento nacional.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div><strong className="text-slate-300">Fale com a Fortera:</strong></div>
              <a 
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold text-sm flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
                </svg>
                <span>WhatsApp: {SITE_CONFIG.whatsappFormatted}</span>
              </a>
              
            </div>
          </div>

          {/* Coluna 2: Navegação e Serviços */}
          <div>
            <h2 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-[#FFC52D] pl-2.5">
              Serviços e Soluções
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/tamanhos-de-cacamba/" className="hover:text-[#FFC52D] transition-colors">
                  Tamanhos de Caçamba (3 a 10 m³)
                </a>
              </li>
              <li>
                <a href="/preco-aluguel-cacamba/" className="hover:text-[#FFC52D] transition-colors">
                  Fatores de Preço do Aluguel
                </a>
              </li>
              <li>
                <a href="/como-funciona/" className="hover:text-[#FFC52D] transition-colors">
                  Como Funciona o Aluguel
                </a>
              </li>
              <li>
                <a href="/atendimento/" className="hover:text-[#FFC52D] transition-colors">
                  Atendimento Nacional (27 UFs)
                </a>
              </li>
              <li>
                <a href="/orcamento/" className="hover:text-[#FFC52D] transition-colors font-semibold text-[#FFC52D]">
                  Solicitar Cotação Online &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Guias Práticos & Conhecimento */}
          <div>
            <h2 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-[#FFC52D] pl-2.5">
              Orientações de Obra
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/guias/como-escolher-tamanho-de-cacamba/" className="hover:text-[#FFC52D] transition-colors">
                  Como Escolher o Tamanho Certo
                </a>
              </li>
              <li>
                <a href="/guias/o-que-pode-colocar-na-cacamba/" className="hover:text-[#FFC52D] transition-colors">
                  O que Pode e Não Pode Colocar
                </a>
              </li>
              <li>
                <a href="/guias/como-preparar-a-entrega-da-cacamba/" className="hover:text-[#FFC52D] transition-colors">
                  Preparação do Local de Entrega
                </a>
              </li>
              <li>
                <a href="/guias/" className="hover:text-[#FFC52D] transition-colors text-slate-400">
                  Ver Todos os Guias &rarr;
                </a>
              </li>
              <li>
                <a href="/sobre/" className="hover:text-[#FFC52D] transition-colors">
                  Sobre a Fortera Caçambas
                </a>
              </li>
              <li>
                <a href="/privacidade/" className="hover:text-[#FFC52D] transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Encontre atendimento na sua cidade */}
          <div>
            <h2 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-[#FFC52D] pl-2.5">
              Encontre sua Cidade
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/aluguel-de-cacamba/sp/sao-paulo/" className="hover:text-[#FFC52D] transition-colors">
                  São Paulo (SP)
                </a>
              </li>
              <li>
                <a href="/aluguel-de-cacamba/sp/campinas/" className="hover:text-[#FFC52D] transition-colors">
                  Campinas (SP)
                </a>
              </li>
              <li>
                <a href="/aluguel-de-cacamba/sp/caraguatatuba/" className="hover:text-[#FFC52D] transition-colors">
                  Caraguatatuba (SP)
                </a>
              </li>
              <li>
                <a href="/aluguel-de-cacamba/rj/rio-de-janeiro/" className="hover:text-[#FFC52D] transition-colors">
                  Rio de Janeiro (RJ)
                </a>
              </li>
              <li>
                <a href="/aluguel-de-cacamba/mg/belo-horizonte/" className="hover:text-[#FFC52D] transition-colors">
                  Belo Horizonte (MG)
                </a>
              </li>
              <li>
                <a href="/aluguel-de-cacamba/pr/curitiba/" className="hover:text-[#FFC52D] transition-colors">
                  Curitiba (PR)
                </a>
              </li>
              <li className="pt-1">
                <a href="/atendimento/" className="text-xs text-[#FFC52D] hover:underline font-semibold">
                  Ver atendimento em todas as 27 UFs &rarr;
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé inferior com aviso legal e créditos */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-400">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} <strong>FORTERA CAÇAMBAS</strong> &bull; Razão Social: <strong>{SITE_CONFIG.legalName}</strong> &bull; CNPJ: <strong>{SITE_CONFIG.cnpj}</strong>
            </p>
            <p className="text-slate-400">
              Endereço para correspondência: {SITE_CONFIG.correspondenceAddress}.
            </p>
            <p className="text-slate-500">
              Atendimento em todo o Brasil por rede de parceiros e afiliados. Condições e disponibilidade acordadas no orçamento.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2 md:pt-0">
            <a href="/sobre/" className="hover:text-white">Sobre</a>
            <a href="/privacidade/" className="hover:text-white">Privacidade</a>
            <a href="/atendimento/" className="hover:text-white">Atendimento Nacional</a>
            <a href="/orcamento/" className="text-[#FFC52D] font-bold hover:underline">Orçamento</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

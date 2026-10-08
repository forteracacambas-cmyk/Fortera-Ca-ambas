import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1B2C] text-slate-300 border-t-4 border-[#FFC52D] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Topo do Rodapé: Marca e Contato Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Coluna 1: Marca & Propósito */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFC52D] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#10263D]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 7h18l-2 11H5L3 7z" />
                  <path d="M2 6h20v2H2z" fill="#0B1B2C" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  FORTERA<span className="text-[#FFC52D]">.</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                  CAÇAMBAS DE ENTULHO
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#FFC52D]">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Aluguel de caçambas estacionárias para obras, reformas e demolições com atendimento nacional.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Fale com a Fortera:</strong></div>
              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="text-[#FFC52D] hover:underline font-mono text-sm block"
              >
                {SITE_CONFIG.email}
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
                  Tamanhos de Caçamba (3, 4 e 5 m³)
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
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            <p>
              &copy; {currentYear} Fortera Caçambas. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-slate-400">
              Condições e destinação dos resíduos confirmadas no orçamento. Consulte disponibilidade para seu endereço.
            </p>
          </div>

          <div className="flex items-center gap-6">
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

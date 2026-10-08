import React from 'react';
import { SITE_CONFIG, getWhatsAppGenericLink } from '../config/siteConfig';

interface MobileBottomBarProps {
  currentPath: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ currentPath }) => {
  // Não precisa exibir se já estiver no formulário de orçamento
  if (currentPath === '/orcamento/') return null;

  const whatsappHref = getWhatsAppGenericLink();

  return (
    <aside 
      aria-label="Ações rápidas de contato mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#10263D]/95 backdrop-blur-md border-t border-[#FFC52D]/40 px-3 py-2.5 shadow-2xl"
    >
      <div className="max-w-md mx-auto flex items-center gap-2">
        
        {/* Botão de WhatsApp Oficial com Mensagem Codificada */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs uppercase tracking-wider py-3 px-3 rounded-lg text-center shadow flex items-center justify-center gap-1.5 focus-visible-ring active:scale-95 transition-transform"
          aria-label="Solicitar orçamento pelo WhatsApp oficial (11) 95759-5840"
        >
          <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
          </svg>
          <span>WhatsApp Rápido</span>
        </a>

        {/* Botão Formulário Completo */}
        <a
          href="/orcamento/"
          className="flex-1 bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-xs uppercase tracking-wider py-3 px-3 rounded-lg text-center shadow flex items-center justify-center gap-1.5 focus-visible-ring active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4 text-[#10263D] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span>Formulário</span>
        </a>

      </div>
    </aside>
  );
};

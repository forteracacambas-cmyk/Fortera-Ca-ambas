import React from 'react';
import { SITE_CONFIG, getWhatsAppGenericLink } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappHref = getWhatsAppGenericLink();

  return (
    <aside 
      aria-label="Atendimento Rápido no WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 print:hidden"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Solicitar orçamento no WhatsApp oficial da Fortera: ${SITE_CONFIG.whatsappFormatted || '(11) 95759-5840'}`}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-3.5 py-3 md:px-4 md:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible-ring border-2 border-white/30"
      >
        {/* Ícone Oficial WhatsApp */}
        <div className="relative flex items-center justify-center">
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
          </svg>
        </div>

        {/* Rótulo visível no desktop e compacto no mobile */}
        <div className="flex flex-col text-left leading-tight pr-1">
          <span className="text-[11px] uppercase tracking-wider text-white/90 font-bold hidden sm:block">
            Atendimento Rápido
          </span>
          <span className="text-sm font-black text-white">
            WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
};

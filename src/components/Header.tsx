import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppGenericLink } from '../config/siteConfig';

interface HeaderProps {
  currentPath: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappHref = getWhatsAppGenericLink();

  // Fecha menu ao navegar ou pressionar Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/servicos/', label: 'Serviços' },
    { href: '/tamanhos-de-cacamba/', label: 'Tamanhos' },
    { href: '/preco-aluguel-cacamba/', label: 'Preços' },
    { href: '/como-funciona/', label: 'Como Funciona' },
    { href: '/atendimento/', label: 'Atendimento Nacional' },
    { href: '/guias/', label: 'Guias' },
    { href: '/sobre/', label: 'Sobre Nós' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#10263D] text-white shadow-md border-b border-[#1A3856]">
      {/* Barra superior de utilidade e contato */}
      <div className="bg-[#0B1B2C] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFC52D]"></span>
            <span>Atendimento Nacional para Obras, Reformas e Demolições &bull; Brasil</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Fale com a Fortera:</span>
            <a 
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-[#25D366] hover:underline font-bold focus-visible-ring inline-flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>{SITE_CONFIG.whatsappFormatted}</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">&bull;</span>
            <a 
              href="mailto:forteracacambas@gmail.com" 
              className="text-[#FFC52D] hover:underline font-medium focus-visible-ring hidden sm:inline"
            >
              forteracacambas@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Oficial Fortera Caçambas sobre fundo branco */}
          <a 
            href="/" 
            className="flex items-center group focus-visible-ring rounded-lg p-0.5"
            title="Fortera Caçambas - Início"
          >
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center justify-center group-hover:bg-slate-50 transition-colors border border-slate-200">
              <img
                src={SITE_CONFIG.logo}
                alt="Fortera Caçambas"
                className="h-8 sm:h-9 w-auto object-contain"
                width="160"
                height="39"
              />
            </div>
          </a>

          {/* Links desktop */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-sm font-semibold rounded-md transition-colors focus-visible-ring ${
                  isActive(link.href)
                    ? 'text-[#FFC52D] bg-[#1A3856]'
                    : 'text-slate-200 hover:text-white hover:bg-[#1A3856]/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Orçamento Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs px-3.5 py-2.5 rounded-md shadow-sm transition-transform active:scale-95 focus-visible-ring flex items-center gap-1.5"
              title="Falar no WhatsApp oficial (11) 95759-5840"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            <a
              href="/orcamento/"
              className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-black text-xs px-4 py-2.5 rounded-md shadow-sm transition-transform active:scale-95 focus-visible-ring flex items-center gap-1.5"
            >
              <span>Solicitar Orçamento</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex items-center xl:hidden gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden bg-[#25D366] text-white font-bold text-xs px-2.5 py-1.5 rounded focus-visible-ring flex items-center gap-1"
              aria-label="WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>Whats</span>
            </a>
            <a
              href="/orcamento/"
              className="sm:hidden bg-[#FFC52D] text-[#10263D] font-bold text-xs px-2.5 py-1.5 rounded focus-visible-ring"
            >
              Orçamento
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-slate-200 hover:text-white hover:bg-[#1A3856] focus-visible-ring"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1B2C] border-b border-[#1A3856] px-4 pt-3 pb-6">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-base font-semibold rounded-md ${
                  isActive(link.href)
                    ? 'text-[#FFC52D] bg-[#1A3856]'
                    : 'text-slate-200 hover:text-white hover:bg-[#1A3856]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#1A3856] space-y-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-base py-3 px-4 rounded-md shadow flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>Falar no WhatsApp: {SITE_CONFIG.whatsappFormatted}</span>
            </a>

            <a
              href="/orcamento/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-extrabold text-base py-3 px-4 rounded-md shadow"
            >
              Solicitar Orçamento Grátis
            </a>
            <p className="text-xs text-center text-slate-400 mt-2">
              E-mail: <span className="text-slate-200">forteracacambas@gmail.com</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

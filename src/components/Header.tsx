import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { href: '/atendimento/', label: 'Atendimento Nacional' },
    { href: '/tamanhos-de-cacamba/', label: 'Tamanhos' },
    { href: '/preco-aluguel-cacamba/', label: 'Preços' },
    { href: '/como-funciona/', label: 'Como Funciona' },
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
            <span>Atendimento Nacional para Obras, Reformas e Demolições</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Fale com a Fortera:</span>
            <a 
              href="mailto:forteracacambas@gmail.com" 
              className="text-[#FFC52D] hover:underline font-medium focus-visible-ring"
            >
              forteracacambas@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Tipográfico Fortera Caçambas */}
          <a 
            href="/" 
            className="flex items-center gap-3.5 group focus-visible-ring rounded-lg p-1"
            title="Fortera Caçambas - Início"
          >
            {/* Ícone geométrico da caçamba */}
            <div className="w-11 h-11 bg-[#FFC52D] rounded-lg flex items-center justify-center shadow-inner group-hover:bg-[#EBB220] transition-colors flex-shrink-0">
              <svg className="w-7 h-7 text-[#10263D]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 7h18l-2 11H5L3 7z" />
                <path d="M2 6h20v2H2z" fill="#0B1B2C" />
                <path d="M11 9h2v7h-2z" fill="#10263D" opacity="0.8" />
              </svg>
            </div>
            
            {/* Texto da Marca */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                FORTERA<span className="text-[#FFC52D] font-black">.</span>
              </span>
              <span className="text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-slate-300 mt-1">
                CAÇAMBAS DE ENTULHO
              </span>
            </div>
          </a>

          {/* Links desktop */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors focus-visible-ring ${
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
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/orcamento/"
              className="bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-bold text-sm px-5 py-2.5 rounded-md shadow-sm transition-transform active:scale-95 focus-visible-ring flex items-center gap-2"
            >
              <span>Solicitar Orçamento</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href="/orcamento/"
              className="sm:hidden bg-[#FFC52D] text-[#10263D] font-bold text-xs px-3 py-2 rounded focus-visible-ring"
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
        <div className="lg:hidden bg-[#0B1B2C] border-b border-[#1A3856] px-4 pt-3 pb-6">
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

          <div className="mt-5 pt-4 border-t border-[#1A3856]">
            <a
              href="/orcamento/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#FFC52D] hover:bg-[#EBB220] text-[#10263D] font-extrabold text-base py-3 px-4 rounded-md shadow"
            >
              Solicitar Orçamento Grátis
            </a>
            <p className="text-xs text-center text-slate-400 mt-3">
              E-mail: <span className="text-slate-200">forteracacambas@gmail.com</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

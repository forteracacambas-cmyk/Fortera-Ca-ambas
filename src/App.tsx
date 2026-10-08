import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AtendimentoPage } from './pages/AtendimentoPage';
import { TamanhosPage } from './pages/TamanhosPage';
import { PrecoPage } from './pages/PrecoPage';
import { ComoFuncionaPage } from './pages/ComoFuncionaPage';
import { SobrePage } from './pages/SobrePage';
import { OrcamentoPage } from './pages/OrcamentoPage';
import { PrivacidadePage } from './pages/PrivacidadePage';
import { GuiasHubPage } from './pages/GuiasHubPage';
import { GuiaDetailPage } from './pages/GuiaDetailPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { CityDetailPage } from './pages/CityDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MobileBottomBar } from './components/MobileBottomBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

interface AppProps {
  initialUrl?: string;
}

export default function App({ initialUrl }: AppProps) {
  // Inicialização de rota (compatível com SSR e Browser)
  const [currentUrl, setCurrentUrl] = useState<string>(() => {
    if (initialUrl) return initialUrl;
    if (typeof window !== 'undefined') {
      return window.location.pathname + window.location.search;
    }
    return '/';
  });

  // Interceptador de navegação SPA para links internos
  useEffect(() => {
    const handlePopState = () => {
      setCurrentUrl(window.location.pathname + window.location.search);
    };

    const handleClick = (e: MouseEvent) => {
      // Ignora teclas modificadoras
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignora links externos, mailto, tel, âncoras na mesma página (#)
      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        target.getAttribute('target') === '_blank' ||
        target.hasAttribute('download')
      ) {
        return;
      }

      // Link interno
      e.preventDefault();
      window.history.pushState(null, '', href);
      setCurrentUrl(href);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Extrai pathname e search params
  const [pathname, search] = currentUrl.split('?');
  const searchParams = new URLSearchParams(search || '');

  // Normaliza o pathname com barra final (exceto raiz)
  const normalizedPath = pathname === '/' ? '/' : (pathname.endsWith('/') ? pathname : `${pathname}/`);

  // Roteador de Páginas
  const renderPage = () => {
    if (normalizedPath === '/') {
      return <HomePage />;
    }

    if (normalizedPath === '/atendimento/') {
      return <AtendimentoPage />;
    }

    if (normalizedPath === '/tamanhos-de-cacamba/') {
      return <TamanhosPage />;
    }

    if (normalizedPath === '/preco-aluguel-cacamba/') {
      return <PrecoPage />;
    }

    if (normalizedPath === '/como-funciona/') {
      return <ComoFuncionaPage />;
    }

    if (normalizedPath === '/sobre/') {
      return <SobrePage />;
    }

    if (normalizedPath === '/orcamento/') {
      const ufParam = searchParams.get('uf') || undefined;
      const cityParam = searchParams.get('cidade') || undefined;
      const sizeParam = searchParams.get('tamanho') || undefined;
      const periodParam = searchParams.get('prazo') || undefined;
      return (
        <OrcamentoPage 
          initialUf={ufParam} 
          initialCity={cityParam} 
          initialSize={sizeParam} 
          initialPeriod={periodParam}
        />
      );
    }

    if (normalizedPath === '/privacidade/') {
      return <PrivacidadePage />;
    }

    if (normalizedPath === '/servicos/') {
      return <ServicesHubPage />;
    }

    // Rotas de Serviços: /servicos/:slug/
    const serviceMatch = normalizedPath.match(/^\/servicos\/([a-z0-9-]+)\/$/);
    if (serviceMatch) {
      const serviceSlug = serviceMatch[1];
      return <ServiceDetailPage slug={serviceSlug} />;
    }

    if (normalizedPath === '/guias/') {
      return <GuiasHubPage />;
    }

    // Rotas de Guias: /guias/:slug/
    const guideMatch = normalizedPath.match(/^\/guias\/([a-z0-9-]+)\/$/);
    if (guideMatch) {
      const guideSlug = guideMatch[1];
      return <GuiaDetailPage slug={guideSlug} />;
    }

    // Rotas de Cidades: /aluguel-de-cacamba/:uf/:cidade/
    const cityMatch = normalizedPath.match(/^\/aluguel-de-cacamba\/([a-z]{2})\/([a-z0-9-]+)\/$/);
    if (cityMatch) {
      const uf = cityMatch[1].toUpperCase();
      const citySlug = cityMatch[2].toLowerCase();
      return <CityDetailPage uf={uf} citySlug={citySlug} />;
    }

    // 404
    return <NotFoundPage />;
  };

  return (
    <div className="flex flex-col min-h-screen text-[#10263D] bg-white pb-14 md:pb-0">
      {/* Acessibilidade: Pular para Conteúdo Principal */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-[#FFC52D] focus:text-[#10263D] focus:font-bold focus:rounded-md"
      >
        Pular para o conteúdo principal
      </a>

      <Header currentPath={normalizedPath} />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      {/* Botão Flutuante de WhatsApp Oficial */}
      <FloatingWhatsApp />

      {/* Barra de Ações Rápidas Mobile */}
      <MobileBottomBar currentPath={normalizedPath} />
    </div>
  );
}

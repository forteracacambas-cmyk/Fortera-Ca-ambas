/**
 * Configurações Centrais - Fortera Caçambas
 * 
 * Centralização de dados da marca, contatos, imagens e variáveis de ambiente.
 * - E-mail comercial: forteracacambas@gmail.com
 * - WhatsApp, CNPJ e Domínio mantidos vazios como configuração padrão até fornecimento.
 */

export const SUPABASE_ASSETS = {
  hero: 'https://omkxdavxrezrfxvsjsgi.supabase.co/storage/v1/object/public/site-images/exec-9b8cec25-54fe-4673-b79c-e5618bb4048b.png',
  produto: 'https://omkxdavxrezrfxvsjsgi.supabase.co/storage/v1/object/public/site-images/exec-6dd8074b-74d3-4674-bab9-271b69aab66d.png',
  comparativo: 'https://omkxdavxrezrfxvsjsgi.supabase.co/storage/v1/object/public/site-images/exec-ac802670-4a12-4fa4-a305-661ee53eb4c7.png',
  logo: 'https://omkxdavxrezrfxvsjsgi.supabase.co/storage/v1/object/public/site-images/logo-fortera.svg',
  favicon: 'https://omkxdavxrezrfxvsjsgi.supabase.co/storage/v1/object/public/site-images/favicon-fortera.svg',
};

export const SITE_IMAGES = {
  hero: {
    src: '/images/hero_fortera.webp',
    alt: 'Caçamba estacionária Fortera amarela em via pública para descarte organizado de entulho',
    width: 1536,
    height: 1024,
  },
  dumpsterProduct: {
    src: '/images/produto_fortera.webp',
    alt: 'Caçamba estacionária metálica Fortera para recolhimento de entulho de obras e reformas',
    width: 1536,
    height: 1024,
  },
  comparative: {
    src: '/images/comparativo_fortera.webp',
    alt: 'Comparativo visual de capacidades e dimensões de caçambas estacionárias Fortera',
    width: 1536,
    height: 1024,
  },
  logo: {
    src: SUPABASE_ASSETS.logo,
    alt: 'Fortera Caçambas - Logotipo Oficial',
    width: 620,
    height: 150,
  },
  favicon: {
    src: SUPABASE_ASSETS.favicon,
    alt: 'Ícone Fortera Caçambas',
    width: 160,
    height: 160,
  },
  delivery: {
    src: SUPABASE_ASSETS.hero,
    alt: 'Caçamba estacionária Fortera posicionada em via pública para descarte de entulho de obra',
    width: 1536,
    height: 1024,
  },
  detail: {
    src: SUPABASE_ASSETS.produto,
    alt: 'Caçamba estacionária Fortera posicionada para reforma de imóvel',
    width: 1536,
    height: 1024,
  },
  renovationHouse: {
    src: SUPABASE_ASSETS.produto,
    alt: 'Caçamba estacionária Fortera para reforma e descarte de materiais',
    width: 1536,
    height: 1024,
  },
  commercialSite: {
    src: SUPABASE_ASSETS.produto,
    alt: 'Caçamba estacionária Fortera para canteiro de obras e reformas comerciais',
    width: 1536,
    height: 1024,
  },
  demolition: {
    src: SUPABASE_ASSETS.produto,
    alt: 'Caçamba estacionária Fortera para descarte de entulho de obra',
    width: 1536,
    height: 1024,
  },
};

export interface RentalPeriodOption {
  id: string;
  days: number;
  label: string;
  shortLabel: string;
  isPopular?: boolean;
  description: string;
}

export const RENTAL_TERMS = 'Alugue por dias, semanas ou meses. Se a caçamba encher e a obra continuar, você tem 1 troca por semana durante a locação. Solicite a troca pelo WhatsApp.';
export const RENTAL_PERIODS: RentalPeriodOption[] = [
  { id: '15-dias', days: 15, label: '15 dias', shortLabel: '15 dias', description: 'Para etapas de obra com duração de duas semanas.' },
  { id: '1-mes', days: 30, label: '1 mês', shortLabel: '1 mês', description: 'Locação mensal com 1 troca por semana, quando encher e a obra continuar.' },
  { id: '2-meses', days: 60, label: '2 meses', shortLabel: '2 meses', description: 'Para obras prolongadas, com 1 troca por semana quando necessário.' },
  { id: '3-meses', days: 90, label: '3 meses', shortLabel: '3 meses', description: 'Para canteiros e reformas em várias etapas.' },
  { id: 'outro', days: 0, label: 'Outro período / mais meses', shortLabel: 'Outro período', description: 'Combine o prazo da sua obra pelo WhatsApp.' },
  {
    id: '7-dias',
    days: 7,
    label: '7 dias (Semanal)',
    shortLabel: '7 dias (Semanal)',
    isPopular: true,
    description: 'Plano semanal de 7 dias com permanência adequada para reformas e obras.',
  },
  {
    id: '3-dias',
    days: 3,
    label: '3 dias',
    shortLabel: '3 dias',
    description: 'Para etapas com descarte concentrado; condições acordadas no orçamento.',
  },
  {
    id: '2-dias',
    days: 2,
    label: '2 dias',
    shortLabel: '2 dias',
    description: 'Para descartes pontuais; condições acordadas no orçamento.',
  },
  {
    id: '1-dia',
    days: 1,
    label: '1 dia',
    shortLabel: '1 dia',
    description: 'Para permanência rápida de 1 dia; condições acordadas no orçamento.',
  },
];

/**
 * Tabela de preços configurável por tamanho / prazo / região.
 * Valores vazios = "Consultar valor". Nunca inventar preços nem dividir semanal automaticamente.
 */
export const PRICING_CONFIG: Record<string, Record<string, string>> = {
  '3 m³': {
    '7-dias': '',
    '3-dias': '',
    '2-dias': '',
    '1-dia': '',
  },
  '4 m³': {
    '7-dias': '',
    '3-dias': '',
    '2-dias': '',
    '1-dia': '',
  },
  '5 m³': {
    '7-dias': '',
    '3-dias': '',
    '2-dias': '',
    '1-dia': '',
  },
};

export function getPriceDisplay(size: string, periodId: string): string {
  const configured = PRICING_CONFIG[size]?.[periodId];
  if (configured && configured.trim()) {
    return configured.trim();
  }
  return 'Consultar valor';
}

export const SITE_CONFIG = {
  brandName: 'Fortera Caçambas',
  legalName: 'Dias Dias Servico de Cacamba LTDA',
  cnpj: '03.983.304/0001-04',
  correspondenceAddress: 'Rua Axui, 146, Penha, São Paulo/SP, CEP 03617-040',
  addressNotice: 'Endereço para correspondência. Atendimento em todo o Brasil por rede de parceiros e afiliados, com condições acordadas no orçamento.',
  tagline: 'Sua obra avança. O entulho sai.',
  subtitle: 'Aluguel de caçambas estacionárias para obras, reformas e demolições com atendimento nacional.',
  email: 'forteracacambas@gmail.com',
  whatsapp: '5511957595840',
  whatsappFormatted: '(11) 95759-5840',
  siteUrl: (typeof process !== 'undefined' && process.env?.SITE_URL) || 
           (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) || 'https://forteracacambas.com',
  logo: SUPABASE_ASSETS.logo,
  favicon: SUPABASE_ASSETS.favicon,
  heroImage: SUPABASE_ASSETS.hero,
  detailImage: SUPABASE_ASSETS.produto,
  comparativeImage: SUPABASE_ASSETS.comparativo,
};

/**
 * Retorna URL canônica absoluta somente se houver SITE_URL configurado e válido (não localhost).
 */
export function getCanonicalUrl(path: string): string | null {
  const base = SITE_CONFIG.siteUrl?.trim();
  if (!base || base.includes('localhost') || base.includes('127.0.0.1')) {
    return null;
  }
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Helper para links WhatsApp se configurado
 */
export function getWhatsAppLink(message: string): string {
  const cleanNumber = SITE_CONFIG.whatsapp.replace(/\D/g, '') || '5511957595840';
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper para mensagem genérica de WhatsApp
 */
export function getWhatsAppGenericLink(): string {
  return getWhatsAppLink('Olá! Gostaria de solicitar um orçamento para aluguel de caçamba de entulho com a Fortera.');
}

/**
 * Helper para mensagem contextualizada de cidade
 */
export function getWhatsAppCityLink(cityName: string, uf: string): string {
  return getWhatsAppLink(`Olá! Gostaria de solicitar um orçamento para aluguel de caçamba de entulho em ${cityName} - ${uf} com a Fortera.`);
}

/**
 * Helper para mensagem contextualizada de tamanho de caçamba
 */
export function getWhatsAppSizeLink(size: string): string {
  return getWhatsAppLink(`Olá! Gostaria de um orçamento para aluguel de caçamba de ${size} com a Fortera.`);
}

/**
 * Helper para mensagem contextualizada de prazo de locação
 */
export function getWhatsAppPeriodLink(periodLabel: string): string {
  return getWhatsAppLink(`Olá! Gostaria de um orçamento para locação de caçamba no prazo de ${periodLabel} com a Fortera.`);
}

/**
 * Helper para mensagem contextualizada de serviço específico
 */
export function getWhatsAppServiceLink(serviceTitle: string): string {
  return getWhatsAppLink(`Olá! Gostaria de um orçamento para caçamba de entulho voltada para ${serviceTitle} com a Fortera.`);
}

/**
 * Helper para link mailto com assunto e corpo formatados
 */
export function getMailtoLink(subject: string, body: string): string {
  return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Configurações Centrais - Fortera Caçambas
 * 
 * Centralização de dados da marca, contatos e variáveis de ambiente.
 * - E-mail comercial: forteracacambas@gmail.com
 * - WhatsApp, CNPJ e Domínio mantidos vazios como configuração padrão até fornecimento.
 */

export const SITE_CONFIG = {
  brandName: 'Fortera Caçambas',
  tagline: 'Sua obra avança. O entulho sai.',
  subtitle: 'Aluguel de caçambas estacionárias para obras, reformas e demolições com atendimento nacional.',
  email: 'forteracacambas@gmail.com',
  whatsapp: '',
  cnpj: '',
  siteUrl: (typeof process !== 'undefined' && process.env?.SITE_URL) || 
           (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) || '',
  heroImage: '/images/cacamba_estacionaria_1791441651712.jpg',
  detailImage: '/images/cacamba_obra_detalhe_1791441663960.jpg',
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
export function getWhatsAppLink(message: string): string | null {
  if (!SITE_CONFIG.whatsapp) return null;
  const cleanNumber = SITE_CONFIG.whatsapp.replace(/\D/g, '');
  if (!cleanNumber) return null;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper para link mailto com assunto e corpo formatados
 */
export function getMailtoLink(subject: string, body: string): string {
  return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

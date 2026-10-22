import React, { useEffect } from 'react';
import { SITE_CONFIG, getCanonicalUrl } from '../config/siteConfig';
import { getRouteMeta } from '../data/routesMetadata';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  path,
  type = 'website',
  jsonLd,
}) => {
  // The same metadata source is used by SSR and client-side navigation.
  const route = getRouteMeta(path);
  title = route?.title || title;
  description = route?.description || description;
  const canonicalUrl = route ? getCanonicalUrl(route.path) : null;

  useEffect(() => {
    // Atualiza title do documento
    document.title = title;

    // Atualiza ou cria meta description
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [key, val] = selector.replace(/[\[\]']/g, '').split('=');
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:type"]', 'content', type);
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[property="og:image"]', 'content', getCanonicalUrl(SITE_CONFIG.heroImage) || '');
    setMetaTag('meta[name="twitter:image"]', 'content', getCanonicalUrl(SITE_CONFIG.heroImage) || '');
    setMetaTag('meta[name="robots"]', 'content', route ? 'index, follow' : 'noindex, follow');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
      setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    } else {
      if (canonicalLink) {
        canonicalLink.remove();
      }
    }
  }, [title, description, path, type, canonicalUrl, route]);

  // Schema.org Organization padrão
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FORTERA CAÇAMBAS',
    legalName: SITE_CONFIG.legalName,
    taxID: SITE_CONFIG.cnpj,
    email: SITE_CONFIG.email,
    telephone: '+55-11-95759-6840',
    description: SITE_CONFIG.subtitle,
    logo: SITE_CONFIG.logo,
    areaServed: { '@type': 'Country', name: 'Brasil' },
    '@id': getCanonicalUrl('/') + '#organization',
    url: getCanonicalUrl('/'),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};

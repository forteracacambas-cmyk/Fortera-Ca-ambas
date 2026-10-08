import React, { useEffect } from 'react';
import { SITE_CONFIG, getCanonicalUrl } from '../config/siteConfig';

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
  const canonicalUrl = getCanonicalUrl(path);

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
  }, [title, description, path, type, canonicalUrl]);

  // Schema.org Organization padrão
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.brandName,
    email: SITE_CONFIG.email,
    description: SITE_CONFIG.subtitle,
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
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

import React, { useEffect } from 'react';
import { SITE_CONFIG, getCanonicalUrl } from '../config/siteConfig';
import { getRouteMeta } from '../data/routesMetadata';
import { getPageImages } from '../data/pageImages';

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
  const images = getPageImages(path);
  const primaryImage = images[0] ? getCanonicalUrl(images[0]) : null;

  useEffect(() => {
    // Atualiza title do documento
    document.title = title;

    // Atualiza ou cria meta description
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const match = selector.match(/\[(name|property)="([^"]+)"\]/)!;
        el.setAttribute(match[1], match[2]);
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
    if (primaryImage) {
      setMetaTag('meta[property="og:image"]', 'content', primaryImage);
      setMetaTag('meta[name="twitter:image"]', 'content', primaryImage);
    } else {
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
    }
    setMetaTag('meta[name="robots"]', 'content', route ? 'index, follow, max-image-preview:large' : 'noindex, follow');

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
  }, [title, description, path, type, canonicalUrl, route, primaryImage]);

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
      {canonicalUrl && <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        '@context':'https://schema.org', '@type':'WebPage', '@id':canonicalUrl+'#webpage', url:canonicalUrl, name:title, description,
        ...(primaryImage ? {primaryImageOfPage:{'@type':'ImageObject','@id':canonicalUrl+'#primaryimage',contentUrl:primaryImage,url:primaryImage}, image:images.map(image=>getCanonicalUrl(image))} : {}),
      })}}/>}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};

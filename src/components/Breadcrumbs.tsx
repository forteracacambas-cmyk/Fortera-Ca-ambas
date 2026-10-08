import React from 'react';
import { SITE_CONFIG, getCanonicalUrl } from '../config/siteConfig';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const fullItems: BreadcrumbItem[] = [
    { name: 'Início', href: '/' },
    ...items
  ];

  // Schema.org BreadcrumbList
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => {
      const canonical = item.href ? getCanonicalUrl(item.href) : null;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(canonical ? { item: canonical } : (item.href ? { item: item.href } : {}))
      };
    })
  };

  return (
    <nav aria-label="Trilha de Navegação (Breadcrumb)" className="py-3 px-4 sm:px-6 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-xs text-slate-600">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-slate-400 mx-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {isLast || !item.href ? (
                <span className="font-semibold text-[#10263D] truncate max-w-[280px] sm:max-w-none" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a 
                  href={item.href} 
                  className="hover:text-[#10263D] hover:underline transition-colors"
                >
                  {item.name}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />
    </nav>
  );
};

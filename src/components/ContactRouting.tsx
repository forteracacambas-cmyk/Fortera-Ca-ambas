import React, { useEffect } from 'react';
import { getWhatsAppGenericLink } from '../config/siteConfig';
import { trackContactIntent, ContactSource } from './AnalyticsConsent';

export const isMobileContact = (ua: string, touchPoints = 0) => /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (/Macintosh/i.test(ua) && touchPoints > 1);
export const isContactHref = (href: string) => /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href) || /^\/orcamento\/?(?:[?#]|$)/.test(href) || /^#(?:consulta-cep|consultar-cep|orcamento-local)$/.test(href);
export const contactDestination = (mobile: boolean, href: string) => mobile ? (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href) ? href : getWhatsAppGenericLink()) : '/contatopc/';

export function ContactRouting({ currentUrl }: { currentUrl: string }) {
  useEffect(() => {
    const mobile = isMobileContact(navigator.userAgent, navigator.maxTouchPoints);
    document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (!isContactHref(href)) return;
      link.dataset.contactIntent = 'true';
      link.href = contactDestination(mobile, href);
      if (!mobile) link.removeAttribute('target');
    });
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a') : null;
      if (!link || ![0, 1].includes(event.button)) return;
      const source: ContactSource = link.closest('[data-contact-source="floating"]') ? 'floating' : link.closest('[data-contact-source="mobile"]') ? 'mobile' : link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'content';
      if (link.dataset.contactIntent === 'true' || isContactHref(link.getAttribute('href') || '')) trackContactIntent(mobile ? 'whatsapp_click' : 'contactpc_click', source);
      else if (link.href.startsWith('tel:')) trackContactIntent('contact_phone_click', source);
    };
    document.addEventListener('click', onClick, true);
    document.addEventListener('auxclick', onClick, true);
    return () => { document.removeEventListener('click', onClick, true); document.removeEventListener('auxclick', onClick, true); };
  }, [currentUrl]);
  return null;
}

import React, { useEffect, useState } from 'react';

const MEASUREMENT_ID = 'G-Y0X2NE1EX6';
const STORAGE_KEY = 'fortera-analytics-consent';
type Choice = 'accepted' | 'rejected';
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type ContactSource = 'header' | 'footer' | 'floating' | 'mobile' | 'content' | 'quote_form';
export function trackContactIntent(event: 'whatsapp_click' | 'quote_request', source: ContactSource = 'content', selections?: { dumpster_size: string; rental_period: string }) {
  if (typeof window === 'undefined') return;
  try {
    if (localStorage.getItem(STORAGE_KEY) === 'accepted') {
      // Do not include CEP, address, message contents or destination query strings.
      const safeSelections = selections ? {
        dumpster_size: ['3 m³', '4 m³', '5 m³', '7 m³', '10 m³', 'Preciso de ajuda para escolher'].includes(selections.dumpster_size) ? selections.dumpster_size : 'nao_informado',
        rental_period: ['1-dia', '2-dias', '3-dias', '7-dias', '15-dias', '1-mes', '2-meses', '3-meses', 'outro'].includes(selections.rental_period) ? selections.rental_period : 'outro',
      } : {};
      window.gtag?.('event', event, { contact_method: 'whatsapp', contact_source: source, page_path: window.location.pathname, ...safeSelections, transport_type: 'beacon' });
    }
  } catch { /* Tracking must never interrupt an enquiry. */ }
}

export function AnalyticsConsent({ currentUrl }: { currentUrl: string }) {
  const [choice, setChoice] = useState<Choice>('accepted');
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'rejected') setChoice('rejected');
      else {
        // Preserve the existing AI Studio configuration and its opt-out.
        if (saved !== 'accepted') localStorage.setItem(STORAGE_KEY, 'accepted');
        setChoice('accepted');
      }
    } catch { setChoice('accepted'); }
    setReady(true);
    const reopen = () => setShow(true);
    window.addEventListener('fortera:cookie-settings', reopen);
    return () => window.removeEventListener('fortera:cookie-settings', reopen);
  }, []);

  useEffect(() => {
    if (!ready || choice !== 'accepted') return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer!.push(arguments);
    };
    if (!document.getElementById('fortera-google-analytics')) {
      window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      window.gtag('js', new Date());
      window.gtag('config', MEASUREMENT_ID, { send_page_view: false, page_location: window.location.origin + currentUrl.split('?')[0], allow_google_signals: false, allow_ad_personalization_signals: false });
      const script = document.createElement('script');
      script.id = 'fortera-google-analytics';
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
      document.head.appendChild(script);
    }
    // Only the route is measured; URL queries and quote fields are not sent.
    window.gtag('event', 'page_view', { page_location: window.location.origin + currentUrl.split('?')[0], page_title: document.title });
  }, [choice, ready, currentUrl]);

  useEffect(() => {
    if (choice !== 'accepted') return;
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if ((event.button !== 0 && event.button !== 1) || !link?.href || !/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(link.href)) return;
      const source: ContactSource = link.closest('[data-contact-source="floating"]') ? 'floating'
        : link.closest('[data-contact-source="mobile"]') ? 'mobile'
        : link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'content';
      trackContactIntent('whatsapp_click', source);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('auxclick', onClick);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('auxclick', onClick); };
  }, [choice]);

  const save = (value: Choice) => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* Session choice still works. */ }
    if (value === 'rejected') {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.trim().split('=')[0];
        if (!name.startsWith('_ga')) return;
        for (const domain of ['', '; domain=' + window.location.hostname, '; domain=.forteracacambas.com']) {
          document.cookie = name + '=; Max-Age=0; path=/' + domain;
        }
      });
    } else window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    setChoice(value);
    setShow(false);
  };

  if (!show) return null;
  return <aside aria-label="Preferências de cookies" className="fixed z-[70] bottom-16 md:bottom-5 left-3 right-3 md:right-auto md:max-w-lg bg-white border border-slate-200 shadow-2xl rounded-2xl p-5 text-[#10263D]">
    <p className="font-black">Podemos melhorar sua experiência?</p>
    <p className="text-sm text-slate-600 mt-2">Com sua permissão, usamos o Google Analytics para entender visitas e cliques no WhatsApp. Você pode solicitar orçamento sem aceitar.</p>
    <a href="/privacidade/" className="text-sm underline inline-block mt-2">Política de privacidade</a>
    <div className="flex gap-3 mt-4">
      <button onClick={() => save('rejected')} className="flex-1 border border-slate-300 rounded-lg py-2 font-bold">Recusar</button>
      <button onClick={() => save('accepted')} className="flex-1 bg-[#10263D] text-white rounded-lg py-2 font-bold">Aceitar estatísticas</button>
    </div>
  </aside>;
}

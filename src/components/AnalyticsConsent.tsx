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

export function trackContactIntent(event: 'whatsapp_click' | 'quote_request') {
  if (typeof window === 'undefined') return;
  try {
    if (localStorage.getItem(STORAGE_KEY) === 'accepted') {
      window.gtag?.('event', event, { contact_method: 'whatsapp', transport_type: 'beacon' });
    }
  } catch { /* Tracking must never interrupt an enquiry. */ }
}

export function AnalyticsConsent({ currentUrl }: { currentUrl: string }) {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'accepted' || saved === 'rejected') setChoice(saved);
      else setShow(true);
    } catch { setShow(true); }
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
      if (link?.href && /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(link.href)) trackContactIntent('whatsapp_click');
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
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

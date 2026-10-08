import React from 'react';
import { RENTAL_TERMS, getWhatsAppGenericLink } from '../config/siteConfig';
export function RentalTerms() {
  return <section className="bg-[#10263D] text-white py-10"><div className="max-w-6xl mx-auto px-6"><h2 className="text-2xl font-bold mb-3">Sua obra precisa de mais tempo?</h2><p className="max-w-3xl text-slate-200 mb-5">{RENTAL_TERMS} Em uma locação de 1 mês, por exemplo, você pode solicitar uma troca a cada semana se precisar continuar o descarte.</p><a href={getWhatsAppGenericLink()} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] px-5 py-3 rounded-lg font-bold">Consultar prazo e trocas no WhatsApp</a></div></section>;
}

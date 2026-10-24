import React from 'react';
import { getWhatsAppLink } from '../config/siteConfig';
export const QuoteForm: React.FC<{ initialUf?: string; initialCity?: string; defaultSize?: string; defaultPeriod?: string; compact?: boolean }> = ({ initialCity, initialUf }) => <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-9 text-[#10263D]">
  <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Orçamento sem formulário</p>
  <h2 className="text-2xl sm:text-3xl font-black mt-3">Fale direto com a Fortera{initialCity ? ` em ${initialCity}` : ''}.</h2>
  <p className="text-slate-600 leading-relaxed mt-4">Conte sua cidade, o tipo de entulho e o prazo da obra. Nossa equipe ajuda a escolher a caçamba e confirma as condições de entrega e retirada.</p>
  <a href={getWhatsAppLink(`Olá! Gostaria de solicitar um orçamento de caçamba${initialCity ? ` em ${initialCity}${initialUf ? ' — ' + initialUf : ''}` : ''}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center mt-6 bg-[#25D366] text-[#082c1b] rounded-xl px-6 py-4 font-bold">Solicitar orçamento agora →</a>
</div>;

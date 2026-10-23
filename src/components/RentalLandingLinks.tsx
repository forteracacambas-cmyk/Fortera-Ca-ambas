import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RENTAL_LANDINGS } from '../data/rentalLandingPages';

export function RentalLandingLinks() {
  return <section className="bg-[#F6F5F1] py-14 sm:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6"><p className="text-xs font-bold uppercase tracking-widest text-amber-700">Da escolha à contratação</p><h2 className="text-3xl sm:text-4xl font-black text-[#10263D] mt-3">Encontre a solução para o seu entulho.</h2><div className="grid md:grid-cols-3 gap-6 mt-8">{RENTAL_LANDINGS.map(page=><article key={page.path} className="rounded-2xl overflow-hidden bg-white border border-slate-200"><a href={page.path} tabIndex={-1} aria-hidden="true"><img src={'/images/contratacao/'+page.image+'-640.webp'} alt="" width={640} height={427} loading="lazy" className="w-full aspect-[3/2] object-cover"/></a><div className="p-6"><h3 className="text-xl font-bold text-[#10263D]"><a href={page.path}>{page.label}</a></h3><p className="text-sm text-slate-600 leading-relaxed mt-3">{page.sectionIntro}</p><a href={page.path} className="inline-flex items-center gap-2 font-bold text-sm text-[#10263D] mt-5">Ver opções e pedir orçamento <ArrowRight size={16} aria-hidden="true"/></a></div></article>)}</div></div></section>;
}

import { DumpsterSizeGallery } from '../components/DumpsterSizeGallery';
import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { QuoteForm } from '../components/QuoteForm';
export function OrcamentoPage({initialUf,initialCity}: {initialUf?:string;initialCity?:string;initialSize?:string;initialPeriod?:string}) { return <div className="bg-slate-50 py-14"><SeoHead path="/orcamento/" title="Orçamento de caçamba | Fortera" description="Solicite orçamento de caçamba direto com a Fortera, sem formulário."/><div className="max-w-4xl mx-auto px-5"><h1 className="text-4xl font-black mb-8">Seu orçamento, direto com a Fortera.</h1><QuoteForm initialUf={initialUf} initialCity={initialCity}/><section className="mt-12"><h2 className="text-2xl font-black">Compare os tamanhos antes de pedir</h2><DumpsterSizeGallery location={initialCity}/></section></div></div>; }

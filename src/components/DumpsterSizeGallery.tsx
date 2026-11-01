import React from 'react';
import { SIZE_CAPACITIES, dumpsterSizeImage } from '../data/dumpsterSizeImages';
import { getWhatsAppLink } from '../config/siteConfig';

export function DumpsterSizeImage({ size }: { size: number }) {
  const image = dumpsterSizeImage(size);
  return <img {...image} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw" loading="lazy" decoding="async" className="w-full h-auto aspect-square object-contain rounded-xl bg-slate-100 mb-5" data-dumpster-size={size} />;
}

export function DumpsterSizeGallery({ location, showContact = true }: { location?: string; showContact?: boolean }) {
  return <div className="mt-8" data-size-gallery="all">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {SIZE_CAPACITIES.map(size => <article key={size} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col">
        <DumpsterSizeImage size={size}/>
        <h3 className="text-xl font-black text-[#10263D]">Caçamba de {size} m³</h3>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{size >= 7 ? 'Capacidade ampliada sob consulta de disponibilidade, carga e acesso.' : 'Informe o material e o volume previsto para confirmar capacidade, peso e disponibilidade.'}</p>
        {showContact && <a href={getWhatsAppLink(`Olá! Gostaria de solicitar um orçamento de caçamba de ${size} m³${location ? ` para ${location}` : ''}. Quero confirmar disponibilidade, entrega e retirada.`)} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center mt-5 rounded-xl bg-[#25D366] text-[#082c1b] px-4 py-3 font-bold text-sm">Consultar {size} m³ →</a>}
      </article>)}
    </div>
    <p className="mt-4 text-xs text-slate-500 leading-relaxed">Comparação visual com medidas de referência. As dimensões variam conforme o modelo; confirme medidas, limite de peso e disponibilidade para a sua obra. Opções de 7 e 10 m³ sob consulta.</p>
  </div>;
}

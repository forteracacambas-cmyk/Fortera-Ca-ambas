import React from 'react';
import { SITE_IMAGES, RENTAL_PERIODS, getWhatsAppLink } from '../config/siteConfig';

export const LocalRentalDetails = ({ location }: { location: string }) => (
  <>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-black uppercase text-slate-500">Escolha com orientação</p>
          <h2 className="text-3xl font-black mt-2">Qual caçamba escolher para sua obra em {location}?</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">Uma reforma de banheiro, uma troca de piso e uma obra com madeira produzem cargas diferentes. Conte quais materiais serão descartados e, se possível, envie fotos do entulho. O volume em m³ representa espaço; o limite de peso depende do material e da operação.</p>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li><strong>3 m³:</strong> consulte para reformas pontuais e menor volume de resíduos.</li>
            <li><strong>4 e 5 m³:</strong> consulte para reformas com maior geração de entulho, observando peso e espaço disponível.</li>
            <li><strong>7 e 10 m³:</strong> capacidades ampliadas sob consulta de disponibilidade, acesso e carga.</li>
          </ul>
          <a href="/tamanhos-de-cacamba/" className="inline-block mt-6 font-bold underline">Ver dimensões e comparativo completo →</a>
        </div>
        <img src={SITE_IMAGES.comparative.src} alt="Comparativo de caçambas Fortera de 3, 4, 5, 7 e 10 m³ com dimensões de referência" width={1536} height={1024} loading="lazy" className="w-full h-auto rounded-2xl border border-slate-200" />
      </div>
    </section>
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-black">Preço e prazo do aluguel em {location}</h2>
        <p className="max-w-3xl mt-4 text-slate-600 leading-relaxed">O orçamento considera município e bairro, tamanho, composição dos resíduos, acesso do caminhão e prazo de permanência. Peça o valor total e confirme o que está incluído na entrega e na retirada. Prorrogação, troca ou recolhimento adicional devem ser combinados antes da contratação.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {RENTAL_PERIODS.map(period => <article key={period.id} className={`rounded-xl p-6 border-2 bg-white ${period.days === 7 ? 'border-[#FFC52D]' : 'border-slate-200'}`}>
            <h3 className="text-xl font-black">{period.shortLabel}</h3><p className="text-sm text-slate-600 mt-3">{period.description}</p><p className="font-bold mt-4">Consultar valor</p>
            <a className="block text-center bg-[#25D366] text-white py-3 px-3 rounded-lg mt-4 text-sm font-bold" target="_blank" rel="noopener noreferrer" href={getWhatsAppLink(`Olá! Gostaria de cotar caçamba em ${location} por ${period.shortLabel}. Cidade/bairro e material: `)}>Pedir orçamento</a>
          </article>)}
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
        <article className="rounded-2xl border border-slate-200 p-7"><h2 className="text-2xl font-black">O que informar antes de reservar</h2><ol className="list-decimal pl-5 mt-5 space-y-3 text-slate-600"><li>Cidade, bairro e endereço do ponto de entrega.</li><li>Tipo de obra e materiais predominantes do entulho.</li><li>Fotos da vaga, entrada e obstáculos para o caminhão.</li><li>Data pretendida, prazo e horários do condomínio.</li><li>Necessidade de separação de resíduos e condições de retirada.</li></ol></article>
        <article className="rounded-2xl bg-[#10263D] text-white p-7"><h2 className="text-2xl font-black">Materiais, vaga e retirada</h2><p className="mt-5 text-slate-200 leading-relaxed">Alvenaria, concreto e revestimentos devem ser descritos na cotação. Gesso, madeira, terra e outros materiais exigem confirmação de aceitação e separação. Não misture resíduos domésticos, líquidos, tintas ou materiais perigosos ao entulho.</p><p className="mt-4 text-slate-200 leading-relaxed">Mantenha a carga dentro da borda. A colocação em via pública depende das regras do município; confirme o ponto e eventuais autorizações antes da entrega.</p><a href="/guias/o-que-pode-colocar-na-cacamba/" className="inline-block text-[#FFC52D] font-bold mt-5">Consultar guia de materiais →</a></article>
      </div>
    </section>
  </>
);

import React, { useState } from 'react';
import { BRAZILIAN_STATES } from '../data/regionsAndStates';
import { DUMPSTER_SIZES } from '../data/dumpsterSizes';
import { RENTAL_PERIODS, RENTAL_TERMS, getWhatsAppLink } from '../config/siteConfig';
interface QuoteFormProps { initialUf?: string; initialCity?: string; defaultSize?: string; defaultPeriod?: string; }
export const QuoteForm: React.FC<QuoteFormProps> = ({ initialUf = 'SP', initialCity = '', defaultSize = '4 m³', defaultPeriod = '7-dias' }) => {
  const [uf, setUf] = useState(initialUf);
  const [city, setCity] = useState(initialCity);
  const [bairro, setBairro] = useState('');
  const [period, setPeriod] = useState(defaultPeriod);
  const [size, setSize] = useState(defaultSize);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!city.trim()) { event.currentTarget.querySelector<HTMLInputElement>('[name="cidade"]')?.focus(); return; }
    const prazo = RENTAL_PERIODS.find(p => p.id === period)?.label || period;
    const message = ['Olá! Quero um orçamento da Fortera Caçambas.', 'País: Brasil', 'Estado: ' + uf, 'Cidade: ' + city.trim(), 'Bairro: ' + (bairro.trim() || 'A informar'), 'Prazo: ' + prazo, 'Tamanho: ' + size].join('\n');
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };
  const input = 'w-full rounded-lg border border-slate-300 p-3 mt-2 bg-white';
  return <form onSubmit={submit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-7">
    <div><h2 className="text-2xl font-black">Peça seu orçamento pelo WhatsApp</h2><p className="text-slate-600 mt-2">Informe onde fica a obra, escolha o prazo e o tamanho. O pedido segue direto para nosso atendimento.</p></div>
    <div className="grid sm:grid-cols-3 gap-4">
      <label className="font-bold">Estado<select name="estado" required value={uf} onChange={e => setUf(e.target.value)} className={input}>{BRAZILIAN_STATES.map(s => <option key={s.uf} value={s.uf}>{s.uf} — {s.name}</option>)}</select></label>
      <label className="font-bold">Cidade<input name="cidade" required maxLength={100} value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade da sua obra" className={input}/></label>
      <label className="font-bold">Bairro <span className="text-sm font-normal">(opcional)</span><input name="bairro" maxLength={100} value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Bairro da sua obra" className={input}/></label>
    </div>
    <label className="block font-bold">Quanto tempo você precisa?<select name="prazo" value={period} onChange={e => setPeriod(e.target.value)} className={input}>{[...RENTAL_PERIODS].sort((a,b) => (a.days || 9999)-(b.days || 9999)).map(p => <option key={p.id} value={p.id}>{p.label}</option>)}</select></label>
    <div className="bg-amber-50 rounded-xl p-4 text-sm text-slate-700"><strong>Dias, semanas ou meses:</strong> {RENTAL_TERMS}</div>
    <fieldset><legend className="font-black text-xl mb-2">Escolha o tamanho da caçamba</legend><p className="text-sm text-slate-600 mb-4">Veja qual combina com sua obra. Capacidade nominal; dimensões e disponibilidade variam conforme o modelo da sua região.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{DUMPSTER_SIZES.map(s => <label key={s.slug} className={'cursor-pointer rounded-xl border-2 overflow-hidden ' + (size === s.volume ? 'border-[#10263D] bg-yellow-50' : 'border-slate-200')}><img src={s.image.src} alt={s.image.alt} width={s.image.width} height={s.image.height} loading="lazy" className="w-full h-36 object-cover"/><div className="p-4"><div className="flex gap-2 items-center"><input type="radio" name="tamanho" value={s.volume} checked={size === s.volume} onChange={() => setSize(s.volume)}/><strong>{s.volume}</strong></div><p className="text-sm text-slate-600 mt-2">{s.recommendedFor[0]}</p><p className="text-xs mt-2">{s.status === 'sob-consulta' ? 'Disponibilidade sob consulta' : 'Consulte o modelo para sua região'}</p></div></label>)}<label className="rounded-xl border-2 border-slate-200 p-5 cursor-pointer flex gap-3 items-center"><input type="radio" name="tamanho" checked={size === 'Preciso de ajuda para escolher'} onChange={() => setSize('Preciso de ajuda para escolher')}/><span><strong>Não sei qual escolher</strong><span className="block text-sm mt-2">Ajudamos você pelo WhatsApp.</span></span></label></div>
    </fieldset>
    <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-lg p-4 rounded-xl">Solicitar orçamento pelo WhatsApp</button>
    <p className="text-xs text-slate-500">A disponibilidade e o valor são confirmados para o endereço da obra. Ao continuar, você abre o WhatsApp com suas escolhas.</p>
  </form>;
};

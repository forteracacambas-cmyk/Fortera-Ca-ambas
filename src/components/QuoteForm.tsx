import React, { useId, useRef, useState } from 'react';
import { trackContactIntent } from './AnalyticsConsent';
import { DUMPSTER_SIZES } from '../data/dumpsterSizes';
import { RENTAL_PERIODS, RENTAL_TERMS, getWhatsAppLink, getWhatsAppGenericLink } from '../config/siteConfig';

interface QuoteFormProps { initialUf?: string; initialCity?: string; defaultSize?: string; defaultPeriod?: string; compact?: boolean; }
interface PostalAddress { cep: string; street: string; neighborhood: string; city: string; uf: string; }
type PostalResponse = { erro?: boolean | string; logradouro?: string; bairro?: string; localidade?: string; uf?: string };
const digits = (value: string) => value.replace(/\D/g, '').slice(0, 8);
const formatCep = (value: string) => digits(value).replace(/^(\d{5})(\d)/, '$1-$2');

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialUf, initialCity, defaultSize = '4 m³', defaultPeriod = '7-dias', compact = false }) => {
  const id = useId();
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<PostalAddress | null>(null);
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [period, setPeriod] = useState(RENTAL_PERIODS.some(option => option.id === defaultPeriod) ? defaultPeriod : '7-dias');
  const [size, setSize] = useState(DUMPSTER_SIZES.some(option => option.volume === defaultSize) ? defaultSize : '4 m³');
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const request = useRef<AbortController | null>(null);

  const changeCep = (value: string) => {
    request.current?.abort(); request.current = null;
    setLoading(false); setAddress(null); setError(''); setSending(false);
    setNumber(''); setComplement(''); setCep(formatCep(value));
  };
  const lookup = async (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) return;
    const code = digits(cep);
    if (code.length !== 8) { setError('Digite um CEP com 8 números.'); return; }
    request.current?.abort();
    const controller = new AbortController(); request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    setLoading(true); setError(''); setAddress(null);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${code}/json/`, { signal: controller.signal, referrerPolicy: 'no-referrer' });
      if (!response.ok) throw new Error('Não foi possível consultar agora. Tente novamente ou fale direto no WhatsApp.');
      const data: PostalResponse = await response.json();
      if (data.erro || !data.localidade || !data.uf) throw new Error('CEP não encontrado. Confira os números e tente novamente.');
      if (request.current !== controller) return;
      setAddress({ cep: formatCep(code), street: data.logradouro || '', neighborhood: data.bairro || '', city: data.localidade, uf: data.uf });
    } catch (cause) {
      if (request.current !== controller) return;
      setError(cause instanceof Error && cause.name !== 'AbortError' ? cause.message : 'A consulta demorou mais que o esperado. Tente de novo ou fale no WhatsApp.');
    } finally {
      window.clearTimeout(timeout);
      if (request.current === controller) { setLoading(false); request.current = null; }
    }
  };
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!address || sending) return;
    if (!address.street.trim() || !number.trim()) { setError('Preencha a rua e o número da obra. Para um local sem número, use s/n.'); return; }
    const prazo = RENTAL_PERIODS.find(p => p.id === period)?.label || period;
    const selections = { dumpster_size: size, rental_period: period };
    const message = ['Olá! Quero um orçamento da Fortera Caçambas.',
      'CEP: ' + address.cep, 'Endereço: ' + address.street.trim() + ', ' + number.trim(),
      'Bairro: ' + (address.neighborhood.trim() || 'A informar'), 'Cidade: ' + address.city + ' - ' + address.uf,
      'Complemento: ' + (complement.trim() || 'Não informado'), 'Prazo: ' + prazo, 'Tamanho: ' + size,
      'Gostaria de confirmar disponibilidade, entrega e valor para este endereço.'].join('\n');
    trackContactIntent('quote_request', 'quote_form', selections);
    trackContactIntent('whatsapp_click', 'quote_form', selections);
    setSending(true);
    // Explicit submit opens WhatsApp; same-tab navigation avoids popup blockers.
    window.location.assign(getWhatsAppLink(message));
    window.setTimeout(() => setSending(false), 1500);
  };
  const input = 'w-full rounded-lg border border-slate-300 p-3 mt-2 bg-white text-[#10263D]';
  return <div className="bg-white text-[#10263D] rounded-2xl border border-slate-200 p-5 sm:p-8 space-y-6">
    <div><h2 className="text-2xl font-black">Preencha seu CEP para consultar disponibilidade</h2><p className="text-slate-600 mt-2">Encontre o endereço da obra e leve seu pedido direto para o WhatsApp{initialCity ? ` em ${initialCity}${initialUf ? ' — ' + initialUf : ''}` : ''}.</p></div>
    <form onSubmit={lookup} className="space-y-3">
      <label htmlFor={`${id}-cep`} className="font-bold">CEP da obra</label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input id={`${id}-cep`} name="cep" autoComplete="postal-code" inputMode="numeric" placeholder="00000-000" value={cep} onChange={event => changeCep(event.target.value)} required pattern="[0-9]{5}-?[0-9]{3}" maxLength={9} className={input + ' sm:mt-0'} aria-describedby={`${id}-cep-help`} />
        <button disabled={loading} type="submit" className="rounded-lg px-6 py-3 bg-[#10263D] text-white font-black disabled:opacity-60">{loading ? 'Consultando…' : 'Consultar CEP'}</button>
      </div>
      <p id={`${id}-cep-help`} className="text-xs text-slate-500">Consulta de endereço pelo ViaCEP. Número e complemento ficam apenas no pedido para o WhatsApp.</p>
      {error && <p role="alert" className="text-sm text-red-700 font-semibold">{error}</p>}
    </form>
    {address && <form onSubmit={submit} className="space-y-6">
      <div role="status" className="bg-green-50 border border-green-200 rounded-xl p-4"><strong className="text-green-800">Disponível para solicitar orçamento nesta região</strong><p className="mt-1 text-sm">CEP {address.cep} · {address.city} — {address.uf}. A equipe confirma entrega, prazo e valor pelo WhatsApp.</p></div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="font-bold sm:col-span-2">Endereço da obra<input name="logradouro" autoComplete="address-line1" value={address.street} onChange={event => setAddress({ ...address, street: event.target.value })} placeholder="Rua ou avenida da obra" required maxLength={180} className={input} /></label>
        <label className="font-bold">Bairro<input name="bairro" autoComplete="address-level3" value={address.neighborhood} onChange={event => setAddress({ ...address, neighborhood: event.target.value })} placeholder="Bairro da obra" maxLength={100} className={input} /></label>
        <label className="font-bold">Cidade / UF<input value={`${address.city} / ${address.uf}`} readOnly className={input + ' bg-slate-50'} /></label>
        <label className="font-bold">Número da obra<input name="numero" autoComplete="off" value={number} onChange={event => setNumber(event.target.value)} placeholder="Ex.: 120 ou s/n" required maxLength={20} className={input} /></label>
        <label className="font-bold">Complemento <span className="text-sm font-normal">(opcional)</span><input name="complemento" autoComplete="address-line2" value={complement} onChange={event => setComplement(event.target.value)} placeholder="Casa, apartamento, bloco ou referência" maxLength={160} className={input} /></label>
      </div>
      <label className="block font-bold">Quanto tempo você precisa?<select name="prazo" value={period} onChange={event => setPeriod(event.target.value)} className={input}>{[...RENTAL_PERIODS].sort((a,b) => (a.days || 9999)-(b.days || 9999)).map(option => <option key={option.id} value={option.id}>{option.label}</option>)}</select></label>
      {compact ? <label className="block font-bold">Tamanho da caçamba<select name="tamanho" value={size} onChange={event => setSize(event.target.value)} className={input}>{DUMPSTER_SIZES.map(option => <option key={option.slug} value={option.volume}>{option.volume}{option.status === 'sob-consulta' ? ' — sob consulta' : ''}</option>)}<option value="Preciso de ajuda para escolher">Preciso de ajuda para escolher</option></select></label> : <fieldset><legend className="font-black text-xl">Escolha o tamanho da caçamba</legend><p className="text-sm text-slate-600 mt-2 mb-4">Capacidades nominais. Modelo e limites de carga confirmados no orçamento.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{DUMPSTER_SIZES.map(option => <label key={option.slug} className={'cursor-pointer rounded-xl border-2 overflow-hidden ' + (size === option.volume ? 'border-[#10263D] bg-yellow-50' : 'border-slate-200')}><img src={option.image.src} alt={option.image.alt} width={option.image.width} height={option.image.height} loading="lazy" className="w-full h-32 object-cover"/><div className="p-4"><input type="radio" name="tamanho" value={option.volume} checked={size === option.volume} onChange={() => setSize(option.volume)} className="mr-2"/><strong>{option.volume}</strong><p className="text-sm mt-2">{option.status === 'sob-consulta' ? 'Disponibilidade sob consulta' : option.recommendedFor[0]}</p></div></label>)}<label className="rounded-xl border-2 p-4"><input type="radio" name="tamanho" checked={size === 'Preciso de ajuda para escolher'} onChange={() => setSize('Preciso de ajuda para escolher')} className="mr-2"/>Não sei qual escolher</label></div></fieldset>}
      <p className="text-sm bg-amber-50 p-4 rounded-xl">{RENTAL_TERMS}</p>
      <button type="submit" disabled={sending} className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-lg p-4 rounded-xl disabled:opacity-60">{sending ? 'Abrindo WhatsApp…' : 'Consultar e continuar no WhatsApp'}</button>
      <p className="text-xs text-slate-500">Ao continuar, o WhatsApp abre com seu endereço e as opções escolhidas. Revise e envie a mensagem para a Fortera.</p>
    </form>}
    <p className="text-sm text-center">Prefere falar agora? <a href={getWhatsAppGenericLink()} target="_blank" rel="noopener noreferrer" className="text-green-800 underline font-bold">Chamar direto no WhatsApp</a></p>
  </div>;
};

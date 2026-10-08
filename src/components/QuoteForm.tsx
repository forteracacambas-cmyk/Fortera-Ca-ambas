import React, { useState, useRef } from 'react';
import { BRAZILIAN_STATES } from '../data/regionsAndStates';
import { SITE_CONFIG, RENTAL_PERIODS, getMailtoLink, getWhatsAppLink, getPriceDisplay } from '../config/siteConfig';

interface QuoteFormProps {
  initialUf?: string;
  initialCity?: string;
  defaultSize?: string;
  defaultPeriod?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialUf = 'SP',
  initialCity = '',
  defaultSize = '4 m³',
  defaultPeriod = '7-dias',
}) => {
  const [uf, setUf] = useState(initialUf.toUpperCase());
  const [city, setCity] = useState(initialCity);
  const [neighborhood, setNeighborhood] = useState('');
  const [material, setMaterial] = useState('Misto de reforma (alvenaria, madeiras e tubos)');
  const [dumpsterSize, setDumpsterSize] = useState(defaultSize);
  const [rentalPeriod, setRentalPeriod] = useState(defaultPeriod);
  const [startDate, setStartDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const cityInputRef = useRef<HTMLInputElement>(null);

  const materialsList = [
    'Misto de reforma (alvenaria, madeiras e tubos)',
    'Alvenaria e concreto (tijolos, reboco e pisos quebrados)',
    'Madeiramento, caixarias e pisos laminados',
    'Drywall, gesso e forros desmontados',
    'Terra vegetal e solo de escavação',
    'Outros resíduos (detalhar nas observações)',
  ];

  const sizeOptions = [
    { value: '3 m³', label: '3 m³ - Nominal (Intervenções pontuais e alvenaria densa)' },
    { value: '4 m³', label: '4 m³ - Nominal (Reformas residenciais e comerciais de porte médio)' },
    { value: '5 m³', label: '5 m³ - Nominal (Materiais volumosos de média densidade)' },
    { value: '7 m³', label: '7 m³ - Sob Consulta (Obras maiores e limpezas gerais)' },
    { value: '10 m³', label: '10 m³ - Sob Consulta (Grandes canteiros e entulho leve)' },
    { value: 'Mini / Sob Medida', label: 'Mini / Sob Medida - Sob Consulta (Acessos especiais)' },
    { value: 'Não sei o tamanho', label: 'Ainda não sei o tamanho ideal (preciso de orientação técnica)' },
  ];

  const currentPeriodObj = RENTAL_PERIODS.find(p => p.id === rentalPeriod) || RENTAL_PERIODS[0];
  const priceDisplay = getPriceDisplay(dumpsterSize, rentalPeriod);

  const validateForm = (): boolean => {
    if (!uf || !uf.trim()) {
      setErrorMessage('Por favor, selecione o Estado (UF) da sua obra para prosseguir.');
      return false;
    }
    if (!city || !city.trim()) {
      setErrorMessage('Por favor, informe a cidade da sua obra para prosseguir com o pedido.');
      if (cityInputRef.current) {
        cityInputRef.current.focus();
      }
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const generateSummaryText = () => {
    return [
      `*PEDIDO DE ORÇAMENTO - FORTERA CAÇAMBAS*`,
      `---------------------------------------------`,
      `País: Brasil`,
      `Estado (UF): ${uf.trim()}`,
      `Cidade: ${city.trim()}`,
      `Bairro: ${neighborhood.trim() ? neighborhood.trim() : 'Não especificado'}`,
      `Tamanho da caçamba: ${dumpsterSize}`,
      `Prazo de locação: ${currentPeriodObj.label}`,
      `Data prevista de entrega: ${startDate ? startDate : 'A combinar'}`,
      `Tipo de resíduo: ${material}`,
      `Nome do responsável: ${clientName.trim() || 'Não informado'}`,
      `Telefone/WhatsApp de retorno: ${clientPhone.trim() || 'Não informado'}`,
      notes.trim() ? `Observações de acesso: ${notes.trim()}` : null,
      `---------------------------------------------`,
      `Pedido preparado no site Fortera Caçambas`
    ].filter(Boolean).join('\n');
  };

  const handleCopySummary = async () => {
    const text = generateSummaryText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const emailSubject = `Solicitação de Orçamento de Caçamba - ${city.trim()} (${uf}) [${currentPeriodObj.shortLabel}]`;
    const mailtoHref = getMailtoLink(emailSubject, generateSummaryText());
    window.location.href = mailtoHref;
  };

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const whatsappHref = getWhatsAppLink(generateSummaryText());
    if (whatsappHref) {
      window.open(whatsappHref, '_blank', 'noopener,noreferrer');
    }
  };

  const isWhatsAppConfigured = Boolean(SITE_CONFIG.whatsapp);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      
      {/* Cabeçalho do Card */}
      <div className="bg-[#10263D] text-white p-6 sm:p-8 border-b-4 border-[#FFC52D]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-block bg-[#FFC52D] text-[#10263D] text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded">
            Atendimento Nacional &bull; Brasil
          </span>
          <span className="text-xs text-slate-300 font-semibold">
            Estimativa de valor: <strong className="text-[#FFC52D]">{priceDisplay}</strong>
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
          Solicitar Orçamento de Caçamba
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Preencha os dados da sua obra. Escolha o tamanho e o prazo de locação (destaque para o plano semanal de 7 dias). Sem campos burocráticos.
        </p>
      </div>

      {/* Formulário com validação real */}
      <form onSubmit={handleOpenEmail} className="p-6 sm:p-8 space-y-6">
        
        {/* Mensagem de Erro de Validação */}
        {errorMessage && (
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-md text-sm text-amber-900 font-semibold flex items-start gap-2">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Linha 1: Localização (País fixo Brasil, UF, Cidade e Bairro) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          
          <div className="sm:col-span-3">
            <label htmlFor="quote-uf" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Estado (UF) <span className="text-red-500">*</span>
            </label>
            <select
              id="quote-uf"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base text-slate-900 focus:bg-white focus-visible-ring"
              required
            >
              {BRAZILIAN_STATES.map((st) => (
                <option key={st.uf} value={st.uf}>
                  {st.uf} - {st.name}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-5">
            <label htmlFor="quote-city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Cidade <span className="text-red-500">*</span>
            </label>
            <input
              ref={cityInputRef}
              id="quote-city"
              type="text"
              placeholder="Ex: São Paulo, Campinas, Curitiba..."
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                if (errorMessage && e.target.value.trim()) setErrorMessage('');
              }}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base text-slate-900 focus:bg-white focus-visible-ring"
              required
            />
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="quote-neighborhood" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Bairro <span className="text-slate-400 font-normal">(Opcional)</span>
            </label>
            <input
              id="quote-neighborhood"
              type="text"
              placeholder="Ex: Centro, Jardim das Flores..."
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base text-slate-900 focus:bg-white focus-visible-ring"
            />
          </div>

        </div>

        {/* Linha 2: Tamanho da Caçamba e Prazo de Locação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>
            <label htmlFor="quote-size" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Tamanho Desejado <span className="text-red-500">*</span>
            </label>
            <select
              id="quote-size"
              value={dumpsterSize}
              onChange={(e) => setDumpsterSize(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-base text-slate-900 focus:bg-white focus-visible-ring"
            >
              {sizeOptions.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1">
              Capacidade nominal volumétrica. Dimensões e peso máximo sob consulta para sua região.
            </p>
          </div>

          {/* Prazo de Locação com Destaque para 7 Dias (Semanal) */}
          <div>
            <label htmlFor="quote-period" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
              <span>Prazo de Permanência <span className="text-red-500">*</span></span>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Semanal em Destaque
              </span>
            </label>
            <select
              id="quote-period"
              value={rentalPeriod}
              onChange={(e) => setRentalPeriod(e.target.value)}
              className="w-full bg-slate-50 border-2 border-[#10263D] rounded-lg px-3.5 py-2.5 text-sm sm:text-base text-slate-900 font-semibold focus:bg-white focus-visible-ring"
            >
              {RENTAL_PERIODS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-600 mt-1">
              {currentPeriodObj.description}
            </p>
          </div>

        </div>

        {/* Linha 3: Material e Previsão de Início */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>
            <label htmlFor="quote-material" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Tipo de Resíduo da Obra <span className="text-red-500">*</span>
            </label>
            <select
              id="quote-material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-base text-slate-900 focus:bg-white focus-visible-ring"
            >
              {materialsList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1">
              Gesso, drywall e madeira dependem de regras de aceitação e triagem na sua região.
            </p>
          </div>

          <div>
            <label htmlFor="quote-date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Data Prevista de Entrega <span className="text-slate-400 font-normal">(Opcional)</span>
            </label>
            <input
              id="quote-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base text-slate-900 focus:bg-white focus-visible-ring"
            />
          </div>

        </div>

        {/* Linha 4: Contato (Simples e Opcionais) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div>
            <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Seu Nome <span className="text-slate-400 font-normal">(Opcional)</span>
            </label>
            <input
              id="quote-name"
              type="text"
              placeholder="Ex: Carlos Silva"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base text-slate-900 focus:bg-white focus-visible-ring"
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Telefone / WhatsApp para Retorno <span className="text-slate-400 font-normal">(Opcional)</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              placeholder="(XX) 99999-9999"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base text-slate-900 focus:bg-white focus-visible-ring"
            />
          </div>

        </div>

        {/* Observações de acesso */}
        <div>
          <label htmlFor="quote-notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Observações de Acesso ou do Imóvel <span className="text-slate-400 font-normal">(Opcional)</span>
          </label>
          <textarea
            id="quote-notes"
            rows={2}
            placeholder="Ex: Vaga na guia, condomínio fechado, fiação baixa sobre o local, declive na via..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm sm:text-base text-slate-900 focus:bg-white focus-visible-ring"
          ></textarea>
        </div>

        {/* Bloco de Resumo do Pedido */}
        <div className="bg-slate-100 rounded-xl p-4 sm:p-5 border border-slate-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10263D] flex items-center gap-1.5">
              <span>Resumo do Pedido</span>
              <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-normal">
                {currentPeriodObj.shortLabel}
              </span>
            </span>
            <button
              type="button"
              onClick={handleCopySummary}
              className="text-xs font-bold text-[#10263D] bg-[#FFC52D] hover:bg-[#EBB220] px-3 py-1.5 rounded transition-colors focus-visible-ring flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Resumo Copiado!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copiar Resumo</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-xs font-mono text-slate-800 bg-white p-3 rounded-lg border border-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {generateSummaryText()}
          </pre>
        </div>

        {/* Ações de Envio com Validação e Transparência */}
        <div className="space-y-4 pt-2">
          
          <div className="flex flex-col sm:flex-row gap-3">
            
            {/* Botão de WhatsApp Oficial Conectado */}
            <button
              type="button"
              onClick={handleOpenWhatsApp}
              className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-center py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 focus-visible-ring text-base cursor-pointer active:scale-95"
            >
              <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.222-.559-1.826-.757-3.003-2.617-3.094-2.738-.091-.121-.741-.986-.741-1.88 0-.895.469-1.336.636-1.517.167-.182.365-.228.486-.228.122 0 .243.002.349.007.112.005.263-.042.411.316.152.365.517 1.262.563 1.354.045.091.076.198.015.319-.06.121-.091.198-.182.304-.091.106-.192.236-.274.317-.091.091-.186.19-.08.372.106.182.471.776 1.011 1.258.696.62 1.282.812 1.464.903.182.091.289.076.395-.046.106-.121.456-.532.577-.714.122-.182.243-.152.411-.091.167.061 1.064.502 1.246.593.182.091.304.137.349.213.045.076.045.441-.099.846z"/>
              </svg>
              <span>Solicitar Orçamento no WhatsApp</span>
            </button>

            {/* Ação Oficial por E-mail */}
            <button
              type="submit"
              className="flex-1 bg-[#10263D] hover:bg-[#1A3856] text-white font-extrabold text-center py-4 px-6 rounded-lg shadow transition-colors flex items-center justify-center gap-2 focus-visible-ring text-base border-2 border-[#FFC52D] cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#FFC52D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Abrir no E-mail</span>
            </button>

          </div>

          {/* Aviso Claro sobre o Fluxo */}
          <div className="bg-amber-50 border-l-4 border-[#FFC52D] p-4 rounded-r-lg text-xs text-slate-700 space-y-1">
            <p className="font-bold text-[#10263D] flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Como funciona o atendimento:</span>
            </p>
            <p>
              Ao clicar em <strong>&quot;Solicitar Orçamento no WhatsApp&quot;</strong>, seu aplicativo abrirá uma conversa direta com a central da Fortera no número <strong>(11) 95759-5840</strong> contendo os dados organizados da sua obra.
            </p>
            <p>
              Ao clicar em <strong>&quot;Abrir no E-mail&quot;</strong>, seu aplicativo de e-mail abre mensagem pré-formatada para <strong className="font-mono text-slate-900">forteracacambas@gmail.com</strong>.
            </p>
            <p className="text-slate-500 pt-1">
              Você também pode usar o botão <strong>&quot;Copiar Resumo&quot;</strong> acima para colar o pedido onde desejar.
            </p>
          </div>

        </div>

      </form>
    </div>
  );
};

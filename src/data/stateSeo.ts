import type { StateInfo } from './regionsAndStates';

const STATE_PREPOSITIONS: Record<string, string> = {
  AC: 'no', AL: 'em', AP: 'no', AM: 'no', BA: 'na', CE: 'no', DF: 'no',
  ES: 'no', GO: 'em', MA: 'no', MT: 'em', MS: 'em', MG: 'em', PA: 'no',
  PB: 'na', PR: 'no', PE: 'em', PI: 'no', RJ: 'no', RN: 'no', RS: 'no',
  RO: 'em', RR: 'em', SC: 'em', SP: 'em', SE: 'em', TO: 'no',
};

export const stateLocation = (state: StateInfo) => `${STATE_PREPOSITIONS[state.uf] || 'em'} ${state.name}`;

export function stateSeo(state: StateInfo) {
  if (state.uf === 'PR') return {title:'Aluguel de Caçamba no Paraná | 399 Municípios — Fortera',description:'Locação de caçamba de entulho no Paraná. Encontre seu município, consulte capacidades, preço, prazo, entrega e retirada. Orçamento para sua obra sem formulário.'};
  if (state.uf === 'RJ') return {title:'Aluguel de Caçamba no Rio de Janeiro | 92 Municípios — Fortera',description:'Locação de caçamba de entulho no estado do Rio de Janeiro. Encontre sua cidade entre os 92 municípios, consulte tamanho, preço, entrega e retirada e peça orçamento direto.'};
  if (state.uf === 'BA') return {
    title: 'Aluguel de Caçamba na Bahia | 417 Municípios — Fortera',
    description: 'Locação de caçamba de entulho na Bahia. Encontre sua cidade entre os 417 municípios, veja regiões, tamanhos e entrega. Solicite orçamento direto.',
  };
  if (state.uf === 'MG') return {
    title: 'Aluguel de Caçamba em Minas Gerais | 853 Municípios — Fortera',
    description: 'Locação de caçamba de entulho em Minas Gerais. Encontre sua cidade entre os 853 municípios, consulte tamanhos, entrega e retirada e peça orçamento direto.',
  };
  return {
    title: `Aluguel de Caçamba ${stateLocation(state)} (${state.uf}) | Fortera`,
    description: `Locação de caçambas de entulho ${stateLocation(state)}. Aluguel para obras e reformas, tamanhos de 3 a 10 m³ e orçamento direto. Confirme preço, entrega e retirada.`,
  };
}

export const STATE_SCENES: Record<StateInfo['region'], { src: string; alt: string }> = {
  Sudeste: { src: '/images/estados/cacamba-sudeste.webp', alt: 'Cena ilustrativa de caçamba amarela em reforma residencial urbana' },
  Sul: { src: '/images/estados/cacamba-sul.webp', alt: 'Cena ilustrativa de caçamba de entulho em reforma de casa com jardim' },
  Nordeste: { src: '/images/estados/cacamba-nordeste.webp', alt: 'Cena ilustrativa de caçamba para retirada de entulho de reforma comercial' },
  Norte: { src: '/images/estados/cacamba-norte.webp', alt: 'Cena ilustrativa de caçamba posicionada em acesso pavimentado de uma obra' },
  'Centro-Oeste': { src: '/images/estados/cacamba-centro-oeste.webp', alt: 'Cena ilustrativa de caçamba em canteiro de obra de alvenaria' },
};

// City names are checked against the municipality data before being displayed.
export const STATE_CITY_MENTIONS: Record<string, string[]> = {
  AC: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira', 'Tarauacá'],
  AL: ['Maceió', 'Arapiraca', 'Palmeira dos Índios', 'Penedo'],
  AP: ['Macapá', 'Santana', 'Laranjal do Jari', 'Oiapoque'],
  AM: ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru'],
  BA: ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Juazeiro', 'Barreiras'],
  CE: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Sobral', 'Maracanaú'],
  DF: ['Brasília'],
  ES: ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Cachoeiro de Itapemirim', 'Linhares'],
  GO: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Catalão', 'Inhumas'],
  MA: ['São Luís', 'Imperatriz', 'Caxias', 'Timon', 'Balsas'],
  MT: ['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Sorriso'],
  MS: ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã'],
  MG: ['Belo Horizonte', 'Contagem', 'Betim', 'Uberlândia', 'Juiz de Fora', 'Montes Claros', 'Uberaba', 'Ipatinga'],
  PA: ['Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Parauapebas', 'Castanhal'],
  PB: ['João Pessoa', 'Campina Grande', 'Santa Rita', 'Patos', 'Bayeux'],
  PR: ['Curitiba', 'Londrina', 'Maringá', 'Cascavel', 'Ponta Grossa', 'Foz do Iguaçu', 'Matinhos', 'Pontal do Paraná'],
  PE: ['Recife', 'Jaboatão dos Guararapes', 'Olinda', 'Caruaru', 'Petrolina', 'Paulista'],
  PI: ['Teresina', 'Parnaíba', 'Picos', 'Floriano', 'Piripiri'],
  RJ: ['Rio de Janeiro', 'Niterói', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Campos dos Goytacazes', 'Volta Redonda'],
  RN: ['Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Caicó'],
  RS: ['Porto Alegre', 'Caxias do Sul', 'Canoas', 'Pelotas', 'Santa Maria', 'Passo Fundo', 'Canela'],
  RO: ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena', 'Cacoal'],
  RR: ['Boa Vista', 'Rorainópolis', 'Caracaraí', 'Alto Alegre'],
  SC: ['Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Chapecó', 'Itajaí', 'Indaial', 'Bombinhas'],
  SP: ['São Paulo', 'Campinas', 'Guarulhos', 'São Bernardo do Campo', 'Santo André', 'Sorocaba', 'Ribeirão Preto', 'São José dos Campos', 'Mairiporã'],
  SE: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana', 'Estância'],
  TO: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins'],
};

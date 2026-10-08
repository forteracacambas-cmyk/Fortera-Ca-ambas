export interface DumpsterSize {
  slug: string;
  volume: string;
  nominalM3: number;
  name: string;
  highlight: string;
  recommendedFor: string[];
  capacityNotice: string;
  weightNotice: string;
  materialGuidelines: string;
}

export const DUMPSTER_SIZES: DumpsterSize[] = [
  {
    slug: 'cacamba-3m3',
    volume: '3 m³',
    nominalM3: 3,
    name: 'Caçamba 3 m³ (Capacidade Nominal)',
    highlight: 'Indicada para intervenções pontuais e materiais de maior densidade sob avaliação.',
    recommendedFor: [
      'Reformas de banheiro, lavabo ou cozinha sob avaliação',
      'Troca pontual de pisos e revestimentos cerâmicos',
      'Descarte de alvenaria e fragmentos de concreto',
      'Locais com espaço de manobra ou vaga mais compacta'
    ],
    capacityNotice: 'Capacidade nominal de 3 m³. O volume cúbico não determina o peso final da carga: materiais densos como concreto e argamassa atingem limites de peso com menos volume.',
    weightNotice: 'Dimensões e limites de peso variam por fabricante e modelo do caminhão. Consulte as especificações para seu endereço.',
    materialGuidelines: 'Adequada para alvenaria. Materiais como gesso, madeira e recicláveis dependem de aceitação e separação prévia na sua localidade.'
  },
  {
    slug: 'cacamba-4m3',
    volume: '4 m³',
    nominalM3: 4,
    name: 'Caçamba 4 m³ (Capacidade Nominal)',
    highlight: 'Modelo intermediário para reformas residenciais e comerciais sob consulta.',
    recommendedFor: [
      'Reformas residenciais e comerciais de porte médio',
      'Remoção de revestimentos e alvenaria não estrutural',
      'Obras com mistura de resíduos de reforma sob regras locais',
      'Manutenções prediais e renovações de ambientes'
    ],
    capacityNotice: 'Capacidade nominal de 4 m³. Permite acomodar resíduos de reforma observando sempre o nível máximo das bordas metálicas.',
    weightNotice: 'Limites de carga e dimensões exatas devem ser confirmados no momento do orçamento de acordo com a base que atenderá seu bairro.',
    materialGuidelines: 'Separação de madeira, gesso ou drywall deve ser alinhada na cotação para verificar condições de recebimento.'
  },
  {
    slug: 'cacamba-5m3',
    volume: '5 m³',
    nominalM3: 5,
    name: 'Caçamba 5 m³ (Capacidade Nominal)',
    highlight: 'Maior capacidade volumétrica para materiais mais volumosos sob consulta.',
    recommendedFor: [
      'Reformas mais amplas com resíduos de maior cubagem',
      'Descarte de materiais volumosos de média densidade',
      'Limpezas de obras com embalagens e sobras organizadas',
      'Reformas com remoção de forros e divisórias sob orientação'
    ],
    capacityNotice: 'Capacidade nominal de 5 m³. Indicada para resíduos de menor densidade. Não recomendada para cargas exclusivas de solo úmido ou concreto maciço sem avaliação prévia.',
    weightNotice: 'Dimensões do recipiente e capacidade máxima de içamento do veículo sob consulta para seu município.',
    materialGuidelines: 'Gesso, drywall e madeira dependem de regras específicas de triagem local. Informe a composição do entulho no orçamento.'
  }
];

export const SAFETY_RULES = [
  {
    title: 'Nível da Borda da Caçamba',
    description: 'Por segurança no trânsito, o entulho deve permanecer nivelado com as bordas superiores. O transporte de carga acima da borda oferece risco de queda em via pública.'
  },
  {
    title: 'Acesso e Espaço para o Caminhão',
    description: 'O caminhão poliguindaste precisa de espaço para manobrar e operar os braços de içamento. Verifique se o local de estacionamento e a fiação aérea estão desimpedidos.'
  },
  {
    title: 'Disponibilidade e Regras Locais',
    description: 'Consulte disponibilidade e condições para seu endereço. A aceitação de resíduos específicos (como gesso, telhas e madeiras) e as normas de estacionamento são alinhadas na proposta.'
  }
];

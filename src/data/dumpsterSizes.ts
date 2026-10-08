import { SITE_IMAGES } from '../config/siteConfig';

export interface DumpsterDimension {
  comprimento: number; // em metros
  largura: number; // em metros
  altura: number; // em metros
  formatted: string;
}

export interface DumpsterSize {
  slug: string;
  volume: string;
  nominalM3: number;
  name: string;
  highlight: string;
  status: 'padrao' | 'sob-consulta';
  dimensions: DumpsterDimension;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  recommendedFor: string[];
  capacityNotice: string;
  weightNotice: string;
  materialGuidelines: string;
}

export const PRIMARY_DIMENSIONS_SOURCE = {
  name: 'Lamacors - Caçambas Estacionárias',
  url: 'https://www.lamacors.com.br/produtos/cacamba-estacionaria/',
  notice: 'Medidas de referência; modelo e disponibilidade confirmados no orçamento. As medidas podem variar por fabricante e não são universais. O volume cúbico não equivale diretamente ao peso suportado: a densidade dos resíduos determina os limites de segurança.',
};

export const DUMPSTER_SIZES: DumpsterSize[] = [
  {
    slug: 'cacamba-3m3',
    volume: '3 m³',
    nominalM3: 3,
    status: 'padrao',
    name: 'Caçamba 3 m³ (Capacidade Nominal)',
    highlight: 'Indicada para intervenções pontuais e materiais de maior densidade sob avaliação.',
    dimensions: {
      comprimento: 2.131,
      largura: 1.790,
      altura: 1.115,
      formatted: '2,131 m × 1,790 m × 1,115 m (C × L × A)',
    },
    image: SITE_IMAGES.dumpsterProduct,
    recommendedFor: [
      'Reformas pontuais de banheiro, lavabo ou cozinha sob avaliação',
      'Troca de pisos e revestimentos cerâmicos em áreas compactas',
      'Descarte de alvenaria e fragmentos densos de concreto',
      'Locais com espaço de manobra ou vaga mais compacta'
    ],
    capacityNotice: 'Capacidade nominal de 3 m³. O volume cúbico não determina o peso final da carga: materiais densos como concreto e argamassa atingem limites de peso com menos volume.',
    weightNotice: 'Dimensões de referência (2,131 × 1,790 × 1,115 m). Limites de carga e disponibilidade são confirmados no orçamento.',
    materialGuidelines: 'Adequada para alvenaria. Materiais como gesso, madeira e recicláveis dependem de aceitação e separação prévia na sua localidade.'
  },
  {
    slug: 'cacamba-4m3',
    volume: '4 m³',
    nominalM3: 4,
    status: 'padrao',
    name: 'Caçamba 4 m³ (Capacidade Nominal)',
    highlight: 'Modelo padrão mais versátil para reformas residenciais e comerciais de porte médio.',
    dimensions: {
      comprimento: 2.568,
      largura: 1.890,
      altura: 1.208,
      formatted: '2,568 m × 1,890 m × 1,208 m (C × L × A)',
    },
    image: SITE_IMAGES.dumpsterProduct,
    recommendedFor: [
      'Reformas residenciais e comerciais de porte médio',
      'Remoção de revestimentos, contrapiso e alvenaria não estrutural',
      'Obras com mistura de resíduos de reforma sob regras locais',
      'Manutenções prediais e renovações de ambientes'
    ],
    capacityNotice: 'Capacidade nominal de 4 m³. Permite acomodar resíduos de reforma observando sempre o nível máximo das bordas metálicas.',
    weightNotice: 'Dimensões de referência (2,568 × 1,890 × 1,208 m). Limites de carga e dimensões exatas devem ser confirmados no momento do orçamento.',
    materialGuidelines: 'Separação de madeira, gesso ou drywall deve ser alinhada na cotação para verificar condições de recebimento.'
  },
  {
    slug: 'cacamba-5m3',
    volume: '5 m³',
    nominalM3: 5,
    status: 'padrao',
    name: 'Caçamba 5 m³ (Capacidade Nominal)',
    highlight: 'Maior capacidade volumétrica padrão para materiais volumosos de média densidade.',
    dimensions: {
      comprimento: 2.714,
      largura: 1.835,
      altura: 1.407,
      formatted: '2,714 m × 1,835 m × 1,407 m (C × L × A)',
    },
    image: SITE_IMAGES.dumpsterProduct,
    recommendedFor: [
      'Reformas mais amplas com resíduos de maior cubagem',
      'Descarte de materiais volumosos de média densidade',
      'Limpezas de obras com embalagens e sobras organizadas',
      'Reformas com remoção de forros e divisórias sob orientação'
    ],
    capacityNotice: 'Capacidade nominal de 5 m³. Indicada para resíduos de menor densidade. Não recomendada para cargas exclusivas de solo úmido ou concreto maciço sem avaliação prévia.',
    weightNotice: 'Dimensões de referência (2,714 × 1,835 × 1,407 m). Capacidade máxima de içamento do veículo e disponibilidade sob consulta.',
    materialGuidelines: 'Gesso, drywall e madeira dependem de regras específicas de triagem local. Informe a composição do entulho no orçamento.'
  },
  {
    slug: 'cacamba-7m3',
    volume: '7 m³',
    nominalM3: 7,
    status: 'sob-consulta',
    name: 'Caçamba 7 m³ (Sob Consulta)',
    highlight: 'Capacidade ampliada para obras maiores. Fornecimento sob consulta sem garantia prévia de disponibilidade.',
    dimensions: {
      comprimento: 3.369,
      largura: 1.853,
      altura: 1.500,
      formatted: '3,369 m × 1,853 m × 1,500 m (C × L × A)',
    },
    image: SITE_IMAGES.dumpsterProduct,
    recommendedFor: [
      'Grandes reformas com descarte de materiais leves a médios sob consulta',
      'Limpezas gerais de galpões e canteiros com resíduos volumosos',
      'Obras corporativas com grande geração de madeira e embalagens'
    ],
    capacityNotice: 'Capacidade nominal de 7 m³ sob consulta prévia. Atenção rigorosa aos limites de peso do caminhão: proibido carregamento acima da borda com materiais ultra densos.',
    weightNotice: 'Dimensões de referência (3,369 × 1,853 × 1,500 m). Disponibilidade e viabilidade técnica da via sujeitas a confirmação no orçamento.',
    materialGuidelines: 'Consulte restrições locais de triagem e tipo de resíduo aceito diretamente na proposta.'
  },
  {
    slug: 'cacamba-10m3',
    volume: '10 m³',
    nominalM3: 10,
    status: 'sob-consulta',
    name: 'Caçamba 10 m³ (Sob Consulta)',
    highlight: 'Maior capacidade de cubagem sob consulta sem garantia de disponibilidade imediata.',
    dimensions: {
      comprimento: 3.741,
      largura: 1.933,
      altura: 1.948,
      formatted: '3,741 m × 1,933 m × 1,948 m (C × L × A)',
    },
    image: SITE_IMAGES.dumpsterProduct,
    recommendedFor: [
      'Canteiros de grande porte com resíduos volumosos e leves sob avaliação',
      'Descarte sob demanda industrial ou comercial com plano de carga',
      'Remoção de caixarias, madeiramento solto e materiais de baixa densidade'
    ],
    capacityNotice: 'Capacidade nominal de 10 m³ sob consulta prévia. Não indicada para solo, pedras ou concreto maciço devido ao peso máximo de içamento.',
    weightNotice: 'Dimensões de referência (3,741 × 1,933 × 1,948 m). Requer espaço amplo para aproximação e içamento do caminhão poliguindaste.',
    materialGuidelines: 'Condições de recebimento alinhadas caso a caso com a usina de destinação na proposta comercial.'
  }
];

export const SAFETY_RULES = [
  {
    title: 'Nível da Borda da Caçamba',
    description: 'Por segurança no trânsito, o entulho deve permanecer rigorosamente nivelado com as bordas superiores. O transporte de carga acima da borda oferece risco grave de queda em via pública.'
  },
  {
    title: 'Acesso e Espaço para o Caminhão Poliguindaste',
    description: 'O caminhão precisa de espaço livre para manobrar e operar os braços de içamento hidráulico. Verifique se o local de estacionamento, a guia da rua e a fiação aérea estão desimpedidos.'
  },
  {
    title: 'Disponibilidade e Regras Locais',
    description: 'Consulte disponibilidade e condições para seu endereço. A aceitação de resíduos específicos (como gesso, telhas e madeiras) e as normas municipais de estacionamento são alinhadas na proposta.'
  }
];

import { SITE_IMAGES } from '../config/siteConfig';

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  recommendedSizes: string[];
  recommendedPeriod: string;
  keyPoints: {
    title: string;
    description: string;
  }[];
  steps: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: 'cacamba-para-reformas',
    title: 'Aluguel de Caçamba para Reformas Residenciais e Comerciais',
    shortTitle: 'Caçamba para Reformas',
    metaDescription: 'Aluguel de caçamba estacionária para reformas de casas, apartamentos e comércios. Troca de pisos, banheiros e alvenaria. Consulte condições.',
    headline: 'Caçamba Estacionária para Reformas e Renovações',
    intro: 'Em reformas residenciais e comerciais, o ritmo de produção de entulho é dinâmico: a cada cômodo renovado surgem sobras de pisos, argamassa, tijolos e embalagens. Uma caçamba posicionada na hora certa evita o acúmulo no interior do imóvel e agiliza o trabalho dos profissionais.',
    image: SITE_IMAGES.renovationHouse,
    recommendedSizes: ['3 m³ (para reformas pontuais de pisos e banheiros)', '4 m³ (para reformas residenciais gerais)'],
    recommendedPeriod: '7 dias (Semanal) — permite acompanhar as etapas de demolição e retirada de pisos sem pressa.',
    keyPoints: [
      {
        title: 'Troca de Pisos e Revestimentos',
        description: 'Revestimentos cerâmicos antigos e argamassa de contrapiso são materiais densos que preenchem rapidamente o peso seguro da caçamba. Recomendamos distribuir os pedaços de forma plana.'
      },
      {
        title: 'Reformas em Condomínios',
        description: 'Verifique com a portaria os horários de ruído autorizados e se a vaga de estacionamento na via ou na área interna necessita de aviso prévio para a manobra do poliguindaste.'
      },
      {
        title: 'Atenção com Gesso e Drywall',
        description: 'Se a reforma envolver substituição de forros de gesso ou paredes de drywall, informe na cotação para alinharmos regras de aceitação e separação prévia na sua localidade.'
      }
    ],
    steps: [
      {
        step: '1',
        title: 'Definição da Etapa da Reforma',
        description: 'Estime o volume inicial a ser removido (pisos velhos, louças, alvenaria) e o prazo de carregamento.'
      },
      {
        step: '2',
        title: 'Reserva do Ponto de Descida',
        description: 'Garanta que a vaga em frente ao imóvel ou na entrada da garagem esteja livre de carros no dia da entrega.'
      },
      {
        step: '3',
        title: 'Descarte no Nível da Borda',
        description: 'Carregue o entulho respeitando estritamente a borda metálica superior para segurança de trânsito.'
      },
      {
        step: '4',
        title: 'Retirada ou Troca',
        description: 'Ao final do período ou quando a caçamba atingir a capacidade, solicite o recolhimento ou uma nova unidade.'
      }
    ],
    faq: [
      {
        question: 'Qual o melhor prazo para reforma de apartamento?',
        answer: 'O período de 7 dias (semanal) é o mais recomendado, pois dá tempo suficiente para que a equipe quebre os revestimentos, ensaque ou transporte o entulho até a caçamba com calma.'
      },
      {
        question: 'Posso descartar móveis velhos desmontados na mesma caçamba?',
        answer: 'Móveis de madeira e materiais volumosos dependem de aceitação e regras de triagem regional. Mencione esse tipo de resíduo na solicitação de orçamento.'
      }
    ]
  },
  {
    slug: 'cacamba-para-obras',
    title: 'Aluguel de Caçamba para Canteiros de Obras e Construções',
    shortTitle: 'Caçamba para Obras',
    metaDescription: 'Locação de caçambas para obras civis e construções. Logística de trocas contínuas e canteiro de obras organizado com atendimento nacional.',
    headline: 'Caçamba Estacionária para Canteiro de Obras Civis',
    intro: 'Em canteiros de obras de médio e grande porte, a gestão de resíduos da construção civil (RCC) é contínua. Manter áreas de circulação limpas previne acidentes com a equipe, facilita o recebimento de insumos novos e assegura organização para vistorias.',
    image: SITE_IMAGES.commercialSite,
    recommendedSizes: ['4 m³ (para construções residenciais e sobrados)', '5 m³ (para obras amplas com resíduos volumosos)'],
    recommendedPeriod: '7 dias (Semanal) com programação de trocas periódicas conforme o avanço do cronograma.',
    keyPoints: [
      {
        title: 'Programação de Trocas',
        description: 'Para obras contínuas, alinhamos a rota de retirada da caçamba cheia com o posicionamento simultâneo de uma nova unidade vazia, evitando pausas no descarte.'
      },
      {
        title: 'Segurança no Canteiro',
        description: 'Caçambas bem posicionadas evitam que montantes de entulho fiquem soltos pelo chão, reduzindo riscos de tropeços, pregos expostos e obstrução de passagens.'
      },
      {
        title: 'Separação de Caixarias e Embalagens',
        description: 'Sobras de madeira de formas de concreto, sacarias de cimento e conduítes devem ser organizados para evitar volume ocioso no interior da caçamba.'
      }
    ],
    steps: [
      {
        step: '1',
        title: 'Planejamento das Fases',
        description: 'Identifique os momentos de pico de resíduo (fundação, alvenaria, cobertura e acabamento).'
      },
      {
        step: '2',
        title: 'Definição da Área de Apoio',
        description: 'Mantenha um acesso transitável para o caminhão poliguindaste entrar ou encostar sem bloquear outros fornecedores.'
      },
      {
        step: '3',
        title: 'Acompanhamento de Nível',
        description: 'Monitore para que os colaboradores não ultrapassem o nível das bordas superiores metálicas.'
      },
      {
        step: '4',
        title: 'Retiradas Pontuais',
        description: 'Coordenação ágil de recolhimento sob confirmação prévia no orçamento.'
      }
    ],
    faq: [
      {
        question: 'É possível deixar a caçamba dentro do lote da construção?',
        answer: 'Sim, desde que a entrada tenha largura e altura suficientes para o caminhão poliguindaste manobrar e estender os braços hidráulicos com segurança.'
      },
      {
        question: 'Como funciona a cobrança para múltiplas caçambas na mesma obra?',
        answer: 'Cada caçamba colocada e retirada possui suas condições alinhadas na proposta de acordo com o tamanho, material e frequência solicitada.'
      }
    ]
  },
  {
    slug: 'cacamba-para-demolicoes',
    title: 'Aluguel de Caçamba para Pequenas Demolições e Alvenaria Pesada',
    shortTitle: 'Caçamba para Demolições',
    metaDescription: 'Locação de caçamba para pequenas demolições, concreto, lajes e alvenaria pesada. Avaliação de peso e segurança de içamento. Peça cotação.',
    headline: 'Caçamba Estacionária para Demolições e Alvenaria Densa',
    intro: 'Derrubar paredes, remover vigas secundárias, quebrar contrapisos ou abrir vãos estruturais gera material de altíssima densidade. Em demolições, a atenção ao peso específico do concreto e tijolos é fundamental para que o caminhão consiga efetuar o içamento sem sobrecarga.',
    image: SITE_IMAGES.demolition,
    recommendedSizes: ['3 m³ (altamente recomendada para alvenaria densa e concreto puro)', '4 m³ (para demolições mistas com madeiras)'],
    recommendedPeriod: '1 a 3 dias para demolições rápidas com caçamba cheia de uma vez, ou 7 dias se a demolição for progressiva.',
    keyPoints: [
      {
        title: 'Densidade Elevada do Concreto',
        description: 'Fragmentos maciços de concreto e tijolos pesam muito mais do que aparentam. Nesses casos, caçambas de 3 m³ são mais seguras para não exceder o limite de carga do poliguindaste.'
      },
      {
        title: 'Risco de Sobrecarga de Borda',
        description: 'Ao demolir paredes, é tentador amontoar blocos além da borda. Lembre-se: pedras e concreto soltos acima da borda podem cair durante a tração do caminhão e são proibidos no transporte.'
      },
      {
        title: 'Estabilidade do Piso',
        description: 'Com a caçamba cheia de alvenaria maciça, o peso total no solo é elevado. Certifique-se de que o piso da calçada ou via suporta essa pressão sem ceder.'
      }
    ],
    steps: [
      {
        step: '1',
        title: 'Estimativa dos Elementos Demolidos',
        description: 'Informe se o entulho será composto principalmente por concreto maciço, blocos cerâmicos ou reboco.'
      },
      {
        step: '2',
        title: 'Escolha do Modelo Apropriado',
        description: 'Priorize caçambas de 3 m³ ou 4 m³ para controlar o peso total da carga.'
      },
      {
        step: '3',
        title: 'Acomodação Homogênea',
        description: 'Distribua os blocos maiores no fundo e preencha as frestas com o entulho miúdo nivelando até a borda.'
      },
      {
        step: '4',
        title: 'Retirada e Transporte',
        description: 'O poliguindaste prende as correntes e faz a elevação vertical segura.'
      }
    ],
    faq: [
      {
        question: 'Por que a caçamba de 5 m³ geralmente não é indicada para concreto maciço puro?',
        answer: 'Porque o concreto é extremamente denso. Uma caçamba de 5 m³ cheia até a boca de blocos maciços de concreto pode ultrapassar o limite de peso seguro de tração e elevação dos braços do caminhão.'
      },
      {
        question: 'Preciso separar ferro e ferragens do concreto?',
        answer: 'Sobras de ferragens estruturais amarradas ao concreto devem ser cortadas para não ficarem pontudas ou sobressalentes para fora da borda da caçamba.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find(s => s.slug === slug);
}

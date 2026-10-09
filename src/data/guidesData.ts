import { SITE_IMAGES } from '../config/siteConfig';

export interface GuideItem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  readTime: string;
  category: string;
  lastUpdated: string;
  intro: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  sections: {
    heading: string;
    paragraphs: string[];
    tips?: string[];
  }[];
  checklist?: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const PRACTICAL_GUIDES: GuideItem[] = [
  {
  slug: "locacao-semanal-versus-diaria",
  title: "Aluguel de Caçamba por Dias, Semanas ou Meses: Qual Prazo Escolher?",
  shortTitle: "Dias, semanas e meses",
  description: "Escolha o prazo de locação e entenda como funciona 1 troca por semana quando a caçamba encher e a obra continuar.",
  readTime: "4 min de leitura",
  category: "Planejamento e Prazos",
  lastUpdated: "Atualizado em 2026",
  image: SITE_IMAGES.renovationHouse,
  intro: "A Fortera aluga caçambas por dias, semanas e meses. Escolha o período conforme o ritmo da obra; a locação não fica limitada a 7 dias.",
  sections: [
    {
      heading: "Locação de 1, 2 ou 3 dias",
      paragraphs: [
        "Indicada para descartes concentrados e etapas curtas. Confira se a equipe conseguirá carregar o entulho no período escolhido e combine entrega e retirada pelo WhatsApp."
      ]
    },
    {
      heading: "Locação semanal e mensal",
      paragraphs: [
        "Para reformas por etapas, escolha 7 ou 15 dias, 1, 2 ou 3 meses, ou consulte um período maior. Informe o prazo esperado para receber o orçamento adequado."
      ]
    },
    {
      heading: "Como funciona a troca semanal?",
      paragraphs: [
        "Se a caçamba encher e a obra continuar, você tem 1 troca por semana durante a locação. Entre em contato pelo WhatsApp para solicitar a troca.",
        "Exemplo: em uma obra de 1 mês, você pode solicitar uma troca a cada semana se a caçamba estiver cheia e ainda precisar continuar o descarte. Combine o atendimento para o endereço da obra."
      ]
    },
    {
      heading: "Como consultar o valor?",
      paragraphs: [
        "O orçamento depende da cidade, bairro, tamanho, prazo e condições de operação. Não divida automaticamente um valor semanal para estimar diárias ou meses: peça a proposta para o período desejado."
      ]
    }
  ],
  checklist: [
    "Informe estado, cidade e bairro.",
    "Escolha o tempo de locação.",
    "Selecione o tamanho ou peça ajuda.",
    "Envie suas escolhas pelo WhatsApp."
  ],
  faq: [
    {
      question: "Posso alugar por mais de um mês?",
      answer: "Sim. Você pode solicitar locação por meses e combinar um prazo maior com nossa equipe."
    },
    {
      question: "A caçamba encheu e a obra continua. Posso trocar?",
      answer: "Sim. Durante a locação, você tem 1 troca por semana quando a caçamba encher e precisar continuar a obra. Solicite pelo WhatsApp."
    }
  ]
},
  {
    slug: 'como-escolher-tamanho-de-cacamba',
    title: 'Como Escolher o Tamanho Certo de Caçamba para sua Obra',
    shortTitle: 'Como Escolher o Tamanho Ideal',
    description: 'Entenda como avaliar o volume de resíduos, a diferença entre peso e cubagem e como escolher entre 3 m³, 4 m³ e 5 m³ sob orientação técnica.',
    readTime: '5 min de leitura',
    category: 'Planejamento de Obra',
    lastUpdated: 'Atualizado em 2026',
    intro: 'Avaliar a capacidade necessária da caçamba estacionária ajuda a organizar o canteiro e evitar imprevistos. É importante considerar tanto o espaço que o entulho ocupa quanto a densidade dos materiais que serão descartados.',
    image: SITE_IMAGES.detail,
    sections: [
      {
        heading: '1. Volume não determina peso: a questão da densidade',
        paragraphs: [
          'Um dos pontos mais importantes no dimensionamento é compreender que a capacidade cúbica (m³) mede apenas o volume do recipiente, não a sua carga em peso.',
          'Materiais como alvenaria compacta, contrapiso quebrado e solo atingem a capacidade de tração e elevação do caminhão muito mais rápido do que materiais leves, como sobras de embalagens ou forros desmontados.'
        ],
        tips: [
          'Se a sua obra envolve demolição de concreto armado ou retirada de terra, informe essa característica no momento da solicitação.',
          'Peças ocas ou irregulares criam espaços vazios: acomodar o material de forma mais homogênea ajuda a aproveitar melhor a caçamba.'
        ]
      },
      {
        heading: '2. Características de cada capacidade nominal',
        paragraphs: [
          'Caçamba de 3 m³: indicada para intervenções pontuais, reformas de um único cômodo ou descartes com predomínio de alvenaria densa, onde o peso do material exige atenção ao limite do caminhão.',
          'Caçamba de 4 m³: opção intermediária bastante versátil para reformas residenciais e comerciais de porte médio.',
          'Caçamba de 5 m³: recomendada quando há maior proporção de materiais volumosos de menor densidade. Requer confirmação prévia sobre as condições de trânsito e manobra no local.'
        ]
      },
      {
        heading: '3. Avaliação de materiais mistos e separação',
        paragraphs: [
          'A possibilidade de misturar diferentes itens em uma mesma caçamba varia conforme as diretrizes de triagem da região.',
          'Resíduos como gesso, placas de drywall e madeiramento frequentemente exigem destinação ou separação à parte. Esclarecer a composição do entulho no orçamento evita recusas na retirada.'
        ]
      }
    ],
    checklist: [
      'Identificar se o material principal é alvenaria densa ou itens volumosos.',
      'Verificar se há espaço de manobra na via para o tamanho desejado.',
      'Consultar se a região exige separação prévia de gesso ou madeira.',
      'Respeitar rigorosamente o nível superior das bordas metálicas da caçamba.'
    ],
    faq: [
      {
        question: 'O que fazer se a caçamba encher antes do término da etapa?',
        answer: 'Você pode solicitar a retirada da caçamba cheia e o posicionamento de uma nova unidade conforme a disponibilidade da rota.'
      },
      {
        question: 'Posso empilhar entulho acima da borda?',
        answer: 'Não. O entulho deve ficar estritamente no alinhamento das bordas. Cargas sobressalentes geram risco de queda no trânsito e impedem o transporte seguro.'
      }
    ]
  },
  {
    slug: 'o-que-pode-colocar-na-cacamba',
    title: 'O que Pode e o que NÃO Pode Colocar na Caçamba de Entulho',
    shortTitle: 'Materiais Permitidos e Proibidos',
    description: 'Orientações práticas sobre os materiais aceitos em caçambas estacionárias e os itens proibidos que não devem ser misturados ao entulho.',
    readTime: '5 min de leitura',
    category: 'Orientação para sua Obra',
    lastUpdated: 'Atualizado em 2026',
    intro: 'As caçambas estacionárias são voltadas a resíduos de construção e reformas. Conhecer quais materiais são aceitos e quais são expressamente vedados garante a tranquilidade da sua obra e evita problemas na retirada.',
    image: SITE_IMAGES.demolition,
    sections: [
      {
        heading: '1. Materiais habitualmente aceitos',
        paragraphs: [
          'De modo geral, são aceitos resíduos inertes decorrentes de reformas e intervenções civis:',
          'Alvenaria em geral: tijolos, blocos, argamassa, restos de concreto e reboco.',
          'Revestimentos: sobras de azulejos, pisos cerâmicos e porcelanatos.',
          'Sobras de obra secas: tubulações plásticas, conduítes e embalagens de papelão dos insumos utilizados.'
        ]
      },
      {
        heading: '2. Materiais que dependem de regras de aceitação local',
        paragraphs: [
          'Gesso e placas de drywall: necessitam de confirmação prévia, pois diversas instalações de triagem exigem acondicionamento separado para reciclagem.',
          'Madeiras de reforma: sobras de caixaria, portas velhas e escoramentos também podem demandar triagem diferenciada dependendo do município.'
        ]
      },
      {
        heading: '3. O que é terminantemente proibido',
        paragraphs: [
          'Lixo domiciliar comum e restos de alimentos orgânicos.',
          'Produtos químicos e inflamáveis: latas de tintas líquidas, solventes, óleos e combustíveis.',
          'Resíduos de saúde, medicamentos, seringas e curativos.',
          'Baterias, pilhas, lâmpadas fluorescentes e componentes eletrônicos.'
        ]
      }
    ],
    checklist: [
      'Não misturar lixo doméstico ou marmitas ao entulho da obra.',
      'Informar no orçamento se houver grande quantidade de gesso ou drywall.',
      'Manter tintas e solventes fora da caçamba de entulho.',
      'Avisar a equipe de obra sobre os materiais proibidos.'
    ],
    faq: [
      {
        question: 'O motorista pode recusar a retirada se houver produtos proibidos?',
        answer: 'Sim. Se forem identificados lixos orgânicos ou produtos químicos perigosos, o transporte não poderá ser realizado até a regularização do material pelo responsável pela obra.'
      },
      {
        question: 'Como descartar latas de tintas e solventes?',
        answer: 'Devem ser encaminhadas aos pontos de coleta apropriados ou programas de logística reversa indicados pelo fabricante ou município.'
      }
    ]
  },
  {
    slug: 'como-preparar-a-entrega-da-cacamba',
    title: 'Como Preparar o Local para a Entrega e Retirada da Caçamba',
    shortTitle: 'Preparação do Local de Entrega',
    description: 'Checklist prático: informações a confirmar para cada obra sobre vaga, fiação, regras de condomínio e manobra do caminhão poliguindaste.',
    readTime: '5 min de leitura',
    category: 'Orientação para sua Obra',
    lastUpdated: 'Atualizado em 2026',
    intro: 'O caminhão poliguindaste que transporta caçambas é um veículo de porte que necessita de espaço de manobra no solo e altura livre para acionar os braços hidráulicos. Um alinhamento prévio evita atrasos e retrabalho.',
    image: SITE_IMAGES.delivery,
    sections: [
      {
        heading: '1. Reserva da vaga e espaço de manobra',
        paragraphs: [
          'O veículo precisa se aproximar de ré no alinhamento da vaga para soltar ou recolher a caçamba com segurança.',
          'Certifique-se de que a vaga pretendida (no leito da via rente ao meio-fio ou dentro do lote da obra) esteja desimpedida de outros carros no horário acordado.'
        ],
        tips: [
          'Reserve o espaço com antecedência no dia programado para a entrega.',
          'Evite posicionar em frente a garagens de terceiros, faixas de travessia ou tampas de bueiro.'
        ]
      },
      {
        heading: '2. Espaço aéreo e interferências verticais',
        paragraphs: [
          'Ao descarregar ou içar a caçamba, os braços mecânicos atingem altura considerável.',
          'Observe se há fiações de telefonia ou energia muito baixas, galhos grossos ou marquises salientes no raio de operação dos braços.'
        ]
      },
      {
        heading: '3. Regras de condomínio e orientação do piso',
        paragraphs: [
          'Se a obra estiver localizada em condomínio horizontal ou vertical, confirme previamente os horários autorizados para tráfego de caminhões e normas da administração.',
          'Para pisos intertravados ou garagens particulares, o uso de pranchas de madeira para apoio da caçamba pode ser providenciado para proteger o pavimento.'
        ]
      }
    ],
    checklist: [
      'Garantir vaga livre e desimpedida na via ou dentro do terreno.',
      'Conferir ausência de galhos ou fiações baixas sobre a vaga.',
      'Consultar administração de condomínio sobre horários de acesso.',
      'Providenciar tábuas de proteção caso o piso particular seja delicado.'
    ],
    faq: [
      {
        question: 'A caçamba pode ser deixada sobre a calçada de pedestres?',
        answer: 'Como regra geral, a caçamba deve ser posicionada na rua junto ao meio-fio ou inteiramente dentro do terreno da obra, preservando a circulação livre dos pedestres.'
      },
      {
        question: 'É possível arrastar a caçamba para outro lugar após a descida?',
        answer: 'Não. A caçamba metálica vazia já é pesada e, com entulho, pesa toneladas. Ela só deve ser movimentada pelo poliguindaste.'
      }
    ]
  }
];

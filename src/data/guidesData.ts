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
    slug: 'locacao-semanal-versus-diaria',
    title: 'Aluguel de Caçamba Semanal de 7 Dias vs Diária: Qual Prazo Escolher?',
    shortTitle: 'Semanal (7 Dias) vs Diária',
    description: 'Compare as vantagens do aluguel semanal de 7 dias com as opções de 1, 2 ou 3 dias. Saiba como escolher o prazo certo para sua reforma sem pressa nem custos imprevistos.',
    readTime: '6 min de leitura',
    category: 'Planejamento e Prazos',
    lastUpdated: 'Atualizado em 2026',
    intro: 'Ao alugar uma caçamba estacionária, uma das decisões mais estratégicas é o tempo de permanência no local. O prazo semanal de 7 dias é o mais adotado e recomendado para reformas, mas opções de 1, 2 ou 3 dias atendem a necessidades específicas de canteiro.',
    image: SITE_IMAGES.renovationHouse,
    sections: [
      {
        heading: '1. Por que o prazo semanal de 7 dias é o mais recomendado?',
        paragraphs: [
          'Em reformas residenciais e comerciais, imprevistos de cronograma acontecem com frequência: a demolição de um banheiro pode demorar mais horas do que o previsto, chuvas podem suspender o carregamento externo ou a equipe de pedreiros pode priorizar a quebra de alvenaria em etapas espaçadas.',
          'Com o prazo semanal de 7 dias, sua obra ganha tranquilidade operacional: você não precisa correr para carregar o entulho às pressas no mesmo dia e evita custos adicionais de reagendamento de caminhão.'
        ],
        tips: [
          'O prazo semanal de 7 dias oferece a melhor relação custo-benefício para a maioria das reformas residenciais.',
          'Consulte o valor para o período semanal no formulário de orçamento informando seu bairro.'
        ]
      },
      {
        heading: '2. Quando vale a pena optar por diárias curtas (1, 2 ou 3 dias)?',
        paragraphs: [
          'Diárias mais curtas são especialmente úteis em situações pontuais com limitações externas de estacionamento ou manobra:',
          'Vias com restrições rígidas: ruas estreitas ou áreas de tráfego intenso onde a permanência contínua por muitos dias é inviável.',
          'Regras de condomínio: condomínios que autorizam a permanência da caçamba apenas por 24h ou 48h durante os dias úteis.',
          'Mutirões de limpeza ou demolição expressa: quando todo o entulho já está previamente quebrado, ensacado ou amontoado no quintal, bastando carregar a caçamba em poucas horas.'
        ],
        tips: [
          'Só contrate diária rápida de 1 dia se o entulho já estiver 100% pronto e a equipe estiver disponível para abastecer a caçamba imediatamente após a descida do poliguindaste.'
        ]
      },
      {
        heading: '3. Como são calculados os preços por prazo?',
        paragraphs: [
          'O valor do aluguel de caçamba é estabelecido por pacote de período, capacidade cúbica e localização, e não por mera divisão aritmética do valor semanal pelo número de dias.',
          'Isso ocorre porque grande parte do custo operacional da locação envolve a ida e volta do caminhão poliguindaste (combustível, deslocamento do motorista e manobra dos braços hidráulicos) somada às taxas de recebimento dos resíduos.',
          'Por isso, a diferença de valor entre uma permanência de 3 dias e uma de 7 dias costuma ser muito pequena, tornando a locação semanal a escolha mais segura financeiramente.'
        ]
      }
    ],
    checklist: [
      'Avaliar se o entulho já está demolido ou se será quebrado ao longo dos próximos dias.',
      'Consultar se o condomínio ou a via possui limite máximo de permanência contínua.',
      'Selecionar o prazo no formulário de orçamento (7 dias semanal, 3 dias, 2 dias ou 1 dia).',
      'Informar o bairro para conferir a disponibilidade de colocação e retirada.'
    ],
    faq: [
      {
        question: 'Posso pedir a retirada da caçamba antes do término dos 7 dias?',
        answer: 'Sim. Se sua equipe terminar de encher a caçamba antes do prazo contratado, basta entrar em contato solicitando a coleta antecipada.'
      },
      {
        question: 'O que acontece se a obra atrasar e eu precisar de mais dias além do contratado?',
        answer: 'Caso necessite de prorrogação, avise nossa equipe antes do término do prazo para verificar a viabilidade de extensão de permanência para o seu endereço.'
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

export interface CityLocalPage {
  city: string;
  uf: string;
  stateName: string;
  slug: string;
  stateSlug: string;
  pageTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  localContext: {
    overview: string;
    logisticsChallenges: string[];
    accessTips: string[];
    bestDumpsterSizes: string;
  };
  recommendedSizes: {
    size: string;
    scenario: string;
    notes: string;
  }[];
  stepsToRent: {
    step: string;
    title: string;
    description: string;
  }[];
  localFaq: {
    question: string;
    answer: string;
  }[];
}

export const CITIES_DATA: CityLocalPage[] = [
  {
    city: 'Caraguatatuba',
    uf: 'SP',
    stateName: 'São Paulo',
    slug: 'caraguatatuba',
    stateSlug: 'sp',
    pageTitle: 'Aluguel de Caçamba em Caraguatatuba SP | Fortera Caçambas',
    metaDescription: 'Aluguel de caçambas de entulho em Caraguatatuba SP. Consulte disponibilidade, orientações de acesso e condições para seu endereço no orçamento.',
    heroHeadline: 'Aluguel de Caçamba de Entulho em Caraguatatuba (SP)',
    heroSubheadline: 'Orientação para sua obra e aluguel de caçambas com condições e destinação confirmadas no orçamento.',
    localContext: {
      overview: 'Em Caraguatatuba e região do litoral, o planejamento do aluguel envolve conferir as condições da via de acesso, tipo de solo e o fluxo de tráfego em períodos de alta temporada.',
      logisticsChallenges: [
        'Acesso à rua e firmeza do piso: em loteamentos com solo arenoso ou sem pavimentação consolidada, é preciso confirmar se o caminhão consegue manobrar sem risco de atolamento.',
        'Sazonalidade e datas de feriados: em épocas de maior fluxo de turistas, alinhar a data de entrega com antecedência ajuda a evitar desencontros na rua.',
        'Proteção contra chuva: em períodos chuvosos, proteger a caçamba evita que o entulho acumule água em excesso.'
      ],
      accessTips: [
        'Informe com antecedência caso o imóvel esteja em condomínio horizontal ou em rua com declive acentuado.',
        'Se o piso em frente ao imóvel for de areia fofa, verifique a possibilidade de posicionar a caçamba em área com base mais firme.'
      ],
      bestDumpsterSizes: 'Modelos de 3 m³, 4 m³ e 5 m³ nominais sob consulta. A escolha depende do tipo de material (alvenaria densa vs resíduos mais leves) e do espaço disponível na vaga.'
    },
    recommendedSizes: [
      {
        size: '3 m³',
        scenario: 'Reformas pontuais de alvenaria, pisos cerâmicos e materiais densos sob avaliação.',
        notes: 'Indicada quando há restrição de espaço na vaga ou predomínio de materiais pesados.'
      },
      {
        size: '4 m³',
        scenario: 'Reformas residenciais e comerciais gerais sob consulta de regras locais.',
        notes: 'Capacidade intermediária bastante utilizada para entulho de reforma.'
      },
      {
        size: '5 m³',
        scenario: 'Obras com materiais volumosos de média densidade sob consulta prévia.',
        notes: 'Consulte regras locais para descarte de madeiras, forros e embalagens.'
      }
    ],
    stepsToRent: [
      {
        step: '1',
        title: 'Cotação para seu endereço',
        description: 'Informe o bairro em Caraguatatuba, o tipo de material da obra e o tamanho estimado desejado.'
      },
      {
        step: '2',
        title: 'Confirmação das condições',
        description: 'Alinhamos a data de entrega, condições da via de acesso e orientações para o estacionamento.'
      },
      {
        step: '3',
        title: 'Entrega da caçamba',
        description: 'O veículo posiciona a caçamba no ponto acordado com a equipe da obra.'
      },
      {
        step: '4',
        title: 'Carregamento e retirada',
        description: 'Após o abastecimento nivelado com a borda, a retirada é efetuada no prazo combinado.'
      }
    ],
    localFaq: [
      {
        question: 'Vocês atendem diferentes bairros de Caraguatatuba?',
        answer: 'Consulte disponibilidade e condições para seu endereço no formulário de orçamento, informando o bairro do seu imóvel.'
      },
      {
        question: 'É possível colocar caçamba em rua não asfaltada?',
        answer: 'Sim, desde que o solo apresente firmeza suficiente para a aproximação e parada segura do caminhão poliguindaste.'
      },
      {
        question: 'Quais materiais não podem ser descartados?',
        answer: 'Lixo doméstico, tintas líquidas, produtos químicos e materiais inflamáveis. Condições de recebimento são confirmadas na proposta.'
      }
    ]
  },
  {
    city: 'Campinas',
    uf: 'SP',
    stateName: 'São Paulo',
    slug: 'campinas',
    stateSlug: 'sp',
    pageTitle: 'Aluguel de Caçamba em Campinas SP | Fortera Caçambas',
    metaDescription: 'Aluguel de caçambas de entulho em Campinas SP. Consulte disponibilidade, orientações de acesso e regras para condomínios e vias públicas.',
    heroHeadline: 'Aluguel de Caçamba de Entulho em Campinas (SP)',
    heroSubheadline: 'Orientação para sua obra com opções de 3, 4 e 5 m³ nominais. Condições e destinação confirmadas no orçamento.',
    localContext: {
      overview: 'Em Campinas, a operação de caçambas envolve desde bairros residenciais e centros comerciais até condomínios fechados em distritos, exigindo atenção aos horários de tráfego e regras de acesso.',
      logisticsChallenges: [
        'Vias com fluxo intenso: em avenidas e corredores de tráfego, é fundamental alinhar horários adequados para manobra sem retenção de trânsito.',
        'Regras de condomínios fechados: em distritos como Barão Geraldo, Sousas e bairros fechados, verifique com a administração os horários de entrada de caminhões pesados.',
        'Separação de materiais: materiais como gesso e madeira podem exigir confirmação prévia de triagem.'
      ],
      accessTips: [
        'Confirme a autorização de condomínio ou permissão de parada caso a obra seja em condomínio fechado.',
        'Mantenha a vaga livre no meio-fio para permitir a manobra de ré do veículo de entrega.'
      ],
      bestDumpsterSizes: 'Caçambas de 3, 4 e 5 m³ nominais disponíveis sob consulta, conforme a necessidade volumétrica e densidade dos resíduos.'
    },
    recommendedSizes: [
      {
        size: '3 m³',
        scenario: 'Reformas pontuais de banheiros, cozinhas e descarte de pisos sob avaliação.',
        notes: 'Recomendada para entulho denso onde o peso deve ser avaliado com atenção.'
      },
      {
        size: '4 m³',
        scenario: 'Reformas de casas, apartamentos e manutenções comerciais.',
        notes: 'Modelo intermediário para a maioria das reformas residenciais.'
      },
      {
        size: '5 m³',
        scenario: 'Reformas mais amplas com resíduos volumosos sob consulta.',
        notes: 'Verifique a aceitação de divisórias, gesso e madeira para sua região.'
      }
    ],
    stepsToRent: [
      {
        step: '1',
        title: 'Solicitação do orçamento',
        description: 'Indique o bairro em Campinas, tipo de entulho gerado e previsão de início.'
      },
      {
        step: '2',
        title: 'Alinhamento de acesso',
        description: 'Confirmamos as condições de estacionamento na via ou dentro do lote.'
      },
      {
        step: '3',
        title: 'Posicionamento da caçamba',
        description: 'Entrega realizada no local combinado respeitando a sinalização e o espaço reservado.'
      },
      {
        step: '4',
        title: 'Retirada programada',
        description: 'Coleta após o término do carregamento dentro do nível da borda superior.'
      }
    ],
    localFaq: [
      {
        question: 'O atendimento abrange distritos como Barão Geraldo e Sousas?',
        answer: 'Consulte disponibilidade e condições para seu endereço no formulário, indicando seu distrito ou bairro em Campinas.'
      },
      {
        question: 'A caçamba pode ser colocada dentro da garagem particular?',
        answer: 'Pode, desde que o portão e a altura livre permitam a entrada e manobra dos braços do caminhão sem risco a telhados ou calhas.'
      },
      {
        question: 'Qual o período de permanência da caçamba?',
        answer: 'O prazo padrão é informado no orçamento, com possibilidade de ajuste conforme o cronograma da sua reforma.'
      }
    ]
  },
  {
    city: 'Curitiba',
    uf: 'PR',
    stateName: 'Paraná',
    slug: 'curitiba',
    stateSlug: 'pr',
    pageTitle: 'Aluguel de Caçamba em Curitiba PR | Fortera Caçambas',
    metaDescription: 'Aluguel de caçambas de entulho em Curitiba PR. Orientações práticas de acesso, arborização e condições confirmadas no orçamento.',
    heroHeadline: 'Aluguel de Caçamba de Entulho em Curitiba (PR)',
    heroSubheadline: 'Orientação para sua obra na capital paranaense. Consulte disponibilidade e condições para seu endereço.',
    localContext: {
      overview: 'Em Curitiba, o planejamento para a colocação de caçambas exige atenção a vias exclusivas de transporte, presença de árvores de grande porte com fiação e variações de clima.',
      logisticsChallenges: [
        'Vias com canaletas de transporte: nunca estacione caçambas ou impeça a circulação em faixas exclusivas do transporte coletivo.',
        'Arborização e fiação aérea: em ruas com copas de árvores densas, verifique se há altura livre para os braços mecânicos no momento da descarga.',
        'Períodos de chuva: resíduos expostos a chuvas constantes podem absorver água; recomenda-se cobrir o material caso a obra coincida com períodos úmidos.'
      ],
      accessTips: [
        'Verifique previamente a ausência de galhos baixos e fiações suspensas sobre a vaga escolhida.',
        'Reserve o espaço no meio-fio com sinalização adequada antes do horário previsto para a chegada.'
      ],
      bestDumpsterSizes: 'Modelos nominais de 3, 4 e 5 m³ sob consulta de rota. Escolha de acordo com o material predominante (alvenaria pesada ou materiais mistos).'
    },
    recommendedSizes: [
      {
        size: '3 m³',
        scenario: 'Reformas pontuais de apartamentos e reformas compactas de piso.',
        notes: 'Ocupa menos espaço na vaga e atende a materiais de alta densidade.'
      },
      {
        size: '4 m³',
        scenario: 'Reformas de casas e estabelecimentos comerciais em Curitiba.',
        notes: 'Opção equilibrada para alvenaria e resíduos de reforma sob regras locais.'
      },
      {
        size: '5 m³',
        scenario: 'Obras maiores com volume de materiais leves sob avaliação prévia.',
        notes: 'Verifique condições de trânsito e aceitação de materiais volumosos.'
      }
    ],
    stepsToRent: [
      {
        step: '1',
        title: 'Cotação para Curitiba',
        description: 'Preencha o formulário informando seu bairro, resíduos gerados e tamanho desejado.'
      },
      {
        step: '2',
        title: 'Verificação do acesso',
        description: 'Avaliamos a viabilidade de estacionamento na via ou no terreno.'
      },
      {
        step: '3',
        title: 'Entrega no endereço',
        description: 'Colocação no ponto combinado respeitando o meio-fio e a circulação.'
      },
      {
        step: '4',
        title: 'Retirada e destinação',
        description: 'Condições e destinação dos resíduos confirmadas no orçamento.'
      }
    ],
    localFaq: [
      {
        question: 'A caçamba pode ficar sobre a calçada de pedestres em Curitiba?',
        answer: 'Não. O passeio público deve ficar livre para a circulação de pedestres. A caçamba deve ser colocada na via rente ao meio-fio ou dentro do lote.'
      },
      {
        question: 'Posso descartar gesso e drywall junto com alvenaria?',
        answer: 'A aceitação e a necessidade de separação dependem das regras locais da usina receptora; informe a presença de gesso na solicitação.'
      },
      {
        question: 'Como funciona a cotação para bairros afastados do centro?',
        answer: 'Consulte disponibilidade e condições para seu endereço diretamente no formulário de orçamento.'
      }
    ]
  },
  {
    city: 'Belo Horizonte',
    uf: 'MG',
    stateName: 'Minas Gerais',
    slug: 'belo-horizonte',
    stateSlug: 'mg',
    pageTitle: 'Aluguel de Caçamba em Belo Horizonte MG | Fortera Caçambas',
    metaDescription: 'Aluguel de caçambas de entulho em Belo Horizonte MG. Orientações sobre aclives, estabilidade na via e condições confirmadas no orçamento.',
    heroHeadline: 'Aluguel de Caçamba de Entulho em Belo Horizonte (MG)',
    heroSubheadline: 'Orientação para sua obra na capital mineira. Consulte disponibilidade e condições para seu endereço.',
    localContext: {
      overview: 'Em Belo Horizonte, as características de relevo acentuado e ruas tradicionais demandam atenção especial à estabilidade da caçamba no solo e à manobra do caminhão.',
      logisticsChallenges: [
        'Vias com inclinação e ladeiras: em ruas inclinadas, certifique-se de que a caçamba ficará bem apoiada no solo sem risco de escorregamento.',
        'Ruas mais estreitas: vias com carros estacionados dos dois lados requerem alinhamento de horário para manobra segura do veículo.',
        'Fiação aérea em bairros residenciais: observe a altura dos cabos de energia e telefonia no ponto da descarga.'
      ],
      accessTips: [
        'Procure sempre o trecho mais nivelado da guia em frente ao imóvel para receber o recipiente.',
        'Se o piso particular for delicado, prepare pranchas de madeira para apoio da caçamba.'
      ],
      bestDumpsterSizes: 'Modelos de 3 e 4 m³ são muito procurados em áreas de declive pela facilidade de manobra, com opção de 5 m³ sob avaliação prévia de acesso.'
    },
    recommendedSizes: [
      {
        size: '3 m³',
        scenario: 'Reformas pontuais de banheiros, cozinhas e obras em ruas íngremes.',
        notes: 'Mais compacta para áreas com manobra reduzida.'
      },
      {
        size: '4 m³',
        scenario: 'Reformas residenciais e comerciais em bairros de BH.',
        notes: 'Capacidade padrão intermediária para entulho de reforma.'
      },
      {
        size: '5 m³',
        scenario: 'Obras maiores com resíduos de maior cubagem sob avaliação de acesso.',
        notes: 'Consulte regras de recebimento para materiais volumosos.'
      }
    ],
    stepsToRent: [
      {
        step: '1',
        title: 'Cotação para BH',
        description: 'Informe seu bairro, tipo de material e características do acesso da rua.'
      },
      {
        step: '2',
        title: 'Alinhamento da entrega',
        description: 'Avaliamos as condições de estacionamento e estabilidade do ponto.'
      },
      {
        step: '3',
        title: 'Colocação no local',
        description: 'A caçamba é posicionada de forma segura paralela ao meio-fio.'
      },
      {
        step: '4',
        title: 'Retirada combinada',
        description: 'Recolhimento após o carregamento até o nível da borda superior.'
      }
    ],
    localFaq: [
      {
        question: 'É seguro colocar caçamba em rua com declive em BH?',
        answer: 'Sim, desde que posicionada em ponto com estabilidade. Em inclinações extremas, o motorista avalia o ponto mais seguro ou a entrada do lote.'
      },
      {
        question: 'Vocês atendem diferentes regiões de Belo Horizonte?',
        answer: 'Consulte disponibilidade e condições para seu endereço no formulário, informando a região ou bairro de BH.'
      },
      {
        question: 'Posso descartar restos de madeira na caçamba?',
        answer: 'A aceitação de madeiramento depende de regras de triagem; informe a composição do entulho no orçamento para orientação adequada.'
      }
    ]
  },
  {
    city: 'Rio de Janeiro',
    uf: 'RJ',
    stateName: 'Rio de Janeiro',
    slug: 'rio-de-janeiro',
    stateSlug: 'rj',
    pageTitle: 'Aluguel de Caçamba no Rio de Janeiro RJ | Fortera Caçambas',
    metaDescription: 'Aluguel de caçambas de entulho no Rio de Janeiro RJ. Orientações para estacionamento, horários de trânsito e condições no orçamento.',
    heroHeadline: 'Aluguel de Caçamba de Entulho no Rio de Janeiro (RJ)',
    heroSubheadline: 'Orientação para sua obra no Rio. Consulte disponibilidade e condições para seu endereço.',
    localContext: {
      overview: 'No Rio de Janeiro, a logística de caçambas envolve atenção a restrições de horários de trânsito para veículos pesados em vias de ligação e à concorrência por vagas em bairros mais densos.',
      logisticsChallenges: [
        'Janelas de circulação de veículos de carga: em determinadas vias e bairros, a circulação de caminhões é restrita a certos horários do dia.',
        'Reserva de vaga no meio-fio: em bairros movimentados, reservar o espaço com antecedência é indispensável para a chegada do caminhão.',
        'Regras internas de condomínio: reformas em edifícios residenciais exigem confirmação de horários de ruído e recebimento com a portaria.'
      ],
      accessTips: [
        'Alinhe com a administração predial o dia previsto de chegada da caçamba.',
        'Mantenha a vaga livre no meio-fio no horário combinado para a descida do recipiente.'
      ],
      bestDumpsterSizes: 'Opções de 3, 4 e 5 m³ nominais sob consulta, avaliadas conforme a proporção de alvenaria e o espaço disponível na calçada.'
    },
    recommendedSizes: [
      {
        size: '3 m³',
        scenario: 'Reformas pontuais de banheiros e cozinhas em apartamentos residenciais.',
        notes: 'Tamanho mais compacto para locais com vaga restrita.'
      },
      {
        size: '4 m³',
        scenario: 'Reformas residenciais completas e manutenções comerciais.',
        notes: 'Capacidade versátil para entulho comum de obra.'
      },
      {
        size: '5 m³',
        scenario: 'Obras mais amplas com resíduos volumosos sob consulta.',
        notes: 'Verifique condições de recebimento para materiais mistos.'
      }
    ],
    stepsToRent: [
      {
        step: '1',
        title: 'Cotação no Rio',
        description: 'Indique seu bairro, tipo de material gerado e tamanho desejado.'
      },
      {
        step: '2',
        title: 'Janela de entrega',
        description: 'Planejamos a chegada considerando os horários de tráfego da região.'
      },
      {
        step: '3',
        title: 'Posicionamento',
        description: 'Descida da caçamba no alinhamento da guia ou dentro do imóvel.'
      },
      {
        step: '4',
        title: 'Retirada e destinação',
        description: 'Condições e destinação dos resíduos confirmadas no orçamento.'
      }
    ],
    localFaq: [
      {
        question: 'Qual o melhor horário para entrega de caçamba no Rio?',
        answer: 'Geralmente em horários de menor movimento viário ou no início da manhã, respeitando normas de condomínio e trânsito da via.'
      },
      {
        question: 'Posso descartar gesso na mesma caçamba de alvenaria?',
        answer: 'Informe a presença de gesso na solicitação para verificar se a usina receptora exige separação prévia na sua localidade.'
      },
      {
        question: 'Vocês atendem Zonas Sul, Norte, Oeste e Centro?',
        answer: 'Consulte disponibilidade e condições para seu endereço no formulário, indicando seu bairro no Rio de Janeiro.'
      }
    ]
  },
  {
    city: 'São Paulo',
    uf: 'SP',
    stateName: 'São Paulo',
    slug: 'sao-paulo',
    stateSlug: 'sp',
    pageTitle: 'Aluguel de Caçamba em São Paulo SP | Fortera Caçambas',
    metaDescription: 'Aluguel de caçambas de entulho em São Paulo SP. Orientações sobre trânsito, estacionamento na via e condições confirmadas no orçamento.',
    heroHeadline: 'Aluguel de Caçamba de Entulho em São Paulo (SP)',
    heroSubheadline: 'Orientação para sua obra na capital paulista. Consulte disponibilidade e condições para seu endereço.',
    localContext: {
      overview: 'Na cidade de São Paulo, a operação com caçambas exige atenção cuidadosa a normas de trânsito, vias com restrição de veículos pesados, regras de estacionamento rotativo e respeito aos limites da borda.',
      logisticsChallenges: [
        'Janelas de tráfego e vias principais: em grandes avenidas e zonas de restrição, entregas e retiradas podem exigir horários programados específicos.',
        'Reserva prévia de vaga na rua: em bairros de grande densidade, garantir a vaga livre no meio-fio é essencial para viabilizar a parada do poliguindaste.',
        'Limite de borda estrito: nunca permita que o entulho ultrapasse o nível superior da caçamba metálica.'
      ],
      accessTips: [
        'Confirme se há feira livre ou obras viárias na rua no dia programado para a entrega.',
        'Em condomínios verticais, alinhe com a portaria os horários de entrada e saída de caminhões.'
      ],
      bestDumpsterSizes: 'Modelos de 3, 4 e 5 m³ nominais disponíveis sob consulta. A de 4 m³ é uma das mais adotadas para reformas residenciais.'
    },
    recommendedSizes: [
      {
        size: '3 m³',
        scenario: 'Reformas pontuais de banheiros, lavabos e cozinhas em apartamentos.',
        notes: 'Mais compacta para vagas concorridas e entulho denso de alvenaria.'
      },
      {
        size: '4 m³',
        scenario: 'Reformas residenciais completas, casas térreas e lojas.',
        notes: 'Capacidade intermediária padrão para reformas de porte médio.'
      },
      {
        size: '5 m³',
        scenario: 'Obras maiores com volume de materiais leves sob consulta de tráfego.',
        notes: 'Verifique regras locais para descarte de drywall, madeiras e forros.'
      }
    ],
    stepsToRent: [
      {
        step: '1',
        title: 'Cotação para São Paulo',
        description: 'Informe seu bairro na capital, tipo de material e previsão de início.'
      },
      {
        step: '2',
        title: 'Alinhamento de vaga e horário',
        description: 'Verificamos as condições de acesso à via e janela de entrega.'
      },
      {
        step: '3',
        title: 'Posicionamento da caçamba',
        description: 'O caminhão posiciona a caçamba rente à guia ou no terreno.'
      },
      {
        step: '4',
        title: 'Retirada e destinação',
        description: 'Condições e destinação dos resíduos confirmadas no orçamento.'
      }
    ],
    localFaq: [
      {
        question: 'O que observar se a rua tiver estacionamento regulamentado?',
        answer: 'Verifique as orientações de trânsito para a sua via no momento da cotação para planejar o posicionamento adequado.'
      },
      {
        question: 'Vocês atendem todas as zonas de São Paulo?',
        answer: 'Consulte disponibilidade e condições para seu endereço no formulário, indicando seu bairro e zona da capital.'
      },
      {
        question: 'Posso descartar restos de gesso ou drywall?',
        answer: 'Resíduos de gesso e drywall dependem de regras de aceitação e triagem; mencione o volume desses materiais no orçamento.'
      }
    ]
  }
];

export function getCityBySlug(uf: string, slug: string): CityLocalPage | undefined {
  const cleanUf = uf.toUpperCase();
  const cleanSlug = slug.toLowerCase();
  return CITIES_DATA.find(c => c.uf === cleanUf && c.slug === cleanSlug);
}

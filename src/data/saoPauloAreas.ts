export const CAPITAL_PATH = '/aluguel-de-cacamba/sp/sao-paulo/';
export const capitalAreaPath = (slug: string) => `${CAPITAL_PATH}${slug}/`;

export interface CapitalArea {
  slug: string;
  name: string;
  zone: string;
  kind: 'zone' | 'district';
  focus: string;
  intro: string;
  planning: string;
  access: string;
  checklist: string[];
  question: string;
  answer: string;
  image: number;
}

export const CAPITAL_AREAS: CapitalArea[] = [
  {
    slug: 'zona-leste', name: 'Zona Leste', zone: 'zona-leste', kind: 'zone', image: 1,
    focus: 'Da reforma de casa à renovação de lojas e condomínios',
    intro: 'Vai alugar uma caçamba na Zona Leste de São Paulo? Comece informando o bairro e a etapa da obra: retirada de piso, reforma de banheiro, troca de revestimentos ou pequena demolição. Penha, Tatuapé, Itaquera e Mooca estão em pontos diferentes da região; o endereço da entrega permite avaliar a logística e preparar uma proposta para a sua necessidade.',
    planning: 'Para comparar locação de caçamba na Zona Leste, envie a mesma descrição do material, do volume e do prazo em cada orçamento. Uma caçamba para entulho mineral de uma reforma pode exigir uma programação diferente de uma obra com madeira, gesso ou materiais misturados. Descreva esses resíduos antes de contratar e confirme sua aceitação. Se houver mais de uma etapa, combine quando o entulho ficará pronto para retirada e se será necessária uma troca.',
    access: 'Mostre o ponto de colocação em uma foto ampla, incluindo portão, calçada, fiação e circulação de veículos. Em apartamento, alinhe o transporte interno do entulho com a administração; em loja, preserve a entrada durante o expediente. Não reserve uma vaga nem bloqueie uma passagem sem confirmar as condições do local.',
    checklist: ['Bairro e endereço da obra na capital', 'Materiais de cada etapa da reforma', 'Foto da vaga e do acesso do caminhão', 'Data pretendida e necessidade de troca'],
    question: 'A cotação é igual para toda a Zona Leste?',
    answer: 'Não. Informe o bairro e o endereço, além de material, capacidade e prazo. A proposta confirma a operação para aquele ponto. Para orientação mais específica, consulte abaixo as páginas de Penha, Tatuapé, Itaquera, Mooca e São Mateus.'
  },
  {
    slug: 'zona-norte', name: 'Zona Norte', zone: 'zona-norte', kind: 'zone', image: 5,
    focus: 'Planejamento do acesso e da retirada do entulho',
    intro: 'O aluguel de caçamba na Zona Norte de São Paulo começa com o planejamento do local de entrega. Para reformar casa, apartamento ou comércio, informe o bairro, o tipo de entulho e o espaço disponível. Em Santana ou em outro endereço da região, a avaliação precisa considerar o ponto exato da obra e a circulação necessária para o caminhão.',
    planning: 'Antes de pedir a locação, separe o que será demolido do que será reutilizado. Tijolos, argamassa e cerâmica têm comportamento de carga diferente de madeira e embalagens. Descrever o material ajuda a dimensionar o equipamento sem confundir volume com peso. Se a obra continuar após a primeira retirada, combine a sequência das cargas e o período de permanência. Evite carregar acima da borda para tentar concentrar várias etapas em uma só caçamba.',
    access: 'Avise se o trecho de acesso tem inclinação, curva, portão estreito ou obstáculos superiores. A equipe precisa conhecer essas condições antes de programar a entrega e a retirada com o recipiente carregado. Em condomínio, confirme também quem libera o acesso e quais horários podem ser combinados.',
    checklist: ['Fotos da aproximação e da vaga', 'Condições de entrada e manobra', 'Responsável pela liberação do imóvel', 'Tipo de material e prazo da reforma'],
    question: 'O que informar se a rua da obra tem acesso difícil?',
    answer: 'Envie fotos e descreva a inclinação, a largura de passagem e os obstáculos antes de fechar a locação. Não basta caber o recipiente: é necessário avaliar a operação do caminhão na entrega e na retirada. A equipe confirma as condições para o endereço.'
  },
  {
    slug: 'zona-sul', name: 'Zona Sul', zone: 'zona-sul', kind: 'zone', image: 8,
    focus: 'Obras por etapas e atendimento conforme o endereço',
    intro: 'Para contratar caçamba de entulho na Zona Sul de São Paulo, conte onde fica a obra e o que será descartado. A orientação para uma reforma em Santo Amaro pode ser diferente da necessária para um imóvel no Jabaquara. O orçamento considera endereço, capacidade, acesso e período, com entrega e retirada combinadas na proposta.',
    planning: 'Em uma reforma de cozinha ou banheiro, calcule quando o entulho começará a sair do imóvel e quando ficará disponível para coleta. Contratar antes da etapa certa pode ocupar a vaga por mais tempo que o necessário. Se a obra durar semanas, alinhe o calendário das cargas e confirme as condições de prorrogação e troca. Separe resíduos especiais e pergunte sobre aceitação antes de misturá-los à alvenaria.',
    access: 'Em condomínios, confirme o horário de serviços, a proteção das áreas comuns e o percurso do material até o recipiente. Para casas e comércios, informe se a vaga precisa preservar garagem, entrada de clientes ou circulação de pedestres. Envie o ponto pretendido para avaliação antes de depender de uma data de entrega.',
    checklist: ['Endereço e bairro dentro de São Paulo', 'Etapa da obra e data do descarte', 'Restrições de portaria e circulação', 'Prazo, troca e retirada desejados'],
    question: 'Posso combinar entregas para etapas diferentes da reforma?',
    answer: 'Descreva a sequência da obra no atendimento. A equipe verifica a programação para o endereço e confirma prazo, troca, retirada e valor. Não considere uma troca agendada antes de receber a confirmação da proposta.'
  },
  {
    slug: 'zona-oeste', name: 'Zona Oeste', zone: 'zona-oeste', kind: 'zone', image: 10,
    focus: 'Organização da vaga em reformas residenciais e comerciais',
    intro: 'Procura aluguel ou locação de caçamba na Zona Oeste de São Paulo? Informe o bairro e descreva sua reforma para avaliar tamanho, material e prazo. Lapa e Pinheiros têm páginas próprias neste guia; para outros endereços da região, o atendimento confirma as condições diretamente na conversa de orçamento.',
    planning: 'O planejamento do descarte deve acompanhar a circulação do imóvel. Em loja ou escritório, combine a saída dos resíduos com o funcionamento do estabelecimento. Em apartamento, organize o transporte interno para não depender de uma caçamba ocupando vaga enquanto o entulho ainda está sendo retirado do andar. Compare o valor total da locação, incluindo período e condições de entrega, retirada e eventuais trocas, em vez de comparar somente o tamanho anunciado.',
    access: 'Antes da reserva, verifique se o ponto pretendido interfere em garagem, carga e descarga ou passagem. Informe se há regra de condomínio ou necessidade de colocação em via pública. Para vaga de Zona Azul, consulte as orientações da CET e confirme a autorização aplicável antes de combinar o posicionamento.',
    checklist: ['Foto da vaga com entradas próximas', 'Horários de funcionamento ou portaria', 'Material e volume estimado da carga', 'Condições de uso da vaga pretendida'],
    question: 'Posso colocar a caçamba na vaga em frente ao comércio?',
    answer: 'O ponto precisa ser avaliado antes da contratação. Envie endereço e foto e informe o uso da vaga. Estacionamento na rua, Zona Azul, entradas de veículos e circulação exigem verificação das condições aplicáveis; a proximidade da loja não representa autorização automática.'
  },
  {
    slug: 'penha', name: 'Penha', zone: 'zona-leste', kind: 'district', image: 2,
    focus: 'Reforma de casa com garagem e circulação preservadas',
    intro: 'Vai trocar pisos, reformar o banheiro ou retirar entulho de uma obra na Penha? Peça orçamento de caçamba informando Penha, município de São Paulo, e o endereço. A locação deve acompanhar o tipo de material e a vaga disponível, preservando o acesso dos moradores durante a reforma.',
    planning: 'Para uma casa ocupada na Penha, planeje por onde o entulho vai sair e onde ele aguardará o carregamento. Se a garagem continuará em uso, combine a posição do recipiente considerando portão aberto e fechado. Separe tijolos, cerâmica e argamassa de materiais que precisem de avaliação específica. Descreva o volume e o cronograma da retirada dos revestimentos para escolher capacidade e período sem ocupar o ponto antes da hora.',
    access: 'Envie uma foto frontal do imóvel e outra mostrando a aproximação. Avise sobre portão, cobertura, fiação e entradas vizinhas. Caso a colocação seja na rua, confirme as condições aplicáveis à vaga antes de fechar a reserva. A entrega e a retirada precisam funcionar também com a caçamba carregada.',
    checklist: ['Uso da garagem durante a permanência', 'Caminho do entulho até a caçamba', 'Fotos do portão e dos obstáculos', 'Material da reforma e data pretendida'],
    question: 'Quais informações ajudam no orçamento de caçamba na Penha?',
    answer: 'Informe o endereço na Penha, o tipo de reforma, os materiais, a data e o período desejado. Fotos do acesso e da vaga ajudam a avaliar a operação. Se houver garagem em uso, explique a circulação que precisa permanecer livre.'
  },
  {
    slug: 'tatuape', name: 'Tatuapé', zone: 'zona-leste', kind: 'district', image: 3,
    focus: 'Descarte de reforma em apartamento e condomínio',
    intro: 'Para alugar uma caçamba de entulho no Tatuapé, organize a saída dos resíduos antes de combinar a entrega. Em apartamento, o ponto de colocação é só uma parte do planejamento: elevador de serviço, portaria e horários também precisam acompanhar a reforma. Solicite cotação para o endereço do imóvel em São Paulo.',
    planning: 'Na troca de pisos ou revestimentos, combine com a administração como o material será transportado entre o apartamento e a caçamba. Confirme proteção de áreas comuns e horários de serviço. Descreva a quantidade de ambientes e o material retirado, sem estimar a capacidade somente pelo número de sacos. Se o descarte acontecer ao longo de várias semanas, alinhe os momentos de retirada e as condições de permanência para não depender de espaço indisponível no condomínio.',
    access: 'Informe se a operação ocorre dentro do imóvel ou em vaga externa. Envie fotos da entrada, da área de manobra e do ponto pretendido. Confirme quem autoriza a entrada do caminhão e se há uma janela de serviço; o agendamento deve ser alinhado antes de mobilizar a equipe da obra.',
    checklist: ['Horário e liberação da portaria', 'Transporte interno e elevador de serviço', 'Ponto externo ou interno para entrega', 'Cronograma da retirada de revestimentos'],
    question: 'A caçamba pode atender reforma de apartamento no Tatuapé?',
    answer: 'Sim, desde que as condições do endereço e do material sejam confirmadas. Planeje o transporte do entulho até a caçamba com o condomínio e informe horários, acesso e vaga no pedido de orçamento. A locação não inclui automaticamente o transporte interno dos resíduos.'
  },
  {
    slug: 'itaquera', name: 'Itaquera', zone: 'zona-leste', kind: 'district', image: 4,
    focus: 'Capacidade e peso em pequenas demolições',
    intro: 'O aluguel de caçamba em Itaquera ajuda a organizar o descarte de reformas e pequenas demolições. Para pedir a cotação, descreva o que será removido: piso, contrapiso, parede ou mureta, por exemplo. A escolha considera o peso do material e o acesso para entrega e retirada, além do volume aparente.',
    planning: 'Ao remover alvenaria em Itaquera, não use apenas a altura da pilha de entulho para escolher a caçamba. Concreto e cerâmica podem atingir o limite de carga antes de ocupar todo o recipiente. Informe a composição e a etapa da demolição para receber orientação. Se houver terra, gesso ou madeira junto dos resíduos, avise antes: a aceitação e a separação precisam ser combinadas. Mantenha o material dentro da borda e pergunte sobre troca se a obra produzir uma nova carga.',
    access: 'Marque o ponto pretendido em uma foto ampla e informe espaço para aproximação e manobra. Não monte uma pilha que impeça a colocação ou a retirada. Se a vaga mudar depois da cotação, comunique a alteração antes de agendar o caminhão.',
    checklist: ['Material de paredes, piso e contrapiso', 'Volume estimado e limite de peso', 'Ponto de descarte sem bloqueios', 'Necessidade de retirada ou segunda carga'],
    question: 'Como evitar escolher uma caçamba pequena para a obra em Itaquera?',
    answer: 'Descreva os serviços e envie fotos dos materiais ou da área em reforma. Capacidade em metros cúbicos e peso permitido são critérios diferentes. Confirme ambos no atendimento e combine troca ou uma nova carga se o descarte continuar.'
  },
  {
    slug: 'mooca', name: 'Mooca', zone: 'zona-leste', kind: 'district', image: 6,
    focus: 'Reforma de comércio com funcionamento organizado',
    intro: 'Precisa de caçamba de entulho na Mooca para reformar uma loja, escritório ou residência? Informe o endereço na capital e o período em que o descarte ficará pronto. Para um estabelecimento em funcionamento, vale combinar a saída dos resíduos e a colocação do recipiente sem perder de vista a entrada de clientes e fornecedores.',
    planning: 'Ao renovar um comércio na Mooca, separe o entulho da obra de estoque, embalagens e materiais de reposição. Informe o que vem da demolição e o que precisa de destinação diferente. Se houver etapas fora do expediente, explique a janela disponível antes de reservar; a programação depende de confirmação. Compare valor total, período contratado e condições de retirada. Evite contratar somente pela menor capacidade se isso exigir várias intervenções na circulação da loja.',
    access: 'Mostre entradas de veículos, acesso de fornecedores e circulação de pedestres próximos à vaga. Avise se a colocação interfere no funcionamento do imóvel e quem estará disponível para acompanhar a operação. No caso de via pública, confirme as regras aplicáveis ao ponto pretendido.',
    checklist: ['Horário de funcionamento do imóvel', 'Separação entre entulho e embalagens', 'Entradas de clientes e fornecedores', 'Responsável por acompanhar a entrega'],
    question: 'Posso pedir orçamento de caçamba para uma loja na Mooca?',
    answer: 'Pode. Informe o tipo de reforma, materiais, endereço e horários disponíveis. A equipe confirma capacidade, prazo e logística. Explique se a loja continuará aberta e qual passagem precisa permanecer livre durante a permanência do recipiente.'
  },
  {
    slug: 'santana', name: 'Santana', zone: 'zona-norte', kind: 'district', image: 7,
    focus: 'Avaliação do acesso antes da entrega',
    intro: 'Para locação de caçamba em Santana, na Zona Norte de São Paulo, apresente o local da obra e o acesso do caminhão antes de fechar a reserva. Reformas de casas, apartamentos e estabelecimentos comerciais podem exigir cuidados diferentes na aproximação, no ponto de colocação e na retirada do entulho.',
    planning: 'Organize o descarte de Santana pela etapa da reforma: retirada de revestimentos, demolição e acabamento nem sempre produzem a mesma composição de resíduos. Avise quando a carga inclui concreto, cerâmica, madeira ou gesso e confirme o que pode ser recebido. Em obra ocupada, mantenha o caminho do entulho separado da circulação cotidiana. Para reforma com duração maior, combine o período e o momento de solicitar retirada ou troca, sem pressupor uma coleta automática.',
    access: 'Se houver inclinação, portão estreito ou mudança de nível, envie fotos do trecho e explique a operação pretendida. Não confirme a vaga apenas pelas medidas do recipiente: o caminhão precisa conseguir se aproximar e retirar a carga. Informe também horários e necessidade de acompanhamento no imóvel.',
    checklist: ['Fotos de aproximação e mudança de nível', 'Acesso para retirada com carga', 'Material por etapa da reforma', 'Horário e responsável no endereço'],
    question: 'Como contratar se tenho dúvida sobre o acesso em Santana?',
    answer: 'Envie fotos do trecho de chegada, da entrada e da vaga antes de reservar. A equipe avalia as condições informadas e orienta o ponto de colocação. Confirme a proposta somente após alinhar também a retirada do recipiente carregado.'
  },
  {
    slug: 'lapa', name: 'Lapa', zone: 'zona-oeste', kind: 'district', image: 9,
    focus: 'Vaga e logística para reformas de imóveis',
    intro: 'Vai alugar caçamba na Lapa, em São Paulo? Informe se a reforma é em casa, apartamento, loja ou escritório e mostre a vaga pretendida. O orçamento de caçamba de entulho deve considerar o acesso e o período de permanência, além do material e da capacidade necessária para o descarte.',
    planning: 'Para organizar uma reforma na Lapa, defina o que será descartado e o que continuará no imóvel antes da chegada do equipamento. Não misture móveis, embalagens e resíduos especiais ao entulho sem avaliação prévia. Em imóvel com atividades durante a obra, planeje a circulação e os horários para levar os materiais até a caçamba. Ao comparar propostas, confirme entrega, retirada, prazo e condições de uma eventual troca; esses itens precisam corresponder à mesma necessidade.',
    access: 'Verifique entradas próximas, espaço de carga e descarga e passagem durante a locação. Se houver uso de vaga pública ou Zona Azul, informe no atendimento e consulte as condições de autorização. A posição deve ser confirmada antes do agendamento, especialmente quando a vaga é compartilhada com outras atividades do imóvel.',
    checklist: ['Tipo de imóvel e uso durante a obra', 'Materiais separados para descarte', 'Entradas e carga e descarga próximas', 'Condições da vaga e permanência'],
    question: 'O orçamento na Lapa inclui retirada da caçamba?',
    answer: 'Peça que a proposta detalhe entrega, retirada, prazo e eventuais condições de troca ou prorrogação. Compare o valor total para o endereço e o material informado. Não conclua que propostas com a mesma capacidade possuem as mesmas condições.'
  },
  {
    slug: 'pinheiros', name: 'Pinheiros', zone: 'zona-oeste', kind: 'district', image: 11,
    focus: 'Compatibilização de reforma, portaria e uso da vaga',
    intro: 'O aluguel de caçamba em Pinheiros precisa acompanhar o planejamento da reforma e o uso do imóvel. Se a obra for em apartamento, escritório ou comércio, informe horários de serviço, ponto de colocação e material a descartar. A cotação é preparada para o endereço em São Paulo, com condições confirmadas antes do agendamento.',
    planning: 'Antes da entrega em Pinheiros, combine com a equipe da obra a sequência de saída dos resíduos. Se a reforma ocupa apenas parte de um imóvel em funcionamento, preserve um percurso para o descarte sem bloquear usuários e clientes. Em condomínio, confirme liberação de prestadores e transporte interno. Informe a etapa da obra e a data em que o entulho ficará pronto para carga: isso ajuda a alinhar a locação ao período realmente necessário e a discutir troca caso a reforma continue.',
    access: 'Apresente a vaga em foto e informe se ela fica em via pública, estacionamento ou área privada. Vagas de Zona Azul exigem consulta às condições da CET; a disponibilidade física do espaço não substitui a autorização aplicável. Avise sobre acesso de garagem, carga e descarga e horários de portaria antes da confirmação.',
    checklist: ['Janela de serviço e liberação do imóvel', 'Percurso interno do entulho', 'Tipo e uso da vaga pretendida', 'Data de carregamento e retirada'],
    question: 'O que verificar antes de colocar caçamba em Pinheiros?',
    answer: 'Confirme a vaga e suas condições de uso, incluindo regras de condomínio ou de via pública. Informe entradas e circulação próximas. Se for Zona Azul, consulte a orientação da CET e alinhe a autorização antes de programar a entrega.'
  },
  {
    slug: 'santo-amaro', name: 'Santo Amaro', zone: 'zona-sul', kind: 'district', image: 12,
    focus: 'Locação alinhada às etapas da obra',
    intro: 'Procura caçamba de entulho em Santo Amaro, na capital paulista? Descreva a obra e o calendário do descarte para receber orientação sobre capacidade e prazo. O aluguel pode atender reformas de casas, apartamentos e comércios, com material, entrega e retirada confirmados para o endereço.',
    planning: 'Uma reforma por ambientes em Santo Amaro pode gerar entulho em momentos separados. Combine se os resíduos ficarão disponíveis de uma vez ou em cargas ao longo da obra. Contratar um período maior não dispensa confirmar a programação da retirada e as condições de troca. Informe os materiais de cada etapa e pergunte sobre aceitação quando houver gesso, madeira ou carga mista. Para comparar valores, use a mesma descrição de capacidade, peso e permanência nas propostas.',
    access: 'Se o imóvel continuará em uso, mostre onde a caçamba pode ficar sem bloquear garagem, entrada de clientes ou rota de serviço. Informe os horários em que alguém acompanha a operação. Em condomínio, confirme liberação e acesso antes de combinar uma data.',
    checklist: ['Etapas e sequência do descarte', 'Prazo e condições de prorrogação', 'Entradas que precisam ficar livres', 'Responsável e horários para a operação'],
    question: 'Posso alugar caçamba por mais tempo em Santo Amaro?',
    answer: 'Consulte um período compatível com a sua obra e confirme prazo, programação e valor no atendimento. Se a carga ficar pronta antes ou a reforma atrasar, avise a equipe e combine retirada, troca ou prorrogação; não pressuponha alteração automática do contrato.'
  },
  {
    slug: 'jabaquara', name: 'Jabaquara', zone: 'zona-sul', kind: 'district', image: 13,
    focus: 'Descarte de banheiro, cozinha e troca de pisos',
    intro: 'Para pedir aluguel de caçamba no Jabaquara, informe o tipo de reforma e o ponto de entrega em São Paulo. Na troca de pisos ou renovação de banheiro e cozinha, cerâmica, argamassa e contrapiso precisam ser avaliados conforme volume e peso. Fotos da obra e da vaga ajudam a preparar a cotação.',
    planning: 'Antes de iniciar a retirada de revestimentos no Jabaquara, organize a separação do material que irá para a caçamba. Não aproveite o recipiente para incluir tintas, líquidos, lixo doméstico ou materiais perigosos. Se também houver gesso, madeira ou outros resíduos, confirme a aceitação e a forma de separação no atendimento. Coordene a contratação com a data em que o entulho será levado para fora do imóvel, evitando depender de armazenamento improvisado em área de circulação.',
    access: 'Em apartamento, combine com a portaria o uso das áreas comuns e o transporte interno. Em casa, mostre a posição pretendida e avise se a entrada continuará sendo utilizada. O ponto precisa permitir entrega e retirada e respeitar as condições de uso da vaga.',
    checklist: ['Materiais retirados dos revestimentos', 'Separação de resíduos especiais', 'Data de saída do entulho do imóvel', 'Vaga e liberação para entrega e retirada'],
    question: 'Qual caçamba escolher para reforma de banheiro no Jabaquara?',
    answer: 'Informe o que será removido e envie fotos para orientação de capacidade. Piso, revestimento, contrapiso e alvenaria têm peso relevante, por isso não escolha apenas pelo espaço aparente. Confirme o material aceito e o limite de carga antes da locação.'
  }
];

export const capitalAreaPlace = (area: CapitalArea) => `${area.kind === 'zone' || ['penha','mooca','lapa'].includes(area.slug) ? 'na' : ['tatuape','jabaquara'].includes(area.slug) ? 'no' : 'em'} ${area.name}`;
export const capitalAreaTitle = (area: CapitalArea) => `Aluguel de Caçamba ${capitalAreaPlace(area)}, São Paulo | Fortera`;
export const capitalAreaDescription = (area: CapitalArea) => `Locação de caçamba de entulho ${capitalAreaPlace(area)}, São Paulo. ${area.focus}. Consulte tamanho, preço e prazo. Orçamento direto.`;

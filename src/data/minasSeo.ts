import localities from './minasLocalities.json';
export const MINAS_CONTENT_UPDATED = '2026-10-25';

export const MINAS_LOCALITIES: Record<string, { id: number; immediate: string; intermediate: string; districts: string[] }> = localities;
export const minasRegionId = (name: string) => 'mg-' + name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
export const MINAS_SOURCES = {
  municipalities: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/municipios?orderBy=nome',
  districts: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/31/distritos?orderBy=nome',
  date: '25/10/2026',
};

type RegionalGuide = { title: string; planning: string; question: string; answer: string; checklist: string[]; image: number };
// Editorial guidance by IBGE intermediate region. These are planning scenarios, not promises of a local fleet or municipal rules.
export const MINAS_REGIONAL_GUIDES: Record<string, RegionalGuide> = {
  'Belo Horizonte': {
    title: 'Reformas com entrada, vaga e retirada bem combinadas',
    planning: 'Uma reforma de apartamento exige um planejamento diferente da construção de uma casa. Se houver condomínio, combine a movimentação do entulho entre a unidade, o elevador e o ponto de coleta antes de escolher o dia da entrega. Em uma obra térrea, verifique se a caçamba pode ficar dentro do imóvel. Em ambos os casos, a equipe precisa saber onde o caminhão vai parar e como fará a retirada.',
    question: 'A caçamba vai ficar em condomínio ou na rua?',
    answer: 'Na área privada, confirme acesso, resistência do piso e espaço de manobra com o responsável. Na via pública, consulte as condições do município e a sinalização do local. A autorização do condomínio não substitui eventual exigência municipal para ocupação da rua.',
    checklist: ['Horário de portaria e circulação de prestadores', 'Percurso do entulho até o ponto de coleta', 'Condições da vaga e espaço para retirada'], image: 1,
  },
  'Uberlândia': {
    title: 'Construção por etapas e troca sem interromper o canteiro',
    planning: 'Para uma obra com fundação, alvenaria e acabamento em momentos diferentes, estime o descarte de cada fase. Terra de escavação, concreto e embalagens não devem ser tratados como uma carga única sem avaliação. Se o recipiente ficar dentro do lote, preserve o acesso do caminhão durante toda a locação: materiais entregues depois não podem bloquear a retirada.',
    question: 'Vale reservar uma caçamba grande ou programar trocas?',
    answer: 'A decisão depende do espaço, da geração de resíduos e do limite de carga. Informe a duração da etapa e a composição do descarte. A equipe confirma as capacidades disponíveis e se há programação de trocas para o endereço; uma caçamba maior não permite exceder o peso aceito.',
    checklist: ['Etapa da obra e ritmo de geração de entulho', 'Separação de terra, concreto e resíduos leves', 'Acesso livre durante todo o período'], image: 8,
  },
  'Uberaba': {
    title: 'Entrega no endereço certo, da sede ao distrito',
    planning: 'Ao solicitar uma caçamba para imóvel fora da sede municipal, indique o distrito, o nome da via e uma referência de acesso. Para uma chácara, galpão ou lote, descreva a entrada, o portão e o local de retorno. Esse detalhamento permite avaliar o deslocamento sem confundir a cidade da obra com outro município da região.',
    question: 'Como pedir orçamento quando o endereço não tem numeração clara?',
    answer: 'Envie pelo WhatsApp o município, o distrito ou localidade, um ponto de referência e, quando necessário, a localização da entrada. Fotos do portão e do acesso ajudam na avaliação. Disponibilidade, transporte e possibilidade de entrega precisam ser confirmados antes da reserva.',
    checklist: ['Município e distrito do imóvel', 'Entrada identificada e ponto de referência', 'Largura do portão e área para retorno'], image: 11,
  },
  'Patos de Minas': {
    title: 'Separar o entulho antes de ocupar o espaço da obra',
    planning: 'Em uma reforma que mistura troca de telhado, piso e limpeza do terreno, separar materiais desde o início facilita o orçamento. Descreva o que é resíduo da construção e o que precisa de outra destinação. Se o serviço ocorrer em propriedade rural, não inclua defensivos, recipientes contaminados ou resíduos da atividade produtiva na carga de entulho.',
    question: 'Posso colocar o descarte da limpeza do terreno junto da reforma?',
    answer: 'Depende dos materiais e da operação disponível. Informe separadamente terra, raízes, galhos, madeira, cerâmica e concreto. A aceitação precisa ser confirmada; não use o recipiente para líquidos, embalagens contaminadas ou produtos perigosos.',
    checklist: ['Lista de materiais antes do carregamento', 'Separação entre entulho e resíduos especiais', 'Avaliação do acesso ao lote ou propriedade'], image: 13,
  },
  'Montes Claros': {
    title: 'Planejar o transporte e o período antes da demolição',
    planning: 'Quando o orçamento depende de deslocamento até um distrito ou localidade, a identificação completa do ponto de entrega evita uma proposta para o lugar errado. Antes de iniciar uma demolição, confirme a janela de atendimento, a capacidade e a data prevista para retirada. A escolha por dias ou período mais longo deve acompanhar o cronograma real da obra.',
    question: 'Posso começar a quebrar antes de confirmar a caçamba?',
    answer: 'É melhor confirmar a operação e o ponto de coleta primeiro. Entulho acumulado no passeio pode prejudicar a circulação e exigir movimentação adicional. Planeje onde o material ficará durante a etapa e não considere o clique no orçamento uma entrega já agendada.',
    checklist: ['Referência do local e condição da estrada de acesso', 'Data de início da geração de entulho', 'Período e retirada confirmados na proposta'], image: 5,
  },
  'Teófilo Otoni': {
    title: 'Conferir o percurso completo até o ponto de entrega',
    planning: 'O acesso não se resume à largura da rua em frente ao imóvel. Ao contratar, avise sobre curvas fechadas, pontes, piso sem pavimentação e mudanças de nível se essas condições existirem no trajeto. Para uma obra em distrito, informe a localidade antes de combinar o transporte. Fotos do percurso crítico podem ser avaliadas pela equipe junto da solicitação.',
    question: 'O que mostrar quando há dúvida sobre a entrada do caminhão?',
    answer: 'Registre o trecho mais estreito, o portão e a área de posicionamento, sem se colocar em risco. Informe obstáculos e se há alternativa de acesso. A avaliação deve ocorrer antes da entrega, pois não é possível confirmar a manobra apenas pelo nome da cidade.',
    checklist: ['Trechos estreitos e obstáculos no percurso', 'Piso e desníveis no ponto de colocação', 'Distrito e alternativa de entrada, se houver'], image: 12,
  },
  'Governador Valadares': {
    title: 'Retirar entulho de reforma sem bloquear a circulação',
    planning: 'Para reformas de lojas, casas e imóveis ocupados, defina onde o material será retirado sem bloquear portas ou a passagem de pedestres. Se houver carga e descarga de fornecedores no mesmo local, organize as janelas de uso da entrada. A caçamba precisa permanecer acessível tanto no dia da entrega quanto na retirada.',
    question: 'Como conciliar a caçamba com uma loja que continua aberta?',
    answer: 'Explique o horário de funcionamento e o fluxo de clientes. Combine o ponto de coleta com o responsável pelo imóvel e confira as condições de uso da via pública no município. Não reserve uma vaga que impeça acesso ou circulação para tentar aproximar o recipiente da porta.',
    checklist: ['Entrada de clientes e passagem de pedestres', 'Horário de fornecedores e carga e descarga', 'Espaço preservado para o caminhão voltar'], image: 3,
  },
  'Ipatinga': {
    title: 'Distinguir reforma civil de descarte industrial',
    planning: 'A caçamba para entulho de construção não substitui um serviço de gestão de qualquer resíduo industrial. Se a reforma ocorrer em empresa ou galpão, informe se o descarte é concreto e alvenaria ou se há material de processo produtivo, óleo, lodo e contaminação. Descreva também os procedimentos de entrada exigidos no estabelecimento.',
    question: 'Uma obra dentro da empresa pode usar caçamba de entulho?',
    answer: 'O entulho civil pode ser avaliado, mas não misture resíduos de produção, produtos químicos ou material contaminado. A aceitação depende da composição e da operação. Informe exigências de acesso e documentação antes de contratar, sem presumir que o equipamento atende a todo descarte da empresa.',
    checklist: ['Resíduo civil separado do processo produtivo', 'Exigências de entrada no estabelecimento', 'Carga e destinação confirmadas no orçamento'], image: 14,
  },
  'Juiz de Fora': {
    title: 'Organizar o caminho do entulho em imóveis ocupados',
    planning: 'Em uma reforma de banheiro, cozinha ou apartamento, meça o volume depois da retirada dos revestimentos e considere o espaço de armazenamento temporário. Quando a caçamba não puder ficar ao lado da obra, planeje o trajeto do material até o recipiente. Em prédios, a movimentação depende das condições de portaria, elevador e áreas comuns.',
    question: 'Como dimensionar o descarte de piso e revestimento?',
    answer: 'Informe a área reformada, se haverá retirada de contrapiso e se também serão removidas paredes ou louças. A área em metros quadrados não se converte diretamente em uma capacidade sem considerar espessura, volume e peso. Envie detalhes da intervenção para receber orientação.',
    checklist: ['Área e camadas de material a remover', 'Trajeto até o recipiente e armazenamento provisório', 'Horários e regras internas do imóvel'], image: 4,
  },
  'Barbacena': {
    title: 'Avaliar o ponto de apoio antes de posicionar a caçamba',
    planning: 'Se o imóvel tiver rampa, acesso em desnível ou pátio com piso sensível, avise antes de agendar. A caçamba carregada precisa de uma posição adequada e de acesso para o equipamento de retirada. A avaliação também deve considerar árvores, coberturas e fiação no ponto escolhido, sem presumir que qualquer vaga serve.',
    question: 'Posso colocar a caçamba em uma rampa ou piso delicado?',
    answer: 'A equipe precisa avaliar a situação. Informe inclinação, tipo de piso e limitações do acesso e envie fotos quando solicitado. Não improvise apoios nem altere a posição do equipamento por conta própria; combine um ponto seguro antes da entrega.',
    checklist: ['Condição do piso e eventual inclinação', 'Obstáculos acima do ponto de colocação', 'Área livre para operação na retirada'], image: 6,
  },
  'Varginha': {
    title: 'Distinguir uma pequena reforma de uma limpeza geral',
    planning: 'Ao reformar casa, comércio ou imóvel de hospedagem, informe o que será desmontado e o que será apenas retirado do ambiente. Móveis, colchões, eletroeletrônicos e lixo comum não devem ser confundidos com entulho. Se a intervenção acontecer em fases, combine o período da caçamba com o momento que gera mais resíduos de construção.',
    question: 'A mesma caçamba recebe móveis antigos e restos de obra?',
    answer: 'Não presuma que sim. Faça uma lista por material e confirme a aceitação de cada item. O orçamento de entulho não inclui automaticamente retirada de móveis, eletrodomésticos ou outros resíduos volumosos. Separe o que demanda outra solução de descarte.',
    checklist: ['Materiais da obra separados dos objetos do imóvel', 'Data da etapa de maior descarte', 'Condições para permanecer no local'], image: 9,
  },
  'Pouso Alegre': {
    title: 'Combinar obra, condomínio e acesso ao lote',
    planning: 'Para obras em loteamentos, condomínios ou imóveis com entrada controlada, reúna as regras de acesso antes de solicitar a entrega. Verifique se o caminhão pode chegar à vaga e se há horário para serviços. Para endereços fora da sede, acrescente o distrito e uma referência clara do portão, sem usar apenas o nome do empreendimento.',
    question: 'O que informar sobre um condomínio ou loteamento?',
    answer: 'Envie o endereço, bloco ou lote, contato da portaria quando necessário e as condições de entrada de caminhões. Combine a movimentação com o responsável pelo local. A liberação interna e a possibilidade de atendimento são verificações diferentes e precisam estar alinhadas.',
    checklist: ['Bloco ou lote e identificação do portão', 'Horário permitido e liberação de entrada', 'Vaga e condições para manobra'], image: 10,
  },
  'Divinópolis': {
    title: 'Definir material, prazo e retirada antes de contratar',
    planning: 'Para uma reforma com demolição de alvenaria e acabamento, identifique os resíduos de cada etapa e o momento previsto de retirada. Uma carga de concreto demanda avaliação diferente de madeira ou gesso. No orçamento, descreva se haverá uma única retirada ou se a obra continuará gerando material após o primeiro recipiente encher.',
    question: 'Como combinar retirada antecipada ou troca durante a reforma?',
    answer: 'Informe o ritmo da obra e consulte a programação disponível. Confirme na proposta como solicitar retirada, eventual troca e prorrogação; essas condições não são automaticamente iguais para todos os endereços. Não espere ultrapassar a borda para avisar que a caçamba encheu.',
    checklist: ['Composição do entulho por etapa', 'Data estimada de enchimento', 'Condições de troca e prorrogação por escrito'], image: 15,
  },
};

// Additional editorial notes for distinct city situations. No invented prices, availability, licenses or branch addresses.
export const MINAS_CITY_NOTES: Record<string, { focus: string; text: string; tip: string }> = {
  'belo-horizonte': { focus: 'Reformas em apartamentos, casas e pontos comerciais', text: 'Para contratar em Belo Horizonte, identifique o bairro e o tipo de imóvel já na primeira mensagem. Uma obra em apartamento envolve o transporte interno dos resíduos; uma intervenção em loja pode exigir alinhamento com o funcionamento do comércio. Se a vaga estiver na rua, confira com o município as condições de colocação antes de reservar.', tip: 'Informe se há portaria, elevador de serviço, estacionamento regulamentado ou acesso em declive no endereço.' },
  'contagem': { focus: 'Descarte civil em residências, comércios e galpões', text: 'Em Contagem, diferencie o entulho da reforma de eventuais resíduos da atividade realizada no imóvel. Em um galpão, uma carga de alvenaria não deve incorporar óleo, embalagens contaminadas ou resíduos do processo produtivo. Informe o bairro, o acesso da obra e os requisitos de entrada antes de combinar a entrega.', tip: 'Se a entrada tiver cadastro de prestadores ou horário de carga e descarga, avise na solicitação.' },
  'betim': { focus: 'Planejamento de coleta por etapa da construção', text: 'Para a sua obra em Betim, descreva se o serviço está na demolição, alvenaria ou acabamento. Essa informação ajuda a avaliar material, volume e necessidade de mais de uma retirada. A escolha da capacidade precisa considerar o acesso ao endereço, e não somente o tamanho da obra.', tip: 'Envie fotos da vaga e informe se o caminhão precisa entrar no lote ou permanecer na via.' },
  'uberlandia': { focus: 'Obras com lotes, condomínios e programação de retirada', text: 'No pedido para Uberlândia, informe a identificação completa do imóvel e se o descarte ocorre na sede ou em distrito. Quando o recipiente ficar no lote, reserve espaço de manobra e mantenha o portão livre. Entregas de areia, tijolos e outros materiais não podem impedir a retirada da caçamba depois.', tip: 'Para uma obra contínua, peça que período e condições de troca sejam incluídos na proposta.' },
  'uberaba': { focus: 'Reformas na sede e avaliação de endereços em distritos', text: 'Na solicitação para Uberaba, o distrito e a referência de chegada são importantes quando o imóvel fica fora da sede. Descreva o ponto de entrada e o espaço disponível para o caminhão. O transporte e a possibilidade de colocação serão avaliados para aquele endereço, sem uma tarifa única presumida para todo o município.', tip: 'Em imóvel rural, informe o trecho final do acesso e se existe local de retorno.' },
  'juiz-de-fora': { focus: 'Reforma de imóveis ocupados e movimentação do entulho', text: 'Para alugar uma caçamba em Juiz de Fora, conte como o entulho sairá do imóvel até o recipiente. Em apartamentos, combine a logística com o condomínio; em casas, avalie a proximidade da vaga e o acesso para retirada. Se houver restrição de horário no endereço, ela deve entrar no planejamento antes da entrega.', tip: 'Ao reformar piso, informe área, espessura aproximada e se também será retirado o contrapiso.' },
  'montes-claros': { focus: 'Prazo de obra alinhado ao transporte e à coleta', text: 'Em Montes Claros, identifique o bairro ou distrito e a data em que o entulho começará a ser gerado. Se a intervenção for realizada em fases, peça orientação para concentrar o descarte no período contratado. A programação de entrega e retirada precisa ser confirmada antes da demolição.', tip: 'Não considere o envio da mensagem uma reserva; aguarde a confirmação das condições para o endereço.' },
  'ipatinga': { focus: 'Entulho de construção separado de resíduos industriais', text: 'Para solicitar em Ipatinga, descreva o material que será retirado da obra. Em empresa, mantenha o entulho civil separado de resíduos industriais ou contaminados. A avaliação considera a composição da carga e os procedimentos de entrada no estabelecimento, além da capacidade desejada.', tip: 'Avise sobre integração, cadastro ou janela de acesso quando a obra for em estabelecimento com controle de entrada.' },
  'governador-valadares': { focus: 'Reformas com circulação de moradores e clientes', text: 'Ao planejar o aluguel em Governador Valadares, informe se o imóvel continuará ocupado durante a reforma. O ponto de coleta deve preservar a entrada de pessoas e o acesso do caminhão. Combine a remoção de materiais das áreas internas com o período da caçamba para evitar armazenamento desnecessário na passagem.', tip: 'Informe se haverá fornecedores usando a mesma entrada no dia da entrega ou da retirada.' },
  'divinopolis': { focus: 'Alvenaria, acabamento e retirada programada', text: 'Para obras em Divinópolis, diferencie os resíduos da demolição dos materiais de acabamento. Se houver gesso, madeira ou terra, informe cada um antes de contratar. Combine a data estimada de enchimento e como solicitar retirada ou outra caçamba se a reforma continuar.', tip: 'Confirme o que está incluído no valor total e as condições de permanência além do período inicial.' },
  'pouso-alegre': { focus: 'Obras em casas, condomínios e loteamentos', text: 'No orçamento para Pouso Alegre, a identificação do bloco ou lote e do portão de entrada evita confusão na chegada. Quando houver condomínio, confirme os horários permitidos e o local autorizado para o recipiente. A equipe avalia acesso e capacidade para o endereço informado.', tip: 'Se o equipamento ficar em área interna, verifique se será possível retirá-lo depois da chegada de outros materiais.' },
  'pocos-de-caldas': { focus: 'Organização de reforma sem bloquear o imóvel', text: 'Em Poços de Caldas, descreva a intervenção e a posição prevista para a caçamba. Para imóvel ocupado ou comércio em funcionamento, preserve a passagem e alinhe os horários da obra. Se houver rampa, piso sensível ou obstáculos acima da vaga, envie essa informação antes do agendamento.', tip: 'Uma foto da entrada e do ponto de colocação ajuda a avaliar a operação, sem substituir a confirmação da equipe.' },
  'varginha': { focus: 'Separação do entulho e dos objetos retirados do imóvel', text: 'Para uma reforma em Varginha, liste separadamente restos de construção, móveis e outros objetos. O serviço de caçamba de entulho não inclui automaticamente todos os itens de uma desocupação. A proposta deve confirmar os materiais aceitos, o tamanho e o período de permanência.', tip: 'Se a reforma ocorrer em etapas, informe qual delas concentra o descarte para planejar a locação.' },
  'patos-de-minas': { focus: 'Dimensionamento por material e etapa de obra', text: 'Em Patos de Minas, informe se o descarte envolve piso, concreto, terra ou telhado. Materiais de densidades diferentes não devem ser dimensionados apenas pela aparência de volume. Para propriedade fora da sede, acrescente uma referência do acesso e o distrito correspondente.', tip: 'Separe resíduos perigosos ou da atividade produtiva; não os inclua na carga de construção.' },
  'teofilo-otoni': { focus: 'Entrada e percurso avaliados antes da entrega', text: 'Na contratação para Teófilo Otoni, indique bairro ou distrito e descreva o percurso até a obra. Quando existirem curvas fechadas, rua estreita ou portão com limitação, informe antes de escolher a vaga. O planejamento precisa considerar também a retirada do recipiente carregado.', tip: 'A equipe precisa avaliar o acesso real; o nome do município sozinho não confirma uma manobra.' },
  'barbacena': { focus: 'Vaga adequada e retirada com o acesso preservado', text: 'Para alugar em Barbacena, informe o ponto de colocação e o tipo de piso. Se houver inclinação, cobertura baixa ou árvore sobre a vaga, avise para avaliação. Não altere a posição da caçamba nem improvise apoios durante a locação.', tip: 'Combine um local seguro antes da entrega e mantenha livre a área usada pelo caminhão.' },
  'santa-luzia': { focus: 'Reformas residenciais com orçamento para o endereço', text: 'No pedido para Santa Luzia, inclua bairro, referência do imóvel e material da reforma. Se o endereço estiver em condomínio ou loteamento, confirme o portão e as condições de entrada. O orçamento é feito para o ponto da obra, com capacidade e prazo definidos na proposta.', tip: 'Informe se a vaga pretendida é interna ou na rua; a preparação de cada local é diferente.' },
  'ribeirao-das-neves': { focus: 'Dimensionar o descarte sem ultrapassar a borda', text: 'Ao solicitar uma caçamba em Ribeirão das Neves, descreva a quantidade de ambientes em reforma e o que será removido. Concreto e alvenaria exigem atenção ao peso, além do volume. Se a carga prevista for maior que a capacidade aceita, consulte outra retirada em vez de empilhar material acima da borda.', tip: 'Envie o bairro e a referência da entrada para que a equipe avalie a logística do endereço.' },
  'sete-lagoas': { focus: 'Demolição e retirada alinhadas ao cronograma', text: 'Em Sete Lagoas, combine o início da demolição com a confirmação da caçamba. Se o serviço continuar por várias etapas, informe o período e o ritmo esperado de enchimento. A proposta deve esclarecer quando pedir retirada, eventual troca e condições de prorrogação.', tip: 'Se a obra for dentro de estabelecimento com controle de acesso, comunique os requisitos antecipadamente.' },
  'sabara': { focus: 'Avaliação do acesso e da posição do equipamento', text: 'Para o orçamento em Sabará, identifique bairro ou distrito e avise sobre limitações da entrada, caso existam. Em imóvel com acesso estreito ou mudança de nível, fotos ajudam a apresentar o ponto de colocação. Consulte as condições municipais antes de ocupar uma área pública.', tip: 'Não presuma que uma vaga de automóvel comporte a operação do caminhão e da caçamba.' },
  'sarzedo': { focus: 'Entulho civil de reforma e construção', text: 'Na solicitação para Sarzedo, informe o tipo de imóvel e a composição dos resíduos. Se houver descarte de atividade empresarial junto da obra, mantenha as cargas separadas até receber orientação. Combine o local de entrega, o período e a retirada conforme a operação disponível.', tip: 'O valor deve refletir o endereço e o material efetivos, não apenas o nome da cidade.' },
  'sao-joaquim-de-bicas': { focus: 'Acesso ao lote e planejamento do período', text: 'Para contratar em São Joaquim de Bicas, descreva a entrada do lote ou imóvel e o local previsto para o recipiente. Caso outros fornecedores utilizem o mesmo acesso, organize as entregas para que não bloqueiem a retirada. Informe o bairro e o que será descartado na primeira conversa.', tip: 'Confirme capacidade e prazo antes de iniciar o carregamento; o recipiente precisa permanecer dentro do limite de carga.' },
  'ouro-preto': { focus: 'Intervenções com avaliação prévia do imóvel e da via', text: 'Em Ouro Preto, informe se a intervenção envolve imóvel ou área com condições especiais de preservação e acesso. Não presuma que uma autorização de obra permita ocupar a via com caçamba. Consulte os órgãos responsáveis quando aplicável e encaminhe as limitações à equipe antes de solicitar a entrega.', tip: 'Se houver condicionantes de preservação, informe-as; a Fortera não substitui a análise dos órgãos competentes.' },
  'mariana': { focus: 'Identificação do distrito e condições da obra', text: 'Para o pedido em Mariana, indique se o imóvel fica na sede ou em distrito e descreva o ponto de acesso. Se a obra tiver condicionantes de preservação ou regras específicas do imóvel, apresente essas condições antes de reservar. Materiais especiais precisam ser avaliados separadamente do entulho comum.', tip: 'Envie a referência da entrada e confirme o local de colocação com o responsável pelo imóvel.' },
};

export function minasCityMeta(city: { name: string; slug: string }) {
  const locality = MINAS_LOCALITIES[city.slug];
  const note = MINAS_CITY_NOTES[city.slug];
  return {
    title: `Aluguel de Caçamba em ${city.name} MG | Fortera`,
    description: note
      ? `Locação de caçamba de entulho em ${city.name}: ${note.focus.toLowerCase()}. Consulte tamanho, entrega e retirada. Orçamento direto.`
      : `Aluguel de caçamba de entulho em ${city.name}, região de ${locality.immediate}. Veja distritos, tamanhos e cuidados de entrega. Peça orçamento para sua obra.`,
  };
}

export function minasCityImage(slug: string) {
  const guide = MINAS_REGIONAL_GUIDES[MINAS_LOCALITIES[slug].intermediate];
  return `/images/locais/ilustracao-${String(guide.image).padStart(2, '0')}.webp`;
}

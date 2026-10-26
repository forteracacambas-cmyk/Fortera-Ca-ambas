import localities from './bahiaLocalities.json';

export const BAHIA_CONTENT_UPDATED = '2026-10-26';
export const BAHIA_LOCALITIES: Record<string, { id: number; immediate: string; intermediate: string; districts: string[] }> = localities;
export const bahiaRegionId = (name: string) => 'ba-' + name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
export const BAHIA_SOURCES = { municipalities: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/29/municipios?orderBy=nome', districts: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/29/distritos?orderBy=nome', date: '26/10/2026' };

type RegionalGuide = { title: string; planning: string; question: string; answer: string; checklist: string[]; image: number };
// These are planning scenarios, not claims of municipal rules, local branches or fleet availability.
export const BAHIA_REGIONAL_GUIDES: Record<string, RegionalGuide> = {
  'Salvador': {
    title: 'Reforma em imóvel ocupado: planeje vaga e circulação',
    planning: 'Uma reforma de apartamento começa pelo caminho do material até a caçamba. Combine elevador, portaria e horário de movimentação; para loja ou casa, avalie a passagem de moradores e clientes. Se houver inclinação, rua estreita ou cobertura baixa no endereço, informe antes de agendar. O caminhão precisa acessar o ponto tanto para entregar quanto para retirar o recipiente carregado.',
    question: 'Como organizar a caçamba em apartamento ou condomínio?',
    answer: 'Informe o bairro, o acesso ao prédio e onde o entulho ficará até chegar ao recipiente. Confirme as condições de portaria e as regras internas. Se a colocação for na rua, consulte as exigências do município: a autorização do condomínio não libera automaticamente a ocupação da via.',
    checklist: ['Bairro e identificação do imóvel', 'Horários de portaria e percurso dos resíduos', 'Vaga e obstáculos para manobra'], image: 2,
  },
  'Feira de Santana': {
    title: 'Separe a carga de cada etapa da construção',
    planning: 'Antes de pedir o recipiente, identifique o que sai da demolição, da alvenaria e do acabamento. Concreto, cerâmica e resíduos leves podem exigir capacidades e condições diferentes. Se a obra fica em distrito ou fora da sede, envie a localidade e uma referência da entrada. A região geográfica organiza a navegação, mas não estabelece um mesmo custo de transporte para todos os municípios.',
    question: 'É melhor uma caçamba maior ou mais de uma retirada?',
    answer: 'Depende do material, do peso, do espaço da obra e do ritmo de descarte. Peça avaliação da etapa e confirme as capacidades disponíveis. Uma opção maior não autoriza ultrapassar o peso aceito; se a obra continuar, combine previamente as condições de outra retirada ou troca.',
    checklist: ['Etapa e volume aproximado de descarte', 'Material predominante e eventuais misturas', 'Distrito, referência e local da retirada'], image: 8,
  },
  'Vitória da Conquista': {
    title: 'Planejamento do prazo para a sede e os distritos',
    planning: 'Quando o imóvel está fora da sede municipal, o nome da cidade sozinho não identifica o ponto de entrega. Informe distrito, via de acesso e referência de chegada. Na reforma por etapas, alinhe o período da caçamba ao momento de maior geração de entulho. O início da demolição deve ocorrer depois da confirmação do atendimento e do local de colocação.',
    question: 'O que informar para obra em distrito ou imóvel rural?',
    answer: 'Envie município, distrito ou localidade, referência da entrada e características do trecho final. Avise sobre portão, estrada sem pavimentação ou área de retorno quando existirem. A equipe precisa avaliar o percurso e confirmar transporte e prazo antes de reservar.',
    checklist: ['Distrito e ponto de referência', 'Condições do trecho final e entrada', 'Data da obra e período de permanência'], image: 11,
  },
  'Ilhéus — Itabuna': {
    title: 'Descarte de reforma sem confundir materiais e objetos',
    planning: 'Uma reforma de residência, comércio ou hospedagem pode produzir entulho junto de móveis, embalagens e equipamentos retirados do imóvel. Liste esses materiais separadamente: a locação para entulho não inclui automaticamente uma limpeza geral. Se o estabelecimento continuar funcionando, combine o horário de movimentação e preserve a entrada de clientes.',
    question: 'A caçamba recebe móveis, gesso e restos de reforma juntos?',
    answer: 'Não presuma aceitação de uma carga mista. Informe cada material e confirme o escopo antes do carregamento. Móveis, eletrônicos e resíduos especiais podem precisar de outra solução. Não misture líquidos, produtos químicos, lixo doméstico ou material perigoso ao entulho.',
    checklist: ['Resíduos da obra separados dos objetos do imóvel', 'Horário de movimentação e funcionamento', 'Ponto de coleta e acesso para retirada'], image: 3,
  },
  'Santo Antônio de Jesus': {
    title: 'Confirme a localidade antes de combinar o transporte',
    planning: 'Na solicitação de caçamba para a região, identifique o município exato da obra e depois o distrito ou bairro. A referência de uma cidade próxima não substitui o endereço. Se o percurso depender de travessia, acesso particular ou outro trecho com limitação, avise antes do orçamento. A proposta precisa considerar a logística real de chegada e de retirada.',
    question: 'O orçamento de uma cidade vale para outra da mesma região?',
    answer: 'Não automaticamente. Informe o município e o endereço corretos para avaliar deslocamento, acesso e operação. Condições de uma sede, distrito ou outra cidade podem ser diferentes, mesmo quando os nomes aparecem no mesmo agrupamento regional.',
    checklist: ['Município e distrito corretos', 'Percurso com eventuais limitações ou travessias', 'Entrada e espaço de retorno do caminhão'], image: 6,
  },
  'Irecê': {
    title: 'Dimensione a carga e preserve o espaço da obra',
    planning: 'Para troca de piso, demolição de parede ou ampliação, descreva a intervenção antes de escolher o tamanho. Área reformada em metros quadrados não corresponde diretamente ao volume de entulho: espessura, peso e mistura dos materiais alteram a avaliação. Reserve o ponto da caçamba sem bloquear a entrega de outros insumos no lote.',
    question: 'Como estimar o entulho de piso e contrapiso?',
    answer: 'Informe a área, as camadas que serão removidas e se haverá paredes, louças ou outros materiais. Fotos ajudam a orientar, mas não substituem a avaliação da carga. Confirme capacidade, limite de peso e possibilidade de nova retirada antes de iniciar o descarte.',
    checklist: ['Área e camadas removidas da reforma', 'Material e limite de carga', 'Espaço livre até a retirada'], image: 13,
  },
  'Juazeiro': {
    title: 'Separe resíduos de construção de outras atividades',
    planning: 'Se a reforma ocorrer em comércio, galpão ou propriedade produtiva, diferencie o entulho civil dos resíduos da atividade realizada no local. Embalagens contaminadas, óleos e produtos químicos não devem entrar na caçamba de construção. Para imóvel fora da sede, detalhe o percurso e a entrada junto do pedido para avaliar o deslocamento.',
    question: 'Posso incluir resíduos da propriedade junto do entulho?',
    answer: 'Liste cada material antes de contratar e mantenha resíduos especiais separados. O serviço de construção não recebe automaticamente descarte agrícola, industrial ou contaminado. A equipe confirma o escopo e as condições da carga para o endereço.',
    checklist: ['Entulho civil separado de resíduos especiais', 'Localidade e entrada da propriedade', 'Data de coleta e período contratado'], image: 14,
  },
  'Paulo Afonso': {
    title: 'Combine retirada e continuidade da reforma',
    planning: 'Planeje a caçamba conforme a etapa: uma pequena reforma pode concentrar o descarte em poucos dias, enquanto uma construção gera resíduos ao longo do cronograma. Informe quando o recipiente deve encher e se o serviço continuará depois. A retirada precisa permanecer possível, sem portão bloqueado ou material empilhado na área de manobra.',
    question: 'Como pedir troca se a obra continuar?',
    answer: 'Consulte a programação e as condições no orçamento. Confirme como avisar que a caçamba está próxima do limite e qual o prazo combinado para retirar ou substituir. Não ultrapasse a borda nem presuma uma troca automática para qualquer localidade.',
    checklist: ['Etapa e ritmo da obra', 'Condições de troca e prorrogação', 'Área de operação mantida livre'], image: 15,
  },
  'Barreiras': {
    title: 'Identifique o acesso ao lote, galpão ou propriedade',
    planning: 'Na obra fora da sede, explique onde começa o acesso e como o caminhão chega ao portão. Nome de fazenda ou empreendimento sem referência pode ser insuficiente para avaliar o transporte. Em construções por etapas, mantenha o ponto de colocação acessível durante a locação e avise sobre mudanças do canteiro que possam impedir a retirada.',
    question: 'O que enviar quando o imóvel não tem numeração clara?',
    answer: 'Informe município, distrito ou localidade, referência da entrada e, na conversa com a equipe, a localização quando necessária. Descreva estrada, portão e espaço de retorno. O valor e a disponibilidade dependem da avaliação desse ponto de entrega.',
    checklist: ['Referência inequívoca da entrada', 'Estrada, portão e retorno', 'Separação do descarte e cronograma da obra'], image: 10,
  },
  'Guanambi': {
    title: 'Prepare a colocação antes de gerar o entulho',
    planning: 'Para reformar casa ou ponto comercial, defina antecipadamente como os resíduos sairão do imóvel e onde o recipiente poderá ficar. Um pátio interno pode exigir avaliação de piso e manobra; na rua, é preciso conferir as condições municipais e preservar a circulação. O local escolhido deve continuar acessível quando a carga estiver pronta para retirada.',
    question: 'A caçamba pode ficar dentro do imóvel?',
    answer: 'Depende do espaço, do piso, do acesso e da operação do caminhão. Informe medidas do portão e obstáculos quando solicitado. Não improvise apoio nem movimente o recipiente por conta própria. Combine um ponto adequado com a equipe antes da entrega.',
    checklist: ['Vaga interna ou área pública identificada', 'Condição de piso, portão e manobra', 'Passagem e entrada preservadas'], image: 5,
  },
};

type CityNote = { focus: string; text: string; tip: string };
export const BAHIA_CITY_NOTES: Record<string, CityNote> = {
  'salvador': { focus: 'Reformas em apartamentos, casas e lojas da capital', text: 'Para pedir uma caçamba em Salvador, comece pelo bairro e pelo tipo de imóvel. Uma reforma em apartamento depende da movimentação interna do entulho; um comércio em funcionamento exige preservar a entrada. Se o ponto estiver em via pública ou em área com condicionantes de preservação, confirme as exigências com os responsáveis antes de agendar.', tip: 'Informe portaria, elevador, horário permitido e eventuais limitações do ponto de colocação.' },
  'feira-de-santana': { focus: 'Orçamento por bairro, distrito e etapa de obra', text: 'Em Feira de Santana, informe se o endereço está na sede ou em distrito, além do bairro e referência da entrada. Para uma obra por etapas, descreva quando haverá demolição, alvenaria ou acabamento. A capacidade e o período devem acompanhar a composição da carga e o ritmo da reforma.', tip: 'Ao comparar propostas, confirme transporte, retirada e condições de outra coleta para o mesmo endereço.' },
  'vitoria-da-conquista': { focus: 'Entrega na sede e avaliação de endereços em distritos', text: 'Na solicitação para Vitória da Conquista, identifique o distrito ou bairro antes de informar a data. Se a obra fica fora da sede, detalhe o trecho final do acesso. A proposta de uma localidade não é automaticamente válida para outra, mesmo dentro do município.', tip: 'Envie uma referência clara do portão e avise se há estrada não pavimentada ou limitação de retorno.' },
  'camacari': { focus: 'Reforma residencial e entulho civil em empresas', text: 'Para alugar em Camaçari, diferencie o bairro ou distrito do endereço e descreva os materiais da obra. Em estabelecimento empresarial, mantenha entulho civil separado do descarte de processos produtivos. Informe exigências de entrada e horário de serviço antes do orçamento.', tip: 'Óleo, produtos químicos e embalagens contaminadas não devem ser misturados à carga de construção.' },
  'lauro-de-freitas': { focus: 'Logística de condomínio e acesso ao imóvel', text: 'Em Lauro de Freitas, informe o nome do condomínio quando houver, junto do bairro e endereço. A equipe precisa avaliar a entrada do caminhão e o ponto de coleta; a liberação da portaria não substitui essa avaliação. Combine os horários de circulação e o trajeto dos resíduos dentro do imóvel.', tip: 'Avise sobre piso sensível, cobertura baixa ou restrição de veículo se essas condições existirem.' },
  'juazeiro': { focus: 'Construção e reforma com carga identificada', text: 'No pedido para Juazeiro, especifique que a obra está na Bahia e identifique bairro ou distrito. Para imóvel em propriedade produtiva, separe os resíduos de construção dos materiais da atividade. Combine o transporte considerando a entrada efetiva da obra.', tip: 'Descreva terra, concreto, cerâmica e materiais leves separadamente para avaliar carga e capacidade.' },
  'itabuna': { focus: 'Reforma de imóvel ocupado e retirada combinada', text: 'Para solicitar em Itabuna, explique se o imóvel continuará ocupado e como os materiais chegarão à caçamba. Preserve a passagem de moradores e clientes e informe o período pretendido. Se houver desmontagem de móveis ou retirada de equipamentos, liste esses itens separadamente do entulho.', tip: 'Não presuma que uma limpeza geral esteja incluída no aluguel do recipiente de construção.' },
  'ilheus': { focus: 'Referência de entrega na sede ou em distrito', text: 'Em Ilhéus, informe município, bairro ou distrito e a referência de acesso. Para reforma de comércio ou hospedagem, combine a movimentação com o funcionamento do local. O atendimento precisa ser confirmado para o ponto de entrega, sem presumir uma única tarifa para toda a cidade.', tip: 'Avise sobre horários de entrada e espaço disponível para a retirada do recipiente carregado.' },
  'barreiras': { focus: 'Planejamento de acesso e etapa de construção', text: 'No orçamento para Barreiras, identifique a entrada do lote, galpão ou propriedade. Durante a locação, mantenha a área de manobra livre de areia, tijolos e outros insumos. Se o entulho vier de várias etapas, consulte condições de retirada e nova entrega conforme o cronograma.', tip: 'Em endereço sem numeração, envie ponto de referência e características do último trecho do acesso.' },
  'luis-eduardo-magalhaes': { focus: 'Construção no lote com retirada acessível', text: 'Em Luís Eduardo Magalhães, descreva o ponto da obra e se a caçamba ficará no lote ou na rua. O recipiente não pode ficar bloqueado por material entregue depois. Separe o entulho civil de resíduos da atividade comercial ou produtiva realizada no imóvel.', tip: 'Confirme capacidade, período e acesso para o caminhão antes de iniciar a demolição.' },
  'teixeira-de-freitas': { focus: 'Orçamento com bairro, materiais e período', text: 'Para contratar em Teixeira de Freitas, informe o bairro, a etapa e a lista de materiais da reforma. Piso, contrapiso e alvenaria influenciam o peso; objetos retirados do imóvel precisam ser avaliados separadamente. Peça o valor total e as condições de permanência e retirada.', tip: 'A área em metros quadrados sozinha não determina o tamanho da caçamba: descreva as camadas removidas.' },
  'porto-seguro': { focus: 'Obras na sede e avaliação de logística em distritos', text: 'Para alugar em Porto Seguro, identifique a localidade da obra logo no pedido. Se o percurso até o imóvel envolver travessia ou trecho com restrições, explique antes de combinar o transporte. Em comércio ou hospedagem, a janela de entrega deve preservar o funcionamento e a entrada de pessoas.', tip: 'Não considere a disponibilidade na sede uma confirmação automática para todos os distritos.' },
  'jequie': { focus: 'Demolição com capacidade e coleta planejadas', text: 'Em Jequié, alinhe o começo da retirada de pisos ou paredes à confirmação da caçamba. Se a reforma continuar depois do enchimento, pergunte sobre programação de outra coleta. Respeite peso e borda para evitar que o volume aparente leve a uma carga fora das condições combinadas.', tip: 'Descreva se o ponto de entrega é interno ou em área pública e mantenha a entrada desimpedida.' },
  'alagoinhas': { focus: 'Separação dos resíduos e acesso ao canteiro', text: 'Para solicitar em Alagoinhas, informe quais materiais serão descartados e a posição prevista do recipiente. Em obra com etapas simultâneas, reserve o acesso do caminhão e organize o carregamento. O orçamento deve confirmar o escopo e as condições para o endereço.', tip: 'Se houver portaria empresarial, comunique as exigências de entrada antes de agendar.' },
  'santo-antonio-de-jesus': { focus: 'Reforma com bairro e ponto de entrega definidos', text: 'No pedido para Santo Antônio de Jesus, envie bairro, referência do imóvel e tipo de intervenção. Se o comércio permanecer aberto, combine o local de coleta sem impedir a entrada. O prazo deve cobrir a fase em que o entulho realmente será produzido.', tip: 'Liste cada material da carga e confirme se haverá necessidade de separação antes do carregamento.' },
  'valenca': { focus: 'Localidade exata e percurso para o endereço', text: 'Em Valença, identifique se a obra está na sede ou em distrito e explique o percurso até o imóvel. Se existirem travessias ou limitações no acesso, elas precisam ser avaliadas com o transporte. A colocação e a retirada devem ser possíveis no ponto combinado.', tip: 'Nome de localidade ou referência turística sozinho pode não identificar a entrada da obra.' },
  'irece': { focus: 'Volume e peso na escolha da capacidade', text: 'Para a sua obra em Irecê, informe o que será retirado de piso, parede ou telhado. Descreva espessura e mistura dos materiais para orientar a capacidade. Se o recipiente ficar no lote, garanta que o caminhão possa voltar para a retirada sem obstáculos criados durante a reforma.', tip: 'Consulte a possibilidade de outra coleta se a previsão de entulho exceder a capacidade aceita.' },
  'paulo-afonso': { focus: 'Período de locação ligado ao cronograma da obra', text: 'Em Paulo Afonso, descreva a etapa e a data desejada para começar. Combine o período e como pedir retirada ou troca se o serviço continuar. O planejamento evita considerar o envio da mensagem uma reserva já confirmada.', tip: 'Confirme as condições da proposta antes de desmontar ou acumular resíduos na passagem.' },
  'guanambi': { focus: 'Preparação do ponto de colocação', text: 'Para alugar em Guanambi, informe o tipo de piso e o acesso ao local pretendido. Dentro do imóvel, é preciso avaliar espaço e manobra; na rua, consulte as condições municipais antes da entrega. A retirada depende do acesso preservado até o fim da locação.', tip: 'Não movimente o recipiente por conta própria e não improvise apoios na vaga.' },
  'eunapolis': { focus: 'Reforma e construção com carga bem descrita', text: 'No pedido para Eunápolis, separe o entulho da intervenção de móveis e outros objetos. Informe o endereço, a data e o tempo previsto de uso. Se o trabalho gerar materiais de tipos diferentes, consulte a aceitação antes de misturá-los.', tip: 'Peça que entrega, retirada e eventuais condições de prorrogação estejam claras no orçamento.' },
};

// Verified neighborhood examples; not a complete directory or evidence of automatic availability.
export const BAHIA_NEIGHBORHOODS: Record<string, { names: string[]; source: string }> = {
  'salvador': { names: ['Pituba', 'Itapuã', 'Brotas', 'Barra', 'Rio Vermelho', 'Cabula', 'Imbuí', 'Pernambués', 'Stella Maris', 'Liberdade', 'São Cristóvão', 'Cajazeiras X'], source: 'https://www.salvador.ba.leg.br/uploads/pddu/pdducorpodalei.pdf' },
  'feira-de-santana': { names: ['Tomba', 'Campo Limpo', 'Mangabeira', 'Queimadinha', 'Muchila', 'Cidade Nova', 'Capuchinhos', 'Serraria Brasil', 'SIM', 'Gabriela', 'Papagaio', 'Santa Mônica'], source: 'https://feiradesantana.ba.gov.br/servico.asp?id=2&link=segov%2Fregioesadm.asp&s=a' },
};

export function bahiaCityMeta(city: { name: string; slug: string }) {
  const locality = BAHIA_LOCALITIES[city.slug], note = BAHIA_CITY_NOTES[city.slug];
  return { title: `Aluguel de Caçamba em ${city.name} BA | Fortera`, description: note ? `Locação de caçamba de entulho em ${city.name}: ${note.focus.toLowerCase()}. Consulte entrega, retirada e tamanho. Orçamento direto.` : `Aluguel de caçamba de entulho em ${city.name}, região de ${locality.immediate}. Veja distritos, materiais e preparação da entrega. Peça orçamento para sua obra.` };
}
export function bahiaCityImage(slug: string) { return `/images/locais/ilustracao-${String(BAHIA_REGIONAL_GUIDES[BAHIA_LOCALITIES[slug].intermediate].image).padStart(2, '0')}.webp`; }

export interface RentalLanding {
  path: string; label: string; title: string; description: string; eyebrow: string;
  heading: string; intro: string; image: string; imageAlt: string; cta: string; message: string;
  sectionTitle: string; sectionIntro: string;
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  detailTitle: string; paragraphs: string[];
  checklist: string[];
  faq: { question: string; answer: string }[];
}

export const RENTAL_LANDINGS: RentalLanding[] = [
  {
    path: '/locacao-de-cacamba/', label: 'Locação de caçamba',
    title: 'Locação de Caçamba de Entulho para Obras | Fortera',
    description: 'Locação de caçamba de entulho por dias, semanas ou meses. Planeje tamanho, entrega, retirada e trocas. Fale com a Fortera e peça orçamento no WhatsApp.',
    eyebrow: 'Planejamento da obra · Entrega e retirada',
    heading: 'Locação de caçamba no ritmo da sua obra.',
    intro: 'Organize o descarte desde a primeira etapa. A Fortera recebe pedidos de locação de caçamba de entulho para reformas, construções e pequenas demolições em todo o Brasil, com condições confirmadas para o endereço da obra.',
    image: 'locacao-cacamba-obra', imageAlt: 'Cena ilustrativa de caçamba estacionária amarela em canteiro de construção',
    cta: 'Planejar minha locação',
    message: 'Olá! Quero uma proposta de locação de caçamba de entulho. Cidade/UF: \nTipo de obra e material: \nPrazo necessário: ',
    sectionTitle: 'Uma locação bem combinada começa antes da entrega.',
    sectionIntro: 'Para quem coordena uma reforma ou canteiro, a capacidade da caçamba é só uma parte da escolha. Alinhe também acesso, permanência, retirada e continuidade do descarte.',
    benefits: [
      { title: 'Prazo para cada etapa', text: 'Informe se o descarte será concentrado em poucos dias ou continuará durante semanas. Combine datas e condições de prorrogação antes de reservar.' },
      { title: 'Logística para o endereço', text: 'Fotos da vaga, largura do acesso, portões e horários de condomínio ajudam a avaliar a colocação e a manobra do caminhão.' },
      { title: 'Trocas durante a obra', text: 'Se a caçamba encher e a obra continuar, a locação prevê uma troca por semana. Solicite pelo WhatsApp e combine a programação com a equipe.' },
    ],
    steps: [
      { title: 'Descreva a operação', text: 'Envie cidade, endereço, etapa da obra, materiais e período estimado. Informe se precisa de uma ou mais caçambas.' },
      { title: 'Alinhe a proposta', text: 'Confirme capacidade, carga permitida, preço total, período incluído e condições de entrega, retirada e troca.' },
      { title: 'Programe o uso', text: 'Prepare a vaga, mantenha os resíduos dentro da borda e avise a equipe quando precisar programar a retirada.' },
    ],
    detailTitle: 'Locação por dias, semanas ou meses: como decidir?',
    paragraphs: [
      'Uma troca de revestimento pode concentrar o entulho em uma etapa; uma construção costuma gerar resíduos em vários momentos. Escolha o período pela sequência real dos serviços, e não apenas pela data de início da obra. A equipe confirma a permanência e a logística disponíveis para o endereço.',
      'Na locação mensal, alinhe com antecedência a necessidade de trocas e os horários de acesso. O preço deve ser comparado considerando o mesmo volume, material, período e serviços incluídos. Não há um valor único que represente todos os estados e municípios.',
      'O volume nominal em metros cúbicos não define sozinho o peso que pode ser transportado. Concreto, terra, madeira e materiais mistos têm características diferentes; descreva o resíduo para avaliar capacidade e separação antes do carregamento.',
    ],
    checklist: ['endereço e ponto de entrega definidos', 'Tipo de resíduo e capacidade avaliados', 'Datas, período e valor total confirmados', 'Acesso, vaga e horários combinados', 'Retirada, trocas e documentação esclarecidas'],
    faq: [
      { question: 'Locação de caçamba e aluguel são o mesmo serviço?', answer: 'Sim. Os termos são usados para a contratação temporária da caçamba. O que precisa ficar claro na proposta é o período, o material aceito e quais serviços de transporte, retirada e troca estão incluídos.' },
      { question: 'Posso contratar locação de caçamba por um mês?', answer: 'Sim. Informe o prazo e a continuidade da geração de entulho. Confirme as condições da locação mensal e a programação da troca semanal quando a caçamba encher e a obra continuar.' },
      { question: 'A locação inclui entrega e retirada?', answer: 'Peça a discriminação na proposta e confirme o valor total, a área atendida, o período e as condições da retirada. Avise sobre restrições de horário e acesso antes de agendar.' },
      { question: 'Como consultar locação de caçamba no meu estado?', answer: 'Informe sua cidade ou escolha seu estado no atendimento nacional. A Fortera atua por uma rede de parceiros e afiliados; disponibilidade, preço e logística são confirmados para cada endereço.' },
    ],
  },
  {
    path: '/alugar-cacamba-de-entulho/', label: 'Alugar caçamba de entulho',
    title: 'Alugar Caçamba de Entulho: Peça seu Orçamento | Fortera',
    description: 'Precisa alugar caçamba de entulho? Fale com a Fortera, compare tamanhos e envie seu pedido direto pelo WhatsApp. Valor, prazo e entrega sob consulta.',
    eyebrow: 'Da sua reforma ao orçamento · WhatsApp direto',
    heading: 'Precisa alugar caçamba de entulho? Comece por aqui.',
    intro: 'Conte onde está sua obra e o que precisa descartar. Fale direto com a Fortera para avaliar tamanho, material e prazo, sem preencher formulário.',
    image: 'alugar-cacamba-reforma', imageAlt: 'Cena ilustrativa de caçamba de entulho em reforma residencial com carga abaixo da borda',
    cta: 'Quero alugar uma caçamba',
    message: 'Olá! Preciso alugar uma caçamba de entulho. Cidade/UF: \nendereço da obra: \nMaterial e quantidade aproximada: \nData desejada: ',
    sectionTitle: 'Um pedido claro ajuda a escolher e contratar.',
    sectionIntro: 'Não sabe quantos metros cúbicos precisa? Descreva a reforma e envie fotos na conversa. A avaliação considera tanto o volume do entulho quanto o material e o acesso.',
    benefits: [
      { title: 'Fale direto com a equipe', text: 'Abra o WhatsApp com uma mensagem pronta para completar. Informe sua necessidade e tire dúvidas antes de combinar a reserva.' },
      { title: 'Atendimento direto', text: 'Converse com a equipe sobre a obra, tamanho da caçamba e prazo necessário. Sem consulta ou cadastro no site.' },
      { title: 'Confirme antes de contratar', text: 'Verifique o valor total e as condições para seu endereço. O pedido de orçamento não confirma automaticamente entrega ou reserva.' },
    ],
    steps: [
      { title: 'Informe sua obra', text: 'Envie endereço, cidade, número e uma descrição do que será retirado. Se houver acesso estreito ou portão, avise.' },
      { title: 'Escolha com orientação', text: 'Compare tamanhos e prazo de uso. Descreva se é troca de piso, reforma de banheiro ou outra etapa para receber orientação.' },
      { title: 'Confirme e agende', text: 'Com preço e condições definidos, combine entrega e retirada. Deixe o ponto de colocação preparado no horário acertado.' },
    ],
    detailTitle: 'O que conferir antes de alugar uma caçamba?',
    paragraphs: [
      'Ao pedir preço, informe o endereço da obra e o tipo de resíduo. Dois pedidos com a mesma capacidade podem ter condições diferentes por causa da distância, do peso, do período ou da destinação do material. Compare o orçamento completo, não apenas um valor anunciado.',
      'Evite escolher a capacidade só pela aparência de uma pilha de entulho. Tijolos e concreto têm peso diferente de embalagens e madeira. Uma foto e a descrição dos serviços ajudam a equipe a avaliar o pedido; capacidades de 7 e 10 m³ dependem da operação disponível para o endereço.',
      'Se a caçamba precisar ficar na rua, confirme as regras do município e a posição permitida antes da entrega. Para condomínio, combine horários e circulação com a administração. Guarde as condições acordadas na conversa para consultar quando solicitar a retirada.',
    ],
    checklist: ['Endereço e número da obra', 'Material que será descartado', 'Tamanho desejado ou fotos do entulho', 'Data prevista e período de uso', 'Foto da vaga e restrições de acesso'],
    faq: [
      { question: 'Como alugar caçamba pelo WhatsApp?', answer: 'Toque em “Quero alugar uma caçamba”, complete a mensagem com os dados da obra e envie. A equipe confirma a proposta, as condições e o agendamento para o endereço informado.' },
      { question: 'Preciso saber o tamanho antes de pedir orçamento?', answer: 'Não. Descreva o serviço, o tipo de entulho e a quantidade aproximada. Envie fotos pelo WhatsApp para ajudar a avaliar a capacidade adequada e o limite de carga.' },
      { question: 'Quanto custa alugar uma caçamba de entulho?', answer: 'O valor depende do endereço, tamanho, material, prazo e logística. Peça o total com os serviços incluídos e confirme condições de prorrogação, retirada e troca.' },
      { question: 'O clique já reserva a caçamba?', answer: 'Não. O botão inicia o contato. Preço, disponibilidade e reserva são confirmados pela equipe durante o atendimento.' },
    ],
  },
  {
    path: '/cacamba-de-entulho/', label: 'Caçamba de entulho',
    title: 'Caçamba de Entulho: Usos, Tamanhos e Aluguel | Fortera',
    description: 'Saiba como escolher uma caçamba de entulho para sua reforma: materiais, tamanhos, limite de carga e preparação da vaga. Peça orçamento no WhatsApp.',
    eyebrow: 'Escolha com orientação · Descarte de obra',
    heading: 'Caçamba de entulho: a escolha começa pelo seu resíduo.',
    intro: 'A caçamba estacionária reúne os resíduos da obra em um ponto para posterior retirada. Conheça os cuidados com material, capacidade e local de colocação e consulte a Fortera para planejar sua contratação.',
    image: 'cacamba-entulho-materiais', imageAlt: 'Cena ilustrativa de caçamba com fragmentos de concreto, tijolos e cerâmica abaixo da borda',
    cta: 'Escolher minha caçamba',
    message: 'Olá! Quero orientação e orçamento para uma caçamba de entulho. Minha obra fica em: \nOs materiais são: \nPreciso retirar aproximadamente: ',
    sectionTitle: 'Três decisões para organizar o descarte.',
    sectionIntro: 'O recipiente certo depende do que sai da obra, de quanto será descartado e do espaço disponível. Avalie esses pontos antes de iniciar o carregamento.',
    benefits: [
      { title: 'O que vai para a caçamba', text: 'Descreva alvenaria, concreto e revestimentos no pedido. Gesso, madeira, terra e outros resíduos precisam de confirmação de aceitação e separação.' },
      { title: 'Volume e peso da carga', text: 'Metros cúbicos medem o espaço disponível. O peso depende do material: uma carga de concreto exige uma avaliação diferente de resíduos leves.' },
      { title: 'Onde ela será colocada', text: 'O local precisa permitir posicionamento e retirada pelo caminhão. Considere piso, acesso, obstáculos e regras da via ou do condomínio.' },
    ],
    steps: [
      { title: 'Identifique o material', text: 'Liste os resíduos e separe os que exigem outra destinação. Não misture lixo doméstico, líquidos, tintas ou materiais perigosos ao entulho.' },
      { title: 'Avalie a capacidade', text: 'Consulte tamanhos de 3, 4 e 5 m³; opções de 7 e 10 m³ ficam sob avaliação de disponibilidade, material e acesso.' },
      { title: 'Prepare o descarte', text: 'Mantenha o entorno livre, carregue sem ultrapassar a borda e combine o momento da retirada com a equipe.' },
    ],
    detailTitle: 'Caçamba estacionária para entulho: quando utilizar?',
    paragraphs: [
      'Reformas de pisos, banheiros e cozinhas, construções e pequenas demolições podem gerar tijolos, argamassa, concreto e cerâmica. A caçamba ajuda a concentrar o material durante a etapa de descarte, desde que o resíduo e a carga sejam compatíveis com a operação contratada.',
      'Não trate todos os resíduos como uma única mistura. Materiais como gesso, madeira, terra e embalagens podem exigir separação e condições específicas. Diga o que existe na obra antes de contratar e confirme o recebimento de cada material com a equipe.',
      'Escolher uma caçamba maior não autoriza ultrapassar o peso permitido ou a borda. Preserve o espaço de manobra e confirme a destinação e a documentação aplicáveis à operação. Para pequenas quantidades, vale consultar também os canais de recebimento de resíduos disponíveis no município.',
    ],
    checklist: ['Tipo de entulho identificado', 'Resíduos separados conforme orientação', 'Capacidade e peso avaliados', 'Vaga e acesso do caminhão conferidos', 'Condições de retirada e destinação confirmadas'],
    faq: [
      { question: 'Qual é a diferença entre caçamba de entulho e caçamba de caminhão?', answer: 'Nesta contratação, a caçamba é um recipiente estacionário colocado na obra e movimentado por um caminhão. A caçamba basculante faz parte do veículo; são soluções diferentes de transporte e operação.' },
      { question: 'Qual tamanho de caçamba é melhor para uma reforma?', answer: 'Depende da quantidade, do tipo e do peso dos resíduos. Consulte as capacidades, descreva os serviços e envie fotos; não há um único tamanho ideal para toda reforma.' },
      { question: 'Pode colocar qualquer material na caçamba de entulho?', answer: 'Não. Confirme os materiais aceitos antes de carregar. Lixo doméstico, líquidos, tintas e materiais perigosos não devem ser misturados ao entulho. Outros resíduos podem exigir separação ou outra solução.' },
      { question: 'Como pedir uma caçamba de entulho perto da obra?', answer: 'Fale direto com a equipe e informe a cidade, o endereço e o material. A equipe confirma preço, prazo e logística disponíveis na rede de atendimento para o local solicitado.' },
    ],
  },
];

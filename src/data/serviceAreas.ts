export interface ServiceArea {
  name: string;
  slug: string;
  uf: string;
  cities: string[];
  intro: string;
  planning: { title: string; text: string }[];
}

// Áreas de consulta comercial: disponibilidade confirmada para cada endereço.
export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Litoral Norte de São Paulo', slug: 'litoral-norte-sp', uf: 'SP',
    cities: ['Caraguatatuba', 'Ubatuba', 'São Sebastião', 'Ilhabela', 'Bertioga'],
    intro: 'Vai reformar uma casa de praia, renovar uma pousada ou organizar uma obra no litoral? Consulte a Fortera para aluguel de caçamba no Litoral Norte. Informe o município e o bairro para alinharmos a disponibilidade com nossa rede de parceiros, o tamanho e a logística de entrega e retirada.',
    planning: [
      { title: 'Casas de praia, pousadas e condomínios', text: 'Pisos, revestimentos e pequenas demolições geram resíduos em etapas. Informe se o imóvel estará ocupado durante a reforma, onde ficará a caçamba e os horários permitidos para o caminhão entrar. Assim, a cotação acompanha o planejamento da obra.' },
      { title: 'Acesso em bairros costeiros', text: 'Envie fotos da entrada, da vaga e do piso. Ruas estreitas, trechos sem pavimentação, areia e inclinações precisam ser avaliados antes da entrega. O endereço completo ajuda a definir a possibilidade de aproximação do caminhão.' },
      { title: 'Entrega em Ilhabela e períodos movimentados', text: 'Para Ilhabela, informe a localização e solicite avaliação da logística de travessia. Nas demais cidades, indique a data desejada e as restrições de acesso do imóvel. Feriados e horários de condomínio devem entrar no planejamento, sem promessa de entrega imediata.' },
    ],
  },
  {
    name: 'Baixada Santista', slug: 'baixada-santista', uf: 'SP',
    cities: ['Santos', 'São Vicente', 'Guarujá', 'Praia Grande', 'Cubatão', 'Mongaguá', 'Itanhaém', 'Peruíbe'],
    intro: 'Reformas de apartamentos, lojas e imóveis no litoral pedem uma retirada de entulho bem organizada. Consulte aluguel de caçamba na Baixada Santista com atendimento por parceiros e afiliados. A proposta considera município, bairro, material e espaço para posicionamento.',
    planning: [
      { title: 'Reformas de apartamentos e lojas', text: 'Confirme com o condomínio os horários de movimentação e o trajeto do entulho até a caçamba. Em lojas, informe o horário de funcionamento para planejar a entrega sem bloquear a entrada de clientes.' },
      { title: 'Vaga e circulação na rua', text: 'Informe se a colocação será dentro do lote ou na via pública. A equipe precisa avaliar o acesso, a circulação de pedestres e as regras do município. Uma vaga existente não significa autorização automática para colocar a caçamba.' },
      { title: 'Materiais de reforma', text: 'Descreva separadamente alvenaria, revestimentos, madeira e gesso. A aceitação e a destinação são confirmadas na proposta; resíduos diferentes podem exigir triagem ou soluções distintas.' },
    ],
  },
  {
    name: 'São Paulo e Grande São Paulo', slug: 'grande-sao-paulo', uf: 'SP',
    cities: ['São Paulo', 'Guarulhos', 'Osasco', 'Santo André', 'São Bernardo do Campo', 'São Caetano do Sul', 'Barueri', 'Mogi das Cruzes'],
    intro: 'Do apartamento em reforma ao canteiro comercial, consulte caçambas em São Paulo, ABC e outras cidades da Grande São Paulo. A Fortera organiza o orçamento pela localização da obra, com opções de 1, 2, 3 ou 7 dias e confirmação de atendimento para seu endereço.',
    planning: [
      { title: 'Bairro e acesso fazem diferença', text: 'Informe cidade, bairro e referências do local. Em ruas com ônibus, comércio ou grande circulação, fotos da vaga ajudam a avaliar a manobra e o posicionamento. Restrições de caminhões precisam ser verificadas para a rota e o horário.' },
      { title: 'Condomínios e reformas internas', text: 'Alinhe com a portaria o horário de acesso, a retirada de resíduos pelo elevador e o espaço de carga. A caçamba deve ser planejada junto com a equipe da reforma para evitar acúmulo em corredores e áreas comuns.' },
      { title: 'Obras no ABC e municípios vizinhos', text: 'Ao solicitar o orçamento, identifique o município corretamente. O preço e a disponibilidade podem mudar entre cidades e bairros, mesmo em endereços próximos. Entrega, permanência e recolhimento ficam definidos na proposta.' },
    ],
  },
  {
    name: 'Campinas e região', slug: 'campinas-e-regiao', uf: 'SP',
    cities: ['Campinas', 'Valinhos', 'Vinhedo', 'Hortolândia', 'Sumaré', 'Paulínia', 'Indaiatuba', 'Americana'],
    intro: 'Consulte locação de caçamba para reformas residenciais, condomínios e obras comerciais em Campinas e cidades próximas. Envie a localização e o perfil dos resíduos para dimensionar a capacidade, o prazo e as condições de atendimento.',
    planning: [
      { title: 'Condomínios e loteamentos', text: 'Informe regras de entrada, horários de prestadores e o espaço de manobra. A largura do portão e a existência de fiação, árvores ou declives devem ser avaliadas antes de confirmar a entrega.' },
      { title: 'Obras comerciais e galpões', text: 'Descreva o material da obra, não apenas o volume total. Resíduos de construção e resíduos de processos industriais têm necessidades diferentes; a equipe confirma quais materiais podem ser recebidos.' },
      { title: 'Reformas realizadas por etapas', text: 'Se a obra produzir entulho continuamente, consulte o plano semanal e a possibilidade de novas locações. Trocas, prorrogações e retiradas extras precisam ser combinadas e cotadas separadamente.' },
    ],
  },
  {
    name: 'Rio de Janeiro e região', slug: 'rio-de-janeiro-e-regiao', uf: 'RJ',
    cities: ['Rio de Janeiro', 'Niterói', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu'],
    intro: 'Procura caçamba para retirar entulho no Rio de Janeiro ou em municípios próximos? Consulte a Fortera para reformas de imóveis, lojas e obras. Nossa rede avalia o endereço, os resíduos e a logística antes da confirmação do serviço.',
    planning: [
      { title: 'Reformas em prédios e estabelecimentos', text: 'Informe os horários do condomínio, a disponibilidade de vaga e como será transportado o entulho do imóvel até a caçamba. Esses detalhes ajudam a escolher um prazo compatível com o trabalho da equipe.' },
      { title: 'Rua, relevo e manobra', text: 'Envie fotos quando houver ladeira, curva fechada, acesso estreito ou fiação sobre a vaga. A viabilidade depende do ponto exato da obra e do veículo que fará a operação.' },
      { title: 'Município e bairro na cotação', text: 'Diferencie o endereço da capital e os municípios próximos. A programação e as condições podem variar entre Niterói, Baixada Fluminense e outros destinos; confirme a disponibilidade para sua localização.' },
    ],
  },
  {
    name: 'Belo Horizonte e região', slug: 'belo-horizonte-e-regiao', uf: 'MG',
    cities: ['Belo Horizonte', 'Contagem', 'Betim', 'Nova Lima', 'Ribeirão das Neves', 'Santa Luzia'],
    intro: 'Consulte aluguel de caçamba em Belo Horizonte e cidades próximas para reformas, construções e retirada de entulho. Informe a localização, a composição dos resíduos e o prazo desejado para receber uma proposta adequada à sua obra.',
    planning: [
      { title: 'Declive e estabilidade do ponto', text: 'Fotos da rua e do local de posicionamento ajudam a avaliar inclinação, firmeza do piso e espaço livre. A caçamba e o caminhão precisam de condições adequadas para uma operação segura.' },
      { title: 'Reformas com alvenaria pesada', text: 'Concreto, tijolos e contrapiso podem atingir o limite de carga antes de preencher todo o recipiente. Informe a composição do entulho para avaliar o tamanho e a necessidade de mais de uma locação.' },
      { title: 'Obras entre municípios', text: 'Confirme a cidade e o bairro, especialmente em obras fora da capital. Acesso ao imóvel, horários e distância da operação entram no orçamento junto com o tamanho e o prazo.' },
    ],
  },
  {
    name: 'Curitiba e região', slug: 'curitiba-e-regiao', uf: 'PR',
    cities: ['Curitiba', 'São José dos Pinhais', 'Colombo', 'Pinhais', 'Araucária', 'Campo Largo'],
    intro: 'Consulte caçambas para reformas residenciais, lojas e canteiros em Curitiba e cidades próximas. A Fortera recebe os dados da obra e confirma com a rede local os modelos, a entrega, a permanência e a retirada.',
    planning: [
      { title: 'Acesso e obstáculos acima da vaga', text: 'Observe fiação, galhos e cobertura do imóvel. O caminhão precisa de espaço para aproximar e içar o recipiente; fotos e medidas do acesso ajudam na avaliação.' },
      { title: 'Carga e organização dos resíduos', text: 'Mantenha o entulho dentro da borda e informe materiais que precisam de separação. Madeira, gesso e outros resíduos são avaliados conforme as condições de recebimento da operação local.' },
      { title: 'Reforma em condomínio ou comércio', text: 'Informe horários de acesso e de carregamento para escolher entre permanência curta e plano semanal. A programação é confirmada no orçamento, inclusive para municípios próximos à capital.' },
    ],
  },
];

export const getServiceArea = (slug: string) => SERVICE_AREAS.find(area => area.slug === slug);

import localities from './rioLocalities.json';
import neighborhoods from './rioNeighborhoods.json';

export const RIO_CONTENT_UPDATED='2026-10-29';
export const RIO_LOCALITIES:Record<string,{id:number;immediate:string;intermediate:string;districts:string[]}>=localities;
export const RIO_NEIGHBORHOODS:Record<string,string[]>=neighborhoods;
export const RIO_SOURCES={municipalities:'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios?orderBy=nome',districts:'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/distritos?orderBy=nome',date:'29/10/2026'};
export const RIO_NEIGHBORHOOD_SOURCE='https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_de_setores_censitarios__divisoes_intramunicipais/censo_2022/bairros/shp/UF/RJ_bairros_CD2022.zip';
export const rioRegionId=(name:string)=>'rj-'+name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-');
const featured:Record<string,string[]>={
 'rio-de-janeiro':['Centro','Copacabana','Ipanema','Tijuca','Barra da Tijuca','Botafogo'],
 niteroi:['Centro','Icaraí','Santa Rosa','Barreto','São Francisco','Itaipu'],
 'duque-de-caxias':['Centro','Jardim Primavera','Campos Elíseos','Imbariê'],
 'campos-dos-goytacazes':['Centro','Parque Califórnia','Jardim Carioca','Jockey Club'],
};
export const rioNeighborhoodNames=(slug:string)=>{
 const names=(RIO_NEIGHBORHOODS[slug]||[]).filter(n=>!/^(sub)?setor\b/i.test(n));
 const first=(featured[slug]||['Centro']).filter(n=>names.includes(n));
 return [...first,...names.filter(n=>!first.includes(n))];
};
export const rioNeighborhoodSource=()=>RIO_NEIGHBORHOOD_SOURCE;
type Guide={title:string;planning:string;question:string;answer:string;checklist:string[];image:number};
export const RIO_REGIONAL_GUIDES:Record<string,Guide>={
 'Rio de Janeiro':{
  title:'Reforma em apartamento, casa ou comércio: organize o ponto de coleta',
  planning:'Antes de remover pisos e paredes, defina o caminho entre a obra e o recipiente. Em apartamento, verifique elevador de serviço, horários e proteção das áreas comuns. No comércio, preserve a passagem de clientes e fornecedores. A equipe precisa receber informações da vaga e da operação do caminhão, tanto na entrega quanto na retirada carregada.',
  question:'Como combinar uma caçamba com a rotina do condomínio?',
  answer:'Informe entrada autorizada, bloco ou unidade, janela de serviço e ponto onde o material será carregado. Confirme se a proposta inclui apenas o recipiente ou apoio de carregamento. Autorização do condomínio e condições de colocação em via pública são verificações diferentes.',
  checklist:['Bairro e entrada da obra','Regras de portaria e movimentação interna','Vaga disponível para entrega e coleta'],image:2,
 },
 'Petrópolis':{
  title:'Mostre o acesso antes de escolher a posição da caçamba',
  planning:'Se o imóvel apresentar rampa, mudança de nível, curva de entrada ou portão limitado, encaminhe fotos antes de agendar. A área escolhida precisa comportar a operação do caminhão com a carga. Não use apenas a vaga de um automóvel como referência e preserve o trajeto até o fim da locação.',
  question:'O que informar quando o imóvel tem rampa ou entrada estreita?',
  answer:'Descreva piso, inclinação, largura de passagem e ponto pretendido para o recipiente. Envie fotos e aguarde a avaliação. Não improvise apoios e não movimente a caçamba por conta própria; o planejamento inclui a retirada quando ela estiver carregada.',
  checklist:['Fotos do portão e do trecho final','Piso e desníveis, quando existirem','Espaço de manobra preservado'],image:4,
 },
 'Volta Redonda - Barra Mansa':{
  title:'Entulho de construção separado dos resíduos da atividade do imóvel',
  planning:'Uma reforma em estabelecimento de trabalho pode gerar resíduos civis junto de peças, embalagens ou materiais de processo. Informe separadamente concreto, alvenaria, cerâmica, madeira e demais componentes. A cotação de entulho não inclui automaticamente líquidos, produtos químicos ou materiais contaminados da operação do estabelecimento.',
  question:'Posso descartar material da empresa junto da reforma?',
  answer:'Identifique a origem e a composição de cada resíduo antes de misturar. Confirme o que pode ser recebido, o peso e a separação necessária. A caçamba de construção não substitui soluções próprias para materiais perigosos ou resíduos de processo.',
  checklist:['Materiais da intervenção identificados','Acesso e identificação do responsável','Período e retirada combinados com a obra'],image:6,
 },
 'Campos dos Goytacazes':{
  title:'Sede, distrito e entrada real no mesmo pedido de orçamento',
  planning:'Se a obra estiver em distrito ou localidade fora da sede, informe o município e uma referência da entrada. Apresente as condições do trecho final quando houver via sem pavimentação, porteira ou espaço de retorno limitado. O endereço real é necessário para avaliar transporte, capacidade e período; o nome da cidade sozinho não define a operação.',
  question:'Como solicitar uma caçamba para uma localidade fora da sede?',
  answer:'Envie município, distrito ou localidade, rua ou referência de chegada e tipo de obra. Na conversa, compartilhe o ponto da entrada quando necessário e avise sobre limitações do percurso. Aguarde a confirmação da operação antes de reservar.',
  checklist:['Município e distrito identificados','Referência do ponto de entrega','Condições do trecho final e do retorno'],image:11,
 },
 'Macaé - Rio das Ostras - Cabo Frio':{
  title:'Alinhe o período da reforma com a permanência e a retirada',
  planning:'Para reformar casa, apartamento ou estabelecimento que continuará ocupado, organize o descarte junto do cronograma. Informe quando serão removidos revestimentos, contrapiso e paredes. Se houver outras entregas, mantenha a vaga e o acesso livres. Compare propostas com o mesmo material, capacidade e período, incluindo o valor total da retirada.',
  question:'É melhor uma caçamba maior ou programar outra retirada?',
  answer:'A decisão depende do peso, do volume, do espaço e da sequência da reforma. Informe a previsão de enchimento e consulte como pedir troca ou nova coleta. Não complete a carga acima da borda para evitar outra retirada e não presuma que qualquer troca esteja incluída.',
  checklist:['Etapas e datas da reforma','Peso e composição do descarte','Condições de permanência, troca e retirada'],image:9,
 },
};
export const RIO_CITY_NOTES:Record<string,{focus:string;text:string;tip:string}>={
 'rio-de-janeiro':{focus:'Apartamento, casa e comércio com orçamento para o bairro',text:'Na capital, informe o bairro e o tipo de imóvel logo no pedido. Em reforma de apartamento, combine o transporte interno até o recipiente e os horários da portaria. Para casa ou loja, mostre a vaga pretendida e preserve a circulação durante o carregamento.',tip:'Confirme o ponto de colocação e as exigências aplicáveis antes de ocupar uma área pública.'},
 niteroi:{focus:'Reforma em condomínio e retirada com entrada programada',text:'Em Niterói, reúna as regras do condomínio e o portão usado por veículos de serviço. Informe se a reforma remove apenas revestimento ou também contrapiso e alvenaria. O período deve acompanhar a etapa que realmente gera entulho.',tip:'Combine entrega e coleta com a portaria, incluindo a identificação de quem receberá a equipe.'},
 'duque-de-caxias':{focus:'Entulho civil identificado por material e endereço',text:'Para Duque de Caxias, indique a sede ou o distrito da obra e diferencie resíduos civis dos materiais de uma atividade comercial ou produtiva. A mesma quantidade visual de concreto e madeira exige avaliações diferentes de peso e destinação.',tip:'Informe bairro ou distrito, material e requisitos de entrada do estabelecimento.'},
 'nova-iguacu':{focus:'Reforma por etapas e acesso mantido até a coleta',text:'Ao consultar em Nova Iguaçu, apresente a sequência da reforma e a previsão de descarte. Reserve o ponto sem bloquear garagem ou passagem e mantenha livre a área usada pelo caminhão, mesmo depois de receber outros materiais.',tip:'Avise se a obra continuar depois da primeira carga e consulte como programar nova retirada.'},
 'sao-goncalo':{focus:'Piso, argamassa e alvenaria dimensionados juntos',text:'Em São Gonçalo, descreva as camadas que sairão da reforma. Área em metros quadrados sozinha não determina a capacidade: espessura, composição e peso alteram a carga. Inclua fotos e as condições da vaga para orientar a escolha.',tip:'Não estime o tamanho apenas pela área do cômodo; informe também o que será removido.'},
 petropolis:{focus:'Entrada e posição avaliadas para o imóvel',text:'No pedido para Petrópolis, identifique a sede ou o distrito e apresente as condições da entrada. Caso existam inclinação, cobertura baixa ou mudança de nível, informe antes de combinar a posição do equipamento.',tip:'Mostre a chegada do caminhão e o espaço para retirada carregada, além da vaga vazia.'},
 teresopolis:{focus:'Acesso e cronograma de uma reforma ocupada',text:'Para Teresópolis, descreva o percurso até o ponto de colocação e a circulação que o imóvel precisa manter. Se houver rampa ou portão com limitação, envie fotos. Combine a geração de entulho com a disponibilidade efetiva da vaga.',tip:'Informe o distrito quando a obra estiver fora da sede e detalhe o trecho final.'},
 'nova-friburgo':{focus:'Capacidade e retirada de reforma por cômodos',text:'Em Nova Friburgo, diferencie a demolição da etapa de acabamento e informe quando cada material será descartado. Uma locação por mais tempo não elimina o limite de peso; a proposta deve esclarecer permanência, retirada e possibilidade de outra coleta.',tip:'Confirme o que muda no valor se a reforma precisar de prorrogação ou nova retirada.'},
 'campos-dos-goytacazes':{focus:'Distrito e referência de chegada no orçamento',text:'Para Campos dos Goytacazes, inclua o distrito ou a localidade junto do município. Se o endereço não tiver numeração clara, apresente uma referência da entrada e descreva as condições para chegada e retorno do caminhão.',tip:'Evite usar apenas o nome da fazenda, condomínio ou localidade sem identificar o município e a entrada.'},
 macae:{focus:'Reforma de imóvel e resíduos da atividade separados',text:'Em Macaé, identifique se o descarte vem de reforma residencial, comercial ou de área de trabalho. Mantenha entulho civil separado de resíduos da atividade do estabelecimento até confirmar a aceitação e a solução adequada.',tip:'Inclua regras de identificação e acesso caso a obra esteja em uma unidade com controle de entrada.'},
 'cabo-frio':{focus:'Entrega e retirada alinhadas à ocupação do imóvel',text:'No orçamento de Cabo Frio, informe bairro ou distrito e se o imóvel receberá moradores, hóspedes ou clientes durante a reforma. Planeje o caminho dos resíduos e a janela em que o ponto de coleta poderá ser utilizado.',tip:'Confirme as datas de entrega e retirada antes de organizar a demolição.'},
 'rio-das-ostras':{focus:'Prazo da obra, composição e valor total',text:'Para Rio das Ostras, apresente a mesma descrição de material e prazo ao comparar propostas. Pergunte sobre entrega, retirada e condições de troca, além da capacidade. O orçamento deve considerar o endereço real da intervenção.',tip:'Liste separadamente gesso, madeira, terra e demais materiais diferentes da alvenaria.'},
 'volta-redonda':{focus:'Reforma comercial sem misturar resíduos de processo',text:'Em Volta Redonda, descreva a intervenção e a origem de cada material. Entulho de piso e parede não deve ser confundido com descarte da atividade empresarial. Combine acesso, período e responsável por acompanhar a operação.',tip:'Informe exigências do estabelecimento antes de confirmar a entrega.'},
 'angra-dos-reis':{focus:'Localidade e logística confirmadas antes da reserva',text:'Para Angra dos Reis, identifique a localidade e a entrada exata da obra. Se o ponto depender de travessia, transporte específico ou acesso limitado, comunique antes de contratar. A operação e o valor total precisam ser confirmados para aquele endereço.',tip:'Não presuma que uma operação disponível em um ponto do município atende outro com logística diferente.'},
 paraty:{focus:'Intervenção e condicionantes do imóvel informadas',text:'Em Paraty, informe o ponto da obra e eventuais condições de preservação ou acesso do imóvel. Se existirem exigências específicas para a intervenção, apresente-as à equipe. O orçamento não substitui autorizações dos órgãos responsáveis.',tip:'Confirme o local de colocação antes de gerar entulho em uma passagem ou área pública.'},
};
export const rioCityLocation=(name:string)=>name==='Rio de Janeiro'?'no Rio de Janeiro':`em ${name}`;
export function rioCityMeta(city:{name:string;slug:string}){
 const local=RIO_LOCALITIES[city.slug],places=rioNeighborhoodNames(city.slug);
 return {title:`Aluguel de Caçamba ${rioCityLocation(city.name)} RJ | Orçamento Fortera`,description:places.length?`Locação de caçamba ${rioCityLocation(city.name)}: ${places.slice(0,2).join(', ')} e outras localidades. Consulte 3, 4 e 5 m³, preço, prazo, entrega e retirada.`:`Aluguel de caçamba ${rioCityLocation(city.name)}, região de ${local.immediate}. Consulte tamanho, preço, prazo e atendimento no seu bairro ou distrito. Orçamento direto.`};
}
export const rioCityImage=(slug:string)=>`/images/locais/ilustracao-${String(RIO_REGIONAL_GUIDES[RIO_LOCALITIES[slug].intermediate].image).padStart(2,'0')}.webp`;

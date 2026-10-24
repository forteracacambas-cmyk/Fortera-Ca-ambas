import { CAPITAL_AREAS, capitalAreaPath, capitalAreaTitle, capitalAreaDescription } from './saoPauloAreas';
import { LOCAL_SEO_PAGES, localCityPath } from './campinasLocalPages';
import { MUNICIPALITIES, NATIONAL_STATES, cityPath, statePath } from './nationalCoverage';
import { SERVICE_AREAS } from './serviceAreas';
import { CITIES_DATA } from './citiesData';
import { PRACTICAL_GUIDES } from './guidesData';
import { SERVICES_DATA } from './servicesData';
import { stateSeo } from './stateSeo';
import { RENTAL_LANDINGS } from './rentalLandingPages';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
}

export function getAllRoutes(): RouteMeta[] {
  const routes: RouteMeta[] = [
    {
      path: '/',
      title: 'Aluguel de Caçambas de Entulho no Brasil | Fortera Caçambas',
      description: 'Aluguel e locação de caçambas de entulho para obras e reformas no Brasil. Fale com a Fortera, escolha tamanho e prazo e peça orçamento pelo WhatsApp.',
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      path: '/atendimento/',
      title: 'Atendimento Nacional de Caçambas | Cobertura nas 27 UFs | Fortera',
      description: 'Aluguel de caçambas de entulho com atendimento nas 27 Unidades Federativas do Brasil. Encontre sua cidade ou solicite cotação para o seu estado.',
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      path: '/tamanhos-de-cacamba/',
      title: 'Tamanhos de Caçamba: 3, 4, 5, 7 e 10 m³ | Fortera',
      description: 'Compare caçambas de 3, 4 e 5 m³, além de 7 e 10 m³ sob consulta. Veja medidas de referência e escolha tamanho e prazo para pedir orçamento.',
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      path: '/preco-aluguel-cacamba/',
      title: 'Quanto Custa Alugar uma Caçamba de Entulho? | Fortera',
      description: 'Entenda os fatores que determinam o preço do aluguel de caçamba de entulho: volume, tipo de resíduo, prazo por dias, semanas ou meses e condições no orçamento.',
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      path: '/como-funciona/',
      title: 'Como Funciona o Aluguel de Caçamba de Entulho | Passo a Passo Fortera',
      description: 'Entenda o passo a passo da locação de caçambas estacionárias: desde o pedido de orçamento e reserva da vaga até a entrega, enchimento e retirada.',
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      path: '/orcamento/',
      title: 'Solicitar Orçamento de Caçamba de Entulho | Fortera Caçambas',
      description: 'Solicite cotação ágil para aluguel de caçamba em qualquer cidade do Brasil. Escolha tamanhos de 3 a 10 m³, prazo por dias ou meses e envie pelo WhatsApp.',
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      path: '/sobre/',
      title: 'Sobre a Fortera Caçambas | Aluguel de Caçambas com Atendimento Nacional',
      description: 'Conheça a Fortera Caçambas: compromisso com a pontualidade, organização de canteiros de obras e orientação para o descarte adequado de entulho em todo o Brasil.',
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      path: '/privacidade/',
      title: 'Política de Privacidade e Proteção de Dados | Fortera Caçambas',
      description: 'Conheça a política de privacidade da Fortera Caçambas. Informações claras sobre como tratamos dados de pedidos enviados para atendimento.',
      changefreq: 'monthly',
      priority: 0.5,
    },
    {
      path: '/servicos/',
      title: 'Serviços de Aluguel de Caçamba para Obras e Reformas | Fortera',
      description: 'Soluções de locação de caçambas estacionárias para reformas residenciais, canteiros de obras civis e pequenas demolições em todo o Brasil.',
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      path: '/guias/',
      title: 'Guias Práticos sobre Aluguel de Caçamba de Entulho | Fortera',
      description: 'Aprenda a escolher o tamanho de caçamba, conheça o prazo por dias, semanas ou meses vs diárias, materiais aceitos e preparação da vaga para o poliguindaste.',
      changefreq: 'weekly',
      priority: 0.8,
    },
  ];

  RENTAL_LANDINGS.forEach(page => routes.push({ path: page.path, title: page.title, description: page.description, changefreq: 'monthly', priority: 0.9 }));

  SERVICE_AREAS.forEach(area => routes.push({
    path: `/regioes/${area.slug}/`,
    title: `Aluguel de Caçamba em ${area.name} | Fortera`,
    description: `Consulte caçambas em ${area.name}, cidades da região, tamanhos e locação por dias, semanas ou meses. Peça orçamento para seu endereço no WhatsApp.`,
    changefreq: 'monthly', priority: 0.9,
  }));
  routes.push({path:'/aluguel-de-cacamba/sp/sao-paulo/sao-mateus/',title:'Aluguel de Caçamba em São Mateus, São Paulo | Fortera',description:'Consulte locação de caçamba de entulho em São Mateus, São Paulo. Tamanhos, aluguel por dias ou meses e troca semanal. Orçamento pelo WhatsApp.',changefreq:'monthly',priority:0.8});

  // Serviços especializados
  SERVICES_DATA.forEach(s => {
    routes.push({
      path: `/servicos/${s.slug}/`,
      title: `${s.title} | Fortera Caçambas`,
      description: s.metaDescription,
      changefreq: 'weekly',
      priority: 0.9,
    });
  });

  // Guias práticos
  PRACTICAL_GUIDES.forEach(g => {
    routes.push({
      path: `/guias/${g.slug}/`,
      title: `${g.title} | Guia Fortera Caçambas`,
      description: g.description,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Páginas locais
  CITIES_DATA.forEach(c => {
    routes.push({
      path: `/aluguel-de-cacamba/${c.stateSlug}/${c.slug}/`,
      title: c.pageTitle,
      description: c.metaDescription,
      changefreq: 'weekly',
      priority: 0.9,
    });
  });

  NATIONAL_STATES.forEach(state => routes.push({ path: statePath(state.uf), ...stateSeo(state), changefreq: 'monthly', priority: 0.8 }));
  MUNICIPALITIES.filter(city=>!CITIES_DATA.some(c=>c.uf===city.uf&&c.slug===city.slug)).forEach(city=>routes.push({path:cityPath(city),title:'Aluguel de Caçamba em '+city.name+' '+city.uf+' | Fortera',description:'Consulte aluguel de caçamba em '+city.name+' — '+city.uf+', tamanhos e prazos por dias ou meses. Solicite orçamento para seu bairro no WhatsApp.',changefreq:'monthly',priority:0.7}));
  routes.push({ path: '/contatopc/', title: 'Fale com a Fortera | Telefone e atendimento', description: 'Ligue de um telefone fixo ou celular, ou fale pelo WhatsApp: (11) 95759-6840. Solicite seu orçamento de caçamba à Fortera.', changefreq: 'monthly', priority: 0.3 });
  LOCAL_SEO_PAGES.forEach(city => routes.push({path: localCityPath(city.slug), title: `Aluguel de Caçamba em ${city.name} SP | Fortera`, description: `Locação de caçamba de entulho em ${city.name}: ${city.focus.toLowerCase()}. Tamanhos, preço, entrega e retirada. Peça orçamento direto.`, changefreq: 'monthly', priority: 0.9}));
  CAPITAL_AREAS.forEach(area => routes.push({path:capitalAreaPath(area.slug),title:capitalAreaTitle(area),description:capitalAreaDescription(area),changefreq:'monthly',priority:0.8}));
  return [...new Map(routes.map(route => [route.path, route])).values()];
}

const ROUTE_INDEX = new Map(getAllRoutes().map(route=>[route.path,route]));
export function getRouteMeta(path: string): RouteMeta | undefined {
  const normalized = path === '/' ? '/' : (path.endsWith('/') ? path : `${path}/`);
  return ROUTE_INDEX.get(normalized);
}

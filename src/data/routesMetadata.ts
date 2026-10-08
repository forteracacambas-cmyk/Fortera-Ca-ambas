import { CITIES_DATA } from './citiesData';
import { PRACTICAL_GUIDES } from './guidesData';

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
      title: 'Fortera Caçambas | Aluguel de Caçambas de Entulho com Atendimento Nacional',
      description: 'Aluguel de caçambas estacionárias de entulho para obras, reformas e demolições em todo o Brasil. Sua obra avança. O entulho sai. Peça seu orçamento.',
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
      title: 'Tamanhos de Caçamba de Entulho (3, 4 e 5 m³) | Fortera Caçambas',
      description: 'Conheça as capacidades nominais de 3m³, 4m³ e 5m³ para aluguel de caçamba. Exemplos de uso sob avaliação e limites sob consulta para seu endereço.',
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      path: '/preco-aluguel-cacamba/',
      title: 'Preço de Aluguel de Caçamba: Fatores e Como Funciona | Fortera',
      description: 'Entenda os fatores que determinam o preço do aluguel de caçamba de entulho: volume, tipo de resíduo, logística e condições confirmadas no orçamento.',
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
      description: 'Solicite cotação ágil para aluguel de caçamba em qualquer cidade do Brasil. Escolha tamanho (3, 4 ou 5 m³), tipo de material e receba atendimento dedicado.',
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
      path: '/guias/',
      title: 'Guias Práticos sobre Aluguel de Caçamba de Entulho | Fortera',
      description: 'Aprenda a escolher o tamanho de caçamba sob orientação, conheça materiais aceitos e regras de preparação da vaga para o poliguindaste.',
      changefreq: 'weekly',
      priority: 0.8,
    },
  ];

  // Adiciona os guias práticos
  PRACTICAL_GUIDES.forEach(g => {
    routes.push({
      path: `/guias/${g.slug}/`,
      title: `${g.title} | Guia Fortera Caçambas`,
      description: g.description,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Adiciona as 6 páginas locais
  CITIES_DATA.forEach(c => {
    routes.push({
      path: `/aluguel-de-cacamba/${c.stateSlug}/${c.slug}/`,
      title: c.pageTitle,
      description: c.metaDescription,
      changefreq: 'weekly',
      priority: 0.9,
    });
  });

  return routes;
}

export function getRouteMeta(path: string): RouteMeta | undefined {
  const normalized = path === '/' ? '/' : (path.endsWith('/') ? path : `${path}/`);
  return getAllRoutes().find(r => r.path === normalized);
}

import { RIO_LOCALITIES, rioCityImage } from './rioSeo';
import { CAMPINAS_AREA_PATH_INDEX, campinasAreaImage } from './campinasAreas';
import { SAO_PAULO_LOCALITIES, SAO_PAULO_PRESERVED, saoPauloCityImage } from './saoPauloSeo';
import { SITE_IMAGES } from '../config/siteConfig';
import { CAPITAL_AREAS, capitalAreaPath } from './saoPauloAreas';
import { LOCAL_IMAGES } from './localImages';
import { NATIONAL_STATES } from './nationalCoverage';
import { STATE_SCENES } from './stateSeo';
import { RENTAL_LANDINGS } from './rentalLandingPages';
import { SERVICES_DATA } from './servicesData';
import { PRACTICAL_GUIDES } from './guidesData';
import { MINAS_LOCALITIES, minasCityImage } from './minasSeo';
import { BAHIA_LOCALITIES, bahiaCityImage } from './bahiaSeo';
import { BAHIA_NEIGHBORHOOD_PAGES, bahiaNeighborhoodPath, bahiaNeighborhoodImage } from './bahiaNeighborhoods';

// Select service images actually displayed in the page content.
export function getPageImages(path: string): string[] {
  const route = path === '/' ? '/' : path.split('?')[0].replace(/\/$/, '') + '/';
  const campinasArea = CAMPINAS_AREA_PATH_INDEX.get(route);
  if(campinasArea)return [campinasAreaImage(campinasArea)];
  const bahiaArea = BAHIA_NEIGHBORHOOD_PAGES.find(area => bahiaNeighborhoodPath(area) === route);
  if (bahiaArea) return [bahiaNeighborhoodImage(bahiaArea)];
  const rio = route.match(/^\/aluguel-de-cacamba\/rj\/([^/]+)\/$/)?.[1];
  if (rio && RIO_LOCALITIES[rio]) return [rioCityImage(rio)];
  const bahia = route.match(/^\/aluguel-de-cacamba\/ba\/([^/]+)\/$/)?.[1];
  if (bahia && BAHIA_LOCALITIES[bahia]) return [bahiaCityImage(bahia)];
  const minas = route.match(/^\/aluguel-de-cacamba\/mg\/([^/]+)\/$/)?.[1];
  if (minas && MINAS_LOCALITIES[minas]) return [minasCityImage(minas)];
  const area = CAPITAL_AREAS.find(area => capitalAreaPath(area.slug) === route);
  if (area) return [`/images/locais/ilustracao-${String(area.image).padStart(2, '0')}.webp`];
  const local = route.match(/^\/aluguel-de-cacamba\/sp\/([^/]+)\/$/)?.[1];
  if (local && SAO_PAULO_LOCALITIES[local] && !SAO_PAULO_PRESERVED.has(local)) return [saoPauloCityImage(local)];
  if (local && LOCAL_IMAGES[local]) return [LOCAL_IMAGES[local]];
  const stateUf = route.match(/^\/aluguel-de-cacamba\/([a-z]{2})\/$/)?.[1];
  const state = NATIONAL_STATES.find(state => state.uf.toLowerCase() === stateUf);
  if (state) return [STATE_SCENES[state.region].src];
  if (route.startsWith('/aluguel-de-cacamba/') || route.startsWith('/regioes/')) return [SITE_IMAGES.hero.src];
  const landing = RENTAL_LANDINGS.find(page => page.path === route);
  if (landing) return [`/images/contratacao/${landing.image}.webp`];
  const service = SERVICES_DATA.find(item => route === `/servicos/${item.slug}/`);
  if (service) return [service.image.src];
  const guide = PRACTICAL_GUIDES.find(item => route === `/guias/${item.slug}/`);
  if (guide) return [guide.image.src];
  if (route === '/') return [SITE_IMAGES.hero.src, SITE_IMAGES.dumpsterProduct.src, SITE_IMAGES.delivery.src];
  if (route === '/como-funciona/') return [SITE_IMAGES.delivery.src];
  if (route === '/tamanhos-de-cacamba/') return [SITE_IMAGES.comparative.src, SITE_IMAGES.dumpsterProduct.src];
  if (route === '/servicos/') return [...new Set(SERVICES_DATA.map(item => item.image.src))];
  if (route === '/guias/') return [...new Set(PRACTICAL_GUIDES.map(item => item.image.src))];
  return [];
}

export function getImageHeadTags(path: string, indexable: boolean): string {
  const image = indexable ? getPageImages(path)[0] : undefined;
  const absolute = image ? new URL(image, 'https://forteracacambas.com').href : undefined;
  return '<meta name="robots" content="' + (indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow') + '"/>' + (absolute ? '<meta property="og:image" content="'+absolute+'"/><meta name="twitter:image" content="'+absolute+'"/>' : '');
}

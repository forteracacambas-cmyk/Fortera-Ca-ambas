import { RMC_COVERAGE_UPDATED, RMC_COVERAGE_PATHS } from './rmcCoverage';
import { CAMPINAS_AREA_PATH_INDEX, CAMPINAS_CITY_PATH, CAMPINAS_AREAS_UPDATED } from './campinasAreas';
import { SAO_PAULO_CONTENT_UPDATED, SAO_PAULO_LOCALITIES, SAO_PAULO_PRESERVED } from './saoPauloSeo';
import { getAllRoutes } from './routesMetadata';
import { SITE_CONFIG } from '../config/siteConfig';
import { NATIONAL_STATES } from './nationalCoverage';
import { getPageImages } from './pageImages';
import { MINAS_CONTENT_UPDATED } from './minasSeo';
import { BAHIA_CONTENT_UPDATED } from './bahiaSeo';
import { LOCAL_SEARCH_UPDATED, LOCAL_SEARCH_UPDATED_PATHS } from './localSearchImprovements';
import { SERVICE_AREAS } from './serviceAreas';

const escapeXml = (text: string) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const origin = SITE_CONFIG.siteUrl.replace(/\/$/, '');
const routes = [...new Map(getAllRoutes().map(route => [route.path, route])).values()];
const header = '<?xml version="1.0" encoding="UTF-8"?>';
const files = ['principal', ...NATIONAL_STATES.map(state => state.uf.toLowerCase())];
const saoPauloUpdatedPaths = new Set(['/aluguel-de-cacamba/sp/', ...Object.keys(SAO_PAULO_LOCALITIES).filter(slug => !SAO_PAULO_PRESERVED.has(slug)).map(slug => '/aluguel-de-cacamba/sp/' + slug + '/')]);

// Split by state for diagnosis in Search Console; no invented daily lastmod dates.
export function getSitemapXml(pathname: string): string | undefined {
  if (pathname === '/sitemap.xml') return header + '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + files.map(file => '<sitemap><loc>' + escapeXml(origin + '/sitemaps/' + file + '.xml') + '</loc></sitemap>').join('') + '</sitemapindex>';
  const file = pathname.match(/^\/sitemaps\/([a-z]+)\.xml$/)?.[1];
  if (!file || !files.includes(file)) return undefined;
  const selected = routes.filter(route => {
    const state = route.path.match(/^\/aluguel-de-cacamba\/([a-z]{2})\//)?.[1];
    return file === 'principal' ? !state : state === file;
  });
  return header + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">' + selected.map(route => '<url><loc>' + escapeXml(origin + route.path) + '</loc>' + (route.path.startsWith('/aluguel-de-cacamba/mg/') ? '<lastmod>' + MINAS_CONTENT_UPDATED + '</lastmod>' : route.path === '/aluguel-de-cacamba/sp/sao-paulo/' ? '<lastmod>' + SAO_PAULO_CONTENT_UPDATED + '</lastmod>' : RMC_COVERAGE_PATHS.has(route.path) ? '<lastmod>' + RMC_COVERAGE_UPDATED + '</lastmod>' : CAMPINAS_AREA_PATH_INDEX.has(route.path) || route.path === CAMPINAS_CITY_PATH ? '<lastmod>' + CAMPINAS_AREAS_UPDATED + '</lastmod>' : saoPauloUpdatedPaths.has(route.path) ? '<lastmod>' + SAO_PAULO_CONTENT_UPDATED + '</lastmod>' : LOCAL_SEARCH_UPDATED_PATHS.has(route.path) || SERVICE_AREAS.some(area => route.path === '/regioes/' + area.slug + '/') ? '<lastmod>' + LOCAL_SEARCH_UPDATED + '</lastmod>' : route.path.startsWith('/aluguel-de-cacamba/mg/') ? '<lastmod>' + MINAS_CONTENT_UPDATED + '</lastmod>' : route.path.startsWith('/aluguel-de-cacamba/ba/') ? '<lastmod>' + BAHIA_CONTENT_UPDATED + '</lastmod>' : '') + getPageImages(route.path).map(image=>'<image:image><image:loc>'+escapeXml(new URL(image,origin).href)+'</image:loc></image:image>').join('') + '</url>').join('') + '</urlset>';
}

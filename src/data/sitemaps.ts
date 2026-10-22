import { getAllRoutes } from './routesMetadata';
import { SITE_CONFIG } from '../config/siteConfig';
import { NATIONAL_STATES } from './nationalCoverage';

const escapeXml = (text: string) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const origin = SITE_CONFIG.siteUrl.replace(/\/$/, '');
const routes = [...new Map(getAllRoutes().map(route => [route.path, route])).values()];
const header = '<?xml version="1.0" encoding="UTF-8"?>';
const files = ['principal', ...NATIONAL_STATES.map(state => state.uf.toLowerCase())];

// Split by state for diagnosis in Search Console; no invented daily lastmod dates.
export function getSitemapXml(pathname: string): string | undefined {
  if (pathname === '/sitemap.xml') return header + '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + files.map(file => '<sitemap><loc>' + escapeXml(origin + '/sitemaps/' + file + '.xml') + '</loc></sitemap>').join('') + '</sitemapindex>';
  const file = pathname.match(/^\/sitemaps\/([a-z]+)\.xml$/)?.[1];
  if (!file || !files.includes(file)) return undefined;
  const selected = routes.filter(route => {
    const state = route.path.match(/^\/aluguel-de-cacamba\/([a-z]{2})\//)?.[1];
    return file === 'principal' ? !state : state === file;
  });
  return header + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + selected.map(route => '<url><loc>' + escapeXml(origin + route.path) + '</loc></url>').join('') + '</urlset>';
}

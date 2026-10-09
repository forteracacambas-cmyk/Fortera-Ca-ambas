import municipalities from './municipalities.json';
import { BRAZILIAN_STATES } from './regionsAndStates';
export const MUNICIPALITIES = municipalities;
export const NATIONAL_STATES = BRAZILIAN_STATES;
export const cityPath = (city: typeof MUNICIPALITIES[number]) => '/aluguel-de-cacamba/' + city.uf.toLowerCase() + '/' + city.slug + '/';
export const statePath = (uf: string) => '/aluguel-de-cacamba/' + uf.toLowerCase() + '/';
export const findMunicipality = (uf: string, slug: string) => MUNICIPALITIES.find(c => c.uf === uf.toUpperCase() && c.slug === slug);
export const normalizeSearch = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

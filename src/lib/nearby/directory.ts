import { routing } from '@/i18n/routing';
import { BASE_URL, type Locale } from '@/lib/topic-types';
import { coast } from './east-west';
import { landmarks } from './landmarks';
import { museums } from './museums';
import { streets } from './streets';
import type { Area } from './types';

export const places = [...landmarks, ...streets, ...museums, ...coast];
export const getPlace = (slug: string) => places.find((place) => place.slug === slug);

export const checkedOn = '2026-11-20';
export const cityBeach = 'https://www.malaga.eu/la-ciudad/playas/la-malagueta/index.html';
export const cityBus = 'https://emtsam.org/blog/';
export const beachMaps = 'https://maps.app.goo.gl/hLbRvdwVPo37TgFq8';

export function mapsFor(name: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Málaga, Andalucía, España`)}`;
}

export function alternatesFor(locale: Locale, path: string) {
  const url = (language: Locale) => `${BASE_URL}/${language}/nearby${path}`;
  return {
    canonical: url(locale),
    languages: { zh: url('zh'), en: url('en'), es: url('es'), 'x-default': url('en') },
  };
}

export function isLocale(locale: string): locale is Locale {
  return routing.locales.some((supported) => supported === locale);
}

export const areaNames = {
  harbor: { en: 'Harbor and civic gardens', es: 'Puerto y jardines municipales', zh: '港口与市政花园' },
  center: { en: 'Historic center', es: 'Centro histórico', zh: '历史中心' },
  north: { en: 'North of the old town', es: 'Norte del casco antiguo', zh: '老城北部' },
  east: { en: 'East coast', es: 'Costa este', zh: '东海岸' },
  west: { en: 'Soho and west coast', es: 'Soho y costa oeste', zh: '苏荷与西海岸' },
} satisfies Record<Area, Record<Locale, string>>;

export const areas = Object.keys(areaNames) as Area[];

export const nearbyText = {
  en: {
    title: 'Places to visit near La Malagueta', description: 'Plan a walk from Malagueta Beach to Málaga’s harbor, gardens, old-town sights, museums and neighboring beaches.',
    directory: 'All nearby sights', history: 'History and public role', manager: 'Visitor services and management', unverified: 'Managing body pending confirmation. Use the venue’s published visitor information for access.',
    observation: 'What to look for', visit: 'Planning your visit', route: 'On foot from La Malagueta', bus: 'Málaga city bus information', photo: 'Photography', photoPending: 'Photo pending verification for this site. The suggested viewpoint is described above.',
    faq: 'Frequently asked questions', routeQuestion: 'How do I reach this place from the beach?', source: 'Visitor information and sources',
    primary: 'Read the source for this place', checked: 'Sources checked', map: 'Open place in Google Maps', beach: 'La Malagueta Beach', related: 'Continue exploring', location: 'Location and transport',
  },
  es: {
    title: 'Qué ver cerca de La Malagueta', description: 'Organiza un paseo desde la playa de La Malagueta al puerto, los jardines, el casco histórico, los museos y otras playas de Málaga.',
    directory: 'Todos los lugares cercanos', history: 'Historia y función pública', manager: 'Gestión y atención al visitante', unverified: 'Entidad gestora pendiente de confirmar. Consulta la información publicada por el recinto para preparar el acceso.',
    observation: 'En qué fijarse', visit: 'Cómo preparar la visita', route: 'A pie desde La Malagueta', bus: 'Información de autobuses urbanos de Málaga', photo: 'Fotografía', photoPending: 'Fotografía del lugar pendiente de verificar. El punto de vista sugerido se indica arriba.',
    faq: 'Preguntas frecuentes', routeQuestion: '¿Cómo se llega desde la playa?', source: 'Información para visitantes y fuentes',
    primary: 'Consultar la fuente del lugar', checked: 'Fuentes consultadas', map: 'Abrir el lugar en Google Maps', beach: 'Playa de La Malagueta', related: 'Seguir explorando', location: 'Ubicación y transporte',
  },
  zh: {
    title: '马拉盖塔海滩周边景点', description: '从马拉盖塔海滩出发，按港口、市政花园、历史中心、博物馆和相邻海滩规划马拉加步行路线。',
    directory: '查看全部周边景点', history: '历史与公共属性', manager: '管理与游客服务', unverified: '管理主体待核。请以场地公布的访客信息安排到访。',
    observation: '现场看什么', visit: '游览安排', route: '从马拉盖塔海滩出发的步行路线', bus: '马拉加市区公交信息', photo: '摄影建议', photoPending: '该景点实景照片待核。上方文字注明了建议取景位置。',
    faq: '常见问题', routeQuestion: '从海滩怎么走？', source: '游客信息与资料来源',
    primary: '查阅该景点资料', checked: '资料核对日期', map: '在 Google 地图中打开此景点', beach: '马拉盖塔海滩', related: '继续探索', location: '位置与交通',
  },
} satisfies Record<Locale, Record<string, string>>;

export const pairedGuides = {
  harbor: ['muelle-uno', 'centre-pompidou', 'parque-de-malaga'],
  center: ['half-day-itinerary', 'malagueta-bullring', 'gibralfaro'],
  north: ['english-cemetery', 'gibralfaro', 'getting-here'],
  east: ['la-caleta', 'pedregalejo', 'promenade-walk'],
  west: ['getting-here', 'beaches-near-malaga-centre', 'one-day-itinerary'],
} satisfies Record<Area, string[]>;

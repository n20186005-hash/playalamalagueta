import type { Locale } from '@/lib/topic-types';

export type Localized = Record<Locale, string>;
export type Area = 'harbor' | 'center' | 'north' | 'east' | 'west';

export type Place = {
  slug: string;
  name: string;
  area: Area;
  source: string;
  manager: Localized | null;
  mapName?: string;
  address?: string;
  duration?: Localized;
  title: Localized;
  history: Localized;
  historyDetail?: Localized;
  furtherReading?: string;
  observation: Localized;
  route: Localized;
  access: Localized;
  photo: Localized;
  answer: Localized;
};

export function place(
  slug: string,
  name: string,
  area: Area,
  source: string,
  manager: Localized | null,
  en: readonly [string, string, string, string, string, string, string],
  es: readonly [string, string, string, string, string, string, string],
  zh: readonly [string, string, string, string, string, string, string],
  mapName?: string,
): Place {
  const localized = (index: number) => ({ en: en[index], es: es[index], zh: zh[index] });
  return {
    slug, name, area, source, manager, mapName,
    title: localized(0),
    history: localized(1),
    observation: localized(2),
    route: localized(3),
    access: localized(4),
    photo: localized(5),
    answer: localized(6),
  };
}

export const city = { en: 'Málaga City Council', es: 'Ayuntamiento de Málaga', zh: '马拉加市政府' };
export const region = { en: 'Regional Government of Andalusia', es: 'Junta de Andalucía', zh: '安达卢西亚自治区政府' };
export const foundation = (name: string) => ({ en: name, es: name, zh: name });

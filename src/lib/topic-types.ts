// Shared types and labels for the Malagueta Beach topic pages.

export type Locale = 'en' | 'es' | 'zh';

export type CategoryKey =
  | 'beach'
  | 'food'
  | 'nearby'
  | 'itinerary'
  | 'compare';

export type TopicSection = { id: string; title: string; content: string };
export type TopicFaq = { question: string; answer: string };

export type TopicLocaleContent = {
  title: string;
  description: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  updated: string;
};

export type TopicEntry = {
  en: TopicLocaleContent;
  es: TopicLocaleContent;
  zh?: TopicLocaleContent;
  category: CategoryKey;
  related: string[];
};

export const BASE_URL = 'https://playalamalagueta.com';

export const CATEGORY_LABELS: Record<CategoryKey, Record<Locale, string>> = {
  beach: { en: 'Beach info', es: 'Información de la playa', zh: '海滩实用信息' },
  food: { en: 'Food & drink', es: 'Comer y beber', zh: '餐饮' },
  nearby: { en: 'Nearby sights', es: 'Qué ver cerca', zh: '周边景点' },
  itinerary: { en: 'Itineraries', es: 'Itinerarios', zh: '行程路线' },
  compare: { en: 'Compare & seasons', es: 'Comparar y temporadas', zh: '比较与季节' },
};

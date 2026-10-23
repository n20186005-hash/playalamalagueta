import type { MetadataRoute } from 'next';
import { TOPIC_SLUGS } from '@/lib/topics';

const BASE_URL = 'https://playalamalagueta.com';
const LOCALES = ['zh', 'en', 'es'] as const;
const LEGAL = ['privacy-policy', 'terms-of-service', 'cookie-settings'];

function languageAlternates(path: string): Record<string, string> {
  const en = `${BASE_URL}/en${path}`;
  return {
    zh: `${BASE_URL}/zh${path}`,
    en,
    es: `${BASE_URL}/es${path}`,
    'x-default': en,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    // Home
    entries.push({
      url: `${BASE_URL}/${locale}`,
      alternates: { languages: languageAlternates('') },
    });

    // Legal pages
    for (const legal of LEGAL) {
      entries.push({
        url: `${BASE_URL}/${locale}/${legal}`,
        alternates: { languages: languageAlternates(`/${legal}`) },
      });
    }

    // 40 topic pages
    for (const slug of TOPIC_SLUGS) {
      entries.push({
        url: `${BASE_URL}/${locale}/${slug}`,
        alternates: { languages: languageAlternates(`/${slug}`) },
      });
    }
  }

  return entries;
}

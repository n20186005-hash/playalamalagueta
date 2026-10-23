import { beachTopics } from './topic-data-beach';
import { foodTopics } from './topic-data-food';
import { nearbyTopics } from './topic-data-nearby';
import { itineraryTopics } from './topic-data-itinerary';
import { compareTopics } from './topic-data-compare';
import { beachZh } from './topic-data-zh-beach';
import { foodZh } from './topic-data-zh-food';
import { nearbyZh } from './topic-data-zh-nearby';
import { itineraryZh } from './topic-data-zh-itinerary';
import { compareZh } from './topic-data-zh-compare';
import { BASE_URL, CATEGORY_LABELS, type Locale, type TopicEntry, type TopicLocaleContent } from './topic-types';

// All 40 topic pages in one record. Each topic has EN + ES copy and an
// optional ZH copy; when ZH is missing the page falls back to the ES copy.
export const TOPICS: Record<string, TopicEntry> = {
  ...beachTopics,
  ...foodTopics,
  ...nearbyTopics,
  ...itineraryTopics,
  ...compareTopics,
};

// Apply the dedicated Chinese copy where supplied; topicContent() falls back
// to ES for any slug not present here.
const zhOverrides: Record<string, TopicLocaleContent> = {
  ...beachZh,
  ...foodZh,
  ...nearbyZh,
  ...itineraryZh,
  ...compareZh,
};

for (const slug of Object.keys(zhOverrides)) {
  const entry = TOPICS[slug];
  if (entry) {
    entry.zh = zhOverrides[slug];
  }
}

export { BASE_URL, CATEGORY_LABELS };
export type { Locale, TopicEntry, TopicLocaleContent };

export const TOPIC_SLUGS: string[] = Object.keys(TOPICS);

export function topicExists(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(TOPICS, slug);
}

export function getTopic(slug: string): TopicEntry | undefined {
  return TOPICS[slug];
}

// Resolve the localized content for a topic, falling back to ES when ZH copy
// has not been supplied yet (per the agreed trilingual rollout).
export function topicContent(slug: string, locale: Locale): TopicLocaleContent | undefined {
  const entry = TOPICS[slug];
  if (!entry) return undefined;
  if (locale === 'zh') return entry.zh ?? entry.es;
  return entry[locale];
}

export function topicSlugsForLocale(_locale: Locale): string[] {
  // Every topic is published in all three locales; ZH reuses ES copy until
  // dedicated Chinese copy is added.
  return TOPIC_SLUGS;
}

export function topicLocales(_slug: string): Locale[] {
  return ['zh', 'en', 'es'];
}

export function topicAlternates(slug: string): Record<string, string> {
  const en = `${BASE_URL}/en/${slug}`;
  const es = `${BASE_URL}/es/${slug}`;
  const zh = `${BASE_URL}/zh/${slug}`;
  return {
    en,
    es,
    zh,
    'x-default': en,
  };
}

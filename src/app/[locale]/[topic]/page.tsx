import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { TOPIC_SLUGS, getTopic, topicContent, topicAlternates } from '@/lib/topics';
import type { Locale } from '@/lib/topic-types';
import TopicPage from '@/components/TopicPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BASE_URL = 'https://playalamalagueta.com';

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; topic: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of TOPIC_SLUGS) {
      params.push({ locale, topic: slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const localeKey = (locale === 'zh' || locale === 'en' || locale === 'es') ? (locale as Locale) : 'en';
  const entry = getTopic(topic);
  if (!entry) return {};
  const content = topicContent(topic, localeKey);
  if (!content) return {};

  const selfUrl = `${BASE_URL}/${locale}/${topic}`;
  const alts = topicAlternates(topic);

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        zh: alts.zh,
        en: alts.en,
        es: alts.es,
        'x-default': alts['x-default'],
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: selfUrl,
      siteName: 'Playa la Malagueta',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'article',
    },
  };
}

export default async function TopicPageRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const entry = getTopic(topic);
  if (!entry) {
    notFound();
  }

  const localeKey = (locale === 'zh' || locale === 'en' || locale === 'es') ? (locale as Locale) : 'en';
  const content = topicContent(topic, localeKey);
  if (!content) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <TopicPage locale={localeKey} slug={topic} entry={entry} content={content} />
      <Footer />
    </>
  );
}

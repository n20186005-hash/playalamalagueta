import { BASE_URL, CATEGORY_LABELS, type Locale, type TopicEntry, type TopicLocaleContent } from '@/lib/topic-types';
import { getTopic, topicContent } from '@/lib/topics';
import { nearbyText } from '@/lib/nearby/directory';
import TopicFaq from './TopicFaq';
import TravelHero from './TravelHero';
import { photos } from '@/lib/nearby/photos';
import { mapsFor } from '@/lib/nearby/directory';

type Props = {
  locale: Locale;
  slug: string;
  entry: TopicEntry;
  content: TopicLocaleContent;
};

const SITE_NAME = 'Playa la Malagueta';

export default function TopicPage({ locale, slug, entry, content }: Props) {
  const localeKey = locale;
  const categoryLabel = CATEGORY_LABELS[entry.category][localeKey];
  const homeUrl = `${BASE_URL}/${locale}`;
  const topicUrl = `${BASE_URL}/${locale}/${slug}`;

  const localNames:Record<string,string>={
    'muelle-uno':'Muelle Uno','centre-pompidou':'Centre Pompidou Málaga','la-farola':'La Farola de Málaga',
    'malagueta-bullring':'Plaza de Toros de La Malagueta','english-cemetery':'Cementerio Inglés de Málaga',
    'parque-de-malaga':'Parque de Málaga','la-caleta':'Playa de La Caleta','gibralfaro':'Castillo de Gibralfaro','pedregalejo':'Playa de Pedregalejo'
  };
  const subject=localNames[slug];
  const image=subject?photos[slug]:undefined;
  const map=mapsFor(subject??'Playa de La Malagueta');
  const caption=subject??'Playa de La Malagueta';
  const mapLabel={en:'Open location on Google Maps',es:'Ver ubicación en Google Maps',zh:'在 Google 地图查看地点'}[locale];
  const reviewLabel={en:'Latest visitor reviews',es:'Opiniones recientes',zh:'查看最新游客评价'}[locale];
  const related = (entry.related || [])
    .map((relSlug) => {
      const relEntry = getTopic(relSlug);
      if (!relEntry) return null;
      const relContent = topicContent(relSlug, locale);
      if (!relContent) return null;
      return {
        slug: relSlug,
        title: relContent.title,
        category: CATEGORY_LABELS[relEntry.category][locale],
      };
    })
    .filter((x): x is { slug: string; title: string; category: string } => x !== null);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${topicUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE_NAME,
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryLabel,
        item: `${homeUrl}#guides`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: content.title,
        item: topicUrl,
      },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': topicUrl,
    name: content.title,
    description: content.description,
    url: topicUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: BASE_URL,
    },
    about: {
      '@id': `${BASE_URL}/#attraction`,
    },
    breadcrumb: {
      '@id': `${topicUrl}#breadcrumb`,
    },
    inLanguage: locale === 'zh' ? 'zh-CN' : locale === 'es' ? 'es-ES' : 'en',
    lastReviewed: content.updated,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <TravelHero title={content.title} subtitle={content.description}
          photo={image?.file??'/gallery/playa-la-malagueta (1).jpg'} alt={caption}
          breadcrumb={<nav className="mb-4 flex flex-wrap gap-3 text-sm"><a className="underline" href={homeUrl}>{SITE_NAME}</a><a className="underline" href={`/${locale}/nearby`}>{nearbyText[locale].directory}</a><span>{categoryLabel}</span></nav>}>
          <a className="rounded-full bg-white/15 px-4 py-2 underline" href={map}>{mapLabel}</a>
          <a className="underline" href={map}>{reviewLabel}</a>
        </TravelHero>
        {image&&<p className="mx-auto mt-3 max-w-4xl px-4 text-xs text-[var(--text-muted)]">{caption} · <a className="underline" href={image.source}>{image.artist}</a> {image.license}</p>}
        {/* Intro */}
        <section className="section-padding pt-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {content.intro}
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="section-padding pt-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
            {content.sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2
                  className="font-display text-2xl sm:text-3xl font-semibold mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {section.title}
                </h2>
                <div
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className={i > 0 ? 'mt-3' : ''}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding pt-0" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              FAQ
            </h2>
            <TopicFaq items={content.faq} />
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-padding pt-0">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2
                className="font-display text-2xl sm:text-3xl font-semibold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                {locale === 'es' ? 'Temas relacionados' : locale === 'zh' ? '相关主题' : 'Related guides'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((item) => (
                  <a
                    key={item.slug}
                    href={`/${locale}/${item.slug}`}
                    className="block p-5 rounded-xl transition-colors hover:bg-white/5"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                  >
                    <span className="text-xs" style={{ color: 'var(--accent)' }}>
                      {item.category}
                    </span>
                    <p
                      className="font-display text-lg font-semibold mt-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

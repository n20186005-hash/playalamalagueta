import { CATEGORY_LABELS, type CategoryKey, type Locale } from '@/lib/topic-types';
import { TOPICS, TOPIC_SLUGS, topicContent } from '@/lib/topics';

const CATEGORY_ORDER: CategoryKey[] = ['beach', 'food', 'nearby', 'itinerary', 'compare'];

const HEADINGS: Record<Locale, { title: string; subtitle: string }> = {
  en: {
    title: 'Guides & Things to Do Around Malagueta',
    subtitle: 'Practical guides to getting here, food, nearby sights and itineraries around Playa de la Malagueta.',
  },
  es: {
    title: 'Guías y qué hacer cerca de la Malagueta',
    subtitle: 'Guías prácticas para llegar, comer, ver cerca y planificar itinerarios en la Playa de la Malagueta.',
  },
  zh: {
    title: '马拉盖塔周边指南与玩法',
    subtitle: '关于如何到达、餐饮、周边景点与行程安排的实用指南。',
  },
};

export default function TopicLinks({ locale }: { locale: Locale }) {
  const heading = HEADINGS[locale];

  const categories = CATEGORY_ORDER.map((cat) => ({
    key: cat,
    label: CATEGORY_LABELS[cat][locale],
    topics: TOPIC_SLUGS.filter((slug) => TOPICS[slug].category === cat).map((slug) => ({
      slug,
      title: topicContent(slug, locale)?.title ?? slug,
    })),
  }));

  return (
    <section id="guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {heading.title}
        </h2>
        <p className="text-center mb-12 text-base" style={{ color: 'var(--text-muted)' }}>
          {heading.subtitle}
        </p>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.key}>
              <h3
                className="font-display text-xl sm:text-2xl font-semibold mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {cat.label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.topics.map((topic) => (
                  <a
                    key={topic.slug}
                    href={`/${locale}/${topic.slug}`}
                    className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                    style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
                  >
                    {topic.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

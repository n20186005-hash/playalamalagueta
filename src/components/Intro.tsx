import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const messages = useMessages() as any;
  const visitGuideItems: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];
  const breadcrumbItems: string[] = messages?.intro?.breadcrumb?.items || [];
  const nearbyItems: string[] = messages?.intro?.nearby?.items || [];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        {/* Entity Equivalence Statement (首段等位声明) */}
        <div
          className="text-lg leading-relaxed mb-8 p-6 sm:p-8 rounded-xl border-l-4"
          style={{
            color: 'var(--text-secondary)',
            background: 'var(--bg-secondary)',
            borderColor: 'var(--accent)',
          }}
          dangerouslySetInnerHTML={{ __html: t('entityEquivalence') }}
        />

        {/* Geographic Breadcrumb (地理面包屑) */}
        <div className="mb-12 p-5 sm:p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)' }}>
          <h3 className="font-display text-sm uppercase tracking-wider mb-4 font-semibold" style={{ color: 'var(--accent)' }}>
            {t('breadcrumb.title')}
          </h3>
          <nav aria-label="Geographic hierarchy">
            <ol className="flex flex-wrap items-center gap-2 text-base" style={{ color: 'var(--text-primary)' }}>
              {breadcrumbItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="font-medium">{item}</span>
                  {i < breadcrumbItems.length - 1 && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" className="flex-shrink-0">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        {/* Visit Guide + Signature Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {visitGuideItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nearby Landmarks Cluster (周边语义集群) */}
        <div
          className="mb-12 rounded-xl p-6 sm:p-8"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
        >
          <h2
            className="font-display text-2xl sm:text-3xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('nearby.title')}
          </h2>
          <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
          <div
            className="text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: t('nearby.description') }}
          />
          <div className="flex flex-wrap gap-3">
            {nearbyItems.map((landmark, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>

        {/* Official Management Section */}
        <div className="p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}

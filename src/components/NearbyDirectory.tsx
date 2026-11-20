import { areaNames, areas, nearbyText, places } from '@/lib/nearby/directory';
import type { Locale } from '@/lib/topic-types';

export default function NearbyDirectory({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = nearbyText[locale];
  return (
    <section id="nearby" className="section-padding bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-5xl">
        {compact ? <h2 className="font-display text-3xl font-semibold">{t.title}</h2> : <h1 className="font-display text-4xl font-semibold">{t.title}</h1>}
        <p className="mb-6 mt-3 text-lg text-[var(--text-secondary)]">{t.description}</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const group = places.filter((place) => place.area === area);
            const Heading = compact ? 'h3' : 'h2';
            return (
              <div key={area} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-5">
                <Heading className="font-display text-xl font-semibold">{areaNames[area][locale]}</Heading>
                <ul className="mt-3 space-y-2 text-[var(--text-secondary)]">
                  {(compact ? group.slice(0, 2) : group).map((place) => (
                    <li key={place.slug}>
                      <a className="underline decoration-[var(--border-color)] underline-offset-4 hover:decoration-current" href={`/${locale}/nearby/${place.slug}`}>
                        {place.title[locale]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {compact && <a className="mt-6 inline-block font-semibold underline underline-offset-4" href={`/${locale}/nearby`}>{t.directory}</a>}
      </div>
    </section>
  );
}

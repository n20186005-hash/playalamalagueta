import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { areaNames, alternatesFor, beachMaps, checkedOn, cityBus, getPlace, isLocale, mapsFor, nearbyText, pairedGuides, places } from '@/lib/nearby/directory';
import { secondRoundQuestions } from '@/lib/nearby/second-round';
import { photos } from '@/lib/nearby/photos';
import { questions } from '@/lib/nearby/questions';
import { topicContent } from '@/lib/topics';

type Props = { params: Promise<{ locale: string; place: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return places.map(({ slug }) => ({ place: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, place: slug } = await params;
  const place = getPlace(slug);
  if (!isLocale(locale) || !place) notFound();
  const title = place.title[locale];
  const description = place.history[locale];
  const alternates = alternatesFor(locale, `/${slug}`);
  return { title, description, keywords: [place.name, nearbyText[locale].beach, areaNames[place.area][locale]], alternates, openGraph: { title, description, url: alternates.canonical, type: 'article' } };
}

export default async function NearbyPlace({ params }: Props) {
  const { locale, place: slug } = await params;
  const place = getPlace(slug);
  if (!isLocale(locale) || !place) notFound();
  setRequestLocale(locale);

  const t = nearbyText[locale];
  const title = place.title[locale];
  const map = mapsFor(place.mapName ?? place.name);
  const mapQuery = new URL(map).searchParams.get('query') ?? place.name;
  const related = places.filter((other) => other.area === place.area && other.slug !== slug).slice(0, 3);
  const url = alternatesFor(locale, `/${slug}`).canonical;
  const accessQuestion = {
    en: `What should I check before visiting ${title}?`,
    es: `¿Qué conviene consultar antes de visitar ${title}?`,
    zh: `到访${title}前需要确认哪些信息？`,
  };
  const labels = {
    en: { about: 'About', address: 'Address or approach', duration: 'Suggested visit', mapTitle: 'Map of', reviews: 'Find recent visitor reviews on Google Maps', photoCredit: 'Photograph and attribution' },
    es: { about: 'Acerca de', address: 'Dirección o acceso', duration: 'Tiempo sugerido', mapTitle: 'Mapa de', reviews: 'Buscar reseñas recientes en Google Maps', photoCredit: 'Fotografía y créditos' },
    zh: { about: '关于', address: '地址或入口', duration: '建议停留', mapTitle: '地图', reviews: '在 Google 地图查看近期游客评价', photoCredit: '照片与署名' },
  }[locale];
  const photo = photos[slug];
  const faq = [
    { question: (secondRoundQuestions[slug] ?? questions[slug])[locale], answer: place.answer[locale] },
    { question: t.routeQuestion, answer: place.route[locale] },
    { question: accessQuestion[locale], answer: place.access[locale] },
  ];
  const structuredData = [
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.beach, item: new URL(`/${locale}`, url).href },
        { '@type': 'ListItem', position: 2, name: t.directory, item: alternatesFor(locale, '').canonical },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org', '@type': 'WebPage',
      name: title, description: place.history[locale], url, inLanguage: locale,
      dateModified: checkedOn, about: { '@type': 'Place', name: place.name, hasMap: map },
    },
  ];

  return (
    <>
      <Header solid />
      <main className="pt-16 text-[var(--text-primary)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-6 flex flex-wrap gap-x-3 text-sm text-[var(--text-secondary)]" aria-label={t.directory}>
              <a href={`/${locale}`} className="underline">{t.beach}</a>
              <a href={`/${locale}/nearby`} className="underline">{t.directory}</a>
              <span>{areaNames[place.area][locale]}</span>
            </nav>
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">{place.history[locale]}</p>
            <a href={map} className="mt-5 inline-block font-semibold underline underline-offset-4">{t.map}</a>
          </div>
        </section>

        <article className="section-padding mx-auto max-w-4xl space-y-10 text-[var(--text-secondary)]">
          <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-7">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{locale === 'zh' ? `${labels.about}${title}` : `${labels.about} ${title}`}</h2>
            <p className="mt-3 leading-relaxed">{place.history[locale]}</p>
            <h3 className="mb-2 mt-4 font-semibold text-[var(--text-primary)]">{t.manager}</h3>
            <p>{place.manager?.[locale] ?? t.unverified}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{t.observation}</h2>
            <p className="mt-3 leading-relaxed">{place.observation[locale]}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{t.visit}</h2>
            <p className="mt-3 leading-relaxed">{place.access[locale]}</p>
            {place.address && (
              <dl className="mt-4 rounded-lg border border-[var(--border-color)] p-4">
                <dt className="font-semibold text-[var(--text-primary)]">{labels.address}</dt>
                <dd>{place.address}, Málaga</dd>
                {place.duration && (
                  <>
                    <dt className="mt-3 font-semibold text-[var(--text-primary)]">{labels.duration}</dt>
                    <dd>{place.duration[locale]}</dd>
                  </>
                )}
              </dl>
            )}
            <h3 className="mb-2 mt-4 font-semibold text-[var(--text-primary)]">{t.route}</h3>
            <p className="leading-relaxed">{place.route[locale]}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{t.photo}</h2>
            <p className="mt-3 leading-relaxed">{place.photo[locale]}</p>
            {photo ? (
              <figure className="mt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="h-auto w-full rounded-xl" src={photo.file} width={photo.width} height={photo.height} loading="lazy" alt={title} />
                <figcaption className="mt-2 text-sm">{title} · <a className="underline" href={photo.source}>{photo.artist || labels.photoCredit}</a>{photo.license ? ` · ${photo.license}` : ''}</figcaption>
              </figure>
            ) : <p className="mt-3 rounded-lg border border-dashed border-[var(--border-color)] p-4 text-sm">{t.photoPending}</p>}
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{t.faq}</h2>
            {faq.map(({ question, answer }) => (
              <details key={question} className="mt-3 border-b border-[var(--border-color)] pb-3">
                <summary className="cursor-pointer font-semibold text-[var(--text-primary)]">{question}</summary>
                <p className="mt-2 leading-relaxed">{answer}</p>
              </details>
            ))}
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{t.location}</h2>
            <ul className="mt-3 space-y-2">
              <li><a className="underline" href={map}>{place.name} · Málaga — {t.map}</a></li>
              <li><a className="underline" href={map}>{labels.reviews}</a></li>
              <li><a className="underline" href={cityBus}>{t.bus}</a></li>
              <li><a className="underline" href={beachMaps}>{t.beach} · Google Maps</a></li>
            </ul>
            <iframe className="mt-4 h-72 w-full rounded-xl border border-[var(--border-color)]" loading="lazy"
              title={`${labels.mapTitle} ${title}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`} />
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{t.source}</h2>
            <p className="mt-3"><a className="underline" href={place.source}>{t.primary}</a></p>
            <p className="mt-2 text-sm">{t.checked} <time dateTime={checkedOn}>{checkedOn}</time></p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{t.related}</h2>
            <ul className="mt-3 space-y-2">
              {related.map((other) => <li key={other.slug}><a className="underline" href={`/${locale}/nearby/${other.slug}`}>{other.title[locale]}</a></li>)}
              {pairedGuides[place.area].map((guide) => <li key={guide}><a className="underline" href={`/${locale}/${guide}`}>{topicContent(guide, locale)?.title}</a></li>)}
              <li><a className="underline" href={`/${locale}/nearby`}>{t.directory}</a></li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

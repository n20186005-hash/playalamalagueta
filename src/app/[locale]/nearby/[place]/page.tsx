import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import TravelHero from '@/components/TravelHero';
import { planFor } from '@/lib/nearby/planning';
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
  const plan = planFor(slug,place.area,locale);
  const map = mapsFor(place.mapName ?? (place.name + ", " + plan.address));
  const mapQuery = new URL(map).searchParams.get('query') ?? place.name;
  const related = places.filter((other) => other.area === place.area && other.slug !== slug).slice(0, 3);
  const url = alternatesFor(locale, `/${slug}`).canonical;
  const accessQuestion = {
    en: `What should I check before visiting ${title}?`,
    es: `¿Qué conviene consultar antes de visitar ${title}?`,
    zh: `到访${title}前需要确认哪些信息？`,
  };
  const labels = {
    en: { about: 'About', address: 'Address or approach', duration: 'Suggested visit', mapTitle: 'Map of', reviews: 'Find recent visitor reviews on Google Maps', photoCredit: 'Photograph and attribution', furtherReading: 'Further reading' },
    es: { about: 'Acerca de', address: 'Dirección o acceso', duration: 'Tiempo sugerido', mapTitle: 'Mapa de', reviews: 'Buscar reseñas recientes en Google Maps', photoCredit: 'Fotografía y créditos', furtherReading: 'Más información' },
    zh: { about: '关于', address: '地址或入口', duration: '建议停留', mapTitle: '地图', reviews: '在 Google 地图查看近期游客评价', photoCredit: '照片与署名', furtherReading: '延伸阅读' },
  }[locale];
  const photo = photos[slug];
  const ui = {
    en: {facts:'Visitor essentials',local:'Local name',kind:'Site type',hours:'Opening hours',fees:'Tickets and costs',trip:'On-site walking route',sleep:'Where to stay',reviews:'Visitor reviews',min:'minutes',short:'What should I prioritise at',image:'Where can I photograph',entrance:'Entrance and arrival',focus:'Main stop',return:'Return and viewpoint',open:'Visitor access'},
    es: {facts:'Datos para la visita',local:'Nombre local',kind:'Tipo de lugar',hours:'Horarios de apertura',fees:'Entradas y precios',trip:'Recorrido en el lugar',sleep:'Dónde alojarse',reviews:'Opiniones de visitantes',min:'minutos',short:'¿Qué conviene priorizar en',image:'¿Desde dónde se puede fotografiar',entrance:'Entrada y llegada',focus:'Parada principal',return:'Regreso y perspectiva',open:'Acceso de visitantes'},
    zh: {facts:'基础信息',local:'当地名称',kind:'景点类型',hours:'开放时间',fees:'门票与费用',trip:'分步游览路线',sleep:'住宿建议',reviews:'游客评价',min:'分钟',short:'时间有限时',image:'怎样拍摄',entrance:'抵达入口',focus:'核心看点',return:'回程与取景',open:'到访条件'}
  }[locale];
  const faq = [
    {question:(secondRoundQuestions[slug] ?? questions[slug])[locale],answer:place.answer[locale]},
    {question:locale==='zh'?`参观${title}时间有限，应优先看什么？`:`${ui.short} ${title}?`,answer:plan.walk},
    {question:locale==='zh'?`从哪里拍摄${title}比较合适？`:`${ui.image} ${title}?`,answer:place.photo[locale]},
    {question:accessQuestion[locale],answer:place.access[locale]},
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
      <Header/>
      <main className="text-[var(--text-primary)]">
        <TravelHero title={title} subtitle={place.history[locale]} photo={photo.file} alt={title}
          breadcrumb={<nav className="mb-4 flex flex-wrap gap-3 text-sm text-white/90"><a className="underline" href={`/${locale}`}>{t.beach}</a><a className="underline" href={`/${locale}/nearby`}>{t.directory}</a><span>{areaNames[place.area][locale]}</span></nav>}>
          <span>{place.duration?.[locale] ?? `${plan.minutes} ${ui.min}`}</span>
          <a className="rounded-full bg-white/15 px-4 py-2 underline" href={map}>{t.map}</a>
          <a className="underline" href={map}>{labels.reviews}</a>
          <p className="basis-full max-w-3xl font-normal">{ui.open} · {place.access[locale]}</p>
        </TravelHero>
        <article className="section-padding mx-auto max-w-4xl space-y-10 text-[var(--text-secondary)]">
          <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-7">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{locale === 'zh' ? `${labels.about}${title}` : `${labels.about} ${title}`}</h2>
            <p className="mt-3 leading-relaxed">{place.historyDetail?.[locale] ?? plan.walk}</p>
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
            <h3 className="mt-5 mb-3 font-semibold">{ui.facts}</h3>
            <table className="w-full text-sm"><tbody>{[
              [ui.local,place.name],[ui.kind,plan.type],[labels.address,plan.address+', Málaga, España'],
              [t.manager,place.manager?.[locale]??t.unverified],[labels.duration,place.duration?.[locale]??`${plan.minutes} ${ui.min}`]
            ].map(([label,value])=><tr className="border-b border-[var(--border-color)]" key={label}><th className="p-3 text-left align-top">{label}</th><td className="p-3">{value}</td></tr>)}</tbody></table>
            <h3 className="mt-5 font-semibold">{ui.hours}</h3><p className="mt-2">{plan.hours}</p>
            <h3 className="mt-5 font-semibold">{ui.fees}</h3><p className="mt-2">{plan.fee}</p>
            <h3 className="mb-2 mt-4 font-semibold text-[var(--text-primary)]">{t.route}</h3>
            <p className="leading-relaxed">{place.route[locale]}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{ui.trip}</h2>
            <ol className="mt-4 list-decimal space-y-4 pl-6">
              <li><strong>{ui.entrance}</strong> · {plan.address}, Málaga. {place.route[locale]}</li>
              <li><strong>{ui.focus}</strong> · {plan.walk}</li>
              <li><strong>{ui.return}</strong> · {place.photo[locale]}</li>
            </ol>
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
          <section><h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{ui.sleep}</h2><p className="mt-3">{plan.stay}</p></section>
          <section><h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">{ui.reviews}</h2><a className="mt-3 inline-block underline" href={map}>{labels.reviews} · {title}</a></section>
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
            {plan.official && <p className="mt-2"><a className="underline" href={plan.official}>{ui.hours} · {ui.fees}</a></p>}
            {place.furtherReading && (
              <p className="mt-2"><a className="underline" href={place.furtherReading}>{labels.furtherReading}</a></p>
            )}
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

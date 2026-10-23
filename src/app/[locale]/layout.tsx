import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

const BASE_URL = 'https://playalamalagueta.com';
const HERO_IMAGE = `${BASE_URL}/gallery/playa-la-malagueta%20(1).jpg`;
const DOMAIN_NAME = 'playalamalagueta.com';
const ATTRACTION_FULL_NAME = 'Playa de la Malagueta';
const ATTRACTION_SHORT_NAME = 'Playa la Malagueta';
const CITY_NAME = 'Málaga';
const STATE_PROVINCE = 'Andalucía';
const COUNTRY_NAME = 'Spain';
const COUNTRY_CODE_2LETTER = 'ES';
const POSTAL_CODE = '29016';
const LATITUDE = 36.7176651;
const LONGITUDE = -4.4082141;
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/hLbRvdwVPo37TgFq8';
const GOVT_TOURISM_URL = 'https://visita.malaga.eu/';
const NEARBY_LANDMARK_1 = 'Plaza de Toros de La Malagueta';
const NEARBY_LANDMARK_2 = 'Paseo Marítimo Pablo Ruiz Picasso';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const TITLES = {
  es: 'Playa de la Malagueta: cómo llegar, hamacas y dónde comer',
  en: 'Malagueta Beach, Málaga: Sunbeds, Food & Getting Here',
  zh: 'Playa de la Malagueta（马拉盖塔海滩）：交通、躺椅与餐饮指南',
};

const DESCRIPTIONS = {
  es: 'Guía práctica de Playa de la Malagueta en Málaga: cómo llegar desde el centro, el aeropuerto o el puerto de cruceros, alquiler de hamacas y sombrillas, duchas y servicios, dónde comer en los chiringuitos y qué ver cerca, como la Plaza de Toros y Muelle Uno.',
  en: 'Practical guide to Malagueta Beach in Málaga: how to get here from the centre, airport or cruise port, sunbed and umbrella rental, showers and facilities, where to eat at the chiringuitos, and what to see nearby such as the bullring and Muelle Uno.',
  zh: 'Playa de la Malagueta（马拉盖塔海滩）实用指南：如何从市中心、机场或邮轮港到达，躺椅与遮阳伞租赁，淋浴与设施，在海滩餐吧用餐，以及周边如斗牛场与 Muelle Uno 的景点。',
};

const OG_TITLES = {
  es: 'Playa de la Malagueta - Guía de playa en Málaga',
  en: 'Malagueta Beach - Málaga Beach Guide',
  zh: 'Playa de la Malagueta（马拉盖塔海滩）- 马拉加海滩指南',
};

const OG_DESCRIPTIONS = {
  es: 'Guía independiente de visita a Playa de la Malagueta en Málaga, Andalucía, España.',
  en: 'Independent visitor guide to Malagueta Beach in Málaga, Andalucía, Spain.',
  zh: '西班牙安达卢西亚马拉加 Playa de la Malagueta（马拉盖塔海滩）独立游览指南。',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = (locale === 'zh' || locale === 'en' || locale === 'es') ? locale : 'en';

  const zhUrl = `${BASE_URL}/zh`;
  const enUrl = `${BASE_URL}/en`;
  const esUrl = `${BASE_URL}/es`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : esUrl;

  return {
    metadataBase: new URL(BASE_URL),
    title: TITLES[localeKey],
    description: DESCRIPTIONS[localeKey],
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'es': esUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: OG_TITLES[localeKey],
      description: OG_DESCRIPTIONS[localeKey],
      url: selfUrl,
      siteName: 'Playa la Malagueta',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'en' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [
        {
          url: HERO_IMAGE,
          alt: `Playa de la Malagueta - Main view in ${CITY_NAME}, ${COUNTRY_NAME}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: OG_TITLES[localeKey],
      description: OG_DESCRIPTIONS[localeKey],
      images: [HERO_IMAGE],
    },
  };
}

const FAQ_ENTITIES = {
  es: [
    {
      name: '¿Dónde se encuentra Playa de la Malagueta?',
      text: 'Playa de la Malagueta se encuentra en Málaga, Andalucía, España, en el P.º Marítimo Pablo Ruiz Picasso, código postal 29016.',
    },
    {
      name: '¿Es gratuita la visita a Playa la Malagueta?',
      text: 'Sí, Playa de la Malagueta es un espacio público y su acceso es gratuito durante todo el año.',
    },
    {
      name: '¿Qué servicios ofrece Playa de la Malagueta?',
      text: 'Playa de la Malagueta cuenta con aseos, duchas, alquiler de hamacas y sombrillas, servicio de salvamento (en temporada estival), zonas infantiles, acceso para personas con movilidad reducida y restauración en los chiringuitos de la playa.',
    },
  ],
  en: [
    {
      name: 'Where is Playa de la Malagueta located?',
      text: 'Playa de la Malagueta is located in Málaga, Andalucía, Spain, at P.º Marítimo Pablo Ruiz Picasso, postal code 29016.',
    },
    {
      name: 'Is Playa la Malagueta free to visit?',
      text: 'Yes, Playa de la Malagueta is a public space and is free to visit year-round.',
    },
    {
      name: 'What facilities does Playa de la Malagueta offer?',
      text: 'Playa de la Malagueta features public toilets, showers, sun lounger and umbrella rental, lifeguard service (in the summer season), children\'s play areas, accessible access for people with reduced mobility, and dining at the beach chiringuitos.',
    },
  ],
  zh: [
    {
      name: 'Playa de la Malagueta（马拉盖塔海滩）位于哪里？',
      text: 'Playa de la Malagueta（马拉盖塔海滩）位于西班牙安达卢西亚自治区马拉加市，地址为P.º Marítimo Pablo Ruiz Picasso，邮编29016。',
    },
    {
      name: '游览Playa la Malagueta（马拉盖塔海滩）是否免费？',
      text: '是的，Playa de la Malagueta（马拉盖塔海滩）是公共场所，全年免费开放。',
    },
    {
      name: 'Playa de la Malagueta（马拉盖塔海滩）提供哪些设施？',
      text: 'Playa de la Malagueta设有公共厕所、淋浴室、躺椅和遮阳伞租赁、救生员服务（夏季）、儿童游乐区、无障碍通道，以及海滩餐吧（chiringuitos）餐饮服务。',
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const localeKey = (locale === 'zh' || locale === 'en' || locale === 'es') ? locale : 'en';
  const faqItems = FAQ_ENTITIES[localeKey];
  const selfUrl = locale === 'zh' ? `${BASE_URL}/zh` : locale === 'en' ? `${BASE_URL}/en` : `${BASE_URL}/es`;

  const touristAttractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${BASE_URL}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [ATTRACTION_SHORT_NAME, `${CITY_NAME} ${ATTRACTION_FULL_NAME}`, '拉马拉格塔海滩', '马拉盖塔海滩'],
    description: DESCRIPTIONS[localeKey],
    url: selfUrl,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    publicAccess: true,
    telephone: '+34951926020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P.º Marítimo Pablo Ruiz Picasso',
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [
      MAPS_SHARE_URL,
      GOVT_TOURISM_URL,
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Public Toilets',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Showers',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Lifeguard',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wheelchair Accessible',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Sun loungers and umbrellas rental',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Children\'s Playground',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item: { name: string; text: string }) => ({
      '@type': 'Question',
      name: item.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.text,
      },
    })),
  };

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale === 'es' ? 'es-ES' : 'en'} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

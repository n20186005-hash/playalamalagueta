import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NearbyDirectory from '@/components/NearbyDirectory';
import { alternatesFor, isLocale, nearbyText } from '@/lib/nearby/directory';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { title, description } = nearbyText[locale];
  const alternates = alternatesFor(locale, '');
  return { title, description, keywords: [title, nearbyText[locale].beach, 'Málaga'], alternates, openGraph: { title, description, url: alternates.canonical, type: 'website' } };
}

export default async function NearbyIndex({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  return (
    <>
      <Header solid />
      <main className="pt-16">
        <NearbyDirectory locale={locale} />
      </main>
      <Footer />
    </>
  );
}

import { useTranslations } from 'next-intl';
import TravelHero from './TravelHero';

export default function Hero() {
  const t = useTranslations('hero');
  const map = useTranslations('mapSection');
  return <TravelHero title={t('title')} subtitle={t('subtitle')} photo="/gallery/playa-la-malagueta (1).jpg" alt={t('title')}>
    <span>{t('type')}</span>
    <a href={map('mapUrl')} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/15 px-4 py-2 underline">{t('openMaps')}</a>
  </TravelHero>;
}

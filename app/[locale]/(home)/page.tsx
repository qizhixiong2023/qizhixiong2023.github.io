import { type Locale } from '@/i18n/config';
import { HeroSection } from './_components/hero-section';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <HeroSection locale={locale} />;
}

import { HeroSection } from '@/components/home/hero-section';
import { type Locale } from '@/i18n/config';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div>
      <HeroSection locale={locale} />
    </div>
  );
}

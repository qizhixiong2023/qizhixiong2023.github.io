import { getTranslations } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

export async function HeroSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
          {t('subtitle')}
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t('greeting')}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">{t('description')}</p>
      </div>
    </section>
  );
}

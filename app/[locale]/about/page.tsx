import { getTranslations, setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t('title')}</h1>
      <div className="prose prose-gray max-w-none dark:prose-invert">
        <p className="text-lg leading-relaxed text-muted-foreground">{t('content')}</p>
      </div>
    </div>
  );
}

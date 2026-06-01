import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
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

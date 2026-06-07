import { Blocks, Rocket } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { Card, CardContent } from '@/components/ui/card';
import { type Locale } from '@/i18n/config';

const sectionTitleClassName =
  'text-center font-serif text-4xl leading-none font-semibold tracking-normal text-foreground sm:text-5xl';
const learningCardClassName =
  'mx-auto mt-12 max-w-2xl rounded-3xl py-0 text-center shadow-[0_24px_70px_rgb(120_120_140_/_0.08)] ring-0 sm:mt-14';
const learningContentClassName =
  'flex min-h-[26rem] flex-col items-center justify-center px-8 py-14 sm:min-h-[32rem] sm:px-12';
const learningTagClassName =
  'mt-10 inline-flex items-center gap-3 rounded-2xl border border-border bg-background/60 px-8 py-5 font-mono text-base text-primary shadow-[0_12px_30px_rgb(120_120_140_/_0.06)] sm:text-lg';

export async function ContinuousLearningSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home.learning' });

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className={sectionTitleClassName}>{t('title')}</h2>

        <Card className={learningCardClassName}>
          <CardContent className={learningContentClassName}>
            <Rocket className="h-20 w-20 text-[oklch(0.62_0.16_18)]" />

            <h3 className="mt-14 font-serif text-3xl leading-tight font-semibold tracking-normal text-foreground sm:text-4xl">
              {t('cardTitle')}
            </h3>
            <p className="mt-7 text-base leading-8 text-muted-foreground sm:text-lg">
              {t('description')}
            </p>

            <div className={learningTagClassName}>
              <Blocks className="h-5 w-5 text-[oklch(0.66_0.15_155)]" />
              <span>{t('tag')}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

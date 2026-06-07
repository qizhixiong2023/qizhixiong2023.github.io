import { getTranslations } from 'next-intl/server';

import { type Locale } from '@/i18n/config';
import { TechStackCloud } from './tech-stack-cloud';

const sectionTitleClassName =
  'font-serif text-4xl leading-none font-semibold tracking-normal text-foreground sm:text-5xl';

export async function TechStackSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home.techStack' });

  return (
    <section className="py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
            <h2 className={sectionTitleClassName}>{t('title')}</h2>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {t('description')}
            </p>
          </div>

          <TechStackCloud />
        </div>
      </div>
    </section>
  );
}

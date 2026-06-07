import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { type Locale } from '@/i18n/config';
import { GITHUB_URL, SITE_NAME } from '@/lib/constants';

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <footer className="border-t border-border/70 py-10 sm:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 rounded-3xl border border-border/70 bg-card/58 px-6 py-7 shadow-[0_20px_60px_rgb(120_120_140_/_0.07)] sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-serif text-3xl font-semibold tracking-normal text-foreground">
              {SITE_NAME}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {t('description')}
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <Link
              href={`/${locale}`}
              className="rounded-full border border-border bg-background/50 px-4 py-2 transition-colors hover:text-primary"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="rounded-full border border-border bg-background/50 px-4 py-2 transition-colors hover:text-primary"
            >
              {t('about')}
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-background/50 px-4 py-2 transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

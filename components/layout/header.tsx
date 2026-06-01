import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { SITE_NAME, GITHUB_URL } from '@/lib/constants';
import { LanguageSwitcher } from './language-switcher';

export async function Header({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'nav' });

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href={`/${locale}`} className="text-xl font-bold">
          {SITE_NAME}
        </Link>
        <div className="flex items-center gap-6">
          <Link href={`/${locale}`} className="text-sm hover:text-primary">
            {t('home')}
          </Link>
          <Link href={`/${locale}/about`} className="text-sm hover:text-primary">
            {t('about')}
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary"
          >
            GitHub
          </a>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}

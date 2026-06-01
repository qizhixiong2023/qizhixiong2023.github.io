import { getTranslations } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
        <p>© 2026 aliu. {t('builtWith')}</p>
      </div>
    </footer>
  );
}

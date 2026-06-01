'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { locales } from '@/i18n/config';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const currentLocale = pathname.split('/')[1] || 'zh';

  const switchLocale = (newLocale: string) => {
    if (currentLocale === newLocale) return;

    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="flex gap-2" role="group" aria-label="Language switcher">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          disabled={isPending || currentLocale === locale}
          aria-current={currentLocale === locale ? 'true' : undefined}
          className={cn(
            'text-sm transition-colors disabled:opacity-50',
            currentLocale === locale
              ? 'font-bold text-primary'
              : 'text-muted-foreground hover:text-primary'
          )}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

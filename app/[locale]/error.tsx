'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold">{t('title')}</h2>
      <p className="mb-8 text-lg text-muted-foreground">{t('description')}</p>
      <Button onClick={reset}>{t('retry')}</Button>
    </div>
  );
}

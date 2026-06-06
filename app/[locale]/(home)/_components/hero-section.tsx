import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { type Locale } from '@/i18n/config';
import { GITHUB_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

export async function HeroSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home.hero' });

  return (
    <section className="overflow-hidden border-b bg-background/20 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="home-hero-text">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-primary">
            {t('eyebrow')}
          </p>
          <h1 className="max-w-[9ch] font-serif text-5xl leading-[1.04] font-semibold tracking-normal text-foreground sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            {t('title')}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {t('description')}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 rounded-full border-border bg-card/60 px-5 text-base hover:bg-accent/70'
              )}
            >
              GitHub
            </a>
            <a
              href="#"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 rounded-full border-border bg-card/60 px-5 text-base hover:bg-accent/70'
              )}
            >
              Gitee
            </a>
            <Link
              href={`/${locale}/about`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 rounded-full border-border bg-card/60 px-5 text-base hover:bg-accent/70'
              )}
            >
              {t('blog')}
            </Link>
          </div>
        </div>

        <div className="home-hero-cards grid grid-cols-1 gap-4 sm:grid-cols-[1.08fr_0.82fr]">
          <Card className="min-h-[24rem] rounded-[2rem] border-white/80 bg-card/80 py-8 shadow-[0_24px_70px_rgb(120_120_140_/_0.11)] sm:row-span-2 sm:rotate-[-1.5deg]">
            <CardContent className="px-7">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Identity
              </p>
              <h2 className="max-w-[9ch] font-serif text-4xl leading-tight tracking-normal text-foreground sm:text-5xl">
                {t('identity')}
              </h2>
            </CardContent>
          </Card>

          <Card className="min-h-48 rounded-[1.8rem] border-white/80 bg-[oklch(0.9_0.025_145_/_0.56)] py-6 shadow-[0_18px_55px_rgb(120_120_140_/_0.1)] sm:rotate-[1.8deg]">
            <CardContent className="px-6">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Current focus
              </p>
              <div className="space-y-4">
                <span className="block h-3 w-4/5 rounded-full bg-muted-foreground/8" />
                <span className="block h-3 w-3/5 rounded-full bg-muted-foreground/8" />
                <span className="block h-3 w-[88%] rounded-full bg-muted-foreground/8" />
              </div>
            </CardContent>
          </Card>

          <Card className="min-h-48 rounded-[1.8rem] border-white/80 bg-[oklch(0.92_0.02_295_/_0.55)] py-6 shadow-[0_18px_55px_rgb(120_120_140_/_0.1)] sm:rotate-[-1deg]">
            <CardContent className="px-6">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Direction
              </p>
              <p className="text-lg leading-8 text-muted-foreground">{t('direction')}</p>
            </CardContent>
          </Card>

          <Card className="rounded-[1.7rem] border-white/80 bg-[oklch(0.92_0.02_235_/_0.45)] py-5 shadow-[0_18px_55px_rgb(120_120_140_/_0.1)] sm:col-span-2">
            <CardContent className="flex flex-col gap-4 px-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Now learning
                </p>
                <p className="text-base leading-7 text-muted-foreground">{t('learning')}</p>
              </div>
              <p className="font-serif text-3xl text-foreground">Next.js</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

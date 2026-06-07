import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { buttonVariants } from '@/components/ui/button';
import { DiaTextReveal } from '@/components/ui/dia-text-reveal';
import { type Locale } from '@/i18n/config';
import { GITHUB_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

const heroButtonClassName = 'h-16 rounded-2xl px-6 text-base';
const secondaryButtonClassName = cn(
  heroButtonClassName,
  'border-border bg-card/70 hover:bg-accent/70'
);

export async function HeroSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home.hero' });

  return (
    <section className="overflow-hidden bg-background/20 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <div className="home-hero-text mx-auto flex max-w-5xl flex-col items-center">
          <p className="mb-8 rounded-full border border-border bg-card/55 px-5 py-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground shadow-[0_14px_40px_rgb(120_120_140_/_0.07)]">
            <AnimatedShinyText shimmerWidth={120}>{t('eyebrow')}</AnimatedShinyText>
          </p>
          <h1 className="max-w-5xl font-serif text-5xl leading-[1.05] font-semibold tracking-normal text-foreground sm:text-6xl md:text-7xl lg:text-[5.8rem]">
            <DiaTextReveal
              repeat
              repeatDelay={5}
              text={t('title')}
              colors={['#A97CF8', '#F38CB8', '#FDCC92']}
            />
          </h1>
          <p className="mt-8 max-w-4xl text-balance font-mono text-base leading-8 text-muted-foreground sm:text-lg md:text-xl">
            {t('description')}
          </p>
          <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                heroButtonClassName,
                'bg-primary shadow-[0_16px_40px_rgb(120_80_70_/_0.18)] hover:bg-primary/90'
              )}
            >
              GitHub
            </a>
            <a
              href="#"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                secondaryButtonClassName
              )}
            >
              Gitee
            </a>
            <Link
              href={`/${locale}/about`}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                secondaryButtonClassName
              )}
            >
              {t('blog')}
            </Link>
          </div>
          <p className="mt-8 text-sm leading-7 text-muted-foreground">{t('identity')}</p>
        </div>
      </div>
    </section>
  );
}

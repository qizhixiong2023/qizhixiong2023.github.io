import { ClipboardCheck, ShoppingCart } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { Card } from '@/components/ui/card';
import { type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

const sectionTitleClassName =
  'text-center font-serif text-4xl leading-none font-semibold tracking-normal text-foreground sm:text-5xl';
const slideClassName =
  'opacity-0 transition-all duration-[1200ms] ease-out will-change-transform group-hover/projects:translate-x-0 group-hover/projects:opacity-100';
const imageCardClassName =
  'flex aspect-[1.18] items-center justify-center rounded-3xl py-0 shadow-[0_24px_70px_rgb(120_120_140_/_0.11)] ring-0';
const tagClassName =
  'rounded-2xl border border-border bg-card/72 px-5 py-3 font-mono text-sm text-foreground shadow-[0_12px_30px_rgb(120_120_140_/_0.06)]';

const projectStyles = [
  {
    Icon: ClipboardCheck,
    imageClassName:
      'bg-[radial-gradient(circle_at_25%_20%,oklch(0.93_0.035_220),transparent_34%),white]',
    iconClassName: 'text-[oklch(0.55_0.08_230)]',
  },
  {
    Icon: ShoppingCart,
    imageClassName:
      'bg-[radial-gradient(circle_at_78%_28%,oklch(0.92_0.05_32),transparent_36%),white]',
    iconClassName: 'text-[oklch(0.58_0.1_28)]',
  },
] as const;

export async function ProjectExperienceSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home.projects' });
  const projects = t.raw('items') as ProjectItem[];

  return (
    <section className="group/projects overflow-x-clip py-10 sm:py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className={sectionTitleClassName}>{t('title')}</h2>

        <div className="mt-12 space-y-14 sm:mt-16 lg:space-y-12">
          {projects.map((project, index) => {
            const style = projectStyles[index % projectStyles.length];
            const Icon = style.Icon;
            const isReversed = index % 2 === 1;
            const slideFromClassName = isReversed
              ? '-translate-x-[min(58vw,42rem)]'
              : 'translate-x-[min(58vw,42rem)]';

            return (
              <article
                key={project.title}
                className={cn(
                  'grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14',
                  isReversed && 'lg:[&>*:first-child]:order-2'
                )}
              >
                <Card
                  className={cn(
                    imageCardClassName,
                    slideFromClassName,
                    slideClassName,
                    style.imageClassName
                  )}
                >
                  <Icon className={cn('h-20 w-20 stroke-[1.6]', style.iconClassName)} />
                </Card>

                <div className={cn(slideClassName, slideFromClassName, 'lg:px-2')}>
                  <h3 className="font-serif text-3xl leading-tight font-semibold tracking-normal text-foreground sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className={tagClassName}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

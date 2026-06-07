import { type Locale } from '@/i18n/config';
import { ContinuousLearningSection } from './_components/continuous-learning-section';
import { HeroSection } from './_components/hero-section';
import { ProjectExperienceSection } from './_components/project-experience-section';
import { TechStackSection } from './_components/tech-stack-section';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <HeroSection locale={locale} />
      <TechStackSection locale={locale} />
      <ProjectExperienceSection locale={locale} />
      <ContinuousLearningSection locale={locale} />
    </>
  );
}

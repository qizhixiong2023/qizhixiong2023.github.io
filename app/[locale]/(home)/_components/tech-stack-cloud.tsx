'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const techItems = [
  { name: 'Next.js', className: 'left-[4%] top-[18%] bg-white/76' },
  { name: 'React', className: 'left-[24%] top-[5%] bg-[oklch(0.92_0.04_38_/_0.82)]' },
  { name: 'Vue.js', className: 'left-[50%] top-[16%] bg-white/78' },
  { name: 'TypeScript', className: 'right-[8%] top-[8%] bg-[oklch(0.96_0.012_185_/_0.75)]' },
  { name: 'JavaScript', className: 'left-[12%] top-[42%] bg-white/76' },
  { name: 'Node.js', className: 'left-[38%] top-[39%] bg-white/78' },
  { name: 'Java', className: 'right-[20%] top-[32%] bg-[oklch(0.94_0.018_285_/_0.78)]' },
  { name: 'Spring', className: 'left-[22%] top-[68%] bg-white/74' },
  { name: 'MySQL', className: 'left-[52%] top-[73%] bg-white/78' },
  { name: 'PostgreSQL', className: 'right-[4%] top-[66%] bg-white/78' },
  { name: 'Git', className: 'left-[8%] top-[86%] bg-[oklch(0.96_0.012_160_/_0.75)]' },
  { name: 'Axure', className: 'right-[27%] top-[86%] bg-white/74' },
] as const;

export function TechStackCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className={cn(
          'tech-stack-space relative mt-12 hidden h-[22rem] overflow-hidden rounded-[2rem] sm:block',
          isActive && 'tech-stack-space-active'
        )}
      >
        {techItems.map((item) => (
          <span
            key={item.name}
            className={`tech-stack-star absolute rounded-full border border-white/70 px-6 py-3 text-lg text-foreground ${item.className}`}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div
        className={cn(
          'mt-10 flex flex-wrap gap-3 sm:hidden',
          isActive && 'tech-stack-space-active'
        )}
      >
        {techItems.map((item) => (
          <span
            key={item.name}
            className="tech-stack-star rounded-full border border-white/70 bg-white/76 px-4 py-2 text-base text-foreground"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

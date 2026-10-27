import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  id,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-start max-w-2xl',
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C59B27]/10 text-[#785404] border border-[#C59B27]/20 mb-3.5 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" aria-hidden="true" />
          <span>{badge}</span>
        </div>
      )}
      <h2
        id={id}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#5E6672] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

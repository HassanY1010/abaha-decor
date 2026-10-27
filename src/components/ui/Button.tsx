import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  icon,
  iconPosition = 'start',
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary:
      'bg-[#111827] text-white hover:bg-[#1F2937] focus-visible:outline-[#111827] shadow-sm',
    accent:
      'bg-[#C59B27] text-white hover:bg-[#AD851D] focus-visible:outline-[#C59B27] shadow-sm',
    secondary:
      'bg-[#F3F1EC] text-[#181C20] hover:bg-[#EAE6DF] focus-visible:outline-[#181C20]',
    outline:
      'border border-[#E5E2DA] bg-white text-[#181C20] hover:bg-[#FAF9F6] hover:border-[#CBD5E1] focus-visible:outline-[#111827]',
    ghost:
      'text-[#181C20] hover:bg-[#F3F1EC] focus-visible:outline-[#111827]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'start' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal || href.startsWith('https://wa.me') ? '_blank' : undefined}
          rel={isExternal || href.startsWith('https://wa.me') ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

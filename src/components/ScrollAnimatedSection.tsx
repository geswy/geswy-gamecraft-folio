import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'fade-in' | 'scale-in';
}

const ScrollAnimatedSection = ({ 
  children, 
  className, 
  delay = 0, 
  animation = 'slide-up' 
}: ScrollAnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    'slide-up': 'translate-y-8',
    'slide-left': 'translate-x-8',
    'slide-right': '-translate-x-8',
    'fade-in': 'translate-y-4',
    'scale-in': 'scale-95'
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-700 ease-out',
        !isVisible && `opacity-0 ${animationClasses[animation]}`,
        isVisible && 'opacity-100 translate-x-0 translate-y-0 scale-100',
        className
      )}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms' 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;
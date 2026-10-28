import React, { useEffect, useRef, useState, useCallback } from 'react';

interface StatCounterCardProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  textColor: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
  duration?: number;
  icon?: React.ReactNode;
}

export const StatCounterCard: React.FC<StatCounterCardProps> = ({
  target,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  textColor,
  accentColor,
  gradientFrom,
  gradientTo,
  delay = 0,
  duration = 1800,
  icon,
}) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(target);
      setIsFinished(true);
      return;
    }

    setIsFinished(false);
    let startTime: number | null = null;

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Smooth quartic ease-out curve
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * target);

        setCount(currentCount);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(step);
        } else {
          setCount(target);
          setIsFinished(true);
        }
      };

      animationFrameRef.current = requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [target, duration, delay]);

  // Observer to trigger count-up on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [startAnimation]);

  // Re-trigger on hover for delightful interactive feel
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    startAnimation();
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className={`group relative bg-white rounded-2xl border border-slate-200/90 p-4 text-center cursor-pointer transition-all duration-300 ease-out select-none overflow-hidden
        ${isHovered ? '-translate-y-1.5 shadow-xl border-blue-300' : 'shadow-sm hover:shadow-md'}
      `}
    >
      {/* Top ambient color bar that expands on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} transition-all duration-300 ${
          isHovered ? 'h-1.5 opacity-100' : 'opacity-70'
        }`}
      />

      {/* Subtle background light sheen on hover */}
      <div
        className={`absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 transition-all duration-1000 pointer-events-none ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}
      />

      {/* Counter number with kinetic scale pop when finished */}
      <div className="relative flex items-center justify-center">
        <span
          className={`text-2xl sm:text-3xl font-black block font-heading tracking-tight transition-transform duration-300 ${
            isFinished ? 'scale-100' : 'scale-95'
          } ${isHovered ? 'scale-105' : ''}`}
          style={{ color: textColor }}
        >
          {prefix}
          {count}
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 ml-0.5">
            {suffix}
          </span>
        </span>

        {/* Subtle pulsing live indicator on hover */}
        <span
          className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-opacity duration-300 ${
            isHovered ? 'opacity-100 animate-ping' : 'opacity-0'
          }`}
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Label */}
      <span className="text-xs font-bold text-slate-600 mt-1 block font-subheading group-hover:text-slate-900 transition-colors">
        {label}
      </span>

      {sublabel && (
        <span className="text-[10px] text-slate-400 mt-0.5 block">
          {sublabel}
        </span>
      )}
    </div>
  );
};

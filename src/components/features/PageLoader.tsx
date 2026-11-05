'use client';

import { useEffect, useState } from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import { useLoading } from '@/contexts/LoadingContext';

export function PageLoader() {
  const { isLoading, setLoading } = useLoading();
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = '#111827';

    let loadTimer: ReturnType<typeof setTimeout> | undefined;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

    const cleanup = () => {
      clearTimeout(loadTimer);
      clearTimeout(exitTimer);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = '';
    };

    const MIN_DISPLAY_TIME = 500;
    const EXIT_DURATION = 400;

    const finish = () => {
      loadTimer = setTimeout(() => {
        setIsExiting(true);
        exitTimer = setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
          setTimeout(() => { document.body.style.backgroundColor = ''; }, 500);
        }, EXIT_DURATION);
      }, MIN_DISPLAY_TIME);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      fallbackTimer = setTimeout(finish, MIN_DISPLAY_TIME + 1000);
      return () => {
        window.removeEventListener('load', finish);
        cleanup();
      };
    }

    return cleanup;
  }, [setLoading, isMounted]);

  if (!isMounted || !isLoading) return null;

  const letters = COMPANY_INFO.name.split('');

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-700 to-amber-900"
      style={{
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 0.4s ease-in-out',
        backgroundColor: '#111827',
        pointerEvents: isLoading ? 'auto' : 'none',
      }}
    >
      <style>{`
        @keyframes loaderLetterDrop {
          from { opacity: 0; transform: translateY(-50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderDotPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%       { transform: scale(1.5); opacity: 1; }
        }
        @keyframes loaderFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <div className="text-center px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8 flex-wrap gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2">
          {letters.map((char, index) => (
            <span
              key={index}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white"
              style={{
                opacity: 0,
                animation: `loaderLetterDrop 0.25s ease forwards`,
                animationDelay: `${index * 0.03}s`,
              }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </div>

        <div className="flex justify-center space-x-1.5 sm:space-x-2 md:space-x-2.5">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-amber-500 rounded-full"
              style={{
                animation: `loaderDotPulse 1s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
        </div>

        <p
          className="mt-4 sm:mt-5 md:mt-6 text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wider"
          style={{ animation: 'loaderFadeIn 0.5s ease 0.8s both' }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}

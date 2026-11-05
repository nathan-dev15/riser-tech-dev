'use client';

import { useLoading } from '@/contexts/LoadingContext';
import { ReactNode, useEffect, useRef } from 'react';

export function LoadingContent({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!isLoading) {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
    }
  }, [isLoading]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.4s ease-in-out',
        minHeight: '100vh',
        backgroundColor: 'var(--background, #f9fafb)',
      }}
    >
      {children}
    </div>
  );
}

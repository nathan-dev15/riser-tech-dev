'use client';

import { LoadingProvider } from '@/contexts/LoadingContext';
import { PageLoader } from '@/components/features/PageLoader';
import { LoadingContent } from '@/components/features/LoadingContent';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { VisitorTracker } from '@/components/features/VisitorTracker';
import { CookieConsent } from '@/components/features/CookieConsent';
import { ScrollToTop } from '@/components/features/ScrollToTop';
import { CustomCursor } from '@/components/features/CustomCursor';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <LoadingProvider>
        <PageLoader />
        <CustomCursor />
        <LoadingContent>
          <ErrorBoundary>
            <VisitorTracker />
          </ErrorBoundary>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:font-semibold focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieConsent />
          <ScrollToTop />
        </LoadingContent>
      </LoadingProvider>
    </ErrorBoundary>
  );
}


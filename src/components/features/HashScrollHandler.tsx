'use client';

import { useEffect } from 'react';

export function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const offsetPosition =
          element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 300);
  }, []);

  return null;
}

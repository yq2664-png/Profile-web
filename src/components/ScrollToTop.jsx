import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resetScrollInstant } from '../utils/resetScroll';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    resetScrollInstant();

    const raf = requestAnimationFrame(() => {
      resetScrollInstant();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}

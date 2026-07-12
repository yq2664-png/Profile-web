import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function resetScrollInstant() {
  const { documentElement: html, body } = document;
  const prev = html.style.scrollBehavior;

  html.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  body.scrollTop = 0;
  html.style.scrollBehavior = prev;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    resetScrollInstant();
  }, [pathname]);

  return null;
}

import { useEffect } from 'react';

export function useHeroReveal() {
  useEffect(() => {
    const heroReveals = document.querySelectorAll('.hero-reveal');
    const heroLines = document.querySelectorAll('.reveal-line');
    const NAV_ZONE = 96;

    const update = () => {
      const vh = window.innerHeight;

      heroReveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < vh * 0.88) el.classList.add('in');
        else if (top > vh) el.classList.remove('in');
      });

      heroLines.forEach((line) => {
        const top = line.getBoundingClientRect().top;
        line.classList.toggle('in', top < vh * 0.92 && top > NAV_ZONE);
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
}

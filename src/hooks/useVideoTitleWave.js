import { useEffect, useRef } from 'react';

export function useVideoTitleWave() {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const OPSZ = 40;
    const BASE = 480;
    const AMP = 320;
    const LIFT = 4;
    const SPEED = 0.0021;
    const PHASE = 0.55;

    const nodes = Array.from(title.childNodes);
    const fullText = nodes
      .map((n) => (n.nodeName === 'BR' ? ' ' : n.textContent))
      .join('')
      .replace(/\s+/g, ' ')
      .trim();

    title.setAttribute('aria-label', fullText);
    title.innerHTML = '';

    nodes.forEach((node) => {
      if (node.nodeName === 'BR') {
        title.appendChild(document.createElement('br'));
        return;
      }
      for (const ch of node.textContent) {
        if (ch === ' ') {
          title.appendChild(document.createTextNode(' '));
          continue;
        }
        const span = document.createElement('span');
        span.className = 'vp-char';
        span.setAttribute('aria-hidden', 'true');
        span.textContent = ch;
        title.appendChild(span);
      }
    });

    const chars = Array.from(title.querySelectorAll('.vp-char'));
    let paused = false;
    let raf = null;

    const frame = (t) => {
      for (let i = 0; i < chars.length; i += 1) {
        const ph = t * SPEED + i * PHASE;
        const w = Math.round(BASE + AMP * Math.sin(ph));
        const y = (LIFT * Math.sin(ph)).toFixed(2);
        chars[i].style.fontVariationSettings = `'wght' ${w}, 'opsz' ${OPSZ}`;
        chars[i].style.transform = `translateY(${y}px)`;
      }
      raf = paused ? null : requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      if (paused) {
        paused = false;
        if (!raf) raf = requestAnimationFrame(frame);
      }
    };

    title.addEventListener('pointerenter', onEnter);
    title.addEventListener('pointerleave', onLeave);

    return () => {
      title.removeEventListener('pointerenter', onEnter);
      title.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return titleRef;
}

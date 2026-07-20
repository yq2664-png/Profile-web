import { useEffect, useState } from 'react';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

function normalizeImageSrc(src) {
  if (!src) return '';

  try {
    return decodeURIComponent(new URL(src, window.location.origin).pathname);
  } catch {
    return decodeURIComponent(src.split('?')[0]);
  }
}

function findImageIndex(images, src) {
  const target = normalizeImageSrc(src);
  return images.findIndex((item) => normalizeImageSrc(item.src) === target);
}

export function useProjectMediaLightbox(images, selector, { manageBodyScroll = true } = {}) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const img = e.target.closest(selector);
      if (!img) return;

      const index = findImageIndex(images, img.getAttribute('src') ?? '');
      if (index < 0) return;

      e.stopPropagation();
      setLightbox({ index, items: images });
      if (manageBodyScroll) {
        lockBodyScroll();
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [images, manageBodyScroll, selector]);

  useEffect(() => {
    if (!lightbox) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setLightbox(null);
        if (manageBodyScroll) {
          unlockBodyScroll();
        }
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((lb) => ({
          ...lb,
          index: (lb.index - 1 + lb.items.length) % lb.items.length,
        }));
      }
      if (e.key === 'ArrowRight') {
        setLightbox((lb) => ({
          ...lb,
          index: (lb.index + 1) % lb.items.length,
        }));
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, manageBodyScroll]);

  const closeLightbox = () => {
    setLightbox(null);
    if (manageBodyScroll) {
      unlockBodyScroll();
    }
  };

  const stepLightbox = (dir) => {
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index + dir + lb.items.length) % lb.items.length,
    }));
  };

  const activeImage = lightbox ? lightbox.items[lightbox.index] : null;

  return { lightbox, closeLightbox, stepLightbox, activeImage };
}

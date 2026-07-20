import { useCallback, useLayoutEffect, useRef } from 'react';

const GAP_STEPS = [72, 56, 40, 32, 24, 16];
const CLOSE_GAP_STEPS = [48, 32, 24, 16];
const PADDING_STEPS = [72, 56, 40, 32, 24, 16];
const FRAME_VH_STEPS = [32, 28, 24, 20, 16, 12];

function resetLayoutVars(page) {
  page.style.removeProperty('--bio-detail-copy-gap');
  page.style.removeProperty('--bio-detail-close-gap');
  page.style.removeProperty('--bio-detail-padding-y');
  page.style.removeProperty('--bio-detail-gallery-vh');
}

function applyLayoutVars(page, { gap, closeGap, paddingY, frameVh }) {
  page.style.setProperty('--bio-detail-copy-gap', `${gap}px`);
  page.style.setProperty('--bio-detail-close-gap', `${closeGap}px`);
  page.style.setProperty('--bio-detail-padding-y', `${paddingY}px`);
  page.style.setProperty('--bio-detail-gallery-vh', `${frameVh}vh`);
}

function panelFits(detail, panel) {
  const styles = getComputedStyle(detail);
  const paddingY = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  return panel.scrollHeight <= detail.clientHeight - paddingY + 1;
}

export function useBioDetailLayoutFit(isActive, detailKey = '') {
  const pageRef = useRef(null);
  const detailRef = useRef(null);
  const panelRef = useRef(null);

  const fitLayout = useCallback(() => {
    const page = pageRef.current;
    const detail = detailRef.current;
    const panel = panelRef.current;

    if (!page || !detail || !panel || !isActive) {
      return;
    }

    for (const frameVh of FRAME_VH_STEPS) {
      for (const paddingY of PADDING_STEPS) {
        for (const gap of GAP_STEPS) {
          for (const closeGap of CLOSE_GAP_STEPS) {
            applyLayoutVars(page, { gap, closeGap, paddingY, frameVh });
            if (panelFits(detail, panel)) {
              return;
            }
          }
        }
      }
    }
  }, [isActive]);

  useLayoutEffect(() => {
    const page = pageRef.current;
    const detail = detailRef.current;
    const panel = panelRef.current;

    if (!isActive) {
      if (page) {
        resetLayoutVars(page);
      }
      return undefined;
    }

    fitLayout();

    const rafId = requestAnimationFrame(() => {
      fitLayout();
      requestAnimationFrame(fitLayout);
    });

    const observer = new ResizeObserver(fitLayout);
    if (detail) {
      observer.observe(detail);
    }
    if (panel) {
      observer.observe(panel);
    }

    window.addEventListener('resize', fitLayout);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', fitLayout);
      if (page) {
        resetLayoutVars(page);
      }
    };
  }, [isActive, detailKey, fitLayout]);

  return { pageRef, detailRef, panelRef, fitLayout };
}

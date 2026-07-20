import { useEffect, useRef, useState } from 'react';

/**
 * Defers video download until near the viewport, then autoplays when visible.
 * Above-the-fold videos load immediately; below-the-fold ones wait until scroll.
 */
export default function AutoplayVideo({
  src,
  poster,
  className,
  controls = false,
  rootMargin = '320px',
  type = 'video/mp4',
}) {
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setActive(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const video = videoRef.current;
    if (!active || !video) return undefined;

    video.load();
    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }

    return undefined;
  }, [active, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      controls={controls}
      preload={active ? 'auto' : 'none'}
      poster={poster}
    >
      {active ? <source src={src} type={type} /> : null}
    </video>
  );
}

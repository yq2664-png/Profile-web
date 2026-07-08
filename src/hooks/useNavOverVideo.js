import { useEffect, useState } from 'react';

export function useNavOverVideo(coverRef) {
  const [overVideo, setOverVideo] = useState(true);

  useEffect(() => {
    const cover = coverRef.current;
    if (!cover) return undefined;

    const update = () => {
      setOverVideo(cover.getBoundingClientRect().bottom > 60);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [coverRef]);

  return overVideo;
}

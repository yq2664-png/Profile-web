import { useEffect, useRef, useState } from 'react';

export default function LightboxImage({ src, alt }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const img = imgRef.current;
    if (img?.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <>
      {!loaded ? (
        <div className="ideation-lightbox-loading" aria-hidden="true">
          <span className="ideation-lightbox-spinner" />
        </div>
      ) : null}
      <img
        ref={imgRef}
        className={`ideation-lightbox-img${loaded ? ' is-loaded' : ''}`}
        src={src}
        alt={alt}
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

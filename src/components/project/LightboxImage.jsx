import { useState } from 'react';

export default function LightboxImage({ src, alt }) {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const loaded = loadedSrc === src;

  return (
    <>
      {!loaded ? (
        <div className="ideation-lightbox-loading" aria-hidden="true">
          <span className="ideation-lightbox-spinner" />
        </div>
      ) : null}
      <img
        className={`ideation-lightbox-img${loaded ? ' is-loaded' : ''}`}
        src={src}
        alt={alt}
        decoding="async"
        onLoad={() => setLoadedSrc(src)}
      />
    </>
  );
}

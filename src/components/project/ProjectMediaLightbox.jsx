import LightboxImage from './LightboxImage';

export default function ProjectMediaLightbox({ lightbox, activeImage, onClose, onStep }) {
  return (
    <div
      className={`ideation-lightbox${lightbox ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      aria-hidden={!lightbox}
      onClick={(e) => e.target.classList.contains('ideation-lightbox') && onClose()}
    >
      <button type="button" className="ideation-lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>

      {activeImage ? (
        <>
          {lightbox.items.length > 1 ? (
            <button
              type="button"
              className="ideation-lightbox-nav ideation-lightbox-prev"
              aria-label="Previous image"
              onClick={() => onStep(-1)}
            >
              ‹
            </button>
          ) : null}

          <figure className="ideation-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <LightboxImage src={activeImage.src} alt={activeImage.alt} />
            {activeImage.caption ? (
              <figcaption className="ideation-lightbox-caption">{activeImage.caption}</figcaption>
            ) : null}
          </figure>

          {lightbox.items.length > 1 ? (
            <button
              type="button"
              className="ideation-lightbox-nav ideation-lightbox-next"
              aria-label="Next image"
              onClick={() => onStep(1)}
            >
              ›
            </button>
          ) : null}

          {lightbox.items.length > 1 ? (
            <span className="ideation-lightbox-counter">
              {lightbox.index + 1} / {lightbox.items.length}
            </span>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

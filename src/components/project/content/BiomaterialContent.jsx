import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { lockBodyScroll, resetBodyScrollLock, unlockBodyScroll } from '../../../utils/scrollLock';
import { useBioDetailLayoutFit } from '../../../hooks/useBioDetailLayoutFit';
import { useProjectMediaLightbox } from '../../../hooks/useProjectMediaLightbox';
import ProjectNav from '../ProjectNav';
import ProjectMediaLightbox from '../ProjectMediaLightbox';
import '../uos-sections.css';
import '../../../styles/project-pages.css';
import {
  biomaterialDisplayName,
  biomaterialIndexRows,
  biomaterialLightboxItems,
  biomaterialMaterials,
  biomaterialSrc,
  getBiomaterialDetailFromHash,
} from '../../../data/biomaterialImages';

const BIO_META = [
  { label: 'Type', value: 'Bio Material' },
  { label: 'Focus', value: 'Biodegradable & Bio-based Textiles' },
  { label: 'Role', value: 'Designer · Researcher' },
];

const BIO_OVERVIEW =
  'Exploring biodegradable and bio-based materials as alternatives in fashion — experimenting with natural composites that grow, decompose, and return. Each sample tests a different formulation of organic binders, pigments, and fibrous substrates.';

function getDetailFromHash() {
  const hash = window.location.hash.slice(1);
  if (!hash.startsWith('detail-')) {
    return null;
  }

  return getBiomaterialDetailFromHash(hash.slice('detail-'.length));
}

function handleFrameImageLoad(event, fitLayout) {
  const img = event.currentTarget;
  const frame = img.parentElement;
  const { naturalWidth, naturalHeight } = img;

  if (naturalWidth && naturalHeight && naturalWidth > naturalHeight) {
    frame.classList.add('bio-essesi-frame--wide');
    frame.style.setProperty('--bio-frame-aspect', String(naturalWidth / naturalHeight));
  }

  fitLayout?.();
}

export default function BiomaterialContent() {
  const location = useLocation();
  const [activeDetail, setActiveDetail] = useState(getDetailFromHash);
  const detailOpenRef = useRef(Boolean(getDetailFromHash()));

  const isDetailOpen = Boolean(activeDetail);
  const detailTiles = activeDetail?.tiles ?? [];
  const sharedDetailCaption = activeDetail?.row?.detailCaption;
  const { pageRef, detailRef, panelRef, fitLayout } = useBioDetailLayoutFit(
    isDetailOpen,
    activeDetail?.row?.id ?? '',
  );
  const lightboxImages = useMemo(
    () => (isDetailOpen ? biomaterialLightboxItems(detailTiles, sharedDetailCaption) : []),
    [detailTiles, isDetailOpen, sharedDetailCaption],
  );
  const {
    lightbox,
    closeLightbox,
    stepLightbox,
    activeImage,
  } = useProjectMediaLightbox(
    lightboxImages,
    '.bio-essesi-detail-gallery .bio-essesi-detail-frame img',
    { manageBodyScroll: false },
  );

  const openDetail = useCallback((row, tile) => {
    const hashId = row.detailMode === 'tile' ? tile.tileId : row.id;
    window.location.hash = `detail-${hashId}`;
  }, []);

  const applyDetailState = useCallback((detail) => {
    const willOpen = Boolean(detail);

    if (!detailOpenRef.current && willOpen) {
      lockBodyScroll();
    } else if (detailOpenRef.current && !willOpen) {
      unlockBodyScroll();
    }

    detailOpenRef.current = willOpen;
    setActiveDetail(detail);
    document.body.classList.toggle('bio-essesi-detail-open', willOpen);
  }, []);

  const closeDetail = useCallback(() => {
    if (lightbox) {
      closeLightbox();
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', location.pathname);
    }

    applyDetailState(null);
  }, [applyDetailState, closeLightbox, lightbox, location.pathname]);

  useEffect(() => {
    document.body.classList.add('bio-essesi-active');

    const syncDetailState = () => {
      applyDetailState(getDetailFromHash());
    };

    syncDetailState();
    window.addEventListener('hashchange', syncDetailState);
    return () => {
      window.removeEventListener('hashchange', syncDetailState);
      detailOpenRef.current = false;
      resetBodyScrollLock();
      document.body.classList.remove('bio-essesi-active', 'bio-essesi-detail-open');
    };
  }, [applyDetailState]);

  return (
    <div ref={pageRef} className={`bio-essesi-page${isDetailOpen ? ' is-detail-open' : ''}`}>
      {!isDetailOpen ? <ProjectNav title="Bio Material" /> : null}

      <main className="bio-essesi-index" aria-hidden={isDetailOpen}>
        {biomaterialIndexRows.map((row) => (
          <section
            key={row.id}
            className={`bio-essesi-section bio-essesi-section--${row.tiles.length}`}
          >
            <div className={`bio-essesi-row bio-essesi-row--${row.tiles.length}`}>
              {row.tiles.map((tile) => (
                <button
                  key={tile.file}
                  type="button"
                  className="bio-essesi-tile"
                  onClick={() => openDetail(row, tile)}
                  aria-label={`Open ${biomaterialDisplayName(tile.file)}`}
                >
                  <div className="bio-essesi-frame">
                    <img
                      src={biomaterialSrc(tile.file)}
                      alt=""
                      loading="lazy"
                      onLoad={handleFrameImageLoad}
                    />
                  </div>
                  <span className="bio-essesi-label">{biomaterialDisplayName(tile.file)}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>

      <div
        ref={detailRef}
        className={`bio-essesi-detail${isDetailOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isDetailOpen}
        onClick={closeDetail}
      >
        <div ref={panelRef} className="bio-essesi-detail-panel" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="bio-essesi-close" onClick={closeDetail}>
            Close
          </button>

          <div className="bio-essesi-detail-copy">
            {BIO_META.map((item) => (
              <p key={item.label} className="bio-essesi-meta-line">
                <span>{item.label}</span> · {item.value}
              </p>
            ))}

            <h2 className="uos-sec-title">Overview</h2>
            <p className="uos-sec-prose bio-essesi-overview">{BIO_OVERVIEW}</p>
          </div>

          {detailTiles.length > 0 ? (
            <>
              <div
                className={`bio-essesi-detail-gallery bio-essesi-row bio-essesi-row--${detailTiles.length}${sharedDetailCaption ? ' bio-essesi-detail-gallery--shared-caption' : ''}`}
              >
                {detailTiles.map((tile) => (
                  <figure key={tile.file} className="bio-essesi-detail-tile">
                    <div className="bio-essesi-frame bio-essesi-detail-frame">
                      <img
                        src={biomaterialSrc(tile.file)}
                        alt={biomaterialDisplayName(tile.file)}
                        loading="lazy"
                        onLoad={(event) => handleFrameImageLoad(event, fitLayout)}
                      />
                    </div>
                    {!sharedDetailCaption ? (
                      <figcaption className="bio-essesi-detail-caption">
                        <span className="bio-essesi-detail-caption-title">
                          {biomaterialDisplayName(tile.file)}
                        </span>
                        {biomaterialMaterials(tile.file) ? (
                          <span className="bio-essesi-detail-caption-materials">
                            {biomaterialMaterials(tile.file)}
                          </span>
                        ) : null}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
              {sharedDetailCaption ? (
                <figcaption className="bio-essesi-detail-caption bio-essesi-detail-caption--shared">
                  <span className="bio-essesi-detail-caption-title">{sharedDetailCaption.title}</span>
                  <span className="bio-essesi-detail-caption-materials">
                    {sharedDetailCaption.materials}
                  </span>
                </figcaption>
              ) : null}
            </>
          ) : null}
        </div>
      </div>

      <ProjectMediaLightbox
        lightbox={lightbox}
        activeImage={activeImage}
        onClose={closeLightbox}
        onStep={stepLightbox}
      />
    </div>
  );
}

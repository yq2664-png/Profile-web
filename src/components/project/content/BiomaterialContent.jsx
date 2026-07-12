import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectNav from '../ProjectNav';
import {
  biomaterialDisplayName,
  biomaterialIndexRows,
  biomaterialSrc,
  getBiomaterialDetailFromHash,
} from '../../../data/biomaterialImages';

const BIO_META = [
  { label: 'Type', value: 'Material Research' },
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

function handleFrameImageLoad(event) {
  const img = event.currentTarget;
  const frame = img.parentElement;
  const { naturalWidth, naturalHeight } = img;

  if (!naturalWidth || !naturalHeight || naturalWidth <= naturalHeight) {
    return;
  }

  frame.classList.add('bio-essesi-frame--wide');
  frame.style.setProperty('--bio-frame-aspect', String(naturalWidth / naturalHeight));
}

export default function BiomaterialContent() {
  const location = useLocation();
  const [activeDetail, setActiveDetail] = useState(getDetailFromHash);

  const isDetailOpen = Boolean(activeDetail);
  const detailTiles = activeDetail?.tiles ?? [];

  const openDetail = useCallback((row, tile) => {
    const hashId = row.detailMode === 'tile' ? tile.tileId : row.id;
    window.location.hash = `detail-${hashId}`;
  }, []);

  const applyDetailState = useCallback((detail) => {
    setActiveDetail(detail);
    document.body.classList.toggle('bio-essesi-detail-open', Boolean(detail));
  }, []);

  const closeDetail = useCallback(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', location.pathname);
    }
    applyDetailState(null);
  }, [location.pathname, applyDetailState]);

  useEffect(() => {
    document.body.classList.add('bio-essesi-active');

    const syncDetailState = () => {
      applyDetailState(getDetailFromHash());
    };

    syncDetailState();
    window.addEventListener('hashchange', syncDetailState);
    return () => {
      window.removeEventListener('hashchange', syncDetailState);
      document.body.classList.remove('bio-essesi-active', 'bio-essesi-detail-open');
    };
  }, [applyDetailState]);

  return (
    <div className={`bio-essesi-page${isDetailOpen ? ' is-detail-open' : ''}`}>
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
        className={`bio-essesi-detail${isDetailOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isDetailOpen}
        onClick={closeDetail}
      >
        <div className="bio-essesi-detail-panel" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="bio-essesi-close" onClick={closeDetail}>
            Close
          </button>

          <div className="bio-essesi-detail-copy">
            {BIO_META.map((item) => (
              <p key={item.label} className="bio-essesi-meta-line">
                <span>{item.label}</span> · {item.value}
              </p>
            ))}

            <p className="bio-essesi-overview-title">Overview</p>
            <p className="bio-essesi-overview">{BIO_OVERVIEW}</p>
          </div>

          {detailTiles.length > 0 ? (
            <div
              className={`bio-essesi-detail-gallery bio-essesi-row bio-essesi-row--${detailTiles.length}`}
            >
              {detailTiles.map((tile) => (
                <figure key={tile.file} className="bio-essesi-detail-tile">
                  <div className="bio-essesi-frame bio-essesi-detail-frame">
                    <img
                      src={biomaterialSrc(tile.file)}
                      alt={biomaterialDisplayName(tile.file)}
                      loading="lazy"
                      onLoad={handleFrameImageLoad}
                    />
                  </div>
                  <figcaption className="bio-essesi-detail-caption">
                    {biomaterialDisplayName(tile.file)}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

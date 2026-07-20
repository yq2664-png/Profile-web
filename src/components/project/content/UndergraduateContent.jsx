import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ProjectImage,
  ProjectImageGrid,
  ProjectSection,
  ProjectTags,
} from '../ProjectWriting';
import '../uos-sections.css';
import '../../../styles/project-undergraduate.css';

function ProjectGallery({ id, items, galleryKey, galleryName }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(1);
  const [locked, setLocked] = useState(false);
  const indexRef = useRef(index);
  const total = items.length;

  indexRef.current = index;

  const cardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector('.gallery-card:not([aria-hidden])');
    return card ? card.offsetWidth + 16 : 0;
  }, []);

  const setPos = useCallback(
    (i, animated) => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = animated
        ? 'transform 400ms cubic-bezier(0.25,0.46,0.45,0.94)'
        : 'none';
      track.style.transform = `translateX(${-i * cardWidth()}px)`;
      setIndex(i);
    },
    [cardWidth],
  );

  const step = (dir) => {
    if (locked) return;
    const nextIndex = index + dir;
    setLocked(true);
    setPos(nextIndex, true);
    window.setTimeout(() => {
      if (nextIndex === total + 1) setPos(1, false);
      else if (nextIndex === 0) setPos(total, false);
      setLocked(false);
    }, 420);
  };

  useEffect(() => {
    requestAnimationFrame(() => setPos(1, false));
  }, [setPos]);

  useEffect(() => {
    const onResize = () => setPos(indexRef.current, false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [setPos]);

  const displayIndex = index < 1 ? total : index > total ? 1 : index;

  return (
    <div className="gallery-section">
      <div className="gallery-viewport">
        <div className="gallery-track" ref={trackRef} id={id}>
          <div className="gallery-card" aria-hidden="true">
            <img src={items[total - 1].src} alt="" />
          </div>
          {items.map((item) => (
            <div
              key={item.src}
              className={`gallery-card${item.wide ? ' wide' : ''}`}
              data-gallery={galleryKey}
              data-img={item.src}
              data-alt={item.alt}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-label">{item.label}</span>
              <button type="button" className="gallery-expand" aria-label={`Expand ${item.label}`}>
                +
              </button>
            </div>
          ))}
          <div className="gallery-card" aria-hidden="true">
            <img src={items[0].src} alt="" />
          </div>
        </div>
      </div>
      <button type="button" className="gallery-arrow gallery-arrow-prev" aria-label="Previous" onClick={() => step(-1)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button type="button" className="gallery-arrow gallery-arrow-next" aria-label="Next" onClick={() => step(1)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="gallery-counter">
        {displayIndex} / {total}
      </p>
      <span className="sr-only">{galleryName}</span>
    </div>
  );
}

const LOOKS = [
  { src: '/assets/Silent Sanctuary /ug_1.png', alt: 'Look 1 — draped asymmetric silhouette with sculptural hood', label: 'Look 1' },
  { src: '/assets/Silent Sanctuary /ug_2.png', alt: 'Look 2 — structured coat with white contrast insert', label: 'Look 2' },
  { src: '/assets/Silent Sanctuary /ug_3.png', alt: 'Look 3 — open curtain-cape over column skirt', label: 'Look 3' },
];

const POSTERS = [
  { src: '/assets/Silent Sanctuary /ug_poster1.jpg', alt: 'Silent Sanctuary — portrait with silver branching face accessory', label: 'Portrait' },
  { src: '/assets/Silent Sanctuary /ug_poster3.jpg', alt: 'Silent Sanctuary — aerial editorial shot', label: 'Aerial' },
  { src: '/assets/Silent Sanctuary /ug_poster2.jpg', alt: 'Silent Sanctuary — full collection editorial poster', label: 'Editorial', wide: true },
];

const TAGS = [
  'Fashion Design',
  'Spatial Exploration',
  'Material Experimentation',
];

export default function UndergraduateContent() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const card = e.target.closest('.gallery-card');
      if (!card || !card.dataset.gallery || card.getAttribute('aria-hidden')) return;
      const gallery = card.dataset.gallery;
      const items = gallery === 'looks' ? LOOKS : POSTERS;
      const idx = items.findIndex((item) => item.src === card.dataset.img);
      setLightbox({ gallery, index: idx >= 0 ? idx : 0, items });
      document.body.style.overflow = 'hidden';
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setLightbox(null);
        document.body.style.overflow = '';
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
  }, [lightbox]);

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  const galleryNames = { looks: 'The Collection', posters: 'Presentation' };

  return (
    <>
      <ProjectSection
        title="Clothing as Portable Architecture"
        titleId="ug-overview"
        first
      >
        <p className="uos-sec-prose">
          This collection explores clothing as a form of portable architecture. Beginning with childhood
          memories of building private shelters from everyday furniture, the project investigates how
          domestic space can be translated into wearable structures. Through spatial studies, pattern
          experimentation, and material development, flat furniture forms were transformed into
          three-dimensional garments that create a sense of enclosure around the body. Rather than treating
          clothing as decoration, the collection proposes garments as spatial boundaries that shape the
          relationship between body, memory, and environment.
        </p>
        <ProjectImage
          src="/assets/Silent Sanctuary /figure1.jpg"
          alt="Mood board and fabric exploration"
          caption="Figure 1 — My mood board and fabric exploration (Qin Yue, 2024)"
        />
      </ProjectSection>

      <ProjectSection num="1" title="From Memory to Materiality" titleId="ug-research">
        <p className="uos-sec-prose">
          The research began with an artist&apos;s photographic work recreating childhood forts and secret
          spaces from household objects—the idea that the desire for enclosure is not childish but
          fundamental. I started building scenes with miniature furniture in my studio, studying how the
          proportions, angles, and shadows of domestic objects create the perception of private space.
        </p>
        <ProjectImageGrid
          images={[
            { src: '/assets/Silent Sanctuary /figure2.jpg', alt: 'Frantic — Joanna Piotrowska' },
            { src: '/assets/Silent Sanctuary /figure3.jpg', alt: 'Frantic — Joanna Piotrowska' },
          ]}
          caption="Figure 2 and 3 — Frantic (Joanna Piotrowska, 2016–2019)"
        />
        <h3 className="uos-sec-sub">Spatial Studies</h3>
        <p className="uos-sec-prose">
          From these tabletop models, I extracted silhouettes and structural logics—the way a curtain
          divides a room, the way a high chair back shields the sitter, the way a folded blanket creates
          a hood. These became the templates for the collection&apos;s core shapes.
        </p>
        <ProjectImage
          src="/assets/Silent Sanctuary /figure4.jpg"
          alt="Sketchbook page — miniature furniture based on real living space"
          caption="Figure 4 — sketchbook page: A selection of miniature furniture based on my real living space (Qin Yue, 2024)"
        />
        <ProjectImage
          src="/assets/Silent Sanctuary /figure5.jpg"
          alt="Sketchbook page — an environment that simulates private spaces"
          caption="Figure 5 — sketchbook page: An environment that simulates private spaces (Qin Yue, 2024)"
        />
      </ProjectSection>

      <ProjectSection num="2" title="From 2D Furniture to 3D Garments" titleId="ug-form">
        <p className="uos-sec-prose">
          The central technical challenge was translating flat furniture profiles into three-dimensional
          garment structures. Through pattern experiments—outward expansion, inward depression, and vertical
          cutting—I developed construction methods that allowed two-dimensional shapes to hold volume and
          directional presence once worn on the body.
        </p>
        <h3 className="uos-sec-sub">Structural Insight</h3>
        <p className="uos-sec-prose">
          The key insight was that furniture forms are already architectural: they assume the presence of a
          body and orient themselves around it.
        </p>
        <p className="uos-sec-prose">
          This drove the collection&apos;s distinctive silhouettes: the oversized hood-collar framing the face
          like a room, cape panels opening and closing like curtain walls, and wide-leg trousers grounding
          the body with the weight of a threshold.
        </p>
      </ProjectSection>

      <ProjectSection num="3" title="Fabric & Surface Development" titleId="ug-material">
        <p className="uos-sec-prose">
          The fabric process was iterative. An initial blueprinting experiment inspired by the moodboard
          produced results that felt overly literal and decorative.
        </p>
        <h3 className="uos-sec-sub">Material Experiments</h3>
        <p className="uos-sec-prose">
          The solution was to work directly with the material itself. I conducted a series of fabric
          modification experiments—including cutting, pressing, and layering—before scanning the resulting
          textures and processing them digitally in Photoshop. This workflow generated print designs that
          felt embedded within the construction rather than applied onto it.
        </p>
        <p className="uos-sec-prose">The final textile surfaces therefore retain visible traces of their own making.</p>
        <ProjectImage
          src="/assets/Silent Sanctuary /figure6.png"
          alt="Sketchbook page — 2D to 3D conversion experiment"
          caption="Figure 6 — sketchbook page: 2D to 3D conversion experiment (Qin Yue, 2024)"
        />
        <ProjectImage
          src="/assets/Silent Sanctuary /figure7.jpg"
          alt="Sketchbook page — color and fabric exploration"
          caption="Figure 7 — sketchbook page: Color and fabric exploration (Qin Yue, 2024)"
        />
      </ProjectSection>

      <ProjectSection num="4" title="Three Modes of Sanctuary" titleId="ug-collection">
        <p className="uos-sec-prose">
          The collection consists of three looks, each representing a different spatial condition of
          enclosure: <strong>concealment</strong>, <strong>openness held in tension</strong>, and{' '}
          <strong>vertical stillness</strong>.
        </p>
        <p className="uos-sec-prose">
          The palette is intentionally restrained—deep teal navy and bleached linen white—allowing
          structure, proportion, and silhouette to communicate the architectural language of sanctuary
          without relying on decoration.
        </p>
      </ProjectSection>

      <ProjectGallery id="looks-track" items={LOOKS} galleryKey="looks" galleryName="The Collection" />

      <ProjectSection num="5" title="Editorial Environment" titleId="ug-presentation">
        <p className="uos-sec-prose">
          The collection was rendered within a 3D rocky landscape—isolated, mineral, and open to the
          sky—to position the garments outside the domestic interiors that originally inspired them.
        </p>
        <h3 className="uos-sec-sub">Body × Environment</h3>
        <p className="uos-sec-prose">
          This external landscape transforms sanctuary into something portable: a condition that travels
          with the wearer rather than remaining tied to architecture.
        </p>
        <p className="uos-sec-prose">
          Silver branch-like accessories echo crystalline formations emerging from the terrain, visually
          linking body, garment, and environment into a single spatial system.
        </p>
        <ProjectImage
          src="/assets/Silent Sanctuary /figure8.jpg"
          alt="Collection line up"
          caption="Figure 8 — collection line up (Qin Yue, 2024)"
        />
      </ProjectSection>

      <ProjectGallery id="posters-track" items={POSTERS} galleryKey="posters" galleryName="Presentation" />

      <ProjectSection num="6" title="From Garment to Spatial Practice" titleId="ug-reflection">
        <p className="uos-sec-prose">
          This project taught me that clothing operates spatially—not only on the body, but through its
          relationship with the surrounding environment. Deconstructing garments within spatial compositions
          deepened my understanding of garment structure in ways that purely technical pattern cutting could
          not.
        </p>
        <p className="uos-sec-prose">
          The perceptual relationship between body, clothing, and environment has since become a perspective
          that informs every project I undertake.
        </p>
        <h3 className="uos-sec-sub">Continuing Question</h3>
        <p className="uos-sec-prose">
          The collection ultimately opened a question that continues to guide my practice:{' '}
          <strong>what does it mean for clothing to function as a boundary, rather than simply a covering?</strong>
        </p>
      </ProjectSection>

      <ProjectSection num="7" title="Boundary as Design Lens" titleId="ug-forward">
        <p className="uos-sec-prose">
          The question the collection opened—what does it mean for clothing to function as a boundary,
          rather than simply a covering?—continues to shape the way I approach interaction, wearability,
          and spatial design today.
        </p>
      </ProjectSection>

      <ProjectTags tags={TAGS} />

      <div className={`lightbox${lightbox ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Image viewer" onClick={(e) => e.target.classList.contains('lightbox') && closeLightbox()}>
        <button type="button" className="lightbox-close" aria-label="Close" onClick={closeLightbox}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {lightbox ? (
          <>
            <button type="button" className="lightbox-nav lightbox-prev" aria-label="Previous image" onClick={() => setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + lb.items.length) % lb.items.length }))}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <img className="lightbox-img" src={lightbox.items[lightbox.index].src} alt={lightbox.items[lightbox.index].alt} />
            <button type="button" className="lightbox-nav lightbox-next" aria-label="Next image" onClick={() => setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.items.length }))}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <span className="lightbox-label">
              {galleryNames[lightbox.gallery]} · {lightbox.index + 1} / {lightbox.items.length}
            </span>
          </>
        ) : null}
      </div>
    </>
  );
}

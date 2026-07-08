import { useCallback, useEffect, useRef, useState } from 'react';
import '../../../styles/project-undergraduate.css';

function FigPair({ images }) {
  useEffect(() => {
    document.querySelectorAll('.fig-pair img').forEach((img) => {
      const set = () => {
        img.style.flexGrow = img.naturalWidth / img.naturalHeight || 1;
      };
      if (img.complete && img.naturalWidth) set();
      else img.addEventListener('load', set);
    });
  }, []);

  return (
    <div className="fig-pair">
      {images.map((img) => (
        <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
      ))}
    </div>
  );
}

function ProjectGallery({ id, items, galleryKey, galleryName }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(1);
  const [locked, setLocked] = useState(false);
  const total = items.length;

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
    setLocked(true);
    setPos(index + dir, true);
    setTimeout(() => {
      if (index + dir === total + 1) setPos(1, false);
      else if (index + dir === 0) setPos(total, false);
      setLocked(false);
    }, 420);
  };

  useEffect(() => {
    requestAnimationFrame(() => setPos(1, false));
    const onResize = () => setPos(index, false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index, setPos]);

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
      <div className="content">
        <h2 className="block-heading" style={{ marginTop: 0 }}>
          Overview
        </h2>
        <p className="prose">
          This collection explores clothing as a form of portable architecture. Beginning with childhood
          memories of building private shelters from everyday furniture, the project investigates how
          domestic space can be translated into wearable structures. Through spatial studies, pattern
          experimentation, and material development, flat furniture forms were transformed into
          three-dimensional garments that create a sense of enclosure around the body. Rather than treating
          clothing as decoration, the collection proposes garments as spatial boundaries that shape the
          relationship between body, memory, and environment.
        </p>

        <img
          className="img-full"
          data-aos="fade-up"
          data-aos-duration="800"
          src="/assets/Silent Sanctuary /figure1.jpg"
          alt="Mood board and fabric exploration"
        />
        <p className="img-caption">Figure 1 — My mood board and fabric exploration (Qin Yue, 2024)</p>

        <h2 className="block-heading">Research</h2>
        <p className="block-sub">From Memory to Materiality</p>
        <p className="prose">
          The research began with an artist&apos;s photographic work recreating childhood forts and secret
          spaces from household objects—the idea that the desire for enclosure is not childish but
          fundamental. I started building scenes with miniature furniture in my studio, studying how the
          proportions, angles, and shadows of domestic objects create the perception of private space.
        </p>

        <FigPair
          images={[
            { src: '/assets/Silent Sanctuary /figure2.jpg', alt: 'Frantic — Joanna Piotrowska' },
            { src: '/assets/Silent Sanctuary /figure3.jpg', alt: 'Frantic — Joanna Piotrowska' },
          ]}
        />
        <p className="img-caption">Figure 2 and 3 — Frantic (Joanna Piotrowska, 2016–2019)</p>

        <p className="block-sub block-sub-standalone">Spatial Studies</p>
        <p className="prose">
          From these tabletop models, I extracted silhouettes and structural logics—the way a curtain
          divides a room, the way a high chair back shields the sitter, the way a folded blanket creates
          a hood. These became the templates for the collection&apos;s core shapes.
        </p>

        <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/Silent Sanctuary /figure4.jpg" alt="Sketchbook page — miniature furniture based on real living space" loading="lazy" />
        <p className="img-caption">Figure 4 — sketchbook page: A selection of miniature furniture based on my real living space (Qin Yue, 2024)</p>
        <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/Silent Sanctuary /figure5.jpg" alt="Sketchbook page — an environment that simulates private spaces" loading="lazy" />
        <p className="img-caption">Figure 5 — sketchbook page: An environment that simulates private spaces (Qin Yue, 2024)</p>

        <h2 className="block-heading">Form Development</h2>
        <p className="block-sub">From 2D Furniture to 3D Garments</p>
        <p className="prose">
          The central technical challenge was translating flat furniture profiles into three-dimensional
          garment structures. Through pattern experiments—outward expansion, inward depression, and vertical
          cutting—I developed construction methods that allowed two-dimensional shapes to hold volume and
          directional presence once worn on the body.
        </p>

        <p className="block-sub block-sub-standalone">Structural Insight</p>
        <p className="prose">
          The key insight was that furniture forms are already architectural: they assume the presence of a
          body and orient themselves around it.
        </p>
        <p className="prose">
          This drove the collection&apos;s distinctive silhouettes: the oversized hood-collar framing the face
          like a room, cape panels opening and closing like curtain walls, and wide-leg trousers grounding
          the body with the weight of a threshold.
        </p>

        <h2 className="block-heading">Material Exploration</h2>
        <p className="block-sub">Fabric &amp; Surface Development</p>
        <p className="prose">
          The fabric process was iterative. An initial blueprinting experiment inspired by the moodboard
          produced results that felt overly literal and decorative.
        </p>

        <p className="block-sub block-sub-standalone">Material Experiments</p>
        <p className="prose">
          The solution was to work directly with the material itself. I conducted a series of fabric
          modification experiments—including cutting, pressing, and layering—before scanning the resulting
          textures and processing them digitally in Photoshop. This workflow generated print designs that
          felt embedded within the construction rather than applied onto it.
        </p>
        <p className="prose">The final textile surfaces therefore retain visible traces of their own making.</p>

        <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/Silent Sanctuary /figure6.png" alt="Sketchbook page — 2D to 3D conversion experiment" loading="lazy" />
        <p className="img-caption">Figure 6 — sketchbook page: 2D to 3D conversion experiment (Qin Yue, 2024)</p>
        <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/Silent Sanctuary /figure7.jpg" alt="Sketchbook page — color and fabric exploration" loading="lazy" />
        <p className="img-caption">Figure 7 — sketchbook page: Color and fabric exploration (Qin Yue, 2024)</p>

        <h2 className="block-heading">Collection</h2>
        <p className="block-sub">Three Modes of Sanctuary</p>
        <p className="prose">
          The collection consists of three looks, each representing a different spatial condition of
          enclosure: <strong>concealment</strong>, <strong>openness held in tension</strong>, and{' '}
          <strong>vertical stillness</strong>.
        </p>
        <p className="prose">
          The palette is intentionally restrained—deep teal navy and bleached linen white—allowing
          structure, proportion, and silhouette to communicate the architectural language of sanctuary
          without relying on decoration.
        </p>
      </div>

      <ProjectGallery id="looks-track" items={LOOKS} galleryKey="looks" galleryName="The Collection" />

      <div className="content">
        <h2 className="block-heading">Presentation</h2>
        <p className="block-sub">Editorial Environment</p>
        <p className="prose">
          The collection was rendered within a 3D rocky landscape—isolated, mineral, and open to the
          sky—to position the garments outside the domestic interiors that originally inspired them.
        </p>

        <p className="block-sub block-sub-standalone">Body × Environment</p>
        <p className="prose">
          This external landscape transforms sanctuary into something portable: a condition that travels
          with the wearer rather than remaining tied to architecture.
        </p>
        <p className="prose">
          Silver branch-like accessories echo crystalline formations emerging from the terrain, visually
          linking body, garment, and environment into a single spatial system.
        </p>

        <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/Silent Sanctuary /figure8.jpg" alt="Collection line up" loading="lazy" />
        <p className="img-caption">Figure 8 — collection line up (Qin Yue, 2024)</p>
      </div>

      <ProjectGallery id="posters-track" items={POSTERS} galleryKey="posters" galleryName="Presentation" />

      <div className="content">
        <h2 className="block-heading">Reflection</h2>
        <p className="block-sub">From Garment to Spatial Practice</p>
        <p className="prose">
          This project taught me that clothing operates spatially—not only on the body, but through its
          relationship with the surrounding environment. Deconstructing garments within spatial compositions
          deepened my understanding of garment structure in ways that purely technical pattern cutting could
          not.
        </p>
        <p className="prose">
          The perceptual relationship between body, clothing, and environment has since become a perspective
          that informs every project I undertake.
        </p>

        <p className="block-sub block-sub-standalone">Continuing Question</p>
        <p className="prose">
          The collection ultimately opened a question that continues to guide my practice:{' '}
          <strong>what does it mean for clothing to function as a boundary, rather than simply a covering?</strong>
        </p>

        <h2 className="block-heading">Looking Forward</h2>
        <p className="prose">
          The question the collection opened—what does it mean for clothing to function as a boundary,
          rather than simply a covering?—continues to shape the way I approach interaction, wearability,
          and spatial design today.
        </p>

        <div className="tag-row">
          <span className="tag">Womenswear</span>
          <span className="tag">Graduation Collection</span>
          <span className="tag">Spatial Design</span>
          <span className="tag">Pattern Construction</span>
          <span className="tag">Fabric Modification</span>
          <span className="tag">3D Rendering</span>
          <span className="tag">Coventry University</span>
          <span className="tag">First-Class Honours</span>
        </div>
      </div>

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

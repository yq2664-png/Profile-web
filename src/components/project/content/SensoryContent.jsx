import { useEffect, useState } from 'react';
import { ProjectImage, ProjectSection, ProjectTags } from '../ProjectWriting';
import '../uos-sections.css';

const TAGS = [
  'Creative Coding',
  'Interactive Installation',
  'P5.js',
  'GPT API',
  'Weather API',
  'TouchDesigner',
  'Sensory Design',
  'Environmental Data',
];

const IMAGES = [
  {
    src: '/assets/sensory/sensory_p1.jpg',
    alt: 'Concept — translating weather, sound, and human presence into emotional expression',
  },
  {
    src: '/assets/sensory/workflow.png',
    alt: 'Inner Weather system workflow — environmental input, data processing, visual composition, and email delivery',
    caption:
      'Reference — system workflow: weather data, ambient sound, and camera input are processed into dynamic textures, a dot-matrix portrait, GPT-generated poetry, and a final visual record delivered by email.',
  },
  {
    src: '/assets/sensory/sensory_p2.jpg',
    alt: 'System architecture — weather API, GPT API, and email delivery flow',
    caption:
      'System architecture: weather and GPT APIs generate contextual language and visual form; p5.js composes the final artwork for email delivery.',
  },
  {
    src: '/assets/sensory/sensory_p3.jpg',
    alt: 'Camera capture, sound visualization, and weather modulation logic',
    caption:
      'Data mapping: camera brightness shapes the dot-matrix portrait, sound modulates texture density, and weather data shifts atmospheric warmth and detail.',
  },
  {
    src: '/assets/sensory/sensory_p4.jpg',
    alt: 'Iteration — from single-modality experiments to a unified multisensory system',
    caption:
      'Key iterations: refining interaction flow, data mapping, and visual composition until weather, sound, and presence worked as one coherent experience.',
  },
  {
    src: '/assets/sensory/sensory_p5.jpg',
    alt: 'Final installation outputs under different weather and environmental conditions',
    caption:
      'Final outputs: each participant interaction produces a unique portrait shaped by the weather, sound, and presence of that specific moment.',
  },
];

export default function SensoryContent() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const img = e.target.closest('.project-page-sensory .proj-media img');
      if (!img) return;

      const src = img.getAttribute('src') ?? '';
      const index = IMAGES.findIndex(
        (item) => src === item.src || src.endsWith(item.src.replace(/^\//, '')),
      );
      if (index < 0) return;

      setLightbox({ index, items: IMAGES });
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

  const stepLightbox = (dir) => {
    setLightbox((lb) => ({
      ...lb,
      index: (lb.index + dir + lb.items.length) % lb.items.length,
    }));
  };

  const activeImage = lightbox ? lightbox.items[lightbox.index] : null;

  return (
    <>
      <ProjectSection title="Inner Weather" titleId="sensory-overview" first>
        <p className="uos-sec-prose">
          Inner Weather is an interactive installation that transforms real-time weather,
          environmental sound, and human presence into a personalized generative artwork. By
          combining live environmental data with participant interaction, the system creates a unique
          visual composition accompanied by an AI-generated poem. Rather than presenting weather as
          information, the project explores how invisible atmospheric conditions can be experienced
          as emotion, memory, and visual expression.
        </p>
      </ProjectSection>

      <ProjectSection num="1" title="Concept" titleId="sensory-concept">
        <p className="uos-sec-prose">
          Weather quietly shapes how we feel, yet it is usually represented through numbers,
          forecasts, and statistics. I became interested in whether environmental data could be
          experienced in a more intuitive and emotional way. Instead of visualizing data directly,
          Inner Weather translates weather, sound, and human presence into a shared sensory
          experience, allowing each participant to leave with a unique visual record of a specific
          moment in time.
        </p>
        <ProjectImage
          src="/assets/sensory/sensory_p1.jpg"
          alt="Concept — translating weather, sound, and human presence into emotional expression"
        />
      </ProjectSection>

      <ProjectSection num="2" title="System Design" titleId="sensory-system">
        <p className="uos-sec-prose">
          The installation combines three real-time inputs: weather data, environmental sound, and
          camera imagery. Weather conditions influence the overall visual atmosphere, sound
          generates dynamic textures, and the participant&apos;s silhouette is translated into a
          dot-based portrait. An AI-generated poem adds an emotional narrative to the composition
          before the final artwork is automatically delivered by email.
        </p>
        <ProjectImage
          src="/assets/sensory/workflow.png"
          alt="Inner Weather system workflow — environmental input, data processing, visual composition, and email delivery"
          caption="Reference — system workflow: weather data, ambient sound, and camera input are processed into dynamic textures, a dot-matrix portrait, GPT-generated poetry, and a final visual record delivered by email."
        />
        <ProjectImage
          src="/assets/sensory/sensory_p2.jpg"
          alt="System architecture — weather API, GPT API, and email delivery flow"
          caption="System architecture: weather and GPT APIs generate contextual language and visual form; p5.js composes the final artwork for email delivery."
        />
        <ProjectImage
          src="/assets/sensory/sensory_p3.jpg"
          alt="Camera capture, sound visualization, and weather modulation logic"
          caption="Data mapping: camera brightness shapes the dot-matrix portrait, sound modulates texture density, and weather data shifts atmospheric warmth and detail."
        />
      </ProjectSection>

      <ProjectSection num="3" title="Iteration" titleId="sensory-iteration">
        <p className="uos-sec-prose">
          The project evolved through multiple rounds of prototyping. Early versions focused on
          translating individual data sources, but the visual results lacked coherence and emotional
          depth. Through iterative experiments with interaction flow, data mapping, and visual
          composition, the system gradually developed into a unified experience where environmental
          conditions, participant input, and generative visuals respond seamlessly to one another.
        </p>
        <ProjectImage
          src="/assets/sensory/sensory_p4.jpg"
          alt="Iteration — from single-modality experiments to a unified multisensory system"
          caption="Key iterations: refining interaction flow, data mapping, and visual composition until weather, sound, and presence worked as one coherent experience."
        />
      </ProjectSection>

      <ProjectSection num="4" title="Final Installation" titleId="sensory-installation">
        <p className="uos-sec-prose">
          The final installation invited visitors to actively participate rather than passively
          observe. Each interaction produced a unique artwork generated from the surrounding
          environment and the participant&apos;s presence at that moment. By transforming invisible
          environmental conditions into a tangible visual artifact, Inner Weather encourages people
          to perceive weather not simply as information, but as an experience shared between
          themselves and their surroundings.
        </p>
        <ProjectImage
          src="/assets/sensory/sensory_p5.jpg"
          alt="Final installation outputs under different weather and environmental conditions"
          caption="Final outputs: each participant interaction produces a unique portrait shaped by the weather, sound, and presence of that specific moment."
        />
      </ProjectSection>

      <ProjectSection num="5" title="Reflection" titleId="sensory-reflection">
        <p className="uos-sec-prose">
          Moving from the midterm to the final project shifted my focus from observing sensory data
          to designing systems that respond to it. The midterm taught me to notice the overlooked
          textures of everyday sound, while the final expanded this exploration into a multisensory
          installation integrating weather, voice, and human presence. Through this process, I
          learned not only how to combine multiple sensing technologies, but also how interaction
          can transform environmental data into an emotional experience.
        </p>
        <p className="uos-sec-prose">
          More importantly, this project changed how I think about interaction design. Rather than
          simply capturing or visualizing data, I began to see interaction as a way of framing
          relationships—between people and their surroundings, between technology and perception.
          This became the starting point of my continuing interest in embodied interaction and
          multisensory experience design.
        </p>
        <h3 className="uos-sec-sub">Future Direction</h3>
        <p className="uos-sec-prose">
          A future iteration could explore collective rather than individual experiences. By allowing
          multiple participants to contribute voices, silhouettes, and environmental data from
          different locations, the installation could generate a shared atmospheric landscape that
          evolves over time. Instead of representing personal emotion, the work would reveal how
          emotional climates emerge through the continuous interaction between people, place, and
          environment.
        </p>
      </ProjectSection>

      <ProjectTags tags={TAGS} />

      <div
        className={`ideation-lightbox${lightbox ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        aria-hidden={!lightbox}
        onClick={(e) => e.target.classList.contains('ideation-lightbox') && closeLightbox()}
      >
        <button type="button" className="ideation-lightbox-close" aria-label="Close" onClick={closeLightbox}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {activeImage ? (
          <>
            <button
              type="button"
              className="ideation-lightbox-nav ideation-lightbox-prev"
              aria-label="Previous image"
              onClick={() => stepLightbox(-1)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <figure className="ideation-lightbox-figure" onClick={(e) => e.stopPropagation()}>
              <img className="ideation-lightbox-img" src={activeImage.src} alt={activeImage.alt} />
              {activeImage.caption ? (
                <figcaption className="ideation-lightbox-caption">{activeImage.caption}</figcaption>
              ) : null}
            </figure>
            <button
              type="button"
              className="ideation-lightbox-nav ideation-lightbox-next"
              aria-label="Next image"
              onClick={() => stepLightbox(1)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <span className="ideation-lightbox-counter">
              {lightbox.index + 1} / {lightbox.items.length}
            </span>
          </>
        ) : null}
      </div>
    </>
  );
}

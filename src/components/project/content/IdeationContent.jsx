import { useEffect, useState } from 'react';
import { ProjectImage, ProjectSection, ProjectTags } from '../ProjectWriting';
import '../uos-sections.css';

const TAGS = [
  'UX Research',
  'Systems Thinking',
  'Card Sorting',
  'User Interviews',
  'Wireframing',
  'Figma',
  'Fashion Systems',
  'Sustainability',
];

const IMAGES = [
  {
    src: '/assets/ideation/ideation_p1.jpg',
    alt: 'Background — fashion sustainability and systemic opacity',
    caption:
      'Figure 1 — Fast fashion vs slow fashion: environmental and social costs remain hidden upstream while marketing surfaces only selective sustainability narratives.',
  },
  {
    src: '/assets/ideation/ideation_p2.jpg',
    alt: 'Key problems — systemic opacity, greenwashing, consumer uncertainty',
    caption:
      'Figure 2 — Core problems mapped: systemic opacity, greenwashing, and consumer uncertainty when evaluating product claims.',
  },
  {
    src: '/assets/ideation/ideation_p3.jpg',
    alt: 'Secondary research — environmental impact',
    caption:
      'Figure 3 — Environmental impact research: water consumption, chemical pollution, microplastics, and synthetic fiber dependency across the industry.',
  },
  {
    src: '/assets/ideation/ideation_p4.jpg',
    alt: 'Secondary research — supply-chain opacity and greenwashing',
    caption:
      'Figure 4 — Supply-chain opacity and greenwashing: how fragmented production and promotional language replace verifiable evidence.',
  },
  {
    src: '/assets/ideation/ideation_p5.jpg',
    alt: 'Secondary research — consumer trust and transparency gaps',
    caption:
      'Figure 5 — Consumer trust and transparency gaps: users want responsible choices but cannot distinguish credible data from marketing.',
  },
  {
    src: '/assets/ideation/ideation_p6.jpg',
    alt: 'Research insights — findings on disclosure vs comprehension',
    caption:
      'Figure 6 — Research insights synthesis: current transparency systems prioritize disclosure over comprehension.',
  },
  {
    src: '/assets/ideation/ideation_p7.jpg',
    alt: 'Primary research methods — interviews, observation, card sorting',
    caption:
      'Figure 7 — Primary research methods: factory observation, semi-structured interviews, card sorting, and fly-on-the-wall shopping observation.',
  },
  {
    src: '/assets/ideation/ideation_p8.jpg',
    alt: 'Primary research findings and insight synthesis',
    caption:
      'Figure 8 — Primary research findings: users trust visuals over data, sustainability language feels vague, and technical information creates cognitive overload.',
  },
  {
    src: '/assets/ideation/ideation_p9.jpg',
    alt: 'Design opportunity — design principles for comprehension',
    caption:
      'Figure 9 — Design opportunity and principles: plain language, visual explanation, progressive disclosure, verified evidence, and actionable guidance.',
  },
  {
    src: '/assets/ideation/ideation_p10.jpg',
    alt: 'Iteration — paper prototype',
    caption:
      'Figure 10 — Paper prototype: testing whether users understood the overall transparency concept before building digital flows.',
  },
  {
    src: '/assets/ideation/ideation_p11.jpg',
    alt: 'Iteration — visual journey and NFC prototypes',
    caption:
      'Figure 11 — Visual journey and NFC prototypes: combining narrative illustration and physical interaction to increase emotional engagement.',
  },
  {
    src: '/assets/ideation/ideation_p12.jpg',
    alt: 'System architecture — transparency modules overview',
    caption:
      'Figure 12 — Fast fashion system architecture: transparency organized into interconnected modules for understanding, decision-making, and long-term engagement.',
  },
  {
    src: '/assets/ideation/ideation_p13.jpg',
    alt: 'System architecture — app workflow',
    caption:
      'Figure 13 — App workflow: App → Dashboard → Transparency → Supply Chain → Passport → Circular Tracking.',
  },
  {
    src: '/assets/ideation/ideation_p14.jpg',
    alt: 'System architecture — supply chain module',
    caption:
      'Figure 14 — Supply chain module: step-by-step production journey made legible through visual hierarchy and progressive disclosure.',
  },
  {
    src: '/assets/ideation/ideation_p15.jpg',
    alt: 'System architecture — passport and circular tracking',
    caption:
      'Figure 15 — Digital product passport and circular tracking: verified sustainability data, repair, resale, and end-of-life guidance.',
  },
  {
    src: '/assets/ideation/ideation_p16.jpg',
    alt: 'System architecture — integrated transparency platform',
    caption:
      'Figure 16 — Integrated transparency platform: every module addresses a specific barrier users face when evaluating sustainability claims.',
  },
  {
    src: '/assets/ideation/ideation_p17.jpg',
    alt: 'Wireframes to UI evolution',
    caption:
      'Figure 17 — Wireframes → UI evolution: interface progression from low-fidelity structure to a fully integrated transparency platform.',
  },
  {
    src: '/assets/ideation/ideation_p18.jpg',
    alt: 'User testing — usability and comprehension findings',
    caption:
      'Figure 18 — User testing: scenario-based usability sessions evaluating comprehension, navigation, and decision support.',
  },
  {
    src: '/assets/ideation/ideation_p19.jpg',
    alt: 'Final UI — landing, customization, artisan matching, supply chain, passport',
    caption:
      'Figure 19 — Final UI screens: landing, customization, artisan matching, supply chain detail, passport, and circular tracking.',
  },
  {
    src: '/assets/ideation/ideation_p20.jpg',
    alt: 'Future direction — garments as intelligent interfaces',
    caption:
      'Figure 20 — Future direction: how might garments become intelligent interfaces connecting humans, materials, and ecological systems?',
  },
];

const IMAGE_BY_SRC = Object.fromEntries(IMAGES.map((item) => [item.src, item]));

function Fig({ src }) {
  const image = IMAGE_BY_SRC[src];
  if (!image) return null;

  return <ProjectImage src={src} alt={image.alt} caption={image.caption} />;
}

function PrototypeBlock({ title, goal, problems, response, findings }) {
  return (
    <div className="proj-research-block">
      <h4 className="proj-research-title">{title}</h4>
      <p className="proj-label">Goal</p>
      <p className="uos-sec-prose">{goal}</p>
      {problems ? (
        <>
          <p className="proj-label">Problems</p>
          <p className="uos-sec-prose">{problems}</p>
        </>
      ) : null}
      {findings ? (
        <>
          <p className="proj-label">Findings</p>
          <p className="uos-sec-prose">{findings}</p>
        </>
      ) : null}
      {response ? (
        <>
          <p className="proj-label">{findings && !problems ? 'Reflection' : 'Design Response'}</p>
          <p className="uos-sec-callout">{response}</p>
        </>
      ) : null}
    </div>
  );
}

export default function IdeationContent() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const img = e.target.closest('.project-page-ideation .proj-media img');
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
      <ProjectSection title="Fashion Transparency Project" titleId="ideation-overview" first>
        <p className="uos-sec-prose">
          An interaction design research project exploring how hidden supply-chain information can
          become understandable, trustworthy, and actionable for everyday consumers.
        </p>
      </ProjectSection>

      <ProjectSection num="1" title="Background & Problem Statement" titleId="ideation-background">
        <p className="uos-sec-prose">
          Fashion is often presented as sustainable through labels, green imagery, and certifications.
          Yet the environmental and social impacts of clothing production remain largely invisible to
          consumers. This project investigates how interaction design can transform hidden
          supply-chain information into understandable, trustworthy, and actionable experiences.
        </p>
        <p className="proj-label">Key Problems</p>
        <ul className="uos-sec-list">
          <li>
            <strong>Systemic Opacity</strong> — Most environmental and labor impacts remain hidden
            upstream.
          </li>
          <li>
            <strong>Greenwashing</strong> — Marketing narratives replace verifiable information.
          </li>
          <li>
            <strong>Consumer Uncertainty</strong> — Users want to make responsible choices but cannot
            confidently evaluate products.
          </li>
        </ul>
        <p className="proj-label">Design Challenge</p>
        <p className="uos-sec-callout">
          How might interaction design make invisible supply-chain systems understandable and
          meaningful for everyday consumers?
        </p>
        <Fig src="/assets/ideation/ideation_p1.jpg" />
        <Fig src="/assets/ideation/ideation_p2.jpg" />
      </ProjectSection>

      <ProjectSection num="2" title="Secondary Research" titleId="ideation-secondary">
        <h3 className="uos-sec-sub">Understanding Fashion Transparency</h3>
        <p className="uos-sec-prose">
          <strong>Environmental Impact</strong> — Fashion&apos;s environmental impact extends beyond
          visible waste to water consumption, chemical pollution, labor conditions, and carbon
          emissions. However, most of these impacts remain hidden from consumers.
        </p>
        <p className="uos-sec-prose">
          <strong>Supply-chain Opacity</strong> — Most brands disclose only fragments of their supply
          chains, leaving upstream production largely invisible.
        </p>
        <p className="uos-sec-prose">
          <strong>Greenwashing</strong> — Visual aesthetics and marketing language often substitute
          for measurable sustainability evidence.
        </p>
        <p className="uos-sec-prose">
          <strong>Consumer Trust</strong> — Consumers increasingly want transparency but struggle to
          distinguish trustworthy information from promotional claims.
        </p>
        <Fig src="/assets/ideation/ideation_p3.jpg" />
        <Fig src="/assets/ideation/ideation_p4.jpg" />
        <Fig src="/assets/ideation/ideation_p5.jpg" />
      </ProjectSection>

      <ProjectSection num="3" title="Research Insights" titleId="ideation-insights">
        <p className="uos-sec-prose">
          <strong>Finding 01</strong> — Consumers rarely access upstream production information.
        </p>
        <p className="uos-sec-prose">
          <strong>Finding 02</strong> — Visual cues influence purchasing decisions more than factual
          sustainability data.
        </p>
        <p className="uos-sec-prose">
          <strong>Finding 03</strong> — Current transparency systems prioritize disclosure rather than
          comprehension.
        </p>
        <p className="proj-label">Key Takeaway</p>
        <p className="uos-sec-callout">
          Transparency is not simply about providing more data—it is about making information
          understandable.
        </p>
        <Fig src="/assets/ideation/ideation_p6.jpg" />
      </ProjectSection>

      <ProjectSection num="4" title="Primary Research" titleId="ideation-primary">
        <h3 className="uos-sec-sub">Research Methods</h3>
        <p className="uos-sec-prose">
          To understand how consumers evaluate sustainability information during online shopping, I
          combined interviews, contextual observation, factory visits, and card-sorting activities.
        </p>
        <p className="proj-label">Methods</p>
        <ul className="uos-sec-list">
          <li>Factory Observation</li>
          <li>Semi-structured Interviews</li>
          <li>Card Sorting</li>
          <li>Fly-on-the-wall Observation</li>
        </ul>
        <p className="proj-label">Key Findings</p>
        <ul className="uos-sec-list">
          <li>Users trust visuals more than data.</li>
          <li>Sustainability language feels vague.</li>
          <li>Technical information creates cognitive overload.</li>
          <li>People want transparency—but only if it is easy to understand.</li>
        </ul>
        <p className="uos-sec-prose">
          These findings became the foundation for the design direction.
        </p>
        <p className="proj-label">Insight Synthesis</p>
        <p className="uos-sec-callout">
          Consumers do not lack sustainability information. They lack meaningful ways to understand
          it.
        </p>
        <p className="proj-label">Design Opportunity</p>
        <p className="uos-sec-prose">Design for comprehension rather than disclosure.</p>
        <Fig src="/assets/ideation/ideation_p7.jpg" />
        <Fig src="/assets/ideation/ideation_p8.jpg" />
      </ProjectSection>

      <ProjectSection num="5" title="Design Opportunity" titleId="ideation-opportunity">
        <p className="proj-label">How Might We</p>
        <p className="uos-sec-callout">
          How might we transform fragmented sustainability information into a trustworthy shopping
          experience?
        </p>
        <p className="proj-label">Design Principles</p>
        <ul className="uos-sec-list">
          <li>Plain language</li>
          <li>Visual explanation</li>
          <li>Progressive disclosure</li>
          <li>Verified evidence</li>
          <li>Actionable guidance</li>
        </ul>
        <Fig src="/assets/ideation/ideation_p9.jpg" />
      </ProjectSection>

      <ProjectSection num="6" title='project1: "I thought I knew"' titleId="ideation-concept">
        <p className="uos-sec-prose">
          Rather than designing another sustainability label, I designed a digital transparency layer
          that accompanies garments throughout their lifecycle.
        </p>
        <p className="proj-label">Concept Flow</p>
        <p className="uos-sec-prose">
          Transparency Overview → Supply Chain Journey → Customization → Circular Tracking
        </p>
        <p className="uos-sec-prose">
          The concept evolved from information visualization into an interactive decision-support
          system.
        </p>

        <h3 className="uos-sec-sub">Iteration</h3>
        <PrototypeBlock
          title="Paper"
          goal="Test whether users understood the overall concept."
          problems="Users recognized isolated information but failed to understand the system."
          response="Create a unified information architecture"
        />
        <PrototypeBlock
          title="Visual Journey"
          goal="Increase emotional engagement."
          problems="Illustrations improved attention but users still lacked system understanding."
          response="Simplify interaction flow and clarify hierarchy."
        />
        <PrototypeBlock
          title="NFC"
          goal="Combine physical interaction with digital storytelling."
          findings="Users experienced stronger emotional impact and began questioning previous assumptions."
          response="Awareness alone is not enough. Users also need actionable guidance."
        />
        <Fig src="/assets/ideation/ideation_p10.jpg" />
        <Fig src="/assets/ideation/ideation_p11.jpg" />
      </ProjectSection>

      <ProjectSection num="7" title="Project2: Fast Fashion System" titleId="ideation-project2">
        <h3 className="uos-sec-sub">Architecture</h3>
        <p className="uos-sec-prose">
          The final system organizes transparency into interconnected modules that support
          understanding, decision-making, and long-term engagement.
        </p>
        <p className="proj-label">Workflow</p>
        <p className="uos-sec-prose">
          App → Dashboard → Transparency → Supply Chain → Passport → Circular Tracking
        </p>
        <Fig src="/assets/ideation/ideation_p12.jpg" />
        <Fig src="/assets/ideation/ideation_p13.jpg" />
        <Fig src="/assets/ideation/ideation_p14.jpg" />
        <Fig src="/assets/ideation/ideation_p15.jpg" />
        <Fig src="/assets/ideation/ideation_p16.jpg" />

        <h3 className="uos-sec-sub">Wireframes</h3>
        <p className="uos-sec-prose">
          Low-fidelity wireframes mapped the core transparency flows before visual refinement.
        </p>
        <Fig src="/assets/ideation/ideation_p17.jpg" />

        <h3 className="uos-sec-sub">UI Evolution</h3>
        <p className="uos-sec-prose">
          The interface gradually evolved from wireframe structure into a fully integrated
          transparency platform with clearer hierarchy and progressive disclosure.
        </p>

        <h3 className="uos-sec-sub">Final UI</h3>
        <p className="uos-sec-prose">
          <strong>Landing</strong> — Creates trust before interaction.
        </p>
        <p className="uos-sec-prose">
          <strong>Customization</strong> — Personalizes products while revealing material choices.
        </p>
        <p className="uos-sec-prose">
          <strong>Artisan Matching</strong> — Reconnects products with human labor.
        </p>
        <p className="uos-sec-prose">
          <strong>Supply Chain</strong> — Explains production step by step.
        </p>
        <p className="uos-sec-prose">
          <strong>Passport</strong> — Summarizes verified sustainability data.
        </p>
        <p className="uos-sec-prose">
          <strong>Circular Tracking</strong> — Supports repair, resale, and product longevity.
        </p>
        <p className="uos-sec-prose">
          The interface transforms transparency into an everyday shopping experience.
        </p>
        <Fig src="/assets/ideation/ideation_p19.jpg" />

        <h3 className="uos-sec-sub">User Testing</h3>
        <p className="uos-sec-prose">
          To evaluate usability and comprehension, I conducted scenario-based usability testing.
        </p>
        <p className="proj-label">Methods</p>
        <ul className="uos-sec-list">
          <li>5-second comprehension test</li>
          <li>Navigation test</li>
          <li>Think-aloud walkthrough</li>
          <li>Comparison task</li>
        </ul>
        <p className="proj-label">Key Findings</p>
        <ul className="uos-sec-list">
          <li>Users quickly understood the overall system.</li>
          <li>Technical language still required simplification.</li>
          <li>Visual hierarchy improved decision-making.</li>
        </ul>
        <Fig src="/assets/ideation/ideation_p18.jpg" />
      </ProjectSection>

      <ProjectSection num="8" title="Reflection" titleId="ideation-reflection">
        <p className="uos-sec-prose">
          This project shifted my understanding of transparency from data disclosure to human
          comprehension. I realized that interaction design is not about presenting more
          information—it is about helping people make sense of complex systems. The greatest
          challenge was translating invisible supply-chain data into experiences that people could
          both understand and emotionally connect with.
        </p>

        <h3 className="uos-sec-sub">Future Direction</h3>
        <p className="uos-sec-prose">
          This research opens a broader question beyond fashion: how might garments become
          intelligent interfaces connecting humans, materials, and ecological systems? This question
          became the starting point of my subsequent research into embodied interaction, intelligent
          textiles, and AI-mediated wearable systems.
        </p>
        <Fig src="/assets/ideation/ideation_p20.jpg" />
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

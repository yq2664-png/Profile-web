import { SIGNAL_LIVE } from '../../../data/projects';
import { ProjectImage, ProjectSection, ProjectTags } from '../ProjectWriting';
import { useProjectMediaLightbox } from '../../../hooks/useProjectMediaLightbox';
import ProjectMediaLightbox from '../ProjectMediaLightbox';
import '../uos-sections.css';

const TAGS = ['AI Product', 'Information Architecture', 'Product Design'];

const IMAGES = [
  {
    src: '/assets/Signal/signal_user_research.png',
    alt: 'User research — information needs and requirements for AI PMs and designers',
    caption:
      'Figure 1 — User research: four information needs (model capability, research signals, product landscape, market reaction) and three requirements (channel diversity, timeliness, actionability).',
  },
  {
    src: '/assets/Signal/signal_system_overview.png',
    alt: 'Signal system overview — Capture then Rank & Show',
    caption:
      'Figure 2 — System overview: Capture (sources → connectors → qualification → unified candidate pool) then Rank & Show (recall, rank, re-rank → waterfall Feed → Impact Brief).',
  },
  {
    src: '/assets/Signal/signal_source_strategy.png',
    alt: 'Source strategy — why Official, Research, and Developer families, and what evidence each requires',
    caption:
      'Figure 3 — Source lists define where to look; content-level evidence and relevance determine what enters the feed.',
  },
  {
    src: '/assets/Signal/signal_multi_source_capture.png',
    alt: 'Multi-source capture — Official, Research, and Community tracks plus background inputs',
    caption:
      'Figure 4 — Qualification decides what can enter. Brief Readiness decides how deeply the system is allowed to explain it.',
  },
  {
    src: '/assets/Signal/UNIFIED RANKING.png',
    alt: 'Unified ranking logic — annotate candidates, select the next item, ordered Feed',
    caption:
      'Figure 5 — Unified ranking: annotate each candidate, then pick the next item by attention priority, diversity and business rules, and recency. The full Feed continues past the first ten.',
  },
];

const IMAGE_BY_SRC = Object.fromEntries(IMAGES.map((item) => [item.src, item]));

function Fig({ src }) {
  const image = IMAGE_BY_SRC[src];
  if (!image) return null;

  return (
    <ProjectImage src={src} alt={image.alt} caption={image.caption} className={image.className} />
  );
}

export default function SignalContent() {
  const { lightbox, closeLightbox, stepLightbox, activeImage } = useProjectMediaLightbox(
    IMAGES,
    '.project-page-signal .proj-media img',
  );

  return (
    <>
      <ProjectSection title="Overview" titleId="signal-overview" first>
        <p className="uos-sec-prose">
          During my time as a PM intern and a lab intern, I spent a vast amount of time bogged down
          by stifling, routine tasks, leaving me no time to stay informed about the latest
          developments in the AI industry. After discussing this with fellow researchers and AI
          product managers, I realized this wasn&apos;t just a personal issue. Everyone needs to
          keep pace with the rapidly changing AI landscape, yet few can find the time to
          consistently read through the flood of information. What we need is a way to quickly
          identify content that is truly worth reading.
        </p>
      </ProjectSection>

      <ProjectSection title="Problem" titleId="signal-problem">
        <p className="uos-sec-prose">
          AI product managers and designers are hired to ship, but we&apos;re also expected to stay
          current. The problem is, information intake often gets whatever time is left.
        </p>
        <p className="proj-label">Core problem</p>
        <ul className="uos-sec-list">
          <li>
            AI product managers and researchers are pressed for time, so they need to access and
            read high-quality information more efficiently.
          </li>
          <li>
            Since the definition of &quot;good information&quot; varies from person to person,
            personalized recommendations are required.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="User Research" titleId="signal-research">
        <p className="uos-sec-prose">
          Interviews asked a single question: what information do AI PMs and designers need to stay
          ahead of AI change? Four needs came back: model capability, research signals, the product
          landscape, and market reaction. In addition, three requirements for the information
          itself: diversity of channels, timeliness, and a takeaway they can act on.
        </p>
        <p className="uos-sec-callout">
          The problem wasn&apos;t access to AI information — it was knowing what to watch, what to
          trust, and what it means for the product.
        </p>
        <Fig src="/assets/Signal/signal_user_research.png" />
      </ProjectSection>

      <ProjectSection title="Design Goal" titleId="signal-goal">
        <p className="proj-label">How Might We</p>
        <p className="uos-sec-callout">
          How might we give AI product managers and designers a high-SNR, personalized window of
          intelligence in the little time they have?
        </p>
        <p className="proj-label">Two Goals</p>
        <ol className="uos-flow">
          <li>
            <span className="uos-flow-num">01</span>
            <div>
              <p className="uos-flow-title">Reduce noise</p>
              <p className="uos-flow-desc">
                Surface high-quality, product-relevant information so users spend less time
                filtering and more time reading what matters.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">02</span>
            <div>
              <p className="uos-flow-title">Personalize relevance</p>
              <p className="uos-flow-desc">
                Prioritize information based on each user&apos;s role, interests, and product
                context instead of giving everyone the same feed.
              </p>
            </div>
          </li>
        </ol>
      </ProjectSection>

      <ProjectSection title="System Overview" titleId="signal-system">
        <Fig src="/assets/Signal/signal_system_overview.png" />
      </ProjectSection>

      <ProjectSection title="Source Strategy" titleId="signal-sources">
        <p className="uos-sec-prose">
          Rather than aggregating as many sources as possible, I defined three types of signals
          based on the questions users needed answered: official sources show what shipped, research
          sources reveal what may become possible, and developer communities show what is happening
          in real use.
        </p>
        <p className="uos-sec-prose">
          Each source type therefore follows a different selection and evidence standard. The goal
          wasn&apos;t maximum coverage, but making sure each source had a clear reason to be in the
          feed.
        </p>
        <Fig src="/assets/Signal/signal_source_strategy.png" />
      </ProjectSection>

      <ProjectSection title="Scrape" titleId="signal-scrape">
        <p className="uos-sec-prose">
          The challenge wasn&apos;t finding sources, but deciding what deserved attention. I built
          source-specific qualification paths for official launches, research, and developer
          evidence, then merged qualified signals into one ranked Feed, with background sources
          such as X providing context at lower priority.
        </p>
        <p className="uos-sec-prose">
          Signal gives each source type its own qualification track. Official Launch (SUPPLY) is
          first-party only, with launch qualification and event clustering. Research Paper
          (CAPABILITY) needs a canonical identity, product relevance, and deduplication. Developer
          Community (ADOPTION) needs evidence clustering and recurring adoption or friction.
          Background is not a fourth track — it enters only as context, and only when qualified.
          Official org-X stays inside Official Launch.
        </p>
        <p className="uos-sec-prose">
          Qualified items merge into one shared list, with source family and role still on the card.
          Before ranking, each item is assigned a Brief Readiness — full, factual-only, or none —
          so the Feed only renders the depth the system is allowed to explain. Unified ranking then
          becomes the waterfall Feed.
        </p>
        <p className="proj-label">The gate</p>
        <p className="uos-sec-callout">
          Qualification decides what can enter. Brief Readiness decides how deeply it is explained.
        </p>
        <Fig src="/assets/Signal/signal_multi_source_capture.png" />
      </ProjectSection>

      <ProjectSection title="Ranking" titleId="signal-ranking">
        <p className="uos-sec-prose">
          A single relevance score wasn&apos;t enough. I designed ranking as an attention-allocation
          system: candidates are prioritized by attention class, balanced by role and business
          rules, then ordered by recency. The first 10 slots receive additional diversity
          constraints, while the full Feed remains a continuous ranked waterfall.
        </p>
        <Fig src="/assets/Signal/UNIFIED RANKING.png" />
      </ProjectSection>

      <a
        className="proj-try-now"
        href={SIGNAL_LIVE}
        target="_blank"
        rel="noopener noreferrer"
      >
        Try it now
      </a>
      <ProjectTags tags={TAGS} />

      <ProjectMediaLightbox
        lightbox={lightbox}
        activeImage={activeImage}
        onClose={closeLightbox}
        onStep={stepLightbox}
      />
    </>
  );
}

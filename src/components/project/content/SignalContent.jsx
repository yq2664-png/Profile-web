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
      'Figure 1 — User research: four information needs (model capability, research signals, product landscape, market reaction) and four requirements (channel diversity, timeliness, quality, actionability).',
  },
  {
    src: '/assets/Signal/signal_system_overview.png',
    alt: 'Signal system overview — Sources, Capture, Rank & Show',
    caption:
      'Figure 2 — System overview: gated capture from Official, Research, Community, and Background sources, merged into one ranked Feed with Impact Briefs.',
  },
  {
    src: '/assets/Signal/signal_source_strategy.png',
    alt: 'Source strategy — why Official, Research, and Developer families, and how each is trusted',
    caption:
      'Figure 3 — Source strategy: each family is selected for the evidence it uniquely provides, then gated by its own discovery and trust criteria. Background stays context-only.',
  },
  {
    src: '/assets/Signal/signal_multi_source_capture.png',
    alt: 'Multi-source capture — Official, Research, and Community tracks plus background inputs',
    caption:
      'Figure 4 — Multi-source capture: three core intelligence tracks plus qualified background inputs converge into one ranked waterfall Feed.',
  },
  {
    src: '/assets/Signal/Qualification Logic.png',
    alt: 'Qualification logic for launches, research papers, and developer community evidence',
    caption:
      'Figure 5 — Qualification logic: launches, papers, and community evidence each pass through a different standard of evidence before entering the ranked feed.',
  },
  {
    src: '/assets/Signal/UNIFIED RANKING.png',
    alt: 'Unified ranking logic — business priority, role diversity, recency and spacing',
    caption:
      'Figure 6 — Unified ranking: business priority, role diversity, and recency/spacing allocate a mixed attention window — not a single global score.',
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
          Labs ship weekly. Papers land daily. Developers report what actually works — and what
          breaks. Signal captures those streams, qualifies each by its own standard of evidence, and
          ranks a mixed window of attention so teams can see what shipped, what may become possible,
          and what is happening in real use.
        </p>
        <p className="uos-sec-callout">
          Signal turns the flood of AI information into ranked, role-aware intelligence for AI
          product managers and designers.
        </p>
      </ProjectSection>

      <ProjectSection title="Problem" titleId="signal-problem">
        <p className="uos-sec-prose">
          AI product managers and designers are hired to ship. Staying current is expected, but it
          is not the job. The day goes to delivery. Information intake gets the leftover minutes
          — if it gets any time at all.
        </p>
        <p className="uos-sec-prose">
          In those minutes, the stream is still undifferentiated: lab launches, research papers,
          community threads, and commentary, all competing at the same volume. The result is not a
          knowledge gap. It is a signal-to-noise problem. There is too much to scan, and too little
          that is worth the time they do not have.
        </p>
        <p className="proj-label">The real gap</p>
        <p className="uos-sec-callout">
          AI PMs and designers do not lack sources. They lack a high-SNR feed that fits the time
          they have between shipping.
        </p>
      </ProjectSection>

      <ProjectSection title="User Research" titleId="signal-research">
        <p className="uos-sec-prose">
          Interviews asked a single question: what information do AI PMs and designers need to stay
          ahead of AI change? Four needs came back — model capability, research signals, the product
          landscape, and market reaction — and four requirements for the information itself:
          diversity of channels, timeliness, quality beyond headlines, and a takeaway they can act
          on.
        </p>
        <p className="uos-sec-callout">
          The problem wasn&apos;t access to AI information — it was knowing what to watch, what to
          trust, and what it means for the product.
        </p>
        <Fig src="/assets/Signal/signal_user_research.png" />
      </ProjectSection>

      <ProjectSection title="Design Goal" titleId="signal-goal">
        <p className="uos-sec-prose">
          The design shift is from more information to a higher signal-to-noise ratio — and from a
          generic stream to recommendations shaped by role and product context.
        </p>
        <p className="proj-label">How Might We</p>
        <p className="uos-sec-callout">
          How might we give AI product managers and designers a high-SNR, personalized window of
          intelligence in the little time they have?
        </p>
        <p className="proj-label">Two goals</p>
        <ul className="uos-sec-list">
          <li>
            <strong>Raise the signal-to-noise ratio</strong> — Qualify and rank so only
            high-evidence, product-relevant items enter the attention window.
          </li>
          <li>
            <strong>Personalize what surfaces</strong> — Match intelligence to role and the work
            being shipped, instead of ranking one feed for everyone.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="System Overview" titleId="signal-system">
        <p className="uos-sec-prose">
          Signal is a three-stage pipeline: Sources → Capture → Rank &amp; Show. Raw streams are
          gated before they ever reach one ranked Feed.
        </p>
        <ol className="uos-flow">
          <li>
            <span className="uos-flow-num">01</span>
            <div>
              <p className="uos-flow-title">Sources</p>
              <p className="uos-flow-desc">
                Official labs, research venues, community evidence, and background media — each
                family answers a different question.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">02</span>
            <div>
              <p className="uos-flow-title">Capture</p>
              <p className="uos-flow-desc">
                Live connectors pull each family, then gate it. Official, Research, and Community
                are qualified with a publish cap; Background enters with lighter gating. The result
                is one shared list — not a raw recall set.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">03</span>
            <div>
              <p className="uos-flow-title">Rank &amp; Show</p>
              <p className="uos-flow-desc">
                One unified rank (priority, recency, role diversity, spacing) becomes a waterfall
                Feed — not Top N. Opening a card gives an Impact Brief: what happened, why it
                matters, impact, and a takeaway.
              </p>
            </div>
          </li>
        </ol>
        <Fig src="/assets/Signal/signal_system_overview.png" />
      </ProjectSection>

      <ProjectSection title="Source Strategy" titleId="signal-sources">
        <p className="uos-sec-prose">
          Different sources exist to answer different questions. Mixing them without a role produces
          noise — official availability sitting next to rumor, research sitting next to shipping
          news. Each family was chosen for the evidence it uniquely provides, then held to its own
          discovery and trust criteria.
        </p>
        <ul className="uos-sec-list">
          <li>
            <strong>Official signals</strong> — First-party blogs, newsrooms, release notes, and
            changelogs. Strongest evidence of what actually shipped. 12 labs. What shipped?
          </li>
          <li>
            <strong>Research signals</strong> — Canonical papers from HF Daily, arXiv, and trusted
            venues. Capability before it is visible in products. What may become possible?
          </li>
          <li>
            <strong>Developer signals</strong> — Recurring implementation evidence from 8
            product-relevant repos; Hacker News as support. Friction that launches cannot show. What
            is happening in real use?
          </li>
          <li>
            <strong>Background</strong> — Media, blogs, YouTube, X, Product Hunt. Context only —
            not a fourth intelligence track.
          </li>
        </ul>
        <p className="uos-sec-callout">
          Landscape and venue lists define where to look. Authority and relevance decide what is
          trusted.
        </p>
        <Fig src="/assets/Signal/signal_source_strategy.png" />
      </ProjectSection>

      <ProjectSection title="Intelligence Pipeline" titleId="signal-pipeline">
        <p className="uos-sec-prose">
          A launch, a paper, and a community thread cannot share the same rules. If they did,
          official availability would be held to the same bar as a GitHub complaint, and a research
          preprint would be treated like a shipped product.
        </p>
        <p className="uos-sec-prose">
          Signal gives each source type its own qualification track. Official launches need
          first-party confirmation, a meaningful release, and availability. Research needs a
          canonical paper and product relevance. Community evidence needs recurrence, a concrete
          artifact, and a product implication. Background is not a fourth track — it enters only as
          context, and only when qualified.
        </p>
        <p className="uos-sec-prose">
          Qualified items merge into one shared list, with source family still on the card. Before
          ranking, each item is assigned a Brief Readiness — full, factual-only, or none — so the
          Feed only renders the depth the system is allowed to explain. Unified ranking then becomes
          a waterfall Feed, not a Top-N screen.
        </p>
        <p className="proj-label">The gate</p>
        <p className="uos-sec-callout">
          Qualification decides what can enter. Brief Readiness decides how deeply it is explained.
        </p>
        <Fig src="/assets/Signal/signal_multi_source_capture.png" />
        <Fig src="/assets/Signal/Qualification Logic.png" />
      </ProjectSection>

      <ProjectSection title="Ranking" titleId="signal-ranking">
        <p className="uos-sec-prose">
          Once items are qualified, the remaining problem is mixing them. A single global score
          clusters similar items — three launches from the same lab, or a feed that never surfaces
          developer friction.
        </p>
        <p className="uos-sec-prose">
          Signal ranks by allocating attention, not by sorting a universal score. Business priority
          sets the base (T1 model availability, T2 products and platforms). Role diversity keeps
          Launch, Research, and In the Wild in the same window — official product signals, emerging
          capability, and real-world developer evidence. Recency and spacing apply time decay and
          avoid same-org stacking.
        </p>
        <p className="uos-sec-prose">
          The Feed is a waterfall, not Top N: every ranked item continues down the list. The first
          ten slots get extra constraints — T1 priority, role diversity, and org/topic spacing — so
          the opening window is mixed by design.
        </p>
        <p className="uos-sec-callout">
          Ranking is not a global score. It allocates attention across different kinds of
          intelligence.
        </p>
        <Fig src="/assets/Signal/UNIFIED RANKING.png" />
      </ProjectSection>

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

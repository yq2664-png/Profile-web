import { ProjectImage, ProjectSection, ProjectTags } from '../ProjectWriting';
import { useProjectMediaLightbox } from '../../../hooks/useProjectMediaLightbox';
import ProjectMediaLightbox from '../ProjectMediaLightbox';
import '../uos-sections.css';

const TAGS = ['AI Product', 'Information Architecture', 'Product Design'];

const IMAGES = [
  {
    src: '/assets/Signal/Product Framework Overview.png',
    alt: 'Signal product framework — Capture, Qualify, Rank, Understand, Synthesize',
    caption:
      'Figure 1 — Product framework: raw sources move through Capture → Qualify → Rank → Understand → Synthesize, each stage with its own logic, interface, and output.',
  },
  {
    src: '/assets/Signal/Source Coverage.png',
    alt: 'Source coverage — official labs, research venues, and developer evidence',
    caption:
      'Figure 2 — Source coverage: official product signals, research discovery, and developer evidence each answer a different question; background media stays context-only.',
  },
  {
    src: '/assets/Signal/multi - source capture.png',
    alt: 'Multi-source capture pipeline from official, research, and community tracks',
    caption:
      'Figure 3 — Multi-source capture: three source tracks run in parallel, each with its own qualification logic, then converge into qualified intelligence.',
    className: 'proj-media--portrait',
  },
  {
    src: '/assets/Signal/Qualification Logic.png',
    alt: 'Qualification logic for launches, research papers, and developer community evidence',
    caption:
      'Figure 4 — Qualification logic: launches, papers, and community evidence each pass through a different standard of evidence before entering the ranked feed.',
  },
  {
    src: '/assets/Signal/UNIFIED RANKING.png',
    alt: 'Unified ranking logic — business priority, role diversity, recency and spacing',
    caption:
      'Figure 5 — Unified ranking: business priority, role diversity, and recency/spacing allocate a mixed attention window — not a single global score.',
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
        <p className="uos-sec-callout">
          Signal turns the flood of AI information into ranked, role-aware intelligence for product
          managers and designers.
        </p>
        <p className="uos-sec-prose">
          Labs ship weekly. Papers land daily. Developers report what actually works — and what
          breaks. Signal captures those streams, qualifies each by its own standard of evidence, and
          ranks a mixed window of attention so teams can see what shipped, what may become possible,
          and what is happening in real use.
        </p>
      </ProjectSection>

      <ProjectSection title="Problem" titleId="signal-problem">
        <p className="uos-sec-prose">
          The AI ecosystem no longer suffers from too little information. It suffers from too little
          judgment.
        </p>
        <p className="uos-sec-prose">
          Product managers and designers are expected to stay current: new models, new capabilities,
          new tools, new failure modes. But a lab changelog, an arXiv paper, and a GitHub thread are
          not the same kind of signal. When they are treated as one undifferentiated feed, two
          things happen. Everything looks urgent. And the thing that actually matters gets buried.
        </p>
        <p className="proj-label">The real gap</p>
        <p className="uos-sec-callout">
          PMs and designers don&apos;t need more AI information. They need a way to tell which
          signals deserve their attention.
        </p>
      </ProjectSection>

      <ProjectSection title="Design Goal" titleId="signal-goal">
        <p className="uos-sec-prose">
          The design shift is from information overload to actionable intelligence.
        </p>
        <p className="proj-label">How Might We</p>
        <p className="uos-sec-callout">
          How might we help PMs and designers move from scanning everything to acting on what
          matters?
        </p>
        <p className="proj-label">Three goals</p>
        <ul className="uos-sec-list">
          <li>
            <strong>Capture with intent</strong> — Cover official launches, research, and real-world
            evidence, because each answers a different question.
          </li>
          <li>
            <strong>Qualify by role</strong> — Do not run a shipped product, a paper, and a
            community thread through the same filter.
          </li>
          <li>
            <strong>Rank for attention</strong> — Mix types in one window so the feed allocates
            attention, instead of stacking similar items.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection title="System Overview" titleId="signal-system">
        <p className="uos-sec-prose">
          Signal is a five-stage pipeline: Capture → Qualify → Rank → Understand → Synthesize. Each
          stage has its own job — and its own interface.
        </p>
        <ol className="uos-flow">
          <li>
            <span className="uos-flow-num">01</span>
            <div>
              <p className="uos-flow-title">Capture</p>
              <p className="uos-flow-desc">
                Multi-source intelligence from official labs, trusted research venues, and developer
                communities.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">02</span>
            <div>
              <p className="uos-flow-title">Qualify</p>
              <p className="uos-flow-desc">
                Role-based filters: each source type passes through its own evidence and relevance
                rules.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">03</span>
            <div>
              <p className="uos-flow-title">Rank</p>
              <p className="uos-flow-desc">
                A unified ranking that balances business priority, role diversity, recency, and
                spacing.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">04</span>
            <div>
              <p className="uos-flow-title">Understand</p>
              <p className="uos-flow-desc">
                Each qualified item becomes an Impact Brief: what happened, why it matters, potential
                impact, and a takeaway.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">05</span>
            <div>
              <p className="uos-flow-title">Synthesize</p>
              <p className="uos-flow-desc">
                Independent signals connect into patterns, contradictions, opportunities, and
                product implications.
              </p>
            </div>
          </li>
        </ol>
        <Fig src="/assets/Signal/Product Framework Overview.png" />
      </ProjectSection>

      <ProjectSection title="Source Strategy" titleId="signal-sources">
        <p className="uos-sec-prose">
          Different sources exist to answer different questions. Mixing them without a role produces
          noise — official availability sitting next to rumor, research sitting next to shipping
          news.
        </p>
        <ul className="uos-sec-list">
          <li>
            <strong>Official product signals</strong> — 12 first-party labs. What shipped?
          </li>
          <li>
            <strong>Research discovery</strong> — Trusted venues + arXiv. What may become possible?
          </li>
          <li>
            <strong>Developer evidence</strong> — 8 repos + Hacker News. What is happening in real
            use?
          </li>
          <li>
            <strong>Background</strong> — Media, blogs, X, Product Hunt. What else is being
            discussed — context only, never ranked as intelligence.
          </li>
        </ul>
        <p className="uos-sec-callout">
          We capture, qualify, and surface each source with the right standard of evidence.
        </p>
        <Fig src="/assets/Signal/Source Coverage.png" />
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
          artifact, and a product implication.
        </p>
        <p className="proj-label">The gate</p>
        <p className="uos-sec-callout">
          Only items that pass their own track become Qualified Intelligence. Everything else stays
          out of the feed.
        </p>
        <Fig src="/assets/Signal/multi - source capture.png" />
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
          Launch, Research, and In the Wild in the same window. Recency and spacing apply time
          decay and avoid same-org stacking. The top of the feed is limited by design.
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

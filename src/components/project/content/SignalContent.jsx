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
      'Figure 3 — Source strategy: Official, Research, and Developer families, each with a why, a selection rule, and the evidence it must show before entering the feed.',
  },
  {
    src: '/assets/Signal/signal_multi_source_capture.png',
    alt: 'Multi-source capture — Official, Research, and Community tracks plus background inputs',
    caption:
      'Figure 4 — Multi-source capture: three core intelligence tracks plus qualified background inputs converge into one ranked waterfall Feed.',
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
          ahead of AI change? Four needs came back — model capability, research signals, the product
          landscape, and market reaction — and three requirements for the information itself:
          diversity of channels, timeliness, and a takeaway they can act on.
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
          Signal is a two-stage pipeline: Capture → Rank &amp; Show. Raw streams are gated before
          they ever reach one ranked Feed.
        </p>
        <ol className="uos-flow">
          <li>
            <span className="uos-flow-num">01</span>
            <div>
              <p className="uos-flow-title">Capture</p>
              <p className="uos-flow-desc">
                Official, Research, Community, and Background each enter through live connectors,
                then source-specific qualification. Official, Research, and Community get a publish
                cap; Background enters with lighter gating. They merge into one unified candidate
                pool — source family stays on the card.
              </p>
            </div>
          </li>
          <li>
            <span className="uos-flow-num">02</span>
            <div>
              <p className="uos-flow-title">Rank &amp; Show</p>
              <p className="uos-flow-desc">
                Recall pulls from that pool; rank applies attention priority and recency; re-rank
                adds T1/T2 preference, role diversity, and org/topic spacing. All ranked items
                continue down a waterfall Feed. Opening a card gives an Impact Brief: what happened,
                why it matters, impact, and a takeaway.
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
          news. Each family was chosen for the question it answers, then held to its own selection
          rule and evidence bar.
        </p>
        <ul className="uos-sec-list">
          <li>
            <strong>Official signals</strong> — Track what models and AI products have become
            available. First-party release details from 12 labs + 2 release RSS.
          </li>
          <li>
            <strong>Research signals</strong> — Surface emerging capabilities with product
            implications. Canonical papers from HF Daily and selected AI / HCI venues.
          </li>
          <li>
            <strong>Developer signals</strong> — Reveal adoption patterns and implementation
            friction. Recurring evidence from product-relevant GitHub repos, with Hacker News as
            support.
          </li>
        </ul>
        <Fig src="/assets/Signal/signal_source_strategy.png" />
      </ProjectSection>

      <ProjectSection title="Scrape" titleId="signal-scrape">
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
      </ProjectSection>

      <ProjectSection title="Ranking" titleId="signal-ranking">
        <p className="uos-sec-prose">
          Once items are qualified, the remaining problem is mixing them. A single global score
          clusters similar items — three launches from the same lab, or a feed that never surfaces
          developer friction.
        </p>
        <p className="uos-sec-prose">
          Each candidate is annotated with a role, an attention class, and an identity. T1/T2 tiers
          apply only to SUPPLY. The feed is built one item at a time: attention priority first
          (HIGH → MEDIUM → BACKGROUND), then diversity and business rules — org/topic spacing, role
          coverage in the first ten, T1 before T2 — then recency.
        </p>
        <p className="uos-sec-prose">
          The result is a full ordered Feed. Positions 1–10 get extra role-coverage and repetition
          rules. Everything else continues down the list.
        </p>
        <p className="uos-sec-callout">
          Roles have no fixed positions. BACKGROUND follows core attention classes, and may enter
          the first ten when core candidates are insufficient.
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

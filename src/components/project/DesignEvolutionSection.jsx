import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import './DesignEvolutionSection.css';
import './uos-sections.css';

const EASE = [0.25, 0.46, 0.45, 0.94];

const EVOLUTION_ITEMS = [
  {
    num: '01',
    feedback: "I don't understand why the AI generated this insight.",
    responseTitle: 'Introduced Evidence-Based Reasoning.',
    response:
      'Every insight is now linked to supporting observations and a transparent reasoning process instead of appearing as a black-box result.',
    tag: 'Explainability',
  },
  {
    num: '02',
    feedback: 'The AI focuses on individual opinions but misses the bigger user experience.',
    responseTitle: 'Introduced Multi-Lens Evaluation.',
    response:
      'Products are now evaluated through usability, trust, accessibility, emotion, and business perspectives to provide more balanced insights.',
    tag: 'Multiple Perspectives',
  },
  {
    num: '03',
    feedback: 'The insights are useful, but I still need to turn them into product decisions.',
    responseTitle: null,
    response:
      'Added opportunity prioritization, feature recommendations, and editable PRDs to bridge research and execution.',
    tag: 'Actionable Output',
  },
  {
    num: '04',
    feedback: 'This should fit naturally into my existing workflow.',
    responseTitle: null,
    response:
      'Designed a lightweight Skill integration so designers can access User Research OS directly inside AI coding assistants and existing product workflows.',
    tag: 'Workflow Integration',
  },
];

function EvolutionCard({ item, index, active }) {
  const reduced = useReducedMotion();
  const cardDelay = reduced ? 0 : index * 0.12;

  return (
    <motion.article
      className={`uos-de-card${index % 2 === 1 ? ' uos-de-card--alt' : ''}`}
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
      transition={{ duration: reduced ? 0 : 0.6, delay: cardDelay, ease: EASE }}
    >
      <span className="uos-de-label">{item.num}</span>

      <div className="uos-de-columns">
        <motion.div
          className="uos-de-col uos-de-col--feedback"
          initial={{ opacity: 0, x: reduced ? 0 : -12 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: reduced ? 0 : -12 }}
          transition={{ duration: reduced ? 0 : 0.5, delay: cardDelay, ease: EASE }}
        >
          <p className="uos-de-col-label">User Feedback</p>
          <blockquote className="uos-de-feedback">&ldquo;{item.feedback}&rdquo;</blockquote>
        </motion.div>

        <div className="uos-de-divider" aria-hidden="true">
          <span className="uos-de-divider-line" />
          <span className="uos-de-divider-arrow" />
        </div>

        <motion.div
          className="uos-de-col uos-de-col--response"
          initial={{ opacity: 0, x: reduced ? 0 : 12 }}
          animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: reduced ? 0 : 12 }}
          transition={{
            duration: reduced ? 0 : 0.5,
            delay: reduced ? 0 : cardDelay + 0.15,
            ease: EASE,
          }}
        >
          <p className="uos-de-col-label">Design Response</p>
          {item.responseTitle ? (
            <p className="uos-de-response-lead">{item.responseTitle}</p>
          ) : null}
          <p className="uos-de-response">{item.response}</p>
        </motion.div>
      </div>

      <p className="uos-de-tag">{item.tag}</p>
    </motion.article>
  );
}

export default function DesignEvolutionSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.08 });
  const reduced = useReducedMotion();

  return (
    <section className="uos-de" ref={sectionRef} aria-labelledby="uos-de-title">
      <div className="uos-de-inner">
        <header className="uos-de-header">
          <h2 id="uos-de-title" className="uos-sec-title">
            6 Iterating Through User Feedback
          </h2>
          <p className="uos-sec-prose uos-de-lead">
            User Research OS was shaped through continuous user interviews, prototype testing, and
            feedback. Each iteration focused on solving a specific problem uncovered during
            evaluation, gradually transforming the product from an AI generator into an
            AI-supported design research workspace.
          </p>
        </header>

        <div className="uos-de-stack">
          {EVOLUTION_ITEMS.map((item, index) => (
            <EvolutionCard key={item.num} item={item} index={index} active={inView} />
          ))}
        </div>

        <motion.aside
          className="uos-de-summary"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
          transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : 0.55, ease: EASE }}
        >
          <p className="uos-de-summary-label">Key Takeaway</p>
          <p className="uos-de-summary-text">
            The biggest evolution wasn&apos;t adding more AI features.
          </p>
          <p className="uos-de-summary-text uos-de-summary-text--emphasis">
            It was redefining AI&apos;s role—from generating answers to supporting design reasoning.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}

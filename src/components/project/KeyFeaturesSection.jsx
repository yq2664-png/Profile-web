import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import './KeyFeaturesSection.css';
import './uos-sections.css';

const EASE = [0.25, 0.46, 0.45, 0.94];

export default function KeyFeaturesSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.08 });
  const reduced = useReducedMotion();

  return (
    <section className="uos-kf" ref={sectionRef} aria-labelledby="uos-kf-title">
      <div className="uos-kf-inner">
        <header className="uos-kf-header">
          <h2 id="uos-kf-title" className="uos-sec-title">
            4 Core Capabilities
          </h2>
          <p className="uos-sec-prose uos-kf-lead">
            User Research OS is designed to support the entire design thinking process—from understanding
            users to making informed product decisions. Rather than generating content, it helps designers
            reason through complex design problems.
          </p>
        </header>

        <motion.figure
          className="uos-kf-overview"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
          transition={{ duration: reduced ? 0 : 0.55, ease: EASE }}
        >
          <img
            className="uos-kf-overview-img"
            src="/assets/User OS/Core Capabilities.png"
            alt="Core Capabilities — user perspective simulation, evidence-based reasoning, multi-lens evaluation, and actionable product decisions"
            loading="lazy"
          />
        </motion.figure>

        <motion.figure
          className="uos-kf-screenshot"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
          transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.1, ease: EASE }}
        >
          <img
            className="uos-kf-overview-img"
            src="/assets/User OS/screenshoot.jpg"
            alt="User Research OS product screenshot"
            loading="lazy"
          />
        </motion.figure>

        <motion.blockquote
          className="uos-kf-callout"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
          transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : 0.15, ease: EASE }}
        >
          <p className="uos-kf-callout-text">
            Good product decisions come from understanding users—not just generating outputs.
          </p>
          <p className="uos-kf-callout-text">
            User Research OS is designed to make that reasoning process more transparent, collaborative,
            and actionable.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

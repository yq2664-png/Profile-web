import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import './SystemDesignSection.css';
import './uos-sections.css';

const EASE = [0.25, 0.46, 0.45, 0.94];

export default function SystemDesignSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const reduced = useReducedMotion();

  return (
    <section className="uos-sd" ref={sectionRef} aria-labelledby="uos-sd-title">
      <div className="uos-sd-inner">
        <header className="uos-sd-header">
          <h2 id="uos-sd-title" className="uos-sec-title">
            5 From Product Context to Product Decisions
          </h2>
          <p className="uos-sec-prose uos-sd-lead">
            User Research OS doesn&apos;t generate answers directly. It follows a structured reasoning
            pipeline that combines product context, research evidence, and user simulation to produce
            explainable design decisions.
          </p>
        </header>

        <motion.figure
          className="uos-sd-pipeline-image"
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 20 }}
          transition={{ duration: reduced ? 0 : 0.65, ease: EASE }}
        >
          <img
            src="/assets/User OS/pipeline.png"
            alt="User Research OS reasoning pipeline — product context, AI reasoning stages, and design outputs"
            loading="lazy"
          />
        </motion.figure>

        <motion.blockquote
          className="uos-sd-callout"
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 20 }}
          transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.2, ease: EASE }}
        >
          <p className="uos-sd-callout-quote">
            Good AI doesn&apos;t replace design thinking.
            <br />
            It makes design reasoning more transparent.
          </p>
          <p className="uos-sd-callout-sub">
            User Research OS is designed to help teams understand not only what users might think, but
            also why those insights emerge.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}

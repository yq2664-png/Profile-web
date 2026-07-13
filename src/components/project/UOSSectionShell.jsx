import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import './uos-sections.css';

const EASE = [0.25, 0.46, 0.45, 0.94];

export function UOSSectionShell({ num, title, titleId, first, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const reduced = useReducedMotion();
  const displayTitle = num ? `${num} ${title}` : title;

  return (
    <section
      ref={ref}
      className={`uos-sec${first ? ' uos-sec--first' : ''}`}
      aria-labelledby={titleId}
    >
      <div className="uos-sec-inner">
        <motion.header
          className="uos-sec-header"
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 20 }}
          transition={{ duration: reduced ? 0 : 0.55, ease: EASE }}
        >
          <h2 id={titleId} className="uos-sec-title">
            {displayTitle}
          </h2>
        </motion.header>
        <motion.div
          className="uos-sec-body"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 16 }}
          transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.08, ease: EASE }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

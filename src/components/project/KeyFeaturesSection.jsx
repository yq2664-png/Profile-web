import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { ProjectImage } from './ProjectWriting';
import { UOS_KEY_FEATURE_IMAGES } from './uosMedia';
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

        {UOS_KEY_FEATURE_IMAGES.map((image, index) => (
          <motion.div
            key={image.src}
            className="uos-kf-overview"
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
            transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : index * 0.08, ease: EASE }}
          >
            <ProjectImage src={image.src} alt={image.alt} caption={image.caption} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

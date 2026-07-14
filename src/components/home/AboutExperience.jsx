import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './AboutExperience.css';

const EASE = [0.25, 0.46, 0.45, 0.94];

const EXPERIENCES = [
  {
    id: 'guanyun',
    role: 'Research Assistant',
    period: 'May 2026 – Present',
    org: 'Guanyun Lab, Zhejiang University',
    details: [
      'Conducting qualitative and mixed-methods research on post-conflict social interaction.',
      'Translating research findings into interaction opportunities through Research through Design.',
      'Designing and evaluating AI-assisted systems for emotional reflection and decision-making.',
      'Collaborating on prototype development, user studies, and research documentation.',
    ],
  },
  {
    id: 'common-design',
    role: 'Design Strategy Intern',
    period: 'May 2026 – Jun 2026',
    org: 'Common Design Studio',
    details: [
      'Contributed to the launch of the APL-X Link AI technology media brand.',
      'Developed brand identity, visual systems, and communication strategies.',
      'Planned content and interview programs for AI founders and industry experts.',
      'Created cross-platform content strategies and marketing materials.',
    ],
  },
  {
    id: 'arthive',
    role: 'Curator & Exhibition Designer',
    period: 'Aug 2022 – Jun 2025',
    org: 'Gallery Arthive · Hangzhou, China',
    details: [
      'Curated exhibitions by developing themes, spatial layouts, and visitor journeys.',
      'Designed exhibition graphics, including posters, brochures, and promotional materials.',
      'Supported exhibition communication through digital and social media content.',
    ],
  },
];

export default function AboutExperience() {
  const [activeId, setActiveId] = useState(null);
  const reduced = useReducedMotion();

  const handleToggle = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <div className="about-exp">
      <p className="about-edu-label">Experience</p>
      <ul className="about-exp-list">
        {EXPERIENCES.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id} className={`about-exp-item${isActive ? ' is-open' : ''}`}>
              <button
                type="button"
                className={`about-exp-trigger${isActive ? ' is-active' : ''}`}
                onClick={() => handleToggle(item.id)}
                aria-expanded={isActive}
              >
                <span className="edu-head">
                  <span className="edu-school">{item.role}</span>
                  <span className="edu-loc">{item.period}</span>
                </span>
                <span className="edu-degree">{item.org}</span>
              </button>

              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    key="panel"
                    className="about-exp-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.32, ease: EASE }}
                  >
                    <div className="about-exp-panel-inner">
                      <ul className="about-exp-details">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

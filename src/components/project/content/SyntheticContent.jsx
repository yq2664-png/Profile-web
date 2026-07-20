import { ProjectSection } from '../ProjectWriting';
import '../uos-sections.css';
import '../../../styles/project-synthetic.css';

const REFERENCES = [
  { href: 'https://youtu.be/oha5NDWbBCY', label: 'https://youtu.be/oha5NDWbBCY' },
  { href: 'https://youtu.be/KtplxTpYcHQ', label: 'https://youtu.be/KtplxTpYcHQ' },
  { href: 'https://youtu.be/aiWGenwJe4M', label: 'https://youtu.be/aiWGenwJe4M' },
  { href: 'https://youtu.be/kcZH2zcHANc', label: 'https://youtu.be/kcZH2zcHANc' },
];

export default function SyntheticContent() {
  return (
    <>
      <div className="td-video-wrap" data-aos="fade-up" data-aos-duration="800">
        <video controls autoPlay muted loop playsInline>
          <source src="/assets/TD/td-final.mp4" type="video/mp4" />
        </video>
      </div>

      <ProjectSection
        title="Synthetic Ocean School"
        titleId="synthetic-overview"
        first
      >
        <p className="uos-sec-prose">
          Synthetic Ocean explores a speculative future in which the ocean is no longer a purely
          natural environment, but a hybrid ecosystem formed by plastic waste, artificial materials,
          machine intelligence, and human intervention. Through generative visuals in TouchDesigner,
          the project imagines marine life evolving into metallic, synthetic organisms, questioning
          where the boundary between nature and artificiality truly lies.
        </p>
      </ProjectSection>

      <ProjectSection title="Reference" titleId="synthetic-reference">
        <ul className="uos-sec-list">
          {REFERENCES.map((ref) => (
            <li key={ref.href}>
              <a href={ref.href} target="_blank" rel="noopener noreferrer">
                {ref.label}
              </a>
            </li>
          ))}
        </ul>
      </ProjectSection>
    </>
  );
}

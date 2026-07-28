import { UOSSectionShell } from './UOSSectionShell';
import { ProjectImage } from './ProjectWriting';
import { TECHNICAL_HIGHLIGHTS } from './technicalHighlightsData';
import './SystemDesignSection.css';
import './uos-sections.css';

export default function SystemDesignSection() {
  return (
    <UOSSectionShell num="5" title="Technical Highlights" titleId="uos-technical-highlights">
      {TECHNICAL_HIGHLIGHTS.map((item) => (
        <div key={item.num} className="uos-th-item">
          <h3 className="uos-sec-sub">
            <span className="proj-research-num">{item.num}</span>
            {item.title}
          </h3>
          {item.subtitle ? <p className="uos-th-subtitle">{item.subtitle}</p> : null}
          <p className="uos-sec-prose">{item.description}</p>
          {item.images?.length ? (
            <div className="uos-th-images">
              {item.images.map((image) => (
                <ProjectImage key={image.src} src={image.src} alt={image.alt} />
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </UOSSectionShell>
  );
}

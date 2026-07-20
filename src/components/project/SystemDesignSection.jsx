import { UOSSectionShell } from './UOSSectionShell';
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
          <p className="uos-sec-prose">{item.description}</p>
          <p className="uos-th-kicker">Highlights</p>
          <ul className="uos-sec-list">
            {item.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="uos-th-tech">
            <span className="uos-th-kicker">Tech</span>
            {item.tech}
          </p>
        </div>
      ))}
    </UOSSectionShell>
  );
}

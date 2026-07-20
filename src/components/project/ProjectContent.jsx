import SystemDesignSection from './SystemDesignSection';
import KeyFeaturesSection from './KeyFeaturesSection';
import { UOSSectionShell } from './UOSSectionShell';
import { ProjectImage } from './ProjectWriting';

function sectionTitleId(section) {
  const label = section.title ?? section.heading ?? 'section';
  return `uos-section-${label.replace(/\s+/g, '-').toLowerCase()}`;
}

function OverviewSection({ section, first }) {
  const titleId = sectionTitleId(section);

  return (
    <UOSSectionShell
      title={section.title ?? section.heading}
      titleId={titleId}
      first={first}
    >
      {section.paragraphs?.map((text, index) => (
        <p className="uos-sec-prose" key={index}>
          {text}
        </p>
      ))}
    </UOSSectionShell>
  );
}

function FlowSection({ section }) {
  return (
    <div className="content" data-aos="fade-up" data-aos-duration="800" style={{ paddingTop: 0 }}>
      <p className="section-heading">{section.heading}</p>
      <ol className="uos-flow">
        {section.items.map((item) => (
          <li key={item.num}>
            <span className="uos-flow-num">{item.num}</span>
            <div>
              <p className="uos-flow-title">{item.title}</p>
              <p className="uos-flow-desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function VideoSection({ section }) {
  return (
    <div className="uos-video-wrap" data-aos="fade-up" data-aos-duration="800">
      <video controls autoPlay muted loop playsInline>
        <source src={section.src} type="video/mp4" />
      </video>
    </div>
  );
}

function ShotSection({ section }) {
  return (
    <div className="uos-shot" data-aos="fade-up" data-aos-duration="800">
      <img src={section.image} alt={section.alt} loading="lazy" />
      {section.caption ? (
        <p className="uos-shot-caption">
          {section.caption.before}
          <a href={section.caption.link.href} target="_blank" rel="noopener noreferrer">
            {section.caption.link.label}
          </a>
        </p>
      ) : null}
    </div>
  );
}

function NarrativeSection({ section, first }) {
  const titleId = sectionTitleId({
    ...section,
    heading: section.heading || section.num || 'section',
  });

  return (
    <UOSSectionShell num={section.num} title={section.heading} titleId={titleId} first={first}>
      {section.blocks.map((block, index) => {
        if (block.list) {
          return (
            <ul className="uos-sec-list" key={index}>
              {block.list.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.callout) {
          return (
            <p className="uos-sec-callout" key={index}>
              {block.callout}
            </p>
          );
        }
        if (block.image) {
          return (
            <ProjectImage key={index} src={block.image} alt={block.alt ?? ''} caption={block.caption} />
          );
        }
        return (
          <p className="uos-sec-prose" key={index}>
            {block.p}
          </p>
        );
      })}
    </UOSSectionShell>
  );
}

export default function ProjectContent({ sections }) {
  if (!sections.length) {
    return null;
  }

  return sections.map((section, index) => {
    const isFirstContent =
      index === sections.findIndex((s) => s.type === 'overview' || s.type === 'narrative');

    switch (section.type) {
      case 'video':
        return <VideoSection key={`${section.type}-${index}`} section={section} />;
      case 'overview':
        return <OverviewSection key={`${section.type}-${index}`} section={section} first={isFirstContent} />;
      case 'narrative':
        return <NarrativeSection key={`${section.type}-${index}`} section={section} first={isFirstContent} />;
      case 'flow':
        return <FlowSection key={`${section.type}-${index}`} section={section} />;
      case 'shot':
        return <ShotSection key={`${section.type}-${index}`} section={section} />;
      case 'systemDesign':
        return <SystemDesignSection key={`${section.type}-${index}`} />;
      case 'keyFeatures':
        return <KeyFeaturesSection key={`${section.type}-${index}`} />;
      default:
        return null;
    }
  });
}

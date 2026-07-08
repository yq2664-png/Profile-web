function OverviewSection({ section }) {
  return (
    <div className="content" data-aos="fade-up" data-aos-duration="800">
      <div className="uos-overview-head">
        <p className="section-heading uos-oh-label">{section.heading}</p>
        {section.tryLink ? (
          <a
            href={section.tryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pnav-pdf"
          >
            {section.tryLink.label}
          </a>
        ) : null}
      </div>
      <p className="prose">{section.prose}</p>
    </div>
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

function NarrativeSection({ section }) {
  return (
    <div className="content uos-narrative" data-aos="fade-up" data-aos-duration="800">
      <p className="section-heading">{section.eyebrow}</p>
      <h2 className="block-heading" style={{ marginTop: 0 }}>
        {section.heading}
      </h2>
      {section.blocks.map((block, index) => {
        if (block.list) {
          return (
            <ul className="uos-list" key={index}>
              {block.list.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.callout) {
          return (
            <p className="uos-callout" key={index}>
              {block.callout}
            </p>
          );
        }
        return (
          <p className="prose" key={index}>
            {block.p}
          </p>
        );
      })}
    </div>
  );
}

function PlainOverviewSection({ section }) {
  return (
    <div className="content" data-aos="fade-up" data-aos-duration="800">
      <p className="section-heading">{section.heading}</p>
      <p className="prose">{section.prose}</p>
    </div>
  );
}

export default function ProjectContent({ sections }) {
  if (!sections.length) {
    return null;
  }

  return sections.map((section, index) => {
    switch (section.type) {
      case 'overview':
        return section.tryLink ? (
          <OverviewSection key={`${section.type}-${index}`} section={section} />
        ) : (
          <PlainOverviewSection key={`${section.type}-${index}`} section={section} />
        );
      case 'narrative':
        return <NarrativeSection key={`${section.type}-${index}`} section={section} />;
      case 'flow':
        return <FlowSection key={`${section.type}-${index}`} section={section} />;
      case 'shot':
        return <ShotSection key={`${section.type}-${index}`} section={section} />;
      default:
        return null;
    }
  });
}

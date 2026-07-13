import { UOSSectionShell } from './UOSSectionShell';

export { UOSSectionShell as ProjectSection };

export function ProjectImage({ src, alt, caption }) {
  return (
    <figure className="proj-media" data-aos="fade-up" data-aos-duration="800">
      <img className="proj-media-img" src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption className="proj-media-caption">{caption}</figcaption> : null}
    </figure>
  );
}

export function ProjectImageGrid({ images, caption, cols = 2 }) {
  return (
    <figure className="proj-media" data-aos="fade-up" data-aos-duration="800">
      <div className={`proj-media-grid cols-${cols}`}>
        {images.map((img) => (
          <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
        ))}
      </div>
      {caption ? <figcaption className="proj-media-caption">{caption}</figcaption> : null}
    </figure>
  );
}

export function ProjectTags({ tags }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div className="proj-tags">
      {tags.map((tag) => (
        <span className="proj-tags-item" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ProjectReferences({ title = 'References', items }) {
  return (
    <section className="uos-sec proj-refs">
      <div className="uos-sec-inner">
        <header className="uos-sec-header">
          <h2 className="uos-sec-title">{title}</h2>
        </header>
        <ul className="uos-sec-list proj-refs-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

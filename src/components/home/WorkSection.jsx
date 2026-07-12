import { Link } from 'react-router-dom';
import { getProject, getProjectPath, homeWorkSlugs } from '../../data/projects';
import { resetScrollInstant } from '../../utils/resetScroll';

function WorkTags({ tags }) {
  return (
    <div className="work-tags">
      {tags.map((tag) => (
        <span key={tag} className="work-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function WorkRowView() {
  return (
    <span className="work-row-view">
      View <span aria-hidden="true">→</span>
    </span>
  );
}

function WorkRow({ slug, to, title, description, tags, cover, coverAlt, imageContain }) {
  const inner = (
    <div className="work-body">
      <div className="work-left">
        <h3 className="work-row-title">{title}</h3>
        <p className="work-desc">{description}</p>
        <WorkTags tags={tags} />
        <WorkRowView />
      </div>
      <div className="work-right">
        <img
          src={cover}
          alt={coverAlt}
          loading="lazy"
          className={imageContain ? 'work-img-contain' : undefined}
        />
      </div>
    </div>
  );

  return (
    <Link
      className="work-row"
      to={to}
      data-slug={slug}
      data-aos="fade-up"
      data-aos-duration="800"
      onClick={resetScrollInstant}
    >
      {inner}
    </Link>
  );
}

export default function WorkSection() {
  return (
    <section id="work">
      <p className="section-label" data-aos="fade-up" data-aos-duration="600">
        Selected Work
      </p>
      <div className="work-list">
        {homeWorkSlugs.map((slug) => {
          const project = getProject(slug);
          return (
            <WorkRow
              key={slug}
              slug={slug}
              to={getProjectPath(slug)}
              title={project.title}
              description={project.home.description}
              tags={project.home.tags}
              cover={project.home.cover}
              coverAlt={project.home.coverAlt}
              imageContain={project.home.imageContain}
            />
          );
        })}
      </div>
    </section>
  );
}

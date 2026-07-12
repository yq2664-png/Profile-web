import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject } from '../data/projects';
import { projectContentMap } from '../components/project/content';
import { useAOS } from '../hooks/useAOS';
import ProjectNav from '../components/project/ProjectNav';
import ProjectMeta from '../components/project/ProjectMeta';
import ProjectContent from '../components/project/ProjectContent';
import '../styles/project.css';
import '../styles/project-pages.css';
import '../styles/project-biomaterial.css';
import '../styles/project-undergraduate.css';

export default function Project() {
  const { slug } = useParams();
  const project = getProject(slug);
  const CustomContent = projectContentMap[slug];

  useAOS();

  useEffect(() => {
    if (project) {
      document.title = `${project.page.title} — Yue Qin`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="content">
        <h1 className="block-heading">Project not found</h1>
        <p className="prose">
          <Link to="/">Return home</Link>
        </p>
      </div>
    );
  }

  const { page } = project;
  const isBiomaterial = slug === 'biomaterial';

  if (isBiomaterial) {
    return (
      <>
        {CustomContent ? <CustomContent /> : null}
      </>
    );
  }

  const pageClassName = [
    page.hero ? 'project-page-has-hero' : 'project-page-no-hero',
    slug === 'undergraduate' ? 'project-page-ug' : '',
    slug === 'user-os' ? 'project-page-uos' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={pageClassName}>
      <ProjectNav title={page.title} externalLink={page.externalLink} />
      {page.hero ? (
        slug === 'undergraduate' ? (
          <div className="ug-hero-frame">
            <img className={page.hero.className} src={page.hero.src} alt={page.hero.alt} />
          </div>
        ) : slug === 'user-os' ? (
          <div className="uos-hero-frame">
            <img className={page.hero.className} src={page.hero.src} alt={page.hero.alt} />
          </div>
        ) : (
          <img className={page.hero.className} src={page.hero.src} alt={page.hero.alt} />
        )
      ) : null}
      <ProjectMeta items={page.meta} actionLink={page.metaAction} />
      {CustomContent ? <CustomContent /> : <ProjectContent sections={page.sections} />}
    </div>
  );
}

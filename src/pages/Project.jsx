import { useEffect, useLayoutEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getProject } from '../data/projects';
import { projectContentMap } from '../components/project/content';
import { useAOS } from '../hooks/useAOS';
import { resetScrollInstant } from '../utils/resetScroll';
import ProjectNav from '../components/project/ProjectNav';
import ProjectMeta from '../components/project/ProjectMeta';
import ProjectContent from '../components/project/ProjectContent';
import '../styles/project.css';
import '../styles/project-pages.css';
import '../styles/project-biomaterial.css';
import '../styles/project-undergraduate.css';

export default function Project() {
  const { slug } = useParams();
  const location = useLocation();
  const project = getProject(slug);
  const CustomContent = projectContentMap[slug];

  useAOS();

  useLayoutEffect(() => {
    resetScrollInstant();
  }, [location.pathname]);

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
    slug === 'ideation' ? 'project-page-ideation' : '',
    slug === 'sensory' ? 'project-page-sensory' : '',
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
        ) : slug === 'ideation' ? (
          <div className="ideation-hero-frame">
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

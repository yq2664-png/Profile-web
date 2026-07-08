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

  return (
    <>
      <ProjectNav title={page.title} externalLink={page.externalLink} />
      {page.hero ? (
        <img className={page.hero.className} src={page.hero.src} alt={page.hero.alt} />
      ) : null}
      <ProjectMeta items={page.meta} actionLink={page.metaAction} />
      {CustomContent ? <CustomContent /> : <ProjectContent sections={page.sections} />}
    </>
  );
}

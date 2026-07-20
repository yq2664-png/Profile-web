import { useMemo } from 'react';
import { getProject } from '../../../data/projects';
import { useProjectMediaLightbox } from '../../../hooks/useProjectMediaLightbox';
import ProjectContent from '../ProjectContent';
import ProjectMediaLightbox from '../ProjectMediaLightbox';
import { ProjectTags } from '../ProjectWriting';
import { collectUOSImages } from '../uosMedia';

export default function UOSContent() {
  const project = getProject('user-os');
  const sections = project.page.sections;
  const tags = project.home.tags;
  const images = useMemo(() => collectUOSImages(sections), [sections]);
  const { lightbox, closeLightbox, stepLightbox, activeImage } = useProjectMediaLightbox(
    images,
    '.project-page-uos .proj-media img, .project-page-uos .uos-kf-overview img',
  );

  return (
    <>
      <ProjectContent sections={sections} />
      <ProjectTags tags={tags} />
      <ProjectMediaLightbox
        lightbox={lightbox}
        activeImage={activeImage}
        onClose={closeLightbox}
        onStep={stepLightbox}
      />
    </>
  );
}

import { TECHNICAL_HIGHLIGHTS } from './technicalHighlightsData';

export const UOS_KEY_FEATURE_IMAGES = [
  {
    src: '/assets/User OS/Core Capabilities.jpg',
    alt: 'Core Capabilities — user perspective simulation, evidence-based reasoning, multi-lens evaluation, and actionable product decisions',
    caption:
      'Figure 3 — Core capabilities: the product interface organized across Input, Perspectives, Insights, Reasoning, Review, and Decisions, supporting the full journey from product context to actionable recommendations.',
  },
];

export function collectTechnicalHighlightImages() {
  return TECHNICAL_HIGHLIGHTS.flatMap((item) =>
    (item.images ?? []).map((image) => ({
      src: image.src,
      alt: image.alt ?? '',
      caption: image.caption ?? '',
    })),
  );
}

export function collectUOSImages(sections) {
  const images = [];

  for (const section of sections) {
    if (section.type !== 'narrative' || !section.blocks) continue;
    for (const block of section.blocks) {
      if (block.image) {
        images.push({
          src: block.image,
          alt: block.alt ?? '',
          caption: block.caption ?? '',
        });
      }
    }
  }

  return [...images, ...UOS_KEY_FEATURE_IMAGES, ...collectTechnicalHighlightImages()];
}

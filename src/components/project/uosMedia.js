export const UOS_KEY_FEATURE_IMAGES = [
  {
    src: '/assets/User OS/Core Capabilities.jpg',
    alt: 'Core Capabilities — user perspective simulation, evidence-based reasoning, multi-lens evaluation, and actionable product decisions',
    caption:
      'Figure 3 — Core capabilities: the product interface organized across Input, Perspectives, Insights, Reasoning, Review, and Decisions, supporting the full journey from product context to actionable recommendations.',
  },
  {
    src: '/assets/User OS/workflow.png',
    alt: 'User Research OS workflow — structured reasoning from product context to design decisions',
    caption:
      'Figure 4 — System workflow: a structured pipeline from context intake and perspective generation through insight synthesis, with Standard and Deep analysis paths converging on prioritized product decisions.',
  },
];

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

  return [...images, ...UOS_KEY_FEATURE_IMAGES];
}

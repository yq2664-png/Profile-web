export const TECHNICAL_HIGHLIGHTS = [
  {
    num: '01',
    title: 'Context Intake',
    description:
      'Designed an adaptive context collection system for products at different development stages—including ideas, prototypes, and live products. The workflow dynamically adjusts required inputs, minimizing unnecessary friction while preserving sufficient context for downstream AI reasoning.',
    highlights: ['Stage-aware context collection', 'Progressive disclosure', 'Context normalization'],
    tech: 'React · Dynamic Forms · State Management',
  },
  {
    num: '02',
    title: 'Perspective Generation',
    description:
      'Built a hybrid perspective generation pipeline that combines real user voices retrieved from online communities, AI-simulated personas, and designer-curated observations into a unified reasoning context. Prompt orchestration standardizes heterogeneous inputs while preserving their original perspective.',
    highlights: ['Multi-source perspective integration', 'Prompt orchestration', 'Perspective normalization'],
    tech: 'OpenAI API · Prompt Engineering · Structured Outputs',
  },
  {
    num: '03',
    title: 'Insight Prioritization',
    description:
      'Transformed hundreds of individual perspectives into structured behavioral insights. Rather than summarizing comments, the system clusters recurring patterns and prioritizes findings across frustrations, hidden needs, trust issues, and decision barriers using impact, frequency, confidence, and product relevance.',
    highlights: ['Behavioral insight clustering', 'Multi-factor priority scoring', 'Explainable ranking'],
    tech: 'LLM Reasoning · JSON Schema · Ranking Pipeline',
  },
  {
    num: '04',
    title: 'Reasoning Chains',
    description:
      'Designed an explicit reasoning layer that links raw user perspectives to synthesized behavioral insights. Every reasoning chain traces user evidence through matched findings and behavioral patterns—with confidence levels—making AI-generated conclusions transparent, inspectable, and explainable.',
    highlights: ['Evidence threading', 'Confidence-ranked reasoning', 'Perspective-to-pattern mapping'],
    tech: 'LLM Reasoning · JSON Schema · Explainable Chains',
  },
  {
    num: '05',
    title: 'Framework Evaluation',
    description:
      'Implemented an evidence-driven evaluation engine that reviews products across multiple UX frameworks—including Nielsen Heuristics, WCAG, Apple HIG, Material Design, Cognitive Load, and Trust. Frameworks are activated only when supported by relevant evidence, ensuring every evaluation remains contextually grounded.',
    highlights: ['Conditional framework activation', 'Evidence-backed evaluation', 'Cross-framework synthesis'],
    tech: 'Structured Prompting · UX Heuristics · Evidence Linking',
  },
  {
    num: '06',
    title: 'Decision Generation',
    description:
      'Translated prioritized insights—and, in the Deep analysis path, reasoning chains and framework evaluations—into actionable product decisions, including design opportunities, UX improvements, feature requirements, and measurable success metrics. Every recommendation remains fully traceable to supporting evidence.',
    highlights: ['Actionable design recommendations', 'Product requirement generation', 'Traceable decision making'],
    tech: 'Structured Prompting · Decision Framework · Evidence Linking',
  },
];

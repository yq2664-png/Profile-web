const LIVE_SITE = 'https://user-perspective-simulator-production.up.railway.app/';

export const projects = {
  'user-os': {
    slug: 'user-os',
    title: 'userOS',
    home: {
      description:
        'A user-perspective simulator that turns a product description into AI-generated user reactions and behavioral insights — pressure-testing ideas before real users speak.',
      tags: ['UX Research', 'AI Product', 'Interaction Design'],
      cover: '/assets/User OS/cover - user OS.jpeg',
      coverAlt: 'userOS',
      imageContain: true,
    },
    page: {
      title: 'userOS',
      hero: {
        src: '/assets/User OS/cover - user OS.jpeg',
        alt: 'userOS — landing page',
        className: 'hero-img hero-img-uos',
      },
      meta: [
        { label: 'Time', value: '2026 6–7' },
        { label: 'Role', value: 'Developer · Product Designer · Interactive Designer' },
        { label: 'Status', value: 'Public Release' },
      ],
      metaAction: { label: 'Try ↗', href: LIVE_SITE },
      sections: [
        {
          type: 'overview',
          heading: 'Overview',
          prose:
            'userOS is a user perspective simulator — an AI tool that turns a plain product description into a set of distinct, believable user reactions and behavioral insights. Instead of waiting for real users to speak, teams can paste in an idea and immediately surface how different people might respond, hesitate, or drop off — grounded in how real people actually think.',
        },
        {
          type: 'shot',
          image: '/assets/User OS/userOS-live.png',
          alt: 'userOS — landing page',
          caption: { before: 'Landing page — ', link: { label: 'try the live tool ↗', href: LIVE_SITE } },
        },
        {
          type: 'narrative',
          eyebrow: '01 — Inspiration',
          heading: 'Inspiration',
          blocks: [
            { p: "As a designer, I've found that the hardest part of the design process is often not generating ideas, but understanding users." },
            { p: 'When brainstorming, we gather insights from interviews, surveys, usability tests, app reviews, customer support tickets, and an increasing amount of AI-generated research summaries.' },
            { p: 'However, while these sources often tell us what happened, they rarely explain why it happened.' },
            { p: 'A simple comment like "I don\'t like it." could mean many different things:' },
            {
              list: [
                'It feels too complicated.',
                "I don't trust it.",
                "I don't see the value.",
                "It doesn't fit my workflow.",
              ],
            },
            { p: 'Although these reasons are fundamentally different, they are often reduced to the same conclusion.' },
            { p: "Today's AI tools are becoming increasingly effective at organizing research data, yet they still struggle to help designers truly reason from a user's perspective. Most stop at summarizing information rather than supporting deeper thinking." },
            { p: 'This led me to ask:' },
            { callout: 'What if AI could become a thinking partner instead of just another summarization tool?' },
          ],
        },
        {
          type: 'narrative',
          eyebrow: '02 — Idea Validation',
          heading: 'Idea Validation',
          blocks: [
            { p: 'To understand whether this challenge was shared by other designers, I interviewed UX designers, product designers, and design researchers from different backgrounds.' },
            { p: 'Although their workflows varied, they consistently described similar challenges:' },
            {
              list: [
                'Research materials are scattered across multiple platforms.',
                'Turning research findings into actionable insights is time-consuming.',
                'Brainstorming often relies on personal intuition rather than research evidence.',
                "Existing AI tools summarize documents but rarely help designers reason from a user's perspective.",
              ],
            },
            { p: 'Across these conversations, one idea emerged repeatedly:' },
            { callout: "Designers don't necessarily need more AI tools — they need an AI collaborator that supports the way they think." },
            { p: 'This suggested that the real challenge is not improving efficiency alone, but supporting the design thinking process itself.' },
          ],
        },
        {
          type: 'narrative',
          eyebrow: '03 — Design Opportunity',
          heading: 'Design Opportunity',
          blocks: [
            { p: 'Based on these findings, I reframed the design challenge.' },
            { p: 'Instead of helping designers organize research faster, I wanted to help them:' },
            {
              list: [
                'understand users more deeply',
                'explore multiple perspectives',
                'validate assumptions before making design decisions',
              ],
            },
            { p: 'Rather than building another AI persona generator or PRD generator, I envisioned an AI-supported workspace that helps designers transform research into product decisions.' },
            { callout: 'User Research OS is designed as an AI-supported Design Research Workspace — a collaborative environment where AI assists designers in exploring user perspectives, synthesizing evidence, and making more informed design decisions.' },
          ],
        },
        {
          type: 'flow',
          heading: 'How It Works',
          items: [
            { num: '01', title: 'Describe your product', description: 'Name, type, and core functions. Optionally upload screenshots or design docs.' },
            { num: '02', title: 'See user perspectives', description: '8 distinct user archetypes react to your product in real time — streamed as they generate.' },
            { num: '03', title: 'Read the insights', description: 'Frustrations, hidden needs, decision barriers, trust issues — ranked by impact.' },
            { num: '04', title: 'Export the PRD', description: 'A structured product requirements document tied directly to real user evidence.' },
          ],
        },
      ],
    },
  },

  wearable: {
    slug: 'wearable',
    title: 'Soothe Sleeve',
    home: {
      description:
        'A modular haptic garment that transforms repetitive touch into a calming ritual — wearable technology as emotional care, not efficiency.',
      tags: ['Wearable', 'Physical Computing', 'Arduino'],
      cover: '/assets/cover-wearable.jpg',
      coverAlt: 'Soothe Sleeve',
    },
    page: {
      title: 'Soothe Sleeve',
      hero: {
        src: '/assets/cover-wearable.jpg',
        alt: 'Soothe Sleeve — modular haptic wearable system diagram',
        className: 'hero-img hero-img-wearable',
      },
      meta: [
        { label: 'Course', value: 'Wearable' },
        { label: 'School', value: 'NYU Integrated Design & Media' },
        { label: 'Time', value: '2026 4–5' },
        { label: 'Role', value: 'Researcher · Developer · Interaction Designer' },
        { label: 'Tools', value: 'Arduino Nano 33 IoT · Pressure Sensors · Vibration Motors' },
      ],
      sections: [],
    },
  },

  sensory: {
    slug: 'sensory',
    title: 'Inner Weather',
    home: {
      description:
        'An installation that turns live weather data, ambient sound, and movement into a visual portrait of an emotional moment — then mails it to you.',
      tags: ['Interactive Installation', 'Creative Coding', 'P5.js'],
      cover: '/assets/cover-sensory.png',
      coverAlt: 'Inner Weather',
    },
    page: {
      title: 'Inner Weather',
      hero: {
        src: '/assets/cover-sensory.png',
        alt: 'Inner Weather — atmospheric portrait generated from voice, movement, and climate data',
        className: 'hero-img hero-img-wearable',
      },
      meta: [
        { label: 'Course', value: 'Sensory Ecology' },
        { label: 'School', value: 'NYU Integrated Design & Media' },
        { label: 'Year', value: '2025' },
        { label: 'Role', value: 'Interaction Designer · Creative Coder' },
        { label: 'Tools', value: 'P5.js · GPT API · Weather API · TouchDesigner' },
      ],
      sections: [],
    },
  },

  ideation: {
    slug: 'ideation',
    title: 'Slow Fashion: Rethinking the System',
    home: {
      description:
        'Mapping the structural logic that makes fast fashion inevitable — supply chains, carbon cycles, and the limits of consumer choice.',
      tags: ['Research', 'Systems Thinking', 'Data Visualization'],
      cover: '/assets/cover-ideation.jpg',
      coverAlt: 'Slow Fashion: Rethinking the System',
      imageContain: true,
    },
    page: {
      title: 'Slow Fashion: Rethinking the System',
      hero: {
        src: '/assets/cover-ideation.jpg',
        alt: 'Fast Fashion research spread — supply chain, carbon emissions, greenwashing',
        className: 'hero-img hero-img-ideation',
      },
      meta: [
        { label: 'Course', value: 'Ideation & Prototyping' },
        { label: 'School', value: 'NYU Integrated Design & Media' },
        { label: 'Year', value: '2025–2026' },
        { label: 'Role', value: 'Researcher · UX Designer' },
        { label: 'Tools', value: 'Figma · Card Sorting · User Interviews' },
      ],
      sections: [],
    },
  },

  undergraduate: {
    slug: 'undergraduate',
    title: 'Silent Sanctuary',
    home: {
      description:
        'A three-look womenswear collection that treats the garment as architecture — a mobile territory the wearer carries with them.',
      tags: ['Fashion Design', 'Pattern Construction', '3D Rendering'],
      cover: '/assets/Silent Sanctuary /ug_group.jpg',
      coverAlt: 'Silent Sanctuary',
    },
    page: {
      title: 'Silent Sanctuary',
      hero: {
        src: '/assets/Silent Sanctuary /ug_group.jpg',
        alt: 'Silent Sanctuary — womenswear collection rendered in a rocky, starlit landscape',
        className: 'hero-img hero-img-ug',
      },
      meta: [
        { label: 'Project', value: 'Graduation Fashion Collection' },
        { label: 'School', value: 'Coventry University × CUZ' },
        { label: 'Year', value: '2024–2025' },
        { label: 'Role', value: 'Fashion Designer · Concept & Construction' },
        { label: 'Tools', value: 'Pattern Cutting · Fabric Modification · Blender · Photoshop' },
      ],
      sections: [],
    },
  },

  synthetic: {
    slug: 'synthetic',
    title: 'Synthetic Ocean',
    home: {
      description: null,
      tags: [],
      cover: null,
      coverAlt: 'Synthetic Ocean',
      isVideo: true,
      videoSrc: '/assets/TD/td-final.mp4',
    },
    page: {
      title: 'Synthetic Ocean',
      hero: null,
      meta: [
        { label: 'Type', value: 'Generative Visuals' },
        { label: 'Tool', value: 'TouchDesigner' },
        { label: 'Role', value: 'Designer · Creative Coder' },
      ],
      sections: [],
    },
  },

  biomaterial: {
    slug: 'biomaterial',
    title: 'Bio Material',
    home: {
      description: null,
      tags: [],
      cover: null,
      coverAlt: 'Bio Material',
      isGalleryBlock: true,
    },
    page: {
      title: 'Bio Material',
      hero: null,
      meta: [
        { label: 'Type', value: 'Material Research' },
        { label: 'Focus', value: 'Biodegradable & Bio-based Textiles' },
        { label: 'Role', value: 'Designer · Researcher' },
      ],
      sections: [],
    },
  },
};

export const homeWorkSlugs = ['user-os', 'wearable', 'sensory', 'ideation', 'undergraduate'];

export function getProject(slug) {
  return projects[slug] ?? null;
}

export function getProjectPath(slug) {
  return `/work/${slug}`;
}

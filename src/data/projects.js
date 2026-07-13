const LIVE_SITE = 'https://user-perspective-simulator-production.up.railway.app/';

export const projects = {
  'user-os': {
    slug: 'user-os',
    title: 'userOS',
    home: {
      description:
        'A user-perspective simulator that turns a product description into AI-generated user reactions and behavioral insights — pressure-testing ideas before real users speak.',
      tags: ['UX Research', 'AI Product', 'Interaction Design'],
      cover: '/assets/User OS/cover - user OS.png',
      coverAlt: 'userOS',
      imageContain: true,
    },
    page: {
      title: 'userOS',
      hero: {
        src: '/assets/User OS/cover - user OS.png',
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
          type: 'video',
          src: '/assets/User OS/Overall.mp4',
        },
        {
          type: 'overview',
          title: 'Overall',
          paragraphs: [
            'User Research OS is an AI-assisted design research workspace that helps product teams think from users\' perspectives before products reach real users.',
            'By combining product context, research evidence, UX frameworks, and AI-powered user simulation, the system transforms scattered research into explainable insights, structured design opportunities, and informed product decisions.',
            'Rather than replacing designers, User Research OS serves as a collaborative thinking partner throughout the research and product design process.',
          ],
        },
        {
          type: 'narrative',
          num: '1',
          heading: 'Inspiration',
          blocks: [
            { p: 'Every product decision begins with an assumption about users.' },
            { p: 'Designers conduct interviews, analyze research, and brainstorm ideas to reduce uncertainty. Yet before a product reaches real users, many decisions still rely on intuition rather than evidence.' },
            { p: 'AI has become increasingly effective at organizing information and summarizing research, but it rarely helps designers explore different user perspectives or challenge their assumptions.' },
            { p: 'This led me to ask:' },
            { callout: 'What if AI could help designers think like their users before real users ever interact with the product?' },
          ],
        },
        {
          type: 'narrative',
          num: '2',
          heading: 'Idea Validation',
          blocks: [
            { p: 'To validate the opportunity, I interviewed UX designers, product designers, and design researchers.' },
            { p: 'Despite their different workflows, they shared similar challenges:' },
            {
              list: [
                'Research is scattered across multiple tools.',
                'Turning findings into design decisions is time-consuming.',
                'Brainstorming often relies on intuition.',
                'AI summarizes information but rarely supports design thinking.',
              ],
            },
            { p: 'One insight stood out:' },
            { callout: "Designers don't need another AI generator—they need an AI collaborator that helps them think." },
            { p: 'This shifted the project from improving efficiency to supporting better design decisions.' },
          ],
        },
        {
          type: 'narrative',
          num: '3',
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
            { callout: 'Rather than building another AI persona or PRD generator, I envisioned User Research OS as an AI-supported design research workspace—a collaborative thinking partner that helps designers turn research into product decisions.' },
          ],
        },
        { type: 'keyFeatures' },
        { type: 'systemDesign' },
        {
          type: 'narrative',
          num: '6',
          heading: 'Reflection',
          blocks: [
            {
              p: 'User testing highlighted several opportunities for future development.',
            },
            {
              p: 'The current prototype focuses on analyzing product context and simulating user perspectives, but participants suggested expanding the system beyond static interface analysis toward complete user experience simulation. Future versions could allow AI agents to perform real tasks within products, producing insights grounded in actual interaction flows.',
            },
            {
              p: 'Participants also recommended supporting multiple UX evaluation frameworks—including heuristic evaluation, accessibility, and user journeys—rather than relying solely on persona-based reasoning. Finally, improving explainability by linking every insight to its supporting evidence and evaluation lens was seen as essential for building trust in AI-assisted design decisions.',
            },
            {
              p: 'These findings reinforce the project\'s long-term vision: developing User Research OS into a transparent, evidence-based design reasoning system rather than simply another AI content generation tool.',
            },
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
        { label: 'Role', value: 'Interaction Design · Creative Coding · System Design' },
        { label: 'Tools', value: 'p5.js · Weather API · GPT API · Camera · Microphone' },
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

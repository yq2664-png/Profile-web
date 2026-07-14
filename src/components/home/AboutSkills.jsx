import './AboutSkills.css';

const SKILLS = [
  {
    id: 'research',
    title: 'Research',
    detail: 'User Interviews · Contextual Inquiry · Journey Mapping · Usability Testing',
  },
  {
    id: 'code',
    title: 'Code',
    detail: 'P5.js · JavaScript · Arduino · TouchDesigner',
  },
  {
    id: 'fabrication',
    title: 'Fabrication',
    detail: 'Apparel Technology · 3D Printing · Laser Cutting · Soldering · Knitting',
  },
  {
    id: 'design-tools',
    title: 'Design Tools',
    detail: 'Figma · Adobe Suite · Blender · Arduino IDE',
  },
];

export default function AboutSkills() {
  return (
    <div className="about-skills">
      <p className="about-edu-label">Skills</p>
      <ul className="about-skills-row">
        {SKILLS.map((item) => (
          <li key={item.id} className="about-skill-item">
            <span className="about-skill-title">{item.title}</span>
            <p className="about-skill-detail">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

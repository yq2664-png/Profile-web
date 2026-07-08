import { Link } from 'react-router-dom';

export default function ProjectNav({ title, externalLink }) {
  return (
    <nav className="pnav">
      <Link to="/#work" className="pnav-back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M10 3L5 8l5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All Work
      </Link>
      <span className="pnav-title">{title}</span>
      {externalLink ? (
        <a
          href={externalLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pnav-pdf"
        >
          {externalLink.label}
        </a>
      ) : (
        <span />
      )}
    </nav>
  );
}

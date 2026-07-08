import { Link } from 'react-router-dom';

export default function Nav({ overVideo = false }) {
  return (
    <nav aria-label="Main navigation" id="main-nav" className={overVideo ? 'over-video' : ''}>
      <Link to="/" className="nav-logo">
        Yue Qin
      </Link>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#exploration">Exploration</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

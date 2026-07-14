import RotatingText from './RotatingText';

const HERO_ROTATE_TEXTS = [
  'the intersections of fashion',
  'interaction design',
  'emerging technologies',
];

const HERO_CONNECT_TEXTS = ['people', 'technology', 'the physical world'];

export default function HeroSection() {
  return (
    <header className="hero">
      <p className="hero-eyebrow">Portfolio · 2025–2026</p>
      <div className="hero-fade">
        <p className="hero-bio">
          <span className="reveal-line">I&apos;m Yue Qin,</span>
          <span className="reveal-line">A designer and researcher</span>
          <span className="reveal-line">
            Exploring{' '}
            <RotatingText
              texts={HERO_ROTATE_TEXTS}
              mainClassName="hero-rotate"
              rotationInterval={2800}
              staggerDuration={0.02}
              splitBy="characters"
            />
            .
          </span>
          <span className="reveal-line">Creating meaningful connections</span>
          <span className="reveal-line">
            Between{' '}
            <RotatingText
              texts={HERO_CONNECT_TEXTS}
              mainClassName="hero-rotate"
              rotationInterval={2800}
              staggerDuration={0.02}
              splitBy="characters"
            />
            .
          </span>
        </p>
        <div className="hero-tags">
          <span className="tag">UX Research</span>
          <span className="tag">Wearable Tech</span>
          <span className="tag">Fashion Design</span>
          <span className="tag">Creative Coding</span>
          <span className="tag">Physical Computing</span>
          <span className="tag">Speculative Design</span>
        </div>
      </div>
    </header>
  );
}

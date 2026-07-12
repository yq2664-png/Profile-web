import { forwardRef } from 'react';
import TextType from './TextType';

const COVER_TITLE = 'Design that\nlives between\nbodies and systems';

const CoverVideo = forwardRef(function CoverVideo(_props, ref) {
  return (
    <div className="cover-video-wrap" id="cover-wrap" ref={ref}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/cover-poster.jpg"
      >
        <source src="/assets/cover.webm" type="video/webm" />
        <source src="/assets/cover.mp4" type="video/mp4" />
      </video>
      <div className="video-hero-overlay">
        <TextType
          as="h1"
          text={COVER_TITLE}
          typingSpeed={42}
          initialDelay={400}
          loop
          pauseOnHover
          showCursor
          hideCursorWhileTyping={false}
          cursorCharacter="|"
          className="video-hero-title"
        />
      </div>
      <a href="#work" className="video-hero-cta">
        View Work
      </a>
      <div className="cover-video-hint">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M10 4v12M5 11l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Scroll</span>
      </div>
    </div>
  );
});

export default CoverVideo;

import { forwardRef } from 'react';
import CoverHeroTitle from './CoverHeroTitle';
import SpecularButton from './SpecularButton';

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
        <CoverHeroTitle />
      </div>
      <SpecularButton
        href="#work"
        className="video-hero-cta"
        size="sm"
        radius={6}
        tint="#ffffff"
        tintOpacity={0.12}
        blur={12}
        textColor="#ffffff"
        lineColor="#ffffff"
        baseColor="#ffffff"
        intensity={1.15}
        shineSize={14}
        shineFade={36}
        thickness={1.1}
        followMouse
        proximity={280}
      >
        View Work
      </SpecularButton>
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

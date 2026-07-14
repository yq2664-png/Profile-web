import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

const WORDS = ['Bodies', 'Technology', 'Experience'];
const HOVER_TEXT = 'Design for\nBodies\nTechnology\nExperience.';

export default function CoverHeroTitle({
  typingSpeed = 60,
  deletingSpeed = 36,
  pauseDuration = 1800,
  initialDelay = 400,
  className = '',
}) {
  const [displayedWord, setDisplayedWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const cursorRef = useRef(null);
  const startedRef = useRef(false);
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (!cursorRef.current || reducedMotion.current) return undefined;

    gsap.set(cursorRef.current, { opacity: 1 });
    const tween = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    return () => tween.kill();
  }, []);

  useEffect(() => {
    if (reducedMotion.current) {
      setDisplayedWord(WORDS[0]);
      setCharIndex(WORDS[0].length);
      return undefined;
    }

    if (isPaused) return undefined;

    const currentWord = WORDS[wordIndex];
    let timeout;

    if (isDeleting) {
      if (displayedWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setCharIndex(0);
        timeout = setTimeout(() => {}, 120);
      } else {
        timeout = setTimeout(() => {
          setDisplayedWord((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else if (charIndex < currentWord.length) {
      const delay =
        !startedRef.current && charIndex === 0 && displayedWord === ''
          ? initialDelay
          : typingSpeed;

      timeout = setTimeout(() => {
        startedRef.current = true;
        setDisplayedWord(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, delay);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    deletingSpeed,
    displayedWord,
    initialDelay,
    isDeleting,
    isPaused,
    pauseDuration,
    typingSpeed,
    wordIndex,
  ]);

  const handlePointerEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    startedRef.current = false;
    setIsPaused(false);
    setDisplayedWord('');
    setCharIndex(0);
    setIsDeleting(false);
    setWordIndex(0);
  }, []);

  return (
    <h1
      className={`text-type video-hero-title ${className}${isPaused ? ' text-type--paused' : ''}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {isPaused ? (
        <span className="text-type__content">{HOVER_TEXT}</span>
      ) : (
        <span className="text-type__content">
          {'Design for\n'}
          {displayedWord}
          <span className="video-hero-period">.</span>
        </span>
      )}
      <span ref={cursorRef} className="text-type__cursor" aria-hidden="true">
        |
      </span>
    </h1>
  );
}

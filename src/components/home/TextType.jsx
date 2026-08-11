import { useEffect, useId, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  pauseOnHover = false,
  ...props
}) => {
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initialText = Array.isArray(text) ? (text[0] ?? '') : (text ?? '');
  const [displayedText, setDisplayedText] = useState(reducedMotion ? initialText : '');
  const [currentCharIndex, setCurrentCharIndex] = useState(reducedMotion ? initialText.length : 0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(reducedMotion || !startOnVisible);
  const [isPaused, setIsPaused] = useState(false);
  const cursorRef = useRef(null);
  const generatedId = useId();
  const containerId = props.id ?? `text-type-${generatedId.replace(/:/g, '')}`;

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return 'inherit';
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || reducedMotion) return undefined;

    const container = document.getElementById(containerId);
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [containerId, reducedMotion, startOnVisible]);

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return undefined;
    if (reducedMotion) return undefined;

    gsap.set(cursorRef.current, { opacity: 1 });
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
  }, [showCursor, cursorBlinkDuration, reducedMotion]);

  useEffect(() => {
    if (!isVisible || isPaused) return undefined;
    if (reducedMotion) return undefined;

    let timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          timeout = setTimeout(() => {
            setIsDeleting(false);
            if (currentTextIndex === textArray.length - 1 && !loop) return;

            onSentenceComplete?.(textArray[currentTextIndex], currentTextIndex);
            setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
            setCurrentCharIndex(0);
          }, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else if (currentCharIndex < processedText.length) {
        timeout = setTimeout(
          () => {
            setDisplayedText((prev) => prev + processedText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          },
          variableSpeed ? getRandomSpeed() : typingSpeed,
        );
      } else if (textArray.length >= 1) {
        if (!loop && currentTextIndex === textArray.length - 1) return;
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    isPaused,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    getRandomSpeed,
    reducedMotion,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  const handlePointerEnter = () => {
    if (!pauseOnHover) return;
    setIsPaused(true);
    setDisplayedText(textArray[currentTextIndex] ?? '');
    setCurrentCharIndex(textArray[currentTextIndex]?.length ?? 0);
    setIsDeleting(false);
  };

  const handlePointerLeave = () => {
    if (!pauseOnHover) return;
    setIsPaused(false);
    setDisplayedText('');
    setCurrentCharIndex(0);
    setIsDeleting(false);
    setCurrentTextIndex(0);
  };

  return createElement(
    Component,
    {
      id: containerId,
      className: `text-type ${className}${isPaused ? ' text-type--paused' : ''}`,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      ...props,
    },
    <span className="text-type__content" style={{ color: getCurrentTextColor() || 'inherit' }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
      >
        {cursorCharacter}
      </span>
    ),
  );
};

export default TextType;

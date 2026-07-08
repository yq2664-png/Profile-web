import { useEffect, useId, useRef } from 'react';
import { gsap } from 'gsap';
import './DecayCard.css';

const IMAGE = { x: 0, y: 0, width: 600, height: 750 };

export default function DecayCard({
  width,
  height,
  image,
  alt = '',
  baseFrequency = 0.015,
  numOctaves = 5,
  seed = 4,
  maxDisplacement = 400,
  movementBound = 50,
  edgeOnly = true,
  edgeInset = 0.035,
  edgeFeather = 16,
  className = '',
  children,
}) {
  const uid = useId().replace(/:/g, '');
  const filterId = `${uid}-filter`;
  const featherFilterId = `${uid}-feather`;
  const centerMaskId = `${uid}-center-mask`;

  const transformRef = useRef(null);
  const displacementMapRef = useRef(null);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cachedCursor = useRef({ ...cursor.current });
  const winsize = useRef({ width: window.innerWidth, height: window.innerHeight });

  const sizeStyle =
    width && height ? { width: `${width}px`, height: `${height}px` } : { width: '100%', height: '100%' };

  const insetX = IMAGE.width * edgeInset;
  const insetY = IMAGE.height * edgeInset;
  const innerWidth = IMAGE.width - insetX * 2;
  const innerHeight = IMAGE.height - insetY * 2;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1, x2, y1, y2) => Math.hypot(x1 - x2, y1 - y2);

    const handleResize = () => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = (ev) => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0,
    };

    const motionScale = edgeOnly ? 0.35 : 1;
    const bound = movementBound * motionScale;

    let rafId;

    const render = () => {
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120) * motionScale,
        0.1,
      );
      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120) * motionScale,
        0.1,
      );
      let targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10) * motionScale,
        0.1,
      );

      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (transformRef.current) {
        gsap.set(transformRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz,
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y,
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, maxDisplacement),
        0.06,
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, { attr: { scale: imgValues.displacementScale } });
      }

      cachedCursor.current = { ...cursor.current };
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [edgeOnly, maxDisplacement, movementBound]);

  const imageProps = {
    href: image,
    x: IMAGE.x,
    y: IMAGE.y,
    width: IMAGE.width,
    height: IMAGE.height,
    preserveAspectRatio: 'xMidYMid slice',
  };

  return (
    <div
      className={`decay-card ${className}`.trim()}
      style={sizeStyle}
      ref={transformRef}
      aria-label={alt || undefined}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="decay-card__svg"
        role="img"
        aria-label={alt || undefined}
      >
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="turbulence"
              baseFrequency={baseFrequency}
              numOctaves={numOctaves}
              seed={seed}
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence1"
            />
            <feDisplacementMap
              ref={displacementMapRef}
              in="SourceGraphic"
              in2="turbulence1"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="B"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
            />
          </filter>

          {edgeOnly ? (
            <>
              <filter id={featherFilterId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation={edgeFeather} />
              </filter>
              <mask id={centerMaskId}>
                <rect
                  x={IMAGE.x}
                  y={IMAGE.y}
                  width={IMAGE.width}
                  height={IMAGE.height}
                  fill="black"
                />
                <rect
                  x={IMAGE.x + insetX}
                  y={IMAGE.y + insetY}
                  width={innerWidth}
                  height={innerHeight}
                  fill="white"
                  filter={`url(#${featherFilterId})`}
                />
              </mask>
            </>
          ) : null}
        </defs>

        {edgeOnly ? (
          <>
            <g className="decay-card__edge">
              <image {...imageProps} filter={`url(#${filterId})`} />
            </g>
            <g className="decay-card__center" mask={`url(#${centerMaskId})`}>
              <image {...imageProps} />
            </g>
          </>
        ) : (
          <g>
            <image {...imageProps} filter={`url(#${filterId})`} />
          </g>
        )}
      </svg>
      {children ? <div className="decay-card__text">{children}</div> : null}
    </div>
  );
}

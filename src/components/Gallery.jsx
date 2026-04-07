"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const IMAGES = [
  `${basePath}/carousel/image1.jpeg`,
  `${basePath}/carousel/image2.jpeg`,
  `${basePath}/carousel/image3.jpeg`,
  `${basePath}/carousel/image4.jpeg`,
  `${basePath}/carousel/image5.jpeg`,
  `${basePath}/carousel/image6.jpeg`,
  `${basePath}/carousel/image7.jpeg`,
  `${basePath}/carousel/image8.jpeg`,
  `${basePath}/carousel/image9.jpeg`,
  `${basePath}/carousel/image10.jpeg`,
  `${basePath}/carousel/image11.jpeg`,
  `${basePath}/carousel/image12.jpg`,
];

const AUTO_INTERVAL = 3000;
const GAP_PX = 12;

export default function Gallery() {
  const total = IMAGES.length;

  const wrapRef = useRef(null);
  const [wrapWidth, setWrapWidth] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setWrapWidth(entry.contentRect.width);
    });
    ro.observe(el);
    setWrapWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const visibleCount = wrapWidth < 500 ? 1 : wrapWidth < 800 ? 2 : 3;

  const sidePadPx = wrapWidth * 0.05;
  const usablePx = wrapWidth - sidePadPx * 2;
  const cardWidthPx = (usablePx - GAP_PX * (visibleCount - 1)) / visibleCount;
  const stepPx = cardWidthPx + GAP_PX;

  const cloned = [...IMAGES, ...IMAGES, ...IMAGES];
  const [index, setIndex] = useState(total);
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  const timerRef = useRef(null);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  useEffect(() => {
    if (!animated) return;
    let id;
    if (index >= total * 2) {
      id = setTimeout(() => {
        setAnimated(false);
        setIndex((i) => i - total);
      }, 580);
    } else if (index < total) {
      id = setTimeout(() => {
        setAnimated(false);
        setIndex((i) => i + total);
      }, 580);
    }
    return () => clearTimeout(id);
  }, [index, animated, total]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setAnimated(true);
        setIndex((i) => i + 1);
      }
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goNext = useCallback(() => {
    setAnimated(true);
    setIndex((i) => i + 1);
    startTimer();
  }, [startTimer]);

  const goPrev = useCallback(() => {
    setAnimated(true);
    setIndex((i) => i - 1);
    startTimer();
  }, [startTimer]);

  const goTo = useCallback(
    (dotIdx) => {
      setAnimated(true);
      setIndex(total + dotIdx);
      startTimer();
    },
    [total, startTimer],
  );

  const onDragStart = (clientX) => {
    dragging.current = true;
    dragStartX.current = clientX;
    setDragOffsetPx(0);
    clearInterval(timerRef.current);
  };
  const onDragMove = (clientX) => {
    if (!dragging.current) return;
    setDragOffsetPx(clientX - dragStartX.current);
  };
  const onDragEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;
    const delta = dragOffsetPx;
    setDragOffsetPx(0);
    setAnimated(true);
    if (delta < -40) goNext();
    else if (delta > 40) goPrev();
    else startTimer();
  };

  const translateX = sidePadPx - index * stepPx + dragOffsetPx;
  const dotIndex = (((index - total) % total) + total) % total;

  return (
    <>
      <style>{`
        .gallery-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0 2.5rem;
          overflow: hidden;
        }

        /* ── Header — matches About/Benefits/Registration pattern ── */
        .gallery-header {
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .gallery-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .gallery-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Carousel ── */
        .gallery-carousel-wrap {
          width: 100%;
          overflow: hidden;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y;
        }
        .gallery-carousel-wrap:active { cursor: grabbing; }

        .gallery-track {
          display: flex;
          align-items: stretch;
          will-change: transform;
        }
        .gallery-track.animated {
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-card {
          flex-shrink: 0;
          box-sizing: border-box;
        }

        .gallery-card-inner {
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 2px 14px rgba(0,0,0,0.10);
          aspect-ratio: 4 / 3;
          background-color: #f0f0f0;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .gallery-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.16);
        }
        .gallery-card-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }

        /* ── Controls ── */
        .gallery-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.75rem;
          padding: 0 5%;
        }

        .gallery-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1.5px solid #d0d0d0;
          background: #ffffff;
          cursor: pointer;
          flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
        }
        .gallery-arrow:hover {
          border-color: #eab05c;
          background: #fff7ec;
        }
        .gallery-arrow svg {
          width: 1rem;
          height: 1rem;
          stroke: #303b6e;
          stroke-width: 2.4;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .gallery-dots {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .gallery-dot {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 0.25rem;
          background: #d0d0d0;
          cursor: pointer;
          transition: background 0.3s ease, width 0.3s ease;
          border: none;
          padding: 0;
          flex-shrink: 0;
        }
        .gallery-dot.active {
          background: #eab05c;
          width: 1.75rem;
        }

        /* ── Responsive — same breakpoints as all other sections ── */
        @media (max-width: 48rem) {
          .gallery-title { font-size: 1.375rem; }
        }
        @media (max-width: 37.5rem) {
          .gallery-section { padding: 2rem 0 1.75rem; }
          .gallery-title { font-size: 1.25rem; }
        }
      `}</style>

      <div className="gallery-section">
        {/* Header */}
        <div className="gallery-header">
          <p className="gallery-title">Gallery</p>
          <p className="gallery-subtitle">
            Highlights from the ideathon — workshops, presentations, and
            memorable moments
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={wrapRef}
          className="gallery-carousel-wrap"
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseMove={(e) => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={() => {
            onDragEnd();
            setPaused(false);
            startTimer();
          }}
          onMouseEnter={() => setPaused(true)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => {
            e.preventDefault();
            onDragMove(e.touches[0].clientX);
          }}
          onTouchEnd={onDragEnd}
        >
          <div
            className={`gallery-track${animated ? " animated" : ""}`}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {cloned.map((src, i) => (
              <div
                key={i}
                className="gallery-card"
                style={{
                  width: `${cardWidthPx}px`,
                  marginRight: i < cloned.length - 1 ? `${GAP_PX}px` : 0,
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                  setPaused(false);
                  startTimer();
                }}
              >
                <div className="gallery-card-inner">
                  <img
                    src={src}
                    alt={`Gallery image ${(i % total) + 1}`}
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="gallery-controls">
          <button
            className="gallery-arrow"
            onClick={goPrev}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="gallery-dots">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot${i === dotIndex ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button className="gallery-arrow" onClick={goNext} aria-label="Next">
            <svg viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 94;
const FRAME_RATE = 30;
const FRAME_DURATION = 1000 / FRAME_RATE;

/*
 * The export uses two naming patterns: Prop=01...88, then Prop=Prop89...94.
 * Retina frames are used here so the centered mark stays crisp on large screens.
 */
const FRAME_SOURCES = Array.from({ length: FRAME_COUNT }, (_, index) => {
  const frameNumber = index + 1;
  const fileName = frameNumber <= 88
    ? `Prop=${String(frameNumber).padStart(2, "0")}`
    : `Prop=Prop${frameNumber}`;

  return `/assets/logo animation/${fileName}@2x.png`;
});

export default function LogoAnimation() {
  const [frame, setFrame] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let cancelled = false;
    let animationFrame = 0;
    let isVisible = false;
    let isPrepared = false;
    let hasStarted = false;

    const preload = (src: string) => new Promise<void>((resolve) => {
      const image = new window.Image();
      image.onload = () => {
        const decoded = image.decode?.();
        if (decoded) {
          decoded.then(resolve, resolve);
        } else {
          resolve();
        }
      };
      image.onerror = () => resolve();
      image.src = src;
    });

    const play = () => {
      if (cancelled || hasStarted) return;
      hasStarted = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        frameRef.current = FRAME_COUNT - 1;
        setFrame(FRAME_COUNT - 1);
        return;
      }

      let previousTime = 0;
      let elapsed = 0;

      const tick = (time: number) => {
        if (cancelled) return;
        if (!previousTime) previousTime = time;
        elapsed += time - previousTime;
        previousTime = time;

        if (elapsed >= FRAME_DURATION) {
          const steps = Math.floor(elapsed / FRAME_DURATION);
          elapsed %= FRAME_DURATION;

          frameRef.current = Math.min(
            FRAME_COUNT - 1,
            frameRef.current + steps,
          );

          setFrame(frameRef.current);

          // Hold the completed logo until the page is reloaded.
          if (frameRef.current === FRAME_COUNT - 1) return;
        }

        animationFrame = window.requestAnimationFrame(tick);
      };

      animationFrame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        isVisible = true;
        observer.disconnect();
        if (isPrepared) play();
      },
      { threshold: 0.35 },
    );

    observer.observe(stage);

    Promise.all(FRAME_SOURCES.map(preload)).then(() => {
      if (cancelled) return;
      isPrepared = true;
      if (isVisible) play();
    });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="brand-animation"
      aria-label="NexGenix logo animation"
      role="img"
    >
      <Image
        src={FRAME_SOURCES[frame]}
        alt=""
        width={240}
        height={240}
        className="brand-animation__image"
        unoptimized
      />
    </div>
  );
}

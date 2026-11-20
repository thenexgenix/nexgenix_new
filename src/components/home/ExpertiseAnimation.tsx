"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type LogoBlock = {
  id: string;
  label: string;
  asset: string;
  column: number;
  row: number;
  startX: number; // px sideways offset it starts the fall with
  startRotation: number; // deg
  landTilt: number; // deg when its first corner touches down (same sign as startRotation)
  wedge?: boolean; // lands on two blocks' top edges, then squeezes down between them
};

const BLOCK_GAP = 4; // px between stacked blocks (also drives the CSS grid gap)
const GRAVITY = 1500; // px/s², higher = faster falls
const TIP = 0.24; // s from first corner touching to lying flat
const WEDGE = 0.66; // s a wedging block takes to squeeze down between its neighbours
const OFFSCREEN = 60; // px above the container top a block starts from

const EASE = {
  gravity: "cubic-bezier(0.55, 0.085, 0.68, 0.53)", // accelerating, ~t²
  out: "cubic-bezier(0.2, 0.6, 0.35, 1)",
  inOut: "cubic-bezier(0.45, 0, 0.25, 1)",
  drift: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  tip: "cubic-bezier(0.3, 0.3, 0.8, 0.6)", // keeps moving at contact, no stall
};

// Array order = fall order (nothing falls in parallel)
const blocks: LogoBlock[] = [
  { id: "python", label: "Python", asset: "/assets/expertise/python-landed.svg", column: 1, row: 3, startX: -26, startRotation: -22, landTilt: -9 },
  { id: "laravel", label: "Laravel", asset: "/assets/expertise/laravel-landed.svg", column: 3, row: 3, startX: 38, startRotation: 27, landTilt: 10 },
  { id: "flutter", label: "Flutter", asset: "/assets/expertise/flutter-landed.svg", column: 2, row: 3, startX: -18, startRotation: -31, landTilt: -4, wedge: true },
  { id: "nodejs", label: "Node.js", asset: "/assets/expertise/nodejs-landed.svg", column: 1, row: 2, startX: 32, startRotation: 21, landTilt: 5 },
  { id: "django", label: "Django", asset: "/assets/expertise/django-landed.svg", column: 3, row: 2, startX: -37, startRotation: -28, landTilt: -5 },
  { id: "react", label: "React", asset: "/assets/expertise/react-landed.svg", column: 2, row: 2, startX: 28, startRotation: 24, landTilt: 4, wedge: true },
  { id: "figma", label: "Figma", asset: "/assets/expertise/figma-landed.svg", column: 1, row: 1, startX: -34, startRotation: -19, landTilt: -7 },
];

type CssVars = React.CSSProperties & Record<`--${string}`, string | number>;

/* ---------------------------------------------------------------- timeline */

type Pt = { t: number; v: number; ease?: string }; // ease = easing from this point to the next
type Track = { y: Pt[]; x: Pt[]; r: Pt[] };

/**
 * Builds the whole choreography in seconds.
 * y = vertical offset (px) from the final spot, x = horizontal offset (px), r = rotation (deg)
 */
function planTimeline(s: number, top: Record<string, number>) {
  const g = BLOCK_GAP;
  const byId = Object.fromEntries(blocks.map((b) => [b.id, b])) as Record<string, LogoBlock>;
  const tracks: Record<string, Track> = {};

  const inward = 0.17 * s + g; // python / laravel rest this far towards each other (gap ≈ 0.56 of a block)
  const seam = 0.20 * s + g / 2; // nodejs / django rest on the seams, a bit apart from each other
  const edgeY = -(s + g); // resting on top of the row below

  // free fall -> first corner touches -> tips flat
  const drop = (id: string, t0: number, landX: number, landY: number) => {
    const b = byId[id];
    const startY = -(top[id] + s + OFFSCREEN);
    const fallT = Math.sqrt((2 * (landY - startY)) / GRAVITY);
    const tC = t0 + fallT;
    const tF = tC + TIP;
    tracks[id] = {
      y: [
        { t: 0, v: startY },
        { t: t0, v: startY, ease: EASE.gravity },
        { t: tC, v: landY },
        { t: tF, v: landY },
      ],
      x: [
        { t: 0, v: landX + b.startX },
        { t: t0, v: landX + b.startX, ease: EASE.drift },
        { t: t0 + fallT * 0.75, v: landX },
      ],
      r: [
        { t: 0, v: b.startRotation },
        { t: t0, v: b.startRotation, ease: "linear" },
        { t: tC, v: b.landTilt, ease: EASE.tip },
        { t: tF, v: 0 },
      ],
    };
    return { tC, tF };
  };

  // small rigid rebound after lying flat
  const bounce = (id: string, t: number, y: number) => {
    tracks[id].y.push(
      { t, v: y, ease: EASE.out },
      { t: t + 0.12, v: y - 0.026 * s, ease: EASE.gravity },
      { t: t + 0.25, v: y, ease: EASE.out },
      { t: t + 0.33, v: y - 0.007 * s, ease: EASE.gravity },
      { t: t + 0.42, v: y },
    );
  };

  // neighbour gets pushed outward (dir = -1 left, +1 right), overshoots a hair, settles
  const shove = (id: string, t: number, from: number, dir: number) => {
    tracks[id].x.push(
      { t, v: from, ease: EASE.out },
      { t: t + 0.38, v: dir * 0.025 * s, ease: EASE.inOut },
      { t: t + 0.62, v: 0 },
    );
  };

  // python, then laravel: settle close together
  const py = drop("python", 0, inward, 0);
  bounce("python", py.tF, 0);
  const lv = drop("laravel", py.tC, -inward, 0);
  bounce("laravel", lv.tF, 0);

  // flutter: lands on both top edges, slight bounce, squeezes down between them
  const fl = drop("flutter", lv.tC, 0, edgeY);
  const flPeak = fl.tF + 0.13;
  const flFloor = flPeak + WEDGE;
  tracks.flutter.y.push(
    { t: fl.tF, v: edgeY, ease: EASE.out },
    { t: flPeak, v: edgeY - 0.03 * s, ease: EASE.gravity },
    { t: flFloor, v: 0 },
  );
  shove("python", flPeak, inward, -1);
  shove("laravel", flPeak, -inward, +1);
  bounce("flutter", flFloor, 0);

  // nodejs on the python/flutter seam, django on the flutter/laravel seam
  const nd = drop("nodejs", flFloor, seam, 0);
  bounce("nodejs", nd.tF, 0);
  const dj = drop("django", nd.tC, -seam, 0);
  bounce("django", dj.tF, 0);

  // react: lands on both, slight bounce, squeezes down between them
  const rc = drop("react", dj.tC, 0, edgeY);
  const rcPeak = rc.tF + 0.13;
  const rcFloor = rcPeak + WEDGE;
  tracks.react.y.push(
    { t: rc.tF, v: edgeY, ease: EASE.out },
    { t: rcPeak, v: edgeY - 0.03 * s, ease: EASE.gravity },
    { t: rcFloor, v: 0 },
  );
  shove("nodejs", rcPeak, seam, -1);
  shove("django", rcPeak, -seam, +1);
  bounce("react", rcFloor, 0);

  // figma falls straight onto nodejs
  const fg = drop("figma", rcFloor, 0, 0);
  bounce("figma", fg.tF, 0);

  let total = 0;
  Object.values(tracks).forEach((track) =>
    [track.y, track.x, track.r].forEach((pts) => {
      total = Math.max(total, pts[pts.length - 1].t);
    }),
  );

  return { tracks, total: total + 0.05 };
}

function toKeyframes(points: Pt[], total: number, prop: "x" | "y" | "r"): Keyframe[] {
  const pts = points.filter((p, i) => !(i < points.length - 1 && points[i + 1].t === p.t && points[i + 1].v === p.v));
  const last = pts[pts.length - 1];
  if (last.t < total) pts.push({ t: total, v: last.v });

  return pts.map((p) => {
    const frame: Keyframe = { offset: Math.min(1, p.t / total), easing: p.ease ?? "linear" };
    if (prop === "r") frame.rotate = `${p.v}deg`;
    else if (prop === "x") frame.translate = `${p.v}px 0px`;
    else frame.translate = `0px ${p.v}px`;
    return frame;
  });
}

function play(stage: HTMLElement): Animation[] {
  const grid = stage.querySelector<HTMLElement>(".expertise-animation__grid");
  if (!grid) return [];

  const parts = new Map<string, { block: HTMLElement; body: HTMLElement }>();
  stage.querySelectorAll<HTMLElement>("[data-block]").forEach((block) => {
    const body = block.querySelector<HTMLElement>(".expertise-block__body");
    if (body && block.dataset.block) parts.set(block.dataset.block, { block, body });
  });

  const first = parts.values().next().value;
  if (!first) return [];

  const s = first.block.offsetWidth;
  const top: Record<string, number> = {};
  parts.forEach(({ block }, id) => {
    top[id] = grid.offsetTop + block.offsetTop;
  });

  const { tracks, total } = planTimeline(s, top);
  const options: KeyframeAnimationOptions = { duration: total * 1000, fill: "both", easing: "linear" };
  const animations: Animation[] = [];

  Object.entries(tracks).forEach(([id, track]) => {
    const part = parts.get(id);
    if (!part) return;
    animations.push(
      part.block.animate(toKeyframes(track.y, total, "y"), options),
      part.body.animate(toKeyframes(track.x, total, "x"), options),
      part.body.animate(toKeyframes(track.r, total, "r"), options),
    );
  });

  return animations;
}

/* --------------------------------------------------------------- component */

export default function ExpertiseAnimation() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animations: Animation[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animations = play(stage);
      },
      { threshold: 0.32 },
    );

    observer.observe(stage);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="expertise-animation"
      style={{ "--block-gap": `${BLOCK_GAP}px` } as CssVars}
      aria-label="Animated technology logos falling into place"
    >
      <div className="expertise-animation__halo" />
      <div className="expertise-animation__grid">
        {blocks.map((block) => (
          <div
            key={block.id}
            data-block={block.id}
            className={`expertise-block${block.wedge ? " expertise-block--wedge" : ""}`}
            style={{ gridColumn: block.column, gridRow: block.row }}
          >
            {/* pivots on the corner that touches down first */}
            <div className="expertise-block__body" style={{ transformOrigin: block.landTilt < 0 ? "0% 100%" : "100% 100%" }}>
              <Image className="expertise-block__asset" src={block.asset} alt={`${block.label} logo`} width={197} height={197} unoptimized />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import p5 from "p5";
import P5Sketch from "./p5-sketch";
import { useScreenSize } from "/hooks/useScreenSize";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  spawnedAtMs: number;
};

const createSketch = () => (p: p5) => {
  const MIN_TTL_TO_INTERACT = 1000;
  const DOTS_LIMIT = 30;
  const DOTS_SIZE = 4;
  const DOTS_VEL = 0.4;
  const INTERACTION_DIST = 600;
  let dots: Dot[] = [];

  p.setup = () => {
    p.createCanvas(800, 800);

    // After canvas is created, resize to container
    setTimeout(() => {
      const container = (p as any).canvas?.parentElement;
      if (container) {
        p.resizeCanvas(container.offsetWidth, container.offsetHeight);
      }
    }, 0);
  };

  p.windowResized = () => {
    const container = (p as any).canvas?.parentElement;
    if (container) {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    }
  };

  p.draw = () => {
    p.background(255);
    const now = Date.now();
    if (dots.length < DOTS_LIMIT) {
      const side = p.floor(p.random(4)); // 0: top, 1: right, 2: bottom, 3: left
      let x, y, vx, vy;

      if (side === 0) {
        x = p.random(p.width);
        y = 0;
        vx = p.random(-2 * DOTS_VEL, 2 * DOTS_VEL);
        vy = p.random(DOTS_VEL, 5 * DOTS_VEL);
      } else if (side === 1) {
        x = p.width;
        y = p.random(p.height);
        vx = p.random(-5 * DOTS_VEL, -DOTS_VEL);
        vy = p.random(-2 * DOTS_VEL, 2 * DOTS_VEL);
      } else if (side === 2) {
        x = p.random(p.width);
        y = p.height;
        vx = p.random(-2 * DOTS_VEL, 2 * DOTS_VEL);
        vy = p.random(-5 * DOTS_VEL, -DOTS_VEL);
      } else {
        x = 0;
        y = p.random(p.height);
        vx = p.random(DOTS_VEL, 5 * DOTS_VEL);
        vy = p.random(-2 * DOTS_VEL, 2 * DOTS_VEL);
      }

      dots.push({
        x,
        y,
        vx,
        vy,
        size: 1.5 * DOTS_SIZE,
        spawnedAtMs: now,
      });
    }

    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      dot.x += dot.vx;
      dot.y += dot.vy;

      p.fill(180, 180, 180, 255);
      p.ellipse(dot.x, dot.y, dot.size, dot.size);

      for (let j = i + 1; j < dots.length; j++) {
        const otherDot = dots[j];

        const ttlFactor =
          (Math.min(MIN_TTL_TO_INTERACT, now - otherDot.spawnedAtMs) /
            MIN_TTL_TO_INTERACT) *
          (Math.min(MIN_TTL_TO_INTERACT, now - dot.spawnedAtMs) /
            MIN_TTL_TO_INTERACT);
        const dx = dot.x - otherDot.x;
        const dy = dot.y - otherDot.y;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = INTERACTION_DIST * INTERACTION_DIST;
        if (distSq <= maxDistSq) {
          const distQuotient = Math.sqrt(distSq) / INTERACTION_DIST;
          p.stroke(180, 180, 180, 255 * ttlFactor * (1 - distQuotient) ** 2);
          p.strokeWeight(DOTS_SIZE / 10);
          p.line(dot.x, dot.y, otherDot.x, otherDot.y);
        }
      }
    }

    for (let i = dots.length - 1; i >= 0; i--) {
      const dot = dots[i];
      const shouldRemove =
        dot.x < 0 || dot.x > p.width || dot.y < 0 || dot.y > p.height;
      if (shouldRemove) {
        dots.splice(i, 1);
      }
    }
  };
};

export default function DynamicGraphsBackground({
  className,
}: {
  className?: string;
}) {
  const { isSmallScreen } = useScreenSize();

  if (isSmallScreen) return null;

  return <P5Sketch sketch={createSketch()} className={className} />;
}

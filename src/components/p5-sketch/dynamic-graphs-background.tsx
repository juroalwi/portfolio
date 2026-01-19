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

const createSketch = (screenWidth: number, screenHeight: number) => (p: p5) => {
  const MIN_TTL_TO_INTERACT = 1000;
  const DOTS_LIMIT = 60;
  const baseArea = 1920 * 1080;
  const screenArea = screenWidth * screenHeight;
  const areaRatio = screenArea / baseArea;
  const size = Math.max(2, Math.min(6, Math.floor(6 * areaRatio)));
  const velocity = Math.max(0.2, Math.min(0.6, Math.floor(0.4 * areaRatio)));
  const interactionDistance = Math.max(
    400,
    Math.min(800, Math.floor(600 * Math.sqrt(areaRatio)))
  );
  let dots: Dot[] = [];

  p.setup = () => {
    p.createCanvas(800, 800);

    // After canvas is created, resize to container
    setTimeout(() => {
      const container = (p as any).canvas?.parentElement;
      console.log("container", container);
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
    if (dots.length < DOTS_LIMIT) {
      const side = p.floor(p.random(4)); // 0: top, 1: right, 2: bottom, 3: left
      let x, y, vx, vy;

      if (side === 0) {
        x = p.random(p.width);
        y = 0;
        vx = p.random(-2 * velocity, 2 * velocity);
        vy = p.random(velocity, 5 * velocity);
      } else if (side === 1) {
        x = p.width;
        y = p.random(p.height);
        vx = p.random(-5 * velocity, -velocity);
        vy = p.random(-2 * velocity, 2 * velocity);
      } else if (side === 2) {
        x = p.random(p.width);
        y = p.height;
        vx = p.random(-2 * velocity, 2 * velocity);
        vy = p.random(-5 * velocity, -velocity);
      } else {
        x = 0;
        y = p.random(p.height);
        vx = p.random(velocity, 5 * velocity);
        vy = p.random(-2 * velocity, 2 * velocity);
      }

      dots.push({
        x,
        y,
        vx,
        vy,
        size: 1.5 * size,
        spawnedAtMs: Date.now(),
      });
    }

    for (const dot of dots) {
      dot.x += dot.vx;
      dot.y += dot.vy;

      p.fill(200, 200, 200, 255);
      p.ellipse(dot.x, dot.y, dot.size, dot.size);

      for (const otherDot of dots) {
        if (dot === otherDot) continue;

        const ttlFactor =
          (Math.min(MIN_TTL_TO_INTERACT, Date.now() - otherDot.spawnedAtMs) /
            MIN_TTL_TO_INTERACT) *
          (Math.min(MIN_TTL_TO_INTERACT, Date.now() - dot.spawnedAtMs) /
            MIN_TTL_TO_INTERACT);
        const distanceQuotient =
          p.dist(dot.x, dot.y, otherDot.x, otherDot.y) / interactionDistance;
        if (distanceQuotient <= 1) {
          p.stroke(
            200,
            200,
            200,
            255 * ttlFactor * (1 - distanceQuotient) ** 2
          );
          p.strokeWeight(size / 15);
          p.line(dot.x, dot.y, otherDot.x, otherDot.y);
        }
      }
    }

    dots = dots.filter((dot) => {
      const shouldRemove =
        dot.x < -dot.size - interactionDistance ||
        dot.x > dot.size + p.width + interactionDistance ||
        dot.y < -dot.size - interactionDistance ||
        dot.y > dot.size + p.height + interactionDistance;

      return !shouldRemove;
    });
  };
};

export default function DynamicGraphsBackground({
  className,
}: {
  className?: string;
}) {
  const { screenWidth, screenHeight } = useScreenSize();
  const sketch = createSketch(screenWidth, screenHeight);

  return <P5Sketch sketch={sketch} className={className} />;
}

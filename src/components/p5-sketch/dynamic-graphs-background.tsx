import p5 from "p5";
import P5Sketch from "./p5-sketch";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const sketch = (p: p5) => {
  const DOTS_LIMIT = 40;
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
        vx = p.random(-1, 1);
        vy = p.random(0.5, 2);
      } else if (side === 1) {
        x = p.width;
        y = p.random(p.height);
        vx = p.random(-2, -0.5);
        vy = p.random(-1, 1);
      } else if (side === 2) {
        x = p.random(p.width);
        y = p.height;
        vx = p.random(-1, 1);
        vy = p.random(-2, -0.5);
      } else {
        x = 0;
        y = p.random(p.height);
        vx = p.random(0.5, 2);
        vy = p.random(-1, 1);
      }

      dots.push({
        x,
        y,
        vx,
        vy,
        size: p.random(5, 10),
      });
    }

    for (const dot of dots) {
      dot.x += dot.vx;
      dot.y += dot.vy;

      p.fill(180, 180, 180, 200);
      p.noStroke();
      p.ellipse(dot.x, dot.y, dot.size, dot.size);

      for (const otherDot of dots) {
        if (dot === otherDot) continue;

        const distance = p.dist(dot.x, dot.y, otherDot.x, otherDot.y);
        const quotient = distance / 200;
        if (quotient <= 1) {
          p.stroke(180, 180, 180, 200 * (1 - quotient) ** 2);
          p.line(dot.x, dot.y, otherDot.x, otherDot.y);
        }
      }
    }

    dots = dots.filter((dot) => {
      const shouldRemove =
        dot.x < -dot.size ||
        dot.x > p.width + dot.size ||
        dot.y < -dot.size ||
        dot.y > p.height + dot.size;

      return !shouldRemove;
    });
    console.log("dots amount", dots.length);
  };
};

export default function DynamicGraphsBackground({
  className,
}: {
  className?: string;
}) {
  return <P5Sketch sketch={sketch} className={className} />;
}

import React from "react";
import p5 from "p5";
import P5Sketch from "./p5-sketch";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const exampleSketch = (p: p5) => {
  let dots: Dot[] = [];

  p.setup = () => {
    // Canvas will be sized by CSS (100% width/height)
    // Use a default size, CSS will scale it
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

    if (p.random() < 0.05) {
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

      p.fill(80, 80, 80, 200);
      p.noStroke();
      p.ellipse(dot.x, dot.y, dot.size, dot.size);

      for (const otherDot of dots) {
        if (dot === otherDot) continue;

        const distance = p.dist(dot.x, dot.y, otherDot.x, otherDot.y);
        const quotient = distance / 200;
        if (quotient <= 1) {
          p.stroke(120, 120, 120, 200 * (1 - quotient) ** 2);
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
  };
};

export default function LocalGraphsSketch({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="p5-sketch-container">
      <P5Sketch sketch={exampleSketch} className={className} />
    </div>
  );
}

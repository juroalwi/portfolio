import { useEffect, useRef } from "react";
import p5 from "p5";

interface P5SketchProps {
  sketch: (p: p5) => void;
  className?: string;
}

export default function P5Sketch({ sketch, className }: P5SketchProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (containerRef.current && !p5Ref.current) {
      p5Ref.current = new p5(sketch, containerRef.current);
    }

    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove();
        p5Ref.current = null;
      }
    };
  }, [sketch]);

  return <div ref={containerRef} className={className}></div>;
}

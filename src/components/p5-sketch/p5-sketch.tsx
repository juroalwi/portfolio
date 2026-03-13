import p5 from "p5";
import { useEffect, useRef } from "react";

interface P5SketchProps {
  sketch: (p: p5) => void;
  className?: string;
}

export const P5Sketch = ({ sketch, className }: P5SketchProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const p5Ref = new p5(sketch, containerRef.current);

    return () => {
      if (p5Ref) {
        p5Ref.remove();
      }
    };
  }, [sketch]);

  return <div ref={containerRef} className={className}></div>;
};

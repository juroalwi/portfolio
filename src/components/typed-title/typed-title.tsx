import { useEffect, useRef, useState } from "react";
import "./typed-title.css";

interface TypedTitleProps {
  children: string;
  typingSpeedMs?: number;
}

export default function TypedTitle({
  children: text,
  typingSpeedMs = 50,
}: TypedTitleProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping && !isComplete) {
            setIsTyping(true);
            setIsComplete(false);
            setDisplayedText("");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isTyping, isComplete]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeedMs);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      setIsComplete(true);
    }
  }, [displayedText, isTyping, isComplete, text, typingSpeedMs]);

  return (
    <h1
      ref={containerRef}
      className="mb-8 font-[Bebas_Neue] text-5xl uppercase tracking-wider font-bold"
    >
      {displayedText}
      {(isTyping || isComplete) && (
        <span className={`inline-block ml-0.5 ${isComplete ? "blink" : ""}`}>
          |
        </span>
      )}
    </h1>
  );
}

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TypedTitleProps {
  title: string;
  subtitle?: string;
  typingSpeedMs?: number;
  className?: string;
}

export const TypedTitle = ({
  title,
  subtitle = "",
  typingSpeedMs = 50,
  className,
}: TypedTitleProps) => {
  const [isIdle, setIsIdle] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isIdle) {
            setIsIdle(false);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isIdle]);

  useEffect(() => {
    if (isIdle || isComplete) return;

    if (displayedTitle.length < title.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle(title.slice(0, displayedTitle.length + 1));
      }, typingSpeedMs);
      return () => clearTimeout(timer);
    }

    if (displayedSubtitle.length < subtitle.length) {
      const timer = setTimeout(() => {
        setDisplayedSubtitle(subtitle.slice(0, displayedSubtitle.length + 1));
      }, typingSpeedMs);
      return () => clearTimeout(timer);
    }

    setIsComplete(true);
  }, [
    displayedTitle,
    displayedSubtitle,
    title,
    subtitle,
    isComplete,
    isIdle,
    typingSpeedMs,
  ]);

  return (
    <div
      className={twMerge(
        "mb-8 font-[Bebas_Neue] font-bold tracking-wider uppercase lg:mb-16",
        className,
      )}
    >
      <h2 ref={containerRef} className="text-2xl lg:text-5xl">
        {displayedTitle}
        {displayedSubtitle.length === 0 && (
          <span
            className={twMerge(
              "text-primary ml-0.5",
              isComplete && "animate-blink",
            )}
          >
            |
          </span>
        )}
      </h2>

      {subtitle.length > 0 && (
        <h3 className="text-lg lg:text-3xl">
          {displayedSubtitle.length > 0 ? displayedSubtitle : "\u00A0"}
          {displayedSubtitle.length > 0 && (
            <span
              className={twMerge(
                "text-primary ml-0.5",
                isComplete && "animate-blink",
              )}
            >
              |
            </span>
          )}
        </h3>
      )}
    </div>
  );
};

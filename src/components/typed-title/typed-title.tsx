import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TypedTitleProps {
  children: string;
  typingSpeedMs?: number;
  small?: boolean;
  disabled?: boolean;
  caretHidden?: boolean;
  className?: string;
  onFinishTyping?: () => void;
}

export const TypedTitle = ({
  children: text,
  typingSpeedMs = 50,
  small,
  disabled,
  caretHidden,
  className,
  onFinishTyping,
}: TypedTitleProps) => {
  const [displayedText, setDisplayedText] = useState("\u00A0");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (disabled) return;

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
      },
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
  }, [disabled, isTyping, isComplete]);

  useEffect(() => {
    if (disabled || !isTyping) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeedMs);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      setIsComplete(true);
      onFinishTyping?.();
    }
  }, [displayedText, isTyping, isComplete, text, typingSpeedMs]);

  return (
    <h1
      ref={containerRef}
      className={twMerge(
        "mb-8 font-[Bebas_Neue] font-bold tracking-wider uppercase lg:mb-16",
        small ? "text-xl lg:text-3xl" : "text-4xl lg:text-5xl",
        className,
      )}
    >
      {displayedText}
      {(isTyping || isComplete) && !caretHidden && (
        <span
          className={twMerge(
            "text-primary ml-0.5",
            isComplete && "animate-blink",
          )}
        >
          |
        </span>
      )}
    </h1>
  );
};

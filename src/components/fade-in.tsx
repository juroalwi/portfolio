import { ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const FadeIn = ({
  children,
  delay = 0,
  duration = 500,
  from = "bottom",
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  from?: "bottom" | "left" | "top" | "right";
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  let translateFrom: string;
  let translateTo: string;

  if (from === "left") {
    translateFrom = "translate-x-[-32px]";
    translateTo = "translate-x-[0px]";
  } else if (from === "top") {
    translateFrom = "translate-y-[-32px]";
    translateTo = "translate-y-[0px]";
  } else if (from === "right") {
    translateFrom = "translate-x-[32px]";
    translateTo = "translate-x-[0px]";
  } else {
    translateFrom = "translate-y-[32px]";
    translateTo = "translate-y-[0px]";
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={twMerge(
        isVisible ? "opacity-100" : "opacity-0",
        isVisible ? translateTo : translateFrom,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {" "}
      {children}
    </div>
  );
};

import { ReactNode, useEffect, useRef, useState } from "react";

export const FadeIn = ({
  children,
  delay = 0,
  duration = 600,
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

  useEffect(() => {
    const currentRef = cardRef.current;
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
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate(0,0)";

    switch (from) {
      case "bottom":
        return "translateY(32px)";
      case "top":
        return "translateY(-32px)";
      case "left":
        return "translateX(-32px)";
      case "right":
        return "translateX(32px)";
      default:
        return "translateY(32px)";
    }
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

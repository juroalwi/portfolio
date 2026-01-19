import { ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconProps } from "/types";

type Props = {
  sections: {
    name: string;
    component: () => ReactNode;
    icon: (props: IconProps) => ReactNode;
  }[];
  smallScreenBreakpoint?: number;
};

export const SideNavigation = ({
  sections,
  smallScreenBreakpoint = 1024,
}: Props) => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    () =>
      typeof window !== "undefined" && window.innerWidth < smallScreenBreakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < smallScreenBreakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 10 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (e.deltaY < -10 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 300);
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, isSmallScreen, sections.length]);

  useEffect(() => {
    if (isSmallScreen) return;

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentSection * window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [currentSection, isSmallScreen]);

  const handleSidebarClick = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <div className="flex">
      <div
        className={
          isSmallScreen
            ? "hidden"
            : "flex flex-col gap-16 p-4 self-center max-h-[1000px]"
        }
      >
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <button
              className="p-4 group h-full outline-none cursor-pointer"
              key={`section-button-${index}`}
              onClick={() => handleSidebarClick(index)}
              aria-label={section.name}
            >
              <Icon
                className={twMerge(
                  "w-8 h-8 transiton-all duration-200",
                  currentSection === index
                    ? "stroke-primary scale-150 translate-x-2"
                    : "stroke-dark group-hover:scale-125"
                )}
              />
            </button>
          );
        })}
      </div>

      <div
        ref={(el) => {
          containerRef.current = el;
        }}
        className={twMerge(
          "w-full no-scrollbar",
          isSmallScreen
            ? "overflow-y-auto h-auto  space-y-20"
            : "h-screen overflow-y-hidden space-y-0"
        )}
      >
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <div
              key={`section-${index}`}
              className={twMerge(
                "flex items-center justify-center",
                isSmallScreen ? "h-auto p-4" : "h-screen p-10"
              )}
            >
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
};

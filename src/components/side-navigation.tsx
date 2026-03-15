import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { IconProps } from "types/";

type Props = {
  sections: {
    Icon: (props: IconProps) => ReactNode;
  }[];
  currentSection: number;
  setCurrentSection: (cb: ((prev: number) => number) | number) => void;
  disabled: boolean;
};

export const SideNavigation = ({
  sections,
  currentSection,
  setCurrentSection,
  disabled,
}: Props) => {
  const isScrolling = useRef(false);

  useEffect(() => {
    if (disabled) return;

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
  }, [currentSection, disabled, sections.length]);

  const handleIconClick = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <div
      className={
        disabled
          ? "hidden"
          : "flex max-h-[1000px] flex-col gap-16 self-center p-4"
      }
    >
      {sections.map((section, index) => {
        const { Icon } = section;
        return (
          <button
            className="group h-full cursor-pointer p-4 outline-none"
            key={`section-button-${index}`}
            onClick={() => handleIconClick(index)}
          >
            <Icon
              className={twMerge(
                "transiton-all h-8 w-8 duration-200",
                currentSection === index
                  ? "stroke-primary translate-x-2 scale-150"
                  : "stroke-dark group-hover:scale-125",
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

import { Skills } from "/components/skills";
import { About } from "components/about";
import { Contact } from "/components/contact";
import { Projects } from "/components/projects";
import { DynamicGraphsBackground } from "/components/p5-sketch/dynamic-graphs-background";
import { SideNavigation } from "/components/side-navigation";
import { WrenchIcon } from "/assets/icons/WrenchIcon";
import { HouseIcon } from "/assets/icons/HouseIcon";
import { PortfolioIcon } from "/assets/icons/PortfolioIcon";
import { SendIcon } from "/assets/icons/SendIcon";
import { useEffect, useRef, useState } from "react";
import { useScreenSize } from "./hooks/useScreenSize";
import { twMerge } from "tailwind-merge";

const sections = [
  { name: "About", Component: About, Icon: HouseIcon },
  { name: "Projects", Component: Projects, Icon: PortfolioIcon },
  { name: "Skills", Component: Skills, Icon: WrenchIcon },
  { name: "Contact", Component: Contact, Icon: SendIcon },
];

export const App = () => {
  const { screenHeight, isSmallScreen } = useScreenSize();
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isRegularScroll = isSmallScreen || screenHeight < 600;

  useEffect(() => {
    if (isRegularScroll) return;

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentSection * screenHeight,
        behavior: "smooth",
      });
    }
  }, [currentSection, isRegularScroll, screenHeight]);

  return (
    <>
      <DynamicGraphsBackground disabled={isSmallScreen} />

      <div className="fixed inset-0 backdrop-blur-[0.0625rem]" />

      <div
        className={twMerge(
          "relative mx-auto flex w-full max-w-150 min-w-70 overflow-x-hidden lg:max-w-500",
        )}
      >
        <SideNavigation
          sections={sections.map((s) => ({ Icon: s.Icon }))}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          disabled={isRegularScroll}
        />

        <div
          ref={(el) => {
            containerRef.current = el;
          }}
          className={twMerge(
            "no-scrollbar w-full",
            isRegularScroll ? "space-y-10 p-6" : "h-screen overflow-y-hidden",
          )}
        >
          {sections.map(({ Component }, index) => (
            <div
              key={`section-${index}`}
              className={
                isRegularScroll
                  ? ""
                  : "flex h-full items-center justify-center p-10"
              }
            >
              <Component />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

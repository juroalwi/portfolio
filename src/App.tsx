import { useEffect, useRef, useState } from "react";
import Skills from "/components/skills";
import About from "components/about";
import Contact from "/components/contact";
import Projects from "/components/projects";
import DynamicGraphsBackground from "/components/p5-sketch/dynamic-graphs-background";
import { WrenchIcon } from "./assets/icons/WrenchIcon";
import { HouseIcon } from "./assets/icons/HouseIcon";
import { PortfolioIcon } from "./assets/icons/PortfolioIcon";
import { SendIcon } from "./assets/icons/SendIcon";

const sections = [
  { id: "about", name: "About", component: About, icon: HouseIcon },
  {
    id: "projects",
    name: "Projects",
    component: Projects,
    icon: PortfolioIcon,
  },
  { id: "skills", name: "Skills", component: Skills, icon: WrenchIcon },
  { id: "contact", name: "Contact", component: Contact, icon: SendIcon },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      e.preventDefault();

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
  }, [currentSection]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentSection * window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [currentSection]);

  const handleSidebarClick = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <>
      <DynamicGraphsBackground className="fixed inset-0" />

      <div className="fixed inset-0 backdrop-blur-[1px]"></div>

      <div className="flex relative z-1 h-screen">
        <div className="flex flex-col h-[60%] p-4 self-center max-h-[1000px]">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                className="p-4 group h-full outline-none"
                key={section.id}
                onClick={() => handleSidebarClick(index)}
                aria-label={section.name}
              >
                <Icon
                  className={`w-8 h-8 transiton-all duration-200 ${
                    currentSection === index
                      ? "stroke-primary scale-150 translate-x-2"
                      : "stroke-dark group-hover:stroke-primary/50 group-hover:scale-110"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div
          ref={(el) => {
            containerRef.current = el;
          }}
          className="h-screen overflow-y-hidden no-scrollbar w-full"
        >
          {sections.map((section, index) => {
            const Component = section.component;
            return (
              <div
                key={section.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="h-screen flex items-center justify-center"
              >
                <Component />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

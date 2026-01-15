import { useEffect, useRef, useState } from "react";
import Skills from "/components/skills";
import About from "components/about";
import Contact from "/components/contact";
import Projects from "/components/projects";
import LocalGraphsSketch from "components/p5-sketch/local-graphs-sketch";

const sections = [
  { id: "about", name: "About", component: About },
  { id: "projects", name: "Projects", component: Projects },
  { id: "skills", name: "Skills", component: Skills },
  { id: "contact", name: "Contact", component: Contact },
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
      <LocalGraphsSketch className="fixed inset-0" />

      <div className="fixed inset-0 backdrop-blur-[1px]"></div>

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-1 flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => handleSidebarClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSection === index
                ? "bg-(--primary) scale-125"
                : "bg-(--dark-light) hover:bg-(--primary)/50"
            }`}
            aria-label={section.name}
          />
        ))}
      </div>

      <div
        ref={(el) => {
          containerRef.current = el;
        }}
        className="w-[55%] max-w-[1000px] h-screen overflow-y-hidden z-1 no-scrollbar"
      >
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="h-screen w-full flex items-center justify-center px-8 snap-start"
            >
              <Component />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

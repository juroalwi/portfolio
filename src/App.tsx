import Skills from "components/skills/skills";
import About from "components/about";
import Contact from "components/contact/contact";
import Projects from "components/projects/projects";
import LocalGraphsSketch from "components/p5-sketch/local-graphs-sketch";

function App() {
  return (
    <>
      <LocalGraphsSketch className="fixed inset-0" />
      <div className="fixed inset-0 backdrop-blur-[1px]"></div>
      <div className="w-[55%] m-4 flex flex-col items-center z-1">
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;

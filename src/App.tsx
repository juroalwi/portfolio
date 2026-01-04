import "./App.scss";
import Skills from "components/skills/skills";
import About from "./components/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import LocalGraphsSketch from "components/p5-sketch/local-graphs-sketch";

function App() {
  return (
    <>
      <LocalGraphsSketch className="fixed inset-0 z-[-1]" />
      <div className="m-20 w-[55%] d-flex flex-column items-center bg-white/80">
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;

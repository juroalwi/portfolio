import Skills from "components/skills/skills";
import React from "react";
import "./App.scss";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="app d-flex flex-column align-items-stretch align-items-center">
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;

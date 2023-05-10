import React from "react";
import "./App.scss";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="app w-75 d-flex flex-column align-items-center">
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;

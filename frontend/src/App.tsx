import IntroPage from "./components/IntroPage";
import React from "react";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="size-full">
      <IntroPage></IntroPage>
      <About></About>
      <Projects></Projects>
      <Contact />
    </div>
  );
}

export default App;

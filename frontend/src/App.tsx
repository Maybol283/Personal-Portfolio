import IntroPage from "./components/IntroPage";
import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ScrollProvider } from "./components/ScrollContext";

function App() {
  return (
    <ScrollProvider>
      <div className="size-full">
        <IntroPage />
        <About />
        <Projects />
        <Contact />
      </div>
    </ScrollProvider>
  );
}

export default App;

import IntroPage from "./components/IntroPage";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="size-full bg-palette-4">
      <IntroPage></IntroPage>
      <About></About>
      <TechStack></TechStack>
    </div>
  );
}

export default App;

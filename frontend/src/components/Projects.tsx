import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Projects() {
  const props = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-100%)" },
    loop: true,
    config: { duration: 20000 },
  });

  const items = [1, 2, 3, 4]; // List of items
  const duplicatedItems = [...items, ...items]; // Triple the items for a smoother loop

  return (
    <div className="size-full text-center overflow-hidden">
      <h1 className="title-text">Projects</h1>
      <animated.div
        style={props}
        className="relative flex h-1/2 whitespace-nowrap text-center pt-5"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-none w-96 bg-white text-palette-2 border-2"
          >
            <p>{item}</p>
          </div>
        ))}
      </animated.div>
    </div>
  );
}
export default Projects;

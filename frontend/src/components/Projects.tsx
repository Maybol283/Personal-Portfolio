import React from "react";
import { useSpring, animated } from "@react-spring/web";

function Projects() {
  const props = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-300%)" },
    loop: true,
    config: { duration: 50000 },
  });

  const items = [
    {
      src: "src/assets/Meo-Romano.PNG",
      alt: "Meo Romano",
    },
    {
      src: "src/assets/Markdown-Previewer.png",
      alt: "Markdown Maker",
    },
    {
      src: "src/assets/Quote-Generator.png",
      alt: "Quote Generator",
    },
  ]; // List of items
  const duplicatedItems = [...items, ...items, ...items]; // Triple the items for a smoother loop

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
            className="flex-none w-3/6  bg-white text-palette-2 border-2 "
          >
            <img
              className="object-cover size-full"
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </animated.div>
    </div>
  );
}
export default Projects;

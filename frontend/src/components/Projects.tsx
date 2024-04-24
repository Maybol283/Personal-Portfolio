import React from "react";
import { useEffect } from "react";
import { useSpring, animated, useSpringRef } from "@react-spring/web";

function Projects() {
  const api = useSpringRef(); // Reference to store the animation

  // Create the spring animation
  const props = useSpring({
    ref: api, // Attach the ref to the animation
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-300%)" },
    loop: true,
    config: { duration: 50000 },
  });

  useEffect(() => {
    api.start();
  }, [api]);

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
  ];

  const duplicatedItems = [...items, ...items, ...items]; // Triple the items for a smoother loop

  // Function to pause the animation
  const handleMouseEnter = () => {
    console.log("Mouse Enter");
    api.pause();
  };

  // Function to resume the animation
  const handleMouseLeave = () => {
    console.log("Mouse Exit");
    api.resume();
  };

  return (
    <div className="size-full text-center overflow-hidden">
      <h1 className="title-text py-20">Projects</h1>
      <animated.div
        style={props}
        onMouseEnter={handleMouseEnter} // Attach mouse enter event
        onMouseLeave={handleMouseLeave} // Attach mouse leave event
        className=" relative flex h-1/2 whitespace-nowrap text-center"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="hover:color-palette-1 hover:border-5 flex-none w-2/3"
          >
            <img
              className="hover:blur-sm object-cover size-full border-2"
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

import React from "react";
import headshot from "../assets/HeadshotNoBG.png";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import AnimatedChevron from "../components/SmallComponents/AnimatedChevron";

export default function IntroPage() {
  const [textChange, textChangeApi] = useSpring(() => ({
    from: { opacity: 0, y: -5, x: -5 },
    to: { opacity: 1, y: 0, x: 0 },
    config: { duration: 1000, mass: 5, tension: 2000, friction: 200 },
    delay: 500,
  }));

  const [bubbleEffect, bubbleApi] = useSpring(() => ({
    borderTopLeftRadius: "350px",
    borderTopRightRadius: "350px",
    borderBottomLeftRadius: "350px",
    borderBottomRightRadius: "350px",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const changeBorderRadius = () => {
      bubbleApi.start({
        borderTopLeftRadius: `${Math.round(Math.random() * 200 + 350)}px`,
        borderTopRightRadius: `${Math.round(Math.random() * 200 + 350)}px`,
        borderBottomLeftRadius: `${Math.round(Math.random() * 200 + 350)}px`,
        borderBottomRightRadius: `${Math.round(Math.random() * 200 + 350)}px`,
      });
    };

    changeBorderRadius(); // Initial change
    const interval = setInterval(changeBorderRadius, 1000); // Change every 1000ms (1s)
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [bubbleApi]);

  return (
    <div className="pt-20  flex flex-col justify-center items-center font-bold size-full">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center">
        <div className="">
          <animated.div
            style={bubbleEffect}
            className="size-48 sm:size-56 md:size-80 lg:size-96 overflow-hidden"
          >
            <img src={headshot} className="bg-palette-1 size-full object-fit" />
          </animated.div>
        </div>
        <div className="text-center overflow-hidden pb-1">
          <animated.h1 style={textChange} className="subtitle-text">
            Hi I'm <span className="italic text-palette-1">George</span>
          </animated.h1>
          <p className="title-text">Software Engineer</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-items-center sm:mt-10">
        <AnimatedChevron />
      </div>
    </div>
  );
}

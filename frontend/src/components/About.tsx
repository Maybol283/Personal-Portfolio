import React from "react";
import headshot from "../assets/HeadshotNoBG.png";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

export default function About() {
  const [styles, api] = useSpring(() => ({
    borderTopLeftRadius: "350px",
    borderTopRightRadius: "350px",
    borderBottomLeftRadius: "350px",
    borderBottomRightRadius: "350px",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const changeBorderRadius = () => {
      api.start({
        borderTopLeftRadius: `${Math.round(Math.random() * 200 + 350)}px`,
        borderTopRightRadius: `${Math.round(Math.random() * 200 + 350)}px`,
        borderBottomLeftRadius: `${Math.round(Math.random() * 200 + 350)}px`,
        borderBottomRightRadius: `${Math.round(Math.random() * 200 + 350)}px`,
      });
    };

    changeBorderRadius(); // Initial change

    const interval = setInterval(changeBorderRadius, 1000); // Change every 1000ms (1s)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [api]);

  return (
    <div className="text-right size-full  bg-palette-4 ">
      <div className="py-5 px-10 grid grid-rows-1 sm:grid-cols-2 items-center justify-items-center text font-normal">
        <div className="custom-border overflow-hidden border-2 border-palette-4">
          <animated.div
            style={styles}
            className="counter-rotate size-36 md:size-48 lg:size-80  overflow-hidden border-2 border-palette-4 flex items-center justify-center"
          >
            <img src={headshot} className="bg-palette-2 size-full object-fit" />
          </animated.div>
        </div>
        <div className="my-5 text-center">
          <h1 className="pt-10 sm:pt-5 sm:py-20 subtitle-text  font-bold">
            About
          </h1>
          <p>
            I was born and raised Manchester, UK. Whether it's football, gaming
            or going out for a few drinks I'm always up for a bit of excitement
            and adventure
          </p>
          <br />
          <p>
            I am a software engineer with a passion for web development. I love
            throwing myself into every project and I'm always looking for
            something new to learn.
          </p>
        </div>
      </div>
    </div>
  );
}

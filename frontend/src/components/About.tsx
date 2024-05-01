import React from "react";
import { useSpring, a, useInView } from "@react-spring/web";
import { useScrollContext } from "./ScrollContext";
export default function About() {
  const { about } = useScrollContext();

  const [ref, upFade] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(100px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      onRest: () => {
        setTimeout(() => {
          leftFadeApi.resume();
        }, 250);
      },
    }),
    {
      rootMargin: "-40% 0%",
      amount: "any",
      once: true,
    }
  );

  const [leftFade, leftFadeApi] = useSpring(() => ({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    onRest: () => {
      setTimeout(() => {
        rightFadeApi.resume();
      }, 250);
    },
    pause: true,
  }));

  const [rightFade, rightFadeApi] = useSpring(() => ({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    pause: true,
  }));

  return (
    <div className="text-right size-full md:my-20" id="about" ref={about}>
      <div className="py-5 px-10 grid grid-cols-1 justify-items-center text font-normal">
        <div className="my-5 text-center sm:w-64 md:w-80">
          <a.h1
            style={upFade}
            className="sm:pt-5 sm:py-10 subtitle-text  font-bold"
          >
            About
          </a.h1>
          <a.p style={leftFade} ref={ref}>
            I was born and raised Manchester, UK. Whether it's football, gaming
            or going out for a few drinks I'm always up for a bit of excitement
            and adventure
          </a.p>
          <br />
          <a.p style={rightFade}>
            On top of all this I am software engineer with a passion for web
            development. I love throwing myself into every project and I'm
            always looking for something new to learn.
          </a.p>
        </div>
      </div>
    </div>
  );
}
